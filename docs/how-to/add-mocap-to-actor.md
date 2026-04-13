---
id: how-to-add-mocap-to-actor
slug: add-mocap-to-actor
title: Add Motion Capture to an Actor
sidebar_label: Add Mocap to Actor
description: Learn how to apply a motion capture clip to drive an actor's performance.
---

# Add Motion Capture to an Actor

**Goal:** Apply motion capture data to a character so their body movement in a shot is driven by real human performance rather than AI-generated motion.

Motion capture (mocap) records the precise position and rotation of a person's joints over time, then replays that movement on a [digital actor](/how-to/create-digital-actor). In ACT3 AI, mocap drives the character's body pose frame-by-frame inside a shot. The result is movement that looks authentically human — critical for action sequences, expressive physical performances, and dance. For simple actions like standing, sitting, or casual walking, AI-generated motion is often sufficient and requires no mocap file. Mocap rendering uses [credits](/account/credits) like any other render operation.

---

## Steps

1. **Open a shot in the editor.** From the Scene panel or the Timeline, click the shot you want to add mocap to. The shot opens in the Shot Editor with its properties visible on the right side.

2. **Go to the Actor tab in the Shot panel.** On the right-side panel, click the **Actor** tab. You'll see a list of characters assigned to this shot, each with their current motion setting (usually *AI Generated*).

3. **Select the character you want to drive with mocap.** Click the character's row to expand their motion settings.

4. **Click Add Motion Capture.** The **Add Motion Capture** button appears below the character's current motion setting. Click it to open the Mocap Source selector.

5. **Upload a mocap file or record live.** Two options appear:
   - *Upload file* — drag and drop a **.bvh** file (BioVision Hierarchy format, the standard mocap format). BVH files can be exported from MotionBuilder, Blender, or any commercial mocap suit.
   - *Record from webcam or phone* — click **Record Live** to open the markerless capture interface. Position yourself in frame, click **Start Recording**, perform the action, then click **Stop**. ACT3 AI processes the video to extract a BVH-compatible motion track.

6. **Preview the motion in the shot.** Once the file is uploaded or the recording is processed, click **Preview**. The shot's timeline plays back with the character's body driven by the mocap data. Check that the movement timing and character scale look correct.

7. **Adjust timing — trim the mocap clip to match shot duration.** Use the **Clip Trim** handles under the preview to set the in and out points of the mocap clip. The clip must match the shot's duration exactly; the trim tool lets you isolate the specific section of the performance you need. Use the **Offset** slider to shift the clip forward or backward in time if the action starts too early or too late.

8. **Apply the mocap to the shot.** Click **Apply**. The character's motion setting updates from *AI Generated* to *Motion Capture — [filename]*. The mocap data is now stored with the shot.

9. **Regenerate the shot with mocap active.** Click **Regenerate Shot** to produce the final render using the mocap-driven performance. The credit cost estimator updates to reflect that mocap rendering is slightly more complex than standard AI motion.

---

## Tips

- Use mocap for action sequences, fight choreography, dance, or any movement that needs to look naturalistic and precise. AI-generated motion works fine for simple walking, standing, and seated dialogue.
- BVH files from free sources (Mixamo, CMU Graphics Lab) are compatible with ACT3 AI. Download a clip, upload it, and preview before committing credits to a full render.
- If the mocap skeleton proportions don't match your digital actor's body, use the **Retargeting** slider in the Clip Trim panel to rescale joint offsets automatically.

---

## Next steps

- [Create a Digital Actor](/how-to/create-digital-actor)
- [Review Lipsync](/how-to/review-lipsync)
- [Review and Approve Shots](/how-to/review-and-approve-shots)
