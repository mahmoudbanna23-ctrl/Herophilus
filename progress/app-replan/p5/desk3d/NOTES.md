# Desk3D step 1, fix round 2 — closure table (2026-09-26)

Every number below was measured in this run, using real CDP `Input.dispatchMouseEvent` and
`Input.dispatchKeyEvent` events only. Nothing is driven with `.click()` or `.focus()`. The page
probes (`__debug`, `__coverCentre`, `__screenRects`, `__band`, `__camReport`, `__ix`) are read-only.

The harness scripts are:
- `check-fix2.mjs`: the five-size sweep, writing `D:/tmp-desk3d-fix2/s<W>x<H>-out.json`.
- `film3.mjs`: films, fps, and the reduced-motion and focus checks.
- `settle.mjs`: the settle probe.
- `lib2.mjs`: the CDP plumbing, with a fresh `--user-data-dir` for each run.

All frames are in `D:/tmp-desk3d-fix2/`. The sizes swept are 1280x800, 1024x768, 820x1180, 390x844
and 320x640.

| # | Round-2 finding | How it was closed | Measured | Frames |
|---|---|---|---|---|
| M1 | Exact return failed in portrait (camera came back to the landscape Y) | One `fitCamera(sets, pitch)` solves the pose from the bounding box plus the aspect. Close calls `fitIdle()`, the same function idle uses. The tween writes `to` exactly on its last frame. | Return diff **0.0** (camera, look and all 16 book-matrix entries), 4 books x 5 sizes, closing by Esc, Back and click-outside. Cursor parked first. | `s*-1-idle.png` vs the `-out.json` field `returnDiff` |
| M2 | Clicking a cover in portrait opened the wrong book | Picking is a raycast against the real meshes. The HTML title over a cover is that book's own button. | 20 of 20: `elementFromPoint` at the cover centre = that book, and the real click opened that book | `s*-out.json`, fields `under` and `opened` |
| M3 | Clipping in the open state | Open fit covers the union of the book, the open cover, the arc and the pulled-out sheet. Any title that would cross the viewport is hidden rather than cut. | Open clip `[]`, Mocks-out clip `[]` and label clip `[]` at all 5 sizes | `s*-3-open-ent.png`, `s*-3-open-peds.png`, `s*-5-mocks-out-*.png` |
| M4 | The open cover passed through a neighbouring book at 320 | Row books come forward before gliding. Portrait back-row books go sideways into the aisle between the columns, then come forward through the gap. | OBB-vs-OBB SAT on every frame: **0 hit frames** in 726–872 frames per open/close, 20 of 20 | `film-320x640.mp4`, `film-390x844-tile-open.png` |
| M5 | No two-page spread; the inside of the cover was bare leather | The cover's inner face carries a paper endpaper, the LEFT page, labelled Lectures. The top of the page block is the RIGHT page, labelled Questions. A gutter runs at the spine. | Both labels visible and clicked for real: logs `lectures:<id>` and `questions:<id>` fire for 4 of 4 books at 5 sizes | `s1280x800-3-open-ent.png`, `s820x1180-3-open-ent.png` |
| M6 | Mocks not tucked; its label unreadable | A 0.40 x 0.52 sheet sits inside the block. Resting open, only the top corner and the wax seal pass the fore-edge. Hover lifts it; a click slides it out face-on. The label is live HTML. | `mocks:<id> out` logged 20 of 20. Mocks label 16 px desktop, 15 px phone, sitting inside the sheet at 320. | `s1280x800-4-hover-mocks.png`, `s320x640-5-mocks-out-peds.png` |
| M7 | Wax seal showed through the closed cover | The sheet and seal live in a `paper` group with `visible = cover < -1.6`, so they do not exist while the cover is shut. | No seal in any idle still | `s*-1-idle.png`, `s1280x800-7-mid-close-ent.png` |
| M8 | Text too small in textures; camera moved away on open | There is no canvas text at all. Every word is an HTML label on a projected 3D anchor at a fixed CSS size. Open always moves the camera toward the book. | Titles and pages are **16 px** at 1280, 1024 and 820, and **15 px** at 390 and 320. Camera distance to target on open: 1280: 4.0–4.36 → 2.30 (dot 0.95). 1024: 4.74–5.05 → 2.30 (0.99). 820: 5.46–6.79 → 4.14 (0.39). 390: 7.95–9.28 → 6.01 (0.58). 320: 7.38–8.71 → 5.59 (0.54). The dot is the camera move against the camera→book direction; it is positive everywhere. | `s*-out.json` field `camReport` |
| M9 | Portrait black bands about 64% | 2x2 grid; the idle pitch is 38° in portrait, so the desk fills the frame. | Empty/background rows (≥90% background colour): **0.000** idle and open at all 5 sizes | `s390x844-1-idle.png`, `s320x640-1-idle.png` |
| M10 | No settle at rest | `makeSettle` overshoots 2.5% and returns over the last ~150 ms (cover, camera, sheet). `makeLand` arrives, rebounds 2.5% back, then rests, for the path, where an overshoot would pass through the desk. | Cover overshoot **2.50%**, peak→rest **154 ms** at 1280 and 153 ms at 390. Camera distance overshoot 2.49%, 157 ms at 1280, and 2.48%, 148 ms at 390. The path rebound was not measured by `settle.mjs` (it tests overshoot only). | `settle.mjs` output |
| m1 | Focus dropped to body after close | Close refocuses the book's own title button, and hover is suppressed while it does so. | `focusAfter` = the same book, 20 of 20 | `s*-out.json` |
| m2 | ENT focus ring clipped at the left edge | With the new layout, ENT's title is well inside the frame. The ring is a 3 px outline with a 2 px offset. | Ring box inside the viewport at 1280 and 320 (x0 − 5 ≥ 0) | `rm-1280x800-focus-idle.png`, `rm-320x640-focus-idle.png`, `s1280x800-6-focus-open.png` |
| m3 | Big C arcs over the covers; thin light lines on the desk | The arc is a small torus ring above each book, drawn over a faint track. The key light was dimmed. | Visual only | `s1280x800-3-open-ent.png` |
| m4 | Open book floated with no shadow link; beats were serial | The book lands on the desk (`REST_Y`) with its shadow under it. The beats overlap: camera at +220 ms, cover at +620, tuck at +1180. | Visual; timeline in `openBook` | `s*-2-mid-*.png`, films |

## Regression checks

- **Console and network:** 0 console errors and 0 network requests at every size, in every film and
  in every probe run.
- **Closing:** each close path was tested at every size. Esc was used for ENT and Pediatrics, Back
  for Ophthalmology, and a click outside the book for Neuropsychiatry.
- **Idle Tab order:** ENT, Ophthalmology, Neuropsychiatry, Pediatrics.
- **Reduced motion** (`prefers-reduced-motion: reduce`, real input, 1280 and 320):
  - Hover lift stayed at 0.
  - 90 ms after the click, the book was already open (path 1, cover −2.72).
  - 90 ms after Esc it was closed, with return diff 0.
- **fps counter:** the counter is in the render loop. At 1280x800, the mean over 3 s from a real
  click on ENT was:
  - 1x: **99.4**
  - 6x CPU throttle: **95.4**

  The 6x figure is barely below 1x. Headless Chrome's GPU compositing is not slowed by the CPU
  throttle, so treat the 6x number as a ceiling, not a phone estimate.
- **Films** (real clicks, variable-rate screencast re-timed from the frame timestamps, libx264 CRF
  28, 30 fps):
  - `film-1280x800.mp4`
  - `film-390x844.mp4`
  - `film-320x640.mp4`

  Each film opens ENT, hovers the three targets, slides Mocks out and back, closes with Back, then
  opens Pediatrics and closes it with Esc. The frame folders sit beside the films.

## Still open or not verified

- In the open portrait framing the book sits in the upper middle, leaving the lower ~30% as plain
  desk. That is within the brief (it is desk, not an empty band), but not pretty.
- At rest in the open book, the Mocks peek is a corner wedge about a third of the page tall at
  1280, not a small tip.
- While ENT closes at 1280, its shadow on the Ophthalmology cover shows as a blocky, pixelated
  rectangle. This is shadow-map resolution; it has not been fixed. See `s1280x800-7-mid-close-ent.png`.
- CORRECTED in round 3: the line above this one claimed the word breaks happened on phones only.
  That was false. Desktop broke words too ("Ophthalmol-ogy" at 1280). Fixed in round 3, below.
- `film.mjs`, `film2.mjs`, `check1-3.mjs` and `lib.mjs` are the round-1 harness, still pointing at
  `D:/tmp-desk3d-fix1/`. They were not rerun.

# Fix round 3 (2026-09-26) — closure table

Frames are in `D:/tmp-desk3d-fix3/`. Input was real CDP only.

New scripts:
- `wb-sweep.mjs`: 387 sizes (widths 320–1600 step 10 × heights 640, 844, 1180).
- `probe-fix3.mjs`: contrast measured against the rendered pixels, plus peek.
- `pop3.mjs`: per-frame title opacity.
- `patch-fix3*.cjs`: the applied patches, kept as the record.

`lib2.mjs` now reads `DESK_OUT`.

| # | Round-3 finding | Fix | Measured | Frames |
|---|---|---|---|---|
| M1 | Words broke inside the word at 328 of 387 sizes | All 6 soft hyphens removed. `hyphens:none` and `white-space:nowrap` set. Each title is sized to the largest that fits its cover, clamped to 16 desktop / 14 phone and 22. The idle fit keeps each title, at its minimum size, inside NDC ±0.985. Below aspect 0.95 the layout switches to 2×2; the four-in-a-row plates touched at 570–590×640. | **387 of 387 sizes: 0 titles over 1 line box, 0 clipped, 0 faded at idle, 0 overlapping, 0 soft hyphens.** Font range 14–22. | `wb-1280x844.png`, `wb-390x844.png`, `wb-320x640.png`, `wb-820x1180.png`, `wb-out.json` |
| M2 | Title contrast 1.38–1.70 | `THREE.ColorManagement.legacyMode = false` is set before any colour exists, so the covers now render their token colours. Lights were re-balanced for sRGB. Titles sit on a dark tooled plate (rgba(20,12,8,.74)) in gold `#ecc96a`. | `__contrast()`: text colour against the darkest and lightest rendered pixel under the text box, with the plate composited in. Titles: **min 5.84** across idle and open at 5 sizes. Page labels: **min 5.51** (Questions, 320). Mocks: min 5.84. | `p*-idle.png`, `p*-open-*.png`, `probe-out.json` |
| M3 | Titles popped | Neighbour titles stay drawn, inert and aria-hidden. A title fades (CSS opacity 150 ms) only when its anchor, or either end of its text, is covered by another book, when it faces away, or when its book leaves the frame. | **Largest per-frame opacity step 0.34** (1280), 0.30 (390), 0.24 (320). No step is 0.9 or more. | `film-*.mp4`, `pop3.mjs` output |
| m1 | Mocks peek was about 38% of page height | The corner pivots out 0.6 rad. The protrusion is sized so the part past the fore-edge is 2p/sin 2θ tall. | `__peek`: **11.5% of page height**; seal centre 0.008 past the edge | `p1280x800-open-ent.png` |
| m2 | Mocks tuck label was cream text over the neighbour book | The label is always dark ink on cream. Tucked, it sits on the right page by the peeking corner. | 5.84–9.66 : 1 | `p390x844-open-ent.png` |
| m3 | Title glyphs squeezed with `scaleX` 0.83 | `scaleX` removed from every label; size comes from the layout. | — | `wb-*.png` |
| m4 | Grey smear on the Questions page | The paper-thin sheet and its seal no longer cast shadows. | Questions contrast with Mocks out at 320 went from 2.63 to 5.51 | `p320x640-mocks-ent.png` |
| m5 | Blocky shadow | Not fixed. A 2048 shadow map cut fps from 105 to 47 at 1280, so the map stays at 1024. | — | — |
| m6 | Front-row arcs overlap back-row books in portrait | Not fixed; listed. | — | `wb-390x844.png` |
| m7 | Portrait open view leaves ~30% plain desk | Not fixed; within decision 4. | — | — |

## Regression checks on the final build

- **5-size sweep** (with sheet shadows on; the final change removed them):
  - 20 of 20 correct book opens.
  - Clip `[]`.
  - Band 0.000.
  - OBB 0 hit frames.
  - Return diff 0.
  - Esc, Back and click-outside all work.
  - Focus returns to the book.
  - Camera always moves toward the book.

  Re-run on the final build at 1280 and 320: identical.
- **Reduced motion** (1280, 320): no hover lift, open and close within 90 ms, return diff 0, focus
  ring clear of the edges.
- **Settle:** cover 2.50% / 175 ms, camera distance 2.49% / 176 ms.
- **fps on the final build** (1280): 108.3 at 1x, 82.8 at 6x.
- **Console and network:** 0 errors and 0 network requests in every run.
- **Films:** `film-1280x800.mp4`, `film-390x844.mp4`, `film-320x640.mp4`. They were recorded
  after the shadow-map revert and before the sheet-shadow change; that change touches neither
  motion nor labels.

## Fix round 4 (refute round 4: 1 major, 3 minors in scope)

Frames: `D:/tmp-desk3d-fix4/`. Probe: `pop4.mjs` samples every animation frame through a real-click
open, Mocks out, in, out, then Esc with the paper out. Colour and peek come from `__pageRGB()` and
`__peek(id)` in app.js.

| Item | Change | Measured |
|---|---|---|
| MAJOR: page labels pop | `closeBook` no longer hides them. Lectures, Questions and Mocks use the same 150 ms `.gone` fade as the titles, and each is placed on its anchor every frame, including while hidden. Each label fades on its own cause: Lectures when the cover turns past facing, Questions when the cover shuts over it, Mocks when the tuck drops below 0.6. | Max opacity step per frame at 1280: Lectures 0.16, Questions 0.18, Mocks 0.17. At 390: 0.09 / 0.09 / 0.09. Two crossings each (one in, one out). |
| MAJOR: Mocks label jumps | It is now anchored on the sheet at every pose, at the sheet's top-left, clear of the seal. The switch between face and sheet anchors (old app.js:602-608) is gone. | Largest move per 16.7 ms while visible, 1280: Mocks 27.4 px, Lectures 61 px, Questions 16 px. At 390: 7.2 / 17.5 / 14.4 px. The labels are placed on their anchors, so these are anchor speeds; the largest (Lectures) comes from the cover swing. No discontinuity check beyond this was run. |
| Mocks slides up | The paper now moves up along the pages, between the leaves, face to camera. At rest it peeks 12.8% of page height above the head; slid out it shows 41%, with its foot still tucked. z = -0.015, so it sits behind the gilt arc and never intersects it. | `ix 0` in all 20 runs. Frame: `p4-1280x800-ent-mocks-out.png`. |
| Mocks readability | On the sheet's top edge, the desk and the arc could sit under the text (contrast 1.03 to 1.58), so a paper slip (`#mocksBtn` background) was added. | 8.76 to 9.67. |
| Hover lift | `ppHover` changed from 0.1 to 0.025. The label rides the sheet, so the larger lift pulled the label out from under the pointer between press and release. | Mocks real-click toggles 3/3 at both sizes. |
| Left and right page colour | Same paper hue. The endpaper albedo is x0.62 (`ENDPAPER_K`), because the open cover turns it about 24 degrees toward the key lamp. | 1280: L [253,209,147] vs R [255,223,157]. 390: L [227,187,132] vs R [212,174,123]. The residual is 5 to 7%, in opposite directions at the two layouts, so no single constant closes it. |
| Ghost titles | A title is cut the same frame (`.gone.snap`, no transition) when any corner of its plate is covered by another book nearer than the title. Facing away and leaving the frame still fade. | Snaps: 4 at 1280 and 2 at 390 during the ENT open/close. Not zoom-verified frame by frame. |
| Sweep (5 sizes) | Unchanged harness. | 20/20 opened; all three choices logged each time; exact return with diff 0; ix 0; clip none; 0 errors; 0 network requests. |

Left as they were, per the brief: shadow, arcs, portrait desk space. Still open from round 4: title
sizes differ by book at 1280 (22/16/16/22). With the paper out, the arc now floats in front of the
sheet. One run showed a Mocks step of 0.42 on a 53 ms frame hitch, with a slip box-shadow that has
since been removed. After removal it was 0.17; that is one sample.

## Fix round 5 (refute round 5: 2 majors, plus orchestrator decisions 3 and 4)

Frames: `D:/tmp-desk3d-fix5/`. Probe: `pop5.mjs <runs> <sizes>`. Each run is real-click open, then
Mocks out, then Esc close, for all four books, sampled every animation frame. 3 runs at 1280x800 and
3 at 390x844.

| Item | Change | Measured |
|---|---|---|
| MAJOR 1: title cut in one frame | `snap` is removed; every label now fades. Each frame, `forecastVis` evaluates every running tween (books and camera) at now + 0, 75 ... 600 ms and re-tests title visibility: facing, in frame, and every plate corner clear of nearer books. A title starts its 150 ms fade when it will stop being visible within 150 ms, so the fade ends at contact. It returns only when it is visible across the whole next 600 ms, and never within 400 ms of its last hide. The 400 ms guard exists because input changes the future: a hover followed by a click produced one 17 ms re-hide before the guard went in. | Title max opacity step per frame: 1280 = 0.24 / 0.18 / 0.18, 390 = 0.09 / 0.13 / 0.09. Hide-show-hide inside 400 ms: 0 in all 6 runs. Shortest re-hide: 4447 ms at 1280, 7413 ms at 390. |
| MAJOR 2: arc over the sheet | The arc and its track are drawn through geometry groups (`setSweep`, one group per tube ring). The geometry never changes, so camera fits are unaffected. On open, `arcS` eases 1 to 0 over 300 ms as the book lifts; on close it sweeps back over 300 ms after the book lands. The arc rewinds to 12 o'clock. | `__arcOverlap` counts drawn arc points in front of the open book or its sheet. Frames with overlap while the open book is off the desk (path > 0): 0 in 6 runs. At 390 there are 36 to 38 frames at path 0.00, meaning the click frames before the book moves: the neuro arc crosses the ENT cover and the peds arc crosses the ophtho cover. This comes from the idle portrait layout (refuter minor "portrait arcs overlap neighbour titles", portrait desk space left as ruled) and is not fixed. Frame: `p5-1280x800-mocks-ent.png`. |
| Decision 3: one title size | Per frame, one size for all four: the largest at which every resting book's title fits its own cover on one line, clamped to [16 desktop / 14 phone, 22]. The open book is excluded because it only grows as it lifts. | Frames with unequal sizes: 0 in all 6 runs. Idle sizes: 1280 16, 1920 22, 820 16, 390 14, 360 14. The size moves 16 to 19 during the 1280 camera moves, all four together. Word sweep, 387 sizes: 0 bad (multi-line, clipped or hidden); sizes 14 to 18. |
| Decision 4: endpaper tone | `ENDPAPER_K` is set per layout (landscape 0.72, portrait 0.53) and applied in `layoutBooks`. | L vs R: 1280 [255,223,157] vs [255,223,157]; 390 [212,175,123] vs [212,174,123]. |
| Sweep (5 sizes) | Unchanged harness. | 20/20 right book; exact return, diff 0; ix 0; clip none; 0 errors; 0 network requests; focus returns to the book. |
| Page labels (regression) | Untouched. | Max step 0.18 at 1280 and 0.09 at 390 across the 6 runs; Mocks toggled 4/4 each run. |

Still open: the idle portrait arcs over neighbour covers (above). The blocky shadow is carried over.
Not re-measured this round: fps with the forecast running (up to 9 pose evaluations and about 180
raycasts per frame while tweens run; none when idle). The pop5 runs sampled about 110 frames/s,
probe included.

## Graphics stage 1 (2026-09-27, brief `p5/desk3d-gfx1-brief.md` + owner ruling of the same day)

### Deviations from the brief — read first
- **Nothing was vendored: 0 files, 0 bytes.** The granted jsDelivr download (r147 `examples/js`) was
  refused by the local permission system, twice (loop and single file). No workaround was attempted and
  no local copy exists. Instead two in-house files, plain three core only:
  `post.js` (8,266 B: HDR target, bloom, final pass, FXAA) and `gfx.js` (17,218 B: materials,
  bevelled geometry, IBL room, backdrop room, contact bake, AO strip, motes).
- **SAO: skipped** (no SAOPass without the download). **SMAA: replaced** by hardware MSAA x2 on the HDR
  target (high tier). The AO strip + baked contact shadows carry the grounding SAO would have added.
- **Matte plate: rejected, procedural room used.** `painted-codex-3.png` is 1916x821 and is a desk with
  props, not a room. Spread over a 1280-px-wide wall it gives 1.5 plate px per screen px at DPR 1 and 1.0
  at DPR 1.5, so it fails the 2x rule (needs >= 2). Fallback per the brief: a self-lit shader wall (warm
  lamp pool left, cool window spill right, soft panel seams), merged shelf of spines, window with a night
  pane (moon, tree line), oil lamp flame + additive halo; linear fog set each frame from camera distance.
- **Tier pick in headless is not trustworthy.** Idle frames in headless Chrome pace at ~40 fps whatever
  the CPU throttle (pick read 40.3 at 1x and 39.8 at 6x), so auto always picks medium there. All tier fps
  below are with the tier forced. The pick needs a real laptop/iPad check (Stage 1 debt).
- **No clean old-light vs new-light A/B.** Only whole-chain numbers exist: R6 was 104 fps at 1x.

### What changed
- Renderer: `antialias:false`, ACES + `physicallyCorrectLights`; tone mapping and sRGB applied once, in
  `post.js` FINAL (r147 render targets skip both). Warm grade (1.03, 1.0, 0.95), vignette 0.42, grain 0.022.
- Bloom: bright pass threshold 2.2 with 0.6 knee (exposure-scaled), 3-level separable gaussian, weights
  0.45/0.35/0.30, strength 0.9. Page text never blooms (pages sit far under threshold; contrast below).
- IBL: PMREM of a small warm emissive-panel room (`GFX.envMap`); gold metalness 1, roughness 0.3, env 1.2.
- Lights: SpotLight key 0xffd2a0, 115 cd, angle 0.85, penumbra 0.6, 2048 PCFSoft (bias -0.00025, normalBias
  0.012); warm PointLight fill 0xff9a50, 9 cd, lamp side; cool Directional rim 0x8aa8ff 2.2, raised to
  (2.6, 6, -3.6) so its desk glint falls past the far edge; hemisphere 0.35. The cone was widened from
  0.62 to 0.85 because at 390x844 the open pages fell outside it (Lectures contrast 2.52, now 5.06).
- Contact shadows: per book, baked once (ortho depth from below, blurred twice, 128 px, 1.0 m); plane
  follows the book, scale 1 + 4.5 x lift, opacity 0.85 x max(0.3, 1 - 5.5 x lift). AO strips under rows.
- Form: bevelled covers (`GFX.slab`), rounded fore-edge page block, domed bands with gold hairlines, raised
  gilt frame, bullnose desk front, wood roughness 0.38, leather MeshPhysical with clearcoat + noise scuffs.
- Life: flicker on key, fill, flame, halo and wall glow; 300 GPU motes (150 medium), brighter in the key
  cone; both off under reduced motion.
- Occlusion: `boxHits()` ray vs local bounding box per occluder (inverse matrix cached per `poseGen`).
- Tiers: high pr<=1.5, shadow 2048, MSAA 2, bloom at 1/2, 300 motes · medium pr 1, shadow 1024, FXAA,
  bloom at 1/4, 150 motes · low = medium without bloom or motes, logs `plate fallback — step 4`.
  Pick: median frame time over 1-3 s after start, >= 55 high else medium. Drop: in motion, 12-frame mean
  under floor (high 50, medium 30) for 1 s drops one tier. `wardround.gfxTier` forces a tier.
  Test-only: `index.html#{"msaa":0}` merges into the tier for A/B runs.
- Harness: `lib4.mjs` (dpr, tier, throttle, hash), `stills.mjs`, `fpsvar.mjs`, `owner4.mjs` (R6 shot list).

### Numbers (own runs, headless Chrome, frames in `D:/tmp-desk3d-gfx1/`)
- fps in motion (open ENT/Back/open Peds/Back/open ENT/Back), forced tier:
  - high 1280x800 1x: 53.7 / 54.8 (MSAA 4 was 50.5; MSAA 2 A/B 61.4; MSAA 0 + FXAA 68.0; shadow 1024
    65.5; runs vary about +-8). **Below the >= 60 target.**
  - iPad proxy 1180x820 DPR 2 4x throttle: high 29.2 (min 12-frame 23.2) — **below the 50 floor**, so
    the tier logic drops it; medium there 53.5 (min 36.9); auto picked medium and held 64.6.
  - medium 1280x800 6x throttle: 30.0 (min 25.3) — at the >= 30 target, no margin.
- Label contrast: 1280 high Lectures 6.90, Questions 7.03, Mocks 9.55 · 390 medium DPR 3 5.06 / 5.39 /
  8.73, Neuropsychiatry title 10.48. Page RGB 1280 L [218,201,164] R [219,203,169] (ENDPAPER_K holds).
- R6 regression `check-fix2.mjs` at 1280x800, 1024x768, 820x1180, 390x844, 320x640, 1180x820, 1366x1024,
  1024x1366 (`regress-check.txt`): 32/32 right book, 32/32 closed, return diff 0, ix 0 on every open,
  clip [] everywhere, errs 0, net 0.
- pop5 (5 runs each, auto tier = medium in headless, `run-late.txt`): 1280x800 title step 0.18-0.26
  (R6 0.18, **up to 0.08 worse**), pages step 0.18-0.26, flicker<400ms 0, fsUnequal 0, Mocks 4/4, errs 0;
  390x844 title step 0.09-0.18 (R6 0.09), pages 0.09-0.20, flicker 0, Mocks 4/4; arc overlap only at
  path 0.00 (34-36 frames, R6 36-38, pre-existing portrait layout), 0 with the book off the desk.
- Word sweep 320->1600: 387 sizes, 0 bad, font 14-18.
- Drop test **not demonstrated**: auto at 1180x820 DPR 2 6x throttle picked medium (39.8) and held
  43.7 mean / 31.3 min, never under the 30 floor for 1 s, so no drop fired. Forced tiers never change
  by design. A drop test needs a heavier load or a real slow device.
- Films (libx264 crf 28, 30 fps, R6 shot list, `owner4.mjs`): `owner-1280x800.mp4` (high, 761,490 B,
  19.3 s), `owner-1180x820.mp4` (high, 745,490 B, 18.9 s), `owner-390x844.mp4` (medium, 334,077 B,
  17.5 s); all errs 0, net 0. Films not viewed frame by frame by the drafter.

### Stills
- Idle/open 1280 high: `b1-1280x800-high-idle.png`, `-open.png`; 390 medium: `b2-390x844-medium-*.png`.
- Before/after, same idle camera: before `D:/tmp-desk3d-ref6/s1280x800-1-idle.png` (R6), after
  `b1-1280x800-high-idle.png`.

### Still looks cheap (against `ref-frames/beat-4.png`)
- Leather is procedural noise: no real grain, creases or worn corners — Stage 2 (scanned leather).
- Desk wood grain reads as regular stripes in the lamp sheen — Stage 2 (scanned wood + roughness map).
- Page block is a flat tint with line noise; no deckle or cream variation — Stage 2.
- Wall and shelf are flat and blocky; no depth of field, so the room is not truly out of focus — Stage 3
  (painted backdrop at >= 2x) or a DOF pass in a later stage.
- Window trees are hard sine silhouettes — Stage 3 (painted pane).
- Lamp is a sphere + sprite; no glass chimney or brass — Stage 3 (modelled prop).
- Gold is not tooled (no fillets, no title panel relief) — Stage 3 (bespoke cover art / normal maps).
- Books stand upright on the desk; the reference floats them at angles with warm under-glow — a staging
  decision for the owner, not a graphics fix.
- Motes read as stars against the dark wall outside the beam — Stage 2 tuning (depth-soft sprites).

## Model step 1 — Part A (2026-09-27, brief `p5/desk3d-model1-brief.md`) — DONE, awaiting owner
- **Script** `blender/build_desk.py` (headless bpy, Blender 5.2.1): `blender.exe --background --factory-startup
  --python blender/build_desk.py [-- quick] [-- norender]`. Resets to an empty factory scene, fixed seeds, Cycles
  seed 0, OptiX GPU. `quick` = 1/8 textures to `blender/tex-quick/` + `desk-quick.glb` (smoke test only).
  Full run 343 s end to end. It ran twice from empty (the second after fixes) with 0 errors.
  Helpers: `blender/readcam.mjs` (reads the app's idle/open cameras headless -> `D:/tmp-desk3d-model1/cams.json`),
  `blender/verify_glb.py` (re-imports the glb in a fresh Blender), `blender/probe.py` (env probe),
  `blender/bake-report.json` (every number below, machine-written).
- **Cameras** (from the live app): idle 1280x800 cam (-0.0426, 1.5729, 3.8052) look (-0.0426, 0.6242, 0.0002);
  1180x820 cam (-0.0423, 1.6726, 4.2100); open cam (-0.21, 1.04, 3.18), book 2.372 m away. VFOV 42.
- **Axes**: authored in app coordinates (m, +Y up), converted app (x,y,z) -> Blender (x,-z,y); the exporter's
  +Y-up maps back, so glb coordinates = app coordinates. Book roots sit at the landscape rest pose
  (x = (i-1.5)*1.18, y = REST_Y, z = 0, rotY = (i-1.5)*-0.09). The desk top is y = 0, z -7..5, bullnose r 0.125 at z = 5.

### Node map (glb node names; `{id}` = ent / ophtho / neuro / peds)
```
desk                         mesh, material desk; UVMap (TEXCOORD_0, tiled wood) + UVLight (TEXCOORD_1, lightmap/AO)
{id}.root                    empty = buildBook root (book centre)
  {id}.block                 page block (mesh shared by all four), material pages
  {id}.face                  page-leaf plane, material leaf
  {id}.back                  back board, {id}.leather
  {id}.spine                 half-cylinder spine, {id}.leather
  {id}.bands                 the 4 raised bands (one mesh), {id}.leather
  {id}.bandGilt              the 8 gold hairlines (one mesh, shared), gilt
  {id}.pivot                 empty = cover hinge; app animates pivot.rotation.y
    {id}.front               front board, {id}.leather
    {id}.frame               raised gilt frame + 4 corner bosses (one mesh, shared), gilt
    {id}.endp                endpaper plane (rotY pi, as in the app), leaf
  {id}.paper                 empty at paperPose IN (-0.02, 0.12, -0.015); app sets its pose as today
    {id}.sheet               mocks sheet 0.40 x 0.52 x 0.004, paper
    {id}.seal                wax seal, seal. Origin = app seal position; geometry is already face-on:
                             Part B must NOT apply the app's seal rotation.x = PI/2.
```
Not in the glb (stay app-built): progress `track`/`arc` rings, labels, contact-shadow planes, lights, camera.
Geometry changes vs buildBook: separate `bands`/`bandGilt` meshes replace the app's 4+8 torus meshes
(joined per book, same places); the frame is one mesh instead of 4 strips. 57 nodes, 45 meshes, 38.5k tris.

### Textures (`blender/tex/`, all baked from procedural node trees, no downloads)
| file | size | bytes |
|---|---|---|
| desk-base.jpg | 4096 | 829,152 |
| desk-rough.jpg | 4096 | 1,123,531 |
| desk-normal.png | 4096 | 6,331,142 |
| desk-ao.jpg (UVLight, books present) | 2048 | 80,670 |
| desk-lightmap.png (UVLight, books present, not in glb) | 2048 | 3,873,218 |
| desk-lightmap-nobooks.png (not in glb) | 2048 | 3,708,218 |
| {ent,ophtho,neuro,peds}-leather-base.jpg | 2048 | 380,217 / 382,169 / 355,209 / 354,316 |
| {…}-leather-orm.jpg (R AO, G rough, B 0) | 2048 | 814,639 / 818,014 / 819,782 / 822,184 |
| {…}-leather-normal.png | 2048 | 5,040,420 / 5,035,617 / 5,045,094 / 5,037,545 |
| pages-base.jpg / pages-orm.jpg / pages-normal.png | 2048 | 263,378 / 365,654 / 2,645,518 |
| paper-base.jpg / paper-orm.jpg / paper-normal.png | 1024 | 34,103 / 35,899 / 1,712,257 |
| seal-base.jpg / seal-orm.jpg / seal-normal.png | 1024 | 59,347 / 97,470 / 626,218 |

JPEG q85 colour/rough/AO, PNG normals, as briefed. Desk wood is one seamless 2.36 m tile (4D torus noise,
integer ring counts) repeated on UVMap. Lightmap = Cycles DIFFUSE direct+indirect with colour off, sRGB-encoded
8-bit; linear value = decoded texel x **1.6323** (scale in `bake-report.json`), region app x -7..7, z -7..3.2.

### 2x measurement (texels per CSS px at the nearest the surface ever gets; p10 over visible faces)
Nearest distances from the app's own cameras: book surfaces 2.072 m (open pose, 2.372 m minus 0.3 m depth),
desk 1.832 m (open camera ray at pitch 11 + half-FOV). px/m = H / (2 tan21 d).
| surface | maps | texels/m | 1280x800 | 1180x820 | pass |
|---|---|---|---|---|---|
| desk top | desk-* 4096 | 1736 | 3.05 | 2.98 | yes |
| cover front | leather 2048 | 1094 | 2.17 | 2.12 | yes |
| spine | leather 2048 | 1080 | 2.15 | 2.10 | yes |
| bands | leather 2048 | 1082 | 2.15 | 2.10 | yes |
| board edges | leather 2048 | 1081 | 2.15 | 2.10 | yes |
| page-block edges | pages 2048 | 2273 | 4.52 | 4.41 | yes |
| mocks sheet | paper 1024 | 2245 | 4.46 | 4.36 | yes |
| page leaf / endpaper | paper 1024 | 1198 / 1151 | 2.38 / 2.29 | 2.32 / 2.23 | yes |
| seal | seal 1024 | 9501 | 18.89 | 18.43 | yes (could be 256) |
Leather passes by only ~5-6 %; do not shrink the book atlases. Lightmap/AO exempt; the render shows no stepping.

### Bake and render times (RTX 3050 Laptop, OptiX; every bake far under the 5-min cap)
Desk tile 4096 base/rough/normal 13.9/13.4/14.8 s. Each leather atlas 2048: base 7.5, rough 7.3, normal 7.6,
AO (128 spp, self-only: desk, other books and papers hidden) ~18 s. Pages 2.4/2.4/2.6/AO 10.4 s. Paper and seal
1024 ~1 s each, AO 2.5-3.6 s. Desk AO 2048 256 spp 10.1 s; lightmaps 2048 512 spp 14.6 s (books) / 13.7 s (no
books). Longest single bake 18.8 s. First run of a session adds ~130 s of OptiX kernel compile on the first bake.
Renders: owner 2560x1600 256 spp + OIDN 33.1 s; close-ups 1600x1000 128 spp 12.2 / 11.5 s.

### glb
`blender/desk.glb` **39,898,492 B**: GLB, +Y up, embedded, no Draco/KTX2/meshopt (`extensionsUsed` empty), all
materials single-sided. Verified by `verify_glb.py` in a fresh Blender: 57 nodes, 45 meshes, 10 materials,
26 images at the sizes above, desk keeps 2 UV sets, ent hierarchy parents as mapped. Of the payload, 31.5 MB is
the PNG normal maps, 7.7 MB the JPEGs. The exporter re-encodes any image read through a Separate Color node as
PNG (62.7 MB first export), so the script swaps the baked files back into the glb after export.
Duplicate: `paper-orm` is embedded twice (leaf has no occlusion, the exporter splits it), 36 KB.
**Part B budget warning:** the 16 MB page-payload line is passed ~2.5x, and base64 adds a third. Cheapest cuts, not
made here because the brief fixes the formats: one shared leather normal for all four books (-15 MB), normals as
JPEG q90 (brief says PNG), seal to 256. Owner/parent call.

### Renders
`D:/tmp-desk3d-model1/owner-test-render.png` (2560x1600, idle 1280x800 camera, the app's key/fill/rim, papers
hidden, view transform AgX: Blender 5.2 lists no ACES, the app uses ACES). Builder-only close-ups:
`closeup-corner.png`, `closeup-seal.png` (ENT sheet pulled to OUT). Diagnostic run log `progress.log`.

### Still looks cheap (against beat-4.png)
- Desk grain reads as regular wavy horizontal lines across the whole width, too even and too cartoon; no plank
  seams visible at idle distance; no wear patches visible; the sheen is one flat gloss.
- Leather reads as smooth plastic at idle distance: pebble grain only shows in close-up, and the mottling shows as
  small pale blotches like stains. No sheen variation, no darkened edges; corner wear too faint to see.
- Covers are flat boards; beat-4 has padded, domed boards and a proud gilt frame. The frame is the app's 11 mm
  strip and reads as a thin wire; the corner fillets and bosses only read close up.
- The spine reads as a plain cylinder with thin rings; beat-4 has fat raised bands and a gilt-tooled spine.
- Page block barely shows (only a thin top line) because the books stand face-on.
- The mocks sheet is plain flat card; the seal is a good blob but has a smooth, even face.
- Wear patches in the wood tile repeat every 1.18 m and at z = +/-2.36, and they and the lightmap book shadows are
  valid only for the landscape rest layout; they stay behind when a book moves (the no-books lightmap is the
  fallback).
- Empty black void behind the desk (no room yet, by brief).

### Deviations from the brief
- The lightmap is a separate PNG, not in the glb: glTF has no lightmap slot. Part B loads it as `lightMap`
  on uv2 = TEXCOORD_1, and must multiply by the scale above. r147 lightMap is additive irradiance.
- The view transform is AgX, not ACES (not offered by this Blender).
- The glb is 39.9 MB (see the budget warning above).
- Joined band/hairline/frame meshes; the seal is authored face-on (see the node map).

## Max glTF test (2026-09-27)

Verdict: **PARTIAL PASS**. Names, hierarchy, base-colour/roughness/normal texture slots and scale all
survive both importers. **Animation does not export** via the scripted path — a real gap, not yet
worked around.

Setup: 3ds Max 2024 (26.0.0.940), `3dsmaxbatch.exe`, exporter class `GLTF_Export` (only creatable via
`exportFile <path> #noPrompt using:GLTF_Export`; `GLTF_Export()` itself is "Not creatable" and no
maxscript-exposed options object was found — `GLTFExporter` global exists but is `UndefinedClass`, and
`apropos`/`getPropNames globalVars` found nothing gltf-specific). Export ran with **exporter defaults
only** — no option was set explicitly.

Test scene: `book_root` (Dummy) parenting `pages` (Box, Standardmaterial plain colour) and `cover`
(ChamferBox, PhysicalMaterial with `base_color_map` / `Roughness_Map` / `bump_map` via a `Normal_Bump`
map holding `normal_map`), pivot on `cover` offset to the spine edge (hinge), 2-key rotation (frame
0 -> 30, confirmed `numKeys` = 2 on the `Euler_XYZ` controller before export).

Blender 5.2.1 (`import_scene.gltf`) findings:
- Hierarchy: `book_root`'s own name is **lost** — imported as an unnamed Empty (`Node_1`); a **second**
  unnamed Empty (`Node_3`) appears above `cover`, inserted by the exporter to carry the pivot/hinge
  offset. `pages` and `cover` mesh names survive.
- Materials: `cover_mat` has 3 image textures wired in (base colour PNG, a combined
  metallic-roughness PNG the exporter repacked, and the normal PNG via a Normal Map node) — all three
  slots present.
- Scale: `scene_unit_scale` 1.0; cover dimensions 3.81 x 0.20 x 5.08 m for a 200x8x150 mm box — Max cm
  default became metres 1:1 numerically (a 10x unit mismatch, not yet reconciled against the app's
  own unit convention).
- Animation: **`bpy.data.actions` is empty** — no keyframes imported.

three r147 (classic `THREE.GLTFLoader`, `.parse()` from an embedded base64 ArrayBuffer, headless
Chrome `--dump-dom`, 0 console errors) findings:
- Scene graph: `Group` -> unnamed `Object3D` -> `pages` (Mesh) and a second unnamed `Object3D` ->
  `cover` (Mesh) — same lost-name/extra-node shape as Blender.
- `cover.material` is `MeshStandardMaterial` with `map`, `roughnessMap`, `metalnessMap` and
  `normalMap` all truthy; `pages.material` is `MeshStandardMaterial` with no maps, as authored.
- `gltf.animations.length` = **0**, confirmed against the raw glb JSON chunk directly
  (`"animations": null` in both the full test export and a second minimal one-mesh export built solely
  to isolate this — same result, so it is not the hinge/pivot node causing it).
- Bounding box read back matches the Blender dimensions.

Files: `D:/tmp-max-gltf/inspect.ms`, `build_export.ms`, `probe2.ms`, `make_textures.py`,
`blender_check.py`, `check.html`, `max-test.glb`, `anim-test.glb`, `blender-report.json`,
`inspect-out.txt`, `build-out.txt`, `probe2-out.txt`, `dump3.html`.

Unverified / not chased further (budget): whether a Max-side MAXScript route exists to force
"Export Animations" on without opening the GUI (a saved exporter-preset file loaded by path is the
likely next thing to try, not attempted here); whether the lost dummy name and extra pivot-offset
node can be avoided by not offsetting the pivot in script, or by an exporter option; the 10x unit
scale needs reconciling against the app's own metre convention before this feeds the real desk scene.
