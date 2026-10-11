# Slow-site scan, Claude side — 2026-10-12

Three read-only Claude helpers (Sonnet researchers) read the site code on 2026-10-12: one on
loading weight, one on the running JavaScript, one on CSS and animation. **Nothing here was timed
in a browser. Every cost is a code-reading estimate; sizes are measured from `dist\`.** Paths are
under `app\` unless they say `dist\`. Line numbers are the helpers' citations, not yet re-opened
by the main chat.

## A. Loading weight and boot

- A1. `dist\` is 41.9 MB. Data scripts 21.73 MB in 20 files; other JS 299 KB in 12 files; CSS
  166 KB in 6 files; images 19.7 MB in 311 files (`assets\q\` 16.85 MB in 271 files); one video,
  `assets\ambient-library.mp4`, 329 KB. `data\fonts.js` is 129,691 bytes (base64 fonts).
- A2. Largest files (bytes): `questions.ent.js` 7,785,695 · `questions.ophtho.js` 4,706,093 ·
  `questions.neuro.js` 2,524,077 · `questions.peds.ep.js` 1,721,953 · `questions.peds.js`
  1,628,029 · `questions.peds.ep2.js` 1,150,648 · `questions.ophtho.ep.js` 786,187 ·
  `questions.peds.sa.js` 610,196 · `questions.ophtho.ep2.js` 372,885.
- A3. `index.html` has no `defer` or `async`. `data/fonts.js` (line 36) and six stylesheets
  (lines 37-42) block rendering in `<head>`. `index.html:114-132` loads all 19 data scripts in a
  row, all four subjects, no per-subject loading. `index.html:133-143` loads 11 JS files ending
  with `boot.js`. About 22.0 MB of JS is downloaded and parsed before `boot()` runs (`boot.js:381`).
- A4. `data\questions.js:4-18` concatenates everything into `Q_ALL`; `rebuildQuestions` (line 56)
  filters and hash-sorts once a profile is chosen. `QBYID` is a third structure over the same set.
- A5. No image is over 500 KB; the widest is 1805 px. Question images are inserted per question
  (`storage.js:212`). Nothing oversized.
- A6. `clepsydra.js:18-19` preloads all nine pose PNGs (1.1 MB on disk, 360x360 each, about
  0.5 MB decoded each) through `new Image()`.
- A7. Two `<video autoplay muted loop preload="auto">`: `index.html:53` and a gate copy at
  `gate.js:554`, same 329 KB file. `render.js:33` pauses it on reading views.
- A8. Firebase SDK: three scripts from `gstatic.com` v10.12.2 (`js\theory.js:664-666`), loaded in
  sequence by `loadSDK()` (`gate.js:11-32`), 8 s timeout, skipped on `file:`. `boot.js:392-395`
  races `restoreSession()` against 15 s with the splash showing. Other waits: 8 s
  (`gate.js:146`), 12 s (`gate.js:351`).
- A9. No service worker. No `_headers` or `_redirects`. `_worker.js` only proxies `/__/auth/`.
  URLs carry `?v=<hash>`.
- Unverified: whether Cloudflare compresses the JS on the wire; its default cache headers; whether
  the splash paints during script download; heap size after parse.

## B. Running JavaScript

- B1. Search has no debounce. `boot.js:362` calls `doSearch` on each input; `sessions.js:459-463`
  builds a lowercased stem+options+explanation string for every question and calls `chapterName`
  per question; `chapterName` is a three-level loop over every chapter (`storage.js:175`). Theory
  is scanned with `JSON.stringify` of tables per section (`sessions.js:469-471`).
- B2. Cloud push after every answer. `gate.js:271` debounces 1.2 s; `pushCloud`
  (`gate.js:273-330`) does about three `JSON.parse(JSON.stringify(S))` clones and at least four
  full `JSON.stringify` calls, runs `mergeStates` (`gate.js:204`) two or three times, and writes
  the whole state to one Firestore document. Unverified risk: a large state could pass
  Firestore's 1 MiB document limit.
- B3. Each answer rebuilds the page. `quiz.js:510` runs `save(); render()`. `render.js:49` calls
  `renderNav`, which at `render.js:132,133,152` runs `QUESTIONS.filter` for flags, `qsInModule`
  per module and `dueNow`/`deckAll` over all questions.
- B4. Module view is quadratic. `render.js:351` runs `qsIn(cid)` per chapter row;
  `storage.js:307` runs `QUESTIONS.filter(inChapter && bankOn)` per chapter; `inChapter`
  (`storage.js:279-281`) and `banksOf` (`storage.js:262`) allocate arrays per call. About 50
  chapters x 7,000 questions for Pediatrics. `weakChapters` (`quiz.js:1032`) already does this in
  one pass.
- B5. Review and Flagged have no row cap. `quiz.js:1160-1171` one DOM row per deck question plus
  `chapterName` per row; `quiz.js:1154` uses `due.includes(q)`; `quiz.js:1143-1158` embeds the
  full id list in inline `onclick` three times. Flagged: `quiz.js:1193-1208`.
- B6. localStorage. `boot.js:41,44` allow up to 1.5 MB of backup snapshots per profile beside the
  live state (`storage.js:165`). With three or more profiles the quota can be exceeded. Backups
  degrade to two snapshots (`boot.js:56-63`); a failed live write only warns (`storage.js:167`,
  `warnSaveFailure`). No crash; progress can fail to save.
- B7. Timers. `clepsydra.js:349` glitch loop forever, 2.4-10 s per tick, not paused when the tab
  is hidden (deliberate on reading views by owner ruling). Idle (`:456`) and shift (`:472`) loops
  similar. `sessStats` (`clepsydra.js:542`) scans all questions each second, session view only
  (`sessions.js:24`).
- Checked and safe: stale ids guarded (`render.js:12`, `quiz.js:38-42,90-91,133`); fold redirect
  capped at 20 hops (`storage.js:368`); no `onSnapshot`, so no echo loop; listeners added once;
  confetti removes itself (`utils.js:46`).
- Not reached: `vQuiz`/`onStemSelect` highlighting; the `theory.js` book-layout measuring
  (`theory.js:496-620` forces layout); gate profile screens; real size of `S`.

## C. CSS, animation, drawing

- C1. Button ring. `css/components.css:2,116,133`: `@property --angle` animated by `orbit`, 7 s,
  infinite, on every `.btn::before` — a conic gradient with mask-composite, repainted on the main
  thread. Not paused on reading views; only `prefers-reduced-motion` stops it
  (`components.css:135`). `.btn` occurs 49 times in `js/quiz.js`, 5 in `js/render.js` (string
  counts, not on-screen counts).
- C2. Orbs. `css/views.css:141-148`: four orbs, `filter:blur(90px)` plus `will-change:transform`,
  46/40/38/26 vw wide, 34-52 s loops. On reading views only `animation-play-state:paused` and
  the layer fades to .3 (`views.css:224-233`); the blur layers stay allocated. The gate has four
  more with `blur(80px)` (`css/components.css:432-438`), gone when the gate hides (`:426`).
- C3. Background video. `index.html:53-55`, `css/views.css:175-182`: 960x540 H.264, 11.7 s loop,
  with `filter:saturate contrast brightness` and `opacity:.48`, scrim and orbs blended over it;
  light mode `brightness(1.82)` (`views.css:372`). `syncFilm()` (`js/render.js:37-47`) pauses it
  on still views and for reduced motion; no `visibilitychange` handler.
- C4. `backdrop-filter` on fixed or sticky furniture. `css/views.css:241,243,246,249,250`,
  `css/layout.css:66`: rail 14 px; sticky topbar 16 px plus saturate (declared again at
  `layout.css:66` with 10 px, overridden); modal 20 px; modal background 5 px; results 18 px.
- C5. `background-attachment:fixed` on the body, three radial gradients (`css/base.css:12`,
  `css/views.css:130`).
- C6. Clock figure. `css/views.css:649-791`: two infinite animations (`clBob`, `clPool`), `clScan`
  animating `background-position-y` (`:760`), a `mix-blend-mode:screen` scan layer, two stacked
  `drop-shadow` filters (`:691`), three during a glitch (`:778-781`).
- C7. Long lists. `js/render.js:92-106`, `css/layout.css:229`, `css/views.css:256-257`: every
  `.card`, `.stat`, `.ch-row`, `.th-ch`, `.day` gets `.reveal` and an `IntersectionObserver`,
  each with a static `box-shadow:0 0 10px` glow. No `content-visibility`, no virtualisation.
- C8. Small: confetti is 44 divs, removed after 4 s (`js/utils.js:35-46`); home cards are four
  760x760 JPGs (`render.js:252`, `views.css:564`); gate `.gsign::after` animates `left` forever
  (`components.css:753`).
- C9. No device-tier switch: no `hardwareConcurrency`, `deviceMemory`, `saveData` or tier class
  anywhere. `css/base.css:17` kills animation under `prefers-reduced-motion`;
  `views.css:323-330` and `components.css:1028` hide video, scrim and reveal there.
- Not reached: real GPU, memory or frame cost; how many `.btn` are visible per view;
  `css/print.css`; splash CSS.

## Main chat's ranking before any second opinion

1. A3/A4 — everything loads up front (start time, memory, crashes on tablets and phones).
2. B3/B4 — per-answer and per-module full scans.
3. B1 — search on every key.
4. C1-C4, C6 — always-on decoration.
5. B2 — cloud push cost.
6. B5 — uncapped Review and Flagged lists.
7. C9 — no weak-device path.
