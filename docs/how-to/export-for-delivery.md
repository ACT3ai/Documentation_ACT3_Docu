---
id: how-to-export-for-delivery
title: How to Export for Delivery
sidebar_label: Export for Delivery
description: How to export your finished film from ACT3 AI in the right format for your platform or post-production workflow.
---

# How to Export for Delivery

**Goal:** Get your finished production out of ACT3 AI in the right format — whether you're going to YouTube, a film festival, a broadcast network, or continuing in Premiere Pro.

---

## Steps

1. **Make sure all shots in the scene or project are rendered.** Check the render queue to confirm all shots are complete. Any shots still in Draft quality should be re-rendered at Standard or High before export.

2. **Open the Export panel.** Go to **Render Queue → Export** or **Project → Export**.

3. **Choose what to export:**
   - A single shot
   - A single scene (all shots assembled in order)
   - A full episode or film

4. **Choose the export format:**

   **For social media platforms:**
   - YouTube: H.264 MP4, 16:9, 1080p or 4K
   - TikTok / Reels: H.264 MP4, vertical 9:16, 1080×1920
   - Instagram feed: H.264 MP4, 1:1 square or 4:5

   **For professional delivery:**
   - ProRes 422 or ProRes 4444 — for festival submissions, broadcast, and DCP mastering
   - H.264 MP4 — for web streaming, client review, internal distribution

   **For post-production handoff:**
   - ProRes + EDL — bring the full cut into Premiere Pro or DaVinci Resolve
   - Project archive — export the full ACT3 AI project for backup or collaboration

5. **Set resolution.** 1080p for most uses; 4K for premium delivery (requires Business or Enterprise plan).

6. **Click Export.** The export job runs in the background. You'll get a download link in the render queue when it's done.

---

## Platform quick reference

| Platform | Format | Aspect ratio | Resolution |
|---|---|---|---|
| YouTube | H.264 MP4 | 16:9 | 1080p or 4K |
| TikTok | H.264 MP4 | 9:16 vertical | 1080×1920 |
| Instagram Reels | H.264 MP4 | 9:16 vertical | 1080×1920 |
| Instagram feed | H.264 MP4 | 1:1 or 4:5 | 1080×1080 |
| Film festival | ProRes 422 | 16:9 | 4K |
| Broadcast | ProRes 422 | 16:9 | 1080p or 4K |
| DaVinci Resolve | ProRes + EDL | Any | Any |
| Premiere Pro | ProRes + EDL | Any | Any |

---

## Next steps

- [Manage the render queue](/docs/how-to/manage-render-queue) to batch-render before export
- [Adjust shot timing](/docs/how-to/adjust-shot-timing) before final export if pacing needs work
