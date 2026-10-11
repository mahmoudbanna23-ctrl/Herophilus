# Brief 7 - independent check of the written Pediatrics merge

You are the outside checker. Another house built and wrote this merge; your job is to try to break
the claim "346 repeats were removed and nothing printed was lost". Report only. **Edit nothing,
create no files in the repo, run no git command.** Clock: 25 minutes, then report what you have.

## Inputs (all read-only)

- Before the merge: `D:\scratch 2026\peds-merge-before\` - `questions.peds.js` (`Q_PEDS`),
  `questions.peds.ep.js` (`Q_PEDS_EP`), `questions.peds.ep2.js` (`Q_PEDS_EP2`),
  `questions.peds.sa.js` (`Q_PEDS_SA`), `folds.js`, `exams.peds.js`.
- After the merge: the same six file names in `app\data\`.
- `content\peds\qb-pages\dupes\merge-list.json` - 346 rows `{keep, dead, ...}`.
- `content\peds\qb-pages\dupes\rulings.json` - hand rulings; `force:true` rows bypassed the
  automatic option/key checks, so they need a human-style read.
- `content\peds\qb-pages\dupes\merge-stays.json` - pairs deliberately left as two entries, with a reason.
- `content\peds\qb-pages\dupes\repoint\verdicts.json` - 84 rows: text in a surviving entry that named
  a removed id and was rewritten to name the kept id.

Load the data files with node `vm.runInNewContext` (they are classic scripts using `var`). Never
count entries with grep - the files mix quoted and bare keys. Entry shape: `id`, `stem`, `options[]`,
`answer` (index, or an array of indexes), `explanation`, `source`, `bank`, `alsoIn[]`, `image`, `imgAlt`.

Do NOT reuse `verify\merge-check.js` or `splice\splice.js` - write your own throwaway checks inline
(`node -e` or a script outside the repo).

## What to check

1. **Nothing printed lost.** For each of the 346 rows: every option of the removed copy (before) is
   present in the kept copy (after) up to spelling/punctuation; the keyed option text is the same;
   a picture on the removed copy is still on the kept copy; numbers, units, comparators (< > ≤ ≥)
   and Greek letters in stem and options agree. List every row that fails, with both texts.
2. **Read by eye:** every `force:true` ruling, plus 40 rows picked at random from the rest (say which).
   Is it truly the same question with the same right answer? Flag any pair where the removed copy
   tested something the kept copy does not.
3. **Pointer rewrites:** every verdict row whose `why` starts `Claude r2` or `Claude r3`, plus 20
   random others. In the after file, does the rewritten sentence read correctly, and does the id it
   now names exist and actually hold what the sentence says it holds (a table, a ladder, a figure)?
4. **Repeats left behind:** in the after set, any two entries with the same normalised stem AND the
   same option set that are not a pair listed in `merge-stays.json`. List up to 30.
5. **Exam lists:** every id in `app\data\exams.peds.js` is a live entry; no id appears twice inside
   one exam list; `folds.js` `FOLDED` maps every removed id to its kept id.

## Out of scope

Whether a printed key is medically right (keys are never disputed here). Typos. Explanation wording.
Anything outside Pediatrics. If a case is ambiguous, report it as AMBIGUOUS with the ids - do not decide.

## Report (your final message, 70 lines at most)

One line per check: `CHECK n: PASS|FAIL|PARTIAL - <counts>`, then the findings under it, each with
ids and the two short texts that differ. End with `NOT CHECKED:` listing anything you ran out of
time for. A clean result must say how it was measured (how many rows compared, by what rule).
