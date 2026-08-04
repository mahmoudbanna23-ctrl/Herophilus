# Herophilus — Memory

Running record, organised around *resuming*. ISO dates; unverified is marked as such. **Only what is
needed to pick the work up cold; under 200 lines — measure with `(Get-Content).Count`.** Method in
`CLAUDE.md`, detail in `ledger.md` — **`CLAUDE.md` imports this, so repeating its rules costs budget.**

## Resume here — **`ENT endpoint.pdf` IS FULLY READ, all 3,074 pp.**

Exam Night Review's **104 MCQs are READ, STAGED and SWEPT but NOT WRITTEN**; staging survives at
`content\ent\qb-pages\exam-night-review-mcqs.staged.js` + `…-sweep.json`. **Three jobs left
(`ledger.md` §6); the image pipeline — job 1 — is DONE (§11a).**

1. **Write the 31 clean entries. ZERO pages print a box**, so every one is authored+marked. **Attach
   the 18 images here** (`image`+`imgAlt`, +`imgEssential` for 10): **13 sit on clean questions, 5 on
   reprint candidates** (Q25, Q96, Q98, Q100, Q102). **⚠️ `sweep.json` has NO `.clean` key** —
   `counts.clean` + `cleanIds`; reading `.clean` returns null and silently answers "no" to all.
2. **Fold 3 within-batch dupes:** Q15≡Q24, Q21≡Q47, Q52≡Q53 (4 flagged, 3 pairs).
3. **Read pp.3047–3069 ODD (unread), harvest pp.3046–3070 into `examiner-patterns.md`** — **fact
   lists, NOT questions**; forcing them into `QUESTIONS` would mean inventing distractors.

**18 question images are cut into `app\assets\q\q-<page>.jpg`** (312 KB) by `Design\scripts\
q-images.ps1`; `image` holds the **basename**, `qImgSrc()` builds the path. **⚠️ `bundle.ps1` DOES NOT
EXIST** (`CLAUDE.md` claimed it did); the single-file build is owed. **⚠️ THREE bugs this session were SILENT and every one was
caught by LOOKING, not counting**: `Sort-Object -Property` no-ops on hashtables in PS 5.1; tone spread
must be pooled across a component, never measured inside a cell (a photo is locally smooth, text is
not, so the filter rejected pictures and kept paragraphs); and a probe read a **missing** JSON key and
silently answered "no" to all 18. Detail: `ledger.md` §11a.

**⚠️ EXAM NIGHT REVIEW BREAKS EVERY PATTERN: ZERO stage-A matches** (first time ever — the bank rewrote
its stems), **31/104 clean**, **18 carry photographs and 10 are unanswerable without them** (3 being
*labelled* anatomy diagrams — "the structure labeled X" — which no words can replace). **⚠️ NEVER CARRY
STRUCTURE ACROSS A SECTION BOUNDARY:** every section and all 7 exams print each question **twice**,
**Recently Edited prints each ONCE already answered**, the fact-list run prints each page once. Check
the first ten pages before staging.

**⚠️ THE REPRINT RATE HAS NO TREND — DO NOT EXTRAPOLATE IT.** 7 exams + Recently Edited: **96 → 100 →
99 → 58 → 42 → 99 → 99 → 100%**, then Exam Night Review at **~70%**. Near-100% runs predict nothing.
**The printed numbering lies** — 71 twice, no Q20, 45 AND 55 twice, 70 twice, and Recently Edited is
non-sequential throughout. **⚠️ SAMPLE FOR STRUCTURE, NEVER FOR RATE OR FOR WHERE A SHIFT IS.**

**⚠️ EXAMS 4–6 HOLD ONE SELF-CONTRADICTION EACH, EXAM 7 HOLDS TWO** — a question the bank already keyed
correctly, reprinted and **re-keyed wrongly**. **Go looking for it**; all four sat on a page printing
**NO box**. The mechanism decides handling: **options replaced → new entry; options identical and only
the key moved → record it in the existing entry, never a second entry.**

**⚠️ ~~EVERY PARITY SHIFT IS A SPILL PAGE~~ — RETIRED by Exam 5.** Three causes, **only two visible on
the tile**: a stray *unanswered* page, a *spill* page (prose) — and **a stray ANSWERED page reprinted
out of sequence, which looks normal** (p.2436). **When parity shifts and no visible cause explains it,
render the whole run consecutively.** Stable parity ≠ predictable parity.

**Method: THREE passes.** (1) Read at `-CropTop 0.32` (18/sheet, `Cols 3 -Dpi 110`) + **five-stage**
sweep. (2) Resolve survivors — the "shortlist, not a verdict" rule below. (3) Re-render survivors at
`-CropTop 0.40 -Cols 2` for boxes. Then the six other banks. **Order of work:** ENT → Pediatrics →
Ophthalmology → Neuropsychiatry, all questions first, then theory. **The ENT review below is owed
before Pediatrics.**

**⚠️ THE THEORY BRIEF CHANGED, 2026-08-04 — it is a NEW STUDY SOURCE, sufficient to sit the exam from
alone, NOT a summary.** Every source in the folder, images/diagrams wanted, "important" decided by the
questions first; **length is never the goal, dropping something important is the one unacceptable
failure.** Four tests + drop-list in `CLAUDE.md` §4. User will add anatomy/physiology textbooks (**ask,
never substitute outside knowledge**) and offered a source interview — **take it first.**

## What exists

**104 chapters** — ENT 30, Ophthalmology 26, Neuropsychiatry 27, Pediatrics 21. **All content is ENT
so far**; the other three hold **0** questions and **no theory is written anywhere**.
`QUESTIONS.length` is **680** — 598 MCQs + 82 cases, **all 30 ENT chapters holding ≥1**. By bank:
**660 Endpoint, 21 House, 0 Grade Gain** — 681, because one question is in two banks.

**Fully validated in a real `file://` boot, 2026-08-04** — 0 bad module/chapter refs, 0 mismatches,
0 duplicate ids, every `answer` in range, nothing missing a `source`/`explanation`/`objective`, every
`THEORY` `qs` id resolving, **0 dead backticked ids in prose**. Re-run after every batch. **⚠️ ANY
SYNTAX SLIP IN A DATA FILE FAILS SILENTLY AND LOOKS LIKE A CONTENT BUG** — the app boots, throws
nothing, and reports **82** questions (cases only), because `Q_ENT` never parsed; on 2026-08-04 from
**one missing comma**. **`file://` gives only "Script error." at line 0** — inline the data file into
a scratchpad `<script>` for a real line number. **⚠️ The same shape of silent failure bit the image
cutter twice — see §11a. Where an error is impossible, LOOK at the output; do not count it.**

**Lecture text cache — complete 2026-07-26**, 146 files in `content\<subject>\lectures\*.txt`; **check
it before rendering** (10 failures: `ledger.md` §1). `SCHEDULE` — 38 days to 2026-08-31.

## The app

**Boots clean from `file://`** — zero console errors, 9 Clepsydra poses, **768 CSS rules with all 3
`max-aspect-ratio:5/4` blocks intact**, re-verified 2026-08-04. (Count **recursively** — the only way
to see a swallowed media block. **⚠️ Match by `media.mediaText`, not a regex on `5/4`**: Chrome
normalises it to `5 / 4`. **⚠️ Subtract the harness's own `<style>`** — it added 2 and made the same
boot read 770.) **WCAG-AA clean**, 2026-07-28. **Re-audit after any colour change.**

**What it is now:** Greek light/dark design from the user's own artwork (2026-07-28), an ambient film,
and **the Clepsydra** — a hologram companion carrying the study-session timer (2026-08-02).
Import/Export were replaced by automatic `wardround.bak.<profileId>` snapshots. **Every rule, token
contract and trap is in `CLAUDE.md` §6 — NOT repeated here. History: `ledger.md` §12 and §11a.
Backups: `archive\index.pre-*.html`.** Outstanding: the **Notion board and PDF schedule still carry
the old module colours** (knowingly accepted), and **no single-file bundler exists.**

**⚠️ THE ONE THING THAT MUST SURVIVE ANY SUMMARY: THE CLEPSYDRA IS THE USER'S OWN ARTWORK** — nine
poses at `app\assets\clep\*.png`, source at `Clypsedra\`. **Do not redraw her, do not draw anything
onto her.** Three rounds of wasted work in a day; the answer was always *ask for artwork*.

## Where transcription stands

**`ENT endpoint.pdf`: everything is WRITTEN except Exam Night Review's 104 staged MCQs.** Boundaries
all verified by render — Ear pp.143–760 (243 entries), Nose pp.891–1185 (136), Throat pp.1350–1720
(160); detail in `ledger.md` §"Transcribed ranges". **All three SECTIONS share one shape:** MCQs
printed **twice**, a title page, then a case section printed **once**, two per page; **no case carries
a printed explanation. ⚠️ No exam has a case section.**

**Box presence is a property of the page, not the section.** Throat ran **103 consecutive answered pages
with none** (pp.1537–1720), so every entry from `entep-throat-70` on is authored; **Exams 4–7 box 74/77,
78/79, 76/77, 70/78, Recently Edited 4/18, Exam Night Review ZERO of 104, and 4 of 4 mis-keys sat on a
bare page — check every tile for box as for highlight.** ⚠️ The box often falls BELOW the `-CropTop 0.32`
cut, so a bare-looking tile may not be (p.2722): re-render first. **⚠️ For CASES the ANSWER decides
fold-vs-variant, not the stem** (`ledger.md`).

## Four rules that change what you do first — **`ledger.md` §7 holds the rest (corrupt boxes, recycling, numbering, linked sets, layout and key defects). Read it before opening `ENT endpoint.pdf`.**

- **ASSUME NOTHING FROM PAGE TO PAGE.** Parity, explanation boxes and reprint rate are all
  unpredictable. **Check every tile for a highlight before transcribing it.**
- **NEITHER THE PRINTED NUMBERS NOR THE PAGE COUNT COUNTS THE QUESTIONS.** Only reading every
  answered page does.
- **RUN THE DUPLICATE SWEEP OVER THE WHOLE FILE BEFORE WRITING A BATCH.** The file recycles across
  section boundaries; run *before* the writing it has caught **493+ reprints with nothing wasted**.
  **Normalise first** (lowercase, punctuation, **sort the options**). **⚠️ FIVE STAGES:** (A) stem +
  option set, (B) option set + key, (C) key + option count, (D) **≤1 DIFFERING TOKEN in the key**
  (symmetric difference — no ratio serves short and long answers alike), (E) **stem-token ranking,
  over ALL of them**. Rationale: `ledger.md` §7.
- **⚠️ A–D ALL KEY ON THE ANSWER, SO A REWORDED OR RE-OPTIONED REPRINT PASSES THEM ALL, and E lists
  without deciding. Every stage's verdict is a shortlist.** Resolution is not optional: **read side
  by side EVERY staged question whose OPTION SET differs from its stem twin — stages C, D and clean
  TOGETHER.** **⚠️ The new question need not be in the clean column** — Exam 7's only one came out of
  stage C while its clean 3 were noise, and Exam 6's Q21 was never ranked. **A 1.00 stem match that
  did NOT reach stage A or B is a re-optioned reprint by definition.** Then keyword-search every
  survivor **twice, differently worded**. Worked failures: `ledger.md` §7 and the Exam 4–7 entries.

**Where the source prints no explanation box, the explanation is written here** — rule and marker in
`CLAUDE.md` §4. **476 of the 680 entries carry the marker — 70%**, measured 2026-08-04 in a real boot:
**seven tenths of ENT's explanations are written, not transcribed — the real scope of the end-of-ENT
review.** Recurring gaps: review item 4 below.

**Three banks per module** (`endpoint`/`house`/`gradegain`); map, cover-identification and the
`alsoIn` contract in `CLAUDE.md` §4. **Still missing: House for Neuropsychiatry, Grade Gain for
Pediatrics.** **⚠️ THE BANKS OVERLAP — when the sweep finds a cross-bank match, ADD THE BANK, never
an entry.** One so far.

## Owed in the end-of-ENT review — detail in `ledger.md` §11; work it before Pediatrics begins

1. **⚠️ Sweep the WHOLE file for the "Ask ChatGPT" marker** — 5 known (pp.1011, 1015, 1489, 2146,
   2168), each found by eye, never by a search.
2. **67 entries record no provenance either way** — 46 inside `entep-ear-1`…`68`, all 21 House.
   Almost certainly authored, **not verified**. **⚠️ The exams may close much of this for free:**
   Exam 1 boxes `entep-ear-1…25`, `nose-1…24`, `throat-1…24`; Exams 2–3 box `26…53`.
3. **Re-run the duplicate check per module as it completes** — all **five** stages of it.
4. **⚠️ The nasopharynx — the highest-value single gap in ENT.** Up to **27** entries rest on outside
   knowledge (upper bound, unverified); **one ENT-nose-book read fixes it**, with item 5. Plus
   **fourteen Throat slide gaps** (**Vincent's angina**, **leucoplakia**, the **thyroglossal cyst's
   tongue-protrusion sign** — absent from **all 32** ENT files), **three Nose gaps** (dangerous area
   of the face, CSF-leak management, ammonia as a trigeminal stimulus), and **the eponymous signs**.
5. **⚠️ Eleven disputed printed keys, each transcribed as keyed with both readings recorded in its
   own entry — reasoning in `ledger.md` §11 and in the Exam 4–7 entries.** **⚠️ A DISPUTED KEY IS
   PROVISIONAL UNTIL THE BANK REPRINTS IT** — five are now **settled as the bank's deliberate
   position**, every one reclassified by a *later* printing, never by re-reading the original:
   `entep-throat-77`, Exam 1's **Q16**, `entep-throat-28`, and `entep-throat-2`/`entep-mfe5-20`
   (**pp.2820/2823/2828 in Recently Edited — the compiler's own ERRATA LIST — re-affirm all three
   with newly written boxes**). Still open: `entep-throat-83`, Q136/Q153 of pp.1617–1706, Exam 1's
   **Q13**, `entep-mfe4-16`, `entep-mfe6-1`, **`entep-mfe7-1`** and **`entep-nose-2`**.
   **FIVE are self-contradictions** (bank keys it correctly, reprints it, re-keys it wrongly):
   `entep-mfe4-8`↔`-mfe4-32`, `entep-mfe5-20`↔its own p.2438 table, `entep-mfe6-1`↔`entep-ear-59`
   (contradicted by **four** sources), and **Exam 7's two on consecutive questions** —
   `entep-mfe7-1`↔`entep-nose-19` (**the bank deleted the correct answer from its own option
   list**) and `entep-nose-2`↔its p.2786 reprint.
6. **A full content and design review**, at the user's request, before the other three modules.

## Environment — **full details in `ledger.md` §13** (Poppler's PATH trap, the browsers, the PowerShell image pipeline, what is absent, two native-exe gotchas). What changes what you do first:

- **Poppler is installed** and handles the 332 MB file; **`pdftotext` returns 0 characters on every
  book and question bank**, so scans are rendered to PNG and read as images. **The read tool rejects
  PDFs over 100 MB** — all 7 books and 3 of the 7 banks.
- **No Python, Node, ImageMagick, Ghostscript or `gh` CLI**; images via PowerShell `System.Drawing`
  (**⚠️ its `Sort-Object -Property` silently no-ops on hashtables — use `[pscustomobject]`**), video
  via **ffmpeg** (off PATH). **Headless Chrome is the only way to screenshot or probe the app**, and
  **Chrome + Canva are available for producing theory diagrams** (user, 2026-08-04).
- **The project is on GitHub, PRIVATE**: `mahmoudbanna23-ctrl/Herophilus`, branches `main` and
  `design/clepsydra-and-sessions` (holds the Clepsydra artwork — the only copy off this drive).
  `Semester 8\` and `files.zip` gitignored — **ledger §13 for the push method.** Sources: ledger §9.

## Deadline and open items — exam period **approximately early September 2026**, the user's own estimate, not a published date. **Do not rebuild the schedule on it.**

- **Reading all 1,637 book pages is not realistic.** Book reading is driven by the questions and by
  slide gaps, located via each book's contents page. **A chapter resting on slides and questions
  alone must be reported as such.**
- **Measure, then believe.** *Check the sum* — a count that did not reconcile has been written down
  **five times** (e.g. "156 authored passages" against a measured 473; a MEMORY line count via
  `Measure-Object -Line`, **which skips blank lines** — use `(Get-Content).Count`). *Check the
  auditor* — **three** contrast auditors gave false failures (`CLAUDE.md` §7). *Reconcile the batch*
  — written + dropped must equal staged. **And where no error is possible, LOOK: two silent image-
  cutter bugs each produced a plausible wrong crop that every numeric check passed.**
- **Cleanup awaiting approval** — `Opthalmo\…\drive-download-…-001.zip` (173 MB) duplicates all 29
  loose Ophthalmology lecture files; two Pediatrics PPT files are broken stubs, both inside protected
  `Semester 8\`; also `files.zip`. **Nothing deleted without a yes.**
