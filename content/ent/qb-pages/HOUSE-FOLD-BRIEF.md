# Brief — applying the 83 House folds (Q391–Q685)

A fold does **not** create an entry. **The bank is ADDED to the entry that already exists** and the
House printing's citation is folded into that entry's `source`. This is the project's standing rule:
*on a cross-bank match, ADD THE BANK — never a second entry.*

**The fold map is `house-sweep-throat.md` (83 folds → 82 distinct held entries; Q523 and Q535 share
one).** Verdicts, evidence and every adjudication are in that file. **Read it before you write.**

⚠️ **The authoritative machine-readable map is `folds2.json` in the harness directory, and it is the
one to work from** — the `.md` prose was corrected twice after it was first written. **Where the two
disagree, say so in your report; do not silently pick one.**

⚠️ **Two of the 83 are not ordinary folds and must be handled as named exceptions:**

- **Q635 → `entqb-thr10-535`** was adjudicated a fold from the `shortkey.js` re-run (stage B, stem
  1.00, options 1.00) **and then left out of the first map by mistake.** It is a normal fold in every
  other respect; it is called out only so nobody re-adjudicates it.
- **Q466 → `enthd-nose-337` is a fold INTO A HOUSE ENTRY** — the bank prints the same item twice, at
  book p.124 (Q466) and earlier as Q337. `addBank` is therefore a **no-op** and must be omitted: the
  entry already carries `bank:'house'`. Patch **`sourceAppend` only**, and say plainly that this is
  the bank duplicating itself, not a cross-bank match.

**The 211 new Throat entries were spliced on 2026-08-24 and the file now holds 2,216 `Q_ENT`
entries** — so any id you grep for, new or held, is present. Boot verified clean: 0 console errors,
2,675 questions.

## Your input file — everything needed for one fold is on one row

Your half is a JSON array; **each row already carries both printings side by side**, so you never
have to hunt for either:

`houseN` · `housePage` (the **book** page, cite it as this) · `houseStem` · `houseOpts` ·
`houseKey` (index into `houseOpts`) · `houseTranscript` (the file it was read from) · `into` ·
`heldBank` · `heldAlsoIn` · `heldStem` · `heldOpts` · `heldAnswer` · `heldChapter` · `heldSource`.

**Compare `houseOpts` against `heldOpts` element by element and say exactly what you find** — same
set and same order · same set reordered · one added · one dropped · a spelling or abbreviation
difference. That sentence is the whole value of the citation. **`houseKey` and `heldAnswer` are
indices into different arrays — compare the option TEXT they point at, never the two numbers.**

## What you produce

**A JSON patch file — not edits to `app/data/questions.ent.js`.** The data file is 5.4 MB of
hand-formatted entries and is patched only by the verified harness `foldpatch.js`, which refuses to
write if the entry count moves, if any untouched entry changes, or if a hole appears.

```json
[
 { "id": "entqb-thr8-418",
   "addBank": "house",
   "sourceAppend": " **⚠️ ALSO PRINTED IN HOUSE** — `d house ENT mcq.pdf` book p.166 (Q660), answer inline: ...",
   "explanationAppend": "" }
]
```

- `addBank` is always `"house"`. The harness merges it into an existing `alsoIn` or creates one; it
  never duplicates a bank already present.
- `sourceAppend` is appended **inside** the existing `source` string. **Begin it with a space.**
- `explanationAppend` is optional and used only where the House printing adds real content.
- **Never write `answer`, `stem` or `options` into a patch** for an ordinary fold. Those three
  belong only to the twelve entries listed under *Content-bearing folds* below, and for those you
  must say so explicitly in your report so I apply them by hand.

## What `sourceAppend` must say

Model it on the entries that already carry a House fold — `entep-enr-28` and `entep-enr-35` are the
cleanest examples in the file. Each one states:

1. **That the item is printed in House**, with `d house ENT mcq.pdf` **book page** and the House
   question number, both taken from the staging file, never from memory.
2. **Exactly what differs** between the two printings — stem reworded, options reordered, a
   distractor added or dropped, spelling. Be specific: *"the four options are identical in identical
   order with the same key"* is a finding; *"essentially the same"* is not.
3. **That the key agrees** — and if it does not, that is not an ordinary fold; stop and report it.
4. **Which sweep stage caught it**, and if it was a near-miss, why. The rankings are the instrument
   and their behaviour is worth recording.

Keep it to a **compact paragraph**. `source` is a citation plus notes, never a second explanation.

## ⚠️ Content-bearing folds — twelve of the 83 carry something the held entry does not have

**Do not patch these blind.** Write the patch, and **flag each one in your report** with what you
propose:

**A. Four reconstructed stems that House can replace with printed text.** `entep-nose-40` (Q613,
p.156) · `entep-nose-41` (Q614, p.156) · `entep-nose-42` (Q615, p.157) · `entep-mfe5-22` (Q645,
p.163). Each currently carries a note saying the endpoint file prints **no vignette** and the stem
was **reconstructed from the bank's own answer key**. House prints the vignette. **The stem should be
replaced by the printed House text and cited to the House page** — that removes four recorded
weaknesses from the corpus. Quote the House stem verbatim in your report.

**B. ⚠️ FIVE folds carry printed rationale — NOT two.** An earlier draft of this brief said two, and a
machine cross-check of `printed-rationale.json` against `folds2.json` on 2026-08-24 found **five of
the bank's eleven printed parentheses fall on folded items.** House prints an **editorial parenthesis
on the answer line** — all five verbatim, exactly as printed, misspellings and all:

| Fold | Printed parenthesis |
|---|---|
| Q607 p.155 → `entep-mfe5-28` | `some references say dermoid but the professor in the lecture said it's thyroglossal cyst` |
| Q622 p.158 → `entep-throat-82` | `Because Plummer vinson's syndrome causes cancer esophagus not cancer larynx` |
| Q623 p.159 → `entqb-thr10-534` | `by exclusion .. all are precancerous except Reineke's edema` |
| Q630 p.160 → `entqb-thr10-554` | `site of transition between 2 epithelium types` |
| Q645 p.163 → `entep-mfe5-22` | `to preserve the anterior part which is responsible for phonation` |

Capture the parenthesis **verbatim and unmarked** via `explanationAppend` — printed text is never
marked as authored, never tidied, never re-spelled. ⚠️ **Do not "fix" `Plummer vinson's`,
`Reineke's`, or the doubled full stop in `exclusion ..`** — the source prints them that way, and this
bank spells that eponym four ways in two pages. **Q607's is the strongest line in the bank**: the
source pre-empting a key dispute and naming **the lecture** as its authority over "some references".
⚠️ **Q645 is on BOTH this list and list A** — it needs the printed vignette AND the parenthesis.

**C. Six folds where House prints the FULLER version.** `entqb-thr2-83` (Q497 prints **five**
options — House adds *CT neck*) · `entqb-thr10-531` (Q632's stem adds dysphonia, stridor and lateral
neck swelling) · and `entep-nose-41`, `entep-throat-38`, `entep-ear-52`, `entqb-thr4-237`, where
House adds *None of the above* to the held four. **The rule is keep the fuller printing — it is NOT
"the held entry wins".** Report the exact option list you propose.

## ⚠️ Four folds where the two banks' KEY TEXT is not identical — measured, not guessed

A machine comparison of every fold's keyed option text (normalised to letters and digits) found
**exactly four disagreements out of 83.** All four are the same answer worded differently, so all
four remain folds — but **each one must be named specifically in `sourceAppend`**, because a
divergence recorded as "essentially the same" is a divergence lost:

| Fold | House prints | The held entry prints |
|---|---|---|
| Q431 → `entep-nose-58` | `EBV` | `Epstein Bar virus` |
| Q452 → `entep-mfe5-15` | `Waiting for 6 months then rhinoplasty with a splint` | `Waiting for 6 months then surgery (rhinoplasty with a splint)` |
| Q456 → `entep-nose-50` | `Medical anti-edematous treatment for 1 week then closed reduction` | `Anti-edematous treatment, then reduction after 5 days` |
| Q462 → `entqb-nose5-174` | `Tension type headache` | `Tension headache` |

⚠️ **Q456 is the one that carries clinical content, not just wording — the two banks print different
intervals, one week against five days.** Record both figures verbatim in `sourceAppend` and, if a
lecture cache settles which the course teaches, say which and cite the slide. **Do not move
`answer`, do not reword either option, and do not decide between them** — a divergence is held and
noted, never resolved by us. The other seventy-nine folds' key texts matched exactly.

## Rules that still apply

- **Never write a page number or filename from memory** — 7/7 and 3/3 were wrong. Read the staging.
- **Never backtick an id you have not verified exists** in `app/data/questions.ent.js`. Grep first.
- **A defective key is noted, never disputed.** If a fold's two keys disagree, it is not a fold.
- Escaping: fields are **single-quoted JS strings** — use curly apostrophes (’), the two-character
  `\n` for paragraph breaks, a **quoted heredoc** for anything containing a backtick, and append in
  small batches. ⚠️ **A `\` inside a quoted heredoc collapses to `\`** — it corrupted a path in
  this project's own memory file on 2026-08-23. **Grep every path you write, after writing it.**

## Return

Short report: the patch file path, how many patches, every content-bearing fold with your proposal
quoted, every discrepancy between the fold map and the staging, and anything in this brief that
turned out to be wrong. **Trust the staging file over any list in this prompt.**
