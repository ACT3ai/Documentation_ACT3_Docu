---
id: how-to-add-background-actors
slug: add-background-actors
title: Add Background Actors
sidebar_label: Add Background Actors
description: Learn how to populate your scene with background performers.
---

# Add Background Actors

**Goal:** Populate a scene with background characters — extras — who add realism and depth without needing individual casting or scripted dialogue.

Background actors are AI-generated crowd figures that fill the space behind your principal characters. They don't need names, scripts, or individual actor assignments — ACT3 AI generates them automatically based on density and demographic settings you choose. A coffee shop scene feels empty without background patrons; a street chase feels urgent with pedestrians reacting to the commotion. Background actors deliver that environmental realism at a fraction of the cost of casting individual characters.

---

## Steps

1. **Open a scene in the editor.** From the Scenes panel or the Timeline, click the scene you want to populate with background characters. The scene opens showing its shots and Scene Settings.

2. **Go to Scene Settings → Background.** Click the **Settings** gear icon in the scene header to open Scene Settings, then click the **Background** tab. The Background section shows the current background actor configuration — by default, this is set to *None*.

3. **Click Add Background Actors.** The background actor configuration panel expands, revealing density, demographic, and variety controls.

4. **Set the crowd density.** Choose one of three density levels from the **Density** dropdown:
   - *Sparse* — a handful of figures, well-spaced. Good for quiet environments like early-morning streets or empty offices.
   - *Moderate* — a natural-looking crowd for busy restaurants, daytime sidewalks, or social gatherings.
   - *Crowded* — dense figures filling the background. Good for festivals, markets, transit stations, or protest scenes.

5. **Choose a demographic preset or customize.** The **Demographic Preset** dropdown offers common scenario types: *Office Workers*, *Street Crowd*, *Party Guests*, *Shoppers*, *Commuters*, *Stadium Crowd*, and more. Selecting a preset sets appropriate age ranges, clothing styles, and behavioral poses in one click. To customize, click **Manual** and adjust the age range, gender distribution, and clothing era sliders individually.

6. **Set background actor variety.** The **Variety** toggle controls whether background figures look distinct from one another:
   - *Random* — each background actor is independently generated, maximizing variety. Best for realistic urban crowds.
   - *Consistent Type* — background actors share a similar look, useful for uniformed staff, soldiers, or formal event attendees.

7. **Preview in the shot.** Click **Preview in Shot** to generate a low-resolution preview frame showing the background actors placed in the scene's set. Check that the figures are positioned naturally and aren't obscuring your principal characters or key set elements.

8. **Adjust positioning if needed.** If background actors are too prominent or blocking important action, reduce density or use the **Push to Rear** slider to move generated figures further into the background depth plane. For precise control, switch to the **Top-Down Editor** and drag individual background actor zones to reposition them.

9. **Understand how background actors affect credit cost.** Background actors add to the rendering cost of each shot they appear in. The credit estimator at the bottom of the Shot panel updates in real time as you adjust density — *Sparse* adds approximately 10% to shot cost; *Crowded* can add 40–60%. Shots where background actors won't be visible (tight close-ups, extreme telephoto) should have background actors turned off to avoid unnecessary cost.

---

## Tips

- For close-up shots and over-the-shoulder angles, turn background actors off entirely or set density to *Sparse*. At that focal length they'll be blurred or off-frame, so they add cost with no visual benefit.
- Background actors use crowd AI motion presets (milling, walking, reacting) that are suitable for most scenes. For scenes where the background action is dramatically important — *a crowd fleeing a disaster* — you may want to direct those figures individually using principal actor casting instead.
- Background actor settings apply at the scene level and cascade to all shots in that scene. You can override the settings for individual shots by opening the shot's **Background** tab and toggling **Override Scene Defaults**.

---

## Next steps

- [Block a Scene](/how-to/block-a-scene)
- [Set Up a Shot](/how-to/set-up-a-shot)
- [Manage Your Cast List](/how-to/manage-cast-list)
