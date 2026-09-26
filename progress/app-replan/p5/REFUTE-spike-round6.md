# Spike refuter, round 6: FAIL (doc figure only; code passes) (Opus, 2026-09-26)

Reviewed `git diff 0630d58 -- progress/app-replan` (spike: `b-min.html`; `p5/spike-measure.md` "## Round 6";
`p5/spike-report.md`) against `REFUTE-spike-round5.md`. Every check re-run by this refuter. Probes, fixtures,
shots and JSON are in the session scratchpad (`r6/`), never in `spike/`. Chrome profiles under
`D:/tmp-spike-ud9/rN`, one Chrome at a time, launched exactly as `measure.mjs` launches it. http served by a
scratchpad `node:http` server rooted at a scratch copy of `spike/`, `no-store`, cache disabled.

## Failures
1. **`p5/spike-measure.md` Round 6, "B bytes" paragraph: a false figure.** It says `b-min.html` grew
   "13,700 -> 13,896 B (+196 B)". 13,700 was round 5's page+assets total. `git cat-file -s 0630d58:.../b-min.html`
   = **13,172**, so the page grew **+724 B**, and B's page+assets code is now **14,424 B**. The same paragraph's
   file:// total (250,069 -> 250,793) is right, and it only adds up with +724.
   - Fix: change the line to "13,172 -> 13,896 B (+724 B); page+assets 13,700 -> 14,424 B". While editing,
     name the fifth http response: it is `favicon.ico` 404, 175 B.

## Passed
- **Rig, code** (`b-min.html`):
  - `findClip` (172-182) keeps every channel, grouped by target node.
  - Parents come from the GLB's `nodes[].children` (184-185). Joints come from `skins[0].joints` (186).
  - `worldOf` (231-235) composes parent world x local, memoised.
  - Bone = world x IBM[i] (250).
  - Checked against the GLB bytes: nodes root -> sway -> head, all rest TRS identity. Every animated node
    carries both T and R channels, 2 keys each, 1.2 s.
- **Rig, pixels.** Guide only (`#scene` hidden, so the lamp is masked; Wave button hidden). 4 idle frames
  with gaps of 1.05-1.55 s, then wave.
  - **Viewport:** Chrome launched as `measure.mjs` launches it reports `innerWidth/innerHeight` =
    **762x484, DPR 1**. That is measure.mjs's real size, so the builder's size was correct.
  - **Baseline jump explained:** round 5 forced 1280x800, so its 639.5 is about 1280/2. Here the rest
    centre is 380.5, about 762/2. Same region, different viewport.
  - **B body cx, file:** 386.0 / 384.0 / 388.5 / 391.0.
  - **B body cx, http:** 390.0 / 388.5 / 393.0 / 395.5.
  - Both track loop phase against a predicted `phase x 0.1 x 0.42 x 381` = 16 px swing: phase .25 -> 384,
    .94 -> 395.5. Body cluster 42,222-42,449 px.
  - **Wave:** body stays at x 380.5 and rises 4 px (sway ty +0.05). The cap inherits that and moves
    +36-38 px x (head tx .35). The hierarchy is composed correctly.
- **Any model-load throw reaches `show2d`.** Scratch fixtures: 0 draws after fallback, fallback with 2 imgs,
  0 uncaught exceptions unless noted.
  - file://, GLB truncated to 60% then re-encoded: "Invalid typed array length".
  - file://, b64 cut by 3 chars: atob error.
  - file://, `model.b64.js` cut mid-string: fallback via `SPIKE_GLB is not defined`. The only uncaught
    error is the fixture's own script SyntaxError.
  - http, `model.glb` 404: "model fetch failed: 404".
  - http, `model.glb` truncated: rejected promise caught, 1 plate draw, then stop.
  - http, garbage GLB: JSON error caught.
- **`spike-measure.md`:** the false round-5 line is struck with a correction.
- **`spike-report.md`:** records "900,000 B (decimal)", 2026-09-26, and A 898,548 B with a margin of 1,452 B.
- **`measure.mjs` full suite**, re-run with TEMP=`D:/tmp-spike-ud9`, 12 runs, 0 exceptions:
  - force=2d and force=lost: both fall back, A and B.
  - throttle: sheds through all 6 stages to `still`, A and B.
  - reduced motion: no fallback.
- **Plate upright**, A file and B http (screenshots viewed).
- **Real tab switch** via `/json/activate`, 4 cycles:
  - 8 `visibilitychange` events per page, 0 sheds, no fallback.
  - About 45 draws per second after, so it is still drawing.
  - Holds for A and B, file and http.
- **Reduced motion:** `__draws` 2 at 2.5 s and 2 at 5.0 s. Holds for A and B, file and http.
- **Rule checks:**
  - The inline script parses.
  - No import/export, URL, gradient, radius, hover, translateY, box-shadow, side border or non-ASCII
    character in `b-min.html`.
- **Unchanged vs 0630d58:** `app/` (Clepsydra PNGs included), `vendor/`, `a-three.html`, `make-glb.js`,
  `model.*`, `assets.js`, `measure.mjs`, `plate.*`. There are no untracked files in `spike/`.

## Measured A vs B (this refuter, 762x484)
| | A | B |
|---|---|---|
| code bytes (page+vendor+assets / page+assets) | 719,908 | 14,424 |
| bytes read, file:// | 1,077,853 | 250,793 |
| http transfer, no cache, excl. favicon 404 (175 B) | 898,309 | 192,423 |
| margin vs 900,000 B | 1,691 here / 1,452 on round-5 server (header noise) | ~707,500 |
| JS heap MB, file / http (measure.mjs 1x, 6x) | 3.95 / 3.77 (3.18, 4.24) | 1.03 / 0.88 (0.92, 0.90) |
| first paint ms, file / http (reduced) | 104 / 104 (104 / 112) | 112 / 124 (124 / 116) |
| body motion, idle cx range | file 383.0-397.2, http 382.5-416.4 | file 384.0-391.0, http 388.5-395.5; tracks phase |

## Not verified
- A real WebGL context restore.
- An OS-level minimise.
- A browser without `--allow-file-access-from-files`.
- A throw at render time inside `model(t)` in rAF. This is not model load, and no fixture produced one.

## P5-build notes (not blockers)
- **`b-min.html:227-228`:** a node animated on only one path gets identity for the other path, not its
  rest T/R. The sampler also reads only keys 0 and 1. Both are harmless for this GLB. The real model needs
  rest-TRS defaults and n-key sampling.
- A wave snaps the body back to rest x.
- Round-5 notes stand: A's camera overflows the frame, and the idle loop snaps.

## Files to commit
Commit these with `git commit -F <msg> -- <paths>` once the Failure-1 figure is corrected:
- `spike/b-min.html`
- `p5/spike-measure.md`
- `p5/spike-report.md`
- this file

Do not commit the other-chat dirty files (`fix-signin-brief.md`, `mocks/NOTES.md`,
`plan-until-codex-2026-09-20.md`, `p5/*.log`, `*.reply.txt`).
