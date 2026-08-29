# Progress ledger

What has been read, transcribed, and written. **This file is load-bearing** — the source material is
large enough that the work spans many sessions, and this is what makes it resumable. Update it in
the same pass as the work, never afterwards from memory.

Rule: a scanned page is rendered and read **once, ever**. Before opening any source, check here.

Last updated: 2026-07-26 · Poppler installed · Phase 1 complete

**Poppler binaries** (winget modified PATH, but a shell started before the install will not see it):
`C:\Users\Alfa388\AppData\Local\Microsoft\WinGet\Packages\oschwartz10612.Poppler_Microsoft.Winget.Source_8wekyb3d8bbwe\poppler-25.07.0\Library\bin`

---

## 1. Lecture slide text harvest (Phase 1)

**DONE 2026-07-26.** Cached to `content\<subject>\lectures\*.txt`. One pass, never repeated.
**Check this cache before rendering anything.**

| Subject | Lecture PDFs | `.pptx`/`.ppt` | Cached `.txt` | Size |
|---|---|---|---|---|
| ENT | 34 | 0 | 32 | 292 KB |
| Pediatrics | 54 | 14 | 64 | 822 KB |
| Ophthalmology | 27 | 2 | 25 | 263 KB |
| Neuropsychiatry | 25 | 0 | 25 | 399 KB |
| **Total** | **140** | **16** | **146** | **1.78 MB** |

131 of 140 PDFs yielded text (`pdftotext -layout`, whole file, ≥200 non-whitespace chars). 15 of 16
PowerPoints extracted from `ppt/slides/slide*.xml`. Spot-checked and clean.

### Not harvested — need the render route

**9 lecture PDFs with no usable text layer:**

- `ENT\...\L1.1) Surgical anatomy of the larynx.pdf`
- `ENT\...\L1.2) Anatomy of the pharynx.pdf`
- `Opthalmo\...\L3,4) Clinical- Ocular examination.pdf`
- `Opthalmo\...\L13,14) Uvea & Sclera.pdf`
- `Opthalmo\...\L25) Trauma I.pdf`
- `Opthalmo\...\L27,28) Problems of External Appearance.pdf`
- `Pedo\...\42)Viral hepatits_.pdf`
- `Pedo\...\  Myocardial diseases.pdf` — **broken stub, 134 bytes**, no content, do not queue
- `Pedo\...\  stenotic lesions.pdf` — **broken stub, 120 bytes**, no content, do not queue

**1 legacy PowerPoint:** `Pedo\...\19 and 20) INFECTIOUS DISEASES. clean.ppt` — binary `.ppt`, not
the XML format, so the extraction path does not apply. Render route.

**4 cached but thin** — passed the threshold, but are mostly image slides; treat the cache as
incomplete and render if the chapter needs more: `ophtho\L9) lacrimal system..txt` (501 B),
`ophtho\L21) Optic Nerve.txt` (615 B), `ophtho\L10) orbit.txt` (686 B),
`ophtho\L24) Ocular tumors..txt` (1,085 B).

---

## 2. Question bank transcription (Phase 2)

Verbatim transcriptions to `content\<subject>\qb-pages\`, then question objects into
`app\data\questions.<subject>.js`. Module order: ENT → Pediatrics → Ophthalmology → Neuropsychiatry.

Page counts from `pdfinfo` 2026-07-26 — authoritative, and they correct the earlier
header-derived estimates.

| # | Bank | Subject | Q pages | Id prefix | Answers | Pages done | Questions |
|---|---|---|---|---|---|---|---|
| 1 | `d house ENT mcq.pdf` | ENT | 104 | `enthd-` | **inline** | 12–14 | 21 |
| 2 | `ENT QB.pdf` | ENT | 185 | `entqb-` | separate pages | 0 | 0 |
| 3 | `ENT endpoint.pdf` | ENT | **2,642** | `entep-` | **yellow highlight** | 143–370 | 77 |
| 4 | `pediatric .pdf` | Pediatrics | 104 | `peds-` | unseen | 0 | 0 |
| 5 | `ophthalmology MCQ.pdf` | Ophthalmology | 126 | `opmcq-` | **inline, beneath each Q** | 4–9 | **56 staged, 0 merged** |
| 6 | `ophthalmology qb.pdf` | Ophthalmology | 185 | `opqb-` | pooled key pages | 8–26 | **138 merged** |
| 7 | `neuropsychiatry & neurosurgery qb.pdf` | Neuropsychiatry | 142 | `npqb-` | unseen | 0 | 0 |
| | | | **3,488** | | | **~118 read** | **98** |

"Pages done" counts pages actually rendered and read, not the span covered — for `ENT endpoint.pdf`
only the answered page of each pair is read, so pp.143–370 cost ~115 reads, not 228.

**Yield is falling as the recycling zone is worked through, then recovering:** 22 → 12 → 4 → 7 → 5
→ 16 → 12 questions per batch. The low point was pp.230–290; from p.294 the material runs new again.

### Working method and deduplication

Instruction from the user, 2026-07-26: **go through every question source, transcribe what is there,
categorise each question to its lecture, and stop there.** Do not author questions. Where a source
prints its own explanation, capture that; where it prints none, leave `explanation` empty and let
the UI show its honest placeholder rather than inventing one.

**The same question appears many times** — within `ENT endpoint.pdf` (branch questions reappear in
the 7 Model Final Exams and the Exam Night Review) and across the different banks. **Keep each
question once.** Deletion of duplicates is authorised.

**Contact sheets: crop the page.** Every `ENT endpoint.pdf` question page uses only its top third
and is white below. `sheet.ps1 -CropTop 0.30` keeps just that band, which fits **24 pages** on one
sheet instead of 15 at full readability — a ~60% cut in reads across the ~1,300 answered pages
still to come. Use `-CropTop 0.55` for a page whose stem is long enough to be clipped.

Procedure: transcribe a batch, then run a normalised-stem comparison across
`app\data\questions.<subject>.js` — lowercase, strip punctuation and whitespace, compare stem plus
sorted option set. On a match, keep the first occurrence, append the extra citation to its `source`,
and drop the rest. Near-matches (same question, reworded) get checked by eye before deleting.

### Formats seen so far

- **`d house ENT mcq.pdf`** — "Dr. HOUSE in ENT, End-of-round MCQs 2025". Each PDF page is a
  **two-page spread** (so 104 pages ≈ 208 book pages). Numbered questions, options A–D,
  **`Answer: X` printed inline** after each. Grouped by section, e.g. "Ear MCQs → 1. Surgical
  anatomy of the ear". Some questions carry clinical images. Faint bleed-through from the reverse
  of each sheet, but the primary text is crisp. **Best starting point.**
- **`ENT QB.pdf`** — "ASM MiNDS' ENT **GRADE GAIN** edition, GG", 1st edition, 185 PDF pages.
  **Reconnaissance done 2026-08-07 — full map in §14.** Contents pages (PDF 5–9) give, per topic,
  the question start page, the answer start page and the question count. **⚠️ PDF page = book page +
  9.** **1,080 questions over 29 topics** — Ear 244, Nose 258, Throat 578. **~45 % carry a printed
  explanation** (13 of 29 in the sampled section); the rest print only *"Correct answer: X"*.
  Questions carry photographs. Options run **a–d or a–e**. Answers are lettered, on separate pages,
  **but a question tail and the answer block can share one page** — the TOC's "Page As" is where the
  answers *start*, not where the questions stop.

### `ENT endpoint.pdf` — "ENT AlexMed Endpoints", the largest question source

3,075 pages, 332 MB, jsPDF 1.3.2. **It is both a question bank and a theory file**, and the
questions are the bulk of it. Its own contents page (p.2) gives exact ranges:

| Section | Pages | Count | Type |
|---|---|---|---|
| Ear Summary | 5–141 | 137 | theory |
| **Ear Questions** | **142–760** | **619** | questions |
| Nose Summary | 761–888 | 128 | theory |
| **Nose Questions** | **889–1185** | **297** | questions |
| Throat Summary | 1186–1349 | 164 | theory |
| **Throat Questions** | **1350–1720** | **371** | questions |
| **Model Final Exam 1** | **1721–1875** | **155** | questions |
| **Model Final Exam 2** | **1876–2034** | **159** | questions |
| **Model Final Exam 3** | **2035–2189** | **155** | questions |
| **Model Final Exam 4** | **2190–2344** | **155** | questions |
| **Model Final Exam 5** | **2345–2504** | **160** | questions |
| **Model Final Exam 6** | **2505–2659** | **155** | questions |
| **Model Final Exam 7** | **2660–2816** | **157** | questions |
| **Recently Edited Questions** | **2817–2835** | **19** | questions |
| **Exam Night Review** | **2835–3074** | **240** | questions |

**~2,642 question pages · ~429 theory pages.** Roughly one question per page, so on the order of
**2,600 questions** — several times every other ENT bank combined.

- **Answers are marked by yellow highlight** on the correct option. Many questions carry the file's
  own explanation box; capture it rather than writing a new one.
- Question numbering **restarts within each section**, so ids must be namespaced by section.
- **Expect heavy duplication.** The 7 Model Final Exams and the Exam Night Review re-ask branch
  questions. This is the main place the "same question many times" problem lives.
- The three **Summary** sections are high-quality structured theory — use them in Phase 4.
- **No text layer.** `pdftotext` returns 0 chars throughout. `pdfimages -list` shows one 800×450 RGB
  JPEG per page, so `pdfimages -j` pulls the native image with no upscaling — this is what the
  contact-sheet tool uses.

**Correction:** an earlier entry called this file theory-only and moved it out of the question
pipeline. That was wrong — it came from sampling a single page (p.21) that happened to be a summary
slide. The user corrected it; the survey above confirms the correction.

### Throat Questions — structure verified by render, 2026-07-27

The contents table's **pp.1350–1720 is correct.** Every internal boundary below was confirmed by
rendering the pages, before any transcription:

| Pages | Content |
|---|---|
| p.1350 | title page, **"Questions"** |
| pp.1351–1706 | **MCQs Q1–Q176**, printed twice |
| p.1707 | title page, **"Solved Cases"** |
| pp.1708–1720 | **26 free-text cases**, Case 1–26, **two per page**, printed once |
| p.1721 | title page, **"Model Final Exam 1"** |

**Same three-part shape as Ear and Nose.** pp.1186–1349 before it is the Throat *Summary* — theory,
not questions — and pp.1345–1349 within it is a **"Keys For Diagnosis"** page set, a one-line-per-
diagnosis crib worth using in Phase 4 theory.

**⚠️ PARITY FLIPS AT LEAST TWICE INSIDE THIS SECTION — do not assume it.** Sampled by render:

| Question | Answered page | Parity |
|---|---|---|
| Q1, Q5, Q51 | 1352, 1360, 1450 | **even** |
| Q74, Q75, Q76 | 1497, 1499, 1501 | **odd** |
| Q173, Q174, Q175, Q176 | 1700, 1702, 1704, 1706 | **even** |

A one-page offset appears between Q51 and Q74 and unwinds again before Q173. The Ear section flipped
twice inside pp.188–258 alone, so this is the file's habit, not an exception.

> **Both flips are now located exactly, the section having been read end to end 2026-07-27.**
> Answered pages are **even pp.1352–1462**, **odd pp.1465–1653**, **even pp.1656–1706** — so the
> offset runs for 190 pages, far longer than this sample suggested. The second flip is caused by
> **p.1654, which reprints Q150 unanswered a second time**. The sampling above predicted the flips
> correctly but placed the second one at pp.1700–1706; it is actually at p.1656. **Sampling proves a
> flip exists; only reading every page finds where it is.**

**Method for this section, therefore:** render 18 pages at the *presumed* parity as usual, then
**check every tile for a highlight before transcribing it.** A tile with no highlighted option is an
unanswered page, which means the parity flipped at that point — re-render the rest of the batch at
the other parity. The check is free because the highlight is the only thing being read for.

**Explanation boxes are BACK, and patchy.** After 63 consecutive pages without one at the end of
Nose, boxes reappear at p.1352 and are present on many but not all answered pages — pp.1352, 1360,
1370, 1380, 1400, 1450, 1499, 1501 have them; pp.1497, 1702, 1704, 1706 do not. Same rule as always:
**check every page.** Use `-CropTop 0.42–0.45`, since the box sits below the options.

### Transcribed ranges

Log one row per batch: bank · pages · date · questions produced · anything unreadable.

| Date | Bank | PDF pages | Section | Ids | Qs | Notes |
|---|---|---|---|---|---|---|
| 2026-07-26 | d house ENT mcq | 12–14 | Ear → 1. Surgical anatomy of the ear (book pp.22–27) | `enthd-ear-1`…`21` | 21 | All answers printed in source. Transcript: `content\ent\qb-pages\d-house-ENT-mcq-pdf012-014-book022-027.md`. |
| 2026-07-26 | ENT endpoint | 143–186 | Ear Questions | `entep-ear-1`…`22` | 22 | Answered pages only (even). Source's own explanation boxes captured verbatim. |
| 2026-07-26 | ENT endpoint | 188–214 | Ear Questions Q23–Q36 | `entep-ear-23`…`34` | 12 | 14 questions read, **2 dropped as duplicates** (Q34 p.210 = Q23; Q35 p.212 = `entep-ear-1`). Q24 and Q36 carry no explanation box in the source. |
| 2026-07-26 | ENT endpoint | 217–227 | Ear Questions Q38–Q43 | `entep-ear-35`…`38` | 4 | Parity flipped to **odd** here. 6 read, **2 dropped** (Q38 p.217 = `entep-ear-22`; Q39 p.219 = `entep-ear-21`). Q43 is an ear-trauma question. |
| 2026-07-26 | ENT endpoint | 230–258 | Ear Questions Q44–Q57 | `entep-ear-39`…`45` | 7 | Parity flipped back to **even**. 15 read, **8 dropped as reprints** — pp.242, 244, 248, 250, 252, 254, 256, 258 all re-print questions already held. |
| 2026-07-26 | ENT endpoint | 260–290 | Ear Questions Q58–Q74 | `entep-ear-46`…`50` | 5 | 14 read, **9 dropped as reprints**. Four of those reprints carried a **fuller explanation box** than the printing already held, so they were folded in as upgrades rather than simply discarded — see below. **`Q72` was not found on any even page in this run; gap to fill.** |

| 2026-07-26 | ENT endpoint | 292–340 | Ear Questions Q75–Q99 | `entep-ear-51`…`67` | 16 | Parity back to **even**. 25 read, **13 dropped as reprints** (Q75, 79, 81, 83, 86, 92, 94, 96 plus the five folded in as upgrades), and `entep-ear-62` removed on review — see below. Reprint rate falls sharply from p.294 as the survey predicted. Q80 and Q93 carry no explanation box. |

| 2026-07-26 | ENT endpoint | 342–370 | Ear Questions Q100–Q114 | `entep-ear-68`…`79` | 12 | 15 read, **3 dropped** (Q101 p.344 = `entep-ear-3`; Q102 p.346 = `entep-ear-25`; Q112 p.366 = `entep-ear-57`). **Explanation boxes almost vanish in this run** — only p.342 prints one, so 11 of 12 carry an explicit "the source prints no explanation" note. |

| 2026-07-26 | ENT endpoint | 372–396 | Ear Questions Q115–Q127 | `entep-ear-80`…`89` | 9 | 13 read, **4 dropped** (Q117 p.376 = `entep-ear-32`; Q122 p.386 = Q115 verbatim; Q125 p.392 = Q116 verbatim — **two within-batch reprints**, a pattern not seen before; Q126 p.394 = `entep-ear-61`, caught by the new option-set check). **No page in this run prints an explanation box.** |

| 2026-07-26 | ENT endpoint | 398–426 | Ear Questions Q128–Q142 | `entep-ear-91`…`103` | 12 | 15 read, **3 dropped** (Q128 p.398 = `entep-ear-32`, its third reprint; Q129 p.400 = `entep-ear-56`; Q136 p.414 = `entep-ear-55`). No explanation box on any page. Q131/Q132 (pp.404/406) are a **linked pair** — Q132's stem says only "the condition in the previous case", so `entep-ear-93` carries a bracketed summary of Q131 to stand alone, flagged in its `source`. |

> **Superseded — current total is 680 ENT items** (598 MCQs + 82 cases), validated 2026-08-04 in a
> real `file://` boot. Added from the model exams: `entep-mfe1-1…3` (Exam 1), `entep-mfe3-1`
> (Exam 3), `entep-mfe4-1…32` (Exam 4), `entep-mfe5-1…46` (Exam 5), `entep-mfe6-1` (Exam 6),
> `entep-mfe7-1` (Exam 7); **Exam 2 added none.** One House entry was **folded** on 2026-08-03 when a
> question gained `alsoIn`. **By bank: 660 Endpoint, 21 House, 0 Grade Gain — which sums to 681, not
> 680, because one question is in two banks and counts in both.** The dated snapshot below is kept as
> the record of what was checked on 2026-07-27 and how.

**Running total: 597 ENT items** — 515 MCQs (21 `enthd-` + 243 `entep-ear-` + 115 `entep-nose-`
+ 136 `entep-throat-`) + **82 free-text cases** (37 Ear `entep-case-`, 21 Nose `entep-nose-case-`,
**24 Throat `entep-throat-case-`**).
By bank: **576 Endpoint, 21 House, 0 Grade Gain**.
Validated in-browser 2026-07-27 against a freshly loaded copy of the file:
515 MCQs, 82 cases all carrying a valid `answer` and non-empty `keys`,
0 bad module refs, 0 bad chapters against the **104** chapters in `MODULES`,
every item carrying a valid `bank`,
0 duplicate ids, **0 broken cross-references**, no missing `source`,
`explanation` or `objective`, every `answer` index within range, option counts all 2–5.
The chapter split sums to 597, so the array holds no sparse gap.

> **The cross-reference check was tightened on 2026-07-27 and immediately caught something.** It had
> been matching any `` `ent…` `` in backticks, which silently swept up **chapter ids** (`` `ent-osa` ``,
> `` `ent-paedlar` ``) and reported them as broken question references — 17 false positives. The
> pattern now requires a known id prefix **and** a trailing digit. With that fix it returned exactly
> **two real hits**, both mine: the retired ids `entep-throat-case-11` and `entep-throat-case-12`
> were written **in backticks** inside the prose explaining that they are retired, so the checker
> correctly read them as references to entries that do not exist. Retired ids are now written
> **without backticks**. **A check that reports 17 false positives will get its two true positives
> ignored** — that is the lesson, and it is the same one the duplicate check taught about
> normalisation.

> **The real app page could NOT be re-read this time — and that is not a data problem.** The preview
> pane kept serving its pre-batch snapshot (`QUESTIONS` 536, throat 99) through a forced re-navigate,
> which is the documented snapshot gotcha in `CLAUDE.md` §7. What *was* verified: the shell booted
> with 4 modules, **104 chapters** and **zero console errors**, and `data/questions.ent.js` and
> `data/cases.ent.js` were then loaded fresh into that live page and returned `Q_ENT` **515**,
> `C_ENT` **58**, concatenated **573**, last id `entep-throat-138`, with no load error. The file
> parses and the counts are right; only the pane's cached copy is stale. **Do not record a stale
> pane reading as an app failure, and do not record it as a pass either — say which was checked.**

The stem-duplicate check returns exactly **five** pairs, every one a
**confirmed variant** documented as deliberate in its own `source` string — `entep-ear-76`/`96`,
`entep-ear-17`/`98`, `entep-nose-97`/`112`, `entep-nose-98`/`115` and `entep-throat-15`/`65`.

**The option-set check was tightened on 2026-07-27** to compare option sets **sorted**, so that a
reprint which merely reorders its options is caught. It now returns **seven** pairs, and every one is
a genuinely different question that happens to reuse a stock option set — the four pharyngeal
spaces, the four vocal-cord palsies, the tracheostomy complications. Two of them
(`entep-ear-52`/`entep-throat-39`, `entep-ear-36`/`entep-throat-53`) are the cross-section pairs
already documented; `entep-throat-63`/`92` is Horner's syndrome against the chronic
retropharyngeal vignette. **Sorted comparison is the version to keep** — the unsorted one had been
silently passing reordered reprints, which is exactly how `enthd-ear-9` was missed at p.456.

**The seventh pair is the first CROSS-BANK duplicate in the project** — `enthd-ear-15` (House, p.26)
and `entep-throat-103` (Endpoint, p.1623) are the same pyriform-fossa referred-otalgia question,
reworded. **Both are kept.** The two entries carry different `bank` values, and the bank label is
content the learner filters on, so deleting either would misrepresent what that bank contains. This
is the one situation in which a confirmed duplicate is *not* folded — see §8. The stem check missed
it because the wording differs; only the sorted option-set check saw it. **Expect more of these as
the second and third banks are transcribed, and never fold across banks.**

The `entep-ear-` count fell 245 → 243 on 2026-07-27 — see *Two reprints the old duplicate check
missed* below.

**Provenance tally, 2026-07-27** (counts by grep over `questions.ent.js` + `cases.ent.js`, re-run
after each batch):

| Marker | Count | Meaning |
|---|---|---|
| `Written for this bank` | 470 | explanation authored here; source printed none |
| `not taken from the course material` | 211 passages / 177 entries | a point inside an authored explanation that the cached slides do not cover |
| `prints its own explanation box` | 93 | source's own text, verbatim, deliberately **unmarked** |
| **no provenance either way** | **67** | origin not recorded — see the fifth check below |

**Two counting conventions, and they must not be confused.** `Written for this bank` and `prints its
own explanation box` appear at most once per entry, so 470 and 93 are both **occurrences and
entries** — checked both ways on 2026-07-27, grep and in-browser filter agree at 470. `not taken from
the course material` is deliberately repeated inside a single explanation wherever a separate clause
needs flagging, so **211 is passages; the number of entries carrying at least one is 177.**

**pp.1617–1706 repeated the pattern of the batch before it exactly.** Another 45 pages without a
single box, so `Written for this bank` went 409 → **446** while `prints its own explanation box`
again did not move at all. `not taken from the course material` grew 156 → **199**. Across
pp.1537–1706 — **90 consecutive answered pages, 85 printings** — the endpoint prints **no explanation
box whatsoever**. Every Throat entry from `entep-throat-70` to `138` is therefore authored.

**The 26 Throat cases then did the same thing again**, and by now it is a rule rather than an
observation: **no case section in this file prints an explanation for any case.** Ear (37), Nose (21)
and Throat (26) are unanimous across **84 printed cases**. `Written for this bank` went 446 → **470**
(+24, one per kept case) and `prints its own explanation box` **did not move for the third batch
running**. **`prints its own explanation box` has been stuck at 93 since p.1535** — the endpoint has
not printed a single explanation box in **103 consecutive answered pages**, pp.1537–1720.

**pp.1537–1615 reversed the Throat trend completely.** Not one of its 40 printings carried a box, so
`Written for this bank` jumped 377 → **409** in a single batch while `prints its own explanation
box` did not move at all — the first Throat batch in which it did not. `not taken from the course
material` grew 124 → **156**, the largest jump of any batch, because this run repeatedly asked about
things the slides never cover: Vincent's angina, leucoplakia, the definite signs of chronic
tonsillitis, the check-valve mechanism of an inhaled foreign body, Moure's sign as an eponym.
**When the boxes stop, the slide gaps become visible** — the two move together.

**A fourth provenance pattern appears in Throat, 2026-07-27.** The Throat boxes are much terser than
the Nose ones — one to three sentences — so where a box leaves a real gap the entry now carries
**both**: the box verbatim and unmarked first, then a clearly separated authored paragraph ending
*"the addition is not part of the source's box."* The box itself is never edited. 14 of the first 17
Throat entries take this form, and **all 18 of the second batch** — pp.1388–1436 print a box on every
answered page, so `prints its own explanation box here` climbed 60 → 78 in one run while
`Written for this bank` grew by only 19. The third batch (pp.1438–1481) took it to **91**: only one
of its 15 entries, `entep-throat-48` (p.1462), had no box at all.
| `Ask ChatGPT` | **3 questions** | source text that is **AI-pasted**, flagged inline — `entep-nose-34`, `entep-nose-35` (pp.1011, 1015) and now `entep-throat-53` (p.1489). All verified at 300 dpi. **Not confined to one section**, so every box must be checked. |

**A fifth check was added 2026-07-27 — provenance-marker coverage.** It counts entries whose
`explanation` + `source` carry **neither** a "source prints its own box" phrase **nor** the
`Written for this bank` marker, i.e. text whose origin is not recorded either way. It returns **67**,
re-measured in-browser 2026-07-27 with every id enumerated and the residue inspected by hand:

| Prefix | Count | Page range | Status |
|---|---|---|---|
| `entep-ear-` | 46 | inside `entep-ear-1`…`68`, i.e. **pp.144–342 only**, none above p.342 | the earliest transcription batches, written before the marker rule was adopted on 2026-07-26 |
| `enthd-ear-` | 21 | House bank, p.23 onward — `enthd-ear-1`…`21`, all of them | a different bank with its own layout; whether it prints explanation boxes at all has never been checked |
| `entep-nose-` | **0** | — | every Nose entry records its origin |
| `entep-throat-` | **0** | — | every Throat entry records its origin |
| cases | **0** | — | every case records its origin |

> **Correction, 2026-07-27 (second one).** This entry has now been wrong twice, both times because
> the *phrase list*, not the data, was wrong. It said **80**, then **77**; the measured figure is
> **67**. The 10-entry drop from 77 is **not** new marking work — it is 13 entries that always did
> record their origin in a wording the pattern did not match, offset by 3 the looser pattern had
> been over-crediting. Two examples, both plainly marked: `entep-nose-33` says the reprint at p.997
> carries *"the source's own explanation box"*, and `entep-case-8` says the source prints
> *"Diagnosis with explanation"* here. **The previous record also claimed no unmarked case exists
> while the canonical-only pattern was flagging `entep-case-8` — the contradiction was the clue.**
>
> **The phrase list that matches reality** is `Written for this bank` OR `own explanation` OR
> `explanation box` OR `Diagnosis with explanation`. Anything narrower over-reports. The lesson is
> the same one the duplicate check taught: **a coverage check is only as good as its normalisation,
> and a shrinking count must be explained entry by entry before it is believed.** All 13 were
> inspected individually before this number was written down.
>
> When folding a reprint into a survivor, keep the canonical phrase `prints its own explanation box`
> in the rewritten `source`: five folds on 2026-07-27 dropped it by accident and knocked that tally
> from 93 to 88 until it was restored.
>
> **46 of the 67 sit in one contiguous block and 21 in one bank**, so the whole item is still closed
> by re-rendering pp.144–342 and checking a single House page.

These are almost certainly all authored — the endpoint prints essentially no boxes before ~p.340 —
but **that has not been verified page by page, so it is recorded as unknown, not assumed.** Settling
it means re-rendering pp.144–342 to check for boxes, and rendering a House page. **Owed in the
end-of-ENT review**, batched there rather than done piecemeal.

The climb from 3 to 45 is the Nose section, which prints a box on almost every page. Two Nose
explanations that had been written are now retired, replaced by the source's own box found on a
later reprint — so the authored count is nearly flat while the transcribed count grows.
The 90 is a count of *flagged passages*, not of questions — many sit inside otherwise
slide-grounded explanations and flag only one clause.

**A fourth check was added 2026-07-26 — cross-reference resolution.** Explanations now cite sibling
question ids in backticks (`` `entep-ear-27` ``), and a wrong id is invisible to every other check.
The validator extracts every `` `ent…-N` `` from all explanations and asserts it resolves against
the live id set, cases included. It caught two dead references on its first two runs —
`entep-ear-83` (cited as a Gradenigo question; it is the cochlear implant one) and `entep-ear-88`
(deleted as a duplicate in an earlier batch). **Run it after every batch.**

**Chapter split** (MCQs + cases, 2026-07-27, counted in-browser off a freshly loaded copy):
`ent-aom` 61 · `ent-csom` 50 · `ent-nasalmass` 39 · `ent-otalgia` 34 · `ent-earanat` 33 ·
`ent-hearing` 33 · `ent-vertigo` 29 · `ent-facial` 29 · `ent-pharsupp` 27 · `ent-hoarse` 26 ·
`ent-nasalobs` 25 · `ent-tonsils` 24 · `ent-stridor` 21 · `ent-sinusitis` 19 · `ent-audio` 18 ·
`ent-septum` 17 · `ent-epistaxis` 16 · `ent-otorrhea` 14 · `ent-dysph` 12 · `ent-rhin` 11 ·
`ent-neck` 11 · `ent-paedlar` 10 · `ent-vocal` 8 · `ent-pharanat` 6 · `ent-sinuscomp` 6 ·
`ent-noseanat` 6 · `ent-osa` 5 · `ent-swallow` 3 · `ent-facialpain` 2 · `ent-phon` 2.
**30 chapters, summing to 597**, matching the running total — so the array holds no sparse gap.

**ALL 30 ENT CHAPTERS HOLD AT LEAST ONE QUESTION.** `ent-osa` was the last empty one and was
opened on 2026-07-27 by three printings in pp.1577–1595 — Q114/Q123 on polysomnography and Q119 on
the commonest cause of paediatric OSA. The validator's empty-ENT-chapter list returns `[]`.
The throat chapters grew again across pp.1617–1706: `ent-nasalmass` 31 → 38, `ent-pharsupp` 15 → 23,
`ent-tonsils` 12 → 20, `ent-hoarse` 22 → 25, `ent-dysph` 5 → 9, `ent-neck` 8 → 10, `ent-paedlar`
5 → 7, `ent-osa` 2 → 4, `ent-stridor` 18 → 19. **`ent-nasalmass` gaining 7 from the Throat section
is not a mis-file** — the bank's nasopharyngeal-carcinoma questions sit in Throat but belong to that
chapter, which is also why the nasopharynx slide gap keeps growing.

> **Correction.** The previous split recorded here summed to **297** against a stated total of
> **273** — it was wrong, not merely stale. The figures above are a fresh grep over both
> `questions.ent.js` and `cases.ent.js` and do reconcile. Always check the split sums to the total.

**Explanation boxes are not guaranteed.** They are dense to ~p.340, largely stop, and then return
briefly at pp.666–670 (see above). Where the source prints none the explanation is **written here**,
grounded in the cached slides and carrying the `Written for this bank` marker — the older policy of
leaving a bare "the source prints no explanation" note was superseded on 2026-07-26.

`ent-audio1` became `ent-audio` when split chapters were merged — see `MEMORY.md` decisions log.

### A duplicate is not always a discard — check the explanation box first

Reprints in this file are **not** always byte-identical. Several later printings carry a
substantially fuller explanation than the first, and one silently corrects a term. When a duplicate
is dropped, compare the two explanation boxes and keep the better one on the surviving question.
Upgrades applied so far:

| Kept id | Upgraded from | What the later box added |
|---|---|---|
| `entep-ear-30` | p.284 (Q70) | The full 5-class **Ototoxic Drugs** list, not just aminoglycosides |
| `entep-ear-43` | p.286 (Q71) | The full **CSOM treatment** breakdown, safe vs unsafe |
| `entep-ear-39` | p.290 (Q74) | The **furunculosis vs mastoiditis** discriminators; p.230 had no box at all |
| `entep-ear-22` | p.276 (Q66) | A full mechanism for incudomalleolar disruption, replacing an authored line |
| `entep-ear-32` | p.248 (Q52) | Reads **"serous labyrinthitis"** where p.206 reads "synovial labyrinthitis" |

### Removed as duplicates

`entep-ear-5` (p.152, mixed hearing loss) was deleted as a duplicate of `entep-ear-32` — identical
stem and answer, different distractors. **The later printing was kept rather than the first**,
because it carries the source's own explanation while `entep-ear-5`'s had been authored. The id is
left unused and a comment marks the original position. This is a deliberate exception to the
"keep the first occurrence" rule below: **prefer the printing whose explanation comes from the
source.**

`entep-ear-62` (p.324, Q91, mixed hearing loss, answer "unsafe type of CSOM") was added and then
**removed on review**, because it fails this file's own duplicate rule against `entep-ear-32`:
same stem, and "unsafe CSOM" names the same entity as that question's answer "cholesteatoma" —
only the distractors differ. It had first been kept under a looser "distinct option set" reading;
the stricter rule is the one that was already written down, so it wins. Id left unused, page folded
into `entep-ear-32`'s `source`.

### Free-text cases — done

**2026-07-26.** All **37 cases** from `ENT endpoint.pdf` pp.742–760 transcribed to
`app\data\cases.ent.js` as `type:'case'`, and the app extended to support them. Pages read:
742–760, every page, one read each — this section is **not** printed twice, unlike the MCQs.

Distribution: `ent-csom` 9 · `ent-facial` 6 · `ent-aom` 9 · `ent-hearing` 4 · `ent-vertigo` 3 ·
`ent-otalgia` 4 · `ent-otorrhea` 3.

Four are ear-trauma items, marked `EAR TRAUMA` in `source` alongside the four MCQs already
registered below: `entep-case-1`, `25`, `26`, `27`.

**Case 8 (p.745) is the only one in the section carrying the source's own explanation** — it prints
"Diagnosis with explanation". Every other case explanation is written for this bank and marked.

Pairs the examiner sets deliberately, worth keeping together when writing theory:

| Pair | Same presentation | Discriminated by |
|---|---|---|
| Case 17 / Case 23 | unsafe CSOM + headache + fever | **vomiting** (raised ICP → brain abscess) vs **neck rigidity** (meningitis) |
| Case 26 / Case 27 | temporal bone fracture + facial palsy | **normal drums, immediate, complete** (transverse) vs **bleeding ear, torn drum, delayed, partial** (longitudinal) |
| Case 12 / Case 15 | chronic otorrhoea | **foul + attic perforation** (unsafe) vs **odourless + central perforation** (safe) |
| Case 33 / Case 34 | vertigo, no hearing loss | **seconds, positional** (BPPV) vs **days, post-URTI** (vestibular neuritis) |

### Explanations — authored where the source prints none

**2026-07-26.** Explanation boxes thin out sharply after p.342 of the endpoint file and vanish
entirely from p.372 to p.426. On the user's instruction, the placeholder note was replaced with a
**written explanation** for all **42** questions that lacked one.

Method, and it is not optional:

1. Read the chapter's **cached lecture slide** first — `content\ent\lectures\*.txt`, free to read.
2. Write the explanation from the slide, and **name the slide file inside the explanation**.
3. End every authored explanation with `Written for this bank — the endpoint file prints no
   explanation here.` The marker is what keeps source text and authored text distinguishable
   forever; never omit it.
4. Where the slides do **not** cover the point, say `not taken from the course material` in the
   text itself.

Slides used: `L15) Facial nerve disorders`, `L16) Chronic otitis media`, `L17,18) Otorrhea and
otalgia`, `L19.1) hearing loss`, `L20) vertigo`, `L21.1) acute otitis media`, `L21.2) Otitis media
with effusion`.

**7 of the 42 rest partly on outside knowledge** and are flagged in-file as such — `entep-ear-38`
(traumatic perforation management), `73` (Schwartze's sign), `80` (syringing contraindicated in
foreign body), `86` (acute necrotizing OM as a distinct entity), `91` (never biopsy a glomus),
`98` and `102` (otosclerosis sex ratio and pregnancy). **These are the candidates for a book read**
— if the ENT ear book covers them, replace the authored reasoning with a page-cited version.

### Near-duplicate pairs kept deliberately

The endpoint file recycles a stem and **swaps one option**, which changes the correct answer and so
escapes both duplicate checks. Kept as separate questions, cross-referenced in each other's
explanation:

| Pair | Same stem | Differs |
|---|---|---|
| `entep-ear-75` / `entep-ear-89` | Bell's palsy treatment EXCEPT | *vasodilators* vs *antibiotic therapy* |
| `entep-ear-76` / `entep-ear-96` | Otalgia EXCEPT | *post-tonsillectomy* vs *perichondritis* |

These test different facts and are worth keeping. **Do not** let the option-set check auto-remove
them — it will not flag them, but a looser stem-only check would.

### Duplicate detection — the check that actually works

Exact stem+options matching **misses most reprints**, because this file rewords the question tail
while keeping the item identical. Three duplicates slipped through it in one batch and were only
caught by a second, stricter test:

> **match on the sorted option set + the text of the correct answer, ignoring the stem entirely.**

`entep-ear-90`/`56` ("indicate:" vs "indicate the occurrence of which complication?"),
`entep-ear-88`/`61` ("non serviceable hearing" vs "profound hearing loss") and `entep-ear-97`/`55`
were all found this way. **Run both checks after every batch**, not just the exact one.

| 2026-07-26 | ENT endpoint | 428–456 | Ear Questions Q143–Q156 | `entep-ear-104`…`116` | 13 | 15 read, **2 dropped** (Q145 p.432 = `entep-ear-101`; Q156 p.456 = `enthd-ear-9`, options reordered — caught only by the option-set check). No explanation box on any page. **Source numbering error: two different questions are both numbered 151**, on pp.444 and 446; both kept, each noting the clash in its `source`. |

| 2026-07-26 | ENT endpoint | 458–486 | Ear Questions Q157–Q171 | `entep-ear-117`…`130` | 14 | 15 read, **1 dropped** (Q160 p.464 = `entep-ear-9`, the otomycosis "black specks" item — the reprint adds a fifth option, "Otosporin ear drops"; the p.160 printing is kept and p.464 folded into its `source`). No explanation box on any page, so all 14 explanations are written here. **Reprint rate 1 in 15 — the lowest of any batch so far**, so the recycling zone appears to be behind us. |

| 2026-07-26 | ENT endpoint | 488–534 | Ear Questions Q172–Q195 | `entep-ear-131`…`154` | 24 | 24 read, **0 dropped** — the first batch in this file with no reprint at all. No explanation box on any page. |

| 2026-07-26 | ENT endpoint | 536–582 | Ear Questions Q196–Q219 | `entep-ear-155`…`178` | 24 | 24 read, 0 dropped. Several re-ask a held fact from a new angle with a different option set (`entep-ear-163` vs `77`, `165` vs `125`, `167`/`168` vs `143`, `173` vs `137`); all kept and cross-referenced in the explanations. |

| 2026-07-26 | ENT endpoint | 584–630 | Ear Questions Q220–Q243 | `entep-ear-179`…`200` | 22 | 24 read, **2 dropped** (Q237 p.618 = `entep-ear-68` p.342; Q241 p.626 = `entep-ear-67` p.340 — both verbatim). From Q237 the source switches option labels from lower to upper case; formatting only. |

| 2026-07-26 | ENT endpoint | 632–678 | Ear Questions Q244–Q267 | `entep-ear-201`…`221` | 20 | 24 read, **4 dropped**. Q253 (p.650) duplicates Q262 (p.668) **within the same batch** — Q262 kept because it carries the source's own explanation box. Q257 (p.658) = `entep-ear-42`; Q258 (p.660) = `entep-ear-44`. Q251 (p.646) = `entep-ear-50`, caught by **both duplicate checks after a grep sweep had missed it** — `entep-ear-208` removed and its grounded explanation moved into `entep-ear-50`, whose original was a thin unmarked early-batch line. **Explanation boxes resume at p.666** after ~150 pages without one. |

| 2026-07-26 | ENT endpoint | 680–740 | Ear Questions Q268–Q298 | `entep-ear-222`…`251` | 30 | 31 read, **1 merged, 0 dropped as reprints**. Q276 (p.696) and Q295 (p.734) are the same vignette with one word changed in the keyed option — "**MRI** scan petrous bones" on p.696, "**CT** scan petrous bones" on p.734 — held as a single entry (`entep-ear-230`) citing both printings, since the bank keys either modality as the exception. **No explanation box anywhere in the run**, confirmed on the sheet and again on a deeper re-render of pp.696, 700 and 712. **THIS COMPLETES THE EAR MCQ SECTION.** |

**Ear Questions are done.** Q298 on p.740 is the last numbered MCQ; p.742 begins the 37 option-less
cases, transcribed earlier. `ENT endpoint.pdf` pp.143–740 is fully read — **299 pages of answered
questions yielding 251 `entep-ear-` MCQs plus 37 cases.**

**Three near-variants in the final batch were kept rather than merged**, following the
`entep-ear-58`/`99` precedent: their option sets genuinely differ, so each is a distinct question a
learner could meet. Each is cross-referenced to its earlier printing in the explanation —
`entep-ear-227` (p.690) vs `entep-ear-44` (p.240) on Meniere's EXCEPT, and `entep-ear-245` (p.726)
vs `entep-ear-122` (p.470) on bilateral conductive deafness in a child.

**Explanation boxes returned at p.666.** pp.666, 668 and 670 each print a boxed note; those three
(`entep-ear-215`, `216`, `217`) are transcribed verbatim and carry **no** authored-text marker.
This reverses the "boxes stopped after ~p.340" pattern recorded below — expect them intermittently
from here, and check every page rather than assuming.

**Two pages ran past the contact-sheet crop** (pp.662 and 678, long stems) and had to be re-rendered
at `-CropTop 0.55`. Whenever a tile's last visible line is an option rather than white space,
re-render that page before transcribing.

| 2026-07-26 | ENT endpoint | 891–933 | **Nose Questions** Q1–Q23 | `entep-nose-1`…`22` | 22 | **Parity flipped to ODD** at the section boundary. **21 of the 22 carry the source's own explanation box**, transcribed verbatim and unmarked — only Q14 (p.917) prints none. 0 reprints. **Source numbering error at pp.926–927** (see below). Q1 is a pharyngeal question filed under Nose; chaptered by content. |

**The Nose section prints explanations.** This is the single most important operational change since
the Ear section. Boxes appear on essentially every answered page, where the Ear section printed
three in its last 400 pages. Transcription now dominates authoring, provenance improves sharply, and
pages take longer to read — budget `-CropTop 0.45` rather than `0.30`, because the box sits below
the options.

**Source numbering error, pp.926–927.** The same question — 30-year-old female, unilateral watery
rhinorrhoea increasing on bending forward — is printed as **Q19** unanswered (p.926) and as **Q20**
answered (p.927). There is no separate Q19 answer page and no separate Q20 question page. Verified
by rendering pp.924, 926 and 928; nothing is missing, the bank skips a number. Held as
`entep-nose-19` recording both numbers. **Do not assume a missing number means a missing question —
check the facing page before concluding anything is lost.**

**pp.887–888 are the tail of the Nose Summary** and hold a compact *pattern → diagnosis* list
(foreign body, choanal atresia, atrophic rhinitis, allergic polyps, antrochoanal polyp, CSF
rhinorrhoea, oroantral fistula, chronic sinusitis, fracture nose, septal haematoma). Worth caching
for Phase 4 theory — **not yet transcribed**.

| 2026-07-26 | ENT endpoint | 935–969 | Nose Questions Q24–Q41 | `entep-nose-23`…`36` | 14 | 18 read, **4 dropped as reprints — all four from the EAR section**, a pattern not seen before: Q27 (p.941) = `entep-ear-49`; Q30 (p.947) = `entep-ear-46`; Q33 (p.953) = `entep-ear-37`; Q34 (p.955) = `entep-nose-13` (same four arteries reordered). **`entep-ear-46` was upgraded** — the p.947 reprint carries the source's own explanation box where p.260 printed none, so the box replaced the authored text. Q32 (p.951) kept as a **variant** of `entep-nose-6`: same fact, different option set, both with their own box. 12 of the 14 kept carry the source's box; only Q38 (p.963) and Q40 (p.967) print none. |

**The Nose section recycles EAR questions.** Every reprint in this batch came from the Ear section,
not from within Nose. The grep sweep before each batch must therefore cover the **whole** file, not
just the current section — checking `entep-nose-*` alone would have missed three of the four.

| 2026-07-26 | ENT endpoint | 971–1005 | Nose Questions Q42–Q59 | `entep-nose-37`…`50` | 14 | 18 read. **1 merged** (Q44 p.975 = Q54 p.995, same question twice; p.995 held because p.975 misprints "MRI" as "MRL"). **3 dropped as reprints**, each folded into the entry it duplicates: Q55 (p.997) = `entep-nose-33`, Q57 (p.1001) = `entep-nose-28`, Q58 (p.1003) = `entep-nose-27`. **Two of those three upgraded the entry they duplicated** — see below. Q59 (p.1005) kept as a **variant** of `entep-nose-12`. Q42 (p.971) is highlighted in **cyan, not yellow**. |

**Three explanation upgrades from reprints in this batch.** The rule that the printing carrying the
source's own box wins keeps paying:

| Entry | Upgraded from | What the later printing gave |
|---|---|---|
| `entep-nose-33` | p.997 (Q55) | **The source's own box, where p.963 printed none** — the text written for p.963 was retired |
| `entep-nose-27` | p.1003 (Q58) | The box additionally names **beta-2-transferrin** alongside beta-trace protein |
| `entep-nose-39` | p.975 + p.995 | Two different boxes for the same question; both transcribed into the one entry |

### A defect in the source: Q45–Q47 have no vignette

`entep-nose-40`, `41` and `42` (pp.977, 979, 981) all read **"that patient"** and **no case is
printed anywhere**. pp.970, 972, 974, 976, 978 and 980 were rendered and checked: p.974 is Q44, a
standalone question about a different patient, and the unanswered pages carry the same bare stems.

Left as printed the three are unanswerable, so a **bracketed vignette reconstructed from the bank's
own answer key** (Q46 keys juvenile nasopharyngeal angiofibroma, Q45 nasal packing, Q47
embolisation) is supplied on each, and marked as reconstructed in **both the stem and the `source`**
so it can never be mistaken for the bank's words. This is the first time a vignette has had to be
supplied rather than transcribed — record any further instance here.

| 2026-07-26 | ENT endpoint | 1007–1041 | Nose Questions Q60–Q81 | `entep-nose-51`…`57` | 7 | 18 read, **11 dropped as reprints — the heaviest rate since the Ear recycling zone**. Every dropped page folded into the entry it duplicates, and **four of them upgraded it**: Q61→`entep-nose-31` (full causes-of-epistaxis list by age), Q62→`34` (lamina papyracea, children at higher risk), Q63→`38` (adenoids rank 2nd after common cold), Q64→`35` (a box where p.967 printed none). Q68 kept as a **variant** of `entep-nose-13` — third printing of the Kiesselbach fact, different option set. **Q74–Q77 do not exist**: numbering jumps Q73→Q78, verified by rendering the even pages either side. |

### The bank's explanation boxes are partly AI-generated

**The boxes on p.1011 and p.1015 both end with the literal string "Ask ChatGPT"** — the button text
from a chatbot web session, pasted in along with the answer. **Verified by rendering both pages at
300 dpi**, not inferred from a contact sheet.

This matters for how much weight those boxes carry. They are **not the examiners' own writing**, and
they are unreviewed. Both are still transcribed — they are what the bank prints and the learner will
read them — but each carries an inline ⚠️ noting the marker, and the `source` says so too. Grep
`Ask ChatGPT` over `questions.ent.js` for the live list; it stands at **2**.

Two consequences for the method:

- **Check every explanation box for the marker from here on.** Boxes transcribed before p.1011 were
  not checked for it, so it cannot be ruled out that some carry it. Worth a sweep during the
  end-of-ENT review.
- **The "source box beats authored text" rule needs a caveat.** It still holds — the bank's text is
  what the learner sees — but an AI-pasted box is not evidence of anything, so where one contradicts
  the cached slides, *the slides win* and the discrepancy must be recorded.

| 2026-07-27 | ENT endpoint | 1043–1077 | Nose Questions Q82–Q99 | `entep-nose-58`…`74` | 17 | 18 read, **1 dropped** (Q94 p.1067 = `entep-nose-5`, verbatim bar one clause). Reprint rate collapses from 11-of-18 back to 1-of-18. **Not one of these 18 pages prints an explanation box** — the Nose section's run of boxes ends at p.1041, so every explanation in this batch is authored and marked. Four kept as **variants** with genuinely different option sets: Q83 vs `entep-nose-28`, Q86 vs `24`, Q89 vs `13`/`53` (the **third** distinct option set for Kiesselbach's plexus), Q96 vs `37` (the child counterpart of the adult stem). |

### The Nose section's explanation boxes stop at p.1041

pp.891–1041 printed a box on nearly every answered page — 21 of the first 22 questions. **pp.1043–
1077 print none at all**, across all 18 pages. Transcription flips back to authoring without warning.
Consistent with the Ear section's behaviour, where boxes appeared, vanished for ~150 pages, resumed
at p.666 and stopped again at p.680. **Assume nothing about the next batch; check every page.**

### The nasopharynx is barely in the cached slides

Four questions in the pp.1043–1077 batch — `entep-nose-58` (EBV titre), `67` (fossa of Rosenmüller),
`69` (commonest sinonasal malignancy) and `70` (commonest NPC presentation) — rest on outside
knowledge. Grepping all 32 cached ENT lecture files returns **nasopharyngeal carcinoma only as a
one-line cause of adult otitis media with effusion** (`L21.1`, `L21.2`). No lecture covers the
nasopharynx as a topic. Each of the four says so in its own explanation. **A targeted book read
would replace all four with page-cited text** — the highest-value single gap found in Nose so far.

### Two reprints the old duplicate check missed — found 2026-07-27

The stem-duplicate check was tightened to strip **letter case** as well as punctuation, and
immediately returned four same-stem pairs in the Ear section that every previous run had passed.
Every one of them differs from its twin only in capitalising `EXCEPT` versus `except`, which the old
normalisation preserved.

Two were **genuine reprints and have been merged**:

| Removed | Kept | Why the survivor |
|---|---|---|
| `entep-ear-58` (p.316) | `entep-ear-99` (p.418) | same four options abbreviated, same key; p.418 carries the fuller slide-grounded explanation |
| `entep-ear-60` (p.320) | `entep-ear-81` (pp.374/392) | option a written out at greater length, same key; p.374 carries the fuller explanation |

Both removed ids are **left unused**, with a comment at the original position, and the extra pages
folded into the survivor's `source` — `entep-ear-81` now records **three** printings. One
cross-reference in `entep-ear-227` pointed at the removed `entep-ear-58` and was repointed to `99`;
the cross-reference check caught it, which is exactly what it exists for.

Two were **genuine variants and both are kept**, now documented as deliberate in their own `source`
strings so a future run does not re-open the question:

| Pair | Differs in |
|---|---|
| `entep-ear-76` (p.362) / `entep-ear-96` (p.412) | fourth option — post-tonsillectomy vs perichondritis |
| `entep-ear-17` (p.176) / `entep-ear-98` (p.416) | fourth option — "mixed hearing loss" vs "SNHL or vertigo" |

**The lesson is about the check, not the content.** A duplicate check is only as good as its
normalisation, and this one had a blind spot across the whole Ear section. Worth re-running the
tightened version over every module as it completes.

| 2026-07-27 | ENT endpoint | 1079–1113 | Nose Questions Q100–Q117 | `entep-nose-75`…`90` | 16 | 18 read, **2 dropped as verbatim reprints** (Q109 p.1097 = `entep-nose-50`; Q110 p.1099 = `entep-nose-28`, now its **third** printing). **Second consecutive batch of 18 pages with no explanation box.** Six kept as **variants** of earlier printings, all cross-referenced: Q100 vs `56`, Q101 vs `4`, Q105 vs `39`, Q107 vs `20`, Q115 vs `8`, Q116 vs `13`/`53`/`65`. |

### A three-question cluster on one case, and a fourth Little's area option set

**Q103 (p.1085), Q106 (p.1091) and Q107 (p.1093) all use the same patient** — a 12-year-old boy with
his fourth severe nosebleed of the year and a firm smooth vascular nasal mass. Q103 and Q106 ask the
same next step with **different distractors** and both key CT; Q107 asks the diagnosis and keys
juvenile nasopharyngeal angiofibroma. All three kept as `entep-nose-78`, `81` and `82`, each
cross-referencing the other two. This is the first time the file has built three consecutive
questions on one vignette.

**Q116 (p.1111) gives Little's area a FOURTH distinct option set** — five arteries, and the
odd-one-out is the **"nasolabial artery"**, a vessel that does not exist, rather than the posterior
ethmoidal. Fifth printing of the fact overall (`entep-nose-13`, `53`, `65`, `89`; p.955 was dropped
as a verbatim reprint). This one question has now been asked five ways.

**A second cyan-highlighted key: p.1091.** The first was p.971 (`entep-nose-37`). The answer is
unambiguous in both, but **the highlight colour is not a reliable signal on its own** — read the
option, not the shade.

| 2026-07-27 | ENT endpoint | 1115–1149 | Nose Questions Q118–Q134 (18 questions — see below) | `entep-nose-91`…`108` | 18 | 18 read, **none dropped — the first batch in this file with no reprint at all.** Six repeat a held fact with a genuinely different option set and are cross-referenced: Q119 vs `46`, Q122 vs `21`, Q127 and Q133 vs `18`/`71`, Q128 vs `25`, Q131a vs `34`. Q130 has the **same four options and key as `entep-nose-59`** but adds "reducing Fehling's solution" to the stem, testing a different discriminator — both kept, and the identical option set is recorded so a future sweep does not read it as an oversight. Third cyan-highlighted key (p.1119). |

### Two source defects at pp.1115–1149, both verified by rendering the facing pages

**1. Q123 (pp.1124/1125) carries a stray sixth line: "9. A 28-year-old male pre".** A truncated
fragment of a different question has leaked into the option list. It is printed on **both** the
unanswered and the answered page, so it is in the source layout, not a rendering artifact. It is not
an option and cannot be answered. The five real options are transcribed; the fragment is recorded in
`entep-nose-96`'s `source` and left out of `options`.

**2. TWO DIFFERENT QUESTIONS ARE BOTH NUMBERED 131.** pp.1140/1141 is *"the most common complication
associated with acute ethmoid sinusitis in children"*; pp.1142/1143 is *"bilateral choanal atresia
in a neonate is best treated by"*. Both print **131** on both their pages, and p.1144 resumes at 132.
Held as `entep-nose-104` and `entep-nose-105`.

This is the **mirror image of the Q74–Q77 gap at p.1033**: there a number was skipped with no content
lost; here a number is duplicated with no content lost. Taken together they settle a method point —
**neither the count of printed numbers nor the count of pages is a reliable count of questions.**
Only reading every answered page is. The Nose section prints 134 numbers but contains 135 questions.

### The bank keys three different teeth for the same anatomy

`entep-nose-24` (p.937) keys **"the second premolar and first molar"**; `entep-nose-62` (p.1051) keys
**the upper first molar**; `entep-nose-102` (p.1137) keys **the upper second molar** for the
commonest cause of oro-antral fistula. Not contradictory in substance — the upper premolars and
molars as a group sit against the antral floor — but **the bank does not answer consistently**, so
the group is the safe reading rather than any single tooth. **No cached slide names a specific
tooth.** Each is transcribed as printed and the discrepancy is recorded in `entep-nose-102`.

| 2026-07-27 | ENT endpoint | 1151–1167 | Nose Questions Q135–Q143 | `entep-nose-109`…`115` | 7 | 9 read, **2 dropped as verbatim reprints** (Q136 p.1153 = `entep-nose-95`; Q140 p.1161 = `entep-nose-99`). **This completes the Nose MCQs.** Q143 on p.1167 is the last one. |
| 2026-07-27 | ENT endpoint | 1169–1185 | Nose **Solved Cases** 1–21 | `entep-nose-case-1`…`21` | 21 | All 21 case numbers present and contiguous. Printed **once**, on both odd and even pages, one or two per page. No explanation printed for any of them — all 21 explanations authored and marked. |
| 2026-07-27 | ENT endpoint | 1352–1386 | **Throat Questions** Q1–Q18 | `entep-throat-1`…`17` | 17 | **Parity is EVEN here** — the opposite of Nose. 18 read, **1 dropped** (Q14 p.1378 = `entep-nose-1` verbatim, the section-crossing reprint; p.1378 folded into that entry's `source`). **Explanation boxes are back but terse** — one to three sentences, present on some pages and absent on others; 14 entries therefore carry the box verbatim *plus* a separated authored paragraph. **Four keys are highlighted in CYAN, not yellow** (pp.1354, 1356, 1362, 1386). Opens three chapters: `ent-vocal`, `ent-paedlar`, `ent-dysph`. |
| 2026-07-27 | ENT endpoint | 1388–1436 | Throat Questions Q19–Q44 | `entep-throat-18`…`36` (31 retired) | 18 | Parity stayed **even** throughout. 25 read, **7 dropped as verbatim reprints — every one of them from the EAR or NOSE sections**: p.1408=`entep-ear-45`, p.1414=`entep-nose-51`, p.1416=`entep-ear-50`, p.1420=`entep-ear-53`, p.1422=`entep-nose-50`, p.1424=`entep-ear-49`, p.1434=`entep-nose-49`. **p.1424 was caught only by the option-set check, after the entry had been written** — it was the *third* printing of `entep-ear-49` (Ear p.280 → Nose p.941 → Throat p.1424) and the id-prefix habit of sweeping `entep-throat-*` alone would have missed it; the authored paragraph was folded into `entep-ear-49`, which had a one-line explanation before. **An explanation box on every answered page** — the first unbroken run since pp.891–1041. **Source numbering defect: one question printed as Q26 (p.1401, unanswered) and Q27 (p.1402, answered)** — the number advances between the two printings; held once as `entep-throat-25`. Opens `ent-neck` and `ent-swallow`. |
| 2026-07-27 | ENT endpoint | 1438–1481 | Throat Questions Q45–Q66 | `entep-throat-37`…`52` (52 retired) | 15 | **⚠️ PARITY FLIPPED MID-BATCH** — answered pages are **even** through p.1462 (Q57) and **odd** from p.1465 (Q58). Caught by the standing rule: p.1464 rendered at the presumed parity showed Q58 with no highlight, so the rest was re-rendered odd. 22 read, **7 dropped** — p.1446=`entep-ear-51`, p.1471=p.1440, p.1473=p.1438, p.1475=`entep-ear-29`, p.1477=`entep-throat-25`, p.1479=`entep-throat-26`, p.1481=`entep-throat-27`. **Within-section recycling starts here**: five of the seven are Throat questions reprinted a few pages later. **p.1475 was the second batch running in which an entry written up as new proved to be an EAR reprint found only by the duplicate checks.** **Two more numbering defects:** pp.1449/1450 print one question as Q50 then Q51; **pp.1442 and 1444 print two DIFFERENT questions both numbered Q47** (both kept). **Q53–Q56 (pp.1454–1460) are a LINKED SET on one vignette** printed only on p.1454 — each of the four carries a bracketed copy, flagged in its `source`. **p.1479 changes an option between printings** — "Herpes Simplex virus II" becomes "…virus I". |
| 2026-07-27 | ENT endpoint | 1483–1517 | Throat Questions Q67–Q84 | `entep-throat-53`…`61` | 9 | Parity **odd** throughout. 18 read, **9 dropped — a 50% reprint rate, the heaviest since the Ear recycling zone — and all nine are reprints of Throat questions from earlier in this same section**: pp.1483/1485/1487/1491/1493/1495/1497/1499/1501 replay `entep-throat-28`/`30`/`33`/`43`/`42`/`41`/`40`/`32`/`29` in order. New material resumes at p.1503. **⚠️ THREE REPRINTS CARRY A WORSE BOX THAN THE FIRST PRINTING** — new behaviour, and it reverses the standing assumption that a later box is an upgrade: **p.1487** prints the VC-paralysis table with its **lines slipped by one**, so it contradicts its own key and includes the literal placeholder "[Effect not specified here]"; **p.1499** prints a retropharyngeal-drainage box that **contradicts both the p.1426 box and the slide, and asserts the very option the question keys as false**; **p.1501** prints a box truncated mid-sentence. All three recorded in the surviving entries. **⚠️ A THIRD "Ask ChatGPT" box, at p.1489** — verified at 300 dpi; the AI-pasted boxes are not confined to the Nose section. Opens `ent-phon`. |
| 2026-07-27 | ENT endpoint | 1519–1535 | Throat Questions Q85–Q93 | `entep-throat-62`…`69` | 8 | Parity **odd**. **The whole-file stem and option-set sweep was run BEFORE writing this batch** — the rule earned in the previous two — and found exactly one reprint: p.1527 (Q89) = `entep-throat-21`. 9 read, **1 dropped**; the reprint rate falls back to 1-in-9 after the 9-in-18 replay zone. Boxes on pp.1519/1521/1523, **none on pp.1525–1535**. **⚠️ The bank contradicts itself inside this batch:** the p.1519 box calls RLN-injury stridor **biphasic**, and six pages later p.1525 keys a **subglottic tumour** for biphasic stridor — which is what `L6` teaches. Both transcribed, clash recorded in both. The p.1519 box also says *"bilateral or **unilateral** RLN injury"*; unilateral injury does not obstruct. **Three entries rest on material no cached slide covers** — **Trotter's triad**, the **components of Waldeyer's ring**, and the **laryngeal site of scleroma** — each flagged in its own explanation. Opens nothing new; `ent-osa` remains the only empty ENT chapter. |
| 2026-07-27 | ENT endpoint | 1537–1615 | Throat Questions Q94–Q131 | `entep-throat-70`…`101` | 32 | Parity **odd** throughout — no flip in 40 pages. The whole-file sweep was run before writing. **40 printings read, 8 dropped as reprints** (Q94 p.1537=`entep-throat-14`; Q97 p.1543=`22`; Q100 p.1549=`18`; Q106 p.1561=`17`; Q111 p.1571=`4`; Q112 p.1573=`23`; Q115 p.1579=`16`; Q123 p.1595 = Q114 p.1577, a within-batch reprint). Reprint rate **1-in-5**. **⚠️ NOT ONE OF THE 40 PRINTINGS CARRIES AN EXPLANATION BOX — the longest boxless run found anywhere in this file**, so all 32 explanations are authored and marked. **⚠️ TWO MORE NUMBERING DEFECTS, both of the same kind: Q124 (pp.1597/1599) and Q127 (pp.1605/1607) are each TWO DIFFERENT QUESTIONS printed under ONE NUMBER on a shared vignette** — the vignette is restated in the second stem of each pair so it stands alone. **`ent-osa` OPENS AND WITH IT THE LAST EMPTY ENT CHAPTER CLOSES** — Q114/Q123 (polysomnography) and Q119 (paediatric OSA). **Six of the eight reprints differ from their twin in the wording of one option or of the stem** (e.g. "Supralaryngeal carcinoma" for "Supraglottic laryngeal carcinoma"; "Lymph node(s)" for "Lymph node enlargement"; "Drainage is Peroral **without general anaesthesia**" for "Drainage is Peroral") — the better-worded printing is kept and the difference recorded in the survivor's `source`. **⚠️ One key is disputed:** Q104 (p.1557) keys *congestion of the anterior pillar* as **not** a definite sign of chronic tonsillitis, where standard teaching makes it **the** definite sign and *enlarged crypts* the doubtful one; **no cached slide lists these signs at all**, so it is transcribed as keyed with both readings set out. **Q113 (p.1575) has two defensible answers** — `L6` lists both pleural and innominate injury for a low tracheostomy; the bank keys the pleura. **A cyan key at p.1585**, the eleventh cyan page. **Q118 (p.1585) prints only THREE options.** **Three new slide gaps**, each flagged in the question resting on it: **Vincent's angina** (covered by no ENT slide at all), **leucoplakia** (the word appears in none of the 32 files), and the **definite signs of chronic tonsillitis**. |
| 2026-07-27 | ENT endpoint | 1617–1706 | Throat Questions Q132–Q176 — **the last MCQs in the section** | `entep-throat-102`…`138` | 37 | **⚠️ THE SECOND PARITY FLIP, AND ITS MECHANISM IS VISIBLE FOR ONCE.** Answered pages are **odd** pp.1617–1653 (19 pages) and **even** pp.1656–1706 (26 pages), because **p.1654 prints Q150 UNANSWERED a second time** — a single stray page that shifts the pairing for everything after it. This is the first time the *cause* of a flip has been seen rather than just its effect. The whole-file sweep was run before writing. **45 printings read, 8 dropped as reprints**: p.1621=`entep-throat-28`; p.1637=`26`; p.1639=`30`; p.1641=**`entep-nose-49`**; p.1643=`36`; p.1645=`53`; p.1647=`37`; p.1682=`43`. Reprint rate **1-in-5.6**. **p.1641 is the FOURTH cross-section reprint** — a Nose question surfacing in Throat. **⚠️ AGAIN NOT ONE OF THE 45 PRINTINGS CARRIES AN EXPLANATION BOX.** Combined with the batch before it that is **90 consecutive answered pages, pp.1537–1706, 85 printings, without a single box** — so every entry from `entep-throat-70` to `138` is authored and marked. **⚠️ THE FIRST CROSS-BANK DUPLICATE IN THE PROJECT:** `entep-throat-103` (p.1623) is the same pyriform-fossa referred-otalgia question as `enthd-ear-15` (House, p.26), reworded. **Both kept** — the `bank` field is content the learner filters on, so deleting either would misrepresent that bank; mutual cross-references added. Caught by the sorted option-set check only; the stem check missed it. **A cyan key at p.1623**, the twelfth cyan page. **⚠️ Two more disputed keys:** Q136 keys "never do an incision biopsy" for a **tongue ulcer**, but that rule applies to cervical **nodes**, not to a primary — an incisional biopsy of a tongue primary is standard; and Q153 keys **pus** in **Ludwig's angina**, where `L4) PHARYNGEAL SUPPURATIONS.pdf` states **twice** that there is no abscess and no pus. Both transcribed as keyed with the clash recorded in the entry. **Six new slide gaps**, each flagged in the question resting on it: **laryngeal trauma**, **contraindications to tonsillectomy**, **"Beck's triad" as an eponym**, the **paraglottic space**, **carcinoma of the oral cavity**, and the **nerve supply of the tonsil and pyriform fossa**. **p.1706 holds the last Throat MCQ and p.1707 is the "Solved Cases" title page — exactly as the contents table predicted.** |
| 2026-07-27 | ENT endpoint | 1708–1720 | Throat **Solved Cases** 1–26 | `entep-throat-case-1`…`26` (11 and 12 retired) | 24 | **All 26 case numbers present and contiguous, two per page, printed ONCE** — so all 13 pages were read and there is no parity question in a case section. **Not one of the 26 carries a printed explanation**, the same as Ear and Nose, so all 24 kept entries are authored and marked. **2 dropped as reprints, found by the pre-write sweep:** **Case 11 (p.1713) = Case 8 (p.1711)**, identical but for *"when"* in place of *"on lying down"* — a within-section reprint; and **Case 12 (p.1713) = `entep-case-11` (EAR p.747)**, the **FIFTH cross-section reprint in this file and the first among the cases**, reworded to say *"oral examination revealed a congenital anomaly"* instead of naming the otoscopic findings. Both folded into their survivors; the two ids are **retired and deliberately absent**, so ids still track the source's own Case numbers. **⚠️ One near-pair was kept as a VARIANT, not folded:** Case 15 (p.1715) against `entep-case-9` (Ear p.746) — both are an adult with unilateral SOM, but the age changes 60→55, the tuning-fork test changes **Rinne→Weber**, and crucially **the required answer changes**: `entep-case-9` answers *"Right SOM"* while Case 15 answers *"SOM caused by **Nasopharyngeal Carcinoma**"*. Different question, kept separately and cross-referenced. **Chapters opened/grown:** `ent-pharsupp` +4, `ent-tonsils` +4, `ent-dysph` +3, `ent-paedlar` +3, `ent-aom` +2, `ent-stridor` +2, `ent-vocal` +2, and one each to `ent-nasalmass`, `ent-osa`, `ent-hoarse`, `ent-neck` — **summing to exactly 24.** **Two more slide gaps found**, both flagged in the case resting on them: **the tongue-protrusion and deglutition signs of a thyroglossal cyst** (Case 25) — grepped across all 32 ENT files and **absent from every one**, along with Sistrunk's procedure — and **the "hoarseness beyond 3 weeks" referral rule** (Case 24), which `L2` does not state. **JNA (Case 13) and NPC (Case 15) both rest on the nasopharynx gap.** **⚠️ Case 10 (Ludwig's angina) describes the swelling as "tender and fluctuant"**, where `L4` states **twice** that it is a cellulitis **with no tendency to abscess formation** — the same clash as Q153; transcribed as printed with the discrepancy recorded. **THE THROAT SECTION IS NOW COMPLETE, pp.1350–1720.** |

## THE NOSE SECTION IS COMPLETE — 2026-07-27

**pp.891–1185 fully read.** Structure, every boundary verified by render:

| Range | Content | Printed |
|---|---|---|
| pp.891–1167 | **MCQs Q1–Q143** | twice — odd pages are the answered ones |
| p.1168 | title page, **"Solved Cases"** | once |
| pp.1169–1185 | **21 free-text cases**, Case 1–21 | **once**, on both odd and even pages |
| p.1186 | title page, **"Throat"** | — |
| p.1188 onward | Throat **THEORY** — pharynx and larynx anatomy, Waldeyer's ring, pharyngeal suppurations, peritonsillar / parapharyngeal / retropharyngeal abscess | — |

**Yield: 115 MCQs and 21 cases from 143 printed numbers.** The gap is 28 reprints dropped, offset by
the numbering defects below.

**This mirrors the Ear section exactly** — MCQs printed twice, then a case section with no options
printed once. Expect the same shape in Throat and check for it at the boundary.

**A correction to the range table in §2 is owed when Throat is reached.** That table puts Throat
*questions* at pp.1350–1720, but pp.1186–~1349 is Throat *theory* (a Summary section), not
questions. The p.1350 boundary has **not** been verified by render and must be before Throat starts.

### What the Nose section taught about counting

Three numbering defects, all confirmed by rendering the facing pages:

- pp.926–927 print the **same** question as Q19 (unanswered) and Q20 (answered).
- **Q74–Q77 do not exist** — the numbering jumps Q73 → Q78 with nothing lost.
- **Two different questions are both numbered 131** (pp.1141, 1143), with p.1144 resuming at 132.

So the section prints **134 numbers but contains 135 questions**. Neither the printed numbers nor the
page count is a reliable count. **Only reading every answered page gives a true one.**

Plus one layout defect: **p.1125 prints a stray sixth line, "9. A 28-year-old male pre", inside
Q123's option list** — on both printings, so it is in the source. Not an option; recorded in
`entep-nose-96`'s `source`.

### Two of the bank's own case diagnoses are internally inconsistent

Both transcribed verbatim in `answer` — that is what the source prints — with the clash explained in
full and the `keys` written to accept either reading, so the learner is never marked wrong for the
correct answer:

| Case | Bank's diagnosis | The problem |
|---|---|---|
| Case 13, p.1178 | "Preseptal Cellulitis **and Proptosis**" | proptosis means **post**septal disease by definition; a preseptal cellulitis cannot cause it |
| Case 17, p.1181 | "Right Nasal **Carcinoma** (mainly **Inverted Papilloma**)" | inverted papilloma is **benign**; `L26) nasal masses.pdf` gives malignant change in **5–15%** |

This is the rule from `CLAUDE.md` §4 in practice: where the **source itself** is wrong, correct it
*and* record what the bank actually printed, so the discrepancy stays visible to the learner.

### What this section asks over and over

Worth knowing before the exam, because the repetition is the signal:

| Fact | Printings | Ids |
|---|---|---|
| **Unilateral foul discharge in a child = foreign body** | **7**, seven distinct option sets | `18`, `71`, `100`, `107`, `111`, `114`, + case 4 |
| Little's area membership | **5**, four option sets | `13`, `53`, `65`, `89`, + case 21 |
| Nasal fracture timing | **5** | `12`, `50`, `74`, `97`, `112`, + case 1 |
| Unilateral watery discharge = CSF | **4** + 2 cases | `19`, `28`, `59`, `103`, cases 5 and the CSF MCQs `91`/`106` |

**Next:** the Throat section. First step is to **verify where Throat questions actually begin** —
render around p.1350 — because pp.1186 onward is theory, not questions.

**Grounding note for the pp.458–486 batch.** Six of the fourteen rest wholly or partly on outside
knowledge, because the cached slides simply do not cover the point — recorded here so a targeted
book read can replace them with page-cited text later:

| Id | What the slides do not cover |
|---|---|
| `entep-ear-117` | The stapedial reflex — absent from `L13,14) AudioVestibulae Evaluation` entirely |
| `entep-ear-119` | That the EAC "extends from the concha" in those words |
| `entep-ear-126` | Wax composition, acidic pH, lysozyme, epithelial migration |
| `entep-ear-127` | Traumatic TM perforation and its management |
| `entep-ear-128` | The caloric test — the vestibular evaluation section is figure-only in the extracted text |
| `entep-ear-129` | The traumatic-vs-infective perforation shape distinction |

Three more carry a narrower caveat inside an otherwise grounded explanation: `entep-ear-120` (the
slides list BPPV first but never say "most common"), `entep-ear-123` (the slides do not rank the
aims of mastoid surgery) and `entep-ear-125` (the slides name the As/Ad patterns but do not attach
otosclerosis or ossicular discontinuity to them).

**A classification conflict worth remembering.** `entep-ear-124` asks which lesion is *not* an
"extra-cranial" complication of CSOM, answer **sigmoid sinus thrombosis**. The slides use a
**three-way** split — *cranial* (mastoiditis, labyrinthitis, petrositis, facial paralysis),
*intracranial* (meningitis, extradural/subdural/brain abscess) and *extracranial* (external otitis,
retro- and parapharyngeal abscess, cervical lymphadenitis). Under that scheme three of the question's
distractors are **cranial**, not extracranial, so the question is using "extra-cranial" loosely to
mean "outside the cranial cavity". The explanation says so explicitly rather than papering over it.

Two things to handle on the way:
- ~~Find Q72~~ — **resolved 2026-07-26.** Q72 sits on p.**287**, unanswered, and is a reprint of Q28
  (localized otalgia → acute otitis media), already held as `entep-ear-28`. p.289 likewise holds Q74
  unanswered. Both confirm even parity through this stretch; no question was missing.
- Reprint rate by batch: 0/22 → 2/14 → 2/6 → 8/15 → 9/14 → 13/25. The drop is concentrated after
  p.294; from there the material runs genuinely new, so read densely rather than sampling.
- The register changes at ~p.302 to lowercase `a) b) c)` lettering, and one page (p.302) marks its
  answer in **cyan** rather than yellow. Do not assume yellow is the only answer highlight.

### Validation snippet that works (the preview pane serves a stale snapshot)

`MODULES` is a top-level `const`, so it is **not on `window`** — `window.MODULES` is `undefined` and
a check written against it silently flags every question as having a bad chapter. Reference the
binding directly:

```js
(()=>{const ch=new Set();MODULES.forEach(m=>m.groups.forEach(g=>g.chapters.forEach(c=>ch.add(c[0]))));
 const Q=window.Q_ENT||[];return JSON.stringify({total:Q.length,
 badChapters:Q.filter(q=>!ch.has(q.chapter)).map(q=>q.id+':'+q.chapter)});})()
```

Load the edited data file first with `data/questions.ent.js?cb=`+`Date.now()`, then validate against
`window.Q_ENT`, never the boot-time `QUESTIONS`.

### Two structural findings that cut the work substantially

1. **`ENT endpoint.pdf` prints every question twice** — first unanswered, then answered with the
   correct option highlighted and an explanation box. **Read only the answered pages.** This halves
   both the reading and the real question count: Ear Questions 142–760 is ~309 questions, not 619,
   and the file holds roughly **1,320 questions**, not 2,600. Parity must be re-checked at each
   section boundary.
2. **Contact sheets.** `scratchpad\sheet.ps1` extracts a set of pages and tiles them into one grid
   image, so one read covers 15 pages instead of 1. Use `-Native` for `ENT endpoint.pdf`, where each
   page holds a single 800×450 JPEG; omit it elsewhere so `pdftoppm` renders the full page.

### Survey of Ear Questions pp.260–760 — read 2026-07-26, 15 pages sampled

Sampled pp.270, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 730, 750, 758. Three findings
that change how the rest of this section should be read:

1. **Question numbering runs continuously to at least 293** (p.730), then a case section follows. So
   the Ear Questions section holds on the order of **293 numbered MCQs plus ~34 cases** — not the 619
   the contents page implies, and not even the ~309 the two-page halving predicted, because of item 2.
2. **The section is a concatenation of several different question sets, and the first one recycles a
   small pool.** Every sampled page up to p.300 was a question already captured — p.270 Q63 = BPPV
   first line, p.300 Q79 = neglected middle ear effusion, p.620 Q238 = the slapped-face perforation,
   p.660 Q258 = Meniere's-except. **From ~p.340 onward the material is largely new** and the
   formatting register changes (lowercase `a)` `b)` lettering, different phrasing): Q99 Rinne/Weber,
   Q119 cochlear implant, Q139 acoustic neuroma, Q158 pure tone audiometry, Q178 stapes footplate,
   Q198 ten-year otorrhoea, Q218 OME otoscopy, Q278 cholesteatoma discharge, Q293 otosclerosis.
3. **pp.742–760 are CASES, not MCQs** — "Case 1" … "Case 37", two per page, each a short vignette
   ending in a stated *Diagnosis* (later ones say *Most probable diagnosis*), with no options.
   **Range verified 2026-07-26** by rendering pp.736–760: MCQs run to Q298 on p.740, and the case
   format begins on p.742. An earlier entry here guessed "~pp.745–760, Case 17…Case 34" from two
   sampled pages — wrong on both the start page and the count. Unlike the MCQs, the case pages are
   **not** printed twice, so this run costs one read per page, not two. They are good material but do not fit the
   question schema. **Decision needed** on whether to hold them as questions with a synthesised
   option set (which would mean authoring options — against the standing instruction) or to route
   them into Phase 4 theory as worked examples. **Defaulting to the latter** until told otherwise.

**Consequence for method:** reading every answered page in order is the wrong strategy for the
recycling zone. Sample-and-skip through pp.260–330, then read pp.~335–745 densely.

### Chapter-mapping gap — ear trauma. Decided 2026-07-26: leave as is.

`MODULES` has no ENT chapter for **ear trauma**. The user's instruction: *"Ignore the trauma chapter
and continue but remember its questions in case I needed to add them later."* So no chapter is added,
and the affected questions are filed under the nearest fit and **registered here** so they can be
moved in one pass if a chapter is created later.

| Id | Question | Filed under | Source |
|---|---|---|---|
| `entep-ear-10` | Clear watery ear discharge after RTA (CSF otorrhoea) | `ent-otorrhea` | endpoint Ear Q, p.162 (+ Model Final Exam p.2750) |
| `entep-ear-11` | Management of traumatic tympanic membrane perforation | `ent-otorrhea` | endpoint Ear Q, p.164 |
| `entep-ear-22` | Incudomalleolar joint fracture after RTA → conduction | `ent-earanat` | endpoint Ear Q, p.186 (+ p.217) |
| `entep-ear-38` | Slapped face → traumatic perforation → watchful waiting | `ent-otorrhea` | endpoint Ear Q, p.227 (+ p.258) |

All four carry the marker `EAR TRAUMA` in their `source` string, so
`grep -n "EAR TRAUMA" app\data\questions.ent.js` finds them without this table.

**Note on this bank's numbering:** each section restarts at question 1, so ids are namespaced by
section (`enthd-ear-N`). Book p.22 carries questions numbered 80–81 from a *previous* section, so
sections before "Ear MCQs" exist and still need mapping — get the book's own table of contents
before assuming the section order.

---

## 3. Book reads (Phase 4 support)

All 7 books are image-only scans, 1,637 pages total. **Reading them cover to cover is not
realistic.** Reads are driven by the questions and by gaps in the slide text, located via each
book's table of contents.

| Source | Subject | Pages | Ranges read |
|---|---|---|---|
| `ENT endpoint.pdf` — slide-style notes, **not** a book | ENT | 3,075 | none |
| `ENT ear.pdf` | ENT | 156 | none |
| `ENT nose.pdf` | ENT | 174 | none |
| `ENT throat.pdf` | ENT | 227 | none |
| `pediatrics p1.pdf` | Pediatrics | 250 | none |
| `pediatrics p2.pdf` | Pediatrics | 264 | none |
| `ophthalmology.pdf` | Ophthalmology | 274 | none |
| `neuropsychiatry.pdf` | Neuropsychiatry | 292 | none |

For ENT, try `ENT endpoint.pdf` before the three ENT books — it is already structured and
exam-oriented, where the books are raw scanned prose.

**A chapter written without book coverage must be reported as such** — resting on slides and
questions alone is a legitimate outcome, but it is never to be implied that the book was consulted.

---

## 4. Theory chapters written (Phase 4)

0 of 104 chapters. Content was reset 2026-07-26; nothing has been written against the new standard.
Chapter counts fell from 114 on 2026-07-26 when split topics were merged into single chapters.

| Subject | Chapters | Written |
|---|---|---|
| ENT | 30 | 0 |
| Pediatrics | 21 | 0 |
| Ophthalmology | 26 | 0 |
| Neuropsychiatry | 27 | 0 |

---

## 5. Blocked

Nothing. Poppler was installed 2026-07-26 and `pdftoppm` 25.07.0 is verified working on the
oversized files — the 100 MB reader limit no longer applies, because pages are rendered to PNG in
the scratchpad and the images are read instead of the PDF.

## 6. Next action

**THE WHOLE THROAT SECTION IS DONE — pp.1350–1720, MCQs and cases both, 2026-07-27.**

**THE MODEL FINAL EXAM BLOCK IS COMPLETE — pp.1721–2816, all 7 exams, 542 printings read, 84 new
questions.**

**Recently Edited (pp.2817–2835) is DONE — 18 printings, 0 new, and it proved the point about not
assuming structure: it prints each question ONCE, already answered.**

**`ENT endpoint.pdf` IS NOW FULLY READ — all 3,074 pages accounted for.** Exam Night Review's 104
MCQs are **read, staged and swept but NOT written.** The remaining work on this file, in order:

1. ~~**Build the `image` field and the crop pipeline**~~ — **DONE 2026-08-04.** All 18 pictures are
   cut into `app\assets\q\q-<page>.jpg` (312 KB total), the schema carries `image`/`imgAlt`/
   `imgEssential`, and the figure renders between the stem and the options. Full entry below.
   **The images are not yet ATTACHED to any entry** — that happens in step 2, because which entry
   holds a given printing is exactly what resolution decides.
2. **RESOLUTION IS DONE — 37 new entries to write, not ~30.** All 72 stage-C/D/clean questions were
   read side by side against their stem twin; the verdict for every one is in
   `content\ent\qb-pages\exam-night-review-resolution.md`, with the raw comparisons in
   `…-sidebyside.txt`. **What remains is the writing itself**, and **no page in this section prints
   an explanation box, so all 37 need an authored, marked explanation.** Also fold the 32 stage-B
   and 32 resolved reprints into their existing entries, and attach the 18 images (17 to new
   entries, **p.3024 to `entep-ear-26`**).
3. **Fold the three within-batch duplicates:** Q15≡Q24, Q21≡Q47, Q52≡Q53.
4. ~~**Read pp.3047–3069 odd** — the unread half of the fact-list run — and harvest all of
   pp.3046–3070 into `content\ent\examiner-patterns.md`.~~ **DONE 2026-08-07 — see §11d.**
   `ENT endpoint.pdf` **IS NOW CLOSED**: all 3,074 pages read, and every page that carries content
   is either transcribed into `QUESTIONS` or harvested into `examiner-patterns.md`.

Then the other two ENT banks — `ENT QB.pdf` (Grade Gain, 185 pp, `entqb-`, **no Grade Gain question
transcribed anywhere yet**) and `d house ENT mcq.pdf` (House, resume at PDF p.15, `enthd-`).

**Run the five-stage duplicate sweep before writing anything, rank ALL of them at stage E, and then
read side by side EVERY staged question whose option set differs from its stem twin — that is stages
C, D and clean together, not the clean column alone.** Exam 7's only new question came out of stage
C while its clean column was 3-for-3 noise; reading only the clean set would have found neither of
that exam's two mis-keys. Keyword-search every survivor twice, differently worded.

Then the other two ENT banks — `ENT QB.pdf` (Grade Gain, 185 pp, `entqb-`, **no Grade Gain question
transcribed anywhere yet**) and `d house ENT mcq.pdf` (House, resume at PDF p.15, `enthd-`), the
latter driven by its table of contents so transcription runs topic by topic rather than page by page.

**Then the full ENT content and design review the user asked for**, before Pediatrics begins.

Render command:

```bash
pdftoppm -png -r 150 -f <first> -l <last> "<source.pdf>" "<scratchpad>/<prefix>"
```

---

## 7. How `ENT endpoint.pdf` behaves — learned the hard way

Moved here wholesale from `MEMORY.md` on 2026-07-27. `MEMORY.md` keeps only a one-line pointer,
because this section grows with every batch and was pushing that file to nearly twice its 200-line
cap. Everything below is method, not current state — it belongs in the ledger.


**THE EXPLANATION BOXES ARE PARTLY AI-GENERATED — AND SOMETIMES CORRUPT.** **Three** boxes (pp.1011,
1015, **1489**) end with the literal string **"Ask ChatGPT"** — pasted out of a chatbot session.
Verified at 300 dpi, not inferred. **Not confined to one section.** They are still transcribed but
flagged inline with ⚠️, and **every box must be checked for the marker**; boxes read before p.1011
were not, so a sweep is owed in the end-of-ENT review.

**A LATER PRINTING'S BOX IS NOT AUTOMATICALLY AN UPGRADE — read it before folding it in.** Three
reprints in pp.1483–1501 carry a *worse* box than the first printing: **p.1487**'s VC-paralysis table
has its **lines slipped by one**, so it contradicts its own key and prints the literal placeholder
**"[Effect not specified here]"**; **p.1499** reverses the retropharyngeal drainage rule and asserts
the very option its question keys as false; **p.1501** is truncated mid-sentence. The earlier
printings (pp.1428, 1426, 1412) are the correct ones.
Consequence for the rules: a source box still beats authored text, **but an AI-pasted box is not
evidence — where one contradicts the cached slides, the slides win and the clash is recorded.**

**ASSUME NOTHING FROM PAGE TO PAGE — check every one.** Both volatile behaviours proved unpredictable
across two complete sections, so neither can be sampled:

- **Explanation boxes.** Ear: present, gone for ~150 pages, back at p.666, gone at p.680. Nose: on
  nearly every page pp.891–1041, then **none at all across pp.1043–1167** and none on any of the 21
  cases. Crop accordingly — `-CropTop 0.45` where boxes are present (the box sits below the options),
  `0.30` where they are not (24 pages per contact sheet), `0.55` when a long stem is clipped.
  Re-render any tile whose last visible line is an option rather than white space.
- **Reprint rate.** Consecutive Nose batches ran 11-of-18, 1, 2, 0, then 2-of-9. **And the file
  recycles ACROSS sections** — the Nose section reprints Ear questions, so sweeping `entep-nose-*`
  alone would have missed three of four in one batch. **Always sweep the whole file.**

**NEITHER THE PRINTED NUMBERS NOR THE PAGE COUNT IS A RELIABLE COUNT OF QUESTIONS.** The Nose section
prints **134 numbers but contains 135 questions**: one question printed as both Q19 and Q20, Q74–Q77
skipped entirely, and two *different* questions both numbered 131. All three confirmed by rendering
the facing pages. **Only reading every answered page gives a true count.**

**The same fact through a different option set is NOT a duplicate.** *Unilateral foul discharge in a
child = foreign body* is printed **seven times with seven distinct option sets**; Little's area five
times with four (the last making the odd-one-out a **non-existent "nasolabial artery"**);
nasal-fracture timing five times. pp.1085/1091/1093 build three consecutive questions on one
vignette. **Judge by the option set, not the stem** — and treat the repetition itself as exam
information. Nothing is asked seven times by accident.

**Layout and key defects to expect:**
- A **truncated fragment** of one question can leak into another's option list — p.1125 prints
  "9. A 28-year-old male pre" inside Q123's options, on both printings. Not an option.
- **The highlight colour is not reliable.** Three keys are **cyan**, not yellow (pp.971, 1091, 1119).
  Read the option, not the shade.

**THE BANK'S OWN ANSWERS ARE SOMETIMES WRONG OR INCONSISTENT.** Three confirmed kinds:
- **Self-contradictory diagnoses** — p.1178 keys *"Preseptal Cellulitis **and Proptosis**"* (proptosis
  means **post**septal by definition); p.1181 keys *"Nasal **Carcinoma** (mainly **Inverted
  Papilloma**)"* (inverted papilloma is **benign**, 5–15% malignant change per `L26`).
- **Inconsistent keys across questions** — three different teeth for the maxillary–dental relation:
  "second premolar and first molar" (p.937), "upper first molar" (p.1051), "upper second molar"
  (p.1137). The group of upper premolars and molars is the safe reading; no slide names one tooth.
- **A box that contradicts both the slides and the bank's own later question** — the **Ludwig's angina**
  box on p.1444 says it *"is NOT treated by incision and drainage. Its treatment is medical."*
  `L4) PHARYNGEAL SUPPURATIONS.pdf` names **rapid surgical intervention** (submental incision,
  mylohyoid divided, bilateral decompression) as one of its three treatments, and the bank's own
  **p.1462** keys tooth extraction as the non-initial step, leaving incision and drainage standing.
  **The slides win.** The reconciliation: it is a cellulitis with **no abscess**, so the incision
  decompresses rather than drains — the box compressed "no abscess" into "no surgery".
- **A vignette that was never printed** — Q45–Q47 (pp.977–981), below.

**In every case: transcribe what the bank printed, explain the clash, and write the grading `keys` to
accept either reading.** That is `CLAUDE.md` §4 in practice — correct the source *and* keep the
discrepancy visible, so the learner knows which parts of their bank to distrust.

**A source defect worth remembering: Q45–Q47 (pp.977–981) have NO vignette.** All three read "that
patient" and no case is printed on any surrounding page. A bracketed vignette reconstructed from the
bank's own answer key is supplied and marked as reconstructed in both stem and `source`.

### ⚠️ THE MODEL FINAL EXAMS ARE COMPILATIONS, NOT NEW MATERIAL — 2026-08-02

**Model Final Exam 1 (pp.1721–1875) is read end to end. 74 of its 77 MCQs were already held.**
That is a **96% reprint rate**, and it changes the shape of everything left in this file.

Structure, verified by render at both boundaries:

| Pages | Content |
|---|---|
| p.1721 | title page, **"Model Final Exam 1"** |
| pp.1722–1875 | **MCQs Q1–Q77, printed twice**; answered pages **ODD**, 1723–1875 |
| p.1876 | title page, **"Model Final Exam 2"** — straight on, **no case section** |

- **No parity flip anywhere in the exam.** `1723 + 2(n−1)` lands exactly on Q77 = p.1875, and every
  sampled tile agreed. The arithmetic closing exactly on the last page is itself the proof there is
  no stray page; it is worth checking before assuming a flip must be hunted.
- **An exam does NOT end with free-text cases.** The three question *sections* all did; the exams do
  not. Settled by rendering pp.1865–1876.
- **Every one of the 77 answered pages carries an explanation box.** The longest unbroken run of
  boxes in the file. They are the same AI-generated style as elsewhere — terse, two to three
  sentences, later ones with a red lead-in phrase. None of the boxes read carried "Ask ChatGPT".

**What it re-prints, and in what order.** The exam is assembled from consecutive runs off the front
of each section — `entep-ear-1…25`, `entep-nose-1…24`, `entep-throat-1…24`, interleaved in blocks:

| Exam questions | Maps to |
|---|---|
| Q1–Q3, Q5, Q8–Q10 | `entep-ear-1…4`, `6`, `7`, `8` |
| Q11–Q23, Q51–Q56, Q59–Q62 | `entep-throat-1…24` |
| Q25–Q34, Q57–Q58, Q63–Q65, Q68–Q71 | `entep-nose-1…20` |
| Q35–Q48, Q66, Q72 | `entep-ear-9…25` |
| Q73–Q77 | `entep-throat-24`, `entep-nose-21…24` |

**Only three survived: Q7, Q50, Q67** → `entep-mfe1-1`, `-2`, `-3`. All three carry the source's own
box, so none is authored.

**⚠️ THE SOURCE'S OWN TYPOS ARE THE MAIN THING THAT DEFEATS A DUPLICATE CHECK — THREE CASES SO FAR**,
and only the near-miss probe and the eye caught any of them. `entep-throat-25` vs Exam 2 p.1880 is
the third: "Thyro**i**epiglottic" for thyroepiglottic. The two from Exam 1:

- **Q24 p.1769** = `entep-nose-1` — option d printed "Retro**a**ryngeal abscess". The p.1378 printing
  carries the *same* typo, so **the misspelling travels with the reprint** and defeated the check
  both times.
- **Q49 p.1819** = `entep-ear-23` — "Lateral **leminiscus**" for lemniscus.

**Consequence for the method: the exact stem+options check is not enough, and neither is the sorted
option-set check** (both missed these two — the option-set check hashes the misspelt string too).
The loose probe that saved them matches on **the keyed answer's text plus the option count**, listing
candidates for the eye rather than deciding. **Run all three.**

**Q6 was a THIRD printing** of the mixed-hearing-loss item already folded from `entep-ear-5` into
`entep-ear-32` on 2026-07-26. The removal comment left in the data file is what caught it — **those
comments earn their keep; do not tidy them away.**

### ⚠️ EXAM 2 IS NOT EXAM 1 — do not generalise the 96% — 2026-08-02

Sampled 15 pages across pp.1876–2034 before committing. It differs on every axis that matters:

- **Answered pages are EVEN** (Q1 answered p.1878), the opposite parity to Exam 1.
- **Two one-page shifts inside the exam**, located to between Q42–Q51 and between Q71–Q73. Same
  cause as the Throat section's p.1654: a stray page. **So parity is unstable again here.**
- **Five options labelled A–E**, against Exam 1's four labelled a–d — a different authoring
  generation, and the option sets are **rewritten** rather than reprinted. p.1880 Q2 and p.1900 Q12
  ask the same items as Exam 1's Q19 and Q6 with entirely different distractors, which under the
  standing rule are **kept as variants, not folded**.
- **Linked sets** — Q71, Q73, Q75, Q76, Q77 all read "that patient's condition", hanging off a
  vignette printed earlier in the exam.
- p.1960 Q42 **is** an exact reprint of `entep-ear-37`, so it is not free of duplicates either.

> **⚠️ CORRECTION, same day — the inference from that sample was WRONG.** Rewritten option sets read
> like new questions, so this section first predicted "a much lower reprint rate and real
> transcription work". **Q1–Q18 were then read in full and 18 of 18 were already held** —
> `entep-ear-26…53` and `entep-throat-25…30`, i.e. the compilation pattern continuing from a *later*
> slice of the same pool. The rewritten option sets match questions held from **further into** the
> sections, not nothing at all.
>
> **The lesson is about the sample, not about Exam 2:** a 15-page spread across 79 answered pages
> shows *formatting* reliably and *reprint rate* not at all, because a reprint is only visible after
> the sweep. **Sample to find the parity, the option count and the shifts. Never sample to estimate
> how much is new — run the sweep.**

Sample each remaining block for its structure, then sweep every question in it.

### MODEL FINAL EXAM 2 IS COMPLETE — 78 printings, ZERO new — 2026-08-03

Read end to end, pp.1876–2034. **Every one of the 78 printings was already held**, so nothing was
added. Exam 1 gave 3 new questions from 77; Exam 2 gives 0 from 78. The compilation finding is now
established across both exams rather than resting on one.

77 numbered questions but **78 printings — the number 71 is used twice**, once for a standalone item
(p.2020) and once to open a linked set (p.2022).

**Where it draws from.** Exam 1 re-printed the *first* ~25 of each section in consecutive blocks.
Exam 2 reaches deeper and interleaves: `entep-ear-26…53`, `entep-nose-13…51`, `entep-throat-25…110`,
in no order. So the two exams do not overlap much with each other — they sample different slices of
the same pool.

**⚠️ PARITY SHIFTED TWICE, and both times a spill page caused it** — an explanation box too tall for
its tile, given a page of its own:

| Range | Answered pages | |
|---|---|---|
| Q1–Q29 | **EVEN** 1878–1934 | |
| — | p.1935 | spill: rest of Q29's box, "Causes of vertigo:" |
| Q30–Q44 | **ODD** 1937–1965 | |
| — | p.1966 | spill: rest of Q44's box, "Treatment of traumatic ear drum perforation:" |
| Q45–Q77 | **EVEN** 1968–2034 | |

This is the same mechanism as the Throat section's p.1654 and it is invisible except by checking
each tile for a highlight. The earlier 15-page sample put the shifts "between Q42–Q51 and between
Q71–Q73" — **both locations were wrong**; the real ones are Q29/Q30 and Q44/Q45. A sample can see
*that* parity is unstable and cannot see *where*.

#### ⚠️ A FOURTH, FUZZY CHECK IS NOW REQUIRED — one word defeated all three

Eight of the last 60 came back "clean" from all three checks. Six were genuine variants with the
option set rewritten, which the checks are not expected to catch. **Two were near-verbatim reprints
that they missed anyway:**

| | Held | This printing |
|---|---|---|
| Q34 p.1945 → `entep-ear-46` | "usually increases movement" | "usually increases **on** movement" |
| Q58 p.1994 → `entep-ear-51` | "Diameter at cricoid region" | "Diameter at **the** cricoid region" |

Both were found by grepping a distinctive phrase, not by any check. **An inserted or dropped word
survives normalisation exactly as the source's own misspellings do** — "Retroaryngeal", "leminiscus",
"Thyroiepiglottic", "MRL" — and the loose keyed-answer probe cannot see it either when the key text
is the thing that changed.

**So the sweep needs a fourth pass: token-overlap on the keyed answer.** Normalise, split to words,
and list any held question whose keyed answer shares ≥80% of its tokens with a staged one. It is a
candidate list for the eye, like check C, not a decision. Cheap to run and it would have caught both.

**Q34 also produced a real correction.** pp.260 and 947 both print "usually increases movement";
p.1945 prints it with the "on". The better printing wins, so option A was corrected and all three
printings recorded in the source field.

#### ⚠️ A source defect: Q75–Q77 have no vignette

pp.2030, 2032 and 2034 all say "that patient" and **no vignette is printed for them anywhere** —
verified by rendering pp.2028–2031 at full height, not inferred from the crop. Their keys reconstruct
the missing case (nasal packing → juvenile nasopharyngeal angiofibroma → embolization). All three are
held with their proper stems as `entep-nose-40/41/42`. This is the **second** such defect in the file
— compare §"A defect in the source: Q45–Q47 have no vignette".

#### The box style changes at Q62

From p.2002 to the end, the explanation boxes are short, with a red keyword lead-in, and read closer
to commentary than to the textbook extracts earlier in the file. **No "Ask ChatGPT" marker appears in
any of them** — checked at full height on pp.2002, 2012, 2018, 2026. Nothing was taken from these
boxes, since every question was already held, but the style change is a flag for review item 1.

### MODEL FINAL EXAM 3 IS COMPLETE — 76 questions, 1 new — 2026-08-03

Read end to end, pp.2035–2189, title page p.2035. One question survived all four checks:
`entep-mfe3-1` (Q29, tensor tympani insertion). Running tally across the three exams: **231
printings read, 4 new questions.**

**⚠️ NUMBERED 1–77 BUT THERE IS NO Q20.** Verified by render, not inferred: p.2073 is Q19
unanswered, p.2074 Q19 answered, p.2075 Q21 unanswered, p.2076 Q21 answered. The parity is
undisturbed — the source just skips the number. Fresh evidence for the standing rule that the
printed numbers do not count the questions, and the reason the count here is 76 and not 77.

**Parity shifts twice, both on spill pages, and the first lands on Q1** — no earlier exam did that:

| Range | Answered | |
|---|---|---|
| Q1 | **ODD** p.2037 | |
| — | p.2038 | spill: rest of Q1's Ludwig-angina box |
| Q2–Q68 | **EVEN** pp.2040–2170 | |
| — | p.2171 | spill: rest of Q68's smell-disorders box |
| Q69–Q77 | **ODD** pp.2173–2189 | |

Three exams, three different parity patterns. ~~The spill page is now confirmed as *the* mechanism —
four of the four shifts seen inside the model exams are caused by one.~~ **RETIRED 2026-08-03 by
Exam 5**, whose shift is a stray *reprinted answered page* (p.2436), not a spill. Four of five, not
five of five — and the fifth is the one that mattered, because a spill page can be recognised on
sight while a duplicated answered page cannot. See the Exam 5 entry below.

#### ⚠️ THE "Ask ChatGPT" MARKER IS NOT CONFINED TO THE EARLY FILE

Found at **p.2146 (Q56)** — "…surgery that required intubation.**Ask ChatGPT**" — and **p.2168
(Q67)** — "…or orbital extension.**Ask ChatGPT**". Only three instances were known before, all below
p.1011, and §11 item 1 was written on the assumption that the contamination sat in the early file.
**It does not.** Neither question is new, so nothing was taken from either box, but the sweep owed in
the end-of-ENT review must now cover the *whole* file rather than only pp.1–1011.

#### Check D worked — and its threshold is wrong

The new token-overlap check caught **Q11 → `entep-ear-38`** on its first outing, which all three
older checks missed. It then **missed Q13 → `entep-ear-31`**, where the only difference is
"C2 **&** C3 nerves" against "C2 **and** C3 nerves". On a four-token answer one word is 0.75 overlap
— just under the 0.8 gate.

**A ratio is the wrong shape for short answers.** The same one-word difference scores 0.75 on a
four-token key and 0.95 on a twenty-token one, so no single ratio can serve both. **Compare the
NUMBER of differing tokens instead — flag anything differing by ≤1 — which catches the short and
long cases alike.** Change this before the next exam.

#### A correction reversed, and why

`entep-ear-46` option A was changed on 2026-08-02 from "usually increases movement" to "usually
increases **on** movement", on the reasoning that p.1945 was the better printing. **Exam 3 p.2060
prints it without the "on" as well, making the tally 3:1** (pp.260, 947, 2060 against p.1945), so it
was changed back on 2026-08-03. A lone variant against three agreeing printings is the odd one out,
not the correction. **The rule that "the better printing wins" needs a companion: count the printings
first.** Nothing turns on it clinically — the option is a distractor either way.

### ⚠️ MODEL FINAL EXAM 4 BREAKS THE PATTERN — 77 printings, **32 NEW** — 2026-08-03

Read end to end, pp.2190–2344, title page p.2190, Exam 5's title page p.2345. **Answered pages are
EVEN throughout — no parity shift**, which follows from it having no spill page: every explanation
box fits its own tile. (Exam 1 was likewise stable, at ODD; it is Exams 2 and 3 that shift. **Stable
does not mean predictable — the stable exams disagree on which parity.**) Numbered 1–77 with no gap
and no repeat, so here the printed numbers and the question count agree for once. No case section.

**The compilation finding does not hold for this exam.** Exams 1–3 gave 3, 0 and 1 new across 231
printings — 98% reprint. Exam 4 gives **32 new out of 77**, only 58% reprint, and the fresh half is
concentrated in **Nose and Throat**: a near-continuous run from Q45 to Q77 is new but for four
questions. Ear is still almost entirely reprint. Running tally across four exams: **308 printings
read, 36 new questions.**

**⚠️ DO NOT CARRY "the model exams are compilations" INTO EXAMS 5–7 AS SETTLED.** It was written up
after three exams agreed, and the fourth disagreed flatly. What survives is the *method* — sweep
before writing — not the expectation. The sweep is what made this batch cheap either way: it cost
one pass over 77 staged questions to learn that 45 were already held.

| | Exam 1 | Exam 2 | Exam 3 | **Exam 4** |
|---|---|---|---|---|
| Printings | 77 | 78 | 76 | **77** |
| New | 3 | 0 | 1 | **32** |
| Parity shifts | 0 | 2 | 2 | **0** |
| Boxes | all 77 | from Q62, restyled | most | **74 of 77** |

#### What the four checks caught, and what they did not

| Check | Flagged | Of those, actually reprints |
|---|---|---|
| A — normalised stem + sorted options | 20 | 20 |
| B — sorted options + keyed answer | 13 | 13 |
| C — keyed answer + option count | 8 | 6 |
| D — ≤1 differing token in the keyed answer | 4 | 1 |
| *(clean)* | 32 | **5** |

**The clean column is the important one. Five of the 32 "clean" questions were reprints** — the
checks are all keyed on the *answer*, and a reprint that rewords its options escapes every one of
them. `entep-ear-9` prints "repeated suction **of debris** with antifungal drops" where Exam 4
prints "repeated suction **toilet** with antifungal drops"; `entep-ear-99` says "causes vertigo for
few days" against "episode of vertigo lasts for a few days"; `entep-ear-89` says "antibiotic
therapy" against "specific antibiotic therapy after culture and sensitivity". Same question, same
key, different words.

**So a clean sweep result is a shortlist, not a verdict.** Two further passes were needed and both
earned their place:

1. **Stem-token ranking of every clean question against the whole bank.** All five hidden reprints
   ranked 0.90–1.00 on the stem while their keys differed. This is the cheap pass — run it always.
2. **A keyword search per question, then a SECOND search with a differently-worded term.** A stem
   rewritten from a direct question into a vignette scores low against its own twin, so ranking
   alone is not enough. The second term changed no verdict this time, but it is the only reason the
   32 can be asserted rather than assumed: "adductors EXCEPT" had to be searched again as
   "abductor", "sensory nerve supply" as "internal laryngeal", "tonsil chronicity" as "chronic
   tonsillitis".

#### Check D, rebuilt before this batch

Changed from the ≥0.8 overlap ratio to **≤1 differing token** (symmetric difference), as the Exam 3
entry above required. It flagged 4 and only 1 was a reprint — a worse precision than the ratio had,
and that is fine: C and D are eye-lists by design. The one it caught, `entep-nose-2` against Q58,
differs only in "sinonasal **squamous cell carcinoma**" versus "sinonasal **malignancy**".

#### Three pages print no explanation box — pp.2324, 2328, 2338

The exception in an otherwise fully boxed exam, so it is easy to miss. All three explanations are
**written and marked**, and all three ground cleanly:

- **p.2324 (Q67)** reactionary haemorrhage after adenoidectomy → `L3) DISEASES OF THE TONSILS &
  ADENOIDS.pdf` gives the 24-hour window and the three causes (high BP, slipped ligature, dislodged
  clot), and lists the adenoidectomy techniques — curettage, suction diathermy, coblation,
  microdebrider, endoscopic — **none of which ligates anything**, which is what leaves the clot.
  **No slide ranks the three causes**, and the explanation says so.
- **p.2328 (Q69)** septal deviation → `L24) diseases of the nasal septum.pdf` states the obstruction
  "can be on the same side of the deviation **or opposite side** because of the hypertrophic changes
  in turbinate", which is exactly why "strictly unilateral" is the odd one out, and lists headache
  (anterior ethmoidal nerve syndrome) and sinusitis among the symptoms.
- **p.2338 (Q74)** bilateral choanal atresia → `L23) Anatomy of the Nose.pdf` management slide reads
  "creating oral airway: 1. McGovern nipple 2. Oral airway 3. intubation", with the surgical
  approaches listed separately. **This resolves an apparent contradiction with `entep-nose-105`**,
  which keys transnasal endoscopic repair: one question asks the initial airway, the other the
  definitive treatment.

#### Source defects found in Exam 4

- **⚠️ p.2278 (Q44) — the keyed option contradicts the bank's own box.** The option reads "metastatic
  lymph node from **supraclavicular** primary"; the box justifies it as metastasis "from **head and
  neck** cancers". A supraclavicular primary is not a head and neck primary. Transcribed as keyed.
  **The same exam prints the correct wording as Q77 (p.2344)** — "from head and neck malignancy" —
  so the bank contradicts itself 66 pages apart on the same clinical question. Both are held
  (`entep-mfe4-8` and `entep-mfe4-32`).
- **⚠️ p.2296 (Q53) — disputed key.** The stem describes trauma to the **middle third of the face**,
  which standard teaching images by CT; the key is plain AP and lateral radiographs, and the box
  narrows the question to "nasal trauma" to justify it. Transcribed as keyed, both readings recorded.
  **This is a fifth disputed key** on top of the four already in §11 item 6, plus the two from Exam 1.
- **p.2302 (Q56) — two defects in one question.** The stem asks the treatment "for **allergists**"
  where it means patients with allergic rhinitis, and option c reads "**Intravenous** tympanic
  steroid injection", conflating intravenous with intratympanic. Left as printed.
- **p.2308 (Q59)** calls a "diffuse periorbital headache" *matching* sinusitis, then rejects
  "diffuse, band-like pressure" — the discrimination rests on the band, not the diffuseness. Noted
  in the entry rather than corrected.
- **p.2326 (Q68)** keys submandibular *gland* enlargement as not a sign of tonsil chronicity, while
  **`entep-throat-77`** answers the same question by keying congestion of the anterior pillar — a
  key already recorded as disputed. Not duplicates; they should be read together.

### ⚠️ MODEL FINAL EXAM 5 — 79 printings, **46 NEW**, and the parity rule breaks — 2026-08-03

Read end to end, pp.2345–2504, title page p.2345, Exam 6's title page p.2505. **79 printings,
numbered 1–77 with 45 and 55 EACH USED TWICE** for two entirely different questions — so the printed
numbers undercount by two, in the opposite direction to Exam 3's missing Q20. No case section.

**46 of the 79 are new.** With Exam 4's 32 that is 78 new questions from two consecutive exams,
against 4 from the three before them. Running tally across five exams: **387 printings read, 82 new.**

| | Exam 1 | Exam 2 | Exam 3 | Exam 4 | **Exam 5** |
|---|---|---|---|---|---|
| Printings | 77 | 78 | 76 | 77 | **79** |
| New | 3 | 0 | 1 | 32 | **46** |
| Parity shifts | 0 | 2 | 2 | 0 | **1** |
| Boxes | all 77 | from Q62, restyled | most | 74 of 77 | **78 of 79** |

#### ⚠️ THE PARITY SHIFT IS NOT A SPILL PAGE — the rule is retired

Answered pages run **ODD 2347–2435** (Q1–Q45a), then **EVEN 2438–2504** (Q45b–Q77); 45 + 34 = 79.
Every one of the four earlier shifts in the model exams (pp.1935, 1966, 2038, 2171) was a **spill
page** — an explanation box too tall for its tile, given a page of its own — and "every parity shift
is a spill page" had been written down as settled. **This one is a different mechanism entirely:
p.2436 reprints Q44 ANSWERED a second time, out of sequence**, and that one stray page is what pushes
everything after it onto even pages.

It was found only by rendering **pp.2433–2444 consecutively** instead of sampling across the shift.
A sampled pair either side shows the parity change and nothing about its cause, and the cause is what
tells you whether a page was skipped. **When parity changes, render the whole run through it.**

#### What the five stages caught — measured, not remembered

Reconciled after writing: 46 written + 33 dropped = 79 staged, every staged page matched to an entry
or to a drop, no written page absent from the stage, no page carrying two entries.

| Stage | Flagged | Of those, actually reprints | Kept |
|---|---|---|---|
| A — normalised stem + sorted options | 10 | 10 | 0 |
| B — sorted options + keyed answer | 14 | 14 | 0 |
| C — keyed answer + option count | 14 | 1 | 13 |
| D — ≤1 differing token in the keyed answer | 6 | 3 | 3 |
| *(clean)* | 35 | **5** | 30 |

**Check C was almost pure noise here** — 14 flagged, 1 reprint — against 8/6 in Exam 4. It is an
eye-list by design and that is the cost of it; the one it caught (Q24) would not have been found
otherwise.

**The clean column gave 5 reprints again, exactly as in Exam 4.** Stage E — stem-token ranking of
everything A–D let through, added to the sweep after Exam 4 proved the need — caught four of them on
its first outing: **Q7 ≡ `entep-ear-204`**, **Q8 ≡ `entep-ear-205`**, **Q29 ≡ `entep-nose-58`**, and
**Q73 ≡ `entep-mfe4-3`** at r=1.00 — a reprint of a question added an hour earlier in the previous
batch, which nothing keyed on the answer could have seen. The fifth, **Q75, is a verbatim WITHIN-EXAM
reprint of Q8**; since Q8 itself reprints `entep-ear-205`, neither is held.

#### ⚠️ Stage E LISTS, it never decides — a 0.95 match that is a different question

**Q33 (p.2411) scores 0.95 against `entep-throat-101` and is not a duplicate.** The two stems are the
same sentence but for one word: "stridor and a **NORMAL** cry" against "stridor and an **abnormal**
cry". That word inverts the answer — normal cry keys **subglottic stenosis** (the lesion spares the
cords), abnormal cry keys **laryngeal web**. Both are held, and each entry names the other.

So stage E must never auto-fold. It is exactly as blind to meaning as A–D are; it is only blind in a
*different direction*, which is the whole reason it is worth running.

#### The second-term pass caught what stage E could not — a tie

**Q42 (Ludwig's angina, p.2429) ranks 0.73 against `entep-throat-79` — tied with `entep-throat-17`,
which won the sort and displaced it out of the top three.** Only the per-question keyword search
surfaced the pair. Read in full they share the key and nothing else: the other three distractors are
entirely different, so it is a variant and both are kept.

**A tie in a ranked list silently hides the loser.** This is the second independent reason the
keyword pass is not optional, on top of the vignette-vs-direct-question rewrite from Exam 4.

#### The one unboxed page — p.2435 — and a conflict with the course material

Q45a is the only printing in the exam with no explanation box, so its explanation is **written and
marked** (`entep-mfe5-20`). Grounding it surfaced a genuine disagreement:

- `L11) Vocal cord paralysis.pdf` tabulates **bilateral adductor** paralysis as **aphonia +
  aspiration**.
- The bank keys **"hoarseness with aspiration"** — and its own table, printed three pages later at
  **p.2438**, reads "Bilateral adductor (complete) → **Aphonia** and aspiration", agreeing with the
  slide and contradicting the key it printed at p.2435.
- **None of the offered options matches the slide exactly.**

Transcribed as keyed, with the slide's wording, the bank's own table and the mismatch all recorded in
the entry. **The bank contradicts itself three pages apart** — the second such self-contradiction in
two exams, after Exam 4's supraclavicular/head-and-neck pair 66 pages apart.

#### Two smaller notes

- **Q46 depends on Q45b** — it opens "In the previous case", so the two must be read together and
  neither can be folded independently of the other.
- **Q60 (p.2470) is the Dix–Hallpike question**, a reprint of `entep-ear-85`. `entep-mfe5-2` points at
  `entep-ear-85` rather than at a page in this exam, since the held entry is the one that survives.

### MODEL FINAL EXAM 6 — 77 printings, **1 new**, and it is a mis-key — 2026-08-04

Read end to end, pp.2505–2659, title page p.2505. **77 printings, numbered 1–77 with no gap and no
repeat** — the printed numbers and the question count agree, as they did only in Exam 4. **Answered
pages ODD 2507–2659 throughout: no parity shift, no spill page, no case section.** Every tile carried
a highlight; two of them (Q47 p.2599, Q49 p.2603) use a **cyan** highlight rather than yellow, which
is a printing variation and nothing more.

**76 of the 77 are reprints — 98.7%, the highest rate of any exam.** This one *is* the compilation
that Exams 4 and 5 were not. Running tally across six exams: **464 printings read, 83 new.**

| | Exam 1 | Exam 2 | Exam 3 | Exam 4 | Exam 5 | **Exam 6** |
|---|---|---|---|---|---|---|
| Printings | 77 | 78 | 76 | 77 | 79 | **77** |
| New | 3 | 0 | 1 | 32 | 46 | **1** |
| Parity shifts | 0 | 2 | 2 | 0 | 1 | **0** |
| Boxes | all 77 | from Q62, restyled | most | 74 of 77 | 78 of 79 | **76 of 77** |

**So the reprint rate has now gone 96 → 100 → 99 → 58 → 42 → 99%.** Two consecutive exams broke the
compilation pattern and the next one restored it completely. **There is no trend to extrapolate.**
Budget Exam 7 as unknown, exactly as before.

#### ⚠️ STAGE E MUST RUN ON ALL OF THEM, NOT ONLY ON THE CLEAN SET

The sweep routes each staged question to the first stage that matches, and stages A–D hand back a
candidate list **keyed on the answer**. Stage E was then run only over what A–D called clean. That
leaves a hole, and Exam 6 fell into it:

**Q21 (p.2547) was routed to stage C**, whose answer-keyed list offered `entep-ear-108` and
`entep-ear-100` — two long clinical vignettes that share nothing with it but the words "Acoustic
neuroma". Read side by side they are obviously not the same question, and on that basis Q21 would
have been declared new. **It never got stem-ranked, because it was not in the clean set.**

Re-running the ranking over **all 77** put Q21 at **0.54** against `entep-ear-57` — low, because the
bank rewrote the stem from a question into a statement:

> `entep-ear-57`: "**Which of the following conditions can cause** unilateral high frequency
> sensorineural hearing loss?"
> Exam 6 Q21: "Unilateral high frequency Sensorineural hearing loss **can be due to**:"

Even 0.54 was not the thing that settled it — **the keyword search was**, and then the verdict came
from a note written in an earlier batch. `entep-ear-57`'s own `source` field already recorded that
p.366 reprints it "one distractor changed (**bilateral wax** for unilateral secretory OM)", and Exam
6's Q21 is precisely that variant. **A reprint was identified by a sentence written months of
batches earlier — which is the whole argument for recording variants in `source` rather than
discarding them.**

Two rules out of this:

1. **Rank every staged question, not just the clean ones.** It costs one pass and closes the hole.
2. **The keyword pass stays mandatory.** This is the third independent time it has caught what
   ranking could not — after Exam 4's vignette rewrite and Exam 5's tie-displacement.

#### What the five stages caught

Reconciled after writing: 1 written + 76 dropped = 77 staged, every staged page matched to an entry
or a drop, no written page absent from the stage.

| Stage | Flagged | Of those, actually reprints |
|---|---|---|
| A — normalised stem + sorted options | 46 | 46 |
| B — sorted options + keyed answer | 9 | 9 |
| C — keyed answer + option count | 12 | 12 |
| D — ≤1 differing token in the keyed answer | 1 | 1 |
| *(clean)* | 9 | **8** |

**Check C was 12 for 12 here and 1 for 14 in Exam 5.** Its precision swings wildly between exams and
is worth nothing as a signal; what makes it worth running is that it never *misses*. The clean column
gave 8 reprints of 9 — stage E ranked all eight at **0.83–1.00**, the usual crop of one-word
respellings the bank reprints itself with: *Peumothorax* for Pneumothorax, *Herptic* for Herpetic,
*Impeding* for Impending, *Postcricoid* for Post-cricoid, *Stidor* for Stridor, *Seborrhic* for
Seborrhoic, *Aeuroginosa* for Aeruginosa, *dipheteria* for diphetria.

#### ⚠️ The one new question is the bank mis-keying its own stem — `entep-mfe6-1`

**Q62 (p.2629) prints the stem of `entep-ear-59` (p.318) verbatim**, swaps one distractor, and moves
the key onto the swap:

| | `entep-ear-59` (p.318) | Exam 6 Q62 (p.2629) |
|---|---|---|
| a | Intermittent mucopurulent otorrhoea | Intermittent mucopurulent otorrhoea |
| b | Central tympanic membrane perforation | Central tympanic membrane perforation |
| c | **High incidence of complications** ← keyed | High incidence of complications |
| d | Negative Rinne test in the affected ear | **Profuse odourless otorrhoea** ← keyed |

Held as a separate entry, because the option set and the key both differ. **The Exam 6 key is wrong,
and three independent sources say so:**

- **The slide.** `L16) Chronic otitis media.pdf`, under *Chronic Otitis Media (Tubo-tympanic type) →
  Symptoms → Otorrhoea*, reads **"Muco-purulent, odourless, profuse and intermittent."** Option d is
  a near-verbatim quotation of the slide's description of the very type the question asks about.
- **The bank's earlier printing.** `entep-ear-59` keys option c — correctly: the tubotympanic type is
  called *safe* precisely because complications are rare.
- **This same exam, 47 pages earlier.** Q15 (p.2535, held as `entep-ear-72`) asks "In safe chronic
  suppurative otitis the discharge is usually:" and keys **"Profuse and odorless"** — the exact thing
  Q62 declares not to be seen. Its box adds that safe CSOM gives "non-fetid, thin discharge".

**That is a third self-contradiction in three consecutive exams** — after Exam 4's supraclavicular /
head-and-neck pair 66 pages apart and Exam 5's vocal-cord table three pages apart. It is no longer an
oddity: **assume each exam contains one and go looking for it.** The pattern in all three is the
same — the bank reprints a question it has already keyed correctly and re-keys it wrongly.

**p.2629 is the only unboxed page in the exam**, so its explanation is written and marked.

#### A disputed key that is now settled as the bank's position

**Q47 (p.2599) reprints `entep-throat-77` identically** — the same four options, the same key,
"Congestion of the anterior pillar" as the sign that is *not* definite in chronic tonsillitis. That
key has stood in the disputed list since the Throat section, on the grounds that standard teaching
makes anterior-pillar congestion a definite sign and enlarged crypts the doubtful one.

**A second identical printing does not make it right, but it does settle what it is:** the bank's
consistent position, not a typesetting slip — the same conclusion reached for Exam 1's Q16 once Exams
2 and 3 keyed it the same way. It stays in the review list, reclassified.

### ⚠️ MODEL FINAL EXAM 7 — 78 printings, **1 new**, and the exam holds **TWO** self-contradictions — 2026-08-04

**THE MODEL EXAM BLOCK IS COMPLETE.** Read end to end, pp.2660–2816, title page p.2660. **78
printings**, and once again **the printed numbering lies**: the numbers run 1–77 with **70 used
twice** — pp.2800 and 2802 are two unrelated questions, a nasal-bone-fracture vignette and a
Kiesselbach's-plexus recall, both printed as "70". **Answered pages EVEN 2662–2816 throughout: no
parity shift, no spill page, no case section.** Every tile carried a highlight; three use cyan
(Q26 p.2712, Q33 p.2726, Q35 p.2730) rather than yellow, which is printing variation only.

**77 of the 78 are reprints — 98.7%, level with Exam 6.** Running tally across the whole block:
**542 printings read, 84 new.**

| | Exam 1 | Exam 2 | Exam 3 | Exam 4 | Exam 5 | Exam 6 | **Exam 7** |
|---|---|---|---|---|---|---|---|
| Printings | 77 | 78 | 76 | 77 | 79 | 77 | **78** |
| New | 3 | 0 | 1 | 32 | 46 | 1 | **1** |
| Parity shifts | 0 | 2 | 2 | 0 | 1 | 0 | **0** |
| Numbering defects | — | 71 twice | no Q20 | — | 45 and 55 twice | — | **70 twice** |
| Boxes | all 77 | from Q62, restyled | most | 74 of 77 | 78 of 79 | 76 of 77 | **70 of 78** |

**Final reprint rate across the block: 96 → 100 → 99 → 58 → 42 → 99 → 99%.** Exams 4 and 5 are the
anomaly and everything either side of them is a compilation. **Three exams in a row have now ended at
98–99%, and that still does not license extrapolating to the other banks** — the same reasoning
predicted Exam 5 wrongly by 46 questions.

**Boxes are the sparsest of any exam — 8 bare pages** (2670, 2712, 2784, 2786, 2788, 2792, 2794,
2808) against Exam 6's one. **⚠️ And both mis-keyed pages are among the bare eight**, exactly as
p.2629 was in Exam 6. That is now four unboxed mis-keys out of four: **a missing explanation box is
worth treating as a signal to check the key**, not merely as a gap to fill.

#### ⚠️ TWO self-contradictions, on consecutive questions

Every exam since Exam 4 has held exactly one. **This one holds two, and they are Q62 and Q63** — the
same shape as before (a question the bank already keyed correctly, reprinted and re-keyed wrongly),
but in two different mechanisms, and it matters which, because the mechanism decides whether a new
entry is written:

| | **Q62, p.2784** → `entep-mfe7-1` | **Q63, p.2786** → *no new entry* |
|---|---|---|
| Twin | `entep-nose-19` (p.927) | `entep-nose-2` (p.893) |
| Stem | identical | identical |
| Options | **all four replaced** | **identical, same order** |
| Key | moved to a new option | moved b → c within the same list |
| Held how | **separate entry** — the option sets share nothing | **not held twice** — a second entry would show the learner the same question again; the mis-key is recorded in `entep-nose-2` |

**Q62 is the worst-keyed question found in this file so far, because the bank deleted the correct
answer from its own option list.** The vignette — *30-year-old female, unilateral watery rhinorrhoea
increasing on bending forward* — is CSF rhinorrhoea, and `entep-nose-19` prints this exact stem with
CSF rhinorrhoea among the options and keys it, with the source's own explanation box. Exam 7 swapped
in *juvenile angiofibroma / inverted papilloma / persistent adenoids / antro-choanal polyp* and keyed
the first. **`L26) nasal masses.pdf` puts angiofibroma in "Males during adolescence"** and lists its
presentation as obstruction, epistaxis, ear fullness and facial asymmetry — so the keyed answer is
wrong on **sex, on age and on symptom** simultaneously. `L31) nasal symptoms 1.pdf` heads its
**unilateral** discharge list with CSF rhinorrhoea. The bank itself keys this picture CSF rhinorrhoea
in **seven** other places (`entep-nose-19`, `-28`, `-59`, `-73`, `-103`, `entep-mfe5-8`,
`entep-nose-case-5`). Transcribed as keyed, with all of that recorded in the entry.

**Q63 is the same defect in the simpler form.** 60-year-old male carpenter, smoker, unilateral
obstruction, epistaxis, toothache and **numbness of the cheek**; p.893 keys *sinonasal malignancy*
and prints its own box explaining the infraorbital-nerve involvement, and p.2786 keys *inverted
papilloma* with no box. The p.893 key is kept — cheek numbness means nerve invasion and 20 years of
wood dust is the classic occupational risk — and the discrepancy is written into that entry's
`source`.

#### What the five stages caught

Reconciled after writing: **1 written + 77 dropped = 78 staged**, every staged page matched to an
entry or a drop, no written page absent from the stage.

| Stage | Flagged | Of those, actually reprints |
|---|---|---|
| A — normalised stem + sorted options | 22 | 22 |
| B — sorted options + keyed answer | 31 | 31 |
| C — keyed answer + option count | 17 | **16** |
| D — ≤1 differing token in the keyed answer | 5 | 5 |
| *(clean)* | 3 | **3** |

**⚠️ THE ONLY NEW QUESTION CAME OUT OF STAGE C, AND THE CLEAN SET WAS 3 FOR 3 REPRINTS.** Every
previous exam found its new questions in the clean column, which is why the clean column is the one
that gets read carefully. **Here the clean column was pure noise** — three one-word respellings
(*innitus* for tinnitus, *presented* for present, *laryngotracheobrochitis* for
laryngotracheobronchitis) — and the single genuinely new question was sitting in a stage that had
declared it matched. Stage C matched Q62 to `entep-nose-19` **on the answer text of a completely
different option list**, which is exactly the failure mode C exists to be loose about.

**So the resolution rule generalises: read every staged question whose OPTION SET differs from its
stem twin, whatever stage flagged it.** That set is precisely C ∪ D ∪ clean — 25 of 78 here — and it
is where a changed distractor or a moved key can hide. Running the side-by-side over all 25 took one
probe and found both contradictions; reading only the clean 3 would have found neither.

Stage E, run over all 78 per the rule added in Exam 6, ranked Q62 at **1.00** against `entep-nose-19`
— the stems are word-for-word identical — which is what made the option-set substitution visible at
all. **A 1.00 stem match that did NOT reach stage A or B is a re-optioned reprint by definition**,
and worth treating as its own alarm.

#### One more independent source against Exam 6's mis-key

**Exam 7 p.2722 prints an explanation box reading "Tubotympanic CSOM presents with central
perforation and safe, mucopurulent discharge without complications."** That is a **fourth**
source contradicting `entep-mfe6-1`, after the slide, `entep-ear-59`, and Exam 6's own Q15. Added to
that entry's `source`. It also means the bank states the correct fact in one exam and keys against it
in the previous one — the contradictions are not confined within an exam.

### RECENTLY EDITED QUESTIONS — 18 printings, **0 new**, and it is the bank's own errata list — 2026-08-04

pp.2817–2835, title page p.2817. **⚠️ THE TWO-PAGE SHAPE DOES NOT HOLD HERE, AND THAT IS THE POINT
OF CHECKING RATHER THAN ASSUMING.** Every section and all seven exams print each question twice,
unanswered then answered. **This section prints each question ONCE, already answered** — 18 single
pages, 2818–2835, one question per page. Had the answered-parity assumption been carried over,
**half the section would have been skipped as "unanswered pages".**

**The printed numbers are non-sequential:** 80, 252, 2, 18, 135, 31, 49, 25, 26, 118, 47, 48, 106,
123, 42, 37, 120, 35. Each question **keeps the number it carries in its home section**, which is the
clue to what this section is. Highlights are mostly **cyan**; boxes on only 4 of 18 (pp.2820, 2823,
2825, 2835).

**All 18 are reprints — the sweep returned a ZERO clean column**, the first time that has happened.
Stage A caught 10, B 3, C 4, D 1. The five at C/D were read side by side per the Exam 7 rule and are
all one-word respellings or an option printed in full versus abbreviated.

#### ⚠️ What this section actually is, and why it is worth more than 18 reprints

**It is the compiler's errata list**, and it revisits questions whose keys have been contested. Three
of the long-standing disputed keys appear here, **re-affirmed, two of them with a newly written
explanation box that was not printed at the original**:

| Page | Question | What it settles |
|---|---|---|
| **2820** | `entep-throat-2`, bilateral adductor paralysis | New box: "**Bilateral adductor paralysis = Hoarseness + Aspiration**; **Bilateral abductor paralysis = Airway obstruction (stridor)**" |
| **2823** | `entep-throat-28`, the 37-year-old teacher | New box: "**HOV + inflamed edematous vocal cords without MAP lesions = medical treatment and follow-up** (we can't leave the edema and inflammation of the VCs without medical treatment)" |
| **2828** | `entep-throat-77`, definite signs of chronic tonsillitis | Reprinted identically — the **third** printing of that key, after Exam 6 p.2599 |

**p.2820 is the decisive one for `entep-mfe5-20`.** That dispute was logged because the bank keyed
*hoarseness + aspiration* for bilateral adductor palsy while `L11) Vocal cord paralysis.pdf`
tabulates **aphonia**, and because the bank's own table at p.2438 sided with the slide. The errata
section now states the MCQ pairing explicitly, in a box written for the purpose. **So the bank has
looked at this again and kept hoarseness.** The clash with the course material is real and permanent
rather than a typo: **learn the bank's pairing for the bank's exam, and know the slide says aphonia.**
All three annotations went into the existing entries; no new entries were written.

**Rule this yields: a "disputed key" is only ever provisional until the bank reprints it.** Five of
the eleven disputed keys are now reclassified as the bank's settled position — `entep-throat-77`,
Exam 1's Q16, `entep-throat-28`, `entep-throat-2`/`entep-mfe5-20` — and every one of those
reclassifications came from a *later* printing, never from re-reading the original.

#### ⚠️ Exam Night Review begins at p.2836, and it contains PHOTOGRAPHS

Boundary verified by render: **p.2835 is the last Recently Edited question, p.2836 is the Exam Night
Review title page, questions start p.2837.** That section **does** return to the two-page shape —
2837 unanswered / 2838 answered, answered pages EVEN.

**⚠️ AND IT PRINTS CLINICAL IMAGES.** p.2841/2842 carries an otoscopic photograph beside the stem
("a 32-year-old white female… marked tenderness on pressure over the left tragus"). **No question
anywhere else in this file has had one, and the question schema has no image field.** Three options,
none of them free, and this is a **user decision, not a transcription judgement**:

1. **Transcribe the stem and describe the image in words**, marked as a description rather than a
   quotation. Cheapest, keeps the app unchanged, loses the visual diagnosis skill the question tests.
2. **Crop the image out of the PDF into `app\assets\q\` and add an optional `image` field.** Faithful,
   costs a schema change plus render/crop tooling, and grows the deployed folder.
3. **Skip image-dependent questions**, recording each one skipped.

Nothing decided; raised with the user. **Until it is decided, do not silently drop an image question
— that would be a content loss invisible in every count.**

### EXAM NIGHT REVIEW — read and staged, NOT yet written — 2026-08-04

pp.2836–3074, the last section of `ENT endpoint.pdf`. **⚠️ IT IS THREE DIFFERENT THINGS, not one
section**, and only the first is MCQs:

| Pages | What | Shape |
|---|---|---|
| 2836 | title | — |
| **2837–3045** | **104 MCQs** | printed **twice**, answered pages **EVEN** 2838–3044 |
| **3046–3070** | **25 pages of rapid-fire "prompt → answer" fact lists**, 230 lines | ~~printed **ONCE each**, every page unique~~ **WRONG — corrected 2026-08-07, see §11d** |
| 3071–3074 | closing devotional pages (Arabic du'ā), no content | — |

**All 104 MCQs are read and staged**, with the sweep run. Nothing is written into the data file yet
— that is the next session's work. The artefacts are in the project, not the scratchpad:
`content\ent\qb-pages\exam-night-review-mcqs.staged.js` (all 104, with `img` and `imgEssential`
flags), `…\recently-edited.staged.js`, and `…\exam-night-review-sweep.json`.

#### ⚠️ This section is unlike every other one in the file

- **ZERO exact (stage A) matches — the first time that has happened.** Every other section and exam
  opened with a block of verbatim reprints. Here the bank has genuinely rewritten its stems.
- **31 of 104 came through clean**, the largest new-question yield since Exam 5's 46. Stage B 32,
  C 32, D 9. **Budget this as a large batch, not a compilation.**
- **No explanation box on ANY page.** So every entry written from this section will need an authored,
  marked explanation — ~30+ of them, which is the real cost of this batch.
- **Within-batch duplicates:** Q15≡Q24 (nasal trauma one month), Q21≡Q47 (pyriform-fossa nerve),
  Q52≡Q53 (intubation granuloma). Fold each to one.

#### ⚠️ The images — 18 of 104, and the user has decided

**The user chose: crop the photographs into the app** (2026-08-04), i.e. extract each into
`app\assets\q\` and add an optional `image` field to the question schema. Not yet built.

Images sit on pp.2842, 2844, 2860, 2872, 2876, 2886, **and then densely from 3018 to 3044** —
that block is 12 of 14 pages. **Ten are `imgEssential`: the question cannot be answered without the
picture at all** (Q4, Q20, Q94, Q95, Q96, Q98, Q99, Q100, Q101, Q104). Q95/Q98/Q99 are *labelled
anatomical diagrams* — "the structure labeled X" — which no verbal description can substitute for.

**What building it requires**, none of it done yet:

1. `image:'q-en-95.jpg'` as an optional field, rendered above the options in the quiz card.
2. A crop script: render the PDF page at high DPI, locate the photo's bounding box, write a JPEG
   into `app\assets\q\`. The pictures are framed with a visible border, so the box is findable by
   scanning for it rather than by hand-measuring each one.
3. **⚠️ `bundle.ps1` must rewrite these to data: URIs**, exactly as it already does for `MOD_ART`
   and `CLEP_POSES` — so the path must be a **value in a map resolved at runtime**, never a literal
   `src` in the entry. Miss this and the single-file build shows broken images.
4. `CLAUDE.md` §4 schema block updated.

#### The fact-list pages are NOT questions — they belong in the theory

pp.3046–3070 are the bank's own high-yield cram sheet: one line per fact, "*Pulsatile tinnitus is
seen in → Glomus tumour*", "*Absent laryngeal click indicates → Post-cricoid tumour*". They are not
MCQs and not cases, and **forcing them into `QUESTIONS` would mean inventing distractors**, which is
authoring.

**They are, however, exactly what `CLAUDE.md` §4 says should drive the theory** — the examiner's own
statement of what he keeps asking. **Harvested into `content\ent\examiner-patterns.md` on
2026-08-07; the file is written and this paragraph's claim about the run's shape was wrong — §11d.**

### One question, many banks — the filter fix, 2026-08-03

**The user reported it as a feature request and it was a defect.** A question printed in two banks was
held as **two entries**, one per bank, under the old rule that a cross-bank duplicate is never folded
— the reasoning being that deleting either copy would misreport what that bank contains. That
reasoning was sound about the *banks* and wrong about the *learner*: **ticking both sources showed
the same question twice.**

The fix is a question that belongs to several banks rather than two questions that each belong to
one: `bank` keeps its meaning as the bank the question was transcribed from, and **`alsoIn` lists
every other bank that prints it.** Both properties now hold at once — each bank's contents are
reported accurately, and the question renders exactly once under any combination of sources.

**Measured against the real filter, not reasoned about:** all sources → 1; Endpoint + House → 1;
House only → 1 (module shows 21); Endpoint only → 1 (module shows 580); Grade Gain only → absent.
Zero duplicate ids visible in the module under any selection, 2 pills on the card, 0 console errors.

- **Only one such question existed to fold** — `entep-throat-103` / the retired `enthd-ear-15`,
  because House is the only non-Endpoint bank transcribed so far. **This is the cheapest moment this
  change will ever be made**; five banks are still to come and the ENT ones reprint each other hard.
- **Per-bank counts now exceed the question count** — ENT reads 580 + 21 across 600. The user chose
  this explicitly over the tidier alternatives. It is the honest reading: the question really is in
  both banks.
- **⚠️ `bankOf()` → `banksOf()` in four places**, and a miss would have been silent and asymmetric —
  a question that filters correctly but is absent from a count, or counts but cannot be filtered to.
- **⚠️ Folding an id leaves dangling references.** Three mentions of the retired id survived in other
  entries' prose, and **backticked ids are read as live references by the cross-reference checker**,
  so all three had to be rewritten. The convention already existed for retired case ids; it now
  applies to folded ones.
- The folded entry kept `ent-dysph` and records `ent-otalgia` — the House entry's chapter, and
  arguably the better home — as a **secondary**. Moving it is a separate decision, not this one.
- **⚠️ THERE ARE NOW TWO DIFFERENT "COUNT BY BANK" NUMBERS, and mixing them looks like data loss.**
  Counting `q.bank` gives **origins** (580 Endpoint, **20** House); counting `banksOf(q)` gives
  **membership** (580, **21**). The post-batch validation probe counts origins, so after this change
  it reports House 20 and reads as though a question vanished. **The app must always use membership;
  a probe reporting origins must say so.** Nothing is missing — 600 entries, 601 memberships.

### Reading method refined — 2026-08-02

**Two passes beat one.** Read the batch at `-CropTop 0.32`, which fits **18 pages** on a sheet and
gives stem, options and the highlight but clips the box. Sweep those. Then re-render **only the
survivors** at `0.45` for their explanation boxes. On a 96%-reprint block that turns 77 box-quality
reads into 77 cheap ones plus 3 expensive ones.

**⚠️ Sheet legibility depends on the sheet's WIDTH, not on how many pages are on it.** The read tool
fits the image inside a 2000px box, so a 3-column sheet renders at the same scale whether it has 4
rows or 6 — 3747px wide always comes back at 1.87×. An 18-page sheet at `0.45` is 4908px **tall**,
which caps on height instead and drops to 2.45×, visibly tighter. So: **more rows are free at a
shallow crop; a deep crop must stay at 12 pages.**

### Throat section behaviour, moved from `MEMORY.md` 2026-07-27

**Explanation boxes are back and terse** after 63 pages without — one to three sentences. Patchy over
pp.1352–1386, then **on every answered page across pp.1388–1436**; absent again at pp.1497, 1702,
1704, 1706. Because they are so short, a Throat entry usually carries **both** the box verbatim *and*
a separated authored paragraph ending "the addition is not part of the source's box." **Cyan
highlighting is common here** — pp.1354, 1356, 1362, 1386, 1410. Read the option, not the shade.

**⚠️ THE THROAT SECTION RECYCLES HEAVILY — AND THE DUPLICATE CHECK HAS CAUGHT ONE ENTRY PER BATCH
THAT WAS WRITTEN UP AS NEW.** p.1424 was the **third** printing of `entep-ear-49`; p.1475 was a
reprint of `entep-ear-29`. Both were found **only by the option-set check, after the writing was
done**. **Run the stem and option-set sweep over the WHOLE FILE before writing a batch, never just
over the current id prefix.** From p.1465 the section also starts reprinting **itself** a few pages
later. Where the later printing carries the fuller box, that is the one transcribed.

**FIVE numbering defects so far, all confirmed by rendering both facing pages:**
- pp.1401/1402 — one question printed as **Q26** unanswered then **Q27** answered.
- pp.1449/1450 — the same defect again, **Q50** then **Q51**.
- pp.1442 and 1444 — **two DIFFERENT questions both numbered Q47.** Both kept.
- pp.1597 and 1599 — **two DIFFERENT questions both numbered Q124**, on one shared vignette: the
  diagnosis, then the drainage route. Both kept.
- pp.1605 and 1607 — the same again as **Q127**: name the noise, then give the diagnosis. Both kept.

**The last two are a linked set and a numbering defect at once**, and that combination is now the
commonest defect in the section. The tell is that the two printings share their opening sentences
and diverge only in the final question — so **read to the end of the stem before deciding a page is
a reprint.** Both members carry the vignette restated in the stem so each stands alone in the app.

**Q53–Q56 (pp.1454–1460) are a LINKED SET** on a vignette printed only on p.1454; the other three
say just "that patient's condition". Each carries a bracketed copy, flagged in its `source`.
**Expect more linked sets** — the header "Questions from N to M:" marks them.

### pp.1537–1615 — the boxes stop completely, and the reprints change shape

**NOT ONE of the 40 printings across pp.1537–1615 carries an explanation box.** That is the longest
boxless run found anywhere in `ENT endpoint.pdf`, longer than pp.372–426 in the Ear section. After
three Throat batches in which a box was the norm, the assumption has to be dropped again: **box
presence is a property of the page, not of the section.**

**Parity was ODD across all 40 pages** — no flip. But MEMORY still records a flip to **even** by
Q173–Q176 (pp.1700–1706), so one is still ahead.

> **Resolved in the next batch, 2026-07-27.** The flip does come, but **earlier than the pp.1700–1706
> estimate** — at **p.1656**. Parity is odd through p.1653 and even from p.1656. The estimate was
> right that a flip was ahead and wrong about where, which is exactly why the standing rule is to
> check every tile for a highlight rather than to project a parity forward.

**The reprints in this run rarely repeat exactly.** Six of the eight differ from their twin in one
option's wording or in the stem, always trivially and usually for the worse:

| Page | Twin | The difference |
|---|---|---|
| 1543 | `entep-throat-22` (p.1396) | "**Supralaryngeal** carcinoma" for "Supraglottic laryngeal carcinoma" — a non-word |
| 1561 | `entep-throat-17` (p.1386) | "Drainage is Peroral **without general anaesthesia**" — here the reprint is **better**, and is the one kept |
| 1571 | `entep-throat-4` (p.1358) | stem shortened; "**Severe** stridor" for "Stridor" |
| 1573 | `entep-throat-23` (p.1398) | "Lymph node**(s)**" for "Lymph node enlargement" |
| 1579 | `entep-throat-16` (p.1384) | stem garbled to "Vocal nodules **present** usually seen at:" |
| 1595 | p.1577, same batch | "...of a case **Suffering of:**" for "...of a case with" |

**A stem-normalising duplicate check catches all of these; an exact-string one catches none.** This
is the same lesson as the `EXCEPT`/`except` pair in the Ear section, and it is why the sweep
lowercases and strips punctuation before comparing.

**Two questions in this run reprint a fact rather than a question, and are kept as VARIANTS**:
`entep-throat-95` (p.1603) against `entep-throat-14`, and `entep-throat-99` (p.1611) against
`entep-throat-30`. The second is the more interesting: the bank reprints the same lateral-neck-mass
vignette **with the patient's age changed from 62 to 42** and one option reworded. Whether that is
deliberate or a re-typing cannot be known, so both are kept and the discrepancy recorded.

**Cyan key at p.1585** — the eleventh. Running list: **pp.971, 1091, 1119, 1354, 1356, 1362, 1386,
1410, 1446, 1517, 1585.**

**p.1585 also prints only THREE options**, a to c. Option counts are not fixed at four.

### THE THROAT MCQs ARE COMPLETE — 2026-07-27

**pp.1351–1706 fully read, Q1–Q176.** Every internal boundary verified by render:

| Range | Content | Printed |
|---|---|---|
| p.1350 | title page, "Questions" | once |
| pp.1351–1706 | **MCQs Q1–Q176** → **136 kept** as `entep-throat-1`…`138` (ids `31` and `52` retired as duplicates) | twice |
| p.1707 | title page, "Solved Cases" | once |
| pp.1708–1720 | **26 free-text cases**, Case 1–26, two per page → **24 kept** as `entep-throat-case-1`…`26` (11 and 12 retired as reprints) | **once** |
| p.1721 | "Model Final Exam 1" begins | — |

**Both halves are now transcribed: 136 MCQs + 24 cases = 160 Throat entries.**

**176 printed numbers produced 136 entries** — 40 printings were reprints of questions already held.
The contents table's pp.1350–1720 was correct end to end, the only structural prediction in this
file that has held without amendment.

**The third section, the third confirmation that the shape repeats:** MCQs printed twice, then a
case section with no options printed once. Ear, Nose and Throat all do it. **Expect it in the Model
Final Exams too, and check at the boundary rather than assuming it.**

### What the 26 Throat cases taught — pp.1708-1720, read 2026-07-27

**The case-section shape is now confirmed three times out of three.** Ear, Nose and Throat each end
with a title page, then free-text cases printed **once**, two per page, with **no explanation for any
of them**. **84 printed cases across the three sections, not one explanation box.** Treat that as the
rule for the Model Final Exams and check only the boundary.

**Reprint rate held at 2-in-26**, and both were caught by the pre-write sweep before anything was
written — one within the section, one crossing from the Ear section 960 pages earlier. **The
cross-section reprint is now a five-time pattern and the sweep must always run over the whole file,
never over the current id prefix.**

**The variant/fold rule earned its keep here.** Three near-pairs turned up and the rule separated
them cleanly without any case-by-case agonising:

| Pair | Verdict | Why |
|---|---|---|
| Case 11 vs Case 8 | **FOLD** | one word differs, same answer |
| Case 12 vs `entep-case-11` | **FOLD** | reworded findings, same answer |
| Case 15 vs `entep-case-9` | **VARIANT** | **the required answer changes** — "Right SOM" vs "SOM caused by NPC" |

**The answer, not the stem, is what decides it for cases.** Two vignettes can read almost identically
and still be different questions if the diagnosis demanded differs. That is the case-section analogue
of "any option differing in meaning makes a variant", and it is worth stating separately because a
case has no options to compare.

**The bank pairs its cases deliberately, and the pairing is the teaching.** Four pairs sit on facing
pages or the same page purely for contrast: quinsy vs parapharyngeal abscess (Cases 7 and 6),
unilateral vs bilateral RLN palsy (Cases 22 and 23), paediatric bilateral SOM vs adult unilateral SOM
(Cases 2 and 15), and Plummer–Vinson vs hypopharyngeal carcinoma (Cases 3 and 14). **Each pair is
cross-referenced in both entries**, because the discrimination is the examinable point rather than
either diagnosis alone.

**Two new slide gaps, one of them large.** The **thyroglossal cyst's tongue-protrusion sign** is
absent from **all 32 cached ENT files** — grepped for *protrusion* and *deglutition* and found
nowhere — along with Sistrunk's procedure, even though `L5) NECK MASS.pdf` gives the cyst its own
entry. That is a case where the slide names the condition but omits the one sign the examiner asks
for. The second is the **"hoarseness beyond 3 weeks" referral rule**, which `L2` does not state.

### The stray unanswered page — how a parity flip is actually caused

**p.1654 prints Q150 unanswered for a second time.** One extra page, and every pairing after it
shifts by one, which is what a "parity flip" has been all along. Until this batch only the *effect*
had ever been seen — a tile turning up without a highlight — and the cause was guessed at.

This does not change the working rule (**check every tile for a highlight; never project a parity
forward**), but it explains why flips cluster where they do and why they cannot be predicted from
page numbers: they are printing defects, not a pattern.

**Three causes are now known, and they are NOT equally visible** — this matters because two of them
can be spotted from the tile and the third cannot:

| Cause | Seen at | Recognisable on sight? |
|---|---|---|
| Stray **unanswered** page reprinted | p.1654, p.1878 area | Yes — a tile with no highlight |
| **Spill page** (a box too tall for its tile) | pp.1935, 1966, 2038, 2171 | Yes — it prints prose, not a question |
| Stray **ANSWERED** page reprinted, out of sequence | **p.2436** (Exam 5) | **No** — it looks like a normal answered tile |

The third was only found by rendering **the whole run through the shift** rather than sampling either
side of it. **When parity changes and neither of the first two explains it, render consecutively.**

### Fold or variant — the rule, settled 2026-07-27

Three batches were spent re-deciding this case by case. The rule that was actually being applied,
now written down:

- **If any option differs in MEANING → keep both as VARIANTS.** The learner is being asked two
  different things, whatever the stems look like.
- **If the differences are only wording or spelling of the same concepts → FOLD into one entry**,
  citing both pages in the survivor's `source` and recording which printing was kept and why.
- **NEVER fold across banks.** A duplicate that spans two banks is kept twice — see
  `enthd-ear-15` / `entep-throat-103`. The `bank` field is content, and folding would misreport what
  a bank contains.

The middle case is the common one and the trap: the better-worded printing is kept, not the earlier
one, because several of this file's reprints are actively worse than their twin.

---

## §8 Decisions log — moved here from MEMORY.md on 2026-07-27

MEMORY.md holds only what is needed to pick the work up cold. This log is history, not state, so it
lives here — the same move that section 7 got. MEMORY.md keeps a pointer to it.

- **2026-07-26** — App restructured into `app\index.html` + `app\data\*.js`. Classic scripts, not ES
  modules, because modules are CORS-blocked over `file://`.
- **2026-07-26** — The existing 65 Pediatrics questions and 2 theory chapters were **deliberately
  discarded** so all content is rebuilt to one standard. Recoverable from `archive\`.
- **2026-07-26** — `MODULES` and `SCHEDULE` **kept unchanged**. They are structure, not content.
- **2026-07-26** — Questions are **transcribed from the real question banks**, not authored from
  lecture slides. Explanation and objective are written in the same pass.
- **2026-07-26** — Theory is written from **all three sources** — slides, questions, book — and must
  be comprehensive, not a summary.
- **2026-07-26** — The Python build step in the old README is **dead**. There is no build step.
- **2026-07-26** — Scanned sources are read by rendering page ranges to PNG in the scratchpad, never
  by opening the PDF in the reader.
- **2026-07-26** — The source's own explanation box is captured **verbatim and unmarked** where one
  is printed.
- **2026-07-26** — **Where the source prints none, the explanation is written here** (user's
  instruction). It must be grounded in the cached slides and **name the slide file**; carry the
  trailing marker **`Written for this bank — the endpoint file prints no explanation here.`**; and
  say **`not taken from the course material`** where the slides do not cover the point. **156
  passages** now carry that flag (2026-07-27). Recurring gaps: stapedial reflex, caloric test,
  mastoidectomy types, traumatic TM perforation, myringotomy site, otosclerosis treatment and
  inheritance, eponymous signs (Gradenigo's, Trotter's, Griesinger's, Schwartze's),
  electronystagmography, **and the whole nasopharynx**. Grep for the live list.
- **2026-07-26** — **Duplicates are deleted, keeping one copy**, with every extra printing's page
  recorded in the survivor's `source`. Where two printings differ, the one carrying the source's own
  explanation is kept even if it is not the first. Removed ids are left unused rather than
  renumbered, and the removal is recorded as a comment at the original position.
- **2026-07-26** — **A reprint differing only in the keyed option is held as ONE entry citing both
  printings** (`entep-ear-230`). Distinguish this from a **variant**, where the option *sets*
  genuinely differ — those are kept separately and cross-referenced.
- **2026-07-27** — **The app was REDESIGNED dark cinematic** (user's request; they supplied a
  reference site and asked for "animated and alive but at the same time doesn't affect my goal and
  my data shape"). Answered by separating the two: **presentation lives entirely in
  `app\index.html`, content entirely in `app\data\*.js`**, so the redesign could not touch the 597
  entries and did not. The user chose *full dark cinematic* over a hybrid, and *alive to browse,
  calm to read* over ambient-everywhere. **Why the motion is gated rather than global:** the
  reference is a marketing brochure where animation is the content; this is a tool used for hours
  under exam pressure, and perpetual motion beside a clinical stem competes with reading. Three
  things were deliberately refused: `backdrop-filter` on long lists (the most expensive thing on the
  page, stutters when scrolling hundreds of rows), replacing the serif stem (it is what makes the
  question read like an exam paper), and changing the four module colours (shared with Notion and
  the PDF schedule — they were kept and now glow against navy). The old shell is preserved at
  `archive\index.pre-redesign-2026-07-27.html`; this workspace has no version control, so the copy
  **is** the rollback. Full rules in `CLAUDE.md` §6.
- **2026-07-27** — **The fold-or-variant test, written down after three batches of re-deciding it
  case by case.** Any option differing in **meaning** → keep both as variants. Differences only of
  **wording or spelling** → fold into one entry citing both pages, keeping the **better-worded**
  printing rather than the earlier one, because several of this file's reprints are worse than their
  twin. Full statement in §7.
- **2026-07-27** — **A duplicate spanning two banks is NEVER folded — both copies are kept.** First
  case: `enthd-ear-15` (House p.26) and `entep-throat-103` (Endpoint p.1623), the same pyriform-fossa
  question reworded. The `bank` field is content the learner filters on, so removing either would
  misreport what that bank contains; each entry cross-references the other instead. This is the one
  standing exception to the 2026-07-26 delete-duplicates rule above, and it will recur as the second
  and third banks are transcribed.
- **2026-07-26** — **No ear-trauma chapter will be added to `MODULES`** (user's instruction). The
  affected questions stay under their nearest-fit chapter, are registered in the ledger, and are
  marked `EAR TRAUMA` in their `source` so they can be moved in one pass if that changes.
- **2026-07-26** — **Topics the syllabus splits across two lectures are merged into one chapter**
  (user's instruction), for every module still to come. Ten merges took **114 chapters → 104**.
  `SCHEDULE` was left untouched — verified safe because it carries no chapter ids at all.
- **2026-07-26** — **All 37 cases added as a new `type:'case'` question kind** (user's instruction),
  the first change to app logic since the split. Graded on **concept keys with typo tolerance**,
  never exact wording. Schema and grading rules in `CLAUDE.md` §4.
- **2026-07-26** — **A case never auto-reveals the source's diagnosis** (user's instruction). An
  answered case starts blank with a `.lastgo` chip; `peekCase()` gives a deliberate **👀 Reveal**
  that scores nothing. `Q.peek` must be reset anywhere `Q.shown` is.
- **2026-07-27** — **Source labelling, filtering and shuffling added** (user's instruction), the
  second and third changes to app logic. Filtering lives inside `qsIn`/`qsInModule`, the two
  selectors the whole app already reads through, so chapter rows, counts, quizzes, search and
  progress all agree. Verified by driving the real chips in the browser — which is how the
  `banksPresent` bug was found.

---

## §9 Source material inventory — moved here from MEMORY.md on 2026-07-27

Verified 2026-07-26 by file sweep, confirmed by `pdfinfo`. All under `Herophilus\Semester 8\`.
Stable reference data rather than state, which is why it lives here; MEMORY.md keeps a pointer and
the four facts that change what you do first.

- **140 lecture PDFs + 16 `.pptx`/`.ppt`** in `*/Theoritical/PPT/` — ENT 34, Neuro 25, Opthalmo
  27 (+2 `.pptx`), Pedo 54 (+14). **126 of the 140 PDFs have a usable text layer.** The other 14 are
  image-only. Harvested text is cached in `content\<subject>\lectures\*.txt` (146 files, 1.78 MB);
  the 10 harvest failures are listed in §1.
- **7 books, 1,637 pages total** — ENT ear 156, ENT nose 174, ENT throat 227, pediatrics p1 250,
  pediatrics p2 264, ophthalmology 274, neuropsychiatry 292. **All image-only, 0 characters.**
- **6 question banks, 846 pages** — d house ENT mcq 104, ENT QB 185, pediatric 104, ophthalmology
  MCQ 126, ophthalmology qb 185, neuropsychiatry & neurosurgery qb 142. **All image-only, 0
  characters.** Counts from `pdfinfo`, authoritative.
- **`ENT endpoint.pdf` is the seventh bank and is BOTH a question bank and a theory source** — the
  largest question source in the project. **3,075 pages, 332 MB**, jsPDF-generated. Its contents page
  (p.2) gives the split: **~2,642 question pages** and **~429 theory pages** (three Summary
  sections). Full range table in §2. No text layer — one 800×450 JPEG per page.
  - Every question is printed **twice** — unanswered, then answered with the correct option
    highlighted. **Read only the answered pages.** Parity is not stable and must be re-checked at
    every section boundary: it has flipped **four** times so far, twice inside Ear pp.188–258 and
    twice inside Throat (at p.1465 and at p.1656, the latter caused by the stray unanswered p.1654).

**Bank-to-module map is in `CLAUDE.md` §4.** Identify a bank by its **cover, not its filename** —
`ENT QB.pdf` is Grade Gain and `ophthalmology MCQ.pdf` is House. Still not supplied by the user:
**House for Neuropsychiatry, Grade Gain for Pediatrics.**

---

## §10 Corrections made to earlier records — moved here from MEMORY.md on 2026-07-27

History, not state. Each entry names the mistake that produced the wrong record, because the
mistakes rhyme: **generalising from one sample, and recording a number without reconciling it.**

- **The README says "94 chapters".** The real count was 114 at the time and is **104** now. *(Still
  live — the README has not been corrected.)*
- **Workspace `CLAUDE.md` §5 said all Semester 8 PDFs are image-only.** True of books and question
  banks, **false for lecture slides** — 126 of 140 extract cleanly. Written from a test on the books
  alone.
- **MEMORY.md said `ENT endpoint.pdf` was not a question bank.** It is — and the biggest one. The
  error came from rendering **one page** (p.21) that happened to be theory and generalising from it.
  ENT has **3** question banks, not 2.
- **Workspace `MEMORY.md` said Neuro was empty.** It is not: 22 lecture PDFs, a 292-page book, a
  142-page question bank.
- **A count that does not reconcile against its total has been written down four times** — the
  chapter split twice (once summing to 297 against a stated 273), the unmarked-provenance figure
  twice (80, then 77, against a measured **67**), and now the authored-explanation figure. **Check
  the sum, and inspect the entries, before recording any number.** Every one was found by
  re-measuring, never by re-reading.
- **MEMORY.md said "156 passages" carry the authored-explanation marker. The real figure is 473** —
  measured 2026-08-03 by matching `explanation` against the marker in a real boot: 392 MCQs + 81 of
  the 82 cases, one occurrence each, **75% of all 632 ENT entries**. Wrong by a factor of three, and
  copied forward across many sessions without ever being checked, because it read like a plausible
  minority. **The correct figure changes the shape of the end-of-ENT review**: the question is not
  "which few explanations did we write" but "three quarters of them are ours, so which are thinly
  grounded". The number was never derivable by eye — the entries are one long line each, so even
  `grep -c` returns lines, not passages, and happens to agree only because the two coincide here.

---

## §11 Owed in the end-of-ENT review — detail, moved here from MEMORY.md on 2026-07-27

MEMORY.md keeps a one-line pointer per item so nothing is forgotten at the moment it matters; the
reasoning and the ids live here. **Work this list before Pediatrics begins.**

**1. ⚠️ SWEEP THE WHOLE FILE for the "Ask ChatGPT" marker — SCOPE WIDENED 2026-08-03.** This item
used to read "before p.1011", on the belief that the contamination sat in the early file. **Model
Final Exam 3 broke that**: the marker is at **p.2146** and **p.2168**, roughly 1,100 pages past the
last previously known instance. Five are now known — pp.1011, 1015, 1489, 2146, 2168 — and **every
one was found only because a box happened to be read closely**, never by a search. Neither of the
two new ones sits on a question that was transcribed, so nothing held is affected by them; the point
is that the marker's distribution is unknown across the whole 3,075 pages, not that it is confined
anywhere. Sweep everything already read, and check each box on sight from here on.

**2. Settle the 67 entries with no provenance marker either way** — neither "source prints its own
box" nor `Written for this bank`. **46 inside `entep-ear-1`...`68` (pp.144-342 only)**, written
before the marker rule was adopted, and **all 21 House**. No nose, throat or case entry is unmarked.
They are almost certainly all authored — the endpoint prints essentially no boxes before ~p.340 —
but **that is not verified, so it is recorded as unknown, not assumed.** Settling it needs pp.144-342
re-rendered and one House page checked: 46 in one contiguous block, 21 in one bank. The counting
history and the phrase list that actually works are in section 2 above.

**3. Re-run the case-insensitive, punctuation-stripped, option-sorted duplicate check over every
module as it completes.** Two reprints survived until 2026-07-27 differing from their twins only in
`EXCEPT` vs `except`; `entep-ear-58` and `entep-ear-60` were merged into `entep-ear-99` and
`entep-ear-81`. Two other same-stem pairs proved genuine variants and are documented as deliberate.
**A duplicate check is only as good as its normalisation.**

**4. The nasopharynx — the highest-value single gap in ENT.** All 32 ENT lecture files return
nasopharyngeal carcinoma only as a one-line cause of adult otitis media with effusion. **27 entries
mention the nasopharynx inside a "not taken from the course material" flag** (measured 2026-07-27,
ids spread across `entep-ear-`, `entep-nose-` and `entep-throat-`). **Treat 27 as an upper bound**:
some mention it incidentally while the flagged clause is about something else, and that has not been
separated entry by entry. First recorded at 7, so the gap has roughly quadrupled. **One targeted
read of the ENT nose book fixes the whole set.**

**5. Twelve Throat slide gaps**, each flagged in the question resting on it. From pp.1519-1615:
components of **Waldeyer's ring** (`entep-throat-66`) — `L3` defines the ring but never lists its
parts; **laryngeal site of scleroma** (`69`) — `L30` covers the nose and `L6` names laryngeal
scleroma but neither names the subglottis; **tonsillar arterial supply** (`21`); **VINCENT'S ANGINA**
(`76`, p.1555) — covered by **none** of the 32 ENT files; **leucoplakia** (`82`, p.1569) — the word
appears in no cached file; **definite signs of chronic tonsillitis** (`77`, p.1557). From
pp.1617-1706: **laryngeal trauma**, **contraindications to tonsillectomy**, **"Beck's triad" as an
eponym**, the **paraglottic space**, **carcinoma of the oral cavity**, and the **nerve supply of the
tonsil and pyriform fossa**.

**6. Three smaller Nose gaps**: the **dangerous area of the face / nasal furunculosis**
(`entep-nose-93`, case 7), **CSF-leak management** (`91`, `106`, case 5), and **ammonia as a
trigeminal rather than olfactory stimulus** (`108`). These sit in the ENT nose book alongside gap 4,
so **one book read closes them together.**

**7. Four disputed printed keys**, each flagged in its own entry, all transcribed **as keyed** with
both readings recorded so the learner can see the bank is unreliable:

| Entry | Page | The dispute |
|---|---|---|
| `entep-throat-77` | 1557 | Bank keys *congestion of the anterior pillar* as **not** a definite sign of chronic tonsillitis. Standard teaching makes it **the** definite sign and *enlarged crypts* the doubtful one. **No cached slide settles it.** |
| `entep-throat-83` | 1575 | `L6`'s own list makes **two** options true for a low tracheostomy — pleural dome and innominate vessels. The bank keys only the pleura. |
| Q136 | pp.1617-1706 | Keys "never do an incision biopsy" for a **tongue ulcer**. That rule applies to cervical **nodes**, not to a primary; incisional biopsy of a tongue primary is standard. |
| Q153 | pp.1617-1706 | Keys **pus** in **Ludwig's angina**, where `L4) PHARYNGEAL SUPPURATIONS.pdf` states **twice** that there is no abscess and no pus. |
| `entqb-ear3-83` | ENT QB p.12 | **Added 2026-08-09 — the first dispute raised against a LECTURE SLIDE rather than another printing.** Grade Gain keys **SNHL** as the one thing that is *not* a complication of middle ear effusion; `L21.2) Otitis media with effusion.pdf` lists **SNHL as complication 5 of 5**. The slide's list contains none of the other three options either, so the question is not drawn from the lecture at all. **A student answering from the Alexandria slide would not pick D.** |

*(Four more entries in this roster came from Model Final Exams and Exam 1 and are listed in §12; the
count of open disputes stands at **eight**.)*

**7b. CROSS-BANK DIVERGENCES — a new category, opened 2026-08-09.** Not disputed keys: nothing
contradicts itself, and neither printing is altered. Two banks simply key the same clinical fact
differently, and a lecturer will settle each in one sentence. **Take these to the source interview.**

| The fact | Grade Gain says | Endpoint says | Reconciliation written into the entries |
|---|---|---|---|
| **Commonest cause of SNHL in children** | **hereditary factors** — `entqb-ear7-189`, ENT QB p.30 | **meningitis** / **post-meningitic** — `entep-ear-154` (p.534), `entep-ear-238` (p.712) | hereditary dominates loss **present from birth**; meningitis is the commonest **acquired, post-natal** deafness in a previously hearing child. `L19.1) hearing loss.pdf` lists *"Congenital: consanguinity or perinatal"* first, which leans to the Grade Gain key. **Answer by the stem.** |
| **Schwabach test in a conductive loss** | **prolonged** — `entqb-ear8-223`, ENT QB p.36 | **normal** — `entep-ear-185` (p.596), inside the stem rather than as the key | **The lecture supports Grade Gain**: `L13,14) AudioVestibulae Evaluation.pdf` states *"Pt > Ex (Prolonged Schwabach) → Conductive HL"*. The endpoint key (conductive) is still right, because its Rinne and Weber settle the question without the Schwabach — but its stem's Schwabach value contradicts the slide. Neither entry altered. **Found 2026-08-10 while transcribing ch.8, by re-reading an old entry against the slide.** |

**⚠️ Material gaps added 2026-08-10 from Ear ch.8**, all four answered from general knowledge and
tagged in place: the **4 kHz notch** of acoustic trauma; the **acoustic reflex arc** beyond its two
nerves (`L19.1` gives only *absent in CHL / impaired in SNHL*); **equivalent canal volume** as the
discriminator between a type B effusion and a type B perforation; and **congenital cholesteatoma**,
which appears on none of the 32 cached ENT slides.

**8. A full content and design review**, at the user's request — both the ENT content and whether the
app's design needs changing — **before the other three modules are started.**

---

## §11b Exam Night Review — resolution, 2026-08-04

**All 72 stage-C/D/clean questions read side by side against their best stem match.** Verdicts in
`content\ent\qb-pages\exam-night-review-resolution.md`; raw comparisons in `…-sidebyside.txt`.

| | count |
|---|---|
| staged | **104** |
| stage B — reprints, folded without argument | 32 |
| resolved by reading (C + D + clean) | 72 |
| → folded into an entry already held | 32 |
| → folded into another staged question (Q24→Q15, Q79→Q31, Q52→Q53) | 3 |
| → **written as new entries** | **37** |

**⚠️ 14 OF THE 37 NEW QUESTIONS WERE NOT IN THE CLEAN COLUMN.** They came out of stages C and D,
where the *answer* matched something already held and the *question* did not. **And 8 of the 31
"clean" questions turned out to be reprints**, which would have been written twice. So the sweep's
own columns were wrong in both directions on 22 of 104 — **the strongest confirmation yet of the
rule that C, D and clean are resolved together and every stage's verdict is only a shortlist.**

**Four patterns worth carrying to the other banks:**

- **The option set decides, not the question.** Q9 and Q45 ask the same thing — the commonest
  organism in croup — and **Q45 folds while Q9 does not**, because Q45's four options are
  `entep-throat-102`'s four options and Q9's are not. Same for Q102 vs `entep-ear-39`.
- **A changed option set can move the key LEGITIMATELY, and that is not a self-contradiction.**
  Q13 drops the word *imaging* from "optimum imaging modality" and adds flexible nasopharyngoscopy
  to the list, so the answer stops being plain X-ray. Q49 and Q63 are the same boy with the same
  mass: Q63 offers endoscopy and keys it, Q49 states endoscopy is already done and keys CT. **Both
  pairs are internally correct.** Distinguish this from the four real self-contradictions in Exams
  4–7, where the options were IDENTICAL and only the key moved.
- **The same vignette re-asked is a new question, not a reprint** — Q12 asks the diagnosis where
  `entep-ear-6` asked about the perforation; Q17 asks management where `entep-nose-4` asked the
  diagnosis; Q10 asks what to do about the otorrhoea where `entep-ear-10` asked what it is.
- **A fold can still bring something with it.** Q94 folds into `entep-ear-26` — options identical
  bar a dropped filler — but it carries an **essential photograph** the held entry has never had.
  **Folding is not discarding: check what the losing printing adds before dropping it.**

**One key conflict found, and it is the fifth of its kind.** Q2 (p.2840) keys **antireflux
medications and voice therapy** for a teacher with hoarseness and inflamed oedematous cords, while
`entep-throat-6` and `entep-throat-28` both key **medical treatment and follow-up** for a
near-identical vignette — and `entep-throat-28`'s key was **re-affirmed by the bank's own errata
section at p.2823 with a newly written box**. The option set is replaced ("medical treatment" →
"antireflux medications" throughout), so by the mechanism rule this is a new entry rather than a
re-key. **The duration does not explain it**: p.2840 says 3 weeks against the others' 4 months, and
a shorter history argues for less intervention, not more. Record in both directions when written.

**Two high-value questions the bank has not asked before**, both closing recorded gaps:
`Q7` (p.2850) — unilateral middle-ear effusion in a 60-year-old, next step **nasopharyngeal
endoscopy** — and `Q16` (p.2868) — continuous vertigo with normal hearing and a directional fall,
next step **MRI brain and cerebellum**. `Q8` (p.2852) keys **CSF leak** for unilateral watery
rhinorrhoea worse on bending, which is **the very answer the bank deleted from its own option list**
in Exam 7's `entep-mfe7-1`; cross-reference the two when writing.

### §11c Writing the 37 — batch 1 of 3, written 2026-08-04

**13 entries written, `entep-enr-1` … `entep-enr-20`** (the numbering runs over the printed order of
all 37, so batches 2 and 3 fill the gaps). `Q_ENT` 598 → **611 MCQs**; `QUESTIONS` 680 → **693**.

| id | page | Q | chapter | image |
|---|---|---|---|---|
| `entep-enr-1` | 2840 | Q2 | `ent-hoarse` | — |
| `entep-enr-2` | 2842 | Q3 | `ent-otalgia` | `q-2842` |
| `entep-enr-3` | 2844 | Q4 | `ent-hearing` | `q-2844` **essential** |
| `entep-enr-4` | 2846 | Q5 | `ent-audio` | — |
| `entep-enr-5` | 2850 | Q7 | `ent-aom` | — |
| `entep-enr-8` | 2856 | Q10 | `ent-otorrhea` | — |
| `entep-enr-9` | 2858 | Q11 | `ent-aom` | — |
| `entep-enr-10` | 2860 | Q12 | `ent-csom` | `q-2860` |
| `entep-enr-13` | 2868 | Q16 | `ent-vertigo` | — |
| `entep-enr-15` | 2872 | Q18 | `ent-hearing` | `q-2872` |
| `entep-enr-18` | 2880 | Q22 | `ent-aom` | — |
| `entep-enr-19` | 2882 | Q23 | `ent-facial` | — |
| `entep-enr-20` | 2886 | Q25 | `ent-dysph` | `q-2886` |

**All 13 explanations are authored and marked** — Exam Night Review prints no box anywhere. Grounded
in eight cached decks: `L2) Hoarsness of Voice`, `L10) Dysphagia From ENT Perspective`,
`L13,14) AudioVestibulae Evaluation`, `L15) Facial nerve disorders`, `L16) Chronic otitis media`,
`L17,18) Otorrhea and otalgia`, `L19.1) hearing loss`, `L19.2) Tinnitus`, `L20) vertigo`,
`L21.1) acute otitis media`, `L21.2) Otitis media with effusion`, `L22) Anatomy of Ear`.

**Only four passages needed the answer-the-gap rule**, each tagged in place and none of them a dead
end: the topical half of the furuncle regimen (the slide lists systemic antibiotics + analgesia
only), the meningitis risk behind "strict water precautions", the three-month interval for a
traumatic perforation to heal, and the note that a directional fall does not by itself localise a
vertigo. **No point was left unanswered, so the batch raises no interview items.**

**⚠️ A SOURCE DEFECT WAS REPAIRED, NOT SMOOTHED OVER.** p.2856 (Q10) prints option b truncated —
*"A likely acute ear infection resulting from trauma and needs appropriate"* — and stops mid-word.
Completed to "…needs appropriate antibiotic treatment", with the repair recorded in the entry's
`source`. **The truncation survived staging and both sweep passes**; it was caught only by reading
the option list aloud while writing. Read every option as a sentence before writing an entry.

**⚠️ ONE MISSING COMMA COST A BOOT.** The previous last entry (`entep-mfe7-1`) had no trailing
comma, so appending after it produced `' }` followed by `{ id:` and the whole file failed to parse —
`Q_ENT` undefined, app reporting **0 MCQs and no error at all**. This is the identical failure
recorded on 2026-08-04 for a different missing comma. **Diagnosed by inlining the data file into a
scratchpad `<script>`**, which gave `Unexpected token '{' @line 5474` and a real line number, where
`file://` gives only *"Script error."* at line 0. **Always append by first adding the comma.**

**⚠️ THE CHAPTER AUDITOR WAS WRONG BEFORE THE APP WAS.** A first validation run reported **~500 bad
chapter references** — it walked `m.chapters`, and the real shape is **`m.groups[].chapters[]`, each
chapter an ARRAY (`c[0]` id, `c[1]` title)**, not an object. `MODULES chapters: 0` in the same output
was the tell. A run where nearly everything fails is a broken auditor. Corrected walk, real boot:
**104 chapters, 693 questions, 0 bad chapter refs, 0 module/chapter mismatches, 0 duplicate ids,
every `answer` in range, every ENT chapter still ≥1, THEORY `qs` all resolving.** Authored-marker
entries **476 → 489**, which reconciles exactly with 13 written.

**Three forward references are live and expected:** `entep-enr-15` cites `entep-enr-27` (its Weber
mirror, p.3022) and `entep-enr-2` cites `entep-enr-35`/`entep-enr-36` (pp.3040, 3042). All three are
batch-3 ids. **Re-run the dead-backticked-id check after batch 3** — until then they read as dead.

**One crop was re-verified against its source page rather than trusted.** `q-2860` looked like a
partial capture; rendering p.2860 showed the bank itself prints a small, low-information photograph
and the crop is faithful. The `imgAlt` says so plainly, since the question is answered from the
history and a learner should not hunt the picture for a perforation it cannot show.

### Batch 2 of 3 — nose and throat, written 2026-08-04

**13 entries, `entep-enr-6, 7, 11, 12, 14, 16, 17, 21, 22, 23, 24, 25, 26`** (pp.2852–2972), filling
the gaps batch 1 left. `Q_ENT` 611 → **624 MCQs**; `QUESTIONS` 693 → **706**; authored markers 489 →
**502**. Ids `entep-enr-1`…`26` are now contiguous.

| id | page | Q | chapter | id | page | Q | chapter |
|---|---|---|---|---|---|---|---|
| `enr-6` | 2852 | Q8 | `ent-nasalobs` | `enr-17` | 2876 | Q20 | `ent-hoarse` (image, essential) |
| `enr-7` | 2854 | Q9 | `ent-paedlar` | `enr-21` | 2898 | Q31 | `ent-facial` |
| `enr-11` | 2862 | Q13 | `ent-tonsils` | `enr-22` | 2934 | Q49 | `ent-nasalmass` |
| `enr-12` | 2866 | Q15 | `ent-septum` | `enr-23` | 2936 | Q50 | `ent-nasalmass` |
| `enr-14` | 2870 | Q17 | `ent-sinusitis` | `enr-24` | 2942 | Q53 | `ent-hoarse` |
| `enr-16` | 2874 | Q19 | `ent-paedlar` | `enr-25` | 2962 | Q63 | `ent-nasalmass` |
| | | | | `enr-26` | 2972 | Q68 | `ent-stridor` |

Grounded in six further decks — `L3) DISEASES OF THE TONSILS & ADENOIDS`, `L6) Stridor and
tracheostomy`, `L24) diseases of the nasal septum`, `L26) nasal masses`, `L27.1) ACUTE
rhinosinusitis`, `L27.2) Chronic Sinusitis`, `L31) nasal symptoms 1` — plus `L2` and `L15` again.
**Nine of the 13 are keyed outright by a slide**: croup = parainfluenza, adenoid diagnosis by
endoscopy before X-ray, open reduction for a dislocated dorsum, CT only for a complication or before
surgery, laryngomalacia's whole clinical picture, MLS for a fold polyp, the LMN facial table,
angiofibroma's work-up order, tracheomalacia as a late tracheostomy complication.

**Three within-batch self-duplicates were folded while writing rather than left for the fold pass:**
Q24 (p.2884) into `enr-12`, Q79 (p.2994) into `enr-21`, Q52 (p.2940) into `enr-24`. Both pages are
cited in each `source`. **That closes ledger job 2 for the within-batch dupes**; only the 64
cross-section reprints remain.

**Two pairs where the bank is right twice, and the option set is the reason — worth carrying to the
other banks.** `enr-22` (Q49) keys **CT** and `enr-25` (Q63) keys **endoscopy** for the same 12-year-
old with the same angiofibroma, because Q49 states endoscopy is already done and Q63 does not.
`enr-11` (Q13) keys **flexible nasopharyngoscopy** where `entep-nose-56` keys **plain X-ray**,
because the twin asks the optimum *imaging* modality and this printing drops the word. **Neither is
a self-contradiction** — those need IDENTICAL options with only the key moved.

**Five passages needed the answer-the-gap rule**, each tagged and none a dead end: bacterial
tracheitis as the *Staph. aureus* disease, the radiation argument for endoscopy over CT in a
4-year-old, the two-week closed-reduction window and six-month rhinoplasty deferral, the CT findings
of odontogenic sinusitis, why an angiofibroma is not biopsied (the slide writes only *"Biopsy ??"*),
the consequence of biopsying a meningoencephalocele, and the cuff-pressure mechanism of
tracheomalacia. **No point was left unanswered, so batch 2 raises no interview items either.**

**Validated in a real `file://` boot: 104 chapters, 706 questions, 0 bad chapter refs, 0
module/chapter mismatches, 0 duplicate ids, every `answer` in range and matching the staged key, all
13 carrying the authored marker, every ENT chapter still ≥1, `THEORY` `qs` all resolving.** By bank
686 Endpoint / 21 House / 0 Grade Gain. **Four forward references remain live** — `enr-15`→`enr-27`,
`enr-17`→`enr-34`, `enr-2`→`enr-35`/`enr-36`, all batch-3 ids.

### Batch 3 of 3 — the picture run, written 2026-08-04. **EXAM NIGHT REVIEW'S 37 ARE COMPLETE.**

**11 entries, `entep-enr-27`…`37`** (pp.3022–3044), every one of them carrying an image and **9
essential**. `Q_ENT` 624 → **635 MCQs**; `QUESTIONS` 706 → **717**; authored markers 502 → **513**.
**`entep-enr-1`…`37` are contiguous and all four forward references now resolve — the dead-id check
returns clean.** 17 of the 18 images are attached and **all 17 load** (asserted by `naturalWidth`,
not by presence); the 18th, `q-3024`, goes onto `entep-ear-26` in the fold pass.

| id | page | Q | chapter | id | page | Q | chapter |
|---|---|---|---|---|---|---|---|
| `enr-27` | 3022 | Q93 | `ent-hearing` | `enr-33` | 3036 | Q100 | `ent-hoarse` * |
| `enr-28` | 3026 | Q95 | `ent-earanat` * | `enr-34` | 3038 | Q101 | `ent-hoarse` * |
| `enr-29` | 3028 | Q96 | `ent-aom` * | `enr-35` | 3040 | Q102 | `ent-otalgia` |
| `enr-30` | 3030 | Q97 | `ent-nasalmass` | `enr-36` | 3042 | Q103 | `ent-otalgia` |
| `enr-31` | 3032 | Q98 | `ent-earanat` * | `enr-37` | 3044 | Q104 | `ent-dysph` * |
| `enr-32` | 3034 | Q99 | `ent-earanat` * | | | | (* = image essential) |

**⚠️ THE CAPTIONS GAVE AWAY THE ANSWERS, AND NOTHING WOULD HAVE CAUGHT IT BUT READING THE RENDERER.**
All 17 `imgAlt` values were first written as careful radiological descriptions — correct as alt text,
and **fatal here, because `qFigure()` prints `imgAlt` as the visible `<figcaption>`.** A caption
reading *"a leader line marked X points to … the pars flaccida"* answers *"the structure labeled X
has which characteristic"* outright; *"a smooth shelf indenting the barium column posteriorly, no
retained contrast"* settles cricopharyngeal spasm against Zenker before the learner thinks; *"the
'rising sun' appearance of a glomus tympanicum"* names the condition whose symptom is being asked.
**At least six of the eleven were spoiled**, plus three in batches 1 and 2. All 17 rewritten to name
**only the modality and the view**. The rule is now in `CLAUDE.md` §4. **The lesson generalises: a
field is not documentation until you have read what renders it** — every validation run had passed.

**Three pairs in this run share one photograph**, which is why the whole section had to be resolved
together rather than page by page: pp.3036/3038 print the same laryngeal image (symptom, then
treatment) and pp.3040/3042 print the same ear (diagnosis, then which third of the canal). Each pair
is held as two entries because each asks a different question of the same picture.

**`entep-throat-100` settled a reading the photograph alone could not.** The laryngeal lesion at
pp.2876/3036/3038 is a single swelling on one fold, which by `L2` means polyp or cyst and therefore
surgery — but a *nodule* would start with voice therapy, and at this resolution one lesion versus two
is a judgement. The bank's own twin **names it a vocal cord polyp**, which confirms the surgical key.
Recorded in all three entries: **count the lesions in the picture, do not decide from the patient's
occupation.**

**One CT was re-rendered at 240 dpi before its caption was written** — at the printed size the
laterality was not readable, and guessing it would have put a false finding in front of the learner.

**Two passages needed the answer-the-gap rule:** the otoconia mechanism of the maculae, and
**cricopharyngeal spasm itself, which is not named anywhere in the 32 cached ENT slides** — `L10`
gives the cricopharyngeus and its raised resting tone in the Zenker section and stops there. The bar
sign, the C5–C6 level and the management by dilatation, botulinum toxin or myotomy are filled from
general knowledge and tagged. **No point was left unanswered; the section raises no interview items.**

**Validated in a real `file://` boot: 104 chapters, 717 questions, 0 bad chapter refs, 0
module/chapter mismatches, 0 duplicate ids, every `answer` in range and matching its staged key, all
11 carrying the authored marker, every ENT chapter still ≥1, `THEORY` `qs` all resolving, 0 dead
backticked ids, 17 of 17 images loading.** By bank 697 Endpoint / 21 House / 0 Grade Gain.

### The fold pass — 2026-08-04. **EXAM NIGHT REVIEW IS CLOSED.**

**64 reprint pages folded into 63 held entries**, each one gaining a sentence in its `source` naming
the Exam Night Review page that reprints it. **No new entries, no duplicates, no questions lost.**

```
staged printings                                  104
  written as new entries                           37
  folded into another staged question               3   (Q24→enr-12, Q79→enr-21, Q52→enr-24)
  folded into an entry already held                64   ← this pass
                                                  ---
                                                  104   reconciles exactly
```

**`entep-throat-103` takes two pages** — pp.2878 (Q21) and 2930 (Q47) — because Exam Night Review
reprints the same held question **twice within its own run**. It is the only such target, and its
note says so; the other 62 take one page each. **64 pages, 63 notes, and the two numbers must not be
assumed equal.**

**One ambiguous target had to be resolved by reading, not by the sweep.** Q90 (p.3016) matched
**two** held entries on option set and key — `entep-throat-39` and `entep-ear-52`, themselves near
twins. It is verbatim `entep-throat-39`; `entep-ear-52` adds *"acute dyspnea and diminished air entry
**on the left side**. The tube was noticed to be **clear and well-positioned**."* **A stage-B hit
with more than one target is still a shortlist.**

**`q-3024` is attached to `entep-ear-26`, and it is the 18th image — all 18 now load.** It is the
only otomycosis photograph in the entire 3,074-page file, and the entry it now illustrates had never
had one. **It is deliberately NOT marked `imgEssential`, although the staging flagged it so:** the
held entry's stem already gives *itchy, painless, discharging*, which is answerable without a
picture, and a false "cannot be answered without it" caption would be a lie to the learner. **An
`imgEssential` flag belongs to a stem, not to a photograph** — re-judge it when a picture moves.

**⚠️ THE SAME ENCODING TRAP BIT AGAIN, ONE LEVEL DEEPER: THE SCRIPT FILE ITSELF.** `fold.ps1` was
written as UTF-8, and **PowerShell 5.1 reads a BOM-less UTF-8 `.ps1` as ANSI**, so the single em dash
in one of its string literals was mangled *before* it was ever written out — putting mojibake into 1
of the 63 notes. Avoiding `Get-Content` was not enough. **Keep helper scripts ASCII-ONLY and build
any non-ASCII character from its code point** (`[char]0x2014`), which is what `fixdash.ps1` and
`fixstop.ps1` do. Caught by grepping the data file for `â€` immediately after the run — **run that
grep after every scripted edit.**

**Eight of the 63 source fields did not end in sentence punctuation**, so the appended note ran on
from the previous clause. Fixed with a negative-character-class regex that touched only those eight
(`fixstop.ps1`), not all 63. **A generated sentence has to be read where it lands, not only where it
was written.**

**Validated in a real `file://` boot: 104 chapters, 717 questions, 0 bad chapter refs, 0
module/chapter mismatches, 0 duplicate ids, 0 dead backticked ids, `THEORY` `qs` all resolving, every
ENT chapter ≥1, and 18 of 18 images loading.** `git diff` showed **63 insertions / 63 deletions** —
one touched line per folded entry and nothing else, which is the check that the script did not
rewrite the file wholesale.

### §11d The fact-list run, pp.3046–3070 — harvested 2026-08-07. **`ENT endpoint.pdf` IS CLOSED.**

The last content in the file. **25 pages, 230 printed "prompt → answer" one-liners**, no options and
no distractors, so **none of it enters `QUESTIONS`** — inventing the wrong answers would be
authoring. It is harvested instead into `content\ent\examiner-patterns.md`, which did not exist
before this session and which `CLAUDE.md` §4 has always named as the file that sets each chapter's
`intro` and `w`.

**230 lines reduce to 166 distinct facts, spread over all 30 ENT chapters** — every chapter of the
syllabus is represented, verified by comparing the ids used in the file against `modules.js`.

**⚠️ THE RUN IS NOT 25 UNIQUE PAGES — the earlier note in §7 was wrong, and wrong because it was
written from a half-read.** It recorded *"printed ONCE each, every page unique"* after reading only
the even-numbered pages. Reading all 25 shows:

- **pp.3061–3063 are a condensed re-run of pp.3057–3060**, in order, in shorter wording.
- Reprints also occur inside pp.3046–3060 with **no block structure at all** — *absent laryngeal
  click* on 3048 and 3056, *Quinsy* on 3050 and 3056, *cacosmia* on 3052 and 3054, *pulsatile
  tinnitus* on 3053 and 3055, *vocal nodule site* on 3047 and 3057.
- **pp.3064–3070 are largely fresh** and carry the densest new material.

**This is the same lesson as every other section: sampling the even pages described the odd ones
wrongly.** But here the duplication is *useful* rather than waste — **a repeat count is the
examiner's own weighting.** Every page a fact appears on is therefore recorded, not just one.
Top of the table: **allergic rhinitis on 7 pages** (4 different stems), **"early supraglottic
carcinoma → referred otalgia" five times as the identical line**, unsafe CSOM on 5.

**32 of the 230 lines are negative stems** — *all true except*, *NOT*, *false statement*, *cannot be
done*. **One line in seven asks for the wrong option**, which is the strongest single argument for
the rule that the theory must teach why distractors are wrong.

**Two defects and one corroboration:**

- **p.3046 prints a prompt with no answer** — *"Initial presentation of glottic carcinoma"*, no
  arrow. **Nothing is lost**: the next line and p.3056 both answer it. Recorded so a line count does
  not read as a missing fact.
- **p.3064's "preserved sulcus → acute mastoiditis" is right, and reads wrong.** The taught sign is
  the *obliterated* sulcus. Both hold at different stages, and `L16) Chronic otitis media.txt` says
  so itself — it separates *"the stage of acute mastoiditis"* (tenderness, redness) from *"when
  post-auricular abscess develops"* (auricle pushed out and down). **Not a bank error.** The theory
  must draw the line explicitly, because the slide's own named differential is furunculosis with
  post-auricular lymphadenitis — the look-alike the sulcus decides.
- **The adenoid-imaging line corroborates §11b's resolution.** pp.3048 and 3054 both key **plain
  X-ray**, and 3054's stem says *"best **imaging** modality"* — exactly the distinction that made
  `entep-enr-11` (nasopharyngoscopy) and `entep-nose-56` (X-ray) both correct rather than a
  contradiction. The pyriform-fossa nerve is likewise confirmed twice, on 3050 and 3065.

**Six named entities in the run have no transcribed question behind them** — T4a laryngeal staging,
mutational falsetto, the thumbprint sign, *delayed language development except tongue-tie*, office
stroboscopy, and *Streptococcus hemolyticus* in acute necrotising otitis media. **That is a targeted
search of 32 distinctive terms, NOT an exhaustive audit**, and the file says so — re-run it fact by
fact when ENT's theory is written.

**Method note:** the pages are a short list on the top ~46% of an A4 sheet, so they were rendered
cropped (`pdftoppm -r 150 -x 0 -y 0 -W 1240 -H 820`) and tiled **3 per sheet** — 9 reads instead of
25. **⚠️ `Measure-Object` returns `Double`, and `New-Object System.Drawing.Bitmap` throws
"Parameter is not valid" on one** — cast to `[int]`. Same family as the `Sort-Object` trap in §11a:
PowerShell's own types, failing at the GDI+ boundary.

---

## §11a Question images — built 2026-08-04

**18 clinical photographs cut out of `ENT endpoint.pdf` and into the app**, closing job 1 of four on
Exam Night Review. The user chose "crop them into the app" over describing them in words or skipping
them; **10 of the 18 questions cannot be answered without their picture**, three of those being
*labelled* anatomy diagrams — "the structure labeled X" — which no wording can substitute for.

**Pages cut:** 2842, 2844, 2860, 2872, 2876, 2886, 3022, 3024, 3026, 3028, 3030, 3032, 3034, 3036,
3038, 3040, 3042, 3044. Output `app\assets\q\q-<page>.jpg`, longest edge 560 px, JPEG q80,
**312 KB for all 18** — measured, not estimated. Content is otoscopy (11), laryngoscopy (2), barium
swallow (2), a coronal sinus CT, an auricle photograph and two line diagrams.

**Named for the page, not for the entry.** `q-2844.jpg` cites `ENT endpoint.pdf p.2844` on its own,
so the crop does not have to be renamed when the entry that holds it is folded or renumbered — and
job 1 could therefore be finished before job 2 decides which entry that is. Where a question prints
twice, the **answered** page is used, matching the `source` convention.

**The images are cut but NOT yet attached to any entry**, which is part of job 2. **13 of the 18 sit
on CLEAN questions** — Q3, Q4, Q12, Q18, Q20, Q93, Q94, Q95, Q97, Q99, Q101, Q103, Q104 — so their
picture goes on a new entry. The other **5 are reprint candidates**: p.2886 (Q25, stage C),
p.3028 (Q96, stage D), p.3032 (Q98, C), p.3036 (Q100, C), p.3040 (Q102, C) — shortlists, not
verdicts, so where they land is decided by reading them side by side, and the picture follows.

> **⚠️ Corrected 2026-08-04, same day: an earlier note here said "only 5 of the 18 have a resolved
> home" — the exact inverse of the truth.** The probe that produced it read `sweep.json`'s `.clean`,
> **which does not exist**: the count lives in `counts.clean` and the ids in `cleanIds`. PowerShell
> returns `$null` for the missing property, `foreach` over `$null` iterates zero times, and the
> lookup silently answered "no" for every page. **No error, no empty-result warning — the same
> silent-failure shape as the two cutter bugs.** Check that a probe's input is non-empty before
> believing a negative result from it.

### The cutter — `Design\scripts\q-images.ps1`

Renders the page at 300 dpi, finds the card, grids it at 12 px, marks cells that are ≥55% non-paper,
takes 8-neighbour connected components, rejects the ones that are too small / flat / yellow, and
crops the largest survivor with asymmetric padding. `-DryRun` reports the box; `-Report` lists every
component and why it was rejected; `-Box @{2844=@(x,y,w,h)}` overrides a page by hand.

**Four defects, and every one of them failed SILENTLY — a plausible wrong crop, never an error:**

1. **⚠️ `Sort-Object -Property` does nothing on an array of hashtables in PowerShell 5.1.** No error,
   no warning, arbitrary order — so "take the largest component" took whichever the scan reached
   first, which was a block of question text. Confirmed directly: `@(@{area=5},@{area=99},@{area=50})`
   sorts to `50,99,5`; the same data as `[pscustomobject]` sorts to `99,50,5`.
2. **⚠️ Tone spread was measured INSIDE each cell instead of across the component.** A photograph is
   locally smooth — a 12 px patch of it varies by ~6 — while black-on-white text varies by ~77
   within every cell it touches. The "reject flat fills" filter therefore rejected pictures and kept
   paragraphs. The real photo on p.2844 was found, correctly sized at **1,999 cells**, and discarded
   as "flat" with sd 6.3 while a 51-cell scrap of the question survived at sd 77.
3. **Cream alone cannot find the card.** The rendered sheet is far taller than the slide and the
   space below it is pure white, which passes any cream test — so the card's bottom edge ran off the
   end of the page. Fixed by requiring the teal surround beside the row: true on every row of the
   card, false on every row below it.
4. **Padding has to be asymmetric.** A leader-line label — the "X" of "the structure labeled X" —
   always sits *beside* the picture; the question text always sits *above* it. A symmetric pad wide
   enough to reach the label dragged a strip of the question into half the crops. Now 4% horizontal,
   1% vertical.

**What found them: looking, not counting.** Defect 1 was caught by opening one crop and seeing
"tial symptom for" instead of an ear. Defects 2 and 4 were caught on a contact sheet of all 18.
**A numeric check would have passed all four** — every run reported a plausible box, a plausible
cell count and no error. This is the same lesson as the glyphs and the pose overlay: rasterise it
and look at it.

### In the app

- **`qImgSrc(name)` builds `assets/q/<name>.jpg` at runtime**, next to `MOD_ART`. `image` stores the
  **basename only** — never a path — so a future single-file build has one function to intercept.
  **⚠️ `bundle.ps1` does not exist and never did**; `CLAUDE.md` §6 claimed it "already" rewrote
  `MOD_ART` and `CLEP_POSES` to data: URIs, and a repo-wide search found no such file. Corrected in
  place. The single-file build is still owed.
- **`qFigure(q)` renders between the stem and the options** — where the paper prints it, and the
  only place it can go, since an option chosen before looking at the picture is not an answer. A
  question with no `image` emits the empty string.
- **`imgAlt` is required with `image`; `imgEssential` puts "this question cannot be answered without
  it" into the caption** — a learner whose images fail to load otherwise just sees a question that
  makes no sense.
- **Click to enlarge** (`.qzoom`, z-index 300 with the modals). The crops carry detail — a speck of
  debris, a leader line — that a 430 px column cannot show.
- **It prints.** Unlike `.mod-art`, which is a background image browsers drop, this is content.

**Verified in a real `file://` boot** (headless Chrome, whole `app\` folder copied): the figure
present and in the right place (`mkbar > stem > qfig > opts > qactions`), `src` = `assets/q/q-2844.jpg`,
**image actually decoded at 560×377** — asserted on `naturalWidth`, the only check that catches a
wrong path, since a broken `src` boots clean and throws nothing — rendered at 430×291, caption
correct, **all 18 files load (18/18)**, `qFigure` empty for a question without one, 680 questions,
**0 console errors**. Full content sweep re-run: 598 MCQ + 82 cases, 0 bad module/chapter refs,
0 answers out of range, 0 missing `source`/`explanation`/`objective`, 0 duplicate ids, every
`THEORY` `qs` id resolving. **768 CSS rules, all 3 `max-aspect-ratio:5/4` blocks intact.**

**⚠️ The rule count is 768, not 770** — the screenshot harness adds its own two-rule `<style>`, so a
probe that instruments the page reads two high. Count from an uninstrumented boot, or subtract.

**Two checker faults found while validating, both mine, neither a content bug:**

- **The dead-backticked-id check flagged 10 live CHAPTER ids** (`ent-otalgia`, `ent-dysph`, …). Its
  pattern matched any backticked `word-word` and tested it only against question ids. A backticked
  token is dead only if it is neither a live question *nor* a live chapter — 20 legitimate chapter
  mentions sit in prose. **A run where a whole category fails is a broken checker, not broken data.**
- With that fixed it found **one real defect**: `entep-nose-73`'s source cited `` `case-18` `` where
  the id is `entep-nose-case-18`. Repaired; re-run clean.

---

## §12 Design history — moved here from MEMORY.md on 2026-07-28

Three redesigns in three days. MEMORY.md keeps only what the app **is** now; this is how it got
there, and — more usefully — what each pass taught. **Read this before any further design work.**

### 2026-07-26 · the restructure

The app was one 318 KB `index.html`. Split into `app\index.html` plus `app\data\*.js`.
**No application logic changed in the move.** That split is what made every later redesign possible
without touching content.

### 2026-07-27 · dark cinematic

User's request, modelled on a reference site they supplied (`purechem-website.vercel.app`).
Shell 146 KB → 157 KB; **no data file touched**, so content was unaffected by definition.
Deep navy ground, hairline borders, soft elevation and glow, glass on the fixed furniture, and a
fixed ambient field of four drifting orbs. The pre-redesign bright look — chunky 2.5 px outlines,
hard offset shadows — is at `archive\index.pre-redesign-2026-07-27.html`.

This is the pass that produced **ALIVE TO BROWSE, CALM TO READ**, now in `CLAUDE.md` §6 and still the
one design rule not to relax.

First numeric contrast audit. It caught `--ink-4` at **3.54:1** on 10–11 px chapter counts and
schedule weekdays, under the 4.5:1 floor; lifted `#61738b` → `#8194ac` (5.5:1). **Both values are
superseded by the Greek palette** and are recorded here only as the history of that token.

### 2026-07-27 · light / dark mode + the two-step gate

User's request, done while they gathered images. Shell 157 KB → 178 KB; **no data file touched.**
Backup at `archive\index.pre-theme-2026-07-27.html`. The rules that must not be undone are in
`CLAUDE.md` §2 and §6.

Ten tokens were added purely so light and dark could **share one rule set** instead of duplicating
~25 rules: `--sh`/`--sh-soft`/`--sh-deep`, `--sheen`, `--tint`/`--tint-2`,
`--stem`/`--prose`/`--strong`, and `--warn`.

**⚠️ THE AUDITOR WAS WRONG BEFORE THE APP WAS.** It read only `background-color`, so every element on
a *gradient* — the whole rail — resolved against the page behind it and reported **39 phantom
failures**. Fixed by averaging the gradient stops. That was the **second** time an audit bug produced
false results in this project; the first ignored alpha. **Check the auditor before believing the
audit** — it has never yet been right first time.

**Four real defects the corrected audit found, all pre-existing, none caused by light mode:**
`.bankchip.on` had `box-shadow:… var(--ink)`, a **white halo** on active source chips; `.chip.on`
used `var(--ink)` as a *fallback background* (white chip carrying white text); the Flagged page's
badge hardcoded `color:var(--ink)` inline on gold at **1.34:1**, nearly invisible since the redesign;
and four rail colours (`#7d75ab`, `#6a619a`) sat at 3.2–4.3:1 in **both** themes. All fixed.

A fifth was fixed on the way: `--ink-4` had been measured against `--card` (near-white) but also
lands on `--bg-2`. Re-measured against the **darkest** surface it touches: `#6b5942`.
**Measure a token against the worst surface it can land on, not a representative one.**

### 2026-07-28 · the Greek restyle

From artwork the user supplied in `Design\Images\` (was `Images\` until 2026-07-28). Shell 178 KB → 195 KB, plus `app\assets\` (831 KB, down
from 16 MB of originals) and `app\data\fonts.js` (128 KB). Backups:
`archive\index.pre-greek-2026-07-28.html`, `archive\modules.pre-greek-2026-07-28.js`.
Method, the palette table and the traps are in `CLAUDE.md` §6.

**`data\modules.js` was edited — the first time a data file has been touched by design work.** It now
carries `hex` and `icon` per module. Every question, case, theory and schedule file was untouched;
verified by file timestamp, not by assertion.

Colours were **replaced at the user's explicit decision**, knowing the Notion board and the PDF
schedule would diverge until updated separately: ENT `#ff5a5f`→`#b4472f`, Ophtho `#00b37e`→`#5c7a52`,
Neuro `#8b5cf6`→`#6d4c7d`, Peds `#3b82f6`→`#2e5f8a`. Banks moved with them: endpoint
`#f59e0b`→`#9a6b1f`, house `#0e7490`→`#2f6b8f`, gradegain `#ec4899`→`#8f3f5c`.

**The result: the app went fully WCAG-AA clean — 1,344 text elements × 9 views × 2 themes, zero
failures. First time ever.** The long-standing `.tag`/`.eyebrow` failures (ENT red 3.05:1, buffer
amber 2.15:1, ~60 on the schedule alone) **were fixed as a side effect** — every Greek colour is dark
enough that white text passes at 4.6–7.1:1. Consequently `.bankchip.on` and `.pill.bankpill` went
**back** to white text: the dark-text fix of 2026-07-27 became wrong and was reverted.
**A palette change can silently invert an earlier accessibility fix. Re-audit, do not carry forward.**

**Two defects found by auditing the running app, not by reading it:**

1. **`ico()` contains single quotes.** Dropped into a single-quoted JS string it closed the string and
   killed the **entire inline script** — blank app, every function undefined. Surfaced only as
   `go is not defined` in a smoke test.
2. **An edited schedule stores hex values in `localStorage`**, and profile avatars store their
   colour, so both kept rendering the old palette long after it was gone from source.
   `migrateColours()` fixes both, keyed on the old values so it is idempotent.
   **Anything that STORES a colour needs a migration. Prefer storing a token, not a hex.**

### MEMORY.md trimming history

Five trims on 2026-07-27, each moving history behind a pointer (→ §7, §8, §9, §10, §11), taking the
file 368 → 291 lines. It grew back to **374** within a day. Restructured properly on 2026-07-28:
this section absorbed the changelog above, and the file was reorganised around *resuming the work*
rather than around *when things happened*.

**Two lessons, both cheap to forget:** a trim only works if the pointer left behind is genuinely
shorter than what it replaces — the §9 move saved a single line because the pointer was written too
long; and a block **shrinks on its own** when it goes from in-progress to complete, so **each module
finished frees space** without any trimming at all.

---

## §13 Environment facts — moved here from MEMORY.md on 2026-07-28

Verified 2026-07-26 on `DESKTOP-264A9LO` (Windows 10 Pro 19045), plus the browser tooling found on
2026-07-28. Stable reference, not state — MEMORY.md keeps a four-line pointer.

**Poppler** v25.07.0-0, installed 2026-07-26 via winget. `pdftoppm`, `pdfinfo` and `pdfimages` all
work, including on the 332 MB file. **winget modified PATH, but a shell started before the install
will not see it** — use the full path:

```
C:\Users\Alfa388\AppData\Local\Microsoft\WinGet\Packages\oschwartz10612.Poppler_Microsoft.Winget.Source_8wekyb3d8bbwe\poppler-25.07.0\Library\bin
```

**The read tool rejects PDFs over 100 MB outright** — all 7 books and 3 of the 7 question banks
(ENT QB, ENT endpoint, ophthalmology qb). Rendering page ranges to PNG in the scratchpad sidesteps
this entirely, because the PDF is then never opened by the reader.

**`pdftotext`** — `C:\Program Files\Git\mingw64\bin\pdftotext.exe` (v4.06, Xpdf, ships with Git for
Windows). Works on lecture slides; returns **0 characters** on every book and every question bank.

**`.pptx`** text extracts via PowerShell reading `ppt/slides/slide*.xml` out of the archive — no
tooling needed.

**Browsers — found 2026-07-28.** `C:\Program Files\Google\Chrome\Application\chrome.exe` and
`C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`. Chrome headless is the **only** way
to screenshot the app, since the preview pane's `computer` tool always answers "No site is open in
this tab". Full method and its four traps are in `CLAUDE.md` §7.

**Image work** is done with PowerShell `System.Drawing` — resize, crop, JPEG encode, and circular
alpha masking via `GraphicsPath.AddEllipse` + `SetClip`. That is what produced `app\assets\`.

**Absent:** Ghostscript, ImageMagick, qpdf, pdftk, mutool, Node. Python is still only the Microsoft
Store alias stub and does not run. The `convert` on PATH is Windows' filesystem converter, not
ImageMagick.

**`winget`** — available, v1.29.280.

**`sheet.ps1` must be invoked through the PowerShell tool**, not Bash — Bash passes `-Pages` as one
string and the `int[]` conversion fails.

**Two PowerShell gotchas that cost real time on 2026-07-28**, both when calling a native exe:
`2>$null` on the chrome call makes the run produce nothing, and capturing chrome's stdout into a
variable returns empty — `Start-Process … -RedirectStandardOutput` is required instead.

> **⚠️ NEVER ROUND-TRIP A PROJECT FILE THROUGH `Get-Content` → `Set-Content` (2026-08-04).** It
> **double-encodes every non-ASCII character and corrupts the file silently.** PowerShell 5.1's
> `Get-Content` has no `-Encoding` default of UTF-8: it reads a BOM-less UTF-8 file as Windows-1252,
> so `—` arrives as `â€"`; `Set-Content -Encoding UTF8` then writes *those* characters as UTF-8. One
> such command turned `MEMORY.md` — which is full of em-dashes, arrows and ⚠️ — into mojibake, **and
> the `-replace` it was doing did not even apply**, because the patterns had been written against the
> real text. **Use the Edit tool for every content change to a tracked file.** If a scripted edit is
> unavoidable, read and write bytes explicitly. Recovery here was `git checkout -- MEMORY.md`
> followed by redoing the edits properly, which is only cheap because the previous batch was already
> committed — **commit before any bulk text operation.**

### Git and GitHub — set up 2026-07-28

`git init` on 2026-07-28 at the user's request, so the project can be worked on from an iPad through
claude.ai/code. Remote is **`https://github.com/mahmoudbanna23-ctrl/Herophilus.git`**, branch `main`,
first commit `5e481ad` — **197 files, 22 MB**. Repo config: `core.autocrlf false`,
`credential.helper manager`.

**The repo MUST stay private.** The questions are transcribed from three commercial banks; a public
copy would be republishing someone else's material.

**`Semester 8\` is gitignored and always must be** — 4.0 GB, and `ENT endpoint.pdf` alone is 332 MB,
past GitHub's 100 MB per-file limit. The consequence is permanent: **transcribing new questions
cannot be done from a clone.** Theory writing, editing existing questions, app and design work and
the integrity sweeps all travel, because the lecture text is already cached as plain text in
`content\` and every question already lives in `app\data\`.

**⚠️ PUSHING NEEDS THE DEVICE-CODE FLOW. A plain `git push` HANGS FOREVER.** Three separate walls,
each of which cost a run:

1. **Git Credential Manager's default is a GUI sign-in window on the PC.** Under remote control the
   user never sees the PC screen, so nothing clicks it and the push blocks indefinitely. Fix:
   `git config --local credential.gitHubAuthModes device` + `credential.guiPrompt false`.
2. **The harness sets `GCM_INTERACTIVE=never` and `GIT_TERMINAL_PROMPT=0`** — deliberately, so git can
   never hang on a prompt. It also kills the device flow before it starts, with
   *"Cannot prompt because user interactivity has been disabled."* Both must be overridden **in the
   launching process only**. Note the two shells differ: those variables are set in the PowerShell
   tool's environment and **empty in Bash's**, which is why the Bash push hung silently while the
   PowerShell one failed fast with a usable error.
3. **GCM writes the one-time code to `CONOUT$` directly, bypassing stdout redirection.** Capturing
   stdout returns an empty file and the process just sits there. The code is only readable out of the
   **console screen buffer** — `$host.UI.RawUI.GetBufferContents(...)`, which works here (120×9001).

The working script lived in the session scratchpad and is gone with it; rebuild it from the three
points above — set the env vars, `Start-Process git push -NoNewWindow -PassThru`, sleep ~12 s, read
the buffer, print the code. **Run `git push`, not
`git-credential-manager get`** — git consumes the token internally and GCM files it in Windows
Credential Manager, so no secret ever lands in a file. `git-credential-manager get` would print the
token to stdout in plaintext.

**This is one-time.** The token is now stored; `git ls-remote` and later pushes authenticate with no
prompt at all. Only a revoked or expired token brings the dance back.

`gh` (GitHub CLI) is **not** installed. GCM is at
`C:\Program Files\Git\mingw64\bin\git-credential-manager.exe`, v2.9.0, .NET Framework 4.8.

---

## §14 `ENT QB.pdf` — Grade Gain. Reconnaissance, 2026-08-07

**The cover settles the bank**: *"ASM MINDS' ENT — GRADE GAIN EDITION"*, "GG EDITION", PREMIUM,
1st edition. Identified by the cover, per the rule — the filename says nothing.

**⚠️ PDF page = book page + 9.** PDF 10 is book p.1. Verified against the printed footer
(`| P a g e 1`), not assumed. 185 PDF pages = book pp.1–176. PDF 2 is blank, PDF 3–4 are Arabic
adverts, PDF 5–9 are the contents.

### What the contents pages promise — **1,080 questions over 29 topics**

Page numbers are **book** pages; add 9 for the PDF.

| Ch | Topic | Qs | As | N |
|---|---|---|---|---|
| **EAR — 244** | | | | |
| 1 | Surgical anatomy of ear | 1 | 4 | 29 |
| 2 | Diseases of External Ear | 6 | 8 | 20 |
| 3 | Acute Otitis Media | 9 | 13 | 40 |
| 4 | Chronic Otitis Media | 15 | 18 | 30 |
| 5 | Facial nerve | 20 | 24 | 24 |
| 6 | Otalgia and otorrhea | 26 | 28 | 21 |
| 7 | Tinnitus & Hearing loss | 30 | 32 | 17 |
| 8 | Audiological investigations | 33 | 38 | 38 |
| 9 | Vertigo and vestibular diagnosis | 40 | 43 | 25 |
| **NOSE — 258** | | | | |
| 1 | Anatomy of the nose | 44 | 48 | 46 |
| 2 | Epistaxis and smell Disorders | 50 | 53 | 37 |
| 3 | Rhinitis | 55 | 61 | 60 |
| 4 | Rhinosinusitis | 64 | 67 | 22 |
| 5 | Nasal symptoms | 69 | 71 | 21 |
| 6 | Nasal fractures | 73 | 75 | 12 |
| 7 | Sino-nasal masses | 76 | 80 | 31 |
| 8 | Nasal septal diseases | 81 | 84 | 22 |
| 9 | Minor Nasal Procedures | 85 | 86 | 7 |
| **THROAT — 578** | | | | |
| 1 | Anatomy & physiology of throat | 87 | 91 | 40 |
| 2 | Pharyngeal and neck suppurations | 92 | 98 | 46 |
| 3 | Dysphagia | 99 | 107 | 60 |
| 4 | Tonsils and Adenoids | 110 | 121 | **98** |
| 5 | Pediatric Laryngeal Lesions | 124 | 130 | 52 |
| 6 | Neck Masses | 132 | 136 | 31 |
| 7 | Trauma of the neck | 137 | 143 | 44 |
| 8 | Stridor & Tracheotomy | 144 | 151 | 65 |
| 9 | Simplified Phoniatrics Principles | 153 | 159 | 56 |
| 10 | Hoarseness Of Voice | 161 | 170 | 66 |
| 11 | Clinical Assessment of Voice | 172 | 174 | 20 |

**The TOC is internally consistent** — every topic's question pages hold ~10 questions at 2 columns
x 5, and every span checks out against its count. That is a real cross-check, not a reading of the
numbers back to themselves.

**1,080 is larger than everything transcribed so far** (717 entries from the whole of
`ENT endpoint.pdf`, 3,074 pages). **Do not start this bank without deciding what it is for.**

### What the pages actually look like

- **Questions:** two columns, ~10 per page, numbered continuously **within a topic** (restarting at
  1 each topic). Options **a-d or a-e** — the 5-option case is real, so no schema assumption holds.
- **Some questions carry photographs**, e.g. Ear ch.1 Q28 prints an otoscopy image. Count unknown;
  the `image` pipeline from §11a already exists to take them.
- **Answers:** a separate block headed *"<Topic> / Answers"*, numbered to match, each line
  *"Correct answer: D."* and **sometimes** an *"Explanation:"* paragraph. Explanations include
  **tables** (ch.1 Q20 prints a cochlea / vestibule / SCC table), which the app renders natively.
- **⚠️ A QUESTION TAIL AND THE ANSWER BLOCK SHARE A PAGE.** Book p.4 carries Q28-Q29 in the left
  column and *"Answers"* starting in the right. The TOC's "Page As" is where answers **begin**, not
  where questions end — reading only up to it drops the last two questions of every topic.
- **~45 % carry a printed explanation** — 13 of 29 in Ear ch.1 (Q1, 2, 4, 6, 9, 10, 12, 13, 15, 17,
  20, 24, 26). **The other 55 % need an authored, marked explanation**, so on the TOC's numbers this
  bank alone implies **~600 written explanations**. That is the real cost, and it is the same shape
  as `ENT endpoint.pdf` (72 % authored) only larger.

### What must be true before any of it is written

- **⚠️ THE FIVE-STAGE SWEEP RUNS AGAINST ALL 717 EXISTING ENTRIES, NOT WITHIN THIS BANK.** A match
  is a **cross-bank** match, and the rule is **ADD THE BANK (`alsoIn`), NEVER ADD AN ENTRY**
  (`CLAUDE.md` §4). Only one such fold exists in the project so far, so the overlap rate here is
  **unknown and must not be guessed** - the House bank's 21 questions produced exactly 1.
- Chapter mapping is close but **not** 1:1 with the app's 30 ENT chapters: this bank has no separate
  "Complications of sinusitis" or "Facial pain" topic, splits voice across three (Phoniatrics,
  Hoarseness, Clinical Assessment of Voice), and its "Pediatric Laryngeal Lesions" and "Trauma of
  the neck" cut across `ent-paedlar`/`ent-stridor` and `ent-neck`/`ent-stridor`. **Map topic to
  chapter per question, not per topic.**

### §14a Grade Gain Ear ch.1 — written 2026-08-08. **29 printed = 25 written + 4 folded.**

Book pp.1–5 (PDF 10–14). `entqb-ear1-1`…`28`, with **gaps at 7, 11, 24 and 29** — those four numbers
are the folds, and the gap is deliberate so the id still names the printed question number.

| Fold | Into | Why |
|---|---|---|
| Q7 ossicle order | `entep-ear-180` | identical option set, identical key; stems differ only in asking "lateral to medial" vs "order of sound transmission" |
| Q11 cone of light | `entep-ear-211` | same four quadrants, same key — the option sets differ **only by the literal word "quadrant"**, which is why stage B did not fire |
| Q24 pyriform fossa | `entep-throat-103` | **the project's first THREE-bank question** (endpoint + house + gradegain) |
| Q29 FB impaction | `entep-mfe5-35` | 1.00 stem match reaching neither A nor B = re-optioned reprint by definition |

**Q24 was folded into `entep-throat-103` rather than `entep-throat-24`**, though it sits one distractor
from each (it offers "Facial" where 103 offers "Hypoglossal"; "Trigeminal" where 24 offers "Facial").
Both are wrong distractors, so the question is the same question, and 103 is already the designated
cross-bank home — keeping every bank membership of one item in one place.

#### ⚠️ Stage F — the option-token pass — was added here and is now permanent

**Stage E ranks STEMS ONLY.** Two folds above scored **1.00 on options and 0.21 / 0.24 on stems**,
because their content lives in the option list, not the wording of the question. Without F they would
have been written as new entries and the learner would have met each twice.

**F has its own blind spot, found the same day:** the token filter drops words of ≤3 characters, so an
option set like `C1, C2 / C2, C3 / C3, C4` normalises to **nothing** and scores 0 against everything.
Q22 had to be checked by hand against `entep-ear-31`. **Short-code options defeat F — check by eye.**

#### ⚠️ The bank mis-keys Q26 against its own printed evidence

`entqb-ear1-26` asks which statement about the **pars flaccida** is true and prints **"Correct answer:
A" — "It has a fibrous layer."** Two things in the same bank contradict that:

1. Its **own explanation on that line**: *"1st part to be perforated is pars tensa, 1st part to be
   retracted is pars flaccida"* — which states option **D**.
2. Its **own Q12 explanation** two pages earlier: the fibrous layer is *"lacking in pars flaccida"*.

**Keyed to D here, with what the bank printed recorded in the entry**, per `CLAUDE.md` §4 — a source
error is repaired but never silently overwritten. This is a different class from the eleven *disputed*
keys: those are arguable readings, this is the bank disagreeing with itself on the same page.

A second, milder instance: **Q17's explanation says the "bony end" is opened by the palatal muscles**,
while its own Q13 keys the bony end as always patent. The mechanism tested is right; the wording is
not. Recorded in the entry, key unchanged.

#### Images

`q-gg-3.jpg` (Q26, labelled drum) and `q-gg-4.jpg` (Q28, otoscopy). **Named `q-gg-<book page>`** —
`q-<page>` alone would collide with the endpoint file's numbering. **`Design\scripts\q-images.ps1`
cannot cut these** — it hunts the endpoint file's cream card on a teal surround, and Grade Gain is
black text on white in two columns. Cropped by hand with `pdftoppm -x -y -W -H` at 200 dpi, then
encoded to JPEG q80 at longest edge 560, matching the existing 18. **Both first attempts were wrong
and only looking caught it**: one clipped the "Pars flaccida" and "Pars tensa" labels off the left and
swallowed a line of the question, the other caught the first option's text under the photograph.

#### Verified in a real `file://` boot

`Q_ENT` 635 → **660**, total 717 → **742**; 0 bad chapter refs, 0 duplicate ids, every answer in
range, nothing missing a source or explanation, 0 dead backticked ids, **20 of 20 images loading**.
By bank **697 endpoint / 21 house / 29 gradegain** = 747 over 742 questions, the excess being the
**five** shared memberships across **four** questions. Grade Gain's 29 = 25 origin + 4 `alsoIn`.

**⚠️ THE AUDITOR FAILED TWICE BEFORE THE APP DID, AND BOTH LOOKED CATASTROPHIC.** First run reported
**742 bad chapter refs — every question in the file** — because `MODULES` is declared `const` and
**`window.MODULES` is therefore undefined**; the tell was `MODULES chapters: 0` in the same output.
Second run reported **19 dead backticked ids**, all of them **chapter** ids (`ent-phon`,
`ent-paedlar`) matched by a regex that only knew ids start with `ent`. Both fixed in the harness, not
the data. **A run where everything fails is a broken auditor** — the same lesson the three contrast
auditors taught, now proven on content.

---

### §14b — Grade Gain, Ear chapter 2: "Diseases of External Ear" (book pp.6–8, PDF 15–17)

**20 printed = 20 written, NOTHING folded.** Ids `entqb-ear2-30` … `entqb-ear2-49`, no gaps.
`Q_ENT` 660 → **680**, total 742 → **762**.

#### ⚠️ Two facts recorded in §14 from chapter 1 were wrong, and chapter 2 corrected them

1. **The printed numbering is CONTINUOUS ACROSS CHAPTERS, not per chapter.** Chapter 1 ran Q1–Q29;
   chapter 2 opens at **Q30** and closes at **Q49**. §14 read the numbering as restarting, which
   would have made every id from here on collide with chapter 1's.
2. **The running header says "Chapter 1" on EVERY chapter.** **⚠️ CORRECTED IN §14i (2026-08-10) —
   THIS IS NOT A DEFECT.** The header's number is the **section** (1 = Ear, 2 = Nose, 3 = Throat) and
   only the title beside it names the topic, so `Chapter 1` is *correct* on every Ear page. What the
   contents page calls "chapters" are topics inside a section. Read that way, the header and the
   continuous numbering agree with each other, and the restart at Nose Q1 follows from both. **The
   contents page remains the only authority on which topic a page belongs to**, which is what makes a
   page-range plan built from the header wrong at the topic level.

Both facts are cheap to verify at the top of each topic and expensive to discover late. Check the
first and last printed question number of every chapter against §14's map before staging it.

#### Zero folds — and the threshold that settles it

The full six-stage sweep ran over all **742** held entries. **No stage-A and no stage-B hit
anywhere.** Three entries came close enough to be read side by side and were **held as variants**:

| staged | nearest held | why it is a different question |
|---|---|---|
| Q33 (furuncle site) | `entep-enr-35` | three options differ; the held one asks the causative organism |
| Q42 (otomycosis treatment) | `entep-ear-14` | two options differ; different key, different step of management |
| Q46 (malignant OE organism) | `entep-ear-69` | two options differ; the held one names the diabetic context in the stem |

**The threshold is the project's own precedent, not a new judgement.** `entep-ear-96`/`entep-ear-76`
and `entep-ear-17`/`entep-ear-98` are each kept as **separate entries on a ONE-option difference**.
Two- and three-option differences are therefore comfortably clear of the line. Recording it here so
the next batch does not re-litigate it: **a fold needs the same question, not a similar one.**

#### ⚠️ Stage F earned its place a second time — and its blind spot bit twice more

**Q45 scored 1.00 on options against `entqb-ear1-23` while stage E scored it 0.25.** Both list the
same four cranial nerves; the questions and the keys are different. Stage E alone would have filed it
as unrelated and stage F alone would have filed it as a reprint — **only reading them side by side
decided it**, which is the standing rule that every stage's verdict is a shortlist.

**F's token filter drops words of ≤3 characters**, so two staged questions scored 0 against
everything and had to be checked by hand:

- **Q36** — options include `A and B`; every token is ≤3 characters, so the set normalises to empty.
- **Q48** — options are `CHL` / `SNHL` / `Mixed`; only one token survives the filter.

#### Five stems repaired, because `questions.js` SHUFFLES and a stem cannot lean on its neighbour

`data\questions.js` hashes ids to order the deck, so a staged question never appears beside the one
printed above it. Five stems referred to something outside themselves and were repaired in place,
each repair marked in the entry (precedent: `entep-ear-93`):

| Q | as printed | repaired to |
|---|---|---|
| 35 | "The treatment includes:" — names no disease at all | the condition named, taken from the printed set it belongs to |
| 36 | "The organism causing the appearance shown in **the previous image**" | "**shown below**", with the image attached to this entry |
| 40 | names no disease | `**[In malignant otitis externa]**` — a flagged inference |
| 41 | names no disease | `**[In malignant otitis externa]**` — a flagged inference |
| 48 | "**this case**" | the case restated inside the stem |

**The bracketed inferences are flagged as inferences in the `source` field**, not presented as the
bank's own wording. Q40 and Q41 sit inside a run of malignant-otitis-externa questions and are
unanswerable outside it; leaving them as printed would have shipped two questions with no subject.

#### ⚠️ Q31 — the printed explanation answers a DIFFERENT question

The stem asks the treatment of **auricular perichondritis**; the printed box beneath it describes the
management of an **auricular haematoma**. The key ("antibiotics with surgical incision") is right for
the stem and the slides support it, so **the key stands and the mismatch is recorded in the entry and
in `source`**. This is a defect in the bank's typesetting, not a disputed key — it does not join the
seven-item roster in §11.

#### Q30 and Q32 print IDENTICAL options with OPPOSITE keys — and that is not a self-contradiction

Both list the same option set; the keys point to different options. **The stems differ**, and the pair
is the bank's own discrimination exercise: it is teaching the reader that the same list resolves two
ways depending on what is asked. **A self-contradiction requires an identical stem as well** — the
`entqb-ear1-26` case in §14 is what one actually looks like. Recorded so a later sweep does not
"fix" one of them.

#### A cross-bank contradiction on ear wash, recorded rather than resolved away

Grade Gain lists **otitis externa as a contraindication to ear wash**. `entep-ear-80` (endpoint)
treats **seborrhoeic external otitis as an indication for aural toilet**. Both are held, and the
explanation reconciles them the way the clinical literature does — **gentle aural toilet under vision
is not forceful syringing** — with the disagreement stated. Neither bank is overwritten.

#### Exostosis is a complete gap in the material

`exostos*` returns **nothing in any of the 32 ENT lecture files** and nothing in the 742 previously
transcribed questions. Answered from general medical knowledge under the answer-the-gap rule
(`CLAUDE.md` §4) and tagged on the claim. **Nominated for the book read** in §11 item 4 alongside the
nasopharynx — it is a small, well-bounded target.

#### Explanations: 9 printed, 11 authored

Chapter 1 ran ~45 % printed; chapter 2 runs **45 %** (9 of 20). Grade Gain's printed-explanation rate
is holding, and it is far better than endpoint's ~28 %.

#### Images — the naming scheme gains a letter

Three cut: **`q-gg-6.jpg`** (book p.6, serves Q34, Q35 and Q36), **`q-gg-7a.jpg`** and
**`q-gg-7b.jpg`** (book p.7 prints **two** pictures). **The letter is only used where one page prints
more than one image**, and letters run in printed order down the page; a page with a single picture
keeps the bare `q-gg-<page>` form. `q-gg-7b` serves Q47 and Q48.

**⚠️ ALL THREE CROPS WERE WRONG ON THE FIRST CUT, and only looking caught it** — the same trap §14
recorded and the third batch in a row to hit it. Each caught a line of question text above the
picture, and `q-gg-7b` also caught the first option line below. The cause is the documented
asymmetric-padding rule: a leader-line label sits *beside* the picture, the question text sits
*above*, so any pad wide enough to catch the label drags the question in with it. Located at 130 dpi,
re-cut at 200 dpi with tightened `-x -y -W -H`, and **every re-cut was rasterised and looked at**
before encoding.

#### Verified in a real `file://` boot

`parse errors: none`; `Q_ENT` **680** / `C_ENT` **82** / total **762**; `MODULES chapters: 104`;
0 bad chapter refs, 0 duplicate ids, every answer in range, nothing missing a source, explanation or
objective; **0 dead backticked ids**; **26 of 26 question images loading**; mojibake scan clean.
By bank **697 endpoint / 21 house / 49 gradegain** = 767 over 762 questions, the excess being the
same **five** shared memberships across **four** questions. Grade Gain's 49 = **45 origin + 4
`alsoIn`**.

**Reconciles:** 29 printed in ch.1 (25 written + 4 folded) + 20 printed in ch.2 (20 written + 0
folded) = **49 printed, 45 written, 4 folded.**

---

### §14c — Grade Gain, Ear chapter 3: "Acute Otitis Media" (book pp.9–14, PDF 18–23)

**41 printed = 38 written + 3 folded cross-bank.** Ids `entqb-ear3-50` … `entqb-ear3-90`,
**with deliberate gaps at 80, 82 and 87** — the three folded printings.
`Q_ENT` 680 → **718**, total 762 → **800**.

#### ⚠️ THE CONTENTS PAGE PROMISED 40 AND THE BANK PRINTS 41

Chapters 1 and 2 matched §14's map exactly — 29 and 20. This one does not. Q50 … Q90 with **no
number skipped**, and chapter 4 opens at **Q91** on book p.15, verified by rendering that page rather
than inferred from the map. **So §14's table is a plan for what to render, never a count of what was
printed** — the same lesson the endpoint file taught about its own numbering, now proven on the one
source whose counts had held twice.

The two ch.2 corrections both held again: the numbering runs **continuously** from Q49 into Q50, and
the running header says **"Chapter 1"** on every page of this chapter too, with only the title beside
it correct.

#### Three folds, and the line that decided them

| printed | folded into | why |
|---|---|---|
| Q87 | `entep-nose-36` | **word for word the same stem and the same four options in the same order** — the cleanest cross-bank match in the project so far, and the only stage-B hit in the chapter |
| Q82 | `entep-ear-66` | same 50-year-old with left cervical lymphadenopathy and left ear fullness, same key; **a subset of the endpoint options** — "audiogram and tympanometry" dropped, "nasal endoscopy" written as "nasopharyngoscopy" |
| Q80 | `entep-ear-2` | same 4-year-old with otalgia and a congested drum, same watchful-waiting key; **a subset** — "myringotomy and drainage of pus" dropped |

**⚠️ THE TEST TO REUSE: A DROPPED DISTRACTOR IS A REPRINT; A REPLACED ONE IS A NEW QUESTION.** It
resolves the tension between ch.1, which folded cross-bank matches sitting one distractor apart, and
ch.2, which held variants two and three options apart — and it is not arbitrary, because a **dropped**
option leaves the discrimination the examiner was testing intact while a **replaced** one creates a
different discrimination.

**Q76 is the case that proves it and was held apart on it.** Grade Gain's traumatic-perforation
question offers *myringoplasty / conservative + water restriction / myringotomy with tube / **no
treatment is necessary***, where `entep-ear-196` and `entep-ear-38` offer *myringoplasty / myringotomy
/ **antibiotic therapy** / watchful waiting*. Swapping "antibiotic therapy" for "no treatment is
necessary" turns the question from *which treatment* into **water precautions versus doing nothing** —
a discrimination the endpoint printings never ask, and the better one. Held as a variant.

Three more were read side by side and held: **Q52** against `entep-ear-47` (two of three options
absent from that set), **Q72** against `entep-ear-212`/`entep-ear-41` (three of four differ; those two
make the learner choose *between tubes*, this one between drainage and more medicine), and **Q74**
against `entep-mfe5-27` (the same scenario over **two** options rather than four).

#### ⚠️ Q79 — the chapter's mis-key, and the bank convicts itself three times over

The stem asks the treatment of a **first-time acute otitis media without perforation**. **p.14 prints
"Correct Answer: A" — immediate antibiotics.** Against it:

1. **The explanation box printed on the same line** states *"the approach is symptomatic management
   with analgesics and close observation. Antibiotics are only necessary if symptoms worsen or do not
   improve within 48–72 hours."* — which is **option B**.
2. **Its own Q80**, on the next page, keys *"analgesics and antipyretics with observation for 48 hours
   **without antibiotics**"* for the same policy.
3. **`entep-ear-2`** in the endpoint bank keys the same thing — and Q80 folds **into** it.

**Keyed to B, printed key recorded in the entry.** Same class as `entqb-ear1-26` (pars flaccida): the
bank contradicting its own printed evidence, not an arguable reading. **That is two self-contradictions
in three Grade Gain chapters — the rate is not falling, so keep looking.**

#### ⚠️ Q83 — a DISPUTED key: the bank against the LECTURE, not against itself

*"All of the following are complications of MEE except: blue ear / tympanosclerosis / CHL / SNHL."*
Key **D (SNHL)**. But `L21.2) Otitis media with effusion.pdf` lists the complications of otitis media
with effusion as *"1) Developmental & behavioural changes. 2) Atrophic tympanic membrane. 3) Ossicular
chain erosion. 4) Chronic O.M. **5) SNHL**"* — **sensorineural loss is complication 5 of 5 on the
Alexandria slide.**

**Key left as printed** and the conflict stated in full in the entry, because this is a *disputed*
reading and not a self-contradiction: nothing in Grade Gain argues against its own key here. **Added
to the disputed roster in §11 — it is now eight open, and the first one raised against a lecture
slide rather than against another printing.** Worth noting that the slide's list contains **none** of
the other three options either, so the question is not drawn from the lecture at all.

#### Five stems repaired, one figure missing from the source

| Q | as printed | repaired to |
|---|---|---|
| 61 | "The following otoscopy is characteristic of:" | "The otoscopy **shown below**…", image attached |
| 69 | two sentences split by the photograph | joined into one stem with "shown below" |
| 88 | "**The following plaques** on ear drum is called ………" | "The **chalky white plaques seen on the ear drum** are called ………" |
| 89 | "If **these plaques** reach annulus…" | "If **tympanosclerotic plaques** reach the annulus…" |
| 90 | "In **the previous case** which curve appears in tympanometry" | the condition restated in the stem |

**⚠️ Q88 REFERS TO A PICTURE THE PAGE DOES NOT PRINT.** No photograph appears anywhere on book p.12 —
the reference has no referent **in the original**, not merely after the shuffle. The appearance is
stated in words (*chalky white plaques*), which is what any figure would have shown, and the missing
figure is recorded rather than invented. **This is a new failure mode: a dangling reference that
predates the transcription.**

Q88–Q90 are a **linked trio**, all three of which had to be repaired; `data\questions.js` hashes ids
to order the deck, so a chain of three consecutive questions is the worst case for it.

#### The sweep

Six stages over all **762** held entries. **One stage-A/B hit (Q87).** Stage F again paid for itself
and again showed its blind spot:

- **Q90 scored 1.00 on options against `entep-ear-4`** (Type A / A(d) / B / A(s) against Type A / B /
  As) while stage E scored the stems far apart. Read side by side: different scenario, **different
  key** — that entry keys Type B for a child with air bubbles, this one Type As for a stiff drum.
  Held apart. **F lists; only reading decides.**
- **Q89 and Q54 and Q68 are short-code option sets** (CHL / SNHL / Mixed), so the ≤3-character token
  filter empties them and they score 0 or 1.00 for the wrong reason. Checked by hand.

#### What the material does not cover — two gaps, both logged

1. **⚠️ ACUTE NECROTIC OTITIS MEDIA IS ABSENT FROM ALL 32 CACHED ENT LECTURE FILES.** `necrotic` /
   `necrotis` / `necrotiz` returns only `L17,18) Otorrhea and otalgia.pdf`, and there it means
   **necrotising EXTERNAL otitis** — a different disease with a different organism. **Four entries
   rest on general knowledge for it**: Q58 (organism), Q59 (treatment), Q61 (the photograph), Q81 (the
   discharge). A well-bounded book-read target; added to §11 item 4 beside the nasopharynx and
   exostosis.
2. **The compass taxonomy of mastoid spread** — anterior / posterior / medial / lateral / inferior —
   together with **Citelli's abscess** and the **zygomatic abscess**, appears on **no** slide.
   `L16) Chronic otitis media.pdf` gives acute mastoiditis, the post-auricular abscess, sagging,
   petrositis and Gradenigo's triad, but not the scheme the bank builds Q60, Q63 and Q64 on.
   **Bezold's abscess** survives only in `L4) PHARYNGEAL SUPPURATIONS.pdf`, as a cause of
   parapharyngeal abscess — which is itself a useful link and is recorded on the entry.

#### ⚠️ Q75's printed explanation box is defective

It ends *"the most IMPORTANT drugs are Allergic hypo sensitization, Valsalva maneuver"*. **Neither is a
drug.** The slide's medical arm separates the two properly — *"I) Antibiotics, antihistaminics,
corticosteroids. II) **Eustachian tube ventilation**: as Valsalva, gum chewing."* Transcribed verbatim
and corrected in the text beneath it; the key is unaffected. **A printed box being wrong about
something other than the key is a third defect class**, alongside ch.2's Q31 (a box answering a
different question) and this chapter's Q79 (a box contradicting its own key).

#### Chapter mapping

**31 to `ent-aom`, 7 to `ent-csom`.** The complications run — Q60, Q62, Q63, Q64, Q65, Q66, Q67 — goes
to `ent-csom` with `ent-aom` noted as secondary, because **acute mastoiditis, petrositis and
Gradenigo's triad are taught on `L16) Chronic otitis media.pdf`**, and because the held endpoint
entries for them (`entep-ear-222`, `entep-ear-81`, `entep-ear-133`, `entep-mfe4-1`, `entep-ear-27`)
already sit there. Secondary chapters also noted on Q89 (`ent-hearing`) and Q90 (`ent-audio`).

#### Images

**`q-gg-10a.jpg`** (Q61, 500×405, 50.4 KB) and **`q-gg-10b.jpg`** (Q69, 342×198, 14.0 KB) — book p.10
prints two, so both take a letter. Located at 130 dpi, cut at 200 dpi, and **both re-cut after
looking**: the first pass clipped the right edge of Q61's photograph and caught a descender from the
question text above Q69's. **That is nine crops in three chapters and the first cut has been wrong
every single time.**

**A third figure was deliberately NOT cropped.** The answer page prints a labelled diagram of the
tympanic membrane's blood supply — manubrial, circumferential and radial branches from the maxillary
artery — inside Q61's explanation box. It **explains the answer**, so putting it beside the stem would
give the question away, exactly as the `imgAlt` audit of 2026-08-04 found. It is described in the
explanation instead.

#### Explanations: 19 printed, 19 authored

**~46 %** printed, holding ch.1's and ch.2's rate.

#### Verified in a real `file://` boot

`parse errors: none`; `Q_ENT` **718** / `C_ENT` **82** / total **800**; `MODULES chapters: 104`;
0 bad chapter refs, 0 duplicate ids, every answer in range, nothing missing a source, explanation or
objective; **0 dead backticked ids**; **28 of 28 question images loading**; mojibake scan clean.
By bank **697 endpoint / 21 house / 90 gradegain** = 808 over 800 questions — **eight** shared
memberships across **seven** questions. Grade Gain's 90 = **83 origin + 7 `alsoIn`**.

**⚠️ THE DEAD-ID CHECK EARNED ITS PLACE.** The first boot reported **three dead backticked ids**:
`entqb-ear3-80` and `entqb-ear3-82`, cited by number in two of the entries written before the folds
were applied. **A folded id must lose its backticks everywhere it is still mentioned** — the same rule
that cost three rewrites when `enthd-ear-15` was folded. Rewritten to name the printed question
numbers instead, and re-verified clean.

**Reconciles:** ch.1 29 printed (25 written + 4 folded) + ch.2 20 (20 + 0) + ch.3 41 (38 + 3) =
**90 printed, 83 written, 7 folded.**

---

### §14d — Grade Gain, Ear chapter 4: "Chronic Otitis Media" (book pp.15–19, PDF 24–28)

**31 printed = 27 written + 4 folded.** Ids `entqb-ear4-91` … `entqb-ear4-121`, with gaps at
**94, 95, 97 and 98**. `Q_ENT` 718 → **745**, total 800 → **827**.

#### ⚠️ 31 WHERE THE MAP SAID 30 — TWO CHAPTERS RUNNING

Chapter 5 (Facial Nerve) opens at **Q122** on book p.20, verified by rendering that page. Combined
with ch.3's 41-for-40, **§14's contents-page table has now been wrong twice in a row after being
right twice.** It is a plan for what to render. It is not a count.

#### ⚠️ THE ANSWER BLOCK OPENS IN THE RIGHT-HAND COLUMN OF A PAGE WHOSE LEFT COLUMN IS STILL QUESTIONS

Book p.18 carries **Q118, Q119, Q120 and Q121** on the left and *"Chronic Otitis Media / Answers"*
starting on the right. Stopping at the TOC's "Page As" would have dropped **four** questions — the
largest bite this trap has taken, and the third chapter in which it has bitten at all.

#### ⚠️ GRADE GAIN REPRINTS ITSELF ACROSS CHAPTERS — new behaviour, not seen in ch.1–3

Two of this chapter's four folds are **within-bank**:

| printed | folded into | relation |
|---|---|---|
| Q94 "intracranial complications of OM except" | `entqb-ear3-65` | ch.4 prints **four** options where ch.3 prints three — *Meningitis* added. Same key. |
| Q97 "Gradenigo's triad is caused by" | `entqb-ear3-62` | ch.4 prints **two** options where ch.3 prints three — *Sinus thrombophlebitis* dropped. Same key. |

**A within-bank reprint takes NO `alsoIn`.** That field means *another bank also prints this*; the
question is simply held once, in the printing with the fuller option set and the explanation box.

**Adding an option is the mirror of dropping one** — the two sets stand in a subset relation with
nothing **replaced**, so the ch.3 test applies unchanged and both are reprints.

The other two folds are cross-bank, and both are subsets:

| printed | folded into | relation |
|---|---|---|
| Q95 "most common complication of OM" | `entep-ear-50` | the endpoint's five options minus *facial paralysis*; same key |
| Q98 "commonest cause of mucopurulent, profuse, intermittent otorrhoea" | `entep-ear-199` | the endpoint's four options minus *chronic non-suppurative otitis media*; same key |

#### ⚠️ THE SWEEP MISSED Q98 COMPLETELY, AND ABBREVIATION IS THE REASON

`entep-ear-199` writes *"Acute suppurative otitis media"*, *"Chronic suppurative otitis media
(tubotympanic type)"*, *"Chronic suppurative otitis media (atticoantral type)"*. Grade Gain writes
**"AOM"**, **"CSOM safe type(tubo-tympanic)"**, **"CSOM unsafe type (attico-antral)"**.

**Not one token matches.** Stages A–D key on exact normalised strings and saw nothing; stage E ranked
the twin nowhere; **stage F scored it 0.13**. The fold was found only by *reading the staged question
and recognising the three adjectives* — profuse, mucopurulent, intermittent — as the slide's own
description of tubo-tympanic disease.

**⚠️ NO TOKEN METHOD CAN COVER A SHARED ABBREVIATION.** This is a different blind spot from stage F's
≤3-character filter: there the tokens were too short to survive, here they are simply *different
words for the same thing*. **The mitigation is not another stage — it is reading the staged list.**
Recorded on `entep-ear-199` as well as here.

#### Two printing defects, recorded not repaired

- **Q94's option b is truncated to the bare word "Brain."** Read as *brain abscess*, which is what the
  bank's own three-tier list makes it. Recorded on `entqb-ear3-65`.
- **Q101's printed mnemonic reads "1 ear + 2 nose"** for Gradenigo's triad, whose two non-otological
  elements are **orbital** — retrobulbar pain and diplopia. Transcribed as printed, corrected in the
  text, key unaffected. **A third instance of a printed box being wrong about something other than the
  key**, after ch.2's Q31 and ch.3's Q75.
- The bank writes the pinna is *"pushed forwards and downwards"* by a mastoid abscess where
  `L16) Chronic otitis media.pdf` writes *"outwards and downwards"* — the same displacement from a
  different angle. Recorded on `entqb-ear4-96`, not treated as an error.

#### No mis-key, and no new disputed key

**The first Grade Gain chapter with neither.** All 31 keys are consistent with the bank's own
explanations and with the cached slides — including Q111, whose key (*Gram-negative organisms are NOT
a feature of tubo-tympanic disease*) is lifted straight from the slide's investigations line for the
**attico-antral** column.

#### Five stems repaired

Q110 (*"this photo"*), Q112 (*"The following image shows…"*), Q120 (**printed as a bare phrase with no
question at all**, beside a photograph). Q91 and the rest needed none. **Q120 is a new shape of
defect** — not a dangling reference but an *absent interrogative*: the page prints a heading, a
picture and four options, and the reader is left to infer what is being asked.

#### A three-question run this chapter is built on

**Q101–Q105 take Gradenigo's triad apart element by element** — the cause of the facial pain
(trigeminal ganglion), the cause of the diplopia (abducent nerve), the muscle (lateral rectus), the
cause of the discharge (the underlying otitis media), and the triad itself. Written as a set, with
each entry carrying the anatomy the next one needs, because after the shuffle they will never be met
together.

#### Chapter mapping

**24 to `ent-csom`, 2 to `ent-aom`** (Q113, the site of the AOM perforation; Q93 is in `ent-csom` with
`ent-aom` secondary because acute mastoiditis is taught on the chronic slide), **1 to `ent-otalgia`**
(Q96, furunculosis — matching `entep-ear-152`, `entep-ear-167`, `entep-ear-171`, `entep-ear-217`).

#### Images

**`q-gg-16.jpg`** (Q110, central perforation, 283×243, 16.3 KB), **`q-gg-17.jpg`** (Q112, attic lesion,
362×374, 32.1 KB) and **`q-gg-18.jpg`** (Q120, post-auricular swelling, 355×305, 27.0 KB) — one
picture per page, so none takes a letter.

**All three were right on the first cut.** That ends a run of nine wrong first attempts, and the reason
is worth recording: these three sit in a **column of their own with white space above and below**,
where the earlier ones were wedged between a question line and an option line. **The trap is the
layout, not the method.**

**Two of the three are `imgEssential`**; Q120's is not — the question is answerable from the words,
and the photograph illustrates rather than carries it.

#### Explanations: 11 printed, 20 authored

**~35 %** printed — **the lowest Grade Gain rate so far** (ch.1 ~45 %, ch.2 45 %, ch.3 ~46 %). The
running Grade Gain figure is now **50 of 121 printings, ~41 %**, still far better than the endpoint
file's ~28 %.

#### Verified in a real `file://` boot

`parse errors: none`; `Q_ENT` **745** / `C_ENT` **82** / total **827**; `MODULES chapters: 104`;
0 bad chapter refs, 0 duplicate ids, every answer in range, nothing missing a source, explanation or
objective; **0 dead backticked ids**; **31 of 31 question images loading**; mojibake scan clean.
By bank **697 endpoint / 21 house / 119 gradegain** = 837 over 827 — **ten** shared memberships across
**nine** questions. Grade Gain's 119 = **110 origin + 9 `alsoIn`**.

**Reconciles:** ch.1 29 (25 + 4) + ch.2 20 (20 + 0) + ch.3 41 (38 + 3) + ch.4 31 (27 + 4) =
**121 printed, 110 written, 11 folded** — of which **9 are cross-bank `alsoIn`** and **2 are
within-bank reprints held once**.

---

### §14e — Grade Gain, Ear chapter 5: "Facial Nerve" (book pp.20–25, PDF 29–34)

**35 printed = 34 written + 1 folded.** Ids `entqb-ear5-122` … `entqb-ear5-156`, gap at **155**.
`Q_ENT` 745 → **779**, total 827 → **861**.

#### ⚠️ 35 WHERE THE MAP SAID 24 — AND THE PATTERN IS NOW CLEAR

Chapter 6 opens at **Q157** on book p.26, verified by rendering it. Three chapters running short of
the contents page: **41 for 40, 31 for 30, and now 35 for 24.**

**⚠️ THE USEFUL DISTINCTION: §14's PAGE RANGES HAVE BEEN RIGHT EVERY SINGLE TIME; ONLY ITS COUNTS
DRIFT.** Render the range the table gives, then count what is actually printed and ignore the number
in the last column. On the TOC's own arithmetic the remaining 24 topics promise 959 questions; on this
chapter's ratio the real figure could be half as large again. **Do not plan the rest of the bank on the
contents page.**

#### The one fold

**Q155 → `entep-ear-55`** — *"Ramsay Hunt syndrome includes all of the followings EXCEPT"* with **the
same four options in the same order and the same key**. Stage B, stage C and a stage-F score of
**1.00** all fired at once. **The second word-for-word cross-bank match in the project**, after ch.3's
Q87. Its explanation was rewritten on folding, using the triad Grade Gain prints at its own Q135.

**Six near misses were read side by side and held**, all on the replaced-distractor test:

| staged | nearest held | difference |
|---|---|---|
| Q122 branches | `entep-ear-174` | different question (*gives off* vs *intra-temporal*), different key |
| Q132 stylomastoid | `entep-ear-188` | that one localises from **taste** after ear surgery, three options differ |
| Q133/Q134 eye-and-mouth | `entep-ear-216`, `entep-ear-68`, `entep-enr-21` | those offer four left/right permutations; Grade Gain **replaces two with "intact eye closure"** so the pair also tests UMNL vs LMNL |
| Q136 commonest cause | `entep-ear-229` | drops Ramsay Hunt, adds mastoid surgery and Guillain-Barré — neither set contains the other |
| Q144 most important step | `entep-ear-75`, `entep-ear-150`, `entep-ear-162` | those ask what the treatment *is*; this asks which step is **most important** |
| Q150 facial palsy in AOM | `entep-ear-191` | vignette vs bare question, three of four options differ |
| Q154 does not cause palsy | `entep-ear-78` | **replaces** *car accidents* with *cholesteatoma* — a replaced distractor, so a new question |

#### ⚠️ Q141 — the third Grade Gain self-contradiction, and the most clear-cut

*"How do you test greater superficial petrosal nerve?"* **Key C, the lemon test**, with the printed
explanation *"We should test submandibular flow by lemon test"* — which describes the **chorda
tympani**. Three things in the same file convict it:

1. **Its own Q122 explanation**: the greater superficial petrosal is *"secretomotor to lacrimal gland
   and nasal mucosal glands"*, while the chorda tympani serves *"submandibular and submental salivary
   glands"*.
2. **Its own Q140**, which keys **Schirmer's test** as the test of lacrimation.
3. **`L15) Facial nerve disorders.pdf`**, whose topognostic list separates *"Schirmer's tear test"*
   from *"submandibular salivary flow"*.

**Corrected to B, printed key recorded.** Same class as `entqb-ear1-26` and `entqb-ear3-79` — the bank
contradicting its own evidence, not an arguable reading. **Three self-contradictions in five chapters;
the rate is not falling, so keep looking.**

#### The best-grounded chapter in the bank

`L15) Facial nerve disorders.pdf` supports **essentially every key**, and several verbatim:

- **Hilger's test on the third day**, because a cut nerve conducts distally for *"24–72 hours"* before
  Wallerian degeneration (Q137).
- **EMG prognostic after 10 weeks** — *"after 10 weeks have passed, the test is prognostic"*, with
  voluntary potentials in the first 10 days and fibrillation at 10–14 (Q138). **This one looked wrong
  and is not** — the slide says it in as many words.
- **ENoG is the quantitative test**; *"degeneration of more than 90 % means recovery is poor"* (Q139,
  Q142).
- **Decompression at >90 % within 6 days** in Bell's palsy, **>90 % after 2 weeks** in Ramsay Hunt
  (Q147, Q148) — same threshold, different window.
- **71 % / 25 % / 4 %** for Bell's palsy against **30 % / 70 %** for herpes zoster oticus (Q146).
- **10 % of longitudinal and 40 % of transverse** petrous fractures, *"the site of the lesion is
  commonly at the geniculate ganglion"* (Q156).

**Only three points needed outside knowledge**, each tagged in place: the absence of the mastoid
process in infancy (Q149), the axonal growth rate behind the 10-week figure (Q138), and the
correlation of fracture plane with the type of hearing loss (Q156).

#### Two runs written as sets

**Q127–Q132** walk the lesion down the nerve — supranuclear, nuclear, IAC/CPA, geniculate ganglion,
below geniculate, stylomastoid foramen — and **Q125/Q126/Q133/Q134/Q152/Q153** work the same two-step
reading (*the eye names the level, the failing eye names the side, the mouth points away*). Each entry
carries the anatomy the next one needs, **because after the shuffle they will never be met together.**

#### One stem repaired, and it is the same defect as ch.4's Q120

**Q153 is printed as the bare phrase *"In the following picture"*** — a heading, a photograph and four
options, with **no question at all**. Written out as a question. **Second instance of an absent
interrogative**, which is now a recognised shape rather than a one-off. Q135's doubled verb
(*"…what is the most likely diagnosis is:"*) was tidied without changing meaning.

#### The image

**`q-gg-23.jpg`** (Q153, 335×228, 19.5 KB). Right first time on the crop rectangle, wrong on the
height — it caught the first option line and was re-cut. **⚠️ It is a clinical photograph of an
identifiable child.** That is unremarkable for private study and it is **a question to settle before
any publication**, alongside the copyright question already open on the transcribed content.

#### Explanations: 20 printed, 15 authored

**~57 % printed — the highest Grade Gain rate so far** (ch.1 ~45 %, ch.2 45 %, ch.3 ~46 %, ch.4 ~35 %).
Running Grade Gain figure: **70 of 156 printings, ~45 %**.

#### Verified in a real `file://` boot

`parse errors: none`; `Q_ENT` **779** / `C_ENT` **82** / total **861**; `MODULES chapters: 104`;
0 bad chapter refs, 0 duplicate ids, every answer in range, nothing missing a source, explanation or
objective; **0 dead backticked ids**; **32 of 32 question images loading**; mojibake scan clean.
By bank **697 endpoint / 21 house / 154 gradegain** = 872 over 861 — **eleven** shared memberships
across **ten** questions. Grade Gain's 154 = **144 origin + 10 `alsoIn`**.

**⚠️ One editing trap worth recording.** Rewriting `entep-ear-55`'s explanation on folding left the
entry with **two `explanation:` keys**. JavaScript takes the last one silently — the app booted, the
right text displayed, and no check in the harness would have caught it. Found by reading the entry
back after the edit. **After replacing a field in an existing entry, read the entry, not the output.**

**Reconciles:** ch.1 29 (25 + 4) + ch.2 20 (20 + 0) + ch.3 41 (38 + 3) + ch.4 31 (27 + 4) +
ch.5 35 (34 + 1) = **156 printed, 144 written, 12 folded** — **10 cross-bank `alsoIn`** and
**2 within-bank reprints held once**.

---

### §14f — Grade Gain, Ear chapter 6: "Otalgia and Otorrhea" (2026-08-09)

**Book pp.26–28 (PDF 35–37); answers book pp.28–29 (PDF 37–38). 22 printed, Q157 … Q178.**
**19 written (`entqb-ear6-157` … `entqb-ear6-178`, gaps at 159, 160 and 176), 3 folded.**
Chapters: 14 `ent-otalgia`, 5 `ent-otorrhea`.

#### The contents page ran short again — a fourth time

**22 printed against 21 promised.** Chapter 7 (*Tinnitus & Hearing loss*) opens at **Q179 on book
p.30**, verified by rendering rather than inferred. Running record of the map: ch.1 **29/29 ✓**,
ch.2 **20/20 ✓**, ch.3 **41/40**, ch.4 **31/30**, ch.5 **35/24**, ch.6 **22/21**. **The page ranges
have been right every single time; only the counts drift, and always upward.** On the TOC's own
arithmetic the remaining topics promise 959 — the real figure will be materially larger.

#### The answer block again overlaps the question block

**Book p.28 carries Q175–Q178 in its LEFT column and the start of the answer key in its RIGHT.**
Same shape as ch.4, where mistaking "Page As" for the end of the questions cost four questions.
The rule holds: **render every page of the stated range and read both columns.**

#### Three folds — and two of them are the bank reprinting itself

| Printed | Verdict | Where it went |
|---|---|---|
| **Q159** dental caries → which cranial nerve | **within-bank reprint** of Ear ch.1 Q21 | note added to `entqb-ear1-21`, **no `alsoIn`** |
| **Q160** disc prolapse → C1,C2 / C2,C3 / C3,C4 | **within-bank reprint** of Ear ch.1 Q22 | note added to `entqb-ear1-22`, **no `alsoIn`** |
| **Q176** otalgia from mouth ulcers → trigeminal | **cross-bank** match with `entep-mfe5-42` | `alsoIn:['gradegain']` added |

**Grade Gain reprints itself across its own chapters** — first seen in ch.4 (Q94/Q97), now twice
more. A within-bank match takes **no `alsoIn`**: the question is simply held once, and the second
printing is recorded in the held entry's `source`.

**Running fold record: 4 in 29, 0 in 20, 3 in 41, 4 in 31, 1 in 35, 3 in 22.** No trend — run the
full six-stage sweep on every topic.

#### The sweep's exact stages are brittle in a way worth naming

Q176 (*"trigeminal nerve"*) versus `entep-mfe5-42` (*"trigeminal"*) differs by **one appended word**,
and elsewhere by **one parenthesis** (*"(CN V)"*). Stages A–D all normalise punctuation but not
vocabulary, so **a single added token defeats every exact stage** and the match only surfaced in the
token-ranking stages E and F. **Third documented blind spot**, after the ≤3-character token filter
(ch.1) and the abbreviated-versus-spelled-out option set (ch.4, Q98 → `entep-ear-199` at F **0.13**).

#### Six stems repaired — more than any chapter so far

- **Q166, Q167, Q170** open *"In the previous case"*. The deck is shuffled, so each was rewritten to
  carry its own case: Q166/Q167 restate the unilateral clear otorrhoea of Q165, Q170 restates the
  attico-antral perforation of Q169.
- **Q168, Q169, Q173** open *"The following perforation / patient"* with a photograph. Each stem now
  names the modality so it stands alone beside its figure.

#### Three images

`q-gg-27a.jpg` (Q168, 286×197, 12.1 KB), `q-gg-27b.jpg` (Q169, 397×266, 20.5 KB),
`q-gg-27c.jpg` (Q173, 335×289, 21.7 KB) — all three right on the first cut, because they sit in
white space. **`imgAlt` names the modality only**: naming the perforation type would answer Q168 and
Q169 outright, and naming the glomus would answer Q173. Q180 in chapter 7 reprints the glomus
photograph, so `q-gg-27c` will be reused rather than re-cut.

#### One printed-box defect, and one typo

- **Q169's box reads "attic0-antral"** — a digit zero for the letter *o*. Corrected silently in the
  entry, recorded here.
- **Q163's box describes Hitzelberger's sign as "pain or discomfort".** Classically it is
  **numbness** of the conchal patch. The underlying anatomy is right, so the box is transcribed
  verbatim and the correction added as a tagged caveat.

#### Two more material gaps

**Hitzelberger's sign** and **foreign body in the ear as the commonest cause of fetid discharge in
children** (Q172) appear on **no cached ENT lecture slide** — checked across all 32. Both answered
from general knowledge and tagged, and both added to the interview shortlist in §11. This brings the
Grade Gain gap list to: acute necrotic otitis media, the compass taxonomy of mastoid spread /
Citelli's / zygomatic abscess, Hitzelberger's sign, aural foreign body.

#### Explanations: 13 printed, 9 authored

**~59 % printed — a new Grade Gain high** (ch.1 ~45 %, ch.2 45 %, ch.3 ~46 %, ch.4 ~35 %, ch.5 ~57 %).
Running Grade Gain figure: **83 of 178 printings, ~47 %**.

#### Verified in a real `file://` boot

`parse errors: none`; `Q_ENT` **798** / `C_ENT` **82** / total **880**; `MODULES chapters: 104`;
0 bad chapter refs, 0 duplicate ids, every answer in range, nothing missing a source, explanation or
objective; **35 of 35 question images loading**; mojibake scan clean. By bank
**697 endpoint / 21 house / 174 gradegain** = 892 over 880 — **twelve** shared memberships across
**eleven** questions. Grade Gain's 174 = **163 origin + 11 `alsoIn`**.

**⚠️ The dead-id check earned its place again.** `entqb-ear6-163` cited `entqb-ear7-181` in backticks
— a **forward** reference to a chapter not yet transcribed, written on the assumption that ch.7's
numbering would hold. Rewritten to name the chapter in prose. **Never backtick an id that does not
exist yet**; the cross-reference checker cannot tell a forward reference from a dead one.

**Reconciles:** ch.1 29 (25 + 4) + ch.2 20 (20 + 0) + ch.3 41 (38 + 3) + ch.4 31 (27 + 4) +
ch.5 35 (34 + 1) + ch.6 22 (19 + 3) = **178 printed, 163 written, 15 folded** — **11 cross-bank
`alsoIn`** and **4 within-bank reprints held once**.

---

### §14g — Grade Gain, Ear chapter 7: "Tinnitus & Hearing loss" (2026-08-09)

**Book pp.30–31 (PDF 39–40); answers book p.32 (PDF 41), the whole key on one page.**
**18 printed, Q179 … Q196. 18 written (`entqb-ear7-179` … `entqb-ear7-196`), 0 folded.**
All 18 in `ent-hearing`.

#### The contents page ran short a fifth time — and the page ranges were right a seventh time

**18 printed against 17 promised.** Chapter 8 (*Audiological Investigations*) opens at **Q197 on
book p.33**, verified by rendering. Running record: **29/29 ✓, 20/20 ✓, 41/40, 31/30, 35/24, 22/21,
18/17.** Five overruns in a row, every one **upward**, none of them large except ch.5's eleven.
**The page ranges have not been wrong once in seven chapters** — that asymmetry is now firm enough
to plan on: trust the map for *where*, never for *how many*.

#### The answer block did NOT overlap here

Book p.32 is answers only, unlike ch.4 and ch.6 where the key opened in the right-hand column of a
page whose left column still carried questions. **The overlap is a property of the page, not of the
bank** — check it every chapter rather than assuming either way.

#### Zero folds — the first chapter since ch.2

The six-stage sweep raised four candidates that all failed on inspection, and each failure is a
different shape worth recording:

| Staged | Candidate | Why it is NOT a fold |
|---|---|---|
| **Q180** glomus, earliest manifestation | `entep-enr-3` — same key, *pulsatile tinnitus* | **two of four distractors replaced** (episodic vertigo → hearing loss, ear discharge → bloody otorrhoea). A replaced distractor is a new question |
| **Q184** commonest CHL in adults | `entep-ear-84` — same key, *impacted wax* | **all four distractors differ**, and that stem specifies *bilateral* |
| **Q185** malleoincus dislocation | `entqb-ear2-48`, `entqb-ear3-89` — stage F **1.00** | the **option set is identical** (CHL/SNHL/Mixed) and the stems are wholly different diseases. **Stage F scoring 1.00 on a three-word option set means nothing** |
| **Q194** ototoxic drug | `entep-ear-30` — same key, *Amikacin* | every distractor differs, and endpoint's list includes **aspirin**, which changes the question |

**Stage F's 1.00 on Q185 is the ≤3-character blind spot inverted.** The filter keeps only tokens of
four characters or more, so *CHL / SNHL / Mixed* reduces to the single token **mixed** — and every
question using that option set scores a perfect match against every other. **A 1.00 from a
three-option abbreviation set is noise, not evidence.** Ch.1 recorded the same filter scoring **0**;
this is the other half of it.

#### The bank prints the same fact twice in one chapter, and both printings are held

**Q186** (*commonest SNHL in **elderly people***) and **Q191** (*commonest SNHL **in general***) carry
an **identical option list and an identical key** — presbyacusis. Only the stem qualifier differs.
Both are printed, so both are held, and each names the other. **This is not a within-bank reprint**:
a reprint is the *same* question printed twice, and these ask two different questions that happen to
share an answer.

#### ⚠️ A cross-bank disagreement on a fact, not a key defect

**Q189 — the commonest cause of SNHL in children.** Grade Gain keys **hereditary factors** over
congenital infection, ototoxicity and noise. **The endpoint bank keys a meningitic cause twice**:
`entep-ear-154` (p.534) offers *Heredofamilial* among its options and keys **meningitis**, and
`entep-ear-238` (p.712) keys **post-meningitic**.

Neither bank is mis-keying itself, so **neither entry is altered**. The reconciliation written into
`entqb-ear7-189` is that hereditary causes dominate loss **present from birth**, while meningitis is
the commonest **acquired, post-natal** deafness in a previously hearing child — and the stem decides
which is being asked. **Added to §11's review roster as a cross-bank divergence**, a new category
there: it is not a disputed key (nothing contradicts itself) but it is the kind of thing a lecturer
will settle in one sentence.

`L19.1) hearing loss.pdf` supports the Grade Gain key indirectly — it lists SNHL causes with
*"Congenital: **consanguinity** or perinatal"* first, and consanguinity is a genetic mechanism.

#### One stem repaired, one image cut

**Q180** is printed as *"The earliest manifestation of the following tumor is"* — a fragment above a
photograph. Rewritten to *"…of the tumour shown in the photograph below"* so it survives the shuffle.
**The picture itself is not described in the stem**, deliberately: naming it as vascular would hand
over the answer, which is why the entry carries `imgEssential:true`.

**`q-gg-30.jpg`** (350×330, 22.1 KB). **It is the same photograph the bank printed at ch.6 Q173** —
but the two questions are different (*discharge* there, *earliest symptom* here), so it was cut again
under its own page number rather than reusing `q-gg-27c`. **The filename is a citation; reusing one
across pages would make it lie.** Two crops: the first caught the stem line above and was moved down.

#### ⚠️ SIX PAGE CITATIONS WERE WRITTEN FROM MEMORY AND ALL SIX WERE WRONG

Cross-references to endpoint entries were drafted with page numbers recalled rather than read —
`entep-ear-154` cited as p.630 (really **534**), `entep-ear-84` as p.396 (**382**), `entep-ear-77` as
p.372 (**364**), `entep-enr-3` as p.2907 (**2844**), `entep-ear-30` as p.140 (**202**),
`entep-ear-83` as p.400 (**380**). Caught before the splice by grepping each id's own `source` field.

**⚠️ NEVER WRITE A PAGE NUMBER FOR A CROSS-REFERENCED ENTRY WITHOUT READING THAT ENTRY'S `source`.**
A wrong page is invisible to every automated check in the project — the id resolves, the entry
exists, the app boots — and it sends the reader to the wrong page of a 3,074-page file. The
one-line check is:

```bash
grep -A25 "id:'<id>'," questions.ent.js | grep -m1 -o "source:'[^']\{0,60\}"
```

#### ⚠️ AND THE AUTHORED MARKER WAS PUT IN THE WRONG FIELD

All twelve authored explanations opened with the marker in **`source`** instead of ending the
**`explanation`** with it, which is what `CLAUDE.md` §4 requires and what ch.1–6 did. The harness
caught it as a **flat count**: *"entries carrying an authored marker: 596 of 898"* — the same 596 as
before eighteen entries were added. **A counter that does not move is a finding.** Moved into the
explanations; the count went 596 → 608.

The same check then found **one older entry with the same defect** — `entqb-ear3-53`, whose marker
sat only in its `source`. Fixed in the same pass; final count **609 of 898**.

#### Explanations: 6 printed, 12 authored

**~33 % printed — the lowest Grade Gain rate since ch.4** (ch.1 ~45 %, ch.2 45 %, ch.3 ~46 %,
ch.4 ~35 %, ch.5 ~57 %, ch.6 ~59 %). Running Grade Gain figure: **89 of 196 printings, ~45 %**.
Where the bank does print a box here it is often **lifted from the lecture slide** — Q196's treatment
list reproduces `L19.1) hearing loss.pdf` almost word for word, and Q195's severity statement is the
slide's own definition.

#### The chapter is unusually well grounded

`L19.1) hearing loss.pdf` and `L19.2) Tinnitus.pdf` between them cover **the severity scale
(normal <20, mild 20–40, moderate 40–60, severe 60–90, profound 90–110, total >110 dB), the
definition of deafness, the full conductive and sensorineural cause lists, the pressure-transformer
figures, idiopathic sudden hearing loss and its intratympanic treatment, the tinnitus type list and
the instruction to image a unilateral tinnitus.** Only three points needed general knowledge:
**"malleoincus dislocation" as a term** (the mechanism, ossicular discontinuity, *is* on the slide),
**otosclerosis's clinical portrait** — paracusis Willisii, Schwartze's sign, Carhart's notch, none of
which any cached slide names — and the **proportions** behind the childhood-SNHL answer.

#### Verified in a real `file://` boot

`parse errors: none`; `Q_ENT` **816** / `C_ENT` **82** / total **898**; `MODULES chapters: 104`;
0 bad chapter refs, 0 duplicate ids, every answer in range, nothing missing a source, explanation or
objective; **0 dead backticked ids**; **36 of 36 question images loading**; mojibake scan clean.
By bank **697 endpoint / 21 house / 192 gradegain** = 910 over 898 — **twelve** shared memberships
across **eleven** questions, unchanged. Grade Gain's 192 = **181 origin + 11 `alsoIn`**.

**Reconciles:** ch.1 29 (25 + 4) + ch.2 20 (20 + 0) + ch.3 41 (38 + 3) + ch.4 31 (27 + 4) +
ch.5 35 (34 + 1) + ch.6 22 (19 + 3) + ch.7 18 (18 + 0) = **196 printed, 181 written, 15 folded** —
**11 cross-bank `alsoIn`** and **4 within-bank reprints held once**.

**Next: Ear ch.8, "Audiological Investigations", book p.33 onward (PDF 42 onward), opens at Q197.**
Q205 prints a pure-tone audiogram that will need cutting.

---

### §14h — Grade Gain, Ear chapter 8: "Audiological Investigations" (2026-08-10)

**Book pp.33–37 (PDF 42–46); answers book pp.38–39 (PDF 47–48).**
**39 printed, Q197 … Q235. 35 written (`entqb-ear8-197` … `entqb-ear8-235`, gaps at 225, 227, 228,
229), 4 folded.** All 35 in `ent-audio` — **the largest single-chapter batch of the Grade Gain run.**

#### 39 against 38 promised — six chapters over, seven page ranges right

Chapter 9 (*Vertigo and vestibular diagnosis*) opens at **Q236 on book p.40**, verified by rendering.
Running record: **29/29 ✓, 20/20 ✓, 41/40, 31/30, 35/24, 22/21, 18/17, 39/38.** The map's **page
ranges have now been correct eight chapters running**; its counts have been wrong six times, always
upward. **Trust it for *where*, never for *how many*.**

#### Four folds — three cross-bank, one within-bank

| Printed | Verdict | Where it went |
|---|---|---|
| **Q225** 3-year-old, severe SNHL, hearing aid failed | **cross-bank reprint** of `entep-ear-121` (p.468) — same stem, *Mastoidectomy* **dropped** | `alsoIn:['gradegain']` |
| **Q227** cochlear implant is indicated in | **cross-bank reprint** of `entep-ear-83` (p.380) — identical option set bar abbreviations | `alsoIn:['gradegain']` |
| **Q228** newborn, two failed OAE screens | **cross-bank reprint** of `entep-enr-4` (p.2846) — same four options | `alsoIn:['gradegain']` |
| **Q229** malleoincus dislocation → type of loss | **within-bank reprint** of ch.7 `entqb-ear7-185` — same three options spelled out, a fourth **added** | note added, **no `alsoIn`** |

**Two of the three cross-bank folds carry an explanation the endpoint printing lacks**, and one of
them **retires a tag**: `entep-ear-121` said the urgency of implanting a young child was *"not taken
from the course material"* — Grade Gain's box states it outright, *"preferably before the age of 5
years (before maturation of the auditory cortex)"*, so the claim is now sourced and the tag was
removed. **A fold can convert authored text into transcribed text; check for that every time.**

**Running fold record: 4/29, 0/20, 3/41, 4/31, 1/35, 3/22, 0/18, 4/39.** Still no trend.

#### Seven figures printed — and an eighth that is missing

| Question | Figure | File |
|---|---|---|
| Q205 | audiogram, air-bone gap on a normal bone line | `q-gg-33.jpg` |
| Q206 | audiogram, low-frequency SNHL | `q-gg-34a.jpg` |
| Q207 | audiogram, high-frequency SNHL | `q-gg-34b.jpg` |
| Q209 | audiogram, 4 kHz notch | `q-gg-34c.jpg` |
| Q210 | tympanogram, type B | `q-gg-34d.jpg` |
| Q211 | audiogram, mixed loss | `q-gg-35a.jpg` |
| Q212 | tympanogram, type As | `q-gg-35b.jpg` |
| Q218 | tympanogram, type C | `q-gg-36.jpg` |

**All eight are `imgEssential` — every stem reads *"the following …"* and none is answerable without
the picture.** Five of the eight needed a second cut, and **every failure was the same failure**: a
line of stem text above or an option line below. **Audiograms and tympanograms sit tight against the
text, unlike the photographs of ch.4 and ch.6 that float in white space** — so the ch.4 lesson
("white space means right first time") does not transfer here.

**⚠️ The `imgAlt` captions name the modality and the ear and nothing else** — *"Pure-tone audiogram
of the left ear, air and bone conduction plotted"*. Naming the **shape** would answer Q206, Q207 and
Q209 outright, and naming the **type letter** would answer Q210, Q212 and Q218. The type letter is
printed **inside** the tympanogram images by the source, which is the bank's choice, not ours.

**⚠️ Q235 REFERS TO A PURE-TONE AUDIOGRAM THAT IS NOT PRINTED.** Book p.37 ends after option c —
verified by rendering the foot of the page at 200 dpi, not inferred from the page image. **Second
dangling figure in this bank** after ch.3 Q88. The answer box names the disease (*"the pattern of PTA
is suggestive of otosclerosis"*), so the stem was repaired from the box to *"A pure-tone audiogram
shows the pattern of otosclerosis…"*.

**⚠️ THAT REPAIR HAS A COST AND IT IS RECORDED HERE RATHER THAN HIDDEN.** Naming the disease makes
Q235 a near-twin of ch.7 `entqb-ear7-188` (*"the primary type of hearing loss in otosclerosis"*). The
two are held separately because their **third option differs — Central there, Mixed here** — and the
Mixed option is exactly the point Q235's own box makes (*"rarely mixed"*). But the similarity is an
artefact of the missing figure, not of the bank.

#### ⚠️ A DIVERGENCE AGAINST THE LECTURE SLIDE, IN THE ENDPOINT BANK'S FAVOUR — no, against it

**Q223** asks the Rinne, Weber **and Schwabach** in a right conductive loss, and keys *Rinne negative,
lateralises right, **Schwabach prolonged***. `L13,14) AudioVestibulae Evaluation.pdf` states exactly
that: *"Pt > Ex (**Prolonged** Schwabach) → **Conductive HL**"*.

**`entep-ear-185` (p.596) presents a conductive ear with a "normal Schwabach test."** Its key
(conductive) is right, and the Rinne and Weber in its stem settle it without the Schwabach — but the
**Schwabach value in its stem does not match the Alexandria slide.** Neither entry was altered; the
divergence is added to §11 item 7b. **This is the first divergence found by transcribing a NEW bank
and re-reading an OLD entry against the slide** — worth remembering as a way these get caught.

#### The best-grounded chapter of the whole Grade Gain run

`L13,14) AudioVestibulae Evaluation.pdf` covers, almost question for question: the **Rinne, Weber and
Schwabach** tables; **PTA at 250–8000 Hz in octave intervals**; the **20–20,000 Hz** range of hearing
and the rationale for the decibel; the **four audiogram patterns** including the two labelled *"Low
frequency SNHL"* and *"High frequency SNHL"* that Q206 and Q207 print; **SRT and SDS** with the
excellent/good/poor rule and the sentence about hearing-aid benefit; the **five tympanogram
patterns**; **ABR** and its indication list naming *newborns, infants, mental retardation and
malingerers*; and **OAE** as *ideal for neonatal screening*. `L19.1) hearing loss.pdf` supplies the
acoustic-reflex pair (**absent in CHL, impaired in SNHL**) and `L22) Anatomy of Ear Undergraduate.pdf`
the **stapedius → VII, tensor tympani → V** innervations.

**Four points needed general knowledge and are tagged in place:** the **4 kHz notch** of acoustic
trauma, the **acoustic reflex arc** beyond its two nerves, **canal volume** as the discriminator
between a type B effusion and a type B perforation, and **congenital cholesteatoma**. All four are
added to §11's material-gap list.

#### Explanations: 15 printed, 20 authored

**~38 % printed.** Running Grade Gain figure: **104 of 235 printings, ~44 %**. Two printed boxes have
defects recorded rather than silently repaired: **Q213's box stops mid-phrase** at *"Impaired reflex
e.g. Sensorineural Hearing"* — completed from `L19.1`, with the truncation noted — and **Q228's box
writes "optoacoustic" for otoacoustic**. Q228's third option also reads **"Tympanometry and APT"**
where the endpoint printing reads **"PTA"**; the letters are transposed and the key is unaffected.

#### Verified in a real `file://` boot

`parse errors: none`; `Q_ENT` **851** / `C_ENT` **82** / total **933**; `MODULES chapters: 104`;
0 bad chapter refs, 0 duplicate ids, every answer in range, nothing missing a source, explanation or
objective; **0 dead backticked ids**; **44 of 44 question images loading**; mojibake scan clean.
By bank **697 endpoint / 21 house / 230 gradegain** = 948 over 933 — **fifteen** shared memberships
across **fourteen** questions. Grade Gain's 230 = **216 origin + 14 `alsoIn`**.

**Every cross-referenced page number in this batch was read out of the target entry's own `source`
field before being written** — the discipline §14g had to learn the hard way. Two were wrong on the
first draft (`entep-ear-67` and `entep-ear-48`) and both were corrected before the splice.

**Reconciles:** ch.1 29 (25 + 4) + ch.2 20 (20 + 0) + ch.3 41 (38 + 3) + ch.4 31 (27 + 4) +
ch.5 35 (34 + 1) + ch.6 22 (19 + 3) + ch.7 18 (18 + 0) + ch.8 39 (35 + 4) = **235 printed,
216 written, 19 folded** — **14 cross-bank `alsoIn`** and **5 within-bank reprints held once**.

**Next: Ear ch.9, "Vertigo and vestibular diagnosis", book pp.40–43 (PDF 49–52), 25 promised, opens
at Q236.** That closes the Ear section; Nose ch.1 begins at book p.44.

---

### §14i — Grade Gain, Ear chapter 9: "Vertigo and vestibular diagnosis" (2026-08-10) — **CLOSES THE EAR SECTION**

**Book pp.40–42 (PDF 49–51); answers book p.43 (PDF 52), all on one page.**
**26 printed, Q236 … Q261. 25 written (`entqb-ear9-236` … `entqb-ear9-261`, gap at 250), 1 folded.**
All 25 in `ent-vertigo`.

#### ⚠️⚠️ THE NUMBERING RESTARTS AT THE SECTION BOUNDARY, NOT AT THE CHAPTER

This is the single structural finding of the batch and it changes the id scheme for everything that
remains. The Ear section ran **one continuous sequence, Q1 … Q261, across nine chapters**. Book
**p.44 opens `CHAPTER 2: NOSE — Anatomy of the nose — Questions — 1.`** — verified by rendering PDF
p.53, not inferred. So the continuous run was a property of the **section**, and Nose begins again
at **1**.

**⚠️ THE RUNNING HEADER HAD BEEN SAYING SO ALL ALONG, AND IT WAS MISREAD FOR NINE CHAPTERS.** Book
p.42 heads **`Chapter 1: Vertigo and Vestibular diagnosis`** — the *number* is the **section** (1 =
Ear) and the *title* is the topic. Earlier notes recorded this as *"the header says Chapter 1 on
every page"* and treated the constant `1` as a defect of the header. **It is not a defect: `1` is
correct on every Ear page, because the whole Ear section is Chapter 1.** What the contents page calls
"chapters" are topics inside a section. Once read that way, the continuous numbering and its restart
at Nose stop being surprises and become the obvious consequence — **the book has three chapters, not
twenty-nine.**

**Consequence: a Nose id of `entqb-nose-1` would collide with nothing today, but `entqb-1` or any
scheme that trusts the printed number as globally unique would collide immediately.** Ear ids already
carry a chapter token (`entqb-ear9-236`), so the fix is only to keep doing that — **the section token
is now load-bearing, not cosmetic.** Nose ids take the form `entqb-nose<ch>-<printed n>`.

**⚠️ Do not assume the Nose section is one continuous run either.** The Ear section's behaviour was
discovered chapter by chapter and was wrong-footed twice before it settled. Read the first two
chapters' opening numbers before committing to a scheme.

#### 26 against 25 promised — seven chapters over, eight page ranges right

Running record: **29/29 ✓, 20/20 ✓, 41/40, 31/30, 35/24, 22/21, 18/17, 39/38, 26/25.** The contents
map's **page ranges have now been correct nine chapters running — every chapter of the Ear section**;
its **counts have been wrong seven times, always upward.** The rule stands unchanged and is now
proven over a whole section: **trust the map for *where*, never for *how many*.**

#### The answer block did NOT overlap here

All 26 questions sit on pp.40–42 and the whole key sits on p.43 alone — the cleanest layout of the
run. Ch.4 and ch.6 shared a page between a question tail and the answer block and it cost four
questions the first time; ch.7, ch.8 and now ch.9 did not. **It remains a property of the page, so it
is checked every chapter regardless.**

#### One fold — and it is the bank reprinting itself

**Q250 → `entqb-ear7-181`** (ch.7, `ent-hearing`). Both print *unilateral SNHL or unilateral tinnitus
→ next step*, with the same three options reworded (*to exclude vestibular schwannoma* for *to rule
out CPA tumors*) and a **fourth option, tympanometry, added**. By the settled test **an added
distractor is a reprint, a replaced one is a new question**, so the two are held once. **A within-bank
reprint takes no `alsoIn`** — that field names *other banks* only.

**⚠️ THE FOLD CONVERTED AUTHORED TEXT INTO SOURCED TEXT, AND THE MARKER HAD TO COME OFF.**
`entqb-ear7-181` carried `Written for this bank — ENT QB prints no explanation here.` because ch.7
printed no box. **Ch.9's printing of the same question DOES print one** — *"Any patient with
unilateral otologic symptom → suspect Vestibular schwannoma"* — so the marker was removed and the
sentence quoted into the explanation. This is the **second** time a fold has done this (ch.8 did it to
`entep-ear-121`'s 5-year implant window). **Check for it on every fold: the held entry's provenance
can change even though its text barely does.**

That single removal is also why the authored-marker counter moved by **20** across **21** newly
authored entries. **A counter that does not move by the expected amount is a finding** — it was
chased to its cause rather than accepted.

#### Two stems repaired, and one is a defect of a kind not seen before

- **Q243 and Q244** both open *"In the previous case…"* — the linked-set problem, fatal here because
  `data\questions.js` **shuffles the deck**. Both were repaired to name **BPPV** explicitly from Q242,
  which the answer key confirms.
- **⚠️ Q245 PRINTS TWO QUESTIONS IN ONE STEM.** It reads *"…what is the most probable cause? The
  pathology of the previous disease is characterized by which of the following?"* — and **the four
  options answer only the second.** The first question is left with no options at all. The printed
  box (*"The case is Meniere disease"*) supplies the missing answer, so the entry was repaired to ask
  the pathology question and the diagnosis is carried in the explanation. **This is a new defect
  category: not a linked set, but a set collapsed into one stem with only one option list.**

#### Two printed defects recorded rather than silently corrected

- **Q251's stem writes "discrimation" for discrimination.**
- **Q260's printed box writes "betahestine" for betahistine.**

Both are transcription-level typos in the source, corrected in the entry with the printing recorded in
`source`, per `CLAUDE.md` §4.

#### Q256 prints only three options

*"All of the following are causes of vertigo and nystagmus without hearing loss except"* — three
options where every neighbour prints four. Held as printed; the schema allows 2–5. **Not a truncation:
book p.42 was re-rendered at 200 dpi and read — Q256 ends at `c. BPPV` with the rest of the column
blank, and the page's lower third is empty white space.** The same render is what settled the header
question above.

#### No figures

The chapter prints none — the first Grade Gain chapter since ch.7 with nothing to cut. The image
count therefore stays at **44**.

#### Four material gaps answered from general knowledge and tagged

The **caloric test and COWS** (the slides name the test but not the direction rule), the **posterior
canal** as the commonest site in BPPV, the **lateral canal** as the commonest site of a
cholesteatoma-induced fistula, and the **Tullio phenomenon** beyond the printed box's two-line list.
All four are tagged in place and added to §11's material-gap list.

#### The chapter is well grounded where the slides reach

`L20) vertigo.pdf` supplies the **terminology separation** (disequilibrium / dizziness / syncope and
pre-syncope / ataxia / vertigo), the **central causes** list — cerebellar lesions, MS, vertiginous
epilepsy, VBI, lateral medullary syndrome, migraine-associated vertigo — and the **peripheral** set
including BPPV, vestibular neuritis, labyrinthitis and Ménière's. `L13,14) AudioVestibulae
Evaluation.pdf` supplies *"Vertigo is Vestibular"*, the instruction to make the patient **describe the
sensation rather than say "dizzy"**, and the figure that **history alone gives a provisional diagnosis
in 80 % of cases** — which is what makes Q259 (*"the first step to diagnose vertigo is"* → **History**)
a slide-backed question rather than a truism.

#### Explanations: 5 printed, 21 authored

**~19 % printed — the thinnest chapter of the Grade Gain run.** Running Grade Gain figure:
**109 of 261 printings, ~42 %.**

#### Verified in a real `file://` boot

`parse errors: none`; `Q_ENT` **876** / `C_ENT` **82** / total **958**; `MODULES chapters: 104`;
0 bad chapter refs, 0 duplicate ids, every answer in range, nothing missing a source, explanation or
objective; **0 dead backticked ids**; **44 of 44 question images loading**; mojibake scan clean.
By bank **697 endpoint / 21 house / 255 gradegain** = 973 over 958 — **fifteen** shared memberships
across **fourteen** questions. Grade Gain's 255 = **241 origin + 14 `alsoIn`**.

#### ⚠️ THE FILE WOULD NOT PARSE, AND THE APP DID NOT SAY SO

The first validation run reported `Q_ENT: 0` and the harness's only message was **`Script error.
@line 0:0`** — the whole of `Q_ENT` gone, the app still booting, nothing thrown that named a file or a
line. **Over `file://` a syntax error in a cross-origin script is redacted to exactly that.** The
cause was one entry's explanation quoting the slide's phrase **`the word 'Dizzy'`** inside a
single-quoted JS string, with the apostrophes unescaped — every other apostrophe on the same line was
escaped correctly, which is why it read as fine.

**The diagnosis method, which is the reusable part:** inline the whole data file into a scratchpad
`<script>` tag in a local HTML page. Same-origin, so the browser reports the real message —
`Uncaught SyntaxError: Unexpected identifier 'Dizzy' @line 7823 col 644` — and subtracting the
harness's own preamble gives the line in the data file. **This is the third time a data-file syntax
slip has presented as a content failure** (§11 records the missing comma of 2026-08-04). It is now the
first thing to check whenever a count collapses to the cases alone.

**Every cross-referenced page number in this batch was read out of the target entry's own `source`
field before being written** — §14g's lesson, applied for the third batch running.

**Reconciles:** ch.1 29 (25 + 4) + ch.2 20 (20 + 0) + ch.3 41 (38 + 3) + ch.4 31 (27 + 4) +
ch.5 35 (34 + 1) + ch.6 22 (19 + 3) + ch.7 18 (18 + 0) + ch.8 39 (35 + 4) + ch.9 26 (25 + 1) =
**261 printed, 241 written, 20 folded** — **14 cross-bank `alsoIn`** and **6 within-bank reprints held
once**. **That is the whole Ear section: the contents page promised 244, the pages printed 261.**

**Next: the NOSE section. Nose ch.1, "Anatomy of the nose", book p.44 (PDF 53), 46 promised,
questions p.44 and answers p.48 — and it opens at Q1 again.** Nose holds 9 chapters (258 promised),
Throat 11 (578 promised).

---

### §14j — Grade Gain, NOSE chapter 1: "Anatomy of the nose" (2026-08-10) — **OPENS THE NOSE SECTION**

**Book pp.44–48 (PDF 53–57); answers book pp.48–49 (PDF 57–58).**
**46 printed, Q1 … Q46. 44 written (`entqb-nose1-1` … `entqb-nose1-45`, gaps at 8 and 46), 2 folded.**
Chapters: `ent-noseanat` 28, `ent-nasalobs` 10, `ent-epistaxis` 3, `ent-pharanat` 2, `ent-sinusitis` 1.

#### ✅ The numbering restarted at 1, exactly as §14i predicted

Book p.44 heads **`CHAPTER 2: NOSE`** and its first question is numbered **1**. The running header on
pp.45–49 then reads **`Chapter 2: Anatomy of the Nose`** — **number = section, title = topic**,
confirming the correction §14i made to the nine-chapter misreading. Ids therefore carry a section
token (`entqb-nose1-…`) and cannot collide with the Ear run.

**⚠️ Still unverified for Nose: whether the section is ONE continuous run like Ear.** Ear ran Q1–Q261
across nine topics. Nose ch.2 must be checked at its first question before its ids are chosen — if it
opens at 47 the section is continuous, if at 1 the restart is per topic.

#### ✅ 46 against 46 promised — the contents page is right for the first time since Ear ch.2

Running record: **29/29 ✓, 20/20 ✓, 41/40, 31/30, 35/24, 22/21, 18/17, 39/38, 26/25, 46/46 ✓.** Page
ranges now correct **ten** chapters running; counts wrong seven times, always upward — **and right
three times.** The rule is unchanged: trust the map for *where*, count what is printed for *how many*.

#### ⚠️ The answer block overlapped again — and it cost six questions' worth of reading

Book **p.48 carries Q41–Q46 in the left column and "Anatomy of nose / Answers" beginning in the
right.** Stopping at the TOC's "Page As" would have dropped six questions, including the whole
definitive-treatment and orbital-complication pair. Ch.4 and ch.6 of Ear did this, ch.7–9 did not, and
now the first Nose chapter does. **It remains a property of the page; check every chapter.**

#### Two folds, both cross-bank, both into endpoint

| Grade Gain | Folded into | Why |
|---|---|---|
| **Q8** *"All of the following open into the middle meatus except"* | **`entep-nose-21`** (p.931) | same stem, same four sinuses, same key — only *Anterior ethmoidal sinus* for *Anterior ethmoid* |
| **Q46** *"Orbit complications can occur through which of the following sinuses?"* | **`entep-nose-34`** (p.965) | same four sinuses, same key, same question |

Both gained `alsoIn:['gradegain']`. Grade Gain's memberships are now **285 origin + 16 `alsoIn`**.

**⚠️ STAGE F FOUND Q8; STAGE B DID NOT.** The two option sets differ only by the four characters
*"al sinus"* on one option, so exact-set matching missed it and it surfaced only in the option-token
ranking at **0.71**. This is the abbreviated-versus-spelled-out blind spot §7 records, hitting for the
third time. **Stage F is not optional.**

#### ⚠️ Two option lists contain TWO correct answers — a new defect category

Neither is a mis-key: in both cases the printed key is itself right, and the **option list** is what is
defective. Recorded rather than corrected, because correcting a key that is not wrong would hide the
real fault.

- **Q11** *"All of the following form the bony septum except"* — options run vomer / perpendicular
  plate / **nasal bone** / **cribriform plate**, keyed to the cribriform. But the lecture's own septum
  is *"perpendicular plate of ethmoids, Vomer bone"* (`L23) Anatomy of the Nose.pdf`) — **the nasal
  bone is not septal either.** Endpoint asks the same fact with *quadrangular cartilage* in that slot
  (`entep-nose-22`), which leaves exactly one exception; replacing it is what created the ambiguity.
- **Q19** *"__________ are the posterior group of sinuses"* — offers **posterior ethmoid** and
  **sphenoid** and keys the sphenoid. On the slide's own map the posterior group is **both of them**.

**This is distinct from the eight disputed keys in §11.** There the bank contradicts a source or
itself; here the bank's answer is correct and its question is unanswerable as set.

#### ⚠️ A third defect of the same family: a key that drops its own discriminator

**Q29** (sneeze reflex arc) offers *"Afferent: Trigeminal **(V1)**, Efferent: Vagus"* and *"Afferent:
Trigeminal **(V2)**, Efferent: Vagus"* — identical but for the division. **The printed key reads
"A. Afferent: Trigeminal, Efferent: Vagus nerve", omitting the qualifier that separates them.** The
key names the right option letter, so the entry is unambiguous; but a learner checking the answer text
alone cannot tell which was meant. The V1 reasoning — the sneeze afferent is the **anterior ethmoidal
nerve**, a nasociliary branch of V1 — is supplied in the explanation and tagged as outside the
material.

#### Printed transcription defects, recorded not silently repaired

- **Q45's stem prints its number twice** — *"45.45.Pus collected…"*.
- **Q36's key prints its number twice** — *"36.36.Correct answer B."*
- **Q25's key is a bare "B."** with no option text beside it, the only such key in the chapter.
- **Q16's option d reads "Supereior ethmoidal cell"** — the chapter's only spelling defect.
- **Q22 and Q42 print only THREE options.**

#### One stem repaired, one figure block cut

**Q40** opens *"In the previous case…"* and is repaired to name bilateral choanal atresia, because the
deck is shuffled. **Q39 prints two figures** — a nasal endoscopy labelled MT / IT / S above an axial
CT — cropped together as **`q-gg-47.jpg`** (560×691, 101 KB) in the stacked order the page prints
them, since the schema holds one `image` per entry and the page's own layout is a single column.
**The crop was right first time**, because both figures sit clear of the text with white space around
them — the ch.4/ch.6 situation, not ch.8's. Image count **44 → 45**.

**The caption names modality and view only** — *"Nasal endoscopy with septum and turbinates labelled,
above an axial CT of the nose and skull base"*. **`imgEssential` is NOT set**: the stem alone
(3-hour neonate, cyanosis worse when not crying, feeding difficulty) is fully diagnostic.

#### ⚠️ A cross-bank difference of MENUS, not of medicine

**Q40** asks the immediate management of bilateral choanal atresia and keys **intubation with
orogastric feeding**. Endpoint's `entep-mfe4-31` asks the same decision and keys **oropharyngeal
airway placement**. The lecture settles it: *"Bilateral: creating oral airway — 1. Mcgovern nipple
2. Oral airway 3. intubation"* (`L23`). **Grade Gain's option list simply does not offer the first two
rungs of that ladder**, so its key is the best of what it prints. Recorded in both entries so the
concept is not learnt as "intubation". **This is NOT a cross-bank divergence in the §11 sense** — the
banks agree on the medicine and differ only in what they offer.

#### The best-grounded chapter of the Grade Gain run so far

`L23) Anatomy of the Nose.pdf` carries an unusual amount of this chapter directly: the **roof and
floor**, the **four-line drainage map**, the **two-line bony/cartilaginous septum**, **Kiesselbach's
four arteries** and Woodruff's plexus, the **three interior areas and their linings**, the **ordered
function list**, and then the whole choanal-atresia block — *"most common congenital nasal anomaly"*,
**1 in 7,000–10,000**, **2:1 unilateral:bilateral**, **F > M**, right-sided predominance, **6 %
chromosomal anomalies**, the **CHARGE** acronym in full, **obligate nasal breathing for 6–8 weeks**,
*"cyclical cyanosis alleviated by crying"*, the **CT** investigation, the **oral-airway ladder**, the
three surgical approaches, delayed unilateral repair to reduce **restenosis**, and **CNPAS** as the
mimic. `L25.1) epistaxis.pdf` supplies the rest of the vascular content plus *"Idiopathic"* and
*"Severe + elderly patient = hypertension"*, which key Q23 and Q24 outright.

**Five points needed general knowledge and are tagged in place:** the **lymphatic drainage** of the
nasal cavity (absent from all nine cached nose files), the **venous route to the cavernous sinus**,
the **osteomeatal complex's component list** (agger nasi, bulla, uncinate, hiatus semilunaris,
infundibulum, lamina papyracea), the **sneeze reflex arc**, and the **tongue's four-nerve table**.
All five are added to §11's material-gap list.

#### Explanations: 6 printed, 38 authored

**~13 % printed — thinner than Ear ch.9.** Running Grade Gain figure: **115 of 307 printings, ~37 %.**
Boxes at Q1, Q2, Q10, Q12, Q18 and Q22.

#### ⚠️ THE MARKER COUNT WAS 15 SHORT, AND THAT IS HOW A WHOLE BLOCK WAS CAUGHT

The first validation gave **674 markers** where **689** was owed. Chasing the arithmetic found the
marker missing from **Q11, Q15, Q19 and the entire twelve-entry block Q34–Q45** — a block written in
one pass in which the closing marker was simply never typed. Nothing else in the run would have caught
it: every entry parsed, cited, and read correctly, and the app rendered them without complaint. **The
only signal was a counter that did not move by the expected amount.** Fixed by appending the marker to
all fifteen; the count now reconciles exactly as 38 authored + 6 printed = 44.

**This is the third time the marker counter has caught real damage** (§14g put the marker in the wrong
field, §14i found a fold converting authored text to sourced). **Compute the expected delta before
looking at the actual one.**

#### ⚠️ And the dead-id check caught a forward reference again

`entqb-nose1-4`'s explanation cited **`entqb-nose1-8`** in backticks — an id that was folded and
therefore never written. Rewritten to name the fold's destination (`entep-nose-21`). §14i's rule
holds: **never backtick an id that does not exist yet, and re-check after every fold.**

#### Verified in a real `file://` boot

`parse errors: none`; `Q_ENT` **920** / `C_ENT` **82** / total **1002**; `MODULES chapters: 104`;
0 bad chapter refs, 0 duplicate ids, every answer in range, nothing missing a source, explanation or
objective; **0 dead backticked ids**; **45 of 45 question images loading**; mojibake scan clean.
By bank **697 endpoint / 21 house / 301 gradegain** = 1,019 over 1,002 — **seventeen** shared
memberships across **sixteen** questions. Grade Gain's 301 = **285 origin + 16 `alsoIn`**.

**Every cross-referenced page number in this batch was read out of the target entry's own `source`
field before being written**, and one lecture citation was caught the same way: the chorda tympani
material was first cited to `L21) facial nerve.pdf`, **which does not exist** — the file is
`L15) Facial nerve disorders.pdf`, confirmed by reading it before the citation was corrected.
**⚠️ A LECTURE FILENAME WRITTEN FROM MEMORY IS THE SAME TRAP AS A PAGE NUMBER.** List the directory.

**Reconciles:** Ear 261 (241 + 20) + Nose ch.1 46 (44 + 2) = **307 printed, 285 written, 22 folded** —
**16 cross-bank `alsoIn`** and **6 within-bank reprints held once**.

**Next: Nose ch.2, "Epistaxis and smell Disorders", book pp.50–52 (PDF 59–61), answers p.53 (PDF 62),
37 promised.** ⚠️ Check its first question's number before choosing ids — if it opens at **47** the
Nose section is one continuous run like Ear; if at **1**, the numbering restarts per topic here.

---

### §14k — Grade Gain, NOSE chapter 2: "Epistaxis and smell disorders" (2026-08-10)

**Book pp.50–53 (PDF 59–62); answers book pp.53–54 (PDF 62–63).**
**38 printed, Q47 … Q84. 34 written (`entqb-nose2-47` … `entqb-nose2-84`, gaps at 63, 64, 65, 66), 4 folded.**
Chapters: `ent-epistaxis` 26, `ent-noseanat` 3, `ent-nasalmass` 2, `ent-septum` 2, `ent-nasalobs` 1.

#### ✅ IT OPENS AT Q47 — THE NOSE SECTION IS ONE CONTINUOUS RUN

This settles the question §14j left open. Nose ch.1 ran **Q1–Q46**; ch.2 resumes at **47**, not at 1.
So the numbering restarts **only at a section boundary**, exactly as the Ear section behaved
(Q1–Q261 over nine topics). **Nose ch.1's ids stand and nothing needs rework.** The topic token in
`entqb-nose2-…` is kept for readability, not for uniqueness — the numbers alone could not collide.

**Projected: Nose should end near Q258+ and Throat should restart at 1.** Verify at the Throat
boundary (book p.87) rather than assuming.

#### 38 against 37 promised, and the answers overlapped a second time running

Running record: 29/29 ✓, 20/20 ✓, 41/40, 31/30, 35/24, 22/21, 18/17, 39/38, 26/25, 46/46 ✓, **38/37.**
Page ranges right **eleven** chapters running; counts wrong **eight** times, always upward.

**Book p.53 carries Q81–Q84 in the left column and the Answers heading in the right** — the same
overlap as Nose ch.1. **Two Nose chapters, two overlaps; the Ear section did it three times in nine.**

#### Four folds, all cross-bank into endpoint — and one is verbatim down to a typo

| Grade Gain | Folded into | Evidence |
|---|---|---|
| **Q63** *"…All of the following may be used to stop the bleeding EXCEPT"* | **`entep-nose-14`** (p.917) | same four options, same key |
| **Q64** *"Recurrence of this bleeding in the previous case may need"* | **`entep-nose-68`** (p.1063) | near-verbatim stem, same options and key |
| **Q65** *"The most common cause of epistaxis in children"* | **`entep-nose-61`** (p.1049) | **verbatim** |
| **Q66** *"The kiesselbach's plexus in the little area is formed by the following except"* | **`entep-nose-65`** (p.1057) | **verbatim, including the misspelling "shenopalatine" in option b** |

**⚠️ THE SHARED TYPO IS THE STRONGEST EVIDENCE YET THAT ONE BANK IS SET FROM THE OTHER.** Two banks
can independently ask the same fact; they do not independently misspell *sphenopalatine* the same way
in the same option slot. Worth remembering when judging future near-matches: **a shared defect is
stronger evidence than a shared answer.**

**⚠️ GRADE GAIN MERGES ENDPOINT'S TWO VIGNETTES.** Endpoint runs the same case twice — a **cardiac
50-year-old** asking what may *not* be used (`entep-nose-14`) and a **diabetic 60-year-old** asking
what ligation is needed (`entep-nose-68`). Grade Gain's Q63 asks the *first* question over the
*second* vignette. Neither the options nor the key changes, so the merge is cosmetic — but it is why
Q63's stem matches one entry and its content matches the other, and it is the sort of thing that makes
a stem-only comparison misleading.

Grade Gain's memberships are now **319 origin + 20 `alsoIn`**.

#### ⚠️ THE BANK CONTRADICTS ITSELF ON ADJACENT PAGES — and it is a difference of menus

**Q58** (p.50) asks the common cause of epistaxis in children and keys **nose picking**.
**Q65** (p.51) asks the most common cause of epistaxis in children and keys **idiopathic**.

**Neither option list contains the other's key** — Q58 offers no *idiopathic*, Q65 offers no *nose
picking* — so each keys the best it prints. The lecture supports both readings: *"Idiopathic"* heads
the aetiology slide, and the age table reads *"Children — foreign body, **nose picking**"*
(`L25.1) epistaxis.pdf`). Recorded in both entries with the instruction to **read the option list, not
your memory of the fact.**

**This is the same shape as §14j's choanal-atresia airway finding** — two correct answers separated by
what each question offers. **It is now a recognised category and should be looked for**, not treated as
a defect each time.

#### One more two-correct-answers option list, and a box that names a different entity

- **Q72** (hyperosmia + hyperacusis in a 25-year-old) keys **"Personality disorders"**, while its own
  printed box says *"Hyperosmia can be the 1st sign of **schizophrenia**"*. **Schizophrenia is a
  psychotic disorder, not a personality disorder.** The lecture lists *"Psychiatric conditions: for
  example, depression, hysteric conversion reactions, and schizophrenia"* among causes of smell
  dysfunction (`L25.2) smell.pdf`), so the option is best read as shorthand for *a psychiatric cause*.
  The keyed letter is the only defensible one in the list; recorded, not corrected.

#### One stem repaired

**Q64** opens *"Recurrence of this bleeding in the previous case"* — but it folded into
`entep-nose-68`, whose own stem already names the case, so no repair was needed in the app. Recorded
here because the linked-set pattern recurs and would have needed repair had the fold not absorbed it.

#### No figures

The chapter prints none; the image count stays at **45**.

#### The best-grounded chapter of the Nose section so far

`L25.1) epistaxis.pdf` carries nearly the whole epistaxis half: the **bimodal age distribution**, the
**anterior 90 % / posterior** split with its full comparison, **Little's area** with its four arteries
and its drying-and-finger-nail mechanism, **Woodruff's plexus** on the lateral wall behind the inferior
turbinate, the **bleeding areas** list including the ethmoidal vessels, the **four-part aetiology**
(idiopathic / local / systemic / environmental) with each category's contents, the **five prognostic
omens**, *"Severe + elderly patient = hypertension"*, and the **age table** — children, adults, middle
age, old age — which alone keys four separate questions.

`L25.2) smell.pdf` carries the smell half just as completely: the **conductive/sensorineural**
division in the slide's own words, the **six-term vocabulary table** (anosmia, hyposmia, hyperosmia,
dysosmia, parosmia, phantosmia), the **percentage cause table** (head injury 19 %, post-URI 17 %,
idiopathic-nasal 17, nasal/sinus 16 %), **psychiatric and epileptic** causes, the **10 %** shearing
figure in major head injury, the **Covid-19** figures (**50 %** sudden loss, **90 %** improved by six
weeks), the **AR-versus-Covid** table, the **investigation** list including *"Seizure history …… EEG"*,
and the **treatment** list ending *"oral steroids are contraindicated in the acute stage"*.

**⚠️ ONE TERM IS ABSENT FROM THE SLIDE AND WAS FILLED FROM ENDPOINT INSTEAD OF FROM GENERAL
KNOWLEDGE: CACOSMIA.** `L25.2` gives six terms and not this one. Endpoint's own printed box at
`entep-mfe5-17` supplies the clinically important split — a **true** (objective) cacosmia, smelt by
others too and implying a real source, against a **false** (subjective) one. **Using the other bank as
a source is preferable to tagging outside knowledge where the other bank actually prints it.**

**Six points needed general knowledge and are tagged in place:** the **three-part division of the
maxillary artery** by the lateral pterygoid and its branch table, the **24–12–6 rule** of the medial
orbital wall, the **retrocolumellar vein**, the **septal spur's stretch-and-dry mechanism**, the
**trigeminal common chemical sense** behind the ammonia test, and **hyperosmia's other causes**
(migraine, pregnancy, Addison's). All six are added to §11's material-gap list.

#### Explanations: 5 printed, 29 authored

**~13 % printed.** Boxes at Q59, Q61, Q62, Q72 and Q80. Running Grade Gain figure: **120 of 345
printings, ~35 %.**

#### ⚠️ THE MARKER COUNT WAS SIX SHORT — the second batch running

Expected 29 new markers, got 23. The missing six were **Q73, Q74, Q76, Q78, Q79 and Q83** — not a
contiguous block this time but scattered across all three writing blocks, every one an entry whose
explanation ended on a strong closing line that read as finished. **The failure mode is now clear: the
marker gets dropped when the last paragraph feels like an ending.** Computing the expected delta before
looking at the actual one caught it in both batches.

#### ⚠️ AND THE PARSE BROKE TWICE ON THE FOLD NOTES, BEFORE THE ENTRIES WERE EVEN WRITTEN

Three unescaped apostrophes — *endpoint's*, *entry's*, *Grade Gain's* in one note, and *the other's* in
another — inside single-quoted `source` strings. Same failure as §14i's *'Dizzy'*, and found the same
way: **inline the file into a scratchpad `<script>` for a real line and column.**

**⚠️ A NAIVE QUOTE-BALANCE SCAN OVER THIS FILE IS INVALID and was tried and discarded.** Counting
unescaped `'` per line and flagging odd counts returned **150 lines** on a file with exactly one
fault — because `stem:"…"` and `objective:"…"` are legitimately double-quoted and legitimately
contain apostrophes. **This is the same trap as the `/*` vs `*/` count in `CLAUDE.md` §6: the parse is
the verdict, a count is not.** The three blocks of entries written afterwards parsed **first time**,
because every apostrophe was escaped as it was typed.

#### Verified in a real `file://` boot

`parse errors: none`; `Q_ENT` **954** / `C_ENT` **82** / total **1,036**; `MODULES chapters: 104`;
0 bad chapter refs, 0 duplicate ids, every answer in range, nothing missing a source, explanation or
objective; **0 dead backticked ids**; **45 of 45 question images loading**; mojibake scan clean.
By bank **697 endpoint / 21 house / 339 gradegain** = 1,057 over 1,036 — **twenty-one** shared
memberships across **twenty** questions. Grade Gain's 339 = **319 origin + 20 `alsoIn`**.

**Reconciles:** Ear 261 (241 + 20) + Nose ch.1 46 (44 + 2) + Nose ch.2 38 (34 + 4) = **345 printed,
319 written, 26 folded** — **20 cross-bank `alsoIn`** and **6 within-bank reprints held once**.

**Next: Nose ch.3, "Rhinitis", book pp.55–60 (PDF 64–69), answers p.61 (PDF 70), 60 promised — the
largest Nose topic, and equal-fourth largest in the book behind Throat ch.4 (98), ch.10 (66) and
ch.8 (65).** It should open at **Q85**, and it is six question pages, so expect the count to run over.

**⚠️ The dedicated slides are `L29) Rhinitis 1.txt` and `L30) Rhinitis 2.txt`** — both cached, and
neither was in the list first written here, which had to be corrected by listing the directory.
`L27.1) ACUTE rhinosinusitis.txt`, `L27.2) Chronic Sinusitis.txt`, `L31) nasal symptoms 1.txt` and
`L32) nasal symptoms 2.txt` supplement them. **This is the second lecture-filename error in three
batches** (§14j cited a non-existent `L21) facial nerve.pdf`). **List `content\ent\lectures\` before
citing or planning — a filename from memory is as unreliable as a page number from memory.**

---

### §14l — Grade Gain, NOSE chapter 3: "Rhinitis" (2026-08-10)

**Book pp.55–60 (PDF 64–69); answers book pp.61–63 (PDF 70–72).**
**61 printed, Q85 … Q145. 56 written (`entqb-nose3-85` … `entqb-nose3-145`, gaps at 86, 106, 107,
123, 124), 5 folded.** Chapters: `ent-rhin` 45, `ent-sinusitis` 10, `ent-nasalobs` 1.

The chapter was **read, staged and swept in the previous session** and written in this one; the nine
page renders were never repeated. `content\ent\qb-pages\gg-nose-ch3.staged.js` holds all 61 verbatim.

#### ✅ THE RUNNING HEADER CONFIRMS THE SECTION FINDING A THIRD TIME

Book p.60 prints **`Chapter 2: Rhinitis`** in its running header. **The number is the SECTION (2 =
Nose) and the title is the TOPIC.** This is the same structure §14i established from the Ear pages
and is now confirmed on a Nose page, in a chapter the contents page calls number 3. **The book has
three chapters; the contents page lists twenty-nine topics.** Nothing about the header needs
interpreting again — but it is worth re-reading once at the Throat boundary (book p.87), where the
number should become 3 and the numbering should restart at 1.

#### 61 against 60 promised, and the answer block did NOT overlap

Running record: 29/29 ✓, 20/20 ✓, 41/40, 31/30, 35/24, 22/21, 18/17, 39/38, 26/25, 46/46 ✓, 38/37,
**61/60.** Page ranges right **twelve** chapters running; counts wrong **nine** times, always upward.

**Book p.61 is answers only** — the questions stop cleanly at the foot of p.60. **First Nose chapter
without the overlap**, after both ch.1 and ch.2 had it. The tally is now five of twelve chapters
overlapping, with no pattern: **it stays a property of the page, to be checked every time.**

#### Five folds, all verbatim, all cross-bank into endpoint

| Grade Gain | Folded into | Evidence |
|---|---|---|
| **Q86** seasonal obstruction + watery discharge + sneezing | **`entep-nose-5`** (p.899) | verbatim; its stem matches endpoint's **p.1067 reprint** wording, not the p.899 one |
| **Q106** features of atrophic rhinitis EXCEPT | **`entep-nose-16`** (p.921) | verbatim but for *"from nose"* / *"from the nose"* |
| **Q107** most effective medical treatment in nasal allergy | **`entep-nose-60`** (p.1047) | verbatim |
| **Q123** rhinitis medicamentosa | **`entep-nose-63`** (p.1053) | verbatim |
| **Q124** all true about scleroma EXCEPT | **`entep-nose-64`** (p.1055) | verbatim but for *"granulations in nose"* / *"in the nose"* |

Grade Gain's memberships are now **375 origin + 25 `alsoIn`**.

#### ⚠️ A FOLD CONVERTED AUTHORED TEXT INTO SOURCED TEXT — THE THIRD TIME, AND IT WAS PREDICTED

**`entep-nose-60` printed no box and carried the authored marker; Grade Gain's Q107 DOES print one**
— *"Antihistamines affect the first cascade of mast cells (early response). While corticosteroids
affect the late response and the early response… We usually use local corticosteroids to avoid side
effects."* **The marker was withdrawn and the box quoted into the closing paragraph.**

This is the first time the conversion was **caught during the sweep and written into the staged
file's header before any entry was touched**, rather than found afterwards. The two earlier cases
(§14h on `entep-ear-121`, §14i on `entqb-ear7-181`) were both discovered late. **Record the
conversion at sweep time — it is visible the moment the two printings are compared side by side.**

Its consequence for the counter is exact: **44 new authored markers minus 1 withdrawn = +43**,
718 → **761**. Computed before the check was run, and matched.

#### ⚠️ A THIRD OPTION LIST WITH TWO CORRECT ANSWERS — AND THE BANK REFUTES ITSELF NINETEEN QUESTIONS APART

**Q135** asks where **saddle nose deformity** occurs and keys **Wegener's granulomatosis** over a list
that also offers **syphilis**. **Q116**, in the same chapter, asks the cause of a **shrunken bridge
deformity** — the same lesion under another name — and keys **syphilis** over a list that does not
offer Wegener's.

**Both keys are individually defensible and the two questions cannot both be exclusive.** `L30)
Rhinitis 2.pdf` states that *"ulceration of the septum with crusting and saddle nose are common nasal
presentations"* of Wegener's and says nothing about the deformity under syphilis, so **Wegener's is
the only *sourced* answer and is what to pick when both appear.** Recorded, not corrected — the
printed key is right and the **question** is defective, exactly as with Nose ch.1's Q11 and Q19.

**This is now the third instance of the category and the first where the bank's own other printing is
the disproof.** Look for it: a bank that prints the same fact twice over different menus will
sometimes leave one menu holding two right answers.

#### ⚠️ ONE FLAGGED KEY — Q114, and it is a category of its own

**Q114** asks which allergic-rhinitis drug *"may affect the kidneys"* and keys **ipratropium
bromide**. **No option on the list is nephrotoxic.** The key is defensible only if read as *urinary
tract* rather than *renal*: ipratropium is an anticholinergic, and its labelled cautions are urinary
retention in bladder outflow obstruction and prostatic hypertrophy. **On the stricter reading — which
drug needs renal dose adjustment — the answer would be an antihistamine**, since cetirizine and
levocetirizine are excreted largely unchanged by the kidney, and that option is printed.

**This is not a mis-key and not a disputed key: it is a stem whose wording does not match any option
cleanly.** The entry answers as the bank does, explains both readings, and tells the learner not to
carry away the idea that ipratropium harms the kidney. **Added to §11's roster as flagged rather than
disputed** — the distinction being that a disputed key is one the material contradicts, while this
one is a question that cannot be answered precisely as asked.

#### ⚠️ Q145 — TWO QUESTIONS IN ONE STEM, AND THE SLIDE ANSWERED WHAT THE BANK DID NOT

Q145 asks for *"the most likely diagnosis **and** the preferred treatment"*, prints options for the
diagnosis alone, and keys only that. **The staged file recorded the treatment half as unanswerable
and listed it as an interview item. It is not — `L29) Rhinitis 1.pdf` prints the treatment
outright:** *"irrigations, humidification to provide moisture, experimental surgical procedures
aiming at narrowing the nasal cavity with submucosal implants."*

**⚠️ THE INTERVIEW ITEM WAS WITHDRAWN BY READING THE SLIDE, NOT BY REASONING ABOUT IT.** The staged
note was written while transcribing, before the lecture was opened. **Do not carry a staged interview
item into the interview without re-checking the cached lectures first** — the staging pass sees only
the bank.

This is the same shape as Ear ch.9's Q245 (§14i), where the printed box supplied the missing half.
**Here nothing in the bank did and the lecture did.** No interview items remain from this chapter.

#### One figure cut, and two explanation figures that were not

- **`q-gg-60.jpg`** — 474 × 384, 53 KB, cut from book p.60 (PDF 69) at 200 dpi, `-x 991 -y 1474 -W
  474 -H 384`. The nasal endoscopy printed **in the question** at Q145. It sits in clear white space
  between the stem and the options, so it cropped correctly on the second attempt; the first was two
  pixels of *"Diagnosis:"* too high. `imgAlt` is **"Nasal endoscopy of the nasal cavity"** — modality
  and view only. **`imgEssential` is NOT set**: the stem already describes the crusts and the roomy
  cavity in words, so the question is answerable without the picture.
- **The coronal CT under Q104's key is DESCRIBED, not cropped**, and the **drugs-versus-symptoms
  table under Q112's key is transcribed as markdown.** Both are **explanation figures on the answer
  page**. The schema's single `image` renders **between stem and options**, so cropping either would
  put the answer on the page before the learner had chosen. **An explanation figure goes into the
  `explanation`, in words or in markdown — never into `image`.** Same rule as ch.3 Q61 in the Ear
  section.

Image count: **46 references over 43 unique files** — three basenames are legitimately shared, since
the filename names the source page and one page can hold two entries.

#### Explanations: 12 printed, 44 authored

**~20 % printed**, against ch.2's 13 % and ch.1's rate. Boxes at Q87, Q96, Q98, Q99, Q102, Q107
(folded), Q108, Q110, Q112, Q113, Q115, Q133, Q143 — thirteen printed of the 61, twelve among the 56
written. Running Grade Gain figure: **132 of 406 printings, ~33 %.**

**Q112's box is the drug-and-symptoms matrix itself**, which also appears on `L29) Rhinitis 1.pdf` —
the bank reproduced the lecturer's own table as its explanation.

#### ✅ THE MARKER COUNT WAS RIGHT — BECAUSE IT WAS CHECKED BEFORE SPLICING, NOT AFTER

**Two of the 44 authored entries — Q135 and Q145 — were written without the marker**, both of them
entries whose closing paragraph read as finished. This is the identical failure mode to §14j's
twelve-entry block and §14k's scattered six. **The difference is that this time the blocks were
audited in the scratchpad before being spliced**, so the count was correct on its first run in the
app rather than being repaired afterwards.

**Make the marker audit a step of writing the block, not a step of validating the file.**

#### The parse held first time

Every apostrophe was escaped as it was typed, and stems or objectives containing them were
double-quoted throughout. **The five fold edits and all three entry blocks parsed on the first
attempt** — against §14k, where the fold notes broke the parse twice. The inline-probe method
(`Q_ENT` reported from a scratchpad `<script>`) was run **after the folds and again after the
splice**, so a failure would have been localised to one of two small edits rather than to 56 entries.

#### Grounding: this is the best-covered chapter of the Nose section

`L29) Rhinitis 1.pdf` and `L30) Rhinitis 2.pdf` between them carry almost the whole chapter, and
several questions are answered in the lecturer's own words:

- **`L29`** — the IgE definition of allergic rhinitis verbatim; the **ARIA grid** (intermittent <4
  days/week *or* <4 weeks, persistent >4 *and* >4) with the separate mild / moderate-severe severity
  scale; the allergen list; the sensitisation cascade; external and intranasal signs including **pale
  bluish oedematous turbinates** and the **allergic salute / shiners**; **Samter's triad** named;
  the asthma comorbidity slide with its five mechanisms; the investigations with the **50 % total
  IgE** figure; the **drug and symptoms matrix**; the adjunctive list; common cold and influenza; the
  three chronic non-specific rhinitides including **mulberry mucosa at the posterior end of the
  inferior turbinate**; atrophic rhinitis in full — definition, primary and secondary aetiology,
  symptoms and signs, the **five characteristic CT findings**, and the treatment.
- **`L30`** — scleroma complete (organism, endemicity in Egypt, four stages, Mikulicz cells, Russell
  bodies, expansile granuloma on CT, biopsy + culture, long antibiotics + excision); sarcoidosis,
  **Wegener's** and **Stewart's** with their markers and treatments; vasomotor rhinitis, NARES and
  rhinitis medicamentosa; and the **five-part fungal sinusitis classification** with the host and
  organism for each, the 50–80 % mortality of acute invasive disease, and *"cacosmia"* under fungus
  ball.
- **`L27.2)`** supplied the CRS criteria that key Q131 and the AERD paragraph behind Q132;
  **`L31)`** supplied the nasal-obstruction classification behind Q127 and the watery-discharge
  laterality rule behind Q87; **`L27.1)`** the cold burden figures and the viral-versus-bacterial
  criteria.

**Points filled from general knowledge and tagged in place:** the **early/late phase split** of the
allergic response and its symptom lists (Q90–Q93 — the slides give the sensitisation cascade but not
the two phases); the **atopy triad** as a named entity; the **bone-versus-cartilage rule** for
syphilis, TB and scleroma (Q116, Q117); the **Hebra nose** eponym; the **Mott cell**; the **Type I /
Type II** division of atrophic rhinitis; the **arachidonic-acid shunt** behind Samter's triad; the
comparative histology of **leprosy**; the **iron / ketoacidosis** mechanism of mucormycosis; the
**allergic mucin and CT appearance** of allergic fungal sinusitis; and the **"dropper type"** term
with the **vidian / sphenopalatine** anatomy behind it. All are added to §11's material-gap list.

**Cacosmia was again filled from the other bank** (`entep-mfe5-17`'s printed box, the true/objective
versus false/subjective split) rather than from general knowledge, as in §14k. `L25.2) smell.pdf`
gives six smell terms and still not this one.

#### Verified in a real `file://` boot

`parse errors: none`; `Q_ENT` **1,010** / `C_ENT` **82** / total **1,092**; `QUESTIONS` **1,092**;
`MODULES chapters: 104`; 0 bad chapter refs, 0 bad module refs, 0 duplicate ids, every answer in
range, no empty options, nothing missing a source, explanation or objective; **0 dead backticked ids
out of 2,379 references**; **46 image references over 43 unique files, all 43 loading, none broken**;
every `image` a basename and every one carrying an `imgAlt`; mojibake scan clean.

By bank **697 endpoint / 21 house / 400 gradegain** = 1,118 over 1,092 — **26** shared memberships
across **25** questions. Origin only: **697 / 20 / 375**. Authored markers **761 of 1,092**.

**Reconciles:** Ear 261 (241 + 20) + Nose ch.1 46 (44 + 2) + ch.2 38 (34 + 4) + ch.3 61 (56 + 5) =
**406 printed, 375 written, 31 folded** — **25 cross-bank `alsoIn`** and **6 within-bank reprints
held once**.

#### ⚠️⚠️ A LECTURE IS MISSING FROM THE SUPPLIED MATERIAL — `L28` DOES NOT EXIST

**Found by listing the directory before citing a filename, which is exactly what that rule is for.**
A draft of this section named `L28) complications of sinusitis` as a supplementary slide for the next
chapter. **There is no L28 — not in the cache and not in the source.** The ENT lecture numbering runs
`… L26) nasal masses → L27.1) ACUTE rhinosinusitis → L27.2) Chronic Sinusitis → **[gap]** → L29)
Rhinitis 1 → L30) Rhinitis 2 …`

Verified both ways on 2026-08-10:

| | Count | |
|---|---|---|
| `Semester 8\ENT\Theoritical\PPT\*.pdf` | **34** | no L28 |
| `content\ent\lectures\*.txt` | **32** | no L28 |
| Missing from the cache only | 2 | `L1.1) Surgical anatomy of the larynx`, `L1.2) Anatomy of the pharynx` — present as PDFs, never extracted |

**⚠️ THIS MATTERS BECAUSE `ent-sinuscomp` — "Complications of sinusitis" — IS A REAL CHAPTER IN
`MODULES`, and the slot between sinusitis (L27) and rhinitis (L29) is exactly where its lecture would
sit.** Every question assigned to that chapter has therefore been answered without a dedicated slide.
**→ INTERVIEW ITEM: ask the user whether an L28 exists and was not copied across.** Two earlier
"missing" filenames turned out to be misremembered; **this one was checked and is genuinely absent.**

**And the earlier note that outside knowledge was "absent from all 32 ENT files" is right about the
cache but understates the source: there are 34 PDFs.** `L1.1` and `L1.2` — larynx and pharynx anatomy
— have never been extracted, so **no Throat gap should be declared until those two are read**, and
the Throat section is the next major run after the Nose one.

**Next: Nose ch.4, "Rhinosinusitis", book pp.64–66 (PDF 73–75), answers p.67 (PDF 76), 22 promised.**
It should open at **Q146**. Three question pages, so expect the count to run over by one or two, and
**check whether the answer block overlaps the last question page.** The slides are `L27.1) ACUTE
rhinosinusitis.txt` and `L27.2) Chronic Sinusitis.txt`, both already read in full for this chapter.
**There is no complications-of-sinusitis slide to fall back on** — see the gap above.

---

### §14m — Grade Gain, NOSE chapter 4: "Rhinosinusitis" (2026-08-10)

**Book pp.64–66 (PDF 73–75); answers book pp.67–68 (PDF 76–77).**
**23 printed, Q146 … Q168. 19 written (`entqb-nose4-146` … `entqb-nose4-168`, gaps at 150, 153, 165,
166), 4 folded.** Chapters: `ent-sinusitis` 11, `ent-sinuscomp` 4, `ent-noseanat` 3, `ent-facialpain` 1.

#### ⚠️ THE ANSWERS RAN TO TWO PAGES WHERE THE MAP PROMISED ONE

The contents map gives the answers as p.67. **They run pp.67–68**, and p.68 was rendered only because
the tail of Q161's option-by-option box visibly ran off the foot of p.67. Had that box ended tidily,
**Q162–Q168's keys — seven of the twenty-three — would have been missed entirely.**

**⚠️ NEW RULE: RENDER ONE PAGE PAST THE LAST ANSWER PAGE, EVERY TIME.** The existing rule covers the
*question* side ("a question tail and the answer block can share a page"); this is the mirror defect on
the *answer* side, and nothing in the notes anticipated it. The map is reliable about **where answers
begin** and says nothing trustworthy about where they end.

Rendering p.69 as well is what confirmed the boundary: **ch.5 "Nasal symptoms" opens at Q169**, so the
chapter is exactly Q146–Q168 with nothing lost between them.

#### 23 against 22 promised, and no overlap

Running record: 29/29 ✓, 20/20 ✓, 41/40, 31/30, 35/24, 22/21, 18/17, 39/38, 26/25, 46/46 ✓, 38/37,
61/60, **23/22.** Page ranges right for the *questions* **thirteen** chapters running; counts wrong
**ten** times, always upward.

**No overlap** — p.66 ends the questions cleanly. Two Nose chapters running without it; five of
thirteen chapters have had it.

#### ✅ THE NOSE SECTION IS ONE CONTINUOUS RUN — FOURTH CONFIRMATION

Ch.4 opens at **Q146** and ch.5 at **Q169**. Running header reads `Chapter 2: Rhinosinusitis` on the
question pages and `Chapter 2: Nasal Symptoms` on p.69 — **number = section, title = topic**, exactly
as §14i established. This can now be treated as settled for the Nose section; **it still has to be
re-checked at the Throat boundary (book p.87)**, where the number should become 3 and the numbering
should restart at 1.

#### Four folds, all cross-bank into endpoint

| Grade Gain | Folded into | Stage | Evidence |
|---|---|---|---|
| **Q150** nasal discharge in dental sinusitis | **`entep-nose-54`** (p.1027) | **A** | verbatim — identical stem, options and key |
| **Q153** teeth related to the maxillary sinus | **`entep-nose-24`** (p.937) | **B** | same four options in a different order, same key |
| **Q165** unilateral fetid discharge in a child | **`entep-nose-71`** (p.1071) | **B** | verbatim, correcting endpoint's "in an child" |
| **Q166** cold 10 days then fever and cheek tenderness | **`entep-mfe4-20`** (p.2312) | E 0.45 / F 0.71 | same vignette, **one dropped distractor** |

**Q166 is the clearest illustration yet of why the dropped/replaced test earns its keep.** Grade Gain's
option set is a strict **subset** of endpoint's — *chronic bacterial rhinosinusitis* is gone and nothing
takes its place — so by the settled test it is a reprint and the two are held once. It reached neither
stage A nor B (three options against four); **only the stage-E and stage-F rankings surfaced it.**

Grade Gain's memberships are now **394 origin + 29 `alsoIn`**.

#### ⚠️ A FOURTH AUTHORED→SOURCED CONVERSION, AND A FOLD THAT ENRICHED THE HELD ENTRY

**Q150 → `entep-nose-54`**: endpoint prints no box and the entry carried the authored marker; **Grade
Gain prints one** — *"Unilateral offensive fetid discharge in adult = sinusitis of dental origin till
proved otherwise ▪ If the same complain from a child = foreign body."* Marker withdrawn, box quoted in.
**Caught at sweep time again, as in §14l.**

**Q166 → `entep-mfe4-20`** is the other half of the pattern and is worth its own note: **both** banks
print a box, and **Grade Gain's is substantially fuller.** Endpoint gives one sentence about the 10-day
rule; Grade Gain adds the plateau-then-recovery course *and* the double-sickening relapse. **A fold can
enrich the held entry even when it changes nothing about the provenance** — the addition was folded in
and the entry's objective rewritten around the two patterns rather than the one.

#### ⚠️ THREE NEAR-MISSES HELD, EACH BY A SETTLED RULE — the sweep's real work

| Held pair | Rule |
|---|---|
| **Q154** vs `entep-mfe4-28` | *atrophic rhinitis* **replaces** *simple fungal sinusitis*. **A replaced distractor is a new question**, and here it genuinely moves the discrimination from fungal-versus-fungal to fungal-versus-non-fungal |
| **Q155** vs `entep-nose-4` | same four options (bar the word "Left") and the same key, different vignette — **same options + same key + different stem is not a fold** |
| **Q158** vs `entep-nose-23`, **Q159** vs `entep-nose-17` | same fact, same key, **wholly different distractors** — endpoint offers *surgical* alternatives to FESS and *radiological* alternatives to CT, Grade Gain offers *medical* ones. Each therefore tests something different |

**The Q158/Q159 pair is the most useful of the three to remember**, because the stems are nearly
identical and the temptation to fold is strong. What decides it is that endpoint's distractors ask
*which operation* and *which scan*, while Grade Gain's ask *whether an operation* and *whether a scan* —
different questions wearing the same stem.

#### ⚠️ TWO STAGE-E/F FALSE POSITIVES WORTH NAMING

- **Q162 scored E 0.63 against `entqb-ear4-119`** — an *ear* question about cholesteatoma. The whole
  match is the boilerplate *"which of the following statements is true regarding…"*. **Stems that open
  with a stock phrase will always rank against each other**; discount the opening clause by eye.
- **Q146 scored F 0.71 against `entep-nose-45` and `entqb-nose1-4`** on sinus **names** alone, while
  asking a completely different question — anterior-*group* membership, not drainage site. Note that
  `entqb-nose1-4` was itself held against `entep-nose-45` for the same reason in §14j. **A cluster of
  questions sharing one small vocabulary will rank highly against each other forever.**

#### ⚠️ THE BANK CONTRADICTS ITSELF ON THE CHARACTER OF SINUS PAIN, TWO PAGES APART

**Q164** keys **"throbbing"** as the one criterion sinusitis pain does **not** have. **Q155's own
vignette** describes its maxillary sinusitis as *"a **dull, throbbing** pain localized over his left
cheek."*

**Neither option list contains the other's wording, so neither key is correctable** — this is the
"two questions, two keys, because the menus differ" category again, but with a new twist: **the
conflict is between a KEY and a STEM, not between two keys.** A stem narrating a case uses a word
loosely that a criteria question keys as the exception. Both are held and each entry records the other.

**Look for this shape specifically**: a bank that writes vignettes and criteria questions about the same
topic will eventually let a vignette contradict a criteria key. It cannot be found by comparing keys.

#### ⚠️ AN OPTION THAT IS A SUBSET OF THE KEY — a new sub-shape

**Q160** describes a child with periorbital swelling and mild proptosis after a cold, and keys
**"Complicated rhinosinusitis"** over an option list that also offers **"Orbital cellulitis."**
**Orbital cellulitis is not a wrong answer — it is a *member* of the keyed category**, and the mild
proptosis in the stem actually argues for the more specific label.

The printed box settles it by fiat — *"Child with eye swelling during respiratory tract infection =
complicated rhinosinusitis"* — and the key is defensible because the stem asks for the *diagnosis*
rather than the *complication*. **Recorded, not corrected.** This is distinct from the two-correct-answers
category of §14l: there the two options were siblings, here one contains the other.

#### ⚠️ FOUR ENTRIES LAND IN THE CHAPTER WHOSE LECTURE DOES NOT EXIST

`entqb-nose4-160`, `-161`, `-162` and `-163` are assigned to **`ent-sinuscomp`**, and §14l established
that **there is no `L28`** — the ENT slide set runs `L27.2) Chronic Sinusitis` straight to `L29)
Rhinitis 1`. So the pre-septal/post-septal distinction, the lamina papyracea, the routes of intracranial
spread, the diploic veins and Pott's puffy tumour are **all tagged as outside the course material**,
answered in full under the answer-the-gap rule.

**This is the first chapter where the missing lecture has actually cost something measurable**, and it
strengthens the interview item: four questions, plus every future question in `ent-sinuscomp`, rest on
general knowledge because one file was never supplied.

The three printed boxes carry more than usual here and were leaned on accordingly — **Q160's**
*"more in children due to weak ossification"*, **Q161's** four-option walkthrough, and **Q162's**
*"sinusitis is the commonest cause of frontal lobe abscess"* and *"complications occur in acute and
chronic rhinosinusitis, but more on top of acute."*

#### Two other defects recorded as printed

- **⚠️ Q152's option c reads "Streptococcus influenza", which is not an organism** — it conflates
  *Streptococcus pneumoniae* with *Haemophilus influenzae*. **The key (Pseudomonas) is unaffected and
  correct**, so the question still works; the option is simply wrong as set. Recorded, not repaired,
  and the entry gives the real three-organism list.
- **⚠️ Q166 and Q167 print only THREE options each**; **Q155, Q158, Q160 and Q164 print their numbers
  twice** ("164.164.Criteria of sinusitis pain…"). Both recorded per entry.

#### ⚠️ THE BANK GIVES ITS OWN CLASSIFICATION TWO DIFFERENT WAYS

**Q149** keys subacute rhinosinusitis as **4–12 weeks**. The printed box at **`entqb-nose3-98`**,
twenty-one questions earlier, gives *"Acute… less than 3 weeks… Subacute… between 3 weeks and 3
months… Chronic… more than 3 months."* Same disease, different boundaries, and **neither option list
offers the other's numbers**, so neither key can be corrected.

**The lecture decides which to quote:** `L27.2) Chronic Sinusitis.pdf` defines CRS as *"more than 12
weeks"*. Both entries record the discrepancy and point at 12 weeks.

#### Explanations: 6 printed among the 19 written, 13 authored

Boxes at Q146, Q150 (folded), Q156, Q158, Q160, Q161, Q162, Q166 (folded) — **eight printed of the 23**,
six among the 19 written. **~26 % printed**, against ch.3's 20 % and ch.2's 13 %. Running Grade Gain
figure: **140 of 429 printings, ~33 %.**

#### ✅ THE SCRATCHPAD MARKER AUDIT CAUGHT ONE, AND THE DEAD-ID CHECK CAUGHT TWO MORE

Auditing the blocks **before** splicing found **Q147** written without the authored marker — one miss
across 13 authored entries, against two in §14l and six in §14k. **The practice is now clearly worth
its cost.**

**⚠️ AND THE SAME PASS CAUGHT TWO BACKTICKED IDS THAT DO NOT EXIST YET.** Q146 and Q155 both cited
`` `entqb-nose5-177` `` — a Nose ch.5 question that has not been transcribed. **This is the third
occurrence of the same slip**, and it happened here for a specific reason worth naming: **ch.5 had
already been rendered** (to find the chapter boundary), so its content was in mind while ch.4 was being
written. **Reading ahead makes forward references feel safe. They are not.** Both were rewritten as
prose — *"a point the next chapter of this bank asks directly"* — which says the same thing and cannot
go stale.

Marker delta computed before validating: **+13 new − 1 withdrawn by the Q150 fold = +12**, 761 → **773**.
Matched exactly.

#### ⚠️ THE PARSE BROKE ONCE — ON A DOUBLE-ESCAPED QUOTE, WHICH IS A NEW VARIANT

`\\'boggy swelling\\'` inside a single-quoted string. The intent was an escaped quote inside the
string; `\\` produces a **literal backslash** and the following `'` then **closes the string**.
Every other apostrophe in the batch was correctly written `\'`, so the file's own consistency was no
guard — **over-escaping fails exactly like under-escaping.**

Found in one run by the `window.addEventListener('error', …)` probe, which reports **line and column**:
*"ERR line 9207 col 1503 :: Uncaught SyntaxError: Unexpected identifier 'boggy'"*, minus a 3-line
preamble. **⚠️ THIS IS A BETTER PROBE THAN THE `typeof Q_ENT` ONE AND SHOULD REPLACE IT** — the old
probe reports only *that* the file failed, this one reports *where*, and the identifier it names is
usually the fix itself. Both are cheap; run the error-reporting one.

#### Grounding

`L27.1) ACUTE rhinosinusitis.pdf` and `L27.2) Chronic Sinusitis.pdf` carry the acute and chronic halves
almost completely — the contiguity of nose and sinus, the burden figures (**2–3 colds per adult and 3–8
per child a year, up to 80 % involving the sinuses, ~1 billion viral cases a year of which only
0.5–2 % turn bacterial**), the nine predisposing factors with ICAM-1 and the smoking-flora mechanism,
the major/minor diagnostic criteria, the **four features of bacterial disease including double
sickening**, the antibiotic-resistance mechanisms with the worked under-dosing case, the CRS definition
requiring **≥12 weeks of two symptoms PLUS objective inflammation**, the CRSwNP/CRSsNP split, why
**MRI is discouraged**, and the FESS indications and goals.

`L23) Anatomy of the Nose.pdf` supplied the drainage map that makes the anterior/posterior grouping of
Q146 intelligible, and the respiratory-versus-olfactory epithelium of Q147. `L30) Rhinitis 2.pdf`
carried Q154's invasive fungal sinusitis.

**Filled from general knowledge and tagged:** the mucus-swallowing interval (Q148 — no slide states a
figure); the three-organism list for acute bacterial rhinosinusitis and *Pseudomonas*'s actual niches;
the sinus-by-sinus **pain map**; the anaerobic microbiology of odontogenic sinusitis; the mucociliary
direction argument for *functional* surgery; and **the whole of `ent-sinuscomp`** — pre-septal versus
post-septal, the lamina papyracea, the diploic veins of Breschet, Pott's puffy tumour, and the
ear-versus-sinus routes of intracranial abscess. All are added to §11's material-gap list.

#### Verified in a real `file://` boot

`parse errors: none`; `Q_ENT` **1,029** / `C_ENT` **82** / total **1,111**; `QUESTIONS` **1,111**;
`MODULES chapters: 104`; 0 bad chapter refs, 0 bad module refs, 0 duplicate ids, every answer in range,
no empty options, nothing missing a source, explanation or objective; **0 dead backticked ids out of
2,429 references**; **46 image references over 43 unique files, all loading** (this chapter prints no
figures); mojibake scan clean.

By bank **697 endpoint / 21 house / 423 gradegain** = 1,141 over 1,111 — **30** shared memberships
across **29** questions. Origin only: **697 / 20 / 394**. Authored markers **773 of 1,111**.

**Reconciles:** Ear 261 (241 + 20) + Nose ch.1 46 (44 + 2) + ch.2 38 (34 + 4) + ch.3 61 (56 + 5) +
ch.4 23 (19 + 4) = **429 printed, 394 written, 35 folded** — **29 cross-bank `alsoIn`** and **6
within-bank reprints held once**.

**Next: Nose ch.5, "Nasal symptoms", opening at Q169 on book p.69 (PDF 78).** The contents map's page
range and promised count for it are in §14; **verify the range by rendering, and render one page past
the last answer page.** Its slides are `L31) nasal symptoms 1.txt` and `L32) nasal symptoms 2.txt` —
`L31` has already been read in full for chapters 2–4, `L32` has not. The first page shows the chapter
is largely **headache and facial pain**, so `ent-facialpain` will take most of it, and **migraine
versus rhinogenic headache** is plainly the discrimination it is built on.

---

### §14n — Grade Gain, NOSE chapter 5: "Nasal symptoms" (2026-08-10)

**Questions book pp.69–71 (PDF 78–80); answers book pp.71–72 (PDF 80–81).**
**22 printed, Q169 … Q190. 21 written (`entqb-nose5-169` … `entqb-nose5-190`, gap at 177), 1 folded.**
Chapters: `ent-nasalobs` 12, `ent-facialpain` 8, `ent-sinusitis` 1 (`entqb-nose5-186`), `ent-rhin` 1.

#### ⚠️⚠️ BOTH PAGE DEFECTS AT ONCE, ON THE SAME SHEET

**Book p.71 carries Q187–Q190 in the LEFT column and the "Nasal symptoms — Answers" heading in the
RIGHT.** The map calls p.71 the answer page; **four questions are on it.** And the answers then **run
to p.72**, where the map promised p.71 — the second chapter running.

**The rule written in §14m paid for itself on the very next chapter.** Rendering one page past the
last promised answer page is what caught the run-over; reading every question page is what caught the
overlap. **Neither defect is predictable and both were present here simultaneously**, which is the
strongest argument yet for treating the contents map as a pointer and nothing more.

Overlap tally: **six of fourteen** chapters. Answer run-over: **two of two** since it was first looked for.

#### 22 against 21 promised

Running record: 29/29 ✓, 20/20 ✓, 41/40, 31/30, 35/24, 22/21, 18/17, 39/38, 26/25, 46/46 ✓, 38/37,
61/60, 23/22, **22/21.** Question ranges right **fourteen** chapters running; counts wrong **eleven**
times, always upward.

Ch.6 "Nasal fractures" opens at **Q191** on book p.73 — the Nose section is one continuous run for the
fifth confirmation, and the running header reads `Chapter 2: Nasal Symptoms` throughout.

#### ⚠️ STAGES A AND B RETURNED NOTHING — AND THE ONE FOLD WAS FOUND BY E AND F

**`Q177 → entep-nose-72` (p.1073)**, identical stem and identical key. **Stage B missed it for four
words**: Grade Gain abbreviates option d to *"over the bridge of nose & between eyes"* against
endpoint's *"over the bridge of the nose and between the eyes"*. **Stages E and F both scored it 1.00.**

This is the third chapter in which a fold reached neither strict stage. **The strict stages are a
convenience; the rankings are the instrument.** Neither bank prints a box here, so the held entry's
authored marker stays.

#### ⚠️ SIX NEAR-MISSES HELD, AND EVERY ONE IS A *REPLACED* DISTRACTOR

| Held pair | What changed |
|---|---|
| **Q186** vs `entep-nose-37` | adult foetid discharge — *acute viral rhinitis* and *nasal polyps* replace *cancer* and *allergic rhinitis* |
| **Q183** vs `entep-nose-71` | the child version, wholly different option set |
| **Q178** vs `entep-nose-73` | CSF rhinorrhoea on straining — two replaced options |
| **Q179** vs `entep-nose-43` | most feared complication of a CSF leak; endpoint's stem is post-acoustic-neuroma surgery with otological distractors |
| **Q173** vs `entep-mfe4-15` | pulsatile headache → migraine; *cluster headache* and *sinusitis* replace *chronic sinusitis* and *septal deviation* |
| **Q190** vs `entqb-nose3-127` | **within this bank** — both key *common cold*, two of four options replaced |

**The unilateral-foetid-discharge fact is now printed SEVEN times across the two banks**, each with a
distinct option set: `entep-nose-18`, `-71`, `-100`, `-107`, `-111`, `-114` and `entqb-nose5-183`.
Endpoint alone prints it six ways. **When a bank works one fact through six option sets, the sweep will
keep surfacing it and the answer will keep being "hold".** That is not a failure of the sweep — the
menus genuinely differ, and a learner who has only seen one of them has not learnt the fact.

**Q190 is the more interesting of the two within-bank pairs**, because both printings key the same
answer. That is the opposite of §14k's Q58/Q65 and §14l's Q128/Q130, where different menus produced
different keys. **Here the answer survives a change of distractors, which is what distinguishes a real
fact from an artefact of one option list.** A within-bank match takes no `alsoIn` either way.

#### ⚠️ THE SUBSET SHAPE AGAIN — AND REVERSED

**Q189** asks the commonest **laterality** of nasal obstruction and keys **alternating** over a list
that also offers **bilateral** — while `L31) nasal symptoms 1.pdf` states that *"alternating nasal
obstruction is actually a variety of **bilateral** nasal obstruction."* **The key is a member of
another option.**

**Ch.4's Q160 had the identical shape and keyed the UMBRELLA** (complicated rhinosinusitis over orbital
cellulitis). **This one keys the SPECIFIC.** There is no rule that makes both consistent, and neither
key is wrong. Recorded in both entries with the instruction to read the option list.

Option d (*intermittent*) is excluded by a different route worth noting: it names the **duration** axis,
not the laterality one. **Spotting that an option belongs to the wrong axis is faster than ranking the
right ones.**

#### ⚠️ ONE LINKED-SET STEM REPAIRED, AND IT WOULD HAVE BEEN UNANSWERABLE

**Q179 reads "What is the most feared complication of THIS CONDITION?"** — a back-reference to Q178's
CSF rhinorrhoea in the facing column. **The deck in this app is shuffled**, so the stem was repaired to
name the condition. Without it the question is not merely obscure but **impossible**: nothing in the
stem or the four options identifies the disease.

Running total of repaired linked-set stems: 5 of 41 in Ear ch.3, 6 of 22 in ch.6, 2 of 26 in ch.9,
1 of 46 in Nose ch.1, **1 of 22 here.**

#### ⚠️ THE BOX AND THE SLIDE DISAGREE ON A NUMBER — Q176

Q176's printed box says migraine *"may come with dizziness or **bilateral which is more common than
unilateral**"*. `L32) nasal symptoms 2.pdf` says *"Severe usually unilateral throbbing pain. **May be
bilateral in 40 % of cases.**"* — i.e. bilateral is the **minority**.

**Both are recorded and the slide is the figure to quote.** What neither disputes, and what the key
actually turns on, is that the word ***strictly*** makes the option false. **This is a box wrong about
a supporting fact while right about the answer** — the same shape as §14k's Q72 and §14l's Q96, and
the third occurrence. **A printed box is evidence, not authority.**

#### ⚠️ ONE PRINTED BOX IS TRUNCATED MID-WORD

**Q185's** box ends *"- In Common cold → mucosa is wet an"*. The completion is supplied in the entry
from `L29) Rhinitis 1.pdf` (red, congested mucosa) and **marked as an addition**. Recorded as printed.

#### ⚠️ THE MARKER COUNT WAS ONE **OVER**, WHICH IS A NEW FAILURE DIRECTION

Expected +16 authored markers across 21 entries with five printed boxes; the count came out **+17**.
Chasing it found **`entqb-nose5-180` carrying the authored marker although the source prints a box**
(*"Beta trace protein and beta 2 transferrin"*), which the entry itself quotes.

**Every previous marker fault has been a MISSING marker. This is the first spurious one**, and it
matters just as much: it labels transcribed text as authored, which is the same class of error in the
opposite direction. **The one-line box is what made it easy to miss** — a single fragment does not
*feel* like an explanation, and the entry around it is 90 % written here.

**⚠️ CHECK THE MARKER AGAINST THE BOX BOTH WAYS.** The scratchpad audit added in §14m looks for
entries lacking a marker; it must also look for entries carrying one where a box was transcribed. The
per-entry audit that found this took one run and should become standard.

#### Grounding: `L32` was read for the first time and carries most of the chapter

`L32) nasal symptoms 2.pdf` had never been extracted into use before this batch and turns out to answer
eight questions almost directly:

- ***"Rhinogenic headache is controversial"***, and *"the most common type of headache in ENT patients
  is **primary** headache… triggered by nasal irritation (**stimulation of the trigeminal nerve**)"* —
  Q169, Q170, Q171.
- ***"Acute sinusitis causes facial pain rather than headache. This includes 'vacuum headache' (morning
  pain over the forehead due to obstruction of the frontal recess during sleep)"*** — **Q172's printed
  box is this sentence paraphrased.**
- The **primary/secondary** classification — Q174.
- Migraine: *"unilateral, pulsating… aggravated by exercise, nausea/vomiting, photophonophobia"*,
  **bilateral in 40 %**, aura in one third — Q173, Q176. Plus full management: NSAIDs, triptans by name
  and dose, and prophylaxis for 4–6 months.
- Tension headache as *"the **most common type of primary headaches**"*, female-predominant, bilateral
  and band-like — Q169, Q174.
- Cluster headache, trigeminal neuralgia, **Tolosa-Hunt** (cavernous sinus) and **Gradenigo**.
- **Three true/false slides** that between them key Q183 (*"foreign bodies… most common cause of
  unilateral nasal discharge with bad odor in children"*), Q187 (*"adenoids is an example of mucosal
  nasal obstruction"* — false), Q188 (*"septal deviations cause fluctuating nasal obstruction"* —
  false) and Q190 (*"viral infections are the most common cause of nasal obstruction"*).

`L31) nasal symptoms 1.pdf` supplied the obstruction classification on all four axes, the mucosal and
structural lists, and the **foetid** and **watery** discharge lists behind Q178, Q181 and Q186.

**Filled from general knowledge and tagged:** the **contents of the cavernous sinus** and the abducent
nerve's position within it (Q175 — no cached slide lists them); the **beta-2 transferrin** assay and
the confirm-versus-localise split; **Brudzinski's and Kernig's** signs and the treat-meningitis-first
sequence; the **nasal cycle** as the reason a deviated septum seems to alternate; **button battery** as
a nasal emergency; and the migraine-versus-rhinogenic discrimination table. All added to §11's list.

#### Explanations: 5 printed among the 21 written, 16 authored

**~24 % printed.** Boxes at Q172, Q176, Q180, Q185 and Q188. Running Grade Gain figure: **145 of 451
printings, ~32 %.**

#### Verified in a real `file://` boot

`parse errors: none` (first attempt, both after the fold and after the splice); `Q_ENT` **1,050** /
`C_ENT` **82** / total **1,132**; `MODULES chapters: 104`; 0 bad chapter or module refs, 0 duplicate
ids, every answer in range, nothing missing a source, explanation or objective; **0 dead backticked ids
out of 2,492 references**; **46 image references over 43 unique files, all loading** (this chapter
prints no figures); mojibake clean.

By bank **697 endpoint / 21 house / 445 gradegain** = 1,163 over 1,132 — **31** shared memberships
across **30** questions. Origin only: **697 / 20 / 415**. Authored markers **789 of 1,132**, matching
the predicted +16 after the spurious one was removed.

**Reconciles:** Ear 261 (241 + 20) + Nose ch.1 46 (44 + 2) + ch.2 38 (34 + 4) + ch.3 61 (56 + 5) +
ch.4 23 (19 + 4) + ch.5 22 (21 + 1) = **451 printed, 415 written, 36 folded** — **30 cross-bank
`alsoIn`** and **6 within-bank reprints held once**.

**Next: Nose ch.6, "Nasal fractures", book pp.73–75 (PDF 82–84), answers p.75, 12 promised.** It opens
at **Q191**, already confirmed by rendering. **Two shapes seen on its first page that this bank has not
used before: Q198 is a TRUE/FALSE with only two options, and Q191 offers "Both" and "None of the above"
as options c and d.** Its slide is `L24) diseases of the nasal septum.txt` — **not yet read** — plus
`L23) Anatomy of the Nose.txt`. **⚠️ Q191 asks where saddle nose occurs and offers Wegener's and
neglected nasal haematoma with "Both" as the key candidate — compare against `entqb-nose3-135`, which
keys Wegener's over a list offering syphilis.**

---

### §14o — Grade Gain, NOSE chapter 6: "Nasal fractures" (2026-08-11)

**Questions book pp.73–74 (PDF 82–83); answers book p.75 (PDF 84).**
**13 printed, Q191 … Q203. 13 written (`entqb-nose6-191` … `entqb-nose6-203`), 0 folded.**
Chapters: `ent-septum` 13 — the first Grade Gain chapter to land entirely in one chapter.

#### The page shape is CLEAN, for the first time in three chapters

No question tail on the answer page and no run-over: all thirteen keys sit on book p.75, and p.76
opens "Sino-nasal masses" at Q204 under its own Questions banner. **Rendering one page past the last
promised answer page is what established that** — the rule cost one page and settled the boundary,
exactly as it did when it caught the ch.4 and ch.5 defects.

Answer-page overlap now stands at **six of fifteen** chapters; answer run-over at **two of three**
since it was first looked for. **Neither defect is predictable in either direction** — three chapters
running produced overlap-only, both-at-once, and now neither.

#### 13 against 12 promised

Running record: 29/29 ✓, 20/20 ✓, 41/40, 31/30, 35/24, 22/21, 18/17, 39/38, 26/25, 46/46 ✓, 38/37,
61/60, 23/22, 22/21, **13/12.** Question ranges right **fifteen** chapters running; counts wrong
**twelve** times, always upward.

Running header `Chapter 2: Nasal Fractures` throughout and `Chapter 2: Sino-nasal Masses` on p.76 —
number = section, title = topic, sixth confirmation for Nose.

#### ⚠️ ZERO FOLDS — AND THE SWEEP WAS RUN IN FULL ANYWAY

Stages **A, B and C returned nothing at all.** Stage D returned three, all the same false positive:
Grade Gain's key *"3D CT"* differs from endpoint's *"CT"* by one token, so `entep-nose-78`, `-80` and
`-81` — three **nasal-mass** questions — matched on the key alone. Stage E returned one at 0.57 and
stage F one at 0.67, and **both were rejected on reading:**

| Ranked pair | Verdict |
|---|---|
| Q191 ↔ `entqb-nose3-135` (E 0.57) | same opening sentence, wholly replaced option set — ch.3 offers syphilis, RA and atrophic rhinitis; this one offers *Both* and *None*. **New question.** |
| Q196 ↔ `entep-nose-23` (F 0.67) | the option words are *CT / MRI / X-ray / ultrasound* in both, but `entep-nose-23` asks about **chronic rhinosinusitis**. **A short-option false positive** — the classic stage-F failure mode |

Both keyword passes were then run, twice differently worded. **`wing fracture`, `open book`,
`angulated`, `depressed fracture`, `lateral blow`, `frontal blow`, `boxing`, `medicolegal`,
`walsham`, `pollock`, `3d ct` and `osteotomy` returned ZERO hits across the entire corpus** — this
chapter's terminology is simply absent from endpoint. That is why zero folds is credible here rather
than suspicious: endpoint prints the *timing* of nasal-fracture management eight times over and the
*classification* of nasal fractures not once.

Fold run: **4/29, 0/20, 3/41, 4/31, 1/35, 3/22, 0/18, 4/39, 1/26** across Ear and
**2/46, 4/38, 5/61, 4/23, 1/22, 0/13** in Nose. Third zero-fold chapter of the fifteen.

#### ⚠️ THE LESSON OF THE TIMING CLUSTER: A KEY IS THE BEST OPTION OFFERED, NOT THE BEST TREATMENT

Between the two banks the nasal-fracture timing rule is now printed **twelve times**, and it survives
every printing intact — except that one endpoint entry *appears* to disagree, and the reason is
instructive. Four printings of the **same 30-minute, no-oedema patient**:

| Entry | Earliest option its menu offers | Key |
|---|---|---|
| `entep-nose-112` (p.1159) | *immediately* | **immediately** |
| `entep-nose-97` (p.1127) | *within a week* — **no immediate option exists on that list** | **within a week** |
| `entep-mfe5-14` (p.2413) | *referral for reduction immediately* | **refer immediately** |
| `entqb-nose6-202` | *immediate digital reduction* | **immediate digital reduction** |

**`entep-nose-97` is not a divergence and must not be recorded as one.** Its key is the best
available choice on a menu that never offers the right answer. **This is a distinct thing from a
mis-key and from a cross-bank divergence, and it is worth checking for before either is written
down: read what the option list ACTUALLY OFFERS before concluding two banks disagree.**

The other tiers agree across banks without qualification — `entep-nose-74`, `-50`, `-12` and
`entqb-nose6-201` on the oedema tier; `entep-mfe5-15`, `entep-enr-12`, `entqb-nose6-200` and
`entqb-nose6-203` on the six-month tier, where Grade Gain's *"after 5 months"* at one month post-
injury and endpoint's *"after five months"* at one month post-injury are the same sentence.

#### ⚠️ TWO PRINTING FORMATS THIS BANK HAD NOT USED BEFORE

* **Q198 is a TRUE/FALSE with two options only** — the first in the Grade Gain material, and the
  first two-option question anywhere in the project. Transcribed as printed; the validation harness
  reports its option count as 2 and every check passes, so nothing in the app assumes four.
* **Q191 offers "Both" as c and "None of the above" as d, and keys "Both"** — the first "Both" key
  in this bank. **It also resolves, in passing, the defect recorded at `entqb-nose3-135`:** that
  question keys Wegener's alone over a list offering syphilis, and this one shows the bank does
  accept multiple causes of saddle nose when the option list lets it.

#### ⚠️ A BOX LOOSE ABOUT ITS OWN MECHANISM WHILE RIGHT ABOUT THE KEY — FOURTH OCCURRENCE

**Q199's** box argues for a right-sided deviation via *"deviation… toward the opposite side of the
impact"* plus *"strikes coming from the right side"* — which read literally gives a **LEFT**
deviation, the answer it is arguing against. The coherent reading, and the one that yields the key:
a right-handed opponent's punch lands on the victim's **left** sidewall and drives the nose to the
victim's **right**. Recorded as printed with the correction marked.

Fourth instance of this shape after §14k's Q72, §14l's Q96 and §14n's Q176. **A printed box is
evidence, not authority** — and note that all four were wrong about the *reasoning*, never the key.

#### ⚠️ ONE STEM REPAIRED, AND IT WAS INTERNALLY INCONSISTENT AS WELL AS DANGLING

**Q203 reads "What is the most appropriate treatment for THIS PATIENT'S nasal fracture, given that
he presents 1 month after the injury?"** The back-reference points at Q201's basketball vignette in
the facing column — **whose patient presented at 12 hours, not one month.** So the reference is both
unresolvable in a shuffled deck *and* contradicted by its own antecedent. Repaired to *"a patient's"*;
nothing else altered.

Q202 was left unaltered: it says *"a patient's"* and carries its own 30-minutes-and-no-swelling
clause, so it stands alone even though it was printed as part of the same set.

Running total of repaired linked-set stems: 5 of 41 in Ear ch.3, 6 of 22 in ch.6, 2 of 26 in ch.9,
1 of 46 in Nose ch.1, 1 of 22 in ch.5, **1 of 13 here.**

**Q197 prints its own number twice** — *"197. 197.Nasal fracture is best diagnosed by"*. Stripped.
Fourth occurrence after Nose ch.3's Q102, Q103 and Q145.

#### ⚠️ A PAIR THAT LOOKS LIKE A CONTRADICTION AND IS A READING TEST

**Q196** asks the *most informative investigation* and keys **3D CT**; **Q197** asks how a nasal
fracture is *best diagnosed* and keys **physical examination** — and 3D CT sits in **both** option
lists. Neither key is wrong: the diagnosis is clinical, the most informative imaging is CT. The two
are printed back to back, which reads as deliberate.

**This also bears on an open dispute.** `entep-mfe4-16` (p.2296) keys **plain X-ray** as the
*initial* diagnostic modality after an RTA with midfacial oedema, with *"computed tomography with
three dimensional reconstruction"* offered as a distractor; it is on the disputed roster because the
stem describes the **middle third of the face**, where CT is standard. **Grade Gain keying 3D CT here
does not contradict it** — *initial* and *most informative* are different questions, and `L24` prints
exactly that order — **but it does strengthen the objection already recorded.** Noted in the roster;
the dispute stays open.

#### Grounding: `L24` read for the first time, and `L25.2` used for something new

`L24) diseases of the nasal septum.txt` is this chapter's slide and had never been read. It carries
the aetiopathogenesis (*"Trauma (RTA, Sports) inflicted from front, side or below"*), the buckling
patterns, the three classification axes, the full **signs** list (*"external deformity difficult to
examine in acute condition… better seen after the edema has reduced… Look for movements of eye…
Palpate the nose to look for: deformity, deviation, crepitus, mobility, any tenderness… Look for
septal hematoma, abscess"*), *"Investigation: xray nasal bone"* with CT for severe facial injury, the
reduction principle (*"mobilize the fragments first by increasing and then decreasing the degree of
deformity"*), the instruments **Freer / Ashe / Walsham forceps**, splints, and open reduction
(**septorhinoplasty**) for *"dislocation of nasal dorsum and significant septal deformity"*. It also
supplies the septal cartilage's **3–4 mm thickness** and its role in *"support to the tip and dorsum"*,
which is the whole of Q191's haematoma pathway.

**`L25.2) smell.txt` answered Q195's hyposmia and had not been used this way before.** It gives both
routes: **conductive** — *"physical obstacle of odorant to reach olfactory epithelium"* — and
traumatic/sensorineural — *"occasionally associated with a fracture running through the nose and the
cribriform plate… shearing or stretching of the olfactory nerves at the cribriform plate, which
occurs in approximately **10 % of major head injuries**"*. **A conductive hyposmia clears with the
swelling; a cribriform one may not, and that is the clinically useful half.**

`L30) Rhinitis 2.txt` supplied Wegener's saddle nose verbatim; `L25.1) epistaxis.txt` supplied trauma
as the local cause of bleeding; the other bank's `entep-nose-101` (p.1135) confirmed the
haematoma → saddle-nose link, which **no cached slide states** — preferring the other bank to outside
knowledge, as the standing rule requires.

**Filled from general knowledge and tagged**, all added to §11's list: the **angulated/depressed** and
**wing/open-book** classification by direction and force of blow; the **failure modes of the plain
nasal film** (suture lines and vascular grooves mimicking fractures, overlap hiding them); the
**medicolegal** rationale for taking it anyway; the **NOE and cribriform** associations of an
open-book fracture; the **bilobed flap's** actual indication (resurfacing a soft-tissue defect of the
tip or ala, not straightening a skeleton); the **soft-tissue remodelling** rationale for the six-month
wait; and the **saddle-nose cause table** beyond Wegener's and syphilis (leprosy, rhinoscleroma,
cocaine, over-resection).

#### Explanations: 4 printed among the 13, 9 authored

**~31 % printed.** Boxes at Q199, Q200, Q201 and Q202 — all four in the management run, and none on
the classification or investigation questions. Running Grade Gain figure: **149 of 464 printings,
~32 %.**

#### Verified in a real `file://` boot

`parse errors: none` on the first attempt, both after the blocks were written and again after the
splice. `Q_ENT` **1,063** / `C_ENT` **82** / total **1,145**; `MODULES chapters: 104`; 0 bad chapter
or module refs, 0 duplicate ids, every answer in range, no empty options, nothing missing a source,
explanation or objective; **0 dead backticked ids out of 2,603 references**; **46 image references
over 43 unique files, all loading** (this chapter prints no figures); mojibake clean; `imgAlt` present
on every image and no path-instead-of-basename.

By bank **697 endpoint / 21 house / 458 gradegain** = 1,176 over 1,145 — **31** shared memberships
across **30** questions. Origin only: **697 / 20 / 428**. Authored markers **798 of 1,145**, matching
the predicted **+9** exactly (13 written − 4 boxed).

**The marker audit was run both ways in the scratchpad before splicing**, as §14n required, and came
out clean on the first pass: 9 present where expected, 4 absent where a box was transcribed, 0
mismatches. **First chapter with no marker fault at all** — misses ran 6 → 2 → 1, then one spurious,
then none.

**Reconciles:** Ear 261 (241 + 20) + Nose ch.1 46 (44 + 2) + ch.2 38 (34 + 4) + ch.3 61 (56 + 5) +
ch.4 23 (19 + 4) + ch.5 22 (21 + 1) + ch.6 13 (13 + 0) = **464 printed, 428 written, 36 folded** —
**30 cross-bank `alsoIn`** and **6 within-bank reprints held once**.

**Next: Nose ch.7, "Sino-nasal masses", book pp.76–80 (PDF 85–89), answers p.80, 31 promised** — the
largest Nose topic after ch.3. It opens at **Q204**, already confirmed by rendering p.76. **Render
PDF 85–90**, one past the promised answer page.
**⚠️ IT PRINTS AT LEAST ONE PHOTOGRAPH WITH A QUESTION** — Q210 ("A man had a trauma in the nose.
There is no fever. What is the diagnosis?") carries a clinical photograph of the nasal vestibule on
book p.76, and it is **load-bearing**: the four options are septal haematoma / abscess / perforation /
synechiae and nothing in the stem separates them. **That one must be cropped** (`q-gg-76.jpg`), unlike
an explanation figure on an answer page. **⚠️ Q208 opens "In the previous case…"** — a linked set off
Q207's midline-nasal-swelling infant, so expect stem repairs. Slides: `L26) nasal masses.txt` (already
cached and used) plus `L23) Anatomy of the Nose.txt`.

---

### §14p — Grade Gain, NOSE chapter 7: "Sino-nasal masses" (2026-08-11)

**Questions book pp.76–79 (PDF 85–88); answers book p.80 (PDF 89).**
**32 printed, Q204 … Q235, against 31 promised. 30 written (`entqb-nose7-205` … `-235`, gaps at 204 and 232), 2 folded.**
Chapters: `ent-nasalmass` 26, `ent-nasalobs` 2, `ent-septum` 1, `ent-epistaxis` 1, `ent-sinusitis` 1.
Largest Nose topic after ch.3, and the largest single-chapter batch since Ear ch.3.

#### Page shape clean for the second chapter running

All 32 keys on p.80; no question tail on the answer page, no run-over. Book p.81 opens "Nasal septal
diseases" at **Q236** under its own banner. Overlap six of sixteen; run-over two of four.
Running count record: …, 23/22, 22/21, 13/12, **32/31** — ranges right sixteen times, counts wrong
thirteen, always upward.

#### ⚠️ ONE PRINTED BOX IN THIRTY-TWO — ~3 %, AGAINST A RUNNING ~32 %

Q217 alone. **Box presence is a property of the PAGE, not the section**, and this is the sharpest
demonstration of it inside Grade Gain — the same finding endpoint's Throat run produced over 103
answered pages. Running Grade Gain figure: **150 of 496 printings, ~30 %.**

#### The two folds, and why one of them evaded stage A

| Fold | Stage | Note |
|---|---|---|
| **Q232 → `entep-nose-57`** (p.1041) | **A** — identical stem, options and key | The strictest possible match. Neither prints a box, so the held entry's authored marker stays |
| **Q204 → `entep-nose-69`** (p.1065) | **B**, with E and F both 1.00 | **Stage A missed it by the single word *"The"*** at the start of the stem. Same four options in the same order, same key |

**⚠️ THAT NEAR-MISS IS THE POINT: stage A is defeated by one leading article.** Stage B caught it
because B ignores the stem entirely. **The stages are not a hierarchy of strictness — they are
different projections, and A is the most fragile of them.**

#### ⚠️ TEN DEAD BACKTICKED REFERENCES TO THE ID THE FOLD RETIRED

The validator reported **`entqb-nose7-232` × 10 dead** — cited across five entries written *before*
the fold list was applied, because Q232 was staged with a number like every other question and the
number is what the cross-references reached for. All ten repointed to `entep-nose-57`, and the one
cross-reference list that then held the id twice was rewritten.

**Fourth occurrence of this fault, and the first at this scale.** The three earlier ones were single
references to ids retired by a fold or not yet written. **The rule needs sharpening: when a staged
question folds, its number is dead the moment the fold is decided — grep the drafted blocks for it
BEFORE splicing, not after.** The dead-id check caught it either way, which is the third time that
check has found real damage.

#### ⚠️ ONE DISPUTED KEY — Q206, RAISED FOR INTERVIEW

*"What is the most common congenital nasal mass?"* keys **meningoencephalocele** over a list offering
**dermoid cyst**. Standard teaching makes the **nasal dermoid** the commonest congenital midline nasal
mass by a wide margin (of the order of 60 % against 5–10 % each for encephalocele and glioma).
**`L26) nasal masses.pdf` classifies these lesions and ranks nothing**, and the corpus sweep found no
entry in either bank that ranks them — `entep-nose-48` (p.993) keys *encephalocele* but from a
vignette, not a frequency. **Nothing in the material settles it.** Transcribed as keyed, both readings
recorded, added to the interview list and to the disputed roster in §11.

Distinguish it from `entqb-nose1-34`, which asks the commonest congenital **anomaly** and keys
**choanal atresia** — grounded in `L23`. *Anomaly* and *mass* are different categories and both keys
can stand.

#### ⚠️ FIVE STEM REPAIRS IN ONE CHAPTER — THE MOST OF ANY SO FAR

| Q | Defect |
|---|---|
| **Q208** | *"In the previous case…"* → back-reference to Q207 |
| **Q220** | *"in the previous case…"* → back-reference to Q219, **and prints its own number twice** |
| **Q221** | *"In the same case…"* → **three-deep chain**, Q219 → Q220 → Q221, the longest in the bank |
| **Q227** | **NO INTERROGATIVE AT ALL** — the vignette stops at *"denies any associated facial pain or fever"* and the question sentence is simply absent |
| **Q229** | *"…of the previous case?"* → back-reference to Q228 |
| **Q235** | **asks itself twice** — *"…diagnosis and the best next step in management? What is the most Probable Diagnosis:"* — and the options answer only the diagnosis |
| **Q231** | prints its own number twice |

**⚠️ Q227 IS A NEW DEFECT SHAPE: A STEM WITH NO QUESTION.** Every previous repair fixed a reference
that could not resolve; this one supplies a sentence that was never printed. It is only answerable at
all because the option list is a differential. Running total of repaired linked-set stems: 5/41 Ear
ch.3, 6/22 ch.6, 2/26 ch.9, 1/46 Nose ch.1, 1/22 ch.5, 1/13 ch.6, **5/32 here.**
Number-printed-twice: Nose ch.3 ×3, ch.6 ×1, **ch.7 ×2** — six in all.

#### ⚠️ A THIRD OPTION-COUNT FORMAT

**Q226 prints only THREE options.** Ch.6 gave the first two-option question (`entqb-nose6-198`); this
is the first three-option one. Both parse and render, and the validator confirms option counts of 2,
3 and 4 all coexisting without incident.

#### Four figures cut, all printed WITH the question

`q-gg-76` (Q210, septal haematoma — **essential**, the stem gives only "trauma… no fever"),
`q-gg-77` (Q216, two-panel endoscopy — supporting), `q-gg-79a` (Q234, two endoscopic views —
**essential**, the printed stem carries **no clinical detail beyond the laterality**) and `q-gg-79b`
(Q235, endoscopy + axial CT + angiogram — supporting).

**All four first-pass crops caught option or question text** and were re-cut once; the second pass was
clean on all four. **That is 13 of 13 Grade Gain crops now wrong on the first attempt** — the layout,
not the measurement, is the trap. Assets: 43 → **47 files, all referenced, all loading.**

**Q234 is the strongest case yet for `imgEssential`**: its entire printed stem is *"A patient complains
of unilateral nasal obstruction. By examination:"* followed by *"The treatment is"*. Without the
photographs there is no question at all.

#### Grounding: `L26` carries almost the whole chapter

`L26) nasal masses.pdf` had been read before but never used at this depth. It supplied: the location
table (midline / unilateral / bilateral); the septal-haematoma definition; the encephalocele
definition (*"intracranial tissue herniates through a defect in the cranium"*); **inverted papilloma**
(LNW at MT and maxillary ostium, *males 40–60*, HPV, **malignancy 5–15 %**, irregular pinkish masses
with a tendency to bleed, ribbons of hyperplastic epithelium in an inverted pattern); **antrochoanal
polyp** (smooth soft inflammatory mass from the maxillary sinus, solid nasal + cystic antral component
on a narrow neck, sometimes too huge to extract through the nose); **angiofibroma** (centred on the
**SPF**, males in adolescence, presentation list including **facial asymmetry**, *"Biopsy ??"*, CT
angiography, **Holman-Miller sign**, widening of the SPF, **salt-and-pepper** flow voids, *"mainly
supplied from **ECA (IMAX)**"*); the **malignancy** list headed by squamous cell carcinoma with its
presentation percentages; **polyp origins by site** (80 % uncinate–MT–infundibulum, 66 % bulla–hiatus,
48 % frontal recess…); the aetiology list including **cystic fibrosis**; the medical-treatment and
surgical-indication lists; and the **alarming symptoms** slide.

**Filled from general knowledge and tagged**, all added to §11's list: the **relative frequencies of
congenital midline nasal masses** and the dermoid/glioma/meningocele discrimination table; the
**Furstenberg test**; **beta-2 transferrin** and the confirm-versus-localise split for CSF leaks; the
**fossa of Rosenmüller's** anatomy and the unilateral-serous-otitis rule; the **osteomeatal complex**
anatomy (infundibulum, uncinate, hiatus semilunaris) behind Q226; the antrochoanal polyp's **2:1 sex
ratio** (absent from every slide); the **Caldwell-Luc** comparison; and the **pre-operative
embolisation interval**.

#### ⚠️ A DISPUTED KEY IN THE OTHER BANK IS FURTHER UNDERMINED

`entep-mfe7-1` (p.2784) keys **juvenile angiofibroma** for *"unilateral watery rhinorrhea which
increases on bending forward"*. **Grade Gain's Q209 asks that exact sentence and keys "exclude
meningocele"** — the CSF pathway. With `entep-nose-19` (p.927, keys **CSF rhinorrhoea**) and
`entep-enr-6` (p.2852, keys **CSF leak**), that is **three printings against one**. The dispute stays
open pending a reprint, but it is now much the weaker side.

#### Verified in a real `file://` boot

`parse errors: none` on the first attempt for both blocks and again after each splice. `Q_ENT` **1,093**
/ `C_ENT` **82** / total **1,175**; 104 chapters; 0 bad refs, 0 duplicate ids, every answer in range,
no empty options, nothing missing a source, explanation or objective; **0 dead backticked ids out of
2,849 references** after the repair; **50 image references over 47 unique files, all loading**; every
`imgAlt` present and no path-instead-of-basename; mojibake clean.

By bank **697 endpoint / 21 house / 490 gradegain** = 1,208 over 1,175 — **33** shared memberships
across **32** questions. Origin only: **697 / 20 / 458**. Authored markers **827 of 1,175**, matching
the predicted **+29** exactly (30 written − 1 boxed).

**The both-ways marker audit caught two misses before splicing** (Q207 and Q234), which is what it is
for. One of them had already gone into the file with block A and was repaired in place.

**Reconciles:** Ear 261 + Nose ch.1 46 + ch.2 38 + ch.3 61 + ch.4 23 + ch.5 22 + ch.6 13 + ch.7 32 =
**496 printed, 458 written, 38 folded** — **32 cross-bank `alsoIn`** and **6 within-bank reprints held
once**.

**Next: Nose ch.8, "Nasal septal diseases", book p.81 onward (PDF 90 onward).** It opens at **Q236**,
confirmed by rendering. **Check the contents map for its page range and promised count, then render
one page past the last answer page as always.** Its first page shows a **Type 1 / 2 / 3 septal
fracture classification** (Q236–Q240) that appears **nowhere in `L24) diseases of the nasal septum.txt`**
— expect to fill it and tag it — plus DNS prevalence figures (Q242 offers "92 % vs 40 %" and "50 % of
the population") that will need checking against `L24`'s own *"Extremly common 80 % of population,
more in males"*. **⚠️ Q242's option d and option a contradict each other on the same axis (Caucasians
vs Africans), so read the key carefully.**

---

### §14q — Grade Gain, NOSE chapter 8: "Nasal septal diseases" (2026-08-11)

**Questions book pp.81–83 (PDF 90–92); answers book p.84 (PDF 93).**
**23 printed, Q236 … Q258, against 22 promised. ALL 23 WRITTEN (`entqb-nose8-236` … `-258`), ZERO folds.**
Every entry is `ent-septum` — the first single-chapter batch in the Nose section.
Page split: p.81 = Q236–Q243, p.82 = Q244–Q249, p.83 = Q250–Q258.

#### Page shape clean for the third chapter running

All 23 keys on p.84; no question tail on the answer page, no run-over. Book p.85 opens "Minor Nasal
Procedures" at **Q259** and holds that whole chapter (7 promised) on one page. Overlap six of
seventeen; run-over two of four. Running count record: …, 22/21, 13/12, 32/31, **23/22** — ranges
right **seventeen** times, counts wrong **fourteen**, always upward.

#### ⚠️ ZERO FOLDS — AND THE ZERO IS EXPLAINED, NOT JUST REPORTED

Stage A returned nothing. Every other stage's hits were run down side by side and all are false
positives; the reason is that **endpoint teaches DNS through its *symptoms and complications* and
never through its *classification or examination*.** The chapter's whole vocabulary is absent from
the corpus:

| Term searched | Hits corpus-wide |
|---|---|
| `cottle` | **0** |
| `osteocartilaginous` | **0** |
| `c-shaped` / `s shaped` | **0** |
| `nasal valve` | **0** |
| `turbinate hypertroph` | **0** |
| `caucas` | **0** |
| `anterior dislocation` | **0** |

**Three near-misses worth recording, because each is a known trap firing again:**

| Staged | Matched | Stage | Verdict |
|---|---|---|---|
| **Q256** | `entqb-nose6-198` | **B + F 1.00** | **NOT a fold — the TRUE/FALSE collision.** Same option set (`True`/`False`), same key (`True`), **different stem**. Second time a two-option question has produced a spurious 1.00 |
| **Q258** | `entqb-nose7-210` | **F 1.00** | **NOT a fold.** Identical four-option menu (hematoma / perforation / synechae / abscess) but a **different key**. `entqb-nose8-250` shares the same menu and keys a third answer |
| **Q252** | `entep-nose-77` | C + F 0.50 | **NOT a fold.** Same discriminator (steroids fail, decongestants help partly) and same key, but **two of four distractors are replaced** — a replaced distractor is a new question |

**⚠️ THE TRUE/FALSE FORMAT WILL KEEP DOING THIS.** Any two true/false questions in the bank match at
stage B, stage C and stage F 1.00 by construction, because their option set and their key are drawn
from a two-item vocabulary. **A true/false hit at B/C/F is worthless — only the stem decides**, and
stage E is the only stage that reads it (Q256 vs `entqb-nose6-198` scored **0.17**). Expect the same
false pair on every future true/false.

#### The septal-haematoma cluster: three questions, three held, none folded

Q246 / Q247 / Q248 sit against endpoint's four (`entep-nose-8`, `-25`, `-88`, `-101`) and this bank's
own `entqb-nose7-210`. **Every pairing has a replaced option set and a different vignette**, so all
are held. The set is now the fullest treatment of one topic in ENT, and the questions divide cleanly
by *what they ask*: Q246 diagnosis at day 0, Q247 diagnosis at day 7 with fever, Q248 treatment.
**The bank's own box at Q247 supplies the rule that separates them** — *"Any hematoma more than 3
days = infection Any infection = abscess = necrosis of cartilage"* — and it is quoted into Q246,
Q248 and Q251, so one printed line grounds four entries.

#### ⚠️ Q242 HAS TWO CORRECT ANSWERS — AND THE UNKEYED ONE IS THE ONE THE LECTURE TEACHES

Key **a**: *"Caucasians are more affected than Africans, with a prevalence of 92 % vs. 40 %."*
Option **b**: *"DNS is more common in males than females"* — **also true, and stated verbatim on
`L24) diseases of the nasal septum.pdf`**: *"Extremly common 80 % of population, more in males."*
The slide's own **80 %** matches **neither** offered figure (92 %/40 %, or 50 % in option c).

Fourth question of this shape after Nose ch.1 Q11 and Q19 and ch.3 Q135. **Handled under the user's
standing instruction of 2026-08-11** (below): keyed as the bank keys it, with the discrepancy written
beside it in the explanation. **Not added to the disputed roster** — under the new rule there is no
roster to add it to.

#### ⚠️ THE USER'S RULING OF 2026-08-11 — DEFECTIVE KEYS ARE NOTED, NOT DISPUTED

Asked about `entqb-nose7-206`, the user answered verbatim: *"put the answer as Grade Gain says and
put a note beside it that it's not mentioned directly in the lectures. **Do that with any questions
that have errors like that, just leave a note beside.**"*

**This closes the disputed-key roster as a category of open work.** `answer` is always the bank's
printed key; the discrepancy becomes a short note inside the `explanation` naming what the lecture
says or that no lecture covers it. **Do not raise a key dispute with the user again** — raise only
things they can actually supply, such as a missing lecture file. The nine open disputes in §11 are to
be rewritten as notes rather than carried as questions.

#### ⚠️ THE TYPE 1/2/3 CLASSIFICATION IS IN NO CACHED SLIDE — FIVE ENTRIES TAGGED

Q236–Q240 turn entirely on a three-type grading of septal fracture. `L24` gives only three *axes* —
*"Classification: Nature of injury / Extent of deformity / Pattern of fracture"* — and names no types.
The scheme was **recovered from the bank's own four keys read together** and written into
`entqb-nose8-236` as a table, tagged as outside the course material:

| Type | Lines | Crosses the osteocartilaginous junction | Stability | Complications |
|---|---|---|---|---|
| 1 | single | no | most | fewest |
| 2 | single | **yes** | intermediate | intermediate |
| 3 | **multiple** | may | least | most |

**The discriminating axis changes between the pairs** — crossing separates 1 from 2; *number of
lines* separates 2 from 3. Q240's key says *"Can be crossing"*, which is what makes that explicit.
Also: the bank prints Q240's stem as *"nasal septal fractures"* while Q236–Q239 say *"nasal
fracture"*; the osteocartilaginous junction is a septal landmark, so one classification is meant
throughout. Transcribed as printed.

#### ⚠️ THE NUMBER-PRINTED-TWICE DEFECT MOVES TO THE ANSWER LIST

**Q252–Q258 print their own number twice in the ANSWERS** (*"252. 252.Correct answer: …"*), **seven
in a row**, while their question stems are clean. Every previous instance — Nose ch.3 ×3, ch.6 Q197,
ch.7 Q220 and Q231 — was in the **question**. Q265 on p.85 shows the stem form again, so both
locations are live. Cosmetic; stripped in transcription.

#### `L24` carries far more of this chapter than expected — including the Cottle test

`L24) diseases of the nasal septum.pdf` had been read for ch.6 but is the backbone here. It supplied:
the **three-part septal anatomy**; the quadrilateral cartilage at *"3-4 mm thick"* and its role in
*"support to the tip and dorsum"* — the single most load-bearing sentence in the chapter, grounding
six entries; the arterial supply; the fracture aetiopathogenesis and the *"Look for septal hematoma,
abscess"* instruction; the observation / closed-reduction / *"Open reduction (Septorhinoplasty)"*
ladder with its instruments; the **four-group DNS aetiology** (trauma, developmental, racial,
mass effect); the **morphological list** (*C or S shaped*, *Spurs*, *Anterior dislocation* — three
separate entries, which is what makes Q256 answerable); the full **symptom list** including
*"Mucosal changes : dryness, crusting and epistaxis"* and the *"Anterior ethmoidal nerve syndrome"*;
and the two operations, *SMR* and *Septoplasty*.

**⚠️ The Cottle test IS on the slide, and the staged file was wrong to expect a gap.** `L24` ends the
DNS symptoms with *"Deviations in region of nasal valve cause greatest obstruction : **cottle
test**"* — the exact link Q245 tests. **Fifth time now that a point staged as "not covered" has been
found in the lectures once they were actually read.** Staging sees only the bank; read the slide
before declaring a gap.

**Filled from general knowledge and tagged** (added to §11): the Type 1/2/3 scheme and the
cartilage-versus-bone mechanics; the **rankings** the slide declines to give (commonest cause of
symptomatic DNS, commonest morphological type, commonest cause of perforation, commonest
complication of septal surgery); the **definition and management of nasal synechiae**, which no
cached ENT slide defines at all; the **septal-abscess complication list** and the cavernous-sinus
route behind its meningitis; the **causes-of-perforation list**; the **obstructive mechanism of
hyposmia** in DNS; the **triad of septal perforation** (crusting / epistaxis / whistling) and why
whistling implies a *small* defect; the internal nasal valve's boundaries and the Cottle manoeuvre
itself; and the per-type unilateral/bilateral obstruction mapping.

#### Two figures, and the first clean first-pass crops in this bank

- **`q-gg-83a`** (Q250, book p.83) — coronal CT with the bank's **red arrow**, kept. **`imgEssential`:
  the stem says only *"this disease"* and the box only *"The CT shows DNS"**, so the picture is the
  entire identification. 782×590, 138 KB.
- **`q-gg-83b`** (Q258, book p.83) — endoscopic view of the perforation. **Supporting**, since the
  printed triad is already diagnostic. 1012×514, 163 KB.

**Both were clean on the first attempt — the first time that has happened with a Grade Gain page.**
The running record was 13 of 13 wrong; it is now **13 of 15**. What was done differently: the page
was rendered once at 300 dpi and cropped with `System.Drawing` against the 130 dpi proof, so the
boundaries could be read off a picture already looked at rather than estimated from the PDF. Assets:
47 → **49 files, all referenced, all loading.**

#### Verified in a real `file://` boot

`parse errors: none` on the first attempt, before and after the splice. `Q_ENT` **1,116** / `C_ENT`
**82** / total **1,198**; 104 chapters; 0 bad refs, 0 duplicate ids, every answer in range, no empty
options, nothing missing a source, explanation or objective; **0 dead backticked ids out of 2,991
references**; **52 image references over 49 unique files, all loading**; every `imgAlt` present, no
path-instead-of-basename; mojibake clean.

By bank **697 endpoint / 21 house / 513 gradegain** = 1,231 over 1,198 — **33** shared memberships
across **32** questions, unchanged. Origin only: **697 / 20 / 481**. Authored markers **847 of
1,198**, matching the predicted **+20** exactly (23 written − 3 boxed).

**The pre-splice marker audit was clean both ways on the first run** — the first chapter for which
that is true. Misses by chapter: 6 → 2 → 1 → 0 → 2 → **0**.

**Option counts:** 22 fours and one two (`entqb-nose8-256`). Counts of 2, 3 and 4 continue to coexist.

**Reconciles:** Ear 261 + Nose ch.1 46 + ch.2 38 + ch.3 61 + ch.4 23 + ch.5 22 + ch.6 13 + ch.7 32 +
ch.8 23 = **519 printed, 481 written, 38 folded** — **32 cross-bank `alsoIn`** and **6 within-bank
reprints held once**. Grade Gain origin count **481** matches exactly.

#### ⚠️ REVIEW ITEM 1 IS NOW AUTOMATED AND SATISFIED

§11's first owed item was *"sweep the WHOLE file for 'Ask ChatGPT' — 5 known, each found by eye,
never by a search."* **The validator now runs that search every time.** It returns **four entries** —
`entep-nose-34`, `entep-nose-35`, `entep-throat-33`, `entep-throat-53` — and **all four are already
flagged deliberately**: each records that *the bank's own printed explanation box* ends with the
literal string, pasted out of a chatbot by the compilers, and marks it `⚠️` rather than trusting it.
A fifth defect of the same class, the placeholder *"[Effect not specified here]"*, is likewise
recorded. **Nothing is residue and nothing needs removing** — the item can be struck, and the search
now runs on every batch rather than depending on the eye.

**Next: Nose ch.9, "Minor Nasal Procedures", book p.85 (PDF 94).** It opens at **Q259**, 7 promised,
and **the entire question set fits on that one page, which is already rendered** at
`<scratchpad>\gg8\p-094.png`. **Q265 prints its own number twice in the stem.** After it, Nose closes
at 9 topics against 258 promised, and the **Throat section begins at book p.87** — **check the
running header there**: the number should become **3** and the numbering should **restart at 1**.
Nose has held one continuous run from Q1 to Q265 with headers reading *"Chapter 2: <topic>"*.

---

### §14r — Grade Gain, NOSE chapter 9: "Minor Nasal Procedures" — **AND THE NOSE SECTION CLOSES** (2026-08-11)

**Questions book p.85 (PDF 94); answers book p.86 (PDF 95).**
**7 printed, Q259 … Q265, against 7 promised — EXACT. All 7 written (`entqb-nose9-259` … `-265`), ZERO folds.**
Chapters: `ent-septum` 3, `ent-rhin` 3, `ent-epistaxis` 1.

#### The third exact count in eighteen chapters

29/29, 46/46 and now **7/7**. Running record: ranges right **eighteen** times, counts wrong **fourteen**,
always upward. **Fourth clean sheet running** — whole question set on one page, every key on the next,
no question tail on the answer page and no run-over.

#### ✅ THE SECTION BOUNDARY IS SETTLED — AND IT BEHAVED EXACTLY AS PREDICTED

Book p.87 (PDF 96) opens a **full-page banner reading "CHAPTER 3: THROAT"**, the first topic is
*"Anatomy & physiology of throat"*, and **the numbering RESTARTS AT 1**. That closes the question
carried since Ear: **the running header's number is the SECTION and its title is the TOPIC**;
numbering runs continuously inside a section and restarts only at one. Nose ran unbroken from Q1 to
Q265 under *"Chapter 2: <topic>"*.

**⚠️ Throat ids need their own section token — `entqb-thr1-1` — or they collide with both Nose Q1 and
Ear Q1.** The pattern `entqb-<section><topic>-<n>` has held for eighteen chapters; keep it.

#### ⚠️ A LATER PRINTING CORRECTED WORK DONE EARLIER THE SAME DAY

**Q259 keys *"SMR, Cocaine abuse"*** — a two-blank fill-in-the-blank whose options are **pairs**, so
both halves must be right. It ranks the causes of septal perforation explicitly: **SMR first, cocaine
second.**

`entqb-nose8-249`, written four hours earlier, keys SMR as commonest and its explanation had called
trauma *"the commonest non-surgical cause"* — which puts trauma second. **The bank's own later
printing says cocaine.** Both entries were corrected in place: Q249's table now orders cocaine above
trauma and cites Q259 for the ranking. **Fresh instance of the settled rule that a later printing
resolves an earlier judgement** — and the first time it has corrected something written in the same
session rather than months earlier. **Argument for reading a whole section before writing any of it;
the counter-argument is context, and context lost that round.**

#### Zero folds, explained again

Stage A, stage B **and stage E** all returned nothing — the first chapter where three stages are
simultaneously empty. Every C/D/F hit is a shared-key-word artefact (*atrophic rhinitis*, *septal
perforation*, *all of the above*). Corpus-wide keyword checks: `cobblestone` **0**, `turbinectomy`
**0**, `silver nitrate` **0**, `gold standard` **0**, `empty nose` **0**, `submucous` **0**, `smr`
**1** (the entry written this morning). **This chapter is about operations, and neither bank has
asked about nasal operations before.**

Two near-pairs held rather than folded: **Q261** (gold standard for DNS → septoplasty) against
`entqb-nose2-83` (definitive treatment of DNS with a spur causing epistaxis → septoplasty) — same key,
wholly replaced option set; and **Q260** (cobblestone occurs in all **except** atrophic rhinitis)
against `entqb-nose3-101` (which condition shows mulberry mucosa → chronic hypertrophic rhinitis) —
reciprocal questions, and **consistent**, since hypertrophic rhinitis is the end-stage that allergic,
infective and vasomotor rhinitis all converge on.

#### The best explanation box in the Nose section

Q265's box is the longest and by some distance the most useful, and it is written in the first person:

> *"…it is mucosa on mucosa without cartilage in between so more liable for septal perforation… in
> perforation the air enters through the perforation to both sides causing resistance to air in both
> sides → we call this functional nasal obstruction→ **I converted laminar flow to turbulent flow**
> leading to crustations, bleeding, bad odor and resistance to flow."*

It answers *"which is a complication of SMR?"* by **chaining all three options together** — perforation
→ turbulent flow → crusting, bleeding, bad odour and paradoxical obstruction — which is why *All of
the above* is right and why the entry is written as a chain rather than a list. **It also grounds
three other entries**: Q259's mechanism, Q261's septoplasty-over-SMR argument, and Q263's empty nose.
Q262's shorter box supplies Q263's answer outright.

**Boxes 2 of 7 (~29 %)**, against the section's running ~30 %.

#### ⚠️ Q265 PRINTS ITS OWN NUMBER TWICE IN THE STEM — predicted, and confirmed

*"265. 265.Which of the following is a complication of SMR?"* The ch.8 read predicted this from the
facing page. **Both locations of the fault are now live in the same bank** — Q252–Q258 in the answer
list, Q265 in a stem. Seventh stem instance overall.

#### Grounding

`L24) diseases of the nasal septum.pdf` supplied the two operations (*SMR*, *Septoplasty*) and the
*"3-4 mm thick"* avascular cartilage that explains **every** perforation on the page; `L29) Rhinitis
1.pdf` supplied the *"Thick, nodular mucosa… (mulberry like)"* line and the atrophic-rhinitis picture.

**Filled from general knowledge and tagged** (added to §11): **empty nose syndrome**, which appears on
no cached slide and is the point of two questions; the **SMR-versus-septoplasty comparison table**;
the **primary/secondary atrophic rhinitis** split and the causes of the secondary form; **silver
nitrate cautery**, its both-sides hazard and the **4–6 week staging interval**, neither of which any
slide describes; the term **cobblestone**; the **turbinate's role in airflow resistance and sensation**;
and the **ranking** of perforation causes beyond what Q259 itself states.

#### Verified in a real `file://` boot

`parse errors: none`, first attempt, before and after the splice. `Q_ENT` **1,123** / `C_ENT` **82** /
total **1,205**; 104 chapters; 0 bad refs, 0 duplicate ids, every answer in range, nothing missing a
source, explanation or objective; **0 dead backticked ids out of 3,049 references**; 52 image
references over 49 files, all loading; mojibake clean. By bank **697 / 21 / 520** = 1,238 over 1,205 —
**33** shared memberships across **32** questions, unchanged since ch.7. Origin only **697 / 20 /
488**. Authored markers **852 of 1,205**, matching the predicted **+5** exactly (7 written − 2 boxed).
The pre-splice marker audit was **clean both ways on the first run for the second chapter running**.

---

### ✅ THE GRADE GAIN **NOSE** SECTION IS CLOSED — 9 topics, book pp.44–86

| Topic | Book pp. | Printed | Promised | Written | Folded |
|---|---|---|---|---|---|
| 1 Nasal symptoms & epistaxis | 44–48 | 46 | 46 | 44 | 2 |
| 2 Epistaxis & related | 49–54 | 38 | 37 | 34 | 4 |
| 3 Rhinitis | 55–63 | 61 | 60 | 56 | 5 |
| 4 Rhinosinusitis | 64–68 | 23 | 22 | 19 | 4 |
| 5 Nasal symptoms II | 69–72 | 22 | 21 | 21 | 1 |
| 6 Nasal fractures | 73–75 | 13 | 12 | 13 | 0 |
| 7 Sino-nasal masses | 76–80 | 32 | 31 | 30 | 2 |
| 8 Nasal septal diseases | 81–84 | 23 | 22 | 23 | 0 |
| 9 Minor nasal procedures | 85–86 | 7 | 7 | 7 | 0 |
| **NOSE TOTAL** | **44–86** | **265** | **258** | **247** | **18** |

**The section ran seven questions longer than its own contents page promised** — the same upward
drift as Ear. **Folds were completely unpredictable** (2, 4, 5, 4, 1, 0, 2, 0, 0), which is the
argument for running the full six-stage sweep on every topic regardless of how the last one went.

**Grade Gain overall: Ear 261 + Nose 265 = 526 printed, 488 written, 38 folded** — 32 cross-bank
`alsoIn` and 6 within-bank reprints held once. The origin count reads **488**, matching exactly.
**Throat remains: 11 topics, 578 promised, book pp.87 onward — larger than Ear and Nose combined.**

**Next: Throat topic 1, "Anatomy & physiology of throat", book p.87 (PDF 96), already rendered.** Its
first page prints Q1–Q10 in two columns, so expect the usual ~10 per page. **Before writing any of
it, read `L1.1) Surgical anatomy of the larynx.pdf` and `L1.2) Anatomy of the pharynx.pdf`** — both
are ENT source PDFs with **no cached `.txt`**, and both are exactly this topic. **Do not declare a
Throat anatomy gap until they have been read.**

---

### §14s — Grade Gain, THROAT topic 1: "Anatomy & physiology of throat" — READ AND STAGED (2026-08-11)

**Questions book pp.87–90 (PDF 96–99); answers book p.91 (PDF 100).**
**40 printed, Q1 … Q40, against 40 promised — EXACT.** Verbatim staging in
`content\ent\qb-pages\gg-throat-ch1.staged.js`. **⚠️ NOT YET WRITTEN — do not re-render PDF 96–101.**

#### The section opens exactly as the Nose close predicted

Full-page **"CHAPTER 3: THROAT"** banner on book p.87; numbering **restarts at 1**; the running header
then reads **"Chapter 3: <topic>"** and Q40 → Q41 runs straight across into topic 2 on book p.92.
Third section, same structure three times. **Ids take a `thr` token: `entqb-thr1-1` … `-40`.**

**Fifth clean sheet running** — all 40 keys on one page, no question tail on it, no run-over.
Fourth exact count in nineteen chapters (29/29, 46/46, 7/7, 40/40).

#### ⚠️ ONE PRINTED BOX IN FORTY — 2.5 %, THE LOWEST RATE YET

Q25 alone (*"SLN supplies cricothyroid muscle which is the only tensor of the cord and responsible of
high-pitched sound."*). The whole answer sheet is otherwise a bare key list. Against this bank's
running ~30 %, and below Nose ch.7's previous low of ~3 %. **Box presence is a property of the PAGE**
— now demonstrated in both banks and in all three sections. **Expect ~39 authored explanations**,
which makes this a large writing job for its question count.

#### ⚠️ FOUR THINGS FOUND IN THE READ, ALL RECORDED IN THE STAGING

1. **Q2 may have two correct answers.** *"All of the following occurs at the lower border of C6
   except"* keys **"Beginning of pharynx"** — right, since the pharynx begins at the skull base and
   *ends* at C6. **But "Bifurcation of carotid artery" is not a C6 event either**: the common carotid
   divides at the upper border of the thyroid cartilage, **C3–C4**. At C6 sit the cricoid, the end of
   the larynx, the start of trachea and oesophagus, and the carotid tubercle. **Check
   `L1.2) Anatomy of the pharynx.pdf` before writing** — if the lecture itself teaches C6, the key
   stands unremarked. Otherwise: key as printed, note beside, per the user's ruling of 2026-08-11.
2. **Q19 offers a muscle that does not exist** — option a, *"anterior cricoarytenoid muscle"*. The
   pair are **posterior** (abductor, and the key) and **lateral** (adductor). Transcribe as printed
   and say so.
3. **Q21 is ambiguous as worded.** *"What is the result if vocal cords are in paramedian position?"*
   keys **stridor**, true only if the position is **bilateral**; unilateral paramedian gives
   hoarseness, which is offered as option d. The bank is internally consistent (Q34 keys bilateral
   abductor palsy for stridor), so the intended reading is bilateral — supply the qualifier and say
   it was supplied. **This is the "flagged, not disputed" shape**, like Nose ch.3 Q114.
4. **Q12 prints FIVE options** and keys **E**. Option counts of 2, 3, 4 and 5 now all coexist.

#### ⚠️ AN IDENTICAL-MENU CLUSTER THAT WILL TRIP THE SWEEP

**Q34, Q35 and Q36 share one four-option list** — bilateral adductor / bilateral abductor /
unilateral abductor / unilateral adductor — and key **three different answers** (B, A, D). Q21, Q22,
Q25 and Q39 test the same axis from other directions. **Stages B, C and F will pair Q34/Q35/Q36 with
each other at or near 1.00.** Same trap as Nose ch.8's Q250/Q258/`entqb-nose7-210`: **an identical
menu with a different key is not a fold, and only the stem decides.** Expect it and do not re-derive
it.

#### ⚠️⚠️ VERIFIED: `L1.1` AND `L1.2` ARE IMAGE-ONLY — THAT IS WHY THEY WERE NEVER CACHED

Tested directly with `pdftotext -layout` on 2026-08-11:

| Lecture | Pages | Extracted |
|---|---|---|
| `L1.1) Surgical anatomy of the larynx.pdf` | 16 | **306 chars — the title slide only** |
| `L1.2) Anatomy of the pharynx.pdf` | 24 | **330 chars — the title slide only** |

Both return the author's name and the deck title and **nothing else**. Earlier notes recorded these
two as "PDFs with no cached text" without saying why; **the answer is that extraction genuinely
fails**, so they belong to the render-and-read tier despite being lecture slides. **They are the only
two ENT decks in that state** — the count therefore stands at **34 ENT source PDFs / 32 cached, and
the two uncached ones cannot be cached by extraction.** This closes an open question in §11 and
removes them from the "not yet harvested" category: they were never harvestable.

**Both are rendered and waiting** at `<scratchpad>\lec-l1\` (`pharynx-01..24`, `larynx-01..16`,
110 dpi, 40 slides). **Read them visually BEFORE writing this topic and cache the transcription to
`content\ent\lectures\`** — 40 questions of pure anatomy rest on them, and so does much of the rest of
Throat. **⚠️ Do not declare a Throat anatomy gap until they have been read.**

#### Sweep not yet run — expect folds, unlike the last two chapters

Endpoint's Throat run is the largest in that bank, so the two zero-fold chapters just closed are no
guide. Candidates flagged in the staging: Waldeyer's ring (Q12), the only complete ring (Q17),
posterior cricoarytenoid as sole abductor (Q19), cadaveric position (Q22, Q39), Reinke's space (Q26),
Killian's dehiscence and Zenker's (Q31), fossa of Rosenmuller and nasopharyngeal carcinoma (Q40), and
**secretory otitis media as the commonest paediatric conductive loss (Q5), which overlaps the Ear run
heavily.**

**Q40 also touches §11's highest-value open gap** — the nasopharynx, where up to 27 entries rest on
outside knowledge and one book read would fix it.

#### Next steps, in order

1. **Read the 40 rendered slides** of `L1.1` and `L1.2`; cache both to `content\ent\lectures\`.
2. Run the six-stage sweep for `GGT1_STAGED`; expect and discount the Q34/Q35/Q36 self-pairing.
3. Resolve Q2 against `L1.2`.
4. Write, marker-audit both ways, parse-check, splice, validate, ledger, MEMORY, commit.

**No figures on any of the five pages.**

---

### §14t — Grade Gain, THROAT topic 1: "Anatomy & physiology of throat" — WRITTEN (2026-08-11)

**40 printed, Q1 … Q40, against 40 promised — EXACT. 34 written (`entqb-thr1-1` … `-39`), 6 FOLDED.**
Chapters: `ent-pharanat` 27, `ent-vocal` 5, `ent-hearing` 1, `ent-tonsils` 1.

#### ⚠️ THE TWO IMAGE-ONLY LECTURES ARE NOW CACHED — 40 SLIDES READ VISUALLY

`L1.1) Surgical anatomy of the larynx.pdf` (16 slides) and `L1.2) Anatomy of the pharynx.pdf`
(24 slides) were rendered at 110 dpi, read as **four-up contact sheets** (10 reads instead of 40),
and transcribed to `content\ent\lectures\L1.1) ….txt` and `L1.2) ….txt`. **The four-up sheet at
760 px per slide keeps headings and bullets legible** and cost roughly half of forty single reads;
fine print inside embedded textbook plates is not legible and is recorded as "figure present".

**They repay the effort out of all proportion.** `L1.2` alone grounded **eleven** questions verbatim —
the four-wall list of the oropharynx (Q6), the pillars (Q7), *"Passawnt's bridge"* spelled exactly as
the bank spells it (Q8), the six-item function list with its *"2nd 'pharyngeal' phase"* parenthesis on
which Q9 entirely turns, the four-component tonsillar bed (Q10), *"Tonsillar branch of Facial artery
(main)"* (Q11), the *"Jugulo-diagastric LN"* (Q30), the five-member Waldeyer's ring (Q12/Q27),
Killian's triangle beside Zenker diverticulum (Q31), and the fossa of Rosenmuller (Q4/Q40).
`L1.1` grounded the arytenoid processes (Q18), the muscle set (Q19/Q24), the layered fold with its
squamous epithelium (Q23/Q26), and the SLN/RLN division (Q20/Q25/Q29).

**⚠️ It also SETTLED a staged question by proving a negative.** Q2's suspected second answer was
checked slide by slide against both decks: **neither states any vertebral level and neither labels
the carotid bifurcation.** So nothing in the course material resolves it — recorded, not corrected.
Each cache file ends with an explicit **"NOT COVERED ANYWHERE IN THIS DECK"** list for exactly this.

#### The six folds — and the identical-menu prediction was exactly right

| Staged | Folds into | Stage | Note |
|---|---|---|---|
| Q12 Waldeyer's ring | `entep-throat-66` | E 0.67 / F 0.60 | Grade Gain **ADDS a fifth option** (*Lingual tonsils*) and writes *Adenoid* for *Nasopharyngeal tonsils*. **An added distractor is a reprint** |
| Q35 HOV + aspiration | `entep-throat-36` | **B** | same option set, same key |
| Q36 breathy weak voice | `entep-throat-33` | **B** | same option set, same key |
| Q37 muscle spared by RLN | `entep-throat-9` | C, F 0.83 | **abbreviates** *Posterior cricoarytenoid* to *Cricoarytenoid* — an abbreviated distractor is the same distractor |
| Q38 pyriform fossa referred pain | `entep-throat-103` | **B**, F 1.00 | **⚠️ NO BANK ADDED** — that entry already carries `gradegain` from Ear ch.1 Q24, so this is a **within-bank second printing**. Recorded only |
| Q40 fossa of Rosenmuller | `entep-nose-67` | **B**, F 1.00 | same stem, same options, same key |

**⚠️ THE IDENTICAL-MENU TRAP BEHAVED EXACTLY AS PREDICTED IN §14s.** Q34, Q35 and Q36 share one
option list; stages B, C and F paired all three with `entep-throat-33`/`-36` at or near 1.00.
**Two folded and one did not** — Q34 keys *bilateral abductor* for stridor-with-normal-voice, which
endpoint asks only from the other direction (`entep-throat-4`). **Predicting the trap in the staging
is what made this quick**; the rule holds — an identical menu with a different key is not a fold.

**Held rather than folded, with reasons:** Q5 against `entqb-ear7-190` and `entep-ear-245` (same key,
**all distractors replaced** in each); Q21 against `entep-throat-4` (inverted question); Q28's
pyriform-fossa fish bone (no corpus match — *fish bone* and *impaction* return nothing).

#### ⚠️ A FIFTH SILENT PARSE FAILURE — AND A NEW MECHANISM WORTH NAMING

The fold notes were applied with PowerShell `.Replace()`, and **PowerShell's `''` escape emits a
literal apostrophe**, which then closed the **single-quoted** JS `source:` string it landed in.
Three occurrences — *Henle's*, *entry's*, *this one's* — each breaking the file silently.

**The signature was diagnostic and is worth memorising:** the validator reported **36 dead backticked
ids that unmistakably exist** (`entep-throat-9` ×6, `entep-throat-103` ×4 …). **A dead-id list full of
ids you know are real means the DATA FILE DID NOT PARSE, not that the references are wrong.** The
error probe then gave line 4002, column 736, `Unexpected identifier 's'` — the fix itself.

**Rule going forward: when injecting prose into a single-quoted field, escape apostrophes as `\'`
in the replacement string — and remember PowerShell's own `''` is not that escape.**

#### One box in forty — 2.5 %, the lowest rate in the project

Q25 only (*"SLN supplies cricothyroid muscle which is the only tensor of the cord…"*), so **33 of the
34 entries carry the authored marker**. Below Nose ch.7's ~3 % and far below this bank's running ~30 %.

#### Two defects recorded beside their keys, under the user's ruling of 2026-08-11

- **Q2** — keys *"Beginning of pharynx"* as the non-C6 event, correctly; but **the carotid bifurcation
  is C3–C4**, so option b is also not a C6 event. Neither deck settles it. Keyed as printed, noted.
- **Q19** — option a names an **"anterior cricoarytenoid muscle", which does not exist**. Transcribed
  as printed and said so.
- **Q21** — **stem qualified.** *"Vocal cords in paramedian position"* gives stridor only if
  **bilateral**; unilaterally it gives hoarseness, which is offered as option d. *(bilaterally)* added,
  justified from the bank's own Q34, and the addition declared.

#### Verified in a real `file://` boot

`Q_ENT` **1,157** / `C_ENT` **82** / total **1,239**; 104 chapters; 0 bad refs, 0 duplicate ids, every
answer in range, nothing missing a source, explanation or objective; **0 dead backticked ids out of
3,228 references**; 52 image references over 49 files, all loading; mojibake clean.
By bank **697 / 21 / 559** = 1,277 over 1,239 — **38** shared memberships across **37** questions
(**+5**, since Q38 added none). Origin only **697 / 20 / 522**. Authored markers **885 of 1,239**,
matching the predicted **+33** exactly (34 written − 1 boxed).

**Reconciles:** Grade Gain **Ear 261 + Nose 265 + Throat topic 1 40 = 566 printed, 522 written,
44 folded** — 37 cross-bank `alsoIn` and 7 within-bank reprints held once. Origin count **522** matches.

**Next: Throat topic 2, "Pharyngeal and neck suppurations", book p.92 (PDF 101) onward.** It opens at
**Q41** and PDF 101–102 are **already rendered** at `<scratchpad>\gg9\`. Check the contents map for its
page range and promised count, and **render one page past the last answer page as always.**

---

### §14u — Grade Gain **THROAT topic 2, "Pharyngeal and neck suppurations"** — read, swept, written (2026-08-12)

**Book pp.92–98 (PDF 101–107). 47 printed against 46 promised. 45 written, 2 folded.**

| | |
|---|---|
| Questions | book pp.92–97 (PDF 101–106), Q41–Q87 unbroken |
| Answers | book p.98 (PDF 107) — **all 47 keys on one page** |
| Next topic | book p.99 (PDF 108) opens "Dysphagia" at Q88 |
| Printed boxes | **3 of 47 (~6 %)** — Q69, Q86, Q87, all one-line diagnosis recaps |
| Written / folded | **45 / 2** |
| Chapter | `ent-pharsupp`, all 45 — the first single-chapter topic in Grade Gain |

**⚠️ The answer page was self-contained — no question tail on it, and no keys running past it.**
Both defects were checked for and neither was present. Six of the previous fifteen chapters had the
first and two had the second, so the check stays.

#### The lecture carried this chapter almost entirely

`L4) PHARYNGEAL SUPPURATIONS.pdf` (Prof. Emad A. Magdy) was already cached and covers the topic
line for line. **Thirty-plus keys are confirmed verbatim from it**, and — the finding that matters —
**four keys staged as suspected defects were WITHDRAWN once the slide was read:**

- **Q51** "laryngeal oedema" as NOT a parapharyngeal complication. L4 lists exactly four
  (IJV thrombosis/Lemierre's, carotid rupture, CN IX–XII or sympathetic chain, mediastinitis) and
  places laryngeal oedema under **quinsy** and **acute retropharyngeal abscess** instead.
- **Q53** odynophagia keyed to **parapharyngeal** — L4's parapharyngeal picture reads *"High fever,
  sore throat & **odynophagia**"*, and the word appears under no other suppuration.
- **Q55** "rapid strong bounding pulse" keyed to **quinsy** — L4's quinsy signs read *"High
  temperature (39-40°C) & **rapid strong bounding pulse**"*. Verbatim.
- **Q56/Q61/Q62/Q85** the chronic retropharyngeal abscess as a **midline** swelling **behind** the
  prevertebral fascia in a **middle-aged adult**, with normal temperature and pulse, painless nodes
  and vertebral tenderness — **every clause of Q62's vignette is a line of L4.**

**⚠️ SIXTH OCCURRENCE OF THE SAME LESSON. Staging sees only the bank. READ THE LECTURE BEFORE
DECLARING A GAP OR A DISPUTE** — four would have been written down as defects, and all four were
the lecture's own words.

#### Two folds, and only one of them reached a strict stage

| Fold | Target | How it was caught |
|---|---|---|
| Q76 | `entep-throat-37` (p.1438) | **Neither A nor B.** Stage E 0.75, stage F 0.63 |
| Q85 | `entep-throat-74` (p.1551) | Stage B, plus F 1.00 |

Q76 is *"Which of the following causes uvular deviation to the opposite side with dysphagia?"* — the
same four options and key as endpoint, differing by one hyphen and four full stops. **Endpoint prints
that item four times (pp.1438, 1473, 1647, and Exam Night Review p.3010) and Grade Gain once; it is
held exactly ONCE.** Q85 is endpoint's bare stem-completion *"Chronic retro-pharyngeal abscess:"*
re-set as a question over an identical menu.

**⚠️ A MODEST STAGE-F SCORE IS NOT EVIDENCE AGAINST A FOLD.** Q76 scored only 0.63 on option tokens
*because all four of its options contain the word "abscess"*, which swamps the set. The fifth
chapter now in which a fold was found by the rankings rather than by a strict stage.

#### ⚠️ NEW AND GENERAL: A SHORT, GENERIC OPTION MENU MAKES STAGE F WORTHLESS

Stage F returned **three separate 1.00 matches that are not folds**, all because the corpus reuses a
handful of four-item menus:

- **Q74** vs `entep-throat-115` — the four neck **spaces**; different stem, **different key**.
- **Q70** vs `entep-nose-23` — the four **imaging modalities** (US / CT / MRI / plain X-ray).
- **Q46** vs `entep-throat-103` — the four **referred-otalgia nerves**; keyed to the vagus there.

On this chapter **stage E did the real work and stage F produced more noise than signal** — the exact
reverse of Ear ch.1, where E scored 0.21/0.24 on two folds that F caught at 1.00. **Neither ranking
dominates the other. Run both, and read the staged list.**

Q46 additionally matches `entep-throat-109` on **options and key** (both glossopharyngeal) over a
*post-tonsillectomy* stem rather than a *quinsy* one — the settled **same options + same key +
different stem is NOT a fold** rule. All three held.

#### Held, not folded, on the replaced-distractor test

- **Q57 and Q75 vs `entep-throat-32`** (pp.1426, 1499) — three questions on drainage routes over
  overlapping menus; each replaces at least one option and each keys a different line.
- **Q72 vs `entep-throat-17`** — same keyed *fact* (midline swelling is the false one) with **three
  of four options replaced**.
- **Q62 vs `entep-throat-92`** — same diagnosis, **no shared distractor at all** (four abscesses
  there, four differentials here), which is why no stage saw the pair.

#### Three defects recorded beside their keys, under the user's ruling of 2026-08-11

1. **⚠️ Q64 PRINTS ITS OPTION LETTERS TWICE** — "b. b. Surgical…", "c. c. Spinal…". Typographic,
   stripped. **But option b also says the chronic retropharyngeal abscess is drained "via transoral
   or external approach", and L4 says externally "through the neck & NEVER through the mouth".**
   **⚠️ THE OPTION IS WRONG AND IS NOT THE KEY, SO NO KEY CHECK CAN SEE IT.** A new shape: previous
   defects were mis-keys or ambiguous keys; this is a **false distractor in a correctly keyed
   question**. Recorded and explained in the entry.
2. **Q54 vs Q72 name the same nodes two different ways** — *"LN of **Renvier**"* at Q54 and *"LNs of
   **Henle**"* at Q72. **L4 uses Henle**; *Renvier* is a corruption of **Rouvière**. Both transcribed
   as printed, both explained. (`rouviere` and `renvier` each return **0 hits** corpus-wide before
   this chapter.)
3. **Q45 keys "All of the above"**, which requires **Grisel's syndrome** — an entity in **no cached
   ENT slide** (0 hits corpus-wide). Answered from general medical knowledge and tagged.

#### Four back-references repaired, in two chains

Q63 and Q64 both open *"In the previous case"* pointing at Q62; Q70 and Q71 point at Q69. The deck is
shuffled, so each was restated with its own antecedent. **4 of 47.**

#### ⚠️⚠️ THE MARKER AUDIT CAUGHT A REAL FAULT, AND IT WAS MINE — FOURTH TIME THIS CHECK HAS PAID

All **42** authored markers were written at the end of the **`source`** field instead of at the end of
the **`explanation`**, where `CLAUDE.md` §4 puts them. Every entry parsed, cited and rendered fine;
nothing else would have seen it. **The signature was the counter moving the WRONG WAY** — 885 → 776
across a batch that added 45 entries. `MEMORY.md` already carried this exact warning from an earlier
batch of 18, and the trap was walked into again.

- Fixed by a line-wise pass that strips the sentence from `source` and appends it to `explanation`.
- **The same audit then found TWO OLDER ENTRIES with the same misplacement** — `entqb-ear8-218` and
  `entqb-ear8-219`, carrying the marker in `source` **only**. Both fixed. Fourteen further Ear ch.8–9
  entries carry it in **both** fields, which is untidy but harmless and was left alone.
- **⚠️ THE HISTORICAL FIGURE OF "885 of 1,239" CANNOT BE REPRODUCED** by any single definition and
  should not be quoted forward. The definition now in the validator is *"the entry's `explanation`
  contains the phrase"*, which gives **820 of 1,284**. **What is trustworthy is the DELTA, not the
  level** — +42 new, +2 repaired, predicted and matched exactly.

#### Verified in a real `file://` boot

`Q_ENT` **1,202** / `C_ENT` **82** / total **1,284**; 104 chapters; 0 bad module or chapter refs,
0 duplicate ids, every answer in range, nothing missing a source, explanation or objective;
**0 dead backticked ids out of 3,361 references**; 52 image references over 49 files, all loading;
mojibake clean; **0 console errors, 4 module cards, 768 CSS rules** on a full app boot.

By bank **697 / 21 / 606** = 1,324 over 1,284 — **40** shared memberships across **39** questions
(+2, the two folds). Origin only **697 / 20 / 567**.
**Option counts now 2, 3, 4 and 5** — {2:5, 3:53, 4:1028, 5:116}; Q86 and Q87 are five-option
questions and render correctly.

**Reconciles:** Grade Gain **Ear 261 + Nose 265 + Throat 40 + 47 = 613 printed, 567 written,
46 folded** — 39 cross-bank `alsoIn` and 7 within-bank reprints held once. Origin count **567** matches.

**Next: Throat topic 3, "Dysphagia", book p.99 (PDF 108) onward.** It opens at **Q88**, the contents
page promises **60**, answers begin book p.107 (PDF 116), and topic 4 opens book p.110. **PDF 108 is
already rendered** at `<scratchpad>\thr2\p-108.png`. Render one page past the last answer page as
always.

---

### §14v — Grade Gain **THROAT topic 3, "Dysphagia"** — read, swept, written (2026-08-12)

**Book pp.99–109 (PDF 108–118). 61 printed against 60 promised. 58 written, 3 folded.**
**The largest chapter in the project so far, and the one with the most moving parts.**

| | |
|---|---|
| Questions | book pp.99–106 **and the left column of p.107**, Q88–Q148 unbroken |
| Answers | book pp.107–109 (PDF 116–118) |
| Next topic | book p.110 (PDF 119) opens "Tonsils and Adenoids" at Q149 |
| Printed boxes | **11 of 61 (~18 %)** — Q93, Q102, Q105, Q106, Q108, Q113, Q117, Q129, Q135, Q137, Q138 |
| Written / folded | **58 / 3** |
| Figures cropped | **6** |
| Back-references repaired | **17 of 61 — 28 %, the highest rate in the project** |
| Chapters | `ent-dysph` 48, `ent-pharsupp` 5, `ent-swallow` 3, `ent-tonsils` 2 |

#### ⚠️⚠️ THE QUESTION TAIL SHARED THE ANSWER PAGE — SEVENTH TIME IN SEVENTEEN

**Q146, Q147 and Q148 are printed in the LEFT column of p.107 while the answer list starts in the
right.** Treating the answer page as answers-only would have lost three questions silently — and one
of them, Q148, turned out to be a fold. The keys did not run past p.109, so only half the defect was
present. **Neither half is predictable. Read every page.**

#### ⚠️⚠️ NEW BACK-REFERENCE SHAPE: A VIGNETTE PRINTED AS A HEADER OVER A NUMBERED BLOCK

Three blocks are introduced by a line like *"For the following questions 106, 107, 108 and 109"*
followed by a vignette that **belongs to no question's text**:

| Header | Covers | Patient |
|---|---|---|
| *"For the following questions 106, 107, 108 and 109"* | Q106–Q109 | 82-year-old, Zenker's diverticulum |
| *"For the following questions 113, 114, 115 and 116"* | Q113–Q116 | 45-year-old, Plummer–Vinson |
| *"For the following questions 117, 118, 119, 120 and 121"* | Q117–Q121 | 60-year-old, pyriform sinus carcinoma |

**A naive transcription leaves Q107, Q108, Q109, Q114, Q115, Q116, Q118 and Q119 with no vignette at
all**, and several of them are unanswerable without one. Each was restated with its own antecedent.

**⚠️ BUT NOT EVERY QUESTION UNDER A HEADER INHERITS IT.** Q120 (*which nerve carries referred otalgia
in hypopharyngeal carcinoma*) and Q121 (*the definition of Moure's sign*) sit inside the third block
and ask **general** questions; giving them the vignette would have invented a patient. **Read what the
question actually asks before inheriting a header.**

Added to the eight ordinary *"In the previous case"* references (Q94, Q103, Q104, Q105, Q126, Q127,
Q130, Q133, Q139) and Q131's *"the barium swallow above"*, that is **17 of 61 — 28 %**, against 4 of
47 in topic 2 and 5 of 32 at the previous worst.

#### Six figures, and all six crops right at the first attempt — the first time

| Crop | Question | Panels | Essential |
|---|---|---|---|
| `q-gg-104a` | **Q129 and Q131 share it** | 2 (frontal, lateral) | ✔ |
| `q-gg-104b` | Q132 | 1 | ✔ |
| `q-gg-105a` | Q135 | 1 | ✘ — the vignette decides itself |
| `q-gg-105b` | Q137 | 1 | ✘ |
| `q-gg-106a` | Q139 | 4 (2 endoscopic, 2 axial) | ✔ |
| `q-gg-106b` | Q143 | 2 | ✘ |

**⚠️ WHY THEY WORKED WHEN THE PREVIOUS FOURTEEN DID NOT.** Every earlier Grade Gain crop was measured
by hand and every one was wrong first time. These were found by a **dark-region detector**: scan each
column half for rows where more than 55 % of pixels are non-white (luminance < 232), merge runs
separated by fewer than 45 rows, then bound the columns the same way. **Barium films and endoscopic
photographs are overwhelmingly non-white; a page of text is 90 %+ white.** The signal is enormous and
the method is exact.
- A first attempt using a **dark** threshold (< 110) failed on two of six, returning a 54-pixel-tall
  band — because the **barium column itself is bright white** and breaks a dark run in two. **Measure
  "not paper", not "dark".**
- The merge step is what fixes multi-panel figures, whose inter-panel gutters are white.
- **All six were still looked at.** No numeric check would have caught a clipped label.

`app\assets\q\` is now **55 files, 2.3 MB**; 59 references over 55 unique files, all loading.

#### The lectures carry the disease half and none of the physiology half

`L10) Dysphagia From ENT Perspective.pdf` (Prof. Rania M Abdou) is excellent for this chapter and
grounds hypopharyngeal carcinoma (**pyriform sinus commonest**, the subsite ranking, the absent
laryngeal click, tobacco/alcohol/HPV 10.9 %/Plummer–Vinson-for-post-cricoid), Zenker's diverticulum
(Killian's triangle, left-sided, C5–C6, contrast retention, the endoscopic perforation warning),
Plummer–Vinson (the triad, middle-aged females, iron correction and dilatation), achalasia (bird's
beak) and globus pharyngeus. `L7)` covers FEES, VFSS and manometry.

**⚠️ BUT THE PHYSIOLOGY IS ABSENT FROM ALL 34 CACHED FILES — verified by grep, not assumed.**
**0 hits corpus-wide** for `oral phase`, `propulsive`, `grade 5`, `Moure`, `silent area`,
`dysphagia lusoria`, `rat tail`, `apple core`, `aphthous`, `vascular ring`, `stationary dysphagia`.
`pharyngeal phase` occurs only in `L1.2` and in an ILO line of `L7`; `laryngeal click` is a bare
bullet in `L8`, never defined.

So **Q88–Q92, Q96, Q121–Q128, Q131, Q133, Q134, Q145** are answered from general medical knowledge and
tagged — the swallowing phases and their durations, the voluntary/involuntary split, cord adduction,
the dysphagia grading, oral ulceration, oesophageal foreign bodies and their four constrictions,
dysphagia lusoria, the rat-tail/apple-core radiology, the squamous/adenocarcinoma division and the
concept of a silent area. **This is the largest single block of gap-filling in the project** and goes
on the end-of-ENT review list.

#### Six defects recorded beside their keys (2026-08-11 ruling)

1. **⚠️ Q112 HAS TWO CORRECT OPTIONS.** *"What is present in hypopharyngeal carcinoma?"* keys *absent
   laryngeal click*, but `L10` states that *"**Globus sensation may be the only presenting
   complaint**"* — option a. The defensible reading is *specific sign* over *non-specific symptom*;
   the option list does not force it.
2. **Q115 bundles vitamin B12** into the treatment of Plummer–Vinson. `L10` gives *"Correction of iron
   deficiency anemia"* alone, and the anaemia is **microcytic**, not macrocytic.
3. **Q114 keys oesophagoscopy** to confirm Plummer–Vinson where `L10` lists **barium swallow** first
   and captions its own web illustration with it. Defensible — endoscopy is what excludes post-cricoid
   carcinoma — and recorded.
4. **Q139 keys *pyriform fossa cancer* for a patient whose history predicts a POST-CRICOID tumour**
   (untreated Plummer–Vinson). "Post-cricoid" is not on the option list. **A key is the best option
   offered.**
5. **Q134 offers the same answer twice** — *"Rat tail appearance"* and *"Smooth, tapered narrowing"*
   are a name and its description, both belonging to the benign stricture.
6. **Q144 prints "dysphasia" for "dysphagia"**, and **Q148 prints "Strider" for "stridor"**, and
   **Q139 prints "Vocal coed nodule"**. All transcribed as printed. The key survives all three.
   **Q138's printed box describes earache and neck swelling that its own stem never mentions.**

#### ⚠️⚠️ THE MARKER AUDIT CAUGHT THE SAME FAULT AGAIN — TWICE IN ONE SESSION

All **47** authored markers went into `source` instead of the end of `explanation`, exactly as in
§14u, **and for the worse reason: the pattern was copied from the drafting of topic 2 rather than
from the convention.** The pre-splice audit did **not** see it, because that awk check concatenates
the whole entry and cannot tell which field the sentence landed in.

**What caught it was the counter refusing to move: 820 → 820 across a batch that added 58 entries.**
Fixed by the same line-wise pass; the count then went 820 → **867**, the predicted +47 exactly.

**⚠️ THE PRE-SPLICE MARKER AUDIT MUST BE MADE FIELD-AWARE.** As written it answers *"does this entry
contain the sentence"*, which is the wrong question; it must answer *"does this entry's `explanation`
end with the sentence"*. Until it is, **the post-splice validator delta is the only check that works**
— and it has now caught this same fault twice.

#### Verified in a real `file://` boot

`Q_ENT` **1,260** / `C_ENT` **82** / total **1,342**; 104 chapters; 0 bad module or chapter refs,
0 duplicate ids, every answer in range, nothing missing a source, explanation or objective;
**0 dead backticked ids out of 3,543 references**; **59 image references over 55 files, all loading**;
mojibake clean; **0 console errors, 4 module cards, 768 CSS rules** on a full app boot.

By bank **697 / 21 / 666** = 1,384 over 1,342 — **42** shared memberships across **41** questions
(+2; Q120's fold added none, being within-bank). Origin only **697 / 20 / 625**.
Option counts {2:5, 3:53, 4:1084, 5:118}.

**Reconciles:** Grade Gain **Ear 261 + Nose 265 + Throat 40 + 47 + 61 = 674 printed, 625 written,
49 folded** — 41 cross-bank `alsoIn` and 8 within-bank reprints held once. Origin count **625** matches.

**Next: Throat topic 4, "Tonsils and Adenoids", book p.110 (PDF 119) onward.** It opens at **Q149**,
the contents page promises **98 — the largest topic in the book**, answers begin book p.121 (PDF 130),
and topic 5 opens book p.124. **PDF 119 is already rendered** at `<scratchpad>\thr3\p-119.png`.
Render one page past the last answer page as always, and **expect the question tail to share the
answer page until proved otherwise.**

---

### §14w — Grade Gain **THROAT topic 4, "Tonsils and Adenoids"** — written (2026-08-12)

**Book pp.110–123 (PDF 119–132). 99 printed against 98 promised. 98 written, 1 folded.**
**The largest topic in the book, and the largest single batch in the project.**
Reading and sweeping were done in the previous session (`gg-throat-ch4.staged.js`,
`gg-throat-ch4.array.js`); this section records the writing.

| | |
|---|---|
| Questions | book pp.110–120 (PDF 119–129), Q149–Q247 unbroken |
| Answers | book pp.121–123 (PDF 130–132), list ends with the lower right column blank |
| Printed boxes | **7 of 99 (~7 %)** — Q203, Q204, Q234, Q235, Q236, Q242, Q243 |
| Written / folded | **98 / 1** |
| Authored markers | **+91** — predicted before writing and matched exactly |
| Figures cropped | **1** (`q-gg-120a`, Q245, not essential) |
| Back-references repaired | **6** — Q205, Q206, Q207, Q241, Q244, Q246 |
| Chapters | `ent-tonsils` 83, `ent-osa` 5, `ent-nasalmass` 4, `ent-pharanat` 4, `ent-neck` 2 |
| Five-option questions | **3** — Q158 (key E), Q181 (key A), Q227 (key D) |

#### The lectures carry this topic better than any other in the project

`L3) DISEASES OF THE TONSILS & ADENOIDS.pdf` is the backbone and grounds the overwhelming
majority of the chapter **verbatim** — the adenoid clinical picture and facies list, the CO₂-retention
symptoms, all five indications for adenoidectomy with their numeric thresholds, all five
adenoidectomy techniques with their temperatures, all six complications, the three haemorrhage
types with their windows and causes, healing by secondary intention at 5/10/15 days, the six
tonsillectomy indications with the 7/5/3 episode counts, the extracapsular/intracapsular
distinction, the pharyngitis organism lists, and the slides on diphtheria, mononucleosis,
herpangina, herpes simplex, herpes zoster and candidiasis. `L1.2) Anatomy of the pharynx.pdf`
supplies the tonsillar bed, the five arteries, the 8–30 crypts and crypta magna, the
jugulodigastric drainage, Waldeyer's five components and the velopharyngeal sphincter with
*"Passawnt's bridge"*. `L9) Snoring & OSA.pdf` supplies *"Adenoid (most common cause in children)"*
and the complications of untreated OSA. `L5) NECK MASS.pdf` supplies the branchial anomalies.

**Gaps confirmed by corpus-wide search of all 34 ENT files (0 hits each):** Thornwaldt,
Rathke, Grisel, Paul-Bunnell, Vincent's angina, scarlet fever, fusiform/Borrelia, adenoid
**grading**, Hutchinson's incisors, immunoglobulin isotypes, pigeon chest/any chest deformity,
palatal petechiae, contraindications to tonsillectomy, and any **discharge time**. All answered
from general medical knowledge and tagged; added to the end-of-ENT gap list.

#### ⚠️⚠️ THE MARKER-IN-SOURCE FAULT AGAIN — THIS TIME IN **FOURTEEN OLDER ENTRIES**

The new batch was written correctly: a **field-aware** pre-splice audit — *"does the entry's
`explanation` END with the marker"*, the fix §14v said was owed — passed at 91/98 before splicing,
and the post-splice delta was **895 → 986, exactly +91**.

**But the same audit run over the whole file found 14 pre-existing entries carrying the marker
inside `source` and nowhere else:** `entqb-ear3-53`, `entqb-ear8-208`, `-215`, `-216`, `-221`,
`-222`, `-223`, `-230`, `-231`, `-232`, `entqb-ear9-246`, `-255`, `-256`, `-261`. Thirteen carry it
bolded mid-sentence (`**Written for this bank …**` right after the key citation); one carries it
plain at the end of `source`. **All relocated to the end of `explanation`.** Source-line count is
now **0** and total occurrences are unchanged at 1,000, confirming nothing was duplicated or lost.

**This is the third occurrence and the largest.** The earlier fix pass caught only
`entqb-ear8-218`/`-219` because it looked for the *absence* of a marker rather than for its
*presence in the wrong field*. **The field-aware check is now the standard pre-splice audit and
should also be run over the whole file, not only the new batch.**

#### ⚠️⚠️ FIFTH AND SIXTH SILENT PARSE FAILURES — NESTED **STRAIGHT** SINGLE QUOTES IN PROSE

Two parse errors, both the same class and both new in mechanism: **quoting a phrase from the
lecture with straight apostrophes inside a single-quoted JS field.**

1. `*"**Chest complications 'including pneumonia'**…"*` — three occurrences.
2. `**'Kissing disease'**` — one occurrence.

**The fix was NOT to escape them.** `L3` prints both with **curly** quotes — `“including pneumonia”`
and `‘Kissing disease’` — so replacing the straight quotes with the source's own typography is
**simultaneously the more faithful transcription and immune to the parser.** Prefer this to `\'`
whenever the source itself uses curly quotes.

- **⚠️ `sed -i` with a `\\'` replacement silently did nothing** — reported no error and left the file
  unchanged, which cost a round trip. Verified with `cat -A`. Use the Edit tool for this.
- **⚠️ A `<script src>` over `file://` still reports only "Script error. @line 0".** Inlining the
  data into the probe gave `Unexpected identifier 'including' @line 375` and then
  `Unexpected identifier 'Kissing' @line 439` — the offending token named both times, which is the
  fix itself. **Always inline.**
- **A one-line regex finds them all before Chrome does:** `grep -n -o "[ (*\">]'[A-Za-z]"` over the
  block, minus field-delimiter matches. It returned exactly the surviving occurrence after the
  first fix and nothing after the second.

#### ⚠️ SEVENTH CROSS-REFERENCE PAGE NUMBER WRITTEN FROM MEMORY, SEVENTH TIME WRONG

`entep-throat-111` was cited as p.1641 while drafting; it is **p.1651 (Q149)**, and it has **five**
options. Caught by reading its own `source` before splicing. **7 of 7. Never write one from memory.**

#### The fold — within-bank, so no membership added

**Q169 → `entqb-thr1-11`** (Throat topic 1, book p.87). *"Which artery is the main blood supply to
the palatine tonsils?"* against *"Which of the following is the main blood supply to the tonsils?"*,
same key. Topic 1 prints the key as **"Tonsillar artery"** and topic 4 spells it out as **"Tonsillar
branch of the facial artery"** — the same vessel abbreviated, which by the settled test is the same
distractor — with one wrong option genuinely replaced (*ascending palatine* → *ascending
pharyngeal*), the single-replaced-wrong-distractor case settled at `entep-throat-103`.
**Grade Gain reprints itself for the seventh time; held once, no `alsoIn`.**

#### ⚠️⚠️ CROSS-BANK DIVERGENCE — THE SECOND IN THE PROJECT, AND THE FIRST DECIDED BY ONE WORD

**Q224 (`entqb-thr4-224`) vs `entep-throat-77` (p.1557) print the SAME FOUR OPTIONS and key
different ones.**

- endpoint keys **"Congestion of the anterior pillar"** as NOT a definite sign of chronic tonsillitis;
- Grade Gain keys **"Enlarged REGULAR tonsillar crypts"**.

**The qualifier *regular* is the whole difference.** Endpoint's crypt option reads *"Enlarged
tonsillar crypts"* unqualified, which is the classic **doubtful** sign — so its list holds two
arguable candidates and it keys the other. Grade Gain's option, qualified, describes a **normal
variant**, and its key agrees with the standard teaching that anterior-pillar congestion **is** a
definite sign. **Both held; neither folded** — identical options with different keys are a
divergence, not a reprint. Notes added to **both** entries.

#### Zeros explained: stages A and B both returned nothing across 99 questions

Credible, and for a specific reason recorded at sweep time: **this topic is mostly adenoid and
operative material, and endpoint barely covers either.** Endpoint's tonsil set is clinical
vignettes and membranous-tonsillitis differentials; Grade Gain spends forty-odd questions on
adenoid anatomy, grading, technique, preoperative work-up and complications. The real fold came
from a **within-bank** match that no cross-bank stage was looking for.

**⚠️ And a generic "EXCEPT" stem is to stage E what a generic option menu is to stage F** — nine
questions scored 0.50–0.80 at stage E on the shared tokens *following / true / except / about*
alone. Third chapter running in which the rankings had to be read rather than trusted.

#### Eleven defects recorded beside their keys (2026-08-11 ruling), none corrected

1. **Q179 is self-contradictory**: an *"except"* stem whose key is *"All of the above"*. The option
   set was plainly written for a positive stem.
2. **Q207 offers no correct option** — every choice contains an antibiotic and none treats EBV;
   levofloxacin appears in three of four. The key is the least wrong (no ampicillin, plus steroids,
   which have a narrow airway indication).
3. **Q163 does not offer the right technique.** *"Microdebrider-assisted"* is a technique on `L3`'s
   own slide and is absent from the options; the key is *endoscopic-guided*, which is how the
   microdebrider is used.
4. **Q180 offers synonyms** — *catarrhal* and *superficial* pharyngitis are the same thing, so
   neither can be the answer.
5. **Q198 offers the same bleed twice** — *"infected bed at 10 days"* and *"slough separation"* are
   the timing and the mechanism of secondary haemorrhage.
6. **Q159's grading conflicts with Parikh's.** The bank calls soft-palate contact **grade 3**;
   Parikh's endoscopic system calls it **grade 4**. No cached slide grades the adenoid at all.
7. **Q151 keys involution at 11 years**; `L3` gives only *"Can shrink naturally after 6-8 years"*.
8. **Q182's option b** calls the diphtheritic membrane *"well-defined"*, contradicting the standard
   description of a spreading, ill-defined membrane. Not the key, so no key comparison sees it.
9. **Q237 keys discharge at 3 hours**, inside the 24-hour reactionary-haemorrhage window; usual
   practice is 4–6 hours with admission criteria.
10. **Q244 keys penicillin for 2 weeks**; the standard course is 10 days. The principle being
    tested — a full course rather than symptomatic care — is right.
11. **Q242's printed box states metronidazole targets *"anaerobic and aerobic organisms"***; it is
    active against anaerobes only. **A printed box wrong about pharmacology, not about the key.**

Plus two softer ones: **Q239** describes an infected cyst that discharged — strictly an acquired
**sinus** — while the key says *fistula*; and **Q228** keys mononucleosis on palatal petechiae in a
vignette whose **one-day history and unilateral membrane** are atypical for it.

#### The three-vignette ladder, and why it is worth teaching as a set

Q234, Q235 and Q236 print near-identical stems differing by one clause and key three different
answers: 2-year-old with a mucus plug → **conservative to age 3**; the same child **plus snoring and
daytime sleepiness** → **adenoidectomy** (OSA overrides the age rule); a 4-year-old whose palate is
**clefted into two halves** → **partial adenoidectomy**. All three carry printed boxes, and the boxes
between them state the rule: *"Adenoidectomy is done under 3 years only if patient had OSA"* and
*"Partial adenoidectomy is indicated in case of cleft palate with middle ear complications to allow
better ET aeration without velopharyngeal insufficiency"*. **The differing clause IS the question.**

#### The one figure — right on the second attempt, and the miss was padding, not detection

The **dark-region detector** from §14v found the photograph's box exactly on the first run:
rows >55 % non-white (luminance <232) in the right column half gave y=576..808, and the same test
by column gave x=692..1095. **A 12 px symmetric pad then dragged in a strip of question text**,
because the line above sits closer than that. Re-cropped at **3 px** and looked at: clean.
`q-gg-120a`, 410×239, 26 KB. **The detector is reliable; the padding is not — always LOOK.**
Assets now **56 files, 2.3 MB**.

Caption is modality and view only — *"Oral cavity photograph of the soft palate and uvula"* — and
`imgEssential` is **not** set, because the stem already states the vesicles are on the soft palate
and uvula.

#### Verified in a real `file://` boot

`Q_ENT` **1,358** / `C_ENT` **82** / total **1,440**; 104 chapters; 0 bad module or chapter refs,
0 duplicate ids, every answer in range, nothing missing a stem, source, explanation or objective;
**0 dead backticked ids out of 3,948 references (1,165 distinct)**; **60 image references over 56
files, all loading, none without `imgAlt`**; mojibake clean; **0 console errors, 4 module cards,
770 CSS rules including 2 from the harness, all 3 `max-aspect-ratio:5/4` blocks intact**.

By bank **697 / 21 / 764** = 1,482 over 1,440 — **42** shared memberships across **41** questions,
**unchanged**, because topic 4's only fold was within-bank. Origin only **697 / 20 / 723**.
Option counts {2:5, 3:53, 4:1179, 5:121} — the three new five-option questions took 118 → 121.

**Reconciles:** Grade Gain **Ear 261 + Nose 265 + Throat 40 + 47 + 61 + 99 = 773 printed,
723 written, 50 folded** (41 cross-bank `alsoIn` + 9 within-bank held once). Origin count **723**
matches the validator exactly.

**Throat stands at 4 of 11 topics: 247 printed, 235 written, 12 folded, against 578 promised.**

**Next: Throat topic 5, "Pediatric Laryngeal Lesions", book p.124 (PDF 133) onward, opening at
Q248, 52 promised.** PDF 133 is already rendered at `<scratchpad>\thr4\`. Render one page past the
last answer page as always, and expect the question tail to share the answer page until proved
otherwise — **topic 4 had neither defect, which is itself no guide to topic 5.**

#### Environment correction

**Node.js IS installed — v26.7.0**, verified 2026-08-12 by `node -v`. `MEMORY.md` and §13 have
listed "no Node" since the environment was first surveyed; that is wrong. Nothing in the current
toolchain needs it, but a JS-based validator or bundler is now a real option and the single-file
build owed in §2 no longer requires hand-rolled PowerShell. **Python is still absent.**

---

### §14x — Grade Gain **THROAT topic 5, "Pediatric Laryngeal Lesions"** — written (2026-08-12)

**Book pp.124–131 (PDF 133–140). 53 printed against 52 promised — the eighteenth wrong count in
twenty-two, and still always upward. 53 = 47 written + 6 folded. Ids `entqb-thr5-248`…`-300`,
skipping 291, 292, 293, 296, 298, 299.**

Chapters: `ent-paedlar` 39, `ent-stridor` 7, `ent-vocal` 1. Four five-option questions (Q258, Q262,
Q294, Q295). **Seven printed boxes in 53 (~13 %)** — Q257, Q263, Q266, Q273, Q278, Q296, Q297 — of
which six landed in written entries and the seventh (Q296) went into a *fold*, which is what
withdrew an authored marker. **No figures anywhere in this topic**, the first since Nose ch.9.

**Marker delta +40 exactly as predicted** (41 new − 1 withdrawn): whole-corpus count 1067 → 1107.
Field-aware audit over the WHOLE file: **marker-in-`source` = 0**, marker-not-at-end = 0.

#### The six folds — the highest of any Throat topic, and only four add a membership

| GG | Folds into | What decided it |
|---|---|---|
| Q291 | `entep-throat-98` (p.1609) | Word-for-word stem, identical options and key. **+`alsoIn`** |
| Q292 | `entep-throat-36` (p.1436) | Identical option set and key; **the entry already carried `alsoIn:['gradegain']`** from GG's own Q35, so this is a **within-bank reprint on top of a cross-bank one — note only, no membership.** That entry now holds **four printings across two banks.** |
| Q293 | `entqb-thr1-34` (p.90) | Identical stem and key, options reordered. **WITHIN-BANK — no `alsoIn`.** Ninth within-bank reprint. |
| Q296 | `entep-throat-101` (p.1615) | Word-for-word stem, identical key; **one wrong distractor replaced** (*subglottic* → *glottic* stenosis) — the `entep-throat-103` precedent. **+`alsoIn`** |
| Q298 | `entep-throat-96` (p.1605) | Identical vignette, options and key. **+`alsoIn`** |
| Q299 | `entep-throat-97` (p.1607) | Same options and key; **both banks print it as the second question on one vignette**, which is exactly what GG's *"In the previous case"* makes it. **+`alsoIn`** |

**⚠️ A FOLD CONVERTED AUTHORED TEXT INTO SOURCED TEXT FOR THE FIFTH TIME, AND THIS ONE RAN THE OTHER
WAY.** Every previous instance was Grade Gain inheriting an endpoint box. Here **endpoint prints no
box and GRADE GAIN DOES** — so `entep-throat-101` gained Grade Gain's printed explanation at the head
of its `explanation` and **lost its authored marker**. *The two banks together supply what neither
does alone.* **Check the direction, not just the fact, when a fold meets a box.**

#### Two structural traps, one of them new at this scale

**⚠️⚠️ TWO VIGNETTES PRINTED AS HEADERS OVER NUMBERED BLOCKS — AND THIS TIME IT PRODUCED FOUR
QUESTIONS WITH IDENTICAL TEXT AND CONTRADICTORY KEYS.** The shape was first met in topic 3; here it
is worse:

- *"For questions 266, 267, 268, 269"* + a 5-year-old with **acute epiglottitis**
- *"For questions 273, 274, 275, 276 and 277"* + a 2-year-old with **croup**

**Q267 and Q274 are word-for-word identical stems over an identical option list, keyed to different
organisms** (Hib vs parainfluenza). **Q268 and Q275 likewise, keyed to different X-ray signs**
(thumbprint vs steeple). **Nothing inside the question distinguishes them — only the header does.**
In a shuffled deck they would have shipped as four questions carrying two answers each. All nine
questions under the two headers have had their vignette restated, and each of the four carries an
explicit ⚠️ naming its twin.

**⚠️ Back-references hit 19 of 53 = 36 %, the project's highest**, beating topic 3's 28 %. Ten
ordinary ones (Q258–Q262 → Q257; Q264, Q265 → Q263; Q279, Q280 → Q278; Q299 → Q298) plus the nine
under headers.

**⚠️ THE QUESTION TAIL SHARED THE ANSWER PAGE FOR THE EIGHTH TIME IN EIGHTEEN CHAPTERS** — Q298, Q299
and Q300 sit in the **left column of p.130** while the answers begin in the right. **Two of the three
are folds**, so treating the answer page as answers-only would have lost two cross-bank memberships
silently. The keys did **not** run past p.131. Topic 4 had neither defect; topic 5 had one.

#### Sweep

**⚠️ AN "ALL OF THE ABOVE" KEY MAKES STAGES C AND D WORTHLESS FOR THAT QUESTION.** Q262's key is
*"all of the above"*, which matched **thirty** unrelated questions; stage D returned 79 pairs and is
almost entirely noise as a result. **The real folds came from A and B**, which is the reverse of
topics 2 and 3 — *neither ranking dominates; the projections differ per topic.*

Held after side-by-side reading: **Q274 vs `entep-throat-102`** (p.1617 — same key, reworded stem,
one replaced distractor: *new question* per §14c–d); **Q267 vs the same** (identical GG stem, different
key, because its header is epiglottitis); **Q292/Q293 vs `entep-throat-33`** (three questions over one
menu); **Q297 vs `entep-mfe5-13`** (p.2411 — same key, two options replaced, different stem);
**Q263/Q273 vs `entep-mfe1-2`** (p.1821); **Q276 vs `entep-throat-100`** (p.1613 — stage-F noise off a
four-word menu).

#### Nine defects recorded beside their keys (2026-08-11 ruling) — none corrected

1. **⚠️ THE EPIGLOTTITIS HEADER VIGNETTE CONTRADICTS ITSELF** — *"no cough or fever"* and then
   *"Temperature is 39.1 C"*. Transcribed as printed; the fever matches `L12`'s *"Temp. > 38.5"* and
   the **absence of cough is a genuine discriminator against croup**, so both halves are usable.
2. **⚠️ Q250 AND Q255 TAKE OPPOSITE VIEWS OF THE SAME FACT, ONE PAGE APART.** Q250 keys *"epiglottis
   is short and folded on itself"* as NOT a criterion of the infantile larynx — **correct**, `L12`
   says *"Long & folded on itself"*. Q255 then keys *"Adult Epiglottis is curved & folded"* as TRUE,
   which **contradicts `L12` and its own Q250**. On Q255's list **no option is correct as stated**;
   the key is the least wrong, reached by eliminating three outright inversions.
3. **Q249** keys *"7th month"* for laryngeal recanalization, read off `L12`'s fetal-phase line
   *"9 wks. – 7 mo."*. The slide never uses the word; standard embryology recanalizes by ~10 weeks,
   making option (b) the nearer figure.
4. **Q272** keys FB aspiration as the **second** commonest cause of paediatric stridor. **No cached
   lecture ranks beyond first place**; `L6`'s list is unordered and **croup has as good a claim.**
5. **Q283 option b**, asserted TRUE: *"Most common foreign body in adults is the veil pin"* — a
   **regional** observation (headscarf-pin practice), on no slide. **Not the key, so no key comparison
   could see it** — the fifth defect of that shape.
6. **Q282** says GERD in **75–80 %** where `L12` prints **80–90 %**.
7. **Q290 arguably has two false options** in an *except* question: the key (*managed at home*) and
   option (d), *"Ampicillin-sulbactam is most used"*, where `L12` names **ceftriaxone**. The key
   stands because home management is dangerous rather than merely unsupported.
8. **⚠️⚠️ Q297 IS DEFECT SHAPE (3) IN ITS PUREST FORM — THE SAME STEM IS DECIDABLE ON ONE MENU AND
   UNDECIDABLE ON ANOTHER.** Its box discriminates on *"normal cry"* to key **subglottic stenosis**.
   Endpoint asks the identical question at `entep-mfe5-13` (p.2411) and keys the same answer — but
   **its option list does not offer laryngomalacia**, so there the key is unarguable. **Grade Gain
   offers it, and laryngomalacia also has a normal cry**; worse, the vignette's *"worse during feeding
   or crying"* is `L12`'s own laryngomalacia wording. **The discriminator the box uses does not
   discriminate on the list the box is printed under.**
9. **Two transcription repairs, both recorded:** Q274 option b printed *"Hemophilus influenzae type"*
   with the **B missing**; the epiglottitis header prints *"strider"* for stridor and its box *"acute
   epiglottis"* for acute epiglottitis.

**⚠️ THE TWO CACHED LECTURES DISAGREE ON THE AGE OF EPIGLOTTITIS** — `L12` gives **2–6 years** (which
the bank keys, twice) and `L6` gives **3–7 years**. They agree exactly on croup, 6 m–3 y. *First
lecture-versus-lecture conflict recorded in this project; both are cited.*

**Three entities are answered from general knowledge and tagged**, all verified absent from both
backbone decks first: **bacterial tracheitis / membranous LTB** (Q278, Q279, Q280 — `L12` names only
three acute laryngitides; the same gap is already recorded at `entep-enr-7`, p.2854), **button
batteries** (Q286), and **propranolol as first-line for subglottic haemangioma** (Q256) — where
**`L6`'s seven-item treatment list is simply out of date**, running tracheotomy → corticosteroid →
laser → interferon → cryosurgery → irradiation → excision with no beta-blocker anywhere.

#### Two harness bugs that manufactured false zeros — the "check the auditor" rule again

The boot probe reported **0 of 56 question images loading** and **0 Clepsydra poses**, either of which
would read as a catastrophic asset failure. Both were the probe:

- **`[].slice.call(aSet)` RETURNS AN EMPTY ARRAY.** A `Set` is not array-like — it has no `.length` —
  so the image list was empty and the completion callback fired immediately with a count of zero.
  **Use `Array.from`.**
- **`CLEP_POSES` is a top-level `const`, so `window.CLEP_POSES` is `undefined`** — the same trap
  already recorded for `MODULES`. **Read the bare binding.**

Re-run with both fixed: **56/56 images, 9/9 poses, 0 broken.** *A zero that would mean disaster is a
broken probe until proved otherwise.*

#### Verified state after the splice

`Q_ENT` **1405**, `QUESTIONS` **1487**, 104 chapters, 4 modules, 4 module cards, **768 CSS rules**,
**3 `max-aspect-ratio:5/4` blocks**, **0 console errors** in a real `file://` boot. 0 bad chapter or
module refs, 0 duplicate ids, every answer in range, nothing missing a field, **0 dead ids over 4,261
backticked references (1,238 distinct)**, 60 image refs over 56 unique files all loading, none without
`imgAlt`, mojibake clean. Banks: **endpoint 697, house 21, gradegain 815** = 1,533 memberships over
1,487 questions = **46 extra across 45 shared questions**. Grade Gain origin **770** = 723 + 47.

**Reconciliation:** Grade Gain **826 printed / 770 written / 56 folded** across Ear (261/241/20),
Nose (265/247/18) and Throat t1–t5 (300/282/18). Throat: **t1 40 (34+6), t2 47 (45+2), t3 61 (58+3),
t4 99 (98+1), t5 53 (47+6).**

**⚠️ ONE DEAD ID WAS CAUGHT AFTER THE SPLICE, IN A `source` FIELD.** `entqb-thr5-298` was fixed in the
`explanation` of Q276 and **missed in the same entry's `source`** — the fold list had been applied to
one field and not the other. **When a staged number folds, grep BOTH fields, and re-run the dead-id
check after the splice as well as after the folds.** Fifth occurrence of the folded-number-still-cited
fault.

**Next: topic 6, "Neck Masses", book p.132 (PDF 141), Q301 onward, 31 promised.**

---

### §14y — Grade Gain **THROAT topic 6, "Neck Masses"** — written (2026-08-12)

**Book pp.132–136 (PDF 141–145). 32 printed against 31 promised — the nineteenth wrong count in
twenty-three, still always upward, and this time by exactly one. 32 = 29 written + 3 folded. Ids
`entqb-thr6-301`…`-332`, skipping 320, 326, 330.**

Chapters: `ent-neck` 27, `ent-pharsupp` 2. Two five-option questions survive (Q328, Q329); the third
(Q330) folded. **Marker delta +29 exactly as predicted** — whole-corpus 1107 → 1136 — because there
were no boxes to withdraw one.

**⚠️ ZERO EXPLANATION BOXES IN THE WHOLE TOPIC.** p.136 is a **bare key list, Q301–Q332 complete on
one page**, with no prose anywhere. That is the second-cleanest page structure yet met (after ENR's
104 boxless pages) and it means **all 29 explanations are authored.** *Box presence remains a
property of the PAGE: t5 printed seven in 53, t6 printed none in 32.*

**Both boundary defects were ABSENT this time.** The question tail did **not** share the answer page —
questions end at Q332 on p.135, keys occupy p.136 alone — and the keys did **not** run past it. p.137
opens *"Chapter 3: Trauma of the neck"* with Q333, **confirmed by rendering it**. Numbering ran
continuously from topic 5's Q300, as the section rule predicts.

#### Three folds, one of them by a rule that had not fired before at this scale

| GG | Folds into | What decided it |
|---|---|---|
| Q320 | `entep-mfe5-29` (p.2454) | Same four options, same key. Grade Gain prints the stem **without** endpoint's parenthetical *"(or solid / hard lateral neck swelling)"* — a **dropped clause** is a reprint. **+`alsoIn`** |
| Q326 | `entep-throat-105` (p.1627) | Word-for-word stem (GG drops two commas), the same four options in a **different order**, same key. **+`alsoIn`** |
| Q330 | `entep-throat-79` (p.1563) | Same stem, same key — and **Grade Gain ADDS A FIFTH OPTION**, *"Stridor may develop rapidly"*, which endpoint does not print. **An ADDED distractor is a reprint, not a new question** (§14c–d). **+`alsoIn`** |

**⚠️ Q330 IS THE FIRST FOLD WHERE THE OPTION COUNT ITSELF DIFFERS — 5 against 4.** The added option is
true and worth keeping: `L4` gives *"respiratory obstruction in 12-24 hrs."* Every previous
added-distractor fold had matched counts. **The test is the SET, not the length.**

⇒ 32 printed = **29 written + 3 folded**, **+3 memberships**.

#### Sweep

Stage A empty. **Stage B caught all three folds and nothing else** — the cleanest B in the project.
Stages C and D were noise-heavy as usual (22 and 55 pairs).

**⚠️ A NEW NOISE SHAPE, AND IT IS THE GENERIC-STEM TRAP IN ITS PUREST FORM: ONE EAR-WAX QUESTION
MATCHED SIX NECK QUESTIONS AT STAGE E.** `entep-ear-126` — *"Which of the following is not true about
ear wax?"* — ranked top for **Q303, Q307, Q310, Q311, Q312 and Q331** at 0.57–0.80, on the words
*which, following, true, about* alone. **Fourth chapter running where the E ranking had to be read
rather than trusted**, and the first where a single unrelated question captured six slots.

Held after side-by-side reading, each for a stated reason:

- **Q301 vs `entep-mfe5-34`** (p.2468) — same option set reordered, same key, but a **different
  vignette** (2 days vs 3; sore throat and tenderness vs fever and pain). A changed vignette is a new
  question. **Both are the paediatric-inflammatory-mass question and both banks pair it with an adult
  contrast on the same page** — GG at Q302, endpoint at p.2466.
- **Q325 vs `entep-mfe5-19`** (p.2431) — **stage E 1.00, identical stem**, and still not a fold:
  **all four options are replaced**, endpoint offering midline/lateral × compressible/non-compressible
  permutations against Grade Gain's four clinical descriptions. **⚠️ This is the counter-example to
  the ENR rule that "a 1.00 stem match that did not reach A or B is a re-optioned reprint by
  definition."** That rule was derived from a file reprinting itself; **across banks, a wholly
  replaced option list is a new question** (§14c–d).
- **Q327 vs `entep-throat-99`** (p.1611) — two of four options replaced, different age and duration.
  `entep-throat-30` (pp.1418, 1485) is a third printing of the same family. **Three printings, three
  option sets, one rule.**
- **Q323 vs `entep-throat-106`** (p.1629) and **`entqb-thr3-93`** (p.99) — same diagnosis, wholly
  different vignettes and option sets.
- **Q324 vs `entep-throat-43`** (pp.1452, 1491) — same key, three of four distractors replaced.
- **Q315 vs `entep-nose-23`** — pure imaging-menu noise (X-ray / US / CT / MRI).

#### Seven defects recorded beside their keys (2026-08-11 ruling) — none corrected

1. **⚠️⚠️ Q315 AND Q319 KEY DIFFERENT IMAGING MODALITIES FOR THE SAME ORGAN, ONE PAGE APART** — CT as
   *"most sensitive"*, ultrasound as *"most readily available and informative"*. **Both keys stand,
   because the stems ask different questions** — but **`L5) NECK MASS.pdf` RANKS NO MODALITY AT ALL**;
   its list reads only *"1- Imaging. 2- F.N.A. …"*. Both rankings are the bank's own. The word
   *sensitive* is also loose: MRI has greater soft-tissue sensitivity and ultrasound is better for
   cystic-versus-solid. Recorded in both entries, cross-linked.
2. **Q314 keys "matted lymph nodes" as a feature of lymphoma.** `L5` lists lymphoma under
   constitutional malignancy and **prints no physical signs**. In standard teaching **matting describes
   tuberculous adenitis or extracapsular metastatic spread**, while lymphoma nodes are rubbery and
   discrete. **The key is reachable only by eliminating the other three.**
3. **Q310 option b, asserted TRUE: *"CT is mandatory in hemangioma."*** No slide says so; a superficial
   infantile haemangioma is a clinical diagnosis and MRI is preferred where imaging is needed in an
   infant. **Not the key — the sixth defect of the shape no key comparison can see.**
4. **Q312 option b calls Zenker's *"anterior"* to the laryngocele.** It is **posterior** — the pouch
   lies retropharyngeally through Killian's dehiscence while a laryngocele exits anterolaterally
   through the thyrohyoid membrane. **One wrong word in an otherwise sound comparison.** Not the key.
5. **Q322's key rejects incision and drainage *"as it is a cellulitis."*** Sound as far as it goes —
   `L4` gives *"no tendency for abscess formation"* and *"a straw-colored exudate, rather than true
   abscess fluid"* — **but `L4` DOES mandate a rapid submental decompression** incising mylohyoid to
   open both compartments. The option as worded could be read as excluding all surgery.
6. **Q331 option b calls the obstructed lesion a *"retention cyst."*** Strictly a **saccular cyst**:
   an obstructed saccule fills with **mucus**, not air, and `L5` defines a laryngocele as
   *"**air-filled**"*. The bank collapses the distinction and keys the same causation again at Q332.
7. **Q323's 65-year-old contradicts `L4`'s *"young patient with poor dentition."*** Recorded; age does
   not exclude Ludwig's, and the bank is using immunocompromise to explain it.

#### What the topic rests on

**`L5) NECK MASS.pdf` grounds most of it and is unusually quotable** — the **Rule of 7**, the **Rule of
80**, the **80:20 rule**, the age table, the embryogenesis timeline (which supplies all four of Q303's
options verbatim), the neck's borders, the branchial cleft derivative map, the thyroglossal and 2nd
branchial cyst entries, the laryngocele and Zenker's entries, the eight-item investigation order and
the **"NEVER: incision biopsy"** prohibition. **`L4) PHARYNGEAL SUPPURATIONS.pdf` grounds Ludwig's
angina completely**, including the detail that settles Q330: *"the lateral pharyngeal wall & tonsil
are usually displaced medially"* belongs to **parapharyngeal abscess**, not Ludwig's.

**Six points are answered from general knowledge and tagged**, each verified absent from `L5` first —
which lists the entity as a heading and prints nothing beneath it: **chronic/tuberculous lymphadenitis**
(Q313), **cystic hygroma** (Q316, Q310), **the infected thyroglossal cyst and the Sistrunk operation**
(Q307), **laryngocele treatment** (Q329), **laryngocele causation, primary vs secondary** (Q331, Q332),
and the **imaging-modality comparison** (Q315, Q319). *`L5` is a classification lecture: it names 30-odd
entities and describes six.*

#### Verified state after the splice

`Q_ENT` **1434**, `QUESTIONS` **1516**, 104 chapters, 4 modules, 4 module cards, **768 CSS rules**,
**3 `max-aspect-ratio:5/4` blocks**, **0 console errors** in a real `file://` boot. 0 bad chapter or
module refs, 0 duplicate ids, every answer in range, nothing missing a field, **0 dead ids over 4,460
backticked references (1,269 distinct)**, 56/56 images loading, 9/9 poses, mojibake clean. Banks:
**endpoint 697, house 21, gradegain 847** = 1,565 memberships over 1,516 = **49 extra across 48 shared
questions**. Grade Gain origin **799** = 770 + 29.

**Reconciliation:** Grade Gain **858 printed / 799 written / 59 folded** across Ear (261/241/20),
Nose (265/247/18) and Throat t1–t6 (332/311/21).

**⚠️ THE FOLDED-NUMBER-STILL-CITED FAULT FIRED AGAIN, SIXTH TIME — AND THE §14x NOTE PREDICTED IT
EXACTLY.** Eight backticked references to `entqb-thr6-320`, `-326` and `-330` survived into the spliced
batch, because the entries were drafted while those numbers were still live. The dead-id check caught
all eight. **The fix is procedural: grep the drafted blocks for every folded number BEFORE splicing,
and check `source` as well as `explanation`.**

**Next: topic 7, "Trauma of the neck", book p.137 (PDF 146), Q333 onward, 44 promised. Boundary
already confirmed; pp.146–148 already rendered at `<scratchpad>\thr6\`.**

### §14z — Grade Gain, Chapter 3 (Throat), topic 7: "Trauma of the neck" — WRITTEN 2026-08-12

**45 printed = 44 written + 1 folded.** Ids `entqb-thr7-333` … `entqb-thr7-376`, unbroken; **377 is the
fold and does not exist as an entry.** Book pp.137–143 (PDF 146–152), read in the previous session and
staged at `content\ent\qb-pages\gg-throat-ch7.array.js` + `.staged.js`.

**Reconciliation: 45 printed − 1 folded = 44 written.** Corpus 1,516 → **1,560**. Grade Gain memberships
847 → **892** (+44 origin, +1 `alsoIn`). Shared memberships **49 over 48 questions → 50 over 49**.

**Chapters:** `ent-stridor` 34, `ent-vocal` 7 (Q336, 360, 361, 362, 363, 364, 367), `ent-pharanat` 2
(Q333, 334), `ent-hoarse` 1 (Q366).

**Boxes: 5 of 45 (~11 %)** — Q355, Q358, Q362, Q363, Q374. All five in written entries, so **no marker
withdrawn**. **Predicted marker delta +39; measured +39 exactly** (corpus 1,027 → 1,066).

**Neither boundary defect** — questions end on p.142, p.143 is answers only, keys do not run past it.
Same as topic 6, unlike topic 5. The pattern still has no rule; keep rendering one page past the last
answer page.

#### The fold — the only one, and the lowest of any Throat topic

**Q377 → `entep-throat-107` (p.1631, Q139), which gains `alsoIn:['gradegain']`.** Stem identical but for
*"true about"* / *"true regarding"*; **options a, b and c verbatim**; option d differs only in wording —
GG *"Medical management cannot be employed at any case of laryngeal trauma"* against endpoint
*"Medical management can't be employed in any case with neck trauma"*. Same statement, same key index.
**A typographical variation is not a replaced option.** Neither bank prints a box, so no marker moved.
That entry was **already** recorded as reprinted in Exam Night Review at p.2956 (Q60) — so it is now a
question printed **three times across two banks**, held once.

**⚠️ The page number was read off the entry's own `source`, not written from memory** — the recorded
count of getting that wrong from memory stands at **7 of 7**.

#### ⚠️⚠️ NEW FAULT, AND THE MARKER COUNT IS THE ONLY THING THAT FOUND IT: SEVEN ENTRIES LOST THEIR MARKER AT WRITING TIME

The prediction was +39 and the first measurement gave **+32**. Twelve entries carried no marker where
only five should — **Q356, Q357, Q359, Q361, Q364, Q367 and Q373 had simply been written without the
closing sentence.** Every one of them parsed, validated, cited correctly and rendered fine. **Nothing
else in the toolchain would ever have seen it.**

This is the **fourth** time the marker count has caught a real fault and the **first** time the fault was
a scatter rather than a contiguous block — which matters, because a block is visible when scrolling and
seven singletons across four drafting files are not. **Fixed by anchoring on each entry's own
`{ id:'…',` and the following `,\n  objective:`**, so the insertion point is the closing quote of
`explanation` and nothing else; script kept at `<scratchpad>\wrT7\fixmarkers.js` as the shape to reuse.

**⚠️ AND A MEASUREMENT TRAP THAT COST TWO FALSE ALARMS IN ONE PASS — "no level figure is reproducible
across definitions" fired twice in five minutes:**

1. **The baseline was taken on `Q_ENT` and the check on `QUESTIONS`.** `QUESTIONS` folds in the 82 cases,
   45 of which carry the marker, so the delta read **+77** against a predicted +39. Not a content fault —
   two different populations.
2. **A probe that omitted the trailing-asterisk strip under-counted by 239.** Older entries italicise the
   marker (`*Written for this bank — …*`) and newer ones do not, so `endsWith(MARKER)` without
   `.replace(/\*+$/,'')` silently drops every italicised one. It reported **743** where the same corpus
   reads **1,066**.

**Both signatures look like catastrophic content failures and neither was one. Fix the definition into a
file and reuse it** — `<scratchpad>\wrT7\validate.js` now carries the canonical one and states why the
strip is not optional.

#### ⚠️ The dead-id fault fired again — but was caught PRE-splice for the first time

**Eight backticked references to `entqb-thr7-377`** were written into d2 and d3 while drafting, because
the staged file numbers it like every other question. Its own next-steps note had predicted exactly this.
**Caught by grepping the drafted blocks before splicing** and rewritten to `entep-throat-107`, which is
where the content now lives — so the post-splice dead-id check returned **0** rather than 8.

**Seventh occurrence, and the first with no repair work after the splice.** Grep the drafted blocks for
every folded number before splicing; it costs one command.

#### Traps in the source, all handled

- **⚠️ ONE HEADER VIGNETTE over Q355–Q359** — *"For questions 355, 356, 357, 358 and 359"* + a 35-year-old
  with a comminuted thyroid fracture after an MVA. **Restated in full into all five**; Q356–Q359 are
  unanswerable without it. *Fourth topic running with a header vignette: t3 had three, t5 two, t7 one.*
- **⚠️⚠️ TWO SEPARATE BACK-REFERENCE CHAINS SIT ADJACENT ON ONE PAGE, AND MERGING THEM INVERTS AN ANSWER.**
  `Q362 → Q361` is **unilateral** post-thyroidectomy palsy and keys *observe and voice therapy*;
  `Q364 → Q363` is **bilateral** post-extubation palsy and keys *posterior cordectomy*. Attached to Q361
  that operation would be **frankly wrong** — it widens the glottis at the cost of voice, in a patient
  whose problem is already a weak voice and whose airway is safe. **Both cases restated into their own
  question, and each entry states which chain it belongs to.**
  **`L11) Vocal cord paralysis.pdf` settled it independently**: posterior cordotomy appears only under
  *Management of Bil. abductor VC paralysis*.
- Back-references total **7 of 45 = 16 %**, the lowest since Throat t1.
- **No five-option questions and no figures anywhere in this topic** — all 45 are four-option, so no crop
  work and assets stay at 56 files.

#### Defects recorded beside their keys (2026-08-11 ruling) — seven

1. **⚠️⚠️ Q367 KEYS "C = Bronchoscope" FOR AN OBSTRUCTING PAEDIATRIC AIRWAY, AND IT LOOKS LIKE A COPIED
   LETTER.** Q363 poses the same problem in an adult — bilateral paramedian cords, stridor, stable — and
   keys **C = "Perform a tracheostomy"** *with a printed box saying so*. Q367 reorders its options, so
   **C now lands on "Bronchoscope"**: the letter matches its twin, the content does not. `L11` puts *care
   of the airway* first. **The one defensible reading is that "bronchoscope" means rigid endoscopy under
   GA, which is itself an airway** — recorded as such.
2. **Q373 contradicts the bank's own Q372.** Both are stable-airway blunt neck trauma with an abnormal
   voice, both offer mirror and flexible transnasal laryngoscopy; **Q372 keys flexible, Q373 keys the
   mirror.** The reconciling clause is *"without evidence of facial affection"* — Q372's patient has
   mandibular fractures and trismus so his mouth will not open, and Q373's will. **The bank never says
   so.** Recorded in both.
3. **Q352 offers the same complication twice** — *vocal cord paralysis* (a) and *recurrent laryngeal
   nerve injury* (c) are one entity under two names. Key is *all of the above*, so nothing turns on it.
   **Seventh instance of the same-answer-twice shape** (after t3 Q134's rat-tail pair).
4. **Q365's vignette says "subglottic" and its key says "tracheal" stenosis.** Different levels strictly;
   post-intubation stenosis spans both and **no option offers "subglottic"**, so the key is the only fit.
5. **Q346 ranks cortisone above voice rest** as *the most important step in medical treatment of laryngeal
   trauma*. Defensible only as the step that preserves the **airway**; voice rest is arguably the most
   important for the **voice**. No slide covers it.
6. **Q351 keys stainless steel wires** for fixing displaced laryngeal cartilage fractures where modern
   practice largely favours **titanium miniplates** — option (b) — wherever the cartilage is ossified.
7. **Q349 keys chest physiotherapy** as contraindicated in partial airway obstruction, where standard
   paediatric teaching makes the **Heimlich manoeuvre** the answer (do not intervene while the cough is
   effective). **Both are real** — chest physiotherapy can float a bronchial object into the trachea —
   so both are recorded.
   *(Also noted inside entries rather than listed here: Q347's "classic triad" is undefined by the bank
   and the widely taught version substitutes decreased breath sounds for dyspnoea; Q362's box says
   6–12 months where `L11` says 6; Q364 writes "cordectomy" where `L11` writes "cordotomy".)*

#### ⚠️ Laryngeal trauma is the largest general-knowledge proportion of any Grade Gain topic so far

**No cached ENT lecture covers it.** `L6) Stridor  and tracheostomy.pdf` names trauma **only as a cause of
stridor** — its open/closed classification is real and grounded Q369 — and gives **tracheostomy in full**
(indications, functions, levels, and the operative/early/late complication lists), which carried Q344,
Q356 and Q368. But **the Schaefer-Fuhrman classification, the zones of the neck, the management algorithm,
the intubation-trauma complications and the whole of oesophageal injury are on no slide.**

What *did* ground the topic, and more than the staging expected:

- **`L11) Vocal cord paralysis.pdf` carried the entire cord-palsy chain** — Q360, Q361, Q362, Q363, Q364,
  Q367 — verbatim: the RLN as motor to all laryngeal muscles except cricothyroid, the
  **paramedian-versus-cadaveric** discrimination, thyroidectomy first among iatrogenic causes, the
  presentation table giving **"Stridor. Normal voice."** for bilateral abductor palsy, laryngeal EMG at
  1–6 months, and both management ladders in full. **Read the slide before declaring a gap: this is the
  seventh time that rule has paid.**
- **`L12) Pediatric Laryngeal Lesions.pdf`** carried every foreign-body question (Q347, Q348, Q354, Q370,
  Q371) — the four impaction sites with percentages, the acute and late phases, the premature cough
  reflex, the expiratory film, and the 20 % → under-2 % mortality figures.
- **`L6`'s phase-to-site rule** (inspiratory = supraglottic/glottic, biphasic = subglottic/tracheal,
  expiratory = bronchial) and its **Poiseuille's law** slide did more work than any other two lines in the
  cache — they decide Q348, Q354, Q363, Q365 and Q376 between them.

#### Sweep — false positives worth recording, because two are now repeat offenders

- **⚠️ A BARE ORDINAL OPTION LIST DEFEATS EVERY OPTION-BASED STAGE, AND IT NOW HAS FOUR VICTIMS.**
  Q345, Q355, Q374 and Q375 all matched each other **and `entqb-thr4-159`, which grades an ADENOID**, at
  **1.00 on stage F**; Q345 also reached **stage B**. *"Grade I / II / III / IV"* is an option list
  containing no content at all, so B, C, D and F match on nothing. **Same class as the true/false pair at
  Nose ch.8.** Only the stem decides, and only stage E reads it.
- **The generic imaging menu produced its third false positive in three chapters** — Q357 vs
  `entqb-thr6-315`, both keying CT off *X-ray / US / CT / MRI*. Different organ, different question.
- **`entep-ear-126` (ear wax) captured its sixth and seventh questions** — Q369 and Q370, at 0.57 each,
  on the generic *"which of the following"* stem alone.

**Held after side-by-side comparison, not folded:** Q376 and Q365 against `entep-mfe5-9` (p.2377) — same
key, but a full vignette against a bare stem with one option replaced. **Three questions, one fact.**

#### Verified in a real `file://` boot, 2026-08-12

**0 console errors**, QUESTIONS **1,560**, 4 module cards, **768 app CSS rules**, **all 3
`max-aspect-ratio:5/4` blocks intact**, **56/56 question images loading**, **9/9 Clepsydra poses**.
Validator: **0 bad module/chapter refs, 0 duplicate ids, 0 out-of-range answers, 0 missing
`source`/`explanation`, 0 dead backticked ids over 4,878 references (1,315 distinct), 0 markers
misplaced into `source`.** Option counts {2:5, 3:53, 4:1293, 5:127}.

**Grade Gain running total: 903 printed / 843 written / 60 folded.** Throat t1–t7 = **377 printed /
355 written / 22 folded.**

**Next: topic 8, "Stridor & Tracheotomy", book p.144 (PDF 153), Q378 onward, 65 promised — the largest
remaining topic. `L6` covers it in full, so expect the reverse of topic 7: heavy grounding, few gaps.**

---

## §14aa — Grade Gain, Throat topic 8: "Stridor & Tracheotomy" (closed 2026-08-12)

**Book pp.144–150, PDF 153–159; answers pp.150–152, PDF 159–161. 66 printed, 65 written, 1 folded.
The contents page promised 65 — over by one, the eighteenth time the promised count has run short.**

`entqb-thr8-378` … `entqb-thr8-443`, **skipping 411**. Chapters: `ent-stridor` 47, `ent-paedlar` 9,
`ent-hoarse` 8, `ent-vocal` 1. **7 printed explanation boxes of 66 (~11 %)** — Q414, Q415, Q424 and
the whole Q426–Q429 linked set.

**Reconciliation — every figure measured after the splice, none estimated:**

| | |
|---|---|
| `Q_ENT` | 1,478 → **1,543** (+65) |
| Authored markers in `Q_ENT` | 1,021 → **1,079** (+58 = 65 written − 7 boxed) — **predicted +58 exactly** |
| `QUESTIONS` in a real `file://` boot | **1,828**; ENT 1,625; topic 8 = 65 |
| Dead backticked ids | **0** over 5,578 refs, 1,425 distinct |
| Bad entries / markers in `source` | **0 / 0** |
| Boot | **0 console errors**, 4 modules, 104 chapters, 768 CSS rules, 3 `max-aspect-ratio:5/4` blocks, 9/9 poses |

### The boundary defect fired again, and rendering one page past saved 28 of 66 keys

**The map said the answers begin on p.151 (PDF 160). They ran onto p.152.** Rendering one page past
the last answer page — the standing rule since ch.4 — recovered the keys for **Q416 onward, 28
questions**. **Twenty-second consecutive topic where the page RANGE was right and something about the
count or the extent was not.**

### The fold is a new shape: a vignette-dependent question REPRINTED SELF-CONTAINED

**Q411 — *"What is the characteristic sign seen in X-ray in case of croup?"*, four options, keyed
*steeple sign* — is topic 5's Q275 with the header vignette INLINED INTO THE STEM.** Folded into
`entqb-thr5-275`; **no `alsoIn`, since both printings are Grade Gain.** Ninth within-bank reprint.

**⚠️⚠️ THE FOLD TARGET WAS THE DANGEROUS PART, AND CHOOSING WRONG WOULD HAVE INVERTED THE ANSWER.**
Topic 5 prints **two** questions with that identical stem and identical option list:
`entqb-thr5-268` under an **epiglottitis** vignette, keyed **thumbprint**, and `entqb-thr5-275` under
a **croup** vignette, keyed **steeple**. **Only the header separates them.** A stem-and-options match
(stage A) hits both at 1.00. **The KEY is what selects the target, and it was checked before folding.**

**⚠️ NEW RULE: WHERE A BANK PRINTS TWINS THAT DIFFER ONLY BY A HEADER VIGNETTE, A LATER SELF-CONTAINED
REPRINT MUST BE MATCHED ON THE KEY, NEVER ON THE STEM.** The tool written for this
(`<scratchpad>\wrT8\t8vt5.js`) matches on the **option set alone** and deliberately reports
key-MISMATCHES too, precisely so such a pair surfaces as a warning rather than a silent wrong fold.

### The biggest finding is NOT a fold — a four-question cross-bank set no stage caught as a set

**GG Q426–Q429 maps one-to-one onto endpoint's Q53–Q56: same vignette (65-year-old smoker, voice
change without hoarseness, neck node), same four questions in the same order, same four keys.**

| GG | endpoint | asks | key |
|---|---|---|---|
| Q426 | `entep-throat-44` | site of the lesion | Supraglottic |
| Q427 | `entep-throat-45` | most significant risk factor | Smoking |
| Q428 | `entep-throat-46` | stage of the tumour | Advanced malignancy |
| Q429 | `entep-throat-47` | best biopsy site | the laryngeal mass |

**ALL EIGHT HELD. Every option list is REPLACED, not trimmed** — and the settled test is that a
**dropped or added** distractor is a reprint while a **replaced** one is a new question. Q427 even
differs in option *count*. **Noted in both directions in all four new entries.**

**⚠️ NO SWEEP STAGE SAW THE SET AS A SET.** Stage C found Q426→`-44` and Q428→`-46` only because those
keys happen to collide; Q427 and Q429 surfaced against unrelated entries. **A shared VIGNETTE spanning
four questions is invisible to every projection the sweep computes, because each stage reads one
question at a time.** Worth a dedicated check if another linked block appears.

### Nine defects recorded per the 2026-08-11 ruling — key held as printed, note in the explanation

1. **⚠️⚠️ Q400 SITS ON AN INTERNAL CONTRADICTION IN `L6` ITSELF, AND IT IS THE MOST SERIOUS OF THE
   NINE.** Its **causes** slide puts *acute nonspecific laryngitis* first for children; its
   **laryngomalacia** slide says laryngomalacia is *"the most common congenital anomaly of the larynx
   and **most frequent cause of stridor in children**."* **Unlike Q393, laryngomalacia IS on this
   menu**, so it cannot be excused as a limited option list. Reconciled as **chronic (laryngomalacia)
   versus acute (laryngitis)**. **⚠️ FOUND ONLY BY READING THE WHOLE DECK — the first Q400 draft cited
   the causes slide alone and would have shipped a confidently wrong explanation.**
2. **Q393** keys *acute nonspecific laryngitis* as commonest in **infants**, where `L12` says
   laryngomalacia and `entep-mfe4-6` keys laryngomalacia on the identical stem — but laryngomalacia is
   **not offered**, so the printed key is the best available (the `entep-nose-97` precedent).
3. **Q405 HAS NO QUESTION SENTENCE** — it stops at the end of its vignette. Supplied from Q415, which
   asks *"first line of treatment"* over the **identical four options**.
4. **Q407 keys "aerophagia", which appears NOWHERE in `L6`** — not on the early list, not anywhere in
   the deck. Defensible (the only option both early and paediatric) and recorded as unsupported.
5. **Q415's printed box names laryngospasm and a prolonged QT interval, neither in its own stem** —
   the same shape as t3 Q138.
6. **Q435 "stridor at birth"**: on `L6`'s own **onset** slide only the **web** is present strictly at
   birth — laryngomalacia is *1st week*, haemangioma *1st 6 months*. Read as "congenital/neonatal".
7. **Q440's option (b), *"It needs investigations in every case"*, is made true BY FIAT by an
   "all the above" key**, and sits awkwardly with the conservative management of mild laryngomalacia.
8. **Q442 prints cuff pressure as "< 20 mm Water"**; the accepted figure is ~20–30 **cm H₂O**.
9. **Q401's stem prints "NOT indication for indications of"** — the phrase duplicated. Q421 prints
   *"Wight loss"*, Q436 *"laryngotrachcobronchitis"*. All transcribed corrected, all recorded.

**⚠️ Q412, Q418 AND Q403 ARE THREE DIFFERENT JUDGEMENTS ABOUT THE THREE TRACHEOSTOMY LEVELS AND MUST
NOT BE MERGED: MID is the most DIFFICULT (the thyroid isthmus crosses rings 2–4), LOW the most
DANGEROUS (innominate artery, pleural domes), HIGH the most DAMAGING to the larynx (cricoid
perichondritis).** A first draft of Q403 cross-referenced Q418 as "low is the most hazardous" and had
to be corrected — **the bank asks all three, and a merged note would have been wrong for two of them.**

### Back-references: 5 of 66 (~8 %), including a three-deep chain

Q417→Q416, Q423→Q422, and **Q427, Q428 and Q429 all → Q426**. All restated in full, nothing added
beyond what the antecedent prints. **The three-deep chain off one vignette is the second such structure
in two topics (t7 had two adjacent two-deep chains).**

### Two process results worth keeping

**✅ THE PRE-SPLICE DEAD-ID GREP CAUGHT ITS TARGET FOR THE SECOND TOPIC RUNNING** — one backticked
reference to the folded `entqb-thr8-411`, in Q436's croup-versus-epiglottitis table. Rewritten to
`entqb-thr5-275` before splicing. **One command; always run it.** *(A second dead id,
`entqb-thr8-370`, was a plain typo for `entqb-thr7-370` and was caught post-splice by the validator.)*

**⚠️⚠️ NEW MARKER FAULT, FIFTH OCCURRENCE, AND THE FIRST IN THE OPPOSITE DIRECTION: SEVEN ENTRIES
CARRIED THE AUTHORED MARKER THAT SHOULD NOT HAVE.** All four previous faults were *missing* or
*misplaced* markers; this was a **spurious** one on every boxed entry — the count read **65 against a
predicted 58**. The convention was confirmed by measurement before fixing, not from memory:
`entqb-ear3-79` and `entqb-thr7-355/358/362/363/374` are the six existing boxed Grade Gain entries and
**none of them carries a marker**. Stripped with `<scratchpad>\wrT8\fixbox.js`; the count then read 58.
**Compute the expected delta FIRST and it does not matter which direction the error runs.**

**⚠️ AND A SHELL-ENCODING TRAP INSIDE THAT FIX: A LITERAL-STRING MATCH ON THE MARKER, WRITTEN THROUGH
A BASH HEREDOC, SILENTLY MATCHED NOTHING** — it reported "marker absent already" seven times on a file
that demonstrably contained all seven. **The em-dash is the only non-ASCII character in the sentence.**
Rewriting the script with the Write tool and matching by **regex stepping over the dash** fixed it.
*Prefer a regex that steps over non-ASCII to a literal match whenever a script reaches disk via a shell.*

**Grade Gain running total: 969 printed, 908 written, 61 folded.** Throat t1–t8 printed 40, 47, 61, 99,
53, 32, 45, 66 = **443 printed / 420 written / 23 folded.**

**Next: topic 9, Q444 onward, 56 promised.** Then t10 66, t11 20.


### §14bb — Grade Gain, Throat topic 9 "Phoniatrics" — CLOSED 2026-08-12

**Book pp.153–158 (PDF 162–167); answers book pp.159–160 (PDF 168–169). 57 printed, 53 written,
4 folded. Contents page promised 56 — over by one, the twentieth time the map's count has run
short and the twenty-first time its page range has been right.**

`Q_ENT` 1,543 → **1,596**. Marker delta **+50**, exactly as predicted. Chapters: `ent-phon` 26,
`ent-hoarse` 22, `ent-paedlar` 4, `ent-neck` 1.

**Verified in a real `file://` boot, 2026-08-12: 0 console errors, `QUESTIONS` 1,901, ENT 1,678
(1,596 MCQs + 82 cases), 0 bad chapter refs, 0 dead backticked ids, 0 markers misplaced into
`source`, 4 module cards, 770 CSS rules, all 3 `max-aspect-ratio:5/4` blocks.**

#### ⚠️⚠️ The boundary defect fired for the SECOND TOPIC RUNNING and HARDER than at t8

The map gives the answer page as 159. **The keys for Q477–Q500 — TWENTY-FOUR OF FIFTY-SEVEN — are
on p.160.** Rendering one page past the last answer page is the only reason they were read. At t8
the same defect hid 28 of 66; here it hid 24 of 57. **It is now the rule rather than the
exception, and the instruction stands unchanged: render one page past the last answer page, every
time.**

The *other* half of the ch.5 double defect did **not** fire — p.158 ends with Q500 and p.159 opens
with the Answers banner, so no question tail shared the answer page. **Both halves remain
unpredictable in both directions.**

#### The four folds — all cross-bank, all into endpoint

| GG | folds into | mechanism |
|---|---|---|
| Q485 | `entep-throat-69` (p.1535) | Stem reworded; **four options identical in identical order**, same key. Nothing dropped, added or replaced |
| Q489 | `entep-nose-49` (p.999) | Endpoint prints **five** options, GG four — GG **drops** "Dysphonia" and adds a vignette. A dropped distractor is a reprint |
| Q498 | `entep-throat-54` (p.1503) | Stem word-for-word identical; options differ only in capitalisation and "Speech fillers"/"speech filler" |
| Q499 | `entep-throat-55` (p.1505) | Stem word-for-word identical; the same four options **reordered**; same key |

Each target gained `alsoIn:['gradegain']` and the Grade Gain citation folded into its `source`.
**No marker moved:** `-69` keeps its authored marker because Grade Gain prints no box for Q485
either, and `-49`, `-54`, `-55` were already sourced from endpoint's own boxes. **The predicted
authored-to-sourced conversion did not occur — checking for it is still the right habit, and this
is the first topic where the check came back negative.**

**⚠️ Q499 IS THE FIRST FOLD IN MANY TOPICS TO REACH STAGE A — and the lesson is what it says about
the other three.** Q485 and Q489, equally real folds, reached **neither A nor B**: a reworded stem
defeats A and a dropped option defeats B. **The rankings found all four; the strict stages found
two.** E and F remain the instrument.

#### ⚠️⚠️ SIXTH MARKER FAULT — and the SECOND in the "spurious marker on a boxed entry" direction

Predicted 50, measured 51. **Q459 prints an explanation box and carried the authored marker
anyway.** Same shape as t8's seven, one entry instead of seven, and found the same way: **by
computing the expected delta before counting.** Nothing else could have seen it — the entry
parsed, cited, quoted its box verbatim and rendered correctly.

**A boxed entry takes NO marker.** Fixed by writing the repair script with the Write tool and
matching **by regex over the em-dash**, per the t8 finding that a literal-string match on that
sentence written through a bash heredoc silently matches nothing.

#### ⚠️ The pre-splice dead-id grep earned its place for the SECOND TOPIC RUNNING

**Four backticked references to folded numbers** — three to `entqb-thr9-485` and one to
`entqb-thr9-498` — caught in the drafted blocks **before** splicing and rewritten to the fold
targets, so the post-splice check returned **0** instead of 4. Eighth occurrence of the fault,
second consecutive catch with no repair work afterwards. One of the three even read
`` `entqb-thr9-485` (folded into `entep-throat-69`) `` — **annotating a dead id does not stop it
being read as a live reference.**

#### Defects recorded, keys held as printed (the 2026-08-11 ruling)

1. **⚠️⚠️ Q455 "bambo nodules" keys TUBERCULOSIS.** The entity is **bamboo nodes**, whose defining
   association is **autoimmune disease** — classically SLE, then rheumatoid arthritis and
   Sjögren's — **and both are offered as distractors.** The most serious defect in the topic.
2. **Q451** asks what is not typical of "congenital laryngeal stenosis" and keys *a web that
   partially occludes the glottis* — **but a glottic web IS a congenital laryngeal stenosis**, and
   the other three options are the endoscopic findings of **laryngomalacia**. The key works only
   if the stem means *congenital laryngeal STRIDOR*, the older name for laryngomalacia.
3. **⚠️ Q496 keys SURGICAL TRIMMING for ventricular dysphonia while the bank's own Q494 keys VOICE
   THERAPY for hyperfunctional dysphonia** — two conditions `L8` files in the same **functional**
   column, with opposite first treatments. **Neither `L2` nor `L8` prints any treatment for
   ventricular dysphonia at all**, and *"speech therapy"* is offered as option (a), so the bank
   chose surgery deliberately. Key held; the vignette's *"secondary compensatory hypertrophy"* is
   what makes it defensible, and the discrepancy is stated in both entries.
4. **⚠️ Q479 offers the SAME ANSWER TWICE** — *"difficulty in producing language"* and *"normal
   comprehension with impaired expression"* both name **expressive aphasia**. The key (receptive)
   is unaffected, but the question really offers three options. **Second appearance of the
   same-answer-twice shape** (t3 Q134 was the first).
5. **Spellings corrected and recorded:** *"Sulcus glottidaus"* (Q449, Q452, Q463) for sulcus
   glottidis; *"Haemophiles influenzae"* (Q454); *"Reineck's Edema"* (Q491); *"asthetosis"* on
   `L8`'s own slide against *"athetosis"* in Q469.

**✅ Three internal consistency checks PASSED, which is worth recording because they usually
fail:** Q449 against Q463 on the sex distribution of sulcus; Q476 (*cleft palate causes
hyponasality* keyed FALSE) against Q497 (*rhinolalia aperta* keyed for a cleft palate); and Q470
(extra-pyramidal → monotonous) against Q500 (pyramidal → slurred).

#### Two gaps answered from general knowledge rather than declared

`L8` **defines stuttering in detail and never states a cause** — so **Q473's genetic theory** is
answered from outside knowledge and tagged: family clustering, twin concordance, GNPTAB/GNPTG/NAGPA,
the 4:1 male ratio. **The deck's own DSM-5 quote settles the psychological theory from inside the
material**, though: *"the disturbance **causes** anxiety about speaking"* — the arrow points from
the stutter to the anxiety. Likewise `L8` covers **learning disability** as a category and never
names **dyslexia**, so **Q478** is answered and tagged.

#### ⚠️ The false positives were the same two shapes as ever, and one set a record

**Five questions in one topic** — Q444, Q445, Q469, Q474, Q476 — topped out against
`entep-nose-64` at E 0.50–0.67 for one reason: the shared boilerplate *"All of the following are
true about X except"*. **The largest cluster of that artefact yet.** And `entep-ear-126` (*"Which
of the following is not true about ear wax?"*) captured Q449 at E 0.67 — its **eighth** capture,
making it the corpus's single most prolific false positive. **Read both on sight as noise.**

#### ⚠️ ENVIRONMENT — a new, reusable trap that cost five failed runs

**Headless Chrome (and Edge) fail with `Multiple targets are not supported in headless mode` when
`--user-data-dir` points inside a path containing a DOUBLE DASH.** The session scratchpad is
`…\Temp\claude\D--claude-os-Herophilus\…`, and that `--` is enough: **every invocation died before
loading anything, with `--dump-dom` and with `--screenshot`, in both browsers, in both old and new
headless.** The identical command against `C:\Windows\Temp\cudx` worked first time.

**⚠️ THE FAILURE LOOKS LIKE A BROKEN BROWSER AND IS A BROKEN PATH.** Copy the instrumented `app\`
copy **and** the user-data-dir to a double-dash-free directory — `%LOCALAPPDATA%\Temp\hb9` was used
here — and the boot check runs normally. The preview pane cannot substitute: it renders a file
outside the project as a static snapshot and `javascript_tool` returns *"No site is open in this
tab."*

---

## §14cc — Grade Gain, Throat topic 11 "Clinical Assessment of Voice" — CLOSED 2026-08-13

**21 printed, 21 written, 0 folded.** Contents promised 20 — over by one, the **22nd** time the
map's count has run short while its page range was right. `Q_ENT` 1,617 → **1,638**. Marker delta
predicted **+21** and measured **+21** — every entry authored, **zero boxes in 21**, so the
prediction was trivially checkable and still worth computing first.

**This closed the Grade Gain THROAT section except topic 10**, which was left mid-draft at 11 of 66
and finished on 2026-08-23 (§14dd). Throat stood here at **500 printed / 494 written / 27 folded**
across t1–t9 and t11; with t10 it closes at **587 / 555 / 32**.

### ⚠️ THE ch.5 DOUBLE DEFECT FIRED ON ITS OTHER HALF — FIRST TIME IN FOUR TOPICS

**Q584–Q587 are printed on book p.174, in the left column, beside the Answers banner in the right.**
Reading only "the question pages" pp.172–173 would have lost **four questions**. At t8 and t9 the
defect ran the *other* way — answers spilling **past** the stated page, hiding 28 and 24 keys
respectively. Here it runs backwards: a **question tail sharing the answer page**.

> **Both halves remain unpredictable in both directions, and the standing rule covers both:
> render one page past the last answer page, every time, and read every page in the range.**

The far end was clean for once: all 21 keys fit on p.174, PDF 184 is blank, and the topic ends the
Throat section. Rendered one page past anyway.

### Zero folds, and the zero is evidenced

**12 of 22 distinctive terms return 0 hits across the whole corpus** — `talbot`, `auditory
perceptual`, `voice handicap`, `grbas`, `inverse filtering`, `electroneurograph`, `acoustic
analysis`, `swallow screening`, `pass/fail`, `rigid laryngoscopy`, `non-instrumental`. **Neither
endpoint nor House teaches the voice-assessment protocol at all** — endpoint teaches hoarseness by
*disease*, never by *instrument*. Per the standing rule: **say why a zero is a zero.**

### Both staged flags resolved FROM THE LECTURE, not from judgement

- **Q577** (real-time recording → VFSS) was staged with *"⚠️ FLAG: FEES is also a real-time recorded
  study."* `L7) Assessment And Management Of Swallowing Disorders` settles it: FEES *"does not
  permit visualization of either the oral or the oesophageal phase"* and *"passage of the bolus and
  movement of the pharyngeal structures cannot be observed during the swallow because of the
  'white-out' effect"*, while VFSS gives *"the real-time visualization of the bolus from the oral to
  the oesophageal cavity."* **Key stands, no defect.**
- **Q587** (both oral AND pharyngeal phases → VFSS) resolved by the same passage. **Key stands.**

> **Eighth and ninth time "read the slide before declaring a gap" has paid.** Both would have been
> written up as defects on the staging note alone.

### Defect recorded (1)

**Q580 — TWO OPTIONS ARE THE SAME NUMBER.** The Talbot's-law question offers *"5 images / second"*
(keyed) and *"2 images each 0.4 seconds"*, and **2 ÷ 0.4 = 5 per second.** They are arithmetically
identical. Per the user's ruling of 2026-08-11 the printed key is kept and the flaw is noted inside
the `explanation`; the answer is defended on **wording** — `L8` prints *"1 image per 0.2 seconds or
**5 images per second**"*, and option (c) is that clause verbatim.

**A new shape: previous "two correct answers" defects were two clinically defensible answers. This
is one answer expressed twice in different units** — invisible to any key comparison, and invisible
to a reader who does not do the arithmetic.

### Q585 is an outlier and a genuine gap

*"Deep neck space mass, how to investigate in kids?"* sits in a voice-assessment topic and belongs
to `ent-neck`. **The material never names the modality:** `L4) PHARYNGEAL SUPPURATIONS` prints only
*"Lateral soft-tissue neck radiograph (plain X-ray) confirms the diagnosis"*, and `L5) NECK MASS`'s
work-up lists a bare *"1- Imaging"*. Answered from general medical knowledge and tagged throughout,
per the answer-the-gap rule — and **consistent with the bank's own `entqb-thr6-327`**, which keys
contrast CT for an adult lateral neck mass.

### Chapters

`ent-phon` ×15, `ent-swallow` ×5, `ent-neck` ×1.

### Validation

Whole-corpus run after the splice: **2,075 questions, 0 bad entries, 0 dead ids over 6,276
backticked references (1,543 distinct), 0 markers misplaced into `source`, 0 duplicate ids, every
`answer` in range.** Pre-splice dead-id grep returned clean — all eight external references
(`entep-throat-103`, `entqb-thr6-327`, six `entqb-thr9-*`) verified live before splicing. **Ninth
run of that check, second consecutive topic with nothing to repair.**

---

## §14dd — Grade Gain, Throat topic 10 "Hoarseness Of Voice" — CLOSED 2026-08-23. **AND THIS CLOSES THE GRADE GAIN THROAT SECTION.**

**Book pp.161–169 (PDF 170–178); answers pp.170–171 (PDF 179–180). 66 printed, 61 written, 5 folded** —
Q501…Q566 against 66 promised, **EXACT**, only the sixth exact count in twenty-four topics.
`Q_ENT` 1,638 → **1,699**. Marker delta predicted **+51** and measured **+51**.

**Real `file://` boot 2026-08-23: `PROBE{"errs":[],"sheets":2,"rules":876,"media54":3,"q":2158,"mods":4,"chaps":153,"th":153,"sec":1603,"cases":89}`** — 0 console errors, 3 `max-aspect-ratio:5/4` blocks, 2,158 questions (2,097 + 61), 0 dead backticked ids over the whole ENT corpus, 0 markers in `source`, 0 duplicate ids, every `answer` in range, 0 bad chapter refs, 0 missing image files.

**Chapters:** `ent-hoarse` 51, `ent-paedlar` 4, `ent-vocal` 4, `ent-neck` 2, `ent-phon` 2.
**Throat now stands at 587 printed / 555 written / 32 folded across all eleven topics** (t1 40, t2 47, t3 61, t4 99, t5 53, t6 32, t7 45, t8 66, t9 57, **t10 66**, t11 21). **GG whole-book total: 1,113 printed / 1,043 written / 70 folded** — Ear 261/241/20, Nose 265/247/18, Throat 587/555/32.

### ⚠️⚠️ THE AGENT THAT DIED AT t10 HAD DRAFTED 11 OF 66 — AND THE ELEVEN WERE SOUND

The 2026-08-13 file held `entqb-thr10-501`…`-511`, complete, parsing, correctly marked and already
cross-referencing `entep-throat-16`. **Seventh time validating a dead agent's file beat rewriting
it** — nothing in the eleven needed repair, and the remaining 55 were written on top. The staging
(`gg-throat-ch10.array.js`) was likewise complete: all 66 transcribed, ten figure crops cut and
looked at, ten back-reference chains recorded. **Only the drafting had stopped.**

### The five folds — all cross-bank, all into endpoint

| GG | folds into | reached by | mechanism |
|---|---|---|---|
| Q564 | `entep-throat-100` | **A** | stem and all four options **word for word identical**, same key |
| Q565 | `entep-throat-108` | **B**, E 1.00, F 1.00 | identical stem and options; endpoint writes "the vocal cords" for "vocal cords" |
| Q559 | `entep-throat-28` | **B**, E 1.00, F 1.00 | identical options and key; stem differs by a trailing clause. **SIXTH printing of this item across the two banks** |
| Q550 | `entep-throat-82` | **C**, E 1.00, F 1.00 | same stem word for word, **same four options REORDERED**, same key |
| Q541 | `entep-throat-65` | **F 0.80 ALONE** | same options in the same order, same key; stem adds "which of the following" |

### ⚠️⚠️ Q541 IS A NEW DEFEAT SHAPE: A BRITISH-VERSUS-AMERICAN SPELLING DEFEATS STAGES A, B **AND** D

Endpoint prints *"Subglottic **tumour**"*, Grade Gain *"Subglottic **tumor**"*. That single letter
changes the sorted option-set string, so **stage B and stage D both miss**; stage A was already
defeated by the trailing "which of the following". **Only stage F named it**, at 0.80 — and the
tokens it lost were the very ones that differ.

**⚠️ AND STAGE E POINTED AT THE WRONG SIBLING.** E scored Q541 at **1.00 against `entep-throat-15`**,
which shares the stem exactly and keys **tracheal stenosis** — a *variant*, not the fold. The fold
was `entep-throat-65`, whose stem E ranked no higher. **The ranking that names the sibling is not
necessarily the one that names the fold target; read both lists.**

### ⚠️⚠️ FIFTH "A FOLD CONVERTS AUTHORED TEXT INTO SOURCED TEXT" — AND IT WAS SPOTTED AT SWEEP TIME

**Q550 prints an explanation box where `entep-throat-82` printed none.** The box — *"Explanation:
Plummer Vinson's syndrome causes cancer esophagus not larynx one"* — was transcribed into the entry
and **its authored-text marker removed**, which is the whole of the −1 in the +52/−1 = +51 delta.
Computing the delta **before** counting is what makes that arithmetic checkable; the habit paid again.

### ⚠️⚠️⚠️ THE BIGGEST FINDING IS A CROSS-BANK **KEY** DIVERGENCE ON AN IDENTICAL ITEM — Q566

The staging had already flagged Q566 as a defect on internal evidence: the photograph shows a
**glottic** lesion, and the bank's own Q501 plus `L2) Hoarsness of Voice.pdf` both make a glottic
lesion a cause of **hoarseness**, while *muffled / hot-potato voice* is the **supraglottic** sign
(`L12` gives muffled voice to acute epiglottitis). The key is **b, Muffled voice**.

**The sweep found that `entep-enr-33` (endpoint, Exam Night Review p.3036) prints the SAME stem with
the SAME FOUR OPTIONS IN THE SAME ORDER and keys c, HOARSE VOICE.**

> **That converts *outside reasoning disagrees with the key* into *the course's own second bank
> disagrees, in print, on the identical question*. It is citable, and it is the strongest key
> defect recorded in the Grade Gain Throat section.** Per the 2026-08-11 ruling **neither `answer`
> moves**: both are held, and the divergence is written into both entries' `source`.

Endpoint also *names* the lesion at `entep-throat-100` — a **vocal cord polyp** — which is what
settles the reading of the photograph, and `entep-throat-100` is itself one of this topic's folds.

### Defects recorded, keys held as printed (the 2026-08-11 ruling)

1. **⚠️⚠️ Q566** — the cross-bank key divergence above.
2. **⚠️ Q534 vs `entep-throat-82`** — *"Potentially malignant laryngeal lesions are all of the
   following except"* printed twice with different menus and different keys. Q534 offers **Reinke's
   oedema** and keys it; `entep-throat-82` offers **TB of larynx** instead and keys **Plummer-Vinson**.
   **Two options are defensible exceptions by different routes** — Reinke's is not premalignant at
   all, Plummer-Vinson is premalignant for **post-cricoid**, not laryngeal, carcinoma (`L10`).
   Both keys are right on their own menu. **And `entqb-thr10-518` leaves TB of larynx standing as
   premalignant for a third time** — an unsourced claim the bank repeats and never resolves.
3. **⚠️ Q557 "Smoking is associated with which of the following?"** — the stem is unqualified and at
   least **two options are true**: `L2` says of polyps that *"most patients are smokers"* and of
   Reinke's that its causes *"include smoking"*. The key (Reinke's) is the lesion smoking **causes**
   rather than merely accompanies.
4. **⚠️ Q555 — options a and d are the same fact split in two.** The left RLN is long **because** it
   loops under the aortic arch; the key is the proximate reason, option d its anatomical cause.
5. **⚠️ Q524 — three of the four options are true of RRP in general.** Only *"more potentially
   malignant than in children"* is true **of adults**; the stem's two words carry the whole question.
6. **⚠️ Q542 — the printed box quotes a finding the stem never gives**, listing *"neck swelling"*
   among the features. An **internal** laryngocele by definition does **not** present as a neck mass;
   the box appears written against the external variety. Recorded, key unaffected.
7. **⚠️ Q553 uses "lumpectomy", a breast term**, for cordectomy; and `L2` gives glottic-tumour
   management only as *"radiotherapy, surgical excision according to the stage"*, so the choice
   between **LASER + radiotherapy** and **radiotherapy alone** is **not decidable from the slides**.
8. **⚠️ Q516 — no cached lecture names a commonest cause of *unilateral* cord paralysis.** `L2` ranks
   only the malignant causes (bronchogenic carcinoma first) and `L11` lists idiopathic first without
   ranking. The key (thyroidectomy) stands **on the option list**, not on a ranking.
9. **⚠️ Q535 keys the RIGHT nerve for thyroidectomy while Q555 keys the LEFT for palsy overall** —
   **not** a self-contradiction: two different questions, and no cached lecture gives the
   thyroidectomy-side figure either way.
10. **Q515** — the key turns on syphilis **not** being posterior, which no slide states; `L2` gives
    the posterior larynx to **TB**, so the key is defensible because the site is already taken.
11. **Three spellings of one eponym inside one topic** — *Reinke's* (Q511, Q536), *Reineke's* (Q534),
    *Reineck's* (Q561). Also *"Chocking"* for choking (Q566) and a stray bracket in Q532's stem.

### Gaps answered from general knowledge and tagged (the 2026-08-04 rule)

- **`bryce` returns ZERO across all 34 cached ENT lectures** (Q513) — the sign is supplied and tagged.
- **`leukoplakia` and `erythroplakia` return ZERO across all 34** (Q514, Q518, Q534) — the whole
  premalignant-larynx group rests on outside knowledge, tagged in each.
- **`MDVP` and "more than 20 parameters" appear in no lecture** (Q525); `L8` covers acoustic analysis
  and its pitch parameters but never names the software.
- **No lecture lists any SITE for RRP** (Q544) — the squamociliary-junction list is tagged. **⚠️ But
  the underlying principle is printed by the bank itself**: Q554's own box gives the two epithelia of
  the subglottic transition, and `entep-nose-64` applies the identical argument to scleroma.
  **Prefer the other bank to outside knowledge — it paid here.**
- **PROPRANOLOL appears in NEITHER `L6` NOR `L12`** (Q548). It is the modern first-line agent for
  infantile haemangioma, it is a **correct** option and it is **not the key**, so the question stays
  answerable from the slides; tagged where used.
- **No lecture states the subglottic site of laryngoscleroma** (Q515, Q517) — supplied from
  `entep-nose-64` and the epithelial-transition argument rather than from general knowledge.
- **No lecture states the membranous/cartilaginous division of the cord** (Q556) — inferred from
  `L2`'s body-cover theory and from where `L2` places each MAP lesion, and tagged.

### Ten back-reference chains repaired at drafting — 15 % of the topic

Q528→527, Q530→529, Q533→532, **Q537 and Q538 both→536**, Q540→539, **Q544, Q545 and Q546 all→543**,
Q548→547. Every one restated its antecedent in brackets, per the `entqb-thr6-329` precedent.

**⚠️ Q537/Q538 ARE THE t7 TRAP AGAIN AND MERGING THEM WOULD INVERT AN ANSWER**: Q537 asks the
first-line treatment of the **STRIDOR** (key **tracheostomy**) and Q538 the treatment of the
**CONDITION** (key **smoking cessation**). `L2` supplies the precedent for the airway answer —
*"at least one patient was reported to require a tracheotomy"* for Reinke's oedema.

**⚠️ AND A SECOND NON-MERGEABLE PAIR WITH AN IDENTICAL OPTION LIST: Q551 vs Q552.** Same four
options — MLS / external approach / wait and see / medical treatment — keying **different answers**.
Q551 is an external-or-mixed laryngocele (neck swelling) → **external approach**; Q552 is a
post-intubation intralaryngeal lesion → **MLS**. **Reading only one of them teaches the wrong rule.**

### Held as new rather than folded, and why

- **Q558 vs `entep-throat-49`** (nodule aetiology) — **two of four options replaced**; the
  `entep-mfe5-13` precedent holds that as a new question.
- **Q526 vs `entep-throat-4`** (bilateral RLN injury) — two options replaced and reordered, though
  endpoint's p.1571 printing does use GG's exact *"Severe stridor"* wording.
- **Q506 vs `entep-throat-16`** (nodule site) — **three of four options identical in identical
  order**, one distractor replaced (*posterior half* for *posterior 1/3*); §14c–d holds a single
  replaced distractor as a new question. Already cross-referenced by the dead agent's draft.
- **Q561 vs `entqb-thr9-491`** (MAP list) — **within-bank**, same stem, one option swapped
  (**laryngocele** for **cancer larynx**) and therefore a different key. Each is the only non-MAP
  entry on its own menu; both right.
- **Q522 vs `entqb-thr11-579`** (videostroboscopy) — within-bank, same answer, different stems and
  different menus.
- **Q547 vs `entqb-thr8-395`** — the paediatric-airway menu shared with a different key. The
  identical-menu-different-key shape; not a fold.

### Process notes

- **⚠️ FIVE REFERENCES TO IDS THAT WERE ABOUT TO BE FOLDED were caught PRE-SPLICE** — one to
  `entqb-thr10-564` and four to `entqb-thr10-565`, rewritten to `entep-throat-100` and
  `entep-throat-108`. **Tenth occurrence of the fault, third consecutive topic with no repair work
  afterwards.** The check was cheap because the fold list existed before the drafting did.
- **⚠️⚠️ A MARKER COUNT IS MEANINGLESS ACROSS TWO DIFFERENT REGEXES.** The first baseline used
  `endpoint file prints no explanation` and read 1,156; the post-splice count used
  `…no explanation here` and read 1,201, an apparent delta of +45 against a predicted +51. **The fix
  is to measure the BEFORE file with the SAME expression** — `git show HEAD:app/data/questions.ent.js`
  read **1,150**, and 1,201 − 1,150 = **+51, exactly as predicted.** The 2026-08-12 rule stands:
  **trust the delta, fix the definition in a file.**
- **⚠️ THE ~9 KB HEREDOC LIMIT FIRED AGAIN** on a two-entry append (~8.5 KB), and the `\`→`\`
  collapse fired once inside a `node -e` repair script. Both are recorded traps; **one entry per
  heredoc** and `String.fromCharCode(92)` for separators are the working fixes.
- Ten figure crops (`q-gg-163` … `q-gg-169`) were cut and looked at **at staging**; all ten verified
  present on disk before the splice. Three entries are `imgEssential` — **Q539, Q563, Q566**.

**Next: House from `d house ENT mcq.pdf` PDF p.15 (`enthd-`, 41 done, next ch.3 Q45).**

---


## Ophthalmology banks — the real state, measured 2026-08-18

The bank table's rows 5 and 6 said **"unseen, 0 pages, 0 questions"** for both ophthalmology files.
Both were wrong, in opposite directions, and are corrected above.

| | `ophthalmology qb.pdf` (Grade Gain) | `ophthalmology MCQ.pdf` (House) |
|---|---|---|
| Verified by `pdfinfo` | **185 pp, A4 portrait**, 120.9 MB | **126 pp, A4 LANDSCAPE**, 100.3 MB |
| Page arithmetic | **PDF = book + 7** | ⚠️ **TWO BOOK PAGES PER PDF PAGE** — `book = 2N-4` (left) and `2N-3` (right); `PDF = floor(b/2)+2` |
| Answers | pooled **key pages** interleaved (book p.8, p.15) | **inline beneath each question** — no key anywhere in ch.1 |
| Numbering | continuous so far (Q1–Q138) | **restarts at 1 every chapter** — ids carry a chapter token, `opmcq-c1-<n>` |
| Read | book pp.1–19 = PDF 8–26 | ch.1, book pp.4–15 = PDF 4–9 |
| Questions | **138, merged**, 8.6 per question-page | **56 staged (Q1–Q56 complete), NOT merged** |

### ⚠️ 56 FINISHED HOUSE QUESTIONS WERE STRANDED IN `content\ophtho\qb-pages\`

`house-c1.draft.js` (22) + `house-c1b.draft.js` (34) = **56, and validated from disk 2026-08-18:
Q1–Q56 with no gaps · 0 schema faults · every one carries an `explanation` and a `source` · every
`chapter` resolves against the current 36.** They have never been spliced into
`app\data\questions.ophtho.js`, so the app has shown 138 ophthalmology questions when 194 exist.

**Chapter assignments survive today's `op-intro`/`op-intro-exam` split unchanged** — the three
`op-intro` questions (`opmcq-c1-12`, `-13`, `-26`) are vitreous composition, age-related change and
posterior-segment anatomy, all in `op-intro`'s half. **No refiling needed.**

### The cross-bank duplicate sweep: ZERO folds, and here is why the zero is a zero

56 House against 138 Grade Gain, ranked on stem + option overlap. **Nothing scored above 0.60**;
median 0.143; four pairs above 0.35, each read by hand:

| Pair | Verdict |
|---|---|
| `opmcq-c1-27` / `opqb-t1-39` — WHO legal blindness | **Both kept.** Same fact, **different option sets** (House turns on *corrected vs uncorrected*, GG on the number) — options replaced means a new entry. ⚠️ **AND A KEY DIVERGENCE: House keys `= 3/60`, Grade Gain keys `≤ 3/60`.** Hold both, note both |
| `opmcq-c1-18` / `opqb-t1-21` — depression in adduction | **Both kept.** Same key (superior oblique); option sets differ by one item |
| `opmcq-c1-15` / `opqb-t1-40` — confrontation minimum VA | **Both kept.** Same key (1/60); House's distractors are all *3/60 vs 1/60, of vs >*, GG's are a plain ladder |
| `opmcq-c1-6` / `opqb-t1-55` — intraocular pressure | **Not a duplicate at all.** House asks the **average** (keys **15 mmHg**), GG asks the **range** (keys 10–21). Different questions |

**So all 56 are net new.** The rule that decided every one of them is the same: *options replaced →
new entry* (`CLAUDE.md` §4).

### ⚠️ A bank question settles a theory divergence

`opmcq-c1-6` keys the average IOP at **15 mmHg**, and book ch.1 p.33 prints **15 mm Hg**. `pup-5`
prints **16 mmHg**. That is **two sources against one**, and it is recorded on the §14.5 row rather
than acted on — the theory reconciliation pass owns it, not the bank stream.

### ✅ THE COUNT, MEASURED 2026-08-18 — replaces the ±30 % extrapolation

Sampled 16 pages across both files. **The decisive find was that File A prints a CONTENTS PAGE
carrying a question count for every section** (PDF 3–7) — and rather than trust it, the reader
verified it against the printed cumulative question numbers at four independent checkpoints.
**All four hit the contents sum exactly**: book p.20 → 138 · p.53 → 348 · p.102 → 644 · p.132 → 830.

| | File A `ophthalmology qb.pdf` | File B `ophthalmology MCQ.pdf` |
|---|---|---|
| Structure | **28 sections, not 20** — ch.1–20, then **End Exam 1–6, a Tutorial Exam and a Final Exam** | **Three formats**: Part A 20 chapters (book 4–134) · **Part B OSCE** (135–232) · **Model exams 1–4** (233–249) |
| Numbering | **continuous across ch.1–20**, restarts inside each exam | restarts per chapter; OSCE runs continuously Q1–**303** |
| Total | **1,087** (ch.1–20 = **830 measured**, exams = 257) | **≈1,025**, band 995–1,057 |
| Uncertainty | **±0–5** | **±30**, all of it in Part A |
| Done | 138 (= exactly ch.1–3) | 56 (= exactly ch.1) |
| **Remaining** | **949** | **≈969** |

Content runs PDF 8–183; **PDF 184 is blank and PDF 185 is a publisher advert** — the only blanks in
the file, established by a 30 dpi size sweep of all 185 pages rather than by reading them.

**REMAINING ACROSS BOTH FILES: ~1,918 questions**, band ~1,875–1,960.

#### What is measured and what is inferred — stated, not blurred

- **Measured:** File A's whole chapter block (830) and its structure · File B's OSCE run (**303**,
  counted) and model exams (**132** — exams 3 and 4 each end at exactly Q33, so 4 × 33) · File B's
  Part A density on **four complete chapters** (56/12, 28/6, 26/6, 43/10 — clustered 4.30–4.67).
- **Inferred:** File A's six unverified exam-section counts, from a contents page that was right on
  5 of 5 independent checks · File B's Part A total, extrapolated over 97 unsampled pages. **That
  last one is the only genuinely soft number in the estimate.**
- **Not established:** whether File A's **Tutorial Exam** carries photographs. At 3.9 q/page it is
  anomalously sparse against the other exams' 9–10, which in this corpus usually means images.
  **Rendering PDF 167–173 would settle it — the single highest-value follow-up.**

#### ⚠️ FIVE STRUCTURAL FINDINGS THAT CHANGE HOW THE WORK IS DONE

1. **~304 IMAGE CROPS, not a handful.** File B's OSCE **Q1–269 are each a clinical photograph with
   an explanation**, plus File A's End Exam 6 (Photos) at 35. Against the standing rule that
   **every crop is individually looked at** — 13 of 13 were wrong on the first try in ENT — this is
   likely **the dominant cost of the remaining ophthalmology work, larger than the transcription.**
2. **The back of both files is recycled BY DESIGN.** File A's eight exam sections and File B's model
   exams are past papers; File B says so outright — *"derived from the department's E-exams of the
   last year."* Topic overlap with the chapters is total, so **the six-stage duplicate sweep matters
   more here than in any previous topic.** They are distinct printings, not literal reprints.
3. **File B's model exams (132 q) are SHORT-ANSWER with no options.** They do not fit the MCQ schema
   at all and map onto the free-text `type:'case'` route in `cases.ophtho.js`.
4. **Those model exams REFERENCE images rather than reprinting them** (*"see the OSCE section"*), so
   they need **links to existing OSCE crops, not new crops.**
5. **Back-references are present in both files** (*"In the previous Q/case"*) — the known
   shuffle-repair problem applies, as it did at 28 % in Grade Gain ENT.

⚠️ **Minor discrepancy, recorded not resolved:** File B's running head prints **"Ophthalmology MCQs
2026"**, while `house-c1.array.js` recorded the edition as **"December 2025"**. Both were read from
the page; the staging note may have taken the edition from a cover and the running head from a body
page. Check before citing an edition anywhere.

---

## §15 — Dr. HOUSE in ENT: EAR section swept and drafting, NOSE section swept — 2026-08-23

**The bank.** `d house ENT mcq.pdf`, 104 PDF pages, image-only. **Each PDF page is a two-page
spread: left half = book page 2P−2, right half = 2P−1**, so book B sits on PDF `floor(B/2)+1`.
≈208 book pages. **The answer is printed inline as `Answer: X` and there are NO explanation boxes
anywhere** (verified across book pp.23–107). **Every House entry therefore takes the authored
marker** — `Written for this bank — d house ENT mcq prints no explanation here.`

### Transcription — book pp.23–107 complete

Ten transcripts in `content/ent/qb-pages/`, `d-house-ENT-mcq-pdf<range>.md`, covering PDF pp.15–54.
**Q1–Q390, every printed number present exactly once, zero unparsed.** Sections:

| section | questions | book pp. | chapters |
|---|---|---|---|
| **Ear MCQs** | Q1–Q236 | 23–74 | 10 |
| **Nose MCQs** | Q237–Q390 | 75–107 | opens *1. Nose anatomy & congenital anomalies* on p.75 |

⚠️ **The Nose section does NOT restart numbering** — its first question is 237, running straight on
from the Ear section's 236. Recorded as printed, never renumbered. `enthd-nose-<n>` is therefore
unambiguous without an offset.

### ⚠️ Four page-straddling questions, all repaired from both halves

A question whose options or key fall past the foot of a page continue at the head of the next, and
**neither fragment parses alone**. Q57, Q130, **Q94** and **Q239** were each rebuilt from the two
transcribed halves; the trailing fragment is kept as the page record and renumbered `<n>-tail` so
the question is counted once. **Nothing was inferred — every recovered option and key was read.**

⚠️⚠️ **Q94 IS THE ONE THAT MATTERED, AND A COUNT CHECK WOULD NEVER HAVE CAUGHT IT.** Its staging row
held only the p.44 fragment and **read that fragment's options C and D as A and B**, so `key:1`
pointed at *"An offensive ear discharge"*. **The printed key is B — the X-ray option, on p.43.** The
row was internally consistent, parsed cleanly, and was wrong. It was caught by a validator that
compares the **drafted option count against the staging row**, and it was the *staging* that turned
out to be defective while the drafted entry was already correct. **THE RULE: WHEN A DRAFT AND ITS
STAGING DISAGREE, READ THE PAGE — DO NOT ASSUME THE STAGING WINS.**

### Ear sweep — 30 folds, 162 to draft

Adjudication in `content/ent/qb-pages/house-sweep-ear.md`. The July staging (Q22–44) was
re-transcribed by accident and the overlap used as a control: **23 of 23 identical** on stem,
options and key. Three findings a score alone would have got wrong: **Q188/Q189 and Q49/Q50 are
deliberate pairs with identical menus and opposite keys** (merging either inverts an answer);
**Q56/Q57/Q58 are a three-rung ladder on one vignette**; **Q212 is printed twice on one page as two
different questions**, the second folding and the first new.

### Nose sweep — 7 folds, 147 to draft

Adjudication in `content/ent/qb-pages/house-sweep-nose.md`. Swept against the whole held corpus
**plus two comparisons the corpus sweep is blind to**, and both earned their place:

| Q | folds into | why the corpus sweep could not see it |
|---|---|---|
| **263** | `enthd-ear-162` | ⚠️ **source defect** — a Nose page prints an **Ear** question under a corrupted stem (a nose-anatomy opening spliced onto Q162's stem). The Ear side is **staged, not held**. |
| **382** | **Q381** | ⚠️ **internal verbatim reprint** on consecutive pages. Both copies are staged; **a section never sees its own reprints**. |
| 267 | `entqb-nose1-21` | see below |
| 271 | `entep-nose-22` | "Vomerine bone" = "Vomer" |
| 311 | `entep-mfe5-17` | corpus printing is fuller (parenthetical glosses) — kept |
| 353 | `entep-enr-23` | "Watchful waiting" = "Observation" |
| 378 | `entqb-nose3-108` | stage A exact |

⚠️⚠️ **A NEW FOLD-DEFEAT SHAPE, AND IT IS THE *tumour/tumor* SHAPE AGAIN: Q267 DEFEATED STAGES A, B
AND D ON THE WORD "artery".** House writes *"Sphenopalatine artery"*, Grade Gain writes
*"Sphenopalatine"* — **a suffix on every option** breaks an exact sorted-set comparison completely.
Only the **stage F token ranking** named it. ⚠️ **And Q263 defeated the staged-vs-staged option-set
check on a typo** (*"hear loss"* for *"hearing loss"*, three times): **it was found by reading the
transcriber's recorded defect note, not by any stage.** **RECORD THE DEFECT YOU SEE — IT IS THE
ONLY INSTRUMENT THAT CATCHES WHAT NORMALISATION DESTROYS.**

**Seven deliberate contrast pairs must never be folded** — Q238/Q279, Q240/Q242, Q243/Q244,
Q286/Q287, Q302/Q303/Q304, **Q331/Q348** (same vignette at 4 days vs 10 days, identical menus,
keyed viral vs bacterial), Q388/Q389. Each matched at `optset+key` or `stem 1.00`.

**Six chained questions** carry a back-reference and cannot stand alone in a shuffled deck:
Q261, Q262 → Q260 · Q318 → Q317 · Q320 → Q319 · Q339 → Q338 · Q386 → Q385. **Each staging row now
carries a `ctx` field with the antecedent case and its printed key.**

⚠️ **Q339 keys *trigeminal* and it is right** — its case is **maxillary sinusitis**, so otalgia
refers along V. `entep-throat-109` keys **glossopharyngeal** for **post-tonsillectomy** otalgia.
**Different pathway, not a divergence** — a teaching contrast, and the two now cross-reference.

### ⚠️ A PRE-EXISTING MARKER FAULT, FOUND AND FIXED

Only **21 of the 41** House entries already held in `app/data/questions.ent.js` carried the authored
marker; the 20 missing were Q1–21 from the July batch. **Because this bank prints no explanation box
anywhere, all 41 need it.** Appended and verified — **41 of 41 carry the marker, 0 in `source`.**
**A marker rule written after the first batch does not retro-apply itself.**

### Corpus reconciliation

`Q_ENT` = **1,699** MCQs (house 41 · endpoint 615 · gradegain 1,043), **zero duplicate ids, zero
option-less rows**, plus `C_ENT` = 82 cases → **1,781, exactly the recorded ENT figure.** An earlier
reading of 1,638 in this session was simply wrong and is struck.

### Drafting state

| batch | range | staged | drafted | file |
|---|---|---|---|---|
| ear 1 | Q46–Q90 | 28 | 8 | `house-ear-batch1.draft.js` + `house-ear-b1.rest.js` |
| ear 2 | Q91–Q121 | 28 | 5 | `house-ear-batch2.draft.js` + `house-ear-b2.rest.js` |
| ear 3 | Q122–Q151 | 28 | — | `house-ear-b3.rest.js` |
| ear 4 | Q152–Q181 | 28 | — | `house-ear-b4.rest.js` |
| **ear 5** | Q182–Q212 | 28 | **28 ✅** | `house-ear-batch5.draft.js` — **the quality model** |
| ear 6 | Q214–Q236 | 22 | 5 | `house-ear-batch6.draft.js` + `house-ear-b6.rest.js` |
| nose 1–6 | Q237–Q390 | 147 | — | `house-nose-batch<1-6>.array.js` |

⚠️⚠️ **SIX DRAFTING AGENTS RAN CONCURRENTLY AND ALL SIX DIED** — five on *"session limit"*, one on
*"401 OAuth token expired"* — **every one of them at the point of writing its output file**, after
doing all the reading and reasoning. **46 entries survived on disk and validated clean**; the rest
was lost. ⚠️ **THE PROJECT CAP IS TWO CONCURRENT OPUS SUBAGENTS AND SIX IS WHY THEY DIED.**
⚠️⚠️ **THE FIX THAT WORKS: INSTRUCT THE AGENT TO WRITE ITS FIRST 3–4 ENTRIES IMMEDIATELY AND APPEND
3–4 AT A TIME, NEVER HOLDING MORE THAN 4 FINISHED ENTRIES UNWRITTEN.** Re-run under that rule
produced steadily growing files instead of an all-or-nothing gamble. **A long agent task must
externalise its work as it goes, or a death costs everything.**

### Validator

`<scratchpad>/t10/vhouse.js` — checks what a parse check cannot: **`answer` against the staging
key**, option count against staging, chapter id against the valid list, the marker present **exactly
once and as the final paragraph**, the marker **absent from `source`**, a page citation in `source`,
and **every backticked id resolving** to the corpus or to a sibling. Run it as
`node vhouse.js <draft>=<staging> ...`. It is what caught Q94.

**Next:** finish ear 1/2/3/4/6 (116 entries), then the six Nose batches (147), then splice, validate,
boot and commit. Transcription resumes at **PDF p.55 / book p.108 / Q391** — ~50 spreads to PDF 104.

### §15a — findings from the Ear batch 3 drafting (Q122–Q151, facial nerve + hearing), 2026-08-23

**28 of 28 written, 0 faults** under `vhouse.js`. Chapters: `ent-facial` 19 · `ent-hearing` 5 ·
`ent-audio` 3 · `ent-aom` 1. Explanations 342–531 words (mean 435).

⚠️ **A NEW CACHE DEFECT — `L17,18) Otorrhea and otalgia.txt` PROMISES A GLOMUS SECTION AND DELIVERS
NOTHING.** Its slide headings read *Pathology · Main types · Clinical presentation · Investigations ·
Treatment*, and **the cached text carries the headings with no content beneath them** — they are
picture slides. **A HEADING IN A CACHE IS NOT COVERAGE**, and a grep that hits one of these headings
looks exactly like evidence of teaching. This is the `L3` eleven-picture-slides shape again, in a
**cached `.txt`** rather than a PDF. Q145 was grounded on `L19.2) Tinnitus.pdf` instead, which does
print prose. **Render `L17,18` if glomus is ever needed in depth.**

⚠️ **Q150 is the batch's strongest arguable key, and it is HELD as printed.** It keys
*antiarrhythmics* as the drug group NOT used for tinnitus — but the only drug `L19.2) Tinnitus.pdf`
names is **lidocaine** (*"IV lidocain, Transtympanic lidocain"*), **a class Ib antiarrhythmic**. The
excepted class is arguably on the list already, under the *anaesthetics* option. **Defensible only
on the deck's own labelling of lidocaine as an anaesthetic. Recorded in `explanation`, never
disputed.**

**Other keys held with the discrepancy recorded:** Q126 (stem prints *inability of opening eye*;
facial palsy abolishes eye **closure** — the same defect shape as batch 5's Q204) · Q135 (**the deck
contradicts itself**: its prose puts axonotmesis at Sunderland II, its table at Sunderland III; the
bank keys from the table) · Q122 · Q129 · Q130 · Q143/Q144 (both decided by **printed audiograms
that cannot be re-read** — no crop exists, **no `image` field set**).

**Cross-bank confirmations worth keeping:** Q137's key is confirmed by `entqb-ear5-144` — **two
banks, two different option lists, one key**. Q145 agrees across **three** banks (`entqb-ear7-180`,
`entep-ear-3`, `entep-ear-231`). ⚠️ **Q148 restates a divergence already on record:**
`entep-ear-185` prints a conductive ear with a **normal** Schwabach where this item, `entqb-ear8-223`
and `L13,14` all say **prolonged**. **Both held, neither corrected.**

⚠️ **VERIFIED INDEPENDENTLY, NOT TAKEN ON REPORT (2026-08-23):** the cache prints
*Glomus tumors → Pathology · Main types · Clinical presentation · Investigations · Treatment* and
then **jumps straight to `Otalgia`** — nothing beneath any of the five. **And the whole two-lecture
deck caches to just 684 words**, which is itself the signal: a deck that small for two lectures is
mostly pictures. ⚠️ **MEASURE A CACHE'S WORD COUNT BEFORE TRUSTING IT AS COVERAGE** — the
`pdffonts`-per-page check exists for exactly this, and a suspiciously small cache should trigger it.

### §15b — findings from the Ear batch 4 drafting (Q152–Q181, audiology + otalgia), 2026-08-23

**28 of 28 written, 0 faults** under `vhouse.js`. Chapters: `ent-audio` 10 · `ent-hearing` 7 ·
`ent-otalgia` 6 · `ent-otorrhea` 5. Explanations 297–509 words (mean 378).

⚠️ **Q163 IS THE BATCH'S SHARPEST DIVERGENCE FROM THE COURSE'S OWN SLIDE, AND THE KEY IS HELD.**
*Cochlear implant useful in* keys **"Sensory HL"**, not **"Sensorineural HL"** — yet
`L19.1) hearing loss.pdf` literally prints *"SNHL: … 3- Surgical: e.g. Cochlear implant"*. The key is
defensible on precision (an implant needs a live nerve, and the menu prints the neural half
separately) **but it contradicts the slide's own wording.** Recorded in `explanation`, not disputed.

**Q152/Q153 are a deliberate pair and the key only makes sense as one.** Q152 keys *impacted wax* as
the commonest cause of hearing loss **in adults**; read alone that is wrong, because "adults"
includes the elderly and the answer would be presbyacusis. **Q153 immediately carves the elderly out
with the identical menu.** ⚠️ **A KEY THAT LOOKS WRONG ALONE MAY BE CARRIED BY ITS SIBLING — CHECK
THE NEXT QUESTION BEFORE CALLING A KEY DEFECTIVE.**

**Source defects recorded, none corrected silently:** Q167 prints option letters **A, B, C, B** ·
**Q173 prints "Necrotizing otitis *media*"** where the deck teaches *necrotizing external otitis* —
and **Grade Gain `entqb-ear4-107` repeats the same slip, so the error is shared across banks, not a
transcription fault** · Q168 is a bare back-reference, with Q167's vignette restated so it stands
alone · **Q179/Q180/Q181 turn on printed audiograms that cannot be re-read** — no crop exists, no
`image` field set, and each `source` carries an explicit warning that the elimination is
reconstructed from the key.

⚠️ **A THIRD DECK-vs-DECK CONTRADICTION, BOTH RECORDED, NEITHER CORRECTED (Q156):** `L13,14` gives a
**three-way** SDS split calling a sensory loss *"good"*; `L19.1` gives a **two-way** split calling
cochlear lesions *"excellent"*.

✅ **THE "PREFER THE OTHER BANK TO OUTSIDE KNOWLEDGE" RULE PAID FOUR TIMES HERE** — the 4 kHz notch
from `entqb-ear8-208`, the vibratory/non-vibratory split from `entqb-ear7-182`/`entqb-ear7-179`, the
anterior two-thirds sensory supply from `entqb-nose1-30`, and **the biopsy contraindication in
glomus from `entep-ear-91` — which mattered precisely because the glomus slides cache to nothing.**

⚠️ **BOTH HEADLINE CLAIMS VERIFIED INDEPENDENTLY, NOT TAKEN ON REPORT (2026-08-23):**
`entqb-ear4-107` really does key **"Necrotizing otitis media"** — **the slip is shared across banks,
so it is the source's, not a transcription fault.** And `L19.1) hearing loss.txt` line 162 prints
*"3- Surgical: e.g. Cochlear implant."* under the heading **`• SNHL:`** — so Q163's *"Sensory HL"*
key does contradict the deck's own wording, exactly as reported. **A subagent's finding is a lead
until the line is read; both of these survived the read.**

### §15c — Ear batches 1 and 2 (Q57–Q90, Q96–Q121), 2026-08-23 — **THE EAR SECTION IS 145 OF 162 DRAFTED**

**b1: 20 of 20** (chapters `ent-aom` 11 · `ent-csom` 9; 409–578 words each).
**b2: 23 of 23** (`ent-csom` 14 · `ent-facial` 5 · `ent-otorrhea` 2 · `ent-aom` 2; mean 414 words).
**All 145 Ear entries validated together under `vhouse.js` — 0 faults**, the only unresolved
cross-references being `enthd-ear-220` and `enthd-ear-235`, both inside the 17 still to write.

⚠️⚠️ **Q121 IS THE EAR SECTION'S ONE GENUINELY DEFECTIVE KEY, AND IT IS HELD AS PRINTED.**
It asks for a branch of the **tympanic** part of the facial nerve and keys **Posterior auricular**.
**Verified against the deck line by line (2026-08-23):** `L15) Facial nerve disorders.txt` prints
*"A- Intra-temporal branches: 1- Greater superficial petrosal · 2- Nerve to stapedius muscle ·
3- Chorda tympani"* and then *"**B- Extra-temporal branches: 1- Post auricular nerve**"* — the keyed
option is the **only one of the four the deck places outside the temporal bone**, arising after the
stylomastoid foramen, two segments later. **The other three banks agree with the deck**
(`entqb-ear5-122` keys postauricular as *the exception* to the intra-temporal branches;
`entep-ear-174` treats it as extratemporal). **`answer:3` left exactly as printed; the discrepancy
lives in `explanation`. A defective key is noted, never disputed.**

**Other keys held with the discrepancy recorded:** Q80 (*most serious* keys petrositis, but `L16`'s
"more serious" compares it with **acute mastoiditis**, not with the meningitis on the menu — the key
is coherent only because Q80/Q81 both draw from the deck's **cranial complications** slide) · Q58 ·
Q60 · Q63 (the textbook first move, **nasopharyngeal endoscopy**, is simply not on the menu) · Q98 ·
Q109 · Q113 · Q100.

✅ **A VERIFIED ABSENCE, PROBED PROPERLY BEFORE BEING FILLED (Q111):** CSF and lumbar-puncture
findings in suppurative meningitis. `lumbar` / `CSF` / `neutrophil` / `chloride` / `rigidity` across
**all 34 cached ENT decks** return only traumatic CSF otorrhoea in `L17,18` and nuchal rigidity in
`L4`, **and no bank prints a CSF-analysis item either** — so the pyogenic/viral/TB table was supplied
and tagged. **That is the rule working: probe the decks, then probe the other banks, then fill.**

✅ **"PREFER THE OTHER BANK TO OUTSIDE KNOWLEDGE" PAID AGAIN** — the three-month observation interval
came from `entep-ear-41`/`entep-ear-212`/`entep-ear-8`, and the meningitis clinical picture from
`entep-ear-56`, rather than from general knowledge.

⚠️ **AN OPERATIONAL HAZARD, NEWLY MEASURED: THE SESSION SCRATCHPAD IS SHARED, AND CONCURRENT AGENTS
OVERWRITE EACH OTHER'S TEMP FILES.** A sibling's `chunk2.js`/`chunk3.js` were clobbered mid-run.
**No content was lost — but only because the agent noticed.** ⚠️ **EVERY AGENT MUST NAMESPACE ITS
TEMP FILES.** Also recorded: **a straight apostrophe in *Siegle's speculum* broke a parse
mid-append** — the curly `’` is not a style preference, it is the fix.

### §15d — ✅ **THE HOUSE EAR SECTION IS COMPLETE: 162 of 162 DRAFTED, 0 FAULTS** (2026-08-23)

All nine Ear draft files validated **together** under `vhouse.js` — 162 entries, every `answer`
equal to its staged key, every chapter valid, the marker present exactly once as the final
paragraph of every explanation and absent from every `source`, and **every backticked
cross-reference resolving.** Batch 6 (Q219–Q236, 17 entries): `ent-vertigo` 16 · `ent-hearing` 1.

⚠️⚠️ **A NEW FOLD-DEFEAT SHAPE — AND THE FOLD WAS REFUSED ANYWAY. BOTH HALVES MATTER.**

**The shape:** House Q221 matches **no held corpus entry**, yet it is a reprint. `entep-ear-20` is
held in its **p.182** form (*Dix-Hallpike · Epley's · Cawthorne · Semont*), and **its `source` note
records in PROSE that the same endpoint file re-asks it at Model Final Exam 2, p.1972 (Q47)** with
House Q221's exact stem and the distractors *Friedrich* and *All of the above*. **That second menu
exists only as English inside a `source` string — no normaliser, no option-set comparison and no
token ranking can see it.** ⚠️ **A QUESTION THAT WAS FOLDED ONCE HIDES ITS ALTERNATE MENU IN PROSE,
AND EVERY SWEEP STAGE IS BLIND TO IT.** It surfaced only because a drafter **read the `source` note
of a question it was cross-referencing.**

**The refusal:** it is still **NOT folded, and must not be.** ⚠️ **Q221 and Q222 are a deliberate
pair on one identical five-option menu** — *useful in the **diagnosis*** keys **Dix-Hallpike**,
*useful in the **treatment*** keys **Epley's**. **Folding Q221 would orphan Q222 and destroy the
contrast that is the entire teaching point.** And the held `entep-ear-20` menu is not House's menu
anyway, so a fold would show the student options this bank never printed. **Recorded in `source`,
held as a variant. THE DELIBERATE-PAIR RULE OUTRANKS THE REPRINT RULE.**

⚠️ **A THIRD PICTURE-SLIDE CACHE, SAME SHAPE AS `L17,18`: `L20) vertigo.pdf`'s BPPV slide prints the
words *"Diagnosis"* and *"Treatment"* with NOTHING beneath them.** The manoeuvre names had to come
from the deck's ILO line and `L13,14`'s provocative-test list; **the techniques of both manoeuvres
are on no cached deck at all.** ⚠️ **And `L13,14` ASKS all three *"most common cause"* questions on
one slide and ANSWERS ONLY THE THIRD** (*"Most common cause of Dizziness — Lack of Sleep"*), leaving
the two vertigo answers to the other banks. **A deck that poses a question is not a deck that
teaches the answer.**

**Verified absences, probed across all 34 cached ENT decks before filling:** the **caloric test**
(answered from `entqb-ear9-257` and `entep-ear-128`, not outside knowledge) · **vestibulo-ocular and
vestibulo-spinal reflexes** (*VOR*, *vestibulo-ocular*, *vestibulo-spinal* return **zero**
module-wide, and both balance-physiology slides are heading-plus-picture) · **MRI** (the word is on
no cached ENT slide; `L20` prints only *"Imaging — Petrous bone & posterior fossa"*).

### §15e — Nose batches 1 and 2 (Q237–Q289), 2026-08-23 — **50 of 147, 0 faults**

`ent-noseanat` 39 · `ent-epistaxis` 10 · `ent-sinusitis` 1. Explanations 285–542 words (mean ~415).

✅ **MY OWN Q268 FLAG RESOLVED — AND IT RESOLVED AS A VERIFIED ABSENCE, NOT A CONTRADICTION.** The
brief warned that Q268 keys **ethmoid** as the most commonly infected sinus where the commonly taught
answer is maxillary. **Verified independently 2026-08-23: `L27.1) ACUTE rhinosinusitis.txt` returns
ZERO hits for *maxillary*, `L27.2` returns none, and NO cached deck anywhere ranks sinus infection
frequency at all.** No corpus item in either other bank asks it either. **There is nothing in the
course to contradict the key** — so both the ethmoid case and the maxillary case were written out and
tagged, and the key stands. ⚠️ **A FLAG RAISED FROM OUTSIDE KNOWLEDGE IS A HYPOTHESIS, NOT A DEFECT —
PROBE THE DECK BEFORE CALLING A KEY WRONG.** This one was mine, and the material settled it.

⚠️ **AN INTERNAL CONTRADICTION INSIDE ONE DECK, RECORDED (Q286):** `L25.1) epistaxis` heads its
etiology slide with *Idiopathic*, but its own **Etiology and Age** table reads *"Children — foreign
body, nose picking"* and reserves *idiopathic* for adults. **The deck disagrees with itself.**
Resolved in favour of the printed key because `entep-nose-61` keys the same — **the course's second
bank broke the tie, not reasoning.**

**Verified absences, each grepped across all 34 caches before filling:** **nasal lymphatic drainage**
(*lymph* nowhere in any nose deck) · **sensory and secretomotor supply of the nose** (V1/V2 and the
greater petrosal pathway printed by no nose deck) · **relations of the sphenoid sinus**
(*pituitar* / *sella* / *hypophys* return **zero** module-wide).

**Deliberate pairs written as contrasts, none merged:** Q240/Q242 · Q243/Q244 · Q286/Q287 (ranking
table in 286, 287 points at it) · Q238/Q279 (respiratory *pseudostratified ciliated columnar with
goblet cells* vs olfactory *columnar non ciliated* — **one word in the stem moves the key**).

**Printed slips kept and noted once each, never silently repeated:** Q281 *"sphenopalantine"* ·
Q285 *"hospital administration"* and *"less common that anterior"* · Q265 *"caesarian section"*.
**Q265's VSD is explained as the H of CHARGE, not as a competing diagnosis** — the murmur is the
distractor and the airway is the question.

### §15f — Nose batch 3 (Q290–Q315, epistaxis management + smell), 2026-08-23 — **75 of 147, 0 faults**

`ent-epistaxis` 23 · `ent-nasalobs` 2 (the two foreign-body items, filed by content to match the
corpus's own filing of `entep-nose-18` and `entqb-nose2-84`).

⚠️⚠️ **THE ANOSMIA TRIO IS DECIDED BY A DECK TABLE THAT PRINTS A TIE — VERIFIED LINE BY LINE
2026-08-23.** `L25.2) smell.txt` lines 186–189 print:

```
Head injury               19%*
Post URI                  17%*
Nasal/sinus disease       16%*
Idiopathic-nasal          17
```

**Q302** *most common cause of anosmia* keys **traumatic** — the table's top at 19 %. ✅
**Q303** *2nd most common* keys **post-viral** at 17 % — **tied with Idiopathic-nasal 17.** Held
because idiopathic is **not offered** and is a residual, not a cause. **Recorded, so a reader who
counts the table is not left thinking the key is loose.**
**Q304** *most common **sensorineural** cause* keys **post-viral** even though head injury outranks
it on the raw table. Held on three **grounded** arguments: part of trauma's share is conductive by
the deck's own *"deviated nasal septum, crooked nose"* slide; the table is **pre-COVID**, while the
same deck prints *"Sudden loss of smell (LOS) 50 %"* for Covid-19 (line 240); and
`entqb-nose2-78` keys postviral for the same class. **No key called defective.**

⚠️ **THE RULE THIS PAYS FOR: A PERCENTAGE TABLE IS EVIDENCE, NOT AN ANSWER KEY. READ WHICH OPTIONS
ARE ACTUALLY OFFERED, AND CHECK WHETHER THE TABLE PREDATES THE DECK'S OWN LATER SLIDES.**

✅ **THE Q305 CROSS-BANK POINT IS A TEACHING POINT, NOT A DIVERGENCE, AND THE MENUS PROVE IT.**
`entqb-nose2-78` asks the same question and keys *"Postviral infection"*; House keys *"Covid 19"*.
**Grade Gain's menu offers one viral option among three obstructive ones, so its key must be
*which class*; House offers three named viruses and one allergy, so its key must be *which virus*.**
Both are right within their own option lists. **A shared stem with different menus is two different
questions — check the menu before calling two banks contradictory.**

**Q301 held with the tension written in** — it transfuses *before* packing; defensible because the
pack goes in while blood is cross-matched, and the deck groups cross-match with the initial work-up.
**Source typo kept as printed and flagged once:** Q310 option C prints *"szhizophrenia"*.

### §15g — ⚠️⚠️ **THE SWEEP'S OWN CUTOFFS WERE HIDING FOLDS. RE-SWEPT DEEPER: NOSE IS 10 FOLDS, NOT 7** (2026-08-23)

**Three more folds — Q296 → `entep-nose-14`, Q347 → `entqb-nose4-164`, Q363 → `entqb-nose3-91`.**
Full adjudication in `house-sweep-nose.md`. **Nose: 154 printed, 10 folded, 144 to draft.**

⚠️⚠️ **NONE OF THE THREE WAS FOUND BY A SWEEP STAGE. A DRAFTING AGENT FOUND THEM BY READING A CORPUS
ENTRY IT WAS CITING**, then flagged them for adjudication rather than folding on its own. That is the
second time this session the **drafting** pass caught what the **sweeping** pass could not (the
first was Q221's alternate menu hidden in a `source` note).

**The two cutoffs, both now measured:**

1. ⚠️⚠️ **A TOP-N RANKING IS A SILENT COVERAGE LIMIT AND IT COST THREE FOLDS.** The E/F rankings
   printed **top-20**. Q363's stem Jaccard is **0.57** and Q347's is **0.50**; the twentieth entry
   sat at **0.57**. **They ranked correctly and fell off the end of the printed list.** The project
   rule *"no silent caps — log what was dropped"* applies to a **ranking**, not just to a workflow.
2. ⚠️ **STAGE C's 0.34 OPTION-OVERLAP FLOOR IS TOO HIGH FOR A SYNONYM MENU.** Q363 overlaps its twin
   at ≈**0.2**, because *congestion* and *obstruction* **share no token at all**.

**The fix, now in `<scratchpad>/t10/deepsweep.js`: STRIP FILLER BEFORE COMPARING OPTIONS.** House
writes *"It's dull aching in nature"*, Grade Gain writes *"Dull aching"* — **the same option, and
neither the sorted-set match nor the key-text match fires.** Removing `it`/`its`/`the`/`in nature`/
`type`/`form`/`more than`/`less than` before comparison is what caught Q347. **This is the third
distinct fold-defeat shape in one bank: a SUFFIX on every option (Q267, *artery*), a TYPO (Q263,
*hear loss*), and now VERBOSE PHRASING plus SYNONYM SUBSTITUTION.**

⚠️ **A FOLD THAT LEAVES A DANGLING BACKTICK IS A BROKEN FOLD.** Two of the three were already
drafted **and cited by siblings**; their citations were repointed at the surviving corpus ids
(`enthd-nose-296`→`entep-nose-14` ×2, `enthd-nose-363`→`entqb-nose3-91` ×1) **before** the entries
were removed. Re-validated after: **122 Nose entries, 0 faults.**

### ⚠️⚠️ AND A CORRECTION TO THIS PROJECT'S OWN BRIEF — THE ERROR WAS MINE

`HOUSE-NOSE-BRIEF.md` told drafters that sinus complications are taught in `L30) Rhinitis 2` and
`L32) nasal symptoms 2`. **That was written from a file-level `grep -l` whose hits were never
opened, and it is wrong.** A drafting agent read both decks in full, contradicted the brief, and was
right. **Verified line by line:** `L30`:163 puts cavernous sinus thrombosis under **Acute Invasive
Fungal Sinusitis**; `L32`:108 is **Cluster Headache**; `L32`:136 is **Tolosa-Hunt syndrome**.
**Complications of rhinosinusitis are taught NOWHERE in the cached decks** — the set runs straight
from `L27.2` to `L29`. Q321/Q325/Q336 were adjudicated from the other banks' printed boxes instead
(`entqb-nose4-162` prints *"sinusitis is the commonest cause of frontal lobe abscess"*). **The brief
on disk is corrected.**

⚠️⚠️ **THE RULE, PAID FOR BY THE PERSON WHO WROTE THE RULE: `grep -l` GIVES A FILENAME, NOT
EVIDENCE OF TEACHING. OPEN THE LINE.** This is the same failure as *a grep hit explained away
unopened*, in the mirror — **a grep hit ASSERTED unopened.**

### §15h — ✅✅ **SPLICED AND BOOTED. THE HOUSE EAR AND NOSE SECTIONS ARE IN THE APP** (2026-08-23)

**306 new entries spliced** — Ear 162 (Q1–Q236 less 30 folds, plus the 41 already held) and Nose 144
(Q237–Q390 less 10 folds). **`Q_ENT` 1,699 → 2,005; House 41 → 347.** ENT corpus **2,087**
(2,005 MCQ + 82 cases).

**Boot from `file://`, 2026-08-23, clean:**
`{"errs":[],"sheets":2,"rules":876,"media54":3,"q":2464,"mods":4,"chaps":153,"th":153,"sec":1603,"cases":89}`
**0 console errors · 876 CSS rules · 3 `max-aspect-ratio:5/4` blocks · 4 modules · 153 chapters =
153 theory · 1,603 sections · 89 cases · questions 2,158 → 2,464, exactly +306.**

**Pre-write checks that all passed:** 0 duplicate ids · 0 holes · 0 answers out of range ·
**347 of 347 House entries carry the marker, 0 leaked into `source`** · ⚠️ **0 unresolved backticked
ids across the whole 2,005-question corpus** — every cross-reference written this session resolves.

### ⚠️⚠️ THE SPLICE FAILED FIRST, AND BOTH THE BUG AND MY DETECTOR WERE WRONG

The first run reported **2,006 where 2,005 was expected and REFUSED TO WRITE.** Cause:
`house-ear-batch6.draft.js` ended `},` followed by a leftover **`/*CHUNK*/`** marker — residue from
an agent's incremental appends. The trailing-comma strip could not match past the comment, so the
join emitted `}, /*CHUNK*/ ,{` — **a SPARSE-ARRAY HOLE**, which counts in `.length` but is not an
element.

⚠️⚠️ **AND MY HOLE DETECTOR REPORTED ZERO, BECAUSE `Array.prototype.filter` SKIPS HOLES.**
`Q.filter(q => !q)` **can never see a sparse slot** — it is structurally blind to exactly the fault
it was written to catch. **A hole must be found by indexing: `for (i…) if (!(i in Q) …)`.** Both the
strip (now loops over trailing comments *and* commas until neither remains) and the check are fixed
in `<scratchpad>/t10/splice.js`.

⚠️ **THE RULE: THE INCREMENTAL-APPEND PATTERN THAT SAVES AGENTS FROM DYING LEAVES CHUNK MARKERS
BEHIND. GREP THE DRAFTS FOR SEPARATOR ARTIFACTS BEFORE SPLICING** — one file in fifteen carried one,
and it was invisible to `node --check`, to the per-file parse, and to the entry count.
✅ **What caught it was the splice refusing to write on a count mismatch.** **VERIFY THE COUNT
BEFORE THE WRITE, NOT AFTER.**

### §15i — ⚠️⚠️ **CORRECTION: THE NOSE SECTION DOES NOT END AT BOOK p.107** (2026-08-23)

**§15h and the resume block called House "Ear + Nose done". That was wrong, and it was wrong because
a boundary was ASSUMED instead of read.** The Ear→Nose boundary *was* verified from the page (the
section opener and running header on book p.75). **The Nose→Throat boundary never was.** Nose was
declared finished at p.107 only because that is where the transcription happened to stop.

**Read from the page, 2026-08-23:** at book **p.123** the running header still prints
**"Nose MCQs 2025"**, and the Nose section carries two further chapters —
**7. Nasal fractures** (opens book p.119) and **8. Nasal obstruction, rhinorrhea & headache**
(opens book p.122). **The Throat section has NOT been located. Do not assume a page for it.**

⚠️ **THE RULE: A SECTION BOUNDARY IS A READING, NOT AN INFERENCE. THE END OF A TRANSCRIBED RANGE IS
NOT THE END OF A SECTION.** The 306 spliced entries are unaffected — every one is correctly
transcribed, swept and chaptered by **content**, not by section — but the *scope* claim was false.

**Transcribed since:** book pp.116–123 (PDF 59–62) → `d-house-ENT-mcq-pdf059-062.md`, **Q427–Q464,
38 questions, continuous, zero unparsed**, folios read individually and the `2P−2 / 2P−1` formula
confirmed on all four spreads.

⚠️ **A NEW SOURCE DEFECT SHAPE: Q447 PRINTS ITS OPTION LETTERS `A, B, C, E` — NO D AT ALL.** Verified
at `-r 300`; not a render artefact and not a page-break loss. The key is C, so no answer moves, and
the parser resolves it correctly to index 2. **Recorded, not corrected.**

**Deliberate near-twins in the range, flagged for the sweep and NOT to be folded:** Q436/Q440 (one
identical four-option block, JNA vs NPC, keys C vs A) · Q443/Q444 (same opening and options, findings
clause flipped, keys D vs A) · **Q455/456/457, a graded triplet on one option block keyed A/B/D by
time since trauma** — the third such ladder in this bank after Q56/57/58 and Q302/303/304.
**Back-reference chain: Q428 AND Q429 both say "In the previous case" and BOTH resolve to Q427** —
Q428 introduces no new case, so the chain points back *past* it.

### §15j — House transcription, book pp.108–115 (PDF 55–58), 2026-08-23

**Q391–Q426, 36 questions, continuous.** Folios read individually; formula holds. Still **Nose** —
running header *Nose MCQs 2025* on all eight halves. Chapter **6. Nasal masses** opens book **p.112**
(first question 410); Q391–409 continue *5. Nasal septal diseases* from p.106.

⚠️ **FOUR STRADDLING QUESTIONS IN EIGHT PAGES — THE DENSEST RUN YET** (Q395, Q400, Q405, Q413).
Q400 and Q405 each had **option D plus the key** on the following page; Q413 had **only its key**
there. All four were transcribed on both halves and **joined into the stem's page**, with the
following page keeping a note as its record. **Nothing inferred.** After repair the whole stretch
**Q391–Q464 parses 74 of 74, zero unparsed, none missing.**

⚠️ **Running total of straddles in this bank: SEVEN** (Q57, Q94, Q130, Q239, Q395, Q400, Q405, Q413 —
eight counting Q395). **THE FIX IS NOW IN THE TRANSCRIBER'S BRIEF: put the COMPLETE printing on the
page where the STEM starts, and leave a note on the continuation page.** Discovering these
after the fact has cost a repair pass every single time.

⚠️ **THE NOSE SECTION'S FIRST FIGURES APPEAR HERE — THREE IMAGE QUESTIONS NEEDING CROPS:**
**Q409** (p.111) coronal CT nose/PNS, bone window, unlabelled · **Q410** (p.112) coronal CT, one
maxillary antrum and adjacent nasal cavity opacified · **Q417** (p.113) coronal CT with a **black
arrow** into one maxillary antrum and a lobulated density opposite; **its stem says "the film is
attached ahead"**. ⚠️ **These are the first House ENT questions that genuinely require a crop** —
House currently carries **1** image against Grade Gain's 52 and Endpoint's 18. Added to the
figure-debt list alongside the 11 already-drafted entries that flag a missing crop.

⚠️ **SIX BACK-REFERENCES, THE DENSEST RUN SO FAR** — Q412→Q411 · **Q413→(through Q412)→Q411** ·
Q415→Q414 · **Q416→(through Q415)→Q414** · Q418→Q417. **Two of the six chain back PAST an
intervening question that introduces no new case.** Every drafted entry must restate its antecedent.

**Typos kept verbatim, all checked at `-r 300`:** *"useually"* · *"maybe congenital"* · *"is....?"*
(four dots) · *"appeared a **weak** after"* · *"Antrochoanal **poly**"* · *"A 55 year old male"* ·
*"It **occur** mostly"* · singular *"type of nasal fractures"* · and *"osseocartilaginous"* again.

### §15k — ✅ **THE THROAT SECTION IS LOCATED: BOOK p.126** (2026-08-23) — read, not inferred

Book pp.124–131 (PDF 63–66) → `d-house-ENT-mcq-pdf063-066.md`, **Q465–Q497 complete + Q498 partial.**
Running headers read half by half: p.124 and p.125 *Nose MCQs 2025*; **p.126 carries NO running
header — it is the Throat section title page** (full-width photograph, banner *Throat MCQs*, then the
chapter pill); pp.127–131 *Throat MCQs 2025*.

**THE BANK'S FULL STRUCTURE, EVERY BOUNDARY NOW READ FROM A RUNNING HEADER:**

| section | book pages | questions | count |
|---|---|---|---|
| **Ear** | 23–74 | Q1–Q236 | 236 |
| **Nose** | 75–**125** | Q237–**Q471** | 235 |
| **Throat** | **126**– | **Q472**– | open |

⚠️⚠️ **QUESTION NUMBERING DOES NOT RESTART AT A SECTION BREAK, BUT CHAPTER NUMBERING DOES**
(Nose ch.9 → Throat ch.1). **Two counters, opposite behaviour, in the same book. Do not confuse
them.** Nose's last chapter is *9. Minor nasal procedures* (p.124); Throat opens *1. Anatomy of
pharynx & larynx* (p.126) and *2. Pharyngeal suppurations* (p.130).

✅ **Ear and Nose are near-identical in size — 236 questions over 52 pages and 235 over 51.** The
earlier guess that Nose ended at p.107 would have lost **81 questions**, a third of the section.

⚠️ **THREE MORE STRADDLES (Q474, Q493, Q498) — ten in the bank now.** ✅ **The new brief rule WORKED:
Q474 and Q493 arrived already joined onto their stem's page and parsed first time, with no repair
pass.** ⚠️ **Q498 is genuinely incomplete — p.131 prints its stem and option A only**; the rest
continues on book p.132, in the next batch's range. **Recorded as pending, nothing inferred.**

**Contrast pairs flagged, not duplicates:** Q470/Q471 (identical block, keys B vs D) · Q483/Q484
(identical block, keys A vs B) · Q479/Q489 (*paired…except* vs *single…except*) · Q465/Q467
(unilateral vs bilateral obstruction). **Back-reference chain again: Q496 → through Q495 → Q494.**

**Image questions: none.** The p.126 title-page photograph is decoration attached to no question and
needs no crop.

### §15l — House transcription, book pp.132–139 (PDF 67–70) — **TRANSCRIPTION NOW CONTINUOUS Q1–Q536**

**Q499–Q536, 38 questions**, all eight halves headed *Throat MCQs 2025*. Chapter
**3. Pediatric laryngeal lesions** opens book **p.135** (first question 513); Q499–512 run in from the
pharyngeal-suppurations chapter that opened on p.130.

✅ **WHOLE-BANK CONTINUITY CHECK, ALL FIFTEEN TRANSCRIPTS PARSED TOGETHER: 535 unique questions,
Q1–Q536, ZERO unparsed. The ONLY absent number is 233 — the skip the bank itself makes, already on
record.** Nothing is missing and nothing is duplicated *as a number*.

⚠️⚠️ **A SECOND TRUE INTERNAL DUPLICATE — Q523 AND Q535 ARE THE SAME QUESTION PRINTED TWICE**
(book p.137 and p.139, two pages apart): identical stem (peanut inhalation, right-sided
hyperinflation, tracheal deviation), identical four options in identical order, identical key
(*rigid bronchoscopy under general anaesthesia*). **Verified programmatically — byte-identical after
normalisation.** This is the Q381/Q382 shape again, **now twice in one bank**, and it is invisible to
a corpus sweep because both copies are staged, never held. **The Nose→Throat internal sweep must run
`selfsweep.js`, not just the corpus sweep.**

⚠️ **Q498 REPAIRED ACROSS A BATCH BOUNDARY.** Its stem and option A print on p.131 (one agent's
range); **options B, C, D and the key print at the head of p.132 (another agent's range).** Both
halves were read from rendered pages, joined onto p.131, and the p.132 file keeps the fragment as
that page's record. **Nothing inferred.** ⚠️ **THE LESSON: A STRADDLE THAT FALLS ON A BATCH BOUNDARY
NEEDS BOTH AGENTS TO REPORT IT** — the brief now tells every transcriber that its first page may open
with an inbound tail, and to record it as a fragment note, never as a numbered question.

**Q536's key prints on p.140, outside the range; the agent peeked at a top strip and read `B`.**
⚠️ **Held for independent confirmation from the p.140 batch rather than accepted on one read.**

**Near-twins built deliberately, not duplicates:** Q505/Q506 · Q501/Q512 (option A swaps
*Peritonsillar abscess* ↔ *Quinsy*) · Q500/Q502 · Q521/Q536 · **Q514/Q516/Q518, where the character of
the cry is the discriminator** · Q522/Q528 (steeple vs thumbprint sign).
**Back-reference chain again: Q529 → through Q528 → Q527.**

### §15m — ✅✅ **WHERE THE BOOK ENDS, READ NOT EXTRAPOLATED — AND A FOURTH SECTION NOBODY KNEW ABOUT** (2026-08-23)

**PDF 103 is a spread whose LEFT half is printed folio 204 — the last page with content. Its right
half (book 205) is blank, and PDF 104 is entirely blank, no folio. There is no index, no answer key,
no appendix.** So the book's content runs **book pp.23–204**.

⚠️⚠️⚠️ **THE LAST PAGE IS NOT THROAT. Book p.204 is headed `Selected department MCQs`, and that
section has ITS OWN NUMBERING RESTARTING AT 1, printed with LOWERCASE `a. b. c. d.` option letters.**
Its last item is **its own question 110** (*"Early presentation of glottis carcinoma is"*, keyed **b**),
followed by the Arabic colophon تم بحمد الله. One extra page was spent to place it: book pp.202–203
carry the same header with **questions 99–108**, same lowercase lettering.

**So the bank is FOUR bodies, not three, and the fourth is at least 110 questions with a numbering
scheme that collides with the main series.** ⚠️ **Its start page has NOT been read and must not be
guessed** — the transcriber brief now tells every agent to stop and report if the header **or the
option lettering** changes. ⚠️ **THE RULE, PAID TWICE IN ONE DAY: A SECTION BOUNDARY IS A READING.
The first payment cost 81 Nose questions; this one would have silently merged two different numbering
schemes into one series.**

✅ **THIS IS WHY THE PROJECT RULE SAYS RENDER ONE PAGE PAST THE LAST.** Extrapolating from
`2×104−1 = 207` would have put the end three pages late **and missed the fourth section entirely.**

### §15n — book pp.140–147 (PDF 71–74): Q537–Q573

**36 questions across 37 numbers.** ⚠️ **Q572 IS NOT PRINTED** — p.147 runs 571 → divider → 573,
verified at 300 dpi, no orphan fragment and no layout gap. **Second genuine skip in the bank after
Q233.** Chapter **4. Adenoids & tonsils** opens book **p.143**; chapter 3 therefore runs Q513–Q549.

✅ **Q536's KEY CONFIRMED BY TWO INDEPENDENT READS** — the p.139 batch peeked a top strip and read
`B`; the p.140 batch transcribed the orphan line properly and read `B`. **Held only after the second
read, not on the peek.** ⚠️ **Q573 is INCOMPLETE** — stem and options A–C only; option D and the key
are on p.148, next batch. Nothing inferred.

⚠️⚠️ **THREE IMAGE QUESTIONS WHOSE PHOTOGRAPH IS THE ANSWER — `imgAlt` MUST NOT NAME THE FINDING:**
**Q561** (colour photo, anterior chest/neck, blotchy erythematous rash) · **Q563** (intraoral photo,
soft palate and uvula with aphthous-like ulcers) · **Q565** (lateral neck of a child, head extended).
**Q562 and Q564 are back-references TO those images, and the rash, the ulcers and the head position
ARE the keys.** This is exactly the trap that once gave away six answers — modality and view only.

⚠️ **A BLEED-THROUGH GHOST WAS NEARLY LOGGED AS A HEADING** — a mirrored image of p.143's chapter pill
shows through at the top of p.140. Caught at 300 dpi. **Check a heading's orientation before recording
it.** (The same effect made "Throat MCQs" legible in reverse one page before the section opened.)

**Graded sets and near-twins, none duplicates:** ⚠️ **Q555/556/557 — the cleanest graded triplet in
the bank**, one option block, the vignette restated three times with a single clause changed, keys
**C/A/D** · **Q554/Q566 — identical stem word for word, different option blocks, BOTH keyed B**, three
pages apart in one chapter · Q544/Q545 · Q546/Q547 · **Q540/Q542, which puts adductor and abductor
cord paralysis in the same block — a deliberate trap.**
**Back-reference chain: Q570 → through Q569 → Q568.** Seven back-references in eight pages.

### §15o — ⚠️⚠️ **"THIS BANK PRINTS NO EXPLANATION ANYWHERE" IS NOT QUITE TRUE — Q607 EXPLAINS ITSELF** (2026-08-23)

Book pp.148–155 (PDF 75–78) → **Q574–Q610, 37 questions, continuous.** Chapter **5. Neck masses**
opens book **p.153**. **Zero straddles outbound and zero back-references** in the range — both a
change from the preceding pages.

⚠️⚠️ **Q607's PRINTED KEY LINE CARRIES AN EDITORIAL PARENTHESIS, VERBATIM:**
`Answer: A (some references say dermoid but the professor in the lecture said it's thyroglossal cyst)`
Verified at `-r 300`. **A grep of all seventeen transcripts for answer-line parentheses returns
exactly ONE genuine hit — this one.** So the standing claim holds for **boxes**, but not absolutely:
**the bank breaks silence exactly once, and it does so to pre-empt a key dispute and name the lecture
as the authority.**

⚠️ **CONSEQUENCE FOR DRAFTING, RECORDED NOW SO IT IS NOT MISSED: `enthd-thr-607` MUST NOT CARRY THE
STANDARD MARKER UNCHANGED.** *"d house ENT mcq prints no explanation here"* would be **false** for
this one entry. **Capture the parenthesis VERBATIM in `explanation` (printed text is captured
unmarked, per §4), then mark only the authored remainder.** ⚠️ **And this is the source's OWN
divergence notice** — *some references say dermoid* — so it is citable evidence, not outside
reasoning, exactly like the GG Q566 / `entep-enr-33` key divergence.

✅ **Q573 REPAIRED ACROSS A BATCH BOUNDARY** (stem + options A–C on p.147, option D *"X ray neck"* and
key **C** at the head of p.148, both read from rendered pages, joined onto p.147).
✅ **WHOLE-BANK RE-CHECK, SEVENTEEN TRANSCRIPTS: 608 unique questions, Q1–Q610, ZERO unparsed. The only
absent numbers are 233 and 572 — both the bank's own verified skips.**

⚠️ **A SINGLE QUESTION PRINTS BOTH SPELLINGS OF ONE WORD: Q589 option C reads *Viral tonsillitis*
(double l) beside option D *Non-infective tonsilitis* (single l)**, both verified at 300 dpi.
*tonsilitis* appears single-l **ten times** in eight pages while *tonsillectomy* is always correct —
**the error is confined to one word, and the bank is inconsistent within a single option block.**

**Graded sets, none duplicates:** ⚠️ **Q583/584/585 — one identical FIVE-option block printed three
times, keys B/A/E** (primary, reactionary and secondary post-tonsillectomy haemorrhage) · **a
"most common neck swelling" QUARTET Q606–609** — congenital→B, midline cystic→A, unqualified→C,
lateral cystic→B, **with Q607/Q608 sharing a near-identical block and differing keys.** ⚠️ **A quartet
is a new shape; the bank has used pairs, triplets and now four rungs on one ladder.**

---

## §15p — House ENT, the Q391–Q685 duplicate sweep (2026-08-23)

**Full adjudication, every verdict and every option comparison:
`content\ent\qb-pages\house-sweep-throat.md`. Machine-readable fold map: `folds2.json` in the
session scratchpad `t10\`. This section is the summary; that file is the record.**

**Staged 294** (Nose tail Q391–Q471 = 81 · Throat Q472–Q685 = 213) from the 19 transcripts covering
book pp.108–171. **Zero unparsed.** Swept against the whole held corpus of 2,005.
**573 pair-hits → 213 distinct questions implicated → 82 FOLD, 212 NEW.**
Fold targets by bank: **endpoint 31 · gradegain 50 · house 1.**

### ⚠️⚠️ THE SWEEP'S OWN GUARD WAS SILENTLY DISABLING TWO STAGES

`sameKey` was gated on `keycore.length > 3`. A key whose text reduces to three characters or fewer —
**`Rt RLN` → `rln`**, and equally `US`, `CT`, `IgD`, `Mid` — **turned stages B and C off for that
question with no output of any kind.** 31 of 294 were affected. Re-running B and C for those 31 with
the guard at `>= 2` recovered **two real folds**, and both had already been adjudicated **NEW against
the wrong sibling** on reasoning that was correct given what the report showed:

- **Q634 → `entqb-thr10-552`** — the report had only ever shown it against `entqb-thr10-551`, where
  it reads as a deliberate contrast pair.
- **Q660 → `entqb-thr8-418`** — and this fold **corroborates a key** (below).

**⚠️ THE RULE: A GUARD THAT SILENTLY DISABLES A STAGE IS WORSE THAN A MISSING STAGE, BECAUSE THE
TIER REPORT STILL LOOKS COMPLETE.** Alongside `Array.filter` skipping sparse holes and the E/F top-N
cutoff that hid three Nose folds, this is the **third** time an instrument on this project has been
structurally blind to the exact fault it was built to catch. **Check what the auditor cannot see.**

### ⚠️ A second silent-drop shape, caught in the same pass

**The bank prints the number 212 twice, on two different questions** (book p.44, transcribed and
noted at the time). Keying the staging map by question number alone **drops one of them without a
word.** `stage2.js` now keys by number + stem and reports the reuse. Both Q212 printings are present
in the shipped data — this cost nothing, but only because the drafting stage had used a different
staging build.

### ⚠️ Cross-bank findings

1. **A key divergence on an identical option set — Q448 vs `entqb-nose6-195`.** Same *except* stem,
   same four options; House keys **Nasal obstruction**, Grade Gain keys **Purulent rhinorrhea**.
   Noted, never disputed: House's `answer` stays as printed and the divergence goes in both
   explanations. **Second such divergence found** (after GG Q566 vs `entep-enr-33`).
2. **Q685 vs `entqb-thr7-373` LOOKS like a third and is not — it is a deliberate pair split across
   two banks.** Same vignette, same four options in the same order, opposite keys; **House's stem
   carries a mandibular-fracture clause** that rules out the transoral mirror. The keys differ
   because the stems differ in the clause that decides it. This is also the near-twin the pp.83–86
   transcriber warned must not be folded — **the warning was right, and the reason is now known.**
3. **Q648 vs `entep-throat-15` — the same question with one correct answer swapped for another.**
   Three options identical; the fourth is *Subglottic tumor* (House, keyed) vs *Tracheal stenosis*
   (endpoint, keyed). Both are right. NEW, cross-referenced.
4. **Q660's fold corroborates a key that had been flagged as anomalous.** Q659 (*safest*) and Q660
   (*most difficult*) print the same three options and **both key Mid**. `entqb-thr8-418` prints
   *most difficult* and **also keys Mid** — so Q660 is confirmed by the second bank and **the anomaly
   narrows to Q659 alone**, where no cross-bank check exists.

### ⚠️ Four reconstructed stems in the shipped data can now be replaced by printed text

`entep-nose-40`, `entep-nose-41`, `entep-nose-42` and `entep-mfe5-22` each carry a note saying the
endpoint file prints **no vignette** and the stem was **reconstructed from the bank's own answer
key**. House prints all four vignettes in full — Q613 (p.156), Q614 (p.156), Q615 (p.157), Q645
(p.163). **On folding, the reconstruction is replaced by the printed House stem, cited to the House
page.** A reconstructed stem is a recorded weakness in the corpus and this removes four of them.

**More generally: several of these folds run House → held, so the held entry is UPDATED, not merely
tagged.** Q497 prints **five** options where `entqb-thr2-83` prints four (House adds *CT neck*);
Q614/Q674/Q675/Q591/Q473/Q475 each add *None of the above*; Q632's stem is fuller than
`entqb-thr10-531`'s. **Keep the fuller printing — the rule is not "the held entry wins".**

### Self-sweep — 63 pairs, one true internal duplicate

The instrument is dominated by **back-reference stems**: *"In the previous case, what is the best
line of management?"* is printed verbatim at Q412, Q429, Q496, Q562, Q570 and Q633, each pointing at
a different preceding vignette. **A ranking cannot see that; only reading the preceding question
can.** Every exact-stem pair was read:

| pair | verdict |
|---|---|
| Q412 ↔ Q429 · Q450 ↔ Q454 · Q544 ↔ Q545 · Q554 ↔ Q566 | same stem, **different option sets** — all NEW |
| Q622 ↔ Q623 | fourth option differs (*TB of larynx* vs *Reinke's edema*) **and so does the key** — both NEW, and they fold to **different** held entries |
| **Q523 ↔ Q535** | **the only true internal duplicate** — resolved by the corpus sweep, **both fold into `entep-throat-98`**, one entry, two House citations |

⚠️ **A same-stem pair is usually NOT a duplicate in this bank**: the author reuses a stem
deliberately and swaps the whole option block. That is the graded-set habit, not an error.

### Deliberate sets preserved, not folded

**Q443/Q444** (severe edema vs none — Q443 folds, **Q444 stays**) · **Q455/Q456/Q457** (30 min / 2
days / 3 weeks — only **Q456** matches `entep-nose-50`) · **Q627/Q636** (laryngeal SCC *with mobile
cords* vs without — the clause is the discriminator) · **Q649/Q650** · **Q657/Q658** ·
**Q639–Q642** (four VC-paralysis permutations on one block) · **Q583/Q584/Q585** (primary /
reactionary / secondary haemorrhage) · **Q661/Q662** (*operative* vs *postoperative*) · **Q621**,
which prints RRP *in a child, except* against `entqb-thr10-524`'s *in adults, which of the
following* — **same options, same keyed text, correct in both directions**: a deliberate child/adult
pair, not a reprint.

### ⚠️ Two of the 82 folds carry printed rationale the held entry lacks

**Q607 → `entep-mfe5-28`** and **Q623 → `entqb-thr10-534`** are two of the eleven House questions
whose answer line prints an editorial parenthesis (§15o). On folding, the parenthesis is captured
**verbatim and unmarked**, and the entry must **not** carry the *"prints no explanation here"*
marker — it would be a false statement about the source. **Q607's is the strongest single line the
bank prints:** *some references say dermoid but the professor in the lecture said it's thyroglossal
cyst* — the source pre-empting a key dispute and naming the lecture as its authority.

### Next

**212 NEW entries to draft** from Q391–Q685, plus the folds to apply. Drafting brief still to be
written; it must carry the eleven printed-rationale questions, the fuller-printing folds, the
deliberate sets above, and the figure-dependent questions (Q616/Q617/Q618 are laryngoscopy
photographs whose alt text must be modality and view only — the three differ **exactly** by what
the photograph shows).

---

## §15q — House ENT transcription, book pp.172–179 (PDF 87–90), 2026-08-23

**33 questions, Q686–Q718, continuous** — no skip, no duplicate, no restart. Folio verified on all
eight halves (172/173 · 174/175 · 176/177 · 178/179); the `2P−2 / 2P−1` geometry holds.
File: `content\ent\qb-pages\d-house-ENT-mcq-pdf087-090.md`.

### ⚠️⚠️ THE SECTION BOUNDARY — WHAT IS NOW KNOWN, AND WHAT IS STILL A GHOST

**The fourth section is NOT in pp.172–179.** Header reads `Throat MCQs 2025` on all eight halves,
every option letter is **uppercase**, numbering runs 686→718 unbroken. That much is **read**.

Two out-of-range peeks and a **mirrored bleed-through ghost** then suggest — and the reading agent
correctly flagged all of this as **unconfirmed**:

- Throat ends at **book p.181**, last question **Q724**.
- The fourth section begins at **book p.182**, with **lowercase `a. b. c. d.`** and numbering
  **restarting at 1** (Q1 Kiesselbach plexus · Q2 artery of epistaxis · Q3 nasal discharge in
  dental sinusitis).
- ⚠️⚠️ **ITS TITLE READS `Selected questions published by the department` — NOT
  `Selected department MCQs`, which is what this project's own earlier record calls it. THE TWO
  DISAGREE AND NEITHER HAS BEEN READ DIRECTLY OFF ITS OWN PAGE.** Both are recorded here; **neither
  is to be written into an entry until a running header is read the right way round.**

**⚠️ THE RULE: A GHOST IS A LEAD, NOT A READING.** The ghost direction was calibrated twice in this
range and the agent was right to use it — and equally right to refuse to call it settled. **This is
the same discipline that caught the Nose boundary being assumed rather than read.**

### ⚠️ THE CHAPTER NUMBER 9 IS PRINTED TWICE, ON TWO DIFFERENT CHAPTERS

Both pills re-read at `-r 300`. **Recorded, not disputed** — the book's own numbering is defective:

| pill as printed | book p. | first q |
|---|---|---|
| **9. Dysphagia** | 174 (top) | 694 |
| **9. Clinical assessment of voice & swallowing** | 177 (top) | 705 |
| **10. Simplified phoniatrics principle** | 179 (mid) | 715 |

**Consequence: chapter numbers in this book are not a usable index.** Nothing downstream may key off
them. Bleed-through check done — the p.179 chapter-10 pill ghosts onto p.176 and was ignored.

### Findings for the sweep and the drafting stage

- **No parenthesised answer line in 686–718.** All 33 checked individually. **The Q607–Q647 habit
  does not continue** — it is confined to eleven questions in a 41-question stretch.
- **Q685/Q686/Q687 is a TRIPLET, not the pair the pp.83–86 batch flagged** — one option block, three
  airway states, keys B/A/C. ⚠️ **Check how far a set runs before calling it a pair.** Other sets:
  Q691/692/693 (one A–E grading block, keys C/B/D), Q688/689, Q698/699, Q716/717, and a
  seven-question Plummer-Vinson cluster in which **Q700 and Q704 are near-twin vignettes asking
  different questions.**
- **⚠️ THE FIRST THREE-LINK BACK-REFERENCE CHAIN IN THIS BANK: Q701→Q702→Q703.** Q702 and Q703 are
  unanswerable in isolation, and Q702 also needs its crop. (Q689→Q688 is an ordinary single link.)
- **⚠️ A FOLD-DEFEAT SHAPE, SAME FAMILY AS *tumour/tumor*: the eponym prints FOUR WAYS IN TWO
  PAGES** — `Plummer vinson syndrome`, `Plummer vinson’s`, `Plummer vinson`, `Plummer Vinson’s`,
  plus `Plummer-Vinson syndrome.` at Q704. All verified at `-r 300`. **Normalise the eponym before
  sweeping this range or stages A–D will miss every match.**
- **Seven figure-dependent questions:** Q694–Q699 (barium swallows) and Q702 (four-panel, two
  endoscopic + two axial CT). ⚠️ **Q697 is 100 % figure-dependent — its stem carries no clinical
  information at all**, so it cannot be drafted without the crop.
- **Four straddles, all joined on the stem's page:** Q689, Q709, Q714, and **Q718, whose
  `Answer: E` prints on book p.180 and was read by a top-strip peek — the p.180+ batch owes Q718 a
  fragment note only.**
- **One bounded illegible item:** a burned-in caption block in the lower-left of Q699's radiograph,
  unreadable at 220 and 300 dpi. **It is image metadata, not question content.** Nothing else.

---

## §15r — House ENT, book pp.180–187 (PDF 91–94): ✅ THE FOURTH SECTION BOUNDARY IS READ

**34 questions.** Throat **719–724** (6, continuous) + fourth section **printed 1–28** (28,
continuous, transcribed `S1`–`S28`). ⚠️ **The `S` numbers ARE the printed numbers — no offset**,
because this range contains the section's own title page and its question 1.
File: `content\ent\qb-pages\d-house-ENT-mcq-pdf091-094.md`.

### ✅ The boundary, off the pages themselves — no longer a ghost

| book p. | what is printed |
|---|---|
| **181** | header `Throat MCQs 2025`; **last Throat question = 724**; page blank below its answer rule |
| **182** | **no running header at all** — a full display title page reading, on two lines, **`Selected questions`** / **`published by the department`**, under an arc-cropped photograph of a pencil on an OMR bubble sheet. **Question 1 starts on this same page.** |
| **183 →** | header `Dr. HOUSE in ENT` / **`Selected department MCQs`** |

⚠️⚠️ **BOTH NAMES ARE REAL AND THEY DIFFER — the display title and the running header are not the
same string.** This project's earlier record (`Selected department MCQs`) was the **running-header**
form and was correct; the pp.172–179 agent's ghost reading (`Selected questions published by the
department`) was the **display-title** form and was also correct. **Neither was a mistake; they are
two different lines on two different pages.** Record whichever a given page prints.

**So the four sections are, finally, all read rather than inferred:**
**Ear pp.23–74 Q1–Q236 · Nose pp.75–125 Q237–Q471 · Throat pp.126–181 Q472–Q724 · Selected pp.182–?
restarting at 1.**

- Option case: uppercase `A. B. C. D.` on pp.180–181; **lowercase `a. b. c. d.` on pp.182–187
  without exception**, keys in the same case.
- The fourth section prints **inline answers exactly like the first three** — no key table, no
  end-of-section block, no unanswered question. It prints **no chapter pills at all.**
- Its topics run **nose (1–9) then ear (10–28)** — no throat in this stretch.

### ⚠️⚠️ THE BLEED-THROUGH MODEL WAS WRONG AND IT NEARLY PRODUCED A FALSE FINDING

**Ghosts on these sheets pair CROSSED: p.180 ghosts p.183, p.181 ghosts p.182** — the left half
ghosts the *next* spread's right half, not its own facing page. Reading p.180's ghost naively made
it look as though lowercase questions 4–8 sat on **p.179**, i.e. that the section had already
started. It had not. **And two of three ghost readings were wrong in detail** — the ghost said
"28 years old" where the page prints 25, and "50 year old female" where it prints 30.
⚠️ **A GHOST GIVES CONTENT, NEVER A PAGE NUMBER, AND ITS CONTENT IS UNRELIABLE.**

### ⚠️ THE FOURTH SECTION IS A DUPLICATE HAZARD BY DESIGN

It **re-publishes departmental items** and will overlap heavily with the Q1–Q724 run.
**Fold decisions there must compare printed stems, not topics** — and the sweep must normalise the
spelling variants below first, or stages A–D will miss every match.

### Carried forward

- **Q718's key is `E`** — its stem is on p.179 (previous batch), the bare `Answer: E` prints on
  p.180. **Two independent reads agree** (a top-strip peek from the p.172–179 side and the direct
  reading here).
- **Straddles, three, all joined on the stem's page:** Q723 (key on p.181), S8 (rest on p.184),
  S13 (option d + key on p.185). **No outbound fragment — S28 closes cleanly on p.187.**
- **No chapter headings anywhere in pp.180–187.** No parenthesised answer line — all 34 checked.
  (S21's `Acoustic neuroma (vestibular Schwannoma)` is a parenthesis inside an *option*.)
- **No figure-dependent question.** One decorative image only: the p.182 section-opener photograph.
- **Keys noted, not disputed:** **S12** (`Malignant otitis externa is`, key **b** with
  `All of the above.` on offer) and **S25** (`All of he following… except`, key **c**). Both
  re-read at `-r 300`.
- **Graded sets, do not fold:** Q719/Q720 (identical block, keys C and A) with Q722 sharing three
  terms · S1/S2 (both keyed b, different questions) · S10/S26 · S20/S21 (share `Presbyacusis` —
  key in one, trap in the other) · S19/S22 · S14/S15.
- **⚠️ PRINTING DEFECTS, TRANSCRIBED VERBATIM — DO NOT NORMALISE:** `5. 5.Cacosmia is:` (number
  printed twice) · `diseasesEXCEPT:` · `hearing losscan` · `All of he following` · `Ultrasongraphy` ·
  `Seborrhic` · **S23 runs option `a. IV nerve` onto the end of its stem line**, so only b, c and d
  get their own lines · **`Menière’s` (S10) against `Meniere’s` (S13)** · `tumour`/`odour`/`foetid`
  beside `odorless`/`Necrotizing`. All verified at `-r 300`.
- **⚠️ An agent caught itself writing an option from expectation** before reading the continuation
  page — S13's option d. The page prints **`d. cholesteatoma`**; fixed before the file was finished.
  **Nothing was illegible in this range**; the `-r 300` crops were confirmation, not rescue.

---

## §15s — House ENT, book pp.196–205 (PDF 99–103): ✅ THE BOOK IS TRANSCRIBED TO ITS LAST PAGE

**42 questions, printed 69–110, continuous** — no skip, no duplicate, no restart, **no fifth
section, no lettering change.** Per page: 196 = 69–73 · 197 = 74–78 · 198 = 79–83 · 199 = 84–88 ·
200 = 89–93 · 201 = 94–98 · 202 = 99–103 · 203 = 104–108 · **204 = 109–110.**
File: `content\ent\qb-pages\d-house-ENT-mcq-pdf099-103.md`.

### ✅ WHERE THE BOOK ENDS — READ, NOT ASSUMED

- **Book p.204 is the last printed page**: Q109, Q110, the closing rule, a wide gap, then a single
  centred line of **red Arabic type reading `تم بحمد الله`**, then blank to the folio.
- **Book p.205 is completely blank** — no folio, no header, no rule.
- **PDF p.104 exists and is blank on both halves**, carrying only a ghost of p.204 and a scan smudge.
- **No index, no answer key, no back matter.**
- ⚠️ **PDF p.103 is therefore NOT a spread — it is a single-sided sheet.** The 2P−2 / 2P−1 geometry
  held everywhere a folio was printed, but it stops being a *spread* rule at the very last sheet.

**This closes the transcription of `d house ENT mcq.pdf`.** Header `Selected department MCQs`
unchanged to the last page, lowercase `a. b. c. d.` throughout, inline keys, **no chapter pills**.

### ⚠️ THE BRIEF WAS WRONG ABOUT THE FOURTH SECTION'S TOPICS

pp.182–187 ran **nose (1–9) then ear (10–28)** and I told the agent to expect that pattern to
continue. **It does not.** pp.196–204 is **fully interleaved and throat-heavy**: ear 12
(S69–71, S91–99) · nose/sinus/nasopharynx 17 · **throat/pharynx/larynx 13** (S81–85, S88–90,
S106–110). ⚠️ **A pattern observed over six pages is not a structure — the fourth section has no
topic order.** Chaptering there must be per question, by content, with no expectations carried in.

### Findings

- **Straddles: none** in the whole range; every question prints stem, options and key on one page.
  **No inbound fragment** — p.196 opens with a clean `69.`, so **p.195 closed on Q68** (hand this to
  the pp.188–195 batch as its expected closing number).
- **No parenthesised answer line.** All 42 keys bare. Three parentheses exist but all sit inside
  options or stems. **The Q607–Q647 habit is confined to those eleven.**
- ⚠️ **A key-case defect: S93 prints `Answer: D` in UPPERCASE**, the only uppercase key anywhere in
  the fourth section, over lowercase-lettered options. Re-read twice at `-r 300`. **Recorded, not
  disputed**; the intended option is `d`.
- ⚠️ **S83 prints THREE options only (a, b, c) — no option d.** Verified at `-r 300`, nothing
  clipped. (The corpus already holds option counts 2–9; nothing assumes four.)
- ⚠️ **Three linked case pairs that are unanswerable alone: S86→S87, S91→S92, S107→S108.** Each
  second member says *"the previous case/condition"*. **A real hazard given the hashed deck order —
  the referenced case must be restated into the stem at drafting.**
- **No figure of any kind is printed in this range.** Nothing illegible. **No transcription was
  taken from a bleed-through ghost.**

### ⚠️ SPELLING TRAPS FOR THE FOURTH SECTION'S SWEEP — normalise before comparing

- **A THIRD Ménière form: S99 prints a bare `Meniere`** — no accent, no apostrophe-s — against
  p.184's `Menière’s` and `Meniere’s`. **Three spellings of one eponym in one section.**
- `oesophageal`/`anaemia` (S89) against `esophageal` (S109); `tumour` ×3.
- ⚠️⚠️ **S70 restates S21 WITH THE TWO PRINTINGS' DEFECTS SWAPPED** — S21 prints `hearing losscan`
  and `neuroma (space)`, S70 prints `hearing loss can` and `neuroma(no space)`. **A whitespace
  defect is not stable across reprints, so whitespace normalisation must precede any comparison.**
- Re-printings flagged for the sweep, **not resolved**: S95/S19 · S101/S8 · S104/S9 · and **S86/S4,
  which differ in the patient** (50 y cardiac vs 60 y diabetic) — that difference may be the whole
  question, so it is not a fold on its face.
- Printing defects transcribed verbatim, **do not normalise**: `feve,` · `Brudzniski` ·
  `Nasal dipheteria` · `kiesselbach’s`/`little area` · `shenopalatine` · `Rosenmullar` ·
  `Inspiratory strider` · `A adult patient` · `Grandular fever` · `gentamycin` · `sever epistaxis` ·
  `in an child` · `painfull` · `aneurism` · `glottis carcinoma` · `lymphdenopathy`.

---

## §15t — House ENT, book pp.188–195 (PDF 95–98): ✅ TRANSCRIPTION OF THE BANK IS COMPLETE

**40 questions, printed 29–68, continuous** — no skip, no gap. Folios verified individually
(188/189 · 190/191 · 192/193 · 194/195). File: `content\ent\qb-pages\d-house-ENT-mcq-pdf095-098.md`.

**With this range the whole of `d house ENT mcq.pdf` is transcribed: Q1–Q724 (722 questions; 233 and
572 are the bank's own skips) + S1–S110 = 832.** Every file parses with **zero unparsed**.

### ✅ THE SECTION-NAME QUESTION IS CLOSED — BOTH STRINGS ARE REAL

The running header, read the right way round at `-r 400`, prints **`Selected department MCQs`** on
**all eight halves**. The agent flagged, correctly, that a *title page* need not match a *running
header* and that book p.182 was outside its range. **p.182 had already been read directly by the
pp.180–187 agent**, which found the display title `Selected questions` / `published by the
department`. **So both strings are printed, on different pages, and neither record was ever wrong.**

### The fourth section's shape, now fully described

- **No chapter pill anywhere** in pp.188–195 — an undivided run, unlike Ear/Nose/Throat.
- **Inline answers**, `Answer: <letter>` under each option block, closed by a blue double rule.
  **40 of 40 keys printed, none inferred.** No key table.
- **Every question prints exactly four options** in this range — no five-option question.
- **Straddles: NONE — the first range in the bank with zero.** No inbound fragment (p.188 opens with
  a complete S29), no outbound (S68 completes on p.195). **Neither neighbour is owed anything.**
- **No figures. No back-references — all 40 are self-contained. Nothing illegible.**
- ⚠️ **Mixed-topic**: ear questions (S57, S60–S65, S68) and a facial-nerve question (S67) sit in a
  section that opened in the throat. **Confirms §15s: the fourth section has no topic order.**

### ⚠️ THE PARSER HAD TO BE WIDENED FOUR TIMES, AND THREE OF THE FOUR FAILED SILENTLY

`hparse.js` was written for `**719.**` and returned **0 questions AND 0 unparsed** on the S-numbered
files — **which reads as a clean empty file, not as a failure.** Four widenings, all now in the file
with the reason beside them:

1. **`S` prefix** (`**S29.**`) — the fourth section restarts at 1.
2. **`**S[printed 29]**`** — two briefs of mine offered different S conventions and each agent
   followed the one it was given. **Widen the parser; never rewrite a transcript to suit a tool.**
3. **Delimiters `.` `)` and `-`** — ⚠️ **the fourth section does not keep one**: S63 prints
   `a- b- c- d-`, S66 prints `a) b) c) d)`. A parser keyed to letter-plus-full-stop drops 8 options.
4. **`\s*` not `\s+` after the delimiter** — the source prints **`b.Hemolytic`** with no space, so
   requiring one dropped that option and left 3 options under a key of `d`. ⚠️ **It was reported as
   a bad key when the transcript was faithful — a parser defect masquerading as a source defect.**

⚠️ **And the first fix over-corrected**: making the delimiter optional made a Notes line reading
`**9** — the same number as **9. Dysphagia**` parse **as question 9**. The delimiter is required.

**Regression check written and passed** (`regress.js`): the 19 original transcripts still parse to
**684 raw / 683 unique, Q1–Q685, zero unparsed, 233 and 572 absent, Q212 repeated once.**
⚠️ **The check FAILED on its first run and the parser was innocent** — I had asserted against 683,
the count *after* de-duplicating Q212, when the raw count has always been 684. **Check the auditor
before believing the audit**, for the sixth time on this project.

### ⚠️ Spelling and key findings for the fourth section's sweep

- **FIVE keys point at a MISSPELT option**: `Peumothorax` (S41) · `Herptic pharyngitis` (S45) ·
  `Aeuroginosa` (S62) · `rapture` for *rupture* (S64).
- **Three fold-defeating spelling splits inside this one range**: `Peumothorax`/`Pneumothorax`
  (S41/S56) · `jugulodiagastric`/`jugulodigastric` (S47/S64) · `retro-pharyngeal`/`retropharyngeal`
  (S44/S49) — plus `tumour`/`tumor` both present.
- ⚠️ **Two more Plummer-Vinson spellings** (`Plummer Vinson Syndrome` S40, `Plummer-Vinson's
  syndrome` S53) — **SEVEN distinct printings of one eponym in this bank.**
- ⚠️ **S55's question number is printed twice**: `55. 55. The most common lateral solid neck swelling
  is:` — one stem, one option block, one key. **A source printing defect, not a duplicate.**
- Seven missing-inter-word-space stems (`comesfrom`, `thefollowing`, `acutetonsillitis`, `afterone`,
  `thepalatine`, `allof`, `Prelaryngeal(Delphian)`), plus `Bell , s palsy`, `Escherichia .coli`,
  `All of he following`, `Stidor`, `otits media`, `Morhexella`, `haemophylus influenza`, `Waldyer's`,
  `Epstein Bar`. **This section is far more typo-dense than the first three.**
- **Keys noted, not disputed** (each re-read twice): **S38** `c` · **S57** `d` (*Impacted wax* for
  commonest bilateral conductive loss in an adult, against *Otosclerosis*) · **S62** `d`.
- **Graded sets, do not fold:** S44/S49 · S41/S56 · **S51/S52/S55 (a triplet where S52's key turns on
  S51's premise)** · S57/S68 · S40/S53 · S48.

### The tail sweep's normaliser — built and tested, 2026-08-23

`norm.js` + `normtest.js` in the session scratchpad `t10\`. **The fourth section re-publishes
departmental items, so it overlaps the main run BY DESIGN** — but three recorded defect families
defeat a naive comparison, and the earlier sweeps had no defence against any of them:

1. **Whitespace is not stable across reprints.** S70 restates S21 with the two printings' defects
   **swapped** — S21 prints `hearing losscan` + `neuroma (space)`, S70 prints `hearing loss can` +
   `neuroma(no space)`. → strip whitespace entirely.
2. **One eponym prints SEVEN ways** and Ménière three (`Menière’s` / `Meniere’s` / `Meniere`).
   → strip punctuation and accents, deaccent via NFD.
3. **Real typos, INCLUDING IN FIVE KEYS** — `Peumothorax`, `Herptic`, `Aeuroginosa`, `rapture` for
   *rupture*. These survive 1 and 2, so option matching also carries a **length-scaled edit-distance
   tolerance** (12 %, floor 1). Plus British/American, which defeated three stages once already.

**15-case test, all passing.** It collapses every recorded defect **and refuses to collapse
`Right bronchus`/`Left bronchus`, `High`/`Low`, `Inspiratory only`/`Expiratory only` and
`Vocal cord polyp`/`Vocal cord nodule`** — the one-word differences that ARE the answer, which a
careless edit-distance threshold would destroy.

⚠️ **The test's first run reported two failures and the CODE WAS RIGHT — my oracle was wrong**, I had
marked the Plummer-Vinson and Ménière pairs as expected-different when collapsing them is the whole
purpose. **Check the auditor before believing the audit**, seventh time on this project.

**Order of work: the tail sweep runs AFTER Q391–Q685 is drafted and spliced**, so it sweeps against
a settled corpus rather than a moving target.

---

## §15u — House drafting, batch 1 (Q391–Q421, book pp.108–114), 2026-08-23

**29 of 29 written**, `content\ent\qb-pages\house-thr-batch1.draft.js`, ids `enthd-nose-391` …
`enthd-nose-421`. **Validated 0 faults** by `vhouse.js`: every `answer` equals the staged printed
key, option counts match, chapters all resolve, all 29 carry the marker exactly once as the final
paragraph, none in `source`, every entry has a page citation, and **all 48 backticked corpus ids
resolve.** Chapters: `ent-septum` 19 · `ent-nasalmass` 6 · `ent-nasalobs` 3 · `ent-sinusitis` 1.

### ⚠️⚠️ A DECK CONTRADICTS A PRINTED KEY — AND I VERIFIED IT MYSELF

**Q397.** House keys *"Nasal septal deviation maybe congenital"* as the **false** statement. But
`L24) diseases of the nasal septum.txt`:105–110 prints, among the **causes** of DNS:
`2 – Developmental;` / `a-Birth mouldin theory` / `b-Abnormal intrauterine postures with compression`
and `3-Racial (Hereditary).` **Checked directly in the cache, not taken on the agent's word.**

⚠️ **This is a THIRD contradiction shape, and the most citable one yet.** The project already holds
two **deck-vs-book** contradictions (both recorded, neither corrected). This is
**deck-vs-BANK-KEY** — the course's own teaching against the course's own answer. It stops being
*outside knowledge disagrees* and becomes *the syllabus disagrees with itself*, which is exactly the
shape that may be raised in an exam. **The `answer` still does not move**; the contradiction lives in
`explanation`, quoting the slide. The other three options are independently corroborated by
`entqb-nose8-242` (the Caucasian-vs-African 92 %/40 % figures) and `entqb-nose8-243` (C-shape
commonest).

### ⚠️ MY PROMPT WAS WRONG ABOUT THE BACK-REFERENCES, IN BOTH DIRECTIONS

I named **two** (Q412, Q416) and attributed them to Q411 and Q415. There are **five**, and neither
attribution was right: **Q412 and Q413 → Q411** · **Q415 and Q416 → Q414** (Q416 chains *through*
Q415, it does not reference it) · **Q418 → Q417**. The transcript states all five.
⚠️ **Q414 is not in the staging at all — it folded into `entep-nose-82`**, so Q415 and Q416
back-reference a question the drafter was never given; the vignette was reconstructed **from the
transcript, not from its answers**, and said so in both `source` fields.
**This is the third brief of mine an agent has corrected. The instruction to trust the staging over
the prompt is doing real work — keep it in every brief.**

### Other key anomalies, recorded in `explanation`, never disputed

- **Q411** prints *one week*, and `entqb-nose8-247`'s own box says *">3 days = infection"* with its
  one-week vignette keying **abscess** — yet House keys **haematoma**, because no fever or tenderness
  is printed. **Within this bank the discriminator is consistently tenderness, not elapsed time**
  (cf. Q391 at four days → abscess). Recorded so the two are not read as contradictory.
- **Q420** keys *genetic analysis* over embolisation + excision **purely because the patient is
  female** — two questions after the same bank keys embolisation + excision at Q416.
- **Q404** keys *None of the above*, i.e. treats *"Diagnosis requires an imaging facility"* as
  correct, when a perforation is seen on plain rhinoscopy.
- **Q406** says *"vestibular component of nasal valve"* where `entqb-nose8-245` keys *"nasal valve
  collapse"* — wording noted. **Q405** keys cross-fluctuation as *not the best answer* here while
  `enthd-nose-384` keys it **true**; both recorded so they are not read as a contradiction.

### Gaps and figures

- ⚠️ **`L24` IS A VERY THIN DECK — verified, not assumed**: it prints **no fracture-type
  classification, no septal-haematoma or abscess features, no perforation causes or treatment, and
  no SMR detail beyond the name.** 48 cross-references were used before any outside fill.
- **The largest fill is Q418**: **no cached deck prints any MRI appearance for inverted papilloma** —
  `L26`'s only MRI signal set belongs to angiofibroma, and a corpus-wide search for *striated*
  returns no nasal hit. The convoluted-cerebriform pattern was supplied and tagged, anchored on
  `L26`'s own *"Ribbons of Hyperplastic respiratory epithelium… ( inverted pattern )"*, and
  *"Lamellated smooth pattern"* was recorded as naming **no recognised pattern in any source here**
  rather than being explained away. Also a corpus-wide zero: **the silastic septal button** (Q404).
- **Figure-dependent, no crop: `enthd-nose-409`** (coronal CT, bone window) and **`enthd-nose-417`**
  (coronal CT with a black arrow; the stem itself says *"the film is attached ahead"*). Both drafted
  from printed stem, options and key only; **nothing claimed about what either film shows.**
  ⚠️ **A third figure question sits in these pages — Q410, a coronal CT — but it FOLDED into
  `entep-enr-30`, so whoever applies that fold must know the House printing carries a film.**

---

## §15v — House drafting, batch 2 (Q422–Q450, book pp.115–120), 2026-08-23

**26 of 26 written**, `content\ent\qb-pages\house-thr-batch2.draft.js`, ~110 KB, mean 437
explanation words. **Validated 0 faults** by `vhouse.js` alongside batch 1 — **55 entries checked,
zero faults**: keys equal the staged printed keys, option counts match, chapters resolve, markers
present exactly once as the final paragraph and never in `source`, page citations present, every
backticked id resolves. Chapters: `ent-nasalmass` ×18 · `ent-septum` ×8.

### ⚠️ A PRECISION MY SWEEP RECORD BLURRED, AND THE DRAFTER CAUGHT IT

I wrote that Q448 and `entqb-nose6-195` print *"the same four options"*. **They print the same option
SET in a DIFFERENT ORDER**: House *Bloody / Hyposmia / Purulent / Nasal obstruction*, key index **3**;
Grade Gain *Bloody / Purulent / Hyposmia / Nasal obstruction*, key index **1**. The divergence itself
stands exactly as recorded — House keys *Nasal obstruction*, Grade Gain keys *Purulent rhinorrhea* —
and both keys are kept as printed.

⚠️ **THE RULE: SAY "THE SAME OPTION SET" UNLESS THE ORDER HAS BEEN CHECKED.** These two banks reorder
constantly (the ledger already holds a dozen "same four options **reordered**" rows), so **an entry
that quotes a sibling's option LETTER rather than its TEXT will eventually be wrong.**
`house-sweep-throat.md` corrected in place.

### Sourcing

**The other bank was preferred over outside knowledge wherever it printed the fact** — 40+
cross-references, all verified to resolve: NPC's nodal-first presentation and cranial-nerve pattern
(`entep-nose-70`, `entep-throat-43/67/119/120/126/136`), fossa of Rosenmüller and Gerlach tonsil
(`entep-nose-67`, `entep-throat-11`), Furstenberg sign (`entqb-nose7-207`), open-book grading
(`entqb-nose6-192/193/194`), medicolegal X-ray (`entqb-nose6-198`), no-anaesthesia digital reduction
(`entqb-nose6-202`), Moure's and Schwartze's signs (`entqb-thr3-121`, `entep-ear-176`).

**Genuine outside fills, each tagged at the claim:** the *operation* for a meningoencephalocele
(Q429 — **no bank and no deck prints it**; excise rather than reduce, plus the CSF-leak consequence);
**the gross appearance of a nasal polyp** (Q438 — pale, glassy, mobile, insensitive, non-bleeding —
**no cached deck describes it and neither other bank prints it**); sinonasal carcinoma sex
distribution (Q433, though the wood-dust link came from `entep-nose-2`'s printed box); the coronal
plane for the ostiomeatal complex (Q430); 3D reconstruction and plain-film insensitivity (Q447);
and the safeguarding duty in intimate-partner assault (Q449).

### Corrections to my prompt

- **Q417 is not in batch 2** — I carried it over from batch 1's range. **No question in batch 2 is
  figure-dependent**; every one is answerable from its printed stem and options.
- **Q431, Q442 and Q443 are absent from the staging**, consistent with the fold map. **Q444 stands as
  Q443's contrast partner and points at `entep-nose-74` explicitly**, as intended.
- The brief's Throat deck list was not what this range needed; the drafter reached correctly for
  `L1.2) Anatomy of the pharynx`, `L2) Hoarsness of Voice`, `L5) NECK MASS` and
  `L21.1) acute otitis media`. ⚠️ **Use whatever deck actually teaches the point — a nominal deck
  list is an assignment, not a boundary.** This is the same lesson as *a Decks column is an
  assignment, not coverage*, now paid on the bank side.

---

## §15w — House drafting, batches 3 and 4, 2026-08-23

**Batch 3** (Q451–Q484, book pp.121–128): **27 written** — 16 `enthd-nose-*`, 11 `enthd-thr-*`,
the batch that crosses the Nose→Throat boundary. **Batch 4** (Q485–Q517, book pp.129–135):
**27 written**, `enthd-thr-485` … `enthd-thr-517`, ~480 explanation words each.
**All four batches validated together: 109 entries, 0 faults.**

### ⚠️⚠️ "L24 IS A THIN DECK" WAS TOO BROAD — AND I CHECKED IT MYSELF RATHER THAN PICK A SIDE

§15u recorded from batch 1 that `L24` prints *"no fracture-type classification, no septal-haematoma
or abscess features"*. Batch 3 contradicted it. **Read directly in the cache, both are right about
different things:**

- `L24`:73–76 **does** print a `Classification` heading with three **axes** — *Nature of injury ·
  Extent of deformity · Pattern of fracture* — but **grep for a numbered Type 1–4 scheme returns
  ZERO**, and House Q392–Q394, Q450 and Q454 all ask about *Type 1/2/3/4*. **The numbered scheme is
  genuinely absent; the concept of classification is not.**
- `L24`:85 prints **`Look for septal hematoma, abscess`** — an instruction to look, with **no
  features, no cross-fluctuation, no treatment.** Batch 1's claim holds as to *features*.
- ⚠️ And batch 3 found `L24`:71–72 **answers Q451 outright**: *"Fracture of septal cartilage or its
  dislocation can occur without nasal bones fracture in cases of trauma to lower nose."* **Q451
  needed neither outside knowledge nor another bank.**

⚠️⚠️ **THE RULE: AN ABSENCE CLAIM MUST NAME THE SPECIFIC THING ABSENT, NOT THE TOPIC.** "No fracture
classification" is ambiguous between *no classification section* (false) and *no numbered type
scheme* (true), and the ambiguity is what propagated. **Now in every drafting brief.**

### Corrections to my prompts, batches 3 and 4

1. **Q480 is NOT folded** — I listed it among folded referents; it is not in the fold map. The folds
   inside 451–484 are exactly seven: 452, 456, 458, 462, 466, 473, 475. **34 − 7 = 27.**
2. **Q455 is in batch 3, not batch 2** — batch 3 holds two-thirds of the graded trio and linked both.
3. **There is not one back-reference in Q451–Q484.** In book pp.116–131 the transcripts show only
   four *"In the previous case…"* questions — Q428/Q429 and Q495/Q496 — **all outside that range.**
4. **My named sibling for Q502 was the wrong sibling.** `entep-throat-63` shares only the diagnosis
   (it asks about Horner's syndrome); the real close sibling is **`entqb-thr2-81`** — same trismus,
   tonsils pushed medially, third-molar extraction. Both cited, neither folded.
   ⚠️ **A sweep hit names A sibling, not THE nearest one.**
5. **"At least two questions print five options" — there are five** (Q491, Q492, Q493, Q507, Q508).
6. **Figure-dependent questions in batches 3 and 4: NONE.** The only image on book pp.121–128 is the
   **Throat section title-page photograph on p.126** — section furniture belonging to no question.
7. **Printed-rationale re-scan of book pp.116–139: clean.** Every answer line reads `**Answer: X**`
   with nothing appended. **The Q607–Q647 habit is confirmed confined.**
8. ⚠️ **The entry-closing layout in my brief was wrong**: `questions.ent.js` puts `},` at the **end of
   the `source` line** (1,856 of 2,005 entries), not on its own line. **All three drafters copied the
   file rather than the brief and were right to.** Brief corrected for the remaining batches.

### Key anomalies worth keeping

- **Q508 is the strongest of the batch.** `L4` attributes quinsy trismus to *"spasm of masseter and
  pterygoid muscles"*; **temporalis is named nowhere in the deck**, yet the key is *All of the above*.
  One limb therefore rests on general anatomy and is **tagged as such**. Grade Gain's
  `entqb-thr2-47` keys the **pterygoids alone**, but on a single-best stem whose options include
  neither masseter nor temporalis — **so it is not a contradiction**, and the drafter said so.
- **`enthd-nose-453`: an arguable key, correctly labelled.** *"A must"* makes antibiotics and
  anti-tetanus obligatory for every nasal fracture, which overstates practice for a closed injury.
  ⚠️ **The drafter recorded this as ITS OWN objection, not a course contradiction, because no slide
  contradicts the key** — exactly the distinction §15u's Q397 finding depends on. **Keep the two
  apart in every report.**
- **`enthd-thr-482` printing fault**: option d reads *"Post-cricoid cartilage"*; `L1.2` prints
  *"Post-cricoid region"* and no such cartilage exists. **The key is option b, so the fault does not
  touch the answer.** Transcribed as printed.
- **Q513 option D** (*short aryepiglottic folds*) is **not** on `L12`'s infantile-larynx slide, which
  says *"Big arytenoids, Short VC"*; grounded instead on the same deck's laryngomalacia slide and
  `entqb-thr5-255`. **Q517**'s exception pairs a **true** adjective with a **false** one — the deck
  says the stridor *"increase[s] in severity over 6–9 months"*, so *progressive* is right and
  **biphasic** is the falsehood.
- **Cross-bank corroborations, no key contradicted in Q485–Q517:** Q492 ≡ `entqb-thr2-59`,
  Q499 ≡ `entqb-thr2-65`, Q494/495 ≡ `entqb-thr2-62`/`63`, Q509 ≡ `entqb-thr2-68` (an exact
  left/right mirror), Q513 (both banks reject *cylindrical*).

### ⚠️ THE HEREDOC LIMIT IS LOWER THAN RECORDED

A quoted heredoc append **failed at ~7 KB**, bash reporting an unterminated quote although the
delimiter was quoted. **The recorded ~9 KB threshold is optimistic.** ✅ **The drafter verified the
file was unchanged before retrying, lost nothing, and switched to Write-to-scratchpad + `cat`
concatenation** — that is the response to copy. Now in every brief.

---

## §15x — House drafting, batches 5 and 6, 2026-08-23

**Batch 5** (Q519–Q554, book pp.136–143): **27 written**, `enthd-thr-519` … `enthd-thr-554`, mean
413 explanation words. **Batch 6** (Q558–Q596, book pp.144–152): **30 written**,
`enthd-thr-558` … `enthd-thr-596`, mean 462 words, 29 × `ent-tonsils`.
**Six batches validated together: 166 entries, 0 faults.**

### ⚠️⚠️ A DRAFTER REPORTED A DEFECT IN ITS SIBLINGS THAT DOES NOT EXIST — AND I CHECKED

Batch 5 reported an *"id prefix conflict"*: that `house-thr-batch1/2/3.draft.js` use `enth-nose-` /
`enth-thr-` against the corpus's `enthd-`. **It is false.** Direct grep of every draft:
batch 1 = 29 `enthd-nose-` · batch 2 = 26 `enthd-nose-` · batch 3 = 16 `enthd-nose-` + 11
`enthd-thr-` · batches 4–6 = `enthd-thr-`. Corpus = 203 `enthd-ear-` + 144 `enthd-nose-` = **347**,
exactly the House count. **`vhouse.js` was right and would have caught a real prefix error anyway**
(a bad prefix fails the id-to-staging match and reports *no staging row*).

⚠️ **The cost was real even though the claim was false: batch 5 cross-referenced ONLY batch 4's ids,
withholding links to batches 1–3 on the strength of its own wrong finding.** ⚠️⚠️ **THE RULE CUTS
BOTH WAYS — "the agent that read the source is usually right" is a prior, not a verdict. Verify a
report about ANOTHER agent's output the same way you verify one about the source.** Six agent
corrections have been right; this is the first wrong one.

### Corrections to my prompts

- **Q554 / Q566 are BOTH KEYED B.** I briefed *"different option set and a different key"*. The
  transcript records an identical stem, **different option text, same key letter.** Both real, not
  merged — but my characterisation was wrong and would have propagated into an explanation.
- **Q592 vs Q477** — same subject and mirrored form but **zero content overlap**: Q477 tests pillar
  relations, Q592 tests supply, innervation and drainage. Cross-linked as a deliberate pair.
- **Q539 sharpened:** `entqb-thr5-270` prints Q539's **exact four options reordered** and asks about
  laryngitis, keying croup. Neither folded.
- **Batch 5 holds no figure question at all** — Q548 *describes* an X-ray in words and prints none.
  **Batch 6's only figure is Q563**, an unlabelled colour intraoral photograph whose stem states the
  finding in words, so it is answerable from text. No `image` field written; `source` records that
  any future `imgAlt` must give **modality and view only**.
- **The brief's back-reference list is materially short.** Batch 5's range prints three more
  verbatim: **Q528 and Q529 (both → Q527)** and **Q531 (→ Q530)**, with **Q529 a two-step chain**.
  The transcripts also record Q538, Q560, Q564 and Q569 outside that range. All restated in-stem.

### Verified absences, named precisely — the new standard

- **`gold standard` returns ZERO across all 34 lecture files** (Q519) — the ranking is the decks',
  the vocabulary is not.
- **Vincent's angina is taught nowhere**: `Vincent`, `fusiform`, `spiroch` all zero for the pharynx;
  ⚠️ **the single `spirochetes` hit is LYME DISEASE in `L15) Facial nerve disorders`** — opened, not
  explained away. Answered from `entqb-thr4-242` + `entep-throat-76`.
- **`Rathke` zero across 35 decks** · **`Tornwaldt`/`Thornwaldt` zero, re-verified by me** ·
  **scarlet fever zero in the throat decks** · **the 5th branchial arch is never mentioned by `L12`**,
  which names only the 4th and 6th · **`compensatory emphysema` and the check/stop-valve mechanics
  appear on no ENT slide** · **no corpus question previously covered laryngeal embryology.**
- ⚠️ **`ADHD` returns exactly ONE hit and the drafter opened it** — `L8) Introduction to
  phoniatrics`:84 lists ADHD among conditions a *language disorder* may belong to. **No deck names it
  as an adenoid sequel**, but the phenomenon is taught three times under other names (`L3`'s
  CO2-retention *"lassitude, dullness"*, `L9`'s *"Poor memory and loss of concentration"*, and
  `entqb-thr4-210`'s decreased school achievement). **Opened, not explained away.**
- **`L3` prints NO tonsillectomy contraindication list, NO management sequence for any haemorrhage
  type, NO anaesthetic for adenoidectomy, and names the four clinical types of tonsillitis as photo
  captions while describing none of them.** ⚠️ Its adenoid-facies list contains **neither
  "apathetic" nor "expressionless"**. ⚠️ **`L12`'s comparison slide `Supraglottitis OR Croup ??` is a
  bare title in the cached text — no table extracted**; the contrast was assembled from the two
  disease slides.
- **Grisel's/atlantoaxial: zero — but `L3` prints the injury without the name**
  (*"Injury to cervical vertebrae: dt. prominent atlas"*).

### Key anomalies, separated as the briefs now require

**(a) Source diverges from the bank — citable:** **Q580** option A prints `> 7 episodes/year` where
`L3` prints **`7 or more`**; read strictly the option excludes exactly seven. Key (*all of the
above*) unaffected and kept.

**(b) The drafter's own objection, no slide contradicting:** **Q587**'s *"always bacterial in
origin"* (EBV and adenovirus also give exudative tonsillitis) — and **Grade Gain's `entqb-thr4-177`
keys the same way**, so it stands, labelled as the drafter's objection. **Q568** keys *acute*
adenoiditis on a vignette reading chronic, but the key is still the only nasopharyngeal lymphoid
option.

**(c) Cross-bank divergences, House's key kept, both recorded:** **Q569** House *X ray* (*most
clinically important*) vs `entep-enr-11` *flexible nasopharyngoscopy* (*optimum*) — **the adjective
resolves it** · **Q588** endpoint keeps acute follicular tonsillitis among causes of *a membrane*
where House excludes it from *TRUE* membranes — **again the adjective** · **Q596** and **Q573**
(House *CBC*, GG `entqb-thr4-206` *Paul-Bunnell* — **two rungs of one ladder, not a conflict**).
⚠️ **Four apparent divergences and NOT ONE is a defect** — each resolves on a word in the stem.

---

## §15y — House drafting, batch 8 (Q651–Q685, book pp.165–171), 2026-08-23

**19 written**, `enthd-thr-651` … `enthd-thr-685`. Chapters after reconciliation: `ent-stridor` 16,
`ent-paedlar` 2, `ent-hoarse` 1. **This batch corrected me three times and two of the three are
corrections to my own analysis, not to a prompt slip.**

### ⚠️⚠️⚠️ Q685 — MY SWEEP RECORD WAS WRONG. THE TWO BANKS AGREE.

§15p recorded Q685 and `entqb-thr7-373` as a deliberate pair split across banks with **opposite
keys**. **Verified directly in the corpus and it is wrong:**

| | stem | key |
|---|---|---|
| House **Q685** | bullied, severe neck **and face** trauma, **mandibular fracture** | flexible fibreoptic (transnasal) |
| **`entqb-thr7-372`** | assaulted, **multiple mandibular fractures**, difficulty opening the mouth | **flexible fibreoptic — THE SAME** |
| `entqb-thr7-373` | bullied, severe neck trauma **without facial affection** | indirect mirror (transoral) |

**`entqb-thr7-372` is Q685's true twin and the banks key it identically.** `entqb-thr7-373` is the
twin of House **Q686**. **Two stems, two twins, one clause apart — there was never a divergence.**

⚠️⚠️ **THIRD INSTANCE OF ONE INSTRUMENT FAULT: A SWEEP HIT NAMES *A* SIBLING, NOT *THE NEAREST* ONE.**
`tiers.js` keeps only the best-scoring hit per staged question, so `entqb-thr7-372` was never put in
front of me. The same fault gave a wrong sibling for **Q502** (`entep-throat-63` instead of
`entqb-thr2-81`) and hid a fold for **Q634** (shown against `entqb-thr10-551`, not `-552`).
**⚠️ BEFORE WRITING A CROSS-BANK CLAIM, LIST EVERY CANDIDATE ABOVE THRESHOLD, NOT THE TOP ONE.**
`house-sweep-throat.md` corrected in place.

### ⚠️⚠️ MY NECK-TRAUMA ABSENCE CLAIM WAS TOO BROAD — AND I MADE IT THE RECORDED WAY

I wrote that neck trauma is *"taught NOWHERE in the cached ENT decks"*, having opened every hit for
`neck trauma`, `strangulation`, `penetrating` and `zone`. **`L6) Stridor  and tracheostomy`:413–416
teaches it**: `Open Trauma: Gun shot, Cut throat / Stab wound & Surgical` · `Closed Trauma: Blunt
trauma / Hanging`. **I never grepped `blunt`, `hanging`, `cut throat` or `stab` — I probed with MY
vocabulary, not the source's**, which is precisely the trap that cost five days on `generalized
anxiety` against the deck's own `GAD`. ⚠️ **Opening every hit does not save you if you searched the
wrong words.**

**What IS absent, named precisely:** the word **strangulation** · the **three-zone classification**
(zero across all 34 decks) · the **high/low-velocity taxonomy** · **hyoid-fracture detail** · **any
ranking of imaging modalities in laryngeal trauma**. Brief corrected in place.

### ⚠️ A CHAPTER CONFLICT THE DRAFTER FLAGGED AND DID NOT SILENTLY RESOLVE

My brief said `ent-neck` covers *"neck masses and neck trauma"*. **The corpus says otherwise:**
`ent-neck` holds **49 questions of which ONE mentions trauma** — it is the neck-**masses** chapter —
while `ent-stridor` holds **111 of which 25 are trauma**, including `entqb-thr7-335/337/338/369`,
the exact Grade Gain siblings these House questions pair with. **Seven entries refiled `ent-neck` →
`ent-stridor`** (676, 677, 679, 680, 681, 683, 685) by `chapfix.js`, which verified zero collateral
changes and **printed every edit for reading**. Brief corrected. ✅ **The drafter raised it rather
than picking one — exactly right; identical content in two chapters is invisible to every validator.**

### Also corrected in my prompt

- **Q661 did NOT fold** into `entqb-thr8-406` — both Q661 and Q662 are staged and drafted; the Grade
  Gain twin stands separately. **Q652 did NOT fold** either; its back-reference to Q651 is restated.
- **Q649 is not in this staging** (transcript places it on book p.164) — my prompt hedged correctly.
- **Opening-`(` scan: NONE in pp.164–171.** ⚠️ The drafter noted that the parentheses in the staging
  file (`KEY = B (Barium and chest X ray)`) are **my staging tool restating the option text**, not
  printed source — a trap worth knowing before the tail sweep.
- **Figure-dependent questions: none.**

### Findings kept

- **Q659** — key kept, `entqb-thr8-418` cited as corroborating Q660's identical *Mid* key, and the
  oddity reconciled as *difficult ≠ dangerous*. **Recorded, not re-investigated**, as instructed.
- **Q676 — the drafter's own objection, correctly labelled**: the bank excludes penetrating trauma
  from "higher risk" where penetrating neck trauma carries high vascular mortality. **No cached slide
  contradicts the key**, so it is labelled as the drafter's objection, not a course contradiction.
- **Q653 — cross-bank tension, not a defect**: `entqb-thr8-400` keys *acute nonspecific laryngitis*
  for "in children"; House keys *acute retropharyngeal abscess* for a **3-month** child with
  congenital causes excluded. `L6` brackets croup at 6 m–3 y and `L4` puts the glands of Henle in
  infancy. **Both keys held.**
- **`aerophagia` is a precise absence** (Q670): on neither of `L6`'s complication lists, and the only
  cached ENT slide printing the word is `L9) Snoring & OSA` as a **CPAP limitation**. Its
  classification as *early* came from `entqb-thr8-407`, not from outside knowledge.
- **`L1.1` states in its own not-covered list that referred otalgia and its pathways are absent from
  that deck** (Q654) — **a deck declaring its own gap is the cheapest possible absence check.**

---

## §15z — House drafting, batch 7 and the close of the run (2026-08-23)

✅✅ **ALL EIGHT BATCHES DRAFTED AND VALIDATED TOGETHER: 211 entries, 0 faults.**
29 · 26 · 27 · 27 · 27 · 30 · 26 · 19. **Not 212 — see the Q635 correction below.**

### ⚠️⚠️⚠️ A FOLD I ADJUDICATED AND NEVER RECORDED — Q635

`shortkey.js` surfaced **Q635 vs `entqb-thr10-535` at stage B, stem 1.00, options 1.00** — same
stem, **same four options in the same order**, same key. I read it, called it a fold in my working
notes, then wrote *"the fix recovered TWO real folds"* (Q634, Q660) and **left Q635 out of
`folds2.json` entirely.** It went to the drafter as a to-write item. **The drafter wrote it, spotted
the duplicate itself, and flagged it loudly in its `source`.**

⚠️ **THE FAILURE WAS NOT IN THE INSTRUMENT — IT WAS BETWEEN READING AND RECORDING.** The sweep was
right, the adjudication was right, and the map was wrong. **An adjudication that is not in the map
did not happen.** Fold map **82 → 83**, NEW **212 → 211**. Fixed by `fixq635.js`, which added the
fold, removed `enthd-thr-635` from the draft, verified the count and holes, and printed the removal.
Then `repoint635.js` **repointed six sibling references** from the folded id to `entqb-thr10-535`
(project rule: a folded id loses its backticks everywhere) — every edit printed and read.

### ⚠️⚠️ MY VALIDATOR REPORTED SIX CORRECT ENTRIES AS FAULTS

`vhouse.js` requires the marker *"…prints no explanation here"* on every entry. **The six
printed-rationale entries deliberately do not carry it** — the bank DOES print a reason there, so
the marker would be a false statement about the source. The validator did not know the exception
existed and flagged all six. **Now taught it**: for those six ids it instead requires the
alternative closing paragraph, **requires the printed parenthesis to appear verbatim**, and **fails
if the standard marker is present.** ⚠️ **A rule that acquires an exception acquires a validator
bug on the same day.**

### ✅ The six printed-rationale entries are confirmed correct

The drafter re-read every answer line in `pdf079-082` and `pdf083-086` and confirms **my table is
right in all six, character for character** — including the lower-case `because` in Q642 and `VCs`
throughout. A machine check confirms each parenthesis appears verbatim, none carries the standard
marker, and each ends with the alternative paragraph. **21 + 6 = 27.**
⚠️ **The brief's table TRUNCATED Q642's parenthesis** (it stopped at *"interferes with inhalation"*,
dropping *"causing dyspnea that is most prominent upon exertion"*). **Corrected in the brief.**

### ⚠️⚠️ A NEW CONTRADICTION SHAPE: THE COURSE CONTRADICTS THE BANK'S OWN PRINTED RATIONALE

**Q639 and Q641.** Both stems say *(RLN injury)* and both printed parentheses say **cadaveric
position**. `L11) Vocal cord paralysis.txt`:72 and :78 print, verbatim:
`• Paralyzed VC fixed in the Paramedian position.` (RLN) and
`• Paralyzed VC fixed in the Cadaveric position.` (**vagus**). **Verified in the cache myself.**
**Both KEYS still match `L11`'s own presentation rows, so the keys stand** — it is the bank's
*explanation*, not its answer, that the deck contradicts. Recorded in full in `enthd-thr-639`.

⚠️ **This is a fourth shape, and it only exists because the bank turned out to print explanations at
all.** The project now holds: deck-vs-book · deck-vs-bank-KEY (Q397) · bank-vs-bank key divergence
(Q448) · **and deck-vs-bank-RATIONALE.**

**Q642 is the plainer kind — the course contradicts the KEY.** `L11`:106–108 gives
**Abductor Paralysis · Unilateral = "Pass unnoticed · Mild aspiration"**; the bank keys *exertional
dyspnea*. Key held as printed, slide quoted.

### Also from batch 7

- **Corrections to my prompt: Q616, Q617 and Q618 ARE staged** (I said they were not) and **Q606 is
  staged** (only Q607 and Q608 folded). All three image questions drafted from printed text only,
  no `image` field, **nothing claimed about what the photograph shows** — and all three are
  answerable from the stem, which each entry notes.
- **Q636's key prints *"Total lumpectomy + Chemotherapy"*** — a breast word in a laryngeal question.
  **Transcribed as printed**, noted.
- ⚠️ **A deck-versus-deck contradiction, recorded not corrected:** `L8` makes MAP a third category
  **beside** Organic; `L2` files it **inside** the organic group, and their membership lists differ
  (`L2` adds fibrosis and sulcus, `L8` adds Reinke's oedema and contact granuloma). `L2`'s reflux
  slide also says GERD *"Causes most of MAP lesions"* while Q646 keys **voice abuse**. Both recorded
  in `enthd-thr-646`; key held.
- **Precise absences:** `plakia`/`precancer`/`premalignant` = **zero across all 35 decks** · the
  **side** of RLN injury at thyroidectomy · a **timing** rule for paediatric microlaryngeal surgery ·
  the **left posterior lateral quadrant** of the subglottis · the juvenile-vs-adult malignant-
  potential comparison for RRP · the **site** of a dermoid cyst in `L5`. ⚠️ **`Interferon` on `L2`'s
  RRP list: the grep hit was OPENED and it is `L6`'s HAEMANGIOMA treatment list — a different
  disease.**
- ✅ **Batch 7 independently confirms batches 1–6 all use the `enthd-` prefix**, closing out batch 5's
  incorrect report.

## §15aa — the 211 Throat entries are SPLICED and the app BOOTS (2026-08-24)

**`Q_ENT` 2,005 → 2,216. Corpus 2,464 → 2,675 questions.** Text-level insert before the closing
`];`, so all 2,005 held entries keep their exact hand-written formatting and escaping — the file is
never re-serialised on this project.

**Pre-splice dead-id check, run against the fold map rather than a memory of it:** every
`enthd-(ear|nose|thr)-<n>` reference inside the eight draft files was matched against the 83 folded
House numbers. **Zero hits** — no drafted block cites an id that a fold is about to retire. Q635 was
already repointed to `entqb-thr10-535` when the missed fold was caught, and this re-run confirms it
from disk rather than from the note that said so.

**The splice harness refuses to write on any of four conditions**, each one a bug this project has
actually shipped: the merged file failing to parse · the entry count not landing on
before + drafted · a sparse hole or an id-less entry (indexed explicitly — `Array.filter` skips
holes and can never see one) · a duplicate id. All four passed.

**Post-splice corpus check, on the file that shipped rather than on the drafts:**

- every `answer` indexes a real option, over all 2,216;
- **zero dead backticked ids** across every `explanation` and `source` in the file;
- bank tallies through `banksOf`, never `bankOf` — ENT alone: **house 561 · endpoint 615 ·
  gradegain 1,101**. House was 350; 350 + 211 = 561. ✅
- 30 chapters in use, unchanged.

**Boot, headless Chrome, `file://`, the real thing:**

`errs 0 · sheets 2 · rules 876 · media54 3 · modules 4 · chapters 153 · questions 2,675 · cases 89 ·
theory 153 · sections 1,603`

**0 console errors, 876 CSS rules, three `max-aspect-ratio:5/4` blocks — the correct count.** Only
the question total moved; everything else is byte-for-byte the 2026-08-23 figure, which is what a
pure content splice should look like.

### The tail is staged, and the parser is faithful where it counts

`Q686–Q724` and `S1–S110` parsed from the four tail transcripts: **149 questions, ZERO unparsed,
both ranges complete with no absences, no repeated label, and every key in range.**

⚠️ **The two sections' numbering overlaps in principle** — the fourth section restarts at 1 — so the
staging tags `sec` explicitly (`main` / `S`) instead of leaning on the fact that the ranges happen
not to collide. The bank printing the number 212 twice already cost this project one silently
dropped question; keying by a bare number is the same mistake in a different coat.

⚠️ **One question has THREE options and it is not a parse loss.** `S83` (p.198) prints a, b and c
and no d — the transcriber verified it at `-r 300`, recording that a blank line follows option c
before the answer. The parser was widened four times for exactly this failure shape, so a short
option list is now guilty until checked; this one was checked and is innocent. **The bank is what it
prints.**

**70 of the 149 stems opened with a `*(printed N.)*` transcription annotation** — provenance, not
stem text. Moved to a `printedLabel` field rather than deleted, and the options were checked
separately and carry no markup at all.

## §15bb — the tail sweep: the fourth section is 100 % duplicated, and it is not a surprise

`sweep3.js`, the 149 staged tail questions against all 2,216 held ENT entries, plus a self-sweep.
**394 candidates. By stage: A 79 · B 30 · C 110 · D 6 · E 123 · F 46.**

| | any hit | A/B/D | none |
|---|---|---|---|
| **Fourth section S1–S110** | **110 of 110** | **100** | 0 |
| **Main run Q686–Q724** | 26 of 39 | 9 | 13 |

**Every single question in the fourth section matches something already held, and ninety-one per cent
match at stage A, B or D — the three stages that do not need a human to guess.** The section is
titled *Selected questions published by the department* and it re-publishes departmental items; the
sweep now says so with a number instead of a warning. **The nine main-run A/B/D hits are
Q686/687/704/705/706/707/712/713/722.**

### Three instrument changes, each one paid for earlier in this run

1. ⚠️ **The `keycore.length > 3` guard is GONE.** In `sweep2.js` it silently switched stages B and C
   off for any key reducing to ≤3 characters — 31 of 294 questions, and the report still looked
   complete. **A guard that silently disables a stage is worse than a missing one.**
2. **`norm.js` does the comparing**, so a reprint's defects cannot defeat a match: it strips
   whitespace and punctuation entirely, de-accents, maps British→American, and allows a
   length-scaled edit distance on option strings. It earned that in the self-sweep — see below.
3. **No top-N cutoff anywhere.** The E/F cutoff hid three Nose folds once.

### The self-sweep is the part that vindicates the normaliser

**16 internal pairs among the 149**, and the ones worth naming are the ones a naive comparison
would have missed outright:

- `S21` ↔ `S70` — **the two printings' defects are SWAPPED**: `hearing losscan` + `neuroma (space)`
  against `hearing loss can` + `neuroma(no space)`. Whitespace is not stable across reprints.
- `S19` ↔ `S95` — `diseasesEXCEPT` against `diseases EXCEPT`. ⚠️ **CORRECTED in §15ff: the STEMS
  match to the character, but option d is *Post-tonsillectomy* in one and *Perichondritis* in the
  other. TWO QUESTIONS, not a reprint** — and the endpoint bank already keeps both variants
  deliberately.
- `S18` ↔ `S67` — `Bell’s palsy` against **`Bell , s palsy`**.
- `S8` ↔ `S101`, `S9` ↔ `S104`, `S24` ↔ `S61`, `S25` ↔ `S65`, `S26` ↔ `S68`, `S59` ↔ `S106` —
  straight reprints inside one section. ⚠️ **`S1` ↔ `S78` WAS LISTED HERE AND IS NOT ONE** — S1
  offers *Greater palatine artery* where S78 offers *Labial branch of the facial artery*, a replaced
  distractor, and they fold onto two different held entries. It scored 0.60, which is a summons to
  read; I filed it as a reprint instead. **A stem match is not a question match — the options are
  half of the question.**

⚠️ **Three of the sixteen are DELIBERATE PAIRS, not duplicates.** `S44` *Chronic retro-pharyngeal
abscess* against `S81` *Acute* (0.60) · `Q691`/`Q692`/`Q693`, a graded neck-trauma series where each
stem negates the last · `Q718`/`Q723`, *caused by* against *most common cause of*. **The
deliberate-pair rule outranks the reprint rule; a score never decides a fold.**

**⚠️ CORRECTED — the sentence that stood here said the ranking scored those three low, and for one
of them that was FALSE.** `Q692` ↔ `Q693` came out at the TOP as `option-set + key`, because
`sameOpt` collapsed the keys `II` and `IV`. The verdict was right and the instrument was wrong, which
is the worse of the two ways to be right. **After the §15dd guard the count is 15, not 16**: the
false pair is gone and `Q691` ↔ `Q692` sits where it belongs, at stem 0.73. The corpus figures below
are the pre-guard run; the post-guard totals are `A=79 B=29 C=111 D=6 E=123 F=46`, same 394.

### ⚠️ A probe of mine reported the main run as having ZERO hits, and it was the probe

The first tally regex accepted only the `S<n>` label form and silently dropped every `Q<n>` line, so
it printed **`MAIN RUN Q686-Q724: any hit 0/39`** — a clean-looking result that was pure instrument
failure. It was caught only because the parsed-line count did not reconcile with the sweep's own
`136 of 149`. **The fix prints how many of the 394 lines it actually parsed**, so the next silent
drop shows up as arithmetic rather than as good news. Same family as `hparse.js` returning
0 questions and 0 unparsed: **a report that looks complete is not evidence that it is.**

### All six stage-D hits are DELIBERATE PAIRS — the tail has no key divergence at D

Stage D is *identical option set, different key*, the shape that has produced every bank-vs-bank key
clash so far. In the tail it produced **six hits and not one of them is a divergence** — every one
is two different questions sharing one answer menu, which is exactly what a well-built bank does:

- **A THREE-MEMBER neck-trauma series**, one menu, three vignettes, three different right answers:
  no facial affection → *Indirect mirror laryngoscopy (transoral)* · cannot open the mouth →
  *Flexible fiberoptic laryngoscopy (transnasal)* (`enthd-thr-685`, already spliced) · Q687, which
  adds the same obstruction and keys **Tracheostomy**. `entqb-thr7-373` is the Grade Gain printing of
  the first. ⚠️ **This is the series my earlier record mis-paired** — I had put `entqb-thr7-373`
  against Q685; the corrected reading puts it here, and the sweep now shows the whole family at once.
- **`S8`/`S101` against `entep-nose-19`** — one rhinorrhoea menu, two vignettes: seasonal with
  sneezing keys *Allergic rhinitis*, unilateral and worse on bending forward keys *CSF rhinorrhea*.
- **`S107` against `entep-throat-63`** — an abscess menu shared by a vignette and a
  complication question; not the same item in any sense.

**The deliberate-pair rule outranks the reprint rule, and here it decides all six.** A stage-D hit is
a summons to read, never a verdict.

## §15cc — the 83 folds are APPLIED, and the harness had to be widened twice first

**82 distinct held entries now carry `house`** (83 folds; Q523/Q535 share a target, and Q466 folds
into a House entry so it was `source`-only). Verified by reading every target back out of the file
after writing: **82 of 82 carry the bank, 0 missing.** ENT `house` 561 → **642**; the arithmetic is
81 newly-tagged plus `enthd-nose-337`, which already carried it. Boot after: **0 console errors,
2,675 questions, 876 rules, 3 `5/4` blocks** — only the bank tallies moved, which is what a fold is.

### ⚠️ `foldpatch.js` would have refused half the run, and the reason is 78 entries deep

`appendToField` matched `\n  <field>:'` — the SINGLE-quoted form only. **78 entries in
`questions.ent.js` quote `source`/`explanation` with DOUBLE quotes** because they carry unescaped
apostrophes: every `entqb-thr1-*`, every `entqb-nose8-*` and `entqb-nose9-*`, and eleven endpoint
entries. Two of them — `entqb-thr1-31` and `entqb-thr1-33` — are fold targets, so the harness
aborted with `could not locate the end of source` and wrote nothing. **It failed safe, but it
stopped the whole half.** Fixed by capturing whichever quote opens the field and scanning for that
one; both halves then dry-ran clean, and the previously-clean half was re-run to prove the widening
broke nothing.

### ⚠️⚠️ THE HEREDOC BACKSLASH TRAP FIRED A FOURTH TIME — INSIDE A PLAIN `cat > file <<'EOF'`

`handedit.js`, the harness for the content-bearing half of a fold, was written with
`'([\s\S]*?)'`. The quoted heredoc collapsed every `\` to `\`, so the JS string literal `'\s'`
became plain `s` and the character class **shipped as `[sS]`**. The regex matched nothing and the
harness aborted on its first edit. **A QUOTED HEREDOC IS NOT PROTECTION WHEN ITS BODY IS
JAVASCRIPT** — the collapse happens before node ever sees the source. Fix: build every backslash
from `String.fromCharCode(92)` and every newline from a real newline character, so no source string
contains a backslash for the heredoc to eat.

**And underneath it a second fault the first one was hiding: the data file is CRLF.** The field
terminator was `,` + newline, but the bytes are `,` + CR + LF, so the alternation never fired.
⚠️ **The opening side of the same pattern matched perfectly, because the CR sits BEFORE the newline
and not after it** — one pattern, right at one end and wrong at the other, and the only symptom was
`could not locate field options` on an entry whose `options:` line is plainly there.

### The eleven content-bearing edits, each read before and after

`entqb-thr2-83` +`CT neck` (five options; `answer` 3 → 4, **the keyed TEXT does not move**) ·
`entqb-thr4-237`, `entqb-thr1-33`, `entqb-thr1-31`, `entep-nose-41`, `entep-throat-38`,
`entep-ear-52` each +`None of the above` · `entqb-thr10-531` stem replaced with House's fuller
printing (dysphonia, stridor, lateral neck swelling) · `entep-nose-40` **reconstruction replaced
with House's printed vignette** · `entep-nose-41` bracket rewritten.

⚠️⚠️ **THE RECONSTRUCTION WAS NOT JUST THIN, IT WAS AN ANSWER LEAK.** `entep-nose-40`'s
reconstructed stem invented *a nasopharyngeal mass* and *bleeding actively* — **neither is in any
bank** — and `entep-nose-41`, the next question in the chain, keys **Juvenile nasopharyngeal
angiofibroma**. The invented finding handed over the answer to the following question. House's
printed vignette gives the history and withholds the examination finding, which is what the item is
for. **This is the `imgAlt` rule in a stem: a restatement must not answer the question.**

### ⚠️ Three of my briefs were wrong again, and the agents that read the source caught all three

1. **Only ONE of the four "reconstructed stems" is replaceable, not four.** The brief and the sweep
   file both say House prints the vignette for `entep-nose-40/41/42` and `entep-mfe5-22`. **It does
   not.** House prints a real vignette for Q613 only; **Q614, Q615 and Q645 are back-references** —
   *In the previous case…* — so three of the four bracketed restatements remain necessary. The fold
   removes **one** recorded weakness, not four.
2. **Content-bearing list C was short by two.** `entqb-thr1-33` (Q473) and `entqb-thr1-31` (Q475)
   both add *None of the above*; the sweep file lists them, my brief did not.
3. **"House is the fuller printing" is not a rule and it goes both ways.** `entqb-thr8-412` (Q657)
   and `entqb-thr8-418` (Q660): **House prints THREE options and DROPS the held fourth** (*Any type
   of the above*, *None of the above*). Grade Gain is fuller there, so nothing changed. Likewise
   `entqb-thr10-553` and `entqb-thr10-551`, where House prints the shorter stem, and **`entep-ear-52`,
   which is fuller in DIFFERENT PLACES** — endpoint prints *on the left side* and *the tube was clear
   and well-positioned*, the two facts that exclude options a and b, and House omits both. **Keep the
   fuller printing means field by field, not entry by entry.**

Also corrected from the transcript, not from the map: **Q466's earlier printing is book p.96, not
p.101** — the sweep prose had it wrong and the held citation was right all along.

### ⚠️⚠️ THE SHORT-KEY FIX HAD ITS OWN BLIND SPOT, AND IT WAS THE SAME SHAPE AGAIN

`sweep2.js` disabled stages B and C for any key whose core was ≤3 characters. `shortkey.js` was
written to re-run exactly those — **but `core()` also drops every word of two letters or fewer, so a
key of `CT` or `US` reduces to the EMPTY STRING, and `shortkey.js` skips empty keys explicitly**
(`if (h.kc !== skc || !skc) continue`). **The questions with the shortest keys of all were never
re-run, by the very tool built to re-run them, and both reports looked complete.**

**18 of the 302 staged had an empty key core**: Q392, Q393, Q394, Q422, Q428, Q447, Q463, Q491,
Q493, Q494, Q544, Q585, Q603, Q624, Q676, Q681, Q692, Q693 — keys like *CT*, *US*, *3D CT*,
*Type 3*, *A & C*, *B and C*, *II*. `emptykey.js` re-ran all of them through `norm.js`, which
compares option TEXT and has no length filter anywhere.

✅ **Result: no fold was missed.** Every strong hit is either the question's own spliced entry
(Q392 ↔ `enthd-nose-392` and so on — expected, the corpus now contains the staged run) or an
already-adjudicated fold (Q603 → `entqb-thr6-319`, which is in the map). The rest are questions
sharing an enumerated menu — *Type 1/2/3*, *CT* — which is a menu collision, not a duplicate.
**This is now a measured zero instead of a skipped one, and that is the whole difference.**

## §15dd — ⚠️⚠️ THE TOLERANCE THAT CATCHES A TYPO ALSO COLLAPSES AN ENUMERATION

The empty-key re-run put `norm.sameOpt` under a magnifying glass and it failed the plainest test
there is. Measured, before the fix:

| Pair | `sameOpt` said |
|---|---|
| `Type 1` / `Type 3` | **SAME** |
| `Type 3` / `Type B` | **SAME** |
| `Grade II` / `Grade IV` | **SAME** |
| `A & C` / `A & B` | **SAME** |
| `B and C` / `B and D` | **SAME** |

**Every one of those is a pair where the single differing character IS the answer.** The
length-scaled edit distance was built to survive `Peumothorax`, `Stidor` and `Plummer-Vinson`; on a
short enumerated key it does the opposite of its job. **And it had already produced a false verdict:
the tail self-sweep labelled `Q692` ↔ `Q693` an `option-set + key` match, and their keys are `II`
and `IV`.** The conclusion I drew from it — a deliberate graded series — was right, but it was right
by reading, not because the instrument said so. **A label that is wrong for the right answer is
still a wrong label.**

Three guards, each aimed at one shape, applied before the edit distance ever runs: **the digit
strings must match** (`type1`/`type3`, `ct`/`3dct`) · **a trailing roman numeral must match**
(`gradeii`/`gradeiv`) · **a difference confined to the FINAL character, where that character is a
digit or a letter a–e, is an option label, not a typo** (`bandc`/`bandd`). Plus an exact-match floor
under five characters (`ac`/`ab`, `ct`/`us`, `high`/`low`). **40 test cases now pass** — the
original 15 plus 25 written for this defect — and every recorded typo still collapses.

### The re-run proves the guard COST NOTHING and BOUGHT a real divergence

Tail sweep before: `A=79 B=30 C=110 D=6 E=123 F=46`. After: `A=79 B=29 C=111 D=6 E=123 F=46`.
**Total unchanged at 394 — nothing was lost. One hit moved from B to C**, and it is the point:

**`Q706` (p.177) vs `entqb-thr11-580`, the Talbot-plateau law.** Same stem, same key
(*Retina can only perceive 5 images / second*) — but House prints two distractors as
**1 image** each 0.5 / 0.4 seconds where Grade Gain prints **2 images**. The old comparison declared
those options identical and reported a clean stage B; the new one keeps the fold and **shows the
divergence**. Self-sweep 16 → 15, the one removed being the false `Q692`/`Q693` key match, and
`Q691` ↔ `Q692` correctly demoted from `option-set + key` to a stem-similarity hit.

**A guard that hides a difference is the same defect as a guard that disables a stage — the report
still looks complete.**

### Open, recorded, not acted on

- **Q414 → `entep-nose-82`**: House prints the fuller vignette — *an attack of severe epistaxis*,
  *his 4th nosebleed attack this year*, a mass *with dilated vessels on its surface* — against
  endpoint's bare wording. Recorded in `source`; no stem written.
- **Q561 → `entqb-thr4-243`**: House prints *skin rash as obvious in the attached photo*. **A
  clinical photograph exists in the source and no crop is held.** Flagged, not acted on.
- **Q655 → `entqb-thr8-405`**: the held entry records that Grade Gain prints **no question
  sentence** and that one was borrowed from `entqb-thr8-415`. **House prints one — *How to manage
  this patient?*** — so the borrowed sentence could be replaced by a printed one. Not done.
- **`entep-nose-42` and `entep-mfe5-22`** still carry bracketed restatements; both banks
  back-reference, so nothing printed can replace them.

## §15ee — the fourth section is the ENDPOINT BANK, printed again

The tail adjudication opened with a measurement rather than a guess. Of the 149 staged questions,
**60 have a best hit at stage A with an identical option set and an identical key — and 56 of those
60 target an `entep-*` entry.** Widening from best-hit to any A/B hit: **100 of the 110
fourth-section questions match an ENDPOINT entry.**

**That is the explanation of the 100 % duplication rate.** The section's display title is *Selected
questions published by the department* and the endpoint file **is** the department's own question
set, so `Selected department MCQs` is very largely the endpoint bank reprinted inside a commercial
revision book. **It adds almost no new content — what it adds is a second printing with its own
defects**, which is precisely the material `norm.js` was built to see through.

⚠️ **Four held entries are each targeted by TWO different S questions** — `entep-nose-14`,
`entep-nose-16`, `entep-ear-80`, `entep-ear-81` — so the fourth section also duplicates *itself* on
top of reprinting the endpoint file.

### The 24 raw-text differences among the 60 stage-A folds, all read

Every one was punctuation, capitalisation, an apostrophe style, or a missing space. **Eight differ by
a trailing colon and nothing else.** The rest: `acutetonsillitis` · `thefollowing` · `afterone week`
· `except?` against `EXCEPT:` · a space before a comma (`over cheek ,`, `tonsillectomy ,`) · and
**`Bell’s palsy` (S18) against `Bell , s palsy` (S67)** — the same question spelled two ways inside
one section, folding into two different endpoint entries. **Not one changed meaning. A printing
defect is not a difference.**

### ⚠️⚠️ S62 — IDENTICAL QUESTION, IDENTICAL MENU, OPPOSITE KEYS, AND THE COURSE EXPLAINS THE SPLIT

*The causative organism in acute necrotizing otitis media is:* — House (book p.194) keys
**Pseudomonas**; `entep-ear-86` keys **Haemolytic streptococci group A**. Stage A: word-for-word
stems, identical option sets. **HOLD BOTH; neither key moves and neither is disputed.**

Read in the caches, not asserted:

- `L17,18) Otorrhea and otalgia`:182 — **`Malignant external otitis (necrotizing external otitis,
  skull base osteomyelitits)`** — and :190, **`Causative organism usually Pseudomonas aeroginosa`**,
  on the same bullet block.
- `L21.1) acute otitis media`:36 — the bacterial causes of acute suppurative otitis media, with
  **`B hemolytic strept` FIRST**, ahead of *Strept pneumoni* and *H- influenza*; **`Measels`** is a
  viral cause on the same slide.
- ⚠️ **The phrase *acute necrotizing otitis media* appears in NO cached deck.** `necrotiz|necrotis`
  returns exactly two hits across all 34 ENT decks — the external-otitis line above, and
  `necrotizing vasculitis` in `L30) Rhinitis 2`. **The disease is not taught under this name.**

**The two banks split along a naming collision: in this course the word *necrotizing* belongs to the
EXTERNAL disease, and Pseudomonas belongs with it.** The third candidate makes it visible —
`entqb-ear2-39` asks for the organism of *malignant otitis externa* and keys **Pseudomonas
aeruginosa**, the same option text House keys on the media question. **Recorded, not resolved.**

### ⚠️⚠️ And the held entry had already NAMED this exact trap, before House was ever read

`entep-ear-86`'s explanation, written in an earlier session from the slides alone, reads:

> The critical discrimination is with **necrotizing (malignant) otitis externa**, which sounds almost
> identical but is a different disease entirely: **Pseudomonas aeruginosa**, in the **external**
> canal, in elderly diabetics. Reading "media" versus "externa" is the whole question.

**That is a description of House's key, written before House existed in this corpus.** The entry
identified the trap, named the organism the trap produces, and said the whole question turns on one
word — and the second bank then keyed the trap. **This is the strongest cross-bank evidence the
project holds, precisely because it is not an argument built after the fact: the prediction was
already in the file.**

The divergence is therefore noted from **three independent directions**: the two decks (`L17,18`:182
and :190 against `L21.1`:36), the sibling question `entqb-ear2-39` keying Pseudomonas for the
*externa* item, and `entep-ear-86`'s own standing warning. **And the `answer` still does not move on
either side.**

### The tail carries FIVE image questions, and the probe that found them found seven

`photo|picture|figure|image|attached|opposite fig|radiograph` over all 149 staged questions returned
**seven hits, and two are the substring trap**: `Q706` matches on *"Retina can only perceive 5
**images** / second"* and `Q707` on *"Poor **image** quality"* — the word is in the options, about
image perception, not about a printed figure. **CHECK WHAT A SUBSTRING ACTUALLY MATCHED**, the same
lesson `Rett` inside *Tourette* paid for once.

**The five real ones are all in the main run, all barium swallow or endoscopy, book pp.174–176:**

| | Book p. | What is attached |
|---|---|---|
| `Q694` | 174 | barium swallow, IDA vignette |
| `Q695` | 174 | barium swallow, cervical dysphagia with globus |
| `Q696` | 174 | barium swallow, *"attached in the photo ahead"* |
| `Q697` | 175 | **barium swallow AND endoscopic pictures**, no vignette at all — the figures ARE the question |
| `Q702` | 176 | *"given the opposite figures"*, a back-reference to Q700's vignette |

⚠️ **`Q697` cannot be written without its crops** — its stem is only *"The attached barium swallow and
endoscopic pictures refer to which condition of the following?"*. **The S section has none**, which
fits the reprint finding: a reprint of a text question set carries no new figures.

⚠️ Standing rules for these five: `image` stores the **basename** and `qImgSrc()` builds the path ·
`imgAlt` is required and **must not answer the question** — modality and view only, the detailed read
belongs in `explanation` (this gave away six answers once) · **every crop is LOOKED at; no numeric
check has ever caught a bad crop.**

⚠️ **`Q697` also keys `Laryngeal web (Plummer vinson’s)`** — the bank's own parenthesis, on a laryngeal
rather than a postcricoid web. **Noted, never disputed**; it goes in `explanation`.

### Two citation forms for one book, both correct, and the split is clean

**All 558 House-origin entries cite the book by its printed title — `Dr. HOUSE in ENT, End-of-round
MCQs 2025, p.N` — with no exceptions.** The 84 entries that carry House as a *fold* cite it by
filename, `d house ENT mcq.pdf` book p.N, **83 of 84**; the one exception (`entep-throat-103`) uses
the title and reads better for it.

That is a consistent rule, not a drift: **an entry leads with its own bank's citation, and a fold's
appended note names the other bank's printing.** ⚠️ **Recorded so that nobody "fixes" one to match
the other and churns 558 entries.** The tail's new entries take the **title** form, matching the 558.

### The crop naming convention, read off the one House image entry that exists

`enthd-ear-29` carries `image:'q-hd-29b'` and cites p.29 — so the pattern is
**`q-hd-<book page><letter>`**, the letter distinguishing multiple crops on one page, and the
filename is its own citation independently of which entry ends up holding it. (Peds House uses
`q-pd-hd-*`; endpoint uses a bare `q-<page>`.) So the tail's five crops land as `q-hd-174*`,
`q-hd-175*` and `q-hd-176*`.

⚠️ **`Design\scripts\q-images.ps1` exists and does the detection, but `.ps1` execution is blocked by
policy on this machine — it has to be passed inline.** ⚠️ **And it has only ever been shown a
single-page template; this PDF is a TWO-PAGE SPREAD per rendered page**, so its detector will see two
book pages at once and the `-Box` override is likely to be needed. **Every crop is LOOKED at anyway
— no numeric check has ever caught a bad crop on this project.**

### ⚠️⚠️ The fourth section reprints the book's OWN earlier sections too

Two of the 60 stage-A fold targets **already carry `house`**, folded from the main run earlier the
same day: **`entep-nose-58`** (main-run Q431, book p.116 — now also S33) and **`entep-throat-82`**
(main-run Q622, book p.158 — now also S53). **`Dr. HOUSE in ENT` prints the same question in two of
its own sections.** So those folds add a second House page to an entry that already cites one, and
`addBank` is a no-op on both — the same shape as Q466 → `enthd-nose-337` in the main run.

⚠️ **A count depends on its definition, so state the definition.** "Held entries targeted by two
different S questions" is **four** counting best hits at stage A *or* B (`entep-nose-14` ← S4/S86 ·
`entep-nose-16` ← S9/S104 · `entep-ear-80` ← S24/S61 · `entep-ear-81` ← S25/S65) and **two** counting
stage A with the same key alone. Both numbers are right; a number without its definition is not.

## §15ff — the tail is adjudicated: 149 verdicts, and the fourth section adds NOTHING

**FOLD 124 · NEW 23 · HOLD BOTH 2.** No gaps, no overlaps, and every FOLD target verified to have
been a real candidate on its own worksheet row.

| | FOLD | NEW | HOLD BOTH |
|---|---|---|---|
| **Fourth section, S1–S110** | **108** | **0** | **2** |
| **Main run, Q686–Q724** | 16 | **23** | 0 |

**Not one new question in the whole fourth section.** The reprint finding of §15ee was a measurement
of overlap; this is the verdict after every one of the 110 was read. `Selected department MCQs`
contributes **two divergent keys and nothing else** — the rest is the endpoint bank, printed again.

The 124 folds land on **115 distinct entries**; **nine entries take two tail questions each**
(`entep-nose-5` ← S8/S101 · `entep-nose-14` ← S4/S86 · `entep-nose-16` ← S9/S104 · `entep-ear-57` ←
S21/S70 · `entep-ear-80` ← S24/S61 · `entep-ear-81` ← S25/S65 · `entep-mfe4-3` ← S26/S68 ·
`entep-throat-16` ← S59/S106 · `entep-throat-84` ← S58/S90), and **three already carry `house`**
from the main run — the book reprinting itself.

### The second HOLD BOTH: S63, and a key that was already on record as disputed

`entep-mfe6-1`, *all of the following may be seen in the TUBOTYMPANIC type of CSOM EXCEPT* — four
identical options in identical order. **House keys `High incidence of complications`; the endpoint
printing keys `Profuse odourless otorrhoea`.** The agent verified House's letter on the printed page
at `-r 500`, and noted that S63 is one of only two questions in its range marking options
`a- b- c- d-`, so the letter was **read, not inferred**.

⚠️ **The held entry already carries a `DISPUTED KEY` note from the end-of-ENT review, with four
sources against it. House is a fifth printing keying the other option.** **And the `answer` still
does not move** — a defective key is noted, never disputed. Both printings are kept.

### ⚠️ An agent overturned me twice, and both times it was right

1. **`S1` ↔ `S78` is NOT a reprint.** I had listed it among the "straight reprints inside one
   section". Read: S1 offers *Greater palatine artery*, S78 offers *Labial branch of the facial
   artery* — **a replaced distractor**, so two different questions, folding onto two different held
   entries. The self-sweep had scored it 0.60 on stem similarity, which is a summons to read, and I
   filed it as a reprint instead of reading it.
2. **`S19` ↔ `S95` likewise.** Same stem to the character (`diseasesEXCEPT` / `diseases EXCEPT`) —
   but option d is *Post-tonsillectomy* in one and *Perichondritis* in the other. **The endpoint bank
   already keeps both variants deliberately** (`entep-ear-76` / `entep-ear-96`, "confirmed
   2026-07-27"). Folding them would have destroyed a distinction the corpus had already ruled on.

**Both were in my ledger as normaliser successes. The normaliser WAS successful — it correctly
matched the stems. What I got wrong was reading a stem match as a question match.** A stem is not a
question; the options are half of it.

## §15gg — the comparator, rebuilt from measurement instead of a tolerance

`norm.sameOpt` began as *strip everything, then allow 12 % edit distance*. That is a reasonable
first guess and it was wrong in three separate ways, each found by a different pair of real
questions, each fixed, and each fix wrong in turn until the last one.

| Version | What it collapsed that it must not | Found by |
|---|---|---|
| whole-string 12 % tolerance | `Type 1`/`Type 3`, `Grade II`/`Grade IV`, `A & C`/`A & B` | the empty-key re-run |
| + digit / roman / final-char guards | **`…with HIGH basic volume`** / **`…with LOW basic volume`** | the corpus self-sweep |
| + "a short word present on one side only" | — but it SPLIT `from nose` / `from **the** nose` (S9, S104) | the fold-set diff |
| + function-word exemption | **`Lies ANTERIOR to…`** / **`Lies POSTERIOR to…`**, options a and d of ONE question | the extra-risk suite |
| **per-word tolerance, final** | nothing found | — |

**The last change is the one that matters and it is a change of principle, not of threshold: stop
measuring the tolerance over the whole string.** A typo lives in one word, so the tolerance belongs
on the word. Content words are paired up in order and each pair must be identical, or a typo.

### What counts as a typo, decided by measuring twenty real pairs rather than picking a number

|  | lev | sorted-letter distance | first letter |
|---|---|---|---|
| **typos** — `morhexella`/`moraxella`, `moure`/`maure`, `haemophylus`/`haemophilus`, `aeuroginosa`/`aeruginosa`, `peumothorax`/`pneumothorax`, `herptic`/`herpetic`, `stidor`/`stridor`, `jugulodiagastric`/`jugulodigastric` | 1–2 | **1–2** | same |
| **distinctions** — `upper`/`lower`, `major`/`minor`, `hypernasality`/`hyponasality`, `unilateral`/`bilateral`, `supraglottic`/`subglottic`, `anterior`/`posterior`, `inspiratory`/`expiratory`, `inner`/`outer`, `medial`/`lateral`, `benign`/`malign`, `before`/`after`, `polyp`/`nodule`, `acute`/`chronic` | 2–7 | **3–6** | often differs |

**Edit distance alone cannot separate them** — `aeuroginosa`/`aeruginosa` is 2 and so is
`hypernasality`/`hyponasality`. **Sorted-letter distance can:** a transposition or a doubled letter
keeps the letter multiset, a swapped morpheme does not. **Nothing in the corpus lands between 2 and
3, so the threshold sits in a measured gap rather than on a guess.** The first-letter test catches
the one pair the gap would not — `nasal`/`basal`, one edit and two sorted.

### The suite is now the project's fold history, runnable

`normtest.js` holds **39 cases and every one actually occurred**: 16 defects that must collapse
(including `Subglottic tumour`/`tumor`, the pair that SHIPPED unfolded) and 23 distinctions that
must not (including `II`/`IV`, which produced a false `option-set + key` label, and `Post-tonsillectomy`/
`Perichondritis`, the replaced distractor that makes S19 and S95 two questions). A twelve-case
extra-risk set passes alongside it.

### What the rebuild cost and bought, measured on the same data

Tail sweep: `A=79 B=30 C=109 D=6 E=123 F=46`, **393 candidates against the original 394**. The
stage-A fold set went **60 → 61: none lost, one gained.** The gain is `S72`, and it is the
interesting one — **its fold target MOVED from `entep-nose-103` to `entep-nose-59`**, because
`entep-nose-103` adds *"reducing Fehling's solution"* to the stem and is a different question. That
is the recorded *"a hit names a sibling, not the NEAREST one"* fault, fixed at the source.

⚠️ **And the agent had already caught S72 by hand**, naming `entep-nose-59` at stage A while the
pre-repair worksheet ranked `entep-nose-103` above it at C/1.31. **Instrument and reader converged
independently** — which is the only kind of agreement worth anything.

## §15hh — the 25 tail entries to draft, chaptered from where the corpus already files the topic

**23 NEW + the 2 HOLD BOTH = 25 entries.** Every chapter was taken from a measurement of the held
corpus, never chosen by feel:

| Topic | Chapter | Why |
|---|---|---|
| neck / laryngeal trauma (Q688, Q689, Q690, Q693, Q687) | `ent-stridor` | **14 of the 15 existing trauma questions are already there**; only one sits in `ent-vocal` |
| dysphagia, barium swallow, Zenker, pyriform (Q694, Q696, Q697, Q699, Q700, Q702, +2) | `ent-dysph` | 34 existing against 7 in the next-largest chapter |
| FEES, videofluoroscopy, swallowing assessment (Q708, Q710, Q711) | `ent-swallow` | every existing `FEES` and `videofluoroscop` question is there |
| nasality and resonance (Q717 and four more) | `ent-phon` | `entqb-thr9-476`, *"all of the following are true about nasality"*, sits in `ent-phon`; the scattered `hypernasal` hits elsewhere are questions where it is a SYMPTOM of something else |
| `S62`, `S63` | `ent-aom`, `ent-csom` | the chapter of the entry each one is held beside |

⚠️ **`ent-swallow` and `ent-phon` split the same Grade Gain chapter** — `entqb-thr11-*` is
`ent-phon` 15 · `ent-swallow` 5 · `ent-neck` 1 — so a swallowing-assessment question and a resonance
question from adjacent pages belong in different chapters. **Chapter by content, never by the
source's own chapter number.**

### FOUR crops, not five

`Q694` (book p.174) · `Q696` (p.174) · `Q697` (p.175) · `Q702` (p.176). **`Q695` needs none** —
it folds into `entep-enr-37`, which **already carries `q-3044`**, a barium swallow for the same
case. Checked rather than assumed.

⚠️ **`Q697` cannot be drafted without its crops**: its entire stem is *"The attached barium swallow
and endoscopic pictures refer to which condition of the following?"* — two figures, no vignette.
The crops come from PDF pages 88–89 (book 174 is the left half of PDF 88, 175 the right half, 176
the left half of 89), and the naming convention read off the one existing House image entry
(`enthd-ear-29` → `q-hd-29b`) is **`q-hd-<book page><letter>`**.

## §15ii — a standing rule was OVERRIDDEN once, deliberately, and here is the argument

**The rule:** *a replaced distractor means the item asks something different, so it is NEW, not a
fold.* It has decided dozens of verdicts on this project and it is not being weakened.

**The exception: `Q721` → `entqb-thr9-473`, the most accepted theory of stuttering.** House prints
**`Tissue chemistry`** where Grade Gain prints **`Organic theory`** — a genuine option replacement,
not a spelling variant. Verified in the main session, not taken on the agent's word:

- the stems ask the same thing (*"Which of the following is the most accepted theory of
  stuttering?"* against *"What is the most accepted theory of stuttering?"*);
- **the keyed text is the same** — `Genetic` / `Genetic theory` — though the option ORDER differs
  (House puts it at b, Grade Gain at d);
- **`tissue chem`, `organic theor` and `genetic theor` return ZERO hits across all 34 cached ENT
  decks.** Neither the replaced option nor the one replacing it is taught anywhere in the course.

**The rule's rationale is that a swapped distractor changes what the item asks. Here it cannot: the
swap is between two options the course never mentions, on either side of a key that does not move.**
So the item is folded and **the variant is recorded in `source`, not discarded** — a student meeting
either printing sees both.

⚠️ **Recorded as an override, not as a precedent.** A rule bent silently is a rule lost; the next
replaced distractor is NEW unless someone makes this argument again and it holds.

### The other two non-keyed divergences in the same batch, both folded and both named

- **`Q706` → `entqb-thr11-580`** — *1 image* against *2 images* in two distractors. The keyed text is
  identical, and the held entry's own source already records that its option (b) is arithmetically a
  second correct answer (2 ÷ 0.4 = the key's own 5/second). **House's singular form makes the flaw
  Grade Gain's alone**, and `L8` writes *"1 image per 0.2 seconds or 5 images per second"* — the
  lecture's own phrasing.
- **`S21`/`S70` → `entep-ear-57`** — option c replaced (*Bilateral wax* against *Unilateral secretory
  otitis media*). ⚠️ **Both were drafted NEW and then overturned by the held entry's OWN `source`**,
  which records endpoint printing that variant at p.366 and folding it already. **The corpus knew
  before the sweep did.**

## §15jj — the 124 tail folds are APPLIED

**115 patches written, 115 applied, and all 115 distinct targets verified carrying `house` by reading
them back out of the file.** ENT `house` 642 → **755** (+113: 115 targets less the two that already
carried it). Boot after: **0 console errors, 2,675 questions, 876 rules, 3 `5/4` blocks** — only the
bank tallies moved, which is what a fold is. `Q_ENT` unchanged at 2,216 throughout; `foldpatch.js`
reported zero collateral changes and zero holes on both halves.

### ⚠️ I split the halves by target order and told each agent the wrong thing about its own half

The prompt told half 2 it would hold *"most of the main-run folds"*. **It holds none** — all 16 Q
folds are in half 1, and half 2 is 59 S-rows. So the three specific warnings I attached to half 2
(the `Q706` 1-vs-2 images divergence, `Q691`'s `III`/`Grade III`, `Q723`'s `SNHL`) **were aimed at an
agent that could not act on any of them**, and half 1 handled all three without being told. Both
agents said so plainly. **Splitting a work-list by an index is not splitting it by content, and the
prompt should describe what the file HOLDS, not what I expect it to hold.**

### ⚠️ And the `printedLabel` claim in my brief was wrong — checked three times, by three parties

The brief said *"where `printedLabel` is present, the page prints a different number from the
label"*. **Both agents checked their own rows programmatically and both reported it false**, and I
then checked all 149: **70 rows carry a `printedLabel` and 69 are exactly the label's own number with
a trailing dot.** The annotation exists only because the fourth section restarts its numbering at 1.

**The one exception is not a different number — it is the same number printed twice.** `S5`
(book p.183) prints **`5. 5.Cacosmia is:`**, verified by the transcriber at `-r 300`. ⚠️ **And
finding it exposed a staging fault: `S5`'s stem still carried the transcriber's inline warning**,
because the annotation stripper only removed a LEADING `*(printed N.)*` and S5 has a second note
after it. One row in 149, **found by a digit check on a metadata field rather than by looking at
stems** — repaired, and the note moved to its own field.

### What the second bank settled, corroborated or failed to settle

- ✅ **`entep-throat-87` / S83 — a SECOND bank prints only THREE options**, a/b/c with no d, verified
  at `-r 300`. **That settles it: the missing fourth option is the source's, not a transcription
  loss.**
- ✅ **`entep-throat-86` / S82 — a third independently corrupted copy of one line.** Endpoint prints
  *Maure's*, Grade Gain prints *Moure's* but misprints *Strider*, **and House alone gets both words
  right.** Three printings, three different defects, one correct.
- ⚠️ **`entep-throat-77` / S47 — House reproduces the ambiguity instead of settling it**: it prints
  the disputed key endpoint's way *and* omits Grade Gain's qualifier *regular*. Noted, not disputed,
  not moved.
- ⚠️ **`entep-throat-17` contradicts itself** — its `source` says the fuller wording *"Drainage is
  Peroral without general anaesthesia"* "is the one kept above", but option D carries only *"Drainage
  is Peroral"*. S49 reprints the fuller form. **Recorded; nothing changed on the strength of a fold.**
- **Five of half 2's ten key-text differences are the ENDPOINT FILE'S OWN second printing**, already
  documented in the held entry's `source`. **House is reprinting endpoint's variant, not diverging
  from it** — which is the reprint finding showing up one entry at a time.

### ⚠️ A marker now names one of two banks — left alone, deliberately

**46 of half 2's 57 targets carry *"Written for this bank — the endpoint file prints no explanation
here."*** Those entries now belong to two banks, and **House prints no box either** (confirmed across
all three fourth-section transcripts: not one boxed explanation). **The marker stays literally true,
so it stays** — rewording 46+ entries is churn, and each `sourceAppend` already records that House
reprints the item. **Recorded as a decision so the next reader does not "fix" it.**

---

## §15kk — the shipped duplicate is merged, and the four tail crops are cut (2026-08-24)

Two jobs ran in parallel and both are done and verified. This section records what changed in the
data file, what the crops contain, and four corrections that came back with them.

### The merge: `enthd-thr-648` → `entep-throat-65`

The only stage-A cross-bank duplicate in 2,216 entries, and the second fold on this project defeated
by **British-versus-American spelling** (*Subglottic tumour* / *tumor*). Applied by a purpose-built
harness, `mergeapply.js`, because **`handedit.js` could not be used: it holds the entry count, and a
delete moves it.**

Three operations, every one guarded:

1. **`entep-throat-65` rewritten** — `explanation` 2,861 → 5,423 chars, `source` 2,097 → 4,244,
   `objective` 187 → 310. Nothing else moved: `bank:'endpoint'`, `alsoIn:['gradegain','house']`,
   `module`, `chapter:'ent-stridor'`, `stem`, `options` and `answer:1` are byte-identical, checked
   **after parsing**, field by field, against the pre-edit object.
2. **`enthd-thr-648` deleted whole** — 4,437 chars of block plus its `,` and blank line. Entry count
   **2,216 → 2,215**, holes 0, and the harness refused to proceed until the bytes after the deleted
   block were proved to be the next entry's opening brace.
3. **`enthd-thr-649` repointed** — 2 occurrences, one in `explanation` and one in `source`, both in
   closing `Cross-reference:` lists. `entep-throat-65` was verified absent from both first, so no
   duplicate reference was created.

**Measured after:** collateral changes to untouched entries **0** · dead backticked ids **14 before,
14 after** · entries still backticking the folded id **none** · ENT bank tallies
**house 754 · endpoint 615 · gradegain 1,101**. Boot from `file://`: **0 console errors, 876 rules,
3 `max-aspect-ratio:5/4` blocks, 4 modules, 153 chapters, 153 theory chapters, 1,603 sections,
89 cases, corpus 2,674** — one fewer than before, exactly as intended.

**What the survivor now holds.** From the deleted House entry: the four-option table **with its
per-option deck grounding** (the `L6` wheezing quote, `L6`'s early-versus-late tumour rule, `L11`'s
bilateral abductor palsy, the `L2` glottic-tumour panel), the `L12` croup corroboration with the
steeple sign, and the ⚠️ early/late-versus-inspiratory/biphasic warning. From the survivor: the
**voice** discriminator (`entep-throat-34`, p.1430 — hoarse above the cords, normal voice with a
brassy cough below), which the House entry lacked entirely, the ⚠️ self-contradiction with the
p.1519 box (`entep-throat-62`), and the *Variant of `entep-throat-15`* note. **Nothing substantive
was dropped** — the two pressure paragraphs and the two distractor tables were fused, not kept twice.

**⚠️ THERE ARE FOUR PRINTINGS, NOT THREE.** House prints this question **twice itself** — main run
**Q648, book p.164**, options lettered A–D, spelt *tumor*; and fourth-section **S29, book p.188**,
options lettered a–d, spelt *tumour*. Grade Gain adds *"which of the following"* to the stem, and the
House main run prints a five-dot *…..?*. **Stem sense, option set, option order and key are identical
in all four.** The merged `source` records every one of those differences by name.

### ⚠️ A "correction" in the shipped text was a MISQUOTATION of the slide

The survivor's old explanation quoted `L6` as *"asthma, COPD, foreign body in trachea"*. **The slide
prints `COD`** — `L6) Stridor  and tracheostomy.txt`:29, and **`COPD` returns zero hits across all 34
cached ENT decks.** The deleted House entry had it right. The merged text quotes `COD` as printed and
flags it in parentheses. **A verbatim quote that has been silently tidied into correct English is no
longer a verbatim quote**, and the tidier is invisible — this one survived a splice, a boot and a
sweep.

### ⚠️ My own count of the folded id's mentions was wrong

I recorded four file-wide hits for `enthd-thr-648`. **There are five** — the survivor's own `source`
mentioned it **twice**, not once, and both were inside the block that gets replaced wholesale, so the
error was harmless. It is recorded because the pattern is not: **a grep count taken from a report
rather than from the file is a claim.** Post-merge the id appears on exactly one line, three times,
**never in backticks** — per the rule that a folded id loses its backticks everywhere it is still
mentioned.

### The four crops, cut from PDF pp.88–89 at 300 dpi

The spread geometry held: each PDF page renders 3508×2481 as a two-page landscape spread, left half
x 0–1753 (even book page), right half x 1754–3507 (odd). Book p.174 = left of PDF 88, p.175 = right
of 88, p.176 = left of 89.

**`q-images.ps1`'s own detector was useless here** — it is built for the endpoint bank's
cream-card-on-teal template. House frames every figure in a rounded **blue** border, so the detector
was rewritten to threshold on blue (`B>110`, `B−R>45`, `R<190`), label 8-px cells into connected
components, and keep components ≥200×150 px. That returned the figure frames and ignored the blue
section rules and the page header. Cut with an 8-px pad, scaled to 560 px max edge, JPEG q80 —
matching `q-hd-29b.jpg` and the `q-gg-*` files, including their convention of **keeping the blue
frame inside the crop.**

| file | px | what it shows, read off the image |
|---|---|---|
| `q-hd-174a.jpg` | 560×488 | two lateral contrast radiographs; the barium column narrows abruptly to a thin thread just below the cricoid, with a shelf-like anterior filling defect — **Q694**, Plummer-Vinson |
| `q-hd-174b.jpg` | 560×358 | three panels; a rounded barium-filled outpouching projecting posteriorly off the cervical oesophagus — **Q696**, Zenker |
| `q-hd-175a.jpg` | 560×480 | **one** frame, three sub-panels: two endoscopic views of an eccentric narrowed opening plus a lateral contrast study with a white arrow at a thin shelf — **Q697** |
| `q-hd-176a.jpg` | 560×486 | 2×2: two endoscopic views of an exophytic ulcerated mass beside the glottis, an axial CT and an axial MRI — **Q702** |

**How the two p.174 figures were assigned, and why it is a reading rather than a count.** The
detector found three frames, at y = 368, 928 and 1552 on a 2481-px page. The page's three questions
are separated by full-width blue rules, and each figure sits vertically **inside its own question's
block** — y=368 level with Q694's first line and above the rule under its answer, y=928 inside
Q695's block, y=1552 level with Q696's stem. Q695's is the middle one and was left alone, because
Q695 folds into `entep-enr-37`, which already carries `q-3044`. **Three frames for three questions
would have been a coincidence to lean on; the vertical layout is evidence.**

**A second, independent check the crops passed.** Each figure's content matches its question's keyed
answer without anyone having matched them on purpose: postcricoid web → Plummer-Vinson (Q694),
posterior outpouching → Zenker (Q696), composite barium-plus-endoscopy → Q697's stem naming exactly
those two modalities, exophytic laryngeal mass on CT and MRI → Q702's hypopharyngeal cancer. **The
layout reading and the clinical reading agree.**

### ⚠️ `q-hd-176a` IS NOT A BARIUM SWALLOW, and my brief said it was

My crop brief described all four as barium swallow or endoscopy. **The Q702 figure is two endoscopic
views plus two axial cross-sections — a CT and an MRI.** An `imgAlt` calling it a contrast study
would be wrong on the face of it. Recorded because the drafting brief now carries the correction and
the row carries a `shows` field read off the image.

### ⚠️⚠️ THE Q702 BACK-REFERENCE POINTS AT THE WRONG QUESTION IN MY STAGING

`Q702` reads *"In the previous case, what's your diagnosis given the opposite figures?"* I had it
back-referencing **Q700** (the 45-year-old with angular stomatitis and nail spooning, book p.175,
keyed CBC). **Its antecedent is Q701** — the 50-year-old diagnosed with Plummer-Vinson two years
earlier who neglected follow-up and returned with **earache, neck swelling and rapidly progressive
dysphagia**, book p.176, keyed CT. It is the question immediately above Q702 on the same page, and it
fits the key: Q702 keys *Hypopharyngeal cancer: Pyriform fossa*, the malignant transformation of the
Q701 case. `Q703` then continues the chain — *"In the previous case, what is the pathological type"*
→ SCC.

**Q701 FOLDED**, so it is not in the drafting work-list and the drafter cannot see it. Its vignette
is therefore supplied in the row's own `antecedent` field, with a note saying which question it is
and that it folded. ⚠️ **A back-referencing stem must be reconstructed because the app hashes
question order — and a reconstruction must not answer the question** (`entep-nose-40` invented *a
nasopharyngeal mass* and the next entry keyed juvenile nasopharyngeal angiofibroma).

### Two harness lessons, both from false alarms

- **A text-level "nothing else moved" guard fired falsely on `answer`.** The bytes after `answer:`
  run straight into `explanation:` — one of the three fields being deliberately rewritten. The guard
  that works compares the **parsed** objects and exempts exactly the named fields. **A guard that
  cries wolf gets switched off, which is how a silent guard gets born.**
- **The dead-id check must be a DELTA, never an absolute.** Its absolute count is 14 and always was:
  the same backtick pattern matches **case ids** (they live in `cases.ent.js`, a different file) and
  **image basenames** (`q-3026`, `q-gg-30`), neither of which is a question id. What must be zero is
  the number an edit **adds**. Before: 14. After: 14.

### The work-list split, done by content this time

25 rows in two halves, and **the halves are described to their agents by topic, not by index** —
the correction from earlier today, where half 2 was told it held most of the main-run folds and held
none. **Half A: 14 rows, book pp.172–176, `ent-stridor` ×6 and `ent-dysph` ×8 — all four image rows
and both back-referencing stems.** **Half B: 11 rows, pp.177–194, `ent-swallow` ×3, `ent-hoarse` ×1,
`ent-phon` ×5, and both HOLD BOTH rows.** Every warning in each prompt is actionable by the agent
receiving it.

**A new id prefix, `enthd-sel-`,** for the two fourth-section entries (`enthd-sel-62`,
`enthd-sel-63`). It exists because **that section restarts its numbering at 1**, so `S62` written as
`enthd-thr-62` or `enthd-ear-62` would collide with a real main-run entry. The three existing
prefixes are unchanged: `enthd-ear-` 1–236, `enthd-nose-` 237–471, `enthd-thr-` 472–685.

---

## §15ll — the image field takes no extension, and the harness that checked it had the test backwards

Caught **before** the drafting agents wrote anything, by reading `qImgSrc()` rather than assuming
what it does.

`app\index.html`:2681 —

```js
function qImgSrc(name){ return `assets/q/${name}.jpg`; }
```

**It appends the extension itself.** Measured across `app\data\questions.ent.js`: **84 image fields,
every one a bare basename, zero carrying `.jpg`.** My crop assignment stored `q-hd-174a.jpg`, which
would have built `assets/q/q-hd-174a.jpg.jpg`.

⚠️ **A broken `<img>` renders as nothing. It does not throw, it does not log, and the boot probe
counts zero console errors either way.** So this would have shipped four blank figures on four
questions that cannot be answered without them — including `Q697`, whose entire stem is *"The
attached barium swallow and endoscopic pictures refer to which condition?"* **The class of fault
matters more than the fault: a silent renderer failure is invisible to every check this project
runs.**

Fixed in three places, in the same pass: `draft-A.json` and `draft-tail.json` rewritten (4 fields),
`HOUSE-TAIL-DRAFT-BRIEF.md` corrected in place, and the running drafting agent messaged with the
correction and told to re-read those four rows.

### ⚠️ And my own guard had the test inverted

`splice-tail.js` checked `imgFiles.has(q.image)` against a `readdirSync` of `app\assets\q\`, whose
entries **do** carry `.jpg`. So the guard would have **passed the broken value and rejected the
correct one** — precisely backwards. It now rejects any extension on the field and adds `.jpg` back
before testing the directory.

**This is the sixth instrument on this project to be blind to, or wrong about, the exact fault it was
built to catch** — after `Array.filter` on sparse holes, the E/F top-N cutoff, the
`keycore.length > 3` guard, that guard's own fix, and `sameOpt`'s tolerance on enumerated keys. The
pattern is now stable enough to state as a rule: **a guard written from what the code is assumed to
do inherits the assumption. Read the function before writing the check on it.**

### The splice harness is staged and refuses correctly

`splice-tail.js` is written and dry-runs to `✗ MISSING DRAFT: house-tail-A.array.js` — the right
answer while the drafts are still being written. Beyond `splice-thr.js`'s guards (parse before write,
count match, sparse-hole scan by index, duplicate ids) it adds: **the drafted id set must equal the
25 the adjudication asked for, exactly** (derived from `draft-tail.json`, not typed) · `answer` in
range of its own `options` · `image`/`imgAlt` paired, extension-free, and present on disk · **no
`alsoIn`**, since these are the questions no other bank prints · **dead backticked ids as a DELTA**
· every `chapter` resolvable in `modules.js` · bank tallies through `banksOf`.

Expected ids, and the only ones that will be accepted: `enthd-thr-` **687 688 689 690 692 693 694
696 697 698 699 700 702 703 708 710 711 715 716 717 718 719 720** and `enthd-sel-` **62 63**.

### Two agent runs died on a transient 529 before writing a byte

Three launches of half A and two of half B were killed by server-side overload. **Nothing was
recoverable, because nothing had been written** — which is the inverse of this project's usual
finding that *a dead agent's file is usually complete*. The relaunch of half B therefore carries an
explicit instruction to **write its output file early and append to it**, so a kill leaves finished
work on disk. Recorded because the standing rule assumes a file exists to validate.

---

## §15mm — the 25 tail entries are written and spliced: HOUSE ENT IS CLOSED (2026-08-24)

The last drafting job in `d house ENT mcq.pdf`. **25 entries — 23 NEW plus the 2 HOLD BOTH — written,
spliced and boot-verified.** `Q_ENT` **2,215 → 2,240**, corpus **2,674 → 2,699**, ENT `house`
**754 → 779**. Boot from `file://`: **0 console errors, 876 rules, 3 `max-aspect-ratio:5/4` blocks,
4 modules, 153 chapters, 153 theory chapters, 1,603 sections, 89 cases.**

### ⚠️⚠️ THEY WERE WRITTEN IN THE MAIN SESSION, BECAUSE FIVE SUBAGENTS DIED ON A TRANSIENT 529

Three launches of half A and two of half B were killed by server-side overload, **every one of them
before writing a single byte.** That inverts the project's standing finding — *a dead agent's file is
usually complete, validate from disk before rewriting* — because there was never a file. The last
relaunch carried an explicit instruction to write early and append; it died too.

**So the governing decision "Opus subagents write, cap 2 concurrent" has a failure mode it did not
account for: the agent pool can be unavailable.** The work was done inline instead. Cost: the source
reading lands in the main context rather than being discarded with a subagent. **Worth knowing that
this is possible and roughly what it costs, because the alternative was to stop.**

### The two files

`content\ent\qb-pages\house-tail-A.array.js` — **14 entries**, book pp.172–176, `ent-stridor` ×6 and
`ent-dysph` ×8, all four image entries and both back-referencing stems.
`content\ent\qb-pages\house-tail-B.array.js` — **11 entries**, pp.177–194, `ent-swallow` ×3,
`ent-hoarse` ×1, `ent-phon` ×5, and both HOLD BOTH.

Explanation lengths **338–583 words**, inside the 2026-08-13 adaptive budget (~520 for vignettes,
divergences and gap-fills; ~250 for straight slide-recall). Every one closes with
`*Written for this bank — d house ENT mcq prints no explanation here.*`, **which is true and was
checked, not assumed**: the transcript header for pp.172–179 states *"No boxed explanations are
printed"* and records that **every answer line in the range was checked for an opening parenthesis.**

### ⚠️ A NEW ID PREFIX, AND THE COLLISION IS NOT HYPOTHETICAL

`enthd-sel-62` and `enthd-sel-63` are the first entries from the book's fourth section, which
**restarts its numbering at 1**. Writing `S63` as `enthd-ear-63` would have collided with a **real
and entirely different** main-run question. ⚠️ **And at S62 it would have been SILENT** — 62 is one of
the **33 gaps** in the `enthd-ear-` sequence (203 entries over the range 1–236), so the id would have
been free and wrong. **A numbering scheme that only breaks on some numbers is worse than one that
breaks on all of them.** The three main-run prefixes are unchanged: `enthd-ear-` 1–236,
`enthd-nose-` 237–471, `enthd-thr-` 472–685.

### What the decks actually gave, and where they did not

**Direct, quotable hits — most of the batch is fully sourced:**

| Entry | The slide that answers it |
|---|---|
| `enthd-thr-688` / `689` | `L11) Vocal cord paralysis`:149–158 prints the answer as **numbered steps 1–3 of its own management list, including the six months** — airway, follow-up 6/12, then lateralization |
| `enthd-thr-694` | `L10) Dysphagia From ENT Perspective`:197–210 — the three-component definition, and a figure captioned **"A barium swallow showing an ANTERIOR web"**, which is what the crop shows |
| `enthd-thr-696` | `L10`:150–193 — Killian's triangle, **"more commonly on the LEFT"** (the stem says a lump in the *left* neck), dysphagia 98 %, undigested regurgitation, halitosis, aspiration, and the **C5–C6 posterior sac with contrast retention** |
| `enthd-thr-698` | `L6`:422 files **"Chemical : Chemical fumes & POTASH"** — the stem's own agent, named on the slide |
| `enthd-thr-700` | `L10`:213 lists **"A full blood count and iron studies"** first among the investigations |
| `enthd-thr-708` | `L8`:404–409 — three options are the **advantage** list verbatim and the fourth is the first line of the **disadvantage** list, negated |
| `enthd-thr-710` / `711` | `L7`:167–174 — same structure, and the white-out sentence is quotable word for word |
| `enthd-thr-718` | `L8`:66–71 — **the four options ARE the four prerequisites of normal language development, one failure each** |
| `enthd-sel-63` | `L16`:30–44 puts **three of the four options inside the tubotympanic panel** and `L16`:247–248 excludes the fourth |

**Tagged as outside the material, each on the specific claim:** the Schaefer-Fuhrman grading (`L6`
names blunt laryngeal trauma only as a cause of stridor and grades nothing) · the rigid-bronchoscope
sequence in blunt paediatric airway trauma · alkali liquefactive necrosis · reflux → metaplasia →
adenocarcinoma · the *rhinolalia aperta/clausa* nomenclature and the /m/ → /b/ mechanism · the
squamous histology of hypopharyngeal carcinoma · the androgen account of mutational voice disorder ·
the cholesteatoma-erosion reason the tubotympanic type is called *safe*.

### ⚠️⚠️ A DECK-VERSUS-BANK KEY DIVERGENCE, AND THE FIGURE IS WHAT RESOLVES IT

`enthd-thr-702` keys **Hypopharyngeal cancer: Pyriform fossa** over a menu that also offers
**Postcricoid area** — in a patient who began as Plummer-Vinson. `L10`:92–106 points the other way,
**twice**: *"Iron-deficiency dysphagia (associated with Plummer-Vinson syndrome) **for PC tumours**"*
and *"**PC lesions are predominant in FEMALES**"*. The patient is a 50-year-old woman.

**The `answer` does not move**, and the resolution is in the stem: it says **"given the attached
figures"**, and the figures show an exophytic mass **beside the glottis** — the pyriform gutter, not
behind the cricoid. The pyriform sinus is also the **commonest** subsite in the deck's own ranked
list. **So the question is telling you to answer from the picture where the picture and the
epidemiology disagree** — and both halves are recorded in `explanation`, per the standing rule.

### ⚠️⚠️ BOTH HOLD BOTH ENTRIES SHARE ONE SHAPE: THE HELD ENDPOINT ENTRY HAD ALREADY WRITTEN DOWN THE ANSWER HOUSE WOULD LATER KEY

This was known for `S62` and is now confirmed for `S63` as well, which makes it a pattern rather than
an anecdote.

- **`enthd-sel-62` / `entep-ear-86`.** The held entry's explanation, written from the slides in an
  earlier session, says the discrimination is with *"necrotizing (malignant) otitis **externa**…
  **Pseudomonas aeruginosa**, in the **external** canal… Reading 'media' versus 'externa' is the whole
  question."* **That is a description of House's key, written before House was read here.** ✅ Verified
  myself, not on the brief's word: `necrotiz|necrotis` returns **exactly two hits across all 34 cached
  ENT decks** — `L17,18`:182 (*malignant external otitis*) and `necrotizing vasculitis` in `L30` — so
  **the phrase *acute necrotizing otitis media* is in no cached deck.** `L17,18`:190 gives Pseudomonas
  to the external disease; `L21.1`:36 puts *B hemolytic strept* first for otitis media.
- **`enthd-sel-63` / `entep-mfe6-1`.** The held entry's explanation reasons: *"the one that is not is
  **option c, 'High incidence of complications'**"* — **and then records the bank's printed key d
  anyway**, which is exactly what the rule requires. **House keys c.** `L16` prints *profuse* and
  *odourless* **in the same line** of the tubotympanic panel, which is why the endpoint key is the one
  under pressure; the held entry already carried a disputed-key note with four sources against it,
  and this is a fifth — **the first from another question bank.**

**Neither key moved. Each entry names the other.** A defective key is noted, never disputed.

### ⚠️ Three spellings of one organism across three sources

House prints **Pseudomonas Aeuroginosa**, the endpoint file prints **Pseudomonas Aeruginosa**, and
`L17,18`:190 itself prints **Pseudomonas aeroginosa**. **None of the three is the standard spelling**
and all three are transcribed as printed. Recorded because this is the class of difference that
defeated a fold twice on this project — and because `norm.js` now collapses exactly this shape
(same first letter, edit distance ≤2, sorted-letter distance ≤2).

### Where my own staging was wrong, caught while writing

- **`enthd-thr-700` is NOT the antecedent of `enthd-thr-702`.** The back-reference points at the
  bank's **Q701 on book p.176** — the 50-year-old who neglected follow-up — not at Q700 on p.175.
  **Q701 folded**, so it is invisible to the drafter and its vignette had to be supplied.
- **`enthd-thr-689` is a third back-referencing stem, and my annotation had missed it.** *"In the
  previous case, if the first line of management wasn't successful…"* — its antecedent is
  `enthd-thr-688`, which is at least in the same batch. **Two back-references were annotated; there
  were three.**
- **`enthd-ear-62` does not exist**, so a sentence asserting it as a live collision was wrong. The
  real collision is at `enthd-ear-63`. **Caught by the dead-id delta guard, which is the second time
  today that guard has earned its keep.**

### The splice harness

`splice-tail.js`, built on `splice-thr.js`'s guards (parse before write, count match, sparse-hole scan
**by index**, duplicate ids) plus five specific to this batch: **the drafted id set must equal the 25
the adjudication asked for**, derived from `draft-tail.json` rather than typed · `answer` in range of
its own `options` · `image`/`imgAlt` paired, **extension-free**, and present on disk · **no `alsoIn`**
· every `chapter` resolvable in `modules.js` · dead backticked ids as a delta.

⚠️ **Refining the dead-id guard to resolve image basenames against `app\assets\q\` dropped its
pre-existing count from 14 to 6** — the other 8 were never ids at all. **A guard that is merely
tolerant of noise reports noise; one that classifies it reports faults.**

**The four crops were then validated as files, not just as names:** all four are valid JPEGs
(`FFD8`…`FFD9`) at 560×488, 560×358, 560×480 and 560×486, and `qImgSrc('q-hd-174a')` composes
`assets/q/q-hd-174a.jpg`. **This matters because a broken `<img>` renders as nothing and raises no
console error** — the boot probe would have said 0 errors either way.

---

## §16 — ENT THEORY'S TWO STANDING DEBTS ARE CLOSED, AND ONE OF THEM WAS ALMOST ENTIRELY ALREADY PAID (2026-08-24)

The two debts `MEMORY.md` carried against ENT theory — **26 open §14.5 deferral rows** and
**34 bold-led paragraphs over the word cap across 14 chapters** — are both at zero. Boot from
`file://` after all of it: **0 console errors, 876 rules, 3 `max-aspect-ratio:5/4` blocks,
4 modules, 153 chapters, 153 theory chapters, 1,603 sections, 2,699 questions, 89 cases.**
All 30 ENT chapters re-printed: **261 pp**, up from 259.

### ⚠️⚠️ 25 OF THE 27 OPEN RECEIVERS WERE ALREADY DELIVERED — THE DEBT WAS A BOOKKEEPING DEBT

26 register rows, but 27 receiver-obligations: one row (`ent-csom` → `ent-otalgia` / `ent-earanat`
/ `ent-facial`) carries three. **Every one was settled by READING THE RECEIVING CHAPTER in the
shipped `app\data\theory.ent.js`** — 11 chapters, ~28,000 words — not by grepping for the row's
own words. **Twenty-five were found already written, in full, most of them at the time the
receiving chapter was merged; the register was simply never ticked.**

**Only two were genuinely short, and both are now written:**

| Row | What was missing | Fixed in |
|---|---|---|
| `ent-hoarse` (L2) → `ent-paedlar`, *"congenital laryngeal web in full"* | `paed-5` had the recanalisation aetiology, the four sites with the 1 : 3 subglottic association, and three operations. **L2's own treatment slide also prints "Mild cases: no Treatment" and "Tracheostomy in severe cases"**, and its clinical slide prints **stridor is RARE except with a posterior interarytenoid web** | two bullets in `paed-5`; `Src` now `L6; L12; L2` |
| `ent-nasalmass` (L26) → `ent-tonsils`, *the adenoid slides* | Adenoid facies and both obstructions were already whole in `tons-13`, adenoidectomy in `tons-14`. **The caption pair itself was named nowhere** | two bullets in `tons-13`; `Src` now adds L26 |

⚠️ **L26 PRINTS THOSE TWO CAPTIONS OVER PHOTOGRAPHS AND NO PROSE AT ALL** — `Non – obstructive
adenoid` / `Obstructive adenoid`, then `Adenoids …` twice, and nothing else. So the captions are
named as the deck's own and the reading behind them is supplied and tagged, per the standing gap
rule. **And the L29 row is worth recording for what the donor actually held:** `adenoid` occurs in
`L29` **exactly once**, as *"Adenoiditis"* in the complications list of acute rhinitis — one word.

### ⚠️⚠️ MY OWN PROBE WAS WRONG TWICE, IN TWO DIFFERENT WAYS, BEFORE IT WAS RIGHT ONCE

The first pass built a term list per row and grepped the receiving chapter. It failed as an
instrument twice:

- **⚠️ IT WAS CASE-SENSITIVE, AND THESE CHAPTERS SHOUT.** `Santorini` reported **ABSENT** while
  `earan-2` prints **`**FISSURES OF SANTORINI**`** — and the proof was already on my screen, inside
  *another term's* context dump, two lines below the false absence. **A case-blind check on a corpus
  that uses ALL-CAPS for emphasis manufactures absences.**
- **⚠️ THREE OF ITS "MISSES" WERE WORDS I INVENTED, NOT WORDS THE ROW PROMISED.** `Romberg` for the
  L20 row — `romberg|unterberger|past.point|finger.nose|dysdiadoch` returns **zero hits across
  `L20` and `L13,14` together**, so it is in no deck and was never owed. `functional|non-organic`
  for the seven hearing-loss types — the deck's seventh type is **PSYCHOGENIC**, which `hear-1`
  prints. `up and back` — `earan-3` prints **UP · OUT (laterally) · BACK**.

**A term list is a search aid. The row's own text is the specification, and the chapter is the
evidence.** The three surviving misses after the case fix were all false; the two real shortfalls
were found by *reading*, and neither would have shown up as a missing term.

### The 34 over-cap paragraphs, and the 40 nobody had counted

§14.3a: *"Hard cap ~45 words per paragraph. A bullet is ≤ ~15 words."* The recorded debt was framed
at **55** words and the audit reproduced it exactly: **34 bold-led paragraphs over 55, across 14
chapters.** All 34 reshaped into a lead + bullets. Then, because the rule's own number is 45, the
audit was re-run at 45 and found **40 more**, between 46 and 55 words, across 16 chapters. Those
were reshaped too, plus **one non-bold-led paragraph (`otor-8`, 51 w)** that a bold-led audit can
never see. **Final: 0 paragraphs of any kind over 45 words in all 30 ENT chapters.**

- **This was a LAYOUT edit and the applier enforced that**, not the author: every patch had to
  match its target **exactly once** in the file, and the reshaped block had to carry **every token**
  of the original. A dropped word aborted the run before a byte moved.
- ⚠️ **THE CONTENT GUARD'S FIRST VERSION FAILED 25 OF 34 PATCHES, AND EVERY ONE WAS A FALSE
  ALARM** — it counted `·` and trailing full stops as content, so `adults` against `adults.` read
  as a loss, and a vanishing `·` read as a loss when **breaking the `·`-chained mega-paragraph is
  the whole point of §14.3a**. Normalised to lowercase alphanumerics, all 74 passed with zero
  losses. **A guard tuned so tight that its failures are all false teaches you to ignore it.**
- **No new long bullets were created**: bullets over 55 words stand at **43**, exactly the count
  measured before any edit, out of 1,315 (was 1,106).
- Rendered and **LOOKED AT**, not just counted: `ent-tonsils` p.6 prints SCARLET FEVER as a
  coloured lead over six bullets where it was a 104-word slab.

### ⚠️ `Src: L6; L12` OCCURS SIX TIMES IN THE FILE — A CITATION LINE CANNOT ANCHOR AN EDIT

Round three had to extend two `Src:` lines. Both aborted on the uniqueness guard: `Src: L6; L12`
appears **6×** and `Src: L3; L1.2; L9` **2×**. Each edit was rebuilt to span **the last bullet
through its `Src` line**, which is unique — and the two edits per section had to become **one
patch**, because two overlapping patches break the second once the first has been applied.

### ⚠️⚠️ `ent-tonsils` PRINTS AT 16 pp AND THE SPLIT CEILING IS 13 — AND IT IS **NOT** BEING SPLIT

Measured, not estimated. It was **15 pp before** this session's reshape and is **16 pp after**, so
it has been over the 2026-08-15 *"every chapter ≤13 pp measured by printing"* ruling since it was
written. **It is deliberately left alone, and the reason is a measurement:**

> **`ent-tonsils` is the 8th largest of all 153 theory chapters by body words (3,923).** Seven
> chapters shipped **above** it — `ps-somato` 4,433 · `ps-devices` 4,195 · `ps-pharm` 4,181 ·
> `nr-movement` 4,075 · `nr-cns` 4,070 · `ps-schizmgmt` 4,045 · `ps-emerg` 3,981 — and every one
> of those was written **after** the ≤13 pp ruling, in modules that were measured by printing.

So this is **a corpus-wide question about the ceiling, not an ENT defect**, and splitting one ENT
chapter to a standard the other three modules are not held to would make the corpus less
consistent, not more. The seam exists and is clean if it is ever wanted — **`tons-1`…`tons-12` (the
tonsil) and `tons-13`/`tons-14` (the adenoid), no section reordered**, `SCHEDULE` untouched because
its text is free display text never matched to a chapter id (verified in `defaultSchedule()`), and
**24 of the 146 questions link only to the adenoid pair** and would move, 13 straddle and would
stay. **User's call, not mine.**

### Measured and recorded, not acted on

- **113 bold leads across the 30 chapters have no `mdLead()` anchor** — no `:` or `—` inside the
  first 44 characters and the whole bold longer than 44, so the block renders without its coloured
  marker. **This is not a tracked debt and §14.3a's own text concedes it** ("the median bold-opening
  line carries 71 characters"). Fixing it means rewriting 113 lead sentences; recorded here so the
  number is visible.
- **43 bullets exceed 55 words**, the longest 87 (`tons-14`). Pre-existing and unchanged.
- **39 §14.5 rows remain open across the register — all of them ophthalmology.** ENT is at zero.

---

## §17 — OPHTHALMOLOGY REOPENS: HOUSE CH.1 MERGED, AND THE MODULE'S BLIND DECKS FINALLY MEASURED (2026-08-24)

ENT closed the same day (§16) and the module turned to ophthalmology, ~1,918 bank questions against
the **27 September** exam. Two things happened before a single new question was transcribed, and both
were corrections to what the project believed about its own state.

### ✅ 56 House entries were finished, adjudicated, and had simply never been spliced

`house-c1.draft.js` (22) and `house-c1b.draft.js` (34) held **56 complete, validated entries** for
House Part A chapter 1, *"Examination of the eye"* — drafted 2026-08-12, swept against the 138 Grade
Gain entries the same week (nothing above 0.60, four pairs read by hand, all four held), and then
left on disk when that session ended. **The adjudication was done; the merge was not.**

Spliced now. **ophtho 138 → 194**, corpus **2,699 → 2,755**, per-bank `gradegain 138 · house 56`.
**Marker delta +56, predicted and observed** — this chapter prints no explanation box and no figure
anywhere across its six PDF pages, so all 56 are authored and every one carries the marker.
Validation after the splice: **0 BAD, 0 dead backticked ids, 0 sparse holes, every `answer` in
range.** Boot from `file://`: **0 console errors, 876 CSS rules, 3 `max-aspect-ratio:5/4` blocks,
4 modules, 153 chapters, 1,603 sections, 89 cases.**

⚠️ **A FINISHED BATCH THAT IS NOT MERGED IS INDISTINGUISHABLE FROM AN UNFINISHED ONE, AND THE RESUME
FILE SAID "STAGED, UNMERGED" FOR TWELVE DAYS.** The only way to tell was to parse both files and
count: 56 entries, ids 1–56 contiguous with no gaps, every one carrying `source`, `explanation` and
the marker, mean explanation 532 words. **Parse the draft before believing the note about it.**

### ⚠️⚠️ A FAILURE LIST BUILT FROM FAILURE SIGNALS IS NOT A COVERAGE MEASUREMENT — EIGHT DECKS WAS ELEVEN

`resume-ophtho.md` carried a list of *"eight decks needing a visual read, one done, seven left"*,
assembled from two signals: **never cached**, and **the cache is a CamScanner watermark**. Sweeping
every deck for **characters per slide** instead — healthy prose here runs 500–3,000, and anything
under ~200 was opened and looked at — found **eleven decks and 574 slides.**

**Five of the eleven were on no owed list anywhere, because their extractions had SUCCEEDED.** They
are simply near-empty:

| Deck | Slides | chars/slide | Why it was invisible |
|---|---|---|---|
| `L1,2) Ocular Anatomy…` | **136** | 146 | the module's **foundational deck**; 83 of 136 slides extract blank under the identical running header *"Anatomy & Physiology"*, so page-title triage cannot rank it |
| `L29) Sqint I` | 35 | 63 | Galal picture deck |
| `L22) Pupil and Visual pathway` | 25 | 97 | the visual pathway is a diagram |
| `L30) Squint II` | 23 | 66 | Galal picture deck |
| `L21) Optic Nerve` | 20 | 30 | listed as a watermark — **it is not**, see below |

**The instrument that finds these is a RATIO AGAINST SLIDE COUNT, never a look at file size.**
`L21) Optic Nerve.txt` is 615 bytes — big enough to look real in a directory listing, and 30
characters a slide.

⚠️ **AND ONE ROW OF THE OLD LIST WAS SIMPLY WRONG.** It described `L21) Optic Nerve.txt` as *"22
blank lines, a title and one stray line"*. **Read: all 615 bytes are content** — *Normal Optic Disc*,
the five manifestations of optic nerve dysfunction (VA, colour vision, contrast sensitivity, field
defect, RAPD), *Optic Disc Edema — Papilloedema / AION / Papillitis*, and *Optic Atrophy — Primary /
Secondary / Consecutive / Glaucomatous*. It is a **complete extraction of a sparse picture deck**,
which needs the same fix as a failed extraction and is a different fault. Corrected in
`resume-ophtho.md`.

### ✅ THE TWO `.pptx` DECKS ARE AS BLIND AS THE WORST PDFs, AND POWERPOINT SOLVES THEM

`L5) Eyelid disease` (47 slides, **127 media files for 365 words**) and `L6) Conjunctiva` (66 slides,
**73 media files for 343 words**) extract cleanly from `ppt/slides/slide*.xml`, so **they never
appeared in any failure list** — while carrying more than one picture per slide against five to eight
words of text.

**PowerPoint is installed on this machine**, so they are exported to PDF and then rendered like any
other deck:

> `$p = $app.Presentations.Open($src, $true, $false, $false)` — the `$true` is **ReadOnly**
> `$p.SaveCopyAs("$dest.pdf", 32)` — **`SaveCopyAs`, never `SaveAs`**, because `SaveAs` rebinds the
> open presentation to the new path

Verified: **47 and 66 pages out, matching the slide counts exactly, and both source `.pptx` mtimes
unchanged** (May 1 and May 3). ⚠️ PowerPoint reported `slides=0` for the second deck and then died
with *"The RPC server is unavailable"* — **after** writing a complete, correct PDF. **A COM object
tearing down reports nonsense; check the artifact on disk, not the return value.**

### The instruments — `<scratch>\oph\`

| Tool | What it does |
|---|---|
| `lib.js` | loaders. Reads each data file's `var` binding by name; walks the corpus **by index, never `Array.filter`** |
| `sheet.js` | renders a deck and tiles it into four-up contact sheets, **burning the slide number into each cell** |
| `qpages.js` | renders a **book**-page range of a bank, doing each file's own offset arithmetic and always rendering one page past |
| `sweep.js` | the six-stage duplicate sweep, ported from the ENT House harness |
| `splice.js` | appends a drafted block to `questions.ophtho.js` behind five guards, rolling back on any fault |
| `validate.js` | §7 plus the marker count, misplaced markers, dead ids and per-bank counts |
| `norm.js` / `normtest.js` | the typo-, accent-, punctuation- and British/American-tolerant comparator. **39-case self-test passes unchanged on this module** |

⚠️ **`sheet.js` BURNS THE SLIDE NUMBER INTO EVERY CELL, AND THAT IS NOT DECORATION.** A four-up sheet
carries no other way to tell slide 83 from slide 87, and every agent is told to *read the number off
the image rather than compute it* — a transcription that silently slips by one is unfalsifiable
afterwards.

### ⚠️ Five faults in my own instruments, found by running them

1. **`splice.js` produced a file that would not parse**, because the last live entry ends `}` with no
   comma — the comma that separated it from its neighbours is the one the closing `];` follows.
   Appending without a leading comma yields `} { id:` . Now detected structurally; the run rolled
   itself back rather than shipping the damage.
2. **The dead-id check reported two dead ids that are not ids.** The pattern allowed a trailing
   hyphen, so it matched backticked **prefixes** the prose deliberately quotes — `` `enthd-sel-` ``,
   `` `enthd-ear-` ``. Last character must be alphanumeric.
3. **The theory binding is `T_<MOD>`, not `TH_<MOD>`, and it is an OBJECT KEYED BY CHAPTER ID, not an
   array.** The first version guessed the name, got `null`, and **silently added no theory section id
   to the known set.** A dead-id check resolving against a set that quietly lost a whole file is
   exactly the shape this project has been bitten by six times: *the report still looks complete.*
4. **"Ask ChatGPT" is not automatically residue in this corpus.** The naive sweep flagged four ENT
   endpoint entries — and all four are correct: **those printed boxes were themselves pasted out of a
   chatbot and literally end with those words**, and the entries record it, in quotation marks, as a
   source defect. The check now flags only an occurrence with no annotation around it.
5. **The staging shape keys by LETTER (`'C'`) and the draft shape keys by INDEX (`2`).** Reading one
   as the other keys every question to option A, and stage B then matches on a key nobody printed.

✅ **The sweep was self-tested against a known-merged batch** — `gg-t3.array.js`, whose 26 questions
are already live — and returned **23 stage-A exact self-matches**, plus the recorded false-positive
pair `opqb-t3-117`/`opqb-t3-138` at **C = 0.91**, which is the documented menu-recycling shape
behaving exactly as `resume-ophtho.md` describes it. The three that did *not* exact-match are the
three whose stems were repaired at drafting time — which is the intended outcome, and is itself a
check that the repairs are still in the live file.

### ⚠️⚠️ SEVEN AGENTS DIED ON THE SESSION USAGE LIMIT AT ONCE — AND THE "WRITE INCREMENTALLY" RULE TURNED FOUR TOTAL LOSSES INTO FOUR RESUMABLE PARTIALS

Every brief carried this paragraph:

> **⚠️ WRITE INCREMENTALLY.** Whatever is on disk when you stop must be a usable partial that says
> how far it got. A complete transcription held in memory and never written is worth nothing.

The limit hit with seven agents live. What was on disk afterwards:

| Deck | Written | Outcome |
|---|---|---|
| `L9) lacrimal system.` | 33 of 33 | ✅ complete |
| `L13,14) Uvea & Sclera` | 41 of 41 | ✅ complete |
| `L24) Ocular tumors.` | 78 of 78 | ✅ complete |
| `L1,2) Ocular Anatomy…` | **80 of 136** | resumable |
| `L6) Conjunctiva` | **40 of 66** | resumable |
| `L5) Eyelid disease` | **20 of 47** | resumable |
| `L27,28) Problems of External Appearance` | **20 of 70** | resumable |
| `L21`, `L22`, `L29`, `L30`, GG t4 | 0 | nothing written, relaunch from scratch |

**All four partials ended at a complete slide block**, so each was resumed by an agent told to read
the existing header, match its conventions exactly, and `Edit`-append from slide *N*+1 — never
`Write`, which would have replaced what was there. **160 slides of finished transcription survived a
hard kill.** Against the 2026-08-24 ENT experience, where five agents died on transient 529s
*before writing a byte*, the difference is entirely the instruction to write as you go.

⚠️ **The corollary is the older rule, and it held again: A DEAD AGENT'S FILE IS USUALLY WORTH
VALIDATING BEFORE IT IS REWRITTEN.** Three of the seven were **complete** and their status messages
never said so — one had reported *"Now appending slides 12 onward"* and had in fact written 20.
**The status message is a stale snapshot; the file is the truth.**

### ⚠️⚠️ FOUR CORRECTIONS TO THE CONTACT-SHEET METHOD, ALL FROM ONE DECK (`L6) Conjunctiva`, 66 slides)

The four-up contact sheet at 110 dpi was carried over from ENT and treated as *the* way
to read a blind deck. It is the right **index** and it is not always the right **reading
surface**, and three other faults sat underneath that.

1. **⚠️⚠️ "IGNORE `raw/`" WAS WRONG ADVICE, AND IT WAS IN EVERY BRIEF.** At ~760 px a
   2×2 cell cannot resolve the distinctions a picture deck turns on — Trantas dots
   against ordinary limbal thickening, the margin of a corneal plaque, the foam texture
   of a Bitôt spot. The agent used the sheets as an index and then **cropped and
   upscaled specific regions of the individual `raw/s-NN.png` renders**, and said
   plainly that obeying the instruction would have cost real content. **The sheet finds
   the slide; the single-slide render reads it.** Two other agents did the same thing
   unprompted (`L9` re-rendered 15 slides at 1100 px, `L1,2` cropped five).

2. **⚠️ A SLIDE CAN BE AN EXACT REPEAT OF AN EARLIER ONE, AND ONLY PIXELS CATCH IT.**
   `L6` slide **52** is slide 50's photograph with the title removed — mean absolute
   difference **69**, non-zero only because it is rescaled and shifted — and slide
   **61** is byte-for-byte identical to slide 59. Both were recorded as repeats rather
   than described again as new teaching. **A transcription that re-describes a repeat
   invents a second teaching point that the lecturer never made.**

3. **⚠️ A THIRD GAP TYPE: IMAGE OVERFLOW.** The two recorded kinds are
   `[text cut off in the original]` (text past the slide edge) and
   `[obscured by the image]` (text under an overlaid picture). `L6` slides 55 and 56
   have an **image** running off the slide edge — panel B of 55 is almost entirely
   outside the slide. That is neither, and forcing it into either would have been
   false. Recorded as image overflow in its own words.

4. **⚠️⚠️ A NEGATIVES LIST POISONS ITS OWN VERIFICATION.** Grepping the finished file
   to check a "term X is absent" claim returns a hit **against the negatives list
   itself**. Every count must be taken over the SLIDE BLOCKS ONLY, with the closing
   list excluded — and the file must say that is what was done, or the next reader
   re-runs the grep and reaches the opposite conclusion. **This is the same shape as
   the ENT dead-id check that had to become a delta rather than an absolute: an
   instrument that measures a file it is written into must exclude itself.**

**And the finding that makes `op-conj` expensive:** apart from the author's credentials
on slide 1, **no slide in `L6` carries a sentence — 29 titles, 37 untitled slides, 64
pictures, zero bullets.** Not one organism is named anywhere in the deck (Staph,
Strept, Neisseria, Haemophilus, Koch-Weeks, Moraxella, adenovirus, Herpes: all zero),
no grading system, no investigation, no drug, no dose, and no cause for pterygium, the
allergic slides, symblepharon or subconjunctival haemorrhage. **The eponymous signs are
photographed and never named:** `Trantas` returns zero while the chalky limbal dots
occupy four slides, one with an arrow pointing at them; `Herbert`, `Arlt` and `shield`
likewise zero. **Bitôt Spot is the deck's only printed eponym.** Grade Gain devotes
**65 questions** to this organ, so the book chapter — ch.6, printed 82–95, which does
carry the WHO TF/TI/TS/TT/CO grades and the SAFE strategy — is the working source, per
the user's 2026-08-18 ruling that the book is the module's main reference.

### ⚠️⚠️ THE HEREDOC BACKSLASH COLLAPSE FIRED FOR THE FOURTH TIME — AND THIS TIME THE CHECK SAID CLEAN

`MEMORY.md` carries this trap as one of the project's four measured escaping problems: *"the Bash
tool's quoted heredoc collapses `\\` to `\`, corrupting paths, citations and MEMORY.md itself —
fired FOUR times… GREP EVERY PATH AND REGEX IN THE FILE AFTER WRITING IT."* I knew it, I wrote the
generator through a heredoc anyway, and then I ran a verification that could not see the damage.

**What it did to `resume-ophtho.md`, in a block of four paths:**

| Intended | Written |
|---|---|
| `content\ophtho\qb-pages\*.array.js` | `contentophthoqb-pages*.array.js` |
| `<scratch>\oph\bank\` | `<scratch>oph` + **0x08** + `ank` |
| `<scratch>\oph\qpages.js` | `<scratch>ophqpages.js` |
| `progress\briefs\ophtho-bank-brief.md` | `progress` + **0x08** + `riefsophtho-bank-brief.md` |

⚠️ **THE WORST FORM YET: WHERE THE NEXT CHARACTER WAS `b`, `\b` BECAME A REAL BACKSPACE (0x08) AND
WAS WRITTEN INTO THE FILE AS A CONTROL CHARACTER.** The earlier three firings only dropped the
backslash. A control character in a markdown file is invisible in most viewers, survives copy-paste,
and makes the path unusable in a way no reader can diagnose by looking.

**⚠️⚠️ AND HERE IS THE REAL LESSON. THE POST-WRITE CHECK REPORTED CLEAN.** It was
`grep -c 'u2705\|u26a0\|ufe0f'` — a scan for leaked `\uXXXX` escapes, which is the failure mode the
*previous* generated write had shown. It found none, printed `escape leaks: 0`, and I believed it.

> **A VERIFICATION THAT CHECKS ONE FAILURE MODE REPORTS SUCCESS FOR EVERY OTHER ONE.**

That is the same shape as the six instruments already recorded in `MEMORY.md` as having been blind
to the exact fault they were built to catch — and it is the seventh. The check was not wrong about
what it measured; it was wrong about what it was taken to mean.

**The two checks that would have caught it, and are now the standing pair after any generated write:**

1. **Grep the PATHS themselves** — `content\`, `progress\`, `<scratch>\` — not a proxy for them.
2. **Assert that no control character below 0x20 other than tab, LF and CR survives anywhere in the
   file.** Five lines of JavaScript, catches every variant of this trap at once, and is now in
   `<scratch>\oph\unbs.js`.

**And the standing preference stands, restated because I did not follow it:** anything containing a
backslash goes through the `Write` or `Edit` tool, never through a heredoc. The generator scripts in
`<scratch>\oph\` were written with `Write` for exactly this reason; the one that corrupted the file
was the one I typed into a heredoc because it felt small enough not to matter.

### The bank stream, 2026-08-24 — 138 → 279 questions

| Batch | Printed | Written | Folded | Boxed | Marker Δ | Notes |
|---|---|---|---|---|---|---|
| House ch.1 "Examination of the eye" | 56 | 56 | 0 | 0 | **+56** | staged 2026-08-12, adjudicated, **never spliced** |
| GG t4 "Lacrimal System" | 26 | 26 | 0 | 6 | **+20** | contents exact; "Page As" **correct** |
| GG t7 "Sclera" | 8 | 8 | 0 | 3 | **+5** | contents exact; "Page As" **correct** |
| GG t8 "Cornea" | 52 | **51** | **1** | 11 | **+40** | first fold in the module |

**Every marker delta was predicted before the splice and observed after it.** Corpus **2,699 → 2,840**;
ophtho **138 → 279**; **26 of 36 ophtho chapters** now hold questions, up from 23.

#### ⚠️ THE CONTENTS COUNT HAS NOW BEEN EXACT SEVEN TIMES RUNNING, AND THE "Page As" FIGURE IS THE ONE THAT LIES

Printed counts: **71, 41, 26, 26, 65, 52, 8** — every one exactly as promised. ENT's Grade Gain was
wrong **17 times in 21**, always upward, so this bank is behaving differently and the habit of
counting what is printed still stands.

**The "Page As" figure is the unreliable one, and it is unreliable in BOTH directions:** it lied on
t2 (14 of 41 keys on the page after the one stated) and t3 (11 of 26), and was **correct on t4, t7
and t8**. **Render one page past, every time, and record which way it went** — three correct
readings in a row are not a pattern to trust.

⚠️ **DEFECT 2 RECURRED ON t8: a question tail sharing the first answer page.** Book p.52 carries
**Q348 in its left column** with the *Cornea / Answers* banner in the right. Reading only the right
column of the first answer page loses a question, exactly as it nearly did on t3.

⚠️ **SHOW-THROUGH IS NOT CONTENT.** On t4 and again on t7 the reverse of the sheet is faintly visible
behind the Answers banner — t7's is p.44's Q293 stem with its options A and B. Both staging headers
name it so a later reader does not transcribe the back of the page.

#### ⚠️⚠️ THE MODULE'S FIRST FOLD IS THE "CONVERT AUTHORED TO SOURCED" SHAPE

`opqb-t8-327` (book p.49) is a **within-bank reprint** of `opqb-t2-77` (book p.9): the same 46 D
vertical against 45 D horizontal keratometry, the same emmetropic retinoscopy, **the same four
options in the same order**, the same key, the same chapter. **A within-bank reprint takes NO
`alsoIn`** — it is held once; ENT recorded six of these.

**But a fold is never just a deletion, and two consequences followed from this one:**

1. **p.49/p.53 PRINTS AN EXPLANATION BOX AND p.14 DOES NOT.** The box was folded into `opqb-t2-77`
   verbatim, at the top where a printed box belongs, with the standing separator beneath it. The
   held entry got **richer**, not merely deduplicated — 614 → 643 words.
2. **THE AUTHORED MARKER CAME OFF.** `opqb-t2-77` had correctly ended with *"prints no explanation
   here"*, because its own page prints a bare key letter. **The bank does print an explanation for
   this question after all.** A marker left on a now-sourced entry is a false claim about the source,
   and the marker count is audited both ways.

Its `source` now names both printings, because a question the bank prints twice is a fact about the
bank.

#### ✅ Two guards earned their keep on that single fold

- **⚠️ THE MARKER STRING OCCURS 151 TIMES IN `questions.ophtho.js`** — once per authored Grade Gain
  entry. The first strip attempt **aborted on the uniqueness guard**, which is precisely what it is
  for: stripping the first of 151 matches would have silently un-marked an unrelated question. The
  edit was re-anchored on this entry's own closing sentence *through* the marker.
- **⚠️ `opqb-t8-317` CITED THE FOLDED ID** mid-sentence — *"`opqb-t8-327` is that arithmetic made
  into a question"*. Caught by grepping the drafted block **before** splicing and re-aimed at the
  fold target. **Second time in the project this has been caught pre-splice rather than repaired
  afterwards.** One command; always run it.

#### ⚠️ Two of my own briefs were wrong, and both were caught by the agent reading the source

- **THE NUMBERING.** I briefed topic 7 as opening at **Q165**, reasoning that topic 4 ended at Q164 —
  and forgot that topics 5 (59 q) and 6 (65 q) intervene. It runs **Q289–Q296**, and topic 8
  **Q297–Q348**. **Read the number printed under the topic banner; never compute it.** The correction
  also fixed topic 6's range in flight: it must end at **Q288**.
- **THE CHAPTER SPLIT.** I described `op-cornea-surg` as "transplantation, refractive surgery, CXL".
  `modules.js` titles it **"Cornea — ectasia, grafts and refractive surgery"**, so the eight
  **keratoconus** questions belong there too. **Read the chapter titles in `modules.js`; do not
  paraphrase them from memory.**

#### Divergences recorded, keys never disputed

- **t8 Q300** keys *Pseudomonas*; `L15,16` attaches *"can penetrate intact epithelium"* to
  **N. gonorrhoeae alone**. Measured: *intact epithelium* returns **one hit across all 29 decks and
  12 book chapters**, and it is about a pseudomembrane in ch.6.
- **t8 Q324** keys *"typical corneal dendrites may occur"*; the deck calls the HZO lesion a
  **pseudo**dendrite — *"smaller, stellate, lacks terminal buds"*. Key stands; the other three
  options are each contradicted outright.
- **t8 Q315 vs Q328** — a bandage lens endorsed in one, patching contraindicated in the other;
  reconciled in-entry as **bandage lens vs occlusive pad**, and the tension recorded rather than
  smoothed away.
- **t4 Q152/Q153** — the same 67-year-old keyed **NLD obstruction** at one and **functional
  epiphora** at the next, with Q153's option B restating Q152's key verbatim. Both keyed as printed;
  each entry names the other.
- **t4 Q141** — the bank's box sets the conservative window for congenital NLD obstruction at
  **6 months**; **book p.67 sets one year**. `L9` gives no age threshold at all.

⚠️ **Measured and worth keeping: `Fleischer`/`Fleisher` returns ZERO across all 29 cached decks and
12 book chapters** — neither the corneal iron ring nor the Kayser–Fleischer ring is taught anywhere
in this module, though the bank prints *"Kayser Fleisher ring"* as an option.

#### ⚠️ Why each zero-fold is a zero, measured rather than shrugged at

- **t4:** **18 of 19 lacrimal terms return ZERO** across the 194 held questions — `dacryocyst`,
  `nasolacrimal`, `canalicul`, `schirmer`, `epiphora`, `punctum`, `jones`, `DCR`, `regurg`,
  `hasner`, `krause`, `sac` and more. `lacrimal` itself returns 4, all from the orbit topic's
  lacrimal-gland-tumour menu. **The lacrimal system had simply never been asked before.**
- **t7:** `phenylephrine`, `scleromalacia`, `blue sclera` and `necrotiz`/`necrotis` all **ZERO**
  across 220 held; `sclera`, `scleritis` and `episcleritis` together return 5, all from red-eye
  differentials.

The sweep's false positives behaved exactly as documented: t4's single candidate was the
**positional-vocabulary** shape at F 0.57 (*superior/inferior/medial/lateral* shared between lacrimal
ducts and thyroid EOM involvement), and its one self-sweep hit at stem 0.75 was a **correctly
repaired back-reference** — one vignette, two different questions, different options, different keys.

### ⚠️⚠️ A SECOND USAGE LIMIT, AND AN EXCEPTION TO "A DEAD AGENT'S FILE IS USUALLY COMPLETE"

The standing rule, paid for six times in ENT, is *"a dead agent's file is usually complete — validate
from disk before rewriting."* It held again this morning, when four agents left 160 finished slides
between them. **But the second usage limit of the day, at 8:50 pm, killed two agents whose LAST WORDS
NAMED A FAULT THEY WERE MID-WAY THROUGH FIXING:**

> *"I reordered Q374's options — that was wrong. Fixing it back to printed order."*
> *"Now let me fix the slide 27 heading, which asserted a diagnosis I could not actually read."*

**That is the opposite case, and it inverts the rule.** The file is not *probably fine*; it is
**known bad at a named location**, and the fix is owed. Both were checked immediately rather than
assumed either way:

- ✅ **Q374 was already correct.** The revert had completed before the kill. Verified not by reading
  the agent's words but by comparing all 50 drafted entries against the verbatim staging record.
- ❌ **The slide-27 heading was NOT fixed.** It still read *"histology and three **destructive
  lid-margin tumours** (A)–(D)"* while the body beneath it said, carefully and at length, that the
  printed caption is illegible at 300, 400 and 600 dpi and that it would not guess the words.
  **The heading was asserting exactly what the body declined to assert.** Corrected to *"three
  lid-margin lesions"*, with a note in place explaining why.

> **⚠️ A HEADING IS A CLAIM LIKE ANY OTHER, AND IT IS THE LINE A LATER READER QUOTES.** Panel C's lid
> margin genuinely is destroyed and the body says so as an observation of that picture — but
> promoting one panel's finding into a class for all three, in a heading, over a caption nobody can
> read, is how an invention enters a cache and is then cited as source.

**The rule, restated: read the agent's last words. If they name a defect, the file contains it until
proved otherwise; if they do not, the file is probably complete. Either way, check the disk.**

### ✅ `stagecheck.js` — the instrument the Q374 scare produced, and what it found in already-merged work

Written to answer *"did the reorder survive?"* and generalised: it compares a **draft** against its
own **verbatim staging record**, on three things that have each bitten this project.

1. **OPTION ORDER AND TEXT.** `answer` is an INDEX into `options`, so **reordering the options
   silently re-keys the question to a different answer.** The staging record is the printed truth.
2. **THE KEY.** Staging stores the printed LETTER, the draft a zero-based index. A mismatch ships the
   wrong answer.
3. **COVERAGE.** Every staged number drafted; nothing drafted that was never staged.

Option text is compared after stripping markdown emphasis and trailing punctuation only — the draft
legitimately bolds what the staging record, being verbatim, does not.

**Run retroactively over every merged topic**, which is the point of building it late:

| Topic | Verdict |
|---|---|
| gg-t9 (unmerged) | 50 of 50 drafted entries match exactly — **the Q374 revert had completed** |
| gg-t7 | ✅ clean |
| gg-t6 | ✅ clean — the only "not drafted" are **Q269 and Q277, the two folded** |
| gg-t8 | ✅ clean — the only "not drafted" is **Q327, the folded one** |
| gg-t4 | **two option-text differences, both deliberate and both correctly recorded** |

**⚠️ AND THE TWO gg-t4 DIFFERENCES ARE THE RULE WORKING, NOT BREAKING IT.** *"Fix errors, never
silently overwrite the source: transcription faults are repaired in place; where the source itself is
wrong, correct it and record what the bank printed, cited."* Both halves were done:

- `opqb-t4-148` ships *"There is probably no common canalicular obstruction"*; the bank prints
  **"there is no probably a common canalicular obstruction"**, and the entry quotes that, adding
  that read as intended the option is TRUE and **only the misprint stops it being a second correct
  answer.**
- `opqb-t4-161` ships *"superior fornix"*; the bank prints **"superior formix"** — **on the keyed
  option**, while B, C and D all print it correctly — and the entry says so.

**A check that flags a correct repair is not a false positive; it is the check asking you to show
the receipt.** Both showed it.

### ⚠️⚠️ 41 ENTRIES SHIPPED WITHOUT A MANDATORY MARKER, AND ONLY A SECOND AGENT'S EYE CAUGHT IT

Grade Gain topic 9 was drafted in two halves by two agents, a usage limit between them. The second
one opened its report with this:

> *"⚠️ The 50 existing entries carry ZERO no-explanation markers. `gg-t9.draft.js` had 0 occurrences
> while `gg-t4.draft.js` has 20, `gg-t7` 5, `gg-t8` 40. So ~41 unboxed entries in Q349–Q398 are
> missing a marker the brief calls not optional. I added it to my eight unboxed entries only and did
> not touch the 50. This is a debt for the hub."*

**It was handed a file with a convention in it and did not adopt that convention — it compared the
file against the standard and reported the difference.** Measured: 12 boxed of 61, so 49 entries owed
a marker and 8 had one. **Forty-one missing.**

⚠️ **The marker count is an audited invariant** (`marker delta = new entries − boxed`), so this would
have surfaced after the splice as a delta that did not reconcile — but it would have surfaced as a
number, at the end, with 60 entries to search. **It surfaced instead as a sentence, before the
splice, with the exact count attached.**

**The box list was confirmed TWO INDEPENDENT WAYS before anything was written**, because an error in
either direction is a fault — a marker on a boxed entry is a false claim that the bank prints
nothing, and a missing one is the fault being fixed. The staging header's list of twelve and a
structural scan for entries that had actually captured a printed box **agreed exactly**. `addmarker.js`
aborts if they do not.

### ⚠️ A FOURTH FOLD SHAPE: THE REORDERED REPRINT, WHICH MOVES THE PRINTED KEY LETTER

`opqb-t9-392` (book p.60) is `opqb-t9-355` (p.54) with **the same four options in a different order**.
Same stem word for word bar *"oedema"/"edema"*, same answer — and therefore **the printed key letter
moves from C on p.54 to B on p.60.**

> **REORDERED IS NOT REPLACED.** A replaced distractor makes a new question; a reordered option list
> is the same question wearing a different letter. Held once, no `alsoIn`.

**And it is the cleanest demonstration in the corpus of why a key LETTER is never the thing to
memorise** — the bank itself keys the same question two ways six pages apart. That observation is
kept in the held entry rather than lost with the folded one.

⚠️ **Its marker consequence is the MIRROR of the topic-8 fold, which is why both are worth having.**
On topic 8 the SECOND printing carried the box, so the held entry's authored marker had to come off.
Here the FIRST printing is the boxed one, so the held entry was already correctly unmarked and it was
the folded printing that carried the marker. **Check which printing is boxed before assuming a fold
has no marker consequence.**

### The crops — three more frames carried an answer caption

Six topic-6 figures were cut, verified and shipped, taking the corpus to **97 images**. The working
crops the drafting agent had cut for reading were **not** shippable:

| | What the working crop carried |
|---|---|
| **Q256** | `A. Chlamydia trachomatous` — **the keyed answer**, printed under the photograph |
| **Q288** | **TWO** full option lines — `A. Herbet pits in trachoma`, `B. Trantas dots in trachoma` |
| **Q254** | `A. Bilaterality` |

**That is the `opqb-t8-330` fault three more times**, and the app renders the figure **between stem
and options**, so each would have read as a caption naming an answer. **Four of the seven crops
attempted on this module have carried option text. Cut to the photograph's measured ink bounds with a
3 px pad, then LOOK at the result at shipping size** — an ink scan over the padded rows is the
confirmation, not the method.

✅ **Q254 and Q257 are the same photograph reprinted on facing pages**, proved numerically: mean
absolute channel difference **5.4/255** on 64×64 thumbnails, where unrelated pictures score 40+.
**Both keep their own crop, cut from their own printing** — they are separate scans with slightly
different framing, and an entry's figure should be what its own page prints.

⚠️ **My crop brief put Q258 on book p.38. It is on p.37, and p.38 carries no image at all.** The
drafting agent had it right in the staging record the whole time; I had introduced the error by
paraphrasing rather than reading. **Third brief error of the day from restating something the
staging already said correctly.**

**All six alts are modality and view only.** Five of the six stems ask what the sign IS or what
CAUSES it, so naming the finding would destroy the question — and the verifying agent argued the
register down further than the brief allowed on `opqb-t8-330`, refusing even to call the cornea hazy
because *"the sign here IS a corneal appearance"*. That is the right reading and it is now the
standard.

### ⚠️⚠️ THE CROP INK TEST WAS STRUCTURALLY WRONG — AND THE AUDIT FOUND THE SHIPPED CROPS CLEAN ANYWAY

A saturated-pixel scan — *"is this pixel colourful?"* — was used to bound the topic-5 figure. It is
**blind to dark desaturated content, and that is what the edge of a clinical photograph is made
of**: shadowed skin, black pupils, dark hair, grey drapes.

It put the photograph's left edge at **x 1889**; the true edge is **x 1802**. The 86 px strip
between them samples `(130,130,130)` and `(93,94,88)` — **max minus min of six** — which reads as
blank paper. **Seven per cent of the picture was discarded**, and the same blindness would clip
whichever edge of any crop happens to be shadowed.

> **The ink test is `max(r,g,b) < 225  OR  (max − min) > 30`, and the first half is the one that
> matters.** Tool: `<scratch>\oph\bounds.js`.

#### ✅ The audit of the seven already-shipped crops: ALL CLEAN, and proved rather than assumed

The auditing agent did not compare the shipped crops against the corrected bounds and call it a day.
**It re-ran the BROKEN test on the same windows and showed what it WOULD have produced**, then asked
which set the shipped files actually match:

| crop | corrected bound | saturation-only would give | shipped tracks |
|---|---|---|---|
| `q-op-gg-255` | right x 2695 | x **2613** — 10.6 % lost | **corrected** |
| `q-op-gg-288` | x 487–1539, y 2835–3519 | x 489–**1183**, y **3185**–3518 — **67 % of the picture gone** | **corrected** |
| `q-op-gg-330` | top y 2911 | y **2928** | **corrected** |

**On `q-op-gg-288` the broken test would have thrown away the dark blue-black lesion the question
asks about, and the shipped crop has it.** So those crops were never cut with the broken scan; only
the topic-5 transcriber's reported coordinates were. All seven measure **0.02–0.49 %** from true.

#### ⚠️ Three corrections to my own crop rule, every one from the audit

1. **⚠️ A SYMMETRIC CLIP PRESERVES THE ASPECT RATIO EXACTLY**, so the ratio can never be the only
   test. Backed now with a pixel diff: seven clean crops scored **5.7–8.2** mean absolute difference
   per channel, and deliberately clipping 60 px off one edge took the same metric to **15.49**.
2. **⚠️ THE NOISE FLOOR IS ~1 %, AND IT WAS MEASURED.** `q-op-gg-254` and `q-op-gg-257` are the same
   photograph reprinted on facing pages and scanned separately; their true ratios differ by
   **1.07 %** from each other — more than either differs from its own shipped crop. **Under ~1 % is
   not a clip on this book.** The failed crop was **3.5 %** off.
3. **⚠️ A STRICTER FILL THRESHOLD IS ITSELF A FALSE-FAILURE GENERATOR.** A first pass using
   90 %-solid row and column runs reported a correct crop as 1.7 % clipped, because strict-fill
   trims soft photo edges asymmetrically. **Tight ink bounds is the contract; the solid-run
   heuristic is not.**

⚠️ **AND A RELATED BLINDNESS, WORTH MORE THAN THE ORIGINAL BUG WITH ~304 CROPS STILL TO CUT:**
reading the page at 4× reduction placed one photograph's right edge at x ~2992 when it is **x 3104**.
**Dark content washes out when downscaled, which is the SAME failure mode as the saturation scan.**
Eyeballing a shrunken page and running a saturation test are the same mistake wearing different
clothes. **Bound at full resolution, always.**

`opqb-t5-198` was re-cut at the corrected bounds — ratio now **0.11 %** from true, against **3.52 %**
before — and wired with an alt the verifying agent argued down to modality and view alone, because
the stem asks *"what is the name of the following condition?"* and describing the lid margins would
answer it.

### §17k — House chapter 6, the five owed crops, and a comparator that scored 1.00 on a non-duplicate (2026-08-25)

**House ch.6 "Conjunctival diseases", book p.43–48, 28 questions.** Ophtho **736 → 764**.
Marker delta exactly **28 = 28 entries − 0 boxes**. Chapter end proved by opening ch.7's banner on
the facing page. Zero boxes and zero figures, **counted on all six pages rather than assumed** — in
the one chapter where cobblestone papillae, Tranta spots, Arlt's line and a pterygium are all asked
in words and all photographed elsewhere in the sources.

**Zero folds, and here is how the zero was measured.** Six-stage sweep over all 28 against the
736-entry corpus; top E and F rankings read for every entry; three self-sweep hits opened by hand;
nine cross-bank candidates the drafting agent flagged opened against their live Grade Gain entries.
**Every one is the same TOPIC asked in the opposite DIRECTION** — House gives the vignette and asks
for the sign, Grade Gain gives the sign and asks for the disease. That is two questions.
The strongest evidence is negative: **the chapter carries six misprints, two repeating within House,
so the shared-typo test had six chances to fire against Grade Gain. It fired zero times.**

**⚠️⚠️ THE SWEEP SCORED TWO QUESTIONS 1.00 AND THEY ARE NOT THE SAME QUESTION.** `opmcq-c6-8` asks
what the WHO trachoma grade **TT** means; `opmcq-c6-23` asks what **TS** means. Same five options in
the same order, **different keys** — D (at least one lash touching the globe) against C (easily
visible fibrous white tarsal bands). `sweep.js` filtered tokens on `w.length > 3`, so the two-letter
grade, **the only discriminating word in either stem**, was dropped before comparison.
**Folding on that score would have deleted the trichiasis question and left the survivor keyed for
the wrong grade.** Opening every hit by hand is the only reason it did not happen.

Third appearance of the short-token blindness (`CT`/`US` twice) and the worst of the three: the
earlier two made a tool skip work it should have done, this one made it **return a confident wrong
verdict**. `sweep.js` patched — short tokens survive when capitalised in the original, an acronym
being a content word however short. **Verified both directions: the false 1.00 fell to 0.71, and all
28 genuine identity matches held (stage A = 28 of 28).** The change can only add tokens, so it
sharpens distinctions and cannot hide a fold. Pre-patch behaviour kept at `sweep.js.bak`.

**Q16 keys chlamydia as NOT causing papillae** while `ophthalmology.pdf` p.91 prints papillae for
chronic chlamydial disease and p.92 gives active trachoma a papillary reaction — **which this same
bank keys in Q9.** Recorded in `explanation`, key untouched. Q19/Q25 look contradictory and are not;
the reconciling sentence is on p.84.

**Orphaned answer lines: ONE**, at the 45/46 break, key only. **The run was 2, 4, 4, 5 and I had
recorded it as growing. It broke.** A trend over four chapters is not a law.

**`L37) Red Eye.txt` is a BOOK CHAPTER carrying real prose, not a deck**, and it paid for four
entries. It had gone unmentioned in six briefs — a second live source hiding in the lecture folder.

**The five owed crops shipped** — `opqb-t10-424/425/426`, `opqb-t11-479/480`. Corpus images **98 →
103**; topics 10 and 11 are figure-complete.

**⚠️ THE CROP CONTRACT IS AMENDED: THE 3 px PAD IS A MAXIMUM, NOT A REQUIREMENT.** `opqb-t10-425`
and `opqb-t11-479` each print a **black horizontal rule 1–2 px under the photograph**, and a rule is
ink — the padded bound swallows it and lays a black bar across the frame. It did, on the cutter's
first pass at 425, and **looking is what caught it.** Four of the five reported bounds were also
wrong: Q479 clipped on all four sides (worst 18 px, ~4.6 % of the picture's height), Q480's left
edge sat 18 px inside the true one, Q424 clipped 4 rows top and 6 bottom while overshooting 15 px
right, Q426 was merely loose. **And a 2-pixel speck of scanner noise dragged Q425's left bound
119 px out** — only a column-run profile caught that; `bounds.js` alone is not safe on a window.

**⚠️ A STEM WRITTEN TO STAND IN FOR A MISSING FIGURE CANNOT SURVIVE THE FIGURE ARRIVING.** All three
topic-10 photo stems opened with a bolded prose reading of the picture, and **every one stated its
own answer**: 424's *"free of any fine branching red vessels"* ruled out both Rubeosis options and
its *"whitish material and radial strands"* named the key; 425's *"complete grey-white ring …
separated from the limbus by a narrow clear interval"* IS the arcus that makes the key *No
treatment*; 426's *"iris tissue drawn up into the opacity"* IS anterior synechiae. The bank's own
printed stem — a bare one-liner in all three, verified against `gg-t10.array.js` — was restored and
the reading moved to `explanation`. **This is the `imgAlt` rule applied to stems.**

**The alt guard earned its place**: it rejected *"anterior segment of one eye"* on Q426, whose
options are **anterior** against **posterior** synechiae.

**Q426 is marginal and its entry says so.** The poor exposure is in the printed source, not the
crop — the full-resolution cut reads no better than the shipped 560 px file, so no re-cut recovers
anything. Answerable on gross form; a student may reasonably not see it.

**⚠️ `questions.ophtho.js` MIXES QUOTE CHARACTERS FIELD BY FIELD** — `stem:'…'` beside
`explanation:"…"`. A wiring script assuming single quotes matched three explanations **zero times**;
the uniqueness guard caught it, and a blind `replace` would have skipped them in silence.

**Boot after each merge: 0 console errors, 876 rules, 3 `max-aspect-ratio:5/4` blocks, 4 modules,
153 chapters, 1,604 sections, 89 cases, dead ids 0.** Corpus **3,325**.

**⚠️ FOUR AGENTS DIED IN THE SAME SECOND** on the session limit — House ch.7, House ch.8, GG t12,
GG t14. **Three left nothing. The one appending as it went left topic 14 fully staged (63 questions)
and 18 of 63 drafted**, resumable without re-rendering a page. Write-incrementally is the whole
difference, for the second time on this project.

### §17l — Eleven batches that shipped without a ledger entry, reconciled after the fact (2026-08-29)

**⚠️ THIS SECTION IS A RECOVERY RECORD, NOT A CONTEMPORANEOUS ONE, AND THAT IS THE FINDING.**
§17k closed at **764 questions**. Eleven batches merged and committed after it and **not one of them
was written up here.** The ledger and `resume-ophtho.md` both still described the 764-era module while
the data file held 1,099. Nothing was lost — every batch was validated and booted at merge time, and
the commits carry the headline findings — but for four days the two files this project resumes from
were describing a state that no longer existed. **The write-up is part of the batch, not a thing that
follows it.**

What is below is reconstructed from what can still be measured: the commit subjects, the entry counts
in `app\data\questions.ophtho.js`, the fold notes spliced into that file, and the `BOXES PRINTED` /
`MARKER ARITHMETIC` lines in each staging header. **No detail here is written from memory.** Where a
batch's reasoning was not recorded anywhere on disk, this section says so rather than inventing it.

#### The reconciliation

| Batch | Commit | Printed | Written | Folded | Boxes |
|---|---|---|---|---|---|
| GG t14 Neuro-Ophthalmology | `db1988a` | 63 | 63 | 0 | 9 |
| House ch.7 The sclera | `fff0cdd` | 26 | 26 | 0 | **0** |
| GG t12 Vitreous | `ad3c9ff` | 15 | 15 | 0 | 4 |
| House ch.8 The cornea | `482c0e7` | **30 under 28 numbers** | 30 | 0 | **0** |
| GG t17 Malignancies | `040d796` | 11 | 11 | 0 | 3 |
| House ch.9 The crystalline lens | `6bb7b8f` | 28 | 28 | 0 | **0** |
| GG t19 Systemic Diseases | `235b25a` | 36 | **35** | **1** | 11 |
| House ch.10 The uveal tract | `1c3ce46` | 26 | 26 | 0 | **0** |
| House ch.11 Glaucoma | `f85d5f6` | 26 | **25** | **1** | **0** |
| GG t18 Ocular Trauma | `aba07c7` | 39 | 39 | 0 | 3 |
| GG t15 Squint | `ae57aa5` | 37 | 37 | 0 | 4 |
| | | | **335** | **2** | |

**764 + 335 = 1,099, and the file holds exactly 1,099.** Per bank: Grade Gain **724**, House **375**.
Two figure commits (`5a4cfae`, and the crop work in `7e90f13` before it) and two brief-only commits
(`033385a`, `5aa374e`) carry no entries and are recorded below by their finding instead.

#### What each batch actually found — the parts that are still on disk

**GG topic 14 "Neuro-Ophthalmology" (63).** Its page range was one page short in my brief and the
agent rendered past it: stopping where I said **would have lost six keys (Q639–Q644) and one of the
nine boxes.** *"A reprint that cannot be folded"* — the batch found a second printing whose options
were **replaced** rather than reordered or respelled, which makes a new question, not a fold.
Its one figure shipped separately (`5a4cfae`) after **two agents independently described the same
photograph and agreed**, which is the only reason it was cut at all.

**GG topic 12 "Vitreous" (15).** Filed across **four** chapters — `op-ret` 8, `op-pupil` 3,
`op-cat-surg` 3, `op-ret-dr` 1 — because the module has no vitreous chapter. That scatter is the
precedent House ch.12 is now being drafted against.

**GG topic 17 "Malignancies" (11).** `op-onc` went **0 → 11**, the module's second-to-last empty
chapter. **⚠️ THE ANSWERS BANNER SAT AT THE TOP OF THE RIGHT COLUMN** — every earlier topic put it at
a column-one top, and questions here continued **above and beside it**. A scan starting at the banner
would have lost **36 % of the topic, silently.** Written into the brief as `5aa374e`.

**GG topic 19 "Systemic Diseases" (36 printed, 35 written).** `op-systemic` went **0 → 13**.
**My page range was a page short and the unnamed page held 23 of the 36 keys and 7 of the 11 boxes.**
The fold — `opqb-t19-762` into `opqb-t13-549` — is the **British/American spelling trap firing for
real**: the only textual difference in the option list is `hemorrhage` against `haemorrhage`, and
**a respelling is not a replaced distractor.** That trap shipped a duplicate twice in ENT.
**The second printing was the BOXED one**, so the box folded in verbatim and the held entry's
authored marker came **off** — the fourth convert-authored-to-sourced fold on this module.

**GG topic 18 "Ocular Trauma" (39).** **Zero figures** — I had predicted in the brief that trauma
would be the module's most figure-heavy topic and it prints none. And the batch exposed a comparator
defect: `worthlessF`, which flags an option list carrying no information, **was wired to stage F
alone while stages B and D compare option sets directly.** A chemical-burn grading matched two
hypertensive-retinopathy gradings on a bare `Grade 1|2|3|4` ladder and **stage B — the stage whose
whole claim is near-certainty — called it a near-certain duplicate.** Patched to demote such hits to
a new stage G with the reason printed. **Demoted, never suppressed: an E/F top-N cutoff once hid
three real folds here.**

**GG topic 15 "Squint" (37).** **Four defective keys**, all keyed as printed. The agent did the
thing that makes that safe: it **checked the neighbouring keys to exclude a global off-by-one**
before calling any single key defective. It also found an anatomy table **no squint deck contains**
and had to source it elsewhere.

**House ch.7 "The sclera" (26).** *"The stem stops carrying information"* — the point at which this
bank's stems became bare one-liners that cannot stand in for a missing figure.

**House ch.8 "The cornea" (30 questions under 28 printed numbers).** The bank prints two questions
sharing a number; the extra carries the id `opmcq-c8-26b`. **⚠️ AND `stagecheck.js` SKIPPED BOTH
MIS-NUMBERED ENTRIES** — it coerced ids to numbers at **four separate call sites**, one of which was
the repair-recording stage, so the two worst entries in the chapter were invisible to the checker
built to catch exactly that. Fixing the first site revealed a second and third (its own uniqueness
guard caught them) and a fourth sat in the reverse-coverage check. **Seventh instrument on this
project to be blind to the fault it was built for.**

**House ch.9 "The crystalline lens" (28).** Produced the **BANNER CENSUS**, the most reusable artifact
of the whole House stream: all 124 sheets scanned at 25 dpi for the red band, giving every chapter
boundary in the file before a page is opened. It has since predicted ch.10, ch.11 and ch.12 correctly.
The census lives in the header of `house-c9.array.js`. The same batch **stopped the comparator
discarding polarity words** — `except`, `true`, `false`, `not` were in the stopword list, so a
question and its own negation compared as identical.

**House ch.10 "The uveal tract" (26).** **A key that selects the only FALSE option in a list of true
ones.** Keyed as printed, discrepancy in `explanation`. Never disputed.

**House ch.11 "Glaucoma" (26 printed, 25 written).** **A fold decided on the ASK alone** — the first
on this module with **no textual difference anywhere in the option list.** `opmcq-c11-20` and
`opmcq-c11-9` print the same four options in the same order with the same key; one wraps it in a
vignette that names iris bombé, a shallow chamber and an IOP of 65, and so **hands the diagnosis over
rather than testing it.** Every earlier fold here turned on a shared typo, a respelling or a
reordering. **Three entries cited the folded id and each needed different handling — one of them a
COUNTING claim, where removing an id does not remove an occurrence. A claim has to survive the id,
not merely lose it.**

#### Two corrections that cost nothing only because they were caught

**⚠️ THE DECK DENOMINATOR WAS WRONG IN SIX BRIEFS** (`033385a`). I had been quoting **34 cached
ophthalmology lecture files**; there are **29**, because nine of them merge two lectures each
(`L1,2`, `L3,4`, `L7,8`, `L13,14`, `L15,16`, `L27,28`, `L31,32`, `L33,34`, `L35,36`). Every
*"searched all 34 decks"* claim made before that was arithmetic about a directory nobody had listed.
**Count the directory, never the lecture numbers.**

**⚠️ AND A `NOT COVERED` LIST PROVES LESS THAN IT LOOKS.** It is scoped to its own deck, and a grep
over a file that records a fault matches its own record. `L20` and `L31,32` **both** record PVD
absent; the book names and explains it at p.17, p.41 and p.42. Two invisible sources cannot
corroborate each other.

#### State at the close of this reconciliation

**Ophtho 1,099** — Grade Gain **724** (topics 1–15, 17, 18, 19) · House **375** (ch.1–11).
Corpus **3,660** (3,571 MCQ + 89 cases), **104 images**, **35 of 36 chapters seeded** — `op-appear`
is the last empty one. Ten fold notes stand in the file, two of them from these batches.
Last recorded boot: **0 console errors, 876 rules, 3 `max-aspect-ratio:5/4` blocks, 4 modules,
153 chapters, 1,604 sections, 89 cases, 3,660 questions.**

**Grade Gain's remaining gap is exact and doubly measured:** topic 15 ends at **Q681** and topic 17
opens at **Q705**, so **topic 16 "Pediatric Ophthalmology" is Q682–Q704, 23 questions** — and the
contents page independently promises 23. Then topic 20, and the eight exam sections.
**House ch.12 "12. Vitreous" is book pp.80–84**, banner read by the ch.11 agent and span predicted by
the census. Both are drafting now.

### §17m — House Part A ch.12 "12. Vitreous", 20 questions, and four reconstructed stems that were answering their own questions (2026-08-29)

**Merged 2026-08-29. 20 printed, 20 written, 0 folded, 0 boxes, 0 figures.** Ophtho **1,099 → 1,119**;
corpus **3,680** (3,591 MCQ + 89 cases). Marker delta asserted at the splice: **977 − 957 = 20**, and
required = 20 entries − 0 boxes = **20**. Boot from `file://` after the splice: **0 console errors,
876 rules, 3 `max-aspect-ratio:5/4` blocks, 4 modules, 153 chapters, 1,604 sections, 89 cases.**
`validate.js`: 0 BAD, 0 dead backticked refs, 0 markers in `source`, 0 sparse holes.

Chapters: `op-cat-surg` 6 · `op-ret` 7 · `op-ret-dr` 3 · `op-trauma` 2 · `op-intro` 1 · `op-acute` 1 —
scattered across six, because **the module still has no vitreous chapter**, the same shape GG topic 12
took across four.

#### ✅ THE BANNER CENSUS HELD A FOURTH TIME, AND IT IS NOW THE CHEAPEST INSTRUMENT ON THIS BANK

Predicted from `house-c9.array.js`'s census alone, before a page was opened: banner at sheet **42L =
book p.80**, next banner at **44R = book p.85**, five book pages. **Every particular held.** No page
was rendered outside the predicted span. Book p.85's banner reads literally **`13. The retina`**, with
numbering restarted at 1 — which fixes the next chapter's opening as well. Four chapters running
(ch.10, 11, 12, and now 13's boundary) predicted correctly from a 25 dpi scan done once.

**And twelve chapters in, House has printed ZERO explanation boxes and ZERO figures.** Counted per page
again here rather than carried forward, as the rule requires — but the pattern is now strong enough
that the *absence* of a box is no longer the surprise; a box appearing would be.

#### ⚠️⚠️ THE REAL FINDING — A BACK-REFERENCE REPAIR THAT LEAKED THE ANSWER, IN THREE OF FOUR CHAINS

The chapter prints **6 bare `"In the previous case…"` stems in 3 chains** (Q2→Q1, Q3→Q2→Q1, Q5→Q4,
Q6→Q5→Q4, Q8→Q7, Q9→Q8→Q7), and three of them point *past* a question that contains no case. Every
one has to be repaired in-stem, because the app hashes question order and **"the previous case" is
never the previous question on a student's screen.**

The drafting agent repaired all six and `stagecheck.js` passed them — it compares options and keys
against the staging record and **has nothing to say about a stem.** Reading them by hand found that
**three named the DIAGNOSIS where the source had printed only FINDINGS**, and one of those handed over
its own key:

| Entry | Repaired stem said | The source antecedent prints | Consequence |
|---|---|---|---|
| `opmcq-c12-5` | "a **vitreous haemorrhage** obscuring the fundus" | "black shadows obvious against the red reflex and hence **obscuring the retina**" | names Q4's key |
| `opmcq-c12-6` | "with a **vitreous haemorrhage**" | as above | names Q4's key |
| `opmcq-c12-8` | "a Weiss ring — **a posterior vitreous detachment**" | "an evident **Weiss ring**" | glosses the diagnosis |
| `opmcq-c12-9` | "with an **uncomplicated** posterior vitreous detachment" | nothing of the kind anywhere in the chain | **answers itself** — the key IS "No specific treatment" |

`opmcq-c12-9` is the serious one. **"Uncomplicated" is not printed anywhere in the Q7–Q9 chain**; it is
an inference from Q8's key, and stating it in the stem reduces the question to reading comprehension.
All four were rewritten to the antecedent's **printed findings**, in the source's own words — the book
writes *"obscuring the retina"*, so the entry does too, not "fundus". The reasoning that had migrated
into the stem was already in the explanation where it belongs: `opmcq-c12-9` reads *"which
`opmcq-c12-8` has just excluded by dilated examination."*

**⚠️ THE RULE THIS ESTABLISHES: `imgAlt` MUST NOT ANSWER THE QUESTION, AND NEITHER MUST A RECONSTRUCTED
STEM — AND A REPAIRED BACK-REFERENCE IS A RECONSTRUCTED STEM.** The topic-10 photo stems taught this
once from the figure side; this is the same fault arriving from the citation side, and **no instrument
in the chain can see it.** `stagecheck.js` compares options and keys. `sweep.js` compares stems to
*other* stems. Nothing compares a stem to its own key. **Read every repaired back-reference against its
antecedent, by hand, before the splice.**

#### The sweep — 12 corpus candidates, 3 self-hits, 0 folds

`sweep.js` against 1,099 held: **A=0 B=0 C=7 D=0 E=2 F=3**, 6 of 20 staged entries drawing at least
one candidate. Every one rejected, and each with its discriminating token named:

- **`opmcq-c12-1` and `-4` vs `opmcq-c1-33`, F 0.67 each — the shared-option-menu shape again**, third
  time on this module. `c1-33` lists *Vitreous hemorrhage | Retinal detachment | AION | All of the
  above | None of the above* and asks which causes **painless** loss. Q1 is a vignette 1 day after
  cataract surgery with **pain, redness and discharge**; Q4 is a **diabetic**. Discriminating tokens:
  **"discharge"** and **"diabetic"** against **"painless"**. A menu is how these banks pair questions.
- **`opmcq-c12-4` vs `opqb-t13-549` and `opqb-t19-763`, C 0.33** — the closest real risk in the batch:
  three printings of the stock diabetic-sudden-loss stem, all keying vitreous haemorrhage, across two
  banks. **The option lists are replaced, not reordered or respelled** — Q4 alone offers **CRVO**,
  **posterior vitreous detachment** and **"None of the above"** — so all three are separate questions
  under the standing fold rule.
- **`opmcq-c12-14`/`-16` vs `opqb-t12-500`, E 0.50** — three different asks about PVD. Tokens:
  **"Vossious ring"** (Q14's key, absent from t12-500) and **"complications"** (Q16's stem alone).
- Q18's three stage-C hits (`c9-23`, `c1-24`, `c11-22`) share only the key **"All of the above"** and
  a couple of abbreviations, across ectopia lentis, photopsia and secondary angle-closure.

**Self-sweep: 3 internal hits, all rejected, and the rejection depends entirely on the repair above.**
Q5 ↔ Q8 and Q6 ↔ Q9 print **exact-identical stems** in the source; Q5 and Q8 additionally print **the
same five options in the same order and key different letters (A vs D)**. What separates them is the
antecedent and nothing else — Q5's chain begins at an obscured retina, so the answer is **Ultrasound**;
Q8's at a clear one, so it is **Dilated fundus examination**. **Had the back-references shipped bare,
two of these four would have been indistinguishable from each other on screen.** After repair, all 20
full stems are distinct.

#### Defects, spellings and the measured absences

- **No defective key**, and no monotone drift, so no global off-by-one.
- **4 orphaned answers** — Q4 (options D/E and the answer on the next page), Q8 (`Answer: D` alone at a
  page head), Q13 (stem alone at a page foot, options and answer overleaf), Q17.
- **Q6 prints a double space**: `"the best line of  management"`, verified at 2×. Normalised, recorded.
- **Q11's key is correct against the options printed** and is recorded, not disputed: with the red
  reflex *absent*, the module's own instrument is B-scan ultrasound — **which is not on Q11's list.**
- **⚠️ THE MODULE SPELLS ONE EPONYM TWO WAYS.** Q14 prints **"Vossious ring"**, matching `L25) Trauma I`
  sl.30/31 exactly; `L18) Cataract II` prints **"Vossius ring"** for the same sign. **A grep on either
  form finds only half the module** — the second time an eponym's spelling has hidden source material
  here.
- **⚠️ "Weiss" returns exactly ONE case-insensitive hit** across all 29 cached decks and 12 book caches,
  **and that hit is inside `L20`'s own not-covered list** — a grep matching its own record, the fault
  §17l had just finished warning about, firing again the same day. Tagged as outside knowledge. PVD
  itself *is* taught (`ophthalmology.pdf` pp.17, 41, 42).
- **Three measured zero-hit absences, each tagged in place, none declared:** `Bacillus` (0),
  `child abuse`/`non-accidental` (0 — the only "abuse" hit in the module is *topical anaesthetic abuse*
  in `L15,16) Cornea`), and the endophthalmitis vitrectomy trial (0). Q19's plant-matter option, by
  contrast, **is** grounded inside the module: `L15,16) Cornea`, *"Filamentous fungi (Aspergillus,
  Fusarium): trauma with plant matter."*

#### ⚠️ And one tool check that was itself the fault

A quick regex over the draft reported **one answer index out of range**. It was the probe: a crude
`options:[…]` split that breaks on apostrophes inside option text. Parsing the fragment properly gave
**0 out of range**, with option counts `5 4 5 5 5 5 4 5 5 5 4 4 5 5 5 5 5 5 5 4` and keys
`D C C D A D C D D C D B C A E B B E D C` matching the staging record exactly. **Check the auditor
before believing the audit** — and the same session's earlier `grep -c` over `resume-ophtho.md`
returned 0 for four path strings that were all present, because a trailing backslash inside an
alternation ends the pattern. **Two false alarms in one day, both from probes written in haste.**

### §17n — Grade Gain topic 16 "Pediatric Ophthalmology", 23 questions, and the same leaking back-reference fault arriving from the other bank on the same day (2026-08-29)

**Merged 2026-08-29. 23 printed, 23 written, 0 folded, 6 boxes, 1 figure.** Ophtho **1,119 → 1,142**;
corpus **3,703** (3,614 MCQ + 89 cases); images **104 → 105**. Marker delta asserted at the splice:
**2,957 − 2,940 = 17**, and required = 23 entries − 6 boxes = **17**. Boot from `file://` after the
splice: **0 console errors, 876 rules, 3 `max-aspect-ratio:5/4` blocks, 4 modules, 153 chapters,
1,604 sections, 89 cases.** `validate.js`: 0 BAD, 0 dead backticked refs, 0 markers in `source`,
0 sparse holes.

Chapters: `op-glauc` 6 · `op-onc` 4 · `op-cat` 4 · `op-squint` 3 · `op-conj` 2 · `op-lac` 2 ·
`op-white` 1 · `op-ret-vasc` 1 — eight chapters for 23 questions, because "Pediatric Ophthalmology"
is an age band, not an anatomical site. Grade Gain topic 12 scattered across four the same way.

**The count was measured three ways and all three agreed**: the printed numbers walked on the page
(Q682–Q704, continuous, no repeat and no anomaly), the contents page's promise of 23, and the live
corpus gap — topic 15 ends at Q681 and topic 17 opens at Q705, so the hole was exactly 23 wide before
a page was rendered.

#### ⚠️⚠️ THE HEADLINE — THE BACK-REFERENCE LEAK FIRED AGAIN, IN THE OTHER BANK, THE SAME DAY

§17m recorded four repaired back-references in House ch.12 that named the *diagnosis* where the source
printed only *findings*, one of them handing over its own key. **Topic 16 has three back-references and
the same fault is in all three.** Neither batch's agent saw the other's work; the fault is in the
repair *shape*, not in one agent.

| Entry | Drafted stem said | The source antecedent prints | Consequence |
|---|---|---|---|
| `opqb-t16-693` | "the 3-year-old with **intermittently esotropic** left eye" | "left eye wanders intermittently **inward**" | **esotropic** is Q692's own key, "Strabismus" |
| `opqb-t16-695` | "with a dense central **congenital** lens opacity" | "white pupillary reflex **since birth**, lens opacity dense and central" | **congenital** is Q694's key, "Congenital cataract" |
| `opqb-t16-699` | "with **congenital nasolacrimal duct obstruction** and a positive regurge test" | "persistent tearing and mild mucous discharge since 2 weeks of age, reflux of mucopurulent material on pressure over the sac" | **answers itself** — the key is "Probing of NLD" |

All three rewritten to the antecedent's printed findings in the source's own words. `opqb-t16-699` is
the serious one and is the exact twin of `opmcq-c12-9`: a stem that names the diagnosis when the key
*is* the treatment of that diagnosis reduces the question to reading comprehension.

**And the same fault came through the figure side in the same batch.** `opqb-t16-691`'s drafted
`imgAlt` read *"a young child wearing **plus-lensed** spectacles"* — and the key is **accommodative
esotropia**, whose whole mechanism is uncorrected hypermetropia in plus lenses. Cut back to modality
and view: *"Colour clinical photograph of a young child, photographed from the front, both eyes
visible."* The detailed read of the lenses stays in `explanation`, where it belongs.

**Seven stems and one alt across the two batches. The rule now has two independent confirmations and
still no instrument behind it** — `stagecheck.js` compares options and keys, `sweep.js` compares stems
to *other* stems, and nothing in the chain compares a stem to its own key. **Read every repaired
back-reference against its antecedent, by hand, before the splice.**

#### The figure — and a new fact about what `bounds.js` can and cannot measure

`opqb-t16-691` is the topic's only figure, book p.110, left column, under the stem. Crop cut at
**x 379–1347, y 662–1092** on a 400 dpi render (3307 × 4677), scaled to the module's 560 px convention
→ `q-op-gg-691.jpg`, 560 × 249. **Looked at**: the whole photograph, both lenses, no stem text above
and no option text below, all four edges at the picture's own boundary. No pad — option A's ink starts
~32 px under the picture.

**⚠️ `bounds.js` COULD NOT MEASURE THIS FIGURE, AND ITS FAILURE MODE LOOKS EXACTLY LIKE THE CLIPPING
SIGNATURE.** Two windows were offered and each came back filling itself to within 1 px on the right
and bottom — the standing read of which is *"the window is at or inside the true edge, widen it"*.
Widening produced the same result, because **the stem line above and the option lines below are ink
too**: in a printed question the photograph is not an island of ink on paper, it is one dense block in
a column that is ink from top to bottom. A tight-bounds instrument has nothing to bite on.

**What settled it was a column/row density profile** — per-column ink fraction over a band inside the
picture, per-row ink fraction over a band inside it — which returned **one clean dense run, sparse on
all four sides**: columns dense from x 379 to x 1347, rows dense from y 662 to y 1092, and the first
`bounds.js` reading (380/662/1346/1092) was right all along. **A `bounds.js` window that returns its
own edges is not evidence of clipping when the window sits in a text column; it is evidence that
`bounds.js` is the wrong instrument for that page.** This is the second entry on the
*"`bounds.js` alone is not safe on a window"* rule, and the first where the profile confirmed the
bounds rather than correcting them.

#### The sweep — run against the POST-ch.12 corpus, 2 candidates, 0 folds

Topic 16 was drafted against a corpus of 1,099 and House ch.12 merged first, so **the sweep was
re-run against 1,119 held**, which is what the protocol requires: batch B's sweep must see batch A or
a cross-bank fold is missed. **A=0 B=0 C=1 D=0 E=1 F=0 G=0**, 2 of 23 staged entries drawing a
candidate. Both rejected, each with its discriminating token named:

- **`opqb-t16-694` vs `opqb-t9-395`, C 0.27** — same key *text*, "Congenital cataract", and nothing
  else. The staged entry asks the **diagnosis** of a 2-month-old with a dense central lens opacity;
  the held one asks in which condition **phacoemulsification is NOT indicated**. Discriminating
  token: **"Phacoemulsification"**, in the held stem and absent from the staged one. The same key
  string in two questions is not a fold; it is one fact used as an answer and as an exception.
- **`opqb-t16-690` vs `opqb-t6-265`, E 0.50** — both on the organisms of ophthalmia neonatorum.
  Staged asks for the **set** (key "All of the above"); held asks for the *"most common **dangerous**"*
  single organism (key "Gonococci"). Discriminating tokens: **"dangerous"** and **"most common"**, and
  the option lists are **replaced**, not reordered — **E. coli** and **Xerosis bacilli** appear only in
  the held entry.

**A targeted second pass, topic 16 × House ch.12** — the 20 entries the first sweep predated — gave
4 candidates, **max stem 0.44, zero identical option sets**, all four the shared
*"All of the following … EXCEPT"* frame: `opqb-t16-687`/`-689` (**buphthalmos**) against
`opmcq-c12-14` (**posterior vitreous detachment**, key **"Vossious ring"**) and `opmcq-c12-18`
(causes of vitreous haemorrhage, options **PDR / PVD / RVO / Trauma**). No fold.

**Self sweep: 1 exact-stem pair, rejected.** `opqb-t16-687` and `opqb-t16-689` print the identical
stem *"All of the following are in buphthalmos EXCEPT:"* and both key **"Dilated pupil"** — a
stem-only comparison scores them 1.00. **Two of four options differ, and the difference is a
replacement, not a respelling:** Q687 offers **Tearing** and **Blepharospasm**, Q689 offers
**Epiphora** and **Optic neuropathy**. Tearing/epiphora alone would be a synonym swap and would fold;
**Blepharospasm → Optic neuropathy is a different clinical claim**, and the harder one — the disc *is*
cupped in buphthalmos, it is the **field** that cannot be measured, which is Q688's own printed box.
Half of each question is different, so both ship.

#### Defects, and one page that fired two of them at once

- **⚠️ Q693 PRINTS THE SAME OPTION TWICE, LETTER FOR LETTER.** B and C both read *"Patching the right
  eye"*, verified on a 2× upscale — two separate lettered lines, not a wrap and not a scanner
  doubling. The key is **B**, so the question is answerable and is kept as printed, but **C is equally
  correct and a student choosing it is marked wrong on nothing.** The catalogued shape was "two
  options describing the same thing"; this is that shape at its limit — the same **string**. Q693 is
  also the topic's only 5-option question; every other prints four.
- **Q704's key is clinically questionable and is recorded, not disputed.** *"The most common line of
  treatment a seeing eye with retinoblastoma is:"* keys **"Enucication."** Enucleation removes the
  globe and so cannot preserve a **seeing** eye, and the bank's own Q683 box lists radiotherapy,
  chemotherapy, laser and cryopexy ahead of it. `answer` stays on the printed letter.
- **Three misspellings in one option list** — Q704 prints **"Eviseration."**, **"Enucication."** and
  **"Excentration."**, while Q683 spells all three correctly two pages earlier. Q703 prints
  **"Electoretinogram."**
- **Q691's stem asks for a "refractive error" and offers four strabismus terms.** No refractive error
  is among the options. Read as *"what is the condition in the photograph"* it is answerable, and the
  underlying refractive error — hypermetropia — is what makes the key right. Kept as printed, fault
  recorded in the entry.
- **⚠️⚠️ DEFECTS 2 AND 3 FIRED ON THE SAME PAGE, a combination not previously recorded.** Book p.111
  carries **Q700–Q704 in its left column — five questions, 22 % of the topic** — while its right
  column carries the *"Answers"* banner and the first ten keys. A scan that had stopped at the banner
  would have lost a fifth of the topic. Fourth firing of defect 2 on this bank (t3 Q138, t8 Q348,
  t6 Q286–288, now t16 Q700–704) and the largest tail yet.
- **No global off-by-one**: six of the 23 keys are independently confirmed by their own printed boxes
  (Q682, Q683, Q688, Q696, Q697, Q700); a one-place shift would break all six.
- **A stray "6." in the answer column** of book p.111, in the numbered-key position between Q682's box
  and Q683's key. It is the orphaned list-numbering of Q682's own seven-item differential, not a lost
  entry. Recorded so a later reader does not chase it.

#### ⚠️ And the fourth probe fault of this stream, mine

The targeted topic-16 × ch.12 pass was written in haste and its first run returned **460 candidates
with a maximum score of 1.00**, pairing *"a 2-month-old with a white pupillary reflex"* against
*"a 22-year-old seeing bugs or cobwebs"*. The cause: `norm.js`'s `words()` returns a **string**, not
an array, so `new Set(N.words(s))` built a set of **characters** and every English sentence overlapped
every other almost completely. Split on spaces and the same comparison gives **4 candidates, max
0.44**. **Check the auditor before believing the audit** — that is now four bad probes in two days
(`grep -c` with a trailing backslash, the apostrophe-splitting option counter, the header strip that
ate an entry, and this), and **every one of them was a probe written in a hurry to check something
else.** None was ever a fault in the data.

**⚠️ ONE MORE THING THIS BATCH FOUND, AND IT IS NOT ABOUT TOPIC 16.** Updating the resume block's
summary table meant re-deriving the per-bank split, and the split was **wrong by exactly 37 in both
directions**: it read "Grade Gain 724 · House 375" where a direct count by id prefix gives **761 ·
338**. Thirty-seven Grade Gain questions were being reported as House. **The total was right the whole
time** — 724 + 375 = 1,099, exactly the corpus — so the sum check this project runs at every splice
could never have caught it, and never did. Reconciled now against the per-topic tables in both
directions: Grade Gain **784 written = 790 printed − 6 folded**, House **358 written = 362 printed −
4 folded**, and topics 1–20 (830) + the eight exam sections (257) = the **1,087** counted on
2026-08-18. **An offsetting error is invisible to a sum. Count the parts.**
