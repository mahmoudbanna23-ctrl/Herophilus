# Ophthalmology book — structural map

Mapped 2026-08-18 by rendering front matter and five verification pages. **No page was swept; the
table below is transcribed from the book's own printed contents page, not reconstructed.**

## Identity, as printed

| Field | As printed | Where |
|---|---|---|
| Cover title | `OPHTHALMO-` / `-OLOGY` (i.e. OPHTHALMOLOGY, hyphenated across two lines) | PDF p.1 |
| Inside title | `OPHTHALMOLOGY WITH TUTORIALS` | PDF p.3 (contents page header) |
| Author / editor | `BY HEALIX TEAM` — no named editor, no author list anywhere in the front matter | PDF p.1 |
| Year / level | `5` `Fifth Year` on the cover | PDF p.1 |
| Edition | **Not printed.** There is no title page, no copyright page, no edition statement, no preface, no ISBN. | — |
| Back cover | `Mnemonics / Illustrations / Comparisons and more.....` + HEALIX TEAM logo + a quotation | PDF p.274 |
| File | `Semester 8\Opthalmo\Theoritical\Books\ophthalmology.pdf`, 218,498,117 bytes |
| Pages | **274 PDF pages**, A4 (595.26 × 841.86 pt), produced by Haru Free PDF Library 2.0.8c, ModDate 2025-11-24 |
| Text layer | **None.** `pdftotext` over all 274 pages returns 274 bytes — one newline per page, zero characters. Image-only scan, confirmed. |

Front matter is only three leaves: PDF p.1 cover, p.2 blank, p.3 table of contents. Chapter 1 opens
on PDF p.4.

The contents page carries a **"Relative weight in %"** column — the book's own statement of exam
weighting. It is reproduced below because it is a planning input, not decoration. The 20 values sum
to 100.0.

The contents page also prints three QR codes (`Telegram channel`, `Round orientation & sources for
all lectures`, `Tutorials file`) and the note:
`In this book, anything we put (Tutorial) or (T) beside / before it , study in round & skip in final`

## Printed-page to PDF-page offset

**PDF page = printed page + 2.** Verified at five widely separated points, each by reading the
page's own footer number and its heading:

| Printed | PDF | What is on the page | Agrees? |
|---|---|---|---|
| 45 | 47 | Chapter 2 opener, `Eye optics & Errors of refraction`, footer `45` | yes |
| 130 | 132 | Chapter 10 opener, `The Uveal Tract`, footer `130` | yes |
| 236 | 238 | Chapter 19 opener, `Ocular Manifestations of Systemic Conditions and Diseases`, footer `236` | yes |
| 244 | 246 | Mid-chapter-19 page `(2) Hypertension`, footer `244` | yes |
| 254 | 256 | Chapter 20 opener, `Drugs and the Eye`, footer `254` | yes |

**One exception, at chapter 1 only.** The contents page lists chapter 1 as starting on page 1, but
printed page 1 is the contents leaf itself (PDF p.3); the `Examination of the Eye` opener is PDF p.4
and carries the footer `2`. So chapter 1 in practice begins at **printed 2 / PDF 4**. Every other
chapter's listed start page lands exactly on its opener. The table below keeps the contents page's
own figure (1) and notes the discrepancy here rather than silently correcting it.

Last content page is **printed 270 / PDF 272**. PDF p.273 is blank, p.274 is the back cover.

## Table of contents — transcribed exactly from PDF p.3

Titles are the contents page's wording. Where the chapter's own opening page prints a different
wording, that variant is given in the last column — it matters for grepping.

| # | Title (exact, as the contents page prints it) | Printed pp. | PDF pp. | Length | Weight % | Opener prints instead |
|---|---|---|---|---|---|---|
| 1 | Examination of the Eye | 1–44 | 3–46 | 44 | 3 | *(same)* — but opener is PDF 4 / printed 2, see above |
| 2 | Optics and Errors of Refraction | 45–55 | 47–57 | 11 | 3 | `Eye optics & Errors of refraction` |
| 3 | Orbit | 56–61 | 58–63 | 6 | 3 | `The Orbit` |
| 4 | Lacrimal System | 62–69 | 64–71 | 8 | 3 | not checked |
| 5 | Eyelids | 70–81 | 72–83 | 12 | 6.5 | not checked |
| 6 | Conjunctiva | 82–95 | 84–97 | 14 | 6.5 | not checked |
| 7 | Sclera | 96–102 | 98–104 | 7 | 3 | not checked |
| 8 | Cornea | 103–116 | 105–118 | 14 | 6.5 | not checked |
| 9 | Lens | 117–129 | 119–131 | 13 | 5 | not checked |
| 10 | Uveal Tract | 130–141 | 132–143 | 12 | 3 | `The Uveal Tract` |
| 11 | Glaucoma | 142–155 | 144–157 | 14 | 6.5 | not checked |
| 12 | Vitreous | 156–160 | 158–162 | 5 | 3 | not checked |
| 13 | Retina | 161–177 | 163–179 | 17 | 6.5 | not checked |
| 14 | Neuro-ophthalmology | 178–195 | 180–197 | 18 | 10 | not checked |
| 15 | Squint | 196–203 | 198–205 | 8 | 3 | not checked |
| 16 | Paediatric Ophthalmology | 204–213 | 206–215 | 10 | 4.5 | not checked |
| 17 | Malignancies of the Eye and its Adnexa | 214–217 | 216–219 | 4 | 1.5 | *(same)* |
| 18 | Ocular Trauma | 218–235 | 220–237 | 18 | 9.5 | not checked |
| 19 | Ocular Manifestations of Systemic Conditions and Diseases | 236–253 | 238–255 | 18 | 10 | *(same)* |
| 20 | Drugs and the Eye | 254–270 | 256–272 | 17 | 3 | *(same)* |

Lengths sum to **270 printed pages**, which is exactly the last printed page number — the ranges are
internally consistent. End pages are derived from the next chapter's listed start, so a chapter that
ends early with blank leaves would be over-counted; that has not been checked page by page.

**Nothing else is listed.** No preface, no appendix, no atlas section, no index, no glossary, no
references. Chapter 20 runs to the last content page and stops. Confirmed by rendering PDF
pp.266–272: all seven are chapter-20 drug content, no back matter.

## House style — what a page looks like

Relevant to any later render/transcription work:

- Every chapter opens with a thin double blue rule, an eye glyph top-right, a blue underlined serif
  title, a decorative image, then an **`OBJECTIVES:`** block drawn as a flowchart of blue rounded
  boxes. The objectives flowchart is a reliable chapter-boundary marker.
- Page number is bottom-left, blue, preceded by a short vertical bar.
- ⚠️ **CORRECTED — figure numbering is INCONSISTENT, not absent.** This line originally read *"the
  book uses no `Figure X-Y` numbering"*, extrapolated from five pages. Chapters **7** (`Fig 7-1`)
  and **3** (`Fig (3-1)`, parenthesised) number their figures; chapters **10** and **17** number
  none, and chapter 3 mixes numbered and unnumbered captions on one page. Many figures do carry a
  plain caption (e.g. `Macular Star`). **Cross-references are by chapter name in prose** — `(Refer
  to branch retinal vein occlusion in the retina chapter)` — never by page number, and that part
  has held on every chapter read so far.
- **⚠️ STAR-GLYPH IMPORTANCE RATINGS, found 2026-08-18 on printed 58**: `"Blow-out" fracture : ☆☆☆`.
  A sub-chapter-level exam-weight signal, finer than the contents page's per-chapter percentages.
  ⚠️ **It does NOT recur** — ch.16 and ch.19, read the same day, contain none. **A local device, not
  a book-wide system**: record it where it appears, do not plan around it. Ch.19 uses a different
  device again — the word `"important"` in quotes appended to a heading (printed 239, 245).
- **⚠️⚠️ THE `(T)` ABBREVIATION IS REAL — first confirmed sighting 2026-08-18, ch.16 printed 212**,
  used inline three times as a bold blue `T:` after an arrow. The contents page has warned about
  *"(Tutorial) or (T)"* since day one, but **every marker found before this used the full word.**
  Grep new caches for both forms.
- **NINE physical forms of the tutorial marker are now known**, and they are not interchangeable:
  a heading suffix · an inline blue parenthetical inside a bullet (`History of trauma (or surgery ..
  Tutorial)`) · a thin rectangular box beside a heading · a shaded or blue-outlined panel whose first
  line is the centred blue word **Tutorial** · a blue **dashed** box with a separate dashed
  `Tutorial` tab · **a whole paragraph in blue introduced by "from tutorial →", with no box at all**
  · **a running-text declaration governing a whole page** (ch.16 p.213: *"The Rest of the page is
  from glaucoma tutorial 'skip in final'"*) · **a full-page black-ruled box with the instruction
  inside its heading** (ch.19 p.248: *"Additions from Tutorial (skip in final)"*) · and the bare
  `(T)`. **⚠️ The marker is never a licence to compress** — it means *study in round, skip in final*,
  and the material is written at full weight with the marker recorded.
- **Cross-reference banners can be DEAD ENDS.** Chapter 17 spends two of its five top-level headings
  on banner headings whose entire content is an italic pointer elsewhere (`Retinoblastoma` → ch.16,
  `Metastases from Extraocular Malignancies` → ch.19). A heading in this book is not evidence that
  the chapter teaches the topic — check the body before promising a chapter can pay a register row.
- Body text is dense, colour-coded (red/blue emphasis), with hand-annotated diagrams, some carrying
  Arabic marginal glosses.

## The two lecture-PDF questions — both REFUTED

### `L37) Red Eye.pdf` is **not** chapter 4 of this book

- This book's **chapter 4 is `Lacrimal System`** (printed 62–69). There is no chapter titled "The
  Red Eye" anywhere in the 20-chapter list.
- `L37) Red Eye.pdf` is **US letter (612 × 792 pt)**, 33 pages, and **has a full text layer**. This
  book is **A4 (595.26 × 841.86 pt)** and has **zero** extractable characters. Different page size
  and different production route — it cannot be an extract from this PDF.
- Its opening text reads `CHAPTER 4` / `The Red Eye` / `OBJECTIVES` / *"As a primary care provider,
  you should be able to determine whether a patient with a red eye requires the prompt attention of
  an ophthalmologist…"*. That is a primary-care primer addressing non-ophthalmologists — an
  AAO-family student text. This book addresses fifth-year students sitting an ophthalmology exam and
  uses a flowchart objectives block, not prose objectives.
- **Conclusion: `L37` is chapter 4 of some other book. Cite it as its own source, not as
  `ophthalmology.pdf`.**

### `L23) Ocular manifestations of systemic diseases.pdf` is **not** chapter 9 of this book

- This book's **chapter 9 is `Lens`** (printed 117–129). Its systemic-disease chapter is
  **chapter 19** (printed 236–253). Neither is 9.
- `L23` is **960 × 540 pt** — a 16:9 PowerPoint deck, 43 slides, authored `By Faten Hussein`. It is
  not a book extract at all.
- ⚠️ **CORRECTED 2026-08-18, THE SAME DAY THIS FILE WAS WRITTEN.** The original claim here was that
  the book **"has no figure-numbering scheme at all"**, generalised from the five verification
  pages this map was built on. **That is false.** Reading chapter 7 in full found **`Fig 7-1`
  through `Fig 7-4`** — five numbered figures. Chapter 10, read the same day, numbers **none**.
  **The book's figure-numbering is INCONSISTENT between chapters**, so *"this book never numbers
  figures"* can no longer be used to exclude anything.
  **Three more data points, 2026-08-18:** chapter 3 numbers **`Fig (3-1)`–`Fig (3-5)`, the number in
  PARENTHESES** — a second style — and mixes numbered with unnumbered captions **on the same page**
  (printed 57, 59, 60). Chapter 19 prints **`Figure (19-1)` and `Figure (19-4)`**, the word spelled
  out — a **third** style — and numbers **only two figures across 18 pages, non-contiguously**.
  Chapters 17 and 16 number nothing. Running tally: **numbering — 3, 7, 19 · not numbering — 10, 16,
  17**, in three styles. ⚠️ **The variation is wider than "some chapters number and some don't": a
  single chapter can number PARTIALLY**, so the absence of a number beside one figure proves nothing
  about the chapter, let alone the book.
- **The conclusion survives, on the evidence that was always load-bearing:** chapter 9 of this book
  is **`Lens`**, its systemic-disease chapter is **19**, and `L23` is a **960 × 540 PowerPoint deck
  authored `By Faten Hussein`** — not a page of an A4 scan. A `(Fig 9-x)` reference cannot point at
  a Lens chapter that prints no such figure, whatever this book's habits are elsewhere.
- **So: the `Fig 9-x` refs are inherited from a third source. Do not resolve them against
  `ophthalmology.pdf`** — but if that question is ever reopened, reopen it on the chapter-content
  and file-format evidence, **not** on figure numbering.
- **The general lesson, worth more than the finding:** this map's contents table is transcribed and
  reliable; its *characterisations of the book's habits* were extrapolated from five pages and one
  of them was wrong within hours. **Treat every "the book always / never …" line here as a
  hypothesis until a chapter has been read end to end.**

**The standing interview item — "is `L23` chapter 9 of the same book as `L37`?" — is now half
answered.** Neither is a chapter of *this* book. Whether `L37` and `L23`'s quoted prose share a
single external parent is still unsettled and still needs asking; the evidence (primary-care
register, `Fig N-x` numbering, US-letter typesetting) is suggestive but not proof.

## How this book relates to the 27 lecture decks

The 20 chapters map cleanly onto the *topic* lectures, one or two decks per chapter, and leave four
decks unmatched:

| Book chapter | Lecture deck(s) |
|---|---|
| 1 Examination of the Eye | `L1,2`, `L3,4` |
| 2 Optics and Errors of Refraction | `L7,8` |
| 3 Orbit | `L10` |
| 4 Lacrimal System | `L9` |
| 5 Eyelids | `L5` (+ `L27,28` in part) |
| 6 Conjunctiva | `L6` |
| 7 Sclera | `L13,14` (second half) |
| 8 Cornea | `L15,16` |
| 9 Lens | `L17`, `L18` |
| 10 Uveal Tract | `L13,14` (first half) |
| 11 Glaucoma | `L11`, `L12` |
| 12 Vitreous | — no dedicated deck |
| 13 Retina | `L19.1`, `L19.2`, `L20` |
| 14 Neuro-ophthalmology | `L21`, `L22` |
| 15 Squint | `L29`, `L30` |
| 16 Paediatric Ophthalmology | — no dedicated deck |
| 17 Malignancies of the Eye and its Adnexa | `L24` |
| 18 Ocular Trauma | `L25`, `L26` |
| 19 Ocular Manifestations of Systemic Conditions and Diseases | `L23` |
| 20 Drugs and the Eye | — no dedicated deck |
| *(no chapter)* | `L31,32` Acute visual Loss · `L33,34` The White Eye · `L35,36` Chronic visual loss · `L37` Red Eye |

The four unmatched decks are exactly the presentation-based ones. This is consistent with the user's
statement that the late decks are compilations of earlier material rather than new topics — but note
that `L37` is a **cut from an outside book**, not a compilation of these lectures, so "compilation"
is not the right description of all four. `L31,32`, `L33,34` and `L35,36` have not been checked for
provenance.

**Three chapters have no deck at all** — 12 Vitreous, 16 Paediatric Ophthalmology, 20 Drugs and the
Eye — and 20 alone is 17 pages the lectures never covered. `L27,28` Problems of External Appearance
also has no single home chapter.

## What was rendered

Only these pages were rasterised, at 110 dpi except where noted, into the session scratchpad:
PDF 1–12 (front matter), 47, 132, 158, 238, 246, 256, 266–272, 273, 274; plus page 1 of
`L37) Red Eye.pdf` and `L23) Ocular manifestations of systemic diseases.pdf` at 100 dpi.
No source file was modified, renamed, moved or deleted.
