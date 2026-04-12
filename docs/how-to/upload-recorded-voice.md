---
id: how-to-upload-recorded-voice
slug: upload-recorded-voice
title: Upload a Recorded Voice
sidebar_label: Upload Recorded Voice
description: Learn how to upload a real voice recording to replace AI-generated speech.
---

# Upload a Recorded Voice

**Goal:** Use a real human voice recording instead of AI TTS for a character — for professional voice actors, the filmmaker's own voice, or temp dialogue recorded on a phone.

ACT3 AI supports Azure Neural TTS by default, but you can replace it entirely with a real recording for any character. This is useful when you have hired a voice actor and want their performance to drive the lipsync, when you want to use your own voice as a scratch track while the project develops, or when a character's voice has qualities (a specific accent, a distinctive quality, an emotional rawness) that no TTS voice in the library matches.

---

## Steps

1. **Open the Casting panel.** In the Editor, click the **Cast** icon in the left sidebar. Click the character you want to assign a recorded voice to.

2. **Go to the Voice tab.** Click the **Voice** tab in the Character Detail view.

3. **Click Upload Recording instead of Browse Voices.** The upload dialog opens with two sub-options: **Upload Full Session** (all lines recorded in a single file or session) and **Upload Per Line** (separate audio files for each line of dialogue). For most use cases, Upload Full Session is the right choice — ACT3 AI will handle splitting the recording into individual lines.

4. **Upload the audio file.** ACT3 AI accepts WAV and MP3 formats. WAV is preferred for quality. Click **Browse** or drag the file into the upload area. Files should be recorded at 44.1 kHz or 48 kHz, mono or stereo (the system will convert to mono for processing).

5. **Understand how ACT3 AI processes the uploaded audio.** Once the file uploads, the system automatically: trims leading and trailing silence, normalizes the audio level to a consistent loudness target, and runs a voice activity detection pass to identify individual speech segments.

6. **Match recordings to script lines (timestamp import vs manual sync).** If you recorded a full session, ACT3 AI attempts to auto-match speech segments to the character's dialogue lines in the script using a phonetic alignment algorithm. Review the auto-matches:
   - Green segments are matched with high confidence.
   - Yellow segments are matched but should be reviewed.
   - Red segments were not matched and need to be assigned manually by dragging them to the correct line.

7. **Assign unmatched segments manually.** For any red segment, click it to play it, then drag it to the corresponding dialogue line in the list. This is quick for a short script; for a feature-length voice session, auto-matching handles the bulk of the work.

8. **Understand lipsync generation from uploaded audio.** Lipsync in ACT3 AI is always derived from the audio waveform — whether that waveform comes from TTS or from an uploaded recording. Once the recording is matched to script lines, lipsync is generated exactly as it would be for a TTS voice. The AI analyzes the phoneme timing in your recording and drives mouth movement accordingly.

9. **Replace a recording later.** To update the recording (for example, to replace a temp scratch track with the final voice actor session), return to the Voice tab and click **Replace Recording**. Upload the new file and re-run the matching step. Shots with already-generated lipsync will need to be regenerated to reflect the new audio.

---

## Tips

- Record in a quiet space with a consistent ambient noise floor — background noise in a reference recording will make phoneme detection less accurate and degrade lipsync quality. A closet full of clothes is a surprisingly effective vocal booth.
- If you are recording a scratch track on your phone, speak clearly and at a normal conversational pace. Rushed temp tracks with mumbled words are harder to auto-match to script lines.
- Do not clip the audio during recording. Set levels so the loudest line peaks around -6 dBFS, not 0. Clipped audio cannot be restored in post-processing.

---

## Next steps

- [Assign a Voice to a Character](/how-to/assign-character-voice)
- [Review Lipsync](/how-to/review-lipsync)
- [Set Voice Delivery Style](/how-to/set-voice-delivery)
