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
| 5 | `ophthalmology MCQ.pdf` | Ophthalmology | 126 | `opmcq-` | unseen | 0 | 0 |
| 6 | `ophthalmology qb.pdf` | Ophthalmology | 185 | `opqb-` | unseen | 0 | 0 |
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
