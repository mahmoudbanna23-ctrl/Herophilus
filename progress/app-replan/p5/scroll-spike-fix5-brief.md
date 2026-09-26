# P5 — scroll spike, fix round 5 (2026-09-26)

Seat: Claude `lean-drafter` run on OPUS. Two Sonnet rounds (fix3, fix4) each failed refutation;
escalation per `scroll-spike-fix4-brief.md`. Prompt opens `ROUTE-OK: Codex failed 3 dispatches
(cannot render); two Sonnet fix rounds failed refutation; Opus builder per escalation rule`.

WRITE GRANT: edit files ONLY under `progress/app-replan/p5/scroll-spike/`. Do not touch `app/`.

## Inputs
- Spec `p5/scroll-spike-brief.md`; `p5/scroll-spike-fix4-brief.md` "Decisions already made" still bind
  (no word ever breaks or hyphenates; min title 16px desktop / 14px phone; layout gives, not the word).
- Refuter round 5: `p5/REFUTE-scroll-spike-round5.md` — FAIL, 1 major + 4 minor. Use its probes and
  fix hints. Frames `D:/tmp-spike-ref5/`. Round 4 for history: `p5/REFUTE-scroll-spike-round4.md`.
- Do NOT open `REFUTE-spike-round*.md` (3D pilot stream).

## Must land
1. MAJOR — titles fit at EVERY width. Round 4 checked only 1280 and 390; titles clip at 701–1024.
   Fix the grid, not the font: pick breakpoints so each card is wide enough for "NEUROPSYCHIATRY" at
   its size (e.g. 4 columns only when that fits, 2 columns in the middle band, 1 column narrow — use
   `repeat(auto-fit, minmax(<measured min>, 1fr))` or container queries). Acceptance: a scripted sweep
   of widths 320→1600 in 10px steps, every title `scrollWidth <= clientWidth`, zero failures; plus read
   frames at 768, 820×1180, 1024.
2. Stall: pixel-diff motion across 60–76% scroll ≥ 40% of the 85% level at every step. Re-time the
   neighbouring ranges; do not add a new effect just to fill the gap.
3. Sheet wipe: reads as an UNROLL from one edge (top→down or left→right, matching the paper's roll),
   continuous from its start to its end — no centre slot, no 45–54% dead zone, no pop. Keep: nothing
   visible at rest, shadow unclipped once open.
4. Phone: book-spine images back to at least round-4 size (~20×70px) in the one-column layout.
5. Shaft: keep the faint glow; tint it warm amber (lamp side). Minor — do not over-spend.
6. NOTES.md rewritten, every number copied from your own final run, nothing misquoted.
Do not regress: ring sweep evenness (2.8–5.4° per 0.25%), ring badge legibility, 0 console errors.

## Verify (you CAN render — do it)
`node --check` every JS file. Film with `node p5/scroll-spike-film.mjs` into `D:/tmp-spike-fix5/`
(no `--` in any path): 1280x800, 1024x768, 820x1180, 768x1024, 390x844, reduced-motion. Width sweep
script for item 1. Pixel diff 60–76%. Read frames for every item. Fallback path: say unverified
unless you force it.

## Stop
Close out by 60 tool calls, hard stop 80; honest partial beats a false done. No commit/add/push/tag/
download/install. No Clepsydra.

Then: fresh Opus refuter round 6 → `p5/REFUTE-scroll-spike-round6.md` (NOT `REFUTE-spike-round6.md`),
films `D:/tmp-spike-ref6b/` (`D:/ref6` exists from the 3D stream — do not reuse it).
