# Herophilus — Memory

Running record for the Herophilus project. ISO dates only; anything unverified is marked as such
rather than filled in. **This file holds only what is needed to pick the work up cold, and stays
under 200 lines** — method and rules live in `CLAUDE.md`, detail and history in
`progress\ledger.md`. **`CLAUDE.md` imports this file, so both are always in context: repeating a
rule from `CLAUDE.md` here buys nothing and costs the budget.** Organised around *resuming the work*,
not *when things happened* (2026-07-28; previous version in `archive\`).

## Resume here

**`ENT endpoint.pdf` p.2190 — Model Final Exam 4 (pp.2190–2344). Exams 1–3 are DONE.**

**The model exams are COMPILATIONS — established across three of them now, not inferred from one.
231 printings read, 4 new questions:** Exam 1 pp.1721–1875, 77 printings, **3** new
(`entep-mfe1-1…3`); Exam 2 pp.1876–2034, 78 printings (**the number 71 is used twice**), **0** new;
Exam 3 pp.2035–2189, 76 printings (**there is no Q20**), **1** new (`entep-mfe3-1`). Exam 1 re-prints
the *first* ~25 of each section in blocks; Exams 2 and 3 reach deeper and interleave. Settled:
**each exam IS printed twice** (unanswered then answered) and **does NOT end with a case set**.

**⚠️ SAMPLE FOR STRUCTURE, NEVER FOR REPRINT RATE — AND NEVER FOR WHERE A SHIFT IS.** A 15-page
spread of Exam 2 predicted "mostly new" (wrong: zero new) and put its two parity shifts at Q42–Q51
and Q71–Q73 (**both wrong**: Q29/Q30 and Q44/Q45). Both errors were made and corrected the same week.
A sample shows the option count and *that* parity is unstable; nothing else.

**⚠️ EVERY PARITY SHIFT IS A SPILL PAGE** — a box too tall for its tile, given a page of its own; all
four in the model exams (pp.1935, 1966, 2038, 2171), and Exam 3 shifts at **Q1**. **Check every
tile.**

**Method: two passes.** Read at `-CropTop 0.32` (18 per sheet — stem, options, highlight; box
clipped), sweep, then re-render **only the survivors** at `0.45` for their boxes. `ledger.md` §7.

After Exams 4–7: Recently Edited (~10 answered pages), Exam Night Review (~120), then the six other
banks. **~400 answered pages remain in `ENT endpoint.pdf`**, but on three exams' evidence the *new*
question count is far below that. **Order of work:** ENT → Pediatrics → Ophthalmology →
Neuropsychiatry — all questions first across all four modules, then theory. **The full ENT review
below is owed before Pediatrics begins.**

## What exists

**104 chapters** — ENT 30, Ophthalmology 26, Neuropsychiatry 27, Pediatrics 21. **All content is ENT
so far**; the other three hold **0** questions and **no module has any theory written**.
`QUESTIONS.length` is **601** — 519 MCQs + 82 cases in one array. By bank: **580 Endpoint, 21 House,
0 Grade Gain**. **All 30 ENT chapters hold ≥1 question.**

**Fully validated in a real `file://` boot, 2026-08-03** — all 601 present, 0 bad module or chapter
refs, 0 duplicate ids, every `answer` index in range, nothing missing a `source`, `explanation` or
`objective`, every `THEORY` `qs` id resolving, 0 console errors. Re-run after every batch
(`CLAUDE.md` §7). **⚠️ ANY SYNTAX SLIP IN A DATA FILE FAILS SILENTLY AND LOOKS LIKE A CONTENT BUG** —
the app boots, throws nothing visible, and reports **82** questions (cases only), because `Q_ENT`
never parsed and the error listener is registered by a later script. Hit twice on 2026-08-03: `\\'`
where `\'` was meant, and **a missing comma after what used to be the last array element**.
**⚠️ `file://` reports only "Script error." at line 0** — for a real line number, inline the data file
into a `<script>` block in the scratchpad and load that.

**Lecture text cache — complete 2026-07-26.** 146 files in `content\<subject>\lectures\*.txt`,
1.78 MB; 131 of 140 lecture PDFs and 15 of 16 PowerPoints yielded text. **Check this cache before
rendering anything.** The 10 failures are in `progress\ledger.md` §1.
`SCHEDULE` — 38 days, 2026-07-25 → 2026-08-31; carries no chapter ids, so restructuring cannot
break it.

## The app

**Boots clean from `file://`** — zero console errors, 4 modules, 104 chapters, 601 questions, home
rendering all 4 module cards, 9 Clepsydra poses, **761 CSS rules with all 3 `max-aspect-ratio:5/4`
blocks intact**, re-verified 2026-08-03. (761 counts rules **recursively** — the only kind that can
see a swallowed media block; the older 708/710 figures were top-level and are not comparable.)
`app\index.html` 272 KB, `fonts.js` 128 KB, `app\assets\` 2,344 KB (`clep\` 1,082 KB of it); bundle
**4.77 MB**. **Fully WCAG-AA clean** — re-audited 2026-07-28: 1,294 text elements, 5 views × 2
themes, **zero real failures**. **Re-audit after any colour change**; a palette move inverted one fix.

**What it is now:** Greek light/dark design from the user's own artwork (2026-07-28), an ambient film,
and **the Clepsydra** — a hologram companion carrying the study-session timer (2026-08-02).
Import/Export were replaced by automatic `wardround.bak.<profileId>` snapshots. **Every rule, token
contract and trap is in `CLAUDE.md` §6, which loads alongside this file — deliberately NOT repeated
here. History: `ledger.md` §12. Backups: `archive\index.pre-*.html`.**

**⚠️ THE ONE THING THAT MUST SURVIVE ANY SUMMARY: THE CLEPSYDRA IS THE USER'S OWN ARTWORK** — nine
poses at `app\assets\clep\*.png`, source at `Clypsedra\`. **Do not redraw her and do not draw
anything onto her.** Three rounds of wasted work in one day; each time the answer was *ask for
artwork, do not manufacture it*.

**Still outstanding:** the **Notion board and PDF schedule carry the old module colours** — the user
accepted that divergence knowingly.

## Where transcription stands

**`ENT endpoint.pdf`: the three question sections and Model Final Exams 1–3 are COMPLETE**, every
boundary verified by render — Ear pp.143–760 (243 entries), Nose pp.891–1185 (136), Throat
pp.1350–1720 (160), Exam 1 pp.1721–1875 (3), Exam 2 pp.1876–2034 (**0**), Exam 3 pp.2035–2189 (1).
Detail: `ledger.md` §"Transcribed ranges".

**All three SECTIONS share one shape:** MCQs printed **twice**, then a title page, then a case
section printed **once**, two per page. **Not one of the 84 cases carries a printed explanation.**
**⚠️ The MODEL EXAMS do NOT follow this shape — they carry no case section at all.** Parity flipped
four times across Ear and Throat, twice inside Exam 2 and twice inside Exam 3: **never assume it.**

**Box presence is a property of the page, not the section.** The Throat section ran **103 consecutive
answered pages with none** (pp.1537–1720), so every entry from `entep-throat-70` on is authored;
Exam 1 then printed a box on **all 77**. **From Exam 2's Q62 the box style changes** — short, red
keyword lead-in, commentary rather than textbook.

**⚠️ For CASES the ANSWER decides fold-vs-variant, not the stem** — a case has no options to compare,
so it is the only test available. Worked example and precedent: `ledger.md` §"Fold or variant".

## Three rules that change what you do first

`progress\ledger.md` §7 holds the rest — corrupt explanation boxes, the recycling pattern, unreliable
numbering, deliberate repetition, linked sets, layout and key defects, and the bank's own wrong
answers. **Read §7 before opening `ENT endpoint.pdf`.** These three govern the batch:

- **ASSUME NOTHING FROM PAGE TO PAGE.** Parity, explanation boxes and reprint rate are all
  unpredictable. **Check every tile for a highlight before transcribing it.**
- **NEITHER THE PRINTED NUMBERS NOR THE PAGE COUNT COUNTS THE QUESTIONS.** Only reading every
  answered page does.
- **RUN THE DUPLICATE SWEEP OVER THE WHOLE FILE BEFORE WRITING A BATCH.** The file recycles across
  section boundaries; since the sweep moved *before* the writing it has caught **244 reprints with
  nothing wasted** — 74 in Exam 1, 78 in Exam 2, 75 in Exam 3. **Normalise first** — lowercase, strip
  punctuation, **sort the options**; the sorted option-set check is the only one that has ever caught
  a cross-bank pair. **⚠️ FOUR CHECKS ARE NOW REQUIRED**, the last two listing candidates for the eye
  rather than deciding: (3) keyed answer plus option count, (4) **token comparison on the keyed
  answer**. A one-word or one-character difference survives normalisation and defeats everything
  stricter — the source's own misspellings ("Retroaryngeal", "leminiscus", "Thyroiepiglottic", "MRL")
  and inserted words ("increases **on** movement", "at **the** cricoid region", "C2 **&** C3").
  **⚠️ Check 4 shipped as an ≥80% ratio, caught one reprint on its first run and missed another at
  0.75 — one word out of four. A ratio cannot serve short and long answers alike: flag on ≤1
  DIFFERING TOKEN instead.**

**Where the source prints no explanation box, the explanation is written here** — the rule and its
marker are in `CLAUDE.md` §4. **156 passages** carry the flag. Grep for the live gap list; the
recurring ones are the nasopharynx, the eponymous signs, Vincent's angina and leucoplakia.

## Three question banks per module

`endpoint` / `house` / `gradegain`; map and cover-identification rule in `CLAUDE.md` §4.
**Still missing: House for Neuropsychiatry, Grade Gain for Pediatrics** — not yet supplied.

**⚠️ THE BANKS OVERLAP — and a duplicate spanning two banks is NEVER folded.** `bank` is content the
learner filters on, so deleting either copy would misreport what that bank contains. **The one
standing exception to the delete-duplicates rule** (precedent: `enthd-ear-15` / `entep-throat-103`);
expect many more as the other banks are transcribed.

## Owed in the end-of-ENT review

**Detail, ids and reasoning: `progress\ledger.md` §11. Work this list before Pediatrics begins.**

1. **⚠️ Sweep the WHOLE file for the "Ask ChatGPT" marker** — scope widened 2026-08-03; 5 known
   (pp.1011, 1015, 1489, **2146**, **2168**), each found by eye, never by a search.
2. **67 entries record no provenance either way** — 46 inside `entep-ear-1`…`68` and all 21 House.
   Almost certainly authored, **not verified**. **⚠️ The Model Final Exams may close much of this for
   free**: Exam 1 boxes `entep-ear-1…25`, `nose-1…24`, `throat-1…24`, and Exams 2–3 box
   `entep-ear-26…53` — exactly the early no-provenance entries. Check before re-rendering pp.144–342.
3. **Re-run the duplicate check per module as it completes** — all **four** variants of it.
4. **⚠️ The nasopharynx — the highest-value single gap in ENT.** Up to **27** entries rest on outside
   knowledge (upper bound, unverified). **One ENT-nose-book read fixes it**, with item 6.
5. **Fourteen Throat slide gaps** (**Vincent's angina**, **leucoplakia**, the **thyroglossal cyst's
   tongue-protrusion sign** — that last absent from **all 32** ENT files) and **three Nose gaps**
   (dangerous area of the face, CSF-leak management, ammonia as a trigeminal stimulus).
6. **⚠️ Four disputed printed keys** — `entep-throat-77`, `83`, Q136/Q153 of pp.1617–1706, all
   transcribed **as keyed** with both readings recorded; **Case 10 (p.1712) clashes as Q153 does.**
   Two more from Exam 1: **Q13 p.1747** keys *epiglottitis* in a **newborn**; **Q16 p.1753** keys
   *medical treatment and follow-up* for a **teacher** with bilateral cord oedema where voice therapy
   is standard teaching — **Exams 2 and 3 key it the same way again** (pp.1902, 2134), so it is the
   bank's settled position, not a slip.
7. **A full content and design review**, at the user's request, before the other three modules.

## Environment

**Full details in `progress\ledger.md` §13** — Poppler and its PATH trap, the browsers, the
PowerShell image pipeline, what is absent, two native-exe gotchas. What changes what you do first:

- **Poppler is installed** and handles the 332 MB file; **`pdftotext` returns 0 characters on every
  book and question bank**, so scans must be rendered to PNG and read as images. **The read tool
  rejects PDFs over 100 MB** — all 7 books and 3 of the 7 banks.
- **No Python, Node, ImageMagick, Ghostscript or `gh` CLI**; images via PowerShell `System.Drawing`,
  video via **ffmpeg** (off PATH). **Headless Chrome is the only way to screenshot the app.**
- **The project is on GitHub, PRIVATE**: `mahmoudbanna23-ctrl/Herophilus`. Branches `main` and
  `design/clepsydra-and-sessions` (pushed 2026-08-03, holds the Clepsydra artwork — the only copy off
  this drive). `Semester 8\` and `files.zip` gitignored — **ledger §13 for the push method.**

Source inventory — ledger §9: 140 lecture PDFs, 16 PowerPoints, 7 books (1,637 pages), 7 banks.
**`ENT endpoint.pdf` is bank AND theory source**: 3,075 pages, 332 MB, no text, 800×450 JPEG/page.

## Deadline

**Semester 8 exam period: approximately early September 2026** — the user's own estimate, not a
published date, consistent with the schedule ending 2026-08-31. **Do not rebuild the schedule on it.**

## Open items

- **Reading all 1,637 book pages is not realistic.** Book reading is driven by the questions and by
  gaps in the slide text, using each book's contents page to locate ranges. **A chapter resting on
  slides and questions alone must be reported as such**, never implied to have book coverage.
- **Measure, then believe.** *Check the sum before recording any number* — a count that did not
  reconcile has been written down **three times**. *Check the auditor before believing the audit* —
  **three** contrast auditors produced false failures (`CLAUDE.md` §7), each caught by re-measuring.
- **Cleanup awaiting approval** — `Opthalmo\…\drive-download-…-001.zip` (173 MB) duplicates all 29
  loose Ophthalmology lecture files; two Pediatrics PPT files are broken stubs (`  Myocardial
  diseases.pdf` 134 B, `  stenotic lesions.pdf` 120 B). All inside protected `Semester 8\` —
  **nothing deleted without a yes.** Also `files.zip`, the redundant original.
