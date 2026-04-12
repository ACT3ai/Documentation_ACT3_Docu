---
id: filmmakers-voice-actor
title: Voice Actor
sidebar_label: Voice Actor
description: How to add dialogue, generate character voices, and sync audio to characters in ACT3 AI.
---

# Voice Actor

In traditional production, voice work happens on a recording stage and gets married to picture in post. In ACT3 AI, voice and dialogue are part of the shot definition — generated and synced before the video renders. You define the voice, the line, and the emotion, and the system handles lipsync automatically.

---

## Your work in ACT3 AI

Dialogue in ACT3 AI is driven by text-to-speech (TTS) per shot. Each character has a voice assigned to them. The script provides the lines. TTS converts them to audio and drives the lipsync on the character's face in the final render.

You can also upload recorded audio if you want a real voice instead of a synthetic one.

---

## What you'll do here

Tasks are listed most common first.

### Assign a voice to a character
Every speaking character needs a voice assigned. Choose from the TTS voice library — age, gender, accent, tone — or upload a custom voice profile.

→ [How to assign a voice to a character](/docs/how-to/assign-character-voice)

### Review and edit dialogue lines
Dialogue comes from the script. Review each line in context, correct text before it gets rendered, and adjust punctuation and phrasing to control delivery pacing.

→ [How to edit dialogue lines](/docs/how-to/edit-dialogue-audio)

### Set emotional delivery for a line
Add delivery notes — a whisper, an outburst, sarcastic, desperate — that guide the TTS system's intonation. These are written as brief directions in the shot's voice parameters.

→ [How to set dialogue delivery tone](/docs/how-to/set-voice-delivery)

### Upload a recorded voice file
For characters where a real human voice matters — a celebrity cameo, a specific accent, a child's voice — upload the recorded audio and sync it to the character in the shot.

→ [How to upload and sync recorded audio](/docs/how-to/upload-recorded-voice)

### Sync audio to lipsync
ACT3 AI uses NVIDIA Audio2Face to drive facial animation from the audio track. The system handles this automatically, but you can review the sync and adjust timing if needed.

→ [How to review lipsync sync](/docs/how-to/review-lipsync)

### Add non-dialogue audio — narration, voice-over
For narration or voice-over that plays over visuals without a character on screen, add a voice track to the scene-level audio and it will mix into the assembled output.

→ [How to add narration or voice-over](/docs/how-to/add-narration)

---

## Key tools you'll use

| Tool | Where to find it |
|---|---|
| Voice assignment | Character panel → Voice tab |
| Dialogue review | Script editor → dialogue lines |
| TTS delivery notes | Shot panel → Audio tab → Voice notes |
| Audio upload | Shot panel → Audio tab → Upload |
| Lipsync review | Shot preview → Audio sync view |
