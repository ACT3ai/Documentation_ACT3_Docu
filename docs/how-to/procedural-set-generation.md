---
id: how-to-procedural-set-generation
slug: procedural-set-generation
title: Generate a Procedural Set
sidebar_label: Generate Procedural Set
description: Learn how to use ACT3 AI to auto-generate a city or building environment.
---

# Generate a Procedural Set

**Goal:** Generate a fully AI-built environment — city block, building interior, or landscape — without uploading anything or using Blender.

Procedural sets are AI-generated 3D environments built on the fly from parameters you specify. Unlike the set library (which gives you pre-made environments) or image sets (which are flat photos), procedural sets give you a spatial environment you can move a camera through. They cost credits to generate but require no 3D skills.

If you know film production: think of this as ACT3 AI building a practical location from scratch — it generates something that fits your story rather than requiring you to find a real location that happens to match.

---

## Steps

1. **Open your scene.** Click the scene in the project sidebar. The Scene panel opens.

2. **Click the Set slot.** In the Scene panel, find the Set row and click **Browse Sets**.

3. **Click Generate Procedural Set.** In the Set Browser, click the **Generate Procedural Set** button. A configuration panel opens with generation options.

4. **Choose the set type.** Select one of the three procedural set types:
   - *City on Rails* — a city block or street environment with buildings, sidewalks, roads, and urban details
   - *Building on Rails* — an interior environment: a single room, hallway, floor, or multi-room layout
   - *Natural Landscape* — open terrain: forest, desert, beach, field, cliff, or similar outdoor locations

5. **Set the parameters for your chosen type.** Parameters vary by type:
   - **City on Rails:** Building density (*sparse / moderate / dense*), Era (*Contemporary / 1950s / 1980s / Futuristic*), Architecture style (*Industrial / Residential / Commercial / Mixed*), Time of day, Weather
   - **Building on Rails:** Interior type (*Office / Apartment / Hospital / Warehouse / Restaurant / Other*), Room count, Floor material, Wall style, Lighting mood
   - **Natural Landscape:** Terrain type, Vegetation density, Weather, Time of day, Ground cover

   For example: *Building on Rails → Office → 3 rooms → Hardwood floors → Modern → Bright overhead lighting*.

6. **Click Generate.** ACT3 AI submits the generation job. A credit cost estimate appears before you confirm — review it and click **Confirm Generate**. Generation typically takes 20–60 seconds.

7. **Preview the result.** When generation completes, the preview pane shows the environment from a default camera angle. Use the preview controls to rotate and pan through the space.

8. **Regenerate if needed.** If the result doesn't match what you had in mind, adjust the parameters and click **Regenerate**. Each regeneration costs credits. Small parameter changes can produce noticeably different results, so adjust one variable at a time to zero in on what you want.

9. **Assign the set to the scene.** Click **Assign to Scene**. The set is saved to your project and attached to the current scene.

10. **Adjust parameters after generation.** Assigned procedural sets can still be adjusted. Open the Set Editor from the Scene panel, change parameters, and click **Regenerate** to update the environment. All shots in the scene will re-render against the updated set.

---

## Tips

- City on Rails is ideal for street scenes, chase sequences, establishing shots, and urban drama. It generates a stretch of city environment that a camera can move through.
- Building on Rails handles offices, apartments, hospitals, and institutions — any interior where you need rooms and hallways rather than a single backdrop.
- If you want a specific real-world location feel (e.g., a Tokyo side street or a 1970s Los Angeles apartment), use the Architecture style and Era parameters together and add descriptive text in the Custom Notes field.

---

## Next steps

- [Browse and Assign a Set](/how-to/browse-and-assign-set)
- [Use the Top-Down Set Editor](/how-to/top-down-set-editor)
- [Add Props to a Set](/how-to/add-props-to-set)
