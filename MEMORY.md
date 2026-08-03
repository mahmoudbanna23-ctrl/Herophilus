# Herophilus — Memory

Running record. ISO dates only; anything unverified is marked as such. **Holds only what is needed to
pick the work up cold; stays under 200 lines.** Method and rules live in `CLAUDE.md`, detail and
history in `progress\ledger.md`; **`CLAUDE.md` imports this file, so repeating one of its rules here
buys nothing and costs the budget.** Organised around *resuming*, not *when things happened*.

## Resume here

**`ENT endpoint.pdf` p.2505 — Model Final Exam 6 (pp.2505–2659), then Exam 7 (pp.2660–2816).
Exams 1–5 are DONE.**

**⚠️ "THE MODEL EXAMS ARE COMPILATIONS" IS DEAD — Exams 4 and 5 broke it and stayed broken.** Five
exams, **387 printings read, 82 new**: Exam 1 pp.1721–1875, 77 printings, **3** (`entep-mfe1-1…3`);
Exam 2 pp.1876–2034, 78 (**71 used twice**), **0**; Exam 3 pp.2035–2189, 76 (**no Q20**), **1**;
Exam 4 pp.2190–2344, 77, **32**; Exam 5 pp.2345–2504, 79 (**45 AND 55 each used twice**), **46**.
98% reprint for the first three, **58% then 42%** for the last two. **Budget 6 and 7 as unknown.**
Still settled: each exam **is printed twice** and **does not end with a case set**. **⚠️ SAMPLE FOR
STRUCTURE, NEVER FOR REPRINT RATE, NEVER FOR WHERE A SHIFT IS** — a 15-page spread of Exam 2
predicted "mostly new" (it had zero) and placed both parity shifts wrong.

**⚠️ ~~EVERY PARITY SHIFT IS A SPILL PAGE~~ — RETIRED by Exam 5.** Three causes, **only two visible
on the tile**: a stray *unanswered* page (no highlight), a *spill* page (prose, not a question) — and
**a stray ANSWERED page reprinted out of sequence, which looks completely normal** (p.2436). **When
parity shifts and neither visible cause explains it, render the whole run through it consecutively**
— sampling either side shows the shift, never its cause. Exams 1 and 4 do not shift at all, but at
**opposite** parities, so stable ≠ predictable.

**Method: THREE passes.** (1) Read at `-CropTop 0.32` (18/sheet, `Cols 3 -Dpi 110` — stem, options,
highlight; box clipped) and run the **five-stage** sweep. (2) Resolve the survivors — the "clean is a
shortlist" rule below; not optional. (3) Re-render true survivors only, at `-CropTop 0.40 -Cols 2`,
for their boxes. `ledger.md` §7.

After Exams 6–7: Recently Edited (~10 answered pages), Exam Night Review (~120), then the six other
banks — **~245 answered pages remain**, new-question count genuinely unpredictable. **Order of work:**
ENT → Pediatrics → Ophthalmology → Neuropsychiatry, all questions first across all four modules, then
theory. **The ENT review below is owed before Pediatrics.**

## What exists

**104 chapters** — ENT 30, Ophthalmology 26, Neuropsychiatry 27, Pediatrics 21. **All content is ENT
so far**; the other three hold **0** questions and **no module has any theory written**.
`QUESTIONS.length` is **678** — 596 MCQs + 82 cases in one array, **all 30 ENT chapters holding ≥1**.
By bank: **658 Endpoint, 21 House, 0 Grade Gain** — 679, because one question is in two banks.

**Fully validated in a real `file://` boot, 2026-08-03** — 0 bad module/chapter refs, 0
chapter/module mismatches, 0 duplicate ids, every `answer` index in range, nothing missing a
`source`/`explanation`/`objective`, every `THEORY` `qs` id resolving, **0 dead backticked id
references in prose**. Re-run after every batch (`CLAUDE.md` §7). **⚠️ ANY SYNTAX SLIP IN A DATA FILE
FAILS SILENTLY AND LOOKS LIKE A CONTENT BUG** — the app boots, throws nothing, and reports **82**
questions (cases only), because `Q_ENT` never parsed. **`file://` gives only "Script error." at line
0** — for a real line number, inline the data file into a `<script>` in the scratchpad and load that.

**Lecture text cache — complete 2026-07-26.** 146 files in `content\<subject>\lectures\*.txt`, 1.78
MB; 131 of 140 lecture PDFs and 15 of 16 PowerPoints yielded text. **Check it before rendering
anything**; the 10 failures are in `ledger.md` §1. `SCHEDULE` — 38 days to 2026-08-31, no chapter ids.

## The app

**Boots clean from `file://`** — zero console errors, everything above rendering, 9 Clepsydra poses,
**761 CSS rules with all 3 `max-aspect-ratio:5/4` blocks intact**, re-verified 2026-08-03. (761
counts rules **recursively** — the only kind that can see a swallowed media block; **a harness's own
`<style>` adds to it, so the boot check reads 763**.) **Fully WCAG-AA clean** — 2026-07-28, 1,294
text elements, 5 views × 2 themes. **Re-audit after any colour change**; a palette move inverted a fix.

**What it is now:** Greek light/dark design from the user's own artwork (2026-07-28), an ambient film,
and **the Clepsydra** — a hologram companion carrying the study-session timer (2026-08-02).
Import/Export were replaced by automatic `wardround.bak.<profileId>` snapshots. **Every rule, token
contract and trap is in `CLAUDE.md` §6, which loads alongside this file — deliberately NOT repeated
here. History: `ledger.md` §12. Backups: `archive\index.pre-*.html`.** Outstanding: the **Notion
board and PDF schedule still carry the old module colours**, knowingly accepted by the user.

**⚠️ THE ONE THING THAT MUST SURVIVE ANY SUMMARY: THE CLEPSYDRA IS THE USER'S OWN ARTWORK** — nine
poses at `app\assets\clep\*.png`, source at `Clypsedra\`. **Do not redraw her and do not draw
anything onto her.** Three rounds of wasted work in one day; each time the answer was *ask for
artwork, do not manufacture it*.

## Where transcription stands

**`ENT endpoint.pdf`: the three question sections and Model Final Exams 1–5 are COMPLETE**, every
boundary verified by render — Ear pp.143–760 (243 entries), Nose pp.891–1185 (136), Throat
pp.1350–1720 (160), plus the exams above; per-batch detail in `ledger.md` §"Transcribed ranges".
**All three SECTIONS share one shape:** MCQs printed **twice**, then a title page, then a case section
printed **once**, two per page; **not one of the 84 cases carries a printed explanation. ⚠️ The MODEL
EXAMS do NOT follow this shape — no case section at all.**

**Box presence is a property of the page, not the section.** Throat ran **103 consecutive answered
pages with none** (pp.1537–1720), so every entry from `entep-throat-70` on is authored; from Exam 2's
Q62 the style becomes a short red keyword lead-in; **Exams 4 and 5 box 74/77 and 78/79 — the bare
pages (2324, 2328, 2338; 2435) are easy to miss. Check every tile for the box as for the highlight.**

**⚠️ For CASES the ANSWER decides fold-vs-variant, not the stem** — a case has no options to compare.
Worked example: `ledger.md` §"Fold or variant".

## Four rules that change what you do first

**`ledger.md` §7 holds the rest** — corrupt boxes, the recycling pattern, unreliable numbering,
linked sets, layout and key defects. **Read it before opening `ENT endpoint.pdf`.**

- **ASSUME NOTHING FROM PAGE TO PAGE.** Parity, explanation boxes and reprint rate are all
  unpredictable. **Check every tile for a highlight before transcribing it.**
- **NEITHER THE PRINTED NUMBERS NOR THE PAGE COUNT COUNTS THE QUESTIONS.** Only reading every
  answered page does.
- **RUN THE DUPLICATE SWEEP OVER THE WHOLE FILE BEFORE WRITING A BATCH.** The file recycles across
  section boundaries; run *before* the writing it has caught **322 reprints with nothing wasted** —
  74/78/75/45/33 across Exams 1–5. **Normalise first** (lowercase, strip punctuation, **sort the
  options**). **⚠️ FIVE STAGES**, C and D listing candidates for the eye rather than deciding:
  (A) stem + option set, (B) option set + key, (C) key + option count, (D) **≤1 DIFFERING TOKEN in
  the key** (symmetric difference — an ≥80% ratio missed "C2 **&** C3" against "C2 **and** C3", and
  no ratio serves short and long answers alike), (E) **stem-token ranking of everything A–D let
  through**. B alone has ever caught a cross-bank pair. Rationale: `ledger.md` §7.
- **⚠️ A–D ALL KEY ON THE ANSWER, SO A REWORDED REPRINT PASSES THEM ALL — and E can neither confirm
  nor rule out. A "clean" result is a shortlist, not a verdict**: 5 of Exam 4's 32 clean questions
  and 5 of Exam 5's 35 were reprints. **Three failure modes, one per pass:** a reword scores
  0.90–1.00 on the stem and needs E; **a 0.95 stem match can be a DIFFERENT question** (Exam 5's
  "**normal** cry" vs "**abnormal** cry" inverts the answer), so E never auto-folds; **a tie in E's
  ranking silently hides the loser** (Ludwig's angina, 0.73). Rank, then keyword-search each survivor
  **twice, differently worded**. Both extra passes are mandatory.

**Where the source prints no explanation box, the explanation is written here** — rule and marker in
`CLAUDE.md` §4. **474 of the 678 entries carry the marker — 70%** (393 MCQs + 81 of the 82 cases),
measured 2026-08-03 in a real boot; this file said "156" until then, wrong by a factor of three
(`ledger.md` §10). **Seven tenths of ENT's explanations are written rather than transcribed — that
is the real scope of the end-of-ENT review.** The share is falling because the model exams print
boxes: Exams 4–5 added 78 entries and only 4 authored ones. Recurring gaps: review item 4 below.

## Three question banks per module

`endpoint` / `house` / `gradegain`; map and cover-identification rule in `CLAUDE.md` §4. **Still
missing: House for Neuropsychiatry, Grade Gain for Pediatrics** — not yet supplied.

**⚠️ THE BANKS OVERLAP — one entry, MANY banks (2026-08-03, user's request).** `bank` is the bank a
question was transcribed from; **`alsoIn:['house']` lists every other bank that prints it.** It shows
under any of its banks, **once however many are ticked**. **When the sweep finds a cross-bank match,
add the bank, never an entry.** Rules and the `banksOf()` trap: `CLAUDE.md` §4. One so far
(`entep-throat-103`); expect more.

## Owed in the end-of-ENT review

**Detail, ids and reasoning: `progress\ledger.md` §11. Work this list before Pediatrics begins.**

1. **⚠️ Sweep the WHOLE file for the "Ask ChatGPT" marker** — 5 known (pp.1011, 1015, 1489, 2146,
   2168), each found by eye, never by a search.
2. **67 entries record no provenance either way** — 46 inside `entep-ear-1`…`68`, all 21 House.
   Almost certainly authored, **not verified**. **⚠️ The Model Final Exams may close much of this for
   free**: Exam 1 boxes `entep-ear-1…25`, `nose-1…24`, `throat-1…24`, Exams 2–3 box `entep-ear-26…53`
   — exactly the early no-provenance entries. Check before re-rendering pp.144–342. **Weigh against
   the 474 authored explanations above — the real scope of the review.**
3. **Re-run the duplicate check per module as it completes** — all **five** stages of it.
4. **⚠️ The nasopharynx — the highest-value single gap in ENT.** Up to **27** entries rest on outside
   knowledge (upper bound, unverified). **One ENT-nose-book read fixes it**, with item 5. Plus
   **fourteen Throat slide gaps** (**Vincent's angina**, **leucoplakia**, the **thyroglossal cyst's
   tongue-protrusion sign** — absent from **all 32** ENT files), **three Nose gaps** (dangerous area
   of the face, CSF-leak management, ammonia as a trigeminal stimulus), and **the eponymous signs**.
5. **⚠️ Eight disputed printed keys, all transcribed as keyed with both readings recorded** —
   `entep-throat-77`, `83`, Q136/Q153 of pp.1617–1706 (**Case 10 p.1712 clashes as Q153 does**);
   Exam 1's **Q13 p.1747** (*epiglottitis* in a **newborn**) and **Q16 p.1753** (*medical treatment*
   for a **teacher** with bilateral cord oedema, where voice therapy is standard — but **Exams 2–3
   key it the same way**, so that is the bank's settled position, not a slip); **`entep-mfe4-16`**
   (plain X-ray for **middle-third facial** trauma, imaged by CT); **`entep-mfe5-20`** (bilateral
   adductor palsy keyed *hoarseness* + aspiration where `L11) Vocal cord paralysis.pdf` tabulates
   **aphonia**; **no offered option matches the slide**). **Plus TWO self-contradictions, each within
   one exam:** `entep-mfe4-8` keys a "**supraclavicular** primary" against a box explaining a **head
   and neck** one, printed correctly at `entep-mfe4-32`; and `entep-mfe5-20` (p.2435) is contradicted
   by **its own table at p.2438**.
6. **A full content and design review**, at the user's request, before the other three modules.

## Environment

**Full details in `progress\ledger.md` §13** — Poppler's PATH trap, the browsers, the PowerShell
image pipeline, what is absent, two native-exe gotchas. What changes what you do first:

- **Poppler is installed** and handles the 332 MB file; **`pdftotext` returns 0 characters on every
  book and question bank**, so scans must be rendered to PNG and read as images. **The read tool
  rejects PDFs over 100 MB** — all 7 books and 3 of the 7 banks.
- **No Python, Node, ImageMagick, Ghostscript or `gh` CLI**; images via PowerShell `System.Drawing`,
  video via **ffmpeg** (off PATH). **Headless Chrome is the only way to screenshot the app.**
- **The project is on GitHub, PRIVATE**: `mahmoudbanna23-ctrl/Herophilus`, branches `main` and
  `design/clepsydra-and-sessions` (holds the Clepsydra artwork — the only copy off this drive).
  `Semester 8\` and `files.zip` gitignored — **ledger §13 for the push method.**
- Sources — ledger §9: 140 lecture PDFs, 16 PowerPoints, 7 books (1,637 pp.), 7 banks. **`ENT
  endpoint.pdf` is bank AND theory source**: 3,075 pp., 332 MB, no text, 800×450 JPEG/page.

## Deadline and open items

**Semester 8 exam period: approximately early September 2026** — the user's own estimate, not a
published date; consistent with the schedule ending 2026-08-31. **Do not rebuild the schedule on it.**

- **Reading all 1,637 book pages is not realistic.** Book reading is driven by the questions and by
  gaps in the slide text, using each book's contents page to locate ranges. **A chapter resting on
  slides and questions alone must be reported as such**, never implied to have book coverage.
- **Measure, then believe.** *Check the sum before recording any number* — a count that did not
  reconcile has been written down **four times**, most recently "156 authored passages" against a
  measured **473**. *Check the auditor before believing the audit* — **three** contrast auditors gave
  false failures (`CLAUDE.md` §7). *Reconcile the batch* — 46 written + 33 dropped = 79 staged for
  Exam 5, every staged page matched to an entry or a drop; that found a 5th hidden reprint the sweep
  notes had missed. Every one was caught by re-measuring, never by re-reading.
- **Cleanup awaiting approval** — `Opthalmo\…\drive-download-…-001.zip` (173 MB) duplicates all 29
  loose Ophthalmology lecture files; two Pediatrics PPT files are broken stubs (134 B, 120 B), all
  inside protected `Semester 8\`; also `files.zip`. **Nothing deleted without a yes.**
