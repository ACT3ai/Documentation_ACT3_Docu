---
id: how-to-shot-costume-detail
slug: shot-costume-detail
title: Add Costume Detail to a Shot
sidebar_label: Add Costume Detail to Shot
description: Learn how to specify costume close-ups or detail notes for an individual shot.
---

# Add Costume Detail to a Shot

**Goal:** Add a costume-level note to a specific shot — a smudge, a torn button, a detail that only appears in this one moment — without changing the character's full costume definition.

A character's default costume is their baseline. A scene override adjusts that baseline for an entire scene. But sometimes a single shot needs one additional detail: a bloodstain after a fight, mud on the knees after a fall, a button popped during a struggle. The shot-level costume note is a lightweight additive layer — it adds to the AI prompt without replacing or modifying the character's existing costume definition. The base costume stays intact; the note is appended for this shot only.

---

## Steps

1. **Open the shot.** Navigate to the shot where the detail appears. You can click the shot in the Timeline, the Shot List, or the Script view. The Shot panel opens on the right side of the Editor.

2. **Go to the Costume tab in the Shot panel.** The Shot panel has several tabs: Action, Camera, Lighting, Costume, Audio, and Prompt. Click **Costume**. This is a per-shot override layer that is separate from the character's main costume definition and from any scene-level override.

3. **Identify the character the detail applies to.** The Costume tab lists each character who appears in this shot. Find the character you want to add the note for and click **Add Detail Note** next to their name.

4. **Write the shot-specific detail note.** Describe only the detail that is new or changed for this shot. Do not re-describe the full costume — the AI already has that from the default or scene override. Focus on what is additive: *"add a bloodstain on the left shoulder of the jacket — this is right after the fight scene, the stain is dark red, roughly hand-sized"*.

5. **Understand how the note adds to the AI prompt.** Click **Preview Prompt** to see the assembled costume instruction for this shot. You will see the character's base costume description (or scene override if one is active), followed by the detail note you just added. The note is appended — it does not replace the base costume text.

6. **Preview the prompt to confirm the detail is included.** Read the full costume instruction in the preview and verify: the base costume is intact, the detail note appears at the end, and the combined description is unambiguous. If the note contradicts the base costume in any way (for example, you add a detail about a jacket that the base costume does not include), clarify the base costume first.

7. **Generate or regenerate the shot.** Click **Generate Shot** to render with the detail note included. If this shot was already rendered and approved, click **Regenerate** — the detail note will be part of the new render. You will be shown the credit cost before confirming.

8. **Confirm the note persists on regeneration.** Shot-level costume detail notes are saved permanently with the shot. If you regenerate the shot in the future (for any reason — camera adjustment, lighting change, dialogue update), the costume detail note is included every time unless you manually delete it.

---

## Next steps

- [Set Per-Scene Costume Overrides](/how-to/per-scene-costume)
- [Regenerate a Shot](/how-to/regenerate-a-shot)
- [Review and Approve Shots](/how-to/review-and-approve-shots)
