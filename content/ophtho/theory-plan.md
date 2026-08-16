# Ophthalmology theory — the working plan

Written 2026-08-16 from measurement, before any chapter was drafted. Read this first.
Method lives in `progress\briefs\START-HERE.md` §14; this file holds only what is **specific to
Ophthalmology**, and the specific thing is large enough to change how the module is scheduled.

---

## The headline: the budget formula does not work in this module

§14 sets each chapter's ceiling at `max(lecture words, 25 × linked questions)`, floor 600. Both
terms collapse here:

- **The question term never governs.** 138 questions over 26 chapters is **5.3 per chapter**, so
  `25 × q` clears 600 in no chapter at all. Measured, not estimated: `0 of 26`.
- **The lecture term measures the text layer, not the lecture.** In ENT and Paediatrics that was a
  fair proxy. In Ophthalmology it is not, because a large part of the syllabus is taught on slides
  that were **saved as pictures**.

Run naively, the formula puts **eleven of twenty-six chapters on the 600-word floor** — including
`op-onc`, whose deck is **78 pages long**. That is not a small topic. It is an invisible one.

**So: the ceiling for this module is set from the deck's REAL content, which for twelve decks means
reading them first.** Do not budget an ophthalmology chapter before its deck has been read.

---

## Every deck, measured

`pdftotext -layout` over all 29 source PDFs, words counted per page, blank share at <8 words.
Source: `Semester 8\Opthalmo\Theoritical\PPT\`.

### Text layer sufficient — write from the cache (12 decks, 404 pp)

| Deck | pp | w/pp |
|---|---|---|
| `L37) Red Eye` | 33 | 154 |
| `L18) Cataract II` | 25 | 114 |
| `L15,16) Cornea` | 51 | 68 |
| `L23) Ocular manifestations of systemic diseases` | 43 | 45 |
| `L11) Glaucoma Diag, POAG` | 21 | 41 |
| `L17) Cataract I` | 28 | 36 |
| `L35,36) Chronic visual loss` | 52 | 31 |
| `L19.1) Diabetic Retinopathy` | 19 | 26 |
| `L33,34) The White Eye` | 21 | 26 |
| `L19.2) Retinal Vascular Disorders` | 43 | 25 |
| `L12) Glaucoma 2 Cong, PACG, 2ry` | 50 | 23 |
| `L26) Trauma II` | 18 | 19 |

### Already read visually — do NOT repeat (3 decks, 175 pp)

An earlier chat banked these; the cache is far richer than the text layer, which is the signature.
`L10) orbit` extracts **48 words** and its cache holds **3,671** — that gap is somebody's work.

| Deck | pp | text layer | cache |
|---|---|---|---|
| `L25) Trauma I` | 68 | 0 | 2,779 |
| `L3,4) Clinical- Ocular examination` | 59 | 0 | 2,730 |
| `L10) orbit` | 48 | 48 | 3,671 |

### ⚠️ Owed a visual read — 14 decks, **726 pages**, ~182 four-up contact sheets

| Deck | pp | w/pp | blank | triage possible? |
|---|---|---|---|---|
| `L1,2) Ocular Anatomy, Symptomatology & Basic Eye Examination` | 136 | 14.1 | 61 % | **no** — running header |
| `L7,8) Refractive errors` | 88 | 17.7 | 57 % | **yes** — real per-page titles |
| `L24) Ocular tumors.` | 78 | 1.0 | 100 % | **no** — rasterised text |
| `L27,28) Problems of External Appearance` | 70 | 0.2 | 100 % | **no** — photo atlas |
| `L13,14) Uvea & Sclera` | 41 | 0 | 100 % | **no** — rasterised text |
| `L29) Sqint I` | 35 | 6.5 | 66 % | untested |
| `L20) Retinal detachment and degenerations` | 33 | 14.1 | 76 % | untested |
| `L9) lacrimal system.` | 33 | 1.0 | 100 % | **no** |
| `L31,32) Acute visual Loss` | 31 | 14.3 | 61 % | untested |
| `L22) Pupil and Visual pathway` | 25 | 8.3 | 68 % | untested |
| `L30) Squint II` | 23 | 7.5 | 61 % | untested |
| `L21) Optic Nerve` | 20 | 2.3 | 90 % | **no** |
| `L6) Conjunctiva` (`.pptx`) | 66 | 5.2 | — | untested |
| `L5) Eyelid disease` (`.pptx`) | 47 | 7.8 | — | untested |

**⚠️ The two `.pptx` decks are as blind as the worst PDFs, and nothing flagged it** — they extract
cleanly, so they never appeared in a failure list. Counted from the archive (a `.pptx` is a zip;
`ppt/slides/slide*.xml` are the slides, `ppt/media/` the pictures): `L5` is **47 slides carrying 127
media files** for 365 cached words — **7.8 words a slide** — and `L6` is **66 slides, 73 media
files, 343 words — 5.2 a slide.** Two and a half pictures per slide is not a deck that teaches in
prose. `op-lid` and `op-conj` therefore sit on the 600-word floor for the same reason `op-onc` does.

**This is the largest single cost remaining in the project.** Paediatrics owed two patches of a few
dozen pages between them; Ophthalmology owes **726 pages** before its chapters can be budgeted
honestly — 613 in PDFs plus those 113 slides.

---

## ⚠️ A BLANK PAGE HERE IS USUALLY A TEXT SLIDE, NOT A PICTURE

This is the finding that separates Ophthalmology from Paediatrics, and it inverts the paediatrics
assumption. There, a zero-word page was a photograph and the question was whether the photograph
taught anything. Here, **three of the four blind decks probed turned out to be full prose slides
rendered as rasters** — the richest pages in the module, invisible to every text tool.

- **`L24) Ocular tumors.`** prints `CamScanner` on all 78 pages and nothing else. Rendered, p.5 is a
  *Corneal tumors* slide carrying a heading, a lead sentence and three defined bullets — Nevus,
  Primary Acquired Melanosis (PAM), Malignant Melanoma. **One extractable word for a slide of solid
  teaching.** The deck went through a phone scanner, so every page is a photograph of text.
- **`L13,14) Uvea & Sclera`** extracts **zero characters over 41 pages**. Rendered, p.12 is the
  four-way anatomical classification of uveitis — anterior / intermediate / posterior / panuveitis,
  each with its definition. `op-uvea` and `op-sclera` currently have **no cache at all**.
- **`L27,28) Problems of External Appearance`** is the exception that proves the rule: p.25 is a
  genuine four-panel surgical photo plate of an oculoplastic flap, scanned from a book. Parts of
  this deck really are an atlas, so it is the one owed deck where triage may cut the render list.

**Consequence: never conclude an ophthalmology topic is thin because its deck is empty.** Render a
sample page before believing any density number in the table above. The three probes cost four
renders and overturned the budget for five chapters.

---

## Triage works on some decks and not others — test before trusting it

The paediatrics trick — print the low-word pages' titles, render only the ones promising a
criterion, classification or algorithm — depends on the pages carrying a per-page title. Measured on
the three largest owed decks:

- **`L7,8) Refractive errors` — triage works.** Its blank pages carry real titles: *Scatter*,
  *Diffraction*, *Refractive Index*, *Types of lenses — Cylindrical lenses*, *Trial of the measured
  refraction*. The list is rankable.
- **`L1,2) Ocular Anatomy` — triage fails.** Eighty of its 83 blank pages carry the identical
  running header *"Anatomy & Physiology"* and nothing else. There is no per-page signal, so the
  whole 136-page deck goes to contact sheets.
- **`L24) Ocular tumors.` — triage fails.** Every page reads `CamScanner`.

**So: run the title probe per deck (`<scratch>\ophtriage.js`), and let each deck's own answer decide.
This is the third module in a row where a threshold or trick carried over as dogma would have been
wrong.**

---

## Chapters, decks and question counts

Ceilings below are the naive formula's, and are **provisional for every chapter drawing on an owed
deck** — which is most of them. The `est pp` column uses the project's `pages ≈ words ÷ 240`.

| Chapter | Name | Decks | lecture pp | text w | Q | naive ceiling |
|---|---|---|---|---|---|---|
| `op-red` | Red Eye | L37 | 33 | 5,104 | 1 | 5,104 |
| `op-cat` | Cataract | L17 + L18 | 53 | 3,938 | 1 | 3,938 |
| `op-orbit` | Orbit | L10 ✅banked | 48 | 3,671 | 24 | 3,671 |
| `op-cornea` | Cornea | L15,16 | 51 | 3,511 | 5 | 3,511 |
| `op-trauma` | Trauma | L25 ✅banked + L26 | 86 | 3,127 | 0 | 3,127 |
| `op-va` | VA, Field, Lid, Lac, Orbit | L3,4 ✅banked | 59 | 2,730 | 16 | 2,730 |
| `op-pupil` | Pupil, EOM, Fundus | L3,4 ✅banked | 59 | 2,730 | 12 | 2,730 |
| `op-glauc` | Glaucoma | L11 + L12 | 71 | 2,086 | 5 | 2,086 |
| `op-ret` | Retina | L19.1 + L19.2 + **L20**⚠️ | 95 | 2,065 | 5 | 2,065 |
| `op-intro` | Introduction, History | **L1,2**⚠️ | 136 | 1,961 | 13 | 1,961 |
| `op-vissym` | Visual Symptoms | **L1,2**⚠️ | 136 | 1,961 | 3 | 1,961 |
| `op-systemic` | Systemic Diseases | L23 | 43 | 1,925 | 0 | 1,925 |
| `op-insid` | Insidious Visual Loss | L35,36 | 52 | 1,606 | 0 | 1,606 |
| `op-refract` | Errors of Refraction | **L7,8**⚠️ | 88 | 1,605 | 38 | 1,605 |
| `op-white` | The White Eye | L33,34 | 21 | 642 | 0 | 642 |
| `op-squint` | Squint | **L29 + L30**⚠️ | 58 | 415 | 6 | *floor* |
| `op-lid` | Lid | **L5** (`.pptx`)⚠️ | 47 sl | 365 | 3 | *floor* |
| `op-conj` | Conjunctiva | **L6** (`.pptx`)⚠️ | 66 sl | 343 | 1 | *floor* |
| `op-neuro` | Neuro-ophthalmology | **L21 + L22**⚠️ | 45 | 264 | 1 | *floor* |
| `op-onc` | Oncology | **L24**⚠️ | 78 | 83 | 0 | *floor* |
| `op-lac` | Lacrimal System | **L9**⚠️ | 33 | 38 | 1 | *floor* |
| `op-appear` | Problems of Appearance | **L27,28**⚠️ | 70 | 11 | 0 | *floor* |
| `op-uvea` | Uvea | **L13,14**⚠️ | 41 | 0 | 1 | *floor* |
| `op-sclera` | Sclera | **L13,14**⚠️ | 41 | 0 | 0 | *floor* |
| `op-acute` | Acute Visual Loss | **L31,32**⚠️ | 31 | 449 | 2 | *floor* |
| `op-ant` | Anterior Segment | **none** | 0 | 0 | 0 | *floor* |

⚠️ = draws on a deck owed a visual read, so the ceiling is not yet knowable.

### Things in that table that need a decision, not a guess

- **`op-ant` "Anterior Segment" has no deck of its own.** Same shape as `ent-sinuscomp`, which was
  written with no dedicated slide by greping ~50 terms across the module first. Its material is
  presumably spread across the cornea, uvea and glaucoma decks — **confirm by greping before
  writing, and say in the chapter where the content came from.**
- **`L3,4) Clinical- Ocular examination` serves two chapters** (`op-va`, `op-pupil`) and
  **`L1,2` serves two** (`op-intro`, `op-vissym`). Per §14.1 rule (4), **count the deck by line
  range against each chapter — deferring and counting are opposites**, and a deck billed twice
  inflates both budgets.
- **`op-refract` holds 38 questions**, by far the module's largest question base (28 % of all 138),
  against a deck that is 57 % blank. It is the one chapter where both the question floor and the
  visual-read debt bite at once. **Write it after its deck is read, not before.**
- **`op-orbit` holds 24 questions and its deck is already banked** — so it is the cheapest
  substantial chapter in the module and a good first one to run.

---

## Suggested order

1. **`op-orbit`, `op-va`, `op-pupil`, `op-trauma`** — all four draw on banked visual reads. No render
   cost, and `op-orbit` + `op-va` + `op-pupil` carry 52 of the module's 138 questions between them.
2. **The twelve text-sufficient decks** — `op-red`, `op-cat`, `op-cornea`, `op-glauc`, `op-systemic`,
   `op-insid`, `op-white`. Straight writing, no render.
3. **The owed decks, largest first**, each preceded by its title probe. `L1,2` (136 pp) and
   `L7,8` (88 pp) are the two that gate four chapters between them.
4. **`op-ant` last**, once every neighbouring chapter exists, so its scope is what the others left.

**Do not start step 3 without saying out loud how many pages it is going to cost.** 613 pages is
real time, and the user's Ophthalmology exam is **27 September**.

---

## Cross-checks owed before writing starts

- **Check every `.pptx` cache against `pdftotext -layout`.** `L5) Eyelid disease` and
  `L6) Conjunctiva` are the module's only `.pptx` files, and in paediatrics the XML pass and the PDF
  render captured **different** text with neither a superset — `14) Puberty` was 33 % PDF-only.
  Neither has been checked here.
- **Run the MediaBox-clipping scan** (`<scratch>\clip-scan.js`). `pdftotext` honours the MediaBox and
  drops overflowing text silently, mid-sentence; the cache-completeness check cannot see it because
  both sides of that diff are pdftotext. It found 2 real cases in 2,874 paediatric pages.
- **`examiner-patterns.md` does not exist for this module and must not be manufactured** from 138
  questions. ENT's was built from 1,720.
