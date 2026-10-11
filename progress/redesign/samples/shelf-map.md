# Shelf map: motion shortlist (Part A) and what else the shelf holds (Part B)

Written 2026-10-11. Research only: nothing built, downloaded or saved. Web pages read as text.

Shelf files (cited as P = `D:\claude os\Tools\factory\progress\web-design-playbook-2026-10-03.md`, line number after colon):
- P = playbook. I3D = `...\progress\inventory\3d-tools.md`. IMK = `...\inventory\web-makers-2026-10-04.md`. IWL = `...\inventory\web-living-body-2026-10-04.md`.
- SK = skill folder `D:\claude os\Medical school\Herophilus\.claude\skills\ui-ux-pro-max\`.

Marks: PASS / FAIL / UNKNOWN against the app limits (plain files, no framework, no build, no CDN, works from disk as file://, free licence, calm on reading screens, reduced-motion respected, nothing fades in from nothing).
"Verified" = read on the official page / package index on 2026-10-11. "Unverified" = not checked or only a summary.

## 0. What the skill folder really contains (SK)

Not a library of code. It is a search tool plus data tables (SK/SKILL.md:3, :8). Real files: `data/*.csv` rows (line counts incl. header): styles 89, products 193, colors 193, ui-reasoning 193, typography 75, google-fonts 1935, icons 106, ux-guidelines 120, charts 26, landing 35, app-interface 33, motion 18, react-performance 45; `data/stacks/`; `references/quick-reference.md`, `references/pro-rules.md`; `scripts/search.py` (needs Python).
- `data/motion.csv` = the "17 GSAP presets" (SK/SKILL.md:3). They are written-out GSAP code snippets with timing, easing, Do/Don't notes, in 3 intensity tiers: Hover micro-interaction (rows 1-3), Scroll reveal (4-6, incl. pin/scrub scrollytelling), Stagger list (7-9, incl. SplitText), Page transition (10-12, incl. Flip shared element), Parallax (13-14), Loading/skeleton (15-16), Carousel (17). Header and rows read via `cut` on motion.csv.
- Most rows start from `opacity:0` (fade from nothing) so they need rewriting to slide / unmask versions. Rows 3, 6, 9, 12 need GSAP plugins (see below).
- Guidance only: no part can be dropped into the app from this folder. Charts (25 types) are advice text, not a chart library (catalog-summary.json "chartTypes":25).

## 1. PART A: motion libraries on the shelf

All rows below are named on the shelf at P:163-181 (B1) unless said. Sizes are bytes from the jsDelivr package index (npm package files), verified 2026-10-11.

| Library | Version (verified) | Licence | Classic single-file build for file:// | Size | Verdict on limits |
|---|---|---|---|---|---|
| GSAP (P:163) | 3.15.0 (jsDelivr index; installation page says v3.15) | Webflow "Standard" licence, no charge, commercial use allowed, all plugins included. Only bar: tools that let users build animations without code and compete with Webflow. https://gsap.com/standard-license/ (effective 30 Apr 2025; can be amended, older versions stay under old terms) | Yes. Installation page: zip "Grab the files" with /minified/ folder, load with script tag. https://gsap.com/docs/v3/Installation/ . npm package equivalent: `dist/gsap.min.js` | gsap.min.js 72,927 | PASS (script-tag UMD; no module). Disk-run itself not tested. Reduced-motion hook (gsap.matchMedia): unverified this session. |
| Motion (P:164) | 14.1.0 (jsDelivr index; shelf says 14.0.0) | MIT, https://github.com/motiondivision/motion (README "Motion is MIT licensed") | Yes, `dist/motion.js`, UMD wrapper that sets global `Motion` (first characters read: `...Motion={})}(this,function(t){"use strict"`). | 144,870 | PASS on form. Features that are plain-JS: animate, scroll, inView, stagger, spring type (https://motion.dev/docs/quick-start). Layout/gestures claimed in README; whether they are in the plain `motion.js` build: unverified. |
| anime.js (P:165) | 4.5.0 | MIT (repo footer, https://github.com/juliangarnier/anime ; LICENSE.md 1,075 B) | Yes, `dist/bundles/anime.umd.min.js`, global `anime`, `const {animate}=anime` (https://animejs.com/documentation/getting-started/installation) | 118,043 | PASS on form. |
| Lenis (P:168) | 1.3.26 | MIT, https://github.com/darkroomengineering/lenis | Yes, `dist/lenis.min.js` (global `Lenis`, implied), `lenis.css`; snap plugin `lenis-snap.min.js` | 18,722 + css 513 + snap 5,844 | PASS on form. Respects reduced-motion by default (`respectReducedMotion:true`, README). Touch smoothing off by default, "can be unstable on iOS<16". Nested scroll boxes need `data-lenis-prevent`: the A4 reader must be excluded. |
| three.js (P:427, I3D:93) | not read | MIT | NO classic script: current build folder lists module files and `three.cjs` only (I3D:93, from the shelf; not re-checked) | n/a | FAIL (ES-module only, I3D:100-101). |
| Babylon.js (I3D:95; IWL:51) | npm package `babylonjs` 9.30.0 (index page) | Apache-2.0 | Possibly (script-tag inclusion exists; local copy UNVERIFIED, I3D:95, :102) | not measured | UNKNOWN, and it is a 3D engine: a different job from "effects". Not a candidate for motion. |
| lottie-web (P:166) | 5.13.0 (shelf) | MIT | `lottie.min.js`; loading a JSON from file:// unverified, inline the data (P:166) | not measured | UNKNOWN. Needs Lottie files, and the shelf names no source of usable ones (LottieFiles licence unverified, P:176). |
| dotLottie web (P:171) | 0.80.0 (shelf) | MIT | NO: ES module only, wasm fetched over network | 165,095 + 1,238,072 wasm | FAIL. |
| AOS (P:167) | 2.3.4 | MIT | Yes, CSS+JS | not measured | MAYBE-LOW. Last stable 2018; its default presets are fades. Slide / zoom / flip presets exist. |
| Animate.css (P:169) | 4.1.1 | **Hippocratic License 2.1** (verified: https://raw.githubusercontent.com/animate-css/animate.css/main/LICENSE ), npm says MIT. Not a standard open licence. | Yes, plain CSS | not measured | FLAG: licence needs the owner's OK. Not tested further. |
| Magic CSS (P:178) | not stated | MIT (https://github.com/miniMAC/magic , verified) | Yes, `magic.min.css`, about 3.1 kB gzipped (README) | n/a | MAYBE. Effect names read from README: puffIn, vanishIn, swashIn, foolishIn, tinLeftIn, boingInUp, spaceInLeft, twisterInDown, openDownLeft, perspectiveDown, holeOut, bombRightOut. The "In" puff/vanish ones fade from nothing: rule fail. The slide/tin/boing/space/perspective ones need a look. |
| Hover.css (P:177, :150) | n/a | MIT only for personal/open source, paid for commercial | yes | n/a | FAIL (licence flag; shelf says exclude). |
| Auto-Animate (P:170) | 0.10.0 | MIT | no script-tag build shown | n/a | UNKNOWN. |
| Splide, Swiper (P:179-180) | named, never researched | not stated | not stated | n/a | UNKNOWN. Not needed: no carousel in the app. |

Native browser features on the shelf (P:172-175, 181, 183-188): IntersectionObserver; `@starting-style` (Chrome/Edge 117, Firefox 129, Safari 17.5); scroll-snap; scroll-driven animations `animation-timeline` (Chrome 115, Safari 26, Firefox preview); same-document View Transitions (Chrome/Edge 111, Safari 18, Firefox 144, P:185); cross-document `@view-transition` (not Firefox, file:// unverified, P:181); `interpolate-size` (Chromium only). The shelf's own default: "native CSS first; add one library only if the motion spec needs it" (P:188).
Disk-run caveat for iPad: Safari 26 / 18 / 17.5 thresholds mean an older iPad needs a fallback. I do not know which iPadOS the owner's iPad runs: unknown.

### 1.1 Specific effects (real names) mapped to app places

Plugin sizes verified from jsDelivr, GSAP 3.15.0. Plugin names and one-line jobs from https://gsap.com/docs/v3/Plugins/ (the page does not say which are free; the licence FAQ says all plugins, "including ... SplitText and MorphSVG", are free for commercial use, https://gsap.com/standard-license/ ).

WORTH A LIVE TEST FIRST (6):

| # | Effect (real name) | What you see | Where in the app | Files / size | Notes |
|---|---|---|---|---|---|
| 1 | GSAP **Flip** plugin (also motion.csv row 12 "shared element") | A tile glides and resizes into its new place instead of cutting: the alcove plaque grows into the subject header, a chapter row lifts into the reader. | Home alcove to subject page; chapter row to open chapter; modal origin. Physical cause = the thing travels. | gsap.min.js 72,927 + Flip.min.js 25,534 | PASS on form. Competes with #6 (native). |
| 2 | GSAP **ScrollTrigger**, pin and scrub, parallax layers (motion.csv rows 6, 13, 14) | As you scroll, hall layers (back wall, columns, foreground) slide at different speeds; scene can hold still while the alcoves pass. | Home hall (`.hall-back`, `.hall-fore`, `.hall-below`, `.alcove`). Browse only; switched off on reader/quiz. | + ScrollTrigger.min.js 44,575 | Native alternative: scroll-driven CSS (Chrome 115, Safari 26 only). |
| 3 | GSAP **DrawSVG** | A ring or line draws itself round, stroke from start to end. | Progress rings (`.ring`, `.sr-ring` are SVG), session summary, gate/splash sigil. | + DrawSVGPlugin.min.js 4,351 | Honest note: a plain CSS `stroke-dashoffset` transition does most of this; the plugin adds drawing from the middle and grouped timing. |
| 4 | GSAP **CustomWiggle** and **CustomBounce** (need CustomEase) | Wrong answer: the row shakes and settles. Right answer: the row drops and bounces once, then rests. | Quiz option rows (`.opt.correct` / `.opt.wrong`, currently only a glow, views.css:281-283). | + CustomEase.min.js 7,143 + CustomBounce.min.js 2,068; CustomWiggle size not measured | PASS on form. Kind to motion-sensitive users only if the shake is skipped when reduced-motion is on. |
| 5 | **Lenis** smooth scroll + **lenis-snap** (shelf B1 :168) | Page glides with weight; sections settle on a stop rather than drift. | Home (hall stops), subject page, results. NOT the A4 reader. | lenis.min.js 18,722; lenis.css 513; lenis-snap.min.js 5,844 | Smooth scroll fights nested scroll boxes (README). Off on iPad until tested. |
| 6 | Native **View Transitions** (same-document) (P:185) | Page change morphs the shared piece instead of blinking: tile to header. No file at all. | All screen changes in the single-page app. | 0 B | file:// behaviour unverified. Old iPadOS (below 18) gets no effect (graceful). |

MAYBE:
- GSAP **SplitText** (7,732 B): headings rise line by line from behind a mask. Subject names, results headline. Not on the reader.
- GSAP **MotionPath** (22,002 B): the corner mascot moves along a drawn curve between corners. She is only moved, never drawn on. Fits the owner's rule.
- GSAP **Draggable** (35,762 B) + Inertia (size unmeasured): flick the mascot across the screen. Same rule.
- GSAP **ScrambleText** (11,687 B) or a plain number tween: counters and timer digits spin, then settle. Progress counts, `.sr-time`, mock summary.
- GSAP **Observer** (10,014 B): wheel/swipe/drag intent; could drive the "walk into an alcove" push-in.
- Motion `animate` + spring + `inView` (144,870 B): same ground as GSAP; pick one. Spring eases are the one thing GSAP does not give by default.
- anime.js v4 **createDrawable**, **createMotionPath**, **morphTo**, **createSpring**, **createDraggable**, **onScroll**, **splitText**, **scrambleText**, **stagger**, **Layout** (https://animejs.com/documentation/): one 118,043 B file with most of the GSAP list. Alternative to GSAP, not an addition.
- Magic CSS slide / tin / boing / space groups: pure CSS, tiny, fits modal / toast entrances if they do not start at opacity 0.
- AOS slide presets for chapter lists: weak; native `IntersectionObserver` plus transform does the same.
- Confetti: NOT on the shelf. The app already has its own (`confetti()` in `app/js/utils.js:35`, `.confetti` in views.css:95). An outside library, canvas-confetti (ISC licence, global `confetti`, option `disableForReducedMotion`, shapes circle/square/star + emoji/path, https://github.com/catdad/canvas-confetti ) was read but is NOT on the shelf. Size unverified.

DOES NOT FIT / FAILS A LIMIT: three.js (ES modules only), dotLottie (ES module + wasm fetch), Hover.css (licence), Animate.css (Hippocratic licence, owner call), Babylon.js (unknown, wrong job), lottie-web (no Lottie source on shelf, file:// JSON unverified), Auto-Animate (no script-tag build), Splide / Swiper (never researched).

## 2. PART B: what else the shelf holds

### 2.1 Shelf categories (besides buttons and motion)

| Category | What the shelf names | Count | Licence | Shelf cite |
|---|---|---|---|---|
| UIverse "Galaxy" repo (copy-paste parts) | Folders: Buttons, Cards, Checkboxes, Forms, Inputs, Notifications, Patterns, Radio-buttons, Toggle-switches, Tooltips, loaders (11 folders) | README says "over 3000" total. Per-folder counts NOT shown; a partial listing counted over 400 in Buttons alone. Per-folder counts of the other 10: UNVERIFIED (blocked by a tool refusal) | MIT (GitHub page); credit encouraged | P:398 (shelf); folder list from https://github.com/uiverse-io/galaxy |
| CSS-tricks snippets, Open Props UI, HTML5 UP templates, Every Layout | More copy-paste parts, 40+ full templates (HTML5 UP) | HTML5 UP 40+ | HTML5 UP CC BY 3.0 (credit); others not stated or unverified | P:399-403 |
| Icons | Lucide, Tabler (6,220+), Heroicons, Phosphor (1,200+), Bootstrap Icons (2,000+), Material Symbols (2,500+), Iconoir (1,600+), Remix (3,200+), Font Awesome Free, Feather | tens of thousands in total | MIT / ISC / Apache; Font Awesome and Remix have conditions | P:319-331 |
| Skill folder icon list | Curated 105 icons, plus a 1,512-icon Phosphor snapshot | 105 + 1,512 | Phosphor MIT | SK/data/catalog-summary.json |
| Fonts | 9 Arabic-capable (Cairo, Tajawal, IBM Plex Sans Arabic, Noto Naskh/Kufi, Amiri, Almarai, Readex Pro), Inter, Fraunces, Source Serif 4, Manrope, DM Sans, Plus Jakarta Sans; Fontsource, pairing tools | about 15 named; skill folder has 1,934 Google fonts and 74 pairings | OFL; some per-font conditions unverified | P:233-260; SK/data/catalog-summary.json |
| Backgrounds and patterns | Hero Patterns (CC BY, credit), SVG Backgrounds (credit), Haikei (unverified), Coverr and Mixkit stock video | 3 pattern sites, 2 video sites | credit needed for two | P:410-415 |
| Illustrations / photos | unDraw, Open Peeps, Humaaans, DrawKit, Open Doodles; Pexels, Unsplash, Pixabay, Burst, Wikimedia | about 12 | mixed | P:339-349 |
| 3D | Poly Haven, Kenney, Quaternius (CC0), glTF samples, model-viewer, three.js, Babylon.js, plus Z-Anatomy body sets | 3 CC0 sets | CC0 / Apache / MIT | P:421-427, I3D:93-95, IWL |
| Colour and layout | Radix Colors, Open Color, Open Props tokens, classless CSS (MVP, Simple, Water, Sakura, new.css), resets | about 12 | MIT | P:213-229, :288-289 |
| Checks (not parts) | axe-core, Lighthouse, Pa11y, WAVE, contrast checkers, screenshot runners | about 25 | various | P:266-316 |
| Generators of content | Image makers (Krea, Flux, Codex image), speech and music and sound-effect makers (Kokoro, Chatterbox, ACE-Step, Stable Audio Open) | 5 audio makers | Apache/MIT/community | P:353-370, IMK:70-74 |
| Charts | Only advice: 25 chart types in the skill. No chart library named anywhere on the shelf (searched P and inventory for "chart": only the skill and Q-lines). | 25 advice rows | n/a | SK/data/charts.csv |
| Skill design data | 79 styles, 192 palettes, 119 UX rules, 22 stack guides | counts in SKILL.md:3 | project's own | SK |

Categories the shelf does NOT hold at all (searched P and the inventory files for the words; no hit): cursor kits, shader or WebGL background effects, UI sound packs or a sound player library, particle libraries, confetti, tooltip/popover libraries (apart from UIverse's tooltips), counters or number-ticker parts, skeleton/loader libraries (apart from UIverse loaders), page-transition libraries (only the native feature and the GSAP Flip row).

### 2.2 The app's visible parts (from `app/css/*.css` class names and `app/index.html`)

Home hall: `.hall`, `.alcove`, `.plaque` (`.pl-name .pl-count .pl-acc`), `.hall-clep` (mascot), `.hall-dust`, `.hall-glow`, `.veil` (hall.css). Shell: `.rail`, `.nav-item`, `.topbar`, `.search`, `.tb-btn`, `.kbd-btn`, `.logo`. Cards and rows: `.card`, `.mod-card`, `.ch-row`, `.hero-panel`, `.stat`, `.badge-due`, `.pill`, `.chip`, `.bankchip`, `.tchip`, `.tag`. Progress: `.ring` (SVG), `.sr-ring` (SVG), `.qprog`, `.bk-prog`, `.streak`, `.track`. Quiz: `.qcard`, `.stem`, `.opts` / `.opt` (`.sel .correct .wrong`), `.explain`, `.qfig` / `.qzoom`, `.qactions`, `.verdict`, `.wrong-queue`. Timers: `.sr-time`, `.exam-clock`, `.sess-live`, `.sess-sum`. Overlays: `.modal`, `.toast`, `.gate` (sign-in and profile, `.gstep .gsign`), `.splash`, `.spinner`, `.shortcuts`. Reader: `.th-body`, `.th-table`, `.th-sec` (A4). Schedule: `.day`, `.sched-legend`, `.edbar`. Inputs: `.search`, `.caseinput`, `.pinbox`, `.keyin`. Extras: `.confetti`, `.ambient`, `.film` (background video, index.html:53), frames `.fr-*`, backups `.bak-*`, the mascot `.clep`/`.cl-*`.

### 2.3 Two-way map

| App part | Ready-made option on the shelf | Fit |
|---|---|---|
| Module cards, stat tiles, plaque cards (`.mod-card`, `.card`, `.stat`, `.plaque`) | UIverse Cards | Visual style fight likely (app is painted, dark, warm); use as structure/hover ideas. UNVERIFIED which cards. |
| Option rows (`.opt`) | UIverse Radio-buttons and Checkboxes; motion.csv rows 1-3 hover | Partial. Motion: #4 above. |
| Filter chips, bank chips (`.chip`, `.bankchip`) | UIverse Checkboxes / Toggle-switches | Weak. |
| Theme switch, any on/off | UIverse Toggle-switches | Yes, if a toggle exists (`.gate-theme` unverified as a switch). |
| Search, case input, PIN box (`.search`, `.caseinput`, `.pinbox`) | UIverse Inputs, Forms | Yes for the look; app logic stays. |
| Gate sign-in / profile (`.gate`) | UIverse Forms | Possible; gate has Google/file:// logic that must stay. |
| Toast, "new day" notes (`.toast`, `.newday`) | UIverse Notifications; native `@starting-style` (P:173) | Yes. Needs slide, not fade. |
| Tooltips (app has only `title=` text) | UIverse Tooltips | Yes, a real gap in the app. |
| Spinner / splash (`.spinner`, `.splash`) | UIverse loaders; motion.csv rows 15-16 | Yes for spinner; splash stays the owner's art. |
| Progress rings (`.ring`, `.sr-ring`) | GSAP DrawSVG (or native CSS stroke) | Yes, #3. |
| Decorative backgrounds (`.ambient`, gate grid) | UIverse Patterns; Hero Patterns (credit) | Weak. The hall is a painted scene; patterns clash. |
| Icons (app's own `icons.js`) | Lucide, Phosphor, Tabler and others | Yes if the owner wants a consistent set; check each licence. |
| Fonts (app's `fonts.js`) | Shelf fonts, 74 pairings in skill | Yes, optional. |
| Home hall depth and walk-in | ScrollTrigger, Flip, Observer, Lenis snap, View Transitions | Yes (#1, #2, #5, #6). |
| Right/wrong reveal | CustomWiggle / CustomBounce | Yes (#4). |
| Counters, timer digits | ScrambleText or number tween | Maybe. |
| Confetti | none on shelf | Own code exists; off-shelf option read, see 1.1. |
| Corner mascot | MotionPath, Draggable (move only) | Maybe; she is owner art. |
| Modal | Flip origin; Magic CSS slide group | Yes. |
| Page changes | View Transitions, Flip | Yes. |

### 2.4 Plain statement

- App parts WITH a shelf option: cards, option rows, chips, inputs, forms, toast, tooltips (a gap the app has), spinner, rings, hall depth, page transitions, modal entry, icons, fonts.
- App parts with NOTHING on the shelf: the session timer and exam clock as a part (only digit effects), the A4 theory reader and its tables (must stay calm: shelf supplies nothing and nothing should be added), the schedule/calendar `.day` strip, quiz figures and zoom (`.qfig`, `.qzoom`), result/mock summary layout, the verdict panel, the backup list, the pin box logic, charts and graphs (advice only, no code), confetti (own code), sound for right/wrong (generators only, no player, no sound pack), the painted film background, the mascot's art and face rig (owner's).
- Shelf categories the app has no use for: AI page builders (P:429-439), hosting tables (P:372-392), image generators (P:351-370, apart from the owner's own pipeline), inspiration galleries (P:190-211), classless CSS starters (the app has its own tokens), illustration sets and stock photos (style clash with painted art), HTML5 UP templates, 3D engines unless the owner decides to build a 3D hall, accessibility and speed checkers (useful, but they are checks, not parts).

## 3. Files a live test would need (not downloaded)

| Library | File(s) | Where from | Size (bytes) | Licence |
|---|---|---|---|---|
| GSAP core | `gsap.min.js` | Zip "Grab the files", `/minified/` folder, https://gsap.com/docs/v3/Installation/ | 72,927 | Webflow Standard licence, free incl. plugins, https://gsap.com/standard-license/ |
| GSAP plugins (test set) | `ScrollTrigger.min.js`, `Flip.min.js`, `DrawSVGPlugin.min.js`, `CustomEase.min.js`, `CustomBounce.min.js`, `CustomWiggle` (size not measured), `SplitText.min.js`, `MotionPathPlugin.min.js` | same zip | 44,575 / 25,534 / 4,351 / 7,143 / 2,068 / ? / 7,732 / 22,002 | same |
| Lenis | `lenis.min.js`, `lenis.css`, `lenis-snap.min.js` | npm package files (jsDelivr index) or the repo, https://github.com/darkroomengineering/lenis | 18,722 / 513 / 5,844 | MIT |
| anime.js (alternative) | `anime.umd.min.js` | `dist/bundles/` in the npm package | 118,043 | MIT |
| Motion (alternative) | `motion.js` | `dist/` in the npm package | 144,870 | MIT |
| View Transitions | none | built into the browser | 0 | n/a |
| UIverse parts | one HTML file per part, copied | https://github.com/uiverse-io/galaxy | tiny | MIT |

Plan note: a disk test should load each script with a plain script tag from a local folder. I did not run one; "works from file://" is unproven for every row.

## 4. Unverified / gaps

- Nothing was opened from disk. No library was run from file://.
- GSAP: reduced-motion helper (`gsap.matchMedia`) not confirmed this session. CustomWiggle, Inertia and EasePack file sizes not measured. Whether the downloadable zip contains exactly the npm `dist/` file names: only the folder names (/minified/, /UMD/, /ESM/, /src/) were stated.
- Motion 14.1.0: whether layout and gesture features are in the plain `motion.js` build: not checked. The shelf says 14.0.0, the index says 14.1.0.
- anime.js: global name `anime` from its install page; the repo README gave no version.
- Lenis global name implied, not stated.
- Babylon.js size and plain-script build; three.js current build files: from shelf only (I3D:93, :95).
- UIverse: per-category counts (10 of 11 folders) not obtained; shelf row says uiverse.io itself returned 403 (P:398). Whether each part's CSS is stand-alone (works from disk): unverified.
- Poly Haven / Kenney / Quaternius: shelf says CC0; "Gives" column is "not stated" (P:421-423); sound or UI packs from Kenney not on the shelf.
- Safari/iPad versions for native features: depends on the owner's iPadOS, unknown.
- Splide, Swiper, Auto-Animate, lottie-web file:// loading, LottieFiles licence: unverified on the shelf itself (P:170, :176, :179-180).
- canvas-confetti: not on the shelf; size not stated on the page read.
