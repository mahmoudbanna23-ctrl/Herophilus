# Section 3 (Orbit): normalise the staged box text, fold two reprints, re-validate

Working root: `D:\claude os\Medical school\Herophilus`. `<scratchpad>` = `C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\c690134b-326b-4433-a5eb-cb30b9aea267\scratchpad`.

## Why

An independent check (`<scratchpad>/rf-s03-draft-report.md` — read it first) found two problems.
- The 9 boxed rows of the staged array store lead + quote + marker in `expl`. Section 2's array stores the bare box text only, which is why section 2 gives 0 "quoted box differs" warnings.
- Two pairs are reprints:
  - n:9/n:19: exact reprint, identical stem, options, order and key. n:9 is boxed, n:19 is not.
  - n:4/n:7: boxed second printing, identical stem, options and key. The boxes differ by one clause.

## Ruling (orchestrator — apply, do not re-decide)

1. **Array `expl` shape.** In `content/ophtho/qb-pages/oph-ep-p1-s03-orbit.array.js`, for n:1–7, 9, 10: `expl` becomes the bare printed box text only, with no lead line, no `> `, and no marker, exactly the shape of section 2's `oph-ep-p1-s02-optics-refraction.array.js`. The text must equal the box in `oph-ep-p1-s03-orbit.boxes.md` (read off page images). If the stripped text and boxes.md disagree by more than whitespace, STOP and report both versions. Other fields and the 12 unboxed rows stay untouched: prove it with the delete-`expl`-then-`JSON.stringify` comparison against `git show HEAD:<path>`.
2. **Fold n:19 into n:9.**
   - n:19 is not drafted.
   - n:9 survives. Its `source` also cites n:19's marked page, in the form the peds endpoint folds use (look at a `pedep-` survivor in `app/data/questions.peds.ep.js` or `questions.peds.ep2.js` whose source names two pages; grep, never guess).
3. **Fold n:7 into n:4.**
   - n:7 is not drafted. n:4 survives, citing n:7's marked page in `source` the same way.
   - n:4's explanation stays boxed: lead, its own quote unchanged, a blank line, one plain unquoted sentence recording the second printing, a blank line, then the boxed marker last.
   - That sentence must say the file prints the same question again on p.<n:7 marked page>, and that its box reads `<n:7 clause>` where this one reads `<n:4 clause>`. Take both clauses verbatim from boxes.md.
   - n:7's old pointer sentence is gone with it.
4. **Validator config.** In `tools/bank-harness/val-oph-ep.js`, the part 1 section 3 entry gets `folded: [7, 19]`. Add a one-line comment in the style of `val-pd-ep2.js` (~lines 60–84) naming both folds with their pages. Update the line ~23 comment, which says no ophthalmology folds are adjudicated, so it stays true. Change nothing else in that file: it is shared with the part 2 chat.
5. **Draft.** Remove n:7 and n:19 from `oph-ep-p1-s03-orbit.draft.js`, leaving 19 entries. Any other row whose pointer names `ophep-orbit-7` or `ophep-orbit-19` points at the survivor instead. Shared-menu anchors the validator derives may change: follow whatever it demands, pointer sentences only.

## Write grant

The array (`expl` of those 9 rows only), the draft, `val-oph-ep.js` (section 3 entry and the line-23 comment only), scratch scripts in `<scratchpad>/cl-s03-fold/`, and the report `<scratchpad>/cl-s03-fold-report.md`. No git writes (`git show`/`git diff` read-only are fine). No `app/`, no splice, `Semester 8\` read-only. Write text with Node reading from disk, never a heredoc or template literal. Pure LF.

## Verify

- `node --check` on all three files.
- `node tools/bank-harness/val-oph-ep.js --part 1 3` must exit 0 with 0 "quoted box differs" warnings.
- Also run `--part 1 1` and `--part 1 2`: still exit 0 (config regression).
- Draft: 19 entries, 0 holes, no `ophep-orbit-7` or `ophep-orbit-19` id and no pointer to either, answers equal array keys.
- `git diff --stat` on `val-oph-ep.js`: only the expected lines.

## Report (≤30 lines)

What changed per file; the n:4 sentence as written; both `source` strings; validator exit codes and warnings for parts 1 1/2/3; anything not done. Stop at 45 tool calls.
