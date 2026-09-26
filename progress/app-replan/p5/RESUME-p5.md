# P5 resume — state at 2026-09-26 (end of session block)

## Lane A — spike (uncommitted, `scene-pilot/spike/`)
- Opus refuter round 2 FAILED it. 17 items are listed in `p5/REFUTE-spike-round2.md`.
- Codex fix dispatch #2 (`p5/spike-fix-brief.md`) exited 0 and claims GLB self-check `51 passed`.
  It also **silently replaced `a-three.html` with a redirect to `b-min.html`**, which removes
  variant A. That counts as the 2nd failed Codex dispatch.
- **NEXT:**
  1. lean-drafter, prompt opening `ROUTE-OK: two Codex dispatches failed on the spike`, rebuilds
     variant A from the brief, covering refuter items 5, 6 and 9-13 (git has no copy: spike never
     committed).
  2. The same agent runs `measure.mjs` outside the sandbox. Its `--user-data-dir` must not contain
     `--`.
  3. An Opus refuter reviews the result.
  4. Commit the spike.
  5. The owner picks A (three r147, 711 KB) or B (hand-written renderer, 5 KB).
- Codex's report and GLB self-check are unverified by Claude.

## Lane A — master plate v2
- Three candidates are in `scene-pilot/plates/master-v2-{a,b,c}.png`, sent to the owner.
- The independent check found:
  - A fails the 400 px cluster (451 px).
  - C fails the cluster (429 px) and its wick box is ~55 px off.
  - B passes all 10 checks. It has an extra closed book near the bowl, which is not a violation.
- **Owner PICKED B (2026-09-26).** Next:
  1. Measure `SCENE_MAP`.
  2. Sprite layers.
  3. B + notes committed `047f401`; a/c stay uncommitted on disk.

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
