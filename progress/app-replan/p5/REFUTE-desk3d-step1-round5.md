# REFUTE round 5: desk3d step 1 (2026-09-27)

**Verdict: FAIL.** 2 majors, 4 minors. The round-4 major (page labels pop) is closed. The fix for the
round-4 ghost-title minor created a new one-frame vanish on titles, and the arc in front of the
pulled-out Mocks sheet fails the premium bar.

Evidence: `D:/tmp-desk3d-ref5/`. All input real CDP (`Input.dispatchMouseEvent` / `dispatchKeyEvent`),
fresh `--user-data-dir` per Chrome, no path containing a double dash. Harness = round-4 scripts
re-pointed (`lib3.mjs`, `pop4.mjs` now takes a run tag, `sweep-base.mjs`, `wb.mjs`, `clipvis.mjs`,
`contrast.mjs`, `owner.mjs`).

## Builder claims, re-measured
| Claim | Result |
|---|---|
| Page-label fade step <= 0.18 (1280), 0.09 (390) | **Holds.** 3 runs each size (`pop4-*-r1..3.json`): Lectures/Questions/Mocks max step 0.16-0.18 at 1280, 0.09 at 390. No hitch seen in 6 runs. |
| Mocks label rides the sheet | **Holds.** 0 jump events > 40 px for `mocksBtn` in 6 runs. |
| Mocks slides UP | **Holds** (`sheet-1280-mocks.png`). |
| Mocks contrast 8.76-9.67 | **Holds**, rendered pixels: 8.76-9.67 across 5 sizes. All labels >= 5.51 (320), >= 8.2 at 1280/1024. |
| Pages within 5-7% | Holds as measured by the builder; the difference is still visible at 390 (`pair-390-1280.png`, left panel). Minor. |
| Back-row titles cut on occlusion | Cut happens, but it is a pop. Major 1. |

## Regression (5 sizes, real clicks) - holding
- 20/20 opened the clicked book. Esc, Back and click-outside all return with diff 0. Focus returns to the book. ix 0 hit frames. Band 0.000.
- Clip: every open-state label flagged off-screen is a faded title (`gone`, visibility hidden, opacity 0; `clipvis.mjs`).
- Word sweep 320-1600 step 10 x 640/844/1180 = 387 sizes. 0 multi-line, 0 clipped, 0 hidden. Sizes 14-22.
- 0 errors, 0 network requests in every session.

## Majors
1. **Titles vanish in one frame, still 70% uncovered, then return and vanish again.** This breaks fix-3 decision 3 ("never a one-frame vanish or return").
   - `desk3d/app.js:609-610` (`setFade(..., occ)` puts `snap` on the title when `plateClear` sees any plate corner covered) and `:585-588`.
   - Frames: `strip-1280-ophtho-cut.png`. f125 shows the whole "Ophthalmology" title. At f126, ENT covers only the left ~30% of that title and the whole title is already gone.
   - `pop4-1280x800-r1.json`, ophtho title: 1->0 at t=1048, fades back 1273-1409, 1->0 again at 1451. That is a blink, visible in `sheet-1280-ghost.png` (row 3, cols 3-4).
   - 6 snaps per open/Mocks/Back sequence at 1280 and 2 at 390, the same in all 3 runs.
   - Fix: clip the title to its uncovered part (a `clip-path` from the occluder's projected edge), or start the 150 ms fade early so it has finished by the time of contact. Never add `snap`.
2. **The gold arc floats in front of the pulled-out Mocks sheet, across its face.** It reads as a stain or stamp on the paper the user just pulled out.
   - `app.js:285-287`: the sheet sits at z -0.015 behind the arc (`:208-217`), and the comment there says this is deliberate.
   - Frames: `sheet-1280-mocks.png` rows 2-4, `c390x844-mocks-ent-on.png` (left panel of `pair-390-1280.png`).
   - Fix: hide or fade the open book's arc while the sheet is out, or raise the arc above the sheet's top.

## Minors
- **Unequal title sizes:** 22/16/16/22 at 1280 and 21/14/14/14 at 390, and unequal at all 387 sweep sizes, so ENT and Pediatrics read as more important (`c1280x800-idle-on.png`).
  - `app.js:606` follows fix-3 decision 1 to the letter, so this is not a defect against the brief.
  - **Escalate:** premium look suggests one shared size, the minimum of the four fits.
- **Endpaper vs page tone:** still visibly lighter at 390 (`app.js:115`).
- **Blocky near-black shadow of ENT on the Ophthalmology cover during the open:** `sheet-1280-ghost.png` rows 2-3. Carried over.
- **Portrait arcs overlap neighbour titles:** for example, the ENT arc over its own plate at 390 in Peds-open (`pair-390-1280.png`, middle panel). Carried over.

## Owner films (final build, real input, 0 errors, 0 network)
- `D:/tmp-desk3d-ref5/owner-1280x800.mp4`: 17.4 s.
- `D:/tmp-desk3d-ref5/owner-390x844.mp4`: 17.1 s.
- Both libx264 crf 28 at 30 fps.
