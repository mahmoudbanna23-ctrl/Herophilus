# House ENT MCQs — duplicate sweep, Q391–Q685 (Nose tail + Throat)

**Staged:** 294 questions (Nose tail Q391–Q471 = 81 · Throat Q472–Q685 = 213), parsed from the 19
transcripts `d-house-ENT-mcq-pdf055-086.md`. **Zero unparsed.**
**Swept against:** the whole held ENT corpus, 2,005 entries (endpoint 615 · gradegain 1,043 · house 347).
**Date:** 2026-08-23. Harness: `stage2.js` → `sweep2.js` → `tiers.js` → `tail2.js` → `shortkey.js`.

## Result

| | |
|---|---|
| pair-hits raised | 573 |
| distinct staged questions implicated | 213 of 294 |
| **FOLD** | **82** |
| **NEW** | **212** |

## ⚠️ An instrument defect found and fixed mid-sweep

The `sameKey` guard read `keycore.length > 3`. Any key whose text reduces to three characters or
fewer — `Rt RLN` → `rln`, and likewise `US`, `CT`, `IgD`, `Mid` — **silently switched stages B and C
off for that question.** 31 of the 294 staged questions were affected.

`shortkey.js` re-ran B and C for those 31 with the guard at `>= 2`. It recovered **two real folds
that the main sweep had missed**:

- **Q634 → `entqb-thr10-552`** — identical stem, options and key. The main sweep had shown Q634 only
  against `entqb-thr10-551` (the laryngocele question), where it reads as a deliberate contrast pair,
  and I had adjudicated it NEW on that evidence. **The right sibling was never put in front of me.**
- **Q660 → `entqb-thr8-418`** — identical stem and key; Grade Gain prints a fourth option House omits.

**The rule this pays for: a guard that silently disables a stage is worse than a stage that is
absent, because the tier report still looks complete.** Both recovered folds had been adjudicated
NEW against the wrong sibling, with reasoning that was sound given what was shown.

## ⚠️ Cross-bank findings

**1. A key divergence on an identical option set — Q448 vs `entqb-nose6-195`.**
Both print *all of the following are symptoms of nasal fracture except*, over the same four options —
**as a set, not in the same order**, a precision the batch-2 drafter added and which this file
originally blurred. House prints *Bloody / Hyposmia / Purulent / Nasal obstruction* and keys index 3;
`entqb-nose6-195` prints *Bloody / Purulent / Hyposmia / Nasal obstruction* and keys index 1.
So **House keys *Nasal obstruction*; Grade Gain keys *Purulent rhinorrhea*.** Verified on both sides.
⚠️ **Say "the same option SET" unless the order has actually been checked** — the two banks reorder
constantly, and an entry that quotes a sibling's letter rather than its text will be wrong.
Per the standing rule a defective key is **noted, never disputed** — House's `answer` stays where the
bank printed it, and the divergence is recorded in the explanation of both entries. **The course's own
second bank is now the citation, not outside reasoning.** This is the second such divergence found
(after GG Q566 vs `entep-enr-33`).

**2. ⚠️⚠️ Q685 — THIS ENTRY WAS WRONG AND IS CORRECTED (2026-08-23). THE TWO BANKS AGREE.**
I recorded Q685 as pairing with `entqb-thr7-373` on opposite keys. **The sweep showed me the wrong
sibling.** Verified directly in the corpus:

| | stem | key |
|---|---|---|
| House **Q685** | bullied, severe neck **and face** trauma, **mandibular fracture** | flexible fibreoptic (transnasal) |
| **`entqb-thr7-372`** | assaulted, **multiple mandibular fractures**, difficulty opening the mouth | **flexible fibreoptic (transnasal) — SAME** |
| **`entqb-thr7-373`** | bullied, severe neck trauma **without facial affection** | indirect mirror (transoral) |

**`entqb-thr7-372` is Q685's true twin and the banks key it identically.** `entqb-thr7-373` is the
twin of House **Q686**, one clause away. So this is not one vignette with opposite keys — it is
**two stems, two twins, one clause apart**, and there was never a divergence here at all. The
mandibular clause is confirmed present in House's printed stem.

⚠️⚠️ **THIRD INSTANCE OF THE SAME INSTRUMENT FAULT: A SWEEP HIT NAMES *A* SIBLING, NOT *THE NEAREST*
ONE.** `tiers.js` keeps only the best-scoring hit per staged question, so `entqb-thr7-372` was never
put in front of me. The same fault produced a wrong sibling for **Q502** (`entep-throat-63` instead
of `entqb-thr2-81`) and a missed fold for **Q634** (shown against `entqb-thr10-551` instead of
`entqb-thr10-552`). **Before writing a cross-bank claim, list EVERY candidate above threshold, not
the top one.**

The transcriber's warning that Q685/Q686 are near-twins that must not be folded still stands, and
now has its reason.

**3. Q648 vs `entep-throat-15` — the same question with the correct answer swapped for another
correct answer.** *Biphasic stridor may be due to …?* — three options identical, and the fourth is
**Subglottic tumor** in House (keyed) against **Tracheal stenosis** in endpoint (keyed). Both keys are
right; the banks chose different right answers. NEW under the replaced-distractor rule, siblings
cross-referenced.

**4. Q660's fold confirms one half of the odd tracheostomy pair.** Q659 (*safest*) and Q660 (*most
difficult*) are printed with the same three options and **both keyed Mid**, which the transcriber
flagged as a shape the bank had not produced before. Grade Gain's `entqb-thr8-418` prints *most
difficult* and also keys **Mid** — so House's Q660 key is corroborated by the second bank, and the
anomaly narrows to **Q659 alone**, where no cross-bank check exists. Noted, not disputed.

## ⚠️ Three reconstructed stems in the shipped data can now be replaced by printed text

`entep-nose-40`, `entep-nose-41`, `entep-nose-42` and `entep-mfe5-22` each carry a note saying the
endpoint file prints no vignette and that the stem was **reconstructed from the bank's own answer
key**. House prints the vignette in full:

| held entry | House printing | what House supplies |
|---|---|---|
| `entep-nose-40` | Q613, book p.156 | the adolescent boy with recurrent severe epistaxis, printed |
| `entep-nose-41` | Q614, book p.156 | the same case, printed |
| `entep-nose-42` | Q615, book p.157 | the same case, printed |
| `entep-mfe5-22` | Q645, book p.163 | the post-thyroidectomy case, printed |

**On folding these, the reconstruction is replaced by the printed House stem and cited to the House
page.** A reconstructed stem is a recorded weakness in the corpus; this removes four of them.

## Self-sweep — internal duplicates among the 294

63 pairs raised. The instrument is dominated by **back-reference stems** — *"In the previous case,
what is the best line of management?"* is printed verbatim at Q412, Q429, Q496, Q562, Q570 and Q633,
each pointing at a different preceding vignette. They are not duplicates and the ranking cannot know
that; only reading the preceding question settles it.

**Exact-stem pairs, all read:**

| pair | verdict |
|---|---|
| Q412 ↔ Q429 | different cases (septal abscess vs meningoencephalocele) — **both NEW** |
| Q450 ↔ Q454 | same stem, **entirely different option sets** — **both NEW** |
| Q544 ↔ Q545 | same stem, different option sets — **both NEW** |
| Q554 ↔ Q566 | same stem, different option sets — **both NEW** |
| Q622 ↔ Q623 | same stem; the fourth option differs (*TB of larynx* vs *Reinke's edema*) and so does the key — **both NEW**, and they fold to *different* held entries |
| **Q523 ↔ Q535** | **a true internal duplicate** — identical stem, options and key, printed twice nineteen pages apart. Resolved by the corpus sweep: **both fold into `entep-throat-98`**, so it becomes one entry carrying both House citations |

**Q523/Q535 is the only true internal duplicate in the range.** The reason a same-stem pair is
usually NOT a duplicate in this bank is that the author reuses a stem deliberately and swaps the
option block — the graded-set habit seen throughout.

## Deliberate sets preserved (not folded)

- **Q443 / Q444** — football player, *severe edema* vs *no edema*: Q443 folds into `entep-nose-74`,
  **Q444 is its pair partner and stays.** The deliberate-pair rule outranks the reprint rule.
- **Q455 / Q456 / Q457** — nose trauma at *30 minutes* / *2 days* / *3 weeks*. Only **Q456** matches
  `entep-nose-50`; the other two stay.
- **Q627 / Q636** — laryngeal SCC *with mobile cords* (LASER + RT) vs *without* (total + chemo).
  Q627 folds into `entqb-thr10-553`; **Q636 stays** — the mobile-cords clause is the discriminator.
- **Q649 / Q650** — most common *laryngeal* vs *extralaryngeal* congenital cause of stridor.
- **Q657 / Q658** — tracheostomy type for *laryngeal* vs *thyroid* cancer.
- **Q639 / Q640 / Q641 / Q642** — the four vocal-cord-paralysis permutations on one option block.
- **Q583 / Q584 / Q585** — primary / reactionary / secondary post-tonsillectomy haemorrhage.
- **Q621** — recurrent respiratory papillomatosis *in a child, except* against `entqb-thr10-524`'s
  *in adults, which of the following*: same four options and the same keyed text, correct in both
  directions. A deliberate child/adult pair, **not** a reprint.
- **Q661 / Q662** — most common *operative* vs *postoperative* tracheostomy complication.

## The fold map — 82 folds into 81 distinct held entries

Targets by bank: **endpoint 31 · gradegain 50 · house 1.** Every reference was verified to resolve
against the shipped corpus before this file was written (`folds2.js`, machine-readable copy in
`folds2.json`).

**The one House target is `enthd-nose-337`, which Q466 folds into — the bank reprints its own
question across sections** (book p.101 in Nose, again at p.124). Folding it adds no bank; it adds a
second page citation to an entry that already exists.

```
A  443>entep-nose-74     466>enthd-nose-337   516>entep-throat-101 518>entep-throat-29
   550>entep-nose-75     578>entqb-thr4-247   602>entqb-thr6-318   603>entqb-thr6-319
   607>entep-mfe5-28     610>entep-throat-43  612>entep-nose-30    623>entqb-thr10-534
   638>entqb-thr10-555   643>entqb-thr10-556  644>entep-mfe5-21    664>entqb-thr8-407
   666>entqb-thr8-408    669>entqb-thr8-419   671>entqb-thr8-420   682>entqb-thr7-370
B  410>entep-enr-30      414>entep-nose-82    442>entep-mfe5-14    458>entep-mfe5-8
   500>entqb-thr2-60     515>entqb-thr5-289   523>entep-throat-98  524>entqb-thr5-285
   535>entep-throat-98   538>entep-throat-97  555>entqb-thr4-234   556>entqb-thr4-235
   557>entqb-thr4-236    561>entqb-thr4-243   562>entqb-thr4-244   564>entqb-thr4-246
   565>entqb-thr4-239    597>entqb-thr4-224   598>entep-throat-99  600>entqb-thr6-317
   608>entep-mfe5-29     611>entqb-thr6-321   613>entep-nose-40    615>entep-nose-42
   619>entep-throat-28   620>entqb-thr10-549  622>entep-throat-82  627>entqb-thr10-553
   630>entqb-thr10-554   632>entqb-thr10-531  633>entqb-thr10-551  645>entep-mfe5-22
   650>entqb-thr8-404    655>entqb-thr8-405   656>entqb-thr8-415   665>entqb-thr8-413
   667>entqb-thr8-409    673>entep-throat-34  678>entqb-thr7-369
K  634>entqb-thr10-552   660>entqb-thr8-418          (recovered after the guard fix)
C  431>entep-nose-58     452>entep-mfe5-15    456>entep-nose-50    462>entqb-nose5-174
   473>entqb-thr1-33     475>entqb-thr1-31    496>entqb-thr2-64    497>entqb-thr2-83
   504>entqb-thr2-66     520>entqb-thr5-259   526>entqb-thr5-290   536>entep-throat-102
   537>entep-throat-96   559>entqb-thr4-240   560>entqb-thr4-241   591>entqb-thr4-237
   614>entep-nose-41     657>entqb-thr8-412   668>entqb-thr8-410   674>entep-throat-38
   675>entep-ear-52
```

### On a fold, the fuller printing wins

Several of these folds run **House → held**, meaning the held entry must be *updated*, not merely
tagged:

- **Q497** prints five options where `entqb-thr2-83` prints four — House adds **CT neck**. Keep the
  five-option printing.
- **Q614, Q674, Q675, Q591, Q473, Q475** each add *None of the above* to the held four.
- **Q632** prints a fuller stem than `entqb-thr10-531` (dysphonia, stridor **and** lateral neck
  swelling, against a bare "compressible mass in the neck").
- **Q613 / Q614 / Q615 / Q645** replace reconstructed stems with printed ones — see above.

### Two folds carry printed rationale the held entry does not have

**Q607 → `entep-mfe5-28`** and **Q623 → `entqb-thr10-534`** are two of the eleven House questions
whose answer line prints an editorial parenthesis. On folding, that parenthesis is captured
**verbatim and unmarked** (printed text is never marked as authored) and the entry must **not** carry
the standard *"prints no explanation here"* marker, which would be a false statement about the
source. Q607's is the stronger: *some references say dermoid but the professor in the lecture said
it's thyroglossal cyst* — the source pre-empting a key dispute and naming the lecture as its
authority.
