---
id: how-to-link-set-to-scenes
slug: link-set-to-scenes
title: Link a Set to Scenes
sidebar_label: Link Set to Scenes
description: Learn how to assign a set to one or more scenes in your project.
---

# Link a Set to Scenes

**Goal:** Assign one set to multiple scenes at once — useful when several scenes take place in the same location.

When a story returns to the same location across multiple scenes — a character's apartment, a recurring office, the main street of a town — you want all those scenes using the same set. Linking lets you make that connection in bulk and keeps everything consistent. Any change you make to the shared set (adding a prop, adjusting lighting) flows automatically to every scene that uses it.

For experienced creators: this is equivalent to managing a practical location across several shooting days — one location, many scenes.

---

## Steps

1. **Open the Sets panel.** In the left sidebar, click **Sets**. The Sets panel lists every set that exists in your project — sets you've created, sets you've uploaded, and sets generated procedurally.

2. **Click on the set you want to link.** Click the set's name or thumbnail card. The Set Detail view opens, showing a preview of the environment and a summary of how it's currently used.

3. **Click Linked Scenes.** In the Set Detail view, click the **Linked Scenes** tab. A list appears showing every scene in the project that currently uses this set. New sets will show an empty list here.

4. **Click Add Scene.** Click the **Add Scene** button at the top of the Linked Scenes list. A scene picker opens showing all scenes in the project.

5. **Select scenes from the list.** Click each scene you want to link to this set. To select multiple scenes at once, hold **Shift** while clicking to select a range, or hold **Cmd** (Mac) / **Ctrl** (Windows) to pick individual scenes. Selected scenes are highlighted.

6. **Confirm the selection.** Click **Link Selected Scenes**. The dialog closes and the Linked Scenes list now shows all the scenes you added.

7. **Understand how shared changes work.** When a set is linked to multiple scenes, any change you make to that set — adding a prop, adjusting the procedural parameters, swapping a texture — propagates to all linked scenes automatically. All shots in those scenes will use the updated environment on next render.

8. **Unlink a set from one scene without affecting others.** To remove the set from a single scene, click that scene name in the Linked Scenes list and click **Unlink**. The set is removed from only that scene. All other scenes retain the link. The unlinked scene reverts to *No set assigned* — you can assign a different set to it independently.

---

## Tips

- Link sets before you do your blocking — blocking is stored per-scene, but the set environment is shared. You can block each scene differently while they all render against the same physical location.
- If two scenes take place in the same location but at different times of day or with different lighting, create two versions of the set (e.g., *Apartment — Day* and *Apartment — Night*) and link the appropriate version to each group of scenes.

---

## Next steps

- [Browse and Assign a Set](/how-to/browse-and-assign-set)
- [Organize Your Project](/how-to/organize-project)
- [Block a Scene](/how-to/block-a-scene)
