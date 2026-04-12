---
id: how-to-blender-set-sync
slug: blender-set-sync
title: Sync a Set with Blender
sidebar_label: Sync Set with Blender
description: Learn how to round-trip a set between ACT3 AI and Blender for advanced 3D work.
---

# Sync a Set with Blender

**Goal:** Send a set from ACT3 AI to Blender for advanced 3D work, then bring it back so AI-generated shots use your professional 3D environment.

The Blender sync feature creates a two-way bridge between ACT3 AI and Blender. You start with a set in ACT3 AI, export it to Blender where you can do full professional 3D work (modeling, lighting rigs, texture painting, geometry nodes), then sync the finished environment back. ACT3 AI uses that Blender-refined set as the background when rendering shots. This is the highest-fidelity set option available in the platform.

If you're new to Blender: this workflow is optional and aimed at 3D artists and VFX professionals. For most productions, procedural sets and image sets are faster and require no 3D skills.

---

## Steps

1. **Understand what the sync does.** The Blender sync is a round-trip pipeline: ACT3 AI exports a set to Blender, you work on it in Blender, and the Hero Blender Sync desktop app sends the result back to ACT3 AI. The sync preserves ACT3 AI metadata (character positions, camera positions, shot IDs) so your work in Blender stays spatially aligned with your blocking.

2. **Install Hero Blender Sync.** Download the Hero Blender Sync desktop app from your ACT3 AI account page under **Downloads → Hero Blender Sync**. Install it on the same machine where Blender is installed. The app runs as a background process and handles the communication between Blender and ACT3 AI.

3. **Connect the app.** Launch Hero Blender Sync. It will prompt you to log in with your ACT3 AI credentials. Once connected, it runs silently in the system tray. ACT3 AI detects the app automatically when you initiate a Blender export — no additional configuration is required.

4. **Open a scene with a 3D set.** In ACT3 AI, open a scene that has a 3D set assigned — either a procedural set or a set from the library. (2D image sets cannot be synced to Blender; they have no 3D geometry.)

5. **Click Export to Blender.** In the Scene panel, click **Edit Set**, then click **Export to Blender**. ACT3 AI packages the set geometry, textures, and metadata into a Blender-compatible file and sends it to Hero Blender Sync. Blender opens automatically (or you are prompted to open it) with the set loaded as a new scene.

6. **See ACT3 AI metadata in Blender.** The exported Blender scene includes: the set geometry as a mesh collection, ACT3 AI camera positions as Blender camera objects, character blocking markers as empty objects, and a metadata JSON file linked to the scene. Do not delete these objects — they are what the sync uses to realign your work when you send it back.

7. **Make changes in Blender.** Work freely: adjust geometry, replace materials, add lighting rigs, add additional objects, run geometry nodes, paint textures. The ACT3 AI metadata objects move with the scene if you transform the whole scene, but avoid deleting or renaming them individually.

8. **Click Sync Back in the Blender panel.** In Blender, find the **ACT3 AI** panel in the N-panel (press N to open it if it's not visible). Click **Sync Back to ACT3 AI**. Hero Blender Sync packages the scene and sends it to ACT3 AI. A progress indicator appears in both the Blender panel and in ACT3 AI.

9. **See the updated set in ACT3 AI.** Once the sync completes, the set thumbnail in your Scene panel updates to reflect the Blender-refined environment. Open the Top-Down Editor to confirm that your camera positions and character blocking are still in place.

10. **Re-render affected shots.** Go to the shot list for this scene and click **Re-render All** (or select individual shots and re-render each one). The shots will now render against your Blender-built environment.

---

## Tips

- Blender sync is for advanced users who need precise control over geometry, lighting rigs, or custom materials. For most scenes, procedural sets or image sets are faster and produce excellent results.
- Keep Hero Blender Sync running in the background during your Blender session — it handles incremental sync operations more efficiently than a cold start each time.
- If the sync fails, check that Blender and Hero Blender Sync are both running and that you are logged in to the same ACT3 AI account in both places.

---

## Next steps

- [Generate a Procedural Set](/how-to/procedural-set-generation)
- [Use the Top-Down Set Editor](/how-to/top-down-set-editor)
- [Add Props to a Set](/how-to/add-props-to-set)
