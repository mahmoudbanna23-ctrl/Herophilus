# Brief — adjudicating the House tail (Q686–Q724 and S1–S110)

The last unadjudicated stretch of `d house ENT mcq.pdf`: the end of the Throat run (**Q686–Q724**,
39 questions) and the whole fourth section, **`Selected department MCQs`, S1–S110**, whose numbering
**restarts at 1** and whose options are lowercase a/b/c/d.

**You decide one thing per question: FOLD, NEW, or HOLD BOTH.** You do not write entries, you do not
edit `app/data/questions.ent.js`, and you do not touch any held entry. You produce a verdict file and
a written record of why.

## ⚠️ What is already known, so you do not re-derive it

- **The fourth section re-publishes departmental items — this is now measured, not suspected.**
  **All 110 S-questions match something already held, and 100 of them hit an ENDPOINT entry at stage
  A or B.** The endpoint file *is* the department's own question set, so the fourth section is very
  largely a reprint of it. **Expect FOLD to be the default verdict there and make NEW argue for
  itself** — but never let that expectation write a verdict for you.
- **60 questions were adjudicated FOLD before this brief** (best hit stage A, identical option set,
  identical key). All 24 of those whose raw stems were not byte-identical were read: every difference
  was punctuation, capitalisation, a curly-vs-straight apostrophe, or a missing space
  (`acutetonsillitis`, `thefollowing`, `afterone`). **Not one changed meaning.** They are not in your
  list.
- **13 questions have no candidate at all and are NEW** — also not in your list.
- **`S62` and `Q687` were read in the main session** and are not yours.
- **`norm.js` was repaired on 2026-08-24** — its typo tolerance had been collapsing enumerated keys
  (`Type 1`/`Type 3`, `Grade II`/`Grade IV`, `A & C`/`A & B`). The scores you see are post-repair.

## Your input

A JSON array. Each row is one staged question and **every** candidate above the sweep floor, with
full text on both sides — nothing is truncated and there is **no top-N cutoff**, because an E/F
cutoff hid three real folds once on this project.

Row: `label` (`S<n>` or `Q<n>`) · `n` · `sec` · `p` (**book** page — cite this) · `f` (transcript) ·
`stem` · `opts` · `key` (index into `opts`) · `cands[]`, each with `stage` · `score` · `id` ·
`banks` · `chapter` · `sameKey` · `setEq` · `heldStem` · `heldOpts` · `heldAnswer`.

⚠️ **`key` and `heldAnswer` index different arrays. Compare the option TEXT they point at, never the
two numbers.**

## The three verdicts

**FOLD** — the same question printed twice. Stem reworded, options reordered, spelling changed, a
distractor added or dropped: still the same question, so **ADD THE BANK to the entry that already
exists — never a second entry.** Name the held id.

**NEW** — a different question. The clearest signal is **a replaced distractor**: if one option has
been swapped for another the item is asking something different, and it is new.

**HOLD BOTH** — identical menu, **different key**. This is the most citable shape in the project.
Neither key is disputed and neither moves; both printings are kept and each records the other.

### The rules that decide the hard ones

1. ⚠️⚠️ **THE DELIBERATE-PAIR RULE OUTRANKS THE REPRINT RULE.** A bank that prints *acute* and
   *chronic* retropharyngeal abscess over one menu, or a graded series where each stem negates the
   last, is teaching by contrast. Those are **two questions**, not a duplicate — however high the
   score. Real examples already found in this tail: `S44`/`S81` (chronic vs acute) and the
   three-member neck-trauma series `Q686`/`Q687`/`enthd-thr-685`, one menu and three right answers.
2. **A score never decides a fold — the ranking decides what you READ.** A stage-A hit is a summons,
   not a verdict.
3. ⚠️ **SAY WHY A ZERO IS A ZERO.** If a question has candidates and you call it NEW anyway, write
   the sentence that makes that true.
4. **A defective key is noted, never disputed.** If the two keys disagree the verdict is HOLD BOTH —
   do not decide which bank is right, and never propose moving an `answer`.
5. **Chapter every entry by content**, not by the book's own chapter numbers — **the book prints the
   number 9 on two different chapters.** The valid chapter ids are the `chapter` values you can see
   on the candidates; use one of those.

## What you produce

**A JSON verdict file** — one object per question in your list, no exceptions and no omissions:

```json
{ "label": "S45", "verdict": "FOLD", "into": "entep-throat-75",
  "stage": "B", "why": "Identical four options in identical order with the same key; House rewords the stem from ... to ... . Caught at stage B because the stems are too far apart for A." }
```

`into` is required for FOLD and for HOLD BOTH (the entry it pairs with); `null` for NEW.
`why` is one compact paragraph and must state **exactly what differs between the two printings** —
*"the four options are identical in identical order with the same key"* is a finding, *"essentially
the same"* is not.

**And a markdown record**, `content/ent/qb-pages/house-sweep-tail-<yours>.md`, with a block per
question: the verdict, the evidence, and for every NEW the sentence from rule 3.

## ⚠️ How this book is cited, measured across the corpus

**All 558 House-origin entries cite it by its printed title — `Dr. HOUSE in ENT, End-of-round MCQs
2025, p.N`, with no exceptions.** The entries that carry House as a *fold* cite it by filename,
`d house ENT mcq.pdf` book p.N (83 of 84). That is the rule, not a drift: **an entry leads with its
own bank's citation; a fold's appended note names the other bank's printing.** Do not "fix" either
form into the other.

## Rules that still apply

- **Never write a page number, filename or id from memory** — 7/7 and 3/3 were wrong on this project.
  Read them off your row.
- **Never name a held id you have not grepped in `app/data/questions.ent.js`.**
- Write files with a real file write, not a shell heredoc. ⚠️ **The Bash tool's quoted heredoc
  collapses `\\` to `\` even when the body is JS or JSON**, and it has corrupted paths, citations and
  a regex on this project four times. **Grep every path you write, in the file, after writing it.**
- Prove your JSON parses before reporting.

## Return

A short report: the verdict file path, the counts (FOLD / NEW / HOLD BOTH), **every HOLD BOTH in
full**, every place the worksheet and the transcript disagree, and anything in this brief that turned
out to be wrong.

**TRUST THE STAGING AND THE TRANSCRIPT OVER THIS PROMPT, AND TELL ME WHERE I WAS WRONG.** That
instruction has been paid out fourteen times on this project and it is not a formality.
