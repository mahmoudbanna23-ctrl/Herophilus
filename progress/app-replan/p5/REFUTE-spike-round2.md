# Spike refuter, round 2 — FAIL (Opus, 2026-09-26)

Reviewed after the lean-drafter GLB fix (`spike-measure.md` Round 2). Summary: neither variant shows
the plate, A draws no visible model, B does no real skinning, and the GLB still breaks the glTF spec.

## Failures
1. `make-glb.js:14,16`: the `inverseBindMatrices` accessor has `count:null`, because the `acc()` size
   table has no `MAT4` entry. Fix: add `MAT4:16`.
2. `make-glb.js:16`: `buffers[0].byteLength` is 117768, set before `anim()` runs, but bufferViews 7-10
   end at 117832. Fix: set `byteLength` after the animations are built.
3. `make-glb.js:14`: POSITION and the sampler inputs lack `min`/`max`, which the spec requires.
   Fix: emit them.
4. `make-glb.js:16`: `skeleton:0` is not the common root of joints 1 and 2. Fix: parent the joints
   under one root.
5. `a-three.html:4`: `map:tex` is passed as a material property, not a uniform, so the plate is never
   bound; the screenshot shows glow on black. Fix: move it into `uniforms`.
6. `a-three.html:4-5`: the model is invisible. The likely causes are a lit MeshStandardMaterial with no
   lights, plus NaN bind matrices from defect 1. Fix: add a light, or use an unlit material.
7. `b-min.html:2`: the plate texture is NPOT with the default REPEAT wrap, so it is incomplete and
   samples black. Fix: set CLAMP_TO_EDGE.
8. `b-min.html:3`: there is no linear skinning and no clip sampling. The shader ignores `j`, has no
   bone matrices and never reads `animations`. It moves by `w.y`/`w.z`, which are always 0, so the
   model is static. Fix: implement both, or drop the claim.
9. Reduced motion, both variants: one frame is drawn before the plate or model has loaded (A: scene 1,
   guide 0; B: scene 0, guide 1). Fix: render the still frame in the load callbacks.
10. Hidden tab, both (`a-three.html:6`, `b-min.html:3`): frames stop, but `raf` is never reset to 0,
    so the page never resumes. The probe saw a frozen draw count after the tab was shown again.
    Fix: set `raf=0` on hide.
11. Shed logic, both: a single frame over 42 ms sheds a stage, and the first frame always does
    (`last=0`). Sheds appeared at 1× with no throttle; at 6× both fell to the still. Fix: average
    over a window.
12. `?force=lost` never calls `WEBGL_lose_context`, so the loss and restore listeners never run.
13. Capability tier: about 1 MB of scripts parse before the probe runs (line 1 of both).
14. `assets.js:3`: `plate.jpg` is not on disk. The b64 scripts load under http too, so http transfer
    is about 950 KB, over the 900 KB budget.
15. `spike-report.md:27`: "canvases are transient" is false. Two full-screen canvases add about
    16-23 MB of GPU memory, which the 10 MB GPU budget leaves out.
16. `spike-report.md:40-41`: the proposed field names clash with the committed
    `app/js/desk-data.js:85,103`, which reads `S.miss` and `S.tally`. The report also omits `conf`
    (`quiz.js:530`). The last-answer-only claim is true, and the other three verdicts are right.
17. `spike-measure.md:107`: the "0% bg" claim is contradicted by the screenshots.

## Passed
- No `import`/`export` in the pages, no CDN URL, no emoji.
- `app/` untouched; the `app/assets/clep` diff is empty.
- Bytes match `stat`: GLB 119,992 raw / 160,039 b64; plate b64 74,218. `model.b64.js` decodes
  byte-identical to the GLB.

## Measured

| | A | B |
|---|---|---|
| first paint ms | 112-304 | 120-172 |
| harness fps 1× / 6× | 120.2 / 98.7 | 120.2 / 114.2 |
| draws/s, scene / guide | 30 / 15 | 30 / 15 |
| heap MB | 4.27-5.39 | 0.77-1.42 |
| code bytes | 711,095 | 5,484 |

## Not verified
- A real context restore.
- A browser without `--allow-file-access-from-files`.
- Byte count of a real `plate.jpg`.
