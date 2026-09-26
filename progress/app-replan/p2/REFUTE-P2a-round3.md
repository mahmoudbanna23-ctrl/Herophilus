P2a-design.md round 3 refute (Opus, 2026-09-26): FAIL
Scripts: D:\tmp-p2a-ref3\measure.js, prefix.js, ext.js (+ fontTools trial subsets f*.woff2, s_*, a_*).

BYTES (fs.statSync, app/):
index.html 14,439 | fonts.js 129,691 | CSS 8,959+1,015+15,064+69,000+17,161+54,298=165,497 | JS 11 files 277,461
modules.js 27,280 | questions.js 2,954 + theory.js 1,345 = 4,299 | icon-96 18,040 | icon-180 58,169
poster 31,940 | mp4 328,896 | clep 9 poses 1,107,811 (welcoming 127,068, waving 131,161) | bust 92,194
mod-*.jpg 166,354+146,997+147,644+156,890=617,885 | assets/av 8 jpg 177,981 (max single 24,595)
assets/scene 12 files 249,229 | desk-data.js 10,786 | master plate mocks/plates/painted-codex-3.png 1,257,772
Doc pre-trim table re-adds to 2,876,602, NOT 2,861,102 (off 15,500). Round-2 figure 3,125,831 = 2,876,602 + scene 249,229.
Doc post-trim 673,895 re-adds exactly.
Corrected first paint (returning): 673,895 + waving 131,161 + font trial delta 41,431 + 1 avatar 24,595 = 871,082
New-user path (profile editor draws all 8 avatars, gate.js:828-829): 673,895+131,161+41,431+177,981 = 1,024,468 (>1 MB)
First LOAD incl. idle-deferred items (PLAN:148 says "first load"): 2,693,613 + 41,431 + 24,595 = 2,759,639

DEFECTS
1. L141-145/L127-130: round-2 D4 point "0 B only counts first paint, not first load (PLAN:148)" not addressed. Idle
   callback fetches 8 poses+bust+4 mod jpg+mp4 = 2,019,718 B on the same first home visit, unconditionally. Real first
   load ~2.69-2.76 MB. Fix: re-encode (WebP/AVIF, measured) or on-demand-only fetch, or escalate the first-paint vs
   first-load definition to owner explicitly; closure table must say which.
2. L103-108: pre-trim sum wrong (2,876,602 true).
3. L128: clepFigure() (clepsydra.js:21-28) hardcodes src=poseSrc(CL_REST); CL_REST='waving' (sessions.js:607). Mount
   fetches waving (131,161) for main+ghost before clepShow swaps to welcoming (clepsydra.js:161-162). Two poses, not one.
   Fix: clepFigure uses clepViewPose(), or count waving.
4. L103-110: assets/av/*.jpg omitted. Profile cards (gate.js:641) + rail (render.js:124) draw >=1 avatar; new-user
   editor draws 8 = 177,981 B. Fix: count them; idle-gate the editor grid.
5. L110-112: master plate never mentioned. Approved P5 plan (p5/PLAN-living-desk-2026-09-26.md:15-19,147) makes
   Home = the desk; plate 1,257,772 B alone > 1 MB. Brief item 5 requires saying if <1 MB is reachable with plate + options.
6. L40: `Q_ALL = collectLoaded(...)` reassigns `const Q_ALL` (questions.js:4) -> TypeError. Same class as round-2 THEORY
   bug. Fix: let Q_ALL, or a local.
7. L26-55: loader lifecycle undefined: who sets subjectState, what triggers a load (module click? idle?), when rebuild
   runs, onerror UI, what search/review/flagged/mock/dueNow see with subjects unloaded. §5 relies on "the loader".
8. L67-82: subjStats counters unsound:
   a. toggleFlag(id) quiz.js:838, scheduleSRS(qid) utils.js:51-57, setConf(id) quiz.js:527-535 have only an id, no q
      -> doc's "already holds q.module" false for flags/srs/conf.
   b. `due` cannot be refreshed daily without per-qid due dates + subject map; doc's own L61-64 says state has no subject.
   c. mergeStates (gate.js:213-223) unions answers/srs/flags per id, but subjStats takes newer whole -> counters diverge
      from merged answers after every sync. L159-161 presents this as safe.
   d. Legacy profiles: no subjStats until each subject loads -> done=0 -> fresh=true -> every existing student sees
      first-run at P2 ship. Contradicts L78-79.
   Fix: drop stored counters; derive per-subject stats from S.answers/S.srs/S.flags/S.conf via id-prefix->module map in
   MANIFEST. Measured: 12 prefixes, each maps to exactly one module over all 6,956 entries (prefix.js).
9. L84-85: "Cards already show manifest counts pre-load (round 1 fix, unchanged)" false: render.js:241-244 uses
   qsInModule; pre-load qs=[] -> d=0 -> "Start studying" for a subject with progress. Card design text was dropped
   from this rewrite. Fix: specify cards from manifest counts + per-subject derived stats.
10. L127: `preload="none"` does not defer while `autoplay` stays (autoplay overrides preload, HTML spec/MDN), and
   syncFilm()->setFilm()->play() (render.js:31-47) runs at showGate and starts the fetch. Home video is index.html:53-55,
   not render.js. Fix: remove autoplay + <source src>, set src from data-src in idle callback, then syncFilm; keep
   reduced-motion check (skip fetch when reduce).
11. L132: unicode-range fallback "points at the full un-subsetted file (not base64)" -> url() font over file:// is
   blocked cross-origin; fonts.js own header says so. Breaks file://. Fix: complement face as data: URI in a second
   classic script injected on demand.
12. L132 estimate 45,000 unsound: faces already Latin-only (3 woff2 = 95,628 raw). Trial pyftsubset: ASCII-only 63,184 raw
   = 86,431 B in fonts.js; Basic+Latin-1+punct 86,568 raw = 117,607 B. Fix: measure a real subset.
13. L131 CSS method: prefixes .qz- .rev- .mock- .theory- match 0 selectors in components.css+views.css. 25,000 has no
   basis. Fix: list real home selectors (.cl-, .gate, .mod-, .hp-, .stat, film/orb) and measure the split.
14. L130: mod art is CSS var --art:url() on span.mod-art (render.js:252,273; theory.js:347), not <img>; data-src n/a.
   Fix: set --art in the idle callback.
15. No build sequence: no ordered, independently shippable steps each with its own check (manifest+validator, loader,
   stats, media deferral, CSS split, fonts). §5 exit is one global gate.
Minor: icon-180 not drawn on file:// (profiles step uses icon-96, gate.js:628) -> conservative overcount 58,169.

CONFIRMED OK: gate unconditional (boot.js:373-396, gate.js:568, cloudEnabled gate.js:9); THEORY cleared in place;
termId kept; C_* and EP/EP2 covered by per-file manifest; checkData skip rule stated; validate.js:7-10 and
boot-check.js:133,146-150 citations true; mergeStates gate.js:202; banksOf storage.js:261, bankOf( only there;
no wardround.* rename; no fetch/XHR; setTimeout fallback for requestIdleCallback; scene/desk-data unreferenced by app.
