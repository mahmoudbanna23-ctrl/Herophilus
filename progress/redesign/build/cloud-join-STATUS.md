# cloud-join STATUS - DONE 2026-10-14 (builder pass, ~35 tool calls)
- app/assets/city/shot2-dark.mp4 (1350x900, crf19, 1,215,941 bytes, 81 frames, 3.375 s)
- app/js/city.js: eligible() -> false | 'land' | 'lead'; startFilm(box, withLead); makeCover() (Web Animations API); header comment updated
- app/css/city.css: .city-cover, .city-film.queued, reduced-motion + calm-view hides
- cover base rgb: landing first-frame mean (80,104,144) = #50688f, 5 radial blotches + linear gradient (cover at full measured ~ (82,101,140) mean)
- boot-check: 0 console errors. Harness D:\scratch 2026\city-join\join.js (scenarios zero/returning/reduced/reduced0/skip/skipcover/rerender), analyze.js
- Results: see final report from the builder (seam max 8.87 raw / 3.81 normalised vs crossfade 37; cover opacity 1 at swap)
- Not done: upright/phone runs (eligibility unchanged, not re-recorded); dawn/shot 1/scroll are later slices
