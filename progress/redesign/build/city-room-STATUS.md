# Lighthouse room (slice 3, job 2 of 3) - status 2026-10-14

State: BUILT and TESTED 2026-10-14. boot-check 0 errors (7477 / 153 / 4 / 162). CDP test `D:\scratch 2026\city-room\room-test.js`: 50 pass, 1 fail (shelf rows: `THEORY_LOCKED=true` in modules.js, so the sheet shows the honest locked state; lecture rows untestable until unlocked). Screenshots in the same folder, sizes verified.

## Files
- `app/js/room.js` (new): `roomStageHTML(m)` markup, four ledger builders, sheet open/close, iris, label fit. Wraps `syncFilm` and `inkMarkChips` like city.js. Only `ophtho` has a room (`ROOMS`).
- `app/css/ui.css` (new): shared `sheet`, `row`, `rule`, `act` (+ `.sheet-*`, `.row-*` pieces). Job 3 adds stage, folio, plaque.
- `app/css/city.css`: appended "THE ROOM" block (`.rm-*`), after the city rules.
- `app/js/render.js`: `vModule` asks `roomStageHTML(m)` first; '' = old view untouched.
- `app/index.html`: `css/ui.css` link, `js/room.js` script (after city.js).
- `app/assets/city/room-ophtho-dark.jpg`: 329,868 bytes (322.1K), 1536x1024, q85 via System.Drawing.

## Decisions
- Class prefix `rm-` because `.room` belongs to rooms.js (old background layer).
- Iris only from a tap on the city's lighthouse (capture click records its centre); a copy of the city is kept as `.rm-ghost` under the growing circle; no ghost/iris under reduced motion or when entering from the rail.
- Sheet clip-path circle starts at the object's centre clamped into the sheet panel.
- Source-filter chips re-render the page; an open sheet is re-opened (no animation) and focus restored via `data-keep`.
- Timed exam rows call `roomMock(id,n)`: sets `mockMods` to this subject for one `runMock` call, then restores it.
- Overlaps in the given boxes: desk over shelf foot, chest over sand-glass plinth, by DOM order (no coordinates changed).

## Left
- Looker pass on screenshots; light theme shows the dark plate (slice 7).
- `boot-check` counts `.ch-row`, so it reads ophtho as 0 chapter rows now (the module view is the room).

## Fix round 1 (2026-10-14)
Test: `D:\scratch 2026\city-room\room-test-r1.js` (builder's 50 + D1-D4 + size/guide/menu/ring checks): 119 pass, 1 fail (shelf rows, `THEORY_LOCKED`). boot-check 0 errors, QUESTIONS 7477. Screenshots `*-r1.png` in the same folder, 8 files, pixel sizes checked by the test.
- D1 `room.js` Escape handler: returns early when `#modalBg.show`, so boot.js closes the dialog only. Test stubs `hasSavedMock`/`offerMockResume` to open a dialog.
- D2 Tab: kept `aria-modal`, added a Tab loop (capture keydown) between the sheet's first and last control; does nothing while a dialog is up. (Simpler than reworking the sheet into a non-modal panel; honest because the rest of the room is already `inert`.)
- D3 `keyOf`/`findByKey` + `reopen.scroll`: a re-render with a sheet open keeps `.sheet-body` scrollTop and the focused control (data-keep, close, or its onclick text). Menu-opened sheets reopen from the menu row.
- D4 iris `transitionend` handler checks `e.target===inn && propertyName==='clip-path'`; listener removed in `end()`.
- 5 guide: `city.css` "the guide" block. Landscape: `#clep` anchored to the plate's floor box 37,60,72,96 through four body vars (`--g-r --g-b --g-w --g-h`) set by `placeGuide()` in `room.js` (small JS addition, a pure-CSS anchor to the plate is not possible); bubble width/height capped to the floor. Upright: corner, tools stacked above her, bubble hidden. Sheet open: `body.rm-on:has(.rm-sheet) .clep{visibility:hidden}`.
- 6 desk label `la:'t'`.
- 7 focus ring: `outline:none` + `::after` border inside the box, pulled in by `--rg-*` set in `fitLabels()`.
- 8 `.rm-menu` (four `row` + `act`, always in DOM, `display:none` in landscape so no eight stops; upright spots get `tabindex=-1`, still tappable). Sheet already opens below the painting in upright.
- 9 phones (<768): `.rm-tag{display:none}`; spots carry `aria-label`.
