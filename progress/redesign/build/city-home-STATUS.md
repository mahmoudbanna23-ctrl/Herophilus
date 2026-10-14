# City home screen (slice 3, job 1 of 3) - status 2026-10-14

State: BUILT and verified by script. Not yet seen by a looker (screenshots in `D:\scratch 2026\city-home\home-*.png`).

## Files
- `app/js/city.js` (new): `cityStageHTML()` markup, mount, label fit, daily landing film. Wraps `syncFilm` (teardown) and `inkMarkChips` (mount).
- `app/css/city.css` (new): stage box (cover, top anchored, plate aspect), mist x2, glow, hot-spots, upright variant, reduced motion.
- `app/js/render.js`: `vHome` pushes `cityItems`, ends with the city stage + `.city-below` (old dashboard bits under it). Old grid is the fallback when `cityStageHTML` is missing.
- `app/index.html`: hall.js script removed; `rooms.css`, `warm.css`, `type.css`, `city.css` linked statically (same order hall.js used); `rooms.js` + `city.js` scripts before `boot.js`.
- `app/assets/city/`: `city-dark.jpg` 455.9K, `city-dark-tall.jpg` 499.0K, `landing-dark.mp4` 873.7K (81 frames, 720x480).

## Findings / decisions
- `hall.css` is NOT linked any more (hall-only rules; grep found no outside use). hall.js, hall.css untouched on disk.
- Ambient video block NOT removed: it serves every browse view (rooms.js turns the video off), not home-only. Home hides `.ambient` by CSS (`body.city-on[data-view="home"] .ambient`).
- warm.css makes the rail a 52px strip + 238px transparent box, top bar height 0 (floating chips): the stage fills the whole window; labels clear the strip (`fitLabels`).
- Film skipped in upright windows (landscape film vs tall still); only landscape >= 768 wide.
- Headless Chrome `--window-size` shrinks the viewport (chrome UI) and has a ~500px min width: exact-size metrics come from an iframe wrapper (`D:\scratch 2026\city-home\wrap-metrics.js`).
- Film tested over CDP (`film-test.js`): plays ~3.4 s, mist hidden while playing, click on a hot-spot during film only skips (view stays home), key skips, back-nav no film, reduced motion no film.

## Left
- Looker pass on the four screenshots (label legibility, glow placement 21.1%/4.7% landscape, 34.3%/4.3% upright, mist look).
- Light theme still shows the dark plate (dawn set is slice 7).
- Delete of hall.js / hall.css / warm.css pending owner approval.

## Fix round 1 (2026-10-14, after refuter pass)
Three defects fixed, only `app/js/city.js` and `app/css/city.css` touched. Screenshots `D:\scratch 2026\city-home\home-*-r1.png` (same `shoot.js` method, copy `shoot-r1.js`); not yet seen by a looker.
1. Reduced motion: `.city-glow{display:none}` (was opacity .6). Mist was already `display:none`; both confirmed computed `none` under emulated reduce.
2. Re-render mid-film: film now lives in a module-level `film` handle. `syncFilm` wrapper parks the same `<video>` in `<body>` (still in the document, so no pause) when the next view is home; `mount()` sets it into the new `.city-box` in the same task and re-applies `playing`/`inert`. Non-home next view, no profile, or no box to mount into: `film.destroy()`. A `queueMicrotask` in `park()` destroys it if nothing adopts it (covers the gate's own `syncFilm()` calls). No new listeners or timers per render. Known limit: a re-render during the final 400 ms fade-out makes the fade jump to its end (the still is nearly identical).
3. Phone labels/stage: `@media (max-width:767.98px) and (max-aspect-ratio:1/1)` makes the box 100% wide and the stage `max(--city-h, 150vw)` tall with the plate's bottom-row sea colour (`#021a34`-`#001429` gradient) below the painting. `.city-tag` is `width:max-content; min-width:min-content` so a long name cannot spill out of its label. `fitLabels` no longer clamps a label to its building's box; the window always wins.
Checks (CDP, exact viewport, `D:\scratch 2026\city-home\r1-test.js`): all 4 labels inside the viewport with no text overflow at 1440x900, 1180x820, 820x1180, 390x844, 360x640, 320x568, 700x420. Film: 3 forced `render()` calls mid-film kept the same element playing (pause events 0, frames 20 -> 81 continuous, ended once). Navigate away mid-film: 0 film videos at once. Reduced motion with answers: no film, glow and both mists `none`. boot-check: 0 errors, QUESTIONS 7477, THEORY 153, MODULES 4, chapters 162.
