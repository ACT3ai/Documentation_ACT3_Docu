---
id: screenwriters-story-arc
slug: story-arc
title: Story Arc — The Narrative Shape of Your Film
sidebar_label: Story Arc
sidebar_position: 5
description: How the ACT3 AI Story Arc system works — visualizing, managing, and iterating on the full narrative structure of a film or series.
---

# Story Arc

A story arc is the overall shape of a narrative from beginning to end — the through-line that gives the story its form. In ACT3 AI, the Story Arc is both a concept and a specific tool: a visual panel that shows the structure of your project and lets you manage it interactively.

The Story Arc is the screenwriter's home base in ACT3 AI. Everything else — [scenes](/screenwriters/scenes), [shots](/concepts/shots), casting, sets — flows downstream from the structure you build here.

---

## What the Story Arc panel shows

The Story Arc view is a horizontal timeline of your project's full narrative. It displays:

- **Acts** — The major story divisions (three-act, five-act, or custom)
- **Beat markers** — Named story events positioned along the timeline
- **Scene groupings** — Which scenes belong to which sections of the story
- **Character arc layer** — How individual characters change through the story (see [Character Arc](/screenwriters/character-arc))
- **Plot layer** — The sequence of external story events

Zooming out shows the whole film. Zooming in shows individual scenes and their beats. This gives you both the macro view (does the overall shape work?) and the micro view (is this scene doing its job?) in the same tool.

---

## Primary version vs. AI Recommended version

The Story Arc maintains two parallel versions:

**Primary** — Your approved, locked version. The version the production team works from.

**AI Recommended** — The AI Writer's current suggestion for how to improve or develop the structure. It may propose new beats, revised act breaks, or different sequencing.

You can view both versions side by side and accept individual changes from the AI version into the Primary. Nothing in the Primary changes without your explicit approval.

This two-version system lets you use AI as a development partner rather than as a replacement for your judgment. You keep control. The AI keeps generating options.

---

## The Calc Engine

The Story Arc has a live dependency graph. When you change a beat — revise its description, move it, or delete it — the Calc Engine traces which downstream elements depend on that beat and flags them for review.

For example: if you change a revelation beat in Act 2 (a character learns they were betrayed), the Calc Engine identifies every subsequent beat that assumes the character knows they were betrayed, and flags those beats as potentially needing revision. It does not automatically change them — it surfaces them so *you* can decide whether they need to change.

This is the equivalent of a structural change map: "if I move this piece, here are the other pieces that might need to move too."

---

## Types of arcs in the Story Arc view

### Plot arc
The external story events. What happens, in what order. The sequence of [beats](/screenwriters/beats) that form the [plot](/screenwriters/plot). This is the backbone of the Story Arc view.

### Character arc
How individual characters change through the story. A character who begins the story believing one thing and ends it believing something different has a complete arc. See [Character Arc](/screenwriters/character-arc).

### Thematic arc
The development of the story's central theme — the question the story is asking and how it is answered. In the Story Arc view, thematic markers can be placed at the moments where the theme becomes most explicit.

### Subplots
Secondary story lines — the B story, C story — each with their own arc. In the Story Arc view, subplots appear as additional layers beneath the main plot. They should have their own inciting incident, escalation, and resolution, and they should intersect the main plot at meaningful moments.

---

## Building a story arc from scratch

### Method 1 — Start with the AI Wizard

1. Open **Story Arc → New Project**
2. Enter your logline: "A [character] in a [situation] must [goal], but [obstacle]."
3. Select a structure template: Three-Act, Save the Cat, Hero's Journey, Five-Act, or blank
4. The AI proposes act breaks, principal beats, and character arc markers
5. Review and modify each element before accepting

The AI Wizard produces a first draft of structure, not a final answer. Expect to revise act breaks, add beats the AI missed, and reshape character arcs.

### Method 2 — Import and analyze

If you have a finished or draft screenplay:
1. Import it via **File → Import Script**
2. ACT3 AI reads the script and proposes a Story Arc
3. Review the proposed structure — it may identify problems you hadn't noticed
4. Approve, modify, or override each element

### Method 3 — Build manually

If you prefer to build your structure your own way:
1. Create a blank Story Arc
2. Add acts manually (drag the act dividers to set their length)
3. Add beats one by one with the **+ Add Beat** button
4. Position each beat on the timeline
5. Group beats into scene clusters

This method gives maximum control and works well if you already have a detailed beat outline.

---

## Common Story Arc problems to watch for

**The missing midpoint** — Act 2 with no midpoint reversal creates a long, flat middle where the audience loses track of where the story is going. The midpoint should be a significant event that changes the protagonist's situation.

**Act 1 that never ends** — More than 30% of a feature's runtime spent in setup before the protagonist commits to the story's central problem. The audience loses patience.

**Unresolved subplot arcs** — Subplots that start but don't end by the film's resolution. Each subplot needs its own payoff.

**Character arc not connected to plot arc** — The protagonist changes internally, but the change is not *caused* by the external plot events. Internal and external arcs should mirror each other: the external obstacle should be the cause of the internal transformation.

---

## Related

- **[Plot](/screenwriters/plot)** — Structure templates and the theory of plot construction
- **[Character Arc](/screenwriters/character-arc)** — How character transformation fits into the Story Arc
- **[Beats](/screenwriters/beats)** — The individual markers that populate the Story Arc
- **[How to Build Story Structure](/how-to/build-story-structure)** — Step-by-step guide to using the Story Arc tool
- **[Features: Story Arc](/features/story-arc)** — Platform reference
