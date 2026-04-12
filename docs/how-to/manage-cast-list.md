---
id: how-to-manage-cast-list
slug: manage-cast-list
title: Manage Your Cast List
sidebar_label: Manage Cast List
description: Learn how to add, remove, and organize actors in your project cast list.
---

# Manage Your Cast List

**Goal:** View, edit, and maintain the full list of digital actors assigned to your project so casting stays consistent across all scenes.

The Cast List is ACT3 AI's central registry of every character in your script and which digital actor is playing them. When you import or write a script, ACT3 AI automatically detects every named character and populates the list — your job is to fill in the actor assignments and keep them accurate as the project evolves.

---

## Steps

1. **Open the Casting panel.** In the left sidebar, click the **Cast** icon (a silhouette with a star). The Casting panel opens and shows every character name detected from your current script.

2. **Review characters detected from the script.** ACT3 AI scans all dialogue and stage directions to build the list. Characters are grouped into **Principal** (speaking roles) and **Minor** (non-speaking or single-mention) categories. If a character is missing, check that their name is spelled consistently in the script.

3. **Identify uncast characters.** Any character without an assigned actor shows an orange **Uncast** badge. Cast characters show a thumbnail of their assigned actor. Use this view as your casting to-do list before you start generating shots.

4. **Click a character to see their assigned actor.** Selecting a character name expands their detail row, showing the actor's thumbnail, the actor ID, and a count of how many shots they appear in.

5. **Change an actor assignment.** With a character selected, click **Swap Actor**. The Actor Library drawer opens. Browse or search for a different digital actor, click their thumbnail to select them, then click **Assign**. All shots referencing this character will use the new actor on the next regeneration.

6. **Remove an actor assignment.** In the character detail row, click the **×** button next to the actor thumbnail. The character reverts to Uncast. Existing generated shots still show the old actor until you regenerate them.

7. **Sort the cast list by scene count.** Click the **Sort** dropdown at the top of the Casting panel and choose **Most Scenes**. This surfaces your lead characters at the top — useful when you want to prioritize consistency checks for the actors who appear most.

8. **Filter to uncast only.** Click **Filter → Uncast** to see only the characters still needing an actor. Work through this list before running final renders.

9. **Rename a detected character.** If ACT3 AI detected a character name with a typo or inconsistent capitalization, click the pencil icon next to their name, type the corrected name, and press Enter. The correction propagates through all script references automatically.

10. **Export the cast list as PDF.** Click the **Export** button (top right of the Casting panel) and choose **PDF**. The exported document lists every character, their assigned actor name and ID, and their scene count — useful for sharing with collaborators or keeping as a production record.

---

## Tips

- If your script uses the same person referred to by different names (*"Detective Harris"* vs. *"Harris"* vs. *"the detective"*), ACT3 AI may create separate character entries. Merge them by right-clicking one entry and choosing **Merge with…**.
- Swapping an actor does not automatically regenerate existing shots. After a casting change, use **Regenerate → All Shots for Character** from the character's detail row to update all affected shots at once.
- The cast list reflects the current script version. If you revise the script and new characters appear, click **Refresh from Script** at the top of the panel.

---

## Next steps

- [Link Characters to Actors](/how-to/link-characters-to-actors)
- [Create a Digital Actor](/how-to/create-digital-actor)
- [Set Per-Scene Actor Appearance](/how-to/per-scene-actor-appearance)
- [Check Actor Consistency Across Shots](/how-to/check-actor-consistency)
