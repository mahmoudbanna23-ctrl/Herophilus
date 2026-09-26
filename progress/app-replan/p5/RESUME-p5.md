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
- Owner ruled 2026-09-26, applied `64b62f8a` (refuter round 4 PASS, 64 passed): tablet
  [932,458,200,90] + pile [1160,458,200,90] sit ON openScroll; portrait crop x0 = bookCluster left
  (1066..1445.4), every book inside, lamp handle clips ~29.6 px.
- Grades DONE `dd7332da`: time of day = programmatic grade presets (`REFUTE-grades.md`, round 2 PASS).
- Sprites: 12 in `app/assets/scene/`, made by `plates/cut-sprites.js` (`12 passed`), after 4 Codex dispatches
  (`p5/sprites-brief{,-2,-3,-4}.md`). Method: keyed objects on `#00b140`, overlaid on the master, box-sized
  RGBA, 8 px margin, bottom-centred, contact shadow away from the lamp. Families share one width.
  letters-many = script stack of letters-1 ×9. tablet-half = blank's alpha + wax-confined strokes. gilt ×4
  and letters-0 are cut from master edits. Refuter rounds 1-4 in `REFUTE-sprites.md` +
  `D:\tmp-sprite-ref{3,4,5}\findings.txt`; round 5 is tablet-half only.
- Codex call that works: `timeout -k 10 2400 codex exec -m gpt-5.6-terra -c model_reasoning_effort=low
  --sandbox workspace-write -C "$R" -i <img> - < promptfile > log 2>&1`. A last line of `Node.js vNN` is a
  thrown error, not a pass; re-run the script yourself.
- Next: wire sprites + grades into the home desk.

## Parallel lanes opened 2026-09-26 (owner: P1, P2, P3 alongside P5)
- P1a gate (Codex): `tools/validate`, `tools/check-all`, `app/smoke.*`, report `p1/p1a-report.md`. It caught
  23 neuro MS questions on a non-existent chapter `nr-demyelinating` (since `5a479760`); fixed to `nr-ms`,
  CHECK-ALL 4/4.
- P2a design (Sonnet): `p2/P2a-design.md`. The home floor is already 1,055,663 B (> 1 MB), so shared
  bytes must be cut first. It has 3 owner questions.
- P3: only B1 (subject page) is left. The owner ruled on 2026-09-26: re-mock both options after P5,
  against the finished desk.

## Owner decisions owed
- ~~Plate pick~~ B, decided 2026-09-26.
- ~~Fields~~ APPROVED 2026-09-26: `S.tally` {"YYYY-MM-DD":n} and `S.miss` {qid:n} are added in J4, and every path goes through `checkedProgressState` (storage.js:65-72), import, export and backup.
- Read the ElevenLabs ToS and OEM terms before generating.
- The lwdickens CC BY-NC tone.
- Mubert.
- The 7 MEMORY items.
- ~~Push~~ push freely, no asking (owner 2026-09-26); main = origin at `abc09e28`.

## Carried into J4 (desk-data.js nits, refuter round 2 PASS, none fires today)
- `desk-data.js:23`/`:32` test `a.ok===true`, but utils only checks that `ok` is truthy.
- `:22` tests `!a`, but utils uses `!==undefined`.
- `:26` takes `maxLvl` as a parameter, so the caller must pass `SRS.length-1` (4).

Align all three when J4 wires the file in.

## Uncommitted on disk, deliberately
- `p5/*.reply.txt`, `p5/*-codex.log`, `p5/shots/`, `p5/.keep_check`: job leftovers.
- `master-v2-{a,c}.png`.
- `D:\tmp-spike-ud`, `D:\tmp-scenemap-ref`, `D:\tmp-scenemap-r2`, `D:\tmp-grades{,-ref}`,
  `D:\tmp-sprite-{look,ref,ref3,ref4,ref5,ref6}`, `D:\tmp-p1a-ref`: refuter scratch. Safe to delete.
