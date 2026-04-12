---
id: how-to-per-scene-costume
slug: per-scene-costume
title: Set Per-Scene Costume Overrides
sidebar_label: Per-Scene Costume Overrides
description: Learn how to change a character's costume for a specific scene.
---

# Set Per-Scene Costume Overrides

**Goal:** Change what a character is wearing in a specific scene without altering their default costume — for costume changes, flashbacks, or transformation moments.

A character's default costume travels with them through every scene in the project. A per-scene override lets you change that costume for one scene only. The default is not deleted or modified — it simply steps aside for that scene and returns afterward. This is the right tool for a costume change in act two, a flashback to a character's childhood, or any scene where the character's circumstances (and therefore their clothes) are different.

---

## Steps

1. **Navigate to the scene.** Open the project in the Editor and click the scene where the costume change should happen. You can navigate by scrolling the script, clicking in the Timeline, or selecting from the Scene List in the left sidebar.

2. **Open Scene Settings.** Click the **Settings** icon (gear) in the Scene header bar, or right-click the scene in the timeline and select **Scene Settings**. The settings panel opens on the right side of the Editor.

3. **Find the Characters section.** Scroll down in Scene Settings until you reach **Characters in This Scene**. Each character who appears in the scene is listed with their current costume status: *"Using default costume"* or *"Override active"*.

4. **Click Costume Override next to the character's name.** The Costume Override editor opens. It shows the character's current default costume description for reference, so you can see what you are overriding.

5. **Write the override description.** Describe the costume the character wears in this scene. Be as specific as you would for the default costume. Example: *"she's now in a hospital gown, barefoot — pale blue, open-backed, slightly too large"*. You do not need to repeat elements from the default; focus on what is different and specific to this scene.

6. **Upload a scene-specific reference image if needed.** Click **Add Reference Image** in the override editor. Follow the same tagging and match-note process described in [Add a Costume Reference Image](/how-to/costume-reference-image). A scene-specific reference overrides any default costume reference for this scene only.

7. **Set override scope.** Confirm the scope selector is set to **This scene only**. (The other option, **This scene and all following scenes**, is useful if a costume change is permanent from this point forward — for example, a character puts on a uniform that they wear for the rest of the film.)

8. **Preview the change.** Click **Preview Costume** to see a text summary of the full AI prompt that will govern this character's appearance in the scene. Confirm the override text appears and the default costume text does not.

9. **Check how the override shows in the Shot panel.** Navigate to any shot in this scene and open Shot panel → Costume tab. You will see the scene override description — not the default — listed under the character's name. Individual shots in the scene inherit the scene override automatically.

10. **Clear the override to restore the default.** To remove the override and return to the default costume, open Scene Settings → Characters → Costume Override and click **Clear Override**. The character reverts to their project-wide default costume for this scene.

---

## Next steps

- [Define a Character's Costume](/how-to/define-character-costume)
- [Set Per-Actor Appearance for a Scene](/how-to/per-scene-actor-appearance)
- [Add Costume Detail to a Shot](/how-to/shot-costume-detail)
