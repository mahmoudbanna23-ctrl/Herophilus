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

### ✅⚠️ SUPERSEDED 2026-08-24 — THE VISUAL-READ DEBT IS BEING CLEARED, AND THE TABLE BELOW IS THE OLD ESTIMATE

**Read the block immediately below before the table.** The table that follows it is preserved as the
2026-08-17 estimate; the live status is here.

Every deck was swept for **characters per slide** (healthy prose here runs 500–3,000; anything under
~200 was opened and looked at). That found **eleven decks and 574 slides**, not twelve decks and 660
pages — and, more usefully, it found **five decks that were on no owed list anywhere because their
extractions had SUCCEEDED and were simply near-empty**: `L1,2` (146 c/s), `L22` (97), `L30` (66),
`L29` (63), `L21` (30). **A failure list built from failure signals is not a coverage measurement.**

| Deck | Slides | Status 2026-08-24 |
|---|---|---|
| `L9) lacrimal system.` | 33 | ✅ **DONE — 41,013 B.** Tear-film thicknesses, drainage measurements, valves of Krause and Hasner, gland eponyms, **Jones I and Jones II with their result-to-diagnosis mappings** |
| `L13,14) Uvea & Sclera` | 41 | ✅ **DONE — 42,819 B.** Uvea slides 2–27, sclera 28–40; the four-way anatomical classification, episcleritis/scleritis in full, the phenylephrine blanching table |
| `L24) Ocular tumors.` | 78 | ✅ **DONE — 71,943 B.** ⚠️ **a composite of at least three decks**, PowerPoint's own footer numbers restart and repeat across the seams; **49 of 78 slides are photographs with at most a one-line caption**, and **slides 46–63 carry no caption and no case number at all** |
| `L1,2) Ocular Anatomy…` | 136 | in progress — 80 of 136 written, resuming |
| `L6) Conjunctiva` (`.pptx`) | 66 | in progress — 40 of 66 written, resuming |
| `L27,28) Problems of External Appearance` | 70 | in progress — 20 of 70 written, resuming |
| `L5) Eyelid disease` (`.pptx`) | 47 | in progress — 20 of 47 written, resuming |
| `L29) Sqint I` | 35 | owed |
| `L22) Pupil and Visual pathway` | 25 | owed |
| `L30) Squint II` | 23 | owed |
| `L21) Optic Nerve` | 20 | owed. ⚠️ **NOT a watermark** — `resume-ophtho.md` said *"22 blank lines, a title and one stray line"* and that is wrong; all 615 bytes are real content, and it is a **complete extraction of a sparse picture deck** whose teaching is in the fundus photographs |

**✅ The two `.pptx` decks are solved.** PowerPoint is installed, so they export to PDF with
`$p.SaveCopyAs("$dest.pdf", 32)` — **`SaveCopyAs`, never `SaveAs`**, which rebinds the open
presentation — and then render like any other deck. 47 and 66 pages out, matching the slide counts,
both source mtimes unchanged. ⚠️ PowerPoint reported `slides=0` for the second and then died with
*"The RPC server is unavailable"* **after** writing a complete, correct PDF: **check the artifact on
disk, not the COM return value.**

**The tool is `<scratch>\oph\sheet.js`** — renders a whole deck and tiles it four-up at 110 dpi in one
command, **burning the slide number into each cell**, which is what lets a transcription be checked
against the deck. Four independent agents confirmed legibility on their first sheet.

---

#### The 2026-08-17 estimate, preserved

> ⚠️ Owed a visual read — 12 decks remaining, **660 pages** (was 14 decks / 726; `L9` and `L20` are read)

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

✅ **Step 3 opened 2026-08-17 at a stated cost of 119 pages** — `L31,32` (31) and `L7,8` (88),
read together. Debt after them: **541 pages over 10 decks.** `L7,8` was taken first among the
large decks because it gates `op-refract` and its **38 questions, 28 % of the module**; `L1,2`
(136 pp, un-triageable) still gates `op-intro` + `op-vissym`.

---

## ⚠️ `op-acute` OWNS ALMOST NONE OF ITS OWN CASES — pre-brief scope map, 2026-08-17

Established by grep across `theory.ophtho.js` **before** briefing the chapter, which is the check
that stopped `op-ret` writing itself in a circle. `L31,32` is a **case deck**: four vignettes, four
`Diagnosis` lines, four `Management` slides. Three of the four diagnoses are already written in
full elsewhere:

| Case | Diagnosis | Already written? |
|---|---|---|
| 1 | Central retinal artery occlusion | ✅ **fully owned** by `op-ret-vasc/vsc-9` (303 w, all three artery occlusions compared); cherry-red spot also in `rd-1`, `rd-9`, `trm-7` |
| 4 | Rhegmatogenous retinal detachment | ✅ **fully owned** by `op-ret/rd-1`…`rd-10`; the curtain, floaters, photopsia and RAPD are all there |
| 3 | Anterior ischaemic optic neuropathy | ❌ **a name only** — `sys-5` and `vsc-11` list it as a hypertension association, nothing more. **`temporal arteritis` and `ESR` return ZERO module-wide**, so the GCA presentation and workup are unwritten |
| 2 | Papillitis | ❌ **one mention**, inside `sys-11` (ocular syphilis). No entity account anywhere |

**So `op-acute`'s real payload is:** the approach itself (painful/painless, and the deck's
vignette → examination → diagnosis → management drill) · **AION + giant cell arteritis** ·
**papillitis** · **the management of all four**, which is exactly what the text layer withholds and
the render must recover · and the non-red entries of `L1,2`'s ocular-emergencies grid.
**It must NOT re-write CRAO's or RRD's signs — it points at `vsc-9` and `rd-*`.** A chapter whose
four cases are three-quarters written elsewhere is a duplication trap, not a small chapter.

### Register-row census for the fourteen chapters still unwritten — counted 2026-08-17

Counted from §14.5's receivers column, so no brief has to re-derive it. **A question count does not
predict what a chapter has been handed** — `op-ret` proved that at twelve rows against five
questions, and `op-lac` and `op-uvea` below have one question each.

| rows owed | chapters |
|---|---|
| **5** | `op-uvea` ⚠️ *and its deck `L13,14` extracts **zero characters over 41 pp with no cache at all** — the module's most blocked chapter* |
| **4** | `op-lac` |
| **3** | `op-onc`, `op-squint` |
| **2** | `op-intro`, `op-vissym`, `op-lid`, `op-conj`, `op-sclera`, `op-acute` |
| **1** | `op-refract`, `op-neuro`, `op-appear` |
| 1, already closed | `op-ant` |

**Every row above is open except `op-ant`'s.** Verify each row against its named source *and* the
receiving chapter — **including the row's second clause** — before briefing. **TEN fault shapes** are
now documented in §14.5: over-specified · absent from the deck · wrong deck · wrong slide ·
circular · correct row / wrong receiver · right payload, wrong line · **stale, because a third
chapter delivered it** · **donor under-stating its own coverage** (the mirror of the over-stated
absence, and it makes the receiver write a duplicate) · **and, 2026-08-18, the LIVE POINTER TO AN
EMPTY DESTINATION** — the reference resolves, the destination chapter exists, and the payload is
still absent. **The hardest to detect, because following the pointer succeeds.**

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

---

## Measured printed length of every written chapter — moved here from `MEMORY.md` 2026-08-17

`MEMORY.md` is capped at 200 lines, so the per-chapter list lives here. All eighteen were printed
**individually** in the headless-Chrome harness on 2026-08-17, US letter at the machine default —
the app's `@page` declares no `size:`, so every figure below is mutually comparable.

| pp | chapters |
|---|---|
| **12** | `op-glauc` ⚠️ *the only chapter the ÷240 estimator UNDER-predicted (est. 10.8)* · `op-conj` |
| **11** | `op-red-mgmt` (10 → 11 when the rendered Tables 4-1/4-2 replaced a reconstruction) · `op-ret-vasc` · `op-neuro-optic` · `op-squint` · `op-lid` · `op-lac` |
| 10 | `op-systemic` · `op-ret` · `op-refract` · `op-uvea` |
| 9 | `op-orbit` · `op-cornea` · `op-cornea-surg` · `op-va` · `op-trauma` · `op-insid` · `op-cat` · `op-red` · `op-acute` |
| 8 | `op-pupil` · `op-cat-surg` · `op-white` · `op-refract-astig` · `op-neuro-motil` |
| 7 | `op-orbit-mass` · `op-ret-dr` · `op-sclera` · `op-neuro` |

**279 pages over 30 chapters, mean 9.3** — against ENT's 8.6 and paediatrics' 8.3, and just outside
the ~10-page operative ceiling. Nothing has reached the 13-page hard shape since `op-orbit` was
split.

**⚠️ THE ESTIMATOR'S WORST TWO MISSES IN THE MODULE ARE THE BOOK-SOURCED CHAPTERS, AND BOTH LANDED
ON 2026-08-18.** `op-lid` was forecast at **16.1 pp** by ÷240 and printed **11**; `op-lac` at
**15.6** and printed **11** — over-predictions of **5.1 and 4.6 pages**, against the module's
previous worst of 5. The running list of over-predictions is now **5 · 5.1 · 4.6 · 2 · 2 · 2.3 ·
2.1 · 1.5 · 3**, with exactly one under-prediction (`op-glauc`).

**The operational consequence, and it changed a decision today.** The agent that wrote both
chapters had `op-lac` at 3,735 words and was on its last line — *"Now the `op-lac` compression"* —
when it died on the session limit. **Printing the chapter showed there was nothing to compress.**
Had the run survived, a chapter that measures 11 pages would have been cut to satisfy a forecast
that was wrong by nearly five. **Print before you compress; the estimator is a planning tool and
has never once been allowed to clear a chapter.**

---

## ✅ `L31,32) Acute visual Loss` — READ 2026-08-17, cache 426 → 2,773 w

All 31 pages rendered at 110 dpi and read as two-up sheets; p8 and p28 re-read at 170 dpi.
**A sixth deck pattern, and the emptiest source in the module.**

### ⚠️⚠️ THE EMPTY-SLIDE DECK — four "Management" slides that are literally blank

Each is the single word **Management** in large type on a bare white slide: no bullet, no drug,
no dose, no time window, no figure. **This is not an extraction failure** — `pdftotext` already
had all four. Three render **byte-identical** (sha1 `536c5c81…`, 13,775 B); the fourth differs
**only** by its own misspelling *"Managament"*. The `DFE` slide is the bare abbreviation, never
expanded, over one unlabelled widefield fundus photograph.

**So the deck poses four cases and answers none of them.** `op-acute` is therefore the module's
purest §4 gap-fill: the managements exist nowhere in the file, and under the standing ruling they
are **answered and tagged, never declared**.

### ⚠️ A NEW EXTRACTION FAILURE MODE: TEXT DRAWN AS VECTOR OUTLINES

**p22 returns zero characters in every `pdftotext` mode, and `pdffonts` reports NO FONT ON THE
PAGE** — the visible white text is drawn as outlines, not set as type. The only image object is a
355×239 fundus photo. It reads: *"On dilated retinal examination, the right optic disc is swollen,
and there area [sic] flame-shaped hemorrhages around the disc."*

**That is Case 3's diagnostic finding.** In the text layer the case jumps from confrontation fields
straight to the AION diagnosis — **the one sign that makes it diagnosable was invisible, and no
word-count or blank-page test would have flagged it**, because the page is not blank and its
neighbours are dense. Add to the list of things a text layer can silently lose: **tables · columns ·
draw order · and now glyph outlines.** `pdffonts` per page is the cheap detector.

### The rest of the answers

- **No filler.** All 31 pages hashed; the only identical set is the three Management titles, and
  those are real slides, not padding. Every other page is text, a clinical photo, or the QR.
- **There is no second lecture in the file.** Four cases (p3–10, p11–18, p19–24, p25–30), one
  title, one *Thank you*, no divider, and identical font usage across all four runs. `L31`/`L32`
  is one half-lecture. **The classification on p2 — "1. Painful / 2. Painless" — is never expanded
  and never applied, and no painful case is presented.**
- **Zero tables, zero labelled diagrams**, and not one photograph carries an arrow, caption, scale
  bar or label. One eponym in the whole deck (Marcus Gunn pupil). No dose, percentage, incidence or
  time-to-treatment figure anywhere.
- **The deck prints no slide numbers at all** — the mapping to PDF pages is asserted from an
  unbroken structure, and the cache says so rather than implying a printed agreement.
- Source's own spellings, confirmed by render and marked `[sic]`: *red reex* (p27), *Managament*
  (p24), *there area* (p22).

### ⚠️ INTERVIEW ITEM, BATCHED — the QR code on p18

**p18 is a full-slide QR code**, the only one in the deck, with no text and no printed URL, standing
exactly where Case 2's papillitis management belongs. It was decoded offline from the native
1024×1024 image — 25×25 modules, version 2, EC level M, mask 2, **all 16 Reed–Solomon syndromes
zero, so the read is exact and not a guess**: `https://scan.page/4t7P1B`.

**It has NOT been visited and nothing from it is in the cache.** `scan.page` is a redirect service,
so the destination is unknown until it is resolved. **Ask the user before fetching it** — it is an
external service reached from inside the course material, and the ruling belongs to them. Batch it
with the other open interview item (whether `L23` is Chapter 9 of the same AAO-family primer that
`L37` is Chapter 4 of).

---

## ✅ `L7,8) Refractive errors` — READ 2026-08-17, cache 1,545 → 7,004 w

All 88 pages read as 44 two-up sheets, plus six 150-dpi per-page renders and one 300-dpi crop.
The module's highest-value render: it gates **38 questions, 28 % of ophthalmology**.

### ⚠️⚠️ THE READING AGENT RECOMMENDED "DO NOT SPLIT", AND ITS OWN TRANSCRIPTION REFUTED IT

It argued one chapter on the grounds the deck holds *"only 1,540 words"*. **That is the
`pdftotext` count — the number the render was commissioned to replace.** Measured from the
transcription it had just written, the slide blocks hold **4,439 words**, i.e. ~18 printed pages as
one chapter, against a 10-page target and a 13-page hard shape.

**Rule: when a read finishes, the deck's word count is the CACHE's, never `pdftotext`'s.** The
seduction is that the old number is right there in the header, already measured, and it is exactly
the quantity the whole job existed to discard. This is the second time in this module a correct
measurement has been made and then not used — `op-va`'s header did the same with its own body count.

**Split decided BEFORE writing, seam at p61 (Astigmatism):**

| id | title | pages | deck words | est pp |
|---|---|---|---|---|
| `op-refract` | Errors of refraction — the optics, myopia and hyperopia | p1–p60 | 2,682 | ~11 |
| `op-refract-astig` | Astigmatism, presbyopia and prescribing | p61–p88 | 1,757 | ~7 |

p61 was chosen over the **more even** p53 seam (2,245/2,194) because it is the *entity* boundary:
myopia and hyperopia share the deck's own Causes → Presentation → Treatment scaffold. **Project
total 141.**

### What the render actually bought

- **The text layer was word-complete and STILL WRONG — for the third time in this module.** Four
  structural repairs, all invisible to any word count: **p71 — LASIK and PRK both branch from
  *corneal* surgery**, where the interleaved text put PRK under lenticular (a factual inversion);
  p46 — Central/Peripheral belongs to the chorioretinal degenerations alone; p64 — Regular and
  Irregular branch from *corneal* astigmatism; p75 — the presbyopia table's three groups recovered.
- **`-raw` and `-layout` buy nothing here** — 1,540 / 1,541 / 1,541 words, all three modes agree.
  Do not re-run them on this deck.
- **The 57 %-blank figure from the title probe was WRONG.** Exactly **one** page returns zero
  characters (p65). Every other page returns at least its title. The probe measured *low words*,
  not *no words*.

### ⚠️ A THIRD KIND OF BLANK PAGE — the broken graphic

**p65 is neither a text slide nor filler: it is a solid green circle with two lines**, a graphic
that failed to render, sitting exactly where a meridian/axis diagram belongs. **It is why the deck
teaches no axis notation at all** — which matters, because a spectacle prescription is written with
an axis and the deck prints a prescription form on p82. So the module's blank-page taxonomy is now:
**text slide · byte-identical filler · broken graphic.**

### Defects and inconsistencies in the deck itself, recorded not corrected

- `ACCOMMDATION` [sic] ×5 · `Aniseikonia` (p83) vs `Anisiekonia` (p84) · **p36 and p37 both
  numbered "I."** · p42 drops an "or" · p61 unclosed parenthesis.
- **High myopia is 6 D on p45 and "4 to 5 D" on p75.** Both cited, neither disputed.
- **Three astigmatism types on p31/p64; five on p66/p67.**
- **p85–p87 are titled "Presbyopia / Treatment" and their content is ANISOMETROPIA.** Presbyopia
  treatment is delivered once, on p81.
- **`pdfinfo` disagrees with the slide**: metadata Author *"amr mohamed mahmoud elhady"*, Title
  *"5th year Ophthalmology"*; the title slide credits **Tamer Massoud MD, PhD**. Recorded, unresolved.
- Unreconciled by the deck: axial length **22–24.5 mm** in prose (p42/p53) against **23.5 mm** in
  the p27 figure.
- `[illegible]` and not guessed: the lower 2–3 lines of the p38 acuity chart, two labels on p34.

### What the deck never teaches, and the questions that need it anyway

**No retinoscopy or autorefraction procedure exists in 88 pages** — p36/p37/p38 are photographs
with zero procedure text — yet `opqb-t2-85` and `opqb-t2-97` both test objective refraction.
**No drug name, no percentage and no worked refraction anywhere.** PRK, LASIK, phakic IOL, clear
lens extraction, ICR and keratoplasty are **named and none described** — and they must not be
described here either, because `cor-21`…`cor-24` already own refractive surgery. `keratotomy`
returns zero in the deck and appears in a question distractor.

### ⚠️ Question coverage was PROBED, and the probe was a false alarm — which is the useful part

A term-coverage probe (`<scratch>\qcover.js`) scored the 38 questions against the new cache at a
mean of **71 %**, with five questions under 50 %. **Looked at, every one was correctly filed**: the
missing terms were vignette English (*mother, brings, worried, complains*) and **distractor**
vocabulary — Ishihara plates, cover–uncover, exophoria, radial keratotomy — none of which is the
answer. **A low coverage score is a flag to LOOK, never a verdict**, and this is the counter-example
to `op-va`, where the same instinct found a real mismatch. Keep the probe; keep the second step.

---

## ⚠️⚠️ USER RULING, 2026-08-18 — THE BOOK IS THE MAIN REFERENCE, AND THE LAST DECKS ARE COMPILATIONS

Verbatim: *"the last few PPTs are just collections parts from the previous chapters so ignore them
of you've ever found something like that again, your main refrence is the book"*.

**This supersedes the "every deck, measured" table above as the module's planning basis.** Read
this section before doing anything with an ophthalmology source.

### What it means, and what it does not

- **Forward-looking.** The user's own words are *"if you've ever found something like that again"*.
  Nothing already written is unwound. The four compilation decks are `L31,32) Acute visual Loss`,
  `L33,34) The White Eye`, `L35,36) Chronic visual loss` and `L37) Red Eye` — all symptom-based, all
  recombining organ-based material taught earlier.
- **Already built on them: five chapters, 48 sections, 12,901 body words, 46 printed pages** —
  `op-red`, `op-red-mgmt`, `op-white`, `op-insid`, `op-acute`. They stay: they are chapters of the
  syllabus in `modules.js`, symptom-led revision is exactly how the material is examined, and each
  was written against the questions. **But they carry only 3 of the module's 138 questions between
  them**, which in hindsight was the signal — a deck that recombines earlier teaching generates few
  questions of its own.
- **The evidence already agreed with the ruling before it was given.** `L37` is literally
  **"CHAPTER 4"** of a book. `L31,32` poses four cases whose four diagnoses — CRAO, papillitis,
  AION, RRD — all belong to earlier decks, and answers none of them: **all four of its "Management"
  slides are blank.** That is what a revision compilation looks like from the inside.

### The book

`Semester 8\Opthalmo\Theoritical\Books\ophthalmology.pdf` — **274 pages, A4, 218 MB, image-only**
(`pdftotext` returns 0 characters over the first 40 pages). Never opened before 2026-08-18.
Being mapped now; the contents go to `content\ophtho\book-map.md`.

**⚠️ It is bigger than the Read limit (100 MB), so it is rendered in page ranges to the scratchpad
and read inside a subagent, exactly like the decks.**

### What this changes about the remaining twelve chapters

The render debt was **574 pages across nine decks and two `.pptx` files**, several of which return
zero characters and have no cache at all (`L13,14` at 41 pp for `op-uvea` + `op-sclera`; `L24` at
78 pp of `CamScanner` for `op-onc`). **The book is 274 pages and covers all of it in one coherent
source.** Do not re-plan the reading order until `book-map.md` exists — but expect the answer to be
*read the book's relevant chapter*, not *grind the deck*.

**The deck is still the authority on what was TAUGHT and what is EXAMINABLE** — the chapter list in
`modules.js` comes from the lecture series, and a question is answered from the course before the
book. What changes is where the *content* comes from when a deck is blind.

---

## ⚠️ USER RULING, 2026-08-18 — DO NOT ADD CHAPTERS FOR THE THREE DECKLESS BOOK CHAPTERS

Asked and answered: *"Don't add them."* **Settled. Do not re-propose it.**

The three are **12 Vitreous (3 %)**, **16 Paediatric Ophthalmology (4.5 %)** and **20 Drugs and the
Eye (3 %)** — the only book chapters with no lecture deck behind them. The case for adding them was
put once, with the measured holes (`asteroid hyalosis`, `synchysis scintillans`, `ophthalmia
neonatorum`, `timolol`, `latanoprost` all return zero module-wide) and the exam weight. The answer
was no.

**Why the ruling is coherent, so nobody re-litigates it:** the app's chapter list is the **lecture
series**, and the lecture series is what the examiners taught. The book is the reference for
*content*, not the authority on *scope*. A chapter the course never gave is not on the user's
revision plan, and inventing one would put unexamined material in front of them at the cost of the
27 September deadline.

**What this settles:** ophthalmology stays at **33 chapters**, project total **141**. Twelve remain,
and the book reading for them is **127 pages**, not 159.

**What it does NOT mean:** if a book chapter being read for a legitimate app chapter happens to
carry one of these facts where it naturally belongs — a vitreous sign inside the retina chapter, a
drug inside glaucoma — it is written there, cited, as it always would have been. The ruling forbids
**new chapters**, not facts that fall inside existing ones. Do not go hunting to smuggle the
material in either; that would be reversing the decision by other means.

---

## Book chapters read — running log

| Ch | Title | Printed | pp | Weight | Cache words | Feeds |
|---|---|---|---|---|---|---|
| 1 | Examination of the Eye | 2–44 | 43 | 3 % | 20,920 | `op-intro`, `op-vissym`, `op-ant` |
| 3 | Orbit | 56–61 | 6 | 3 % | 2,401 | `op-appear` · overlaps `op-orbit` |
| 4 | Lacrimal System | 62–69 | 8 | 3 % | 4,709 | ✅ `op-lac` (11 pp) |
| 5 | Eyelids | 70–81 | 12 | **6.5 %** | 7,244 | ✅ `op-lid` (11 pp) |
| 6 | Conjunctiva | 82–95 | 14 | **6.5 %** | 6,871 | ✅ `op-conj` (12 pp) |
| 15 | Squint | 196–203 | 8 | 3 % | 4,906 | ✅ `op-squint` (11 pp) |
| 17 | Malignancies of the Eye and its Adnexa | 214–217 | 4 | 1.5 % | 1,937 | `op-onc` |
| 16 | Paediatric Ophthalmology | 204–213 | 10 | 4.5 % | 5,001 | `op-onc` (RB) — ⚠️ ruled NOT to become a chapter |
| 19 | Ocular Manifestations — **§(11) malignancy only** | 236–253 | 18 read / 2 transcribed | **10 %** | 2,079 | `op-onc` (metastases, lymphoma, leukaemia, Kaposi) |
| 7 | Sclera | 96–102 | 7 | 3 % | 3,030 | ✅ `op-sclera` (7 pp) |
| 10 | Uveal Tract | 130–141 | 12 | 3 % | 4,672 | ✅ `op-uvea` (10 pp) |
| 14 | Neuro-ophthalmology | 178–195 | 18 | **10 %** | 8,819 | ✅ `op-neuro` 7 · `op-neuro-motil` 8 · `op-neuro-optic` 11 |

### ⚠️⚠️ CHAPTER 5 PROMISES MALIGNANCIES IN ITS OWN OBJECTIVES AND NEVER TEACHES THEM

Its opening flowchart lists **Malignancies**; pages 70–81 contain **no BCC, no SCC, no sebaceous
carcinoma, no melanoma and no lid reconstruction.** The single oncological clause in the chapter is
*"exclude an underlying malignancy (meibomian gland carcinoma)"* inside the chalazion entry.

**So the eyelid-tumour payload — including the register row that sends `op-red`'s lid tumours to
`op-lid` — must come from ch.17 (printed 214–217, four pages), which is still unread.** This is the
second source in this module to under-deliver its own stated scope, after `L20`'s "degenerations".
**A chapter's own objectives list is a claim, not an inventory.**

Entropion and ectropion likewise name **no operation** — four types each, and no procedure.

### ⚠️ THE BOOK DOES NOT SUPERSEDE `L9` — the two teach DIFFERENT tests

`op-lac` is owed four register rows promising **Jones I and Jones II**, the **tear-film layer
thicknesses** and the **accessory-gland eponyms**. Checked against ch.4 by the reader:

- **`Jones` appears nowhere in the chapter.** The book teaches **four different drainage tests** —
  Regurge, fluorescein dye disappearance, lacrimal probing, lacrimal irrigation (p.66) — with a full
  result→diagnosis map including the hard/soft stop and the three causes of a positive regurge.
- **The three tear-film layers are there (p.63) with sources and functions, and NO thicknesses.**
- **Krause is absent from both chapters.** **Wolfring** survives once, as a *figure label only*, in
  the ch.5 eyelid cross-section beside the glands of Zeis and Moll.

**Consequence:** those three payloads exist nowhere except the **dozen highlights of the 2026-08-16
`L9` calibration read, preserved in this file's §"Calibration read"** (lines with the 0.1 / 8 /
0.2 µm thicknesses, the Krause–Wolfring–Manz–Zeis–Moll labels and both Jones mappings). They are
real, they were read from the deck, and the transcription was never written. **`op-lac` writes the
book's four tests as the primary account and may cite the L9 highlights as the lecture's own
version — but the L9 33-page re-read is NOT retired by the book.** It is simply no longer urgent,
because the book covers the topic the exam is set from.

### Other findings from ch.4 and ch.5

- **⚠️ The single most valuable figure-only item so far:** ch.5 p.76 prints the **rule for choosing a
  ptosis operation — levator resection where levator function is good, frontalis sling where it is
  poor — ONLY in the figure headers.** The prose says merely *"Surgical (levator resection,
  frontalis sling, etc)"*. Same shape on p.78, where the trichiasis operation exists only as two
  hand-drawn panels over the word "surgery". **Three chapters in a row have now hidden a decision
  rule in a figure.**
- **Figure numbering is broken INSIDE a chapter, not just between chapters:** `Fig (4-1)` and
  `Fig (5-1)` **do not exist**, and `Fig (5-12)` prints **two pages after** `Fig (5-13)`. The
  book-map's correction stands and hardens: **never use a figure number as an index.**
- **Ch.4 contradicts itself on where the nasolacrimal duct drains** — *"behind the inferior
  turbinate"* (p.63), *"under the inferior turbinate"* (p.66), while DCR connects the sac to the
  **middle meatus** (p.67). All three transcribed verbatim, none reconciled — the chapter owes the
  reader a note, not a silent fix.
- **Ch.5 prints five numbers in its entire twelve pages** and no drug dose, duration or follow-up
  interval anywhere. Expect `op-lid` to need tagged gap-fills for anything quantitative.

### ⚠️⚠️ THE BOOK SAYS "SKIP IN FINAL" AND THE QUESTION BANK ASKS IT FIVE TIMES

Found 2026-08-18 reading ch.15 (Squint). The chapter ends its department material at printed p.201
— *"This is the end of strabismus in the department book"* — and p.202 opens *"The next two pages
are from tutorial .. Skip in Final"*. **The whole examination content of the chapter is inside those
two pages**: the corneal light reflex, the cover test, the cover–uncover test, the alternate cover
test. Patching, the only amblyopia treatment the chapter names, is tutorial-marked too.

**Five of `op-squint`'s six questions test exactly that material** — `opqb-t1-43` (first assessment
in a child whose eye turns in), `t1-44` (a nasal light reflex), `t1-45` (cover-test
interpretation), `t1-54` (a phoria is best detected by…), `t2-94` (the light reflex estimates the
angle). Only `t1-53` (concomitant strabismus) comes from the non-tutorial part.

**The ruling for this module: write tutorial-marked material IN FULL and at full weight, record the
book's tag on it, and tell the reader both facts.** The tag is data about what the book says — it
is not permission to omit. Where the two authorities disagree, the reader sees the disagreement.

**This also retires a tempting shortcut.** The `(Tutorial)`/`(T)` marker looked like a free way to
cut length in a module that keeps overrunning its budget. It is not: the marker is the book's
opinion about its own department's paper, and **the question bank is the better proxy for what gets
asked.** Never use the marker as a compression rule.

### A sixth Tutorial-marker form, and a seventh source defect

- **Marker form six is a WHOLE-PAGE-RANGE announcement in running prose** (ch.15 p.202), not a box,
  tab, arrow, parenthetical or inline clause. Six physical forms now, and only careful page-by-page
  reading catches this one — a section-level scan would have marked those two pages "examination
  content" and missed the instruction entirely.
- **Ch.6 reprints its own p.91 Tutorial referral box, UNMARKED, as a cell of the p.94 DD table** —
  so the identical content is skip-in-final in one place and core in the other. Recorded in both.
- Ch.6's DD grid has **no chlamydial column** although the chapter teaches adult chlamydial
  conjunctivitis; and p.91's figure prints the trachoma serovars **"A, B, & C"** where p.92's prose
  prints **"A, B, Ba and C"**. Both held, neither corrected.
- **Ophthalmia neonatorum is not taught in ch.6** — one mention inside a serovar figure, no
  organisms, no timing, no prophylaxis, no treatment — and it returns **zero** across the module.
  It is a conjunctivitis, so it is supplied and tagged inside `op-conj` rather than chased into
  ch.16, which the user has ruled out of scope.

### ✅ `ch.1 Examination of the Eye` read — and it is the book's largest by a factor of two

**Printed 2–44 = PDF 4–46, 43 pages** (the contents page says 1–44; printed 1 is the contents leaf
itself, and the opener carries footer `2`). **19,888 words of teaching — ~460 a page**, against
6,847 for neuro-ophthalmology. Weight only 3 %, and it is the sole book source for **three** app
chapters.

| Part | Printed | Words |
|---|---|---|
| 1 History / patient complaint | 3–6 | 1,540 |
| **2 Eye anatomy** | 7–16 | **4,066** |
| 3 Age-related changes | 17 | 430 |
| **4 Ocular examination** | 18–38 | **9,876** |
| 5 DDx of common presentations | 39–42 | 1,220 |
| 6 When to refer an apparently normal patient | 43 | 416 |
| **7 Ocular emergencies** | 44 | **2,074 — one page** |

**p.18 is the chapter's spine:** a master **ten-step ordered sequence** — VA → field → inspection →
AC depth → pupils → EOM → IOP → lens clarity → fundus → additional tests — and pp.19–38 are those
steps in order.

### ⚠️ 19,888 WORDS INTO THREE CHAPTERS, AND NOTHING CUT — because part 4 is already written

At this module's measured **~300 words per printed page**, writing it 1:1 would be **66 printed
pages**. The resolution is not compression and it is not scope-cutting: **`op-va` (14 sections) and
`op-pupil` (10 sections) already carry almost the whole of part 4**, written from `L3,4`. Between
them: the examination order and tools · acuity, the fraction, the charts, the six-metre method ·
the pinhole · the low-vision ladder and the 3/60 blindness figure · the pre-verbal child · fields
and Amsler · colour vision and Ishihara · the lid/lacrimal/orbit checklist · lid eversion · cornea
and fluorescein · sclera and iris · lens and pupil colour · AC depth and contents · pupil
assessment, anisocoria, light reactions, the swinging flashlight test and RAPD · IOP and digital
estimation · applanation vs indentation · the six EOMs and their nerves · alignment testing · the
red reflex · direct ophthalmoscopy.

**So the three chapters write what the BOOK ADDS and cross-reference the rest.** Genuinely absent
module-wide and therefore new: **`tumbling` E and the `optokinetic` drum** (both zero), the p.18
master sequence, Schiötz's own numbers, paediatric acuity by age, near vision at 30–40 cm.

**The rule this makes explicit, and it applies to every remaining chapter: measure the source
against what is ALREADY WRITTEN before declaring a budget problem.** A 66-page forecast became a
three-chapter job the moment the overlap was counted, and no fact is lost either way.

### The split as briefed

| id | owns | pages | source w | target w |
|---|---|---|---|---|
| `op-intro` | history · **anatomy** · age changes · the p.18 sequence · the book's additions over `op-va`/`op-pupil` · referral thresholds | 2–6, 7–18, 31–37, 43 | ~6,700 | ~3,200 |
| `op-vissym` | **the 12 visual and 7 non-visual symptoms** · the complaint template · **Tables (1-1)–(1-4)** · **ocular emergencies** | 3–6, 39–42, 44 | ~4,500 | ~3,200 |
| `op-ant` | the eight anterior-segment structures · slit lamp · lid eversion · AC-depth shadow test · fluorescein · **and whatever the module leaves** | 9–10, 19, 23–24, 38 | ~2,500 | ~2,400 |

### What ch.1 does NOT print, checked because five sources promised it
**`Hirschberg`** (the test is there, the eponym is not) · **`Schirmer`** · **`Krause`** ·
**`Jones I/II`** · **tear-film layers or thicknesses**. Those five belong to ch.4 if anywhere, and
ch.4 prints none of them either — so the `L9` calibration highlights remain their only record.
**Indirect ophthalmoscopy is explicitly excluded by the book**, and the slit lamp gets **three
bullets in 43 pages** with no illumination techniques at all — a real gap in the chapter that owns
it, to be supplied and tagged.

### Two more self-contradictions, held not fixed
**Tropicamide is 1 % on p.33 and 0.5 % on p.34.** **The cardinal positions are 6 in one place and 9
in another** (`pup-8` writes six). Both recorded in place, cited to their pages.

---

## ✅ Book ch.3 (Orbit) and ch.17 (Malignancies) — READ 2026-08-18, ten pages, 4,338 cached words

Caches: `content\ophtho\book\ch03-orbit.txt` (2,401 w) · `ch17-malignancies.txt` (1,937 w).
Both boundaries confirmed by the one-page-past check and **neither moved** — PDF 64 is the ch.4
opener, PDF 220 the ch.18 opener. No blank, filler or broken page in either chapter.

### ⚠️⚠️ CH.17 PAYS ONE OF THE FOUR REGISTER ROWS WAITING ON IT — AND THE OTHER THREE FAIL FOR A REASON WORTH KNOWING

Four §14.5 rows pointed at ch.17. It is four pages long, and **two of its five top-level headings
are banner headings whose entire content is an italic pointer to another chapter.**

| Row owed to `op-onc` | Verdict |
|---|---|
| **Lid malignancies** (from `op-lid`) | ✅ **PAYS IN FULL** — BCC, SCC and sebaceous carcinoma each with site, morphology, spread and treatment, plus the N.B. box on biopsying a recurrent chalazion. The chapter's substantial content. |
| **Orbital tumours** (from `op-orbit-mass`) | ❌ **CANNOT PAY.** No orbital tumour section exists. The only orbit-facing lines are SCC spreading *"via perineural infiltration into the orbit"* and Kaposi by cross-reference. **Ch.3 is no better** — three bullets, no named tumour. |
| **Metastases / lymphoma / leukaemia** (from `op-systemic`) | ❌ **CANNOT PAY.** The Metastases section is a banner and one italic line pointing at ch.19. Leukaemia appears once, as an SCC risk factor; lymphoma once, in ch.3. |
| **Retinoblastoma** (from `op-cat` + `op-white`) | ⚠️ **PAYS ONLY THINLY** — a bare banner pointing at ch.16, plus a three-row RB-vs-choroidal-melanoma comparison table. Enough for the comparison, nowhere near a section. |

**Bonus, unasked and unblocked: choroidal melanoma is paid in full** — one page plus an ultrasound
tutorial box. Commonest adult primary intraocular tumour, fair-skinned, >80 % of uveal tumours,
grey-brown dome-shaped subretinal mass within 3 mm of the disc, liver metastases.

**Depth throughout ch.17 is clinical-recognition only.** Verified absent: **all genetics** (no RB1,
no 13q, no two-hit, no hereditary/sporadic split — only *"screening of siblings/offspring
essential"*), **all staging** (no TNM, no Reese–Ellsworth, no International Classification, no
COMS), all work-up protocols, all histopathology (no Flexner–Wintersteiner rosettes, no
spindle/epithelioid typing, no BCC subtypes, no Mohs). Treatment is named at modality level with no
indications and no decision rules.

### The rule this produced

**A HEADING IN THIS BOOK IS NOT EVIDENCE THAT THE CHAPTER TEACHES THE TOPIC.** Two of ch.17's five
headings are dead pointers. Before promising that a chapter can pay a register row, read its body —
the objectives box and the heading list will both lie to you. This is the third source in the module
to under-deliver its own stated scope, after `L20`'s "degenerations" and ch.5's "Malignancies".

### Ch.3 — heavy overlap with `op-orbit`, and a real payload for `op-appear`

The chapter is globe displacements, blow-out fracture, preseptal and orbital cellulitis and a 13-row
comparison table — **exactly the `L10` territory `op-orbit` and `op-orbit-mass` were built on.**
Its contribution is **numbers and specificity**, not new topics: Hertel normal **12–22 mm**,
ceftriaxone + vancomycin + oral metronidazole for one week, **7–11 %** significant visual loss,
**17–20 %** mortality untreated, the **tear-drop sign**, amoxicillin-clavulanate for preseptal, and
the *"treat as orbital cellulitis if ≤1 year old"* rule. `op-orbit-mass` gains almost nothing —
orbital tumours are three bullets, and **the chapter prints no orbital anatomy at all**: no walls,
no foramina, no apex.

**What `op-appear` actually gets, and it is the right shape for that chapter** — clustered on p.57:

- **Pseudo-exophthalmos must be excluded**: lid retraction · contralateral ptosis · large globe in
  high myopia, each photographed. An appearance-differential, not an orbit fact.
- **The exophthalmos-vs-proptosis terminology split** — endocrine vs other aetiologies. An
  appearance term that means two different things.
- **Measuring appearance**: ruler or Hertel exophthalmometer, cornea tip to lateral orbital margin
  plane, normal **12–22 mm**.
- **Enophthalmos** and its three causes (fat atrophy — post-traumatic or senile · cicatrising tumour
  metastasis · blow-out fracture), plus the trap that **a blow-out gives early proptosis and later
  enophthalmos**.
- **Pulsating exophthalmos = carotid-cavernous fistula.**
- ⚠️ **Cosmesis is absent from the chapter**: no decompression, no oculoplastic or orbital surgery,
  no management of appearance anywhere.

### Six Tutorial markers, three physical forms — and a NEW house-style device

Ch.3 carries five, ch.17 one. Forms: a thin rectangular box beside a heading · an inline blue
parenthetical inside a bullet (`History of trauma (or surgery .. Tutorial)`) · a shaded or
blue-outlined panel whose first line is the centred blue word **Tutorial**. **No `(T)` abbreviation
appeared in either chapter** — only the full word.

**⚠️ STAR-GLYPH IMPORTANCE RATINGS — a device this project did not know existed.** Printed 58 prints
`"Blow-out" fracture : ☆☆☆`. That is a **sub-chapter-level exam-weight signal**, finer-grained than
the contents page's per-chapter percentages, and it is a planning input. **Grep every cache for `☆`.**

### Two source defects, recorded not fixed

- **Printed 217, verified at 300 dpi:** the comparison table's last cell ends mid-phrase — *"only
  the tumor depending on its"* — the completing word has overflowed the cell and is not printed. The
  prose above supplies *"size"*. Transcribed as printed, with the completion noted separately.
- **Ch.17's objectives flowchart and its body disagree**: "Metastases" is promised and delivers
  nothing; "Retinoblastoma" is not promised yet gets a heading. Both are dead pointers.

### What this means for `op-onc`

`op-onc` can now be written on **lid malignancies + choroidal melanoma**, both paid in full, with
the RB comparison table. **Retinoblastoma proper lives in ch.16 (Paediatric Ophthalmology, printed
204–213) and metastases in ch.19 (printed 236–253)** — both being read now, targeted at the tumour
content only. ⚠️ Note that **ch.16 is one of the three chapters the user ruled must not become app
chapters** — reading it for content that feeds the existing `op-onc` is consistent with both
rulings: *scope comes from the lecture series, the book is the authority on content.*

---

## ✅ Book ch.16 (Paediatric) and ch.19's malignancy section — READ 2026-08-18

Caches: `content\ophtho\book\ch16-paediatric.txt` (5,001 w, whole chapter) ·
`ch19-systemic-tumours.txt` (2,079 w, **malignancy sections only, by design**). Ch.16's boundary
confirmed by the one-page-past check (PDF 216 is the ch.17 opener) and **did not move**. All 18
pages of ch.19 were read far enough to identify each page's subject; only the malignancy pages were
transcribed in full. **This closes ophthalmology's reading debt.**

### ⚠️⚠️ A TENTH FAULT SHAPE — THE LIVE POINTER TO AN EMPTY DESTINATION

Ch.17's *"Retinoblastoma"* banner points at ch.16, and **the pointer is live: ch.16 really does have
a retinoblastoma section. It is 92 WORDS**, the upper third of printed 208, and it is **the only
retinoblastoma text in all 274 pages of the book.**

That is a different failure from ch.17's *dead* pointers, and worse to detect: following the
reference succeeds, the destination exists, and the payload is still absent. **A resolved
cross-reference is not evidence of coverage. Measure the destination, not the pointer.**

Verified absent from the entire book, having now read both chapters that could hold them:

| Retinoblastoma — what the row asked for | Printed? |
|---|---|
| **Genetics** | **NONE.** No RB1, no chromosome 13q, no two-hit. Hereditary vs sporadic appears **only as laterality** — *"Hereditable [sic] … bilateral, multifocal"* vs *"Non-hereditable (sporadic) … unilateral and unifocal"*. No inheritance pattern, no penetrance. Screening of siblings and offspring is one bullet with no protocol |
| **Staging** | **NONE of any kind** — no Reese–Ellsworth, no International Classification, no TNM, no COMS |
| **Work-up** | One line: *"U/S or CT scan may demonstrate calcified mass (present in most cases)"*. No MRI, EUA, LP, marrow or genetic testing |
| **Histopathology** | **NONE** — no Flexner–Wintersteiner, no Homer Wright, no fleurettes, no spindle/epithelioid typing |
| **Treatment** | Listed, never explained — *"radiotherapy, chemotherapy combined with laser, cryopexy, and/or enucleation"*. No indications, no salvage criteria |
| **Prognosis, incidence, age, trilateral RB, second primaries, optic-nerve or CSF spread** | **NONE** |

**So the retinoblastoma row is answered under `CLAUDE.md` §4 — filled from general knowledge and
tagged, never declared.** The book's genuine contribution here is two pages away: **the SEVEN-ITEM
RANKED LEUKOCORIA DIFFERENTIAL on printed 206** — cataract most common, RB most serious, ROP,
**PHPV/PFV**, toxocariasis, retinal detachment, Coat's. ⚠️ **`PHPV` returns ZERO across the whole
module**, so that list is a real addition to `wht-8`.

### ✅ Ch.19 §(11) pays the metastases row in full — and carries no tutorial marker

Printed 253, ~260 words, **fully examinable**:

- **Metastases** — **5 % of cancer patients at autopsy**; **choroid** the commonest site, occasionally
  optic nerve or extraocular muscle; primaries **breast and lung in adults, neuroblastoma in
  children**. No presentation, no management printed.
- **Lymphoma** — the eye is affected in **3 %**; orbital infiltration gives proptosis and limited eye
  movement; conjunctival infiltration is common; **CNS lymphoma in the elderly presenting as chronic
  steroid-dependent posterior or panuveitis = MASQUERADE SYNDROME.**
- **Leukaemia** — **over 75 %** have ocular adnexal metastases at autopsy; presents with intraretinal
  or subconjunctival haemorrhage **attributed to thrombocytopenia or anaemia, not to direct
  infiltration**.
- **Kaposi sarcoma of the eyelids**, printed 252 under AIDS — vascular skin malignancy, may involve
  palpebral or bulbar conjunctiva, **can be misdiagnosed as subconjunctival haemorrhage**.
  ⚠️ **`Kaposi` returns ZERO across the module.**
- Retinoblastoma and choroidal melanoma appear **nowhere** in ch.19.

### Found without being asked, and nothing else in the module covers it

**A third of §(11) is the ocular toxicity of cancer TREATMENT** — radiation retinopathy, cytosine-
arabinoside keratitis, vincristine optic neuropathy, and bone-marrow-transplant GVHD with
symblepharon. No register row asked for it and no other chapter carries it. It belongs in `op-onc`.

### ⚠️ THE `(T)` ABBREVIATION EXISTS — first confirmed sighting, and three new marker forms

The contents page has warned since day one that *"(Tutorial) or (T)"* means study in round and skip
in final. **Every marker found in this module until today used the full word.** Ch.16 printed 212
uses the bare **`(T)`** form inline, three times, as a bold blue `T:` after an arrow. **Grep for it.**

Three further forms, taking the known total to nine:
- **A whole paragraph in blue introduced by *"from tutorial →"*, with no box at all** (ch.16 p.212).
- **A running-text declaration governing a whole page** — ch.16 p.213 prints a dashed box reading
  *"From Glaucoma Tutorial"*, a rule, then a centred dark-red sentence: *"The Rest of the page is
  from glaucoma tutorial 'skip in final'"*.
- **A full-page black-ruled box with the instruction inside its heading** — ch.19 p.248,
  *"Additions from Tutorial (skip in final)"*.

Ch.19 also uses a **different emphasis device entirely**: the word `"important"` in quotes appended
to a heading (printed 239 and 245).

### Star glyphs: ZERO in both chapters

The `☆☆☆` rating found on printed 58 **does not recur**. It is a local device, not a book-wide
system — record it where it appears, do not plan around it.

### Figure numbering: a THIRD style, and it is partial within a chapter

Ch.19 prints **`Figure (19-1)` and `Figure (19-4)`** — the word spelled out, parenthesised — which is
neither ch.7's `Fig 7-1` nor ch.3's `Fig (3-1)`. And **only two figures are numbered across 18
pages**; everything else is plain-captioned, and the numbering is non-contiguous. Ch.16 numbers
nothing. **The variation is wider than "some chapters number and some don't": a single chapter can
number partially.**

### Two more things located, not transcribed

- **Ch.19's thyroid-eye-disease pages (printed 247–248, including a full-page tutorial box) are
  substantial**, and may be a better source for proptosis and lid retraction than the retired
  `L27,28`. `op-orbit` is already written from `L10`; this is reconciliation-pass material.
- **Ch.19 carries three large hand-drawn Arabic-annotated `"mnemonic"` panels** (GCA p.249, MS p.250,
  sarcoidosis p.251) plus an Arabic-glossed globe diagram p.243 — the "Mnemonics" the back cover
  advertises. Pictorial and untranscribable as prose; noted in place in the page map.

### Ch.16's own scope, recorded because the user ruled it must NOT become a chapter

All seven objectives branches are taught — **nothing promised and dropped**, unlike ch.5 and ch.17.
Amblyopia · the red reflex test and leukocoria · paediatric cataract · retinoblastoma ·
retinopathy of prematurity with its screening table · nasolacrimal abnormalities · ophthalmia
neonatorum · primary congenital glaucoma. **Module coverage of these is already good** —
`ophthalmia neonatorum` in `cnj-10`, `congenital glaucoma` and `buphthalmos` in `wht-4` and
`glc-16`, ROP in `wht-8` and `vsc-13`, amblyopia across fifteen sections. The chapter stays a
content source only, per the ruling.

---

## ✅✅ OPHTHALMOLOGY THEORY COMPLETE — 2026-08-18

**36 chapters · 390 sections · 95,519 body words · 331 printed pages, mean 9.2**
(ENT 8.6, paediatrics 8.3). Every chapter printed individually in the headless harness.
**138 of 138 questions reachable from theory** — 0 dead `qs` ids, 0 wrong-chapter links, 0 dead
section refs, 0 unanchored bold leads, 0 bold-led paragraphs over the 55-word cap.
`file://` boot: **0 console errors**, 854 CSS rules, 3 `max-aspect-ratio:5/4` blocks.

### The last six chapters

| Chapter | Sections | Words | Printed |
|---|---|---|---|
| `op-lid` | 11 | 3,867 | **11** |
| `op-lac` | 10 | 3,735 | **11** |
| `op-intro` *(after split)* | 7 | 2,436 | **8** |
| `op-intro-exam` *(new)* | 6 | 2,498 | **7** |
| `op-vissym` | 11 | 3,672 | **11** |
| `op-ant` | 9 | 3,006 | **8** |
| `op-onc` | 10 | 2,875 | **9** |
| `op-appear` | 10 | 2,801 | **9** |

### The eighth split, and why it was the expensive kind

`op-intro` printed **14 pp** as merged — past the 13-page hard shape — so it was split **after**
measurement, like `op-orbit` and unlike the six between them. The seam at `int-7`/`int-8` is
contiguous and near-even (2,436 / 2,498) and **no question straddles it**; halves print 8 and 7.
**The writer's proposed seam was rejected**: it cut anatomy from clinical, which meant
`int-1`, `int-2` + `int-8`–`int-13` against `int-3`–`int-7` — non-contiguous, and it would have
required reordering the chapter to achieve. **A seam that needs the chapter reordered is not a seam.**

### ⚠️⚠️ TWO REGISTER FAULTS FOUND AT THE END, AND BOTH ARE PROCESS FAULTS, NOT CONTENT FAULTS

**1. Four promises claimed a row that was never filed.** `uv-1`, `uv-8`, `uv-9` and `scl-1` each
close by telling the reader *"row filed"* / *"a row is filed to …"*. **Neither `op-uvea` nor
`op-sclera` appears as a DONOR anywhere in §14.5.** This is §14.5's own rule failing in the purest
possible way — *an unrecorded promise is a deletion* — with the chapter text asserting the record
exists. All four rebuilt from the promise wording and **marked reconstructed**, because the original
intent is unrecoverable. One (`uv-9`, masquerade malignancies) turned out **delivered anyway** by
`op-onc` — kept by luck, not by the register.

**The check that found it, and it costs seconds:** extract every chapter that opens a `|` row in
§14.5 into a donor set, then grep the theory file for `row filed` and test the claiming chapter
against that set.

**2. A row's evidence carries a timestamp.** `op-systemic`'s 2026-08-17 row recorded that
`temporal arteritis` and `ESR` return zero module-wide. **True when written** — `op-acute` and
`op-neuro-optic` did not exist yet. Both were written the next day and deliver GCA in full. Today's
`op-vissym` writer **quoted that row instead of re-running the grep**, and shipped the same
falsehood into `vis-11`, where it was caught at merge. The terms return **9 and 8 sections**.
**Re-run the check; never quote another row's finding as your own.**

### What ophthalmology still owes — all of it reconciliation, none of it writing

- **~63 §14.5 rows are ophtho's**; ~20 closed, 13 notices, **6 undeliverable**, the rest open.
- **Provenance defects, the most corrosive kind**: `va-6` tags the **WHO 3/60 definition** and the
  **CSM fixation test** as supplied when the book prints both verbatim (p.21); `pup-10`'s
  **cup-to-disc figures** are tagged supplied where the book prints different ones, sourced. The
  facts are right and the labels are wrong, which devalues every honest tag in the module.
- **Divergences held, not fixed** (each recorded in place with both citations): mean IOP **15 vs
  16 mm Hg** · C/D **0.2–0.4 refer >0.5 vs 0.3–0.5 refer >0.6** · the examination order **ten steps
  acuity-first vs six steps inspection-first** · tropicamide **1 % vs 0.5 %** on facing pages ·
  **6 vs 9 cardinal positions**.
- **`wht-8` owes the leukocoria RANKING and PHPV** from ch.16 p.206; it was deliberately not
  rewritten.
- **`L9` is read but never cached** — Hirschberg, Schirmer, Krause, Jones I/II and the tear-film
  thicknesses have no other record, and ch.1 and ch.4 print none of them.
- **Undeliverable from the book, recorded not invented**: iris melanoma as a tumour · orbital and
  lacrimal tumour biology and staging (`orb-16` stays the account) · cosmetic oculoplastic
  technique.
