---
id: screenwriters-scenes
slug: scenes
title: Scenes — Structure, Purpose, and Production
sidebar_label: Scenes
sidebar_position: 2
description: How screenwriters construct scenes, what every scene must do, and how ACT3 AI maps scenes into production elements.
---

# Scenes

A scene is where story happens. Every scene has a location, a time, a set of characters, and a dramatic purpose. When a scene ends, something must be different than when it started. If it isn't, the scene shouldn't be there.

Screenwriters think about scenes as the primary unit of dramatic structure. The shot list comes later. The dialogue comes after. The scene's *purpose* is what you figure out first.

---

## What every scene must do

A scene earns its place in a script by doing at least one of these things:

1. **Advance the plot** — something happens that moves the story forward
2. **Reveal character** — we learn who someone is under pressure
3. **Establish relationships** — we see how two characters relate to each other
4. **Deliver information** — the audience learns something they need to understand what follows
5. **Shift the emotional register** — the scene changes the tone, energy, or mood of the story

The best scenes do two or three of these simultaneously. A scene that only delivers information (exposition) with no conflict or character revelation is weak. A scene with conflict that doesn't reveal character is just noise.

### The scene's entrance condition and exit condition

Every scene has a starting state (what is true when the scene begins) and an exit state (what is true when it ends). The exit state should be different from the entrance state. The difference is what the scene achieves.

Weak scene: Characters have a conversation. It ends. Everything is the same.
Strong scene: Characters have a conversation. One of them changes their mind, learns something, or decides something they cannot undo.

---

## The scene heading

In standard screenplay format, a scene begins with a scene heading (also called a slug line):

```
INT. POLICE STATION - INTERROGATION ROOM - NIGHT
EXT. ROOFTOP - CONTINUOUS
INT. MARCUS'S APARTMENT - THE NEXT MORNING
```

Components:
- **INT. / EXT.** — Interior or exterior
- **Location** — Specific place (not "a building" — "THE WAREHOUSE ON 5TH AND PIKE")
- **Time** — DAY, NIGHT, DUSK, DAWN, CONTINUOUS, LATER, THE NEXT MORNING

ACT3 AI parses scene headings on import. The location becomes a [set](/how-to/create-a-set) candidate. The time affects the default [lighting](/how-to/set-up-lighting). The INT./EXT. flag informs environment generation.

---

## Scene structure

A well-structured scene has three internal movements:

**1. The entrance** — Who is here, where are we, what is the immediate situation? Establish these fast. The audience should be oriented within the first 5–10 seconds of screen time.

**2. The conflict** — The obstacle, tension, or complication that makes this scene worth watching. Without conflict, a scene is just people talking pleasantly. Even a positive scene should have *something at stake*.

**3. The turn** — The moment the scene shifts. A revelation, a decision, an argument that breaks open, a joke that lands and changes the mood. The turn is what the scene was building to. Everything after the turn is the exit.

---

## Scene length

In a feature film screenplay, most scenes are 1–3 pages. One page of screenplay is approximately one minute of screen time. Therefore:

- A 1-page scene → ~1 minute, roughly 10–20 shots
- A 3-page scene → ~3 minutes, roughly 30–60 shots
- A very short scene → half a page or less → 30 seconds, 4–8 shots

In ACT3 AI, a scene's shot count drives how long it takes to generate and how many credits it costs. For short-form social video, most scenes are 15–30 seconds and 3–8 shots. For dramatic features, scenes run longer.

---

## Scenes in ACT3 AI

When ACT3 AI parses your script, each scene heading becomes a **Scene** in the project hierarchy:

```
Act 1
  └── Scene: INT. POLICE STATION - NIGHT
       ├── Shot 1: Wide — establishing
       ├── Shot 2: Medium — detective at desk
       └── Shot 3: Close-up — evidence photo
```

Each Scene in ACT3 AI has:
- A **set** assigned (the virtual location)
- A **cast** list (characters who appear)
- A **lighting setup** (inherits from time of day, overridable)
- A **visual style** (inherits from project, overridable)
- A **shot list** (AI-proposed or manually created)

A single script scene may map to multiple ACT3 AI scenes if the location changes mid-scene, or be a single ACT3 AI scene with many shots if it's a long, single-location sequence.

### Entering scene information

The more specific your scene headings and action lines, the better ACT3 AI can generate appropriate sets and shots. Compare:

**Weak scene heading:**
```
INT. OFFICE - DAY
They talk.
```

**Strong scene heading and action:**
```
INT. STARTUP OFFICE, OPEN FLOOR PLAN - LATE AFTERNOON
The sun cuts horizontal light through floor-to-ceiling windows. 
MARCUS (35, rumpled) stands at a whiteboard covered in equations. 
Behind him, two dozen desks sit empty. Everyone has gone home.
```

The second version tells ACT3 AI exactly what kind of set to generate, how to light it, and where to place the character.

---

## Scene-by-scene outlining

Many screenwriters write a scene-by-scene outline before writing the script. This is a list of every scene in the film with a one-sentence description of what happens in each one. Example:

```
1. INT. WAREHOUSE - Marcus arrives, finds it empty. Finds the phone. Hears the threat.
2. INT. CAR - Marcus sits in the dark. Decides not to go to the police.
3. EXT. STREET - Marcus drives to the wrong part of town.
4. INT. BAR - He finds his old contact, Delia.
5. INT. BAR, BACK ROOM - Delia tells him who has his package.
```

In ACT3 AI, you can build this outline directly in the Story Arc view before writing any dialogue. Each row becomes a scene. The AI can propose shot lists for each scene from the one-line description alone. This is a powerful way to test story structure before committing to full script.

See [How to Build Story Structure](/how-to/build-story-structure).

---

## Related

- **[Story Arc](/screenwriters/story-arc)** — Visualize and manage the full narrative structure across all scenes
- **[Beats](/screenwriters/beats)** — The smaller story events inside each scene
- **[Plot](/screenwriters/plot)** — How scenes combine into acts and story structure
- **[How to Use the Script Editor](/how-to/use-the-script-editor)** — Writing scenes inside ACT3 AI
- **[Concepts: Scenes](/concepts/scenes)** — Platform reference
