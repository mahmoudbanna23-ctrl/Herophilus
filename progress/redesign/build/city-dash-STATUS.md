# city-dash status (slice 4b)

2026-10-14 start. Read brief, vHome, city.js, city.css, clepsydra placement (#clep fixed corner, .cl-body 112px, her own bubble .cl-say).

Design decided:
- render.js vHome: city branch passes per-subject due + a dash object (term, total, her lines) to cityStageHTML; .city-below dropped.
- city.js: plaque gets lamps + door fire + due count; her speech plate (fixed, placed left of .cl-body, follows her via clepPlace wrap); welcome state machine in memory; settle watcher polls `film` null; stray mock-resume button moves into the plate.
- city.css: carved styles, glow rim, fire flicker (resting only), hide her own .cl-say on the home city (plate is her voice there).

Progress: (update below)
- JS+CSS written (render.js, city.js, city.css); next: harness dash.js + boot-check
- harness dash.js: part/due/new/newfilm all pass at 1440x900; running other sizes
- DONE 2026-10-14. boot-check 0 errors. dash.js: part 30/30, due 31/31 (1440x900, 1180x820, 820x1180, 390x844 dark; 1440x900 light), new 35/35 (1440 + 390), newfilm 37/37 (plate hidden during film, welcome after film gone).
- Screenshots + result-*.json in D:\scratch 2026\city-dash\.
- Untested: the saved-mock button now living in the plate (.cs-extra); leaving home mid-welcome.

## Fix round 2026-10-14 (from city-dash-REFUTE.md + city-dash-LOOK.md)
- Fix 1 her voice: city.js wraps clepSay and clepDismiss (clepsydra.js untouched). On the home city her text goes into the plate (bold kept), shown 2.5 s + 40 ms a character, 6 s at most, then the dashboard line returns. Dropped while the welcome plays. More / About / leaving home clears it.
- Fix 2 lighthouse: term plate moved to top centre (landscape), right of centre (upright over 600 wide, clear of the floating tool buttons), top right on phones. Phone: Ophthalmology plaque shifted right of the tower. Lantern and tower clear at 1440x900, 1180x820, 820x1180, 390x844 (looked at each screenshot).
- Fix 3 term name: renders at every size; dash.js now checks it is in the window, visible and topmost. It was under the tool buttons at 820x1180 after the first move; fixed.
- Fix 4 Escape: capture-phase listener ends the welcome only when no modal, search results, open gate or splash is up. Tested: Escape with a modal open closes the modal only, welcome stays.
- Checks: node --check city.js ok. boot-check 0 errors (note: trial copy reports ophtho 0 chapter rows and 123 rows total, the live Herophilus copy 39 and 171; render.js diff touches nothing in the module view, so pre-existing in this copy, not investigated).
- dash.js: due 40/40 at 1440 dark, 1440 light, 1180, 820, 390; new 44/44 (1440, 390); part 39/39 (1440, 390); newfilm 46/46.
- New dash.js checks: term renders and clear of lighthouse, ophtho plaque clear of tower, clepAsk and clepSay routing, bold, return after dwell, welcome not interrupted, Escape with modal.
- Not done: Neuropsychiatry plaque on the temple roof corner at 820x1180 left as is.
- Screenshots in D:\scratch 2026\city-dash\: due-1440x900-dark, due-1180x820-dark, due-390x844-dark, due-1440x900-light, new-1440x900-dark-welcome-mid (+ due-820x1180-dark).
