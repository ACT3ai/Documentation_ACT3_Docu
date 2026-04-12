---
id: how-to-use-image-as-set
slug: use-image-as-set
title: Use an Image as a Set
sidebar_label: Use Image as Set
description: Learn how to use a static image as a virtual set background in ACT3 AI.
---

# Use an Image as a Set

**Goal:** Use a photo or rendered image as the background for a scene when you don't need a full 3D environment.

A 2D image set is the simplest way to give a scene a sense of place. You supply a photograph, a concept render, or any still image, and ACT3 AI uses it as the background when generating shots. This works well for scenes with mostly static camera angles — dialogue scenes, interview setups, product close-ups — where you don't need a camera to roam the environment.

If you're an experienced filmmaker, think of this as rear-projection or a practical plate: characters are composited in front of the image, not inside a 3D space.

---

## Steps

1. **Open your scene.** Click the scene in the project sidebar. The Scene panel opens.

2. **Click the Set slot.** In the Scene panel, find the Set row (labeled *No set assigned* if empty) and click **Browse Sets**.

3. **Click Upload Image Set.** In the Set Browser, look for the **Upload Image Set** button in the top-right corner. Click it to open the upload dialog.

4. **Upload your image file.** Drag and drop a JPG or PNG file, or click Browse to select one. ACT3 AI recommends a minimum resolution of 1920×1080. Higher resolution images produce sharper backgrounds — use 4K source material if available.

5. **Set the image alignment.** After upload, choose how the image fills the frame: *Fill* (crops to fit, no letterboxing), *Fit* (shows the whole image with possible black bars), or *Tile* (repeats the image — useful for texture-style backgrounds). Most scenes use *Fill*.

6. **Enable the 3D character placement layer.** Toggle **3D Character Placement** on. This layer tells ACT3 AI to composite characters in front of the background at a physically plausible scale — characters in the foreground appear larger, characters further back appear smaller, as in a real scene.

7. **Adjust the depth scale.** Use the Depth Scale slider to calibrate how the foreground-to-background size relationship works. If characters appear to float above the floor or look too large relative to the room, nudge this slider until proportions look natural in the preview.

8. **Preview in a shot.** Open one of the shots in this scene. The shot preview will show your image as the background with a placeholder character silhouette composited in front of it. Check that the scale looks right.

9. **Understand the camera angle limitation.** A 2D image set is a flat plane — it does not have real depth. If you rotate the camera significantly or use a moving camera, the background will not shift in parallax the way a real environment would. For static shots and locked-off angles, this is invisible. For moving cameras, consider a procedural set instead.

10. **Assign the image set to the scene.** Click **Assign to Scene**. The Set row in the Scene panel now shows your image as a thumbnail.

---

## Tips

- 2D image sets work best for static camera shots — locked-off wide shots, talking-head close-ups, and interview framings. Moving cameras may reveal the flat background.
- If you have a still from a real location you want to match, upload it as a reference set and use the same image for blocking reference in the Top-Down Editor.
- Keep source images in landscape orientation (wider than tall) for standard 16:9 output; for vertical social formats, use portrait orientation images.

---

## Next steps

- [Browse and Assign a Set](/how-to/browse-and-assign-set)
- [Create a Set](/how-to/create-a-set)
- [Block a Scene](/how-to/block-a-scene)
