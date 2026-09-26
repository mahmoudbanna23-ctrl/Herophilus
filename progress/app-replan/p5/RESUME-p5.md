# P5 resume — state at 2026-09-26 (end of session block)

## Lane A — spike: CLOSED 2026-09-26, OWNER PICKED B (hand-written renderer)
- Four lean-drafter fix rounds, each checked by an Opus refuter (`p5/REFUTE-spike-round{3,4,5,6}.md`).
  Round 6 passes the code. Commits: `df4b83b`, `2db6f25`, `0630d58`, `4b64c454`.
- Final numbers (refuter round 6, `spike-measure.md` Round 6):
  - B: 14,424 B code, 192,423 B http, heap ~1 MB.
  - A: 719,908 B code, 898,309 B http.
- Budget unit: 900,000 B decimal (owner, 2026-09-26).
- B plays the full rig (every channel down the GLB node tree, world × IBM) and falls back to 2D on
  any load failure.
- `make-glb.js` derives its IBMs from node TRS; self-check `82 passed`, confirmed by the refuter's
  own matrix check.
- P5 build notes:
  - The placeholder model leaves a gap between body top (y=0.55) and cap (y=0.94). That is a
    geometry issue; the real glb comes from Meshy.
  - Lit materials in B must be hand-written.
  - `app/vendor/` is NOT needed (the owner picked B).
- Scratch probes live in the session scratchpad, not `spike/`. The three old probe files
  (`verify-round4.mjs`, `probe-sweep.mjs`, `_pngdiff.mjs`) are gone from `spike/`.

## Lane A — master plate v2
- Three candidates are in `scene-pilot/plates/master-v2-{a,b,c}.png`, sent to the owner.
- The independent check found:
  - A fails the 400 px cluster (451 px).
  - C fails the cluster (429 px) and its wick box is ~55 px off.
  - B passes all 10 checks. It has an extra closed book near the bowl, which is not a violation.
- **Owner PICKED B (2026-09-26).** B + notes committed `047f401`; a/c stay uncommitted on disk.
- `SCENE_MAP` measured, `plates/scene-map-b.js` + `.check.js` (35 passed). Refuter: round 1 FAIL
  (9/15 boxes), round 2 FAIL (portrait typed in), round 3 PASS — `p5/REFUTE-scenemap-b{,-round2}.md`.
  Violet w 43 = occlusion touch, confirmed. No desk-edge field; letters slot ends y=612 < edge ~619.
- OWNER-PENDING before sprite layers: (a) tablet/pile slots null — shrink into strips
  [870,556,170,60]/[1360,574,200,44] or sit on open scroll; (b) portrait: cluster 409 > crop 379.4
  (overflow 29.6) — accept clip, shift crop, or narrow cluster.
- Next: sprite layers (letters ×4, tablet ×2, pile, ribbon, gilt spine ×4), then dawn/day/dusk/night.

## Owner decisions owed
- ~~Plate pick~~ B, decided 2026-09-26.
- ~~Fields~~ APPROVED 2026-09-26: `S.tally` {"YYYY-MM-DD":n} and `S.miss` {qid:n} are added in J4, and every path goes through `checkedProgressState` (storage.js:65-72), import, export and backup.
- Read the ElevenLabs ToS and OEM terms before generating.
- The lwdickens CC BY-NC tone.
- Mubert.
- The 7 MEMORY items.
- Push: main is 38 ahead by local ref (2026-09-26).

## Carried into J4 (desk-data.js nits, refuter round 2 PASS, none fires today)
- `desk-data.js:23`/`:32` test `a.ok===true`, but utils only checks that `ok` is truthy.
- `:22` tests `!a`, but utils uses `!==undefined`.
- `:26` takes `maxLvl` as a parameter, so the caller must pass `SRS.length-1` (4).

Align all three when J4 wires the file in.

## Uncommitted on disk, deliberately
- `scene-pilot/spike/*`: the spike is not accepted.
- `p5/spike-*.md`, `p5/spike*.reply.txt` and `p5/*-codex.log`.
- `master-v2-{a,c}.png`.
- `D:\tmp-spike-ud`: left empty by the refuter, because `rm` was denied. Safe to delete.
