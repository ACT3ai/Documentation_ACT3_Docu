---
id: how-to-place-camera-top-down
slug: place-camera-top-down
title: Place Camera in the Top-Down Editor
sidebar_label: Place Camera Top-Down
description: Learn how to position and aim the camera using the top-down canvas view.
---

# Place Camera in the Top-Down Editor

**Goal:** Set exactly where the camera is, what direction it points, and what its field of view is — using the overhead canvas view — so every shot in the scene renders from the angle you want.

The Top-Down Editor gives you an aerial view of your scene, like a stage diagram. Placing the camera here tells ACT3 AI precisely where the camera lives in physical space, where it's aimed, and how wide or narrow its field of view is. Different camera positions produce different shots — a wide master from across the room versus a tight over-the-shoulder — so adding multiple camera positions gives you full coverage of the scene.

Experienced filmmakers: this is your traditional blocking diagram with a camera marked on it. Place it where you'd stand with the camera on set.

---

## Steps

1. **Open the Top-Down Editor for your scene.** Click the scene in the project sidebar, then click the **Top-Down** tab. The overhead canvas opens showing the set from above (or a blank grid if no set is assigned).

2. **Find the camera icon in the toolbox.** The toolbar at the top of the canvas has a row of placement tools. Click the **Camera** tool — it looks like a small camera icon. Your cursor changes to indicate you're about to place a camera.

3. **Drag the camera icon onto the canvas.** Click anywhere on the canvas to place the camera at that location. The camera appears as a small camera-shaped icon with two lines extending from it forming a cone — that cone is the field of view.

4. **Rotate the camera to aim it.** Click the camera icon to select it. A rotation handle (a dot connected to the camera by a short line) appears above it. Drag the rotation handle in a circle to rotate the camera and point it at your characters or subject. As you rotate, the FOV cone rotates with it to show you exactly what the camera sees.

5. **Adjust the FOV cone.** With the camera selected, two lines define the edges of its cone of vision. Drag either edge line inward to narrow the cone (more telephoto — longer lens, less environment) or outward to widen it (more wide-angle — shorter lens, more environment visible). For reference: a very narrow cone corresponds to a 135mm+ telephoto; a very wide cone corresponds to a 24mm or wider.

6. **Link this camera position to a specific shot.** On the right side of the editor you'll see the Shot List panel showing all shots in this scene. With your camera position selected on the canvas, click the name of the shot you want this camera to serve. Then click **Use This Camera**. The shot is now linked to this camera position — when ACT3 AI renders that shot, it uses this exact camera location, direction, and FOV.

7. **Add a second camera position for a different shot.** Click the Camera tool again, place a second camera icon at a different position on the canvas (for example, on the opposite side of the characters for a reverse angle), rotate it, set its FOV, and link it to a different shot. You can have as many camera positions as you have shots.

8. **See how different positions produce different shots.** A camera placed close and aimed upward produces a low-angle dramatic shot. A camera placed at eye level across the room produces a neutral wide shot. A camera placed just behind one character's shoulder aimed at another character produces an over-the-shoulder close-up. Each position tells a different visual story.

9. **Save the camera blocking.** Click **Save Blocking** in the toolbar. Your camera positions are stored with the scene. Return to edit them anytime — re-render affected shots after making changes.

---

## Next steps

- [Block a Scene](/how-to/block-a-scene)
- [Set the Camera Lens](/how-to/set-lens)
- [Plan Scene Coverage](/how-to/plan-scene-coverage)
