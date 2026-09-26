# Spike refuter, round 5: FAIL (Opus, 2026-09-26)

Reviewed `git diff 2db6f25 -- progress/app-replan` (spike files: `b-min.html`, `make-glb.js`,
`model.glb`, `model.b64.js`, `p5/spike-measure.md` "## Round 5") against `REFUTE-spike-round4.md`.
Every check re-run by this refuter. Probes, shots and JSON are in the session scratchpad (`r5/`),
not the repo. Chrome profiles under `D:/tmp-spike-ud7/rN`, one Chrome at a time, 1280x800 DPR 1.
http served by a scratchpad `node:http` server rooted at `spike/`, `no-store`, cache disabled.

## Failures
1. **`b-min.html:172-178` + `b-min.html:233`: B does not play the rig it loads. Its body never moves.**
   - `findClip` keeps only the FIRST translation and FIRST rotation channel of a clip and drops
     the rest. `model()` then always writes that one track into joint slot 2 (`head`) and leaves
     slots 0/1 (`root`, `sway`) at identity. There is no node hierarchy.
   - Effect: `idle` plays `sway`'s track (tx .1, rot .04) on the cap, not the body. `wave` plays
     `head`'s track on the cap. The body (1,538 verts, joint 1) is static in both clips.
   - Measured, guide-only, `#scene` hidden: B body centroid x = **639.5 px in all 7 frames** (4 idle
     at 1.05/1.3/1.15 s gaps + 3 wave), file:// and http alike. Only the cap moves (idle cx
     651.6-656.1, wave 657-733).
   - The builder's own comment at `b-min.html:231-232` admits this, but `spike-measure.md:377`
     reports B without saying the body is static. For a pick on renderer capability, B is shown
     at 13,700 B while doing less than A (no hierarchy, one track per clip).
   - Fix: `findClip` returns every channel grouped by target node. In `model()`, sample each
     node's local TRS and compose world = parent world x local down `root -> sway -> head` (use
     the GLB's `children`). Then jm[i] = world(joints[i]) x IBM[i]. Re-measure B's bytes after.
2. **`b-min.html:65`: `main()` is still not wrapped (round-4 failure 2, second half).**
   - The http path is fixed: the `fetch` `.catch` calls `show2d`. Tested with `model.glb` 404 in
     a scratch copy: fallback shown, 0 exceptions.
   - The file:// path throws synchronously. Tested with a corrupt `model.b64.js` in a scratch
     copy: uncaught `RangeError: Offset is outside the bounds of the DataView ... at parseGlb`,
     **no fallback, 0 draws, black page**.
   - Fix: `try{main()}catch(e){show2d(e)}` at line 65.
3. **`p5/spike-measure.md:384-387`: a false history claim.** It says the round-4 IBMs "had been
   incidentally narrowing or hiding" the body/cap gap. Round 4 measured the reverse: body top
   1.10, cap bottom 1.79, a 0.69 gap against 0.39 now. Fix: strike the sentence.

## Passed
- **Rig (GLB), independent check** (scratchpad `r5/indep.js`: own row-major math, own Gauss-Jordan
  inverse, reads IBMs and nodes from the GLB bytes). IBM x restWorld = I for joints 0/1/2 (max error
  0), and each IBM equals my own inverse of the world. Every channel targets a skin joint. Weighted
  verts moved per clip, counting inheritance: idle 2,308/2,308, wave 2,308/2,308. Posed end-keys:
  idle moves body x +0.10 and cap x +0.10; wave moves cap x +0.35/y +0.20 and body y +0.05.
- **`make-glb.js` self-check.** Re-run in a scratch copy: `82 passed`, and the output is
  byte-identical to `model.glb` / `model.b64.js` on disk. The asserts are real, not tautological:
  (a) reads IBMs from the GLB bytes and rest TRS from the GLB JSON. It shares `composeTRS`/`matMul`
  with the generator, so it is not fully independent, but it caught the `matInvert` out[15] bug.
  (b) is correct. (c) counts by first joint slot and ignores weights, but it would have failed round
  4 (770/2,308 = 33%). Note: `make-glb.js:75` hand-writes `nodes` instead of serialising `nodeDefs`
  TRS; if they ever diverge, assert (a) catches it.
- **A's motion is real position change, not recolour.** Guide-only (`#scene` hidden, lamp gone),
  body centroid x at >=1.05 s gaps: http 662.5 / 659.5 / 666.0 / 669.5; file 659.5 / 655.4 / 666.0
  (4th frame at the same loop phase). Wave: body 665 -> 649 -> 662, cap 681 -> 709 -> 752. bbox left
  edge 319-333. The builder's 96k-115k px diffs were not reproduced (mine: 4-14k px at 1280x800).
- **B loads `model.glb` over http**: 200, 121,787 B on the wire, renders, 0 exceptions.
- Plate upright in A and B (file:// and http; `r5/pshots/*-full.png`).
- **Real tab switch** via `/json/activate`, 4 cycles: 8 `visibilitychange` events per page, 0 sheds,
  no fallback, still drawing after. Holds for A and B, file:// and http.
- **Reduced motion**: `__draws` = 2 at 2.5 s and 2 at 5.0 s. That is one still frame, then no
  draws. Holds for A and B, file:// and http.
- **`measure.mjs` full suite**, re-run (TEMP=`D:/tmp-spike-ud7`), 0 exceptions:
  - force=2d and force=lost: both fall back, A and B.
  - throttle: sheds to `still`, A and B.
  - reduced motion: no fallback.
- `node --check` / `new Function` are clean on both inline page scripts and `make-glb.js`.
- No import/export, URL, gradient, radius, hover, translateY, box-shadow, side border, or non-ASCII
  character in the pages, `assets.js` or `make-glb.js`.
- The diff vs 2db6f25 is empty for `app/`, `vendor/`, `a-three.html`, `measure.mjs` and `assets.js`.
  `app/` has only the pre-existing untracked `npep-*.jpg` x3 and `graphify-out/`. There are no probe
  files in `spike/`.

## Measured A vs B (this refuter)
| | A | B |
|---|---|---|
| code bytes (page+vendor+assets / page+assets) | 719,908 | 13,700 (does less, see failure 1) |
| raw payload over http (code + glb + jpg) | 897,116 | 190,908 |
| http transfer, encodedDataLength, no cache | 898,548 (898,405 without favicon 404) | 191,850 |
| margin vs 900,000 / vs 921,600 | **1,452 B** / 23,052 B | 708 KB |
| bytes read, file:// | 1,077,853 | 250,069 |
| JS heap MB, file:// / http | 3.50 / 3.23 (measure.mjs: 3.31 1x, 4.37 6x) | 1.13 / 0.97 (0.91 / 0.90) |
| first paint ms, file:// / http | 116 / 108 (reduced 132 / 124) | 112 / 116 (reduced 116 / 116) |
| model position motion | body + cap, both protocols | cap only, body fixed at 639.5 px |

Builder's 899,239 B differs only by server headers.

**Budget unit: ESCALATE.** `spike-brief.md:85` asks the spike to propose the budget.
`spike-report.md:20` proposes "<=900 KB" without saying whether that is 900,000 B or 921,600 B. A
passes either way, but by 1.45 KB under the stricter reading, and the GLB grew 976 B this round.

## Body/cap gap: decision
Not a blocker for the owner's A-vs-B pick; log it as a P5-build note. It is placeholder geometry
(`make-glb.js:5`, body top 0.55, cap apex 0.94). Identity IBMs are correct for identity rest
transforms, and the real model will carry its own rest pose. P5-build notes, all pre-existing:
- A's camera overflows at 1280x800: body bottom and cap rim clipped, figure covers the plate
  centre.
- `idle` has two keys with unequal ends, so it snaps back every 1.2 s.

## Not verified
- A real WebGL context restore.
- An OS-level minimise.
- A browser without `--allow-file-access-from-files`.
- B's byte and heap cost once failure 1 is fixed. Expect ~1 KB more; unmeasured.

## Files to commit
Commit `spike/b-min.html`, `spike/make-glb.js`, `spike/model.glb`, `spike/model.b64.js`,
`p5/spike-measure.md` and this file. Use `git commit -F <msg> -- <paths>`.

Do not sweep in `fix-signin-brief.md`, `mocks/NOTES.md`, `plan-until-codex-2026-09-20.md` or the
`p5/*.log` / `*.reply.txt` files. Those came from other chats and were dirty before this round.
