# Module brief — PEDIATRICS

**Read `progress\briefs\START-HERE.md` first.** It holds the method, the file boundaries, the
schema, the sweep and the validator. This file holds only what is specific to Pediatrics.

> **⚠️ NEW, 2026-08-13 — READ `START-HERE.md` §12 BEFORE DRAFTING ANYTHING ELSE.** The user revised
> the writing budget: **adaptive depth** (~520 words where it earns it, **~250 for straight
> slide-recall**), **shared comparison tables written ONCE** with siblings pointing at the id, and
> **`source` as a citation, not a second explanation.** It changes **how much is written, never what
> is covered** — every question, every bank, all six sweep stages, every defect and every gap-fill
> stay exactly as they were, and the theory notes remain a study source sufficient to sit the exam
> from. **If time runs short, say so loudly — never trim a bank.** Apply from your next batch; do not
> rewrite finished entries.

---

## Your identifiers

| | |
|---|---|
| `module` value | **`pediatrics`** |
| Your data file | **`app\data\questions.peds.js`** — array `Q_PEDS` |
| Your cases file | `app\data\cases.peds.js` — array `C_PEDS` (exists, empty) |
| Your notes | `content\peds\qb-pages\` |
| Your resume file | **`progress\resume-peds.md`** — create it in your first hour |
| Your image token | `q-pd-…` — e.g. `q-pd-hd-44.jpg` |

**Current state: 0 questions.** Everything here is new work.

---

## Your banks, in the order to work them

**Only two of the three exist. Grade Gain was never supplied for Pediatrics** — do not go looking
for it. Page counts measured 2026-08-12 with `pdfinfo`.

| Order | Bank | File | Pages | Notes |
|---|---|---|---|---|
| **1st** | **House** | `Semester 8\Pedo\Questions\pediatric .pdf` | **104** | Id prefix **`pedhd-`**. ⚠️ Note the **space before `.pdf`** in the filename — quote the path |
| **2nd** | Endpoint | `Semester 8\Pedo\Questions\Pediatrics endpoint part1.pdf` | **1,991** | Id prefix **`pedep-`** |
| **3rd** | Endpoint | `Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf` | **1,993** | same prefix, continuous numbering |

**Then the module's theory notes**, per `START-HERE.md` §9. **Both banks and the theory are your
scope; the order is about sequencing, not about dropping anything.**

**⚠️ YOUR MODULE IS THE ODD ONE OUT: your compact bank is the smallest of any module (104 pages),
so you will reach the 3,984-page endpoint pair soonest.** Two consequences:

1. **Work the House bank first and completely.** It is the cheapest coverage in the project.
2. **When it is done, TELL THE USER what you found** — how many questions it yielded and how the
   endpoint file is structured on its first ten pages — **and then carry straight on into the
   endpoint pair.** Report it so they can see the pace and steer; **do not wait for permission, and
   do not treat the endpoint file as optional.**

**Why this order:** ENT's endpoint file ran **3,075 pages for 697 questions** — 4.4 pages per
question. The compact banks run about **0.17 pages per question**, roughly **25× more productive per
page read**, so doing House first means the same hours buy far more coverage earlier.

**⚠️ Confirm the bank identity by rendering page 1 before assigning `bank`.** In ENT, `ENT QB.pdf`
turned out to be Grade Gain and `ophthalmology MCQ.pdf` is House — neither was guessable from its
name. **`bank:'house'`** here unless page 1 says otherwise.

**⚠️ `CLAUDE.md` §4 mentions an id prefix `peds-`.** Nothing uses it — no Pediatrics question
exists. **Use `pedhd-` and `pedep-`**, matching ENT's `enthd-`/`entep-` pattern, and record the
choice in your resume file.

---

## Your 21 chapters

Every question's `chapter` must be exactly one of these strings. **⚠️ Note that unlike the other
modules these ids carry no `pd-` prefix** — they are bare words. Copy them exactly.

| Group | id | Title |
|---|---|---|
| Non-systems | `emergencies` | Pediatric emergencies |
| | `allergy` | Allergy |
| | `infection` | Infection and immunity |
| | `normal-dev` | Normal Development |
| | `dev-problems` | Developmental problems |
| | `genetics` | Genetics |
| | `malignant` | Malignant Disease |
| Completed earlier | `growth-puberty` | Growth and puberty |
| | `nutrition` | Nutrition |
| | `accidents` | Accidents and poisoning |
| Systems | `gastroenterology` | Gastroenterology |
| | `perinatal` | Perinatal medicine |
| | `neonatal` | Neonatal medicine |
| | `haematology` | Hematological Disorders |
| | `respiratory` | Respiratory Disorders |
| | `cardiac` | Cardiac Disorders |
| | `renal` | Kidney and Urinary tract |
| | `neurological` | Neurological Disorders |
| | `mental` | Mental Health |
| | `endocrine` | Diabetes and Endocrine |
| | `liver` | Liver Disorders |

**Filing guidance where they overlap:**

- **`perinatal` vs `neonatal`** — perinatal is around birth (antenatal care, delivery, birth injury,
  HIE, resuscitation at delivery); neonatal is the newborn as a patient (sepsis, jaundice,
  respiratory distress, feeding). Where a question straddles, pick the primary and **note the
  secondary in the explanation.**
- **`emergencies` vs the system chapters** — a question about the *emergency management* of
  anaphylaxis is `emergencies`; one about the *mechanism* of anaphylaxis is `allergy`. File by what
  the question tests.
- **`infection` vs a system** — pneumonia is `respiratory`, meningitis is `neurological`, UTI is
  `renal`. `infection` is for immunity, vaccination, febrile child, and the named infectious
  diseases as entities.
- **`mental`** is child mental health in a paediatric bank — **not** the Neuropsychiatry module.
  Never write a `ps-` or `nr-` chapter id; those belong to another chat.

Record your filing decisions in `progress\resume-peds.md` so the second bank is filed like the first.

---

## Your lecture cache — 64 files, the largest in the project

`content\peds\lectures\*.txt`, already extracted. **Check it before rendering anything, and LIST THE
DIRECTORY BEFORE CITING A FILENAME** — citing one from memory has been wrong three times in ENT.

The naming is **inconsistent** — some files are `NN) Title`, some are bare titles, some carry a
stray `)` or a hash. Do not try to infer a filename; list and match. A representative sample:

```
1) Normal development            18) febrile child and life threatening infections   40) Congenital anomalies of the kidneys…
2) developmental problems        22)Vomiting                                          41)Proteinuria -1
3) Pediatric resuscitation       23).1) Acute diarrhea                                43)Infantile cholestasis_
4) Shock in pediatrics_          23).2)Constipation                                   44)BM FAILURE
5) Poisoning in children_        24)Abdominal pain                                    47)Hemorrhagic disorders
6) Genetically determined…       25)Immunodeficiency_                                 48)Leukemias
7) Intro to neonatology          26)allergy_                                          49)Rhabdomyoma and Brain Tumors…
8) COMMON PROBLEMS IN THE…       27)Anaphylaxsis                                      51) DKA
9) Respiratory distress…         30) Pneumonia                                        52) hypothyrodism
10) new Seizures. Birth…         31).1)Asthma part 1 / 31).2)Asthma part 2            53) stroke
11) Neonatal sepsis              32)Acute bronchiloitis_                              54) seizures and epilepsy (1)
12) HIE                          33)Congenital acyanotic heart disease_               55) Motor_Disorders
13) Short stature                34)Students Obstructive diseases                     56) Floppy infant
14) Puberty                      35)Cyanotic CHDs                                     58) cerebral palsy
15.1) Faltering Growth           36)Myocardial diseases
15.2) Infant Feeding             37)RF
16) P.E.M                        38)UTI
17) Vitamin D Defficiency…       39)Hematuria
```

Plus 11 unnumbered files including `Asthma e-book`, `Iron deficiency anemia pdf`,
`infectious diseases causing maculopapular rash`, `infectious diseases causing vesicular rash`,
`specific bacterial infection`, `typhoid and tuberculosis`, `antibiotic stewardship program`,
`diabetes mellitus for under grad…`, `Lec 1 Normal development_`, `Lec 2 Child development_`,
`PNEUMONIA`, `Vitamin deficiency Rickets`.

**⚠️ SEVERAL TOPICS ARE CACHED TWICE UNDER DIFFERENT NAMES** — `30) Pneumonia` and `PNEUMONIA`,
`1) Normal development` and `Lec 1 Normal development_`, `17) Vitamin D Defficiency Rickets(1)` and
`Vitamin deficiency Rickets`, `31)Asthma` and `Asthma_` and `Asthma e-book`. **Read both before
citing one** — they are different lectures on the same topic, not duplicates, and the fuller one is
often the unnumbered file.

**⚠️ Gaps in the numbering: no 19, 20, 21, 28, 29, 42, 45, 46, 50, 57.** Before treating any of
those as a missing lecture, check `Semester 8\Pedo\Theoritical\PPT\` — and note that **two
Pediatrics PPT stubs are known to exist there** (recorded in the workspace notes as awaiting
cleanup), so an empty file is a real possibility. If a lecture is genuinely absent from the supplied
material, raise it with the user — that is a file they can supply, and worth interviewing about.

**Lecture slides extract cleanly with `pdftotext`.** If an uncached deck returns almost nothing it
is image-only: **render at 110 dpi and read FOUR-UP CONTACT SHEETS** — 10 reads instead of 40, with
headings and bullets still legible at 760 px per slide.

---

## First actions

1. Create `progress\resume-peds.md`.
2. Render **pages 1–12** of `pediatric .pdf` to the scratchpad at `-r 130`. Read every one.
3. From those pages establish and **write down**: the cover and true bank identity; **the PDF-page
   to book-page offset**; how the book is divided; how many questions per page; **whether questions
   and answers are on separate pages, and how far apart**; whether explanation boxes are printed;
   whether any question prints a figure.
4. Find and transcribe the **contents page** into your resume file as a page map — then treat its
   counts as unreliable and its page ranges as reliable, which is how ENT's behaved.
5. Work the first section end to end: render → transcribe verbatim into `content\peds\qb-pages\` →
   within-bank sweep → write entries → splice → run the validator → update your resume file.
   **Then repeat.** Do not batch five sections of reading before writing any.
