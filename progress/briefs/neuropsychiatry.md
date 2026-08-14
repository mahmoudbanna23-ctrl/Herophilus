# Module brief — NEUROPSYCHIATRY

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
> **When the banks resume (~17 Aug): **THIRD.** ~800 remain against an exam on 3 Oct — the most slack of the four.**
>
> ⚠️ Your remaining-question figure is **extrapolated from ENT’s page ratios, ±30 %** — nobody has
> counted your bank’s pages. **Report the first real count to the hub** so the projection is
> corrected rather than trusted.
>
> §13.3’s **reconciliation pass is unchanged and still mandatory** when your banks close: theory
> written now cannot know about a question transcribed in September. It is a diff, not a rewrite.


**Read `progress\briefs\START-HERE.md` first.** It holds the method, the file boundaries, the
schema, the sweep and the validator. This file holds only what is specific to Neuropsychiatry.

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
> **⚠️ THE WORKED EXAMPLE THE USER APPROVED is
> `content\ent\theory-drafts\ent-stridor.v2.draft.js` — 14 sections, 3,759 words, 13 printed pages, 113 questions linked, rewritten down from 47 pages.
> Read it and match its density before writing anything. Your module's chapters are far thinner on
> questions than ENT's, so most of yours should land WELL under 2,000 words.**

---

## Your identifiers

| | |
|---|---|
| `module` value | **`neuropsych`** |
| Your data file | **`app\data\questions.neuro.js`** — array `Q_NEURO` |
| Your cases file | `app\data\cases.neuro.js` — array `C_NEURO` (exists, empty) |
| Your notes | `content\neuro\qb-pages\` |
| Your resume file | **`progress\resume-neuro.md`** — create it in your first hour |
| Your image token | `q-np-…` — e.g. `q-np-gg-44.jpg` |

**⚠️ Note the mismatch and do not "fix" it: the module id is `neuropsych`, the data file is
`questions.neuro.js`, the array is `Q_NEURO`, and the content folder is `content\neuro\`.** That is
how the app is wired. `module:'neuropsych'` in every entry.

**Current state: 0 questions.** Everything here is new work.

---

## Your banks, in the order to work them

**Only two of the three exist. House was never supplied for Neuropsychiatry** — do not go looking
for it. Page counts measured 2026-08-12 with `pdfinfo`.

| Order | Bank | File | Pages | Notes |
|---|---|---|---|---|
| **1st** | **Grade Gain** | `Semester 8\Neuro\Questions\neuropsychiatry & neurosurgery qb.pdf` | **142** | Id prefix **`npqb-`**. ⚠️ The `&` in the filename breaks some shells — **quote the whole path** |
| **2nd** | **Endpoint** | `Semester 8\Neuro\Questions\Neuro endpoint.pdf` | **2,190** | Id prefix **`npep-`**. **In scope and to be done** — second only because it is the most expensive per question |

**Then the module's theory notes**, per `START-HERE.md` §9. **Both banks and the theory are your
scope; the order is about sequencing, not about dropping anything.**

**Why that order:** ENT's endpoint file ran **3,075 pages for 697 questions** — 4.4 pages per
question. Grade Gain ran **185 pages for ~1,080** — 0.17 pages per question, roughly **25× more
productive per page read**, so doing it first means the same hours buy far more coverage earlier.
**⚠️ Tell the user when you finish the Grade Gain book** — not to ask permission to carry on, but so
they can see the pace and steer if they want to.

**⚠️ Confirm the bank identity by rendering page 1 before assigning `bank`.** In ENT, `ENT QB.pdf`
turned out to be Grade Gain and `ophthalmology MCQ.pdf` is House — neither was guessable from its
name. Grade Gain's cover reads **ASM MINDS' … GRADE GAIN edition** or shows "GG".

**⚠️ THE FILENAME SAYS "neuropsychiatry & NEUROSURGERY".** The `MODULES` chapter list below has
**no neurosurgery chapter.** Expect questions on head injury, raised intracranial pressure, brain
tumours, hydrocephalus and spinal compression with nowhere obvious to file them. **Do not invent a
chapter id — you may not edit `modules.js`.** File them to the nearest existing chapter (usually
`nr-intro` for localisation, `nr-hemi` for cord and long-tract syndromes, `nr-headache` for raised
ICP, `nr-backpain` for spinal disease) **and note the true subject in the explanation.** Then
**tell the user how many questions this affected** so they can decide whether a chapter should be
added. That is a real scope question and worth raising once, batched, not per question.

---

## Your 27 chapters

Every question's `chapter` must be exactly one of these strings. **The module has two groups.**

### Psychiatry — 16 chapters

| id | Title |
|---|---|
| `ps-interview` | Interview Assessment |
| `ps-osce` | OSCE demonstration |
| `ps-somato` | Somatoform disorders |
| `ps-symptom` | Symptomatology |
| `ps-psychoed` | Psychoeducation and Myths |
| `ps-anxiety` | Anxiety Disorders |
| `ps-ocd` | OCD and PTSD |
| `ps-mood` | Mood Disorders |
| `ps-psychosis` | Approach to Psychosis |
| `ps-geri` | Geriatric Psychiatry |
| `ps-child` | Child Psychiatry |
| `ps-sud` | Substance use disorder |
| `ps-emerg` | Emergency Psychiatry |
| `ps-pharm` | Psychopharmacology |
| `ps-devices` | Devices in Psychiatry |
| `ps-therapy` | Psychotherapy |

### Neurology — 11 chapters

| id | Title |
|---|---|
| `nr-intro` | Introduction to neurology and localization |
| `nr-ms` | MS and demyelinating disorders |
| `nr-movement` | Movement disorders / Epilepsy |
| `nr-lmn` | LMN: peripheral nerve, muscle and neuromuscular disorders |
| `nr-cns` | CNS infections |
| `nr-cranial` | Cranial nerves disorders |
| `nr-delirium` | Delirium and Coma |
| `nr-headache` | Headache |
| `nr-stroke` | Cerebrovascular stroke |
| `nr-backpain` | Cervical and low back pain |
| `nr-hemi` | Hemiparesis, paraparesis, ataxia |

**Filing guidance where they overlap:**

- **`ps-symptom` vs a named disorder** — a question defining *thought insertion* or *circumstantial
  speech* is `ps-symptom`; one asking which disorder features it is the disorder's chapter.
- **`ps-pharm` vs the disorder** — a question about lithium's side effects is `ps-pharm`; one about
  which drug to start in mania is `ps-mood`. **File by what the question tests.**
- **`ps-emerg` vs the disorder** — acute management of a suicidal or violent patient, neuroleptic
  malignant syndrome and serotonin syndrome are `ps-emerg`.
- **`nr-movement` covers epilepsy too** — the title carries both. Seizures go here, not to
  `nr-intro`.
- **`nr-delirium` vs `ps-geri`** — dementia is taught in both places (`13) Dementia and Delirium` is
  a neurology lecture). File delirium and coma to `nr-delirium`; file dementia by what the question
  tests — cognitive assessment and management in the elderly to `ps-geri`, the neurological
  differential to `nr-delirium`. **Pick one, record the choice, and stay consistent.**
- **⚠️ Never write an `op-` or a bare Pediatrics chapter id** — those belong to other chats.

Record your filing decisions in `progress\resume-neuro.md` so later batches match earlier ones.

---

## Your lecture cache — 25 files, already extracted

`content\neuro\lectures\*.txt`. **Check it before rendering anything, and LIST THE DIRECTORY BEFORE
CITING A FILENAME** — citing one from memory has been wrong three times in ENT.

**⚠️ THE TWO HALVES OF THE MODULE NUMBER THEIR LECTURES SEPARATELY, SO NUMBERS COLLIDE.** There are
two `L3`, two `L4`-ish, two `L6`, two `L8`, two `L9`, two `L11` and two `L12` — one neurology, one
psychiatry. **Always cite the full filename, never the bare number.**

**Neurology:**
```
L1) INTRODUCTION AND LOCALISATION IN NEUROLOGY      L8) Cranial nerves
L2) Multiple sclerosis                              L9) CNS infection
L3) MOVEMENT DISORDERS                              L10) Stroke
L4) Seizures_Epilepsy                               L11) Cervical pain
L5) Muscle Disease                                  L12) hemi,parap&ataxia
L6) Peripheral neuropathy                           L13) Dementia and Delirium
```

**Psychiatry:**
```
L1,2) Psychiatric sheet                             L14) Child Psychiatry
L3) Somatization                                    L15) substance related disorder and psychiatry emergency
L4,5) Psychiatric symptomatology                    L16) Emergency Psychiatry Critical Interventions
L6) Myths about psychiatry                          L17) Psychopharmacology
L8) OCD & PTSD                                      L18) Devices in Psychiatry
L9,10) Mood disorders                               L19) Psychotherapy
L11,12) Schizophrenia
```

**⚠️ Psychiatry has no cached `L7`, and there is no OSCE or interview-assessment deck** despite
`ps-interview` and `ps-osce` being real chapters. Before treating those as missing, check
`Semester 8\Neuro\Theoritical\PPT\`. If a lecture is genuinely absent from the supplied material,
raise it with the user — that is a file they can supply, and worth interviewing about. In ENT, one
such gap turned out to be a lecture that **exists nowhere**, and the chapter had to be answered
from general knowledge under the tag rule.

**Lecture slides extract cleanly with `pdftotext`.** If an uncached deck returns almost nothing it
is image-only: **render at 110 dpi and read FOUR-UP CONTACT SHEETS** — 10 reads instead of 40, with
headings and bullets still legible at 760 px per slide.

---

## One content note specific to psychiatry

**Preserve diagnostic criteria exactly as the source states them**, including the number of symptoms
and the duration thresholds — *two weeks* for a depressive episode, *six months* for GAD, *one
month* versus *six months* for schizophrenia. **MCQs are built out of those numbers**, and an
approximate paraphrase destroys the question. This is the general rule from `START-HERE.md` §10
("preserve medical terminology exactly"), and psychiatry is where it bites hardest.

Where the bank's criteria and the lecture's disagree — DSM-5 versus ICD-11 is a common cause — **key
it as the bank prints it and note the discrepancy in the explanation**, per §4(b). Do not take it to
the user.

---

## First actions

1. Create `progress\resume-neuro.md`.
2. Render **pages 1–12** of `neuropsychiatry & neurosurgery qb.pdf` to the scratchpad at `-r 130`.
   Read every one. **Quote the path — the `&` will otherwise split the command.**
3. From those pages establish and **write down**: the cover and true bank identity; **the PDF-page
   to book-page offset**; how the book is divided — **specifically whether neurology, psychiatry and
   neurosurgery are separate sections, and whether question numbering restarts at each**; how many
   questions per page; **whether questions and answers are on separate pages, and how far apart**;
   whether explanation boxes are printed.
4. **⚠️ IF NUMBERING RESTARTS PER SECTION, YOUR IDS MUST CARRY A SECTION TOKEN** — `npqb-ps1-1`
   versus `npqb-nr1-1` — or psychiatry Q1 collides with neurology Q1. This exact trap cost real
   rework in ENT, whose book restarts at each of its three sections. **Settle it before writing a
   single entry.**
5. Find and transcribe the **contents page** into your resume file as a page map — then treat its
   counts as unreliable and its page ranges as reliable, which is how ENT's behaved.
6. Work the first topic end to end: render → transcribe verbatim into `content\neuro\qb-pages\` →
   within-bank sweep → write entries → splice → run the validator → update your resume file.
   **Then repeat.** Do not batch five topics of reading before writing any.
