# Herophilus — Memory

Running record for the Herophilus project. Loaded via the `@MEMORY.md` import at the end of this
project's `CLAUDE.md`. ISO dates only. Anything unverified is marked as such rather than filled in.

Detail lives in `progress\ledger.md`; method and rules live in `CLAUDE.md`. This file holds only
what is needed to pick the work up cold.

---

## Current state

**App** — works. Restructured 2026-07-26 from a single 318 KB `index.html` into `app\index.html`
plus `app\data\*.js`; no application logic changed in that move.

**⭐ REDESIGNED 2026-07-27 — dark cinematic** (user's request, modelled on a reference site they
supplied). Shell 146 KB → 157 KB; **no data file touched**, so content was unaffected by definition.
Deep navy ground, hairline borders, soft elevation and glow, glass on the fixed furniture, and a
fixed ambient field of four drifting orbs. **Governing rule: ALIVE TO BROWSE, CALM TO READ** — the
orbs run on home/module/schedule/moved/flagged and are **paused** on quiz/mock/review/theory, gated
by `body[data-view]` which `render()` now sets. Rules and the token contract are in `CLAUDE.md` §6;
the old bright look is at `archive\index.pre-redesign-2026-07-27.html`.

**Verified in a real `file://` boot after the redesign:** zero console errors, 4 modules, 104
chapters, **`QUESTIONS.length` = 597** — the first time the real boot figure has been observed
rather than inferred from a freshly loaded copy. Every view renders; search, modal and toast all
styled. **Contrast was audited numerically, not by eye:** all sampled text passes WCAG AA (stem
15.9:1). The audit caught `--ink-4` at **3.54:1** on 10–11px chapter counts and schedule weekdays —
under the 4.5:1 floor — and it was lifted `#61738b` → `#8194ac` (now 5.5:1).

**⭐ LIGHT / DARK MODE + TWO-STEP GATE — 2026-07-27** (user's request, done while they gather
images). Shell 157 KB → 178 KB; **no data file touched.** Backup at
`archive\index.pre-theme-2026-07-27.html`. Method and the rules that must not be undone are in
`CLAUDE.md` §2 and §6. Three things worth knowing cold:

- **Theme follows the operating system until the user picks once**, then `wardround.theme` wins on
  that device. Toggle in the top bar, on the gate, and on the **T** key. Chosen by an inline
  `<head>` script *before* the stylesheet, or light-mode users get a dark flash.
- **The gate is now sign-in → profile.** On `file://` the order flips: Google OAuth **cannot work
  from a local file** (`auth/operation-not-supported-in-this-environment`, verified), so the local
  path becomes the primary button and the Google button is shown inert with an explanation.
- **Contrast was re-audited in both themes, and the auditor itself was wrong first.** It read only
  `background-color`, so every element on a *gradient* — the whole rail — resolved against the page
  behind it and reported 39 phantom failures. Fixed to average gradient stops. This is the second
  time an audit bug produced false results (the first was ignoring alpha); **check the auditor
  before believing the audit.**

**Four real defects the corrected audit found, all pre-existing, none caused by light mode:**
`.bankchip.on` had `box-shadow:… var(--ink)` — a **white halo** on active source chips; `.chip.on`
used `var(--ink)` as a *fallback background* (white chip, white text); the Flagged page's badge
hardcoded `color:var(--ink)` inline on gold at **1.34:1**, nearly invisible since the redesign; and
four rail colours (`#7d75ab`, `#6a619a`) sat at 3.2–4.3:1 in **both** themes. All fixed.

**⭐ GREEK RESTYLE — 2026-07-28**, from artwork the user supplied. Shell 178 KB → 195 KB, plus
`app\assets\` (831 KB, down from 16 MB of originals) and `app\data\fonts.js` (128 KB).
Backups: `archive\index.pre-greek-2026-07-28.html`, `archive\modules.pre-greek-2026-07-28.js`.
Method and the traps are in `CLAUDE.md` §6. **`data\modules.js` was edited** — the first time a data
file has been touched by design work; it carries `hex` and `icon` per module.

- **Module colours REPLACED** (user's explicit choice, knowing Notion and the PDF schedule now
  diverge): ENT `#b4472f`, Ophtho `#5c7a52`, Neuro `#6d4c7d`, Peds `#2e5f8a`.
- **Type is Cinzel + EB Garamond**, SIL OFL, base64-embedded because `url()` fonts are CORS-blocked
  over `file://`. Windows system serifs are **not licensed** to embed.
- **Emoji replaced by stroked SVG glyphs** that inherit `currentColor`.
- **Herophilus panel on the dashboard** — the bust engraving plus a short biography. That text comes
  from the user's supplied image, **not** the course material, and carries no page citation; it is
  kept to biography and never touches clinical content.

**⭐ THE APP IS NOW FULLY WCAG-AA CLEAN — 1,344 text elements, 9 views, both themes, zero failures.**
First time ever. The long-standing `.tag`/`.eyebrow` failures (ENT red 3.05:1, buffer amber 2.15:1,
~60 on the schedule alone) **were fixed as a side effect**: every Greek colour is dark enough that
white text passes at 4.6–7.1:1. `.bankchip.on` and `.pill.bankpill` therefore went **back** to white
text — the dark-text fix of 2026-07-27 is now wrong and was reverted.

**Two defects found by auditing the running app, not by reading it:**
`ico()` dropped into a **single-quoted** JS string closed it and killed the entire inline script
(blank app, every function undefined); and an **edited schedule stores hex values in localStorage**,
so it kept rendering the old palette after the source had changed — `migrateColours()` fixes both
that and profile avatar colours, keyed on old values so it is idempotent.

**Phase 1 lecture-text harvest — done 2026-07-26.** 146 files cached to
`content\<subject>\lectures\*.txt`, 1.78 MB. 131 of 140 lecture PDFs and 15 of 16 PowerPoints
yielded text. **Check this cache before rendering anything.** The 10 failures are in
`progress\ledger.md` §1.

**Content counts** — verified in-browser 2026-07-27 against a freshly loaded copy of the data file.

| Module | Chapters | MCQs | Cases | Theory chapters |
|---|---|---|---|---|
| ENT | 30 | 515 | 82 | 0 |
| Ophthalmology | 26 | 0 | 0 | 0 |
| Neuropsychiatry | 27 | 0 | 0 | 0 |
| Pediatrics | 21 | 0 | 0 | 0 |
| **Total** | **104** | **515** | **82** | **0** |

`QUESTIONS.length` is **597** — MCQs and cases share one array. By bank: **576 Endpoint, 21 House,
0 Grade Gain** (no Grade Gain question transcribed yet in any module). **ALL 30 ENT chapters hold at
least one question.** Validated in-browser 2026-07-27 against a freshly loaded copy:
0 bad module or chapter refs, 0 duplicate ids, **0 broken cross-references**, every `answer` index in
range, option counts all 2–5, every case carrying a valid `answer` and non-empty `keys`, nothing
missing a `source`, `explanation` or `objective`, and the chapter split sums to 597 (so no sparse
array hole).

**The app shell boots clean — 4 modules, 104 chapters, zero console errors — but the preview pane
will not re-read an edited data file**, serving its pre-batch snapshot even after a forced
re-navigate. Data is therefore verified by loading `questions.ent.js` and `cases.ent.js` fresh into
that live page. **That is the documented workaround in `CLAUDE.md` §7, not a failure** — but it means
`QUESTIONS.length` itself has not been observed at 597 in a real boot.

Chapter count fell 114 → 104 on 2026-07-26 when split topics were merged (see decisions log).

**Order of work:** ENT → Pediatrics → Ophthalmology → Neuropsychiatry. All questions first, across
all four modules, then theory.

`SCHEDULE` — 38 days, 2026-07-25 → 2026-08-31, unchanged through the restructure.

---

## Where transcription stands

**ENT endpoint Ear Questions — COMPLETE, 2026-07-26.** pp.143–760 fully read: Q1–Q298 plus **37
option-less cases** on pp.742–760. p.740 holds the last MCQ, p.742 starts Case 1; both boundaries
verified by render. **243 `entep-ear-` entries** stand after the two merges of 2026-07-27.

**ENT endpoint Nose Questions — COMPLETE, 2026-07-27.** pp.891–1185 fully read. Every boundary
verified by render:

| Range | Content | Printed |
|---|---|---|
| pp.891–1167 | **MCQs Q1–Q143** → 115 kept as `entep-nose-1`…`115` | twice; **odd** pages answered |
| p.1168 | title page, "Solved Cases" | once |
| pp.1169–1185 | **21 free-text cases** → `entep-nose-case-1`…`21` | **once**, on both odd and even pages |
| p.1186 | title page, "Throat" | — |
| p.1188 on | Throat **THEORY**, not questions | — |

**Same shape as the Ear section** — MCQs twice, then a case section with no options printed once.
**Expect it again in Throat and check at the boundary.**

**⭐ THE WHOLE ENT ENDPOINT THROAT SECTION IS COMPLETE — pp.1350–1720, 2026-07-27.** Q1–Q176 →
**136 MCQs** (`entep-throat-1`…`138`, ids `31`/`52` retired) plus Cases 1–26 → **24 cases**
(`entep-throat-case-1`…`26`, ids `11`/`12` retired). **160 Throat entries.** 40 of the 176 printed
MCQ numbers and 2 of the 26 cases were reprints. The contents table's pp.1350–1720 held true end to
end — the only structural prediction in this file that never needed amending.

| Pages | Content |
|---|---|
| p.1350 | title page, "Questions" |
| pp.1351–1706 | **MCQs Q1–Q176**, printed twice |
| p.1707 | title page, "Solved Cases" |
| pp.1708–1720 | **26 free-text cases**, two per page, printed once |
| p.1721 | "Model Final Exam 1" begins |

**RESUME AT p.1721 — the 7 Model Final Exams (pp.1721–2816), ~548 answered pages**, the largest block
left. **Nothing about this block is verified.** Render p.1721 onward and settle two things before
choosing a batch size: **(1) is each exam printed twice, unanswered then answered?** and **(2) does an
exam end with a free-text case set, as all three question sections did?** Then run the whole-file
duplicate sweep — a model exam is the likeliest place in the file to recycle questions already held.

**All three case sections behaved identically: printed ONCE, two per page, and NOT ONE of the 84
cases across Ear, Nose and Throat carries a printed explanation.** Expect the same and check only the
boundary.

**Both Throat parity flips are located exactly:** answered pages are **even pp.1352–1462**,
**odd pp.1465–1653**, **even pp.1656–1706**. The second flip has a visible cause — **p.1654 reprints
Q150 unanswered a second time**, one stray page that shifts every pairing after it. That is what a
"parity flip" has been all along. **It does not change the rule: never assume parity, check every
tile for a highlight before transcribing it.**

**⚠️ For CASES, the ANSWER decides fold-vs-variant, not the stem.** Two vignettes can read nearly
identically and still be different questions if the diagnosis demanded differs — `entep-throat-case-15`
was kept against `entep-case-9` for exactly that reason (*"Right SOM"* vs *"SOM caused by NPC"*),
while two other near-pairs were folded. A case has no options to compare, so this is the test.

**`prints its own explanation box` has been stuck at 93 since p.1535** — the endpoint has printed no
explanation box in **103 consecutive answered pages, pp.1537–1720**, the longest boxless run in the
file. Every entry from `entep-throat-70` onward is authored. **Box presence is a property of the
page, not the section.** Reprint rate by batch: 1-in-18, 7-in-25, 9-in-18, 1-in-9, 8-in-40, 8-in-45,
2-in-26.

**Throat section behaviour — explanation boxes, the recycling pattern, the numbering defects and the
linked sets — is in `progress\ledger.md` §7.** Read it before the next batch.

**~678 answered pages remain in `ENT endpoint.pdf`** — 7 Model Final Exams 548, Recently Edited 10,
Exam Night Review 120 — plus the six other question banks.

---

## How this source behaves

**Moved to `progress\ledger.md` §7 on 2026-07-27** — AI-pasted and corrupt explanation boxes,
unstable parity, unreliable printed numbering, deliberate repetition, layout and key defects, and
the bank's own wrong answers. It is method, it grows with every batch, and it was pushing this file
to nearly twice its 200-line cap. **Read §7 before opening `ENT endpoint.pdf`.**

The three rules that matter most, kept here because they change what you do first:

- **ASSUME NOTHING FROM PAGE TO PAGE.** Parity, explanation boxes and reprint rate are all
  unpredictable. Check every tile for a highlight before transcribing it.
- **NEITHER THE PRINTED NUMBERS NOR THE PAGE COUNT COUNTS THE QUESTIONS.** Only reading every
  answered page does.
- **RUN THE STEM AND OPTION-SET DUPLICATE SWEEP OVER THE WHOLE FILE BEFORE WRITING A BATCH.** The
  file recycles across section boundaries; three batches running, an entry written up as new turned
  out to be an Ear reprint found only by that check. **Since the sweep moved before the writing it
  has caught 17 reprints with nothing wasted** — 8 in pp.1537–1615 and 8 more in pp.1617–1706, where
  a fifth of each run was recycled. **Normalise before comparing** (lowercase, strip punctuation,
  **sort the options**): most reprints here differ from their twin by a word, and the sorted
  option-set check is the only one that has ever caught a cross-bank pair.

---

## Owed in the end-of-ENT review

**Detail, ids and reasoning are in `progress\ledger.md` §11.** One line each here so nothing is
forgotten at the moment it matters. **Work the list before Pediatrics begins.**

1. **Sweep every box read before p.1011 for the "Ask ChatGPT" marker** — 3 known, never swept below
   p.1011.
2. **67 entries record no provenance either way** — 46 inside `entep-ear-1`…`68` (pp.144–342) and
   all 21 House. Almost certainly authored, **not verified**. Closed by re-rendering pp.144–342 and
   one House page.
3. **Re-run the normalised duplicate check per module as it completes** — lowercase, strip
   punctuation, **sort options**. It has caught reprints every time it was tightened.
4. **⚠️ The nasopharynx — the highest-value single gap in ENT.** Up to **27** entries rest on outside
   knowledge (upper bound, not verified entry by entry; first recorded at 7). **One ENT-nose-book
   read fixes the whole set**, together with item 6.
5. **Fourteen Throat slide gaps**, incl. **Vincent's angina**, **leucoplakia**, and the
   **thyroglossal cyst's tongue-protrusion sign** — the last absent from **all 32** ENT files.
6. **Three Nose slide gaps** — dangerous area of the face, CSF-leak management, ammonia as a
   trigeminal stimulus.
7. **⚠️ Four disputed printed keys** — `entep-throat-77`, `entep-throat-83`, and Q136/Q153 of the
   pp.1617–1706 batch. All transcribed **as keyed** with both readings recorded. **Case 10 (Ludwig's
   angina, p.1712) makes the same clash as Q153**: the stem says "fluctuant" where `L4` says twice
   there is no abscess.
8. **A full content and design review**, at the user's request, before the other three modules.

---

## Three question banks per module — added 2026-07-27

`endpoint` / `house` / `gradegain`, carried on every question as `bank`, shown as a coloured pill,
and filterable per module (multi-select) from the module page. **Identify a bank by its COVER, not
its filename:** `ENT QB.pdf` is Grade Gain and `ophthalmology MCQ.pdf` is House. Full map in
`CLAUDE.md` §4. **Still missing: House for Neuropsychiatry, Grade Gain for Pediatrics** (user has
not supplied them).

**⚠️ THE BANKS OVERLAP — and a duplicate spanning two banks is NEVER folded.** First case found
2026-07-27: `enthd-ear-15` (House p.26) and `entep-throat-103` (Endpoint p.1623) are the same
pyriform-fossa question, reworded. **Both kept**, cross-referenced to each other, because the `bank`
field is content the learner filters on — deleting either would misreport what that bank contains.
This is the one standing exception to the delete-duplicates rule. **Expect many more as the second
and third banks are transcribed.** Only the sorted option-set check found it; the stem check missed
it because the wording differs.

**`QUESTIONS` is shuffled by id-hash** in `data\questions.js`, so nothing is practised in
transcription order. Hashing rather than `Math.random()` keeps the order stable across reloads and
devices and drops later additions into the middle — **no module ever needs re-shuffling when it is
finished.** FNV-1a alone was not enough; see `CLAUDE.md` for why the murmur3 finalizer is required.

---

## Source material inventory

**Moved to `progress\ledger.md` §9 on 2026-07-27** — the full sweep of 140 lecture PDFs, 16
PowerPoints, 7 books (1,637 pages) and 7 question banks, with per-file page counts and text-layer
status. It is stable reference data, not state, and this file was 121 lines over its cap.

The four facts that change what you do first:

- **Lecture slides have a text layer, books and question banks do not** — 126 of 140 PDFs extract
  cleanly; every book and every bank returns **0 characters**. Check
  `content\<subject>\lectures\*.txt` before rendering anything.
- **`ENT endpoint.pdf` is BOTH a question bank and a theory source**, and the largest question source
  in the project — 3,075 pages, 332 MB, no text layer, one 800×450 JPEG per page. Range table in
  ledger §2.
- **Every question in it is printed twice** — unanswered, then answered with the correct option
  highlighted. Read only the answered pages, and **never assume parity**: it has now flipped four
  times, twice in Ear pp.188–258 and twice in Throat (at p.1465 and p.1656).
- **The reader rejects PDFs over 100 MB** — all 7 books and 3 of the 7 banks. Render page ranges to
  PNG in the scratchpad instead; the PDF is then never opened by the reader.

---

## Environment facts

Verified 2026-07-26 on `DESKTOP-264A9LO` (Windows 10 Pro 19045).

- **Poppler — installed 2026-07-26**, v25.07.0-0 via winget. `pdftoppm`, `pdfinfo`, `pdfimages`
  verified working, including on the 332 MB file. winget modified PATH, but **a shell started before
  the install will not see it** — use the full path:
  `C:\Users\Alfa388\AppData\Local\Microsoft\WinGet\Packages\oschwartz10612.Poppler_Microsoft.Winget.Source_8wekyb3d8bbwe\poppler-25.07.0\Library\bin`
- **The read tool rejects PDFs over 100 MB outright.** That is all 7 books and 3 of the 7 question
  banks (ENT QB, ENT endpoint, ophthalmology qb). Rendering page ranges to PNG and reading the
  images sidesteps this entirely — the PDF is never opened by the reader.
- **`pdftotext`** — `C:\Program Files\Git\mingw64\bin\pdftotext.exe` (v4.06, Xpdf, ships with Git
  for Windows). Works on lecture slides. Returns 0 characters on every book and question bank.
- **`winget`** — available, v1.29.280.
- **Absent:** Ghostscript, ImageMagick, qpdf, pdftk, mutool, Node. Python is still only the
  Microsoft Store alias stub and does not run. The `convert` on PATH is Windows' filesystem
  converter, not ImageMagick.
- `.pptx` text extracts fine via PowerShell reading `ppt/slides/slide*.xml` — no tooling needed.
- **`sheet.ps1` must be invoked through the PowerShell tool**, not Bash — Bash passes `-Pages` as one
  string and the `int[]` conversion fails.

---

## Deadlines

- **Semester 8 exam period:** approximately **early September 2026** — the user's own estimate, not
  a published date. Consistent with the schedule ending 2026-08-31. **Exact dates not provided.**
  Do not rebuild the schedule on this until real dates are given.

---

## Decisions log

**Moved to `progress\ledger.md` §8 on 2026-07-27** — 48 lines of history rather than state, taken the
same way §7 was. It records *why* each standing rule exists: classic scripts not ES modules, questions
transcribed rather than authored, split lectures merged into one chapter, duplicates deleted keeping
one copy, cases graded on concept keys, the bank filter and the id-hash shuffle. **Read §8 before
changing any of those rules; the reasoning is there, not here.**

The one decision that changes what you do in every batch is kept here in full:

- **2026-07-26** — **Where the source prints no explanation box, the explanation is written here**
  (user's instruction). It must be grounded in the cached slides and **name the slide file**; carry
  the trailing marker **`Written for this bank — the endpoint file prints no explanation here.`**;
  and say **`not taken from the course material`** where the slides do not cover the point. **156
  passages** now carry that flag (2026-07-27). Recurring gaps: stapedial reflex, caloric test,
  mastoidectomy types, traumatic TM perforation, myringotomy site, otosclerosis treatment and
  inheritance, eponymous signs (Gradenigo's, Trotter's, Griesinger's, Moure's, Schwartze's),
  electronystagmography, **the whole nasopharynx**, and now **Vincent's angina** and **leucoplakia**.
  Grep for the live list.

---

## Corrections made to earlier records

**Moved to `progress\ledger.md` §10 on 2026-07-27** — five corrected records, each with the mistake
that produced it. History, not state.

**Still live, because it keeps recurring:** the README's "94 chapters" is wrong (it is **104**), and
**a count that does not reconcile against its total has now been written down three times** — a
chapter split twice, and the unmarked-provenance figure twice. **Check the sum, and inspect the
entries, before recording any number.**

---

## Open items

- **Reading all 1,637 book pages is not realistic.** Book reading is driven by the questions and by
  gaps in the slide text, using each book's contents page to locate ranges. The ledger records which
  ranges were read — a chapter resting on slides and questions alone must be **reported as such**,
  never implied to have book coverage.
- **Cleanup awaiting approval** — `Opthalmo\Theoritical\PPT\drive-download-20260725T233555Z-1-001.zip`
  (173 MB) duplicates all 29 loose Ophthalmology lecture files, and two Pediatrics PPT files are
  broken stubs (`  Myocardial diseases.pdf` 134 B, `  stenotic lesions.pdf` 120 B). They sit inside
  `Semester 8\`, which is protected, so nothing is deleted without a yes.
- **`files.zip`** — the original delivery, still at the project root. Both entries are now real
  files. Redundant, kept for now.
- **This file is still over its length cap, at 309 lines against 200.** Workspace `CLAUDE.md` §8 sets
  the cap. Five trims have been made, all on 2026-07-27, each moving history or reference into
  `progress\ledger.md` behind a pointer: source behaviour + Throat method → **§7** (368 → 295); the
  decisions log → **§8**; the source material inventory → **§9**; the corrections log → **§10**; the
  owed-review detail → **§11** (321 → 291). It then grew back to **309** with the Throat case batch —
  **the trims buy room for roughly one batch each**, which is worth knowing before planning another.
  **The easy moves are now genuinely gone.** What remains is current state, the resume pointer, the
  owed list as one line per item, the environment facts and the deadline — all needed to pick the
  work up cold. Two lessons from this round: the Throat block **shrank on its own** when it went from
  in-progress to complete, so **each module finished frees a block**; and a trim only works if the
  pointer left behind is genuinely shorter than what it replaces — the inventory move saved one line
  because the pointer was written too long.
  **If it must shrink again**, the only remaining candidate is *Environment facts* (~20 lines, stable
  since 2026-07-26). **Do not trim "Where transcription stands"** — it is the one thing that makes a
  cold restart possible.
