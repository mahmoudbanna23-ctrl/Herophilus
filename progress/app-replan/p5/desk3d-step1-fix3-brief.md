# P5 — 3D desk step 1, fix round 3 (2026-09-26)

Seat: the same Opus builder run as fix 2 (resumed; narrow fix). Refuter round 3:
`p5/REFUTE-desk3d-step1-round3.md` — FAIL, 3 majors + 7 minors. Write grant, stop rule and
verify-with-real-input rule as in `p5/desk3d-step1-fix2-brief.md`. Frames: `D:/tmp-desk3d-fix3/`.

## Decisions (orchestrator) — do not re-open
1. **No word ever breaks.** Remove every soft hyphen; `hyphens:none`; each title is ONE line
   (`white-space:nowrap`). Size = the largest that fits the cover, clamped to [16 px desktop /
   14 px phone, 22 px]. If it still overhangs the cover at the minimum, it overhangs centred — the
   camera-fit margin must keep it unclipped. The word is never changed, abbreviated or split.
   Acceptance: sweep 320→1600 step 10 at the refuter's three heights, 0 labels with more than one
   line box, 0 clipped.
2. **Colour**: `THREE.ColorManagement.legacyMode = false` (r147) with sRGB output, so covers render
   the app's token colours. Then MEASURE title and page-label contrast against the rendered pixels
   behind them (darkest and lightest sample): ≥ 4.5:1. Choose text colour by measurement.
3. **No title pops**: labels follow their anchor; they hide only when the anchor is occluded or
   faces away (physical cause), opacity may assist over ≤ 150 ms, never a one-frame vanish or return.
4. Minors: Mocks peek ≤ 12% of page height; Mocks label = dark ink on the cream sheet, ≥ 4.5:1;
   fix the other minors if trivial, else list them.

Do not regress anything round 3 found holding. NOTES.md: add a round-3 table (major -> fix -> frame).
