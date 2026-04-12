---
id: how-to-link-characters-to-actors
slug: link-characters-to-actors
title: Link Characters to Actors
sidebar_label: Link Characters to Actors
description: Learn how to associate a script character with a digital actor in your cast.
---

# Link Characters to Actors

**Goal:** Connect character names in your script to digital actors so ACT3 AI uses the right face and body for every shot that character appears in.

When you write a script, characters are just names on the page — *ELENA*, *MARCUS*, *OFFICER CHEN*. The Casting panel bridges the gap between those names and the actual visual performers that will appear in your rendered video. Once a character is linked to a digital actor, every shot containing that character automatically uses the correct face, body proportions, and movement style. Change the actor once and the update propagates to every shot in the project.

---

## Steps

1. **Open the Casting panel.** In the left sidebar, click **Casting** (a person-silhouette icon). The Casting panel opens, showing a list of every character name that ACT3 AI detected in your script. Characters are extracted automatically from dialogue headers and scene descriptions. If a character is missing, see the tip below.

2. **Review the detected characters.** Each row in the list shows the character name, the number of scenes they appear in, and their current assignment status: *Uncast* (no actor linked yet) or the name of the assigned actor. Work through the *Uncast* rows first.

3. **Click on a character name.** Clicking a character row expands a detail panel on the right side of the screen showing that character's scenes, any costume descriptions ACT3 AI found in the script, and the **Assign Actor** button.

4. **Click Assign Actor.** The actor library browser opens as an overlay. The library shows thumbnail portraits of available digital actors along with labels for gender presentation, approximate age range, and style tags such as *Realistic*, *Stylized*, or *Anime*.

5. **Browse or search the actor library.** Use the search bar at the top of the library to filter by name or tags. Use the filter dropdowns to narrow by age range, build, ethnicity, or style. Scroll the grid to browse visually.

6. **Select an actor.** Click on an actor card to select them. The card highlights with a border and a checkmark. A preview panel appears on the right side of the library showing a larger image of the actor and any available poses or expression samples.

7. **Preview the match.** In the preview panel, click **Preview in Scene** to see a thumbnail render of the actor placed in one of the character's existing scenes. This is a low-resolution draft preview only — it gives you a quick sense of whether the actor fits the visual context without consuming render credits.

8. **Confirm the assignment.** Click **Assign** at the bottom of the library overlay. The overlay closes and the Casting panel now shows the selected actor's name and thumbnail next to the character.

9. **Repeat for remaining characters.** Work through each uncast character in the list. Characters with minor roles (one or two appearances) can be assigned the same actor as another character if needed — ACT3 AI will note the double-cast in a warning but will allow it.

10. **Understand how changes propagate.** If you later change an actor assignment — by clicking **Reassign** on the character row and selecting a different actor — ACT3 AI marks all previously rendered shots featuring that character as *Outdated*. Those shots will need to be re-rendered to reflect the new actor. Shots not yet rendered automatically use the new actor with no extra steps.

---

## Tips

- If a character is not appearing in the Casting panel's auto-detected list, it may be because their name was written inconsistently in the script (for example, *OFFICER CHEN* in some places and *CHEN* in others). Open the Script Editor, standardize the name, and return to the Casting panel — it will re-scan and pick up the unified character.
- You can assign actors from the Scene panel as well. When viewing a specific scene's shot list, click the **Cast** tab in the scene detail panel to see and assign actors for that scene only without going through the full project Casting panel.
- The actor library is updated regularly with new digital actors. If you need a look that isn't available, use the [Create Digital Actor](/how-to/create-digital-actor) flow to upload a reference image and generate a custom actor.

---

## Next steps

- [Create a digital actor](/how-to/create-digital-actor) to build a custom actor from a reference image
- [Cast an actor in a scene](/how-to/cast-actor-in-scene) to override the project-level assignment for a specific scene
- [Manage your cast list](/how-to/manage-cast-list) to review all assignments, remove actors, or reorganize your cast
