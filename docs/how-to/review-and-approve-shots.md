---
id: how-to-review-and-approve-shots
slug: review-and-approve-shots
title: Review and Approve Shots
sidebar_label: Review and Approve Shots
description: Learn how to screen rendered shots and mark them approved for final delivery.
---

# Review and Approve Shots

**Goal:** Watch AI-generated shots, mark the ones that work, flag the ones that need changes, and build toward a locked cut.

After the render queue delivers your shots, the review pass is where you act as the director screening dailies — deciding what stays, what gets regenerated, and what needs notes before you call a scene finished. ACT3 AI tracks approval status per shot so you and your team always know the state of the cut.

If you are new to film terminology: a "shot" is one continuous camera angle. A "scene" is a group of shots at the same location and time. Approving all shots in a scene means that scene is ready for export.

---

## Steps

1. **Open the Editor or Timeline.** Click the Editor icon in the left sidebar, or press `E`. Switch the center column to Timeline view if it is not already showing shot thumbnails.

2. **Select the first shot to review.** Click a shot thumbnail in the Timeline. The shot loads in the preview panel. If the shot has not rendered yet, the thumbnail shows a clock icon — only rendered shots can be approved.

3. **Play the shot preview.** Click the Play button in the preview panel, or press `Space`. Watch the full clip. Pay attention to framing, character performance, lighting, and continuity with adjacent shots.

4. **Approve a shot that works.** Click the green checkmark (Approve) button below the preview, or press `A`. The shot thumbnail in the Timeline gains a green indicator. Approved shots are protected from accidental re-generation.

5. **Flag a shot that needs changes.** Click the orange flag button below the preview, or press `F`. The thumbnail gains an orange indicator. A note field opens automatically — fill it in before moving on.

6. **Add a revision note on a flagged shot.** Type your direction in the note field that appears after flagging. Be specific: *"Camera is too wide — tighten to a medium close-up on Elena's face"* or *"Background extras are walking the wrong direction."* Notes are visible to any team member who opens the shot.

7. **Filter the shot list by status.** Open the Shot List panel (left sidebar → Shot List). Use the status filter dropdown to show All, Approved, Flagged, or Pending shots. Use this to focus the review session on only flagged shots after your first pass.

8. **Move to the next shot.** Press the right arrow key (`→`) or click the Next Shot button to advance. Hold `Shift` while pressing `→` to jump to the next scene's first shot.

9. **Continue the review pass.** Work through every shot in the scene. A progress indicator at the top of the Shot List panel shows how many shots remain unreviewed.

10. **Check the scene completion indicator.** When every shot in a scene has been approved, the scene row in the Timeline turns green and shows a "Scene Complete" badge. At this point you can lock the scene to protect the entire thing.

11. **Review the full project summary.** Open Project Settings → Production Status tab to see a per-scene breakdown — how many shots are approved, flagged, or still pending across the entire project.

12. **Start regeneration on flagged shots.** When the review pass is done, filter to Flagged shots, open each one, apply your notes, and click Regenerate. The shot re-enters the Render Queue and its status resets to Pending until the new version comes back for another review.

## Tips

- Approve shots in scene order — it is easier to judge continuity when you watch the shots in sequence rather than jumping around.
- Use keyboard shortcuts to stay in flow: `A` to approve, `F` to flag, `→` / `←` to navigate. You rarely need to touch the mouse during a fast review pass.
- Run a second review pass after regenerating flagged shots before locking the scene — the new render may introduce new issues.

---

## Next steps

- [Regenerate a Shot](/how-to/regenerate-a-shot)
- [Lock Approved Elements](/how-to/lock-approved-elements)
- [Adjust Shot Timing](/how-to/adjust-shot-timing)
