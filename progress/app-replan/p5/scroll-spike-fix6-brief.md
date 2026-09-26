# P5 — scroll spike, fix round 6: props v2 + real entrances (2026-09-26)

Seat: Claude `lean-drafter` (Sonnet). Codex cannot render; this job needs its own film. Prompt opens
`ROUTE-OK: Codex cannot render and this fix is judged on film; builder must film its own output`.

WRITE GRANT: edit/create files ONLY under `progress/app-replan/p5/scroll-spike/` (new props go in
`scroll-spike/props/`). Read-only: `p5/props-v2/`, `app/`.

## Why
Owner rejected the round-6 film: "low quality items fading out of nowhere". The three desk props
(`.letters/.tablet/.pile` in `spike.css`, images from `app/assets/scene/`) are 160–200×90 px shown up
to 300 px, and enter by opacity 0→1 (`@keyframes far/mid/near`, ranges 20–58%).
Build rules (owner 2026-09-26): every raster ≥ 2x its largest display size; every entrance has a
physical cause — opacity may assist, never carry the entrance alone.

## Must land
1. Swap in `p5/props-v2/{letters,tablet,pile}.png` (Codex re-paints; read `props-v2/PROPS-NOTES.md`).
   If a prop has a grey `#808080` background, cut it out to alpha with a script (flood from the edges,
   soft 1–2 px edge, no grey halo — check the edge on the dark plate). Trim to the object, save as
   `scroll-spike/props/<name>.png` (or `.webp` if it cuts size with no visible loss), width = 2x the
   largest display width (the `.layer` clamp caps at 300 px → 600 px).
2. Entrances: each prop is fully opaque from its first visible frame and SLIDES in from outside the
   frame edge nearest its resting place (letters from the left, tablet and pile from the right or
   from below the desk edge), with a slight settle; its shadow comes with it. No frame where a prop
   is semi-transparent over the plate. Reduced-motion: props at rest, no motion.
3. Also check every other entrance in the spike for the same fault (cards `.book`, `.line-content`,
   the sheet): list any that is a pure opacity fade with no movement; fix only if trivial, else list
   it in NOTES for the orchestrator.

Do not regress (round 6 PASS): title width sweep 320→1600 step 10 zero failures; ring sweep evenness
2.8–5.4° per 0.25%; stall ≥ 40% of the 85% level across 60–76%; sheet wipe unroll 46–74%; 0 console
errors.

## Verify (you CAN render — do it)
Film with `node p5/scroll-spike-film.mjs` into `D:/tmp-spike-fix6/` (no `--` in any path): 1280x800,
390x844, reduced-motion. Read frames across 15–40% scroll for every prop: opaque on entry, sharp at
rest, clean edge. Rerun the width sweep and the stall pixel diff. NOTES.md: replace the props rows;
every number from your own run.

## Stop
Close out by 60 tool calls, hard stop 80; honest partial beats a false done. No commit/add/push/tag/
download/install. No Clepsydra.

Then: fresh Opus refuter round 7 → `p5/REFUTE-scroll-spike-round7.md`, films `D:/tmp-spike-ref7/`.
