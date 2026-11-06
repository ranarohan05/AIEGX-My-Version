# Hero media assets

No cinematic hero video is currently present in the project. Keep the existing `hero-som-module.jpg` as the poster and static fallback. When a finished local asset is supplied, place it here as `hero-cinematic.webm` (preferred) or `hero-cinematic.mp4`, then set `heroVideo` in `src/components/common/homepageModels.js` to `/homepage/hero/hero-cinematic.webm` and update its MIME type.

## Video specification

- 1920 × 1080, 16:9, 24 or 30 fps, seamless 8–12 second loop.
- Silent video, muted playback, no audio track.
- WebM/VP9 preferred, with MP4/H.264 fallback for browser compatibility.
- Target under 8 MB; use a compressed web encode suitable for autoplay backgrounds.
- Macro embedded PCB and processor details, circuitry, machine vision cameras, industrial automation, transportation or rail infrastructure.
- Navy-forward exposure with restrained orange highlights; no flashing, fast cuts, external URLs, or unlicensed stock footage.
- Match the existing hero image composition so the central text remains legible under the navy overlay.

The optional video element is already wired to the local hero slot. It remains disabled while `heroVideo` is `null`, so the page does not request a missing file.
