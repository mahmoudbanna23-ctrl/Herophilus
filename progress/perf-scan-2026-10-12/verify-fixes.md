# Verify the three uncommitted fixes - 2026-10-12

Baseline = `git archive HEAD app` (scratch `base\app`); fixed = working-tree `app` copy (scratch `fixed\app`). Confirmed before measuring: `dueSet` count in quiz.js base 0, fixed 2; `gateUp` in render.js base 0, fixed 3; btn-ring rule in views.css base 0, fixed 1. Harness: `D:\scratch 2026\perf-scan\verify-fixes.mjs` (reuses measure.mjs CDP code and probe-head/probe-end). Raw JSON: `vf-t1.json`, `vf-t2.json`, `vf-t3.json`, `vf-t4.json`, `vf-seed.json` in the scratch folder. Headless Chrome 154.0.8037.98.

## Verdicts

| test | verdict |
|---|---|
| T0 boot-check | PASS |
| T1 idle cost (A1) | PASS - fixed removes the 3 running `orbit` animations and roughly halves idle task time |
| T2 not over-applied | PASS, with limits (theory view unreachable as shipped; mock has no `.btn`) |
| T3 gate film (A2) | PASS |
| T4 dueSet (A3) | PASS on output equality; NO measurable speed gain at this deck size |
| T5 errors | PASS - 0 on every load |

## T0 - boot-check, verbatim

```
browser   chrome.exe
QUESTIONS 7126   THEORY 153   MODULES 4   chapters 171
Q_OPHTHO  1273   module cards in DOM 4
chapter rows rendered 171 (168 with questions, 3 empty — empty is deliberate)
  per module: ent 30 · ophtho 39 · neuropsych 42 · pediatrics 60
console errors: 0
```

## T1 headline (task ms over 5 s window, median)

| rate | a base | b fixed | c base+scan off | d fixed+scan off |
|---|---|---|---|---|
| 1 | 874.8 | 495.1 | 1001.2 | 56.7 |
| 4 | 3720.2 | 1751.0 | 3422.4 | 264.5 |

Reading: scan-off alone does not help base (c is within noise of a), so the button ring is the lever; with the ring gone the `cl-scan` animation is the next ~440 ms (rate 1) / ~1490 ms (rate 4) of idle cost. Spread between 3 runs is wide on base at rate 4 (2944-4022) but ranges for a vs b do not overlap.

## Could not measure / limits

- Theory view: `THEORY_LOCKED` redirects `go({name:'theory'})` to home, and assigning `THEORY_LOCKED=false` from the page did not unlock it (probably a `const`). T2 therefore tests theory only CSS-wise: `body.dataset.view='theory'` set by hand on the home DOM, the `.btn::before` animation went to `none` in fixed and stayed `orbit` in base. The real theory view was not rendered.
- Mock view: no `.btn` is present on the mock landing view, so zero running orbit there is vacuous in both variants.
- Home on first visit has no `.btn` until a quiz has been opened (the Continue button appears after), hence the 0 on the first home row; "home again" row is the real home reading (orbit 1 running in fixed and base).
- T3 real-gate page reports QUESTIONS.length 0 (no profile entered yet); the 7126 sanity check was applied on T1/T2/T4 loads (all 7126, profile `heavy`, 3000 answers).
- Slow-network behaviour, a real display (headless only), and long-run memory were not measured.

## T5 - console errors

0 console errors, 0 uncaught exceptions on every load in T1, T2, T3, T4 (CDP Runtime.exceptionThrown, Log error entries, console.error, plus the page's own `__errs` probe via `__sanity().errs`); T0 also 0.

## T2 - A1 not over-applied (orbit animations by view)

Heavy profile, rate 1, 800 ms settle per view.

| variant | view | body[data-view] | orbit total | orbit running | .btn count | ::before animationName (first .btn) | note |
|---|---|---|---|---|---|---|---|
| fixed | home | home | 0 | 0 | 0 |  |  |
| fixed | quiz | quiz | 0 | 0 | 3 | none |  |
| fixed | results | results | 0 | 0 | 2 | none |  |
| fixed | review | review | 0 | 0 | 3 | none |  |
| fixed | theory (as shipped, THEORY_LOCKED redirect) | home | 1 | 1 | 1 | orbit |  |
| fixed | theory (forced unlock) | home | 1 | 1 | 1 | orbit |  |
| fixed | theory (CSS-only: data-view set by hand on home DOM) | theory | 0 | 0 | 1 | none |  |
| fixed | mock | mock | 0 | 0 | 0 |  |  |
| fixed | home again | home | 1 | 1 | 1 | orbit |  |
| base | home | home | 0 | 0 | 0 |  |  |
| base | quiz | quiz | 3 | 3 | 3 | orbit |  |
| base | results | results | 2 | 2 | 2 | orbit |  |
| base | review | review | 3 | 3 | 3 | orbit |  |
| base | theory (as shipped, THEORY_LOCKED redirect) | home | 1 | 1 | 1 | orbit |  |
| base | theory (forced unlock) | home | 1 | 1 | 1 | orbit |  |
| base | theory (CSS-only: data-view set by hand on home DOM) | theory | 1 | 1 | 1 | orbit |  |
| base | mock | mock | 0 | 0 | 0 |  |  |
| base | home again | home | 1 | 1 | 1 | orbit |  |

Sanity: [["fixed",{"q":7126,"me":"heavy","answers":3000}],["base",{"q":7126,"me":"heavy","answers":3000}]]
Errors: 0


## T3 - A2 main film paused while gate is up

### Real gate (no stub, no seeded profile), 2.5 s after load

| variant | gate has .hide | main film paused | main readyState | gate film paused | gate readyState | play/pause log after explicit syncFilm() |
|---|---|---|---|---|---|---|
| base | false | false | 4 | false | 4 | ["play: film in ambient","play: film in gate-amb"] |
| fixed | false | true | 4 | false | 4 | ["pause: film in ambient","play: film in gate-amb"] |

### Stubbed gate + profile entered (heavy)

| variant | view | #gate .hide | main film paused | play/pause log from syncFilm() |
|---|---|---|---|---|
| fixed | home | true | false | ["play: film in ambient"] |
| fixed | quiz | true | true | ["pause: film in ambient"] |
| base | home | true | false | ["play: film in ambient"] |
| base | quiz | true | true | ["pause: film in ambient"] |

Errors: 0


## T1 - idle cost of the quiz view (A1), 5 s window, heavy profile, animations ON

Chrome Chrome/154.0.8037.98. Window opens 1.5 s after the quiz question settles. Values in ms over the 5000 ms window; median (min-max) of 3 runs.

| rate | variant | task | recalc | layout | script | sanity ok |
|---|---|---|---|---|---|---|
| 1 | a base | 874.8 (842.4-886.5) | 291.6 (276.4-291.8) | 9.9 (8.5-11.3) | 8.4 (7.4-10.0) | true |
| 1 | b fixed | 495.1 (431.8-522.4) | 90.6 (82.0-95.2) | 11.9 (9.9-12.7) | 8.4 (8.2-10.9) | true |
| 1 | c base+scanoff | 1001.2 (866.5-1003.0) | 287.4 (287.2-312.5) | 12.2 (11.7-12.5) | 9.2 (8.5-9.5) | true |
| 1 | d fixed+scanoff | 56.7 (55.0-63.3) | 6.2 (5.3-7.9) | 9.4 (8.4-10.6) | 8.1 (7.5-8.5) | true |
| 4 | a base | 3720.2 (2943.9-4021.5) | 1528.2 (1318.2-1622.1) | 41.1 (31.9-56.5) | 40.5 (33.4-43.1) | true |
| 4 | b fixed | 1751.0 (1652.0-1848.6) | 370.6 (362.8-380.6) | 31.2 (29.2-32.4) | 28.5 (28.5-32.9) | true |
| 4 | c base+scanoff | 3422.4 (2690.9-3644.7) | 1162.8 (935.2-1232.4) | 38.4 (32.6-40.3) | 43.3 (36.0-47.7) | true |
| 4 | d fixed+scanoff | 264.5 (198.6-277.7) | 30.9 (19.1-33.5) | 34.0 (27.5-37.9) | 42.4 (33.2-43.1) | true |

### T1 raw runs (task / recalc / layout ms; animations at end of window by name: playState counts)

- rate 1 a base run 1: 886.5 / 291.8 / 11.3; view=quiz; anims={"drift1":{"paused":2},"drift2":{"paused":1},"drift3":{"paused":1},"orbit":{"running":3},"clBob":{"running":1},"clPool":{"running":1},"clScan":{"running":1}}
- rate 1 a base run 2: 874.8 / 291.6 / 9.9; view=quiz; anims={"drift1":{"paused":2},"drift2":{"paused":1},"drift3":{"paused":1},"orbit":{"running":3},"clBob":{"running":1},"clPool":{"running":1},"clScan":{"running":1}}
- rate 1 a base run 3: 842.4 / 276.4 / 8.5; view=quiz; anims={"drift1":{"paused":2},"drift2":{"paused":1},"drift3":{"paused":1},"orbit":{"running":3},"clBob":{"running":1},"clPool":{"running":1},"clScan":{"running":1}}
- rate 1 b fixed run 1: 431.8 / 82.0 / 9.9; view=quiz; anims={"drift1":{"paused":2},"drift2":{"paused":1},"drift3":{"paused":1},"clBob":{"running":1},"clPool":{"running":1},"clScan":{"running":1}}
- rate 1 b fixed run 2: 495.1 / 90.6 / 11.9; view=quiz; anims={"drift1":{"paused":2},"drift2":{"paused":1},"drift3":{"paused":1},"clBob":{"running":1},"clPool":{"running":1},"clScan":{"running":1}}
- rate 1 b fixed run 3: 522.4 / 95.2 / 12.7; view=quiz; anims={"drift1":{"paused":2},"drift2":{"paused":1},"drift3":{"paused":1},"clBob":{"running":1},"clPool":{"running":1},"clScan":{"running":1}}
- rate 1 c base+scanoff run 1: 866.5 / 287.4 / 12.5; view=quiz; anims={"drift1":{"paused":2},"drift2":{"paused":1},"drift3":{"paused":1},"orbit":{"running":3},"clBob":{"running":1},"clPool":{"running":1}}
- rate 1 c base+scanoff run 2: 1003.0 / 312.5 / 12.2; view=quiz; anims={"drift1":{"paused":2},"drift2":{"paused":1},"drift3":{"paused":1},"orbit":{"running":3},"clBob":{"running":1},"clPool":{"running":1}}
- rate 1 c base+scanoff run 3: 1001.2 / 287.2 / 11.7; view=quiz; anims={"drift1":{"paused":2},"drift2":{"paused":1},"drift3":{"paused":1},"orbit":{"running":3},"clBob":{"running":1},"clPool":{"running":1}}
- rate 1 d fixed+scanoff run 1: 63.3 / 7.9 / 10.6; view=quiz; anims={"drift1":{"paused":2},"drift2":{"paused":1},"drift3":{"paused":1},"clBob":{"running":1},"clPool":{"running":1}}
- rate 1 d fixed+scanoff run 2: 56.7 / 5.3 / 9.4; view=quiz; anims={"drift1":{"paused":2},"drift2":{"paused":1},"drift3":{"paused":1},"clBob":{"running":1},"clPool":{"running":1}}
- rate 1 d fixed+scanoff run 3: 55.0 / 6.2 / 8.4; view=quiz; anims={"drift1":{"paused":2},"drift2":{"paused":1},"drift3":{"paused":1},"clBob":{"running":1},"clPool":{"running":1}}
- rate 4 a base run 1: 2943.9 / 1318.2 / 31.9; view=quiz; anims={"drift1":{"paused":2},"drift2":{"paused":1},"drift3":{"paused":1},"orbit":{"running":3},"clBob":{"running":1},"clPool":{"running":1},"clScan":{"running":1}}
- rate 4 a base run 2: 4021.5 / 1622.1 / 56.5; view=quiz; anims={"drift1":{"paused":2},"drift2":{"paused":1},"drift3":{"paused":1},"orbit":{"running":3},"clBob":{"running":1},"clPool":{"running":1},"clScan":{"running":1}}
- rate 4 a base run 3: 3720.2 / 1528.2 / 41.1; view=quiz; anims={"drift1":{"paused":2},"drift2":{"paused":1},"drift3":{"paused":1},"orbit":{"running":3},"clBob":{"running":1},"clPool":{"running":1},"clScan":{"running":1}}
- rate 4 b fixed run 1: 1652.0 / 362.8 / 32.4; view=quiz; anims={"drift1":{"paused":2},"drift2":{"paused":1},"drift3":{"paused":1},"clBob":{"running":1},"clPool":{"running":1},"clScan":{"running":1}}
- rate 4 b fixed run 2: 1848.6 / 370.6 / 29.2; view=quiz; anims={"drift1":{"paused":2},"drift2":{"paused":1},"drift3":{"paused":1},"clBob":{"running":1},"clPool":{"running":1},"clScan":{"running":1}}
- rate 4 b fixed run 3: 1751.0 / 380.6 / 31.2; view=quiz; anims={"drift1":{"paused":2},"drift2":{"paused":1},"drift3":{"paused":1},"clBob":{"running":1},"clPool":{"running":1},"clScan":{"running":1}}
- rate 4 c base+scanoff run 1: 2690.9 / 935.2 / 32.6; view=quiz; anims={"drift1":{"paused":2},"drift2":{"paused":1},"drift3":{"paused":1},"orbit":{"running":3},"clBob":{"running":1},"clPool":{"running":1}}
- rate 4 c base+scanoff run 2: 3644.7 / 1232.4 / 38.4; view=quiz; anims={"drift1":{"paused":2},"drift2":{"paused":1},"drift3":{"paused":1},"orbit":{"running":3},"clBob":{"running":1},"clPool":{"running":1}}
- rate 4 c base+scanoff run 3: 3422.4 / 1162.8 / 40.3; view=quiz; anims={"drift1":{"paused":2},"drift2":{"paused":1},"drift3":{"paused":1},"orbit":{"running":3},"clBob":{"running":1},"clPool":{"running":1}}
- rate 4 d fixed+scanoff run 1: 198.6 / 19.1 / 27.5; view=quiz; anims={"drift1":{"paused":2},"drift2":{"paused":1},"drift3":{"paused":1},"clBob":{"running":1},"clPool":{"running":1}}
- rate 4 d fixed+scanoff run 2: 264.5 / 33.5 / 34.0; view=quiz; anims={"drift1":{"paused":2},"drift2":{"paused":1},"drift3":{"paused":1},"clBob":{"running":1},"clPool":{"running":1}}
- rate 4 d fixed+scanoff run 3: 277.7 / 30.9 / 37.9; view=quiz; anims={"drift1":{"paused":2},"drift2":{"paused":1},"drift3":{"paused":1},"clBob":{"running":1},"clPool":{"running":1}}

Console/exception errors in T1 loads: 0


## T4 - A3 review view, dueSet

Heavy profile, identical stored state (seed saved once and reused), review opened from home. go = go() call only; total = go + forced layout. ms.

| rate | variant | go median (min-max) | total median (min-max) | raw totals | due/deck | sanity ok |
|---|---|---|---|---|---|---|
| 1 | base | 85.0 (68.6-93.1) | 85.4 (68.9-93.6) | 93.6, 85.4, 68.9 | 268/1254 | true |
| 1 | fixed | 87.0 (75.3-111.6) | 87.3 (75.6-112.0) | 87.3, 112.0, 75.6 | 268/1254 | true |
| 4 | base | 453.0 (374.3-532.0) | 456.4 (375.7-534.2) | 534.2, 456.4, 375.7 | 268/1254 | true |
| 4 | fixed | 470.7 (433.9-527.1) | 472.9 (438.2-529.8) | 472.9, 529.8, 438.2 | 268/1254 | true |

#innerHTML of #page compare, rate 1 run 1: identical (len 726055)
#innerHTML of #page compare, rate 4 run 1: identical (len 726055)

Errors: 0


## Re-run after autoplay removal

Fixed copy refreshed from the working tree; line 53 of its index.html has no `autoplay` (base still has it). Probe pages regenerated. Play/pause logging installed with Page.addScriptToEvaluateOnNewDocument before any page script.

### T3a/T3c - real gate (no stub, no profile), samples after load event

| variant | t | main paused | main currentTime | main autoplay attr | gate film paused | gate film currentTime | #gate .hide | play/pause log so far |
|---|---|---|---|---|---|---|---|---|
| fixed | 500 ms | true | 0.00 | false | false | 0.51 | false | ["pause: film in ambient","play: film in gate-amb"] |
| fixed | 2000 ms | true | 0.00 | false | false | 2.02 | false | ["pause: film in ambient","play: film in gate-amb"] |
| fixed | 5000 ms | true | 0.00 | false | false | 5.00 | false | ["pause: film in ambient","play: film in gate-amb"] |
| base | 500 ms | false | 0.51 | true | false | 0.51 | false | ["play: film in ambient","play: film in gate-amb"] |
| base | 2000 ms | false | 2.00 | true | false | 2.00 | false | ["play: film in ambient","play: film in gate-amb"] |
| base | 5000 ms | false | 5.01 | true | false | 5.01 | false | ["play: film in ambient","play: film in gate-amb"] |

### T3b - gate stubbed + heavy profile entered

| variant | step | view | main paused | currentTime read 1 | read 1 s later | advanced | play/pause log |
|---|---|---|---|---|---|---|---|
| fixed | home | home | false | 3.04 | 4.05 | true | ["play: film in ambient","play: film in ambient","play: film in ambient"] |
| fixed | quiz | quiz | true | 4.08 | 4.08 | false | ["pause: film in ambient"] |
| fixed | home again | home | false | 5.61 | 6.61 | true | ["play: film in ambient"] |
| base | home | home | false | 3.20 | 4.20 | true | ["play: film in ambient","play: film in ambient","play: film in ambient"] |
| base | quiz | quiz | true | 4.24 | 4.24 | false | ["pause: film in ambient"] |
| base | home again | home | false | 5.76 | 6.77 | true | ["play: film in ambient"] |

Sanity (T3b): [["fixed",{"q":7126,"me":"heavy","answers":3000}],["base",{"q":7126,"me":"heavy","answers":3000}]]

T5 errors across these loads: 0


### Re-run verdicts

| test | verdict | note |
|---|---|---|
| T0 boot-check (refreshed copy; repo run) | PASS | 7126 questions, 0 console errors, 4 module cards, 171 chapter rows |
| T3a main film on real gate (fixed) | PASS | play() never called on `.ambient .film`; one pause() logged; `.paused` true at 0.5, 2 and 5 s; currentTime stays 0 |
| T3a base contrast | PARTLY AS EXPECTED | `.paused` false at all three samples, but play() IS logged on `.ambient .film`: base syncFilm() calls play() itself when the gate is up, on top of the autoplay attribute. The brief's "no play() call in base" expectation does not hold |
| T3b gate stubbed + profile (fixed) | PASS | home paused=false, currentTime 3.04 to 4.05 (advancing); quiz paused=true, 4.08 frozen; home again paused=false, 5.61 to 6.61 (advancing). Base behaves the same |
| T3c `.gate-amb .film` on real gate | REPORT AS-IS | playing in both variants: paused=false, currentTime advancing 0.51 / 2.02 / 5.00 s, play() logged on it |
| T5 errors | PASS | 0 on all re-run loads |
