# Module brief — PEDIATRICS

> ## ⚠️⚠️ STAND DOWN ON THEORY — 2026-08-14
>
> **This module’s theory is now written by the ENT/hub chat, not here** (user’s decision,
> 2026-08-14). The usage pool is **shared between all four chats**, so four chats running agents
> multiplies session-limit deaths rather than throughput — four died on 13/14 Aug. Theory is also
> far shorter than projected: a chapter written from scratch under §14 takes **~9–10 minutes**
> (`ent-otalgia`, 1,752 words, 75 questions linked, 6 printed pages), so all ~97 remaining
> chapters are **2–3 days**, not two weeks.
>
> **Launch no subagent. Finish and commit the topic you are on — clean topic boundaries only —
> write `progressesume-<mod>.md`, and stop.** Full instruction and the paste text:
> `progressriefsPASTE-theory-format-changed.md`.
>
> **When the banks resume (~17 Aug): **SECOND.** ~1,170 remain; OSCE 14 Sep, papers 17 Sep, then papers again 18–19 Oct.**
>
> ⚠️ Your remaining-question figure is **extrapolated from ENT’s page ratios, ±30 %** — nobody has
> counted your bank’s pages. **Report the first real count to the hub** so the projection is
> corrected rather than trusted.
>
> §13.3’s **reconciliation pass is unchanged and still mandatory** when your banks close: theory
> written now cannot know about a question transcribed in September. It is a diff, not a rewrite.


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
>
> **⚠️⚠️ AND READ §13 — THEORY NOW COMES FIRST.** The user set a deadline on 2026-08-13: **both your
> subagent slots write THEORY CHAPTERS from now until ~2026-08-22**, then question banks resume and
> run to completion (~Sep 7). Notes that arrive the week of the exam are notes that get skimmed;
> finishing them by the 22nd leaves ~2 weeks to revise from. **Nothing is dropped — the banks resume
> after.** §13 carries the reconciliation pass you owe when your banks finally close, and the warning
> that §12 depth rules do NOT apply to theory.
>
> **⚠️⚠️ AND §14 WAS REWRITTEN LATE ON 2026-08-13 — THE THEORY FORMAT CHANGED AGAIN AND THE NEW ONE
> IS MUCH SHORTER. READ IT BEFORE YOU BRIEF A SINGLE THEORY SUBAGENT.** The user read printed ENT
> chapters at 30–47 pages against lectures of 977–2,289 words and rejected them: *"toooo much… the
> original sources are much less than yours."* The cause was the old rule *"every question
> answerable from the notes alone including why each wrong option is wrong"* — it duplicated each
> question's own `explanation`, which the app already shows one tap away through the `qs` link.
> **Now: a HARD word budget — body words ≤ the summed word count of that chapter's cached lecture
> files (floor 600, cap 3,000), checked by script at merge.** Coverage stays two-sided: every
> important LECTURE fact, plus every linked question's **key and discriminator** as a line or a
> cell — **but never the distractor essay.** Telegraphic fragments, tables by default, no question
> ids in body text, one `Src:` line per section, `intro` ≤ 50 words. **§14.5 adds a DEFERRAL
> REGISTER: a fact you move to another chapter must be named there, or it is a deletion wearing a
> promise's clothes.**
>
> **⚠️⚠️ LAYOUT — §14.3a, ADDED 2026-08-14 AFTER THE USER SAW THE PRINTED PDF:** *"it doesn’t
> look apetising at all. Some parts just look like plain paragraphs."* **The `·`-chained
> mega-paragraph is BANNED** — cap ~45 words a paragraph, ~15 a bullet. **Use `### ` sub-headings**
> once a section covers more than two entities. **Open every entity block and every `**Term**`
> bullet with an EARLY COLON or em-dash** — `**Quinsy:** …` — because the renderer colours the text
> before the first `:`/`—` inside 44 characters and a lead bold without one gets no anchor at all.
> One-line asides and cross-refs go in `*single italics*` on their own line; `Src:` stays the last
> line. **Read §14.3a before writing — it is a layout rule, it removes no facts, and the budget is
> unchanged.**
>
> **⚠️ THE WORKED EXAMPLE THE USER APPROVED is
> `content\ent\theory-drafts\ent-stridor.v2.draft.js` — 14 sections, 3,759 words, 13 printed pages, 113 questions linked, rewritten down from 47 pages.
> Read it and match its density before writing anything. Your module's chapters are far thinner on
> questions than ENT's, so most of yours should land WELL under 2,000 words.**

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

### ⚠️ The numbering gaps — SETTLED 2026-08-14, do NOT re-raise them

**The source tree holds 68 lecture files against 64 cached.** Audited file-by-file on 2026-08-14
(`comm` over the two sorted lists, not by eye). The earlier version of this section listed 19, 20
and 42 as missing numbers; **all three are files that exist** and it was wrong. What is actually
true:

**⚠️ NUMBERS 21, 28, 29 AND 57 DO NOT EXIST AND NEVER WILL — the user's answer, 2026-08-14:
*"The missing lectures were not given to me by the professor."* DO NOT interview about them, do not
hunt for them, do not tag their topics as a capture failure.** A gap in the numbering here means the
professor withheld the lecture, and the affected material is filled the way any gap is —
from general medical knowledge, tagged (`CLAUDE.md` §4). **This also settles ENT's long-open `L28`
question by the same answer**; that interview item is closed.

45, 46 and 50 are almost certainly the unnumbered files sitting exactly where they belong —
`Iron deficiency anemia pdf` between 44 (BM failure) and 47 (haemorrhagic disorders),
`diabetes mellitus for under grad…` between 49 and 51 (DKA). Treat them as those slots.

**⚠️ FOUR DECKS EXIST BUT ARE NOT USABLY CACHED. Budget a visual read for each before writing the
chapter that needs it** — the four-up contact-sheet method below:

| File | Chapter it serves | Why it is not cached |
|---|---|---|
| `19 and 20) INFECTIOUS DISEASES. clean.ppt` | `infection` | **16 MB in the OLD binary `.ppt` format** — the read-the-XML-out-of-the-archive trick works on `.pptx` only. Covers two lecture slots. |
| `42)Viral hepatits_.pdf` | `liver` | 44 pages, **image-only** — `pdftotext` returns 44 characters. The chapter's only other deck is `43)Infantile cholestasis_` at 1,537 w. |
| `44)BM FAILURE.pdf` | `haematology` | Cached but **6 words per page over 54 pages** — effectively all diagrams. |
| `25)Immunodeficiency_.pdf` | `infection` | Cached but **9.7 words per page over 58 pages** — same shape. |

**⚠️ The two stub files are confirmed harmless — 134 and 120 bytes, and not PDFs at all**
(`pdfinfo`: *"Couldn't find trailer dictionary"*). They are ` Myocardial diseases.pdf` and
` stenotic lesions.pdf`, both with **two leading spaces** in the name. Their content is elsewhere and
nothing is lost — but *where* matters, see the next line.

**⚠️⚠️ `34)Students Obstructive diseases` IS A CARDIAC DECK, NOT A RESPIRATORY ONE.** The title reads
respiratory and it was mis-filed that way once. It is the **coarctation / aortic stenosis / pulmonary
stenosis** lecture — the content the ` stenotic lesions.pdf` stub was meant to hold. Proven by grep:
`coarctation` and `aortic stenosis` appear in it and **`33)Congenital acyanotic heart disease_`
returns ZERO hits for either.** File it under `cardiac`. Filed under `respiratory` it leaves the
cardiac chapter missing exactly the lesions the exam asks about.

**Lecture slides extract cleanly with `pdftotext`.** If an uncached deck returns almost nothing it
is image-only: **render at 110 dpi and read FOUR-UP CONTACT SHEETS** — 10 reads instead of 40, with
headings and bullets still legible at 760 px per slide.

### ⚠️ Paediatrics carries ~4× ENT's lecture load per chapter — expect the budget cap to bind

Measured 2026-08-14 across all four caches:

| | ENT | **Peds** | Ophtho | Neuro |
|---|---|---|---|---|
| Chapters | 30 | **21** | 26 | 27 |
| Cached decks | 34 | **64** | 27 | 25 |
| Cached words | 34,883 | **96,218** | 33,424 | 43,665 |
| **Lecture words / chapter** | 1,163 | **4,582** | 1,285 | 1,617 |

The theory budget is `max(lecture words used, 25 × linked questions)`, floor 600, **cap 3,000**.
With ~4 questions per chapter here, TERM 1 governs everywhere — and **4,582 is past the cap**, so
unlike ENT (where the cap almost never bound) **most paediatrics chapters will hit it.** Plan for
that: the §14.5 deferral register will be busy, and *an unrecorded promise is a deletion.* Do not
silently drop the overflow to fit — itemise it.

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
