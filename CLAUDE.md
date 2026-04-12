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

PRODUCT_KNOWLEDGE_FILE is file {ROOT_DIR}/improve/knowledge/Small_ACT3.md
Read that file for deep product details whenever writing docs about specific features,
pricing, workflows, or capabilities.


== Site Identity ==

Product name: ACT3 AI
Tagline: AI Filmmaking — script to cinematography to video
Mission: "Write less, more creative control, far less labor."
Audience: filmmakers, creators, studios, agencies, animators, marketing teams
Tone: professional, cinematic, accessible — not overly technical


== Two Reader Audiences — Always Write for Both ==

Audience A — Complete Newcomers (roughly half the site visitors):
* Want to create an AI video but have no film industry background
* May not know what a Beat, Scene, Shot, or Act means
* May not know how to write a script
* Need hand-holding from first idea to finished video
* Respond to plain language, "here's what this means" asides, and step-by-step flows
* Fear: "this is too technical, I'll never figure it out"
* Goal: just get something great-looking out the door fast

Audience B — Experienced Creators (the other half):
* Filmmakers, video producers, marketing pros, social-media creators who already know film vocabulary
* Have used ACT3 AI before or are actively using it
* Looking for HOW to accomplish something specific, not what things mean
* Want task-focused reference docs, keyboard shortcuts, exact steps
* Fear: wasting time on explanations they don't need
* Goal: get the specific thing done and move on

Writing rule: every doc page should serve both audiences. Lead with the simple
explanation, then go deeper. Use "If you already know film terminology, skip ahead."
callouts where helpful.


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
  improve/           # Internal: knowledge base, content drafts, research
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
* Write like a knowledgeable film industry person explaining software to creatives
* Never talk down to experienced filmmakers; never leave newcomers lost


== Link and Bullet Style — Use Link-as-Title Pattern ==

GOOD pattern — the bullet title IS the hyperlink, followed by a colon and brief description:

  - **[Set up a shot](/how-to/set-up-a-shot):** Choose from 22 shot types and set framing per shot.
  - **[Set camera movement](/how-to/set-camera-movement):** Define pan, tilt, dolly, crane, or handheld motion.

The sentence before such a list should include a phrase like "Tasks below link to the page for each step."
or "Each item below links to the guide for that task."

BAD pattern — do NOT use the arrow-link pattern below a paragraph:

  ### Set camera movement
  Define how the camera moves through the shot — static, pan, tilt, dolly...

  → How to set camera movement

The bad pattern is verbose and inflates page length. The good pattern keeps pages scannable.
The bullet title (first few words) doubles as the hyperlink. If a section has a named heading,
ask whether that heading itself could instead be a linked bullet item — it usually can.

Numbered bullets follow the same rule when steps are sequential:

  1. **[Import a script](/how-to/import-a-script):** Paste in a Final Draft export, PDF, or plain text.
  2. **[Expand an idea into a script](/how-to/expand-idea-to-script):** Describe your story; AI builds the screenplay.


== ACT3 AI Product Context ==

=== Core Workflow ===

Script (or idea) -> Beats -> Scenes -> Shots -> AI Video Generation -> Edit -> Export

A creator can start with either:
1. A finished screenplay (import Final Draft, PDF, or plain text)
2. A rough idea (one sentence or a paragraph) — AI expands it into a full script

=== What the Product Does — Five Core Capabilities ===

1. Script Import — ingest Final Draft, PDF, plain text; auto-formats to industry standard
2. AI Story Expansion — turns a logline or paragraph into a full script with beats,
   scenes, and dialogue
3. Generative AI Video — integrates multiple AI video engines to render each shot
4. Comprehensive Structure Management — organizes up to feature-length movies or
   full TV series (Show > Season > Episode > Scene > Shot)
5. Extensive Visual Control — cinematography, lighting, set design, camera moves,
   blocking — all controlled inside the platform

=== The AI Director Roles ===

ACT3 AI breaks filmmaking into specialized AI roles that work together:
* AI Writer — script development, dialogue, narrative structure
* AI Director — overall vision, scene pacing, story flow
* AI Cinematographer — camera placement, movement, shot composition
* AI Set Designer — virtual environment creation, location design
* AI Casting & Wardrobe — character selection, costume consistency

=== Key AI Video Engine Integrations ===

* Google Veo 3 — primary video generation (cloud)
* Runway Gen-2 — secondary video generation (cloud)
* FLUX / Stable Diffusion SDXL — image and storyboard generation
* ComfyUI — local generation with advanced node graphs
* Hunyuan / Wan 2.1 — additional video models
* OpenAI Sora / Luma Dream Machine — additional cloud T2V options
* Blender — 3D sets, characters, mocap, lipsync (round-trip sync)
* Azure Neural TTS — voice/dialogue generation driving lipsync
* Video editor — timeline editing, multi-platform export

The platform auto-selects the cheapest engine that meets the quality constraints
for each shot. Every engine is swappable as the market evolves.

=== Cinematography Concepts Used in the Product ===

These terms are industry standard. Always define them on first use for newcomers:
* Beat — the smallest unit of action or emotion in a script; a micro-moment
* Shot — a single continuous camera angle or camera move; the atomic visual unit
* Scene — a collection of shots at one location and time
* Act — a major story division (a feature film typically has 3 acts)
* Blocking — where characters stand and how they move within a scene
* Coverage — the full set of angles shot to cover a scene
* Storyboard — a sequence of still images visualizing the shots before filming

=== The Editor — "The Everything Editor" ===

Three-column flexible layout. Any column can show: Script, Timeline, Panels,
Outline, Video Preview, or Top-Down Editor. Role-specific layouts for Writers,
Directors, and Actors. Key capabilities:
* Final Draft-grade script editor with color-coded scene/shot boundaries
* Zoomable interactive timeline from full-feature overview to single-frame
* Top-Down canvas (Figma-style) for blocking: place characters, draw movement paths
* One-click AI Regeneration for any shot — dialogue, visuals, or prompts
* Built-in credit estimator before any costly operation
* Blender Sync tab for round-trip professional VFX work
* Keyboard shortcuts: Shift ←/→ jump scenes, Alt ←/→ jump shots

=== Sets — Virtual Locations ===

Sets are virtual environments attached to scenes. Types:
* 2D image sets — a single background image, can be aligned for 3D character placement
* 3D Blender sets — full 3D environments synced from Blender
* Procedural "City on Rails" — AI-generated city blocks with customizable building types
* Procedural "Building on Rails" — automated interior environments

Sets have a top-down canvas for placing characters, cameras, and movement paths.
AI can suggest sets based on story context via the "Sets into Story" button.

=== Story Arc & AI Wizard ===

The Story Arc system provides a visual timeline of narrative structure:
* Hierarchical layer groups: character arcs, plot points, themes
* AI Wizard guides project setup: type (TV/Movie), visual style, duration
* Import source material: scripts, articles, books, Wikipedia, raw text paste
* AI proposes Acts, Beats, character arcs — human approves or edits
* Dependency graph ensures edits cascade through script and renders automatically
* Automated Calc Engine runs when story changes; triggers LLM to update affected elements
* Side-by-side "Primary" (human-approved) vs "AI Recommended" comparison view

=== Visual System — Mega Prompt Architecture ===

Every renderable shot is defined in machine-readable YAML containing:
narrative, style, camera, lighting, audio, and motion data.
The "Mega Prompt Composer" bundles all shot data into a single multi-modal
prompt fed to the generative engine. Shot prompt includes:
* Action details, mood specs, style parameters
* Camera instructions, motion paths, lighting setup
* Regional masks for ComfyUI ControlNets

22 canonical shot types. 4 built-in visual styles: Cinematic Realism,
3D Animated, Cartoon 2D, Anime. Every parameter is override-able via YAML.

=== Performance Capture ===

* NVIDIA Audio2Face — facial performance from audio
* Marker-less full-body motion capture from standard video (phone or webcam)
* Azure Neural TTS drives lipsync duration per shot
* iPhone motion capture to Blender to final render pipeline

=== Content Moderation ===

Three-stage scanner: validates prompts before generation, scripts before
production, and finished outputs before download. Auto-redact or admin review.

=== Pricing & Credits ===

Credits are the internal currency for resource-intensive actions. Cost is shown
clearly before any action. Quality tiers per shot: Draft, Standard, High, 4K.

Public plans:
* Free — $0/mo, 800 credits, watermarked, personal use
* Community — $8/mo, 8,000 credits, no watermark
* Standard — $35/mo, 33,000 credits, 3 concurrent jobs
* Business — $175/mo, 180,000 credits, 6 jobs, commercial use
* Enterprise — custom pricing, 4K video, 10+ concurrent jobs, private 3D sets

Free/Community plans require LinkedIn auth. After 6 months active, users must
upgrade to Standard or higher.

Credits roll over to a bank at month end (capped per plan). Monthly allocation
is used first; rollover bank accessed when monthly credits run out.

=== Organization Model (Multi-Tenant) ===

Modeled like GitHub or Figma workspaces:
* One user can belong to multiple Organizations
* Organization owns projects, members, subscription, credit pool, payment method
* Roles: Owner (full control), Billing, Use Credits, Run AI, Modify/Edit, Read
* Organization legally owns all IP created within it

=== Key Differentiators vs. Competitors ===

vs. prompt-to-video tools (Runway standalone, Veo standalone):
  ACT3 AI manages entire multi-shot productions, not just single clips.

vs. storyboard/pre-viz tools (Previs Pro, ArcAds):
  ACT3 AI goes all the way to final rendered video.

vs. 3D tools (Blender, Promethean AI):
  ACT3 AI requires no 3D expertise; Blender is an optional professional add-on.

Only platform spanning: scriptwriting → visual planning → generative render →
iterative directing — in one unified UX.

Time compression: traditional pre-production takes 80-200 hours;
ACT3 AI targets approximately 2 hours for the same scope.

=== Target Customers (Priority Order) ===

1. Social media video creators (TikTok, YouTube, Reels)
2. Independent filmmakers making movies with Gen AI
3. In-house brand marketing departments
4. Marketing agencies
5. TV/movie industry professionals (directors, cinematographers, producers)
6. VFX specialists and Blender experts
7. Actors (self-tape, mocap reels), book authors, animators, distributors

=== Export Formats ===

* Social: 16:9 (YouTube), 9:16 vertical (TikTok/Reels), 1:1 (Instagram)
* Professional: ProRes masters, DCP for festivals
* Post-production: EDL, MP4/MOV for Premiere Pro and DaVinci Resolve
* Proprietary project archives

=== Financial Context (for docs tone) ===

ACT3 AI is an early-stage SaaS product. Alpha launch 2H 2025. The platform
replaces thousands of dollars in camera, location, crew, and studio costs.
Target rendering cost: under $70 per 22-minute episode (Q4 2025 roadmap).


== What AI Should Do Here ==

* Write and edit Markdown documentation pages
* Create or update docusaurus.config.js, sidebars.js
* Add or update React components in src/
* Never modify docs content to be inaccurate about the product
* Never invent feature behavior — ask if unsure
* When writing about a specific feature, read PRODUCT_KNOWLEDGE_FILE for details
* Always serve both reader audiences (newcomers and experienced creators)


== What AI Should NOT Do Here ==

* Do not add backend logic or API server code
* Do not store secrets or API keys in any committed file
* Do not create blog posts unless explicitly asked
* Do not alter the live domain config without confirmation
