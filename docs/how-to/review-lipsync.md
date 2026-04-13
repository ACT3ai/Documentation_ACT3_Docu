---
id: how-to-review-lipsync
slug: review-lipsync
title: Review Lipsync
sidebar_label: Review Lipsync
description: Learn how to preview and refine the lipsync timing between audio and character animation.
---

# Review Lipsync

**Goal:** Check that a character's mouth movements match their dialogue, fix frames where the sync is off, and approve lipsync before final render.

Lipsync in ACT3 AI is generated automatically from the character's voice audio — whether that audio came from Azure Neural TTS or from an uploaded recording. The system analyzes the phoneme timing in the waveform and drives the character's mouth animation accordingly. Auto-generated lipsync is accurate in most [shots](/concepts/shots), but close-ups and emotionally charged lines benefit from a manual review pass. This guide walks through the review and correction workflow.

---

## Steps

1. **Open a shot with dialogue.** Navigate to the shot you want to review. Click it in the Timeline or Shot List. The Shot panel opens on the right.

2. **Play the preview.** Click **Play** in the shot preview panel. Lipsync is visible in the preview if the shot has been rendered. Watch the character's mouth as they speak and compare against what you hear.

3. **Identify sync issues.** The most common lipsync problems are:
   - Mouth opens slightly too early (the animation anticipates the audio)
   - Mouth stays open briefly after the last word ends
   - A consonant sound (especially B, M, P) shows the mouth closing when it should be open, or vice versa
   - A long vowel sound (ah, oh) shows the wrong mouth shape

4. **Open the Lipsync Editor.** In the Shot panel, click the **Lipsync** tab. The Lipsync Editor opens below the preview. It shows two synchronized tracks side by side: the audio waveform on top and the mouth-movement animation timeline below.

5. **See the audio waveform and mouth-movement timeline side by side.** Each word in the dialogue is marked on the waveform track. The mouth-movement track shows the animation frames, color-coded by phoneme group. Zoom in with the scroll wheel to inspect individual words or syllables.

6. **Adjust the lipsync offset.** If the entire lipsync track is consistently early or late, use the **Global Offset** slider to shift all mouth movement earlier or later in time. A negative value (for example, -80ms) shifts the animation earlier, so the mouth opens before the audio peaks — correct if the sync feels like the character is reacting to their own voice rather than speaking. A positive value delays the animation.

7. **Fine-tune individual phoneme timing for key moments.** For specific problem words — usually the opening and closing of a line, or a word with an unusual consonant cluster — click on the word marker in the waveform track and drag it left or right to shift the corresponding mouth animation independently. This does not affect the other words in the shot.

8. **Play the corrected preview.** Click **Play** again to hear and see the lipsync with your adjustments applied. Iterate until the character's mouth movement feels natural and synchronized.

9. **Approve the lipsync.** When the lipsync looks correct, click **Approve Lipsync** in the Lipsync tab. The shot's lipsync is marked as reviewed. Approved lipsync is preserved through cosmetic shot updates (lighting changes, camera angle tweaks) but is flagged for re-review if the voice audio changes.

10. **Move to the next shot.** Use **Shift + →** to jump to the next shot with dialogue and continue the review. ACT3 AI highlights shots with unapproved lipsync in the Timeline with an orange indicator, so you can work through them systematically.

---

## Tips

- Lipsync accuracy varies by camera distance. Close-ups need the most attention — every phoneme transition is visible. Wide shots and two-shots are forgiving; even a 100ms offset is unnoticeable when a character is small in frame. Prioritize your review time on close-ups.
- Short, punchy lines (one to four words) are usually auto-synced accurately. Long speeches with complex consonant patterns benefit most from manual fine-tuning.
- If a line was re-recorded or the voice was changed after lipsync was generated, regenerate the lipsync before reviewing. Reviewing stale lipsync against new audio will produce confusing results.

---

## Next steps

- [Assign a Voice to a Character](/how-to/assign-character-voice)
- [Set Voice Delivery Style](/how-to/set-voice-delivery)
- [Review and Approve Shots](/how-to/review-and-approve-shots)
