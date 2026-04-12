---
id: how-to-use-visual-references
slug: use-visual-references
title: Use Visual References
sidebar_label: Use Visual References
description: Learn how to attach reference images to shots and scenes for visual consistency.
---

# Use Visual References

**Goal:** Upload reference images — film stills, mood boards, photographs — so ACT3 AI understands the look you're going for and uses it when generating shots.

Visual references are how you communicate style to the AI. Instead of writing long descriptions of the look you want, you show it an image. A reference image of a specific film's color grading, a photograph of a real location, or a mood board for a character's wardrobe all serve as precise style anchors. The more targeted your references, the more accurately ACT3 AI can match your vision when generating shots.

If you've worked with visual effects teams or directors of photography, this is the equivalent of showing them a lookbook before production starts.

---

## Steps

1. **Open Project Settings or a specific scene.** Visual references can be set at two levels:
   - **Project level** (applies to the entire production): open the left sidebar and click **Project Settings → Visual References**
   - **Scene level** (applies to one scene only): open the scene and click the **Visual References** tab in the Scene panel

2. **Click Add Reference Image.** In the Visual References section, click the **Add Reference Image** button. An upload dialog opens.

3. **Upload an image.** Drag and drop a JPG or PNG file, or click Browse to select one from your computer. The image uploads and appears as a card in the Visual References panel. There is no strict size limit, but images at least 1200px wide give the AI enough detail to extract style information.

4. **Tag what this reference is for.** Each reference image needs a tag so ACT3 AI knows which aspect of the visual style it applies to. Click the tag dropdown on the image card and select one or more:
   - *Overall Look* — applies to the general visual feel of all shots
   - *Lighting* — affects how light falls, shadow quality, key/fill ratios
   - *Color Palette* — influences color grading, saturation, contrast, temperature
   - *Costume* — guides what characters wear
   - *Set Design* — informs the environment and props style
   - *Specific Shot* — applies only to a particular named shot

5. **Add a text note to the image.** Below the tag selector, click in the Notes field and describe what specifically to take from this reference image. Be as specific as possible. For example: *"match the blue-teal color grading in the shadows"* or *"overhead practical lighting only — no fill light"* or *"1970s kitchen appliances and tile style"*. The AI uses both the image and your note together.

6. **Add multiple references for different aspects.** You are not limited to one reference image. Add a separate image for color, another for lighting, another for costume, another for set design. Each one targets a different visual dimension. A typical project might have 3–8 reference images.

7. **Understand how references affect AI generation.** When ACT3 AI generates a shot, it embeds your reference images and their tags as style context in the generation prompt. The AI interprets them as style constraints — not pixel-for-pixel copying, but as guidance for the visual feel. More specific notes produce more targeted results.

8. **Remove a reference that's no longer relevant.** If a reference image no longer represents the direction you're going, click the three-dot menu on its card and click **Remove**. The reference is removed from future generation prompts. Already-rendered shots are not affected — re-render them if you want the updated style applied.

---

## Tips

- The more specific your reference tags and notes, the better ACT3 AI can target the exact style element you want. A reference tagged *Color Palette* with the note *"desaturated greens and warm amber highlights"* will produce more consistent results than the same image tagged *Overall Look* with no note.
- Use film stills from movies whose look matches what you're going for — they're often the clearest communication of a combined lighting, color, and composition style.
- For costume references, one image per character works better than a group shot. The AI can focus on a single character's wardrobe more precisely.

---

## Next steps

- [Set a Visual Style](/how-to/set-visual-style)
- [Set Per-Scene Style](/how-to/per-scene-style)
- [Set Up Lighting](/how-to/set-up-lighting)
