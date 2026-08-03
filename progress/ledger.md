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
- **`ENT QB.pdf`** — "ASM MiNDS". Has a **table of contents giving, per topic, the question start
  page, the answer start page, and the question count** — so transcription can run topic by topic in
  chapter order instead of sweeping pages. Answers live on separate pages from the questions.

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

> **Superseded — current total is 600 ENT items** (518 MCQs + 82 cases), validated 2026-08-03.
> Added since: `entep-mfe1-1…3` from Model Final Exam 1 and `entep-mfe3-1` from Exam 3; **Exam 2
> added none.** One House entry was **folded** on 2026-08-03 when a question gained `alsoIn`, so the
> array grew by 4 and shrank by 1. **By bank: 580 Endpoint, 21 House, 0 Grade Gain — which sums to
> 601, not 600, because one question is in two banks and counts in both.** The dated snapshot below
> is kept as the record of what was checked on 2026-07-27 and how.

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

**Next: `ENT endpoint.pdf` p.1721 onward — the 7 Model Final Exams (pp.1721–2816).** This is the
largest single block left in the file, **~548 answered pages**. Two things to establish at the
boundary **before** committing to a batch size, because nothing about this block has been verified:

1. **Is each exam printed twice, unanswered then answered, like the question sections?** Assume
   nothing — render p.1721 and the few pages after it and look for the highlight.
2. **Does an exam end with a free-text case set?** All three question sections did. Check.

**Run the whole-file duplicate sweep before writing anything.** A model exam is the most likely place
in the entire file to recycle questions already held — it has now been shown to recycle across
section boundaries five times, and these exams draw on all three sections at once.

After that: Recently Edited (pp.2817–2835), Exam Night Review (pp.2835–3074).

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

Three exams, three different parity patterns. The spill page is now confirmed as *the* mechanism —
four of the four shifts seen inside the model exams are caused by one.

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
- **A count that does not reconcile against its total has been written down three times** — the
  chapter split twice (once summing to 297 against a stated 273), and the unmarked-provenance figure
  twice (80, then 77, against a measured **67**). **Check the sum, and inspect the entries, before
  recording any number.** Both classes of error were found by re-measuring, never by re-reading.

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

**8. A full content and design review**, at the user's request — both the ENT content and whether the
app's design needs changing — **before the other three modules are started.**

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
