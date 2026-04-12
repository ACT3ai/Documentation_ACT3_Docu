---
id: how-to-tag-shots-for-batch
slug: tag-shots-for-batch
title: Tag Shots for Batch Rendering
sidebar_label: Tag Shots for Batch
description: Learn how to tag multiple shots so they render together in a single batch job.
---

# Tag Shots for Batch Rendering

**Goal:** Mark multiple shots with a tag so you can render them all at once instead of one at a time.

Batch rendering is how you make efficient use of your credits and the render queue. Instead of clicking Generate on each shot individually, you tag a group of shots — all the shots that need a final-quality render, or all the flagged shots that were just revised — and kick them off together. The render queue handles the rest while you work on something else.

If you are new to production workflows: think of tagging as making a playlist. You pick the songs (shots), give the playlist a name (tag), and then hit play (Batch Render). Everything runs in order.

---

## Steps

1. **Open the shot list for a scene or the full project timeline.** To tag shots within a single scene, open the Scene panel and switch to the Shots tab. To tag shots across the whole project, open the Timeline view in the Editor center column. Both views show all shots with their current status and thumbnails.

2. **Click the Tag icon on a shot.** Hover over a shot thumbnail or row. A Tag icon (price-tag shape) appears in the shot's action toolbar. Click it. The Tag dialog opens for that shot.

3. **Choose or create a tag.** The Tag dialog shows your existing tags as clickable chips. Click an existing tag to apply it, or type a new tag name in the text field and press Enter to create it. Tags are freeform text — use names that describe the batch's purpose. Common examples: *"needs-regen"* for shots flagged for revision, *"final-render"* for shots ready for high-quality generation, *"client-review"* for shots you want to export for a client preview.

4. **Apply the tag to multiple shots at once.** To tag many shots in one step, use multi-select. Click the first shot you want to tag. Hold `Shift` and click the last shot in a range to select everything in between. Or hold `Cmd` (Mac) and click individual shots to build a non-contiguous selection. With multiple shots selected, click the Tag icon on any selected shot — the tag dialog applies to all selected shots simultaneously.

5. **Confirm the tagged shots.** After tagging, look for the tag chip badge on each shot thumbnail in the timeline. You can also filter the shot list by tag using the Filter dropdown at the top of the Shot List panel → Filter by Tag → select your tag name.

6. **Go to the Render Queue.** Click Render Queue in the left sidebar to open the queue panel.

7. **Click Batch Render.** In the top-right corner of the Render Queue panel, click the Batch Render button. A Batch Render setup dialog opens.

8. **Filter by tag.** In the Batch Render dialog, use the Tag filter dropdown to select the tag you just applied — for example, *"final-render."* The dialog populates with a list of all shots carrying that tag, showing each shot's name, current quality setting, and estimated credit cost per shot.

9. **Review the estimated credit cost.** At the bottom of the Batch Render dialog, a total estimated cost is shown for all shots in the batch. Review this number against your available credit balance (visible in the top-right of the app). If the cost exceeds what you want to spend, deselect individual shots within the dialog by unchecking them.

10. **Start the batch render.** Click Start Batch Render. All selected shots enter the Render Queue as a grouped batch. The queue panel shows the batch as a collapsible group. You can monitor progress, cancel individual shots, or cancel the whole batch from the Render Queue panel at any time.

---

## Next steps

- [Manage the Render Queue](/how-to/manage-render-queue)
- [Monitor Your Credits](/how-to/monitor-credits)
- [Review and Approve Shots](/how-to/review-and-approve-shots)
