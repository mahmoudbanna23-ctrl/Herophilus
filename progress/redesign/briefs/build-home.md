# Brief — build the home screen as the library hall

## Goal

In the Herophilus app (vanilla HTML/CSS/JS, opens from `file://`, no framework, no build step, no CDN,
no npm), replace the four subject cards on the home screen with one painted library hall whose four
alcoves are the four subjects. Everything else on home stays, below the hall.

This is a look-and-layout trial on a side branch. It must be easy to merge later while another chat
edits the app's logic, so **the footprint rules below matter as much as the result.**

## Where you work

Worktree: `D:\claude os\Medical school\Herophilus-redesign` (branch `redesign/factory-2026-10`).
**Never read from or write to `D:\claude os\Medical school\Herophilus` — that is a different checkout.**

## What you may change

- CREATE `app/js/hall.js`
- CREATE `app/css/hall.css`
- ADD exactly ONE line to `app/index.html`: `<script src="js/hall.js"></script>`, placed after the
  `render.js` and `clepsydra.js` script tags and before `boot.js`. Match the neighbouring tags' form.
- Anything under `progress/redesign/` (notes, a check script).

Nothing else. In particular ZERO lines in `app/js/render.js`, `storage.js`, `quiz.js`, `boot.js`,
`gate.js`, `theory.js`, `clepsydra.js`, `utils.js`, any existing file in `app/css/`, anything in
`app/data/`. No git command of any kind. No new storage key; never touch a `wardround.*` key.
Do not edit `MEMORY.md`, `CLAUDE.md` or `progress/redesign/RESUME-redesign.md`.

## Read first (locate, then read narrow — never whole files)

Line numbers are from an earlier survey; verify each by grep before relying on it.

- `app/js/render.js`: `go()` (~1-15), the view dispatch that calls `vHome` by name (~70-80),
  `revealOnScroll` (~92-107), `vHome` (~174) and the subject cards it builds (~241-280).
- `app/js/storage.js`: `isLocked` (~274), `qsInModule` (~286), `isAnswered` (~324), `accuracy` (~338),
  `accColor` (~343); also `activeModules()` wherever it lives.
- `app/js/utils.js`: `ring()` (~25), `esc`, `ico`, `termName`.
- `app/js/clepsydra.js`: `poseSrc` (~1), the `CLEP` state object (`on`, `mini`), the `.clep` /
  `.cl-body` markup, `STILL_VIEWS`, `syncFilm`, `setFilm`.
- `app/css/base.css`: the tokens (`--tx`, `--ink`, `--line*`, `--fill`, `--gold`, `--r-sm/md/lg`), the
  theme mechanism (`:root` = dark, `:root[data-theme="light"]` restates tokens), `.page`, the top bar
  height, `.ambient`.
- `app/css/print.css`: read only, to see what print hides.

## How it hooks in (no edits to existing scripts)

`vHome` is a function declaration looked up by name at call time, so `hall.js` can wrap it:

```js
const _vHome = vHome;
vHome = function(){ const r = _vHome.apply(this, arguments); buildHall(); return r; };
```

Check how `vHome` returns or writes its markup (string vs DOM) and adapt: the end state is

- `.hall` is the first thing in the home view;
- everything `vHome` already produced sits after it inside one wrapper `.hall-below`;
- the old "Subjects" heading and its card grid (`.mod-grid`) are removed from `.hall-below`, since the
  alcoves replace them. Nothing else is removed or reordered.

Wrap `syncFilm` the same way to toggle `body.hall-on` while the home view is showing, and switch the
ambient film off there (`body.hall-on .ambient{display:none}` in `hall.css`). Do NOT add `'home'` to
`STILL_VIEWS` — that also silences scroll reveals and the Clepsydra's chatter.

`hall.js` adds its own `<link rel="stylesheet" href="css/hall.css">` to `<head>` when it loads.

## The hall

**Structure.** `.hall` (the box; `container-type:size`) > `.hall-stage` (the thing that transforms) >

1. `.hall-back` — the painting, as a CSS background from a custom property;
2. `.hall-glow` — one soft warm radial gradient per alcove at its lamp position (dark theme only),
   each with a slow irregular flicker; a locked alcove has no glow and a dim veil over it instead;
3. `.hall-dust` — about 30 small motes drifting slowly (CSS only, transform/opacity animation);
4. four `<button class="alcove">` — one per module from `activeModules()`, in that order;
5. `.hall-fore` — the near columns picture, on top, `pointer-events:none`;
6. `.hall-greet` — the welcome line (reuse the text `vHome` already shows; if it is a heading inside
   the old markup, MOVE that element in rather than duplicating it) and, beside it, the Clepsydra
   picture (see below).

**Pictures.** They arrive separately; code for these exact paths and make the hall look deliberate
when a file is missing (a flat warm colour from the tokens behind it, never a broken-image icon):

| Custom property | Dark (`:root`) | Light (`:root[data-theme="light"]`) |
|---|---|---|
| `--hall-wide` | `assets/hall/hall-dark.jpg` | `assets/hall/hall-light.jpg` |
| `--hall-tall` | `assets/hall/hall-dark-tall.jpg` | `assets/hall/hall-light-tall.jpg` |
| `--hall-fore` | `assets/hall/fore.png` | same file, lightened with a CSS `filter` |

Wide pictures are 3:2 with four alcoves in ONE row. Tall pictures are 2:3 with the alcoves as a
2 x 2 grid (order: top-left, top-right, bottom-left, bottom-right). Use the tall picture and the 2 x 2
positions under `@container (max-aspect-ratio: 5/4)` on `.hall`. **Do not write a new
`@media (max-aspect-ratio:5/4)` block** — the project counts those.

`background-size:cover`, centred. Because `cover` crops, position the alcove buttons inside an inner
box that has the picture's own aspect ratio and is sized to cover the stage the same way, so a button
always sits on its alcove whatever the box shape. Put each alcove's box in custom properties
(`--a1-l/-t/-w/-h` … `--a4-…`, percentages of that inner box), one set for wide and one for tall,
declared together at the top of `hall.css` under a comment saying they are tuned to the paintings.
Starting guesses — wide: four columns 22% wide centred at 14.5 / 38 / 62 / 85.5%, from 14% to 86% of
the height; tall: two columns 40% wide centred at 27 / 73%, rows 12-50% and 52-92%. They will be tuned
by a later job once the paintings exist.

**An alcove button** shows, in the lower third of its box: the subject name, a thin progress ring (use
the existing `ring()`), "answered / total" and accuracy when there is any — the same numbers the old
cards show, computed with the same existing functions. Text is real HTML text in the app's fonts. It
sits on a plaque: an opaque-enough fill from the tokens with a hairline, radius from
`--r-sm/--r-md/--r-lg` only. **No `backdrop-filter`.** Text on the plaque must pass WCAG AA (4.5:1) in
both themes — choose the plaque fill so that holds without relying on the paint behind it, and state
the measured ratios in your report.

Hover and keyboard focus: the alcove's glow brightens and the plaque lifts 2px; a clear focus ring.
A locked module (`isLocked`): `aria-disabled="true"`, no click handler, no glow, dim veil, the word the
old card used for locked. Each button has an `aria-label` carrying name and state.

**Motion.** Every moving thing has a physical cause; nothing fades in from nothing.

- Pointer parallax on fine pointers only: `.hall-back` shifts up to ±6px, alcoves/glow ±10px,
  `.hall-fore` ±22px, driven by one `pointermove` listener on `.hall` that writes two custom
  properties inside `requestAnimationFrame`. The back and fore layers are oversized by their travel so
  no edge ever shows.
- Arrival: on entering home the stage starts at `scale(1.06)` and eases to 1 over ~600ms (you step
  back into the hall). If the previous view was a module, the origin is that module's alcove, so it
  reads as stepping back out of it. Keep the "last alcove" in a plain module-level variable.
- Choosing a subject: set the transform origin to that alcove's centre, add a class that scales the
  stage to ~1.9 over ~450ms (transform only; the other three alcoves' plaques slide down out of their
  boxes, they do not fade), then call the existing `go({name:'module', id})`. One-shot guard against
  double clicks. A keyboard activation (`event.detail === 0`) calls `go()` immediately.
- `prefers-reduced-motion: reduce`: no parallax, no arrival, no push-in, no dust, no flicker — every
  loop stopped, and no JS timer left running. Clicking goes straight to `go()`.
- Dust and flicker run only while `body.hall-on` and the hall is on screen (pause with
  `animation-play-state` via an IntersectionObserver).

**The Clepsydra.** She is the owner's own artwork: use her existing picture file exactly as it is —
never redraw, recolour, filter, crop or draw anything onto her. In `.hall-greet`, show one
`<img src="…">` of her welcoming pose from `poseSrc('welcoming')` (check the real pose name), at most
180px tall, `alt=""`, only when `CLEP.on && !CLEP.mini`. While the hall is on screen, hide the corner
figure's body (`.clep .cl-body` — verify the selector) so there are never two of her; when the hall
scrolls out of view, or on leaving home, the corner figure returns. Do it with a class on `<body>`
set by the same IntersectionObserver; do not change her code, her glitch, or the stacking order
(Clepsydra 150, gate 200, confetti 250, modal 300, toast 400).

**Layout.** While `body.hall-on` (screen only): `.page` loses its max-width and padding; `.hall` is
full width and `calc(100svh - <top bar height>)` tall, min 420px; `.hall-below` is re-centred at the
page's normal max-width with its normal padding. Do not put `overflow:hidden` or a `transform` on
`.hall-below` — `revealOnScroll` needs its children observable. Hall elements must not use the
classes `revealOnScroll` targets (`.card`, `.stat`, `.ch-row`, `.th-ch`, `.day`, `.chip`).

**Print.** Put every hall rule inside `@media screen{}` and add
`@media print{.hall{display:none!important}}` so a printed home page is exactly what it is today
minus the subject cards' replacement. Do not edit `print.css`.

**House style.** No emoji anywhere. No chirpy copy; reuse existing strings. Radii only from the three
tokens. Text colour from `--tx`/`--ink`, hairlines from `--line*`, raised fills from `--fill` — the
three families never substitute for one another. Match the comment density and naming of the
neighbouring files. Classic script, no ES module, no `import`.

## What you must verify, and how

1. `node tools/boot-check/boot-check.js` from the worktree root: report its output lines verbatim.
   It refuses to run under a path containing `--`; if it needs a work folder, use
   `D:\scratch 2026\redesign\`.
2. A small check script `progress/redesign/check-hall.mjs` (headless Chrome, one instance at a time,
   fresh `--user-data-dir` under `D:\scratch 2026\redesign\`, never a path containing `--`; model it
   on `progress/app-replan/p5/shoot-home.mjs` and on how `tools/boot-check/boot-check.js` stubs the
   gate and seeds a profile). It must assert, and print one PASS/FAIL line each: 0 console errors;
   exactly 4 `.alcove` in home; `.mod-grid` absent from home; the stat/plan/Continue blocks still
   present in `.hall-below`; a locked module (if any exists) is `aria-disabled`; both themes set a
   different `--hall-wide`; with `print` media emulated `.hall` computes to `display:none`; with
   reduced motion emulated no hall element has a running animation; activating an alcove lands on
   that module's view.
3. `git -C` is not yours to run. Instead list, at the end, every file you created or changed.

## Not your job

The paintings, converting them, tuning alcove positions to them, and the screenshots for the owner —
a later job does those. Do not generate, fetch or draw any image. Do not add a library.

## Report (max 150 words)

Files created/changed · the one line added to `index.html` and where · boot-check result verbatim ·
each `check-hall` line · measured plaque contrast ratios (both themes) · anything in this brief that
did not match the real code and what you did instead · anything left undone. Stop at about 60 tool
calls and report honestly even if unfinished; your files on disk are the hand-over.
