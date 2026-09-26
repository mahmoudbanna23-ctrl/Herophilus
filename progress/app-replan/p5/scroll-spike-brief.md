# P5 — scroll-choreography spike (2026-09-26)

Seat: Codex `gpt-5.6-terra`. Final reply begins with `AGENTS.md loaded — Herophilus`, then ≤ 8 lines.

WRITE GRANT (overrides AGENTS.md read-only default for this job only): create files ONLY under
`progress/app-replan/p5/scroll-spike/`. Everything else read-only. Do not touch `app/`.

## Goal
One standalone page, `scroll-spike/index.html` (+ `spike.css`, `spike.js`), that proves the owner's
wanted feel on OUR painted desk: "every inch you scroll something happens", smooth, pro-made,
gaming vibe, not AI. Reference teardown: `p5/REF-video-teardown.md` (read it). Owner rulings:
`p5/RESUME-p5.md` last 10 lines (gradients ALLOWED now, no load budget).

## Assets (reference by relative path from the spike folder, never copy or edit)
- Plate: `../../mocks/plates/painted-codex-3.png` (the owner-picked master desk).
- Sprites: `../../../../app/assets/scene/*.png` (letters, tablet, pile, gilt ×4, ribbon).
- Fonts: whatever `app/index.html` loads, same way (`app/fonts.js` is a classic script).
- NEVER use or draw on the Clepsydra images. She is not in this spike.

## Choreography (tall page ~500vh; one pinned full-viewport desk scene via `position:sticky`)
1. 0–20%: camera push-in on the desk — plate scales 1.0→1.25 with a slow drift toward the open
   scroll; a warm radial light pool over the candle brightens.
2. 20–45%: depth parallax — sprites sit on 3 depth layers and move at different rates; a light
   shaft (layered linear/radial gradients + SVG-noise grain, mix-blend-mode screen) sweeps.
3. 45–70%: the day's sheet unrolls on the scroll (clip-path mask wipe) and a heading reveals line
   by line (overflow-hidden wrappers, translateY).
4. 70–100%: the 4 subject books come forward as cards — staggered, scale+translate, each with a
   progress ring that fills with scroll; gradient-lit edges (smooth, grain overlay, no banding).
Floating dust motes (≤ 40, canvas or CSS) drift at all times on this view only.

## Technique
- Native CSS scroll-driven animations (`animation-timeline: scroll()` / `view()`,
  `animation-range`). Fallback where unsupported (`@supports not (animation-timeline: scroll())`):
  one rAF loop writing a `--p` 0–1 custom property; the same keyframes read it. No library.
- Animate `transform`, `opacity`, `clip-path`, `filter` only. `will-change` on the layers.
- `prefers-reduced-motion: reduce`: static final composition, no dust, no loops.
- No emoji, no chirpy copy, no pills, no side-tabs; one radius scale. Text: real subject names
  ENT, Ophthalmology, Neuropsychiatry, Pediatrics; sheet text "Today" + 3 plausible task lines.
- Must work from `file://` offline: no fetch/XHR, no CDN, no module scripts.

## Verify and report
- `node --check spike.js`. No console errors (state how you checked, or say it was not run).
- `scroll-spike/NOTES.md`: what each scroll range does, which selectors, fallback path, known
  gaps. Do not claim you saw it render unless you did.

## Do not
Edit anything outside `scroll-spike/`. Commit, push, add, tag. Download or install anything.
