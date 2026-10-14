# city-dash refute (slice 4b) - 2026-10-14

VERDICT: PASS with 1 medium defect (dead Clepsydra "?"/body click on home) and 2 minor notes.

1. Boot + harness: PASS. boot-check 0 console errors (QUESTIONS 7477, 4 modules).
   dash.js re-run by me: part 30/30, due 31/31 (1440x900 dark; 390x844; 820x1180; 1440x900 light),
   new 35/35, newfilm 37/37. EXPECT block (dash.js:44-64) recomputes the OLD values independently
   from dueNow/qsInModule/accuracy/isAnswered/buildSchedule/openModules/chapterName; it does not
   read new-code output. Per-subject due summed == dueNow().length. Real comparison, not self-echo.
2. Hard limits: PASS. Diff touches only render.js, city.js, city.css. No localStorage/setItem in
   the diff. New @keyframes = cityFlame (opacity+transform only); only new transition = opacity on
   .city-tag::after. No translateY, no hover lift, no pill radii (new buttons border-radius:0), no emoji.
   Flicker measured: cityFlame running on the resting city (opacity 0.77 -> 0.95 over 0.7s);
   none under prefers-reduced-motion, none during the film (.playing), none on calm views (css 240-241).
3. Film/cover section: PASS. Hunks are plaque/plate/mount only. Additive lines near the film code:
   `if(view.name!=='home') welcome.on=false` inside the syncFilm wrap (city.js ~594), armSettle after
   the film-offer block. No film logic changed.
4. Welcome: PASS. 9 lines compared programmatically to the brief: all verbatim in city.js. Plays
   only at done==0 (and after the film ends: newfilm test). Next x9, Skip, Escape, plate click,
   About replay all pass. Lines 5-8 glow the right plaque only. No replay on re-render.
5. Below-block reachability: PASS. Continue, On today (-> schedule), review (-> startQuiz of that
   subject's due ids) all open a non-home view in the harness. Reached through "More (n of m)".
6. Light theme: PASS. Plaques/plate use fixed dark carved colours like the existing .city-tag
   (painting is theme-independent); screenshot due-1440x900-light.png looks identical and legible.
   Saved-mock .btn.sec inside the plate keeps its own token bg (rgb 15,22,38 / text 242,232,213).
7. Deviations:
   - "More" button: ACCEPT. Needed so continue + today + reviews all stay reachable.
   - Question count under the term name: ACCEPT.
   - Her own bubble hidden on home: DEFECT (medium). city.css:~170 `body.city-on[data-view="home"]
     .clep .cl-say{display:none}`. Her "?" tool (clepsydra.js:107 clepAsk) and a click/Enter on her
     body (clepsydra.js:118-120) still call clepSay -> shows nothing on home: two dead controls, and her
     idle facts/timer lines (clepsydra.js:451,462,570) go silent there. Fix: on home route clepSay
     text into the plate (or hide the "?" and make her body open the plate's About).
   - Saved-mock button in the plate: TESTED, PASS. Renders in .cs-extra, 38px tall, plate inside
     window (958..1298 x 673..850 at 1440x900), clicking it does not advance the welcome.
   - Leaving home mid-welcome: TESTED, PASS. Welcome stops (step 4 of 9 -> module view, 0 plates);
     back home shows the dashboard line, no replay, no errors.
Minor notes:
   - city.js keydown Escape listener is global: on home it ends the welcome and calls preventDefault
     even if the Escape was meant for another overlay. Low risk.
   - Lamps are 6x9px with a #8c8470 outline; the state is also in each plaque aria-label. Fine.
Evidence: D:\scratch 2026\city-dash\result-refute-*.json (my runs, tag refute-*), screenshots there.

## Recheck (fix round) - 2026-10-14

VERDICT: PASS. All four fixes hold; ophtho "0 rows" is pre-existing, not from this slice.

1. Fixes (my own dash.js runs, tags rc-*, screenshots in D:\scratch 2026\city-dash\):
   (a) clepAsk / clepSay text lands in the plate; clepSay during welcome leaves step "1 of 9" and line 1
       untouched. `git diff -- app/js/clepsydra.js` empty.
   (b) Lighthouse clear of term plate and Ophthalmology plaque at 1440x900, 1180x820, 820x1180, 390x844
       (checked by rect test; looked at the 820x1180 shot: lantern and tower free).
   (c) Term name: in window, visible, topmost at every size (check at dash.js:248).
   (d) Escape with modal open closes the modal only, welcome stays; second Escape ends welcome.
   Counts: due 40/40 at 1440 dark, 1440 light, 1180, 820, 390; new 44/44 (1440, 390); part 39/39;
   newfilm 46/46. boot-check: 0 errors, QUESTIONS 7477, THEORY 153, chapters 162, rows 123.
2. Ophtho 0 rows: PRE-EXISTING. boot-check (uses --dir or ROOT/app) on clean HEAD export in
   D:\scratch 2026\headcheck: ophtho 0, rows 123, same as uncommitted trial. Live: ophtho 39, rows 171.
   Cause 1 (ophtho 0): app/js/room.js:30 ROOMS={ophtho:...}; render.js:316-317 vModule returns
   roomStageHTML(m) for ophtho instead of the .ch-row list; boot-check counts .ch-row. Added in commit
   66914775 (slice 3 job 2, lighthouse room). Expected redesign behaviour, but boot-check now undercounts;
   chapter rows for ophtho are reachable only via the room sheets.
   Cause 2 (pediatrics 51 vs 60, remaining 9 of the 48-row gap): branch point 47e7cf89 predates live
   data; app/data/modules.js has 162 chapter tuples in trial vs 171 live. Branch lag, not a defect.
3. Hard limits: PASS. No localStorage/sessionStorage in the diff. Only new @keyframes cityFlame
   (opacity + transform); only new transition is opacity. Hover changes border-color only, no lift.
   Diff touches only render.js, city.js, city.css. clepsydra.js unchanged.
Note: boot-check is blind to ophtho on this branch; add a room-aware count before merge.
