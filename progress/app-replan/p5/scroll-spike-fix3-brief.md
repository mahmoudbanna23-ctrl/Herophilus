# P5 — scroll spike, fix round 3 (2026-09-26)

Seat: Claude `lean-drafter` (Sonnet). Codex ran three fix dispatches (build, fix1, fix2); each closed
the cited defect and opened a variant, because it cannot render. Root `CLAUDE.md` §9: two failed
dispatches go to a Claude role. Prompt must open `ROUTE-OK: Codex failed 3 dispatches on this spike,
it cannot render; builder must film its own output`.

WRITE GRANT: edit files ONLY under `progress/app-replan/p5/scroll-spike/`. Do not touch `app/`.

## Inputs
- Spec: `p5/scroll-spike-brief.md` — binds in full.
- Refuter round 3: `p5/REFUTE-scroll-spike-round3.md` — FAIL, 2 major + 4 minor. Open every
  file:line it cites. Earlier rounds: `p5/REFUTE-spike-round1.md`, `p5/REFUTE-scroll-spike-round2.md`
  (NOT `REFUTE-spike-round2/3.md` — those belong to the 3D pilot stream).
- Motion reference: `p5/REF-video2-teardown.md`. Design skills in `.claude/skills/` (overrides:
  `.claude/skills/THIRD-PARTY.md`).

## Must land
1. Rings fill 0→100% with scroll, one per card. The current half-disc mask rotating -180deg→0
   always shows half. Use two half masks (right half 0→180, left half 180→360) or a
   `clip-path: polygon()` sweep.
2. Titles wrap at word boundaries only; shrink with `clamp()` if needed. No
   `overflow-wrap:anywhere` — "OPHTHALMOLOGY" must never break mid-word, at 1280x800 or 390x844.
3. Sheet wipe keeps shadow and roll: clip a wrapper larger than the paper, not the paper itself.
4. Light shaft reads as soft warm light, not a grey static veil (warm tint, `mix-blend-mode:screen`
   or a soft gradient, animated opacity/transform).
5. Phone: candle glow sits on the visible lamp, or is hidden while the lamp is off-screen.
6. No motion stall at 68–73% scroll: ranges overlap so something always moves.
7. Every minor in the round-3 file. NOTES.md honest: no claim you did not see in your own film.

## Verify (you CAN render — do it)
`node --check spike.js`. Film with `node p5/scroll-spike-film.mjs` into a `D:/tmp-spike-fix3/`
dir (never a path containing `--`): desktop 1280x800, phone 390x844, fallback. Read 6+ frames per
film around each fixed item, inside your own run. 0 console errors. NOTES.md gets a table
"round-3 defect → how closed → frame that shows it".

## Stop
Close out by 60 tool calls; report honestly if not all items land. Do not commit, push, add, tag,
download or install. No Clepsydra image anywhere.

Then: a fresh Opus refuter round 4 → `p5/REFUTE-scroll-spike-round4.md`, films to `D:/tmp-spike-ref4/`.
