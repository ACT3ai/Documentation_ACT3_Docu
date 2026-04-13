---
id: how-to-manage-render-queue
slug: manage-render-queue
title: Manage the Render Queue
sidebar_label: Manage Render Queue
description: Learn how to monitor, reorder, pause, and cancel jobs in the render queue.
---

# Manage the Render Queue

**Goal:** Monitor and control which shots are rendering, pause or cancel jobs, and prioritize the shots you need reviewed first.

The Render Queue is the production engine of ACT3 AI. When you click Generate on a shot or run a batch render, the job enters the queue and waits its turn. Understanding the queue lets you respond to a director's urgent request by bumping one shot to the top, or catch a bad prompt before it wastes [credits](/account/credits) by canceling a job that has not started yet.

If you are new to production workflows: think of the Render Queue like a print queue. Jobs run in order. You can reorder, pause, or cancel jobs before they complete — but once a job is running, you have to wait for it or cancel it.

---

## Steps

1. **Open the Render Queue panel.** Click Render Queue in the left sidebar, or look for the notification bar at the bottom of the app — when jobs are running, it shows a progress indicator. Click the progress indicator to jump straight to the queue. The Render Queue panel opens showing all active and recent jobs.

2. **Read the job list.** Each job row shows: the shot name and scene, the AI engine assigned to it (e.g., Veo 3, Runway), the quality tier (Draft / Standard / High / 4K), the credit cost, the current status, and a progress bar for in-progress jobs.

3. **Understand the status icons.** Queued (clock icon) — the job is waiting to start. Processing (spinning circle) — the job is actively rendering. Completed (green checkmark) — the render finished and the shot is ready to review. Failed (red X) — the job encountered an error. Canceled (gray dash) — the job was stopped before completion.

4. **Cancel a queued job.** Find the job in the queue with status Queued (not yet started). Click the three-dot menu on the right side of the job row and select Cancel. The job is removed from the queue and its credits are not charged. If a job has already moved to Processing, you can still cancel it but credits for partial processing may be consumed depending on the engine.

5. **Re-prioritize a shot to the top of the queue.** Find the job you need sooner. Click and drag the job row upward. A blue insertion line shows where it will land. Drag it to the top of the Queued section and release. The shot will render next when the current in-progress job finishes. Alternatively, click the three-dot menu → Move to Top.

6. **Understand how batch renders appear.** When you start a batch render (from the Tag Shots for Batch workflow), the batch appears as a collapsible group row in the queue. Click the chevron on the left of the batch row to expand it and see each individual shot. You can cancel the entire batch from the group row, or cancel individual shots from within the expanded view.

7. **Retry a failed job.** Find a job with the Failed status. Click the Retry button (circular arrow icon) on the right side of the job row. The job re-enters the queue at the bottom. If the failure was caused by a bad prompt (the error message will say "prompt rejected"), open the shot and revise the prompt before retrying.

8. **View the error detail on a failed job.** Click the red X icon or the three-dot menu → View Error on a failed job. A dialog shows the error code and a plain-language explanation — for example, "Prompt contained restricted content" or "Engine timeout — server unavailable." Use this to decide whether to retry immediately or edit the shot first.

9. **View render history.** Scroll down past the active queue to the History section, or click the History tab at the top of the Render Queue panel. All completed and canceled jobs for the past 30 days appear here with timestamps, credit costs, and engine used. Click any history row to jump to the corresponding shot.

---

## Next steps

- [Tag Shots for Batch Rendering](/how-to/tag-shots-for-batch)
- [Monitor Your Credits](/how-to/monitor-credits)
- [Review and Approve Shots](/how-to/review-and-approve-shots)
