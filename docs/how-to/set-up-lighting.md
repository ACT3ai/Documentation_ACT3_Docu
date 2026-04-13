---
id: how-to-set-up-lighting
slug: set-up-lighting
title: How to Set Up Scene Lighting
sidebar_label: Set Up Lighting
description: How to define the lighting mood for a scene in ACT3 AI so every shot has consistent, intentional light.
---

# How to Set Up Scene Lighting

**Goal:** Define the lighting setup for a scene so every shot in that scene has the right light source, color temperature, and mood — without setting it separately for each shot.

Lighting is defined at the [scene](/concepts/scenes) level. All [shots](/concepts/shots) in the scene inherit it. You can override per shot when you need to. The [visual style](/how-to/set-visual-style) setting also affects how lighting renders across the full project.

---

## Steps

1. **Open the scene panel.** Click the scene in the left navigation or in the timeline.

2. **Go to the Lighting tab.** The Lighting tab shows the current lighting setup inherited by this scene.

3. **Choose the light source type:**
   - **Natural / Exterior** — Sunlight-based. Set time of day.
   - **Interior — Practical** — Room lights, lamps, candles. Warm or cool.
   - **Interior — Studio** — Clean, controlled artificial light.
   - **Mixed** — Interior space with natural light through windows.

4. **Set the time of day (for natural light).** Options include Golden Hour (sunrise/sunset), Midday, Overcast, and Night. Each changes the light angle, color temperature, and shadow quality.

5. **Set the mood.** Choose from lighting mood presets:
   - **High Key** — Bright, low contrast, open shadows. Commercial, cheerful.
   - **Low Key** — Dark, high contrast, deep shadows. Thriller, noir.
   - **Dramatic** — Strong directional light, visible shadows.
   - **Naturalistic** — Realistic mixed sources without strong mood direction.

6. **Set color temperature.** Warm (tungsten, golden hour) or cool (overcast, fluorescent). This affects the overall emotional register of the scene.

7. **Upload a lighting reference image (optional).** If you have a specific look — a film still with the exact light quality you want — upload it as a reference and the AI uses it as a visual target.

8. **Review a shot to check the lighting.** Generate a draft shot from the scene and evaluate whether the lighting reads the way you intended before committing to a full render.

---

## Next steps

- [Set up a shot](/how-to/set-up-a-shot) once lighting is defined
- [Use visual reference images](/how-to/use-visual-references) for more precise style control
- [Set visual style](/how-to/set-visual-style) for project-wide color and tone
