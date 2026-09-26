# P5 — scroll spike, fix round 1 (2026-09-26)

Seat: Codex `gpt-5.6-terra`. Final reply begins with `AGENTS.md loaded — Herophilus`, then ≤ 8 lines.

WRITE GRANT (overrides AGENTS.md read-only default for this job only): edit files ONLY under
`progress/app-replan/p5/scroll-spike/`. Everything else read-only. Do not touch `app/`.

## Inputs
- Original spec: `p5/scroll-spike-brief.md` — still binds in full.
- Refuter round 1: `p5/REFUTE-spike-round1.md` — FAIL, 6 major + 7 minor. Close EVERY defect; open
  each file:line it cites.
- New reference: `p5/REF-video2-teardown.md` (slow, inertial, staggered motion; restrained glow).

## Must land
1. Heading reveals line by line ON SCROLL: each line in its own overflow-hidden mask wrapper, each
   with its own scroll range (no time-based transition-delay). NOTES.md must match what the code does.
2. Heading never collides with the sheet edge, at 1280x800, 390x844, and in reduced motion.
3. Progress rings identical size on all 4 cards (`flex:none` or fixed box).
4. Light shaft: no hard edge or seam — soft-falloff gradient mask on all sides, fades out after its range.
5. Cards: gradient-lit edges and grain overlay, as the spec says; no banding.
6. Candle pool and rings animate transform/opacity/filter only (e.g. pool = pre-drawn layer whose
   opacity/scale animates; ring = SVG stroke-dashoffset is NOT allowed either unless you justify it
   in NOTES.md as the only route — prefer a conic-gradient layer revealed by rotating masks or clip-path).
7. Every minor defect in the refuter file.
8. Motion feel: easing that reads slow and inertial (overlapping ranges, no linear snaps).

## Verify
`node --check spike.js`. You cannot render; say so. Update `NOTES.md`: a table "refuter defect →
how closed", plus known gaps.

## Do not
Edit anything outside `scroll-spike/`. Commit, push, add, tag. Download or install. Use or draw on
any Clepsydra image.
