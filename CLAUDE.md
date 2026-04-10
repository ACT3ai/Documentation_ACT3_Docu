ROOT_DIR dir is ~/BGit/act3/Documentation_ACT3_Docu


PROJECT: Documentation_ACT3_Docu

PURPOSE: Docusaurus-based documentation site for the ACT3 AI filmmaking software product.
Customers browse this site to learn how the product works, understand features,
and get started quickly.

LIVE_DOMAIN: https://documentation.act3ai.com/

OLD_WIKI_SITE: https://wiki.act3ai.com/index.php?title=Shots
OLD_WIKI_BASE: https://wiki.act3ai.com/index.php?title=

The old MediaWiki site is the source of truth for existing content.
We are migrating all pages from OLD_WIKI_SITE to the new Docusaurus site.
When transferring content, fetch the old wiki page, convert from wiki markup
to clean Markdown/MDX, add proper Docusaurus frontmatter, and place it in
the correct docs/ subdirectory.


== Site Identity ==

Product name: ACT3 AI
Tagline: AI Filmmaking — script to cinematography to video
Audience: filmmakers, creators, studios, agencies, animators, marketing teams
Tone: professional, cinematic, accessible — not overly technical


== Technology Stack ==

* Docusaurus 3.x (React-based static site generator)
* Markdown / MDX for all doc pages
* Node.js + pnpm for build tooling
* Deployed as static site (GitHub Pages, Netlify, or Vercel)


== Directory Structure ==

{ROOT_DIR}/
  docs/              # All documentation pages (markdown/mdx)
  blog/              # Optional release notes / announcements
  src/               # Custom React components and CSS
  static/            # Images, logos, videos, downloadable assets
  docusaurus.config.js
  sidebars.js
  package.json
  CLAUDE.md          # This file


== Docs Organization ==

Top-level sections inside docs/:

  docs/getting-started/     # Onboarding: account setup, first project
  docs/concepts/            # Core concepts: beats, scenes, shots, acts
  docs/features/            # Feature guides: AI video gen, cinematography, etc.
  docs/integrations/        # Veo 3, Runway, ComfyUI, Blender, FLUX, etc.
  docs/export/              # Export formats, platforms, resolution settings
  docs/account/             # Billing, credits, SaaS tiers, team management
  docs/api/                 # API reference for developers / power users
  docs/faq/                 # Frequently asked questions


== Writing Style Rules ==

* Plain English — no jargon unless defined on first use
* Short paragraphs, active voice
* Use numbered steps for procedures, bullet lists for options
* Screenshots go in static/img/{section}/
* Code samples use fenced code blocks with language tags
* Every page needs frontmatter: id, title, sidebar_label, description


== ACT3 AI Product Context ==

Core workflow: Script -> Beats -> Scenes -> Shots -> AI Video Generation -> Edit -> Export

Key AI integrations:
* Google Veo 3 — primary video generation
* Runway — secondary video generation
* FLUX / ComfyUI — image and storyboard generation
* Hunyuan / Wan 2.1 — additional video models
* Blender — 3D sets, characters, mocap, lipsync
* TTS — voice/dialogue generation
* Video editor — timeline editing, multi-platform export

Cinematography concepts used in the product:
* Beat — smallest unit of action or emotion in a script
* Shot — single camera angle / camera move
* Scene — collection of shots at one location/time
* Act — major story division

SaaS model: tiered subscriptions + credit-based rendering


== What AI Should Do Here ==

* Write and edit Markdown documentation pages
* Create or update docusaurus.config.js, sidebars.js
* Add or update React components in src/
* Never modify docs content to be inaccurate about the product
* Never invent feature behavior — ask if unsure


== What AI Should NOT Do Here ==

* Do not add backend logic or API server code
* Do not store secrets or API keys in any committed file
* Do not create blog posts unless explicitly asked
* Do not alter the live domain config without confirmation
