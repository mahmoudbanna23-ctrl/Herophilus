# Section 4 (Lacrimal System): normalise the staged box text, fold one reprint, add one pointer, re-validate

Working root: `D:\claude os\Medical school\Herophilus`. `<scratchpad>` = `C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\c690134b-326b-4433-a5eb-cb30b9aea267\scratchpad`.

## Why

An independent check (`<scratchpad>/rf-s04-draft-report.md` — read it first) found:
- The 6 boxed rows n:1–6 of the staged array store lead + quote + marker in `expl`. Section 2's array stores the bare box text only, which is why section 2 shows 0 "quoted box differs" warnings.
- n:2/n:4 have a byte-identical stem, options and key; only the box wording differs. This is a boxed second printing.
- n:6/n:12 share a near-identical menu with different keys. A real discriminating token exists, but no pointer sentence names it.

Section 3 got the same fixes; see `<scratchpad>/cl-s03-fold-report.md` and the section 3 entry in `tools/bank-harness/sec-oph.js`. Copy its forms exactly.

## Ruling (orchestrator — apply, do not re-decide)

1. **Array `expl` shape.** In `content/ophtho/qb-pages/oph-ep-p1-s04-lacrimal-system.array.js`, for n:1–6: `expl` becomes the bare printed box text only. No lead, no `> `, no marker. It must equal the box in `oph-ep-p1-s04-lacrimal-system.boxes.md`. If the two disagree by more than whitespace, STOP and report both. Prove that nothing else changed with the delete-`expl`-then-`JSON.stringify` comparison against `oph-ep-p1-s04-lacrimal-system.pre-merge.js`. The file is untracked, so `git show HEAD` cannot serve.
2. **Fold n:4 into n:2.** n:4 is not drafted. n:2 survives and cites n:4's marked page in `source` as exactly `Opthalmology endpoint.pdf p.<n:2 marked> (the same question is printed again on p.<n:4 marked>)`. `source` is a citation only: no box wording, no explanation.
   - n:2's explanation stays boxed: lead, then its own quote unchanged, then a blank line, then one plain unquoted sentence recording the second printing (same form as section 3's `ophep-orbit-4`), then a blank line, then the boxed marker last.
   - Quote both differing wordings verbatim from boxes.md.
   - **If the two boxes differ by more than one or two short phrases, STOP and report both boxes' word counts and the differing spans.** Do not fold.
   - Remove the n:4 pointer sentence that is now dead.
3. **Validator config.** In `tools/bank-harness/sec-oph.js`, the `SEC_P1` section 4 entry gets `folded: [4]`, with a one-line comment in the section 3 style. Change nothing else in that file; `SEC_P2` belongs to the part 2 chat.
4. **Draft.** Remove n:4 from `oph-ep-p1-s04-lacrimal-system.draft.js`, leaving 23 entries. Add one pointer sentence to n:12 naming `ophep-lacrimal-system-6` and the discriminating token (mucus vs purulent reflux), placed where the other unboxed pointer sentences sit (n:11, n:16). n:6 is boxed: it gets no sentence. Any validator-derived anchor change: follow what it demands, with pointer sentences only.

## Write grant

The array (`expl` of n:1–6 only), the draft, `tools/bank-harness/sec-oph.js` (`SEC_P1` section 4 entry only), scratch scripts in `<scratchpad>/cl-s04-fold/`, and the report `<scratchpad>/cl-s04-fold-report.md`. No git writes (`git show`/`git diff` read-only are fine). No `app/`, no splice, `Semester 8\` read-only. Write text with Node reading from disk, never a heredoc or template literal. Pure LF.

## Verify

- `node --check` on all three files.
- `node tools/bank-harness/val-oph-ep.js --part 1 4` must exit 0 with 0 "quoted box differs" warnings.
- Also run `--part 1 1`, `--part 1 2`, `--part 1 3`: still exit 0.
- Draft: 23 entries, 0 holes, no `ophep-lacrimal-system-4` id and no pointer to it, answers equal array keys, n:18 keeps 5 options.
- `git diff` on `sec-oph.js`: only the section 3 and 4 lines.

## Report (≤30 lines)

What changed per file; the n:2 and n:12 sentences as written; the n:2 `source` string; validator exit codes and warnings for parts 1 1/2/3/4; anything not done. Stop at 45 tool calls.
