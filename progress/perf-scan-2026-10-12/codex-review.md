AGENTS.md loaded — Herophilus

Ranked findings

1. Large startup dependency chain · app/index.html:36, app/index.html:114, app/index.html:147.
Measured file sizes: app’s 24 data scripts total 25.03 MB; dist/data totals 21.73 MB, uncompressed. Fonts block HTML parsing before CSS; every listed data script precedes boot. Estimate: slow startup and substantial retained memory on weak devices. Cloud restoration can additionally hold entry for up to 15 seconds (app/js/boot.js:392).
Cheapest fix: show the local entry screen immediately; load subject groups through ordered classic scripts when needed, retaining var globals and file:// support.
Risk: dependency ordering, cross-subject counts and saved-question availability.

2. Quiz actions rebuild far more than the changed control · app/js/quiz.js:493, app/js/quiz.js:510, app/js/quiz.js:552; app/js/render.js:63, app/js/render.js:132, app/js/render.js:165.
Selection, submission and Next rebuild navigation, recompute counts/weak chapters, and replace question HTML (app/js/quiz.js:459). Estimate: repeated main-thread work, allocation and layout explain delayed taps and stuttering across weak laptops/iPads.
Cheapest fix: update selection controls directly; refresh sidebar statistics only when their inputs change.
Risk: stale counts or lost focus/highlight behavior; preserve banksOf(q) filtering.

3. Expensive drawing persists, including during reading · app/css/views.css:142, app/css/views.css:181, app/css/views.css:241; app/css/components.css:116; app/css/views.css:760.
Large blurred orbs retain will-change; filtered video sits behind backdrop blur. Button gradients and mascot background-position animations lack reading-view pauses. The main film also lacks a gate-visible exclusion, allowing both films to play at entry (app/js/render.js:39, app/js/render.js:45).
Estimate: GPU/paint pressure, especially on high-resolution iPads; a plausible contributor to tab termination, not demonstrated.
Cheapest fix: pause the covered film; reduce blur/layer promotion; pause non-glitch reading animations.
Risk: appearance changes. Preserve mascot artwork and its deliberate glitch timer.

4. Saving and syncing repeatedly process the entire history · app/js/storage.js:165; app/js/gate.js:271, app/js/gate.js:280, app/js/gate.js:296.
Answers and chapter navigation trigger whole-state synchronous serialization/storage; cloud sync clones/merges the state repeatedly and rewrites its document after a 1.2-second debounce. Backups add serialized copies; their “byte” budget counts string characters and always retains two snapshots (app/js/boot.js:78).
Estimate: growing stalls, temporary memory pressure and quota/write-size failures for established profiles, especially on weak devices.
Cheapest fix: coalesce redundant writes with lifecycle flushing; avoid unchanged cloud writes; budget actual backup serialization.
Risk: delayed persistence can lose recent progress. Keep wardround.* keys and existing records.

5. Search rebuilds searchable text on every keystroke · app/js/boot.js:362; app/js/sessions.js:459.
Each input concatenates/lowercases question text and searches chapter names through nested catalogue traversal (app/js/storage.js:175). Rare/no-match queries traverse the whole active bank despite the 40-hit cap.
Estimate: typing delays and garbage collection on weak devices.
Cheapest fix: debounce input and cache normalized text per active term.
Risk: extra retained memory and cache invalidation after term changes.

6. Large review decks create large DOMs and quadratic membership work · app/js/quiz.js:1154, app/js/quiz.js:1160, app/js/quiz.js:1173.
Every deck row renders together; each checks membership using due.includes().
Estimate: opening/scrolling stalls and memory pressure grow with accumulated mistakes.
Cheapest fix: use a Set and paginate displayed rows while retaining the complete practice set.
Risk: altered navigation and keyboard focus.

7. Figures can shift controls after loading · app/js/storage.js:212; app/css/components.css:56.
Images have no reserved intrinsic dimensions; CSS uses height:auto.
Estimate: slow connections expose layout jumps while students tap or read.
Cheapest fix: provide accurate width/height metadata.
Risk: inaccurate dimensions distort spacing.

Looked at and found fine

Reading-view film/orb pauses exist (app/js/render.js:40; app/css/views.css:233). Reveal observers disconnect (app/js/render.js:93). Question lookups use a Map (app/js/storage.js:284). Save failures are caught (app/js/storage.js:167). Session logs cap at 80 (app/js/clepsydra.js:624).

Not reached / unverified

Actual crash cause, Safari traces, heap/decoded-image sizes, network compression/cache headers, live deployment equivalence and Firestore limits are unverified. No browser, network, writes or progress/ access. Restricted data/assets contents remained unopened. Theory pagination was inspected but is currently locked (app/data/modules.js:33).