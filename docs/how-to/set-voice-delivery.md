---
id: how-to-set-voice-delivery
slug: set-voice-delivery
title: Set Voice Delivery Style
sidebar_label: Set Voice Delivery Style
description: Learn how to adjust the emotion, pace, and style of a character's synthesized voice.
---

# Set Voice Delivery Style

**Goal:** Control how a character delivers their lines in a specific shot or scene — pacing, emotion, emphasis — rather than accepting the default voice delivery.

Assigning a voice to a character defines who is speaking. Voice delivery controls how they speak: whether this line is delivered with fear or warmth, quickly or slowly, with a hard emphasis on a specific word. Delivery settings are applied at the shot level, which means you can have the same character speak calmly in one shot and urgently in the next — matching the scene's emotional arc — without ever changing the underlying voice assignment.

---

## Steps

1. **Open a shot with dialogue.** Navigate to a shot where the character speaks. Click the shot in the Timeline or Shot List. The Shot panel opens on the right.

2. **Go to the Voice tab in the Shot panel.** Click the **Voice** tab. You will see the dialogue lines attributed to each character in this shot, along with the current delivery settings for each line.

3. **See the dialogue lines for this shot.** Each line of dialogue is displayed with the character's name, the text of the line, and a row of delivery controls. Lines are listed in the order they appear in the shot.

4. **Click on a line to open delivery settings.** Clicking a dialogue line expands its delivery settings panel. If the shot has multiple lines, each can have independent settings.

5. **Set the emotion.** Choose from the preset emotional registers: **Neutral**, **Excited**, **Sad**, **Angry**, **Fearful**, **Warm**. You can also click **Custom** and type a short descriptor: *"quiet resignation"*, *"barely contained panic"*, *"forced cheerfulness"*. The emotion setting affects the prosody and inflection of the generated voice.

6. **Set the pacing.** Use the **Pacing** control to adjust delivery speed:
   - **Faster** — useful for rapid-fire dialogue, arguments, excited speech
   - **Normal** — the voice's natural default cadence
   - **Slower** — useful for gravitas, grief, deliberate speech, a character choosing their words carefully

7. **Add emphasis marks to specific words.** Click any word in the dialogue text to mark it for emphasis. Emphasized words are spoken with more stress and slightly increased volume. Example: in the line *"I told you this would happen"*, emphasizing *"told"* makes the delivery feel accusatory; emphasizing *"this"* makes it feel more resigned. Use emphasis sparingly — one or two words per line is usually right.

8. **Add a pause between lines.** To insert a breath or dramatic pause between two dialogue lines, click the **+ Pause** button between them and enter the pause duration in seconds. Short pauses (0.3–0.8 seconds) feel like natural breath. Longer pauses (1.5+ seconds) read as dramatic hesitation.

9. **Listen to a preview before rendering.** Click **Preview Audio** to hear the line with the delivery settings applied. The preview generates quickly (no credit cost) so you can iterate before committing to a full shot render.

10. **Understand how delivery settings write into the AI generation prompt.** Delivery settings are translated into SSML (Speech Synthesis Markup Language) instructions before being sent to the Azure Neural TTS service. You do not need to know SSML — ACT3 AI handles the translation — but you can click **View SSML** to inspect the instruction if you are troubleshooting an unexpected delivery.

---

## Tips

- Subtle emotion settings read better on screen than extreme ones. *"Warm"* reads as friendly; *"Excited"* at maximum reads as frantic. Let the dialogue text, the visual performance, and the scene context carry the emotional weight — voice delivery is a supporting tool, not the primary performance driver.
- Test delivery changes on a single key line in the scene before adjusting every line. If the character's voice sounds right on the most emotionally loaded line, the others will generally follow.
- Pacing interacts with lipsync: a slower delivery means more visible mouth movement time. After adjusting pacing, review the lipsync on close-up shots.

---

## Next steps

- [Assign a Voice to a Character](/how-to/assign-character-voice)
- [Review Lipsync](/how-to/review-lipsync)
- [Edit Dialogue and Audio](/how-to/edit-dialogue-audio)
