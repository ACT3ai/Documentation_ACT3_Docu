---
id: screenwriters-final-draft
slug: final-draft
title: Final Draft — Import, Export, and Round-Trip Editing
sidebar_label: Final Draft
sidebar_position: 7
description: How to bring your Final Draft screenplay into ACT3 AI, work on it in both tools simultaneously, and export back to FDX format.
---

# Final Draft

Final Draft is the industry standard screenwriting application. If you write scripts professionally, you almost certainly have your work in Final Draft — and you likely don't want to give that up just to use ACT3 AI. You don't have to.

ACT3 AI is designed for a round-trip workflow: write in Final Draft, import to ACT3 AI for production, export back to FDX when you want to revise, re-import when you're ready to generate. Both tools stay in sync across the full production.

---

## What ACT3 AI reads from a Final Draft file

When you import a `.fdx` file, ACT3 AI parses:

| Final Draft element | How ACT3 AI uses it |
|---|---|
| Scene headings (INT/EXT, location, time) | Creates a Scene for each heading; location informs Set selection; time informs default lighting |
| Action lines | Informs shot description suggestions; parsed for visual direction and character blocking |
| Character names | Creates a Character entry for each unique speaking role |
| Dialogue | Assigned to each Character; used for TTS voice generation and lipsync |
| Parentheticals | Read as performance direction for the Character in that line |
| Transitions (CUT TO, DISSOLVE TO) | Applied as transition suggestions in the timeline |
| Scene numbers | Preserved if present; used to match re-imported revisions |
| Title page | Imports project title, author, and contact information |

What is **not** imported: production notes, locked revision pages, color revisions (pink, blue, etc.), hidden text, and watermarks. These are Final Draft production tools that don't map to ACT3 AI's structure.

---

## Importing a Final Draft file

1. In ACT3 AI, go to **File → Import → Script**
2. Click **Browse** and select your `.fdx` file
3. ACT3 AI parses the file and shows a preview of the imported structure
4. Review the scene list — confirm that every scene heading was correctly identified
5. Review the character list — confirm that character names match what you expect
6. Click **Import** to create the project

If any scene heading was not parsed (unusual formatting, non-standard slug lines), it will appear in the **Unmatched Elements** list. You can manually assign these to scenes or add them as new scenes.

**Tip:** Before importing, check your Final Draft file for non-standard formatting. Unusual slug lines ("EXT. — THE HOUSE — NIGHT" rather than "EXT. THE HOUSE - NIGHT"), untitled scenes, or heavily formatted action blocks can cause parsing gaps.

---

## Exporting back to Final Draft

When you want to continue writing in Final Draft after working in ACT3 AI:

1. Go to **File → Export → Script**
2. Select **Final Draft (.fdx)** format
3. Choose export options:
   - **Script only** — Clean FDX matching your current script content
   - **With ACT3 AI notes** — Includes scene production notes as Final Draft scene notes
   - **With beat markers** — Adds beat labels as scene headings in a non-printing color
4. Download the file and open in Final Draft

The exported FDX file is fully editable in Final Draft. Continue revising, then re-import when ready.

---

## Round-trip workflow

This workflow keeps Final Draft as your writing tool and ACT3 AI as your production tool, with clean handoffs between the two:

```
Final Draft (write draft 1)
    ↓  Import to ACT3 AI
ACT3 AI (structure review, shot list, AI generation)
    ↓  Export script (FDX)
Final Draft (revise draft 2 based on production learnings)
    ↓  Re-import to ACT3 AI
ACT3 AI (update shots, regenerate changed scenes)
```

On re-import of a revised draft, ACT3 AI detects which scenes changed (by scene number or by text comparison if numbers are absent) and marks them for review. Shots in unchanged scenes remain intact — you only need to regenerate what actually changed.

---

## Keeping the two tools in sync

A few practices prevent confusion during round-trip editing:

**Lock scenes before writing around them.** If you have approved shots for Scene 12 and you want to be sure those don't get flagged for review, lock Scene 12 before re-importing the revised script.

**Don't renumber scenes in Final Draft without a reason.** Scene numbers are the key ACT3 AI uses to match elements on re-import. Renumbering scenes mid-production means ACT3 AI cannot match them to existing work.

**Use ACT3 AI's comparison view before re-importing.** The Compare Script Versions tool lets you see exactly what changed between drafts before committing to a re-import. This prevents accidental regeneration of scenes you didn't intend to change. See [How to Compare Script Versions](/how-to/compare-script-versions).

**Notes in Final Draft vs. notes in ACT3 AI:** Final Draft scene notes and ACT3 AI production notes are separate and don't sync automatically. Keep production-level notes (shot direction, set requirements, casting notes) in ACT3 AI; keep story-level notes (character motivation, thematic questions, structural concerns) in Final Draft.

---

## Final Draft formats supported

| Format | Import | Export |
|---|---|---|
| Final Draft FDX (.fdx) | ✓ | ✓ |
| Final Draft 8 and earlier (.fdr) | ✓ | — |
| Fountain / Markdown (.fountain) | ✓ | ✓ |
| PDF (screenplay) | ✓ | ✓ |
| Plain text (.txt) | ✓ | ✓ |

---

## Related

- **[How to Import a Script](/how-to/import-a-script)** — Step-by-step import guide
- **[How to Export a Script](/how-to/export-script)** — Exporting back to FDX and other formats
- **[How to Compare Script Versions](/how-to/compare-script-versions)** — Reviewing changes before re-importing
- **[How to Use the Script Editor](/how-to/use-the-script-editor)** — Editing scripts directly in ACT3 AI
- **[Integrations: Final Draft](/integrations/final-draft)** — Technical integration reference
