---
id: how-to-lock-approved-elements
slug: lock-approved-elements
title: Lock Approved Elements
sidebar_label: Lock Approved Elements
description: Learn how to lock shots, scenes, or assets so they cannot be accidentally changed.
---

# Lock Approved Elements

**Goal:** Lock scenes, shots, or script sections so no one on the team — including you — can accidentally change them during later production work.

As a project grows, protecting finished work becomes as important as creating new work. Locking is ACT3 AI's safeguard mechanism: a locked element cannot be regenerated, edited, re-assigned, or deleted until it is explicitly unlocked. Use locking whenever a director, producer, or client has signed off on something and that approval needs to stick.

If you are working solo: locking still protects you from your own future self. It is easy to accidentally overwrite a great shot three days after you created it.

---

## Steps

1. **Understand what locking protects.** A locked shot cannot be re-generated, and its camera, performance, or set parameters cannot be edited. A locked scene blocks edits to all shots within it and prevents the scene's set assignment or script text from changing. A locked script section prevents dialogue and action lines from being altered by AI rewrites or manual edits.

2. **Lock a single shot.** Open the shot in the Shot panel. In the top-right corner of the Shot panel header, click the padlock icon. It changes from open to closed and turns gold. The shot thumbnail in the Timeline also shows a small gold padlock badge.

3. **Lock an entire scene.** In the Scene panel (left sidebar → click the scene name), look for the padlock icon in the Scene panel header — next to the scene title. Click it. A confirmation dialog appears: "Lock this scene? All shots inside will also be locked." Click Confirm. Every shot in the scene locks at once.

4. **Lock a script section.** Open the Script view in the Editor. Select the lines you want to lock (click and drag to highlight, or click a scene heading to select the entire scene block). Right-click and choose Lock Selection. The locked lines gain a subtle gold left-border in the Script editor and cannot be changed until unlocked.

5. **Identify locked items at a glance.** In the Timeline, locked shots display a gold padlock badge on their thumbnail. Locked scenes display a padlock on the scene row header. In the Script view, locked sections have the gold left-border. In the Shot List panel, a filter option — Status: Locked — shows all locked shots across the project.

6. **Unlock an element when changes are needed.** Click the gold padlock icon on the shot, scene, or script section again. A confirmation dialog appears: "Unlock this element? It will no longer be protected." Click Confirm. The padlock returns to open state and the element is editable again.

7. **Understand role requirements for locking and unlocking.** Any member with the Modify-Edit role or higher can lock elements. Unlocking a locked element requires the Owner or Modify-Edit role. Members with Run AI or Read-Only roles cannot lock or unlock anything. This means a director can lock a scene and a client with Read-Only access cannot accidentally undo that.

8. **Review the full lock status of a project.** Go to Project Settings → Production Status. A per-scene table shows how many shots are locked, approved, pending, and flagged. Use this view before sending a project to a client or before exporting for delivery.

---

## Next steps

- [Review and Approve Shots](/how-to/review-and-approve-shots)
- [Organize Your Project](/how-to/organize-project)
- [Invite Team Members](/how-to/invite-team-members)
