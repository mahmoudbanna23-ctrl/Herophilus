# Section 15 — chapter rulings

Binding for the drafting of peds endpoint part 2 section 15, "Model Final Exam 4", pp.1759–1921, 80
staged questions of which **70 are adjudicated reprints that are NOT drafted**, **1 (n75) is a
within-section fold into n67**, and **9 are drafted**. Measured against `app\data\modules.js` (the
pediatrics chapter table read in full — 51 chapters, no live entry uses a chapter the table does not
declare) and against the staged verbatim text of all 9 — stem, options and printed key — in
`endpoint-p2-s15-mfe4.array.js`.

⚠️ **Written AFTER staging, deliberately.** A body section is one topic and can be ruled before a
page is opened; a model exam is mixed by construction, so the ruling can only be made once the
questions exist.

⚠️ **Written after the LATE REPRINT pass, and that is not the usual order.** The first version of
these rulings covered sixteen entries. Measuring them is what found that seven of the sixteen are
reprints — see `endpoint-p2-s15-late-reprint-rulings.md`. The nine below are what is left.

Read with `endpoint-p2-s15-fold-adjudication-A/B/C/D.md` (why most of the 70 are reprints),
`endpoint-p2-s15-late-reprint-rulings.md` (the seven hand rulings that were overturned, and the rule
that came out of them) and `endpoint-p2-s15-drafting-notes.md`.

## How these rulings were made

Not from the topic name. Every ruling below was set by **measuring where the live corpus already
puts that exact topic** — `questions.peds.ep2.js` (615) first, then `questions.peds.ep.js` (704),
then `questions.peds.js` (393) — and following it. Where the corpus is silent the chapter is chosen
from `modules.js` and the choice is argued in "Rulings that are not obvious" below.

Two probes were run for each topic and both are reported: one matching the live entry's **own key**
(the answer names the subject, which is the stronger evidence) and one matching the **stem**. A
House tally is reported where it exists but never decides a ruling on its own — House is a different
bank and its chapter choices are evidence about House.

**One ruling carried in from the earlier pass was re-grounded by measuring it.** n36's carried note
said the chapter was `endo-thyroid` because its nearest neighbours are. That is true and it is a weak
reason. The real ground is below, and it is much stronger: the three endocrine chapters partition by
**diabetes / DKA / everything else**, not by gland.

## The split, measured

| n | printed | page | subject | chapter | grounds |
|---|---|---|---|---|---|
| 15 | 15 | 1787 | bronchiolitis, feeding vs oxygen | `resp-bronch` | 7 of 7 ep2 bronchiolitis entries |
| 21 | 21 | 1800 | worsening bronchiolitis, CPAP | `resp-bronch` | same 7; `pedep2-mf2-51` is CPAP in bronchiolitis |
| 25 | 25 | 1808 | which is *not* a developmental concern | `normal-dev` | 11 of 14 ep2 limit-age hits |
| 36 | 37 | 1832 | SIADH after pneumonia | `endo-thyroid` | no SIADH anywhere in the corpus; the chapter split is by diabetes, not by gland |
| 44 | 45 | 1848 | nocturnal enuresis, bell alarms | `renal-cakut` | 3 of 3 ep2 enuresis entries |
| 56 | 57 | 1873 | foreign body aspiration | `respiratory` | 4 of 4 ep2 foreign-body keys |
| 67 | 67 | 1895 | copies a circle, not a square | `normal-dev` | `pedep2-nd-8` and `pedep2-mf1-10`, both `normal-dev` |
| 71 | 71 | 1903 | most sensitive sign of pneumonia | `resp-pneumonia` | 6 of 8 ep2 pneumonia-stem hits |
| 73 | 73 | 1907 | commonest serious RTI in infants | `resp-bronch` | the key **is** bronchiolitis; 3 of 3 ep2 bronchiolitis keys |

Six chapters in all: `resp-bronch` ×3, `normal-dev` ×2, and one each of `respiratory`,
`resp-pneumonia`, `renal-cakut` and `endo-thyroid`. **Six of the nine are respiratory or developmental**, so the drafting
half will be writing the same two corpora over and over; that is a reason to check for repetition
between the nine, not a reason to move any of them.

## The ruling, entry by entry

Nine entries is one drafting half, not two. There is no cross-half comparison to run and no split.

- **n15 `resp-bronch`** — a 3-month-old with clinical bronchiolitis, saturations 96% in air, key
  *Admit and give nasogastric feeds*. Every live entry whose key names bronchiolitis is `resp-bronch`
  (ep2 `pedep2-res-14`, `-50`, `-56`; House `pedhd-resp-15`), and so is every live entry whose stem
  names it. No competing chapter has a single hit.
- **n21 `resp-bronch`** — RSV-positive bronchiolitis deteriorating on 2 L, pH 7.30, pCO₂ 7.8 kPa, key
  *CPAP*. The management axis has its own precedent in the same chapter: `pedep2-mf2-51`,
  "Which of the following is of evidence-based benefit in the treatment of bronchiolitis", key
  *Continuous positive airway pressure (CPAP)*, filed `resp-bronch`.
- **n25 `normal-dev`** — limit ages across four domains, key *Not using single words at 16 months*.
  Of the 14 ep2 entries matching a limit-age or developmental-concern probe, **11 are
  `normal-dev`**, including the ten-entry `pedep2-nd-4..13` run whose keys are bare ages. The other
  three are two `neurological` entries and one `dev-problems` (`pedep2-dp-12`, key *Spastic
  quadriplegia*), and none of the three is a limit-age question. The competing chapter
  `dev-problems` holds 31 ep2 entries and its subject is cerebral palsy, ADHD, autism and the named
  disorders, not the normal ranges.
- **n36 `endo-thyroid`** — see below; the corpus has no SIADH entry at all.
- **n44 `renal-cakut`** — every live enuresis entry is `renal-cakut`: `pedep2-ren-9`,
  `pedep2-ren-45`, `pedep2-mf2-20` (House `pedhd-renal-9` agrees). Not `renal`, not `renal-uti`,
  although n44's own option A raises urinary tract infection — the option is a distractor and the
  corpus files the question by its subject.
- **n56 `respiratory`** — foreign-body keys are unanimous and they are **not** in a sub-chapter:
  `pedep2-res-11`, `-35`, `-49`, `pedep2-mf1-15`, all `respiratory` (House `pedhd-resp-12` agrees).
  ⚠️ The stem is a cyanosis vignette and `cardiac-cyan` exists; the corpus files by the key, and the
  key is *Foreign body aspiration*.
- **n67 `normal-dev`** — the two live fine-motor drawing questions are `pedep2-nd-8` ("copy drawing a
  square", key *4 years*) and `pedep2-mf1-10` ("draw a triangle without seeing how it is done", key
  *Five years*), both `normal-dev`. n67 asks the same question one shape earlier.
- **n71 `resp-pneumonia`** — 6 of the 8 ep2 entries whose stem names pneumonia are `resp-pneumonia`;
  the two that are not are a Shwachman-Diamond vignette and a neonatal-sepsis organism question,
  neither of which is about pneumonia as a respiratory illness. ⚠️ n71's own **key** is *Fast
  breathing*, and a key probe on tachypnoea returns only neonatal transient-tachypnoea entries — a
  false lead, and the reason the stem is the deciding probe for this one.
- **n73 `resp-bronch`** — the key is *Bronchiolitis*, which is the same ground as n15, applied to a
  one-line recall question.

## Rulings that are not obvious

### n36 — `endo-thyroid`, and the corpus has no SIADH entry at all

Probed across all 1,712 live peds entries, stem and key: **`/inappropriate secretion of ADH|SIADH|
inappropriate antidiuretic/` returns nothing.** A hyponatraemia probe returns one entry, and it is a
congenital adrenal hyperplasia question. The corpus has never asked this.

So the ruling is made from the chapter table, and the decisive measurement is **how the three
endocrine chapters actually partition in `questions.peds.ep2.js`**:

| chapter | ep2 | what is in it, measured |
|---|---|---|
| `endocrine` | 13 | **type 1 diabetes mellitus, all 13** — pathophysiology, insulin regimens, hypoglycaemia, acanthosis nigricans |
| `endo-dka` | 4 | diabetic ketoacidosis, all 4 |
| `endo-thyroid` | 16 | thyroid (8: congenital hypothyroidism, screening, thyrotoxicosis) **and adrenal (8: CAH ×4, disorders of sexual differentiation, salt-losing crisis)** |

The split is **diabetes / DKA / everything else endocrine**, not thyroid / adrenal / pituitary.
`endo-thyroid` is where this corpus already puts a non-diabetes endocrine question about a gland it
has no chapter for, and CAH — an adrenal disorder — is filed there seven times. SIADH is pituitary
and it goes to the same place.

The distractor set argues the same way and independently: n36's four distractors are Cushing
syndrome, diabetes insipidus, secondary adrenal insufficiency and adrenal hyperplasia. A key probe
on that family returns `pedep2-end-6`, `pedep2-mf2-34`, `pedep2-mf3-17` — **all three
`endo-thyroid`**. Not one of them is filed under `endocrine`, which the corpus reserves for
diabetes.

**Straddle to note in the drafting, not to act on:** n36's vignette is a pneumonia admission, and the
question is a complication of it. The primary is endocrine; note respiratory as secondary.

### n56 — the vignette says cyanosis, the corpus files by the key

`cardiac-cyan` holds 1 ep2 entry that matched an age probe and is otherwise a real chapter, and a
2-year-old "found to be cyanosed" with SaO₂ 80% would fit it on the stem alone. It is not the
ruling. All five live foreign-body entries across all three files are `respiratory`, and n56's key is
*Foreign body aspiration*. **A vignette's presenting sign is not the subject; the key is.**

### n25 and n67 — a shared menu, and why neither folds

Both were flagged by the stem sweep against the `pedep2-nd-*` run, and the overlap is the **option
menu of ages**, nothing else. A shared option menu pairs questions and never folds them. n25 asks
which limit age is *not* a concern across four domains; n67 asks a single fine-motor age. Name both
pairs in the drafting notes.

### n73 and the bronchiolitis family — a pair with `pedep2-res-59`, not a fold

`pedep2-res-59` ("Which of the following statements about bronchiolitis is true?") and
`pedep2-res-26` share n73's subject and its menu vocabulary. Neither asks n73's question — which
respiratory infection is the commonest serious one in infants — and neither has n73's key position or
key text. Pair, do not fold. This was re-checked on key text as part of the late-reprint pass.

## What every drafting half must carry

- **All nine print an explanation box**, so every entry takes the box verbatim and unmarked; none
  takes the `Written for this bank` marker.
- **No figure, no `box` row, no `straddle` in the nine.** An `image` field on any of them is a hard
  failure.
- **Every one has five options.** No four-option row survives into the drafted nine.
- **Two carry a printed-number defect and both are recorded, never corrected:**
  - **n25** — option C prints "16 months"; the explanation box prints "15 months". Both confirmed
    legible at 300 dpi. The key stays as printed (option C, the highlighted answer) and the
    discrepancy goes in the explanation.
  - **n36** — the page prints "37." though it is n36 in section order; the printed sequence jumps 35
    to 37 and skips 36 entirely. `pr: 37`, `n: 36`.
- **n44 prints as 45 and n56 prints as 57** — the book's own numbering offset, not a transcription
  fault. Record `pr`, keep `n` sequential.
- **⚠️ A live defect to work around, not to fix here:** `pedep2-res-14` prints "Bronchiolitis" twice,
  at option index 0 (the key) and again at index 3. n15, n21 and n73 all cite the bronchiolitis
  corpus and will meet it. Per project rule it is recorded and never silently corrected; it is
  logged in `endpoint-p2-s15-drafting-notes.md`.

## What this file does NOT settle

Which entries pair with which, and the wording of the pairing notes — `endpoint-p2-s15-drafting-notes.md`.
Why 70 of 80 are reprints — the four fold-adjudication files and
`endpoint-p2-s15-late-reprint-rulings.md`.
