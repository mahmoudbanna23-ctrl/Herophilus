# Brief — applying the 124 House tail folds (Q686–Q724 and S1–S110)

A fold does **not** create an entry. **The bank is ADDED to the entry that already exists** and the
House printing's citation is folded into that entry's `source`. Standing rule: *on a cross-bank
match, ADD THE BANK — never a second entry.*

**124 folds land on 115 distinct entries, so you write 115 patches, not 124.** Nine entries take two
tail questions each and get **one patch naming both printings.** The adjudication that produced these
verdicts is in `house-sweep-tail.md`, `house-sweep-tail-S.md` and `house-sweep-tail-main.md`.

## Your input file — one row per PATCH

A JSON array of `{ into, rows[] }`. `into` is the held entry you are patching; `rows` is one or two
staged House questions that fold into it. Each row carries both printings side by side:

`label` (`S<n>` or `Q<n>`) · `housePage` (the **book** page — cite this) · `houseStem` · `houseOpts` ·
`houseKey` (index into `houseOpts`) · `houseTranscript` · `printedLabel` · `stage` ·
`agentWhy` (the adjudicator's reasoning, where there was one) · `into` · `heldBank` · `heldAlsoIn` ·
`heldStem` · `heldOpts` · `heldAnswer` · `heldChapter` · `heldSource`.

⚠️ **An earlier version of this brief said `printedLabel` marks a page that prints a DIFFERENT number
from the label. That was wrong** — checked programmatically over 65 rows, **every `printedLabel` is
the label's own number with a trailing dot** (`S1` → `1.`). It exists only because the fourth section
**restarts its numbering at 1**, so `S1` and main-run `Q1` are different questions. Say that once per
S append if it helps the citation; never say the printed number differs.

⚠️ **`houseKey` and `heldAnswer` index different arrays. Compare the option TEXT they point at,
never the two numbers.**

## What you produce

**A JSON patch file — not edits to `app/data/questions.ent.js`.** The data file is patched only by
the verified harness `foldpatch.js`, which refuses to write if the entry count moves, if any
untouched entry changes, or if a hole appears.

```json
[
 { "id": "entep-nose-5",
   "addBank": "house",
   "sourceAppend": " **⚠️ ALSO PRINTED IN HOUSE, TWICE** — `Dr. HOUSE in ENT, End-of-round MCQs 2025` p.183 (S8) and p.202 (S101), the same vignette both times ...",
   "explanationAppend": "" }
]
```

- `addBank` is always `"house"`. The harness merges it into an existing `alsoIn` and never
  duplicates a bank already present.
- ⚠️ **Two targets ALREADY carry `house` — `entep-nose-58` and `entep-throat-82`.** They were folded
  from the main run earlier, so the book prints those items in two of its own sections. `addBank` is
  a no-op there; **still pass it** (the harness handles it) but **say in `sourceAppend` that this is
  the same book printing the same question twice.**
- `sourceAppend` is appended **inside** the existing `source` string. **Begin it with a space.**
- `explanationAppend` only where the House printing adds real content. For most of these it will be
  empty — a reprint adds a citation, not a teaching point.
- **Never write `answer`, `stem` or `options` into a patch.**

## What `sourceAppend` must say

1. **That the item is printed in House**, with the **book page** and the House label, both read off
   your row, never from memory. Where `printedLabel` is present, the page prints a different number
   from the label — say so.
2. **Exactly what differs between the two printings.** Be specific: *"the four options are identical
   in identical order with the same key"* is a finding; *"essentially the same"* is not.
3. **That the key agrees.** ⚠️ 14 of the 124 have non-identical key TEXT and **every one is a
   spelling variant, an abbreviation or an intensifier** — `Glomus tumour`/`tumor` ·
   `Peumothorax`/`Pneumothorax` · `Herptic`/`Herpetic` · `Impeding`/`Impending` ·
   `Unsafe CSOM`/`Unsafe type of chronic suppurative otitis media` · `SNHL`/`Sensory neural hearing
   loss` · `III`/`Grade III` · `CT`/`CT scan of the neck` · `Severe stridor`/`Stridor` ·
   `Genetic`/`Genetic theory` · `Cricopharyngeal muscle spasm`/`Cricopharyngeal spasm` ·
   `Lymph node(s)`/`Lymph node enlargement`. **Name the difference precisely in `sourceAppend` — a
   divergence recorded as "essentially the same" is a divergence lost.** If you find one that is NOT
   of that kind, **stop and report it: that is not an ordinary fold.**
4. **Which sweep stage caught it.**

Keep it to a **compact paragraph**. `source` is a citation plus notes, never a second explanation.

## ⚠️ What this section IS, so you do not mis-describe it

**The fourth section (`S1`–`S110`) is the endpoint bank reprinted.** All 110 matched something held;
**108 folded, 2 were held for divergent keys, and NOT ONE was a new question.** Its display title on
book p.182 reads *Selected questions published by the department*, its running header from p.183
reads *Selected department MCQs* — and the endpoint file **is** the department's own question set.
**So a fold here is a reprint of a reprint, and `sourceAppend` should say that plainly** rather than
implying House is an independent second witness. ⚠️ **For the main run (`Q686`–`Q724`) that is NOT
true** — those 16 folds are genuine cross-bank matches against Grade Gain and endpoint.

## Rules that still apply

- **Never write a page number, filename or id from memory** — 7/7 and 3/3 were wrong on this project.
- **Never backtick an id you have not grepped in `app/data/questions.ent.js`.**
- **A defective key is noted, never disputed.**
- **How this book is cited:** all 558 House-origin entries use the printed title `Dr. HOUSE in ENT,
  End-of-round MCQs 2025, p.N`; fold-appends have used the filename `d house ENT mcq.pdf` book p.N
  83 times out of 84. **Either is acceptable — pick one and be consistent across your whole file.**
- Escaping: fields are **quoted JS strings** — use curly apostrophes (’), the two-character `\n` for
  paragraph breaks. ⚠️ **The Bash tool's quoted heredoc collapses `\\` to `\` even when the body is
  JS or JSON** — it has corrupted paths, citations and a regex on this project four times. **Write
  the file with a real file write and grep every path you wrote, after writing it.**
- Prove your JSON parses before reporting.

## Return

Short report: the patch file path, how many patches, every key-text difference you judged to be more
than spelling, every place the verdict file and the staging disagree, and anything in this brief that
turned out to be wrong.

**TRUST THE STAGING AND THE TRANSCRIPT OVER THIS PROMPT, AND TELL ME WHERE I WAS WRONG.** That has
been paid out sixteen times on this project.
