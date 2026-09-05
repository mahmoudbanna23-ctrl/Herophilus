# The cross-part fold — what was compared, what was deleted, and what was left alone

Executed 2026-09-05 by `tools/bank-harness/crossparts-fold-pd-ep2.js --write`, on the user's
instruction to fold the part-1/part-2 overlaps. Part 1 closed on 2026-09-05 at 705 entries, which is
what made the boundary foldable: while both chats were live, nothing folded across it.

**`questions.peds.ep.js` and `questions.peds.ep2.js` are one bank.** Both carry `bank:'endpoint'`;
the split is two source PDFs, not two banks. So a match across them is a *within-bank* duplicate and
folds by **deleting** the lesser printing and folding its citation into the survivor's `source` —
the opposite of a House match, which is cross-bank and folds by adding a bank, never by deleting.

## The comparison was rebuilt, not taken from the record

Eighteen part-1 overlaps had been recorded per-section during staging. They were **not** used as the
fold list, for two measured reasons:

- They are per-section leftovers. Sections 1–11 were compared against part 1 only as it stood at the
  time, while part 1 was still growing; sections 1–11 were never compared against the finished file.
- Some came from `reprint-pd-ep2.js`, an **OCR prefix probe**. A prefix probe scores an editorial
  rewrite as a miss — section 2 measured 6 by prefix against 19 by verbatim stem.

`crossparts-pd-ep2.js` therefore swept the two files whole against whole: **388,455 pairs, 207
candidates at Dice ≥ 0.55, 5 at ≥ 0.90.**

**The cut from 207 to 17 was measured.** Median shorter-stem length by band: ≥ 0.9 → **217 chars**;
0.8–0.9 → 53; 0.7–0.8 → 53; 0.6–0.7 → 57; 0.55–0.6 → 57. The low bands are one-line recall questions
matching by template — `pedep-nut-27` alone matched four unrelated dev-problems entries. The
adjudication set was `sim ≥ 0.8 OR opt ≥ 0.5` = 17 pairs. A short stem is **not** automatically
noise: `pedep2-dp-29`/`pedep-gp-40` is 74/74 characters at sim 1.000 and is a real fold.

## Verdicts

Seventeen pairs adjudicated in two independent sets (`crossparts-adjudication-A.md`, `-B.md`):
**13 REPRINT · 4 NOT A REPRINT · 0 UNCERTAIN**. Thirteen verdicts produced **twelve** deletions,
because two of them name the same entry (see the three-printings note below).

### The twelve executed folds

| deleted | survivor | shape |
|---|---|---|
| `pedep2-dp-29` | `pedep-gp-40` | rebuilt distractor set, stem and key text unchanged |
| `pedep2-mf1-28` | `pedep-mf3-13` | cross-chapter, stem and options identical |
| `pedep2-mf1-46` | `pedep-mf3-37` | identical apart from punctuation |
| `pedep2-mf1-13` | `pedep-mf3-29` | respelled |
| `pedep2-liv-15` | `pedep-neo-39` | fifth option (Early-onset sepsis) dropped |
| `pedep2-end-25` | `pedep-emg-28` | cross-chapter, respelled |
| `pedep2-res-29` | `pedep-alg-1` | patient renamed, clauses paraphrased |
| `pedep2-liv-14` | `pedep-neo-8` | rebuilt distractor set; bilirubin in mg/dL vs μmol/L |
| `pedep2-res-41` | `pedep-mf3-43` | stem clauses reordered |
| `pedep2-end-18` | `pedep-neo-37` | IUGR clause and fifth option (Hyperglycemia) dropped |
| `pedep2-res-30` | `pedep-mf3-42` | age omitted, a third swelling site added |
| **`pedep-inf-82`** | **`pedep2-mf1-25`** | tonsillar discharge not described as purulent |

### Two survivor calls were reversed on re-reading

- **`pedep2-res-30`/`pedep-mf3-42`.** Adjudicator B named the part-2 printing fuller on a
  2-signal-to-1 count, weighing the *printed box* alone. Read whole, `pedep-mf3-42`'s explanation is
  **2306 characters against 1348**, it states the age (*a 5-year-old boy*) that part 2 never gives,
  and part 2's extra site (*eyes*) is redundant against its own *eyelids*. Survivor reversed to
  part 1; the fold no longer deletes anything from the closed file here.
- **`pedep2-mf1-46`/`pedep-mf3-37`.** Adjudicator A broke the tie on which explanation better flags
  outside-course material, which is not a basis for deleting a question. Re-read verbatim: stems
  byte-identical, options identical but for punctuation, same key index and key text. The verdict
  stands on the printings; the stated reasoning was replaced by the evidence.

### The one deletion from the closed part-1 file

`pedep-inf-82` (p.1129) is deleted and `pedep2-mf1-25` (p.1320) survives, because part 2's stem
carries a clinical word part 1's does not — *intense inflammation of the tonsils with **purulent**
discharge*. Explanation lengths are within 47 characters of each other, so the adjective is the only
real signal, and §4's rule is to keep the fuller printing.

⚠️ **Two consequences to carry forward.** Part 1 is now **704**, not the 705 `MEMORY.md` records as
closed. And part 1's closing test was page coverage — every `p.<n>` in every `source` against every
OCR-`answered` page. **p.1129 is still cited, but from the sibling file**, so a future coverage
re-run must read both files as the one bank they are, or it will report p.1129 as a false gap.

### Four NOT A REPRINT, and why

- `pedep2-hem-83`/`pedep-mf3-43` — thalassaemia against neonatal sepsis.
- `pedep2-liv-11`/`pedep-mf1-73` — hepatitis A against gastroschisis.
- `pedep2-nd-19`/`pedep-mf3-13` — 12 vs 13 months, and different clinical pictures: a normally
  developing infant with an early fixed left-hand preference, against an infant with synkinesis and
  spastic gait. Option[0] differs (*Gross motor delay* vs *Normal developmental milestones*). Both
  key the same slot-1 text, which is the shared-menu trap: **a shared option menu pairs questions, it
  never folds them.** This verdict is what unblocked fold 2 — it resolves the three-way leg, leaving
  `pedep-mf3-13` paired only with `pedep2-mf1-28`.
- `pedep2-mf1-51`/`pedep-inf-68` — a full vignette (*afebrile*, 2-day coryzal prodrome, night
  ambulance presentation) against a bare recall line. Shared five-virus ladder only.

## Recorded, deliberately NOT folded: a third printing inside part 1

`pedep-mf3-16` (p.1515) is the same underlying case as `pedep-neo-37` and the deleted
`pedep2-end-18` — pre-eclamptic mother, 37 weeks, 2.2 kg, admitted to SCBU for size, key
*Hypoglycemia*, identical numbers throughout. **Its distractor set differs**: its fifth option is
*Hypercalcemia*, where `pedep-neo-37`'s is *Hyperglycemia*.

This is a **part-1-internal** relationship. `crossparts-pd-ep2.js` sweeps part 2 against part 1 and
cannot see it; no adjudicator read the two against each other; part 1 closed under its own duplicate
sweep. Folding it here would be acting on a pair nothing measured. It goes to the end-of-stream
sweep as a candidate.

## Verification

- `node --check` clean on both files.
- Arrays load: **part 2 540 (was 551), part 1 704 (was 705), 0 sparse holes in either.**
- All twelve folds re-verified from disk: loser absent, survivor present, citation present.
- `crossparts-pd-ep2.js` re-run: **207 → 185 candidates, and 5 → 0 at ≥ 0.90.** The post-fold
  adjudication set (`sim ≥ 0.8 OR opt ≥ 0.5`) holds exactly **four** rows — the four NOT A REPRINT
  pairs above, and nothing else.
- Reference check before deleting: only `pedep2-liv-14` had live dependents, named twice inside
  `pedep2-liv-13`; both repointed to `pedep-neo-8`. ⚠️ The bare short forms `liv-15` and `inf-31`
  that appear in other explanations are **theory section ids in `theory.peds.js`**, not question ids,
  and were correctly left alone — a naive dead-id sweep would have "repaired" them into nonsense.
- `boot-check.js`: **QUESTIONS 5832 · THEORY 153 · MODULES 4 · chapters 153 · console errors 0.**
  5844 − 12 = 5832, reconciling exactly.
