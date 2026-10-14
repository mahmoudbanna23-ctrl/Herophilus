# Slice 3 job 3 — one question screen for the eyes subject (builder brief)

ROUTE-OK: gateway down.

## §0 Marching orders
- Hand back at ~60 tool calls, stopped by 80, even with work left. Partial work reported honestly
  is a success. Write status to `progress/redesign/build/city-question-STATUS.md` AS YOU GO
  (Edit-append), so a replacement can resume from the file.
- Work ONLY in `D:\claude os\Medical school\Herophilus-redesign`. NEVER write in
  `D:\claude os\Medical school\Herophilus` (the live copy). No git at all — main chat commits.
- Scratch, test scripts, screenshots: `D:\scratch 2026\city-question\` (no `--` in any path).
- Never read images yourself beyond what you need to check your own crop; no image may leave
  the trial copy.

## Read first (narrow)
1. `progress/redesign/PLAN-city-2026-10-13.md` sections "Hard limits" (lines 51-66) and
   "Quiet screens" (135-145) and the hooks list (161-163).
2. `progress/redesign/build/city-room-STATUS.md` (35 lines) — how job 2 was built and tested.
3. `app/css/ui.css` (94 lines; already holds sheet, row, rule, act).
4. `app/js/quiz.js` — `vQuiz` from line 336 only (and the option-render / answer handlers it
   calls; grep, do not read the whole file).
5. `D:\scratch 2026\city-room\room-test-r1.js` — copy its harness pattern (CDP,
   `Emulation.setDeviceMetricsOverride`; headless --window-size clamps near 500 wide).

## The job
Restyle the ONE question screen (`vQuiz`, single-question practice view) so that, when opened
from the eyes (ophtho) room, it sits on the seven ui.css parts:
- Add to `app/css/ui.css` the three missing parts: `stage` (room plate behind + veil),
  `folio` (text column), `plaque` (results numeral — define it, only use it if vQuiz shows a
  score). Keep `sheet`, `row`, `rule`, `act` as they are unless a fault forces a change.
- `stage`: the eyes room plate `assets/city/room-ophtho-dark.jpg` behind, DIM and STILL —
  no film, no mist, no motion; mascot stays hidden on this view (`body[data-view]`, render.js).
- `folio`: a readable text column for the stem (calm to read).
- Options are LETTERED ROWS (A, B, C…) built on `row`. Picking one draws a gold `rule`
  (scaleX transform). Right / wrong after answering carry a MARK (a glyph or word, e.g. a tick /
  cross with text), NEVER colour alone. Must hold for 2-10 options (the bank has up to 10).
- Use `act` for the lettered actions (next, flag, etc.) already on the screen.
- Scope: eyes subject only for the stage plate. Other subjects must still work and look no
  worse — if the stage plate is subject-specific, other subjects get the plain veil.

## Must keep (grep after editing — every one present and still working)
`.stem`, `.opts .opt`, `.qg.cur`, `mark.hl`, `#examClock`, `#qNote`, `.ex-head`, and EVERY
`onclick` function name in the markup you touch (list them before you edit, diff after).
Markup changes only inside template literals; quiz logic untouched.

## Hard limits (from the plan)
- Never touch `app/data/*`, `js/storage.js`, `utils.js`, `theme.js`, `icons.js`, `js/lib/*`,
  `css/print.css`, mascot artwork. No new storage key.
- Vanilla, no CDN, works from `file://`.
- CSS animates transform, opacity, clip-path only. No hover lift, idle pulse, spinning icons,
  pills, emoji. No entrance from nothing.
- Reduced motion: the rule appears without animating.
- Text on colour: measure contrast (AA), against the darker side of any gradient/veil.
- Print: the question must still print (check `css/print.css` is not defeated by stage/veil;
  if it is, hide the stage in ui.css under `@media print`, do not edit print.css).
- Light theme must not break (tokens only).

## Checks you run before calling it done
1. `node tools/boot-check/boot-check.js` (from the trial copy root) — 0 console errors.
2. A test script `D:\scratch 2026\city-question\q-test.js` (pattern of room-test-r1.js):
   opens the eyes room, enters a question, picks an option, asserts: rule drawn, mark text
   present on right and wrong options, all hooks present, every onclick name resolves to a
   function, no console errors. Also one non-eyes question opens clean.
3. Screenshots via CDP at 1440x900, 1180x820, 820x1180, 390x844: before answering, after
   picking, after answering wrong. Save as `q-<state>-<w>x<h>.png` in the scratch folder.
   Look at one of them yourself to confirm nothing is grossly broken.
4. Confirm a CSS rule you added is live in the page (enumerate `document.styleSheets`).

## Report back (short)
Files changed, test pass/fail counts, screenshot paths, anything skipped or left broken.
