# Section 4 fold — report

## Done
1. **array.js `expl` n:1-6** rewritten to bare box text only (no lead, no `> `, no footer), verbatim vs `boxes.md`. Verified with a delete-`expl`-then-`JSON.stringify` compare (`<scratchpad>/cl-s04-fold/cmp-expl.js`) against `pre-merge.js`: all 24 rows identical outside `expl`. Manual verbatim check n:1-6 against boxes.md: exact match.
2. **draft.js n:12** — added pointer sentence before the footer: "Same option menu as `ophep-lacrimal-system-6`; the discriminating token here is mucus versus purulent reflux." n:6 untouched (boxed, no sentence per ruling).

## STOPPED — did not fold n:2/n:4, did not touch sec-oph.js
Ruling §2 said fold only if the two boxes differ by no more than one or two short phrases. boxes.md text:
- n:2 (25 words): "Chronic dacryocystitis due to nasolacrimal duct obstruction is treated surgically by DCR, which creates a new **drainage pathway** between the lacrimal sac and nasal cavity."
- n:4 (34 words): "Chronic dacryocystitis due to nasolacrimal duct obstruction is treated surgically by DCR, which creates a new **passage** between the lacrimal sac and nasal cavity. **Massage or probing is only for congenital or early cases.**"

Differing spans: (a) "drainage pathway" -> "passage", a short-phrase swap; (b) n:4 carries an entire extra sentence (10 words) with no counterpart in n:2 at all, adding a distinct clinical claim (massage/probing indication) that n:2's box never states. That is more than "one or two short phrases" by the ruling's own test, so per ruling §2 I stopped: did not fold n:4 into n:2, did not edit n:2's `source`/explanation, did not remove n:4 from draft.js (still 24 entries, not 23), did not add `folded:[4]` to `sec-oph.js` (file untouched by me — its current diff is pre-existing, not mine).

**Question for the orchestrator:** is the added sentence in n:4's box treated as within the "one or two short phrases" allowance (fold as planned, quoting both wordings per §2), or does it count as a genuine second box and n:4 stays live as its own question? Need a ruling before I touch n:2/n:4/sec-oph.js.

## Validator
- `--part 1 4`: exit 0. 0 "quoted box differs" warnings. Draft length 24 (not 23 — fold blocked, see above). One pre-existing warning unrelated to box text: "near-identical option menus n:6 and n:12" (expected; my pointer sentence addresses the content, the validator's warning text itself doesn't check for it).
- `--part 1 1`, `--part 1 2`, `--part 1 3`: all exit 0, unaffected.
- `node --check` clean on array.js, draft.js, sec-oph.js.
- `git diff --stat tools/bank-harness/sec-oph.js`: 4 insertions/1 deletion, pre-existing (present before this task per initial git status), not from this session.

## Not done
- n:4 fold into n:2 (blocked, escalated above).
- `sec-oph.js` section 4 `folded:[4]` entry (contingent on the above).
- Draft not reduced to 23 entries (contingent on the above).
