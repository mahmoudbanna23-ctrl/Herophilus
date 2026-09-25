# Symptom (measured)

- The historical six-option focused-strike symptom is not present in the current source: the
  strike button stops propagation for every option-letter key within the question's option count
  (`app/js/quiz.js:372`), before the document handler can map `F` to index 5
  (`app/js/boot.js:341-342`). The historical report remains at
  `progress/app-replan/plan-until-codex-2026-09-20.md:217`.
- `node tools/boot-check/strike-check.js` twice: both runs passed its focused-X navigation,
  strike/reset, storage, and no-console-error checks. It does not exercise the F case
  (`tools/boot-check/strike-check.js:61-71`).
- The table-parser fault is live in the predicate: command
  `node -e "..."` printed `"| - | - |" true`, while it printed the ordinary
  `"| Pain | + | - |" false`. `isMdRule` consequently drops the former before table rendering.

# Root cause

- Strike: the original cause was bubbling from a focused `.strike-btn` to the document-level
  quiz shortcut handler, whose generic option-letter branch accepts any in-range option letter.
  Current `app/js/quiz.js:372` is the narrow guard; no production fix is proposed unless the
  requested F-focused-X regression check fails.
- Table: `isMdRule` classifies any pipe/space/colon/dash row containing one dash as a separator
  (`app/js/theory.js:167-169`). `mdTable` removes every row classified that way
  (`app/js/theory.js:190-196`), so `| - | - |` cannot reach the body.

# Evidence

- Each answer option has a sibling strike button (`app/js/quiz.js:369-372`); `toggleStrike`
  rerenders and restores focus to that button (`app/js/quiz.js:327-334`).
- The document handler only ignores text-entry targets (`app/js/boot.js:304-305`) and maps a
  single option letter to `pick` when the question is unanswered (`app/js/boot.js:338-342`).
- The c2 refuter explicitly narrowed the reproducer to an all-punctuation row
  (`progress/app-replan/bugs.md:168-171`).

# Proposed fix (a diff sketch, files named)

- `tools/boot-check/strike-check.js`: add a six-option probe; focus its `.strike-btn`, dispatch
  bubbling `keydown` F, then assert `Q.sel===null`, `Q.shown===false`, and the focused control is
  still that X. This protects the existing `app/js/quiz.js:372` guard without changing app code.
- `app/js/theory.js`: replace the broad character-class test in `isMdRule` with per-cell
  separator validation (after splitting outer pipes): every cell must match
  `^\\s*:?-{3,}:?\\s*$`. Thus `| --- | :---: | ---: |` remains a rule and `| - | - |`
  remains a data row. This grammar choice needs a corpus compatibility check before landing;
  app data was intentionally not opened.

# Check that proves the fix

- Run the expanded `node tools/boot-check/strike-check.js` twice; the new focused-F assertion
  must pass, alongside its existing assertions.
- Add a focused unit/probe for `isMdRule`/`mdTable`: a valid three-dash alignment row is removed,
  while a table containing `| - | - |` renders that row as `<td>-</td>` cells. Run twice.

# Unconfirmed

- No current corpus scan was performed because `app/data/` is closed by the brief. Therefore it
  is UNCONFIRMED whether any existing table separator uses fewer than three dashes and would need
  a compatibility-preserving grammar.

## Round 2

- Changed: `app/js/theory.js:190-202` (`mdTable`). Dropped the `isMdRule` broad filter over every
  row; now drops only `rows[1]` when `isMdRule(rows[1])` is true, else keeps all rows as-is.
  `isMdRule` itself (`theory.js:167-169`) untouched — round-1's per-cell-grammar rewrite was not
  needed once the drop is positional, so the corpus-compatibility risk it flagged does not apply.
- New: `tools/boot-check/mdtable-check.js` — plain node, no Chrome. Extracts `isMdRule`/`mdCells`/
  `mdTable` from `theory.js`'s own text (brace-matched, not retyped) and runs them in a `vm`
  sandbox. Four cases, all PASS both runs: `| - | - |` as a body row (not at `rows[1]`) survives
  as `<td>-</td>` cells; a 1-dash separator at `rows[1]` is dropped; `| --- | :---: |` at `rows[1]`
  is dropped; a 2-row table (row 2 = data) keeps that row.
- Commands run:
  - `node --check app/js/theory.js` — OK.
  - `node --check tools/boot-check/mdtable-check.js` — OK.
  - `node tools/boot-check/mdtable-check.js` twice — both runs: 4/4 PASS, "All mdtable-check
    cases PASS".
  - `git diff --stat -- app` — only `app/js/theory.js` changed (6 insertions, 1 deletion).
- Not run (brief: another job owns Chrome): `node tools/boot-check/boot-check.js` — UNCONFIRMED
  here, owed to whichever job runs Chrome next.
