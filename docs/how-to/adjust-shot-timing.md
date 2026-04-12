---
id: how-to-adjust-shot-timing
slug: adjust-shot-timing
title: Adjust Shot Timing
sidebar_label: Adjust Shot Timing
description: Learn how to change the duration and pacing of individual shots in the timeline.
---

# Adjust Shot Timing

**Goal:** Change how long a shot plays — its duration in the film — so the pacing of a scene feels right.

Shot timing is one of the most powerful pacing tools in editing. A beat held two seconds longer creates tension. A shot cut short creates urgency. ACT3 AI lets you adjust timing directly in the timeline without re-rendering any video — the AI-generated clip is trimmed or extended using its existing frames.

Timing adjustments are non-destructive: the original rendered video is preserved, and you can always reset a shot back to its original duration.

---

## Steps

1. **Open the Timeline.** In the Editor, click the **Timeline** tab in the center panel. Your scenes and shots appear as horizontal blocks.

2. **Click on a shot block to select it.** Click once on any shot block. A blue highlight appears around it. The shot's properties load in the right panel.

3. **Read the current duration.** In the right panel under **Shot Properties**, the **Duration** field shows the current clip length — for example, *4.5s*. The timeline block also shows this number printed inside it.

4. **Drag the right edge of the shot block to resize it.** Hover over the right edge of the selected shot block until the cursor changes to a resize arrow. Then drag right to extend the shot or drag left to shorten it. The duration field in the properties panel updates live as you drag.

5. **Type a precise duration.** If you want an exact number, click the **Duration** field in the right panel and type the value you want — for example, *3.0* for exactly three seconds. Press Enter to confirm.

6. **Understand what duration change does.** Extending a shot beyond the original render length causes the last frame to hold as a still (freeze frame) for the added time — the AI does not re-render new video frames. Shortening a shot trims from the end. Neither action changes the underlying video file.

7. **Add a hold frame at the end of a short clip.** If you want a clean pause on the final frame — useful for a reaction shot or a reveal — extend the shot duration by 0.5–1.0 seconds beyond its rendered length. The freeze frame creates a natural hold beat.

8. **Understand how adjacent shots interact.** If you extend a shot and it runs into the next shot, the next shot is pushed right (later in time). ACT3 AI does not automatically overlap shots — that is controlled explicitly through transitions. Shots in the same scene do not overlap unless you set a transition.

9. **Preview the updated timing.** Press the **Space bar** with the timeline focused to play from the current playhead position. Watch the scene play through with the new timing. If the pacing still feels off, adjust again.

10. **Reset to original duration if needed.** Right-click the shot block and choose **Reset Duration** to restore the shot to the duration of the original rendered video.

---

## Tips

- Adjust timing after all shots in a scene are generated. Trying to pace a scene with placeholder shots is guesswork — wait until you can see and hear the actual output.
- Watch the scene at least twice before adjusting. The first pass your eye catches the obvious problems; the second pass you feel the rhythm.
- Short shots (under 1.5 seconds) rarely register emotionally for the viewer. If a shot is important, give it at least 2 seconds.

---

## Next steps

- [Review Shots in the Timeline](/how-to/review-shots-in-timeline)
- [Assemble a Scene](/how-to/assemble-scene)
- [Export for Delivery](/how-to/export-for-delivery)
