# Herophilus — Memory

Running record, organised around *resuming*. ISO dates; unverified is marked as such. **Only what is
needed to pick the work up cold; under 200 lines.** Method in `CLAUDE.md`, detail and history in
`progress\ledger.md` — **`CLAUDE.md` imports this file, so repeating its rules here costs budget.**

## Resume here

**`ENT endpoint.pdf` p.2660 — Model Final Exam 7 (pp.2660–2816), the last of the block.
Exams 1–6 are DONE.**

**⚠️ THE REPRINT RATE HAS NO TREND — DO NOT EXTRAPOLATE IT.** Six exams, pp.1721–2659, **464
printings read, 83 new** — 3 / 0 / 1 / **32** / **46** / 1, i.e. **96 → 100 → 99 → 58 → 42 → 99%
reprint**: two exams broke the compilation pattern and the next restored it. **The printed numbering
lies** — Exam 2 uses 71 twice, Exam 3 has no Q20, Exam 5 uses 45 AND 55 twice. **Budget Exam 7 as
unknown.** Still settled: each exam **is printed twice** and **ends with no case set**. **⚠️ SAMPLE
FOR STRUCTURE, NEVER FOR REPRINT RATE OR FOR WHERE A SHIFT IS** — a 15-page spread of Exam 2
predicted "mostly new" (it had zero) and placed both parity shifts wrong.

**⚠️ EACH OF EXAMS 4, 5 AND 6 HOLDS ONE SELF-CONTRADICTION, always the same shape:** a question the
bank already keyed correctly, reprinted and **re-keyed wrongly** (66 / 3 / 47 pages apart). **Go
looking for it.**

**⚠️ ~~EVERY PARITY SHIFT IS A SPILL PAGE~~ — RETIRED by Exam 5.** Three causes, **only two visible
on the tile**: a stray *unanswered* page (no highlight), a *spill* page (prose, not a question) — and
**a stray ANSWERED page reprinted out of sequence, which looks completely normal** (p.2436). **When
parity shifts and neither visible cause explains it, render the whole run through it consecutively**
— sampling either side shows the shift, never its cause. Exams 1, 4 and 6 do not shift at all, but
1 and 4 sit at **opposite** parities, so stable ≠ predictable.

**Method: THREE passes.** (1) Read at `-CropTop 0.32` (18/sheet, `Cols 3 -Dpi 110` — stem, options,
highlight; box clipped) and run the **five-stage** sweep. (2) Resolve the survivors — the "clean is a
shortlist" rule below; not optional. (3) Re-render true survivors at `-CropTop 0.40 -Cols 2` for
their boxes. `ledger.md` §7.

After Exam 7: Recently Edited (~10 answered pages), Exam Night Review (~120), then the six other
banks — **~207 answered pages remain**, new-question count genuinely unpredictable. **Order of work:**
ENT → Pediatrics → Ophthalmology → Neuropsychiatry, all questions first across all four modules, then
theory. **The ENT review below is owed before Pediatrics.**

## What exists

**104 chapters** — ENT 30, Ophthalmology 26, Neuropsychiatry 27, Pediatrics 21. **All content is ENT
so far**; the other three hold **0** questions and **no module has any theory written**.
`QUESTIONS.length` is **679** — 597 MCQs + 82 cases in one array, **all 30 ENT chapters holding ≥1**.
By bank: **659 Endpoint, 21 House, 0 Grade Gain** — 680, because one question is in two banks.

**Fully validated in a real `file://` boot, 2026-08-04** — 0 bad module/chapter refs, 0
chapter/module mismatches, 0 duplicate ids, every `answer` index in range, nothing missing a
`source`/`explanation`/`objective`, every `THEORY` `qs` id resolving, **0 dead backticked id
references in prose**. Re-run after every batch (`CLAUDE.md` §7). **⚠️ ANY SYNTAX SLIP IN A DATA FILE
FAILS SILENTLY AND LOOKS LIKE A CONTENT BUG** — the app boots, throws nothing, and reports **82**
questions (cases only), because `Q_ENT` never parsed. **`file://` gives only "Script error." at line
0** — for a real line number, inline the data file into a `<script>` in the scratchpad and load that.

**Lecture text cache — complete 2026-07-26**, 146 files in `content\<subject>\lectures\*.txt`.
**Check it before rendering anything**; the 10 failures are in `ledger.md` §1. `SCHEDULE` — 38 days
to 2026-08-31, no chapter ids.

## The app

**Boots clean from `file://`** — zero console errors, everything above rendering, 9 Clepsydra poses,
**761 CSS rules with all 3 `max-aspect-ratio:5/4` blocks intact**, re-verified 2026-08-04. (761
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
artwork, never manufacture it*.

## Where transcription stands

**`ENT endpoint.pdf`: the three question sections and Model Final Exams 1–6 are COMPLETE**, every
boundary verified by render — Ear pp.143–760 (243 entries), Nose pp.891–1185 (136), Throat
pp.1350–1720 (160), plus the exams above; per-batch detail in `ledger.md` §"Transcribed ranges".
**All three SECTIONS share one shape:** MCQs printed **twice**, then a title page, then a case section
printed **once**, two per page; **not one of the 84 cases carries a printed explanation. ⚠️ The MODEL
EXAMS do NOT follow this shape — no case section at all.**

**Box presence is a property of the page, not the section.** Throat ran **103 consecutive answered
pages with none** (pp.1537–1720), so every entry from `entep-throat-70` on is authored; from Exam 2's
Q62 the style becomes a short red keyword lead-in; **Exams 4–6 box 74/77, 78/79 and 76/77 — the bare
pages (2324, 2328, 2338; 2435; 2629) are easy to miss. Check every tile for box as for highlight.**

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
  section boundaries; run *before* the writing it has caught **398 reprints with nothing wasted** —
  74/78/75/45/33/76 across Exams 1–6. **Normalise first** (lowercase, strip punctuation, **sort the
  options**). **⚠️ FIVE STAGES**, C and D listing candidates for the eye rather than deciding:
  (A) stem + option set, (B) option set + key, (C) key + option count, (D) **≤1 DIFFERING TOKEN in
  the key** (symmetric difference — an ≥80% ratio missed "C2 **&** C3" against "C2 **and** C3", and
  no ratio serves short and long answers alike), (E) **stem-token ranking of everything A–D let
  through**. B alone has ever caught a cross-bank pair. Rationale: `ledger.md` §7.
- **⚠️ A–D ALL KEY ON THE ANSWER, SO A REWORDED REPRINT PASSES THEM ALL — and E can neither confirm
  nor rule out. A "clean" result is a shortlist, not a verdict**: 5 of Exam 4's 32 clean questions,
  5 of Exam 5's 35, 8 of Exam 6's 9. **Four failure modes:** a reword scores 0.90–1.00 on the stem
  and needs E; **a 0.95 stem match can be a DIFFERENT question** (Exam 5's "**normal**" vs
  "**abnormal** cry" inverts the answer), so E never auto-folds; **a tie in E's ranking hides the
  loser** (Ludwig's angina, 0.73); and **⚠️ RUN E ON ALL OF THEM, NOT JUST THE CLEAN SET** — Exam 6's
  Q21 went to stage C, whose answer-keyed list offered two unrelated vignettes, so it was never
  ranked and would have been declared new. Rank every staged question, then keyword-search each
  survivor **twice, differently worded** — that search has now caught three things ranking could not.

**Where the source prints no explanation box, the explanation is written here** — rule and marker in
`CLAUDE.md` §4. **475 of the 679 entries carry the marker — 70%** (394 MCQs + 81 of 82 cases),
measured 2026-08-04 in a real boot; this file said "156" until 2026-08-03, wrong by a factor of three
(`ledger.md` §10). **Seven tenths of ENT's explanations are written, not transcribed — the real scope
of the end-of-ENT review.** Recurring gaps: review item 4 below.

## Three question banks per module

`endpoint` / `house` / `gradegain`; map and cover-identification rule in `CLAUDE.md` §4. **Still
missing: House for Neuropsychiatry, Grade Gain for Pediatrics.**

**⚠️ THE BANKS OVERLAP — one entry, MANY banks (2026-08-03, user's request).** `bank` is the bank a
question was transcribed from; **`alsoIn:['house']` lists every other bank that prints it.** It shows
under any of its banks, **once however many are ticked**. **When the sweep finds a cross-bank match,
add the bank, never an entry.** Rules and the `banksOf()` trap: `CLAUDE.md` §4. One so far.

## Owed in the end-of-ENT review

**Detail, ids and reasoning: `progress\ledger.md` §11. Work this list before Pediatrics begins.**

1. **⚠️ Sweep the WHOLE file for the "Ask ChatGPT" marker** — 5 known (pp.1011, 1015, 1489, 2146,
   2168), each found by eye, never by a search.
2. **67 entries record no provenance either way** — 46 inside `entep-ear-1`…`68`, all 21 House.
   Almost certainly authored, **not verified**. **⚠️ The Model Final Exams may close much of this for
   free**: Exam 1 boxes `entep-ear-1…25`, `nose-1…24`, `throat-1…24`, Exams 2–3 box
   `entep-ear-26…53`. Check before re-rendering pp.144–342.
3. **Re-run the duplicate check per module as it completes** — all **five** stages of it.
4. **⚠️ The nasopharynx — the highest-value single gap in ENT.** Up to **27** entries rest on outside
   knowledge (upper bound, unverified). **One ENT-nose-book read fixes it**, with item 5. Plus
   **fourteen Throat slide gaps** (**Vincent's angina**, **leucoplakia**, the **thyroglossal cyst's
   tongue-protrusion sign** — absent from **all 32** ENT files), **three Nose gaps** (dangerous area
   of the face, CSF-leak management, ammonia as a trigeminal stimulus), and **the eponymous signs**.
5. **⚠️ Nine disputed printed keys, all transcribed as keyed with both readings recorded** —
   `entep-throat-77` (**reprinted identically at Exam 6 p.2599 → the bank's settled position, not a
   slip**), `83`, Q136/Q153 of pp.1617–1706 (**Case 10 p.1712 clashes as Q153 does**); Exam 1's
   **Q13 p.1747** (*epiglottitis* in a **newborn**) and **Q16 p.1753** (*medical treatment* for a
   **teacher** with bilateral cord oedema — **Exams 2–3 key it the same way**, likewise settled);
   **`entep-mfe4-16`** (plain X-ray for **middle-third facial** trauma, imaged by CT);
   **`entep-mfe5-20`** (bilateral adductor palsy keyed *hoarseness* + aspiration where `L11) Vocal
   cord paralysis.pdf` tabulates **aphonia**; **no offered option matches the slide**);
   **`entep-mfe6-1`** (profuse odourless otorrhoea keyed as NOT seen in tubotympanic CSOM, which
   `L16) Chronic otitis media.pdf` describes in those exact words). **Plus THREE self-contradictions,
   one per exam:** `entep-mfe4-8` vs `entep-mfe4-32` (66 pp. apart); `entep-mfe5-20` vs its own table
   at p.2438 (3 pp.); `entep-mfe6-1` vs `entep-ear-59` **and** vs this exam's own Q15 (47 pp.).
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
- Sources — ledger §9. **`ENT endpoint.pdf` is bank AND theory source**: 3,075 pp., 332 MB, no text.

## Deadline and open items

**Semester 8 exam period: approximately early September 2026** — the user's own estimate, not a
published date; consistent with the schedule ending 2026-08-31. **Do not rebuild the schedule on it.**

- **Reading all 1,637 book pages is not realistic.** Book reading is driven by the questions and by
  gaps in the slide text, using each book's contents page to locate ranges. **A chapter resting on
  slides and questions alone must be reported as such**, never implied to have book coverage.
- **Measure, then believe.** *Check the sum before recording any number* — a count that did not
  reconcile has been written down **four times**, most recently "156 authored passages" against a
  measured **473**. *Check the auditor* — **three** contrast auditors gave false failures
  (`CLAUDE.md` §7). *Reconcile the batch* — written + dropped must equal staged, page by page; that
  found a 5th hidden reprint in Exam 5. All caught by re-measuring, never by re-reading.
- **Cleanup awaiting approval** — `Opthalmo\…\drive-download-…-001.zip` (173 MB) duplicates all 29
  loose Ophthalmology lecture files; two Pediatrics PPT files are broken stubs (134 B, 120 B), both
  inside protected `Semester 8\`; also `files.zip`. **Nothing deleted without a yes.**
