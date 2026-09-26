# REFUTE round 6: desk3d step 1 (2026-09-27)

**Verdict: PASS, with 4 minors and 1 escalation.** Both round-5 majors are closed. Nothing below breaks a
binding decision except one literal 2-frame edge (minor 2). The escalation is about fps: the brief sets no fps floor.

Evidence is in `D:/tmp-desk3d-ref6/`.
- All input is real CDP (`Input.dispatchMouseEvent`).
- Each Chrome got a fresh `--user-data-dir`, and no path contains a double dash.
- Harness: the round-5 scripts, re-pointed. New scripts:
  - `pop6.mjs`: per-frame title opacity, `gone` toggles, size and `__arcOverlap`, all four books.
  - `fps6.mjs`: the app's own in-loop `__fps.samples`, sampled during tweens.
  - `prof6.mjs`: CPU profile.
  - `lap6.mjs`: label-vs-label overlap.
  - `strip6.mjs`: contact strips of the title fades.

## Builder claims, re-measured
| Claim | Result |
|---|---|
| Title max opacity step 0.24 / 0.13 | **Better than claimed.** Titles max 0.18 at 1280 and 0.09 at 390, over 3 runs each (`pop6-*-r1..3.json`). |
| 0 flicker | **Holds.** 0 hide-show-hide within 400 ms and 0 opacity down-up-down, in 6 runs x 4 books. Toggles are identical across runs. |
| Fade ends at contact | **Holds visually.** In `sheet-fade-1280.png`, each fade is complete by +150 ms and the occluder arrives at about +225 ms. No title is cut mid-plate. |
| Arc: 0 overlap once the book leaves the desk | **Holds at 1280:** 0 frames. At 390: 38 frames per run, 36 at path 0.00 and **2 at path 0.01** (minor 2). No arc crosses the pulled-out sheet (`sheet-1280.png`, `sheet-390.png`). |
| One shared size | **Holds.** 0 unequal frames in 7 runs. Range 16-19 at 1280 and 14 at 390. Idle sizes at the 5 sizes: 16, 16, 16, 14, 14. |
| Regression | **Holds.** 20/20 right book, return diff 0, ix 0 hits, band 0.000, focus returns, 0 errors, 0 network (`sweep.log`). Every off-screen label is a faded title (clipvis). Word sweep: 387 sizes, 0 broken, 0 hidden. |

## fps (1280, in-loop counter)
- Settled, round-5 method (`film3 fps`): 104.0 / 103.3 at 1x (round 5: 108.3); **74.8 / 71.1 at 6x** (round 5: 82.8; earlier: 92).
- During the open, Mocks and close tweens (`fps6`):
  - At 1x: 106-107.
  - **At 6x: 51.5 / 52.6.** Open and close run at 44-48, p95 33 ms, worst frame 58 ms.
- Profile at 6x during the tweens: `forecastVis` takes **33.5%** of busy main-thread time (`titleVis` 24.6%, `plateClear` 14.1%).
- **Escalate:** set a 6x floor.
- Fix hint (`app.js:693-722`):
  - Forecast every 2nd frame.
  - Skip `plateClear` when `v.on` is false.
  - Thin `FORE` to 5 points.

## Minors
1. **At 320x640 the Neuropsychiatry title and the Mocks label overlap by 4 px** while Mocks is out (ENT, Ophthalmology and Pediatrics opened). This is new. Both are tap targets.
   - Code: `app.js:638`, the Mocks anchor at the top-left of the sheet.
   - Frame: `zoom-390-arcs.png`, right panel (from `s320x640-5-mocks-out-ent.png`).
   - Fix: nudge the Mocks anchor right, or fade a title whose rect meets a page label.
2. **Portrait: the Neuropsychiatry arc crosses the ENT cover, through the ENT title plate,** at the Peds-open rest pose and at idle. It also crosses the lifting book in 2 frames per run at path 0.01. Carried over.
   - Code: `app.js:216-220`. Only the open book's arc rewinds (`:450`).
   - Frames: `zoom-390-arcs.png` left and middle; `film-390-tile.png` row 2, col 5.
   - Fix: in portrait, rewind or fade any arc whose projection meets another book's cover.
3. **Blocky shadow on the neighbour covers during open and close.** Carried over.
   - Code: `app.js:92`, `mapSize` 1024.
   - Frames: `sheet-1280.png` top-right; `film-1280-tile.png` row 2 col 4 and row 3 col 2.
4. **Page-label step 0.26, once in 3 runs at 1280** (`lectBtn`, `mocksBtn`), against 0.18 in round 5. This is a frame hitch; the label still fades. Tied to the fps drop above.

## Owner films (final build, real input, 0 errors, 0 network)
`D:/tmp-desk3d-ref6/owner-1280x800.mp4` (17.4 s) and `owner-390x844.mp4` (17.1 s), both libx264 crf 28 at 30 fps.
Frame tiles: `film-1280-tile.png`, `film-390-tile.png`.
