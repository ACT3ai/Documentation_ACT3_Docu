# Wiki Migration Tracker

Source: https://wiki.act3ai.com/index.php?title=Shots (and all sibling pages)

Status legend: [ TODO ] [ IN-PR ] [ DONE ]

## Pages to Migrate

| Wiki Title | Target doc path | Status |
|-----------|----------------|--------|
| Shots | docs/concepts/shots.mdx | [ TODO ] |
| Beats | docs/concepts/beats.mdx | [ TODO ] |
| Scenes | docs/concepts/scenes.mdx | [ TODO ] |
| Acts | docs/concepts/acts.mdx | [ TODO ] |
| Export | docs/export/overview.mdx | [ TODO ] |
| FAQ | docs/faq/general.mdx | [ TODO ] |
| API | docs/api/overview.mdx | [ TODO ] |

## Process

1. Fetch wiki page HTML/wikitext
2. Convert to clean MDX
3. Add Docusaurus frontmatter (id, title, sidebar_label, description)
4. Move file from content-drafts/ to the target doc path
5. Update status above to [ DONE ]
