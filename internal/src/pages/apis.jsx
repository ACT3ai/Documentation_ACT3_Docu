import React, {useMemo, useState} from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import inventory from '../data/api-inventory.json';
import styles from './apis.module.css';

/**
 * /apis: the unlisted index of the ACT3 API surface.
 *
 * Nothing links here: it is not in the sidebar, navbar, footer, sitemap, or search, and it
 * carries a noindex robots tag. It exists so someone with the link can scan the range of
 * the API in one page.
 *
 * TREAT EVERYTHING HERE AS PUBLIC. An unlisted URL is not an access control, and the
 * imported JSON ships inside the browser bundle, so whatever is in it is published whether
 * or not this file renders it. Redaction therefore lives in the generator, not here:
 * privileged routes, source file names, and build provenance never reach the JSON. Do not
 * add source paths, internal hostnames, env var names, or role names to this page.
 *
 * The tables are generated, not hand-written. Re-run
 * `node internal/scripts/extract-api-inventory.mjs <path-to-app-server-checkout>`
 * after backend changes to refresh internal/src/data/api-inventory.json.
 */

const METHODS = ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'];

/**
 * How a caller proves who they are. Only the modes used by published routes are described:
 * privileged modes are withheld along with the routes that use them, and a row with no
 * matching routes is dropped at render time rather than hinting at what is not shown.
 */
const AUTH_MODES = [
  {
    label: 'Session JWT',
    header: 'Authorization: Bearer <token>',
    note: 'The signed-in web session token. A request acts as that user, scoped to the organizations they belong to.',
  },
  {
    label: 'API key',
    header: 'x-api-key: <key>',
    note: 'Created per user on the API Keys page in account settings. The credential for the third-party v1 routes, and accepted by the MCP endpoint.',
  },
  {
    label: 'MCP token',
    header: 'Authorization: Bearer <token>  or  x-api-key: <key>',
    note: 'Issued by act3-mcp login: a short-lived access token with a rotating refresh token, limited to MCP use. A normal web session token is not accepted here.',
  },
  {
    label: 'Credentials',
    header: 'Email and password in the body',
    note: 'Sign-in only. Every other route takes a token.',
  },
  {
    label: 'Session JWT (optional)',
    header: 'Authorization: Bearer <token> (optional)',
    note: 'Reads that answer signed-in and anonymous callers alike, such as the pricing catalog.',
  },
  {
    label: 'Public',
    header: 'None',
    note: 'No credential: webhook receivers, signed-link reads, sign-in and OAuth callbacks, and public video.',
  },
];

/** Facts about the JSON-RPC surface agent clients connect to. */
const MCP_FACTS = [
  ['Endpoint', 'POST /mcp, a single JSON-RPC 2.0 endpoint'],
  ['Protocol version', '2025-06-18'],
  ['Server identity', 'act3ai-mcp-server 1.0.0'],
  ['Methods', 'initialize, tools/list, tools/call, and notifications (acknowledged with no body)'],
  ['Capabilities', 'tools'],
];

const LOGIN_STEPS = [
  'act3-mcp login opens a consent page in your browser, using PKCE and a loopback redirect so the credential never leaves your machine.',
  'You approve the request while signed in. The server mints a one-time code bound to that request.',
  'The CLI receives the code on the loopback address and exchanges it for tokens.',
  'You get a short-lived access token and a refresh token. Codes are single use, and a replayed token revokes the login it belongs to.',
  'Every later tool call runs as you, against your own projects.',
];

function MethodChip({method}) {
  return <span className={`${styles.method} ${styles[method] ?? ''}`}>{method}</span>;
}

function AuthChip({label}) {
  return (
    <span className={`${styles.auth} ${label === 'Public' ? styles.authPublic : ''}`}>
      {label}
    </span>
  );
}

function Stat({value, label}) {
  return (
    <div className={styles.stat}>
      <div className={styles.statValue}>{value}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

function EndpointGroup({group, expandedByDefault}) {
  // null means "no explicit choice yet", so a filtered-open group can still be collapsed.
  const [override, setOverride] = useState(null);
  const isOpen = override ?? expandedByDefault;

  return (
    <div className={styles.group}>
      <button
        type="button"
        className={styles.groupHead}
        onClick={() => setOverride(!isOpen)}
        aria-expanded={isOpen}>
        <span className={styles.caret}>{isOpen ? '▼' : '▶'}</span>
        <span className={styles.groupName}>{group.tag}</span>
        <span className={styles.groupBase}>{group.basePath}</span>
        <span className={styles.groupCount}>
          {group.endpoints.length} {group.endpoints.length === 1 ? 'route' : 'routes'}
        </span>
      </button>

      {isOpen && (
        <div className={styles.groupBody}>
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Path</th>
                <th>What it does</th>
                <th>Access</th>
              </tr>
            </thead>
            <tbody>
              {group.endpoints.map((endpoint) => (
                <tr key={`${endpoint.method} ${endpoint.path}`}>
                  <td>
                    <MethodChip method={endpoint.method} />
                  </td>
                  <td className={styles.pathCell}>
                    <code>{endpoint.path}</code>
                  </td>
                  <td className={styles.summaryCell}>{endpoint.summary ?? ''}</td>
                  <td>
                    {endpoint.auth.map((label) => (
                      <AuthChip key={label} label={label} />
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default function ApiSurfacePage() {
  const [query, setQuery] = useState('');
  const [methods, setMethods] = useState([]);
  const [category, setCategory] = useState('all');
  const [authFilter, setAuthFilter] = useState('all');

  const categories = useMemo(
    () => [...new Set(inventory.groups.map((group) => group.category))].sort(),
    [],
  );
  const authLabels = useMemo(
    () => Object.keys(inventory.totals.auth).sort(),
    [],
  );

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return inventory.groups
      .filter((group) => category === 'all' || group.category === category)
      .map((group) => {
        const endpoints = group.endpoints.filter((endpoint) => {
          if (methods.length > 0 && !methods.includes(endpoint.method)) return false;
          if (authFilter !== 'all' && !endpoint.auth.includes(authFilter)) return false;
          if (!needle) return true;
          const haystack = `${group.tag} ${endpoint.path} ${endpoint.summary ?? ''}`;
          return haystack.toLowerCase().includes(needle);
        });
        return {...group, endpoints};
      })
      .filter((group) => group.endpoints.length > 0);
  }, [query, methods, category, authFilter]);

  const shownEndpoints = filtered.reduce((sum, group) => sum + group.endpoints.length, 0);
  const isFiltering =
    query.trim().length > 0 || methods.length > 0 || authFilter !== 'all';

  const byCategory = useMemo(() => {
    const map = new Map();
    for (const group of filtered) {
      if (!map.has(group.category)) map.set(group.category, []);
      map.get(group.category).push(group);
    }
    return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  }, [filtered]);

  const toggleMethod = (method) =>
    setMethods((current) =>
      current.includes(method)
        ? current.filter((item) => item !== method)
        : [...current, method],
    );

  return (
    <Layout
      title="API surface"
      description="Unlisted index of every ACT3 app-server endpoint and MCP tool.">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className={styles.page}>
        <span className={styles.badge}>Unlisted</span>
        <h1 className={styles.title}>ACT3 API surface</h1>
        <p className={styles.lede}>
          The breadth of the ACT3 API: every product route the application server answers,
          grouped so it can be read in one pass, plus the MCP tool surface that agents
          call. Nothing links to this page: it is excluded from the sidebar, the sitemap,
          and search, so it is reachable only by direct link.
        </p>

        <p className={styles.provenance}>
          Generated from the server's own route definitions, last refreshed{' '}
          {inventory.generatedAt}, so the paths and access rules match what is running
          rather than what a hand-written page remembers. Administrative, internal-service,
          and platform routes are deliberately left out: {inventory.totals.withheld}{' '}
          endpoints are not listed here.
        </p>

        <div className={styles.stats}>
          <Stat value={inventory.totals.endpoints} label="Endpoints listed" />
          <Stat value={inventory.totals.groups} label="Route groups" />
          <Stat value={inventory.totals.mcpTools} label="MCP tools" />
          <Stat value={inventory.totals.categories} label="Categories" />
          <Stat value={inventory.totals.withheld} label="Withheld" />
        </div>

        <section className={styles.section}>
          <h2>How callers authenticate</h2>
          <p className={styles.sectionNote}>
            The credential types used by the routes below, with the number of routes behind
            each one.
          </p>
          <div className={styles.tableWrap}>
            <table>
              <thead>
                <tr>
                  <th>Mode</th>
                  <th>Routes</th>
                  <th>Header</th>
                  <th>What it is</th>
                </tr>
              </thead>
              <tbody>
                {AUTH_MODES.filter(
                  (mode) => (inventory.totals.auth[mode.label] ?? 0) > 0,
                ).map((mode) => (
                  <tr key={mode.label}>
                    <td>
                      <AuthChip label={mode.label} />
                    </td>
                    <td>{inventory.totals.auth[mode.label]}</td>
                    <td>
                      <code>{mode.header}</code>
                    </td>
                    <td>{mode.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Agent surface: MCP</h2>
          <p className={styles.sectionNote}>
            The Model Context Protocol server is one HTTP endpoint that fronts{' '}
            {inventory.totals.mcpTools} tools. It is how Claude and other agent clients
            drive ACT3 without touching the REST routes directly.
          </p>

          <div className={styles.tableWrap}>
            <table>
              <tbody>
                {MCP_FACTS.map(([label, value]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3>Sign-in: act3-mcp login</h3>
          <ol className={styles.sectionNote}>
            {LOGIN_STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          <h3>Tools</h3>
          <p className={styles.sectionNote}>
            Read tools work with either credential. Tools marked <em>writes</em> change real
            project data, so they require a personal login rather than a shared key. Tools
            marked <em>credits</em> spend credits and run asynchronously: they return a job
            id to poll.
          </p>
          <div className={styles.tableWrap}>
            <table>
              <thead>
                <tr>
                  <th>Tool</th>
                  <th>What it does</th>
                  <th>Required args</th>
                  <th>Flags</th>
                </tr>
              </thead>
              <tbody>
                {inventory.mcpTools.map((tool) => (
                  <tr key={tool.name}>
                    <td>
                      <code>{tool.name}</code>
                    </td>
                    <td className={styles.summaryCell}>{tool.description}</td>
                    <td>
                      {tool.required.length > 0 ? (
                        <code>{tool.required.join(', ')}</code>
                      ) : (
                        'none'
                      )}
                    </td>
                    <td>
                      {tool.writes && (
                        <span className={`${styles.flag} ${styles.flagWrite}`}>writes</span>
                      )}
                      {tool.spendsCredits && (
                        <span className={`${styles.flag} ${styles.flagCredits}`}>
                          credits
                        </span>
                      )}
                      {!tool.writes && !tool.spendsCredits && (
                        <span className={styles.flag}>read</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Endpoint index</h2>
          <p className={styles.sectionNote}>
            {inventory.totals.endpoints} routes across {inventory.totals.groups} groups, with{' '}
            {inventory.totals.withheld} administrative and internal routes left out. Search
            matches group name, path, and summary. Groups open on click, and open
            automatically while a filter is active.
          </p>

          <div className={styles.controls}>
            <input
              className={styles.search}
              type="search"
              value={query}
              placeholder="Search paths and summaries…"
              onChange={(event) => setQuery(event.target.value)}
              aria-label="Search endpoints"
            />

            <div className={styles.toggleRow}>
              {METHODS.map((method) => (
                <button
                  key={method}
                  type="button"
                  className={`${styles.toggle} ${
                    methods.includes(method) ? styles.toggleOn : ''
                  }`}
                  onClick={() => toggleMethod(method)}
                  aria-pressed={methods.includes(method)}>
                  {method} {inventory.totals.methods[method] ?? 0}
                </button>
              ))}
            </div>

            <select
              className={styles.select}
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              aria-label="Filter by category">
              <option value="all">All categories</option>
              {categories.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>

            <select
              className={styles.select}
              value={authFilter}
              onChange={(event) => setAuthFilter(event.target.value)}
              aria-label="Filter by auth mode">
              <option value="all">Any auth</option>
              {authLabels.map((label) => (
                <option key={label} value={label}>
                  {label} ({inventory.totals.auth[label]})
                </option>
              ))}
            </select>
          </div>

          <p className={styles.resultCount}>
            Showing {shownEndpoints} of {inventory.totals.endpoints} endpoints in{' '}
            {filtered.length} groups.
          </p>

          {byCategory.length === 0 && (
            <p className={styles.empty}>No endpoint matches those filters.</p>
          )}

          {byCategory.map(([name, groups]) => (
            <div key={name} className={styles.category}>
              <div className={styles.categoryHead}>
                <h3 className={styles.categoryName}>{name}</h3>
                <span className={styles.categoryCount}>
                  {groups.reduce((sum, group) => sum + group.endpoints.length, 0)} routes ·{' '}
                  {groups.length} groups
                </span>
              </div>
              {groups.map((group) => (
                <EndpointGroup
                  key={group.tag}
                  group={group}
                  expandedByDefault={isFiltering}
                />
              ))}
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
}
