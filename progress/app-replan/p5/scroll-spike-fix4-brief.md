# P5 — scroll spike, fix round 4 (2026-09-26)

Seat: fresh Claude `lean-drafter` (Sonnet). Round 3 builder (lean-drafter) closed items 1 and 5 but
failed 2, 3, 4, 6, 7 and introduced two regressions. Prompt opens `ROUTE-OK: Codex failed 3
dispatches on this spike (cannot render); lean-drafter round 3 failed once; second Claude attempt`.
If this round fails, the next goes to an Opus builder, not a third Sonnet run.

WRITE GRANT: edit files ONLY under `progress/app-replan/p5/scroll-spike/`. Do not touch `app/`.

## Inputs
- Spec: `p5/scroll-spike-brief.md` (binds). Fix-3 brief: `p5/scroll-spike-fix3-brief.md` (its 7 items
  still bind).
- Refuter round 4: `p5/REFUTE-scroll-spike-round4.md` — FAIL. Open every file:line and use its fix
  hints. Frames: `D:/tmp-spike-ref4/shots/` (look at the cited ones before changing code).
- Do NOT open `REFUTE-spike-round*.md` (3D pilot stream).

## Decisions already made (orchestrator, 2026-09-26) — do not re-open
1. Titles: NO break inside a word, NO hyphen, NO `&shy;`, NO `hyphens:auto`. Remove every `&shy;`.
   Minimum title size 16px desktop, 14px phone. If the word does not fit at that size, change the
   LAYOUT, not the word: in order — reduce letter-spacing to ≤0.04em; move the ring out of the title
   row (above the title, or to the card corner); on phone let cards span full width (one column).
   Check `scrollWidth <= clientWidth` on every title AND read the frame.
2. Rings: continuous, even sweep — no 45° jerks. Preferred: `@property --p` (`<angle>` or
   `<percentage>`) driving a `conic-gradient` mask, linear with scroll. Or keep the polygon but with
   `animation-timing-function: linear` so easing does not restart per stop. Fallback path must still
   work.
3. Sheet wipe: no sliver/shadow strip before the wipe starts — the mask must fully hide paper AND
   shadow at 0%, and still not clip the shadow once revealed (animate the inset, or hide the wrapper
   with opacity until the wipe begins).
4. Light shaft: warm (amber, from the lamp side), narrow — a beam, not a full-frame haze; no green or
   grey cast; covers ≤35% of the frame; opacity and position drift slowly with scroll. If it still
   reads as a veil, cut it to a subtle warm glow and say so.
5. Stall 68–73%: pixel-diff motion must stay ≥ ~40% of the 55%/85% level across 63–75%. Overlap the
   neighbouring ranges until it does.
6. NOTES.md: rewrite, do not append. Delete stale tables. One table: round-4 defect → how closed →
   frame path. Only claims seen in your own frames.

## Verify (you CAN render — do it)
`node --check` every JS file. Film with `node p5/scroll-spike-film.mjs` into `D:/tmp-spike-fix4/`
(never a path containing `--`): desktop 1280x800, phone 390x844. Pixel-diff 63–75% yourself (the
refuter's method is in its report). Read frames for every item. 0 console errors. Say plainly that
the fallback path is unverified in Chrome unless you actually forced it.

## Stop
Close out by 60 tool calls, hard stop 80; report honestly. No commit/add/push/tag/download/install.
No Clepsydra.

Then: fresh Opus refuter round 5 → `p5/REFUTE-scroll-spike-round5.md`, films `D:/tmp-spike-ref5/`.
