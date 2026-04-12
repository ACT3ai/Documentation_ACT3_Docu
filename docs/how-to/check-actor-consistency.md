---
id: how-to-check-actor-consistency
slug: check-actor-consistency
title: Check Actor Consistency Across Shots
sidebar_label: Check Actor Consistency
description: Learn how to review and ensure an actor looks consistent from shot to shot.
---

# Check Actor Consistency Across Shots

**Goal:** Verify that a digital actor looks the same across multiple shots and scenes — same face, same body proportions — so your film doesn't have continuity breaks.

AI video generation is probabilistic: even with the same actor parameters, a character can drift in appearance between shots — a slightly different jaw, lighter skin tone, or different hair texture. In a short clip this is subtle; across a 90-minute film it becomes a continuity error that pulls viewers out of the story. ACT3 AI's Consistency Checker compares rendered frames across your project and flags shots where the actor's appearance has drifted beyond an acceptable threshold.

---

## Steps

1. **Open the Consistency Checker.** Go to **Tools → Actor Consistency** in the top menu, or click the **Consistency** button inside the Casting panel (the shield icon next to the actor's name). The Consistency Checker opens as a full-panel overlay.

2. **Select the actor to check.** At the top of the Consistency Checker, click **Select Actor** and choose the digital actor from your cast list. Only actors with at least two rendered shots can be checked — unrendered shots are skipped automatically.

3. **Choose the scenes and shots to scan.** By default the checker targets the entire project. Use the **Scope** selector to narrow it to specific scenes or a shot range — useful if you only re-rendered a section and want to verify it didn't introduce drift.

4. **Run the check.** Click **Run Consistency Check**. ACT3 AI's visual AI compares the actor's face and body across all selected rendered frames. For large projects this can take 30–60 seconds. A progress bar shows the scan advancing scene by scene.

5. **View the results — flagged shots are highlighted.** Results appear as a filmstrip sorted by severity. Shots with significant drift show a red border; minor variations show yellow. Shots that passed show green. A **Drift Score** (0–100) indicates how far each shot deviates from the reference frame — scores above 20 are typically worth reviewing.

6. **Click on a flagged shot to see the comparison.** Selecting a flagged shot opens a side-by-side comparison: the reference frame (your actor's canonical appearance) on the left, the flagged shot's frame on the right. Differences are highlighted in the overlay mode — hover over the face to see the exact regions where drift was detected.

7. **Regenerate flagged shots with consistency enforcement enabled.** For each flagged shot, click **Regenerate with Consistency**. This re-renders the shot with an additional consistency constraint applied to the AI prompt, anchoring the actor's appearance closer to the reference frame. You can batch-select multiple flagged shots and regenerate them all at once.

8. **Re-run the check to confirm.** After regenerating, click **Re-run Check** to scan the updated shots. Drift scores should drop. If a shot continues to score high after two regenerations, consider adjusting the lighting in that scene — extreme lighting contrast is the most common cause of persistent actor drift.

---

## Tips

- Consistency drift is more common in long projects with many scene transitions. Run this check before submitting for final renders, not after — catching it early saves credits.
- The reference frame ACT3 AI uses for comparison is taken from the first rendered shot in which the actor appears. If that first shot has unusual lighting or an extreme angle, the checker may flag normal-looking shots as drifted. You can change the reference frame by clicking **Set as Reference** on any shot in the filmstrip.
- For scenes with dramatic lighting (night scenes, candlelight, strobes), set the consistency threshold to **Relaxed** so minor color shifts from the lighting don't generate false positives.

---

## Next steps

- [Manage Your Cast List](/how-to/manage-cast-list)
- [Review and Approve Shots](/how-to/review-and-approve-shots)
- [Set Per-Scene Actor Appearance](/how-to/per-scene-actor-appearance)
