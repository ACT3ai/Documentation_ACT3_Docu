---
id: how-to-assign-character-voice
slug: assign-character-voice
title: Assign a Voice to a Character
sidebar_label: Assign Character Voice
description: Learn how to select and attach a TTS voice to a character for lipsync.
---

# Assign a Voice to a Character

**Goal:** Choose the AI voice that speaks a character's lines so dialogue in your film sounds like a real person, not a generic text-to-speech engine.

ACT3 AI uses Azure Neural TTS to generate character dialogue. The system has a large library of voices differentiated by gender, age, accent, and emotional range. Assigning a voice to a character is a one-time setup step — once assigned, every line of dialogue in the script for that character is spoken by that voice, and lipsync is generated automatically from the audio output. You can change the assignment at any time.

---

## Steps

1. **Open the Casting panel.** In the Editor, click the **Cast** icon in the left sidebar. Every character in the project is listed.

2. **Click the character you want to assign a voice to.** The Character Detail view opens. You will see tabs for Profile, Costume, Voice, and Appearance.

3. **Go to the Voice tab.** Click **Voice**. If no voice has been assigned yet, you will see *"No voice assigned"* and two options: **Browse Voices** and **Upload Recording**.

4. **Click Browse Voices.** The voice library opens. It contains all available Azure Neural TTS voices with preview playback.

5. **Filter the library.** Use the filter controls to narrow the list:
   - **Gender** — Male / Female / Neutral
   - **Age range** — Child / Young Adult / Adult / Older Adult
   - **Accent / Language** — American English, British English, Australian English, and many others
   - **Emotional range** — voices tagged as Warm, Authoritative, Neutral, Energetic, Calm, or Expressive

6. **Play previews.** Click the play button on any voice to hear a sample. The preview uses a short neutral sentence so you can evaluate the voice's timbre and natural cadence. Audition several voices before deciding — small differences in tone matter at feature length.

7. **Select a voice.** Click **Select** next to the voice you want. The voice is assigned and you are returned to the character's Voice tab, where the selected voice name and a preview player are now shown.

8. **Confirm the assignment.** A confirmation banner appears: *"Voice assigned to [Character Name]."* The character card in the Casting panel updates to show the voice name.

9. **Understand how the voice propagates.** From this point forward, every line of dialogue attributed to this character in the script will be rendered using this voice. You do not need to assign the voice per scene or per shot — it applies project-wide automatically.

10. **Change a voice assignment later.** To switch voices, return to the Voice tab and click **Change Voice**. The voice library reopens. Selecting a new voice reassigns it. Shots with already-generated audio are not automatically re-rendered; click **Regenerate Audio** on those shots to apply the new voice.

11. **Understand the relationship to lipsync.** When a shot with dialogue is rendered, ACT3 AI generates the voice audio first, then uses the waveform to drive lipsync animation. A voice change on an already-rendered shot requires both an audio regeneration and a lipsync regeneration. See [Review Lipsync](/how-to/review-lipsync) for details.

---

## Next steps

- [Set Voice Delivery Style](/how-to/set-voice-delivery)
- [Review Lipsync](/how-to/review-lipsync)
- [Add Narration](/how-to/add-narration)
