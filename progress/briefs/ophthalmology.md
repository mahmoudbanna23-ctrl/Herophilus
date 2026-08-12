# Module brief — OPHTHALMOLOGY

**Read `progress\briefs\START-HERE.md` first.** It holds the method, the file boundaries, the
schema, the sweep and the validator. This file holds only what is specific to Ophthalmology.

---

## Your identifiers

| | |
|---|---|
| `module` value | **`ophtho`** |
| Your data file | **`app\data\questions.ophtho.js`** — array `Q_OPHTHO` |
| Your cases file | `app\data\cases.ophtho.js` — array `C_OPHTHO` (exists, empty) |
| Your notes | `content\ophtho\qb-pages\` |
| Your resume file | **`progress\resume-ophtho.md`** — create it in your first hour |
| Your image token | `q-op-…` — e.g. `q-op-gg-44.jpg` |

**Current state: 0 questions.** Everything here is new work.

---

## Your banks, in the order to work them

Three exist. **The page arithmetic decides the order** — measured 2026-08-12 with `pdfinfo`.

| Order | Bank | File | Pages | Notes |
|---|---|---|---|---|
| **1st** | **Grade Gain** | `Semester 8\Opthalmo\Questions\ophthalmology qb.pdf` | **185** | Id prefix **`opqb-`**. ENT's equivalent held ~1,080 questions in 185 pages |
| **2nd** | **House** | `Semester 8\Opthalmo\Questions\ophthalmology MCQ.pdf` | **126** | Id prefix **`opmcq-`**. ⚠️ Its filename says "MCQ" but **its cover reads *Dr. HOUSE in …*** — identify by the cover, never the filename |
| **stretch only** | Endpoint | `Semester 8\Opthalmo\Questions\Opthalmology endpoint.pdf` | **2,442** | Id prefix `opep-`. **Do not start this** unless both compact banks are finished and the user says so |

**Why that order:** ENT's endpoint file ran **3,075 pages for 697 questions** — 4.4 pages per
question. Grade Gain ran **185 pages for ~1,080** — 0.17 pages per question. The compact banks are
roughly **25× more productive per page read.** With the exam close, they are where the value is.

**⚠️ Confirm each bank's identity by rendering page 1 before assigning `bank`.** In ENT,
`ENT QB.pdf` turned out to be Grade Gain and `ophthalmology MCQ.pdf` is House — neither is
guessable from its name.

---

## Your 26 chapters

Every question's `chapter` must be exactly one of these strings.

| id | Title |
|---|---|
| `op-intro` | Introduction, History |
| `op-va` | VA, Field, Lid, Lac, Orbit |
| `op-ant` | Anterior Segment |
| `op-pupil` | Pupil, EOM, Fundus |
| `op-lid` | Lid |
| `op-conj` | Conjunctiva |
| `op-refract` | Errors of Refraction |
| `op-lac` | Lacrimal System |
| `op-orbit` | Orbit |
| `op-glauc` | Glaucoma |
| `op-sclera` | Sclera |
| `op-uvea` | Uvea |
| `op-cornea` | Cornea |
| `op-red` | Red Eye |
| `op-cat` | Cataract |
| `op-ret` | Retina |
| `op-neuro` | Neuro-ophthalmology |
| `op-systemic` | Systemic Diseases |
| `op-onc` | Oncology |
| `op-trauma` | Trauma |
| `op-appear` | Problems of Appearance |
| `op-squint` | Squint |
| `op-acute` | Acute Visual Loss |
| `op-white` | The White Eye |
| `op-insid` | Insidious Visual Loss |
| `op-vissym` | Visual Symptoms |

**⚠️ THIS LIST OVERLAPS ITSELF DELIBERATELY, AND YOU MUST NOT INVENT A RULE FOR IT.** The syllabus
teaches the same material twice — once by **anatomy** (`op-lid`, `op-lac`, `op-orbit`, `op-cornea`,
`op-ret`) and once by **presenting complaint** (`op-red`, `op-white`, `op-acute`, `op-insid`,
`op-vissym`). `op-va` compounds it by naming five regions in one title.

**The rule: file by what the QUESTION tests, not by what organ it mentions.** A question asking
*"which of these causes a painful red eye"* is `op-red` even though the answer is uveitis;
a question asking *"the commonest complication of anterior uveitis"* is `op-uvea`. **Where a
question genuinely straddles two, assign a primary and NOTE THE SECONDARY in the explanation.
Do not silently guess.**

Record your filing decisions in `progress\resume-ophtho.md` as you go, so the second bank is filed
the same way as the first.

---

## Your lecture cache — 25 files, already extracted

`content\ophtho\lectures\*.txt`. **Check it before rendering anything, and LIST THE DIRECTORY BEFORE
CITING A FILENAME** — citing one from memory has been wrong three times in ENT.

```
L1,2) Ocular Anatomy, Symptomatology & Basic Eye Examination     L21) Optic Nerve
L5) Eyelid disease                                               L22) Pupil and Visual pathway
L6) Conjunctiva                                                  L23) Ocular manifestations of systemic diseases
L7,8) Refractive errors                                          L24) Ocular tumors.
L9) lacrimal system.                                             L26) Trauma II
L10) orbit                                                       L29) Sqint I
L11) Glaucoma Diag, POAG                                         L30) Squint II
L12) Glaucoma 2 Cong, PACG, 2ry                                  L31,32) Acute visual Loss
L15,16) Cornea                                                   L33,34) The White Eye
L17) Cataract I                                                  L35,36) Chronic visual loss
L18) Cataract II                                                 L37) Red Eye
L19.1) Diabetic Retinopathy
L19.2) Retinal Vascular Disorders
L20) Retinal detachment and degenerations
```

**⚠️ THE NUMBERING HAS GAPS: no L3, L4, L13, L14, L25, L27, L28.** In ENT, one such gap turned out
to be a **lecture genuinely missing from the supplied material** — and `L26) Trauma II` here implies
a *Trauma I* that is not cached. **Verify against `Semester 8\Opthalmo\Theoritical\PPT\` before
concluding a lecture is missing**, then raise it with the user as a file they can supply. That is
the one kind of thing worth interviewing them about.

**Lecture slides extract cleanly with `pdftotext`** — they are Tier 1, nearly free. If you find an
uncached deck, extract and cache it rather than rendering it. If `pdftotext` returns almost nothing,
the deck is image-only: **render at 110 dpi and read FOUR-UP CONTACT SHEETS** — 10 reads instead of
40, with headings and bullets still legible at 760 px per slide. That trick was worked out in ENT.

---

## First actions

1. Create `progress\resume-ophtho.md`.
2. Render **pages 1–12** of `ophthalmology qb.pdf` to the scratchpad at `-r 130`. Read every one.
3. From those pages establish and **write down**: the cover and true bank identity; **the PDF-page
   to book-page offset**; whether the book has sections or chapters; how many questions per page;
   **whether questions and answers are on separate pages, and how far apart**; whether explanation
   boxes are printed.
4. Find and transcribe the **contents page** into your resume file as a page map — then treat its
   counts as unreliable and its page ranges as reliable, which is how ENT's behaved.
5. Work the first topic end to end: render → transcribe verbatim into
   `content\ophtho\qb-pages\` → within-bank sweep → write entries → splice → run the validator →
   update your resume file. **Then repeat.** Do not batch five topics of reading before writing any.
