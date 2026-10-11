# Build: lettering, pair 5 — GFS Didot (titles) + Libre Caslon Text (reading)

You are one bounded builder job. Read this brief, then in
`progress/redesign/briefs/round2-plan.md` only the sections "Footprint rule" and
"6. Typography". Do nothing from sections 1-5: other jobs own them.

## Where
Worktree `D:\claude os\Medical school\Herophilus-redesign`, branch `redesign/factory-2026-10`.
Never touch `D:\claude os\Medical school\Herophilus` (the main checkout). No git writes at all:
no add, commit, push, stash, checkout. The orchestrator commits.

## Write grant (nothing else may be created or changed under the worktree)
- `app/css/type.css` — new.
- `app/js/hall.js` — only: inject one more stylesheet link, `css/type.css`, the same way
  `css/warm.css` is injected near line 42, and AFTER it.
- `progress/redesign/shots/type5-*.png` — new stills.
- Scratch: `D:\scratch 2026\redesign\type5\` (scripts, Chrome profile; no `--` in any path).

Zero lines in: `app/index.html`, `app/data/*` (incl. `data/fonts.js`), `tokens.css`, `base.css`,
`layout.css`, `components.css`, `views.css`, `print.css`, `warm.css`, `hall.css`, `render.js`,
`storage.js`, `quiz.js`, `boot.js`, `gate.js`, `theory.js`, `clepsydra.js`. No `wardround.*` key.
If the job cannot be done inside this grant, STOP and report why; do not widen it yourself.

## What the owner said
He asked to "find font types and typography that matches the theme" (ancient Alexandria,
Greek), saw six pairs one by one and answered "5".

## The faces (already on disk, all SIL OFL 1.1, licence files beside them)
`progress/redesign/samples/lib/fonts/`:
- `gfsdidot/` — GFS Didot Regular. Titles, plaques, headings (`--font-display`).
- `librecaslontext/` — Libre Caslon Text, upright and italic. NOTE: the files on disk are
  VARIABLE (`[wght]`). Reading text (`--font-body`).
- `gentiumbookplus/` — Gentium Book Plus Regular / Italic / Bold. Stand-in built in BEHIND
  Libre Caslon, because Libre Caslon has no less-or-equal, no greater-or-equal, no Greek and
  (see `D:\scratch 2026\redesign\round2\type\glyph-table.md`, read its header row and the three
  rows for these faces) several other signs.
List each folder first; never write a file name from memory.

## What to build — `app/css/type.css`
- Everything inside `@media screen`. Printing keeps today's lettering; print rules must be
  untouched.
- `@font-face` with the font bytes as base64 `data:` URLs (the app must work from `file://` in
  every browser; relative font URLs do not).
- Reserved Font Names: GFS Didot and Gentium are embedded UNMODIFIED. No subsetting unless a
  tool already installed does it AND the subset family is renamed; installing anything is not
  allowed. Default: whole files. Report the size of `type.css` in KB.
- Libre Caslon variable files: declare `font-weight` as a range so bold is real, never faux.
  If the range does not reach 700, say so and what the real maximum is.
- Override only the two tokens on `:root`:
  `--font-display: 'GFS Didot', <the existing fallbacks from tokens.css:39>`
  `--font-body: 'Libre Caslon Text', 'Gentium Book Plus', <the existing fallbacks from tokens.css:40>`
  Keep the old first names (Cinzel, EB Garamond) in the fallback chain, after the new ones.
- `font-synthesis: none` where the new faces apply, so no faux bold or faux italic appears.
  GFS Didot has ONE weight and no italic on disk: find every place the app sets a title in bold
  or italic (grep `font-display`), and make sure it shows real Didot regular there, not a
  missing face. Say what you did.
- Typography rules, plan section 6: tracked capitals for titles and plaques; old-style figures
  in prose but lining tabular figures in stats, scores, timers and doses (only where the face
  really has the feature: check, do not assume); true small caps only if the face has them;
  measure 60-75 characters on the theory sheet ONLY if it can be done without changing the A4
  box or the page count.
- Libre Caslon italic has a decorative "st"/"ct" ligature. If it shows in running text, turn it
  off (`font-variant-ligatures: no-discretionary-ligatures`).
- Size check: Didot and Caslon are wider and larger on the body than Cinzel / EB Garamond. If
  text overflows a button, a rail item, a chapter row, a stat or an option, fix it with a size
  or tracking value in `type.css`, never by editing another sheet.

## Hard rules
- Plain HTML/CSS/JS, no framework, no build step, no CDN, must open from `file://`.
- No emoji. No colour changes. No layout changes beyond what a face swap forces.
- The theory reader sheet stays an A4 box and stays dark; its box is not resized.
- The Clepsydra pictures are not touched.
- Dose safety: superscript and subscript digits, micro, degree, plus-minus, times, less-or-equal,
  greater-or-equal and Greek letters must each render from Libre Caslon or Gentium Book Plus,
  never from a system face. Prove it: in the live page, for a test string holding all of them,
  report which face rendered each sign (Chrome DevTools protocol `CSS.getPlatformFontsForNode`,
  or measure widths against each face alone). A plausible-looking wrong sign is the worst
  outcome of this job.

## Method notes that cost earlier runs
- A second builder may be working in this worktree on `warm.css` and re-shooting stills. Do not
  touch its files; use your own Chrome profile folder under `D:\scratch 2026\redesign\type5\`.
- After writing CSS confirm it is live: enumerate `document.styleSheets`, count rules
  recursively, find `type.css`; and `document.fonts.check()` / `document.fonts` status "loaded"
  for each new family.
- Screenshots: copy `D:\scratch 2026\redesign\round2\shoot-r2a.mjs` into your scratch folder as
  the model; do not edit the original. Headless Chrome, fresh `--user-data-dir` with no `--` in
  the path, retry a silent failure. Wait for `document.fonts.ready` before every still.
- A backslash or a backtick typed inside a shell heredoc gets mangled here: write scripts with
  the Write tool, not heredocs.
- Base64 of a font is long: generate `type.css` with a small node script, never by hand.

## Before / after measurements
1. Theory page count on two long chapters (pick the two longest by rendered A4 pages; name
   them): pages before (type.css link removed in a scratch copy, or a query switch in YOUR
   shoot script, never by editing app files twice) and after. Any table now clipped by the
   sheet's `overflow:hidden` is a fault: list it.
2. One theory page printed to PDF before and after: page count must be identical (print keeps
   the old faces; this proves `type.css` did not leak into print).
3. First paint: does text flash in the old face before the new one lands? Say what you saw.

## Stills to produce (`progress/redesign/shots/`)
`type5-<1440x900|1180x820|820x1180>-<dark|light>-<home|module|question|theory>.png` (24), plus
`type5-dose-line.png`: the dose test string at reading size, both looks. LOOK at every still
yourself before reporting; say what you saw, including what is ugly.

## Checks you run before reporting
1. `node tools/boot-check/boot-check.js` from the worktree root: paste its last lines.
2. 0 console errors from `file://` at the three sizes, both looks.
3. `git -C "<worktree>" status --short -- app` lists only `app/css/type.css` and `app/js/hall.js`
   (plus whatever the other builder owns in `warm.css`; not yours).
4. The which-face-rendered-each-sign table.
5. The before / after numbers.

## Budget and report
Close out at 60 tool calls; be stopped by 80 even with work left. A partial pass reported
honestly is a success. Write the report as you go to
`D:\scratch 2026\redesign\type5\build-type-report.md`: what was done, each check's result, every
file touched, what is NOT done, anything ugly or doubtful. Your final message: at most 15 lines,
verdict first.
