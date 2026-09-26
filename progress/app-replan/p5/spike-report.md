# P5 Lane A spike — revised report

## Bytes

| input | raw bytes | base64 bytes |
|---|---:|---:|
| three + GLTFLoader | 711,095 | n/a |
| Variant B code | 5,484 | n/a |
| placeholder GLB | 120,600 | generated `model.b64.js` |
| plate JPEG q60 | generated `plate.jpg` | generated `plate.b64.js` |

## Checks

`node make-glb.js` regenerated the binary and its self-check printed `51 passed`.
`measure.mjs` remains the owner of browser first-frame, frame-rate, heap and fallback measurements.
Chrome was not run in this sandbox; no rendering result is asserted here.

## Proposed budgets

- Transfer: <=900 KB; A runtime is 711,095 B before scene assets, so HTTP assets need separate measurement.
- File base64: count only the two injected asset scripts; their encoded sizes need re-stat after the new JPEG.
- Decoded RAM: 1916×821 RGBA plate is 6.30 MB; embedded 512² texture is 1.00 MB.
- GPU at DPR1: two full-screen RGBA8+depth canvases are 23.73 MB at 1920×1080 and 7.90 MB at 390×844; add plate/model textures above this, so the former 10 MB GPU budget is not viable.
- Frame: 33.3 ms at 30 fps; guide target 66.7 ms; shed uses a post-500 ms, 1-second mean.

## Storage check (source inspection only)

| metric | derivable today | committed/additive field |
|---|---|---|
| daily count with repeats | no | `S.tally: {"YYYY-MM-DD":n}` |
| weak-spot most-wrong | no | `S.miss: {qid:n}` |
| letters due | yes | `srs[qid]: {lvl,due}` |
| mastery | yes, current state | none |
| confidence | last answer only | `answers[qid].conf` |

`answers[qid]` keeps its last `{pick,ok,at}`; `conf` is also recorded by quiz code. The browser/render claims, real restoration, actual scene fps, JPEG byte count and all budget claims above are unmeasured unless explicitly arithmetic.
