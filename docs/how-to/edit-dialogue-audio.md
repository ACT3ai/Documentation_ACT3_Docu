---
id: how-to-edit-dialogue-audio
slug: edit-dialogue-audio
title: Edit Dialogue and Audio
sidebar_label: Edit Dialogue and Audio
description: Learn how to replace, trim, and mix dialogue and sound in the audio editor.
---

# Edit Dialogue and Audio

**Goal:** Adjust the audio mix for a shot — volume levels, timing, background music balance — so the dialogue is clear and the overall sound feels right.

Every shot in ACT3 AI has an audio stack: dialogue, background music, ambience, and optionally narration and sound effects. The Audio tab in the Shot panel lets you adjust all of these layers for the shot you are working on. Most adjustments are non-destructive mixing operations — they do not require regenerating the video, only the audio mix — which means they are fast and cost-efficient.

---

## Steps

1. **Open a shot with audio.** Navigate to the shot you want to work on. Click it in the Timeline or Shot List. The Shot panel opens on the right side of the Editor.

2. **Go to the Audio tab in the Shot panel.** Click the **Audio** tab. You will see the audio layers for this shot displayed as separate tracks: **Dialogue**, **Background Music**, **Ambience**, and **Sound Effects**. Each layer has its own volume control, mute button, and trim controls.

3. **See the audio layers.** Each layer shows:
   - A label with the layer type and source (for Dialogue, the character name and line text)
   - A waveform visualization
   - A volume slider (in dB)
   - Trim handles on the left and right ends of the clip
   - A fade in / fade out toggle

4. **Adjust the dialogue volume.** Drag the Dialogue layer's volume slider left or right. The default is 0 dB (no change from the source level). Boosting is rarely needed if the audio was normalized at generation; reducing is sometimes useful if the dialogue is competing with music in a loud action scene.

5. **Trim the dialogue clip start and end.** Drag the left trim handle right to remove a brief silence at the start of the line. Drag the right trim handle left to remove trailing silence after the last word. This is useful for tightening the pacing of a scene — even a 200ms trim can make dialogue feel snappier.

6. **Add a fade in or fade out.** Click the **Fade In** toggle on the dialogue clip to add a short ramp-in (the voice comes up from silence over the first fraction of a second). Click **Fade Out** to taper the end. These are subtle polish tools — they prevent audio clicks at clip boundaries and soften a line's ending without the feeling of a hard cut.

7. **Adjust background music volume.** Click the Background Music layer. The volume slider defaults to -12 dB (music sits well under dialogue). If the music is drowning the dialogue, lower it further — -18 dB or -20 dB for scenes with dense or climactic music. If there is no background music in this shot, the layer is empty; you can click **+ Add Music** to attach a track from the project's music library.

8. **Add a sound effect to the shot.** Click the **+ Add** button in the Sound Effects layer. A browser opens with the built-in sound effects library (common options: ambience loops, footsteps, doors, impacts, weather, crowd). You can also click **Upload** to add a custom sound effect file. After adding, set the sound effect's volume and trim it to fit the shot's duration.

9. **Understand credit cost for audio changes.** Minor audio adjustments — volume, trim, fade, adding a sound effect — do not require regenerating the video and do not cost render credits. They are applied as a remix of the existing audio. If you change the voice delivery settings, re-record a line, or change the background music track, those changes do require audio regeneration, but not video regeneration. Only changing visual parameters (camera, lighting, characters, style) triggers a full video render.

10. **Export-preview the audio-only.** Click **Preview Audio** to hear the complete audio mix for this shot — all layers playing together at their adjusted levels — without waiting for a full video render. Use this to confirm that dialogue is audible and the overall sound balance feels right before approving the shot.

---

## Next steps

- [Add Narration](/how-to/add-narration)
- [Review Lipsync](/how-to/review-lipsync)
- [Export for Delivery](/how-to/export-for-delivery)
