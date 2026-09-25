Symptom (measured)

The stated `QUESTIONS 4049` does not reproduce in this checkout. Ran
`node tools/boot-check/boot-check.js` twice: each run reported `QUESTIONS 6956`,
`THEORY 153`, `MODULES 4`, `chapters 156`, `Q_OPHTHO 1273`, and `console errors: 0`.
The Chrome OS-crypt/update messages preceded both reports; the harness itself
reported zero captured console errors.

Root cause

The 4,049 figure is the corpus with ophthalmology and neuro excluded while
those modules were locked: ENT 2,240 + 82 cases = 2,322; paediatrics
393 + 704 + 630 = 1,727; 2,322 + 1,727 = 4,049. The current harness reads
`QUESTIONS.length` after selecting term `y4s2` and activating/rendering it
(tools/boot-check/boot-check.js:101-124,133), and gets 6,956 twice.

Evidence

- The harness's reported quantity is exactly `QUESTIONS.length`
  (tools/boot-check/boot-check.js:127-135,186-195), not a count of script files,
  module cards, chapters, or theory.
- Loader order is: `modules.js`; ENT, paediatrics (including `.ep`/`.ep2`),
  ophthalmology (including `.ep`/`.ep2`), and neuro question-bank scripts;
  then the four `cases.*.js` scripts; then `questions.js`
  (app/index.html:114-127). Thus the endpoint-named files and case files are
  available to the final `questions.js` loader, rather than being omitted by
  the HTML loader.
- Theory source scripts load only after `questions.js` (app/index.html:128-132).
  `THEORY` therefore is separately measured as `Object.keys(THEORY).length`,
  not part of `QUESTIONS` (tools/boot-check/boot-check.js:134-135).
- `app/js/storage.js:269-272` states that `QUESTIONS` and `THEORY` already
  exclude locked material in `data/questions.js` and `data/theory.js`. This
  supports the lock-filter explanation; it does not describe a second array
  being added to `QUESTIONS`.
- The aggregation definition in `data/questions.js` cannot be read under the
  brief. Consequently, which named pre-aggregation globals it concatenates is
  not directly inspectable here.

Proposed fix

No app-code diff proposed. Update/re-run the report that asserts 4,049 using
the current boot harness, and record its commit/date and its full loader list.
If 4,049 recurs, inspect `data/questions.js` under an explicitly authorized
data-lane brief and compare its inputs with the ordered tags at
app/index.html:114-127; do not infer omission from filename alone.

Check that proves the fix

Run `node tools/boot-check/boot-check.js` twice from the same checkout. A
corrected report must preserve the harness's `QUESTIONS.length` output and
include the exact two counts; current result is 6,956 / 6,956.

Unconfirmed

- Whether every `questions.*.js` and `cases.*.js` global is concatenated by
  `data/questions.js`; that file is prohibited to read.

## Round 2

Changed `D-count.md:Root cause`, `Evidence`, and `Unconfirmed` per
`REFUTE-round1.md` fix-list item 7: replaced the unsupported UNCONFIRMED cause
with the lock-filter account and recorded 2,322 (ENT) + 1,727 (paediatrics) =
4,049; removed the claim that `LOCKED_MODULES` is only a UI/storage concern.

Commands run: no check command is prescribed for R-count; Chrome was not run.

Still UNCONFIRMED: the exact aggregation of named globals in
`data/questions.js`, which remains prohibited to read.
