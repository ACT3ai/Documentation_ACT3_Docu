---
id: how-to-create-a-set
slug: create-a-set
title: How to Create a Set
sidebar_label: Create a Set
description: How to build a virtual location in ACT3 AI using text description, reference images, or procedural generation.
---

# How to Create a Set

**Goal:** Build a virtual environment that your scenes take place in, so the AI renders every shot with a consistent, intentional background.

A set is created once and can be linked to any number of scenes. Change the set and all scenes using it update.

---

## Steps

1. **Open the Sets directory.** In the left navigation, click **Sets**. The set library shows all sets available to your organization.

2. **Click + Add Set.** The set creation panel opens.

3. **Name the set.** Use a descriptive name — "Rooftop, Manhattan night," "1940s police interrogation room," "Alien spacecraft interior." This is also how you'll find it in search.

4. **Choose the set type:**
   - **2D Background** — A single image (photo, painting, or AI-generated). Good for scene-setting shots. Can be aligned for 3D character placement.
   - **3D Blender Model** — A full 3D environment synced from Blender. Best for complex blocking and movement through space.
   - **City on Rails** — Procedural AI-generated city block. Define building types (restaurant, store, park) and the AI generates the streetscape.
   - **Building on Rails** — Procedural AI-generated interior. Define the room type and style.

5. **Write the set description.** Describe the environment in detail — the period, the materials, the condition, the time of day it exists in, the mood. For a 2D or AI-generated set: *"A cramped 1910s police station interrogation room. Bare concrete walls. One window with bars. A wooden table and two chairs. A single hanging bulb."*

6. **Upload reference images (optional).** Any photos, film stills, or concept art that capture the look you want. Upload as many as help — the AI uses them to match the aesthetic.

7. **Save and preview.** Click **Generate Set** to create the visual. Review the preview. If it's not right, adjust the description and regenerate.

8. **Link to scenes.** Open scenes that take place in this location and assign this set in the Scene panel → Set field.

---

## Next steps

- [Use the top-down set editor](/how-to/top-down-set-editor) to place characters and cameras
- [Link a set to scenes](/how-to/link-set-to-scenes)
- [Sync a Blender set](/how-to/blender-set-sync) for professional 3D environments
