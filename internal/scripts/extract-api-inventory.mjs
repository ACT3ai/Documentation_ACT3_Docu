#!/usr/bin/env node
/**
 * Extracts the ACT3 app-server REST surface into internal/src/data/api-inventory.json,
 * which the /apis page renders.
 *
 * WHAT THIS FILE MUST NEVER EMIT
 * ------------------------------
 * The JSON is imported by the page, so it ships inside the browser bundle: anything left
 * in it is published, whether or not the page renders it. Hiding a field in the React
 * component is NOT a redaction. So the redaction happens here, at the source:
 *
 *   - no source file or controller names
 *   - no repository name or commit hash
 *   - no privileged routes (see WITHHELD_AUTH and WITHHELD_CATEGORIES)
 *
 * Withheld routes are reduced to a single count so the page can be honest that the index
 * is partial without mapping the administrative surface.
 *
 * The server only mounts Swagger in development, so there is no OpenAPI document to fetch.
 * This walks the NestJS controllers instead and reads the decorators: @Controller (base
 * path), @ApiTags (group), @Get/@Post/... (route), @ApiOperation (summary), @UseGuards.
 *
 * Usage:
 *   node internal/scripts/extract-api-inventory.mjs /path/to/app-server-checkout
 */
import {readFileSync, writeFileSync, mkdirSync, readdirSync, statSync} from 'node:fs';
import {dirname, join, relative, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const SITE_ROOT = resolve(HERE, '..', '..');
const SERVER_ROOT = resolve(process.argv[2] || join(SITE_ROOT, '..', 'aitaskassembly-appsrv'));
const SRC_ROOT = join(SERVER_ROOT, 'src');
const OUT_FILE = join(SITE_ROOT, 'internal', 'src', 'data', 'api-inventory.json');

const HTTP_METHODS = ['Get', 'Post', 'Put', 'Patch', 'Delete', 'Head', 'Options', 'All'];

/** Human labels for the guards the server actually uses. */
const GUARD_LABELS = {
  JwtAuthGuard: 'Session JWT',
  OptionalJwtAuthGuard: 'Session JWT (optional)',
  AdminAuthGuard: 'Admin only',
  ApiTokenAuthGuard: 'API key',
  ApiKeyAuthGuard: 'Internal key',
  TokenAuthGuard: 'Service token',
  McpAuthGuard: 'MCP token',
  LocalAuthGuard: 'Credentials',
  DisableEndpointGuard: 'Disabled',
};

/** A few controllers carry no @ApiTags, or carry a path as their tag. Name them properly. */
const TAG_LABELS = {
  'app.controller.ts': 'Health',
  '/permissions': 'Permissions',
  '/proxy': 'Proxy',
  '/project/favourite': 'Favourite Projects',
  '/story-arc-wizard': 'Story Arc Wizard',
  '/api/GlobalVoice': 'Global Voices',
};

function labelFor(tag) {
  if (TAG_LABELS[tag]) return TAG_LABELS[tag];
  return tag.replace(/\.controller\.ts$/, '').replace(/^\/+/, '');
}

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      if (entry === 'node_modules' || entry === 'dist' || entry === '.git') continue;
      walk(full, out);
    } else if (entry.endsWith('.controller.ts')) {
      out.push(full);
    }
  }
  return out;
}

/** Joins a controller base path and a route path into one clean URL path. */
function joinPath(base, route) {
  const parts = `${base || ''}/${route || ''}`
    .split('/')
    .filter((segment) => segment.length > 0);
  return `/${parts.join('/')}`;
}

function guardLabels(names) {
  const labels = names
    .map((name) => GUARD_LABELS[name] || name.replace(/Guard$/, ''))
    .filter((label, index, all) => all.indexOf(label) === index);
  return labels;
}

/** Guard class names in a decorator block. \b keeps `@UseGuards(` itself out of the match. */
function guardsIn(block) {
  return block.match(/\b[A-Za-z0-9_]+Guard\b/g) || [];
}

/**
 * Reads one method's decorator block. Decorator order is arbitrary in Nest: the route
 * decorator can sit above or below @ApiOperation/@UseGuards, so the whole block is read
 * at once rather than assuming what precedes what.
 */
function parseMethodBlock(block) {
  const routeMatch = block.match(
    new RegExp(`@(${HTTP_METHODS.join('|')})\\(\\s*(?:['"\`]([^'"\`]*)['"\`])?`),
  );
  if (!routeMatch) return null;

  const summaryMatch = block.match(/summary:\s*(['"`])([\s\S]*?)\1/);
  return {
    method: routeMatch[1].toUpperCase(),
    route: routeMatch[2] ?? '',
    summary: summaryMatch ? summaryMatch[2].replace(/\s+/g, ' ').trim() : null,
    guards: guardsIn(block),
    excluded: /@ApiExcludeEndpoint\(/.test(block),
  };
}

function parseController(file) {
  const source = readFileSync(file, 'utf8');
  const lines = source.split('\n');
  const moduleFile = relative(SRC_ROOT, file);

  let tag = null;
  let basePath = null;
  let classGuards = [];
  let classHeaderAuth = null;
  let seenClass = false;

  // Class-level decorators sit above `export class ...`.
  const classLine = lines.findIndex((line) => /^\s*export class\s/.test(line));
  for (let i = 0; i < (classLine === -1 ? lines.length : classLine); i += 1) {
    const line = lines[i];
    const tagMatch = line.match(/@ApiTags\(\s*['"`]([^'"`]+)['"`]/);
    if (tagMatch) tag = tagMatch[1];

    const controllerMatch = line.match(
      /@Controller\(\s*(?:['"`]([^'"`]*)['"`]|\{[^}]*path:\s*['"`]([^'"`]*)['"`])?/,
    );
    if (controllerMatch) {
      basePath = controllerMatch[1] ?? controllerMatch[2] ?? '';
      seenClass = true;
    }
    if (/@UseGuards\(/.test(line)) {
      classGuards.push(...guardsIn(lines.slice(i, i + 4).join(' ')));
    }
    if (/@ApiHeader\(/.test(line) && /x-api-key/.test(lines.slice(i, i + 6).join(' '))) {
      classHeaderAuth = 'API key';
    }
  }
  if (!seenClass) return null;

  const endpoints = [];
  // Class members are at exactly two spaces of indent in this (prettier-formatted) repo;
  // a member line that is not a decorator ends the decorator block above it.
  const MEMBER_LINE =
    /^ {2}(?:public |private |protected |static |readonly |abstract |async )*[A-Za-z_$][\w$]*\s*(?:<[^>]*>)?\s*\(/;
  let block = [];

  const flush = () => {
    if (block.length === 0) return;
    const parsed = parseMethodBlock(block.join('\n'));
    block = [];
    if (!parsed) return;

    const guards = [...classGuards, ...parsed.guards];
    endpoints.push({
      method: parsed.method,
      path: joinPath(basePath, parsed.route),
      summary: parsed.summary,
      auth: guards.length
        ? guardLabels(guards)
        : classHeaderAuth
          ? [classHeaderAuth]
          : ['Public'],
      ...(parsed.excluded ? {excludedFromDocs: true} : {}),
    });
  };

  for (let i = classLine + 1; i < lines.length; i += 1) {
    const line = lines[i];
    if (MEMBER_LINE.test(line) && !line.trim().startsWith('@')) {
      flush();
      continue;
    }
    if (block.length > 0 || line.trim().startsWith('@')) block.push(line);
  }
  flush();

  if (endpoints.length === 0) return null;

  // Never fall back to the file name: the tag is published. An untagged, path-less
  // controller gets a generic label and a warning on stderr instead.
  const label = labelFor(tag || basePath || '');
  if (!label) {
    console.warn(`No @ApiTags and no controller path in ${moduleFile}; labelled "Other".`);
  }

  return {
    tag: label || 'Other',
    basePath: joinPath(basePath, ''),
    endpoints,
  };
}

const controllers = walk(SRC_ROOT)
  .map(parseController)
  .filter(Boolean)
  .sort((a, b) => a.tag.localeCompare(b.tag));

// Controllers that share an @ApiTags value are one logical group in Swagger too.
const byTag = new Map();
for (const controller of controllers) {
  const existing = byTag.get(controller.tag);
  if (existing) {
    existing.endpoints.push(...controller.endpoints);
  } else {
    byTag.set(controller.tag, {
      tag: controller.tag,
      basePath: controller.basePath,
      endpoints: [...controller.endpoints],
    });
  }
}

/**
 * Categories exist purely so 980 endpoints can be skimmed. First matching rule wins;
 * anything unmatched lands in "Platform and internal".
 */
const CATEGORY_RULES = [
  ['Agent and third-party surface', /^(MCP|MCP OAuth|Third party|External API Gateway|APIKeys|Media Generation Webhook|stripe-webhook)$/],
  ['Story structure', /^(Storyboard (Projects|Series|Seasons|Episodes|Scenes|Shots|Community Projects|Nav Cursor|Build Video|Genre|Episodes Video styles)|Beats|Acts|plot|StoryArcElement|Story Arc Wizard|wizard-context|profound-arc|ScriptDraftVersion|backup-human-script|project-assets|Project Cleanup|Shot List|Universal Truth|StoryEngines|Monikers|NeededLocation|Favourite Projects|Project Tone & Style)$/],
  ['Cast, characters and voice', /^(character|actor|Casts|Shot Casts|Shot Cast Paths|Cast Variant Groups|Clothing|favourite-character|ItemsAndCreatures|voice|Voice Acting|Global Voices|opensource-voice-design)$/],
  ['Sets, locations and staging', /^(set|set-path|set-path-frame|set-path-spot|set-spot|Scene Sets|Shot Sets|Scene Template|place|location|Screens|Shot Screens|Panel|StoryboardPanel|BrollRange|ai-object|blend-files)$/],
  ['Generation, jobs and media', /^(jobs|Image Generation|Prompt Generation|Seedance Prompt Generation|SeedancePromptVersion|Comfy Graphs|Pipelines|visuals-yaml|video-clip|VideoOutputLogs|Veo3 Script Sanitizer|BytePlus|Optimizer|ShotBatch|Public Video|Reference Library|Copied Assets|Factor Instances|Factor Abstractions|Assembly .*|ChatKit|Custom Template)$/],
  ['Review and moderation', /^(Flagged Content|shot-review|scene-review|Global Ratings)$/],
  ['Accounts, billing and organizations', /^(Auth|User|user-verification|tenant|Permissions|credits|payments|billing|plans|pricing|Organization Storage|AI Token Usage|Impersonate)$/],
];

function categoryFor(tag) {
  const rule = CATEGORY_RULES.find(([, pattern]) => pattern.test(tag));
  return rule ? rule[0] : 'Platform and internal';
}

/**
 * The deepest path prefix every endpoint in a group shares. Groups can span controllers,
 * so when they share nothing (MCP OAuth serves /oauth/cli and /v1/playbook) the distinct
 * first segments are listed instead of a bare "/".
 */
function commonPrefix(paths) {
  const split = paths.map((path) => path.split('/').filter(Boolean));
  const shared = [];
  for (let i = 0; i < split[0].length; i += 1) {
    const segment = split[0][i];
    if (segment.startsWith(':')) break;
    if (!split.every((parts) => parts[i] === segment)) break;
    shared.push(segment);
  }
  if (shared.length > 0) return `/${shared.join('/')}`;

  const roots = [...new Set(split.map((parts) => parts[0]).filter(Boolean))];
  return roots.map((root) => `/${root}`).join(', ');
}

/** Credentials that mark a route as privileged. Those routes are not published. */
const WITHHELD_AUTH = new Set(['Admin only', 'Internal key', 'Service token', 'Disabled']);

/** Whole categories that are operations surface rather than product surface. */
const WITHHELD_CATEGORIES = new Set(['Platform and internal']);

let withheld = 0;

const groups = [...byTag.values()]
  .map((group) => {
    const category = categoryFor(group.tag);
    const publicEndpoints = group.endpoints.filter((endpoint) => {
      const privileged =
        WITHHELD_CATEGORIES.has(category) ||
        endpoint.auth.some((label) => WITHHELD_AUTH.has(label));
      if (privileged) withheld += 1;
      return !privileged;
    });

    return {
      tag: group.tag,
      category,
      basePath: publicEndpoints.length
        ? commonPrefix(publicEndpoints.map((endpoint) => endpoint.path))
        : '',
      endpoints: publicEndpoints.sort(
        (a, b) => a.path.localeCompare(b.path) || a.method.localeCompare(b.method),
      ),
    };
  })
  .filter((group) => group.endpoints.length > 0)
  .sort((a, b) => b.endpoints.length - a.endpoints.length || a.tag.localeCompare(b.tag));

/**
 * The MCP tool list is a plain literal array in the server source. Evaluating that literal
 * keeps this page honest: the tools shown are the ones `tools/list` actually returns.
 */
function readMcpTools() {
  const file = join(SRC_ROOT, 'modules', 'mcp', 'tools', 'index.ts');
  const source = readFileSync(file, 'utf8');
  const start = source.indexOf('[', source.indexOf('MCP_TOOLS'));
  const end = source.lastIndexOf('];');
  // eslint-disable-next-line no-new-func
  const tools = new Function(`return ${source.slice(start, end + 1)}`)();

  return tools.map((tool) => {
    const description = tool.description.replace(/\s+/g, ' ').trim();
    return {
      name: tool.name,
      description,
      required: tool.inputSchema?.required ?? [],
      args: Object.keys(tool.inputSchema?.properties ?? {}),
      writes: /^(update|create|regenerate|delete)_/.test(tool.name),
      spendsCredits: /SPENDS CREDITS/.test(tool.description),
      needsLogin: /personal login/i.test(tool.description),
    };
  });
}

const totalEndpoints = groups.reduce((sum, group) => sum + group.endpoints.length, 0);
const methodCounts = {};
const authCounts = {};
for (const group of groups) {
  for (const endpoint of group.endpoints) {
    methodCounts[endpoint.method] = (methodCounts[endpoint.method] || 0) + 1;
    for (const auth of endpoint.auth) authCounts[auth] = (authCounts[auth] || 0) + 1;
  }
}

const mcpTools = readMcpTools();

// Deliberately no source repository, commit, or file names: this object is published.
const payload = {
  generatedAt: new Date().toISOString().slice(0, 10),
  totals: {
    categories: new Set(groups.map((group) => group.category)).size,
    groups: groups.length,
    endpoints: totalEndpoints,
    withheld,
    mcpTools: mcpTools.length,
    methods: methodCounts,
    auth: authCounts,
  },
  mcpTools,
  groups,
};

mkdirSync(dirname(OUT_FILE), {recursive: true});
writeFileSync(OUT_FILE, `${JSON.stringify(payload, null, 2)}\n`);
console.log(
  `Wrote ${relative(SITE_ROOT, OUT_FILE)}: ${totalEndpoints} endpoints in ${groups.length} groups published, ${withheld} privileged endpoints withheld.`,
);
