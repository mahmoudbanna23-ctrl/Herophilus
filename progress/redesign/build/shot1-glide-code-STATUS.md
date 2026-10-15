# Shot 1 glide code - status: DONE (2026-10-15)

- Assets: app/assets/city/shot1-base.jpg; shot1-near.webp = shot1-near-d.webp (version d swap per main chat; 1536x1024).
- app/js/city.js: startFilm rewritten as ordered stage chain (glide, shot 2, landing); makeGlide added; S1_* consts; header "interim" comment rewritten.
- app/css/city.css: .city-s1 rules; hidden under reduced motion.
- Harness: D:/scratch 2026/city-join/join.js (scenarios shot1, noimg, skip1; W/H env; FORCE=1). Shots: D:/scratch 2026/city-join/shot1/
- Results: all sizes 0 console errors; stages order shot1, shot2, landing at 1440x900 and 1180x820; noimg falls back to shot2, landing; skip during shot 1 ends on home, hot-spot opens module; rerender mid-glide keeps same elements; boot-check 0 errors.
- Upright (820x1180) and narrow (390x844): live gate (upright() / width<768) refuses the whole intro, unchanged. Looks at those sizes are from FORCE=1 scratch copy only.

## Fix round (2026-10-15)
- Drop timer bug fixed: city.js clears the 1 s timer as soon as the first video can play through; only S1_DEADLINE (4 s) decides shot 1 after that.
- Camera: base 1.00 -> 1.16 with 5% downward tilt; near cloud starts at translateY(35%) (css + js). 5 s and easing shape kept.
- Cover: unchanged vs git HEAD (the .city-cover css rules and makeCover are not in the diff). The flat slate wash is today's cover, only now it rises over shot 1 instead of shot 2. Not redesigned.
- Harness: join.js got skip1 handler, slow scenario (DELAY env, Fetch interception), SHOTDIR env. Shots: D:/scratch 2026/city-join/shot1b/ (1440x900, 1180x820).
- Results: slow 2000 ms -> shot1, shot2, landing all run; slow 4500 ms -> shot1 skipped, shot2 + landing run; noimg same fallback; skip, skip1 end on home and hot-spot opens module; zero full chain; 0 console errors everywhere; boot-check 0 errors.
