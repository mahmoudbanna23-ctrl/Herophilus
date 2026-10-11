# Build B, round 2 — doors on the scroll, upright hall paintings

You are one bounded builder job. Read this brief, then in
`progress/redesign/briefs/round2-plan.md` only the sections "Footprint rule", "4. Doors",
"5. Upright hall" and "Verification". Sections 1-3 (scroll cue, warm skin, rail) and 6
(lettering) are DONE by other jobs: do not redo or undo them.

## Where
Worktree `D:\claude os\Medical school\Herophilus-redesign`, branch `redesign/factory-2026-10`.
Never touch `D:\claude os\Medical school\Herophilus` (the main checkout). No git writes at all:
no add, commit, push, stash, checkout. The orchestrator commits.

## Write grant (nothing else may be created or changed under the worktree)
- `app/js/hall.js` — doors (markup, timeline beat, preload, fallbacks) and tall-painting alcove
  coordinates only.
- `app/css/hall.css` — door leaves, daylight filter, `--hall-tall`.
- `app/assets/hall/door-l.png`, `door-r.png`, `hall-dark-tall.jpg`, `hall-light-tall.jpg` — new.
- `progress/redesign/shots/r2b-*.png` — new stills.
- Scratch: `D:\scratch 2026\redesign\round2b\` (scripts, Chrome profile; no `--` in any path).

Zero lines in: `app/index.html`, `warm.css`, `type.css`, `render.js`, `storage.js`, `quiz.js`,
`boot.js`, `gate.js`, `theory.js`, `clepsydra.js`, `tokens.css`, `base.css`, `layout.css`,
`components.css`, `views.css`, `print.css`, anything under `app/data/`. No `wardround.*` key.
If the job cannot be done inside this grant, STOP and report why; do not widen it yourself.

## What the owner asked for
The home screen opens on the outside of the library with its bronze doors SHUT. Scrolling opens
the doors, then walks in to the hall. On an upright iPad the hall uses its own upright painting
instead of a cropped wide one.

## Inputs (read-only, never edit or move them)
- Doors picture: `progress/redesign/paint/doors.png` (1024x1536, one painting of both leaves,
  shut, front-on). The orchestrator's message says whether its background is transparent or
  flat `#B8C4D6`; if flat, key it out in your cut script and check the edge for a blue fringe.
- Upright halls: `progress/redesign/paint/hall-dark-tall.png`, `hall-light-tall.png` (1024x1536).
- Cut method to copy: the scripts used for `progress/redesign/samples/parts/` (find them under
  `D:\scratch 2026\redesign\`; list, do not guess names).

## Doors — rules beyond the plan section
- Line numbers in the plan (`hall.js:47`, `:96-102`, `:293-299`, `:422-443`) predate build A.
  Locate by name (`DOOR`, `clipFor`, `decodePaintings`, `startWalk`), never by number.
- Find the real centre seam by measuring the picture (column darkness profile), not by halving
  the width. Report the seam column.
- LOOK at both cut leaves and at the doors in place at all three sizes: each leaf whole, no
  sliver of the other leaf, no fringe, arch top sits inside the painted doorway, no gap showing
  hall at the seam or the jambs while shut.
- Transform only (`rotateY`, `perspective`); no layout property animated. The existing timeline
  library and pin are reused; no new library.
- Shut at scroll 0. Fully open before the zoom starts. Scrolling back re-closes them in step.
- Reduced motion, and the no-library fallback branch: leaves hidden, doors already open. Never a
  shut door that cannot be opened.
- Keyboard users still reach the four alcoves; nothing new takes focus.
- Light look: same two files, CSS `filter` only.
- No entrance that fades in from nothing: the doors are there from first paint (preloaded).

## Upright hall — rules beyond the plan section
- Convert the two tall PNGs to JPG (quality about 85; report the KB). Use tooling already on the
  machine (PowerShell `System.Drawing`, or headless Chrome canvas); install nothing.
- Alcove hit-areas for the tall painting: measure them by LOOKING at the tall painting, give
  each as percentages, and prove them with a still that draws the four boxes over the painting
  (debug still only; no outline in the shipped look).
- Used only where today's code already chooses the tall variant (portrait). Landscape unchanged.

## Hard look rules
- Plain HTML/CSS/JS, no framework, no build step, no CDN, must open from `file://`.
- No emoji, no colour changes outside the doors, no `backdrop-filter` on cards, rows or options.
- The Clepsydra pictures are not touched, re-coloured or filtered.
- Screen only; printing unchanged.

## Method notes that cost earlier runs
- After CSS edits confirm the rules are live: enumerate `document.styleSheets`, count
  recursively.
- Screenshots: copy `D:\scratch 2026\redesign\round2\shoot-r2a.mjs` into your scratch folder as
  the model; do not edit the original. Headless Chrome, fresh `--user-data-dir` with no `--` in
  the path, one Chrome at a time, retry a silent failure. A scroll-driven scene needs the scroll
  set AND the timeline ticked before the still; a still of a mid-swing door must show a
  mid-swing door, so check it.
- Write scripts with the Write tool, never shell heredocs (backslashes and backticks get mangled).

## Stills to produce (`progress/redesign/shots/`)
`r2b-<1440x900|1180x820|820x1180>-<dark|light>-<doors-shut|doors-opening|hall|below>.png` (24),
`r2b-<size>-dark-reduced.png` (3, reduced motion), `r2b-820x1180-<dark|light>-alcove-boxes.png`
(debug). LOOK at every still yourself before reporting; say what you saw, including what is ugly.

## Checks you run before reporting
1. `node tools/boot-check/boot-check.js` from the worktree root: paste its last lines.
2. 0 console errors from `file://` at the three sizes, both looks.
3. `git -C "<worktree>" status --short -- app` lists only files in the write grant (plus files
   the earlier jobs own, already there).
4. Doors: angle at scroll 0, at the end of the door beat, and after scrolling back to 0.
5. Reduced motion: leaves not visible, alcoves clickable.
6. Weight of the four new picture files in KB.

## Budget and report
Close out at 60 tool calls; be stopped by 80 even with work left. A partial pass reported
honestly is a success. Write the report as you go to
`D:\scratch 2026\redesign\round2b\build-b-report.md`: what was done, each check's result, every
file touched, what is NOT done, anything ugly or doubtful. Your final message: at most 15 lines,
verdict first.
