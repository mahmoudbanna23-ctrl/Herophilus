# P5 — desk props v2: three re-paints at 2x (2026-09-26)

Seat: Codex `gpt-5.6-terra`, built-in `image_gen` tool. Final reply begins with
`AGENTS.md loaded — Herophilus`, then ≤ 6 lines.

WRITE GRANT (overrides AGENTS.md read-only default for this job only): create files ONLY under
`progress/app-replan/p5/props-v2/`: `letters.png`, `tablet.png`, `pile.png`, `PROPS-NOTES.md`.
Everything else read-only. Never touch `app/`.

## Why
Owner rejected the scroll-spike film: the three desk props are low quality (source files
`app/assets/scene/letters-many.png` 160×90, `tablet-half.png` 200×90, `pile.png` 200×90, shown up to
300 px wide). Build rule 2026-09-26: every raster ≥ 2x its largest display size.

## Attached images
1. `painted-codex-3.png` — owner-picked master desk; fixes WORLD, FINISH, LIGHT. Match it.
2–4. The three old props — they fix only WHAT each object is. Re-paint the same subject, far better.

## Style head
Start every prompt with the style head from `progress/app-replan/p5/ref-frames/STYLE-NOTES.md`,
verbatim.

## The three images (each its own image_gen call)
Each is ONE isolated object, seen from the same slightly-high three-quarter angle as the desk in the
master plate, lit by the same warm oil-lamp key from the right and a cool rim from behind.
- **Transparent background** if the tool allows it. If it does not: a flat, uniform, unlit
  mid-grey `#808080` background, no floor, no cast shadow on the ground, no vignette — it will be cut
  out. Say in the notes which one you got.
- Object fills ≥ 80% of the frame width; nothing cropped at the edges; ≥ 1200 px wide output
  (landscape 3:2, ideally 1536×1024).
1. `letters.png` — the subject of `letters-many.png`.
2. `tablet.png` — the subject of `tablet-half.png`.
3. `pile.png` — the subject of `pile.png`.

## Never
- The Clepsydra, any person, figure, face, hand or statue.
- ANY legible text, letters, numerals or glyphs — any writing on paper or wax is illegible texture.
- Emoji, UI, badges, logos, watermarks, modern objects, neon, purple-cyan.

## Report
`PROPS-NOTES.md`: each full prompt, the output pixel size, transparent or grey, plus one honest line
per image on what came out wrong. Do not claim quality you did not check. Do not commit, push, add,
tag, download or install.
