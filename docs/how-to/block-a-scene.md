---
id: how-to-block-a-scene
slug: block-a-scene
title: Block a Scene
sidebar_label: Block a Scene
description: Learn how to define character positions and movement paths within a scene.
---

# Block a Scene

**Goal:** Place characters, draw their movement paths, and position the camera in the Top-Down Editor so the AI knows exactly where everyone is.

Blocking is the director's blueprint for a scene. It tells every performer where to stand, when to move, and where to end up — and it tells the camera what to watch. In ACT3 AI, blocking lives in the [Top-Down Editor](/how-to/top-down-set-editor), an overhead canvas of your virtual set where you drag character icons, draw movement paths, and set [camera angles](/how-to/set-camera-movement). Every blocking decision feeds directly into the AI prompt for each shot.

If you are new to filmmaking: blocking is simply the plan for "who stands where and when." Getting it right before you render saves [credits](/account/credits) and makes every shot read clearly.

---

## Steps

1. **Open the scene you want to block.** In the left sidebar, click on the scene name. The Scene panel opens in the center column.

2. **Click the Top-Down tab.** Look for the tabs along the top of the Scene panel: Script, Shots, Blocking (or Top-Down). Click Blocking. The center column switches to an overhead canvas showing a floor-plan view of the set assigned to this scene.

3. **Familiarize yourself with the canvas.** The set appears as a gray floor plan with walls, furniture, and props shown as outlines. The camera default position appears as a triangular cone pointing toward the action. Scroll to zoom; click and drag the background to pan.

4. **Open the Character panel.** On the right side of the Top-Down Editor, the Characters panel lists every character assigned to this scene. Each character has a small avatar icon.

5. **Drag a character onto the canvas.** Click and drag a character icon from the Characters panel and drop it onto the canvas at the position where that character starts the scene. The icon snaps to the floor plan. The character's name label appears beneath the icon.

6. **Set the character's starting position.** The position where you dropped the character is their starting mark. If you need to adjust it, click the character icon and drag it. To set this position for a specific shot, select the shot number from the Shot dropdown above the canvas before placing.

7. **Draw a movement path.** To show that a character walks across the scene, click the character icon once to select it. Then click and drag away from the icon — a dotted line path appears as you drag. Release to set the endpoint. The path shows where that character ends up by the end of the scene or shot.

8. **Set the camera position and direction.** Click the camera icon on the canvas. Drag it to where the camera should sit. Rotate the cone (click and drag the tip of the cone) to point the camera toward the action. The cone represents the camera's field of view.

9. **Assign blocking to specific shots.** Use the Shot dropdown at the top of the canvas to switch between shots in this scene. Each shot can have its own character positions and camera placement. Copy blocking from a previous shot by clicking Copy Blocking from Previous Shot in the toolbar.

10. **Add a second or third character.** Repeat steps 5 through 9 for each additional character in the scene. For dialogue scenes, position characters facing each other within the camera's cone so the AI frames them correctly.

11. **Preview the blocking.** Click the Preview button in the Top-Down toolbar. The Editor center column shows a rough animated preview of the character positions and camera angle, giving you a sense of how the shot will look.

12. **Save the blocking.** Click Save or press `Cmd+S`. The blocking data attaches to the scene and automatically updates the AI prompt for each shot. A green "Blocking Saved" indicator appears briefly in the toolbar.

## Tips

- Blocking feeds directly into AI prompts. The more specific the positions and movement paths, the more consistent the generated video will be across multiple shots in the same scene.
- Use the camera cone overlap test: if a character's icon falls outside the cone's field of view, the AI may crop them out of frame. Keep characters inside the cone for the shots where they need to be visible.
- For action scenes, draw short, direct movement paths. For dramatic scenes, give characters arcs — curved paths show more natural, emotionally weighted movement.

---

## Next steps

- [Set Up a Shot](/how-to/set-up-a-shot)
- [Place Camera in Top-Down Editor](/how-to/place-camera-top-down)
- [Plan Scene Coverage](/how-to/plan-scene-coverage)
