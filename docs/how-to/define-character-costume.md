---
id: how-to-define-character-costume
slug: define-character-costume
title: Define a Character's Costume
sidebar_label: Define Character Costume
description: Learn how to set the default costume for a character in your project.
---

# Define a Character's Costume

**Goal:** Set a character's default outfit — the look they wear throughout the film unless a scene-level override changes it.

Every character in ACT3 AI has a default costume that the AI uses as a reference whenever that character appears in a shot. Think of it as the wardrobe department's master record: one source of truth that flows into every scene automatically. You can always override it for a specific scene or shot, but you need to define the default first.

---

## Steps

1. **Open the Casting panel.** In the Editor, click the **Cast** icon in the left sidebar. The panel lists every character in your project.

2. **Click the character you want to dress.** The Character Detail view opens on the right side of the panel. You will see tabs for Profile, Costume, Voice, and Appearance.

3. **Go to the Costume tab.** Click **Costume** to open the costume definition workspace. If this character has no costume set, you will see a prompt reading *"No default costume defined."*

4. **Click Edit Costume.** This opens the costume editor with a text field for the description and an optional image upload area.

5. **Write a costume description.** Describe the full outfit in plain, specific language. The AI reads this description as part of the shot prompt, so the more precise you are, the more consistent the renders. Example: *"tailored navy suit, white shirt, no tie, scuffed leather oxford shoes, no pocket square"*. See [Write Effective Costume Descriptions](/how-to/write-costume-descriptions) for detailed guidance.

6. **Upload a reference image (optional but recommended).** Click **Add Reference Image** to upload a JPG or PNG. A clear photo of the actual costume against a neutral background works best. See [Add a Costume Reference Image](/how-to/costume-reference-image) for tips on what makes a good reference.

7. **Set key costume attributes.** Use the attribute fields below the description to tag the costume's era (*"contemporary"*, *"1940s"*, *"near-future"*), formality level (*"business formal"*, *"casual"*, *"uniforn"*), and dominant colors. These attributes help the AI resolve ambiguity when your text description is minimal.

8. **Review the full costume entry.** Before saving, read back your description and attributes. Ask: could a wardrobe assistant shop for this outfit using only what you wrote? If yes, you have enough detail.

9. **Click Save Default Costume.** The costume is saved as this character's project-wide default. A small thumbnail of the reference image (or a colored swatch if no image) appears on the character card in the Casting panel.

10. **Confirm the default feeds into shots.** Navigate to any shot featuring this character and open the Shot panel → Costume tab. You will see the default costume description pulled in automatically. The AI will use this text when generating the shot.

---

## Tips

- Be specific about shoes, accessories, and hair — they appear prominently in medium shots and close-ups, and vague descriptions lead to inconsistent renders.
- If your character's costume is complex (many layers, distinctive patterns, specific hardware), split the description into sections: outerwear → top → bottom → footwear → accessories. Layered descriptions survive prompt compression better.
- You can update the default costume at any time. Changes apply to all future renders; previously approved shots are not affected unless you regenerate them.

---

## Next steps

- [Write Effective Costume Descriptions](/how-to/write-costume-descriptions)
- [Add a Costume Reference Image](/how-to/costume-reference-image)
- [Set Per-Scene Costume Overrides](/how-to/per-scene-costume)
- [Add Costume Detail to a Shot](/how-to/shot-costume-detail)
