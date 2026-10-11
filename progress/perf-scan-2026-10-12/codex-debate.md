AGENTS.md loaded — Herophilus

Read-only review completed; no files changed or runtime tests performed.

F1 — Agree, provisionally. Include results, already a still view (app/js/render.js:19). Prefer animation:none for deterministic appearance (app/css/components.css:116). Progress/sync/file/filter/print risks: none found.

F2 — Disagree as specified. Preserve Pediatrics shadows and Neurology exam ordering (app/js/storage.js:303,306). Equal counts cannot establish equal IDs, order or resume behavior. Prefer render-local topic buckets, leaving exam branches intact; this avoids persistent-cache invalidation. Risks: wrong bank membership or stale pools after profile/term/cloud changes (app/js/theory.js:25; app/js/gate.js:305).

F3 — Disagree with the blanket rule. Mock pick() writes answers immediately (app/js/quiz.js:480); Next saves resume (app/js/quiz.js:124). A save-based counter therefore invalidates on Next, yet misses cloud replacement outside save() (app/js/gate.js:305). Restrict skipping to ordinary quiz navigation; retain persistence and full rendering on transitions. Risks: stale progress counts and cloud-derived navigation.

F4 — Agree with Set; defer pagination. Preserve complete practice arrays separately from displayed rows (app/js/quiz.js:1143,1157). Risks: accidentally practising only the visible slice; printing loses unrendered rows. Print CSS currently hides controls, not chapter rows (app/css/print.css:10).

F5 — Agree. Both gate transitions already call syncFilm() (app/js/gate.js:579,581). Compute gate visibility before deciding main-film playback (app/js/render.js:39). Requested progress/sync/file/filter/print risks: none found.

F6 — Disagree with “one line.” Pending searches can reopen dismissed results or leave Enter activating stale results (app/js/sessions.js:552,553; app/js/boot.js:364). Cancel/flush appropriately. Measure no-hit queries, too: collection stops at forty matches (app/js/sessions.js:463). Requested safeguard risks: none found.

F7 — Needs a number: real-device memory/frame improvement. display:none does not establish immediate memory reclamation; will-change is only evidence of a candidate (app/css/views.css:143). Requested safeguard risks: none found; ambient already disappears in print (app/css/print.css:51).

F8 — Disagree with automatic detection initially. Manual mode is cheaper. CSS hiding film must also update playback logic (app/js/render.js:37). Risk: unguarded device-key storage could break file startup; follow the existing guarded preference read (app/index.html:23). Scope visual overrides to screen to protect print.

F9 — Agree after exam. Emit intrinsic dimensions through qFigure(), retaining qImgSrc() for bundling (app/js/storage.js:195,212). Keep the table local, requiring no fetch. Risk: distorted/reserved print geometry unless responsive height and print sizing remain compatible (app/css/components.css:56; app/css/print.css:18).

F10 — Agree to defer splitting; needs live response headers before cache changes. Hashes are query parameters on mutable paths (tools/build-launch.js:272). Risk: stale HTML or incorrect query cache keys combine incompatible releases. Host caching does not fix the measured file:// execution cost.

F11 — Needs a number: complete cloud-transaction CPU time and maximum realistic serialized payload. The 27 ms measures local save only; cloud clones, merges and serializes repeatedly (app/js/gate.js:280,286,296,305). Answer-count extrapolation omits growing notes/highlights/resume data (app/js/storage.js:44). Leave implementation unchanged before exams; cloud-size failure remains unresolved.

F1 attribution is plausible, not established. Besides ring and scanline, mascot bobbing, pool animation, filtered images and glitch bursts remain (app/css/views.css:688,691,738,778); glass can amplify painting (app/css/views.css:243). Cheapest causal test: repeat identical settled quiz windows with ring disabled alone, scan disabled alone, then both; record named animations and style/paint time. Reduced-motion alone changes too many variables.

Subject opening contains O(chapters × questions) scans, not demonstrated quadratic scaling with CPU throttling (app/js/render.js:351; app/js/storage.js:307). F2 removes part: accuracy passes, bank-chip scans, inline ID serialization and navigation remain (app/js/storage.js:460; app/js/render.js:315,338,63). Worse-than-linear throttled timings need a trace separating these from allocation/GC and layout. Tiny post-call layout timings exonerate nothing: pose changes explicitly force layout (app/js/clepsydra.js:56).

The four disagreements:
1. Backup units: reject categorical dismissal. The budget counts inner strings, while storage serializes an escaped wrapper; two snapshots can exceed budget (app/js/boot.js:54,78,79). Browser quota accounting was not established.
2. Loading: Claude’s deferral wins.
3. Order: drawing and subject opening move ahead of search/save; Review also deserves promotion.
4. Crashes: neither explanation wins. Post-GC JS heap excludes peak allocations and drawing memory.

My order: F1, F5, narrowed F2, narrowed F3, F4’s Set change; measure F10/F11. Before the exam, refuse persistent indexing without identity/order checks, pagination, blanket navigation memoization, automatic calm mode, loading/sync rewrites and untested cache rules. Defer F6–F9.

Both reviews miss the backup-wrapper undercount and internal forced-layout implications above. Another blind spot: search bypasses bankOn() entirely (app/js/sessions.js:459); “all filtering agrees” is already false.