# Herophilus — Memory

Running record, organised around *resuming*. ISO dates; unverified is marked as such. **Only what is
needed to pick the work up cold; under 200 lines — measure with `(Get-Content).Count`.** Method in
`CLAUDE.md`, detail in `ledger.md` — **`CLAUDE.md` imports this, so repeating its rules costs budget.**

## Resume here

**`ENT endpoint.pdf` p.2817 — Recently Edited (pp.2817–2835), then Exam Night Review (pp.2835–3074).
THE WHOLE MODEL EXAM BLOCK IS DONE — all 7, pp.1721–2816.**

**⚠️ THESE TWO ARE NOT MODEL EXAMS — NOTHING ABOUT EXAM STRUCTURE TRANSFERS BY DEFAULT.** Establish
on the first render, never assume: the two-page (unanswered → answered) shape, the parity, and
whether a case section returns (all 3 sections ended with one; none of the 7 exams did).

**⚠️ THE REPRINT RATE HAS NO TREND — DO NOT EXTRAPOLATE IT.** Seven exams, **542 printings read, 84
new** — 3 / 0 / 1 / **32** / **46** / 1 / 1, i.e. **96 → 100 → 99 → 58 → 42 → 99 → 99%**. Three
near-99% exams in a row predicts nothing; the same reasoning missed Exam 5 by 46. **The printed
numbering lies** — Exam 2 uses 71 twice, Exam 3 has no Q20, Exam 5 uses 45 AND 55 twice, Exam 7 uses
**70 twice**. **⚠️ SAMPLE FOR STRUCTURE, NEVER FOR REPRINT RATE OR FOR WHERE A SHIFT IS** — a 15-page
spread of Exam 2 predicted "mostly new" (it had zero) and placed both parity shifts wrong.

**⚠️ EXAMS 4, 5 AND 6 HOLD ONE SELF-CONTRADICTION EACH AND EXAM 7 HOLDS TWO** — always the same
shape: a question the bank already keyed correctly, reprinted and **re-keyed wrongly** (66 / 3 / 47
pages apart; Exam 7's two are on consecutive questions). **Go looking for it.** **All four sit on a
page printing NO explanation box — treat a bare page as a prompt to check the key.** The mechanism
decides the handling: **options replaced → new entry; options identical and only the key moved →
record the mis-key in the existing entry, never a second entry.**

**⚠️ ~~EVERY PARITY SHIFT IS A SPILL PAGE~~ — RETIRED by Exam 5.** Three causes, **only two visible
on the tile**: a stray *unanswered* page, a *spill* page (prose) — and **a stray ANSWERED page
reprinted out of sequence, which looks completely normal** (p.2436). **When parity shifts and no
visible cause explains it, render the whole run through it consecutively.** Exams 1, 4, 6 and 7 do
not shift, but sit at **both** parities across the block, so stable ≠ predictable.

**Method: THREE passes.** (1) Read at `-CropTop 0.32` (18/sheet, `Cols 3 -Dpi 110` — stem, options,
highlight; box clipped) and run the **five-stage** sweep. (2) Resolve the survivors — the "shortlist,
not a verdict" rule below; not optional. (3) Re-render survivors at `-CropTop 0.40 -Cols 2` for boxes.

After those two: the six other banks — **~130 answered pages remain in this file. Order of work:**
ENT → Pediatrics → Ophthalmology → Neuropsychiatry, all questions first across all four modules, then
theory. **The ENT review below is owed before Pediatrics.**

**⚠️ THE THEORY BRIEF CHANGED, 2026-08-04 — it is a NEW STUDY SOURCE, sufficient to sit the exam
from alone, NOT a summary.** Every source in the folder, images/diagrams wanted, "important" decided
by the questions first. **Length is never the goal; dropping something important is the one
unacceptable failure.** The four tests and the drop-list are in `CLAUDE.md` §4 — read it before
writing any theory. User will add anatomy/physiology textbooks for diagrams (**ask, never substitute
outside knowledge**) and offered an interview on sources — **take it before theory starts.**

## What exists

**104 chapters** — ENT 30, Ophthalmology 26, Neuropsychiatry 27, Pediatrics 21. **All content is ENT
so far**; the other three hold **0** questions and **no module has any theory written**.
`QUESTIONS.length` is **680** — 598 MCQs + 82 cases in one array, **all 30 ENT chapters holding ≥1**.
By bank: **660 Endpoint, 21 House, 0 Grade Gain** — 681, because one question is in two banks.

**Fully validated in a real `file://` boot, 2026-08-04** — 0 bad module/chapter refs, 0 mismatches,
0 duplicate ids, every `answer` in range, nothing missing a `source`/`explanation`/`objective`, every
`THEORY` `qs` id resolving, **0 dead backticked ids in prose**. Re-run after every batch. **⚠️ ANY
SYNTAX SLIP IN A DATA FILE FAILS SILENTLY AND LOOKS LIKE A CONTENT BUG** — the app boots, throws
nothing, and reports **82** questions (cases only), because `Q_ENT` never parsed; it happened again
on 2026-08-04 from **one missing comma** before an appended entry. **`file://` gives only "Script
error." at line 0** — inline the data file into a scratchpad `<script>` for a real line number.

**Lecture text cache — complete 2026-07-26**, 146 files in `content\<subject>\lectures\*.txt`; **check
it before rendering anything** (the 10 failures: `ledger.md` §1). `SCHEDULE` — 38 days to 2026-08-31.

## The app

**Boots clean from `file://`** — zero console errors, 9 Clepsydra poses, **761 CSS rules with all 3
`max-aspect-ratio:5/4` blocks intact**, re-verified 2026-08-04. (761 counts **recursively** — the only
kind that sees a swallowed media block; a harness's own `<style>` adds to it. **⚠️ Match the block by
`media.mediaText`, not a regex on `5/4`** — Chrome normalises it to `5 / 4` and a tight regex reports
0.) **WCAG-AA clean** — 2026-07-28, 1,294 elements. **Re-audit after any colour change.**

**What it is now:** Greek light/dark design from the user's own artwork (2026-07-28), an ambient film,
and **the Clepsydra** — a hologram companion carrying the study-session timer (2026-08-02).
Import/Export were replaced by automatic `wardround.bak.<profileId>` snapshots. **Every rule, token
contract and trap is in `CLAUDE.md` §6, which loads alongside this file — NOT repeated here. History:
`ledger.md` §12. Backups: `archive\index.pre-*.html`.** Outstanding: the **Notion board and PDF
schedule still carry the old module colours**, knowingly accepted by the user.

**⚠️ THE ONE THING THAT MUST SURVIVE ANY SUMMARY: THE CLEPSYDRA IS THE USER'S OWN ARTWORK** — nine
poses at `app\assets\clep\*.png`, source at `Clypsedra\`. **Do not redraw her and do not draw
anything onto her.** Three rounds of wasted work in one day; the answer was always *ask for artwork*.

## Where transcription stands

**`ENT endpoint.pdf`: the three question sections and ALL SEVEN Model Final Exams are COMPLETE**,
every boundary verified by render — Ear pp.143–760 (243 entries), Nose pp.891–1185 (136), Throat
pp.1350–1720 (160), plus the exams; per-batch detail in `ledger.md` §"Transcribed ranges". **All
three SECTIONS share one shape:** MCQs printed **twice**, a title page, then a case section printed
**once**, two per page; **no case carries a printed explanation. ⚠️ The EXAMS have no case section.**

**Box presence is a property of the page, not the section.** Throat ran **103 consecutive answered
pages with none** (pp.1537–1720), so every entry from `entep-throat-70` on is authored; from Exam 2's
Q62 the style becomes a short red keyword lead-in; **Exams 4–7 box 74/77, 78/79, 76/77 and 70/78, and
4 of 4 mis-keys sat on a bare page — check every tile for box as for highlight.** ⚠️ The box often
falls BELOW the `-CropTop 0.32` cut, so a bare-looking tile may not be (p.2722): re-render to confirm.

**⚠️ For CASES the ANSWER decides fold-vs-variant, not the stem** (no options to compare) — worked
example in `ledger.md` §"Fold or variant".

## Four rules that change what you do first

**`ledger.md` §7 holds the rest — corrupt boxes, recycling, numbering, linked sets, layout and key
defects. Read it before opening `ENT endpoint.pdf`.**

- **ASSUME NOTHING FROM PAGE TO PAGE.** Parity, explanation boxes and reprint rate are all
  unpredictable. **Check every tile for a highlight before transcribing it.**
- **NEITHER THE PRINTED NUMBERS NOR THE PAGE COUNT COUNTS THE QUESTIONS.** Only reading every
  answered page does.
- **RUN THE DUPLICATE SWEEP OVER THE WHOLE FILE BEFORE WRITING A BATCH.** The file recycles across
  section boundaries; run *before* the writing it has caught **475 reprints with nothing wasted** —
  74/78/75/45/33/76/77 across Exams 1–7. **Normalise first** (lowercase, strip punctuation, **sort
  the options**). **⚠️ FIVE STAGES:** (A) stem + option set, (B) option set + key, (C) key + option
  count, (D) **≤1 DIFFERING TOKEN in the key** (symmetric difference — no ratio serves short and long
  answers alike), (E) **stem-token ranking, run over ALL of them**. Rationale: `ledger.md` §7.
- **⚠️ A–D ALL KEY ON THE ANSWER, SO A REWORDED OR RE-OPTIONED REPRINT PASSES THEM ALL, and E lists
  without deciding. Every stage's verdict is a shortlist.** The resolution step is not optional:
  **read side by side EVERY staged question whose OPTION SET differs from its stem twin — stages C, D
  and clean TOGETHER** (25 of 78 in Exam 7). **⚠️ The new question need not be in the clean column at
  all** — Exam 7's only one came out of stage C while its clean 3 were noise, and Exam 6's Q21 was
  never even ranked. **A 1.00 stem match that did NOT reach stage A or B is a re-optioned reprint by
  definition.** Then keyword-search every survivor **twice, differently worded** — that search has
  caught three things ranking could not. Worked failures: `ledger.md` §7 and the Exam 4–7 entries.

**Where the source prints no explanation box, the explanation is written here** — rule and marker in
`CLAUDE.md` §4. **476 of the 680 entries carry the marker — 70%** (395 MCQs + 81 of 82 cases),
measured 2026-08-04 in a real boot. **Seven tenths of ENT's explanations are written, not
transcribed — the real scope of the end-of-ENT review.** Recurring gaps: review item 4 below.

## Three question banks per module

`endpoint` / `house` / `gradegain`; map and cover-identification rule in `CLAUDE.md` §4. **Still
missing: House for Neuropsychiatry, Grade Gain for Pediatrics.** **⚠️ THE BANKS OVERLAP — one entry,
MANY banks (2026-08-03, user's request):** `bank` is where it was transcribed from, **`alsoIn` lists
every other bank printing it**, and it shows **once** however many are ticked. **When the sweep finds
a cross-bank match, add the bank, never an entry.** The `banksOf()` trap: `CLAUDE.md` §4. One so far.

## Owed in the end-of-ENT review

**Detail, ids and reasoning: `progress\ledger.md` §11. Work this list before Pediatrics begins.**

1. **⚠️ Sweep the WHOLE file for the "Ask ChatGPT" marker** — 5 known (pp.1011, 1015, 1489, 2146,
   2168), each found by eye, never by a search.
2. **67 entries record no provenance either way** — 46 inside `entep-ear-1`…`68`, all 21 House.
   Almost certainly authored, **not verified**. **⚠️ The exams may close much of this for free**:
   Exam 1 boxes `entep-ear-1…25`, `nose-1…24`, `throat-1…24`, Exams 2–3 box `entep-ear-26…53`.
   Check before re-rendering pp.144–342.
3. **Re-run the duplicate check per module as it completes** — all **five** stages of it.
4. **⚠️ The nasopharynx — the highest-value single gap in ENT.** Up to **27** entries rest on outside
   knowledge (upper bound, unverified); **one ENT-nose-book read fixes it**, with item 5. Plus
   **fourteen Throat slide gaps** (**Vincent's angina**, **leucoplakia**, the **thyroglossal cyst's
   tongue-protrusion sign** — absent from **all 32** ENT files), **three Nose gaps** (dangerous area
   of the face, CSF-leak management, ammonia as a trigeminal stimulus), and **the eponymous signs**.
5. **⚠️ Eleven disputed printed keys, each transcribed as keyed with both readings recorded in its
   own entry — reasoning in `ledger.md` §11 and in the Exam 4–7 entries.** `entep-throat-77` and
   Exam 1's **Q16 p.1753** are **settled as the bank's own position** (reprinted identically), not
   slips. The rest: `entep-throat-83`, Q136/Q153 of pp.1617–1706, Exam 1's **Q13 p.1747**,
   `entep-mfe4-16`, `entep-mfe5-20`, `entep-mfe6-1`, **`entep-mfe7-1`** and **`entep-nose-2`**.
   **FIVE are self-contradictions** — the bank keys a question correctly, reprints it, re-keys it
   wrongly: `entep-mfe4-8`↔`entep-mfe4-32`, `entep-mfe5-20`↔its own p.2438 table,
   `entep-mfe6-1`↔`entep-ear-59` (now contradicted by **four** sources), and **Exam 7's two on
   consecutive questions** — `entep-mfe7-1`↔`entep-nose-19` (**the bank deleted the correct answer
   from its own option list**) and `entep-nose-2`↔its p.2786 reprint.
6. **A full content and design review**, at the user's request, before the other three modules.

## Environment

**Full details in `progress\ledger.md` §13** — Poppler's PATH trap, the browsers, the PowerShell
image pipeline, what is absent, two native-exe gotchas. What changes what you do first:

- **Poppler is installed** and handles the 332 MB file; **`pdftotext` returns 0 characters on every
  book and question bank**, so scans must be rendered to PNG and read as images. **The read tool
  rejects PDFs over 100 MB** — all 7 books and 3 of the 7 banks.
- **No Python, Node, ImageMagick, Ghostscript or `gh` CLI**; images via PowerShell `System.Drawing`,
  video via **ffmpeg** (off PATH). **Headless Chrome is the only way to screenshot or probe the app.**
  **Chrome and Canva are available for producing diagrams** for the theory (user, 2026-08-04).
- **The project is on GitHub, PRIVATE**: `mahmoudbanna23-ctrl/Herophilus`, branches `main` and
  `design/clepsydra-and-sessions` (holds the Clepsydra artwork — the only copy off this drive).
  `Semester 8\` and `files.zip` gitignored — **ledger §13 for the push method.** Sources: ledger §9.

## Deadline and open items

**Semester 8 exam period: approximately early September 2026** — the user's own estimate, not a
published date; consistent with the schedule ending 2026-08-31. **Do not rebuild the schedule on it.**

- **Reading all 1,637 book pages is not realistic.** Book reading is driven by the questions and by
  gaps in the slides, using each book's contents page to locate ranges. **A chapter resting on slides
  and questions alone must be reported as such.**
- **Measure, then believe.** *Check the sum before recording any number* — a count that did not
  reconcile has been written down **five times**, including "156 authored passages" against a measured
  473, and a MEMORY line count read via `Measure-Object -Line`, **which skips blank lines** (use
  `(Get-Content).Count`). *Check the auditor* — **three** contrast auditors gave false failures
  (`CLAUDE.md` §7). *Reconcile the batch* — written + dropped must equal staged, page by page.
- **Cleanup awaiting approval** — `Opthalmo\…\drive-download-…-001.zip` (173 MB) duplicates all 29
  loose Ophthalmology lecture files; two Pediatrics PPT files are broken stubs (134 B, 120 B), both
  inside protected `Semester 8\`; also `files.zip`. **Nothing deleted without a yes.**
