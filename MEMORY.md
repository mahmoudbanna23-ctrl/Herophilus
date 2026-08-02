# Herophilus — Memory

Running record for the Herophilus project, imported by `CLAUDE.md`. ISO dates only; anything
unverified is marked as such rather than filled in. **This file holds only what is needed to pick the
work up cold** — method and rules live in `CLAUDE.md`, detail and history in `progress\ledger.md`.
Restructured 2026-07-28 around *resuming the work* rather than *when things happened*; previous
version at `archive\MEMORY.pre-restructure-2026-07-28.md`.

## Resume here

**`ENT endpoint.pdf` p.1721 — the 7 Model Final Exams (pp.1721–2816), ~548 answered pages.** The
largest block left in the project's largest source.

**Nothing about this block is verified.** Render p.1721 onward and settle two things before choosing
a batch size: **(1) is each exam printed twice**, unanswered then answered, and **(2) does an exam
end with a free-text case set** — as all three question sections did on both counts. Then run the
whole-file duplicate sweep **before writing anything**; a model exam is the likeliest place in the
file to recycle questions already held.

After that: Recently Edited (~10 answered pages), Exam Night Review (~120), then the six other banks.
**~678 answered pages remain in `ENT endpoint.pdf`.** **Order of work:** ENT → Pediatrics →
Ophthalmology → Neuropsychiatry — all questions first across all four modules, then theory. **The
full ENT review below is owed before Pediatrics begins.**

## What exists

| Module | Chapters | MCQs | Cases | Theory chapters |
|---|---|---|---|---|
| ENT | 30 | 515 | 82 | 0 |
| Ophthalmology | 26 | 0 | 0 | 0 |
| Neuropsychiatry | 27 | 0 | 0 | 0 |
| Pediatrics | 21 | 0 | 0 | 0 |
| **Total** | **104** | **515** | **82** | **0** |

`QUESTIONS.length` is **597** — MCQs and cases share one array. By bank: **576 Endpoint, 21 House,
0 Grade Gain** (no Grade Gain question transcribed yet in any module). **All 30 ENT chapters hold at
least one question.**

**Validated in-browser, and 597 confirmed in a real `file://` boot (2026-07-28):** 0 bad module or
chapter refs, 0 duplicate ids, 0 broken cross-references, every `answer` index in range, option
counts all 2–5, every case carrying a valid `answer` and non-empty `keys`, nothing missing a
`source`, `explanation` or `objective`, and the chapter split sums to 597 (so no sparse array hole).
**The preview pane serves a stale snapshot of an edited data file** — load it fresh into the live
page instead (`CLAUDE.md` §7).

**Lecture text cache — complete 2026-07-26.** 146 files in `content\<subject>\lectures\*.txt`,
1.78 MB; 131 of 140 lecture PDFs and 15 of 16 PowerPoints yielded text. **Check this cache before
rendering anything.** The 10 failures are in `progress\ledger.md` §1.
`SCHEDULE` — 38 days, 2026-07-25 → 2026-08-31; carries no chapter ids, so restructuring cannot
break it.

## The app

**Boots clean from `file://`** — zero console errors, 4 modules, 104 chapters, 597 questions, all
views rendering, re-verified 2026-08-02. `app\index.html` 269 KB, `fonts.js` 128 KB,
`app\assets\` 1,262 KB.
**Fully WCAG-AA clean** — re-audited 2026-07-28: 1,294 text elements, 5 views × 2 themes, **zero
real failures**. **Re-audit after any colour change**; a palette move already inverted one fix once.

**Design — Greek, 2026-07-28**, from artwork the user supplied: light/dark parchment-and-ink,
embedded Cinzel + EB Garamond, stroked SVG glyphs instead of emoji, duotoned module artwork, and a
Herophilus dashboard panel whose biography comes from the user's image and **carries no page
citation**. **Rules and traps: `CLAUDE.md` §6. Full history: `ledger.md` §12.**

**Cards, glyphs and icon settled 2026-07-28** (backups `archive\index.pre-cards-2026-07-28.*`):
module painting shown WHOLE, two per row; Neuro a brain, Pediatrics a teddy; **`Herophilus 3.png`
is the icon AND the app's mark**, in **five** places that must move together. **`CLAUDE.md` §6.**

**Ambient film added 2026-07-28** (backup `archive\index.pre-ambient-video-2026-07-28.html`):
`assets\ambient-library.mp4`, 321 KB, **ping-pong looped**, paused by `syncFilm()` on reading views,
dropped for reduced motion and print. **The gate carries its own second copy** — the only place type
sits on the film (4.89:1 dark / 5.57:1 light). **`CLAUDE.md` §6.**

**The Clepsydra + study sessions + automatic backup — 2026-08-02** (backup
`archive\index.pre-clepsydra-2026-08-02.html`). A laurel-crowned hologram clock in the corner who
carries the session timer across every screen and explains each one on first arrival; an original
character in the Miss Minutes *idiom*, not a copy. New **Study session** view: focus/break/cycles,
live ring, questions answered and accuracy inside the session, history. **Import/Export are gone** —
replaced by rolling `wardround.bak.<profileId>` snapshots with silent restore. **She glitches on the
reading views too — the user's explicit call, made after the concern was raised.**
**Rules and traps: `CLAUDE.md` §6.**

**She was REDRAWN the same day from the user's own Canva artwork, which is now her spec** — a solid
orange woodgrain disc with dark line work, shaded in 3D by nine gradients, replacing bright outlines
on nothing. Her copy was cut to roughly two-thirds at the same request. **The laurel is the one part
NOT in the reference.** Three traps came with it, all in `CLAUDE.md` §6: **`CL_R` is the face radius
(31), not the silhouette**; **the hands must be drawn before the eyes** or they rule a line across
her face; and `--cl-hand` / `.cl-limb` are **retired**, not to be reintroduced.

**Still outstanding:** the **Notion board and PDF schedule still carry the old module colours** —
the user accepted that divergence knowingly.

**⭐ THE PREVIEW PANE CANNOT SCREENSHOT — use headless Chrome**, the only way to actually *look* at a
change, and what killed two glyphs that were sound on paper. Method and traps: **`CLAUDE.md` §7**.

## Where transcription stands

**All three `ENT endpoint.pdf` question sections are COMPLETE**, every boundary verified by render.

| Section | Pages | Result | Done |
|---|---|---|---|
| Ear | 143–760 | Q1–Q298 + 37 cases → **243 `entep-ear-` entries** | 2026-07-26 |
| Nose | 891–1185 | Q1–Q143 → 115 MCQs + 21 cases → **136 entries** | 2026-07-27 |
| Throat | 1350–1720 | Q1–Q176 → 136 MCQs + Cases 1–26 → 24 → **160 entries** | 2026-07-27 |

**All three sections share one shape:** MCQs printed **twice**, then a title page, then a case
section printed **once**, two per page. **Not one of the 84 cases across Ear, Nose and Throat carries
a printed explanation.** Expect the shape again and check only at the boundary.

**Parity is not stable — never assume it.** Flipped four times: twice in Ear pp.188–258, twice in
Throat. The Throat flips are located exactly — answered pages are **even pp.1352–1462**, **odd
pp.1465–1653**, **even pp.1656–1706**. The second has a visible cause: **p.1654 reprints Q150
unanswered a second time**, one stray page that shifts every pairing after it.

**Explanation boxes stopped at p.1535** — none across **103 consecutive answered pages, pp.1537–1720**,
the longest boxless run in the file, so every entry from `entep-throat-70` onward is authored.
**Box presence is a property of the page, not the section.**

**⚠️ For CASES the ANSWER decides fold-vs-variant, not the stem.** Two vignettes can read nearly
identically and still be different questions if the diagnosis demanded differs —
`entep-throat-case-15` was kept against `entep-case-9` for exactly that reason (*"Right SOM"* vs
*"SOM caused by NPC"*), while two other near-pairs were folded. A case has no options to compare, so
this is the only test available.

## Three rules that change what you do first

`progress\ledger.md` §7 holds the rest — corrupt explanation boxes, the recycling pattern, unreliable
numbering, deliberate repetition, linked sets, layout and key defects, and the bank's own wrong
answers. **Read §7 before opening `ENT endpoint.pdf`.** These three govern the batch:

- **ASSUME NOTHING FROM PAGE TO PAGE.** Parity, explanation boxes and reprint rate are all
  unpredictable. **Check every tile for a highlight before transcribing it.**
- **NEITHER THE PRINTED NUMBERS NOR THE PAGE COUNT COUNTS THE QUESTIONS.** Only reading every
  answered page does.
- **RUN THE DUPLICATE SWEEP OVER THE WHOLE FILE BEFORE WRITING A BATCH.** The file recycles across
  section boundaries; since the sweep moved *before* the writing it has caught **17 reprints with
  nothing wasted**. **Normalise first** — lowercase, strip punctuation, **sort the options**: most
  reprints differ from their twin by a word, and the sorted option-set check is the only one that has
  ever caught a cross-bank pair.

**Where the source prints no explanation box, the explanation is written here** — the rule and its
marker are in `CLAUDE.md` §4. **156 passages** carry the flag. Grep for the live gap list; the
recurring ones are the nasopharynx, the eponymous signs, Vincent's angina and leucoplakia.

## Three question banks per module

`endpoint` / `house` / `gradegain`, carried on every question as `bank` and filterable per module;
map in `CLAUDE.md` §4. **Identify a bank by its COVER, not its filename.**
**Still missing: House for Neuropsychiatry, Grade Gain for Pediatrics** — not yet supplied.

**⚠️ THE BANKS OVERLAP — and a duplicate spanning two banks is NEVER folded.** `enthd-ear-15` (House
p.26) and `entep-throat-103` (Endpoint p.1623) are the same pyriform-fossa question, reworded. **Both
kept**, cross-referenced, because `bank` is content the learner filters on — deleting either would
misreport what that bank contains. **The one standing exception to the delete-duplicates rule**, and
expect many more as the other banks are transcribed. Only the sorted option-set check found it.

## Owed in the end-of-ENT review

**Detail, ids and reasoning: `progress\ledger.md` §11.** One line each so nothing is forgotten at the
moment it matters. **Work this list before Pediatrics begins.**

1. **Sweep every box read before p.1011 for the "Ask ChatGPT" marker** — 3 known, never swept below
   p.1011.
2. **67 entries record no provenance either way** — 46 inside `entep-ear-1`…`68` (pp.144–342) and all
   21 House. Almost certainly authored, **not verified**. Closed by re-rendering pp.144–342 and one
   House page.
3. **Re-run the normalised duplicate check per module as it completes.** It has caught reprints every
   time it was tightened.
4. **⚠️ The nasopharynx — the highest-value single gap in ENT.** Up to **27** entries rest on outside
   knowledge (upper bound, not verified entry by entry). **One ENT-nose-book read fixes the whole
   set**, together with item 6.
5. **Fourteen Throat slide gaps**, incl. **Vincent's angina**, **leucoplakia**, and the **thyroglossal
   cyst's tongue-protrusion sign** — the last absent from **all 32** ENT files.
6. **Three Nose slide gaps** — dangerous area of the face, CSF-leak management, ammonia as a
   trigeminal stimulus.
7. **⚠️ Four disputed printed keys** — `entep-throat-77`, `entep-throat-83`, and Q136/Q153 of the
   pp.1617–1706 batch. All transcribed **as keyed**, both readings recorded. **Case 10 (Ludwig's
   angina, p.1712) makes the same clash as Q153.**
8. **A full content and design review**, at the user's request, before the other three modules.

## Environment

**Full details in `progress\ledger.md` §13** — Poppler and its PATH trap, the browsers, the
PowerShell image pipeline, what is absent, and two native-exe gotchas. The four facts that change
what you do first:

- **Poppler is installed** and handles the 332 MB file; **`pdftotext` returns 0 characters on every
  book and question bank**, so scans must be rendered to PNG and read as images.
- **The read tool rejects PDFs over 100 MB** — all 7 books and 3 of the 7 banks.
- **No Python, Node, ImageMagick or Ghostscript**; images via PowerShell `System.Drawing`, video via **ffmpeg** (added 2026-07-28, off PATH).
- **Headless Chrome is the only way to screenshot the app** (`CLAUDE.md` §7).
- **The project is on GitHub, PRIVATE**: `mahmoudbanna23-ctrl/Herophilus`, branch `main`, first push
  2026-07-28. `Semester 8\` and `files.zip` are gitignored — **ledger §13 for the push method.**

Source inventory — ledger §9: 140 lecture PDFs, 16 PowerPoints, 7 books (1,637 pages), 7 banks.
**`ENT endpoint.pdf` is bank AND theory source**: 3,075 pages, 332 MB, no text, 800×450 JPEG/page.

## Deadline

**Semester 8 exam period: approximately early September 2026** — the user's own estimate, not a
published date, consistent with the schedule ending 2026-08-31. **Do not rebuild the schedule on it.**

## Open items

- **Reading all 1,637 book pages is not realistic.** Book reading is driven by the questions and by
  gaps in the slide text, using each book's contents page to locate ranges. **A chapter resting on
  slides and questions alone must be reported as such**, never implied to have book coverage.
- **Measure, then believe.** *Check the sum and inspect the entries before recording any number* — a
  count that did not reconcile has been written down **three times**. *Check the auditor before
  believing the audit* — **three** successive contrast auditors produced false failures (`CLAUDE.md`
  §7). Every one was caught by re-measuring, never by re-reading. README was rewritten against
  `app\data\` on 2026-07-28 and its numbers are current; the stale "94 chapters" is gone.
- **Cleanup awaiting approval** — `Opthalmo\Theoritical\PPT\drive-download-…-001.zip` (173 MB)
  duplicates all 29 loose Ophthalmology lecture files, and two Pediatrics PPT files are broken stubs
  (`  Myocardial diseases.pdf` 134 B, `  stenotic lesions.pdf` 120 B). All sit inside `Semester 8\`,
  which is protected — **nothing deleted without a yes.** Also `files.zip`, the redundant original.
