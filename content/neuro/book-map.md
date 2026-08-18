# Neuropsychiatry book — structural map

Mapped 2026-08-18 by rendering the front matter in full and sampling ~26 pages across both halves.
**No page was swept; the table below is transcribed from the book's own printed contents pages, not
reconstructed from chapter openers.** Built to the pattern of `content\ophtho\book-map.md`, whose
⚠️ correction notes exist because earlier versions of it generalised from too few pages. The same
discipline is applied here: every "the book always / never …" line is marked as an observation with
its sample size, never as a rule.

## Identity, as printed

| Field | As printed | Where |
|---|---|---|
| Cover title | `NEUROPSYCHIATRY` (single line, white on a black stethoscope-tube lozenge) | PDF p.1 |
| Cover author | `By/` / `ASM MINDS` | PDF p.1 |
| Inside title | **Not printed.** There is no title page. The contents leaf heads itself `NEUROPSYCHIATRY BOOK`. | PDF p.3 |
| Section title pages | `NEUROLOGY` / `ASM MINDS TEAM` (PDF p.11) and `PSYCHIATRY` / `ASM MINDS TEAM` (PDF p.188), each with a quotation — Francis Crick and Mel Robbins respectively | PDF p.11, p.188 |
| Publisher / team | `ASM MINDS`; back cover carries two logos, `ELITE BOOKS, ELITE MINDS` / `MINDS` and `ASM MiNDS` | PDF p.292 |
| Year | **Not printed.** | — |
| Edition | **Not printed.** No copyright page, no preface, no ISBN, no edition statement anywhere. | — |
| Back cover | `FOLLOW US STAY ALARMED!` + QR, then `DON'T FORGET TO PURCHASE OUR BOOKS IN` over three shelves of 15 ASM MINDS titles (incl. this book and a `NEUROSURGERY & NEUROPSYCHIATRY QB BANK — GRADE GAIN edition`) | PDF p.292 |
| File | `Semester 8\Neuro\Theoritical\Book\neuropsychiatry.pdf`, 207,252,571 bytes |
| Pages | **292 PDF pages**, A4 (595.26 × 841.86 pt), PDF 1.3, produced by **Haru Free PDF Library 2.0.8c**, ModDate 2026-02-23 |
| Text layer | **None, over all 292 pages.** `pdftotext` on the whole file returns 292 bytes — one newline per page, zero characters. Image-only scan, confirmed across the entire book (not just the first 40 pp). |

## ⚠️ The HEALIX hypothesis — tested, and it does NOT transfer

The producer string (`Haru Free PDF Library 2.0.8c`), the A4 trim and the zero text layer are
identical to `ophthalmology.pdf` = *"OPHTHALMOLOGY WITH TUTORIALS", HEALIX TEAM*. **That is where the
resemblance stops. This is a different publisher's book — `ASM MINDS`, not HEALIX** — and the shared
producer string means only that both were scanned or assembled with the same free library. Treat the
producer string as evidence of a scanning pipeline, never of a publisher.

Each of the four carried-over claims, tested:

| HEALIX feature | Holds here? | Evidence |
|---|---|---|
| Contents page with a **`Relative weight in %`** column summing to 100 | **NO — refuted.** | The contents (PDF pp.3–10) has three columns: `Lecture` · `Page No.` · `Barcode`. **No weight column, no percentages, nothing resembling an exam-weight statement anywhere in the front matter.** ⚠️ **There is no printed exam-weight basis in this book.** The ophthalmology budgeting method that leaned on the book's own percentages has no equivalent here. |
| **`(Tutorial)` / `(T)`** markers, with a governing note on the contents page | **NO — not found.** | The contents page prints no such note (the sister book's note lives exactly there). No marker of any kind was seen in the ~26 pages read. ⚠️ **This is "not found in 26 of 292 pages", not "proved absent"** — if a marker turns up mid-chapter later, it is new information, not a contradiction. |
| Chapter openers: blue rule, eye glyph, **`OBJECTIVES:` flowchart** | **PARTLY — the blue banner holds, the OBJECTIVES block does not.** | Four openers read (neuro ch.4, 9, 12, 15; psych ch.1, 3, 6, 11). Every one opens with a coloured banner carrying the chapter number, and **every one goes straight into content — no objectives block on any of them.** |
| **`PDF page = printed + 2`** | **NO — refuted.** | It is **+11 in Neurology and +12 in Psychiatry**. See below. |

## Printed-page to PDF-page offset — ⚠️ IT CHANGES ONCE

**Neurology: PDF = printed + 11. Psychiatry: PDF = printed + 12.** The break is caused by the
unnumbered `PSYCHIATRY` section divider at PDF p.188, which consumes a PDF page without consuming a
printed number. Verified at eight points, each by reading that page's own printed footer AND its
heading:

| Printed | PDF | What is on the page | Offset | Agrees? |
|---|---|---|---|---|
| 1 | 12 | Neuro ch.1 opener, `INTRODUCTION`, footer `1` | +11 | yes |
| 27 | 38 | Neuro ch.2 interior, header `Neurology Sheet`, `Site of the lesion` / UMNL–LMNL table, footer `27` | +11 | yes |
| 40 | 51 | Neuro ch.4 opener, `CEREBROVASCULAR DISEASES "ISCHEMIC CEREBROVASCULAR STROKE"`, footer `40` | +11 | yes |
| 80 | 91 | Neuro ch.9 opener, `HEADACHE`, footer `80` | +11 | yes |
| 119 | 130 | Neuro ch.12 opener, `CLINICAL APPROACH TO MOVEMENT DISORDERS`, footer `119` | +11 | yes |
| 130 | 141 | Neuro ch.13 interior, header `CNS Infection`, footer `130` | +11 | yes |
| 149 | 160 | Neuro ch.15 opener, `CLINICAL APPROACH TO "CRANIAL NERVES DISORDERS"`, footer `149` | +11 | yes |
| 176 | 187 | Neuro ch.17 interior, header `Ataxia`, last neurology page, footer `176` | +11 | yes |
| — | **188** | **`PSYCHIATRY` section divider — unnumbered. THIS IS WHERE THE OFFSET BREAKS.** | — | — |
| 177 | 189 | Psych ch.1 opener, `Psychiatric Symptomatology, Assessment & Treatment Plan`, footer `1 … 177` | **+12** | yes |
| 184 | 196 | Psych ch.1 interior, memory / attention testing, footer `1 … 184` | +12 | yes |
| 192 | 204 | Psych ch.2 interior, `Myths about Psychiatry`, footer `2 … 192` | +12 | yes |
| 193 | 205 | Psych ch.3 opener, `Anxiety And Related Disorders`, footer `3 … 193` | +12 | yes |
| 222 | 234 | Psych ch.6 opener, `Child Psychiatry`, footer `6 … 222` | +12 | yes |
| 260 | 272 | Psych ch.10 interior, `Emergency Psychiatric Medicine`, footer `10 … 260` | +12 | yes |
| 261 | 273 | Psych ch.11 opener, `Treatment in psychiatry [Psychopharmacology]`, footer `11 … 261` | +12 | yes |
| 277 | 289 | Psych ch.13 interior, `Clinical approach to "Psychotherapy"`, **last content page**, footer `277` | +12 | yes |

⚠️ **Always ask which half of the book a printed page belongs to before converting it.** A neurology
conversion applied to a psychiatry page lands one page early.

## Where the content starts and ends

| PDF pp. | What |
|---|---|
| 1 | Front cover |
| 2 | Blank (8.9 kB at 150 dpi — the file's blank-page signature) |
| 3–10 | **Table of contents, eight pages**, plus the playlist/localization QR panel on p.3 |
| 11 | `NEUROLOGY` section divider, unnumbered |
| 12–187 | **Neurology, printed 1–176** |
| 188 | `PSYCHIATRY` section divider, unnumbered |
| 189–289 | **Psychiatry, printed 177–277** |
| 290, 291 | Blank |
| 292 | Back cover |

**Last printed page is 277.** No index, no glossary, no appendix, no references, no answer key —
chapter 13 of Psychiatry runs to the end and stops.

## Table of contents — transcribed exactly from PDF pp.3–10

The contents is laid out as a table `Lecture | Page No. | Barcode`, split by a full-width
`NEUROLOGY` / `PSYCHIATRY` band. Numbering **restarts at 1 in the psychiatry half** — the same trap
as the Grade Gain question bank, so a bare "chapter 6" is ambiguous in this book and must always
carry its half. Titles below are the contents page's own wording; where the chapter's opener prints
a different wording it is given in the last column, because that is what a grep will hit.

End pages are derived from the next chapter's listed start (the contents lists starts only). A
chapter that ends early with a blank leaf would be over-counted; no blank leaf was found in the
low-dpi thumbnail sweep of pp.12–289, so this is unlikely but not page-by-page verified.

### NEUROLOGY — 17 chapters, printed 1–176

| # | Title (exact, as the contents prints it) | Printed | PDF | Len | Opener prints instead |
|---|---|---|---|---|---|
| 1 | Introduction | 1–2 | 12–13 | 2 | `INTRODUCTION` |
| 2 | Neurology Sheet | 3–27 | 14–38 | 25 | not checked (running header `Neurology Sheet`) |
| 3 | Localization in Neurology | 28–39 | 39–50 | 12 | not checked |
| 4 | Cerebrovascular Diseases (Ischemic) | 40–51 | 51–62 | 12 | `CEREBROVASCULAR DISEASES "ISCHEMIC CEREBROVASCULAR STROKE"` |
| 5 | Cerebrovascular Diseases (Hemorrhagic) | 52–56 | 63–67 | 5 | not checked |
| 6 | Epilepsy and Status Epilepticus | 57–66 | 68–77 | 10 | not checked |
| 7 | Hemiplegia | 67–70 | 78–81 | 4 | not checked |
| 8 | Paraplegia | 71–79 | 82–90 | 9 | not checked |
| 9 | **Headache** | **80–89** | **91–100** | **10** | `HEADACHE` |
| 10 | Multiple Sclerosis | 90–98 | 101–109 | 9 | not checked |
| 11 | Coma | 99–118 | 110–129 | 20 | not checked |
| 12 | Movement Disorders | 119–127 | 130–138 | 9 | `CLINICAL APPROACH TO MOVEMENT DISORDERS` |
| 13 | CNS Infections | 128–135 | 139–146 | 8 | not checked (running header `CNS Infection`, singular) |
| 14 | Neuropathies, Myopathies and Neuromuscular Junction disorders | 136–148 | 147–159 | 13 | not checked |
| 15 | Cranial Nerves Disorders | 149–156 | 160–167 | 8 | `CLINICAL APPROACH TO "CRANIAL NERVES DISORDERS"` |
| 16 | Cranial and Low Back pain | 157–172 | 168–183 | 16 | not checked |
| 17 | Ataxia | 173–176 | 184–187 | 4 | not checked (running header `Ataxia`) |
| — | *Clinical Case* | **no page number** | — | — | **QR only — see below** |

⚠️ **The `Clinical Case` row is not a chapter.** It sits after ch.17 in the contents with an empty
`Page No.` cell and a barcode only. PDF pp.185–187 (printed 174–176) are Ataxia content and printed
176 is the last neurology page, so **there is no printed clinical-case section** — the row points at
a video.

### PSYCHIATRY — 13 chapters, printed 177–277

| # | Title (exact, as the contents prints it) | Printed | PDF | Len | Opener prints instead |
|---|---|---|---|---|---|
| 1 | Psychiatric symptomatology, assessment & treatment plan | 177–187 | 189–199 | 11 | `Psychiatric Symptomatology, Assessment & Treatment Plan` |
| 2 | Myths about Psychiatry | 188–192 | 200–204 | 5 | not checked (running footer `Myths about Psychiatry`) |
| 3 | Anxiety and related disorders | 193–201 | 205–213 | 9 | `Anxiety And Related Disorders` |
| 4 | MOOD DISORDERS | 202–214 | 214–226 | 13 | not checked |
| 5 | Somatic Symptoms and related disorders | 215–221 | 227–233 | 7 | not checked |
| 6 | Child Psychiatry | 222–227 | 234–239 | 6 | `Child Psychiatry` |
| 7 | Schizophrenia | 228–238 | 240–250 | 11 | not checked |
| 8 | Dementia and delirium | 239–248 | 251–260 | 10 | not checked |
| 9 | Substance-related disorders | 249–255 | 261–267 | 7 | not checked |
| 10 | Emergency — psychiatry medicine | 256–260 | 268–272 | 5 | running footer `Emergency Psychiatric Medicine` |
| 11 | Treatment in psychiatry | 261–264 | 273–276 | 4 | **`Treatment in psychiatry [Psychopharmacology]`** — the bracket is on the page, not in the contents |
| 12 | Devices in psychiatry | 265–270 | 277–282 | 6 | not checked |
| 13 | Clinical approach to Psychotherapy | 271–277 | 283–289 | 7 | `Clinical approach to "Psychotherapy"` |

### ⚠️ Do the lengths sum? — YES, both halves, exactly

- **Neurology:** 2+25+12+12+5+10+4+9+10+9+20+9+8+13+8+16+4 = **176**, and printed 176 is verified by
  eye as the last neurology page (PDF 187). Consistent.
- **Psychiatry:** 11+5+9+13+7+6+11+10+7+5+4+6+7 = **101**; 177 + 101 − 1 = **277**, and printed 277
  is verified by eye as the last content page (PDF 289). Consistent.
- **Total 277 printed pages** across 292 PDF pages: 11 front-matter leaves + 1 psychiatry divider +
  3 back leaves = 15 unnumbered, and 277 + 15 = **292**. The arithmetic closes on every route.

## Exam weights — there are none

**⚠️ This book prints no exam-weight percentages, no star ratings, and no importance column.** The
sister book's `Relative weight in %` column is the single most useful planning input the ophthalmology
map carries, and **it has no counterpart here.** Chapter length is the only per-topic signal this book
offers. Say so plainly rather than inventing a proxy.

## House style — what a page looks like

**⚠️ The book has TWO design systems, one per half.** They share the body face and the colour
language but nothing else, and a page can be assigned to its half on sight.

**Neurology (printed 1–176):**
- Chapter opener: a dark-navy band across the top reading `CHAPTER` right-aligned, with a large
  numeral in a navy block at the right edge; the title sits in a pale-blue band beneath it, in a
  **serif small-caps face**. Sub-titles in quotation marks are part of several openers
  (`"ISCHEMIC CEREBROVASCULAR STROKE"`).
- Running header on interior pages: the chapter's short name **top right, in a rounded blue display
  face** (`Headache`, `Ataxia`, `CNS Infection`, `Neurology Sheet`), with a blue bracket-corner motif
  at the top left.
- Page number **bottom right**, blue, over a short grey underscore bar.
- **No `OBJECTIVES` block on any opener read.**

**Psychiatry (printed 177–277):**
- Chapter opener: a **light-blue banner with a circle-cut left end** carrying a large white numeral,
  the title in a white **rounded handwriting-style face**, and a **dark grey strip beneath it reading
  `PSYCHIATRY`**.
- Running **footer** (not header): numeral + chapter title in a blue script face, bottom left; page
  number bottom right over the same grey bar.
- Interior headings step through several faces — a rounded blue face for `Background` / `Adverse
  Effects:`, a bold underlined blue for `A. Psychiatric History:`.

**Both halves:**
- Body text is a serif face, justified, heavy on bold-lead bullets (`Localization:`, `Precipitating
  Factors:`) — the same shape `mdLead()` expects.
- **`Note` boxes**: a pale-blue full-width box with a **lightbulb glyph** at the top left and the
  centred word `Note`. Seen twice (psych printed 184, 193). This is the book's one recurring boxed
  device in the sample.
- ⚠️ **CORRECTED 2026-08-18, after ch.9 was read in full: the tension/migraine/cluster comparison table SPANS printed 88–89**, not 89 alone — it starts immediately below the three captioned faces on 88. **Anyone rendering only 89 would have got half a table.** The general rule this earns: **a table can span a page break; check both sides of every page boundary.**
- **Colour-coded highlighter is used as a comparison instrument** — printed 88–89's tension/migraine/
  cluster table highlights each column's discriminators in a different colour (green / pink / yellow).
  A transcription that drops the highlighting loses the comparison.
- Tables are ruled with a pale-blue header row and blue row labels.
- Figures are a mix of three kinds: **AI-generated infographic posters** (very common in psychiatry —
  `SUICIDE MANAGEMENT`, `ANTIDEPRESSANTS`, `TYPES OF PSYCHOTHERAPY`, each a full-width poster carrying
  real content in tiny type), **hand-drawn annotated diagrams** in a marker style, and **stock
  clinical photographs**.
- **Arabic marginal glosses appear occasionally** in the scan (e.g. `قاتل` beside cluster-headache
  intensity, printed 89) — the same habit as the ophthalmology book.
- QR codes appear **only in the contents**, never in the body (of 26 pages sampled).

## ⚠️ Figure numbering — per chapter, as an observation

| Chapter sampled | Numbering seen |
|---|---|
| Neuro ch.2 Neurology Sheet (printed 27) | **None** — diagrams captioned in-image only |
| Neuro ch.4 CVD ischemic (printed 40) | **None** |
| Neuro ch.9 Headache (printed 80, 89) | **None** |
| Neuro ch.12 Movement disorders (printed 119) | **None** |
| Neuro ch.13 CNS infections (printed 130) | **None** — `Kernig sign` / `Brudzinski sign` labelled inside the image |
| Neuro ch.15 Cranial nerves (printed 149) | **None** |
| Neuro ch.17 Ataxia (printed 175) | **`(a) Finger to Nose Test` / `(b) Dysdiadochokinesia Test` / `(c) Heel to Shin Test`** — sub-figure lettering **without a figure number** |
| Psych ch.1 (printed 177, 184) | **None** |
| Psych ch.3 Anxiety (printed 193) | **None** |
| Psych ch.6 Child psychiatry (printed 222) | **None** |
| Psych ch.11 Psychopharmacology (printed 261) | **None** |
| Psych ch.13 Psychotherapy (printed 277) | **None** |

**Observation, 12 chapters sampled: no `Figure N-M` scheme was found anywhere.** The one lettered
caption (Ataxia, printed 175) letters sub-panels but does not number the figure. ⚠️ **This is a
12-of-30-chapters observation, not a rule** — the ophthalmology map's equivalent line was wrong
within hours, and in that book a single chapter numbered *partially*. **Do not use "this book never
numbers figures" to exclude anything.** Cite figures here by page and caption text.

## ⚠️ Tutorial / skip markers — none found

**None of the nine physical forms known from the sister book was seen in the 26 pages read**, and
critically, **the contents page carries no governing note** — in the ophthalmology book the
`(Tutorial) or (T)` instruction is printed on the contents page itself, which is the first place it
would appear. On the present evidence this book has no tutorial/skip apparatus.

⚠️ **Stated precisely: not found in 26 of 292 pages, and absent from the place the sister book
declares it. That is not proof of absence** — record any marker found during later reading rather
than treating this line as settled.

## ⚠️ Star-glyph importance ratings — none found

No `☆☆☆`-style rating was seen on any sampled page, in either half. The sister book's star glyph was
a **local device on one page**, not a system, so its absence from a 26-page sample here proves very
little either way. Nothing else was found doing that job — no "important" tags, no bold `N.B.`
weighting scheme beyond ordinary emphasis. The one `N.B` seen (printed 184) introduces content, not
importance.

## ⚠️ Dead-pointer check — clean in the sample

Every top-level heading on every sampled page had a real body beneath it. No banner heading whose
entire content is a cross-reference elsewhere was found — the failure mode that cost the
ophthalmology map a chapter's worth of promised coverage. **Checked on:** neuro ch.4, 9, 12, 15
openers and ch.2, 13, 17 interiors; psych ch.1, 3, 6, 11 openers and ch.1, 2, 10, 13 interiors.

⚠️ **A heading is still not evidence.** Twelve of thirty chapters were opened and none end-to-end.
Before promising that a chapter can pay a §14.5 register row, read the chapter's own pages.

## The mapping — 27 app chapters → book chapters

App chapters and ids from `app\data\modules.js`, module `neuropsych` (16 Psychiatry + 11 Neurology).
Book ranges are **printed** pages; add 11 for a neurology PDF page, 12 for a psychiatry one.

### Psychiatry group

| App chapter | id | Book chapter(s) | Printed | Coverage |
|---|---|---|---|---|
| Interview Assessment | `ps-interview` | Psych 1 Psychiatric symptomatology, assessment & treatment plan | 177–187 | **Full.** Opens on `I. The Clinical Assessment` → `A. Psychiatric History:` with the full personal-data / chief-complaint / HPC structure. |
| **OSCE demonstration** | **`ps-osce`** | **Psych 1 (the same 11 pp) — no chapter of its own** | **177–187** | **⚠️ Partial, and the only app chapter with no dedicated home.** See below. |
| Somatoform disorders | `ps-somato` | Psych 5 Somatic Symptoms and related disorders | 215–221 | Full |
| Symptomatology | `ps-symptom` | Psych 1 (shared with `ps-interview`) | 177–187 | **Full** — printed 184 is pure symptomatology (hallucinations, memory, attention testing). ⚠️ These two app chapters share one book chapter; split it by content, not by page range. |
| Psychoeducation and Myths | `ps-psychoed` | Psych 2 Myths about Psychiatry | 188–192 | Full |
| **Anxiety Disorders** | **`ps-anxiety`** | **Psych 3 Anxiety and related disorders** | **193–201** | **Full — this is the deckless chapter's source.** See below. |
| OCD and PTSD | `ps-ocd` | Psych 3 (same chapter) | 193–201 | **Full but shared.** Its opener prints the DSM-5 split `I. Anxiety disorders · II. Obsessive compulsive & other related disorders · III. Trauma- & stressor- related disorders` — **one book chapter feeds two app chapters**; sections II and III are `ps-ocd`. |
| Mood Disorders | `ps-mood` | Psych 4 MOOD DISORDERS | 202–214 | Full |
| Approach to Psychosis | `ps-psychosis` | Psych 7 Schizophrenia | 228–238 | Full for schizophrenia; the book titles it by the disease, not by the approach |
| Geriatric Psychiatry | `ps-geri` | Psych 8 Dementia and delirium | 239–248 | **⚠️ Partial — no geriatric-psychiatry chapter exists.** Dementia/delirium is the overlap; late-life depression, elder abuse and prescribing in the elderly are not chapter topics here |
| Child Psychiatry | `ps-child` | Psych 6 Child Psychiatry | 222–227 | Full (opens on neurodevelopmental disorders / intellectual disability) |
| Substance use disorder | `ps-sud` | Psych 9 Substance-related disorders | 249–255 | Full |
| Emergency Psychiatry | `ps-emerg` | Psych 10 Emergency — psychiatry medicine | 256–260 | Full (suicide risk and management is its spine) |
| **Psychopharmacology** | **`ps-pharm`** | **Psych 11 Treatment in psychiatry [Psychopharmacology]** | **261–264** | ⚠️ **PARTIAL — downgraded 2026-08-18 after the chapter was read.** Antidepressants and mood stabilisers are covered; **ANTIPSYCHOTICS ARE DEFERRED WHOLESALE** — printed 263 teaches indications as a picture and then prints one red line, *"Classes, mechanism of action & adverse effect: (See 'schizophrenia' lecture)"*. **A heading without a body.** The payload is **Psych ch.7 Schizophrenia, printed 228–238**. There is also no MAOI adverse-effect block: the numbered list runs 1–5 and stops. |
| Devices in Psychiatry | `ps-devices` | Psych 12 Devices in psychiatry | 265–270 | Full |
| Psychotherapy | `ps-therapy` | Psych 13 Clinical approach to Psychotherapy | 271–277 | Full |

### Neurology group

| App chapter | id | Book chapter(s) | Printed | Coverage |
|---|---|---|---|---|
| Introduction to neurology and localization | `nr-intro` | Neuro 1 Introduction + 2 Neurology Sheet + 3 Localization in Neurology | 1–2, 3–27, 28–39 | **Full, and by far the best-served app chapter — 39 printed pages across three book chapters.** |
| MS and demyelinating disorders | `nr-ms` | Neuro 10 Multiple Sclerosis | 90–98 | Full |
| Movement disorders / Epilepsy | `nr-movement` | Neuro 12 Movement Disorders + Neuro 6 Epilepsy and Status Epilepticus | 119–127, 57–66 | Full, **two non-adjacent book chapters** |
| LMN: peripheral nerve, muscle and NMJ | `nr-lmn` | Neuro 14 Neuropathies, Myopathies and Neuromuscular Junction disorders | 136–148 | Full — the titles match almost word for word |
| CNS infections | `nr-cns` | Neuro 13 CNS Infections | 128–135 | Full |
| Cranial nerves disorders | `nr-cranial` | Neuro 15 Cranial Nerves Disorders | 149–156 | Full (opens on trigeminal neuralgia) |
| Delirium and Coma | `nr-delirium` | Neuro 11 Coma + Psych 8 Dementia and delirium | 99–118, 239–248 | **⚠️ Straddles both halves of the book** — coma is neurology's longest chapter (20 pp), delirium is in psychiatry |
| **Headache** | **`nr-headache`** | **Neuro 9 Headache** | **80–89** | **Full — this is the deckless chapter's source.** See below. |
| Cerebrovascular stroke | `nr-stroke` | Neuro 4 CVD (Ischemic) + Neuro 5 CVD (Hemorrhagic) | 40–51, 52–56 | Full, 17 pp over two chapters |
| Cervical and low back pain | `nr-backpain` | Neuro 16 Cranial and Low Back pain | 157–172 | Full — ⚠️ the book says **Cranial** and Low Back pain; the app says **Cervical**. The contents QRs for this chapter are labelled `Neck and Back Pain` and `Pain and pain management`, so the app's reading is the likelier intent and the book's title may be a typo. **Recorded, not corrected.** |
| Hemiparesis, paraparesis, ataxia | `nr-hemi` | Neuro 7 Hemiplegia + 8 Paraplegia + 17 Ataxia | 67–70, 71–79, 173–176 | Full, **three book chapters**, 17 pp |

### The four chapters this map was commissioned for

- **`nr-headache` (Headache, 22 of the module's 151 questions, no lecture deck) → Neurology ch.9,
  printed 80–89, PDF 91–100. Ten pages, fully self-contained, and rich.** Opener read: definition,
  epidemiology, a classification flowchart splitting primary (tension / migraine / cluster) from
  secondary (intracranial: temporal arteritis, SAH, metabolic, tumours, meningitis; extracranial:
  sinusitis, eyes/orbit, ears, teeth), each leaf already carrying its discriminators. Printed 89
  closes the chapter with a **three-column tension/migraine/cluster comparison table**, colour-
  highlighted per column. **This chapter alone can carry the app chapter.** Render 91–100.
- **`ps-anxiety` (Anxiety Disorders, no deck) → Psychiatry ch.3, printed 193–201, PDF 205–213. Nine
  pages.** Opener read: fear-vs-anxiety, prevalence 2–13 %, F:M ≈ 1.5:1, DSM-5 three-way split, a
  `Note` box on comorbidity, then the full anxiety-disorder list (GAD, specific phobia, social
  anxiety, panic, agoraphobia, separation anxiety, selective mutism, substance-induced, and
  secondary to hyperthyroidism/phaeochromocytoma). **Covers `ps-ocd` as well** — sections II and III
  of the same chapter.
- **`ps-pharm` (Psychopharmacology, deck is image-only at 7 words/page) → Psychiatry ch.11,
  printed 261–264, PDF 273–276.** The opener's own title is **`Treatment in psychiatry
  [Psychopharmacology]`**. ⚠️ **Only four printed pages**, and the first is dominated by a full-width
  `ANTIDEPRESSANTS` infographic (six classes with named drugs) plus adverse-effect prose. **The
  poster carries much of the content in small type — it must be read at 300 dpi, not skimmed at 150.**
  Four pages is thin for a psychopharmacology chapter; expect to supplement from `ps-devices`
  (265–270) and from the treatment sections inside the disorder chapters.
- **`ps-osce` (OSCE demonstration, no deck) → ⚠️ NO DEDICATED BOOK CHAPTER.** The nearest material is
  **Psychiatry ch.1, printed 177–187** — the psychiatric history structure (printed 177) and the
  mental-state examination proper (printed 184: hallucination phenomenology, immediate/recent/remote
  memory testing with scripted questions, attention and concentration testing with serial sevens and
  days-backwards). That is examination *technique*, which is what an OSCE tests, so the chapter is
  usable — but **it is `ps-interview`/`ps-symptom`'s chapter, being read a third time.** Two contents
  rows point at OSCE-shaped material that **is not in the book**: the `Psychiatric Sheet` QR beside
  psychiatry ch.1, and the unnumbered `Clinical Case` QR row at the end of neurology. **Both are
  video links with no page number.** ⚠️ **`ps-osce` is the one app chapter the book cannot cover on
  its own.**

### Coverage gaps, both directions

- **App chapters the book does not cover with a dedicated chapter:** `ps-osce` (nothing) and
  `ps-geri` (only via Psych 8 Dementia and delirium).
- **Book chapters no app chapter claims outright:** none. Every one of the 30 book chapters is
  claimed by at least one app chapter. The largest single block, **Neuro ch.2 `Neurology Sheet`
  (25 printed pages)**, falls entirely to `nr-intro`, which already also owns ch.1 and ch.3 — ⚠️ **39
  printed pages against one app chapter is a split candidate on the peds/ophtho precedent**, but that
  is a judgement for the theory plan, not this map.
- ⚠️ **Six app chapters draw on more than one book chapter, and two draw on the same book chapter as
  another app chapter** (`ps-interview`/`ps-symptom`/`ps-osce` all on Psych 1; `ps-anxiety`/`ps-ocd`
  both on Psych 3). **Neither situation is a coverage problem; both are a duplication risk** — the
  §14.5 register exists for exactly this, and the donor chapter must state which sections it is
  leaving to its sibling.

**⚠️ Scope note, per the standing user ruling on the sister module: scope comes from the lecture
series; the book is the authority on content, never on scope.** Nothing above proposes adding or
removing an app chapter, and the three deckless chapters stay as they are. Neuropsychiatry remains
**27 app chapters**.

## What was rendered

Low-dpi (30) thumbnails of **all 292 pages** for blank/divider detection — cheap, and it found both
section dividers and all three blank leaves without reading them.

Read at 150 dpi, **26 pages**: PDF 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 (front matter and contents in
full), then 38, 51, 91, 100, 130, 141, 160, 186, 187, 188, 189, 196, 204, 205, 234, 272, 273, 289,
290, 292. Everything went to the session scratchpad. **No source file was modified, renamed, moved or
deleted.**

## Not established

Stated explicitly, because a confident guess would be worse:

- **Year, edition, ISBN** — not printed anywhere in the front or back matter.
- **Whether any tutorial/skip marker or star rating exists deeper in the book** — 26 of 292 pages
  read. Absent from the contents page, which is the strongest single piece of evidence, but not proven
  absent.
- **Whether any chapter numbers its figures** — none of 12 chapters sampled does, but no chapter was
  read end to end.
- **Whether any chapter ends with a blank leaf**, which would make the derived end pages one too high.
  The thumbnail sweep found no blank page between PDF 12 and 289, so this is unlikely.
- **Whether the QR-linked `Psychiatric Sheet` and `Clinical Case` videos duplicate printed material.**
  The QR targets were not resolved.
- **Chapter-by-chapter depth.** This is a structural map. Nothing here should be cited as a clinical
  fact; page citations for content require reading the page.
