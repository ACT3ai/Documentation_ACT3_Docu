---
id: how-to-export-for-platforms
slug: export-for-platforms
title: Export for Different Platforms
sidebar_label: Export for Platforms
description: Learn how to export your video in the right format for YouTube, TikTok, and more.
---

# Export for Different Platforms

**Goal:** Export your finished film in the right format and aspect ratio for each platform — YouTube, TikTok, Instagram, or professional delivery — without re-rendering the video.

Each platform has different technical requirements: aspect ratio, resolution, codec, and color space. Using the wrong format means your video gets letterboxed, cropped, or rejected at upload. ACT3 AI's platform presets handle all of that automatically — one click sets everything correctly for the platform you are targeting.

Export does not re-render your AI video — it packages the rendered clips you already have into the correct container with the right encoding settings. It is fast.

---

## Steps

1. **Open the Export panel.** In the left sidebar, click **Export**. Alternatively, in the Editor's top menu, choose **File → Export**. The Export panel opens and shows your project ready to be packaged.

2. **Select what to export.** At the top of the Export panel, choose the scope:
   - **Full Project** — every scene and shot in order, assembled as a complete film.
   - **Selected Scenes** — only the scenes you have highlighted in the timeline.
   - **Single Shot** — one individual clip, useful for reviewing or delivering a specific asset.

3. **Choose a platform preset.** Click the **Platform** dropdown and select your target:
   - **YouTube (16:9)** — landscape widescreen, the standard for YouTube and most web video.
   - **TikTok / Reels (9:16)** — vertical portrait format for TikTok, Instagram Reels, and YouTube Shorts.
   - **Instagram (1:1)** — square format for Instagram feed posts.
   - **Festival / DCP** — Digital Cinema Package format required by most film festivals.
   - **Professional ProRes** — ProRes 422 or 4444 master file for post-production workflows.

4. **See what each preset configures.** When you select a preset, the panel shows the exact technical settings it will apply:
   - **Resolution** — for example, *3840×2160* (4K) or *1920×1080* (1080p)
   - **Frame rate** — for example, *23.976 fps* (cinema) or *29.97 fps* (broadcast)
   - **Codec** — H.264 or H.265 for delivery, ProRes for professional masters
   - **Color space** — Rec.709 for web and broadcast, P3 D65 for DCP

5. **Add a custom export preset if needed.** Click **+ New Preset** at the bottom of the preset list. Enter a name and manually set resolution, frame rate, codec, bitrate, and color space. Save it and it appears in the preset dropdown for future projects.

6. **Set the output quality tier.** Below the platform preset, choose the quality level:
   - **Standard** — 1080p H.264, suitable for web and social.
   - **High** — 2K H.265, suitable for large-screen display.
   - **4K** — available on Enterprise plan only. Exports at full 4K resolution.

   Note: the quality tier affects the output encoding, not the AI render quality. If your shots were generated at Standard quality, exporting at 4K will upscale but not add detail that was not rendered.

7. **Click Export.** Press the **Export** button at the bottom of the panel. A progress bar appears. Depending on the project length and output quality, export typically takes 1–4 minutes.

8. **Retrieve your files.** When the export finishes, a notification appears. Click **Download** to save the file to your computer, or click **Copy Link** to get a shareable download URL (link expires after 7 days).

9. **Export the same project in multiple formats.** Run export again with a different platform preset selected. Each export run is independent — you can produce a YouTube version and a TikTok version from the same assembled project in two separate export runs. No extra credits are used for re-exporting.

---

## Tips

- Use a platform preset rather than setting codec and resolution manually. The presets are tuned for each platform's upload requirements and verified against common rejection reasons.
- Export the TikTok version separately — it is not simply a cropped version of the YouTube export. Shots framed for 16:9 may not frame correctly in 9:16. For vertical-first projects, set the aspect ratio to 9:16 before rendering your shots.
- Festival DCP requires specific color space and audio channel configuration. Export DCP early and test it in a local media player before the deadline — some festivals will not accept last-minute resubmissions.

---

## Next steps

- [Export for Delivery](/how-to/export-for-delivery)
- [Manage Render Queue](/how-to/manage-render-queue)
- [Monitor Credits](/how-to/monitor-credits)
