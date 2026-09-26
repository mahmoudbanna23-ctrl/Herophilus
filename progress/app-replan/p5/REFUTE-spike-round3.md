# Spike refuter, round 3 — FAIL (Opus, 2026-09-26)

Reviewed after the lean-drafter rewrite of `a-three.html` and `b-min.html` (`spike-measure.md` Round 3),
against `spike-fix-brief.md`. All checks below were re-run by this refuter, not read off the builder's
account. Evidence shots are in the session scratchpad (`shots3/`, `probe-shots2/`, `probe-shots3/`),
not in the repo.

## Failures
1. **Item 4, `make-glb.js:5,9`**: the skin is still invalid. `skins[0].joints` is `[1,2,3]` and
   `skeleton` is 0, but node 3 (`guide`, the skinned mesh node itself) is a scene root with no parent,
   so it is not under node 0. "One root joint that parents the others" is not met either: node 0 is not
   a joint. And 770 of 2,308 vertices carry `JOINTS_0 = 3`, with weight 1, into a 3-joint skin. That
   is out of range. The spec requires joint indices to index `skin.joints`, and glTF-Validator reports
   this as `ACCESSOR_JOINTS_INDEX_OOB`. (The validator code is from memory; it was not re-fetched.)
   - Effect in A: r147 `Skeleton.computeBoneTexture` pads the bone texture to 4x4, which makes 4
     slots. It copies in 3 matrices and leaves slot 3 as zeros, so all 770 head-cap vertices collapse
     to one point. `a-three.png` shows the cylinder with no head cap. B only hides this, by clamping
     in `pick()` (`b-min.html:172`).
   - The self-check prints `51 passed` because line 11 checks only `joints[0]` against the root. It
     never checks `JOINTS_0` values against `joints.length`.
   - Fix: make `joints` `[0,1,2]` (root, sway, head), with node 3 outside the joint list. Write
     head-cap `JOINTS_0 = 2`. Add two asserts: `max(JOINTS_0) < joints.length`, and every joint is
     `skeleton` or a descendant of it.
2. **Item 5, `a-three.html:99,106-110`**: the plate is bound, but it renders **upside down**. three's
   `Texture.flipY` defaults to true (`this.flipY=!0` in vendor), and the shader also samples at
   `1.-p.y`, so the image is flipped twice. In `a-three.png` the bowl and the book are inverted; B and
   the fallback are upright. Fix: set `tex.flipY=false` before the upload, or drop the `1.-` in the
   shader.
3. **Item 8, `b-min.html:164,200,206-208`**: the clip sampling is broken by a unit mismatch. `dur` is
   in seconds (the time keys, 1.2), but `sampleClip` is passed milliseconds. `localT*1000` and
   `now-waveStart` both go straight into `frac=localT/clip.dur`, so `frac` clamps to 1 within about
   1 ms.
   - Result: idle is frozen at its last key, and wave snaps to its end pose, holds it, then snaps back.
     There is no interpolation in practice.
   - Measured: 5 screenshots 300 ms apart, model region only (x<470), gave **0 changed pixels** in B
     against 1,361-5,223 in A. After a wave click, B showed 10,233.
   - Fix: pass seconds (`sampleClip(idle,localT)`, `(now-waveStart)/1000`).
4. **Item 11, both, `a-three.html:180,196` and `b-min.html:255,267`**: every return from a hidden tab
   sheds one stage. On show, `last=0`, so the first `dt` equals `t`, several seconds, and that one
   value drives the 1 s mean over 42.
   - Measured: four hide/show cycles logged `shed lightning, tilt, weather, smoke` in both variants
     (0 sheds in steady state). A fifth cycle would reach `still`.
   - Fix: on show, clear `shedTimes`, and skip the first sample after a resume (`dt` only when
     `last>0`).
5. **Item 15, `spike-report.md` GPU line**: the 1920x1080 figure, 23.73, works out as 6 B/px
   (RGBA8 + depth16) in MiB. The 390x844 figure, 7.90, works out as DPR **2** in decimal MB. At the
   DPR 1 that the brief asks for, it is 3.77 MiB (depth16) or 5.02 MiB (depth24/stencil8). The units
   and the depth format are not stated. Fix: one unit, DPR 1, and name the depth format.
6. **Item 17, `spike-measure.md:107`**: the "scene 0% bg, guide 0% bg" claim still stands without a
   retraction. Round 3 says the backgrounds are not black but never withdraws the readPixels claim.
   Fix: an orchestrator note that retracts it.
7. **Not a numbered item, `spike-report.md` Bytes table**: "Variant B code 5,484" is stale.
   `b-min.html` is now 12,087 B. Fix: re-stat it.

## Passed
- 1: `MAT4:16` is in the table, and the IBM count is 3.
- 2: `buffers[0].byteLength` is 117,896, which equals the BIN chunk and the last view end.
- 3: POSITION min/max equal the float32 actual extents; sampler inputs are `[0]`/`[1.2]`.
- 6: the model is visible and lit in A.
  - The stated rationale is **false**, but it does not change the result. r147 derives skinning from
    the object (`skinning:!0===v.isSkinnedMesh`), not from the material, and `GLTFLoader.js` has 0
    `skinning` references. MeshBasicMaterial would have skinned fine. Lights were an allowed choice.
- 7: CLAMP_TO_EDGE and LINEAR with no mipmaps (`b-min.html:118-121`); the plate is upright in B.
- 9: reduced motion draws scene 1 / guide 1 after load, then nothing, with a 0-pixel diff over
  1.5 s, in both.
- 10: hidden gives 0 draws over 2 s, and drawing resumes on show (A 104 to 150, B 105 to 151), in
  both.
- 12: `?force=lost` fires the real listeners (A logs `Context Lost.` twice) and falls back, with no
  retry, in both.
- 13: the tier check runs before any injected script. (Note: the throwaway context is never
  released.)
- 14: `plate.jpg` is real (1916x821, DQT[0]=13, about q60), and `plate.b64.js` decodes
  byte-identical to it. HTTP transfer for A is 895,839 B, under 900 KB. The b64 scripts load only
  under `file:`.
- 16: the report uses `S.tally` and `S.miss` and has a `conf` row, which match `desk-data.js:85,103`
  and `quiz.js:530`.
- `node --check` is clean on all 5 `.js`/`.mjs` files.
- `make-glb.js` was re-run in a scratch copy and is deterministic: `model.glb` and `model.b64.js`
  are byte-identical to disk, and b64 decodes to the GLB.
- No `import`/`export` in the pages, no CDN URL, no non-ASCII, no gradient/pill/hover CSS.
- `app/` status shows only the pre-existing untracked files; `app/assets/clep` diff is empty.
- `?force=2d` shots are byte-identical between A and B: plate plus Clepsydra, upright.

## Measured (this refuter, headless Chrome, profiles under `D:\tmp-spike-ud3`)

| | A | B |
|---|---|---|
| first paint ms | 108-196 | 104-184 |
| harness fps 1x / 6x | 120.2 / 120.3 | 120.3 / 120.2 |
| draws/s, scene / guide | ~30 / ~15 | ~30 / ~15 |
| heap MB, normal | 3.02-4.34 | 0.83-0.92 |
| model motion, idle (px changed, 300-1200 ms) | 1,361-5,223 | **0** |
| code bytes | 711,095 vendor + 7,984 page = 719,079 | 12,087 |
| HTTP transfer (page+code+assets.js+jpg+glb) | 895,839 | 188,847 |

What is on screen:

| variant | plate | model | black bg | visible motion |
|---|---|---|---|---|
| A normal | yes, upside down | yes, lit cylinder with no head cap | no | yes |
| B normal | yes, upright, stretched | yes, flat rectangle plus cap triangle | no | lamp glow only; idle is frozen |
| force2d, A and B | yes | Clepsydra PNG | no | no |
| reduced motion, A and B | yes | yes | no | no, still |

## Noted for P5 build (not blocking)
- B `z=0` (`b-min.html:174`) is an orthographic drop. It is still real linear skinning, because the
  bone math is correct, and the brief does not require projection for B.
- In A, the aspect-1 camera stretches the model on a non-square canvas.
- Both variants stretch the plate to the viewport; they do not use `toView`.
- B sets `canvas.width` on every frame (`b-min.html:130,213`), which resets the buffer.
- The idle clip's first and last keys differ, so it pops every 1.2 s.
- `?force=2d` reaches the fallback through a `SPIKE_GLB is not defined` ReferenceError, not through
  the tier error.

## Not verified
- A real context restore.
- A browser without `--allow-file-access-from-files`.
- A real `visibilitychange`: it was simulated by overriding `document.hidden` and dispatching the
  event.
