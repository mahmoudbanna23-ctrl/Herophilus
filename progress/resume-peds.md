# Resume — PEDIATRICS transcription chat

**Started 2026-08-12.** Method lives in `progress\briefs\START-HERE.md`; module specifics in
`progress\briefs\pediatrics.md`. This file is the running state — read it first when picking the
work up cold.

**⚠️ This chat owns ONLY:** `app\data\questions.peds.js`, `app\data\cases.peds.js`,
`content\peds\**`, `progress\resume-peds.md`, and `app\assets\q\q-pd-*.jpg`. Nothing else.

---

## Resume here

**⚠️ THIS CHAT IS NOW A HUB, NOT A TRANSCRIBER — adopted 2026-08-12 per `START-HERE.md` §11.**
Background Opus subagents draft one chapter each into `content\peds\qb-pages\*.array.js` +
`*.draft.js`. **This chat is the SOLE WRITER** of `questions.peds.js`, `cases.peds.js`,
`theory.peds.js`, this file, and every git commit. Subagents touch none of those, ever.

**▶ NEXT ACTION: wait for the two manifests below, then merge ONE batch at a time** —
sweep → fold → splice → validate → marker delta → reconcile → spot-check → commit → update this
board. **Slot A first, then B**, so B's sweep runs against a corpus that already contains A.

### Subagent board

| Slot | Bank | Topic | State | Last manifest counts |
|---|---|---|---|---|
| **A** | House | ch.3 "Cardiac disorders", book pp.24–31 (PDF 13–16, +1 = 17), ids `pedhd-card-` | **launched** 2026-08-12 | — |
| **B** | Endpoint | `part1.pdf` — establish identity/offset/structure on pp.1–10, **then** stage section 1 only, ids `pedep-` | **launched** 2026-08-12 | — |

**Cap 2 live subagents.** Scale to 3 only after a full day with no rate-limit stalls; drop to 1 after
any stall or collision. All four module chats share one usage pool.

**Slot A was told** the five chapter-3 figures already cropped on disk — `q-pd-hd-25.jpg`,
`-26a`, `-26b`, `-26c`, `-27` — are there to be **matched and reused, not re-cut**, and to report any
that is wrong or unmatched. They are untracked and unreferenced until A's batch is spliced.

**Slot B was warned about the ENT-endpoint traps specifically**: every question printed **twice** at
an unpredictable rate, questions **recycled across sections**, printed numbering that lies, and a
contents page that has never counted correctly. It was also told **not to assume a simple page
offset** — House turned out to be a 2-up spread scan — and that stopping after phase 1 with the
structure settled is a success, not a failure.

### Baseline before any merge — measured 2026-08-12, `START-HERE.md` §7 validator

| | |
|---|---|
| `QUESTIONS` total (all four modules) | **1,848** |
| Bad entries / dead backticked ids | **0 / 0** |
| Pediatrics entries | **57** (infection 31, renal 26) |
| Carrying the authored marker | **57 of 57** — consistent with **zero boxes printed** in ch.1 and ch.2 |
| Markers misplaced into `source` | **0** |

**Use these numbers for the marker-delta check on the next splice.** Predict the delta *before*
splicing: `drafted − boxed`. In ENT that check caught five faults, in both directions.

### The merge tool — `content\peds\tools\sweep.js`

One runnable file holding **both** `START-HERE.md` §6 (the six-stage sweep) and §7 (the validator),
so no two batches are ever swept slightly differently — a fault that cost ENT real work three times.

```bash
node content/peds/tools/sweep.js                    # validate the live corpus
node content/peds/tools/sweep.js <path/to.draft.js> # sweep a subagent draft against it
```

It reads a draft in exactly the shape a subagent returns (entry objects, comma-separated, no
wrapper), runs the batch **against itself first** — a bank reprints itself, and that fold takes **no
`alsoIn`** — then against the whole live corpus, printing stage flags plus the E and F rankings.

**⚠️ Verified with a positive control before first use**, per the project's own *check the auditor
before believing the audit* rule: two entries already in the corpus were fed back in and both
returned `ABCD E1.00 F1.00` against their true twins. The same run independently re-surfaced the
chapter-2 **shared-option-menu family** (`pedhd-renal-10`…`-14`) at **F 0.64 with E as low as 0.33** —
the documented blind spot, reproduced. **That is the tool working, not a fold.**

---

## The bank

| | |
|---|---|
| File | `Semester 8\Pedo\Questions\pediatric .pdf` — **⚠️ note the space before `.pdf`**, quote the path |
| Identity | **House** — cover reads *"Dr. HOUSE in pediatric medicine & surgery MCQs"*, verified on PDF p.1 |
| `bank` value | `house` |
| Id prefix | **`pedhd-<chapter token>-<n>`**, e.g. `pedhd-inf-14` |
| PDF pages | 104 |
| Page size | **A4 LANDSCAPE (841.86 × 595.26 pt)** — this is a **2-up scan of a book spread** |
| Render | `-r 130` is clean and needs no tiling |

### ⚠️ The page offset — a spread, not a single page

**Each PDF sheet holds TWO book pages side by side.** Left half = book page `2P − 2`, right half =
book page `2P − 1`, where `P` is the PDF page.

> **book page B → PDF page `floor(B/2) + 1`**

Verified: PDF p.2 shows book pp. 2 and 3; PDF p.8 shows book pp. 14 and 15.

### Structure — confirmed by reading PDF pp. 1–8

- **The ANSWER IS PRINTED WITH THE QUESTION**, as a bare `Answer: D.` line inside the same box.
  **There are no separate answer pages.** This is the opposite of ENT's Grade Gain and removes the
  whole class of "answers overrun the mapped page" defects.
- **No explanation boxes anywhere in chapter 1.** Every explanation is therefore **authored**, and
  every entry carries the marker `Written for this bank — pediatric .pdf prints no explanation here.`
  Re-check per chapter; box presence is a property of the page.
- **~3–4 questions per book page**, so ~7 per PDF sheet. Each is a rounded box; boxes are separated
  by a thick blue rule.
- **A question freely straddles the spread** — stem on one half, options or answer on the next.
- **Question numbering RESTARTS AT 1 in every chapter.** Ids must carry a chapter token or chapter 2
  collides with chapter 1.
- **Figures are printed WITH the question**, in the right-hand third of the box → croppable.
- `Select one answer only.` is boilerplate on some questions and absent on others. **Stripped** from
  every stem — it carries no information and is not consistent.

### Page map — from the contents page (book pp. 2), page ranges reliable, counts not printed

| # | Topic | Book p. | PDF p. | My chapter id | State |
|---|---|---|---|---|---|
| 1 | Infection & immunity | 3 | 2 | `infection` | **✅ DONE — 31 questions** |
| 2 | Kidney & urinary tract disorders | 15 | 8 | `renal` | **✅ DONE — 26 questions** |
| 3 | Cardiac disorders | 24 | 13 | `cardiac` | ▶ next |
| 4 | Haematological disorders | 32 | 17 | `haematology` | |
| 5 | Genetics | 42 | 22 | `genetics` | |
| 6 | Perinatal medicine | 49 | 25 | `perinatal` | |
| 7 | Neonatal medicine | 54 | 28 | `neonatal` | |
| 8 | Normal development | 62 | 32 | `normal-dev` | |
| 9 | Developmental problems | 68 | 35 | `dev-problems` | |
| 10 | Nutrition | 75 | 38 | `nutrition` | |
| 11 | Gastroenterology | 81 | 41 | `gastroenterology` | |
| 12 | Neurological disorders | 90 | 46 | `neurological` | |
| 13 | Respiratory disorders | 101 | 51 | `respiratory` | |
| 14 | Diabetes & endocrinology | 111 | 56 | `endocrine` | |
| 15 | Allergy | 118 | 60 | `allergy` | |
| 16 | Growth & puberty | 121 | 61 | `growth-puberty` | |
| 17 | Pediatric emergencies | 126 | 64 | `emergencies` | |
| 18 | Accidents & poisoning | 135 | 68 | `accidents` | |
| 19 | Liver disorders | 137–140 | 69–70 | `liver` | |
| 20 | Malignant disease | **141–148 ✅ corrected** | 71–75 | `malignant` | ~22 printed |
| II | Pediatric **surgery** end-of-round MCQs | 149 | 75 (right half) | — | **❌ OUT OF SCOPE** — user's ruling |
| III | Pediatric **surgery** OSCE spots | 181 | 91 | — | **⏸ DEFERRED** — its own section, last |

### ✅ The contents page's one page error is now resolved — verified 2026-08-12

The contents page prints **Malignant disease as p.125**, which cannot be right: 125 sits inside
Pediatric emergencies (126–134) and it is listed *after* Accidents (135) and Liver (137).

**It is book p.141, not 125 — the contents page is wrong by 16.** Verified by rendering rather than
inferred: PDF p.71's right half carries the full-width **"Malignant disease"** banner over book
p.141 with the numbering restarting at 1, and PDF p.73 (book pp.144|145) is unambiguously that
chapter — neuroblastoma, Wilms, ALL, Hodgkin, brain tumour, retinoblastoma. **Liver disorders
therefore runs pp.137–140 only, four pages.**

**This is the project's standing rule confirming itself once more: trust a contents page for *where*,
never for *how many* — and check even the where.**

### ⚠️ The stop line, verified

**The medicine part is book pp.3–148 = PDF pp.2 through the LEFT half of PDF p.75.** The right half
of PDF p.75 opens **"Pediatric surgery end-of-round MCQs"**, which the user ruled out of scope.
Malignant disease's last question is **Q22 on book p.148**, immediately before that break.

Worth knowing if Part II is ever revisited: **its opening pages are not MCQs at all** but a numbered
fact list (*"Incidence of esophageal atresia… Most common type… VACTERL…"*), a different format
again from Part III's OSCE spots.

**⚠️ Malignant disease prints at least one diagram figure** — a labelled *"Looking left / Looking
right"* eye-movement diagram on book p.144, in a yellow box beside its question. It is a **diagram,
not a photograph**: transcribe it as markdown in the stem if the labels reproduce faithfully, and
crop only if they do not.

**⚠️ Parts II and III are pediatric SURGERY**, which no `MODULES` chapter cleanly holds, and Part III
is OSCE spots rather than MCQs. **Both are a scope decision for the user** — raise them when the
medicine part (book pp. 3–148) is finished, together with the endpoint-file decision the module
brief already requires.

---

## ⚠️ Scope — the user's rulings of 2026-08-12

The user's standing instruction, verbatim: *"I don't want in your brief to Ignore any questions or
any important thing in the theoritical notes I did the seperate chats to speed up not to have
unfinished work."* **Parallel chats are for speed, not for reduced scope. Nothing is dropped for
being awkward, long, or out of the way.**

The order of work, decided by them:

1. **House medicine, book pp. 3–148** (chapters 1–20) — every question, in full. ◀ in progress
2. **Endpoint**, `Pediatrics endpoint part1.pdf` + `part2.pdf`, 3,984 pages. **In scope.** The module
   brief asks that the user be told what House yielded and how endpoint is structured before it
   starts — **do that as a report, not as a gate.** They have already said they do not want work left
   unfinished.
3. **Theory notes — IN SCOPE**, against `START-HERE.md` §9. The user chose **questions first, then
   theory**: finish every question in the module, then write all 21 chapters into
   `app\data\theory.peds.js`. The standard is `CLAUDE.md` §4 — *a new study source, sufficient to sit
   the exam from on its own*, not a summary. **Length is never the goal; dropping something important
   is the one unacceptable failure.**
4. **Part III, the surgery OSCE spots** (book pp. 181–206) — **deferred to its own section, written
   last, after everything else.**

**❌ Part II, the pediatric surgery MCQs (book pp. 149–180), is OUT OF SCOPE** — the user's explicit
decision: *"Ignore the entire surgery part and add a specific section for the osce part later after
you finish everything else."* Do not transcribe it, and do not quietly reinstate it.

---

## Counts

| | Printed | Written | Folded |
|---|---|---|---|
| Ch.1 Infection & immunity | 31 | 31 | 0 |
| Ch.2 Kidney & urinary tract | 26 | 26 | 0 |
| **Total** | **57** | **57** | **0** |

Written + folded = printed. ✅ Verified in Node: `Q_PEDS` = 57, `{infection:31, renal:26}`.

**Duplicate sweep — 0 folds so far, and the zero is explained.** There is no second Pediatrics bank
transcribed, so **no cross-bank sweep is possible yet**; this is a within-bank sweep only.

Chapter 2 contains two option-list families that look like reprints and are not:

- **Q10–Q14** share the list *Balanitis / Glomerulonephritis / Nephrotic syndrome (or Renal stone) /
  Perineal contamination / UTI*. Five different vignettes, **four different keys** — decided by how
  the sample was collected and what grew. **A shared option list is not a fold when the keys differ.**
- **Q15–Q18** share *DMSA / urinary electrolytes / urine microscopy / ultrasound / plasma creatinine*.
  Four vignettes, three different keys.

**⚠️ These two families are exactly the blind spot `START-HERE.md` §6 warns about** — a short generic
option menu scores 1.00 at the option-token stage against questions it has nothing to do with. Both
were resolved by **reading the stems**, not by a score. Expect the same in later chapters; the bank
clearly likes this format.

---

## Filing decisions — keep chapter 2 consistent with chapter 1

The bank's own chapter headings map almost one-to-one onto `MODULES`, so **file by the bank's
chapter, not by the question's topic**, except where the brief's overlap rules say otherwise.

Decisions taken in chapter 1, all filed `infection` even though another chapter could argue for them:

- **Meningitis questions (Q3, Q4, Q20, Q25, Q28)** → `infection`, not `neurological`. The brief's
  rule sends meningitis to `neurological`, **but the bank prints them under Infection & immunity and
  every one tests the organism or the CSF pattern rather than the neurology.** Secondary chapter
  noted in each explanation.
- **Pneumonia / bronchiolitis / croup management (Q13, Q14, Q16, Q17)** → `infection` for the same
  reason; secondary `respiratory` noted.
- **Kawasaki (Q19, Q24)** → `infection`; secondary `cardiac` noted.
- **Gastroenteritis rehydration (Q15)** → `infection`; secondary `gastroenterology` noted.
- **Vaccination questions (Q7, Q27, Q30)** → `infection`. This is squarely the brief's own rule.

---

## Defects recorded — keyed as the bank prints, noted in the explanation

Per `START-HERE.md` §4(b), the user's ruling of 2026-08-11: **the key is always the bank's, the
discrepancy is a note.** Never taken to the user.

| Question | Defect |
|---|---|
| `pedhd-inf-11` | **The same answer offered twice.** Option A *"Chickenpox (varicella zoster virus)"* and option E *"Chickenpox virus (varicella zoster virus)"* are one answer under two labels. Key is A. |
| `pedhd-inf-2` | **Back-reference** — printed as *"in Joseph's case"*, pointing at Q1. The deck is shuffled, so Joseph's vignette is restated into the stem. |
| `pedhd-inf-13`, `-14`, `-16` | Printed *"the the most appropriate NEXT step"*. Typo repaired silently. |
| `pedhd-inf-26` | **An option worded ambiguously enough to change the answer.** Asks which pathogen is *not* associated with vesicular lesions; keys *"Human herpesvirus"* (E). `infectious diseases causing vesicular rash.txt` opens with a three-item list — *"Varicella/zoster disease, **Human herpes infection**, Coxsackie infections"* — which reads as though E belongs on the vesicular list and **C, Staphylococcus aureus, is the odd one out**. The key is nonetheless defensible: HSV is already offered separately as D, so an unnumbered *"Human herpesvirus"* can only mean **HHV-6/7**, whose rash (roseola) is maculopapular — and Staph aureus does blister, as bullous impetigo. **Keyed E as printed; both readings spelled out in the explanation.** |

**Chapter 2:**

| Question | Defect |
|---|---|
| `pedhd-renal-22` | **A unit error that makes the value impossible.** Prints *"creatinine 200 **mmol/L**"*; creatinine is measured in **µmol/L**. The bank's own Q8 prints the same figure correctly as *"200 µmol/L (normal 20–80)"*. **Corrected in the stem** — unlike a disputed *key*, an impossible *unit* makes the question unanswerable rather than merely arguable — and the discrepancy is noted in the explanation. |
| `pedhd-renal-4` | **Explicit back-reference** — printed as *"In Johnathan's particular case (the previous question)"*. Vignette restated. The bank also spells the boy **Jonathan** in Q3 and **Johnathan** in Q4. |
| `pedhd-renal-7` | **Back-reference** — *"Freddie's condition"*, with the vignette only in Q6. Restated. |
| `pedhd-renal-24` | Option B prints *"**>105** white blood cells/mL"* — a lost superscript for 10⁵. It is a **false** option anyway (the 10⁵ threshold is a colony count of organisms, not white cells), so the typo does not change the key. Set as **10⁵** in the entry. |
| `pedhd-renal-9` | Prints *"drink waterfrom a bottle"* — missing space. Repaired silently. |

**No mis-keyed answers of the classic kind found in either chapter** beyond ch.1 `-26`. Keep looking
— every bank mis-keys itself somewhere, and 57 questions in, this one has not yet.

---

## Lecture grounding used so far

`content\peds\lectures\` holds **64 files** — always `ls` before citing a filename. Chapter 1 was
grounded on:

- `infectious diseases causing maculopapular rash.txt` — measles, rubella, scarlet fever, roseola,
  fifth disease, EBV. Carries the amoxicillin-rash-in-EBV fact verbatim.
- `infectious diseases causing vesicular rash.txt` — chickenpox, zoster, HSV, HFMD, herpangina.
- `18) febrile child and life threatening infections.txt` — **the meningitis organism-by-age table**,
  LP contraindications, meningococcaemia, prophylaxis.
- `25)Immunodeficiency_.txt` — vaccine classes, live-vaccine list, immunodeficiency patterns.
- `typhoid and tuberculosis.txt` — paediatric TB presentation, CXR, Mantoux/IGRA, BCG.
- `36)Myocardial diseases.txt` — **Kawasaki: IVIG is the gold standard, coronary arteritis.**
- `30) Pneumonia.txt` — WHO tachypnoea thresholds, organism by age, empiric antibiotics, admission.
- `32)Acute bronchiloitis_.txt` — RSV, admission and PICU criteria.
- `23).1) Acute diarrhea.txt` — **the dehydration plans A/B/C and the 20 ml/kg shock bolus.**

Chapter 2 was grounded on:

- `38)UTI.txt` — **the richest single file used so far.** Carries the cystitis-vs-pyelonephritis
  split, the **urine collection reliability table** (bag = *"Unacceptable"*), the **>10⁵ CFU/ml**
  threshold, contamination as *"a growth of mixed organisms"*, the **<3 months → IV antibiotics**
  rule, the simple/atypical/recurrent classification, and the imaging timings (US at 6 weeks or
  48–72 h if atypical; MCUG at 2–3 weeks; **DMSA only after 2 months**, or false scars are read).
- `41)Proteinuria -1.txt` — nephrotic syndrome, and the six features of **minimal change disease**
  (1–10 yr, boys, no macroscopic haematuria, normal BP, normal complement, normal renal function),
  its **85–90%** share, and the four complications.
- `39)Hematuria.txt` — glomerular vs extra-glomerular localisation, **RBC casts pathognomonic**,
  APSGN in full (latent period **1–2 weeks throat / 3–6 weeks skin**, *"C3 depression is the most
  common positive lab finding"*, 90%), and **HSP/IgA vasculitis** with its renal outcome figures.
- `40)Congenital anomalies of the kidneys and the urinary tracts 5 th year.txt` — CAKUT, **PUV
  "occurs in males only"**, renal agenesis → **Potter sequence**, and the investigation table.

**⚠️ Gaps found — filled from general knowledge and tagged in the explanation**, per the user's
2026-08-04 instruction:

- **Croup / laryngotracheobronchitis (Q17).** No lecture covers it. `34)Students Obstructive
  diseases.txt` is **cardiac** outflow obstruction despite the name, and the only cache hits for
  "croup" and "stridor" are in the **rickets** deck (hypocalcaemic laryngospasm) and the anaphylaxis
  deck. Parainfluenza as the cause of croup is tagged as outside the material.
- **Pertussis (Q2)** — named only in a vaccine list; the pernasal swab is tagged.
- **The Egyptian vaccination schedule** — `25)Immunodeficiency_.txt` has three slides titled
  *"Egyptian compulsory vaccination schedule"* whose **tables did not extract**, so the schedule
  itself is not in the cache. Not needed by chapter 1, but it will be. **If a later chapter turns on
  the schedule, render those slides visually rather than guessing.**
- **Chapter 2 gaps** — the **urease/struvite mechanism** behind Proteus stones, the **Shiga-toxin**
  basis of HUS and its O157:H7 association, the differential for **secondary enuresis**, the
  **electron-microscopic** appearance of minimal change disease, and the **Gram morphology table**
  (chains vs clusters vs bacilli). All answered in full and tagged; none is a dead end.
- **⚠️ Two lecture files are misleadingly named — do not go by the title.**
  `34)Students Obstructive diseases.txt` is **cardiac** outflow obstruction (aortic stenosis,
  pulmonary stenosis, coarctation), *not* airway obstruction. And `Vitamin deficiency Rickets.txt`
  is the only file in the cache mentioning *croup* and *whooping*, because it discusses
  **hypocalcaemic laryngospasm** — it is not a respiratory lecture.

---

## Environment notes that cost time

- Poppler is off PATH:
  `/c/Users/Alfa388/AppData/Local/Microsoft/WinGet/Packages/oschwartz10612.Poppler_Microsoft.Winget.Source_8wekyb3d8bbwe/poppler-25.07.0/Library/bin/`
- `.ps1` files are blocked by execution policy — pass PowerShell inline.
- Node **is** installed (v26.7.0); the validator in `START-HERE.md` §7 runs.
