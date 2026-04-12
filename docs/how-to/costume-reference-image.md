---
id: how-to-costume-reference-image
slug: costume-reference-image
title: Add a Costume Reference Image
sidebar_label: Add Costume Reference Image
description: Learn how to attach a reference image to a character's costume definition.
---

# Add a Costume Reference Image

**Goal:** Upload a photo of the exact costume look you want so the AI has a visual anchor — not just a text description — when generating the character's appearance.

A text description tells the AI what to do. A reference image shows it. When you supply both, the AI uses the image as a visual constraint that keeps renders consistent across shots and scenes — critical for a character who appears in dozens of shots across a film. Reference images are especially useful for unusual fabrics, distinctive patterns, non-standard silhouettes, or any costume element that is hard to describe in words alone.

---

## Steps

1. **Open the character's Costume tab.** In the Casting panel, click the character, then click the **Costume** tab. If a default costume is already defined, you will see the current description. If not, follow [Define a Character's Costume](/how-to/define-character-costume) first.

2. **Click Add Reference Image.** The image upload dialog opens. You can drag and drop a file or click **Browse** to select from your file system.

3. **Upload the file.** ACT3 AI accepts JPG and PNG files. For best results, use a photo with clear lighting, a neutral or solid-color background, and a full or three-quarter view of the costume. Avoid motion blur, heavy shadows across the garment, or backgrounds that compete with the clothing.

4. **Tag what the reference covers.** After the upload, a tag selector appears. Choose one or more scope tags: **Full Outfit**, **Top Only**, **Bottom Only**, **Shoes**, **Accessories**, **Headwear**. These tags tell the AI which parts of the costume this image should constrain. A reference tagged **Shoes** will affect footwear in shots but will not override how the AI interprets the jacket.

5. **Add a text note explaining what to match.** Click into the **Match Note** field and describe what is most important to preserve from this image. Example: *"match the jacket color and lapel width exactly — the double-breasted silhouette is intentional"*. Keep it to one or two sentences.

6. **Preview how the reference appears in the AI prompt.** Click **Preview Prompt** to see how the reference image and its match note are bundled into the shot generation prompt. This shows you exactly how the AI will receive the instruction.

7. **Add multiple reference images for different costume elements.** If your character's costume has distinct pieces that are each visually important, upload a separate reference for each. Common splits: one image for the full outfit, one close-up for the shoes, one for an accessory (watch, bag, jewelry). Each image gets its own scope tag and match note.

8. **Remove a reference image.** To delete a reference, click the three-dot menu on the image thumbnail and select **Remove Reference**. The costume text description remains intact. Remove images if they are outdated (for example, after a costume change) or if you are getting inconsistent renders because two references are conflicting.

---

## Tips

- Use real wardrobe photos or fashion reference images, not AI-generated images. AI-generated references introduce compounding distortion — the generation model interprets an already-interpreted image, compounding uncertainty in small details like buttons, fabric texture, and fit.
- A photo taken against a plain wall or photography backdrop is worth more than a stylized editorial shot with dramatic lighting. The AI needs to see the garment clearly, not the art direction.
- If you cannot photograph the actual costume, a product photo from the brand's website (or a mood-board image from a fashion reference site) works well as a stand-in.

---

## Next steps

- [Define a Character's Costume](/how-to/define-character-costume)
- [Set Per-Scene Costume Overrides](/how-to/per-scene-costume)
- [Check Actor Consistency](/how-to/check-actor-consistency)
