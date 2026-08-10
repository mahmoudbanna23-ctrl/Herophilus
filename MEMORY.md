# Herophilus — Memory

Running record, organised around *resuming*. ISO dates; unverified marked as such. **Only what is needed to pick the work up cold; under 200 lines — `(Get-Content).Count`.** Method in `CLAUDE.md`, detail in `ledger.md` — **`CLAUDE.md` imports this, so repeating its rules costs budget.**

## Resume here — **✅ `ENT endpoint.pdf` CLOSED (all 3,074 pp.). Grade Gain OPEN, Ear ch.1–7 done.**

1. **GRADE GAIN IS OPEN — `ENT QB.pdf`, contents page promises 1,080** (Ear 244, Nose 258, Throat 578
   over 29 topics; map in `ledger.md` §14). **⚠️ PDF page = book page + 9. ⚠️ THE PRINTED NUMBERING
   RUNS CONTINUOUSLY ACROSS CHAPTERS** (ch.1 Q1–29, 2 Q30–49, 3 Q50–90, 4 Q91–121, 5 Q122–156,
   6 Q157–178, 7 Q179–196) **and the running header says "Chapter 1" on EVERY page.** **⚠️ THE CONTENTS
   PAGE'S PAGE RANGES HAVE BEEN RIGHT ALL SEVEN TIMES; ITS COUNTS HAVE NOT** — ch.1–2 matched, then
   **41/40, 31/30, 35/24, 22/21, 18/17, always upward.** Trust the map for *where*, never for *how
   many*: render the range, then count what is printed. **Ear ch.1–7 DONE**: 29 (25 written +
   4 folded), 20 (20+0), 41 (38+3), 31 (27+4), 35 (34+1), 22 (19+3), 18 (18+0). **~45 % carry a printed
   explanation**; the rest are authored. **⚠️ A QUESTION TAIL AND THE ANSWER BLOCK CAN SHARE A PAGE** —
   "Page As" is where answers *begin*; it cost **four** questions in ch.4, and ch.6 repeated it, but
   ch.7 did not — **it is a property of the page, check every chapter.**
   **⚠️ THE BANK ALSO REPRINTS ITSELF ACROSS CHAPTERS** — 4 folds so far are within-bank, which take
   **no `alsoIn`**, just hold once. **⚠️ NEVER BACKTICK AN ID THAT DOES NOT EXIST YET** — a forward
   reference to the next chapter reads as a dead id.
   **Next: Ear ch.8, "Audiological Investigations", book p.33 on (PDF 42 on), opens at Q197; Q205
   prints a pure-tone audiogram to cut.**
2. **Then `d house ENT mcq.pdf`** (House, `enthd-`, resume at PDF p.15), then the **end-of-ENT review**
   below, then Pediatrics. **User chose "finish ENT completely" over breadth, 2026-08-08**, knowing
   the other three modules hold 0 questions and the exam is ~4 weeks out.
3. **PUBLISHING AGREED IN PRINCIPLE, PARKED UNTIL ENT IS DONE** (user, 2026-08-08). Progress survives
   updates because `S.answers` is keyed by **question id** in `wardround.v3.<profileId>` and adding
   questions is purely additive. **Three things BEFORE the first publish:** (a) **cache-bust the
   `<script src="data/*.js">` tags** — verified: **no version string**, so a returning browser serves
   the old copy and new questions silently never appear; (b) **fix the final domain first** —
   localStorage is per-origin, so a later move orphans all progress; (c) **finish folding first** — a
   fold retires an id, and an answered retired id orphans (harmless, but the count drops).
   **Publishing ENABLES Google sign-in**, impossible over `file://`. **⚠️ Two decisions open: the host
   — Netlify was UNREACHABLE from the user's connection, so test first — and whether the site is
   public at all, given the content is transcribed from commercial banks.**

**Question images** live at `app\assets\q\` — `q-<page>.jpg` for endpoint (cut by `Design\scripts\q-images.ps1`), **`q-gg-<book page>[a|b].jpg` for Grade Gain** (letter only where one page prints two), whose layout that script cannot read: crop by hand with `pdftoppm -x -y -W -H` and **LOOK** — **9 of the first 9 crops were wrong**, clipping a label or catching question or option text; **ch.4's three were right first time because they sit in white space — the trap is the LAYOUT.** **⚠️ A figure that EXPLAINS the answer is described, never cropped** (ch.3 Q61). `image` holds the **basename**, `qImgSrc()` builds the path; traps in `CLAUDE.md` §4, `ledger.md` §11a. **⚠️ `bundle.ps1` DOES NOT EXIST**; the single-file build is owed.

**⚠️ NEVER CARRY STRUCTURE ACROSS A SECTION BOUNDARY.** Endpoint sections and all 7 exams print each
question **twice**, Recently Edited **once already answered**, the fact-list run **irregularly**; Grade
Gain prints **once**, ~10 per page, questions and answers on separate pages **that overlap**. Check the
first ten pages before staging — **and read EVERY page, never alternate ones. ⚠️ THE REPRINT RATE HAS
NO TREND** (endpoint: 96 → 100 → 99 → 58 → 42 → 99 → 99 → 100%, then ~70%). **The printed numbering
lies. ⚠️ SAMPLE FOR STRUCTURE, NEVER FOR RATE. ⚠️ NO CONTENTS PAGE COUNTS EITHER** — Grade Gain's held
twice, then ran short four times, once by **eleven** (§11b–d, §14). **Only reading every page counts.**

**⚠️ EVERY BANK MIS-KEYS ITSELF SOMEWHERE — GO LOOKING FOR IT.** Endpoint: 5 self-contradictions, **all
on pages printing NO box**. Grade Gain: **three in five chapters** — `entqb-ear1-26`, `entqb-ear3-79`
and `entqb-ear5-141` (GSPN keyed to the lemon test; its own Q122 and Q140 say Schirmer's).
**Mechanism decides: options replaced → new entry; options identical and only the key moved → record it
in the existing entry, never a second; the bank contradicting its own explanation → correct the key and
record what was printed** (`CLAUDE.md` §4). **⚠️ A PRINTED BOX CAN BE WRONG ABOUT SOMETHING OTHER THAN
THE KEY** — ch.2 Q31 answers a different question, ch.3 Q75 calls Valsalva a drug.

**Method: THREE passes** (endpoint tiling: `-CropTop 0.32`, `Cols 3 -Dpi 110`; survivors re-rendered at
`0.40 -Cols 2` for boxes). **Grade Gain needs no tiling** — ~10 questions in two columns at `-r 130`.
**Order:** ENT → Pediatrics → Ophthalmology → Neuropsychiatry, questions then theory; **the ENT review
below is owed before Pediatrics.**

**⚠️ THE THEORY BRIEF CHANGED, 2026-08-04 — it is a NEW STUDY SOURCE, sufficient to sit the exam from
alone, NOT a summary.** Every source in the folder, images/diagrams wanted, "important" decided by the
questions first; **length is never the goal, dropping something important is the one unacceptable
failure.** Four tests + drop-list in `CLAUDE.md` §4. User will add anatomy/physiology textbooks and
offered a source interview — **take it first**; **ask for a diagram rather than inventing one**.
**⚠️ START FROM `content\ent\examiner-patterns.md`** (166 facts; **repeats in a fact list are the
examiner's own weighting**) — it sets every chapter's `w` and `intro` and lists **6 named facts no
transcribed question teaches**.

## What exists — **104 chapters**: ENT 30, Ophthalmology 26, Neuropsychiatry 27, Pediatrics 21

**All content is ENT so far**; the other three hold **0** questions and **no theory is written**.
`QUESTIONS.length` is **898** — 816 MCQs + 82 cases, **all 30 ENT chapters holding ≥1**. By bank:
**697 Endpoint, 21 House, 192 Grade Gain** — 910, because **twelve** memberships are shared across
**eleven** questions. **`entep-throat-103` is the project's first THREE-bank question**
(endpoint + house + gradegain). Verified in a real `file://` boot 2026-08-09.

**Fully validated in a real `file://` boot, 2026-08-09** — 0 bad module/chapter refs, 0 duplicate ids,
every `answer` in range, nothing missing a `source`/`explanation`, **0 dead backticked ids, 36 of 36
question images loading**. **⚠️ THE DEAD-ID CHECK CATCHES REAL DAMAGE** — folding a printing retires
an id, and three entries written before the fold still cited it in backticks.
**⚠️ THE AUDITOR BREAKS BEFORE THE APP DOES — TWICE OVER, AND BOTH LOOK LIKE CATASTROPHIC CONTENT
FAILURES.** (1) **`MODULES` is `m.groups[].chapters[]`, each chapter an ARRAY (`c[0]` id)**, and **it
is declared `const`, so `window.MODULES` IS UNDEFINED** — read the bare binding. Either slip gives 0
chapter ids and marks **every** question a bad ref. (2) A dead-id regex
of `` `ent[a-z-]+` `` **matches CHAPTER ids too** (`ent-phon`, `ent-paedlar`) and manufactured 19
phantom dead references — require a bank prefix and a trailing digit. **⚠️ ANY SYNTAX SLIP IN A DATA
FILE FAILS SILENTLY AND LOOKS LIKE A CONTENT BUG** — the app boots, throws nothing, and reports **82**
questions (cases only) because `Q_ENT` never parsed; on 2026-08-04 from **one missing comma**.
**`file://` gives only "Script error." at line 0** — inline the file into a scratchpad `<script>`.

**Lecture text cache — complete**, 146 files in `content\<subject>\lectures\*.txt`; **check it before rendering** (10 failures: §1). `SCHEDULE` — 38 days to 2026-08-31.

## The app — boots clean from `file://`

Zero console errors, 9 Clepsydra poses, **768 CSS rules, all 3 `max-aspect-ratio:5/4` blocks intact**,
**WCAG-AA clean**. (Count **recursively**; match on `media.mediaText`, not a regex on `5/4` — Chrome
normalises it to `5 / 4`; **subtract the harness's own `<style>`**.) Greek light/dark design from the
user's own artwork, an ambient film, and **the Clepsydra** carrying the study-session timer; Import/Export replaced by automatic `wardround.bak.<profileId>` snapshots. **Every rule and trap is in `CLAUDE.md` §6. History: `ledger.md` §12, §11a. Backups: `archive\index.pre-*.html`.** Outstanding:
**old module colours in Notion and the PDF schedule** (accepted), **no bundler**, **no cache-busting
on the data `<script>` tags** — the last gates publishing (item 3).

**⚠️ THE ONE THING THAT MUST SURVIVE ANY SUMMARY: THE CLEPSYDRA IS THE USER'S OWN ARTWORK** — nine poses at `app\assets\clep\*.png`, source at `Clypsedra\`. **Do not redraw her, do not draw anything onto her.** Three rounds of wasted work in a day; the answer was always *ask for artwork*.

## Where transcription stands — **`ENT endpoint.pdf` DONE end to end; Grade Gain Ear ch.1–7 done**

Endpoint boundaries and shapes: `ledger.md` §"Transcribed ranges" and §7; **Exam Night Review and the
fact-list run closed 2026-08-08** (§11c–d). **Box presence is a property of the PAGE, not the
section** — Throat ran 103 answered pages with none, ENR **zero of 104**, **4 of 4 mis-keys on a bare
page**. **⚠️ For CASES the ANSWER decides fold-vs-variant, not the stem.**

## Four rules that change what you do first — **`ledger.md` §7 holds the rest (corrupt boxes, recycling, numbering, linked sets, layout and key defects). Read it before opening `ENT endpoint.pdf`.**

- **ASSUME NOTHING FROM PAGE TO PAGE**, and **NEITHER THE PRINTED NUMBERS NOR THE PAGE COUNT COUNTS
  THE QUESTIONS** — only reading every answered page does. **Check every tile for a highlight.**
- **RUN THE DUPLICATE SWEEP OVER THE WHOLE FILE BEFORE WRITING A BATCH.** The file recycles across
  sections; run *before* writing it has caught **557+ reprints with nothing wasted**. **Normalise
  first** (lowercase, punctuation, **sort the options**). **⚠️ SIX STAGES:** (A) stem + option set,
  (B) option set + key, (C) key + option count, (D) **≤1 DIFFERING TOKEN in the key** (symmetric
  difference), (E) **stem-token ranking over ALL of them**, (F) **OPTION-token ranking over all of
  them**. Rationale: `ledger.md` §7.
- **⚠️ STAGE F NOT OPTIONAL — STAGE E READS THE STEM ONLY**, so a question whose content sits in its
  **options** is invisible to it (ch.1: two folds at 1.00 that E scored 0.21/0.24). **⚠️ TWO BLIND
  SPOTS NO STAGE CAN FIX:** the filter drops words ≤3 chars, so short-code sets ("CHL/SNHL/Mixed")
  score 0 — or 1.00 for the wrong reason; and **an ABBREVIATED option set shares no tokens with a
  spelled-out one** — ch.4 Q98 folded into `entep-ear-199` at stage-F **0.13**. **READ THE STAGED
  LIST; the ranking is a shortlist, never a filter.**
- **⚠️ A–D ALL KEY ON THE ANSWER, SO A REWORDED OR RE-OPTIONED REPRINT PASSES THEM ALL, and E and F
  list without deciding. Every stage's verdict is a shortlist — proven on Exam Night Review, where the
  columns were wrong BOTH WAYS on 22 of 104.** **Read side by side EVERY staged question whose OPTION
  SET differs from its stem twin — stages C, D and clean TOGETHER**; **the new question need not be in
  the clean column** (14 of ENR's 37 were not). **A 1.00 stem match that did NOT reach A or B is a
  re-optioned reprint by definition**, and **a changed option set can move the key LEGITIMATELY** — not
  a self-contradiction, which needs IDENTICAL options. **A fold can carry something the held entry
  lacks.** Then keyword-search every survivor **twice, differently worded**. Failures: §7, §11b.

**Where the source prints no explanation box, the explanation is written here** — rule and marker in
`CLAUDE.md` §4. **~68 % of ENT entries carry the marker** (609 of 898) — two thirds of the
explanations are written, not transcribed, **which is the real scope of the end-of-ENT review**;
Grade Gain improves on it at **~45 % printed**. **⚠️ READ EVERY OPTION AS A SENTENCE** — p.2856
printed one truncated mid-word and it survived staging and both sweep passes. **⚠️ AND EVERY STEM: a
reference to "the previous case" or to a picture must be repaired, because the deck is SHUFFLED** —
5 of 41 in ch.3, **6 of 22 in ch.6**, one pointing at a figure **the page never printed**.

**⚠️ A GAP IN THE MATERIAL IS ANSWERED, NOT DECLARED — user's instruction, 2026-08-04, REVERSING the
workspace rule for this project only.** Fill it from general medical knowledge and give the whole
answer; keep `not taken from the course material` as a short tag on the claim, **never as a sentence
that stops**. Shape to copy: `entep-throat-103`. **⚠️ Before leaving anything unanswered, INTERVIEW
THE USER** — one batched list, never per sentence. Contract: `CLAUDE.md` §4.

**Three banks per module** (`endpoint`/`house`/`gradegain`); map, covers and the `alsoIn` contract in
`CLAUDE.md` §4. **Missing: House for Neuropsychiatry, Grade Gain for Pediatrics.** **⚠️ THE BANKS
OVERLAP — on a cross-bank match ADD THE BANK, never an entry.** **Twelve memberships over eleven
questions**; Grade Gain Ear folds ran **4/29, 0/20, 3/41, 4/31, 1/35, 3/22, 0/18** — unpredictable,
so **run the full sweep on every topic.** **⚠️ THE TEST: A DROPPED (or ADDED) DISTRACTOR IS A REPRINT, A REPLACED ONE IS A NEW QUESTION** (§14c–d). **⚠️ A BANK ALSO REPRINTS ITSELF** — a within-bank match takes **no `alsoIn`**, it is just held once. **A folded id must lose its backticks everywhere it is still mentioned, and an id that does not exist YET must never be backticked either.** **⚠️ SAME OPTIONS + SAME KEY + DIFFERENT STEM IS NOT A FOLD** — ch.7 printed the commonest SNHL *in the elderly* and *in general* over one option list; both are held. **⚠️ NEW CATEGORY: CROSS-BANK DIVERGENCE** (ledger §11 item 7b) — two banks keying one fact differently is neither a mis-key nor a fold; hold both, reconcile in the text, take it to the interview. First: **commonest SNHL in children** — Grade Gain *hereditary*, endpoint *meningitis*.

## Owed in the end-of-ENT review — detail in `ledger.md` §11; work it before Pediatrics begins

1. **⚠️ Sweep the WHOLE file for "Ask ChatGPT"** — 5 known, each found by eye, never by a search.
2. **67 entries record no provenance either way** — 46 inside `entep-ear-1`…`68`, all 21 House. Almost
   certainly authored, **not verified**. **⚠️ Exams 1–3 box much of this range for free.**
3. **Re-run the duplicate check per module as it completes** — all **six** stages of it.
4. **⚠️ The nasopharynx — the highest-value single gap in ENT**, and the top **book**-read target under
   the answer-the-gap rule: up to **27** entries rest on outside knowledge and **one ENT-nose-book read
   fixes it.** Plus **fourteen Throat slide gaps** (Vincent's angina, leucoplakia, the thyroglossal cyst's
   tongue-protrusion sign), **three Nose gaps**, **exostosis**, **acute necrotic otitis media** (4 entries)
   and the **compass of mastoid spread / Citelli's abscess** — all absent from **all 32** ENT files —
   plus **the eponymous signs**. **Interview shortlist** (§11, §14b, §14c).
5. **⚠️ Eight disputed printed keys still open** — `entep-throat-83`, Q136/Q153 of pp.1617–1706,
   Exam 1's Q13, `entep-mfe4-16`, `entep-mfe6-1`, `entep-mfe7-1`, `entep-nose-2`, and **`entqb-ear3-83`
   — the first raised against a LECTURE SLIDE** (`L21.2` lists SNHL as a complication of effusion; the
   bank keys it as the exception). Roster in **`ledger.md` §11**. **⚠️ A DISPUTED KEY IS PROVISIONAL
   UNTIL THE BANK REPRINTS IT** — five were settled that way, every one by a *later* printing.
6. **A full content and design review**, at the user's request, before the other three modules —
   **fold it into the pre-publish pass** (resume item 3), since both gate the same milestone.

## Environment — **full details in `ledger.md` §13.** What changes what you do first:

- **Poppler is installed** (off PATH) and handles the 332 MB file; **`pdftotext` returns 0 chars on
  every book and bank**, so scans render to PNG. **The read tool rejects PDFs over 100 MB.**
- **No Python, Node, ImageMagick, Ghostscript or `gh` CLI**; images via PowerShell `System.Drawing`
  (**⚠️ `Sort-Object -Property` silently no-ops on hashtables — use `[pscustomobject]`; `Measure-Object`
  returns Double, which the `Bitmap` ctor rejects — cast to `[int]`**), video via **ffmpeg** (off PATH).
  **Headless Chrome is the only way to screenshot or probe the app**; **Chrome + Canva for diagrams.**
- **The project is on GitHub, PRIVATE**: `mahmoudbanna23-ctrl/Herophilus`, branches `main` and
  `design/clepsydra-and-sessions` (the only copy of the Clepsydra artwork off this drive). `Semester
  8\`/`files.zip` gitignored — **push method: ledger §13; sources §9.**

## Deadline and open items — exam period **approximately early September 2026**, the user's own estimate, not a published date. **Do not rebuild the schedule on it.**

- **Reading all 1,637 book pages is not realistic**, but **the book is the first place to look before
  filling a gap from general knowledge** — driven by the questions and slide gaps, via its contents page.
- **Measure, then believe.** *Check the sum* — a count that did not reconcile has been written down **six times** (`(Get-Content).Count`; `Measure-Object -Line` skips blank lines). *Check the auditor* — **three** contrast and **two** content auditors gave false failures (`CLAUDE.md` §7). *Reconcile the batch* — written + folded = printed. **⚠️ A COUNTER THAT DOES NOT MOVE IS A FINDING** — the authored-marker count stayed at 596 across 18 new entries because they carried the marker in `source`, not at the end of `explanation` where `CLAUDE.md` §4 puts it; one older entry had the same defect. **⚠️ NEVER WRITE A CROSS-REFERENCED ENTRY'S PAGE NUMBER FROM MEMORY — 6 of 6 were wrong** (§14g), and no automated check can see it: read that entry's own `source`. **And where no error is possible, LOOK.**
- **Cleanup awaiting approval** — a 173 MB Ophthalmology zip duplicating all 29 loose lectures, two
  Pediatrics PPT stubs (both inside protected `Semester 8\`), and `files.zip`. **Nothing without a yes.**
