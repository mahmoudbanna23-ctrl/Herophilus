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
