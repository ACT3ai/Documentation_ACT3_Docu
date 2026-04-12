---
id: how-to-write-costume-descriptions
slug: write-costume-descriptions
title: Write Effective Costume Descriptions
sidebar_label: Write Costume Descriptions
description: Learn how to write detailed costume descriptions that produce accurate AI renders.
---

# Write Effective Costume Descriptions

**Goal:** Write costume descriptions that give the AI enough information to generate consistent, specific, accurate wardrobe in every shot.

A costume description in ACT3 AI is not just a note for your own reference — it becomes part of the prompt sent to the AI video generation engine for every shot that character appears in. Vague descriptions produce inconsistent renders. Specific, layered descriptions produce reliable ones. This guide shows you what to include, what to avoid, and how to structure a description that survives across dozens of shots.

---

## Steps

1. **Understand what the AI reads.** When a shot is rendered, ACT3 AI assembles a composite prompt from several sources: the shot's action description, the character's appearance definition, and the costume description. The costume text is injected verbatim into this prompt. Writing a good costume description is the same skill as writing a good AI prompt — clarity and specificity produce better outputs.

2. **Include garment type, fit, color, material, and condition.** These five elements are the minimum for a useful description. A garment type with no fit or color is ambiguous. Color with no material is under-specified. Condition (new, worn, dirty, tailored, oversized) carries visual information that generic words cannot. Example: *"oversized grey wool overcoat, missing one button on the left side, slightly worn at the elbows, collar turned up"*.

3. **Avoid vague terms like "nice clothes" or "casual."** These are meaningless to a generative AI model. *"Nice clothes"* could mean a tuxedo or clean jeans, depending on context. *"Casual"* has no color, no material, no silhouette. Replace vague labels with concrete specifics: instead of *"smart casual"*, write *"dark slim-fit chinos, white Oxford cloth shirt, untucked, no jacket, tan leather loafers"*.

4. **Describe layers from innermost to outermost.** When a costume has multiple layers, list them in order: base layer → mid-layer → outerwear. This structure prevents the AI from confusing which garment belongs on top of which. Example: *"white ribbed tank top / open flannel shirt in faded red plaid, sleeves rolled to the elbow / no jacket"*.

5. **Describe shoes and accessories explicitly.** Shoes and accessories appear clearly in medium shots, two-shots, and walking shots. If you do not specify them, the AI will invent them — and they may not match your other choices. Name the shoe type, color, and material: *"worn brown leather work boots, steel toe, laces untied"*. For accessories, name each item: *"vintage silver wristwatch on left wrist, no rings, no necklace"*.

6. **Describe hair as part of the costume definition.** Hair is part of the character's visual identity and changes shot to shot if not anchored. Include hair length, color, style, and any notable element: *"short black hair, side-parted left, slightly unkempt — a few strands falling across the forehead"*. For wigs, hats, or dramatically styled hair, be even more specific.

7. **Test your description by checking the first rendered shot.** After you define the costume and generate the first shot featuring this character, play it back and compare to your description element by element. Look for: correct color, correct silhouette, correct shoe type, correct hair. If something is wrong, the description needs to be more specific or more explicit about that element.

8. **Iterate and lock the description once it renders correctly.** Once a rendered shot matches your costume intent, mark the costume description as reviewed. Use the lock feature (Shot panel → Approve) for shots you are satisfied with so that future regenerations do not lose approved frames.

---

## Tips

- Write descriptions the way a wardrobe department memo reads — specific enough that a costumer could walk into a store and shop for the outfit using only your text. If they could not, add more detail.
- Read the description aloud. If it sounds vague when spoken, it is vague. If it sounds like a specific thing you could photograph, it is probably good enough.
- Keep descriptions under 80 words if possible. Long descriptions are trimmed by prompt compression. If you must go longer, front-load the most important visual information — what the AI reads first carries more weight.

---

## Next steps

- [Define a Character's Costume](/how-to/define-character-costume)
- [Add a Costume Reference Image](/how-to/costume-reference-image)
- [Set Per-Scene Costume Overrides](/how-to/per-scene-costume)
