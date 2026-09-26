# REFUTE round 2: desk3d step 1 (2026-09-26)

**Verdict: FAIL.** 3 of 7 round-1 majors closed (1, 2, 3; 6 closed for idle). Majors 4, 5, 7 open. Five new majors, one of them a regression.

Evidence: `D:/tmp-desk3d-ref2/`. Harness: `h.mjs`, `help.mjs`, `sizes.mjs`, `misc.mjs`. All input was real CDP `Input.dispatchMouseEvent` / `dispatchKeyEvent`. Results: `s<W>x<H>-out.json`, `misc.json`, per-frame transforms `s<W>x<H>-rec.json`. Films (libx264, crf 28, 30 fps): `film-1280x800.mp4`, `film-390x844.mp4`, `film-320x640.mp4`.

## Confirmed (holding)
- 0 console errors and 0 non-`file:` requests in all 11 sessions that logged them. `node --check` ok. Bytes: html 1,499; app.js 23,534; three 607,784.
- fps, open animation, 3 s. My own rAF counter vs the in-loop counter: 1280 1x 117.9 / 119.5, 6x 81.0 / 77.9; 390 1x 123.3 / 120.0, 6x 80.6 / 77.0. Heap 6.5 to 12.2 MB (CDP). The builder's 118.09 / 78.08 is reproduced.
- Major 1 closed: a real mouse click on Lectures, Questions and Mocks logs `lectures:` / `questions:` / `mocks:` at all 5 sizes.
- Major 2 closed: Tab visits only visible targets (idle: 4 books; open: lect, quest, mocks, Back).
- Major 3 closed: an outside click reaches the canvas and closes the book.
- No pop: per-frame deltas track the easing peak velocity at every size (`*-rec.json`).
- Esc, the Back button (mouse) and click-outside all return to the exact pose at 1280 and 1024 (diff 0).
- Reduced motion: no hover lift, open/close done in 60 ms, cursor = pointer. The focus ring shows.
- Hinge direction fixed: the cover swings on the spine toward the viewer and lies flat on the left (`s1280x800-3-mid-1350.png`).

## Majors
1. **REGRESSION: exact return fails in portrait.** At 820x1180, 390x844 and 320x640 the camera comes back to y=1.7, not the portrait y=3.1 (snap diff 1.4; `s390x844-out.json` snap0cam / snap1cam).
   - Cause: `app.js:387`, `app.js:390` use `HOME_CAM_Y` / `HOME_LOOK_Y`; portrait values are set at `app.js:89`.
   - Fix: store the `camY` / `lookY` that `resize()` picked and return to those.
2. **In portrait, a click on a cover opens the wrong book.** Clicking the centre of ENT's cover opens Ophthalmology; clicking Ophthalmology's opens Pediatrics (`misc.json` hit820 / hit390 / hit320). The sweep's ENT click opened Neuropsychiatry at 820 and 320 (`s820x1180-4-open-ent.png`).
   - Cause: the hit box is the root's projected world AABB, arc included (`app.js:474`), and later buttons stack on top.
   - Fix: project the front-cover face corners only. Order the buttons by depth.
3. **Clipping in the open state.** At 390 the Pediatrics book is cut at the right edge (`s390x844-4-open-ent.png`). At 320 Neuropsychiatry and its arc are cut at the left (`s320x640-12-open-peds.png`). At 820 ENT and Ophthalmology are cut at the right (`s820x1180-4-open-ent.png`).
   - Cause: `camCloseTargetFor` (`app.js:341-348`).
   - Fix: frame the open book alone, or dim / push back the others. Test all 5 sizes in the open state.
4. **The open cover passes through a neighbouring book.** At 320 the Pediatrics cover swings into the Ophthalmology book (`s320x640-12-open-peds.png`).
   - Cause: `PORTRAIT_XZ` (`app.js:311-314`) combined with the forward move `posZ 1.05` (`app.js:357`).
   - Fix: bring the book to a clear spot in front of the stack before the cover swings.
5. **Round-1 major 4 is still open: there is no two-page spread.** Lectures and Questions are still two halves of the one right-hand page face (`app.js:204-215`). The inner face of the swung cover is bare leather (`app.js:253-254`, mats[5]). See `s1280x800-4-open-ent.png`.
   - Fix: put Lectures on the cover's inner face (a flyleaf plane on the pivot) and Questions on the page block.
6. **Round-1 major 5 is still open: the Mocks paper is not tucked, and it is unreadable.**
   - At rest in the open book the whole sheet lies on top of the pages, label and seal included. It is not a corner peeking out. It sits at z 0.072, in front of the pages at 0.070 (`app.js:241`, `app.js:246`).
   - The Mocks label is 5.3 CSS px at 1280 and 2.9 at 390 (`s1280x800-8-mocks-out.png`).
   - The Mocks hit box covers the upper Lectures area (`lectUpper` = mocksBtn).
   - Fix: put the sheet between the leaves (z below the page face) so that only the corner and seal clear the top edge. Enlarge the label.
7. **The wax seal shows through every closed cover as a red dot** (`s1280x800-1-idle.png`). The seal is at z 0.081 and the closed cover's front face at 0.080 (`app.js:238`).
   - Fix: seal z must be at most 0.0755, or hide the seal while the book is closed.
8. **Round-1 major 7 legibility is still open.** On-screen em size (projected):

   | Size | Cover titles | Page labels | Mocks |
   |---|---|---|---|
   | 390 | 5.2–6.5 px | 5.4 px | 2.9 px |
   | 320 | 4.2–5.2 px | 3.9 px | 2.1 px |
   | 1280 | 11.8–13.3 px | 9.8 px | — |

   Spec minimum is about 14 px.
   - The camera moves *away* on open: z 3.745 to 5.43, with the book 1.05 forward (`app.js:342-347`). The builder's "all titles legible at 390/320" is refuted (`s390x844-1-idle.png`, `s320x640-1-idle.png`).
   - Fix: a real close-up on open. Larger text on the textures (`app.js:146`, `app.js:154`).
9. **Portrait black bands are still about 64% of the frame at 390** (content spans rows ~255–555 of 844). This is a must-land item, and the builder flagged it as partial.
10. **No settle at rest.** Book lift/return, cover and camera all use easeOutCubic / easeInOutCubic with no overshoot (`app.js:356-359`, `app.js:372`, `app.js:384`, `app.js:393-395`). Only the paper uses easeOutBack (`app.js:414`).

## Minors
- Focus drops to `<body>` after close (`app.js:428-432`). Return it to the book's button.
- ENT focus ring is clipped off the left edge at 1280 (rect x=-157; `focus-ring-ent-1280.png`).
- Arcs are still big C shapes cutting into the cover tops. Thin light lines on the desk between books persist.
- Premium read: the open book floats 0.5 above the desk with no shadow link. Lift, camera and cover run as three strictly serial beats (1.8 s), which reads mechanical. Overlap the beats.
