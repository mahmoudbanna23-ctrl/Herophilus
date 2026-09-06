# Section 14 — four reprints found after the fold adjudication closed

Model Final Exam 3, pp.1595–1756. The three fold-adjudication files (`endpoint-p2-s14-fold-adjudication-A/B/C.md`)
ruled 49 of the 80 staged rows reprints and left 31 to draft. **Four of those 31 are also reprints.**
None of them was ever compared, and the reason is the same in all four cases: the candidate generator
handed the adjudicating quarter no candidate, and the quarter recorded that silence as a pass.
Adjudication B says so in its own words for n51 — "carried no candidate at all, per brief" — and n19,
n23 and n25 carry no verdict heading anywhere in any of the three files.

**The count moves from 49 reprints / 31 drafted to 53 / 27.**

## The rule this produced

**A candidate list's silence is not a verdict.** An `n` with no candidate has not been ruled on; it
has been skipped. A fold-adjudication brief must require a verdict for every `n` in its range and must
not let a quarter fall silent for want of a candidate.

**Stem-overlap ranking is blind to a bare-stem reprint.** A question whose stem is one short sentence
scores low against its own twin however identical the twin is — n51's pair scores 0.600 on stem
overlap, below any sane threshold. The complementary instrument is option-pool overlap plus key-text
identity, ignoring the stem entirely. Both instruments were run over all 31 rows against all 1,292
live endpoint entries in both files; the option-pool pass found nothing the stem pass had missed among
the remaining 27, and its two perfect option-pool scores are shared menus with different vignettes,
which pair questions and never fold them.

## The four rulings

Every one was verified on the rendered page images before being acted on. Both sides' transcriptions
are byte-accurate; every divergence below is a real printed difference, recorded and never reconciled.

### n19, p.1633 — reprint of `pedep2-ren-19` (p.856)

Same five options in the same order, same key E.

- The exam gives the boy's age as 6; the body printing says 4.
- **The exam prints "He is febrile"; the body printing prints "He is afebrile".** The contradicted
  sign is the same shape as n18's murmur grade V/VI against I/VI, which this section already accepted
  as a reprint.
- The exam drops the body printing's closing sentence, which reads "Routine blood tests are
  normal.What is the most likely diagnosis?" — printed with no space, exactly so.
- The options lose the parentheticals "(ALL)" and "(scurvy)", and an en dash becomes a hyphen.

### n23, p.1641 — reprint of `pedep2-dp-17` (p.129)

Same five options in the same order, same key C.

- The exam drops "by the educational psychologist".
- Option D: "Constantly talking and interrupting others" against "Constantly talking, often
  interrupting others".
- Option E: "Fidgeting with his hands while sitting" against "Fidgeting with his hands or objects
  while sitting still".

### n25, p.1645 — reprint of `pedep2-mf1-74` (p.1418)

Same four options in the same order, same key C.

- **The exam prints "boot-shaped heart"; the body printing prints "boat-shaped heart".** Both are
  legible on their own page image. Recorded, never reconciled.
- The exam has no four-limb blood-pressure sentence; the body printing does.
- The exam asks "What is the **other** possible clinical presentation"; the body printing omits
  "other".

### n51, p.1697 — reprint of `pedep2-mf2-3` (p.1438)

Five options both sides, A highlighted on both pages, key names the same answer.

Verbatim off the two page images:

| | p.1697 (exam) | p.1438 (live `pedep2-mf2-3`) |
|---|---|---|
| stem | `In which neurological disorder does "muscle fasciculations" occur?` | `In which neurological disorders does “muscle fasciculation” occur?` |
| quotes | straight | curly |
| option A (the key) | Spinal muscular atrophy | Spinal muscle atrophy |
| option D | Neuromuscular junction disorders | Neuromuscular junction |
| B, C, E | identical | identical |

Singular and plural are inverted between the two printings on both "disorder" and "fasciculation".

**⚠️ The key text moves**, so n51 needs a `KEYTEXT_OK` entry in `reprint-s14-pd-ep2.js`, not only a
PLAN row: `51: ['Spinal muscle atrophy', 'Spinal muscular atrophy', 'muscle respelled muscular, p.1697']`.

**⚠️ Open question for whoever writes the reprint clause.** The two printings carry *different*
explanation boxes, which is the boxed-second-printing fold shape:

- p.1697 prints: `Muscle fasciculations occur due to denervation, commonly seen in motor neuron disorders like spinal muscular atrophy.`
- p.1438 prints, and the live entry already quotes: `In spinal muscle atrophy (anterior horn cell disease), there are signs of denervation: weakness, loss of reflexes, fasciculation and wasting as the nerve supply to the muscle fails`

The exam's box adds nothing the live box does not already say, so a plain reprint clause is probably
right and the second box is probably not worth quoting. **Decide by reading the live entry's
explanation before stamping a clause on it** — the n33 pass proved a reprint clause that leaves a
false sentence standing is worse than no clause.

## Rulings audited and left standing

The four "none" verdicts among the remaining 27 were re-read rather than assumed, and all four hold:

- **n10** — the only real overlap is cross-bank, `pedhd-haem-22`. Nothing folds across banks.
- **n17** — a different newborn: ambiguous genitalia present against absent, and every laboratory
  value in a different unit system. It shares the CAH option menu with `pedep2-end-6` exactly
  (option-pool 1.000, same key text), which is what makes it a pair and not a fold.
- **n34** — the option pool differs by one substantive choice, IM glucagon against fluid
  resuscitation. ⚠️ The original verdict named only the House twin `pedhd-endo-11` and missed the
  within-bank `pedep2-end-11`; the ruling is unchanged, but the blind spot is the same one that
  produced the four misses above.
- **n35** — shares the five-item seizure-type menu with `pedep2-mf1-48` exactly, but the vignettes
  and the keys both differ.

## The 27 that remain to draft

n1, n2, n3, n10, n17, n26, n27, n29, n34, n35, n44, n47, n48, n50, n53, n55, n60, n63, n64, n66,
n67, n68, n73, n74, n75, n78, n79.

All 27 print an explanation box; the section has no figure, no `box` row and no `straddle`, so an
`image` field on any of them is a hard failure. Four of them print four options rather than five —
n25 was one, and of the survivors n64, n73 and n74 remain.

Chapter rulings for the 27, carried from the earlier pass with the four newly-ruled reprints dropped:

`n1 haematology · n2 cardiac · n3 renal · n10 haem-bleeding · n17 endo-thyroid (6 live precedents) ·
n26 haem-bleeding · n27 endocrine · n29 renal (no real precedent; ruled on the AKI triad, straddles
haematology) · n34 endocrine · n35 neurological · n44 cardiac-acq (3 of 4 precedents) · n47 endocrine ·
n48 haem-bleeding · n50 renal · n53 neuro-cp · n55 haematology · n60 renal · n63 haematology ·
n64 renal-cakut · n66 cardiac · n67 liver-hep · n68 neuro-nm · n73 renal-cakut · n74 infection-bact
(key is "Recent group A streptococcal infection"; precedent split infection-bact 3 / renal 2 /
cardiac-acq 1) · n75 neurological · n78 endocrine · n79 neurological.`

Pairs to name in the drafting notes rather than fold: n35 with `pedep2-mf1-48`; n34 with
`pedep2-end-11` and the House `pedhd-endo-9..12` family; n10 cross-bank with `pedhd-haem-22`; n17 with
`pedep2-end-6`; n55 with `pedep2-hem-65`; n1 with `pedep2-hem-38` on the iron-deficiency key.
