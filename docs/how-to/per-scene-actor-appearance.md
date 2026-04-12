---
id: how-to-per-scene-actor-appearance
slug: per-scene-actor-appearance
title: Set Per-Scene Actor Appearance
sidebar_label: Per-Scene Actor Appearance
description: Learn how to override an actor's look on a per-scene basis.
---

# Set Per-Scene Actor Appearance

**Goal:** Override a character's default actor for a specific scene — useful for showing them at a different age, in disguise, or with a different physical state.

By default, a character uses the same digital actor in every scene of your project. Per-scene overrides let you break that rule intentionally: show a character as a child in a flashback, aged in a flash-forward, in disguise during a thriller sequence, or visibly injured after a story event. The override only affects the scenes you specify — the rest of the project keeps the original casting intact.

---

## Steps

1. **Navigate to the scene you want to override.** In the left sidebar, open the **Scenes** panel and click the target scene. The scene opens in the main editor with its shots visible in the timeline.

2. **Open Scene Settings.** Click the **Settings** gear icon in the scene header bar (top of the timeline area). The Scene Settings drawer slides open on the right.

3. **Find the Characters section.** Scroll down in Scene Settings to the **Characters** section. Every character who appears in this scene is listed, each showing their currently assigned actor thumbnail.

4. **Click Override Actor next to the character name.** An **Override** button appears on hover for each character row. Click it to open the override selector for that character in this scene.

5. **Choose a different actor from the library.** The Actor Library drawer opens. Browse or search for the replacement actor — for example, an older or younger variant of your lead character. Click the actor's thumbnail to select them.

6. **Set the override scope.** Before confirming, choose the scope from the dropdown:
   - *This scene only* — only this scene uses the replacement actor.
   - *This scene and all following scenes* — the replacement actor takes over from this scene forward, while earlier scenes keep the original.

7. **Preview how the character looks in the scene context.** Click **Preview in Scene**. ACT3 AI generates a low-resolution preview frame showing the override actor placed in the scene's set and lighting. Compare it against the default to confirm the substitution looks right.

8. **Confirm the override.** Click **Apply Override**. The character row in Scene Settings now shows the override actor thumbnail with an orange **Override** badge, distinguishing it from the project default.

9. **Clear the override to restore the default actor.** To undo the override at any time, return to Scene Settings → Characters, find the character, and click the **×** on the Override badge. The character immediately reverts to their project-level casting.

---

## Tips

- Use per-scene overrides for flashback scenes, dream sequences, or to show characters aging across a story timeline without changing the core casting for the rest of the project.
- If you need a very subtle change — *same actor but with a scar or different hairstyle* — consider using the **Costume** settings instead of a full actor override. Costume changes are less expensive in credits.
- Override actors must already exist in your Actor Library. If you need a new variant (for example, an elderly version of your lead), [create the digital actor](/how-to/create-digital-actor) first, then come back to apply the override here.

---

## Next steps

- [Manage Your Cast List](/how-to/manage-cast-list)
- [Define a Character Costume](/how-to/define-character-costume)
- [Check Actor Consistency Across Shots](/how-to/check-actor-consistency)
