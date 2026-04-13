---
id: screenwriters-shots
slug: shots
title: Shots — The Screenwriter's Visual Language
sidebar_label: Shots
sidebar_position: 3
description: When screenwriters write shots, how to describe them in action lines, and how ACT3 AI turns script descriptions into rendered video.
---

# Shots

A shot is a single continuous piece of film from one camera angle. It is the atomic unit of cinema — the thing an editor cuts between, the thing an audience sees as a single visual moment.

Screenwriters have a complicated relationship with shots. Industry convention says screenwriters don't direct from the page — you write story, not camera placement. But every working screenwriter knows that *how you write action lines* is de facto shot direction, whether you label it that way or not.

In ACT3 AI, this matters practically. The AI reads your action lines and translates them into shot parameters. The more visually specific you write, the more accurately the AI generates what you intended.

---

## When to write shots in a screenplay

### The case against writing shots

"Master scene format" — the industry standard — asks writers to describe what happens without specifying camera angles. The argument: the director's job is to decide how to shoot it. If you write "CLOSE ON her hand reaching for the gun," you're directing, not writing.

Many writers and script readers actively dislike shot direction in spec scripts. It slows the read, adds page count, and signals that the writer doesn't trust the material to carry the scene.

### The case for writing shots

Great screenwriting often implies its shots through the precision of its action lines. Compare:

**Neutral (no shot direction):**
```
She picks up the gun.
```

**Shot-implied through specificity:**
```
Her hand — shaking — wraps around the grip.
```

The second version implies a close-up without saying "CLOSE ON." It places the reader at close range. It communicates the emotional specificity of the moment. A director reading it knows what image the writer intended.

The principle: **describe what the camera would see, not what the camera does.** Write the image, not the instruction.

### When explicit shot direction is acceptable

In three contexts, shot direction in a screenplay is standard:
1. **Establishing shots** — "EXT. CITY SKYLINE - ESTABLISHING" is accepted convention
2. **POV shots** — "MARCUS'S POV:" or "HIS POV:" is standard
3. **Close-ups for key props/details** — "CLOSE ON the contract — his name at the bottom" tells the reader what the script considers important

---

## Writing action lines that generate well in ACT3 AI

Because ACT3 AI reads action lines and proposes shots, writing visually specific action gives the AI better information to work from. These principles help:

### Be specific about composition
Instead of "He looks at her," write "He looks at her from across the room — she is already looking at him." The first description could be any shot. The second implies a two-shot or a medium with eyeline match.

### Name what's in the frame
Instead of "They fight," write "He backs her against the wall. She drives her knee into his side. He drops." Now the AI knows this is a physical close-quarters fight, not a long-distance shootout — and can generate appropriate shot framing.

### Include light and time
"The sun has just set" or "harsh afternoon light" or "the only light source is the phone screen" — these details inform the AI's lighting parameters directly.

### Suggest size through language
Words like "enormous," "tiny," "she could see every wrinkle," "the camera could barely make out the figure" — these suggest scale and therefore shot size without stating "WIDE SHOT" or "EXTREME CLOSE-UP."

---

## The 22 shot types in ACT3 AI

When ACT3 AI reads your action and proposes a shot, it selects from 22 canonical shot types. Understanding them helps you write toward the shot you intend:

| Shot type | What it shows | Write toward it by... |
|---|---|---|
| **Establishing / Wide** | The full location and spatial context | Describing scale, geography, distance |
| **Full** | A character head-to-toe | Describing full-body action or posture |
| **Medium** | Character from waist up | Most default dialogue and action |
| **Medium close-up** | Face and shoulders | Describing facial expression or emotional nuance |
| **Close-up** | Face filling the frame | Writing emotional intensity or significance |
| **Extreme close-up** | A single feature or object detail | Writing "her eyes," "his scar," "the trigger" |
| **Over-the-shoulder** | Two people in conversation | Writing dialogue with clear A-side and B-side |
| **Two-shot** | Two characters in the same frame | Writing scenes where the relationship between two people matters |
| **POV** | What a specific character sees | Writing "he looks at..." and describing what he sees |
| **Insert** | A single prop or detail | Writing "the photograph," "the note," "the blood on the floor" |
| **Aerial / Bird's eye** | Looking straight down | Writing extreme scale or disorientation |
| **Low angle** | Looking up at the subject | Writing power, threat, or heroism |
| **High angle** | Looking down at the subject | Writing vulnerability, smallness, or surveillance |
| **Dutch angle** | Tilted frame | Writing psychological unease or disorientation |
| **Tracking** | Camera follows movement | Writing continuous motion — a walk, a chase, a pursuit |
| **Dolly** | Camera moves toward or away | Writing approach, retreat, or revelation |
| **Handheld** | Unstable, immediate feeling | Writing chaos, urgency, documentary realism |
| **Crane** | Camera rises or descends in an arc | Writing revelation of scale or departure |

You do not need to specify these explicitly. Write the image. ACT3 AI will infer the appropriate shot type. But you can also override in the Shot Editor if the AI's choice doesn't match your intent.

See [How to Set Up a Shot](/how-to/set-up-a-shot).

---

## The relationship between script shots and production shots

In a traditional production, coverage is shot on set — multiple angles of the same scene, which an editor later assembles. In ACT3 AI, each rendered clip is a specific generated shot — there is no "shoot more angles and pick later." You plan the coverage before generating.

This changes the screenwriter's relationship to shots:

- **In traditional production:** Write the scene. Director and DP decide coverage on set.
- **In ACT3 AI:** The coverage is planned explicitly in the shot list before generation. More script specificity means better shot planning.

Think of it this way: your action lines are your shot notes to yourself and the AI. The more precisely you describe the visual moment, the less revision you need after generation.

---

## B-roll in your script

[B-roll](/features/b-roll) refers to cutaway shots — visuals that play over narration or dialogue without showing the main subject. In a script, B-roll shots are action lines without dialogue, describing what the audience sees while the narrator or characters speak.

Example:

```
NARRATOR (V.O.)
The city changed overnight.

EXT. DOWNTOWN STREET - DAY
Construction cranes fill the skyline. Glass towers half-finished.
Workers with hard hats. Traffic backed up for blocks.
```

The action lines under the V.O. describe B-roll visuals. In ACT3 AI, these become [B-roll shots](/features/b-roll) — shots tagged as supplementary visual material rather than primary story beats. They're generated separately and dropped into the timeline under the narration track.

---

## Related

- **[How to Set Up a Shot](/how-to/set-up-a-shot)** — Every parameter available for a shot in ACT3 AI
- **[Plan Scene Coverage](/how-to/plan-scene-coverage)** — How to plan which shots cover a scene
- **[B-roll](/features/b-roll)** — AI-generated cutaway and supplementary footage
- **[Concepts: Shots](/concepts/shots)** — Platform reference
- **[Scenes](/screenwriters/scenes)** — How scenes contain shots
