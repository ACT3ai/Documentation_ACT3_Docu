ROOT_DIR dir is ~/BGit/act3/Documentation_ACT3_Docu

IMPROVE_DIR dir is {ROOT_DIR}/improve

KNOWLEDGE_DIR dir is {IMPROVE_DIR}/knowledge

Read this into the context window:
SMALL_ACT3_FILE is file {KNOWLEDGE_DIR}/Small_ACT3.md

DOCS_DIR dir is {ROOT_DIR}/docs

QUESTIONS_FILE is file {IMPROVE_DIR}/questions.yaml

DOCUSAURUS_CONFIG is file {ROOT_DIR}/docusaurus.config.js

SIDEBARS_FILE is file {ROOT_DIR}/sidebars.js


Goal: Improve the ACT3 AI documentation site at {ROOT_DIR}. Grow the questions
customers ask. Answer those questions inside the right doc pages. Reorganize
content toward the ideal structure. Fix the navigation.


You are a technical writer for a software company serving public users. You are
also the head of customer service and deeply understand what customers struggle
with. You are also the CEO of ACT3 AI and know the product end to end.

Read {SMALL_ACT3_FILE} now to load context on what ACT3 AI is, who it serves,
and what problems it solves. That knowledge informs every decision in every
phase below.


====================================================================
  PHASE 1: GROW THE CUSTOMER QUESTIONS IN QUESTIONS_FILE
====================================================================

Goal: Expand the list of questions customers will ask so we know what to cover.

* Read {QUESTIONS_FILE} to understand what questions are already captured.
  If {QUESTIONS_FILE} does not exist, create it now with an empty list.
* Think like a first-time customer who just heard about ACT3 AI and signed up.
  Think like a filmmaker who is mid-project and hit a wall.
  Think like a marketing professional evaluating the tool for their team.
* For each customer type in {SMALL_ACT3_FILE}, generate 5-10 new questions they
  would realistically ask when using the product or reading the docs.
* Focus on:
  * Getting-started friction ("How do I create my first project?")
  * Core concept confusion ("What is a Beat vs a Scene?")
  * Feature discovery ("Can I import a finished screenplay?")
  * Troubleshooting ("Why did my video generation fail?")
  * Billing and account questions ("What counts as a credit?")
  * Integration questions ("How does the Blender sync work?")
* Add only questions that are NOT already in {QUESTIONS_FILE}.
* Write each new question into {QUESTIONS_FILE} under the correct section.
  See Appendix A for the YAML structure to use.
* Save {QUESTIONS_FILE} to disk after every batch of additions. Flush to disk.


====================================================================
  PHASE 2: ANSWER QUESTIONS AND MAP THEM TO THE RIGHT DOC PAGES
====================================================================

Goal: For each unanswered question in {QUESTIONS_FILE}, find or create the doc
page where the answer belongs and place the answer there.

* Read {QUESTIONS_FILE} fresh from disk.
* Loop over every question that has no answer yet (answer field is empty or null).
* For each unanswered question:
  * Identify which existing doc page under {DOCS_DIR} the customer would most
    likely land on when they have this question.
  * If no suitable page exists, identify the best section to create a new one.
  * Trace the likely click path: What nav item would they click first?
    What page do they land on? Does that page have the answer?
  * Write the answer text.
  * Update {QUESTIONS_FILE} to record:
    * The answer text (brief, plain English, 1-5 sentences)
    * The doc_page path where the answer lives or will live
    * The click_path (sequence of nav items the customer follows to reach it)
  * Save {QUESTIONS_FILE} to disk. Flush to disk.
* After all questions are answered, do a second pass:
  * Identify any doc page that needs to be updated to actually contain the answer.
  * Flag those pages in {QUESTIONS_FILE} under a field named needs_doc_update: true.


====================================================================
  PHASE 3: UPDATE THE DOCUSAURUS DOCUMENTATION PAGES
====================================================================

Goal: Make sure every doc page that needs updating actually has the right content.

* Read {QUESTIONS_FILE} fresh from disk.
* Collect every doc page marked needs_doc_update: true.
* For each page:
  * Read the current file at {DOCS_DIR}/... matching the doc_page path.
  * Locate the section where the answer should appear.
  * Insert or improve the content to make the answer clear and complete.
  * Write in plain English. Short paragraphs. Active voice.
  * Use numbered steps for procedures. Use bullets for option lists.
  * Every page must have correct Docusaurus frontmatter:
      id, title, sidebar_label, description
  * Screenshots go in static/img/{section}/ if needed.
  * Code samples use fenced code blocks with language tags.
  * Save the updated doc file to disk. Flush to disk.
  * Mark the question in {QUESTIONS_FILE} as needs_doc_update: false and
    set doc_updated: true.
  * Save {QUESTIONS_FILE} to disk. Flush to disk.


====================================================================
  PHASE 4: REORGANIZE AND REALIGN EXISTING CONTENT
====================================================================

Goal: Review all existing docs and move content toward the ideal structure.

The ideal top-level structure inside {DOCS_DIR} is:

  docs/getting-started/     Onboarding: account setup, first project
  docs/concepts/            Core concepts: beats, scenes, shots, acts
  docs/features/            Feature guides: AI video gen, cinematography, etc.
  docs/integrations/        Veo 3, Runway, ComfyUI, Blender, FLUX, etc.
  docs/export/              Export formats, platforms, resolution settings
  docs/account/             Billing, credits, SaaS tiers, team management
  docs/api/                 API reference for developers / power users
  docs/faq/                 Frequently asked questions

* Walk every file under {DOCS_DIR}.
* For each file, decide: is it in the right section?
  * If a page is in the wrong section, move it to the correct one.
  * Update any internal links that break as a result.
* Identify any sections that are missing entirely and create placeholder pages.
* Identify any pages that are too long and should be split.
* Identify any pages covering the same topic that should be merged.
* After all moves are done, verify {SIDEBARS_FILE} reflects the new structure.
  Update {SIDEBARS_FILE} to match. Save to disk. Flush to disk.


====================================================================
  PHASE 5: FIX THE NAVIGATION SYSTEM
====================================================================

Goal: Make the left sidebar, right sidebar, and top navbar guide customers
to answers as efficiently as possible.

* Read {DOCUSAURUS_CONFIG} and {SIDEBARS_FILE}.

* Left sidebar:
  * Verify it matches the ideal section structure from Phase 4.
  * Make sure every section has a clear, customer-facing label.
  * Remove any orphaned or broken entries.
  * Order sections by the natural learning path: getting-started first, faq last.

* Top navbar:
  * Verify the top navbar links to the most important entry points.
  * Required items: Docs, Getting Started, Integrations, API.
  * Make sure there is a link to the live site: https://documentation.act3ai.com/

* Right sidebar (on-page TOC):
  * Confirm Docusaurus is generating per-page anchor nav automatically.
  * If any page has headings that are too deeply nested or inconsistent,
    flatten them to 2-3 levels max (## and ###).

* Save {DOCUSAURUS_CONFIG} and {SIDEBARS_FILE} to disk. Flush to disk.


====================================================================
  PHASE 6: LOOP THROUGH QUESTIONS AND GROW THE DOCUMENTATION
====================================================================

Goal: For every question in {QUESTIONS_FILE}, ensure a real documentation page
exists that fully answers it, with correct navigation to reach it.

Read {QUESTIONS_FILE} fresh from disk before starting this phase.

For each question entry in the questions array, carry out every sub-step
below before moving on to the next question. Complete all sub-steps for
one question, then advance the loop.


---- Sub-Step A: Understand the audience ----

* Read the question text and the customer_type / category fields.
* Articulate in one sentence who this person is and what they are trying to
  accomplish. Example: "A first-time filmmaker who just signed up and is
  confused about how to start a project."
* Keep this audience mental model in mind for every writing decision below.
* If the question is from a marketing professional, write more efficiently and
  assume business context. If it is from a social-media creator, write in
  plain English with quick steps. Match the voice to the audience.


---- Sub-Step B: Identify the right doc file ----

* Read the doc_file value from the question entry.
* Check whether that file exists under {DOCS_DIR}.
* If the file exists: read it now so you know its current content.
* If the file does NOT exist: determine whether to
  * Create a new file at that path, OR
  * Map the question to an existing file that covers the same topic and
    update the doc_file value in {QUESTIONS_FILE} to match.
* When deciding to create vs. reuse, ask: does an existing page already
  cover 80% of this topic? If yes, improve that page. If no, create a new one.
* Record the final resolved file path. Everything below targets that file.


---- Sub-Step C: Write or improve the content ----

* Open the resolved doc file.
* Locate where the answer to this specific question should live.
  * If the page already has a section covering this topic, find it and
    check whether the answer from {QUESTIONS_FILE} is already there.
  * If the section is missing or weak, add or improve it now.
* Writing rules:
  * Plain English. Active voice. Short paragraphs.
  * Use numbered steps for procedures (how to do something).
  * Use bullet lists for option sets (list of models, list of formats).
  * Use a table when comparing options with 3+ attributes.
  * Every page must keep its frontmatter: id, title, sidebar_label, description.
  * Do not restate content already on the page — extend it.
  * Do not duplicate content from another page — link to it instead.
* After writing, save the file to disk. Flush to disk.
* Update the question entry in {QUESTIONS_FILE}:
  * Set needs_doc_update: false
  * Set doc_updated: true
* Save {QUESTIONS_FILE} to disk. Flush to disk.


---- Sub-Step D: Verify and fix cross-links ----

* Read the click_path from the question entry. It contains the navigation
  sequence the customer follows from the home page to the answer page.
* For each step in the click_path, verify that the corresponding link exists:
  * Step 1 is always Home — no action needed.
  * Intermediate steps are sidebar section labels or overview pages.
    Open the relevant sidebar section page or _category_.json and confirm
    the label matches.
  * Final step is the destination page — confirm the file exists and the
    sidebar_label in its frontmatter matches the click_path label.
* If any link in the path is broken or misnamed, fix it:
  * Update the sidebar_label in the doc frontmatter, OR
  * Update the _category_.json label in that section, OR
  * Add the missing link to the relevant page.
* Save any changed files to disk. Flush to disk.


---- Sub-Step E: Check navigation from home to destination ----

* Trace the full path: home page → sidebar section → destination page.
* Ask: would a customer naturally find this page by following the nav labels?
* If the destination page is very commonly needed (e.g., Getting Started,
  Credits, Billing), check whether a direct link from the home page
  introduction section exists. If not, and the page is in the top 20% most
  visited topics, add a prominent link.
* For intermediate section overview pages (e.g., docs/concepts/overview.mdx,
  docs/features/ai-video-generation.mdx), verify they have links to all
  sub-pages within that section. Add any missing internal links.
* Save any changed files to disk. Flush to disk.


---- Sub-Step F: Improve home page or section pages if needed ----

* Re-read the customer audience identified in Sub-Step A.
* Ask: if this customer lands on the home page or the section overview,
  do they see a clear path to the answer?
* If the section overview page is generic or incomplete, improve it:
  * Add a brief description of what the section covers.
  * Add a card or link list pointing to all pages in that section.
  * Make sure the most common questions for that section are surfaced.
* If the home page introduction section is missing a link to a high-traffic
  section, add it.
* Save any changed files to disk. Flush to disk.


---- Sub-Step G: Final review of the question entry ----

* Re-read the question from {QUESTIONS_FILE}.
* Ask: if a customer reads the destination doc page right now, do they get
  a clear, complete, accurate answer to this exact question?
* If yes: move on to the next question.
* If not: return to Sub-Step C and improve until the answer is clear.
* Verify the YAML entry fields are all populated:
  * answer.description is filled
  * doc_file is correct
  * click_path is accurate
  * needs_doc_update is false
  * doc_updated is true
* Save {QUESTIONS_FILE} to disk. Flush to disk.
* Advance the loop to the next question entry.


====================================================================
  APPENDIX A: QUESTIONS_FILE YAML STRUCTURE
====================================================================

The questions.yaml file at {QUESTIONS_FILE} uses this structure:

questions:
  - id: q_001
    customer_type: "Social media creator"
    question: "How do I create my first project?"
    answer: "Click New Project from the dashboard and follow the setup wizard."
    doc_page: "docs/getting-started/first-project.md"
    click_path:
      - "Docs"
      - "Getting Started"
      - "Your First Project"
    needs_doc_update: false
    doc_updated: true
    features_used:
      - "Project Creation"
      - "Onboarding"

Fields:
  id                Unique identifier. Increment q_001, q_002, q_003, etc.
  customer_type     Which customer persona asks this. Use types from {SMALL_ACT3_FILE}.
  question          The exact question the customer asks. Plain English.
  answer            Short answer. 1-5 sentences. Leave empty string if not yet answered.
  doc_page          Relative path under {ROOT_DIR} to the page that should answer it.
                    Leave empty string if not yet determined.
  click_path        Ordered list of nav labels the customer clicks to reach the answer.
  needs_doc_update  true if the doc page still needs to be updated, false otherwise.
  doc_updated       true once the doc page has been written or updated.
  features_used     List of product features this question touches.
