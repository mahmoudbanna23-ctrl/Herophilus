# Spike refuter, round 4: FAIL (Opus, 2026-09-26)

Reviewed after the lean-drafter fix round (`spike-measure.md` "## Round 4"), against
`REFUTE-spike-round3.md` and `spike-fix-brief.md`. The change reviewed is
`git diff df4b83b -- progress/app-replan`. Every check below was re-run by this refuter. Evidence shots
are in the session scratchpad (`r4/shots`, `r4/p`, `r4/p2`), not in the repo. Chrome profiles were
under `D:/tmp-spike-ud5`, one Chrome at a time.

## Failures
1. **Item 4 / item 8, `make-glb.js:4` (IBMs) and `make-glb.js:2` (body `JOINTS_0=1`): the skin indexes
   validly now, but the pose is wrong and A's model no longer moves.**
   - `joints` is `[0,1,2]` (root, sway, head). Weighted `JOINTS_0` values are {1: 1,538, 2: 770}, and
     max is 2. All joints descend from `skeleton` 0.
   - The IBMs were not re-derived. IBM1 is `T(0,+0.55,0)` and IBM2 is `T(0,+0.85,0)`, but no joint
     node has a rest transform (world = identity). The correct IBMs are identity. So at rest, the body
     draws at y -0.60..1.10 and the head cap floats at y 1.79..2.23, detached from the body.
   - The reindex moved the body from joint 1 = `head` (animated) to joint 1 = `sway`. Both clips target
     only node 2 (`head`), so the body is now static. Only the cap moves.
   - Effect in A: `gCam` (`a-three.html:117`, fov 35, at y 0.2, z 3.6) sees y ~-0.93..1.33 at z=0,
     so the cap is off-screen. `a-three.png` shows the open-topped cylinder with **no head cap**.
     This contradicts the builder's "head cap present".
   - Guide-only screenshots (`#scene` hidden, 4 shots at 1.1/1.3/1.7 s gaps) differ by **0 px** in
     idle and **0 px** after Wave, on 2 runs.
   - The builder's A figure of 137,946 px is the plate lamp flicker (`uTime` sine,
     `a-three.html:98`), because the full composite was diffed. It is not model motion. Round 3 had
     1,361-5,223 px of real model motion in A, so this is a regression.
   - Effect in B: the cap draws as a triangle at the top edge, clipped by NDC y>1 (`b-min.html:174`,
     rim 2.23*.55-.2=1.03), with a ~90 px gap above the body.
   - Fix: IBM[i] = inverse(rest world of joints[i]). That means identity here, or give `head` a rest
     translation and its matching inverse. Retarget `idle` to node 1 (`sway`) so the body sways, and
     keep `wave` on `head`. Add a self-check assert that IBM[i] x restWorld(joints[i]) = I.
     Re-shoot guide-only.
   - The round-3 prescription ("`[0,1,2]`, cap=2") did not warn that body joint 1 would become the
     static `sway`. The builder followed it literally.
2. **New, not a round-3 item. `b-min.html:150` + `assets.js:1`: B is black under http.** Under http,
   `a.model` is the path `model.glb`, but `glb()` (`b-min.html:144-148`) only parses a data URI. Its
   `atob` throws in `main()`, and no fallback shows. Screenshot `r4/p/b-min-http.png` is all black;
   no `model.glb` request is made. This is pre-existing at df4b83b (same line), and round 3 missed it
   by not loading B over http. Fix: under http, `fetch(a.model)` then an arrayBuffer before `glb()`,
   and wrap `main()` so any throw calls `show2d`.

## Passed
- 5: `a-three.html:110` `tex.flipY=false`. A's plate is upright (bowl and book right way up). B's
  plate code is unchanged in the diff; it was already upright and still is.
- 8 (sampling only): B's `sampleClip` gets seconds (`b-min.html:206,208`). Guide-only B idle diffs are
  201/293/915 px, and Wave 623/1,859/1,507 px, all inside the cap bbox (x 327-472, y 0-51). The
  interpolation works; what is visible is only the detached cap (see failure 1). The builder's B
  "2,553 px" was also full-composite.
- 11: `a-three.html:181,184,198` and `b-min.html:255,258,268`. Tested with a **real** visibility
  change: a second tab was activated via `/json/activate`, then the page again, 4 cycles each. That
  gave 8 real `visibilitychange` events per page (hidden/visible), **0 sheds**, no fallback, and the
  page still drawing after.
- 15: the GPU line checks out: 23.73 / 3.77 MiB (depth16) and 31.64 / 5.02 MiB (depth24+stencil8),
  DPR 1, units and format named.
- 17: retraction written at `spike-measure.md:264-268`. Line 107 itself is left as history.
- Stale B bytes: `spike-report.md:8` says 12,377, which equals `wc -c b-min.html`.
- `node --check` is clean on all 8 `.js`/`.mjs` files and both inline page scripts. `make-glb.js`
  re-run in a scratch copy gives `53 passed`. `model.glb` and `model.b64.js` are byte-identical to
  disk.
- `vendor/` and `app/assets/clep` diffs vs df4b83b are empty. `app/` has only the pre-existing
  untracked `npep-*.jpg` x3 and `graphify-out/`.
- No import/export, no URL, no non-ASCII, and no gradient/radius/hover/translateY/box-shadow in the
  pages, `assets.js` or `make-glb.js`.
- `measure.mjs` full run: force=2d, force=lost (A logs `Context Lost.` x2), throttle (sheds down to
  `still`) and reduced motion all behave as they did in round 3. 0 exceptions.

## Measured A vs B (this refuter)
| | A | B |
|---|---|---|
| code bytes | 607,784 + 103,311 vendor + 8,285 page + 528 assets = 719,908 | 12,377 + 528 = 12,905 |
| HTTP transfer, measured (Network.encodedDataLength, no gzip, no cache) | 897,366 (897,223 without the favicon 404): under 900,000 by 2.8 KB | 69,213, but the page is **broken** (no GLB fetched); a working B would be ~190 KB |
| JS heap MB | 3.33 (1x) / 4.41 (6x) | 0.92 / 0.88 |
| first paint ms | 164 / 164 (116 when reduced) | 144 / 240 (152 when reduced) |
| model motion, guide-only px | **0 idle, 0 wave** | 201-1,000 idle, 623-1,859 wave (cap only) |

On screen (file://):
- A: plate upright y, model y, head cap n, motion n.
- B: plate upright y, model y, head cap y (detached, clipped), motion y (cap only).

## Scratch files
`verify-round4.mjs` (hard-codes `D:/tmp-spike-ud4`), `probe-sweep.mjs` and `_pngdiff.mjs` are ad-hoc
builder probes, self-labelled "not shipped". Exclude them from the commit. Commit `a-three.html`,
`b-min.html`, `make-glb.js`, `model.glb`, `model.b64.js`, `spike-report.md`, `spike-measure.md` and
this file.

## Not verified
- A real context restore, and a browser without `--allow-file-access-from-files`.
- An OS-level minimise. The visibility test used a tab switch inside headless Chrome.
  `Page.setWebLifecycleState` frozen/active was also sent; it returned no error.
- Whether the owner-facing "900 KB" means 900,000 or 921,600 B. A passes either way.
