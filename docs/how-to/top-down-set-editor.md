---
id: how-to-top-down-set-editor
slug: top-down-set-editor
title: Use the Top-Down Set Editor
sidebar_label: Top-Down Set Editor
description: Learn how to navigate and use the top-down canvas to design your set layout.
---

# Use the Top-Down Set Editor

**Goal:** Use the overhead canvas view to precisely place characters, position the camera, draw movement paths, and plan exactly how a scene will be staged.

The Top-Down Editor shows your set from directly above — like a stage diagram or a floor plan. It is where you do your blocking: deciding where each character stands, how they move, and where the camera is. What you plan here drives how ACT3 AI renders each shot. Experienced filmmakers will recognize this as the traditional top-down blocking diagram used in pre-production; newcomers should think of it as an overhead map of the action.

---

## Steps

1. **Open your scene.** Click the scene in the project sidebar. The Scene panel opens.

2. **Click the Top-Down tab.** At the top of the Scene panel, click the **Top-Down** tab. The overhead canvas opens. If a set is already assigned, you will see a floor-plan-style representation of that environment. If no set is assigned yet, the canvas shows a blank grid — you can still block here and assign a set later.

3. **See the overhead layout.** The canvas shows the set from above: walls appear as lines, furniture and large props appear as solid shapes, and floor space is open. Use scroll to zoom in and out. Click and drag the canvas background to pan around.

4. **Drag character icons onto the canvas.** On the right side, the Characters panel lists every character assigned to this scene. Drag a character's icon from the panel onto the canvas to place them in the scene. The icon represents where that character is standing at the start of the scene.

5. **Position characters by dragging.** Click any character icon on the canvas and drag it to reposition. Place characters relative to each other and relative to where the camera will be — a character facing away from the camera requires a different staging than one facing toward it.

6. **Draw a movement path.** To show a character moving during the scene, select a character icon, then click and drag from the icon to draw a path line. The line represents the route the character travels. You can click to add waypoints along the path for curves and direction changes.

7. **Add a camera position.** Drag the camera icon from the toolbox (top-left of the canvas toolbar) onto the canvas. Place it where the camera will physically be in the scene. Rotate the camera icon by dragging its rotation handle to aim it toward the characters.

8. **Set the camera's field of view cone.** Once the camera icon is placed, two lines extend from it showing the FOV cone — the area the camera can see. Drag the edges of the cone inward or outward to narrow or widen the field of view. A narrow cone (telephoto) sees a small slice of the scene in detail; a wide cone sees more of the environment.

9. **Add multiple camera positions for different shots.** Each camera position can correspond to a different shot. With a camera position selected, look at the shot list on the right side of the editor and click the shot you want to link it to. Click **Use This Camera**. Repeat for each shot — you can have several camera icons on the canvas, each linked to a different shot in the scene.

10. **Save the blocking.** Click **Save Blocking** in the toolbar. The blocking data is stored with the scene and used when ACT3 AI generates shot visuals. You can return and edit blocking at any time — re-rendering affected shots after you do.

---

## Tips

- Place the camera first, then block the characters. It's much easier to stage characters relative to a known camera position than to place characters first and figure out the camera afterward — the same approach a film director uses on set.
- Use the zoom controls to work at different scales: zoom out to see the full set and plan wide shots; zoom in to fine-tune exactly where a character stands relative to a piece of furniture.
- If you're working without a set assigned yet, the grid still gives you a coordinate reference. Assign the set later and your blocking will remain in place relative to the grid.

---

## Next steps

- [Block a Scene](/how-to/block-a-scene)
- [Place Camera in the Top-Down Editor](/how-to/place-camera-top-down)
- [Add Props to a Set](/how-to/add-props-to-set)
