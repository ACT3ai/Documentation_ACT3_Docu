---
id: how-to-direct-character-performance
slug: direct-character-performance
title: Direct Character Performance
sidebar_label: Direct Character Performance
description: Learn how to specify acting direction and emotional beats for your characters.
---

# Direct Character Performance

**Goal:** Tell the AI how a character should look, feel, and behave in a specific shot — emotion, energy, body language — so the rendered performance matches your creative vision.

Great filmmaking depends on performance. ACT3 AI translates your acting direction into AI prompt parameters that shape facial expression, posture, movement energy, and gaze. The more precisely you direct, the less time you spend regenerating shots trying to get the emotion right.

If you are new to film direction: this is the equivalent of pulling an actor aside between takes and saying "you love him, but you're terrified of what loving him means." You are giving the AI that same nuanced instruction — without needing a human actor on set.

---

## Steps

1. **Open the shot you want to direct.** In the Timeline or Shot List panel, click the shot thumbnail. The Shot panel opens in the right column.

2. **Go to the Performance tab.** In the Shot panel, look for the tabs along the top: Details, Camera, Performance, Audio. Click Performance. The performance controls for this shot appear.

3. **Select the character to direct.** At the top of the Performance tab, a character selector shows every character in this shot. Click the character's name or avatar to select them. The controls below now apply to that character only.

4. **Set the emotional state.** Use the Emotion dropdown to choose the primary emotion driving the character in this shot. Options include: Neutral, Angry, Sad, Joyful, Fearful, Surprised, Disgusted, Contemptuous, and Custom. For most dramatic scenes, choose the emotion closest to what you want, then refine it with a performance note.

5. **Write a performance note in natural language.** Below the Emotion dropdown is a free-text Performance Note field. Write your direction exactly as you would tell an actor. Be specific and physical rather than abstract. For example: *"She's trying to hide her fear but her hands are shaking. She keeps glancing at the door."* The AI reads this note as part of the shot prompt.

6. **Set the energy level.** Use the Energy slider to set the intensity of the character's physical presence in the shot. Low energy reads as quiet, restrained, still. High energy reads as agitated, expressive, kinetic. For a character sitting in shock, set energy low. For a character mid-argument, set energy high.

7. **Set gaze direction.** Use the Gaze dropdown to tell the AI where the character is looking: At Camera, At Other Character (select which character from the sub-dropdown), Off-Screen Left, Off-Screen Right, Down, or Custom Direction. Gaze direction is one of the strongest performance signals in a shot — a character looking away from who they're talking to reads very differently than one who makes direct eye contact.

8. **Preview how these settings affect the AI prompt.** Click the Show Prompt Preview button at the bottom of the Performance tab. A text panel slides out showing the full prompt that will be sent to the AI engine for this shot, with your performance direction embedded. You can see exactly how your inputs translate before committing to a render.

9. **Repeat for other characters in the shot.** Use the character selector at the top to switch to the next character in this shot. Repeat steps 4 through 8. Every character in a multi-character shot can have independent performance direction.

10. **Save and generate.** Click Save (or `Cmd+S`) to save the performance settings, then click Generate to send the shot to the Render Queue. When the render returns, review the performance in the preview panel.

---

## Next steps

- [Set Up a Shot](/how-to/set-up-a-shot)
- [Review and Approve Shots](/how-to/review-and-approve-shots)
- [Regenerate a Shot](/how-to/regenerate-a-shot)
