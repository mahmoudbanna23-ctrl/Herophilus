# Fix pass, round 2 — what the look-over of the build A stills flagged

You are one bounded builder job. Read this brief, then in
`progress/redesign/briefs/round2-plan.md` only "Footprint rule" and "Verification", and in
`progress/redesign/briefs/build-round2-a.md` only "Hard look rules". Build A (warm skin, rail) and
the lettering job (`app/css/type.css`, pair 5) have landed; you fix faults, you do not redesign.

## Where
Worktree `D:\claude os\Medical school\Herophilus-redesign`, branch `redesign/factory-2026-10`.
Never touch `D:\claude os\Medical school\Herophilus` (the main checkout). No git writes at all.

## Write grant (nothing else may be created or changed under the worktree)
- `app/css/warm.css` — fixes.
- `progress/redesign/shots/r2f-*.png` — new stills.
- Scratch: `D:\scratch 2026\redesign\round2fix\` (scripts, Chrome profile; no `--` in any path).

Zero lines anywhere else, `type.css`, `hall.css`, `hall.js` and `app/index.html` included. If a
fault cannot be fixed from `warm.css`, do NOT fix it: report it with the file and line that owns it.

## Faults to fix (a Haiku helper looked at all 28 `r2a-*` stills; worst first)
1. Dark look, chapter rows on a subject page: gold outline plus glow on every stacked row is too
   loud. At rest a hairline only (`--line*` family); the gold edge and glow appear on hover and
   keyboard focus only. Same treatment for the stat cards under the hall.
2. Left bar at 820 px height (1180x820): "Mock exam" is cut at the bottom edge. Everything in the
   bar must fit at 820 px height with no scrolling: tighten the key bands and paddings under a
   `max-height` query. Same markup, same order.
3. 820 wide, subject tiles under the hall: tile text illegible. Find out why (size, contrast or
   clipping) and fix.
4. Contrast, question page: dark look, the grey explanation text is dim; light look, the
   explanation strip is tan on tan and the "Check answer" button is nearly invisible. Bring each
   to AA (4.5:1 text, 3:1 for the button edge against its ground).
5. `--ink-4` measured 4.00:1 on `--fill` and 4.27:1 on the hover tint: raise the surface/tint
   side in `warm.css` (text tokens stay as they are) until 4.5:1, or report why not.
6. Streak box text in the left bar: measure; fix if under 4.5:1.
7. Keyboard focus ring measured 2.34:1: give `:focus-visible` a ring of at least 3:1 against
   every dark and light surface it lands on. Do not change a subject colour token to get there.
8. Flag and Skip buttons on the question page show a blue underline. Find where it comes from;
   if it is a leftover blue, warm it; if it is a deliberate link colour, report and leave it.
9. Left bar title wraps ("Q-" / "BANK") with the new lettering: one line at all three sizes
   (size or tracking, in `warm.css`, scoped to the bar title).
10. Any other spot where the new lettering made a warm-skin rule wrong (a clipped pill, a button
    whose label now wraps): fix if it lives in `warm.css`, else report.

## Not yours — report, do not touch
- The mascot's speech bubble covering a chapter count or explanation text (her position and code).
- Purple and other subject-coloured buttons (subject colours are fixed).
- Sky colour inside the paintings.
- The "Sample pop-up" in the modal still: say whether it is the shoot script's own test pop-up or
  something in the app.

## Method notes that cost earlier runs
- A doors job may start in this worktree after you; it owns `hall.js` / `hall.css`.
- After CSS edits confirm the rules are live: enumerate `document.styleSheets`, count recursively.
- Contrast: composite alpha over the real ground, measure against the DARKER stop of a gradient;
  a run where everything fails identically is a broken probe. Model:
  `D:\scratch 2026\redesign\round2\contrast.mjs` (copy, do not edit).
- Screenshots: copy `D:\scratch 2026\redesign\round2\shoot-r2a.mjs` into your scratch folder.
  Headless Chrome, fresh `--user-data-dir` with no `--` in the path, one Chrome at a time, retry a
  silent failure, wait for `document.fonts.ready`.
- Write scripts with the Write tool, never shell heredocs.

## Stills to produce (`progress/redesign/shots/`)
`r2f-<1440x900|1180x820|820x1180>-<dark|light>-<home-below|module|question|theory>.png` (24) and
`r2f-1180x820-<dark|light>-rail.png` (the whole left bar). LOOK at every still yourself; for each
fault above say fixed / not fixed / not reproducible, naming the still.

## Checks you run before reporting
1. `node tools/boot-check/boot-check.js` from the worktree root: paste its last lines.
2. 0 console errors from `file://` at the three sizes, both looks.
3. `git -C "<worktree>" diff --stat -- app` shows only `app/css/warm.css` changed by you.
4. Contrast numbers before and after for faults 4-7.
5. Print rules untouched: everything you add sits inside `@media screen`.

## Budget and report
Close out at 60 tool calls; be stopped by 80 even with work left. A partial pass reported
honestly is a success. Write the report as you go to
`D:\scratch 2026\redesign\round2fix\build-fix-report.md`. Final message: at most 15 lines,
verdict first.
