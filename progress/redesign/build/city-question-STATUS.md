# Question screen (slice 3, job 3) - status 2026-10-14

State: BUILT and TESTED. boot-check 0 errors (7477 / 153 / 4 / 162). CDP test `D:\scratch 2026\city-question\q-test.js`: 44 pass, 0 fail. Screenshots `q-{before,picked,wrong}-{1440x900,1180x820,820x1180,390x844}.png` + `q-ten-1440x900.png`, `q-ent-wrong-1440x900.png`, `q-light-1440x900.png` in the same folder (sizes asserted by the test).

## Files
- `app/css/ui.css`: added `stage`, `.stage-eyes`, `folio` (`#page .qcard.folio` + option rows, marks, rule, actions, verdict), `plaque` (defined, not used: vQuiz shows no score). `@media print{.stage}` hidden.
- `app/js/quiz.js`, `vQuiz` template literals only: `.stage` div first in `.qwrap` (`stage-eyes` when `q.module==='ophtho'`); `qcard folio`; each option gets class `row` and a `.rule` (`draw` before Check, static after); mark = glyph + word ("Correct" / "Wrong"); actions `btn go/sec` -> `act` (`act-go` for the primary, `aria-label` on the back arrow); chapter pill -> `.folio-ch` text. Logic untouched. onclick names: all 13 present (diff checked).
- Original quiz.js: `D:\scratch 2026\city-question\quiz.orig.js`.

## Decisions
- `#page` prefix beats the warm.css `:root:not([data-theme=light]) .opt...` chains; no `!important` except bank pills (inline fill).
- Plate: dark wash .68 over `room-ophtho-dark.jpg`, fixed, no motion. Light theme and every non-eyes subject get the plain veil (page colour 60%).
- Folio backing = page colour 90%. Contrast measured in test, worst case (dark: over pure white): all text >= 4.58:1 dark, >= 4.5 light. Light wrong mark pulled toward `--tx` (light `--bad` was 4.3:1 on the tinted row).
- Wrong/correct tint 12%.

## Left / notes
- The Clepsydra companion (old `.clep`, bottom-left bubble) still shows on the quiz view as before; it is not the city mascot and was not touched. Its bubble overlaps the lower folio on narrow heights (pre-existing).
- `vCase`, `vResults` etc. not restyled (job scope = single-question view). `.qcard`/`.btn` look unchanged there.
- Old `.pill` rules for bank pills still apply outside the folio.

## Fix round 1 - mascot ruling (2026-10-14)
- `ui.css`: `body[data-view="quiz"] .clep{visibility:hidden;pointer-events:none}`. visibility, not display: her box keeps its place (clepPlace still measures it), markup and clepsydra.js untouched, bubble and tools hidden with her and no longer focusable.
- `q-test.js`: mascot check is real pass/fail (hidden + no clicks on the question view). New check: startSession then the quiz opens, rail clock `#navSessClock` 25:00 -> 24:57 over 2.3 s while she is hidden (tick keeps running); room and city show her again (visible, box inside the window). 47 pass, 0 fail. boot-check 0 errors. Four sizes x three states re-shot.
- Note: data-view is `quiz` for cases and exam papers too (same view name), so she is hidden there as well; `mock`/`review`/`results` views not covered by this rule (job scope).

## Fix round 1 - looker findings (2026-10-14)
State: DONE. boot-check 0 errors (7477 / 153 / 4 / 162). `q-test.js`: 64 pass, 0 fail. Before/picked/wrong x 4 sizes, `q-light-1440x900.png` (settled) re-shot; new `q-clock-<size>.png` x 4 (session running, scrolled to the end).
1. Light focus ring: `ui.css` light block sets `outline-color:var(--tx)` for `.act`, `.sheet-close`, `.sheet`, option answer, previous-choice summary. Measured 12.0:1 on parchment (gold was ~1.4:1). Dark ring unchanged (gold, 7.5:1).
2. Session cues: the old whole-box hide is gone. On `body[data-view=quiz]` her figure (`.cl-body`), bubble, tools and collapsed pill are `display:none`; the `.cl-hud` clock stays, as a quiet full-width band along the bottom edge (starts at `--strip-w` where the strip shows, 601px and up). Chosen because the folio column starts at x 230 at 1180 and 68 at 820 and fills 390, so any corner pill would sit on text at three of the four sizes. `.qwrap` gets 44px bottom margin and the toast moves up 48px while the band is there. No session: whole box `display:none`. Asserted at 1440x900, 1180x820, 820x1180, 390x844, scrolled to the end: band overlaps neither the text column nor the strip, no text row under it. There is NO pause control inside the Clepsydra (her tools are ?, mute, collapse; pause lives only on the session screen), so none was kept or lost. Toast: `room.js` wraps global `clepSay` (reassign by name, like `syncFilm`); on the quiz view it also calls `toast()` with her text (`**` stripped), mirroring her own gate (on, text, not muted/collapsed unless forced). `clepsydra.js` untouched. Tested: `advancePhase(true)` on the question view -> clock reads Break, toast "Break early, then. 5 minutes.".
3. Rule replay: `quiz.js` `ruleFresh` flag (module var; set in `pick()`, consumed in `vQuiz`); `draw` class only on the render after a pick. Flag re-render shows the rule drawn, no running `uiRule` animation. Picking another option draws on the new row. (Two small logic touches: one assignment in `pick()`, one const in `vQuiz`.)
4. "Previous choice": `#page .folio details.lastgo` = square, one left hairline, no capsule, 44px summary; asserted radius 0px at all 4 sizes.
5. Tidy: duplicate `.clep` rule and comment removed; header comment of `ui.css` updated.
6. Top-left small framed figure (about x 26, y 71 at 1440): `elementFromPoint` = `.railprof .rav img`, `assets/av/herophilus.jpg`, the profile avatar chip in the strip (the test profile's picture). Not the Clepsydra. Left as is.
Left: nothing open. Not covered: `mock`/`review`/`results` views (same `.clep` band rule is keyed on `data-view=quiz` only).
