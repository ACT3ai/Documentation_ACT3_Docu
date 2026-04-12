---
id: how-to-add-props-to-set
slug: add-props-to-set
title: Add Props to a Set
sidebar_label: Add Props to Set
description: Learn how to place and configure props within a virtual set.
---

# Add Props to a Set

**Goal:** Place specific objects — furniture, vehicles, signage, set dressing — into a scene's environment to make it feel populated and specific.

A set provides the walls, floor, and broad environment. Props are everything inside it: the desk a character leans on, the car parked at the curb, the neon sign in the background. Adding props tells ACT3 AI what objects are physically present in the scene, and they will appear in the background and foreground of rendered shots as appropriate. Think of this as set dressing — the same job a prop master does before a shoot.

---

## Steps

1. **Open the Top-Down Editor or Set Editor for your scene.** Either click the **Top-Down** tab in the Scene panel or click **Edit Set** from the Set row. Both views give you access to prop placement.

2. **Click Add Prop.** In the toolbar along the top of the canvas, click the **Add Prop** button. The Props Library panel opens on the right side.

3. **Search the library by keyword.** Use the search bar at the top of the Props Library to find what you need. Try terms like *desk*, *car*, *lamp*, *park bench*, *refrigerator*, *fire hydrant*, *bookshelf*, or *industrial shelf*. The library contains hundreds of objects across categories: Furniture, Vehicles, Appliances, Lighting, Signage, Nature, and Miscellaneous.

4. **Select a prop.** Click a prop in the search results to select it. A preview thumbnail appears at the bottom of the panel. Click **Place Prop** to drop it onto the canvas at the center of the current view.

5. **Position the prop by dragging.** Click and drag the prop icon on the canvas to move it to the right location. Position it relative to characters and camera — if it's a desk the character sits at, place it where the character will be blocking.

6. **Scale the prop.** With the prop selected, drag the resize handles at the corners of its bounding box to make it larger or smaller. Match the scale to the environment — a car should take up about the same floor area as a real car relative to the room or street.

7. **Rotate the prop.** Drag the rotation handle (the small circle extending from the top of the bounding box) to rotate the prop. Angle it to match the direction it would naturally sit in the scene — a desk against a wall should face out from the wall, not sideways.

8. **Layer props to build depth.** Add multiple props to create a populated environment. A coffee shop might have several tables, chairs, a counter, and overhead lighting. A street scene might have parked cars, a mailbox, and a trash can. Overlapping props on the canvas creates natural depth in the rendered shots.

9. **Remove a prop.** Click a prop on the canvas to select it, then press the **Delete** key (or click the trash icon in the toolbar). The prop is removed from the scene.

10. **Understand how props affect AI rendering.** Props you place here are included as context in the AI generation prompt for each shot. A shot description for a character at a desk will include the desk as a named element, so the AI renderer places it consistently in the background and foreground depending on the camera angle.

---

## Next steps

- [Use the Top-Down Set Editor](/how-to/top-down-set-editor)
- [Generate a Procedural Set](/how-to/procedural-set-generation)
- [Browse and Assign a Set](/how-to/browse-and-assign-set)
