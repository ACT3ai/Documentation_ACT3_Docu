---
id: how-to-compare-script-versions
slug: compare-script-versions
title: Compare Script Versions
sidebar_label: Compare Script Versions
description: Learn how to view a side-by-side diff of two script versions.
---

# Compare Script Versions

**Goal:** Review two versions of your script side by side so you can see exactly what the AI changed or track your own revisions before deciding what to keep.

Every time you or the AI makes a significant change to your script — a rewrite, a dialogue pass, an AI expansion — ACT3 AI saves a version snapshot automatically. The version history panel lets you browse those snapshots, compare any two of them in a color-coded diff view, and selectively restore earlier text. Think of it as "track changes" for your screenplay.

---

## Steps

1. **Open the Script Editor.** In the left sidebar, click **Script Editor**. The editor opens showing your current script in the center column.

2. **Open the Version History panel.** In the top-right toolbar of the Script Editor, click the **History** icon (a clock with an arrow). A panel slides in from the right showing a chronological list of saved versions. Each entry shows a timestamp, the type of change (*Manual edit*, *AI rewrite*, *Import*, etc.), and a short auto-generated summary of what changed.

3. **Select a version to inspect.** Click on any version entry in the list. The Script Editor switches to showing that version's full text in read-only mode. Scroll through it to get a sense of what the script looked like at that point.

4. **Switch to Compare mode.** With a version selected, click the **Compare** button at the top of the Version History panel. A second version selector appears. By default, it compares the selected version against the *Current* version. To compare two historical versions instead, use the second selector to choose a different snapshot.

5. **Read the diff.** The editor splits into two columns. Additions (text in the current/right version that was not in the older/left version) are highlighted in green. Deletions (text that existed in the older version but not in the current one) are highlighted in red with strikethrough. Lines with no changes appear in standard text. Scroll both columns together to review the full script.

6. **Jump between changes.** Use the **Previous change** (↑) and **Next change** (↓) navigation buttons at the top of the compare view to jump directly from one diff block to the next, skipping unchanged sections.

7. **Accept a specific change.** In the diff view, hover over any green (addition) block. A **Keep this change** button appears inline. Clicking it does nothing to your current script if the addition is already present — it simply marks that change as reviewed. For red (deletion) blocks, hover and click **Restore this line** to bring the deleted text back into your current version.

8. **Restore a previous version in full.** If you want to roll back your entire script to an earlier snapshot, click **Restore this version** at the top of the Version History panel while viewing that version. A confirmation dialog warns you that your current script will be replaced. Your current version is automatically saved as a new snapshot before the restore completes, so you can undo the restore if needed.

9. **Export a specific version.** While viewing a historical version in the Version History panel, click **Export this version**. The export dialog opens (see [Export Your Script](/how-to/export-script) for format options). This lets you download an older draft without affecting your current working version.

---

## Tips

- Version history is saved automatically, but you can also force a manual save with **Cmd+S** (Mac) or **Ctrl+S** (Windows) in the Script Editor. Manual saves are labeled with whatever note you type in the save dialog — use this to create named checkpoints like *Before Act 2 rewrite* or *First complete draft*.
- The compare view works at the line level, not the word level. For fine-grained word-level differences in dense dialogue, zoom in and read carefully — the line highlight tells you *something* changed, but not necessarily which word.
- If the AI just ran a full rewrite pass on your script, always compare before approving. AI rewrites can silently change character names, remove subplots, or alter scene locations. The diff makes these easy to spot.

---

## Next steps

- [Use the Script Editor](/how-to/use-the-script-editor) for day-to-day script writing and editing
- [Export your script](/how-to/export-script) to download a version in Final Draft, PDF, or plain text
- [Expand an idea to a full script](/how-to/expand-idea-to-script) to see how AI-generated scripts are created
