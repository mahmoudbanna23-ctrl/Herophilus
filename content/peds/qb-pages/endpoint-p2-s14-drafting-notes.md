# Section 14 — drafting notes

Binding for both section-14 drafting halves, alongside `pd-ep2-draft-brief.md` (the general rules)
and `endpoint-p2-s14-chapter-rulings.md` (the chapter authority, whose table is reproduced below).
Where this file and the staged array disagree, **the staged array wins** — it was read off the page
images; this file was written from the array, the reprint map and the theory scan.

Section 14, **"Model Final Exam 3"**, pp.1595–1756 of `Pediatrics endpoint part2.pdf`. Staging is
`endpoint-p2-s14-mfe3.array.js` (`PEDEP2_S14_STAGED`, n 1..80, pp.1597–1755). Ids are
`pedep2-mf3-<n>`.

## The page arithmetic is ONE formula — there is no parity flip here

```
n1 … n80    p = 1595 + 2n     pp.1597 … 1755   (odd throughout)
```

Verified by walking all eighty staged rows: **zero deviations.** Section 13 had a parity flip at
p.1531 and section 12 had its own arithmetic; **neither carries over.** No question in section 14
straddles a page break, no explanation box overflows onto a page of its own, and there is no `box`
field anywhere in the array — so nothing here shifts the sequence by one.

**Do not compute a page anyway.** Take `p` from the staged row. The formula is recorded so that a
mismatch is visible, not so that it can be used as a source.

## ⚠️ 80 are staged and only 27 are drafted — the id run is deliberately gapped

**Fifty-three of the eighty are reprints of questions already live** — the highest ratio this stream
has produced. They were adjudicated page against page and executed by
`tools/bank-harness/reprint-s14-pd-ep2.js --write`: fifty-one clauses landed on `pedep2-*` entries in
`questions.peds.ep2.js`, two on `pedep-*` entries in `questions.peds.ep.js`. **They must not be
drafted.** `val-pd-ep2.js` now holds the same fifty-three under `folded:` for section 14 and
hard-fails any half that writes one.

**Do not draft these `n`:**

```
4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 28, 30, 31, 32, 33, 36,
37, 38, 39, 40, 41, 42, 43, 45, 46, 49, 51, 52, 54, 56, 57, 58, 59, 61, 62, 65, 69, 70, 71, 72,
76, 77, 80
```

So the file opens at `pedep2-mf3-1` and closes at `pedep2-mf3-79`; `pedep2-mf3-80` does not exist and
the run has fifty-three holes in it. **That is correct and is not something to fix.**

⚠️ **Five of the fifty-three were added after the adjudication finished.** n33's *NOT A REPRINT*
verdict was overturned; n19, n23, n25 and n51 were **never ruled on at all** — the candidate
generator produced nothing for each and the adjudicating quarter read that silence as a pass. All
four were verified on the page images before being acted on. The rule this produced, and it binds
every later section: **a candidate list's silence is not a verdict.** Both write-ups are in
`endpoint-p2-s14-late-reprint-rulings.md` and `endpoint-p2-s14-reprint-map.md`.

⚠️ **Part 1 is a legitimate fold target and two of the fifty-three landed there** — n30 on
`pedep-neo-20` and n42 on `pedep-emg-28`. Both files carry `bank:'endpoint'`, so a part-1/part-2
match is a **within-bank** reprint. It is *not* the House shape: **it never takes `alsoIn`.**

## The two halves

| half | entries | `n` | pages | file |
|---|---|---|---|---|
| A | 14 | n1 … n50 | pp.1597–1695 | `endpoint-p2-s14-mfe3.draft-A.js` |
| B | 13 | n53 … n79 | pp.1701–1753 | `endpoint-p2-s14-mfe3.draft-B.js` |

A's fourteen: 1, 2, 3, 10, 17, 26, 27, 29, 34, 35, 44, 47, 48, 50.
B's thirteen: 53, 55, 60, 63, 64, 66, 67, 68, 73, 74, 75, 78, 79.

Each half is small, and the halves are lopsided in *character* rather than in count: A holds almost
all of the section's vignettes, B is almost entirely one-line recall. Do not let that flatten B's
explanations — a one-line stem still gets its distractors explained.

## What was measured on the section, before drafting

Every figure below was counted off the staged array by an index walk, not estimated:

- **No figure anywhere in the section.** Not one staging row carries `fig`. **No entry takes `image`
  or `imgAlt`.** An `image` field here is a hard failure.
- **No `box` field and no `straddle` field on any of the eighty rows.** Every `source` is the plain
  shape `Pediatrics endpoint part2.pdf p.<staged p>` with no parenthetical tail. Every question is
  printed whole on its answered page, and every explanation box is printed with its own question.
- **All twenty-seven drafted entries print an explanation box.** `expl` is non-empty on all eighty
  rows, and on the twenty-seven it runs **11 to 49 words**. **No entry in this section takes the
  "Written for this bank" marker** — that shape does not occur here at all. Every one of the
  twenty-seven takes the **boxed** shape.
- **Nine of the eighty print four options** — n11, n14, n20, n25, n28, n31, **n64, n73, n74** — and
  only the last three are among the drafted twenty-seven. The other twenty-four print five.
  `options` takes the staged `opts` verbatim either way. **Do not pad n64, n73 or n74 to five.**
- **No literal backtick in any staged `stem`, `opts` entry or `expl`** across all eighty rows, so
  nothing transcribed can open an unclosed code span. The parity check still runs on what you write.
- **The four cross-section flags in the `note` field are all resolved.** n37, n43, n45 and n51 were
  staged carrying *"RECORDED, no fold decided"*; all four are now in the reprints array. **No
  undecided flag is left on a drafted row.**

## The boxed shape, and the marker every one of the twenty-seven closes with

All twenty-seven quote their printed box and then close with the curly-apostrophe marker:

```
*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*
```

The box is captured verbatim and unmarked; the expansion above it is yours. The eleven-word boxes
(n17, n60, n78) leave the most to write; the forty-nine-word box on n35 leaves the least. **Box
length is not a budget** — the adaptive-depth rule still applies, and a vignette earns more than a
one-line recall regardless of what the book printed beside it.

## ⚠️ Never write "half A", "half B", "draft-A" or "draft-B" inside an entry

`val-pd-ep2.js` carries a LEAK regex that hard-fails a draft containing any of those strings,
alongside `task prompt`, `per the prompt`, `as instructed`, `staging record`,
`the brief asks/says/requires/wants/calls` and `brief's rule`. A second check hard-fails the staging
notation `n:<num>`. Both fire wherever the words appear in the file's entries, **including inside an
explanation**. Name a sibling by its id in backticks and never by a split or a staging number.

## ⚠️ Three defects to RECORD, never correct

**n68 keys an investigation the course does not name.** The stem asks for *the emergency (acute)
investigation in a case of Guillain-Barré syndrome* and keys **EMG (electromyogram)**. `neuro-21`
prints **three** investigations for GBS — *CSF protein-cell dissociation · nerve conduction studies
(reduced velocities) · MRI of the spinal cord* — and **does not print "EMG" at all**, nor rank any
of the three as the acute one. "EMG" has three corpus hits (`neuro-19`, `neuro-25`, `nns-13`), none
of them GBS. Write the key as printed, say that electromyography and nerve conduction studies are
the two halves of one electrophysiological examination, and tag the acute-ranking claim. **Do not
dispute the key and do not raise it with anyone.**

**n53 uses a topographic term the course says is retired.** The stem asks about *cerebral diplegia*.
`neuro-28` states outright that **"topographic categorization into hemiplegia, quadriplegia and
diplegia is NO LONGER USED"** and that the SCPE classification replaced it — yet its own clinical-
types table then names *"Bilateral spastic — diplegia: common in prematurity; legs more affected than
arms"* and closes *"diplegia is the premature baby's pattern."* Both are the deck's. Answer the
question in the bank's vocabulary, and record in `explanation` that the current name for it is
bilateral spastic cerebral palsy.

**n74 asks for a "specific" test that is not specific.** *Anti-Streptolysin O titer (ASOT) is a
specific diagnostic test for which of the following?* keys **recent group A streptococcal
infection** — which is exactly right and exactly what `ren-9` prints (*"antibodies to streptococcus
(anti-streptolysin O) form in the circulation"*). The word carrying the defect is *specific*: a
raised ASOT evidences a **recent streptococcal infection**, not any one of its sequelae, which is
why every named disease in the option list is wrong. Say that; it is what makes the key the key.

## Chapters — per entry

Straight from `endpoint-p2-s14-chapter-rulings.md`. **13 chapters across 27 entries** — a model exam
is mixed by construction. Read that file for *why* each ruling was made; three carried rulings
(n29, n34, n74) were re-grounded there by measuring the live corpus, and two chapter families (CAH,
diabetes) were settled the same way.

The **anchor** column names sections of `app\data\theory.peds.js` to read before writing. Every id
below was verified live on 2026-09-06 against a loaded `T_PEDS`.

⚠️ **`T_PEDS[<chapter>].sections` is an ARRAY, not an object**, and each section's human-readable
heading is **`h`**, not `title`. Section ids run continuously across sibling chapters, so a prefix
grep gives a false zero. **An anchor may sit in a different chapter from the entry** — that is normal
and several below do.

### First half

| n | p | chapter | anchors |
|---|---|---|---|
| 1 | 1597 | `haematology` | `haem-10` (classification by MCV), `haem-18` (IDA labs and the therapeutic trial), `haem-8` |
| 2 | 1599 | `cardiac` | `card-5` (VSD — size decides everything), `card-4` (the murmur signature grid) |
| 3 | 1601 | `renal` | `ren-13` (proteinuria and nephrotic syndrome — the nephrotic/nephritic grid prints **C3 and C4 NORMAL**) |
| 10 | 1615 | `haem-bleeding` | `haem-32` (thrombocytopenia — causes), `haem-33`, `haem-34`, `haem-35` |
| 17 | 1629 | `endo-thyroid` | `endo-33` (congenital adrenal hyperplasia) — ⚠️ **carries its own gap tag, see below** |
| 26 | 1647 | `haem-bleeding` | `haem-37`, `haem-29` (the coagulation cascade), `haem-30` (screening tests), `haem-31` |
| 27 | 1649 | `endocrine` | `endo-3` (presentation and diagnostic criteria — random glucose ≥ 200 mg/dL + symptoms), `endo-4` (insulin — basal–bolus is the gold standard) |
| 29 | 1653 | `renal` | `ren-12` (HUS — the triad after bloody diarrhoea) — ⚠️ **carries its own gap tag**; `ren-6`, `ren-8` |
| 34 | 1663 | `endocrine` | `endo-8` (hypoglycaemia in the child on insulin) — ⚠️ **carries its own gap tag**; `endo-4` |
| 35 | 1665 | `neurological` | `neuro-8` (generalized seizures — the five types), `neuro-6` (definition and classification) |
| 44 | 1683 | `cardiac-acq` | `card-15` (arrhythmias — the complex width and the rate decide) |
| 47 | 1689 | `endocrine` | `endo-1` (DM classification — type 2 is *insulin resistance + relative insulin deficiency*), `gp-11` (recombinant GH side effects include insulin resistance) |
| 48 | 1691 | `haem-bleeding` | `haem-44` (DIC versus vitamin K deficiency), `haem-29`, `nut-31` |
| 50 | 1695 | `renal` | `ren-16` (CAKUT — what to image and what to do; *plasma creatinine and electrolytes to quantify the CKD*), `ren-13`, `ren-9` |

### Second half

| n | p | chapter | anchors |
|---|---|---|---|
| 53 | 1701 | `neuro-cp` | `neuro-28` (the classifications and the clinical types), `neuro-27`, `per-10` (the preterm brain — IVH, PVL and hydrocephalus) |
| 55 | 1705 | `haematology` | `inf-30` (erythema infectiosum — parvovirus B19 replicates in **erythroid progenitor cells**, aplastic crisis in sickle cell and thalassaemia), `haem-8`, `haem-22` |
| 60 | 1715 | `renal` | `ren-7` (glomerular or not — *RBC CASTS ARE PATHOGNOMONIC of glomerular origin*), `ren-9`, `ren-10` |
| 63 | 1721 | `haematology` | `haem-10` (classification by MCV), `haem-18` (iron studies — ↓ ferritin, ↓ serum iron, ↑ TIBC) |
| 64 | 1723 | `renal-cakut` | `ren-15` (CAKUT — reflux and obstruction; PUV **occurs in males only**, bladder outlet obstruction), `ren-16` |
| 66 | 1727 | `cardiac` | `card-9` (coarctation — two different diseases under one name; the critical neonatal form collapses when the duct closes), `card-1` |
| 67 | 1729 | `liver-hep` | `liv-15` (chronic liver disease and its complications — *malnutrition · fat-soluble vitamin deficiency · pruritus*), `liv-9`, `nut-31` |
| 68 | 1731 | `neuro-nm` | `neuro-21` (Charcot-Marie-Tooth and Guillain-Barré — **the three investigations**), `neuro-22` (acute flaccid paralysis — polio vs GBS vs transverse myelitis) |
| 73 | 1741 | `renal-cakut` | `ren-16` (CAKUT — the seven routes in, the investigation table, and the management principles), `ren-15`, `ren-14` |
| 74 | 1743 | `infection-bact` | `ren-9` (APSGN — the trigger and the anti-streptolysin O antibodies), `ren-10` (confirming it), `card-18` (rheumatic fever and RHD) |
| 75 | 1745 | `neurological` | `neuro-13` (antiepileptic drugs — **the six principles**, of which three are this family's three keys) |
| 78 | 1751 | `endocrine` | `endo-2` (type 1 DM — aetiology and pathophysiology; *autoimmune destruction of pancreatic β-cells*), `endo-1` |
| 79 | 1753 | `neurological` | `neuro-6` (epilepsy — the definition and the classification of seizures), `neuro-5` (why a child fits — and what is not a seizure at all) |

## ⚠️ Four measured gaps — answer and tag, never declare

⚠️ **The fourth was found at drafting, and it is the shape to expect: a gap in a DISTRACTOR, not in
a key.** n2's option list prints **tricuspid stenosis**, and `"tricuspid stenosis"` returns **zero**
corpus-wide while `"tricuspid"` alone returns seven — the valve is taught, the lesion is not. A gap
sweep run over the twenty-seven keys would have missed it entirely. **Every distractor must be
explained, so every distractor is inside the grounding requirement.** (Its neighbour needs no tag of
its own: `card-4` already prints *"(MR not in course material)"* and marks itself.)


Per the standing rule and §8 of the brief: fill from general medical knowledge, carry
**`not taken from the course material`** as a short tag on the specific outside claim, lead with the
answer. Each was established by grepping the concept, the abbreviation and the synonyms over all 518
sections — reproduce that reasoning in the tag rather than asserting a bare absence.

1. **n47 — acanthosis nigricans.** *"acanthosis"* returns **zero** corpus-wide, and so does
   *"acanthosis nigricans"*. (`ren-7` prints *acanthocytes* — dysmorphic red cells — which is an
   unrelated word and not a hit.) The **key is sourced**: `endo-1` defines type 2 diabetes as
   *"insulin resistance + relative insulin deficiency"* and lists obesity-related diabetes,
   steroids and antipsychotics under mechanisms of insulin resistance; `gp-11` names insulin
   resistance among the side effects of recombinant growth hormone. So **insulin resistance is
   taught and only the skin sign is tagged** — that acanthosis nigricans is the cutaneous marker of
   it, velvety hyperpigmentation in the axillae and neck folds.
2. **n50 — how kidney function is measured.** *"creatinine clearance"*, *"eGFR"* and *"Schwartz"*
   each return **zero** corpus-wide, and no section teaches renal-function measurement as a topic or
   ranks the tests against each other. Creatinine itself has nine hits, always as a lab inside a
   workup — `ren-16` comes closest, requiring *"plasma creatinine and electrolytes to quantify the
   CKD"* and stating that **ultrasound gives anatomy, not function**. That is the sourced half. The
   tagged half is the ranking the stem asks for: why serum creatinine, and not urea, urinalysis or
   ultrasound, is the specific measure — and, since the entry should be honest, that creatinine is
   a *surrogate*, insensitive until a substantial fraction of function is lost.
3. **n67 — long-chain fatty acids in chronic liver disease.** *"long-chain"* returns **zero**
   corpus-wide; *"medium-chain"* returns exactly one (`liv-9`). `liv-15` prints the nutritional
   complication of CLD as *"malnutrition · fat-soluble vitamin deficiency · pruritus"* — **fat-soluble
   vitamins, not fatty acids**. So the disease and its nutritional consequence are sourced, and the
   specific mechanism the key names is tagged: reduced bile salt delivery impairs micelle formation,
   so long-chain fatty acids and the fat-soluble vitamins are malabsorbed together, and medium-chain
   triglycerides — absorbed without micelles — are what the formula substitutes. ⚠️ **Distractor
   overlap:** *fat-soluble vitamin deficiency* is itself printed by `liv-15`, so if it appears in the
   option list the entry must say why the key names the fatty acids and not the vitamins.

## ⚠️ Four partials — the concept is sourced, the specific claim is not

Not gaps. Lead with the sourced part, tag only the sentence that leaves the material.

- **n73 — prophylactic antibiotics in the newborn with an antenatally diagnosed anomaly.**
  `ren-16` **does** print prophylactic antibiotics, naming trimethoprim and nitrofurantoin — but for
  *"high-grade VUR or obstructive uropathy with recurrent infections"*, which is a narrower and later
  indication than *the initial management of a newborn*. `ren-16` also gives the sourced first move —
  **renal ultrasound is first-line** — and `ren-15` makes **MCUG mandatory in males with bilateral
  hydronephrosis**, *but the ultrasound comes first*. Source the pathway from those two; tag only the
  claim that prophylaxis starts before the imaging has stratified the child.
- **n63 — serum ferritin as the next step after a microcytic CBC.** `haem-10` gives the microcytic
  column (iron deficiency, thalassaemia, lead poisoning, chronic disease) and warns that **chronic
  disease sits in two columns, which is why MCV alone never settles it**. `haem-18` gives the iron
  studies — *↓ ferritin, ↓ serum iron, ↑ TIBC, ↓ T-SAT %*. Both sourced. What is **not** printed is
  ferritin as the *ranked next test*; `haem-18` in fact calls the **therapeutic trial "the BEST
  diagnostic study"**. ⚠️ That is a genuine tension with the bank's key — say what `haem-18` prints,
  keep the key as printed, and tag the ranking.
- **n27 — subcutaneous insulin in a well child with glucose 370 mg/dL.** `endo-3` supplies the
  diagnosis outright (*random glucose ≥ 200 mg/dL + symptoms*, and polyuria/polydipsia are two of its
  classic triad) and `endo-4` makes insulin *"essential and mandatory"* with basal–bolus as the gold
  standard. What is not printed is the branch point the stem turns on — **well and alert, so not
  DKA, so subcutaneous rather than an intravenous infusion**. `endo-20` gives the changeover rule in
  the opposite direction (*start subcutaneous insulin at least 30 minutes before stopping the
  intravenous insulin*) and is worth citing for the contrast, not as the answer. Tag the branch.
- **n79 — the definition of a seizure.** `neuro-6` defines an epileptic seizure as *"abnormal
  excessive neuronal electrical activity in the brain, producing sudden onset and offset, transient
  recurrent neurological symptoms and/or signs"* and gives **the localising principle** — the site of
  the abnormal firing determines the symptoms produced. The key's wording (*a paroxysmal abnormality
  of motor, sensory or autonomic function due to transient brain dysfunction*) is the same substance
  in different words, and the localising principle is what licenses the *motor, sensory or autonomic*
  triad. Only the word *autonomic* is unattested in that sentence — `neuro-6`'s older-ILAE list does
  print *"autonomic"* among the simple-partial signs, so cite that rather than tagging. `neuro-5`
  supplies what a seizure is **not** — convulsive syncope, breath-holding, long-QT — which is where
  this entry's distractors are answered.

## ⚠️ Three anchors that carry their own gap tags — do not double-source them

The theory file marks its own outside knowledge, and three anchors this section leans on are marked:

- **`endo-33` (n17, congenital adrenal hyperplasia)** opens with *"The gap: CAH is named as a cause
  in three paediatric decks and taught in none."* Everything `endo-33` says about CAH is therefore
  already outside the material. Cite it as the project's own write-up, not as the course teaching,
  and keep the tag on the salt-losing crisis, the ambiguous genitalia and the 21-hydroxylase block.
  It is the **only** section in the corpus that prints *salt-losing*, *21-hydroxylase* or *ambiguous
  genitalia* — there is no second source to fall back on.
- **`ren-12` (n29, haemolytic uraemic syndrome)** opens with **"⚠️ NOT DESCRIBED IN ANY PAEDIATRIC
  DECK"** and states outright that everything below it is supplied and tagged. Cite `ren-12` as the
  anchor — it is where the course material stops and the project's own write-up starts — and carry
  the tag onto the HUS triad itself (microangiopathic haemolytic anaemia, thrombocytopenia, acute
  kidney injury), not merely onto a detail of it. `ren-8` and `ren-6` name HUS in the cause trees and
  are the sourced half.
- **`endo-8` (n34, hypoglycaemia in the child on insulin)** opens with *"The gap: the handout names
  hypoglycaemia as one of the two acute complications of T1DM and teaches nothing about it. What
  follows is supplied (not in course material)."* It is nonetheless the **exact** anchor n34 needs,
  and it prints the discrimination the question turns on:
  **conscious → 15 g of rapid-acting carbohydrate, recheck in 15 minutes** ·
  **unconscious or fitting → IM glucagon, or IV dextrose if a line is in** ·
  **"Never give oral glucose to an unconscious child."** Carry the tag; the whole account is the
  project's own.

## ⚠️ Six pairs that must be NAMED, never folded

Each was re-examined by dumping both option lists in full, under the rule that **a shared option menu
pairs questions, never folds them — name the discriminating token or you matched a template.** All
six held as pairs. The discriminating token is given for each; **the drafted entry must earn its
place by turning on that token**, and must name its sibling **by id in backticks**.

⚠️ **The sixth was found at drafting, not here** — this list said five until the half-A pass raised
`pedep2-mf1-48` against n35 off the chapter-rulings file, and the menus were then dumped and matched
byte for byte. **The chapter rulings had it and these notes did not**, which is worth stating plainly:
this file reproduces that table but is not a substitute for reading it.

- **n34 and `pedep2-end-11`** — same key *text* (*Oral glucose drink*), but the key moved from index
  3 to index 0, and `pedep2-end-11` prints **two** saline options where n34 replaces the second with
  **"Intramuscular (IM) glucagon"**. That is the token. n34's child is **conscious** (running in the
  garden, aggressive, pale), so the answer is oral glucose *and* IM glucagon is the wrong route for
  this child — which is precisely what `endo-8` separates. Explain both, not just the key.
- **n17 and `pedep2-end-6`** — the same five options in the same order with the same key. The token
  is the vignette: n17 is a **7-day-old with abnormal genitalia, Na 124, glucose 40 mg/dL**;
  `pedep2-end-6` is a **2-week-old with a negative infection screen, Na 112, glucose 1.7 mmol/L**.
  A third family member is `pedep2-mf2-34`, and House prints `pedhd-endo-6` and `pedhd-endo-9`
  through `pedhd-endo-12`. **House does not fold** — see below.
- **n75 and the two live AED entries** — `pedep2-neu-28` keys *All AEDs have side effects* and
  `pedep2-neu-32` keys *Not all cases need treatment*; both print four options. n75 prints **five**
  and a third key, *Monotherapy to prevent seizures is the goal*. `neuro-13`'s six principles hold
  all three keys at once (*monotherapy before polytherapy* · *all AEDs have potential unwanted
  effects* · *AED levels are not measured routinely*), which is what makes them three questions and
  not one.
- **n55 and `pedep2-hem-65`** — a wholly different option menu, key at index 1 against index 2.
- **n1 and `pedep2-hem-38`** — same key text and same key index, but n1 prints **five** options where
  `pedep2-hem-38` prints four. The option count is the token.
- **n35 and `pedep2-mf1-48`** — the same five options in the same order, **and the key moves**:
  index 2 (*Tonic-clonic seizure*) against index 1 (*Absence seizure*). A moved key inside an
  identical menu is the clearest possible pairing and the furthest thing from a fold. The token is
  the seizure description in the stem, and `neuro-8`'s five generalized types hold both keys at once.

## Cross-file overlap — recorded, folded by nobody

House matches raised during adjudication do **not** fold. Do not add `alsoIn`, do not cite House, do
not open `questions.peds.js`. They go to the end-of-stream cross-bank sweep. n17's five House
neighbours (`pedhd-endo-6`, `pedhd-endo-9` … `pedhd-endo-12`) are the largest cluster and are
recorded here only so the sweep finds them.

## ⚠️ A page number in this section may mean the other book

**Both books print a section called "Model Final Exam 3."** `questions.peds.ep.js` already contains
the string `reprinted in Model Final Exam 3, p.1` **nineteen times**, because part 1 has a Model
Final Exam 3 of its own **whose page numbers overlap section 14's**. `pedep-gp-40` cites
`part1.pdf p.109 (reprinted in Model Final Exam 3, p.1595, …)` — and p.1595 is also section 14's
banner page in part2.pdf.

Consequence for drafting: **never search either live file for a bare page number or a bare exam name
to check whether something is already cited.** On a part-2 entry the base citation names part2.pdf,
so the bare clause form is correct there; on a part-1 entry the clause must name the file. This is
what shaped the reprint pass's two proof-of-run marks, and it is written up in
`endpoint-p2-s14-reprint-map.md`.

## Other things measured before drafting

- pp.1595–1596 open the exam; the first question is on p.1597 (n1, drafted). p.1757 opens section 15.
  There is no eighty-first question.
- **`pr === n` on all eighty.** Section 14 has no printed-number defect of the kind section 13 carried
  at n54/n55.
- Every staged `key` is a valid 0-based index into its own `opts`; zero out of range across all 80.
- **Cosmetic faults in the printed text are transcribed silently and are all on reprint rows**, so no
  drafting half meets one: n5 prints `"the knees.What"`, n7 `"dipstick.What"` and n9 `"herself.What"`
  with no space; n42 prints `NaHCO3` with a subscript; n46's option A prints `"GPO"`; n59 prints its
  options lower-case a–e with the box beside options C and D; n69 prints a platelet count as
  `30,000/dL`; n71's box prints no closing period. Recorded so that nobody re-derives them.
- Measured absences among the drafted twenty-seven, so no half goes looking: **no nutrition
  question** · **no vaccination, allergy, accident or mental-health question** · **no genetics,
  malignancy, respiratory or gastro question** · **no neonatal question** · **no OSCE content**. Two
  chapters that carry a single entry each — `liver-hep` (n67) and `infection-bact` (n74) — are the
  only representatives of their subject in this section. If a staged entry argues otherwise, that
  disagreement is the finding — report it rather than filing quietly.
- The staging-part gate is **`check-part-ep.js`**. **`check-part-ep2.js` does not exist** — do not
  invoke it.
