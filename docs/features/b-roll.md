---
id: b-roll
title: B-Roll
sidebar_label: B-Roll
description: How to create, plan, and use B-roll footage in ACT3 AI — AI-generated cutaway shots, supplementary visuals, and screen content.
---

# B-Roll

B-roll is any footage that isn't the primary shot — the cutaway visuals that play over narration, the establishing shots between dialogue scenes, the insert shots that show what a character is looking at. Every video format uses B-roll: documentaries, explainer videos, social media clips, news segments, narrative films, and advertising.

In ACT3 AI, B-roll shots are generated like any other shot but are tagged as supplementary visual material, assembled under a narration or dialogue track in the timeline rather than as standalone story beats.

---

## What B-roll is used for

**Narration support** — The voice-over describes something; B-roll shows it visually. The most common use of B-roll in explainer videos, documentaries, and marketing content.

**Cutaway shots** — In a dialogue scene, cut away from the speakers to show what they're talking about, where they are, or what's happening elsewhere. This gives the editor flexibility and makes scenes more dynamic.

**Establishing shots** — The wide exterior shot of a building before cutting to an interior scene. The aerial of a city before cutting to a street level. These orient the viewer in space and time.

**Insert shots** — An extreme close-up of a specific object or detail: the phone screen showing a message, the newspaper headline, the ticking clock. Insert shots are often B-roll even when they carry story information.

**Transition material** — Shots that smooth over time jumps, location changes, or emotional transitions. A montage of street life. A series of quick landscape shots. A time-lapse of a construction site.

**Social media cutaways** — In short-form social content, B-roll cuts between the host and visual evidence of what's being described. "3 mistakes people make when starting a business" — the host says it, B-roll shows it.

---

## Planning B-roll in your script

B-roll starts in the script as action lines under a V.O. (voice-over) or N.A. (narrator) line:

```
NARRATOR (V.O.)
Every city has a neighborhood that remembers what the city used to be.

EXT. BROOKLYN STREET - CONTINUOUS
Old brownstones next to glass towers. A bodega between two luxury condos.
A retired man walking a dog past a construction crane.
```

Those three action lines describe three B-roll shots. In ACT3 AI, when you import or write a script with this structure, the platform identifies these as B-roll candidates and tags them accordingly.

### B-roll scripting conventions

- Write B-roll action lines in the same scene block as the narration they accompany
- One action sentence = one shot. Keep them short and specific.
- Describe the image, not the camera move. "A retired man walking a dog" not "camera follows a retired man walking a dog."
- For screen content B-roll (what's on a monitor or phone), see the [Screens feature](/integrations/blender).

---

## Generating B-roll in ACT3 AI

### Method 1 — From script parsing

When ACT3 AI parses a script with V.O. sections, it identifies the action lines under the narration and creates B-roll shot slots automatically. Each shot slot has the action description pre-filled as the shot prompt. Review and adjust the prompts, then generate.

### Method 2 — Manual B-roll shot

In any scene, click **+ Add Shot** and select **B-roll** as the shot type. Enter a description of what the B-roll should show. Set the duration to match the narration timing it will accompany.

### Method 3 — AI B-roll suggestion

In a scene with voice-over dialogue, click **Suggest B-roll** in the Shot Panel. ACT3 AI reads the narration and proposes a list of B-roll shots that would illustrate the spoken content. Review, edit, and generate.

---

## B-roll shot setup

B-roll shots use the same controls as any other shot:

- **Shot type** — Establishing shots (wide), insert shots (extreme close-up), and montage clips (medium) are most common
- **Visual style** — B-roll should match the visual style of the primary footage unless you're using it for intentional contrast
- **Set** — B-roll often uses different sets than the primary scene. Multiple sets in one scene is normal for B-roll-heavy content.
- **No character required** — B-roll frequently has no characters. Environmental shots, object close-ups, and abstract visuals are all valid.

See [How to Set Up a Shot](/how-to/set-up-a-shot).

---

## B-roll in the timeline

In the Timeline Editor, B-roll shots appear below the primary shot track:

- **Primary track** — The main story footage (character dialogue, on-screen action)
- **B-roll track** — Supplementary footage that plays over the primary audio

You can drag B-roll clips along the timeline to align them with specific moments in the narration. The B-roll clip's audio is suppressed by default — only its video plays, while the primary audio track (narration or dialogue) continues.

For social video, B-roll can replace primary footage entirely for portions of the video — showing the subject rather than the host.

See [How to Review Shots in the Timeline](/how-to/review-shots-in-timeline).

---

## B-roll and the Screens feature

One specialized form of B-roll is content that appears on a virtual screen within a set. A monitor showing an app, a TV playing a news broadcast, a presentation slide on a conference room display — these are all B-roll assets composited onto screen surfaces.

The [Screens feature](/integrations/blender) handles this: generate a B-roll clip specifically for a screen surface, then attach it to that surface in the set. The primary shot shows the scene with the screen playing its B-roll content in the background.

---

## Where B-roll matters most by video type

| Video type | B-roll role |
|---|---|
| Explainer videos | Core to the format — every narration point needs a visual |
| Social media (talking head) | Cutaways that break up direct-address shots |
| Marketing and advertising | Product in context, lifestyle visuals, brand environment |
| Documentary-style content | The footage that tells the story while interview audio plays |
| News segment style | Graphics, environment shots, and subject footage over reporter V.O. |
| Educational series | Diagrams, demonstrations, and visual examples |
| Narrative film | Insert shots, establishing shots, transition material |

---

## Related

- **[Screens](/integrations/blender)** — Compositing video content onto screen surfaces within a set
- **[How to Set Up a Shot](/how-to/set-up-a-shot)** — Creating B-roll shots
- **[How to Add Narration or Voice-Over](/how-to/add-narration)** — Setting up the narration track that B-roll accompanies
- **[Explainer Videos](/explainer-videos/)** — B-roll is central to all explainer formats
- **[Social Media Videos](/social-media-videos/)** — Cutaway B-roll in short-form content
- **[How to Review Shots in the Timeline](/how-to/review-shots-in-timeline)** — Assembling B-roll in the edit
