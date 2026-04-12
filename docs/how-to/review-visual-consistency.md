---
id: how-to-review-visual-consistency
title: Review Visual Consistency
sidebar_label: Review Visual Consistency
slug: review-visual-consistency
description: Learn how to compare shots across a scene or project to ensure visual consistency.
---

# Review Visual Consistency

**Goal:** Scan your project for visual inconsistencies — lighting changes, color shifts, actor appearance drift, set continuity errors — before submitting for final render.

Visual consistency is what makes a film feel like one cohesive work rather than a collection of disconnected clips. When lighting temperature jumps between shots in the same scene, or a set prop disappears between cuts, or a character's costume color shifts slightly, audiences notice — even if they can't name what's wrong. ACT3 AI's Visual Consistency Checker automates the comparison across all your rendered shots and groups issues by type so you can fix them efficiently before spending credits on final-quality renders.

---

## Steps

1. **Open the Visual Consistency Checker.** Go to **Tools → Visual Consistency** in the top menu. The checker opens as a full-panel overlay showing a project-level filmstrip and a suite of analysis options.

2. **Choose the scope of the scan.** Use the **Scope** selector to choose what to analyze:
   - *Whole project* — checks all rendered shots across every scene. Use this before your final render pass.
   - *Selected scenes* — checks only the scenes you've highlighted in the sidebar. Use this after re-rendering a specific section of the project.

3. **Run the scan.** Click **Run Visual Consistency Scan**. ACT3 AI's AI pipeline analyzes frame data across all shots in scope, comparing lighting temperature, color grading, actor appearance, and set elements. For a full feature-length project this typically takes 2–4 minutes. A progress indicator shows which scene is currently being analyzed.

4. **View results grouped by issue type.** Results are organized into four categories in the left results panel:
   - *Lighting* — shots where the color temperature or shadow direction is inconsistent with adjacent shots in the same scene.
   - *Color* — shots where the overall color palette or saturation has shifted noticeably.
   - *Actor* — shots where a character's face, skin tone, or body proportions have drifted from their reference appearance.
   - *Set* — shots where set elements (props, background details, environment) appear or disappear inconsistently between cuts.
   Each category shows a count of flagged issues and a severity indicator.

5. **Click on a flagged issue to jump to the shot.** Selecting any issue in the results list immediately jumps the main editor to that shot and highlights the specific element that triggered the flag. A comparison panel shows the flagged shot alongside the nearest reference shot so you can see the difference directly.

6. **Decide how to handle each issue: ignore, fix manually, or auto-correct.** For each flagged shot, three options appear:
   - *Ignore* — marks the issue as reviewed and removes it from the active list. Use this when the variation is intentional (a flashback scene intentionally uses cooler color temperature).
   - *Fix Manually* — opens the shot's full settings so you can adjust lighting, color grade, or regeneration parameters yourself before re-rendering.
   - *Auto-Correct* — ACT3 AI applies a correction derived from the reference shot (matching color temperature, adjusting grade, or re-anchoring the actor) and queues the shot for regeneration.

7. **Apply auto-corrections where available.** For lighting and color issues, auto-correct resolves most problems reliably. For actor drift, auto-correct applies the same consistency enforcement used by the Actor Consistency Checker. Click **Apply All Auto-Corrections** to batch-apply corrections to every issue that has an auto-correct option available.

8. **Re-run the scan to confirm issues are resolved.** After regenerated shots complete, click **Re-run Scan**. The issue count in each category should drop. Remaining flagged issues are typically ones that require manual attention — usually extreme lighting setups or intentional stylistic departures.

9. **Export a consistency report PDF.** Click **Export Report** to generate a PDF summary of the scan results: total issues found, issues resolved, remaining open issues, and thumbnails of each flagged shot. Use this as a production quality checklist or share it with collaborators to document what was reviewed before sign-off.

---

## Next steps

- [Check Actor Consistency Across Shots](/how-to/check-actor-consistency)
- [Review and Approve Shots](/how-to/review-and-approve-shots)
- [Lock Approved Elements](/how-to/lock-approved-elements)
