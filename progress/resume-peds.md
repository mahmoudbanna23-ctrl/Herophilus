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

**▶ NEXT ACTION: relaunch both slots.**
**Slot B — DRAFTING ONLY, no rendering**: point it at the completed 89-record staging file
`content\peds\qb-pages\endpoint-s01-growth-puberty.array.js` and have it write finished entries to
`endpoint-s01-growth-puberty.draft.js`. **85 of 89 already carry a printed explanation box** — those
are transcribed verbatim and take **no marker**; only n45, n55, n83 and n87 are authored.
**Slot A — House ch.4 "Haematological disorders"**, book pp.32–41 = PDF pp.17–21 (render through 22),
ids `pedhd-haem-`, chapter `haematology`. Lectures: `44)BM FAILURE.txt`,
`47)Hemorrhagic disorders .txt`, `48)Leukemias.txt`, `Iron deficiency anemia pdf.txt`.

Then merge **one batch at a time** — sweep → fold → splice → validate → marker delta → reconcile →
spot-check → commit → update this board. **⚠️ From now on the sweep matters for real**: House and
Endpoint are two banks over one syllabus, so **cross-bank matches take `alsoIn`, never a second
entry.**

### Subagent board

| Slot | Bank | Topic | State | Last manifest counts |
|---|---|---|---|---|
| **A** | House | ch.3 "Cardiac disorders", book pp.24–31 | **✅ MERGED** 2026-08-12 | 24 printed / 24 drafted / 0 boxed / 0 folded |
| **B** | Endpoint | `part1.pdf` §1 "Growth & Puberty", PDF pp.5–210 | **⚠️ FAILED mid-run — staging COMPLETE, drafting NOT DONE** | 89 staged / 0 drafted / 85 boxed |

**▶ SLOT B MUST BE RELAUNCHED TO DRAFT ONLY.** It died on a **session/usage limit**, not an error in
the work. Its phase-1 findings and its full 89-record verbatim staging survived and are **verified
sound by the hub** (see *The Endpoint bank* below) — `content\peds\qb-pages\endpoint-s01-growth-puberty.array.js`.
**The relaunch does NOT need to re-render or re-read a single page**: point it at that array and have
it write finished entries to `endpoint-s01-growth-puberty.draft.js`. That is most of a day's rendering
already paid for.

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

---

## The Endpoint bank — structure settled 2026-08-12, and it is NOTHING like House

`Semester 8\Pedo\Questions\Pediatrics endpoint part1.pdf`, 1,991 pages. Id prefix `pedep-`,
`bank:'endpoint'`. **Established by reading, and independently re-checked by the hub.**

| | |
|---|---|
| **Page offset** | **ZERO — PDF page = printed page.** Not a 2-up spread like House. Verified on pp.2, 3, 4, 5, 20, 30, 210 |
| §1 "Growth & Puberty" | PDF pp.5–210 · summary slides pp.5–27 · `Questions` divider p.28 · **questions pp.29–209** · closing slide p.210 |
| §2 "Nutrition" | begins p.211 — which **confirms the contents page's ranges** |
| Questions in §1 | **89** |
| Printed explanation boxes | **85 of 89** |
| Figures | **none at all** — the file's own p.4 says the exam contains no picture questions |

**⚠️ EVERY QUESTION IS PRINTED TWICE** — an unanswered page, then an answered page carrying the same
stem and options with **the key highlighted in yellow** and usually a bordered explanation box. Only
the answered printing is staged. **This is the ENT-endpoint trap reproducing exactly**, and it is why
the module brief ordered the compact bank first.

**⚠️ AND THREE QUESTIONS TAKE A *THIRD* PAGE.** Where the explanation box does not fit, it is printed
**alone on the page after** the answered page — n39→p107, n59→p148, n60→p151. Those overflows **flip
the odd/even parity of the answered pages twice**, so *reading alternate pages loses three explanation
boxes outright*. This is the concrete proof of the standing rule: **read every page, never alternate.**

**⚠️ THE PRINTED QUESTION NUMBER IS NOT AN IDENTIFIER.** Printed numbers run 1–87, but **two numbers
are printed twice** — 69 appears on pp.169 *and* 171, 81 on pp.195 *and* 197 — so the section holds
**89** questions, not 87. Established two independent ways: counting yellow highlights (89) and
reconciling the printed sequence (87 + 2). The staging record therefore carries **both** a true
sequential `n` and the printed `pr`. **Ids must be built from `n`.**

**⚠️ HUB CORRECTION TO THE STAGING HEADER — the marker delta is +4, not +3.** The file's own header
says three questions lack a printed box (n45, n83, n87). Counting the records directly gives **four**:
**n45 (p.119), n55 (p139), n83 (p.197), n87 (p.205)** — it missed n55. So the split is **85 boxed /
4 authored**, and when this section is drafted and spliced the predicted marker delta is **+4**.
*A count stated in prose is not the count; the count is what the data says.*

**What this means for scheduling.** Endpoint prints its own explanations for 96% of questions, so
drafting it is far cheaper per question than House — where **all 81 entries so far are authored**. But
it costs ~2.3 PDF pages per question against House's ~0.3.

---

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

### ✅ The page map is MEASURED, not trusted — nine anchors verified 2026-08-12

After finding the contents page wrong by 16 on one chapter, four further boundaries were
spot-checked across the whole range by rendering the top banner band of each candidate sheet.
**All four are exact.** So the contents page is reliable for chapter *starts*, and the Malignant
disease entry is an isolated typo rather than a pattern — but it was only found by looking.

| PDF p. | Book pp. | What is actually printed there |
|---|---|---|
| 2 | 2 \| 3 | Contents; **Infection and immunity** banner |
| 8 | 14 \| 15 | ch.1 tail; **Kidney & urinary tract disorders** banner |
| 13 | 24 \| 25 | **Cardiac disorders** banner, numbering restarts at 1 |
| 25 | 48 \| 49 | ch.5 Genetics tail (its Q19); **Perinatal medicine** banner |
| 41 | 80 \| 81 | ch.10 Nutrition tail (its Q15); **Gastroenterology** banner |
| 56 | 110 \| 111 | ch.13 Respiratory tail (its Q27); **Diabetes & endocrinology** banner |
| 64 | 126 \| 127 | **Pediatric emergencies** banner on the LEFT half |
| 71 | 140 \| 141 | ch.19 Liver tail; **Malignant disease** banner ⚠️ *not p.125* |
| 75 | 148 \| 149 | ch.20 tail (its Q22); **Pediatric surgery** — the stop line |

**The spread formula is confirmed on both parities** — an odd book page on the right half (49, 81,
111, 141, 149) and an even one on the left (126, 148). Free minimum counts fell out of it:
**Genetics ≥ 19, Nutrition ≥ 15, Respiratory ≥ 27** questions.

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
| Ch.3 Cardiac disorders | 24 | 24 | 0 |
| **Total** | **81** | **81** | **0** |

Written + folded = printed. ✅ Verified in Node: `Q_PEDS` = 81,
`{infection:31, renal:26, cardiac:24}`. Marker delta on the ch.3 splice was **predicted +24 and
measured +24**; markers in `source`: **0**. Corpus-wide at that splice: 2,028 questions, 0 bad
entries, 0 dead backticked ids.

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

**~~No mis-keyed answers of the classic kind found in either chapter.~~ SUPERSEDED at chapter 3 —
the bank does mis-key itself, and it took 81 questions to surface.** `pedhd-card-5` keys *vagal
manoeuvre* where the lecture says adenosine is first line **and adenosine is on the menu**.

### Chapter 3 (cardiac) — verified against the staged record at merge

| Question | Defect |
|---|---|
| `pedhd-card-5` | **Key contradicts the lecture.** Bank keys *vagal stimulation manoeuvre*; `36)Myocardial diseases.pptx` says *"for hemodynamically stable patients, **IV adenosine is the first line**"* and never mentions vagal manoeuvres — and adenosine is **option A**. Keyed E as printed, both readings spelled out. |
| `pedhd-card-5` | **A false distractor inside a correctly keyed question** — option B offers ***bilateral*** carotid sinus massage, which is never performed. Not the key, so **no key comparison could ever see it**. |
| `pedhd-card-21` | **The same answer offered twice** — option B *"Streptococcus pyogenes"* and option D *"Group A haemolytic streptococcus"* are one organism, so the menu is really four wide. Key (C, *S. viridans*) unaffected. **Same shape as `pedhd-inf-11`** — the bank does this repeatedly. |
| `pedhd-card-24` | **Soft conflict with the lecture** — `35)Cyanotic CHDs.pdf` teaches TOF cyanosis as appearing *after* the neonatal period, but the patient is 3 days old. The key is still the only defensible option, since TGA is not on the menu. Noted. |
| `pedhd-card-23` | An S3 is a normal finding in many healthy children, so *"always pathological"* would be false — but the slide's innocent-murmur criterion is *"no added sounds"*, so the key holds. Noted. |
| `pedhd-card-11`, `-12`, `-21` | Typos repaired silently: `"His 1respiratory rate"`, `"broadspectrum"`, and `39.5C` with no degree symbol. |
| `pedhd-card-6`…`-10` | **Back-reference repair** — all five printed *"the opposite figure"*, meaningless once the app renders the figure inline. Changed to *"the figure"*. |

### ⚠️ Chapter 3's defining trap — five questions whose ENTIRE content is a picture

`pedhd-card-6` and `pedhd-card-8` print a **word-for-word identical stem AND an identical option
list**, and key **different answers** (PDA vs ASD). They hit **stage A at 1.00** — the strict stage —
and they are **NOT a fold and NOT a self-contradiction**: the discriminator is the phonocardiogram,
which differs. Verified at merge by reading both traces rather than trusting the manifest — Q6's
murmur runs continuously **through** A₂/P₂ into diastole (the machinery murmur of a duct); Q8's stops
before a **widely split** S2 (ASD).

All five figure questions (`-6`…`-10`) score **E = 1.00 against each other**, because their content
sits in an image no sweep stage can read. **This is the documented blind spot in its purest form: a
1.00 at stage A that must be rejected.** All five carry `imgEssential:true`, and all five `imgAlt`
captions name the modality only — *"Phonocardiogram trace of one cardiac cycle, with components of
the second heart sound labelled"* — so the caption cannot give the answer away. The crops were
verified distinct **by checksum**, not assumed.

**⚠️ Do not "tidy" these five by merging them or rewriting the shared stem.** The bank prints them
that way and the picture is the question.

### ⚠️ Process lesson — a drafting agent DELETED apostrophes to dodge the quote hazard

Slot A's draft arrived with **19 possessive apostrophes silently missing** — `the deck s`,
`the bank s`, `the mother s`, and worst the eponyms **`Gregg s triad`** and **`Ebstein s anomaly`**.
The agent had avoided the single-quote hazard of `START-HERE.md` §3.2 by *deleting* the apostrophe
rather than using a curly one, which turns a correctly spelled medical eponym into an error — exactly
what `CLAUDE.md` §5 forbids.

**Nothing else would have caught it**: the file parsed, validated, spliced and rendered fine.

**⚠️ Grep every incoming draft before splicing:**

```bash
grep -o "\(deck\|slide\|bank\|mother\|child\|patient\|lecture\|examiner\|Gregg\|Ebstein\|Duke\|Fallot\|Down\|Turner\) s [a-z]" <draft>
```

Repair script at `<scratchpad>\fixapos.js`; it inserts **U+2019**, which is correct typography *and*
immune to the hazard. **Tell every future subagent to use curly apostrophes rather than dropping
them.**

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

---

## 2026-08-31 — WPS OCR CHECKPOINT on House ch.1. Measured, not estimated.

**Verdict: the OCR route works and it replaces the page-READING stage. It does not replace looking,
and it does not replace drafting.** Run by Chat B; nothing was spliced, no source touched.

### Identity — both labels are real, and the project record is right

PDF p.1 is a photocopied spread. **Left half is a marketing poster** carrying *"Pediatrics treasure
2025 / For 5th year medstudents / The ultimate question bank for pediatrics curriculum of AFM"* over
a Dr. House photo, plus the panel *"Dr. HOUSE question banks"*. **Right half is the real title page**:
*"Dr. HOUSE in pediatric medicine & surgery MCQs"*, which is also what the running header on every
content page says (*"Pediatric medicine end-of-round MCQs - 2025."*). So *Pediatrics treasure* is the
**series/edition name on the poster**; the **book title is Dr. HOUSE**. `bank:'house'` stands.
The 2026-08-31 session that called this file "Pediatrics treasure" was reading the poster half.

### The pipeline, timed on this machine

| Step | Measured |
|---|---|
| Render full sheet, `-r 200` | 8 sheets in **9.37 s** = 1.17 s/sheet |
| Render half-sheet crop (`-x -y -W -H`) | 2 halves in **1.43 s** = 0.72 s/half |
| `wpscli photo2word`, full sheets | 8 in **61.4 s** wall, 8-way parallel (43-50 s each) |
| `wpscli photo2word`, half sheets | 2 in **12.0 s** wall |
| Text yield | 21,311 chars for 8 sheets = **~1,330 chars per BOOK page (~340 tokens)** |
| Exit codes | **all success, exit 0.** No 429. Paid tier live |

**Projection for the rest of House medicine** (book pp.3-148 = 146 book pages = 74 PDF sheets, half-page
route): render ~105 s, OCR ~15 min → **under 20 minutes of machine time for the whole remaining bank.**

### ⚠️ RENDER EACH HALF SEPARATELY — full-sheet OCR SCRAMBLES READING ORDER

Measured on PDF p.4: the full-sheet OCR emitted **Q10, Q11, then the tail of Q7, then Q8** — it read
the right book page before finishing the left. Cropping the sheet into two halves fixed it completely:
left half returned Q7-tail, Q8, Q9 in order; right half returned Q10, Q11, Q12 in order. Half-page
rendering also gives one book page per file, so `[[book p.N]]` stamping is free.

    pdftoppm -png -r 200 -f N -l N -x 0    -y 0 -W 1180 -H 1660 "<src>" <out>a
    pdftoppm -png -r 200 -f N -l N -x 1160 -y 0 -W 1200 -H 1660 "<src>" <out>b

(Page is 841.86 x 595.26 pt landscape; at 200 dpi that is 2338 x 1653 px, so the halves overlap ~20 px
by design — nothing is lost at the gutter.)

### Accuracy against the 31 shipped ch.1 entries

| Check | Result |
|---|---|
| Stems present and legible in OCR | **31 / 31** |
| Answer letters agreeing with the shipped entry | **31 / 31** |
| Option lists complete (155 options) | **31 / 31** |

30 stems matched by automatic prefix comparison; `pedhd-inf-2` did not, and **that is correct** — its
vignette was deliberately restated from Q1 because it printed as a back-reference. Its OCR answer
letter (C) still agrees. `pedhd-inf-28` needed hand-checking because its options are numeric tables.

### ⚠️ What the OCR got WRONG — one of them would have shipped a wrong clinical value

1. **⚠️⚠️ A SUPERSCRIPT 6 READ AS 9.** Q28 option A OCR'd as *"red cells 6x109/L"*. The page prints
   **10⁶**, verified at 900 dpi (the glyph loops at the bottom). Every exponent in all five options of
   Q28 is 6; there is no 10⁹ in the question. **A superscript is exactly the kind of thing this engine
   flattens, and it flattens it into a plausible different number rather than into garbage** — the one
   failure mode the WPS reference says does not happen. It happens on superscripts. The shipped entry
   was already right.
2. **Superscripts flattened generally** — `10⁶` came back as `106` in 7 of 11 instances in Q28 alone.
3. **Junk digit runs, and they GLUE to question numbers.** 93 runs of 6+ digits across 8 sheets,
   1,476 junk digits (~185 per sheet). Q1 arrived as `3187675499931.Joseph,aged 3 years`. Strip any
   digit run of 6 or more; the trailing 1-2 digits before a full stop are the real question number.
4. **Spaces dropped at line joins**: `dayand`, `babyimmunized`, `5years`, `tenderto`, `Alumbar`,
   `ACT scan`, `Oralantibiotic`, `turgoris`, `elf-assessment`, `coryzalsymptoms`, `InFluenza`.
5. **Letter-level typos**: `neutrophis`, `mmo/L`, `5x106` (lowercase x — though the book itself prints
   a lowercase x, so that one is fidelity, not error).
6. **The logo garbles differently every time**: `HOUSE` came back as `画OUSE`, `EOUSE`, `回OUS`,
   `DOUSE`, `团OUSE`, `田OUSE`, `DOUSe`. Harmless, but it means header-stripping cannot match a literal.
7. **The contents page reproduced the book's own error faithfully** — it printed Malignant disease as
   p.125, which the 2026-08-12 render already proved is p.141. **The engine did not invent a fix.**
   It also dropped a digit: `14. Diabetes & endocrinology  11` for 111.

### ⚠️ One fault in the SHIPPED work, found only because the OCR disagreed

**`pedhd-inf-21` option A is wrong.** The book prints **`A. Request a CXR`**; the shipped entry says
*"Request a chest X-ray"* — an abbreviation silently expanded, which `CLAUDE.md` section 5 forbids.
Verified on the page at 400 dpi. **Not yet repaired — one-line fix pending.**
This is a new instrument catching a fault no validator could see, in the same family as the
apostrophe-deletion lesson above: **a well-formed entry that does not say what the page says.**

Also confirmed on the page: the doubled `the the most appropriate NEXT step` runs through **Q13, Q14,
Q15 AND Q16** — the defect table above names only 13, 14 and 16. All four are in fact repaired in the
shipped entries; the record understated the defect, not the repair.

### Structure re-confirmed by reading, not inherited

Chapter 1 is **31 questions, numbered 1-31 with no gaps or repeats** — matching the 31 shipped.
Layout: p-002 right = banner + Q1 · p-003 = Q2-4 | Q5-7 · p-004 = Q7 tail, Q8, Q9 | Q10-12 ·
p-005 = Q13-15 | Q16-18 · p-006 = Q19-21 | Q22-24 · p-007 = Q25-28 stem | Q28 options, Q29-31 ·
**p-008 LEFT (book p.14) holds one box containing only `Answer: E.`** — Q31's tail, rest of the page
blank. **p-008 RIGHT (book p.15) opens the `Kidney & urinary tract disorders` banner, numbering
restarting at 1.** The spread formula `book B -> PDF floor(B/2)+1` holds.

**⚠️ That lone `Answer: E.` on an otherwise blank page is the render-one-past rule paying out again.**
A reader who stopped at p-007 would have lost Q31's key entirely.

### Is it measurably faster? Honestly: yes for reading, unmeasured for drafting.

The OCR replaces the **page-reading stage only**. Measured today: 8 sheets = 16 book pages cost
**71 s of machine time and ~5,500 tokens of searchable text**. For comparison, the subagent that
verified five specific details visually on those same pages spent **103,000 tokens over 19 tool calls**.
Per-page reading cost falls by roughly an order of magnitude, and the text is greppable, which no
image is.

**But the 110-121 questions/day pace comes from drafting, grounding and writing explanations, and none
of that changes.** No chapter has been drafted both ways, so **no end-to-end multiplier is claimed.**

**Standing rule confirmed the hard way: the OCR is a search index. Q28 proves a clinical value can come
back wrong AND plausible. Every number, unit, exponent and dose is read off the rendered page before it
ships.**


---

## 2026-08-31 — CORRECTION: the abbreviation fault is THREE options, not one

My checkpoint report named a single fault (`pedhd-inf-21` option A). A systematic grep of every
radiology string in shipped ch.1 against the OCR text widened it, and a 400 dpi visual confirmation
settled it. **Three shipped options had silently expanded the book's printed `CXR` into
"chest X-ray".** All three are now repaired.

| Entry | Option | Book prints | Was shipped as | Confirmed |
|---|---|---|---|---|
| `pedhd-inf-19` | E | `CXR` | `Chest X-ray` | 400 dpi, p-006 right half (book p.10) |
| `pedhd-inf-21` | A | `Request a CXR` | `Request a chest X-ray` | 400 dpi (checkpoint pass) |
| `pedhd-inf-22` | C | `A CXR` | `A chest X-ray` | 400 dpi, p-006 right half (book p.11) |

Not a fault: `pedhd-inf-6`'s stem. The book genuinely prints "chest X-ray" in long form there —
the only long-form radiology string on those pages. The transcriber was not expanding at random;
they were normalising *options* to a house style while leaving stems alone.

The three "why the others are wrong" table rows that label these options were relabelled `CXR` to
match, so the row still points visibly at its option. Keys unmoved and re-verified against the
printed answers: Q19 = D Echocardiogram, Q21 = D urine dipstick, Q22 = A full septic screen.
File re-parses: 81 entries, 0 holes, 0 out-of-range answers.

**The process lesson, which is the part worth keeping.** A one-off transcription slip and a
systematic transcriber habit look identical when you only inspect the instance you tripped over.
The instance was found by accident; the pattern was found only because the OCR text made it cheap
to ask "where else does this string appear, on both sides?". **Grep the corpus AND the source for
every occurrence of the token before calling a fault a one-off** — the count is the finding, not
the first hit.

### Other printed forms verified in Q19-Q31, for the drafter of later chapters

Abbreviations the book prints and must NOT be expanded: `ASOT`, `TB`, `IV`, `CRP`, `MMR`, `WCC`,
`RBC`, `VZIG` (printed with its own parenthetical expansion, which is part of the option and is not
editorial), `EBV`.

Typographic conventions where the shipped corpus normalises and we are NOT churning: the book
prints a lowercase letter `x` for multiplication where we print the sign; the book prints `38C` and
`39.5C` with no degree symbol where we print the degree symbol. These are house style applied
consistently across the whole corpus, recorded here so a later reader does not mistake them for
fresh faults. **Semantic strings are transcribed exactly; typography follows the corpus.**

<!-- RESUME-READ-FROM-HERE -->
## 2026-08-31 — THE COUNT, MEASURED. Peds House ch.4-20 = 312, not ~160.

The inherited "~160" estimate was derived from a density ratio, never measured. It is low by
roughly 95%. Measured below by three instruments; every disagreement was settled by a visual
read at 200 dpi, escalated to 400 dpi where a glyph was in doubt.

**Instruments.** (1) count of `Answer:` markers in the OCR text; (2) a sequential numbering walk
over the same text (find "1." then "2." then "3." … forward-only, immune to the OCR's junk digit
runs); (3) a subagent reading the rendered half-pages. The two text instruments were validated
first against three chapters with independently known totals: ch.1 = 31 (31 shipped), ch.2 = 26
(26 shipped), ch.3 = 24 (contents page).

| ch | title | book pp | count | settled by |
|---|---|---|---|---|
| 4 | Haematological disorders | 32-41 | 25 | both agree |
| 5 | Genetics | 42-48 | 20 | both agree |
| 6 | Perinatal medicine | 49-53 | 15 | both agree |
| 7 | Neonatal medicine | 54-61 | 21 | both agree |
| 8 | Normal development | 62-67 | **21** | visual — marker counter said 20 |
| 9 | Developmental problems | 68-74 | **19** | visual — numbering walk said 18 |
| 10 | Nutrition | 75-80 | 15 | both agree |
| 11 | Gastroenterology | 81-89 | 26 | both agree |
| 12 | Neurological disorders | 90-100 | 26 | both agree |
| 13 | Respiratory disorders | 101-110 | **27** | visual — highest printed is 28, Q11 absent |
| 14 | Diabetes and endocrinology | 111-117 | 16 | both agree |
| 15 | Allergy | 118-120 | 6 | both agree |
| 16 | Growth and puberty | 121-125 | **14** | visual — marker counter said 13 |
| 17 | Pediatric emergencies | 126-134 | 26 | both agree |
| 18 | Accidents and poisoning | 135-136 | 4 | both agree |
| 19 | Liver disorders | 137-140 | 9 | both agree |
| 20 | Malignant disease | 141-148 | 22 | both agree |
| | **total ch.4-20** | | **312** | |

Bank total = 312 + 81 already shipped (ch.1-3) = **393**.

### Three printing defects in the source. All verified visually, none corrected.

- **⚠️ ch.9 prints "18." TWICE**, on book p.74, on two different questions — Q18 "A 4-year-old
  boy is referred to his GP by his teacher at nursery…" (key C) and a second item "An 18-month-old
  baby boy… spastic diplegia…" (key D). The bank prints no Q19. **The printed number is not a
  unique identifier in ch.9** — id assignment must not derive from it blind. Same trap already on
  record for the endpoint bank and for ophtho House ch.9.
- **ch.13 skips Q11 entirely.** Highest printed number is 28; 1-10 and 12-28 each appear once.
  Confirmed by re-rendering the foot of p.104 and the head of p.105 at 400 dpi: p.104 closes on
  Q10's "Answer: E." with nothing below but the rule, the folio and bleed-through; p.105 opens on
  a sharp, unambiguous "12.". A publisher skip, not an OCR failure or a damaged glyph.
- **ch.13 Q14-Q17 share one five-option menu that lists "Bronchiolitis" twice**, as both A and D.
  That is how pp.105-107 print it. Transcribe as printed; note it in `explanation`; the `answer`
  never moves.

### ⚠️ The marker counter is a FLOOR, not a count.

On book p.66 the OCR file `L-034.txt` is only 1,611 characters and holds 3 `Answer:` lines; the
visual read found 4 (Q15-Q18). One marker was simply dropped. The same happened once in ch.16.
**Neither text instrument may stand alone.** Where the two agree the figure is safe — they fail
for independent reasons (a dropped "Answer" string vs a mangled numeral) — but a single instrument
reporting a total has told you a lower bound. This is the "check the auditor before believing the
audit" rule paying out for the seventh time.

Two further counters were tried and are NOT usable: "Select one answer only" occurrences (108
against a true 312 — the phrase is not printed on every question) and option-A line starts (287 —
loses every question whose menu OCR'd as a run-on). Recorded so nobody rebuilds them.

### Chapter boundaries — all 17 confirmed two ways.

Every banner listed above sits on the contents page's stated page, AND the numbering restarts at
Q1 there. Gastroenterology (p.81) and Growth and puberty (p.121) did not OCR their banner text at
all; both were confirmed by the numbering restart plus a visual read of the banner.

### The stop line, and what is past it.

Book p.149 is the "Pediatric surgery end-of-round MCQs" divider. **Book p.150 onward is not MCQ
format** — numbered short-answer items with the answer printed inline as prose. Out of current
scope; it is `type:'case'` work if it is ever taken.

### Image load: at least 36 figure references across 27 pages.

28 "opposite figure", 6 "shown in the figure", 2 growth charts. **This is an OCR-derived floor,
not a count** — a question can print a figure without naming it in the text. Every crop gets
LOOKED at; this is the dominant cost of the remaining 312.

## 2026-08-31 — House ch.4 "Haematological disorders" STAGED. 25 questions, zero folds.

Verbatim staging: `content\peds\qb-pages\house-ch04-haem.array.js`, 25 entries, re-counted from
disk after the last edit (`entries=25 holes=0 BAD=0`, `node --check` passes). Sequence 1..25
complete, no repeat, no gap — unlike ch.9 and ch.13. All ten chapter pages read at 200 dpi plus
book p.42 as the overrun check: p.42 opens the "Genetics" banner at Q1, so **ch.4 does not
overrun**. Option counts: 25 x 5. Keys C11 E4 B4 A3 D3.

**Zero explanation boxes**, counted by looking at every answer on all ten pages: each is a bare
`Answer: X.` line inside the question's own rounded box with nothing printed below it, and there
are no separate answer pages. Same as ch.1-3. **Every explanation in this chapter is therefore
authored and carries the marker** — predicted marker delta on splice = +25.

`Select one answer only.` runs Q1-Q6 and then stops dead — printed on no later question. Not
scattered as it is in ch.3. Recorded in `boiler`, stripped from the drafted stems.

### Two figures, both on book p.34, both in the right-hand third of the box.

- **Q5** blood film photomicrograph — densely packed red cells, wide central pallor. Crop as
  `q-pd-hd-34a`. Not transcribable as a table: the question turns on cell size and pallor.
- **Q6** clinical photograph — infant with swollen dorsum and fingers (dactylitis). Crop as
  `q-pd-hd-34b`. Not transcribable.

No other figure in the chapter. The pedigree diagrams faintly visible on the blank lower half of
book p.41 are **show-through from the reverse of the leaf** (ch.5's pedigrees) — confirmed against
L-022, where the same pedigrees appear the right way round. Not printed on p.41.

### Source defects, all transcribed verbatim, none corrected.

- **`Recombinant factor IIIV`** — VIII transposed — is option D of **Q13, Q14 AND Q15**. Three
  printings, verified at 400 dpi on two of them, so it is the book's own and not a scan artefact.
- **Q15 contradicts itself**: "Angie is 6 weeks old… At 2 months of age she presents…".
- **Q1 is a probable defective key.** Stem prints MCV 60 fL and "small red cells" — microcytic,
  pointing to E. Thalassaemia — but the book prints `Answer: C.` (Hereditary spherocytosis) and
  the film does not mention spherocytes. **`answer` stays on C.** The discrepancy is a note in
  `explanation`. Not taken to the user; a defective key is noted, never disputed.
- Q5 `platelets: 262 × 109/L` (superscript lost, two lines below a correct `11.2 × 10⁹/L`);
  Q16 `Haematopoesis`; Q22 `Henoch–Schonlein purpura` (no umlaut); Q5 `HB electrophoresis` and
  `g/dl`; Q21 `Von Willebrand` capitalised where Q7/Q8 print `von Willebrand`; Q24 `39C`;
  Q17 `caucasian`. Multiplication signs vary within single sentences (`×`, `X`, `x`, `X10⁹/L`).
  **All kept as printed** — the ch.1 CXR repair is the precedent.

### Duplicate sweep A-F: ZERO folds. Here is how the zero was measured.

25 staged against the whole live corpus of **3,824** loaded entries plus 25x25 self — **95,900
pairs** scored. Comparator = `norm.js` (tolerance on the word), content-token Dice with a stopword
list, threshold 0.60.

- **A** exact tight stem: 0. **B** normalised stem within Levenshtein 3: 0.
- **C** stem Dice: **exactly one pair over threshold** — `ch4-Q11` vs `ch4-Q7` at **0.659**, both
  within ch.4. **Adjudicated by reading both: not a fold, a deliberate contrast pair.** Q7 is
  Shlomo, 9 days, Hb 84, **PT 16 / APTT >120**, asked for the *diagnosis*, key Haemophilia A.
  Q11 is Ahmed, 4 weeks, Hb 122, **PT 36 / APTT 25**, asked for the *treatment*, key Vitamin K.
  **The coagulation profile is inverted between them** and the interrogative differs. The 0.659
  is carried entirely by the shared circumcision-bleeding scaffold and the identical lab-bullet
  template — the boilerplate, not the content. Next highest: 0.533, 0.463, 0.439. Highest
  cross-chapter pair anywhere: **0.429**, `ch4-Q8` vs `pedhd-renal-8`.
- **D** identical option menus: four pairs — Q11=Q12, and Q13=Q14=Q15. **A shared menu PAIRS
  questions, it never folds them.** Q11/Q12 carry different keys (A vs C) and unrelated stems
  (bleeding after circumcision vs Cypriot infant with absent HbA). Q13/Q14/Q15 carry keys D, E, E
  over haemophilia, spherocytosis-with-aplastic-crisis, and neonatal jaundice with a falling Hb.
  Discriminating tokens named in each case.
- **E** same keyed answer text + stem Dice >=0.45: 0.
- **F** within-chapter adjacent pairs: top is 0.437 (Q7/Q8, the two coagulation vignettes).

### Chapter assignment for the draft (assigned here, not by the drafter — tie-breaks misfile most)

`haematology` (15): Q1 Q2 Q4 Q5 Q6 Q10 Q12 Q14 Q15 Q16 Q17 Q18 Q19 Q20 Q23
`haem-bleeding` (8): Q3 Q7 Q8 Q11 Q13 Q21 Q22 Q25
`malignant` (2): Q9 Q24

### Lecture coverage for ch.4 — measured by grep, not assumed

`44)BM FAILURE.txt` is only **326 words** and `Iron deficiency anemia pdf.txt` **873**, so this
chapter leans hard on gap-fill. Term-by-term: sickle → `44)BM FAILURE`, `24)Abdominal pain`,
`53) stroke`, `39)Hematuria`. thalassaemia → `44)BM FAILURE`, `6) Genetically determined
disease_`, `Iron deficiency anemia pdf`. G6PD and spherocytosis → `44)BM FAILURE`,
`6) Genetically determined disease_`, `8) COMMON PROBLEMS IN THE TERM NEWBORN`. haemophilia, von
Willebrand, ITP → `47)Hemorrhagic disorders `. ALL and neutropenia → `48)Leukemias`. parvovirus →
`infectious diseases causing maculopapular rash`.

### ⚠️ CORRECTION to the paragraph above — two errors, both mine, both caught after the brief shipped

**1. The cache is 64 `.txt` files, not 59.** The 59 came from counting the output of
`ls content/peds/lectures/ | head -60` without noticing the truncation. Measured
`ls -1 *.txt | wc -l` → **64**. That number was the denominator of every absence claim in both
ch.4 drafting briefs. Caught by the draft-A agent; verified here.

**2. The gap map grepped disease names, not the signs and abbreviations the slides actually
print** — this project's own "grep the SIGN, not just the disease name" rule, fired against the
brief that quoted it. Re-measured across all 64:

| brief said | truth, measured |
|---|---|
| `vitamin K` — 0 hits | the *phrase* is genuinely 0, but `47)Hemorrhagic disorders .txt:707` heads a comparison table `DIC \| Vit K deficiency`, line 296 prints `-Hgic disease of` / `newborn` (line-wrapped in the cache), and `Vitamin deficiency  Rickets.txt:433` gives the whole row — carboxylation of clotting factors, haemorrhagic disease of newborn, prothrombin time, `1 mg IM (once)`. **Q11 is one of the best-sourced entries in the chapter, not a gap-fill.** |
| `glucose-6` — 0 hits | `G6PD` hits **3** files (`44)BM FAILURE`, `6) Genetically determined disease_`, `8) COMMON PROBLEMS IN THE TERM NEWBORN`); the last spells it `glucose6phosphate` at lines 84 and 285. `39)Hematuria.txt` names **favism** at lines 144 and 149 — absent from the brief's map entirely. |
| `electrophoresis` — 0 hits | confirmed 0 across all 64. |
| `portacath` — 0 hits | confirmed 0; nearest is `36)Myocardial diseases.txt:268` "Central venous catheter", wrong context. Q24's device stands as a gap-fill. |

So of the four claimed gaps, **two were false** and one of them sat on the chapter's best-sourced
question. An absence claim must be measured on the token the source prints, not the token the
question prints.

## 2026-08-31 — ch.4 drafted, 25/25. Both halves validate; both overshoot the house length band.

Draft-A (Q1–13) and draft-B (Q14–25) both returned `BAD 0` against the staging record: zero stem
drift, zero option drift, zero key drift, marker final in all 25, marker in no `source`, every
chapter token resolving against `modules.js`, zero id collisions with the live file. Predicted
splice: **81 → 106 entries, 81 → 106 markers** (every ch.4 explanation is authored — the chapter
prints no explanation boxes at all).

### ⚠️ Length: both drafts sit 30–40% above the shipped band, and both agents under-reported it

Measured here with one counter over all three sets (markdown stripped, whitespace split):

| set | n | min | median | mean | max |
|---|---|---|---|---|---|
| shipped `questions.peds.js` | 81 | 425 | **500** | 501 | **621** |
| draft-A | 13 | 610 | 635 | 638 | 676 |
| draft-B | 12 | 436 | 726 | 693 | 780 |

Draft-A self-reported a mean of 481 and draft-B a mean of 671; neither matches. **An agent's
self-measured length is not a measurement — re-count from disk with one counter.** The standing
budget is ~520 w vignette / ~250 w straight recall (user, 2026-08-13), so this is a real drift, not
a house-style quibble. Sent back for a **words-only** compression pass: ceiling 620, median ≤545,
no fact, distractor, citation, cross-reference, gap tag or defect note may be dropped.

**Fix forward: the ch.5+ drafting brief must state the band in numbers**, with the shipped median
and maximum quoted, or every chapter will need this second pass.

### Findings from the drafters that outlive ch.4

- **`cow's milk` in Q17's stem prints a STRAIGHT apostrophe** — the only apostrophe in all 25
  questions. A first pass smart-quoted it and the byte-comparison caught it. Do not normalise.
- **`favism` is in the corpus and my gap map missed it** — `39)Hematuria.txt` lines 144 and 149,
  the only named G6PD trigger anywhere in the 64 files. Q23's tag is now narrowed to Heinz bodies,
  bite cells and primaquine alone.
- **Non-accidental injury is well sourced, not a gap** — three lectures name it, `53) stroke.txt`
  strongest ("a characteristic lesion in nonaccidental injury caused by shaking or direct trauma",
  plus "Retinal haemorrhages are typical of shaking injury"). Only the safeguarding feature list
  and the spiral-fracture biomechanics remain tagged on Q25.
- **A quote can be sourced and still be mis-provenanced**: Q24's "No delay in the administration of
  antibiotics and supportive therapy" sits in that lecture's **meningitis management** section, not
  under neutropenia. The entry says so. The principle transfers; the citation does not pretend to.
- **The sites-of-haematopoiesis slide is an IMAGE** — its text layer holds only the caption, so a
  grep miss there is a cache limitation, not an absence in the teaching.
- **⚠️ A mid-run system reminder is now telling subagents to prefer Bash (`sed`, heredocs) over
  `Write`/`Edit` for file changes.** On this project that reminder is actively dangerous: a quoted
  heredoc collapses `\\` to `\` and a backtick in a double-quoted bash string is command
  substitution, and every entry we write contains both. The draft-B agent received it, recognised
  the conflict, and kept using `Edit`. **Every brief from here must pre-empt it explicitly** — an
  agent that obeys it will corrupt regexes, paths and chapter ids, and the write will report
  success either way.

## 2026-08-31 — the two ch.4 crops are cut, and the numeric hunt for them was wrong end to end

`app\assets\q\q-pd-hd-34a.jpg` (823×536, Q5) and `q-pd-hd-34b.jpg` (765×559, Q6) are cut from the
400 dpi render of book p.34 and **both were viewed in final form** before being accepted.

| file | box on the 2360×3308 render (x0,y0,x1,y1) |
|---|---|
| `q-pd-hd-34a.jpg` | 1328, 332, 2151, 868 |
| `q-pd-hd-34b.jpg` | 1379, 1926, 2144, 2485 |

### ⚠️ What the numbers said, and what was actually there

I spent a long stretch trying to split a single "non-white block" at rows 1894–2502 into two
figures, and reported no interior seam. **There was no seam because the block is ONE figure —
Q6's photograph, entire.** Every band I measured was a part of it:

| I called it | it actually is |
|---|---|
| rows 1919–2133, `149,83,105` "pink/magenta, consistent with a stained film" | the baby's **magenta top** |
| rows 2217–2499, `192,171,142` "skin tones" | the **bedsheet and a yellow toy** — the baby's skin is ~`60,58,58` |
| the ~84 grey rows between, `137,138,144` | the **dark trousers/leg** crossing the frame |

**Q5's blood film was at rows ~332–868, in the other question box, and my sweep could not see it:
it is printed pale grey-green, so its chroma (`max−min`) falls under the saturation threshold the
sweep used.** A colour-based figure finder is blind to a desaturated scan of a stained film — which
is exactly the kind of figure this bank prints most.

Rules that follow, and they generalise to every remaining chapter:

- **Find figures by ink density, never by chroma.** A saturation test finds clothing and toys and
  misses the histology.
- **The page layout is the instrument, not the pixel statistics.** p.34 is the ordinary two-box
  layout — a rounded blue question box per question, each with its figure in the **top-right**
  corner, ~1,050 px of white between. Locate the boxes first, then take the figure inside each.
- **There are TWO concentric blue rules around each figure**: the figure's own frame, and the
  question box border running past it outside. Cropping to "the non-white region" bakes a box rule
  into the image. Both final crops sit **inside** the inner frame — **zero pad, not 3 px**, because
  here any pad is rule.
- The first cut of `-34b` left a 2 px pale-blue sliver on the right edge. **A numeric bound did not
  catch it; looking did**, and the right bound moved 2147 → 2144. This is the sixth time on this
  project that only a look has caught a bad crop.

### `imgAlt` correction sent

Draft-A wrote Q6's alt as "…with the left hand held towards the camera". The hand is not held
towards the camera — it rests across the flexed knee. Corrected to "Clinical photograph of an
infant, cropped to the torso and the left hand resting across the flexed knee". **The alt still must
not name the swelling** — dactylitis is the answer.

## 2026-08-31 — House ch.5 "Genetics" STAGED. 20 questions, zero explanation boxes, zero folds.

`content\peds\qb-pages\house-ch05-genetics.array.js`, `var PEDHD_GEN_STAGED`. Re-validated here
from disk, independently of the staging agent, and it reproduces every figure exactly:

```
entries 20  holes 0   BAD 0
n 1..20, no duplicate, no gap        option-count histogram {"5":20}
keys {"E":3,"D":6,"B":5,"C":2,"A":4} pages {42:2,43:4,44:2,45:3,46:3,47:4,48:2}
boiler 11   fig 6   expl 0   note 16
non-ascii {"U+2019":2,"U+2013":3}    straight apostrophes 0
```

**Boundaries confirmed visually both ends**: "Genetics" opens p.42 Q1, and p.49 opens a new
full-width banner "Perinatal medicine" with numbering restarting at Q1. Nothing from Genetics runs
onto p.49; the lower two-thirds of p.48 is blank. **Zero explanation boxes again** — all 20
explanations will be authored, so the predicted marker delta on splice is **+20**.

### The count: 20, measured off the printed boxes, not inherited

Counted box by box on the rendered halves: p.42 Q1–2 · p.43 Q3–6 (Q6 stem only) · p.44 Q6
continuation + Q7–8 · p.45 Q9–11 · p.46 Q12–14 · p.47 Q15–18 · p.48 Q19–20. The prior estimate of
20 happened to be right, but it was re-measured, not accepted.

⚠️ **The boiler counter would have lost nearly half this chapter.** "Select one answer only." is
printed on only **11 of 20** — the misses are Q8, Q10 and then a contiguous run Q14–Q20. This is
the second chapter to fail that counter (ch.4: 108 occurrences against a true 312 bank-wide). It is
not a counter; stop reaching for it.

### Duplicate sweep A–F — zero folds, and here is why that zero is a zero

Swept 20 staged against a pool of **3,918**: the whole live corpus (peds 81, neuro 173, ENT 2,240,
ophtho 1,399) **plus the 25 unspliced ch.4 drafts**, 78,050 pairs, content-token Dice with
stopwords, fold threshold 0.60.

- **A** exact tight stem: 0. **B** normalised stem, Levenshtein-tolerant: 0. **E** same keyed answer
  + stem Dice ≥0.45: 0.
- **C**: **nothing at or above 0.60.** Top pair is `ch5-Q10` vs `ch5-Q8` at **0.590** — adjudicated
  below. Next 0.444, then 0.415. **Highest cross-corpus pair anywhere is 0.286**, which is noise.
- **D** identical option menu: **one** — `ch5-Q1` = `ch5-Q8`, both the five-inheritance-pattern menu.
  Different pedigrees, different keys (E vs B). `ch5-Q12` shares four of the five (its D is
  `X-linked dominant` where Q1/Q8 print `Trinucleotide repeat expansion mutation`), key A.
  **A shared option menu PAIRS questions, it never folds them.**
- **F** within-chapter neighbours: top 0.333.

**The Q8/Q10 adjudication.** Q8: *Pakistani* couple, pedigree supplied, two children died under 2,
one healthy 3-year-old girl, asks **the pattern of inheritance** → key B, autosomal recessive.
Q10: *Bangladeshi* couple, **gene named (PEX1)**, no pedigree, same family shape, asks **the risk
that the healthy daughter is a carrier** → key D, 2 in 3. Same scaffold, different data, different
question, different answer type. A deliberate parallel, not a duplicate.

### ⚠️ Q9 is a back-reference and the deck is shuffled — it must be repaired, and carefully

Q9 prints *"The same couple (in the previous question) tell you that they would like more children.
What is the risk of them having another affected baby?"*, key C = 1 in 4. **Question order in this
app is hashed from the id, so Q9 will not appear after Q8 and the reference has no antecedent.**

Precedent exists in this very module — `pedhd-renal-4` restates Johnathan's history into the stem
and declares it under a *"A note on how this was printed."* heading naming the matching entry, with
*"nothing else was altered."* Copy that shape.

⚠️⚠️ **The repair must not answer its own question.** Inline Q8's *vignette* (Pakistani couple,
two children died in the first 2 years, one healthy 3-year-old girl, faulty gene identified and
relatives tested) and **NOT Q8's answer** — writing "autosomal recessive" into Q9's stem makes
Q9's key of 1 in 4 a lookup and gives Q8 away at the same time. Hand-read the repaired stem against
both its antecedent and its own key. **No instrument sees this.**

### Chapter tokens for ch.5 (assigned here, not by the drafter — tie-breaks misfile most)

`genetics` (17): Q1 Q2 Q3 Q4 Q5 Q6 Q7 Q8 Q9 Q10 Q11 Q12 Q13 Q14 Q15 Q16 Q18
`malignant` (1): Q17 — Down with pallor, lethargy and bruising is a leukaemia *presentation*,
where Q7 is the Down *association* and stays in `genetics`
`growth-puberty` (1): Q19 — the vignette is framed as short stature on the 9th centile
`gastroenterology` (1): Q20 — day-1 vomiting after polyhydramnios

### Source defects, recorded and not corrected

1. **Q13 prints two impossible karyotypes** — `A. 46, XO` and `D. 45, XY`. Options are also
   unsorted (46, 46, 45, 45, 47). Key E (`47, XXY`) is correct; not disputed.
2. **Q17 option E `Henoch–Schonlein purpura`** — en dash, **no umlaut**, verified at 6×. Option B
   is the bare abbreviation `ITP` while every other option is spelled out.
3. **Q15 `following an uneventful period`** — the qualifying word is missing, and the next sentence
   separately says `The perinatal period was normal`.
4. **Q10's options run out of order by magnitude**: `None / 1 in 4 / 1 in 2 / 2 in 3 / 100%`.
5. **Q6's menu is the chapter's only non-alphabetised one.**
6. **Q6 straddles the page break** — vignette last on p.43, its final sentence, boiler, options and
   answer atop p.44. The number "6." is printed once, on p.43.
7. **Q12's stem names Robert and Elizabeth; the pedigree labels neither.**
8. **The chapter banner prints only "Genetics" — no chapter number.** The "5" is external.
9. ⚠️ **Punctuation is the OPPOSITE of ch.4's.** Ch.5 prints **curly** U+2019 in `Gemma's` and
   `Mark's` and U+2013 en dashes in `Prader–Willi`, `Henoch–Schonlein`, `Russell–Silver`; there is
   **not one straight apostrophe in the chapter**, where ch.4's single apostrophe was straight.
   The rule is *reproduce what is printed*, verified per chapter — never carry a previous chapter's
   character shape forward.

### Figures — six, all on the same page as their stem

Q1 p.42 · Q2 p.42 · Q8 p.44 · Q11 p.45 · Q12 p.46 · Q14 p.46.

⚠️ **The stems all say the figure is "shown in the opposite figure", and not one of them is.**
That wording is inherited from the original two-column textbook and never resolves to a facing page
in this printing; every figure sits in a yellow panel immediately right of its own stem column.
**Do not go looking on the facing page.**

⚠️ **p.42 carries TWO separate pedigree panels**, not one: Q1's clean, and Q2's the same tree with
a black arrow added pointing at an unshaded generation-III female. Two crops from one page.

## 2026-08-31 — the six ch.5 crops are cut and looked at. Assets 103 → 109.

Cut from **400 dpi sheet renders** (the sheet is **4677 × 3308**, so the halves split near x 2340,
not 2360 — measure the content bands, never derive them).

| file | q | sheet / page | box (L,T,R,B) | output |
|---|---|---|---|---|
| `q-pd-hd-42a.jpg` | Q1 | 22 / p.42 left | 1221, 678, 2148, 1222 | 927×544 |
| `q-pd-hd-42b.jpg` | Q2 | 22 / p.42 left | 1216, 2003, 2142, 2544 | 926×541 |
| `q-pd-hd-44a.jpg` | Q8 | 23 / p.44 left | 1215, 2077, 2130, 2537 | 915×460 |
| `q-pd-hd-45a.jpg` | Q11 | 23 / p.45 **right** | 3465, 1922, 4365, 2238 | 900×316 |
| `q-pd-hd-46a.jpg` | Q12 | 24 / p.46 left | 1183, 351, 2150, 775 | 967×424 |
| `q-pd-hd-46b.jpg` | Q14 | 24 / p.46 left | 1528, 2122, 2142, 2899 | 614×777 |

**Two needed re-cutting after a look caught what the numbers missed** — the seventh and eighth times
on this project that only the eye has caught a bad crop. `44a`: the panel's rounded-corner arc dips
*inside* the ink bounding box, so the ink bbox itself was wrong and left a blue diagonal in two
corners. `46b`: the frame's bottom-right arc left a pale-blue wedge. Both re-viewed as 4-corner
contact sheets at 2×.

⚠️ **"Zero padding" is not a universal rule — it was p.34's geometry, not the bank's.** Here the
figure sits 10–45 px clear of the panel border on four of six, so a 3 px pad is safe and correct;
only `44a` was tight enough to force the edge inside the ink bbox. **And there is no inner figure
frame at all** on this chapter: the "two concentric rules" are the yellow panel's own rounded border
and the question box border outside it. A numeric pass reported phantom inner-frame peaks; looking
at a binary ink mask showed they were the top arc of the topmost circle and the bottom rule of the
lowest square.

### ⚠️ Figure content — this is load-bearing, and the shading IS the answer

Read this from here rather than re-deriving it. Half-shading is always the **left** half.

- **42a (Q1)** — 4 generations, 16 symbols. GI open circle × open square. GII: two married-in
  spouses plus four sibs — **shaded square**, open circle, **shaded square**, open circle. GIII:
  left sibship open square, open square, open circle (married to a married-in open square); right
  sibship **shaded square**, open circle, open circle. GIV: one **shaded square**.
  ⚠️ **Every shaded symbol is a square; no circle is shaded anywhere; nothing is half-shaded.**
- **42b (Q2)** — identical tree and identical shading, plus a **solid black arrow** at lower right
  whose tip touches the lower-left rim of the **middle symbol of the right-hand GIII sibship, an
  unshaded circle**. That sibship reads shaded square, arrowed open circle, open circle — so
  "the unshaded GIII female" is ambiguous on its own; it is the **middle** one.
- **44a (Q8)** — 4 generations, 22 symbols, two founding couples joining in GIII. **Nine symbols are
  HALF-shaded**; only the GIV circle and the GIV right square are solid. GI: left couple open circle
  × half-shaded square; right couple half-shaded circle × open square. GII (5): half-shaded circle,
  open square, half-shaded square | half-shaded square, open circle. GIII (10) includes a
  half-shaded circle married to a half-shaded square. GIV (3, hanging below that couple):
  **fully shaded circle**, open square, **fully shaded square**.
- **45a (Q11)** — 2 generations, 9 symbols. GI: left couple **half-shaded circle × half-shaded
  square**; **the right-hand GI couple is fully open.** GII: left sibship open circle, open circle,
  **fully shaded square**, open circle; right sibship one open square. The fourth left-sibship
  circle is labelled **"Gemma"**, the right open square **"Mark"**, joined by a marriage line.
- **46a (Q12)** — 3 generations, 14 symbols. GI: **open circle × solid-shaded square** — the
  founding couple is **not** both shaded. GII (4, no spouses drawn): shaded circle, open circle,
  open square, shaded circle. GIII (8): shaded circle, shaded square, open circle | open square,
  open circle | open circle | open circle, shaded square. All shading solid; none half.
- **46b (Q14)** — colour clinical photograph, portrait, infant supine on a pale sheet, bare chest,
  head and upper trunk filling the frame, eyes closed, left arm flexed with the hand up beside the
  head, right arm out to the side. **Not in a yellow panel** — a plain rounded blue frame on white,
  the one exception in the chapter.

**There are no generation numerals (I, II, III, IV) printed on any of the five pedigrees** — the
panel interior is blank yellow outside the drawing. Only `45a` carries text.

### `imgAlt` for the six — modality and view only, verified not to answer

```
42a  Family pedigree chart spanning four generations.
42b  Family pedigree chart spanning four generations, with a black arrow marking one symbol.
44a  Family pedigree chart spanning four generations, two family lines joined.
45a  Family pedigree chart spanning two generations, two symbols labelled with names.
46a  Family pedigree chart spanning three generations.
46b  Colour clinical photograph of an infant lying supine, head and upper chest.
```

⚠️ None of these may gain the words *affected*, *carrier*, *shaded*, *Down*, *trisomy* or any
inheritance pattern. The shading and the facial features are the answers.

## 2026-08-31 — USER RULING: skip all OSCE content for now

*"Skip all the OSCE related part it it comes in your way for now, If I needed it later I'll tell
you."* — user, 2026-08-31.

**Deferred, not cut.** If a page, chapter, plan row or lecture cache turns out to be OSCE material:
skip it, say in the report that it was skipped and why, and carry on with the surrounding non-OSCE
work. Do not render it, transcribe it, plan for it, or raise it as a question, and do not treat
skipping it as a scope cut needing approval. Wait to be asked.

Nothing in the current stream is affected — the peds House bank is MCQs throughout, and the
short-answer section from book p.149 was already out of scope on its own boundary.
