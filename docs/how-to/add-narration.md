---
id: how-to-add-narration
slug: add-narration
title: Add Narration
sidebar_label: Add Narration
description: Learn how to add voiceover narration tracks to your project.
---

# Add Narration

**Goal:** Add a voiceover narration track to a scene or shot — a narrator speaking over the visuals, not a character speaking in the scene.

Narration is distinct from character dialogue. Dialogue is attached to a character in the script and drives lipsync. Narration is an audio-only layer — a voice that speaks over the visuals without appearing on screen as a speaking character. Common uses: documentary-style narration, literary adaptations where the novel's prose narrates over the visuals, a character's internal monologue, or a title-card introduction narrated over an establishing shot. Narration is added at the scene level and can span multiple shots.

---

## Steps

1. **Open a scene.** Navigate to the scene where the narration should play. Click it in the Timeline or Scene List. The Scene Settings panel is accessible from the gear icon in the scene header.

2. **Go to Scene Settings → Audio.** Click **Scene Settings** and then select the **Audio** tab. You will see the current audio tracks for the scene: any character dialogue tracks that were auto-created from the script, plus slots for background music, ambience, and narration.

3. **Click Add Narration Track.** A narration track is added to the scene's audio stack. The track is labeled **Narration** and is visually distinct from character dialogue tracks in the timeline.

4. **Choose narration type.** Two options appear:
   - **AI Voice** — use Azure Neural TTS to generate the narration from text you write
   - **Uploaded Recording** — upload a pre-recorded narration file (WAV or MP3)

5. **If AI voice: browse and select a narrator voice.** Click **Browse Voices** to open the voice library. You can filter by gender, age, accent, and tone. Narrators often benefit from a voice with a slightly more measured pace and neutral emotional register than character voices. Select a voice and confirm.

6. **Write the narration text.** Click into the **Narration Text** field and type or paste the narration. This is entirely separate from the script — it is what the narrator says over the visuals, not dialogue spoken by a character in the scene. Write it as a continuous paragraph; line breaks will be treated as pause points.

7. **Set timing.** Use the **Start At** control to specify which shot the narration begins over. Use **Fade Out By** to specify which shot it ends on (the narration volume will taper out over the final shot rather than cutting abruptly). If the narration should play across the entire scene from the first shot to the last, set Start At to Shot 1 and Fade Out By to the final shot.

8. **Adjust narration volume relative to background audio.** The **Narration Volume** slider sets the level of the narration relative to background music and ambience. By default it is set to -3 dB, which keeps it clearly audible while allowing background audio to breathe. If the narration needs to be dominant (documentary style), bring it up to 0 dB and lower the background music separately.

9. **Understand how narration appears in the timeline.** The narration track is shown as a horizontal bar in the Scene timeline, spanning the shots it covers. It is labeled with the first few words of the narration text. You can drag the bar's endpoints to adjust start and end timing without returning to Scene Settings.

10. **Preview the scene with narration.** Click **Preview Scene** to play the scene with the narration track active. Listen to the narration against the visuals and adjust timing or volume as needed before generating or approving.

---

## Tips

- Write narration after your shots are locked. The length of the narration should match the duration of the shots it plays over — if the narration finishes in 15 seconds but the scene runs for 30, the second half of the scene will be silent. Draft the narration, check the shot durations in the timeline, and trim or expand accordingly.
- Read your narration aloud before finalizing it. Count the seconds it takes to speak. A narrator speaking at a natural, unhurried pace covers roughly 120–150 words per minute. Use this to estimate whether your narration will fit the scene's running time.
- For documentary or literary adaptations, the narration voice should be different from any character voice in the project to avoid confusion. Choose a voice with a distinct timbre or accent.

---

## Next steps

- [Assign a Voice to a Character](/how-to/assign-character-voice)
- [Upload a Recorded Voice](/how-to/upload-recorded-voice)
- [Edit Dialogue and Audio](/how-to/edit-dialogue-audio)
