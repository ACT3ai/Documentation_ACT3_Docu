---
id: how-to-per-scene-style
slug: per-scene-style
title: Set Per-Scene Visual Style
sidebar_label: Per-Scene Visual Style
description: Learn how to override the global visual style for an individual scene.
---

# Set Per-Scene Visual Style

**Goal:** Override the project's default visual style for a specific scene — making one scene look like animation while the rest of the film is cinematic realism, for example.

Every ACT3 AI project has a default visual style — Cinematic Realism, 3D Animated, Cartoon 2D, or Anime — that governs how every shot in the film is rendered. A per-scene style override lets you break from that default for a single scene. This is the right tool for dream sequences, flashbacks that feel different from the main story, stylized memory scenes, or any moment where the visual language of the film intentionally shifts.

---

## Steps

1. **Navigate to the scene.** Open the project in the Editor and select the scene you want to style differently. You can click it in the Timeline, the Script view, or the Scene List in the left sidebar.

2. **Open Scene Settings.** Click the **Settings** icon (gear) in the Scene header bar, or right-click the scene in the Timeline and select **Scene Settings**. The Scene Settings panel opens on the right.

3. **Find the Visual Style override section.** Scroll down to **Visual Style**. You will see the current inherited style shown in grey: *"Inheriting project style: Cinematic Realism"* (or whatever your project default is).

4. **Toggle on Override Project Style.** Click the toggle switch next to **Override Project Style**. The style selector activates. The inherited style label greys out and the selector becomes editable.

5. **Choose the scene's visual style.** Select from the four available styles:
   - **Cinematic Realism** — photorealistic rendering with natural lighting and film grain
   - **3D Animated** — stylized 3D look, similar to contemporary animated features
   - **Cartoon 2D** — flat or semi-flat 2D animation aesthetic
   - **Anime** — high-contrast line art with cel-shading and characteristic anime proportions

6. **Set a mood override for this scene.** Below the style selector, click into **Scene Mood**. The mood affects color palette, contrast, and saturation independently of the visual style. Options include Neutral, Warm, Cold, Desaturated, High Contrast, and Dream. For a flashback, *"Desaturated"* or *"Warm"* are common choices. For a nightmare sequence, *"Cold"* or *"High Contrast"* work well.

7. **Preview how this scene's shots will render differently.** Click **Preview Style** to see a mock thumbnail rendering of a shot in this scene using the override settings. Compare it to the default style thumbnail shown beside it. This gives you a quick side-by-side confirmation before committing credits to a full render.

8. **Generate or regenerate shots in this scene.** With the override active, shots generated for this scene will use the scene's style, not the project default. Previously generated shots will retain their original style until regenerated.

9. **Clear the override.** To revert to the project default, return to Scene Settings → Visual Style and click **Clear Override**. The toggle turns off and the scene inherits the project style again.

10. **Know when to use this.** Per-scene style overrides are powerful narrative tools. Common uses: a character's dream rendered in Anime while the rest of the film is Cinematic Realism; a 1920s flashback rendered in desaturated Cartoon 2D; a supernatural or hallucination sequence in stylized 3D Animated.

---

## Tips

- Visual style overrides are powerful but use them purposefully — too many style changes in one film reads as inconsistent rather than intentional. One or two override scenes per project is a strong choice; five or six without clear narrative motivation will confuse the viewer.
- The mood setting pairs well with the override. A dream sequence in 3D Animated with a *Warm* mood reads as nostalgic; the same style with a *Cold* mood reads as eerie. Combine them intentionally.
- Test the override on a single representative shot in the scene before regenerating the whole scene. One test render confirms you have the look right before spending credits on every shot.

---

## Next steps

- [Set Visual Style for the Project](/how-to/set-visual-style)
- [Use Visual References](/how-to/use-visual-references)
- [Review and Approve Shots](/how-to/review-and-approve-shots)
