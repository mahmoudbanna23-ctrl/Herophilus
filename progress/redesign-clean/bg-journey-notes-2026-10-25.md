# Background "journey" — findings 2026-10-25

Owner picked "The journey" (RESUME-clean.md, App background block). Findings before any build.

## Plate
- `progress\app-replan\mocks\plates\painted-codex-3.png` — 1916x821, no alpha. Byte-identical copy in live Herophilus.
- No layers exist (no PSD/KRA/ORA, no cut-outs of this plate). Siblings: painted-codex(-2).png, photo-codex(-2,-3).png, all 1916x821.
- Too small for 2x on a 1440 laptop (needs ~2880 wide).

## What the plate shows (looker, Sonnet, 2026-10-25)
- Dark warm study, close on a desk at right-centre: scrolls, open papyrus, oil lamp, brass water-clock bowl (x 77-92%, y 29-57%) + catch basin, leather book. Left 0-27% empty dim wall. No character.
- Only real foreground object at an edge: the book cropped at right (x 84-100%, y 55-73%). No arch/doorway/column to pass.
- Focal point: papyrus x 62% y 62% (lamp x 69% y 48%).
- Heading space: x 3-42%, y 18-52%, very dark, strong contrast for light text.
- Cards after push-in: left wall x 2-44%, y 15-75% — scale origin must stay left of the focal point or the wall leaves frame.
- Risks at 1.65x: soft papyrus grid, few-pixel water stream at x 79% y 47%, banding in dark gradients.
- Conclusion: this is a desk close-up, not a wide view of a world. A push-in reads as "leaning in", not "travelling into a room".

## Copyable scroll motion (researcher, Sonnet, 2026-10-25)
1. Dolly — https://usedolly.dev/ , repo github.com/eakbulut/dolly, MIT, LICENSE "Copyright (c) 2026 Erkan Akbulut" (verified). 34 CSS camera moves, sticky scenes, view timeline. No hijack. Safari 26+; unsupported browsers show the page unanimated. Reduced motion disables all moves. 2.3 kB gz CSS. Durations not yet read (unverified).
2. Codefronts "Zoom In Depth Parallax on Scroll" — MIT stated on page only, no holder, /license 404: weak provenance. Sticky 100svh in 300svh runway, scale 1 to 1.65. Title fades IN (wrong direction) + letterbox bars: would need motion changes. Rejected under the copy rule.
3. Codefronts "Parallax Landing Page Hero with Depth Layers" — same weak licence; 5 planes drift, real foreground layer, JS fallback for old Safari. Runner-up if layers ever exist.
- Rejected: nirholas/scroll-zoom-thing (LICENSE says all rights reserved despite MIT README); Codrops layered zoom (ScrollSmoother takeover; page 403).
- Unchecked: Parallax.js, basicScroll, PixiJS, Motion "Scroll Zoom Hero", GSAP terms, scroll-driven-animations.style (404).

## Owner pick 2026-10-25
- "Lean in": keep painted-codex-3, scroll pushes toward the desk, headings on the dark left wall. The new wider doorway painting was offered and NOT chosen.

## Upscale route
- No local upscaler; no torch. OpenCV 4.10 with dnn_superres present.
- Proposed download (awaiting owner yes): EDSR_x2.pb, 38,490,162 bytes, github.com/Saafke/EDSR_Tensorflow, Apache-2.0, to D:\scratch 2026 only.
