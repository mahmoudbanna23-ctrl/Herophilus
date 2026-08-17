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

### ✅ `L20) Retinal detachment and degenerations` — READ 2026-08-17, cache 473 → 2,376 w

**Not triageable** — pages 17–32 return **zero characters, not even a running header**, so the
whole deck went to contact sheets (9 sheets at 110 dpi, 14 image reads instead of 33). It sits with
`L1,2`, not `L7,8`.

**⚠️ AND IT IS THE FIRST DECK THAT DOES NOT DELIVER ITS OWN TITLE.** Pages 17–32 are sixteen
**byte-identical clip-art landscape** pages — content stops at page 16, and **the "degenerations"
half of the lecture is never taught.** There is no slide on lattice, snail-track, paving-stone,
retinoschisis, PVD or white-with-pressure anywhere in the file. The deck is also built on a re-used
commercial template: page 2 carries a leftover sidebar reading *"GROWTH MARKETING PLAN"*.

What the render recovered that no text tool could: **two whole rasterised tables** (sl.9's
differentiation table — retinal surface **corrugated → RRD · smooth/taut → TRD · smooth/bullous →
ERD**; sl.11's symptoms table), **six labelled diagrams**, the nine-layer retinal abbreviation stack
(NFL·GCL·IPL·INL·OPL·ONL·ISRC·OSRC·RPE with ILM and OLM), and sl.10's own rasterised title naming
**proliferative** DR where the prose says only "advanced". Nine garbled labels are transcribed
`[sic]`; ⚠️ *"Choroid accuromatic macusis"* **has no plausible reading and must not be treated as a
real term.** The deck contains **no percentage, no incidence, no interval, no dose, and no eponym.**

### ⚠️ Owed a visual read — 12 decks remaining, **660 pages** (was 14 decks / 726; `L9` and `L20` are read)

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

### Calibration read — `L9) lacrimal system.`, all 33 pages, 2026-08-16

Read end to end as nine four-up contact sheets at 110 dpi, to convert the 726-page estimate from a
guess about *cost* into a measurement of *value*. It found a **fourth deck pattern**, and the most
valuable one:

**A labelled-diagram deck.** Not rasterised prose, not an atlas — diagrams whose teaching lives in
their labels and their result tables. From two sheets alone:

- **p.3** — the tear film's three layers **with thicknesses**: lipid 0.1 µm, water 8 µm, mucin 0.2 µm.
- **p.4** — the accessory glands labelled by eponym: **Krause** (circled by the lecturer), Wolfring,
  Manz, Zeis, Moll, Meibomian, against superior/inferior fornix and bulbar/tarsal conjunctiva.
- **p.18** — **Jones I**, three outcomes mapped to three diagnoses: positive recovery in the nose =
  patent system · negative = lower duct obstruction *or* atony of the sac · negative = upper
  canalicular stenosis.
- **p.19** — **Jones II**, the same again for lacrimal duct obstruction, atony of the sac, common
  canalicular obstruction and canalicular stenosis.
- **p.20** — prose on contrast dacryocystography that did not extract either.

**Numbers, eponyms and a result-to-diagnosis table are exactly what MCQs are built from**, and
`pdftotext` returned **33 words for the whole deck — one per page.** `op-lac` was sitting on the
600-word floor with all of this invisible behind it.

**So the four patterns, and what each is worth:**

| Pattern | Example | Extractable | Worth reading? |
|---|---|---|---|
| Rasterised prose slides | `L24`, `L13,14` | ~0 | **yes — richest** |
| Labelled diagram deck | `L9` | ~0 | **yes — eponyms, numbers, tables** |
| Photo atlas | `L27,28` (part) | ~0 | triage first |
| Text sufficient | `L37`, `L15,16` | full | no render needed |
| **⚠️ THE CAPTION DECK — added 2026-08-17** | **`L19.1`, `L19.2`** | **full** | **no render, but DO NOT TRUST TERM 1** |

**⚠️ THE FIFTH PATTERN, found writing `op-ret`, and it is the one that fools the numbers.**
`L19.1` and `L19.2` extract **completely** — and what extracts is a **caption set**, not prose:
photographs with two-to-five-word legends. Words per non-blank line measure **4.18** and **4.06**,
against the ENT prose benchmark of 5.4 and the ~2.0 that trips §14.1's diagram-deck correction — so
**neither triggers the correction, and both badly understate their own teaching.**
*"Microaneurysms usually temporal to fovea"* is five extracted words carrying a sign, its location
and a diagnostic criterion. **A caption deck needs no render and still needs the question term, or
the entity floor, to set its budget.** ⚠️ And two slides inside these "text-sufficient" decks are
image-only: `L19.2` line 325 *"Grading of arteriolosclerosis"* and line 377 *"Staging of active
retinopathy of prematurity"* are **bare titles over rasters** — the ROP stages are simply not in
the text layer, though the zones, clock hours and outcome figures around them are.

**Three of the four are worth the render.** That is the opposite of the paediatrics finding, where
most blank pages were uncaptioned radiographs and triage discarded ~90 % of them.

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

---

## What writing the first twelve chapters taught — findings, 2026-08-17

Kept here rather than in `MEMORY.md`, which is capped at 200 lines. **Read this section before
briefing any ophthalmology chapter.**

**Splitting. Forecast, then split, then write — never split after printing.** Three splits so far:
`op-orbit` was split *after* it printed at 14 pp, which is the expensive way; `op-cornea` and
`op-cat` were forecast and split *before* a word was written. `op-cat` was costed at ~4,370 w /
**~18 pp** as one chapter and printed at **9 + 8** as two. Choose the seam from the content, state
why *that* seam and not the two nearest alternatives, and prefer the seam **no question straddles**.
⚠️ **A split is not finished when the chapter is split — refile the questions in the same pass**,
driven by the theory `qs` links. Both earlier splits left theirs behind (12 wrong-chapter links,
found and fixed 2026-08-17).

**Measurement. The estimator misses in BOTH directions here, so print the chapter.** `op-glauc`
estimated 10.8 and printed **12** (low, the direction that accepts an over-long chapter);
`op-va` estimated 10.8 and printed **9**; `op-insid` estimated 10.9 and printed **9**. ⚠️ **Two
body-word definitions are in circulation** — whether `Src:` lines count — differing by ~12 w per
section. **CANONICAL = `W(s.body)` over every section, `Src:` INCLUDED**, which is what `vth.js`
and every ENT/paediatrics figure used. A disagreement of roughly 12 × sections is a definition
gap, not a stale header.

**Headers. Do not let an agent write a measured number into its file.** The eleventh header fault
landed here (`op-va` claimed 2,331 words and read 2,596 — the gap being the size of the one
section it was writing when it died). `op-trauma` answered it by **stating no numbers at all** and
leaving the re-measure command in the header instead; `op-systemic`, `op-insid` and `op-cat` copied
it, and the last two reported counts that **reproduce from disk to the word**. That is the
standard: the agent reports counts to the hub, the hub measures and writes the number in.

**Register rows. Five ways a row has now been wrong** — over-specified · absent from the deck ·
wrong deck · **wrong slide** (`op-pupil` put the cataract stages on slide 20; slide 20 names two
lens states, they are on slide 21) · and **circular** (`op-orbit` deferred the thyrotoxic picture
to `op-systemic` while `orb-6` already carried the slide whole). ⚠️ **Verify a row's SECOND clause
too** — *"chapter X carries only Y"* is itself a claim, and that is the one nobody was checking.
A row that cannot be delivered is **reported undeliverable with the evidence, never quietly filled
and ticked** (`aniridia`/Sturge–Weber: one hit across 27 decks, and it is two photo captions).

**⚠️ A DECK'S TITLE DOES NOT BOUND ITS CONTENT — grep the module, not the deck list.** Twice now:
`L35,36) Chronic visual loss` carries **a whole third cataract lecture** (~450 w) giving the drug,
metabolic and intrauterine causes that `L17` and `L18` never print — both cataract decks name
congenital cataract repeatedly and neither says what causes it. And **lens-induced glaucoma had no
home in the module at all** (`phacomorphic`/`phacolytic` return zero across the whole theory file;
neither glaucoma deck prints them). The corollary is the standing rule, which has now paid fifteen
times: **read the slide — and grep the misspelling — before declaring a gap.** `L25` prints
*"Vossious"*, so `Vossius` returns zero; `L35,36` prints *"Amsilar"*.

**⚠️⚠️ THE MOST IMPORTANT FINDING IN THE MODULE: A TEXT LAYER CAN BE WORD-COMPLETE AND STILL BE
WRONG, AND "NO ORPHAN WORDS" IS NOT A VALID CHECK.** Two "text-sufficient" sources lost **structure**
rather than words, two chapters reconstructed the lost structure from the surrounding prose, and a
targeted render on 2026-08-17 **contradicted both reconstructions on points of fact.** Both merged
chapters were corrected the same day. This is the reason the render happened, and the reason it must
happen again wherever a reconstruction is standing in for a table.

- **`L37) Red Eye` Tables 4-1 and 4-2 are IMAGES** inside a 5,104-word extraction that is otherwise
  exact to the word. `rdm-5` rebuilt them from the prose and got **two cells and the whole column
  set wrong**: it graded **photophobia in acute glaucoma "marked"** when the book grades it **1 of
  3 — the LOWEST of the three dangerous eyes**, against 3 in both iridocyclitis and keratitis; it
  gave **discharge as "watery" in acute glaucoma and iridocyclitis** where the book prints **`−`
  for both**; it collapsed the book's **bacterial / viral / allergic** conjunctivitis columns into
  one, losing the tables' main teaching; and it invented episcleritis and subconjunctival-haemorrhage
  columns the tables do not have. It also dropped six whole rows — **itching** (2–3, allergic only,
  the allergic discriminator), **preauricular node** (viral only), corneal epithelial disruption,
  shallow anterior chamber, proptosis, the graded **exudation** scale (bacterial 3 > viral 2 >
  allergic 1) — and the entire per-row **"referral advisable if present"** column. ✅ `rdm-5` now
  carries both tables verbatim; the chapter went 10 pp → **11**, and the growth is the book's own
  grid, not padding. **Table 4-3, recorded in `rdm-10` as a genuine loss, was RECOVERED — five rows
  of patient instructions restated nowhere else in the chapter.**
- **`L33,34) The White Eye` p.19 is not five figure captions at all** — it is **a stack of five
  overlapping cards** over one leukocoria photo, of which **only the top card is visible in a
  render**; the other four are physically covered and were recovered by **draw-order extraction**
  (`pdftotext -raw`), which separates them cleanly. `wht-8`'s reconstruction had the five identities
  and their order right but **cross-contaminated three phrases** — "extensive" belongs to Coats not
  ROP, "variable extent" to PFV not Coats — and its defect note **wrongly accused the deck of
  misspelling "preretinal"**: the deck prints **epiretinal**, and *"piretinal"* was the interleave
  splitting `e|piretinal`. ✅ All corrected.
- **⚠️ AND THE HUB'S OWN VERIFICATION WAS THE THING THAT FAILED.** The reconstruction was accepted
  because the fragments reassembled **with no orphan words left over**. That test proves only that
  **every word landed somewhere** — never that it landed in the right sentence. **Do not accept a
  reconstruction on a word-conservation argument. Render the page.**
- The same deck's clinical-picture chart also had **misaligned columns**; the render confirms the
  three corneal transparency requirements are the cornea's, and adds two structural corrections —
  the path is **Cornea → Transparent →** the three, and *Membrane / Lens / Retro-pupil* are the three
  children of **Pupil**, not siblings of Transparent. `wht-3`'s content was right as written.

**⚠️ The dead-agent rule held twice more.** Two agents died on the shared session limit at the same
step — the §14.3a layout pass — and **both files were complete on disk** (fifth and sixth
recovery). Validate before rewriting, always. The hub finished the layout pass they died in;
across 20 anchor fixes the body counts moved by **1 and 5 words**, which is the evidence that only
emphasis changed.

---

### ⚠️⚠️ CORRECTION TO THE TABLE ABOVE, FOUND BY WRITING `op-va` (2026-08-17)

**The Decks column is an assignment, not a coverage guarantee, and for `op-va` it was wrong.**
`op-va` is listed against `L3,4` alone. **None of its sixteen questions is answerable from
`L3,4` lines 1–171 — not one.** They test visual acuity, the pinhole, the low-vision ladder,
visual fields and colour vision; `L3,4`'s own transcriber wrote the reason on line 418, that
those are in **`L1,2`** and *"this deck begins AFTER visual acuity and deliberately does not
repeat it."* Written from `L3,4` alone the chapter would have scored **0/16** on the §14.2 floor.

- **`L1,2` lines 438–613 (866 w) are now COUNTED to `op-va`** — the VA and visual-field
  examination block. Lines 390–437 are **cited only**: they restate `L3,4` sl.2–4, already inside
  `op-va`'s 963. **`op-intro` and `op-vissym` must not re-count 438–613**; lines 1–389 and
  614–659 are unspent and remain theirs.
- **So `op-va`'s real budget was 963 + 866 = 1,829, not 963** — and it wrote 2,596 (+42 %),
  printing at **9 pages**, inside the shape. The overrun was forecast entity-by-entity before
  writing, per §14.1.
- **The general lesson: read a chapter's questions against its assigned deck before briefing
  it.** Two more chapters in this table share a deck with a neighbour (`op-intro`/`op-vissym` on
  `L1,2`), and the same mismatch could sit in either.

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

## ⚠️ `L37) Red Eye.pdf` IS NOT A LECTURE — it is a BOOK CHAPTER

Found 2026-08-16 while chasing a clipping candidate. The file is **"CHAPTER 4 — The Red Eye"**,
opening with an **OBJECTIVES** box and a *Relevance* section, running as continuous prose with
**twenty sequential `FIGURE 4-n` plates**. It is the **only one of the 27 files** with that
numbering — every real slide deck returns zero.

- **`op-red` must cite it as a book chapter, not as a lecture.** Same situation as paediatrics'
  `Vitamin deficiency Rickets.pdf`, which turned out to be Madkour's Chapter 3.
- It is also **the densest source in the module at 154 w/pp**, and that is *why* — book prose, not
  slide bullets. Its 5,104 words make `op-red` the largest naive ceiling in Ophthalmology, so the
  chapter will need real compression to reach the ~13-page shape.
- **The book it came from is not identified.** The style (a primary-care audience, objectives,
  *Relevance*) reads like an AAO-family primer, but nothing in the file names it — **ask rather than
  guess** if a precise citation is ever needed.

---

## Cross-checks owed before writing starts

- **✅ REPEATED-FILLER PAGES — CLEAN NEGATIVE ACROSS ALL TEN OWED PDFs, done 2026-08-17.
  DO NOT RE-RUN THIS.** `L20)` turned out to spend **16 of its 33 pages on ONE byte-identical
  clip-art landscape** (sha1 `9eb89306…`, 99 KB each), which is why its "degenerations" half is
  never delivered. If that pattern generalised, the 726-page debt would be materially overstated,
  so every owed deck was rendered at **40 dpi and hashed page by page** — hashes only, so no page
  entered any context. Result: **`L1,2` 136/136 unique · `L7,8` 88/88 · `L24` 78/78 ·
  `L27,28` 70/70 · `L13,14` 41/41 · `L29` 35/35 · `L22` 25/25 · `L30` 23/23 · `L21` 20/20`**, and
  only **`L31,32` carries any duplication at all — 2 pages, one run of 3.** **The 726-page
  estimate STANDS; `L20` was a one-off, not a pattern.** ⚠️ Note the limit of the instrument: it
  finds **byte-identical** pages only. A filler page bearing a slide number would not match, so
  this is evidence about *repeated* filler, not about *empty* pages — the blank-share table above
  remains the measure for those.
- **✅ MediaBox clipping — CLEAN NEGATIVE, done 2026-08-16** (`<scratch>\clip-oph.js`).
  **1,192 pages across all 27 PDFs; one candidate, and it was not clipping.** `L37) Red Eye` p.10
  ends on *"…are common as well as"*, but the **rendered page ends there too** and the sentence
  resumes with *"photophobia."* at the top of p.11 — because it is a book page, not a slide.
  **Zero real cases in the module. Do not re-run this.**
- **⚠️ The `.pptx` cache check is MOOT for `L5` and `L6`, and running it would be a false comfort.**
  In paediatrics the XML pass and the PDF render captured different text with neither a superset, so
  the check earned its place. Here both decks carry **5–8 words a slide**: whichever extractor wins,
  the answer is nearly nothing, and a passing check would only certify that a complete transcription
  of an almost-wordless deck is complete. **These two need a visual read, not a diff** — the same
  conclusion the emergencies agent reached in paediatrics, where both cache checks passed on the two
  most image-dependent decks in that module.
- **`examiner-patterns.md` does not exist for this module and must not be manufactured** from 138
  questions. ENT's was built from 1,720.
