---
id: how-to-set-camera-movement
slug: set-camera-movement
title: How to Set Camera Movement
sidebar_label: Set Camera Movement
description: How to define how the camera moves through a shot in ACT3 AI.
---

# How to Set Camera Movement

**Goal:** Tell the AI how the camera moves in a shot — from a locked-off static frame to a complex dolly move.

Camera movement is one of the most expressive tools in cinematography. In ACT3 AI, you define it per shot in the Motion tab.

---

## Steps

1. **Open the shot panel.** Click the shot in the timeline or in the scene's shot list.

2. **Go to the Motion tab.** The Motion tab shows the camera movement settings.

3. **Choose a movement type.** Select from:
   - **Static** — Camera doesn't move. Clean, stable frame.
   - **Pan** — Camera rotates horizontally on a fixed axis. Following action left or right.
   - **Tilt** — Camera rotates vertically on a fixed axis. Looking up or down.
   - **Dolly** — Camera physically moves forward or backward through space.
   - **Track (Truck)** — Camera moves sideways parallel to the subject.
   - **Crane / Boom** — Camera rises or falls.
   - **Handheld** — Camera is unstabilized, slightly shaky. Adds urgency or intimacy.
   - **Steadicam** — Smooth movement through space, following a subject.
   - **Zoom** — Focal length changes while camera stays still. Use sparingly.

4. **Set the direction and amount.** For Pan and Tilt, choose left/right or up/down and the speed — slow, medium, fast. For Dolly and Track, specify the distance and direction.

5. **Place the camera path in the top-down editor (optional).** Open the Top-Down Editor and draw the camera's movement path as a spline. This gives the AI a spatial reference for exactly how the camera travels through the set.

6. **Review and generate.** Check the assembled prompt in the Prompt tab. Generate the shot.

---

## Next steps

- [Set up a shot](/how-to/set-up-a-shot) for the full shot setup process
- [Place a camera in the top-down editor](/how-to/place-camera-top-down) for spatial placement
- [Set up scene lighting](/how-to/set-up-lighting)
