# Resume — OPHTHALMOLOGY

**Chat opened 2026-08-12.** Method is in `progress\briefs\START-HERE.md`; module facts in
`progress\briefs\ophthalmology.md`. This file is state only — where I am, what I found, what is next.

---

## Resume here — state at 2026-08-30

**⏳ OPHTHALMOLOGY IS THE LIVE MODULE**, against **27 September**. ENT is closed (`ledger.md` §15–§16).

**⚠️ NEW 2026-08-30: THE OCR-GATED READING FLOW IS LIVE FOR CALIBRATION — READ
`progress\ocr-pipeline.md` BEFORE ANY BANK RENDER.** Tesseract v5.4.0 verified at
`C:\Program Files\Tesseract-OCR\tesseract.exe`. Validation-first: the gate is calibrated against
already-shipped questions (GG t16 / House c12 as ground truth) and **touches no NEW page until the
user's sama debate round returns a verdict.** Content standards, fold discipline and citations are
unchanged — only the reading mechanism.

**✅ CALIBRATION DONE 2026-08-30 — `ledger.md` §17q.** 43/43 shipped questions: **0
clinically-material stem/option OCR errors; House keys 20/20 exact.** ⚠️ **The one real leak: five
GG key letters ABSENT from the TSV at ~96 surrounding confidence — confidence cannot see a dropped
word; the halt-loudly block grammar is what guards key blocks.** Candidate gate: mean conf ≥ 88 AND
structural parse. Untested: decimals/units, word-box figure detection. **Two briefs written and
waiting on the user**: `briefs\ocr-gate-tooling-brief.md` (→ OpenCode, content-free) and
`briefs\ocr-gate-debate-brief.md` (→ paste to ChatGPT). **House ch.14 may run on the classic visual
flow meanwhile — its landscape layout was going to be part-visual anyway.**

**⚠️⚠️ THIS FILE WAS FOUR DAYS AND ELEVEN BATCHES STALE WHEN IT WAS NEXT READ.** It described the
module at 764 questions while the data file held 1,099. Nothing was lost — every batch validated and
booted at merge time — but the two files this project resumes from were both describing a state that
no longer existed. **`ledger.md` §17l is the reconciliation, written from commits and measured files
rather than from memory. The write-up is part of the batch, not a thing that follows it.**

### Where the numbers stand — measured 2026-08-30, not derived

| | |
|---|---|
| Questions merged | **1,330** — Grade Gain **880** (topics 1–20 + End Exams 1–2) · House **450** (ch.1–16), **counted by id prefix, not carried forward** (`validate.js` re-run 2026-08-30 post-§17v: 0 BAD, 0 dead refs, 0 holes, 3,139 markers) |
| Corpus | **3,770** (3,681 MCQ + 89 cases) · **105 images** |
| Chapters seeded | **35 of 36** — `op-appear` "Problems of Appearance" is the last empty one |
| Last `file://` boot | 2026-08-29 post-§17p splice: **0 console errors, 876 rules, 3 `5/4` blocks, 4 modules, 153 chapters, 1,604 sections, 89 cases** |
| Git | **262 commits ahead of `origin/design/clepsydra-and-sessions`, UNPUSHED** — 261 measured 2026-08-30 + the §17o/§17p recovery commit. Push needs the user's device-code flow; a plain `git push` hangs forever |
| §14.5 register | ✅✅ **ZERO open rows, all four modules** |
| Lecture cache | ✅✅ **all 29 decks read** — the module has no unread deck left |
| Open caching debt | ✅ **CLOSED 2026-08-31** — `content\ophtho\book\ch20-drugs.txt` rewritten off the renders, 1,354 lines / 68 KB, 18 page sections, verified from disk. Full findings in the "Open debt CLOSED" block at the end of this file. ⚠️ Read that block before writing any glaucoma-class question: the book prints **three incompatible orderings** of the same classes on pp.264 / 265–267 / 268 |

**⚠️⚠️ THE PROTOCOL BELOW STILL HOLDS AND IS NOT NEGOTIABLE.** The hub is the SOLE WRITER of
`questions.ophtho.js`, `cases.ophtho.js`, `theory.ophtho.js`, this file and every git commit.
Subagents draft into `content\ophtho\qb-pages\*.array.js` + `*.draft.js` and **never touch a data
file, a resume file or git.** The hub runs the sweep, every fold decision, the splice, the §7
validation, the marker delta and the commit — **one batch at a time**, because batch B's sweep must
run against a corpus that already contains batch A or cross-bank folds are missed.

**⚠️ TWO CONCURRENT SUBAGENTS, NOT FOUR.** The cap was raised to 4–5 on 2026-08-24 and that decision
cost a usage limit with seven agents live; two more limits were hit on 2026-08-25. **Keep the
write-incrementally paragraph in every brief** — every agent that appended as it went lost nothing,
and every agent holding work in memory lost everything.

### What is in flight right now (2026-08-30)

**Nothing. All four 2026-08-29 batches merged, validated and booted** — the session died AFTER the
§17o/§17p merges but BEFORE their commit and this file's update; recovered and committed 2026-08-30.

| Batch | Pages | State |
|---|---|---|
| **House ch.12 "12. Vitreous"** | book pp.80–84 (sheets 42–44) | ✅ **MERGED 2026-08-29** — 20/20, 0 folded, 0 boxes, 0 figures (`ledger.md` §17m) |
| **GG topic 16 "Pediatric Ophthalmology"** | book pp.109–112 (+113 proof) | ✅ **MERGED 2026-08-29** — 23/23, 0 folded, 6 boxes, **1 figure** (`ledger.md` §17n) |
| **House ch.13 "13. The retina"** | book pp.85–90 (+91 proof) | ✅ **MERGED 2026-08-29** — 27/27, 0 folded, 0 boxes, 0 figures (`ledger.md` §17o) |
| **GG topic 20 "Drugs and The Eye"** | book pp.127–132 | ✅ **MERGED 2026-08-29** — 40/40, 0 folded, 6 boxes, 0 figures (`ledger.md` §17p) |
| **House ch.14 "14. Neuro-ophthalmology"** | book pp.91–97 (sheets 47–51) | ✅ **MERGED 2026-08-30** — 28 shipped + **1 folded into `opmcq-c1-4`**, 0 boxes, 0 figures (`ledger.md` §17r) |
| **House ch.16 "16. Pediatric ophthalmology"** | book pp.102–107 (sheets 53–55) | ✅ **MERGED 2026-08-30** — 22 shipped + **3 folded into `opmcq-c2-13`/`opmcq-c15-8`/`opmcq-c4-4`**, 0 boxes, 0 figures (`ledger.md` §17v) |

**⚠️⚠️ THE ONE RULE BOTH BATCHES ADDED, AND IT HAS NO INSTRUMENT BEHIND IT: A REPAIRED
BACK-REFERENCE IS A RECONSTRUCTED STEM, AND A RECONSTRUCTED STEM MUST NOT ANSWER ITS OWN QUESTION.**
Seven stems and one `imgAlt` were rewritten across the two batches because the drafting agents had
named the **diagnosis** where the source printed only **findings** — and `opmcq-c12-9` and
`opqb-t16-699` each handed over their own key. Two banks, two agents, neither seeing the other's work,
same day. `stagecheck.js` compares options and keys; `sweep.js` compares stems to *other* stems;
**nothing compares a stem to its own key.** Read every repaired back-reference against its antecedent,
by hand, before the splice.

**⚠️ And the crop lesson: `bounds.js` cannot measure a figure that sits in a column of text**, because
the stem above and the options below are ink too. It returns its own window's edges, which reads
exactly like the clipping signature and is not. **Use a column/row density profile** — one clean dense
run with sparse on all four sides is the answer (`ledger.md` §17n).

### What is queued after that

**⚠️ THE PER-BANK SPLIT IN THIS FILE WAS WRONG BY EXACTLY 37, IN BOTH DIRECTIONS, AND THE TOTAL HID
IT.** It read "Grade Gain 724 · House 375" against a correct total of 1,099; measured by id prefix the
split was **761 · 338**. Thirty-seven Grade Gain questions were being counted as House, and because
the error was offsetting, **every sum check this file has ever passed would still have passed.**
Corrected 2026-08-29 from a direct count and reconciled against the topic tables below: Grade Gain
784 written = 790 printed − 6 folded; House 358 written = 362 printed − 4 folded. **Count the split,
never just the total.**

**Grade Gain — 201 remaining, all of it exam sections:** End Exams 3–5 (70), End Exam 6 Photos
(35), Tutorial Exam (27), Final Exam (69). Topics 1–20 ✅ COMPLETE at 824 written = 830 printed
− 6 folded; **End Exam 1 ✅ §17s (29 = 29, zero folds) · End Exam 2 ✅ MERGED 2026-08-30 (§17u) —
27 written = 27 printed (eleventh exact contents hit), ZERO folds again** (the End Exams reword
rather than reprint — twice running now; every reject named its token; back-reference
`opqb-t22-7` hand-read clean). **Numbering RESTARTS at Q1 per exam section — read the number
under each banner, never compute it.** **Next: End Exam 3, book pp.141–144 (+1 past), 30
promised — renders READY in scratchpad `ee3\` (p-148..153 = book 141–146).**
⚠️ **The staged `ee3\` and `h17\` renders live in the DEAD session's scratchpad** (verified on
disk 2026-08-30): `C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\fa979a62-cd4b-409d-8022-8bf772622092\scratchpad\` —
use them from there, or re-render (cheap: `pdftoppm -png -r 150`, GG PDF = book + 7; House
sheets 56–57 for ch.17). Later sections may
still fold — EE1/EE2's zeros are measured per section, never assumed forward.

**House — ~572 remaining (~1,025 printed − 450 written − 3 c16 folds netted). ch.16 "Pediatric
ophthalmology" ✅ MERGED 2026-08-30 — 22 shipped + 3 folded into `opmcq-c2-13`/`opmcq-c15-8`/
`opmcq-c4-4` (`ledger.md` §17v — all three the FIFTH shape, within-bank cross-chapter EXACT
reprint; the [D] shared-menu-different-key trap fired again, Q22 "mucus" vs c4-3 "purulent" —
a pair, never a fold), 0 boxes, 0 figures. Ch.15 ✅ §17t (15 + 2 folded, SIXTH shape). Ch.14 ✅
§17r (28 + 1 folded). Next: ch.17 "Ocular malignancies", opens book p.108, renders READY in
scratchpad `h17\` p-056..059. ⚠️ **CH.17 CARRIES THREE KNOWN FOLD CANDIDATES read during the
boundary check**: its Q5/Q6 reprint ch.16 Q5/Q6 verbatim; its Q2 reprints ch.16 Q19 with a
fifth option ADDED ("E. Choroidal melanoma" — menu-LENGTHENED reprint).** ⚠️ **THE BANNER CENSUS GIVES EVERY REMAINING CHAPTER BOUNDARY BEFORE A
PAGE IS OPENED**, and it has now held three times running (ch.10, ch.11, ch.12). It lives in the
header of `house-c9.array.js`: banners on half-pages
`3L 4L 10L 13R 16R 20L 23R 26R 29R 33L 36L 39L 42L 44R 47R 51L 53L 56L 58L 61L 66L 72L 78R 80L 82R 112L 118R`,
which convert to book pages by `2N−4` (left) / `2N−3` (right). Chapters after 12 therefore open at
book pp. **85, 91, 98, 102, 108, 112, 118, 128, 140, 153, 156, 161, 220, 233**.
**⚠️ THE 59-PAGE GAP FROM p.161 TO p.220 IS THE OSCE BLOCK — 269 PHOTOGRAPH QUESTIONS**, and it is
the single largest cost left in the module.

**Endpoint — never opened.** `Opthalmology endpoint.pdf`, **293 MB, 2,442 pages**, uncounted. It was
excluded from every remaining-count reported before 2026-08-25 because nobody had looked at the file.
The recon agent died on a session limit and wrote nothing. **The scope question — all three banks, or
two banks well — is the user's, and it is still open.**

**132 short-answer model-exam items → `type:'case'`** in `cases.ophtho.js`, which is still empty.
They **reference the OSCE images rather than reprinting them**, so they need links to existing crops.

### ⚠️ The three things that dominate the remaining cost

1. **~304 IMAGE questions** — House OSCE Q1–269, plus Grade Gain's End Exam 6 (Photos) at 35.
   **Every crop is LOOKED at**; fifteen of fifteen first attempts have been wrong in this project, and
   ENT's crop detector is template-specific and **will not fire on these banks.**
2. **The back of both files is recycled BY DESIGN** — Grade Gain's eight exam sections and House's
   model exams are past papers. **The duplicate sweep matters more there than anywhere else.**
3. **The endpoint bank, if it is in scope at all.**

### Rendering

`node <scratch>\oph\qpages.js <gradegain|house|endpoint> <firstBook> <lastBook> <outDir>` — it does
each file's own offset arithmetic (`gradegain` PDF = book + 7; `house` PDF sheet = `floor(book/2)+2`,
two book pages per sheet) and **always renders one page past**, which is not optional on this bank.

**The reusable subagent brief is `progress\briefs\ophtho-bank-brief.md`** — copy it, fill the slots,
launch.

### Topic-by-topic status, Grade Gain

| Topic | Promised | Printed | Written | Folded | Boxed | State |
|---|---|---|---|---|---|---|
| 01 Examination of the Eye | 71 | **71** | 71 | 0 | 0 | ✅ |
| 02 Optics & Errors of Refraction | 41 | **41** | 41 | 0 | 8 | ✅ |
| 03 Orbit | 26 | **26** | 26 | 0 | 4 | ✅ |
| 04 Lacrimal System | 26 | **26** | 26 | 0 | 6 | ✅ |
| 05 Eyelid | 59 | **59** (Q165–223) | 59 | 0 | 4 | ✅ |
| 06 Conjunctiva | 65 | **65** (Q224–288) | **63** | **2** | 9 | ✅ |
| 07 Sclera | 8 | **8** (Q289–296) | 8 | 0 | 3 | ✅ |
| 08 Cornea | 52 | **52** (Q297–348) | **51** | **1** | 12 | ✅ |
| 09 Lens | 61 | **61** (Q349–409) | **60** | **1** | 12 | ✅ |
| 10 Uveal Tract | 38 | **38** (Q410–447) | 38 | 0 | 12 | ✅ |
| 11 Glaucoma | 50 | **50** (Q448–497) | **49** | **1** | 18 | ✅ |
| 12 Vitreous | 15 | **15** (Q498–512) | 15 | 0 | 4 | ✅ 2026-08-25 |
| 13 Retina | 69 | **69** (Q513–581) | 69 | 0 | 19 | ✅ |
| 14 Neuro-Ophthalmology | 63 | **63** (Q582–644) | 63 | 0 | 9 | ✅ 2026-08-25 |
| 15 Squint | 37 | **37** (Q645–681) | 37 | 0 | 4 | ✅ 2026-08-25 |
| 16 Pediatric Ophthalmology | 23 | **23** (Q682–704) | 23 | 0 | 6 | ✅ 2026-08-29 |
| 17 Malignancies | 11 | **11** (Q705–715) | 11 | 0 | 3 | ✅ 2026-08-25 |
| 18 Ocular Trauma | 39 | **39** (Q716–754) | 39 | 0 | 3 | ✅ 2026-08-25 |
| 19 Systemic Diseases | 36 | **36** (Q755–790) | **35** | **1** | 11 | ✅ 2026-08-25 |
| 20 Drugs and The Eye | 40 | **40** (Q791–830) | 40 | 0 | 6 | ✅ 2026-08-29 |
| 21 End Exam 1 | 29 | **29** (restarts at Q1) | 29 | 0 | 0 | ✅ 2026-08-30 |
| 22 End Exam 2 | 27 | **27** (restarts at Q1) | 27 | 0 | 0 | ✅ 2026-08-30 §17u |
| Exam sections ×6 left | 201 | — | — | — | — | EE3 rendered, next |

### Topic-by-topic status, House (Part A)

| Ch | Title | Printed | Written | Folded | Boxed | State |
|---|---|---|---|---|---|---|
| 1 | Examination of the eye | **56** | 56 | 0 | 0 | ✅ |
| 2 | Optics & errors of refraction | **32** | 32 | 0 | 0 | ✅ |
| 3 | The Orbit | **28** | **27** | **1** | 0 | ✅ |
| 4 | Lacrimal system | **30** | **29** | **1** | 0 | ✅ |
| 5 | Eyelids | **32** | **31** | **1** | 0 | ✅ |
| 6 | Conjunctival diseases | **28** | 28 | 0 | 0 | ✅ |
| 7 | The sclera | **26** | 26 | 0 | 0 | ✅ 2026-08-25 |
| 8 | The cornea | **30 under 28 numbers** | 30 | 0 | 0 | ✅ 2026-08-25 |
| 9 | The crystalline lens | **28** | 28 | 0 | 0 | ✅ 2026-08-25 |
| 10 | The uveal tract | **26** | 26 | 0 | 0 | ✅ 2026-08-25 |
| 11 | Glaucoma | **26** | **25** | **1** | 0 | ✅ 2026-08-25 |
| **12** | **Vitreous** | **20** | 20 | 0 | **0** | ✅ 2026-08-29 |
| **13** | **The retina** | **27** | 27 | 0 | 0 | ✅ 2026-08-29 — count is a READ count, nothing outside corroborates it (`ledger.md` §17o) |
| **14** | **Neuro-ophthalmology** | **29** | 28 | **1** | 0 | ✅ 2026-08-30 — fold into `opmcq-c1-4` (`ledger.md` §17r) |
| **15** | **Squint** | **17** | 15 | **2** | 0 | ✅ 2026-08-30 — folds into `opmcq-c14-5`/`c14-7`, sixth fold shape (`ledger.md` §17t) |
| **16** | **Pediatric ophthalmology** | **25** | 22 | **3** | 0 | ✅ 2026-08-30 — folds into `opmcq-c2-13`/`c15-8`/`c4-4`, all fifth shape (`ledger.md` §17v) |
| 17–20+ | — | ~572 | — | — | — | not started — ch.17 opens book p.108, renders READY `h17\` |

**⚠️ THIRTEEN CHAPTERS IN, HOUSE HAS PRINTED ZERO EXPLANATION BOXES AND ZERO FIGURES.** That is now a
strong pattern and still **a property of the PAGE, counted each time, never carried forward** — every
staging header records the count for its own pages. Grade Gain, by contrast, printed 0, 8, 4, 6, 4,
9, 3, 12, 12, 12, 18, 4, 19, 9, 4, 6, 3, 3, 11, 6 across its topics (t1–t20, from the table above).


**⚠️ House prints NO explanation box and NO figure in chapters 1, 2 or 3** — but that is a property of
the PAGE, counted each time, never carried forward.

**⚠️⚠️ THE ORPHANED-ANSWER DEFECT IS THE THING THIS BANK IS DEFINED BY: ch.2 had TWO, ch.3 FOUR, ch.4 FOUR, ch.5 FIVE.** I recorded it as plateauing after ch.4 and ch.5 disproved that. Most orphan **option text** as well as the key, and
⚠️⚠️ **ch.5’s Q19 IS A FIVE-OPTION QUESTION SHOWING ONLY THREE OPTIONS ON ITS OWN PAGE** — the break distorts the question’s SHAPE, not just its key. Answers are printed inline, so a missing
key cannot be caught by a page count. **Check every question has an answer line, one at a time.**

**⚠️ THE PROMISED COUNT HAS NOW BEEN EXACT SIX TIMES RUNNING** (71, 41, 26, 26, 65, 52, 8). That is a
pattern and still not a guarantee — ENT’s Grade Gain was wrong 17 times in 21. **Count what is printed.**

**⚠️⚠️ AND THE "Page As" FIGURE IS UNPREDICTABLE IN BOTH DIRECTIONS:** it lied on t2 (14 keys on the
next page) and t3 (11 keys), and was **CORRECT on t4 and t7**. **Render one page past, every time, and
record which way it went.**

### ⚠️ Numbering — a brief of mine got this wrong

GG numbering runs **continuously across topics 1–20**. I briefed topic 7 as opening at Q165 by reasoning
*"topic 4 ended at Q164"* and forgot that topics 5 and 6 intervene; it actually runs **Q289–Q296**. The
agent caught it from the printed numbers. **Read the number under the topic banner; never compute it.**

### ✅ THE HOUSE BANK — identity and structure, settled 2026-08-12

**Cover rendered and looked at:** *"Dr. HOUSE in Ophthalmology MCQs, December 2025 edition"*, with the
Hugh Laurie artwork and the HOUSE wordmark. **It is genuinely House — `bank:'house'`.** The cover
also advertises **OSCE spots, end-of-round exams and final exams** alongside chapterwise MCQs, so the
126 pages hold more than one kind of section; expect the structure to change at a section boundary and
**never carry structure across one.** It claims to follow *"the latest update of the published
relative-weight list of the department"*, which will matter when the theory `w` weighting is set.

**⚠️⚠️ ITS PAGE ARITHMETIC IS UNLIKE ANYTHING ELSE IN THIS PROJECT — A4 LANDSCAPE, TWO BOOK PAGES PER
PDF PAGE**, left = even, right = odd. `PDF page = floor(book page / 2) + 2`; conversely PDF page N
carries book pages `2N−4` and `2N−3`. PDF p.1 is `[book p.1 | the cover]` and PDF p.2 is blank. A
simple "book + k" offset **does not exist for this file** — assuming one silently halves your reading.

**Answers are printed INLINE beneath each question** ("Answer: C"). There is **no pooled answer page
and no key section**, so the "Page As lies" defect cannot occur here — but neither can a missing key
be spotted by a page count.

**⚠️ QUESTION NUMBERING RESTARTS AT 1 IN EVERY CHAPTER** (confirmed — ch.2 opens at Q1 on book p.16).
Ids must therefore carry a chapter token: **`opmcq-c1-<n>`**. Without it every chapter collides.

**Chapter 1 prints 56 questions (Q1–Q56), NO explanation box and NO figure anywhere** — all six PDF
pages read. So every ch.1 entry is authored and takes the marker, whose text names this bank's own
file: `Written for this bank — ophthalmology MCQ.pdf prints no explanation here.` **Box presence is a
property of the PAGE; do not carry that zero into chapter 2.**

**⚠️ CROSS-BANK FOLDS BECOME POSSIBLE FOR THE FIRST TIME WITH THIS BATCH.** Until now the module held
one bank, which is why topics 1–3 could return zero folds honestly. House ch.1 is *"Examination of the
eye"* and Grade Gain topic 1 is *"Examination of the Eye"* — **the same subject, from two banks that
reprint each other.** Run the full six-stage sweep and expect hits; on a match **ADD THE BANK via
`alsoIn`, never add an entry.**

**⚠️⚠️ BOTH SUBAGENTS WERE KILLED MID-WORK BY THE SESSION USAGE LIMIT (resets 1 am Africa/Cairo), AND
NEITHER RETURNED ITS MANIFEST.** That is the §11 stall condition: **drop to 1 live subagent** until a
clean run. Everything below was recovered by reading what they left on disk, not from a manifest.

**⚠️ A KILLED SUBAGENT'S OUTPUT CAN STILL BE COMPLETE — AND CAN STILL BE HALF-WRITTEN. CHECK, NEVER
ASSUME EITHER WAY.** Slot A died at "validating the draft" and its 26 entries were **whole and
correct**; slot B's last words were "starting Q1–Q10" and it had in fact drafted **22**. The status
message is a stale snapshot; **the files are the truth.** Parse-check every `.array.js` and
`.draft.js`, count the entries, and compare the id range against the staged range before believing
anything.

**⚠️ DO NOT SPLICE A PARTIAL CHAPTER.** House ch.1 has 56 questions staged verbatim and 22 drafted.
Splicing 22 would leave `opmcq-c1-1…22` live while 23–56 do not exist, and any fold decided later
across that boundary would be made against half a chapter. `house-c1.draft.js` is therefore **kept,
not deleted** — resume the drafting from **Q23** and merge the chapter whole. **Its bank identity is
also still unconfirmed:** the recon that was supposed to render page 1 and read the cover never
reported, so **nothing may be labelled `house` until that cover is looked at.**

### The hub's two instruments — `<scratchpad>\ophtho\`

`sweep.js <draft.js>` runs all six stages of a draft against the corpus **and against itself** (a
bank reprints itself), and prints the **E and F top-3 for every entry regardless of score** — because
a real fold has scored 0.13 at F and 0.17 at E, so a threshold would have hidden it. It flags the
option sets on which stage F is worthless (two-item true/false, bare ordinal, fewer than four content
tokens) instead of scoring them 1.00 and wasting a read. Verified against a synthetic draft: stage A
caught an exact reprint, stage D caught a dropped-distractor variant, and the known
`opqb-t1-11`/`opqb-t1-14` false-positive pair surfaced at **F=1.00 with E=0.04**, which is the
recorded blind spot behaving exactly as documented.

`validate.js [expectedMarkerDelta]` is §7 plus the four checks its inline snippet lacks: the marker
count, misplaced markers, the "Ask ChatGPT" sweep, and per-module/per-bank counts.

**⚠️ IT BROKE BEFORE THE CONTENT DID, ON ITS FIRST RUN — the fifth auditor in this project to do so.**
It reported **0 authored markers across 112 entries** whose batches closed at a verified +104. The
cause was `[^.]*` standing in for the bank name: **the filename `ophthalmology qb.pdf` contains a
period**, so a no-period class cannot cross it and nothing ever matched. A second fault sat behind
it — 16 entries end with a legitimate `*(Secondary chapter: …)*` note **after** the marker, so a
strict "ends with" is false for them. Both fixed; it now reads **104, reconciling exactly** as
71 (topic 1, no boxes) + 33 (topic 2, 41 written − 8 boxed). **A count of exactly zero where the
ledger says otherwise is the auditor, not the content.**

**Baseline before any subagent splice, 2026-08-12: ophtho 112 entries, 104 markers, 0 bad entries,
0 dead backticked ids, option counts all 4.**
**After topic 3: 138 entries, 126 markers (+22 = 26 drafted − 4 boxed, predicted and observed),
0 bad entries, 0 dead ids.**

### Topic 3 "Orbit" — closed 2026-08-12, 26 printed / 26 written / **0 folded**

**Both of this bank's recorded page defects fired on one topic.** A **question tail shares the first
answer page** — Q138 is printed in the left column of book p.19 while the answer block starts in the
right column of the same page — and the **answers run one page past the stated "Page As"**, with
**eleven of twenty-six keys (Q128–Q138) on book p.20**. Stopping where the contents page says would
have lost a question *and* eleven keys. **The contents count was exact for the third time running**
(71, 41, 26); ENT's Grade Gain contents was wrong 17 times in 21, so this bank is behaving
differently — worth noting, still never worth trusting.

**4 printed boxes (Q116, Q127, Q128, Q133), 22 authored.** Box presence remains a property of the
PAGE: topic 1 printed 0, topic 2 printed 8, topic 3 printed 4.

**Zero folds, and here is why the zero is a zero.** The only corpus to sweep against was topics 1–2 —
examination of the eye, and optics/refraction. Sixteen orbital terms were checked against it and
**every one returned 0 hits**: proptosis, exophthalmos, cellulitis, exenteration, evisceration,
enucleation, Hertel, mucormycosis, pseudotumour, dermoid, rhabdomyosarcoma, cavernous, lagophthalmos,
retrobulbar, orbital. There is also **no second bank in the corpus yet**, so a cross-bank fold was
not yet possible. Stages C and D did fire six times and **all six were menu recycling, not reprints**
— the bank reuses one four-item menu (thyroid eye disease / orbital cellulitis / cavernous sinus
thrombosis / lacrimal gland tumour) across Q117, Q118, Q122, Q135 and Q138, which asks five different
questions off it. **Same options + same key + different stem is not a fold**, and `opqb-t3-117`
("commonest cause of unilateral exophthalmos") against `opqb-t3-138` (a Graves vignette) is that rule
exactly, at **F=0.91 with E=0.00**.

**Two defects recorded per the ruling, keyed as printed and noted in the explanation:**
- **`opqb-t3-127`** — options **B and D both describe enucleation**; D ("the optic nerve is cut and
  the whole globe is removed as a whole") is how the operation is performed, and matches the bank's
  own printed box. Keyed B.
- **`opqb-t3-132`** — **chemosis is also expected** in retrobulbar haemorrhage, and **this bank says
  so itself** at `opqb-t3-121`, which lists chemosis among its signs. Keyed C (ophthalmoplegia).

**Two transcription repairs**, both recorded shapes: Q125 says "the **previous case**" and the deck is
shuffled, so the vignette was carried into the stem; **Q126 prints no question sentence at all** — it
ends at the vignette — so the sentence its four options answer was supplied.

**All fifteen lecture filenames cited across the batch were checked against the directory and all
fifteen resolve** — that check exists because a filename has been written wrongly from memory three
times in this project.

**Slot A's next topic when it merges:** t4 "Lacrimal System", book pp.21–24 (+1 past), 26 promised,
ids `opqb-t4-` onward. **⚠️ Its grounding deck `L9) lacrimal system..txt` is a CamScanner watermark
(33 slides, no text) and must be read as 4-up contact sheets first.**

**✅ `L10) orbit` IS NOW CACHED IN FULL** — all 48 slides read visually as twelve 4-up contact sheets
at 110 dpi and written to `content\ophtho\lectures\L10) orbit.txt`, replacing the 686-byte watermark.
It ends with an explicit **"NOT COVERED ANYWHERE IN THIS DECK"** list, which is what lets a gap be
settled by proving a negative instead of from memory. Ten slides **overflow their text box in the
original PowerPoint** and lose their last line or two — those are marked `[text cut off in the
original]`; the words are genuinely not on the slide, so a question turning on one of them is a real
gap, not a transcription failure. The most load-bearing casualty: slide 10 announces *"Tests used to
differentiate a restrictive from a neurological motility defect:"* and **the list itself is cut off**,
so the forced duction test is never named anywhere in the deck.

---

## The bank

| | |
|---|---|
| File | `Semester 8\Opthalmo\Questions\ophthalmology qb.pdf` |
| Identity | **Grade Gain** — cover reads *ASM MINDS' OPHTHALMOLOGY GRADE GAIN EDITION*, "GG EDITION", "1st EDITION". Verified by rendering page 1, not by the filename |
| `bank` value | `gradegain` |
| Id prefix | **`opqb-t<topic>-<n>`** — e.g. `opqb-t1-1` |
| Pages | 185 PDF pages |
| **⚠️ PAGE OFFSET** | **PDF page = book page + 7.** PDF p.8 carries the footer `| P a g e 1`. Verified, not assumed |

### Structure — established by reading PDF pp.1–16

- **Two columns, ~10 questions per page.** Some pages carry 11 (book p.4 = Q31–41). Count what is
  printed; never infer from the page count.
- **Each question prints ONCE.** No reprint-per-section behaviour like ENT's endpoint file.
- **Questions and answers are in separate blocks**, questions first, then an answer page.
- **⚠️⚠️ EXPLANATION BOXES: PRESENT IN SOME TOPICS, ABSENT IN OTHERS. THE BOX IS A PROPERTY OF THE
  PAGE, NOT OF THE BANK.** Topic 1's answer page prints **bare letters only** — `1. Correct Answer: B`
  — across all 71. On that evidence I wrote here that the bank prints no boxes anywhere. **That was
  an over-generalisation from a single page and topic 2 disproved it immediately: topic 2 prints
  EIGHT boxes in 41** (Q74, 81, 87, 92, 99, 101, 108, 112), some of them substantial — Q87's sets out
  the whole latent/facultative/absolute/manifest/total hyperopia scheme, Q112's lists every
  complication of myopia. **Count the boxes on every topic's answer pages and predict the marker
  delta as `new entries − boxed`; never assume from the previous topic.** This is the same lesson ENT
  learned when one chapter printed a single box in thirty-two.
- **⚠️ QUESTION NUMBERING RUNS CONTINUOUSLY ACROSS TOPICS** — topic 1 ends at Q71 and topic 2 opens
  at **Q72**, not at Q1. It does not restart at a topic the way ENT's Grade Gain restarted at a
  section. *(Not yet confirmed for the End Exams at the back — check when reached.)*
- Running header names the topic: `QUESTION BANK: Examination of the Eye`.

### The page map — transcribed from the contents pages (PDF pp.3–7)

**⚠️ Treat the page ranges as reliable and the counts as unreliable** — that is how ENT's Grade Gain
behaved (counts wrong 17 times in 21, always upward). **This bank is behaving differently: topics 1
and 2 both printed EXACTLY the promised count** (71 and 41). Two exact counts is a promising pattern
and still not a guarantee — keep counting what is printed.

> **⚠️⚠️ BUT THE "Page As" FIGURE LIES, AND IT LIED ON THE SECOND TOPIC.** Topic 2's contents entry
> says **Page As 14**. The keys for **Q99–Q112 are on book p.15** — fourteen of forty-one, more than
> a third of the topic, on a page the map does not mention. **Rendering one page past the last
> stated answer page is what caught it, on the first topic where it could possibly have mattered.**
> This is the identical defect ENT's Grade Gain showed (its ch.4 nearly lost seven of twenty-three
> keys the same way). **RENDER ONE PAGE PAST THE LAST ANSWER PAGE, EVERY TIME, WITHOUT EXCEPTION.**

Book pages; add 7 for the PDF page.

| # | Topic | Qs | As | Promised |
|---|---|---|---|---|
| 01 | Examination of the Eye | 1 | 8 | 71 — **✅ printed 71, exact** |
| 02 | Optics and Errors of Refraction | 9 | 14 | 41 |
| 03 | Orbit | 16 | 19 | 26 |
| 04 | Lacrimal System | 21 | 24 | 26 |
| 05 | Eyelids | 25 | 31 | 59 |
| 06 | Conjunctiva | 33 | 41 | 65 |
| 07 | Sclera | 44 | 45 | 8 |
| 08 | Cornea | 46 | 52 | 52 |
| 09 | Lens | 54 | 62 | 61 |
| 10 | Uveal Tract | 64 | 69 | 38 |
| 11 | Glaucoma | 71 | 77 | 50 |
| 12 | Vitreous | 79 | 81 | 15 |
| 13 | Retina | 82 | 90 | 69 |
| 14 | Neuro-Ophthalmology | 93 | 100 | 63 |
| 15 | Squint | 103 | 108 | 37 |
| 16 | Pediatric Ophthalmology | 109 | 111 | 23 |
| 17 | Malignancies of the Eye and its Adnexa | 113 | 114 | 11 |
| 18 | Ocular Trauma | 115 | 119 | 39 |
| 19 | Ocular Manifestations of Systemic Conditions and Diseases | 121 | 125 | 36 |
| 20 | Drugs and the Eye | 127 | 131 | 40 |
| 21 | End Exam 1 | 133 | 136 | 29 |
| 22 | End Exam 2 | 137 | 140 | 27 |
| 23 | End Exam 3 | 141 | 144 | 30 |
| 24 | End Exam 4 | 145 | 147 | 20 |
| 25 | End Exam 5 | 148 | 150 | 20 |
| 26 | End Exam 6 (Photos) | 151 | 159 | 35 |
| 27 | Tutorial Exam | 160 | 167 | 27 |
| 28 | Final Exam | 168 | 175 | 69 |

**Promised total: 1,087.** The book runs to at least book p.175 = PDF p.182, and the PDF has 185
pages, which reconciles.

**⚠️ Topic 26 is "End Exam 6 (Photos)" — 35 questions over 8 question pages.** That is the figure-
heavy block; budget cropping time for it and expect the ENT lesson to hold (13 of 13 Grade Gain crops
wrong on the first attempt — the trap is the layout, not the measurement).

---

## Counts — written + folded = printed

| Topic | Printed | Written | Folded | Boxed | Authored | Status |
|---|---|---|---|---|---|---|
| 01 Examination of the Eye | **71** | **71** | **0** | 0 | 71 | ✅ closed 2026-08-12 |
| 02 Optics and Errors of Refraction | **41** | **41** | **0** | **8** | **33** | ✅ closed 2026-08-12 |
| **Total** | **112** | **112** | **0** | **8** | **104** | reconciles |

**Module total: 112 questions in `app\data\questions.ophtho.js`, all `bank:'gradegain'`.**
Validated in a full run across every module's data file: **0 bad module/chapter refs, 0 duplicate
ids, 0 dead backticked ids, every `answer` in range, every entry carrying `source` and
`explanation`, 0 markers misplaced into `source`.** All 112 print four options. Mean explanation
length **592 words**. One image (`q-op-gg-11`), file present, `imgAlt` set.

**⚠️ Marker delta topic 2: predicted +33 (41 new − 8 boxed), observed +33 — exact.** All 8 boxed
entries correctly carry **no** marker. **This check is only meaningful because topic 2 had boxes**;
in topic 1, where the delta necessarily equalled the entry count, it could only ever have caught a
marker written into the wrong field.

### The within-bank sweep — all 112, run 2026-08-12

All six stages, normalised (lowercase, punctuation stripped, options sorted). **Result: ZERO folds
across both topics.** Seven pairs surfaced; every one is a false positive of a documented kind:

| Stage | Pair | Why it is not a fold |
|---|---|---|
| **C** | `opqb-t1-48` / `opqb-t1-60` | Both key *retinal detachment*; stems and option sets entirely different. **Same key + different stem is not a fold** |
| **C** | `opqb-t2-84` / `opqb-t2-92` | Both key *macular oedema*, both ask what pinhole-worsening implies. **Two of four options are REPLACED** (myopic astigmatism + OAG vs hyperopic astigmatism + keratoconus), so by the folding test this is a **new question — both held.** The nearest thing to a genuine within-bank repeat so far |
| **E** = 0.67 | `opqb-t2-87` / `opqb-t2-90` | Both on the components of hypermetropia, but **different option sets and different keys** (facultative-decreases-with-age vs absolute-not-corrected-by-accommodation). F is only 0.36 |
| **F** = 1.00, E = 0.04 | `opqb-t1-11` / `opqb-t1-14` | **Identical four-option menu** — Rods / Cones / Ganglion / Bipolar — with different keys and unrelated stems |
| **F** = 0.71 | `opqb-t1-7` / `opqb-t1-9` | Shared anatomy vocabulary (iris, retina, lens, cornea, choroid); unrelated questions |
| **F** = 0.67 | `opqb-t2-74` / `opqb-t2-103` | Shared positional vocabulary (*in front of / behind* the retina, lens, cornea). One asks where a myopic eye focuses, the other where the hyperopic far point lies |
| **E** = 0.50, F = 0.00 | `opqb-t2-95` / `opqb-t2-112` | Both stems contain *most common* and *myopia*; **option sets share nothing at all** |

**⚠️ Two standing warnings are now confirmed on this bank's own data.** (1) `opqb-t1-11`/`-14` is the
short-generic-menu false positive at **F = 1.00**, separated only by stage E at 0.04. (2)
`opqb-t2-95`/`-112` is its mirror — a **stem-vocabulary** false positive at **E = 0.50** with F = 0.00.
**Neither ranking dominates. Run both and read the list; never fold on one number.**

**Zero folds so far is credible rather than lucky.** There is nothing cross-bank to sweep against
until House arrives, and these two topics cover largely disjoint material — examination technique and
optics. **The sweep has not yet been properly tested**, and it will not be until bank 2. Do not let
two clean topics erode the habit of running all six stages.

---

## ⚠️ NEVER `git commit --amend` IN THIS REPO — learned the hard way, 2026-08-12

**Four chats commit to one branch. HEAD can move between the command that reads it and the command
that rewrites it, and `--amend` rewrites whatever HEAD points at *now*, not the commit you meant.**

What happened: I committed topic 1, noticed the subject line had picked up a stray `@` (from writing
a PowerShell here-string `@'…'@` into the **Bash** tool, which does not understand it). I ran
`git log -1` to read the message back — correct at that moment — and then `git commit --amend`.
**In between those two commands the Neuropsychiatry chat committed.** My amend therefore rewrote
*their* commit, prepending my subject line to theirs.

**No content was lost** — my three files are intact in `d7a3ed6`, the neuro chat's files and full
message body are intact in `9851b40`, and the Pediatrics commit on top was untouched. The damage is
one spurious line in one commit subject.

**It was NOT repaired, deliberately.** Fixing it means rewriting two commits, one of which belongs to
another chat that may be mid-work — the cure is far more dangerous than a cosmetic flaw in a message.
**Rewriting history is what caused this; doing it again to fix it would be the same mistake twice.**

**The two rules that follow:**

1. **Get the commit message right the first time. Never amend.** If a message is wrong, leave it and
   say so.
2. **The Bash tool is Bash, not PowerShell.** `@'…'@` here-strings are PowerShell syntax; in Bash
   they pass the `@` through as literal text. Use a real heredoc, or `-F` with a file.

---

## ⚠️⚠️ THE LECTURE CACHE IS 21 DECKS, NOT 25 — FOUR CACHED FILES CONTAIN ONLY A WATERMARK

**Verified 2026-08-12 by reading them, not by trusting their size.** Four `.txt` files in
`content\ophtho\lectures\` look cached and are **empty of content**: `pdftotext` extracted nothing
but the **"CamScanner"** watermark stamped on every slide of a phone-scanned deck.

| File | Slides | What the cache actually holds |
|---|---|---|
| `L10) orbit.txt` | **48** | the word *CamScanner*, 48 times. Nothing else |
| `L9) lacrimal system..txt` | **33** | *CamScanner* × 33 |
| `L24) Ocular tumors..txt` | **78** | *CamScanner* × 77 |
| ~~`L21) Optic Nerve.txt`~~ | **20** | ⚠️ **THIS ROW IS WRONG — CORRECTED 2026-08-24 BY READING THE FILE.** It is **not** a watermark and not blank lines: it is a real, complete extraction of a genuinely sparse 20-slide **picture** deck. All 615 bytes are content — *Normal Optic Disc* · the five manifestations of optic nerve dysfunction (VA, colour vision, contrast sensitivity, field defect, RAPD) · *Optic Disc Edema — Papilloedema / AION / Papillitis* · *Optic Atrophy — Primary / Secondary / Consecutive / Glaucomatous*. **The teaching is in the fundus photographs under those headings**, which is a different problem from a failed extraction and needs the same fix (a visual read), so the deck stays on the owed list below — but *"22 blank lines and one stray line"* is not what is in the file |

**⚠️ A NON-ZERO FILE SIZE IS NOT EVIDENCE OF A CACHE.** `L10) orbit.txt` is 686 bytes — big enough to
look real in a directory listing, and 100 % worthless. **Check chars-per-slide, and open anything
under ~200 chars/slide.** The healthy decks run 500–3,000 chars per slide.

### So EIGHT of the 29 ophthalmology decks need visual reading — **one now done, SEVEN left**

Four that were never cached (image-only, listed below) **plus** these four whose cache is a watermark:

| Deck | Slides | Chapters it grounds |
|---|---|---|
| `L3,4) Clinical- Ocular examination` | — | `op-intro`, `op-va` |
| `L13,14) Uvea & Sclera` | — | `op-uvea`, `op-sclera` |
| `L25) Trauma I` | — | `op-trauma` |
| `L27,28) Problems of External Appearance` | — | `op-appear` |
| ~~`L10) orbit`~~ | 48 | **✅ DONE 2026-08-12** — read as twelve 4-up sheets, full transcription written over the watermark, with a "NOT COVERED" list at the end |
| **`L9) lacrimal system.`** | 33 | `op-lac` — topic 4 |
| **`L21) Optic Nerve`** | 20 | `op-neuro` |
| **`L24) Ocular tumors.`** | 78 | `op-onc` |

### ⚠️⚠️ THE TABLE ABOVE UNDERCOUNTS. THE REAL FIGURE IS ELEVEN DECKS AND 574 SLIDES — MEASURED 2026-08-24

The list above was assembled from two failure signals — *"never cached"* and *"the cache is a
CamScanner watermark"* — and **both signals miss the same thing: a deck that extracts a little and
teaches in pictures.** Sweeping every deck for **characters per slide** instead found eleven, not
eight. Healthy prose decks here run 500–3,000 chars a slide; anything under ~200 was opened and
looked at.

| Deck | Slides | chars/slide | What it actually is |
|---|---|---|---|
| `L13,14) Uvea & Sclera` | 41 | **0** | never cached — rasterised prose |
| `L27,28) Problems of External Appearance` | 70 | **0** | never cached — photo atlas |
| `L24) Ocular tumors.` | 78 | 13 | `CamScanner` × 77 |
| `L9) lacrimal system.` | 33 | 15 | `CamScanner` × 33 |
| `L21) Optic Nerve` | 20 | 30 | ⚠️ **NOT a watermark — a real, complete extraction of a sparse picture deck** |
| `L29) Sqint I` | 35 | 63 | ⚠️ **never on any owed list** — Galal picture deck |
| `L30) Squint II` | 23 | 66 | ⚠️ **never on any owed list** — Galal picture deck |
| `L22) Pupil and Visual pathway` | 25 | 97 | ⚠️ **never on any owed list** — the visual pathway is a diagram |
| `L1,2) Ocular Anatomy…` | 136 | 146 | ⚠️ **never on any owed list, and it is the module's foundational deck** — 83 of 136 slides extract blank under the identical running header *"Anatomy & Physiology"*, so page-title triage is useless and the whole deck goes to sheets |
| `L5) Eyelid disease` (`.pptx`) | 47 | — | 127 media files for 365 words |
| `L6) Conjunctiva` (`.pptx`) | 66 | — | 73 media files for 343 words |

**⚠️ A FAILURE LIST BUILT FROM FAILURE SIGNALS IS NOT A COVERAGE MEASUREMENT.** Five of these eleven
appeared on no owed list anywhere, because their extractions *succeeded* — they are just nearly
empty. The instrument that finds them is a **ratio measured against slide count**, not a look at file
size: `L21) Optic Nerve.txt` is 615 bytes, which looks plausible in a directory listing and is 30
characters a slide.

**⚠️ AND THE TWO `.pptx` DECKS ARE AS BLIND AS THE WORST PDFs.** They extract cleanly from slide XML,
so they never appeared in any failure list at all — while carrying more than one picture per slide
against five to eight words of text. **PowerPoint is installed**, so they are exported to PDF with
`Presentation.SaveCopyAs(path, 32)` — `SaveCopyAs`, never `SaveAs`, because `SaveAs` rebinds the open
presentation — and then rendered like any other deck. Verified: 47 and 66 pages out, both source
`.pptx` mtimes unchanged.

**Read each one as FOUR-UP CONTACT SHEETS at 110 dpi** — `<scratch>\oph\sheet.js` renders and tiles a
whole deck in one command and **burns the slide number into each cell**, which is what lets a
transcription be checked against the deck. 12 reads instead of 48, headings and bullets still legible
at ~760 px per slide; four independent agents confirmed legibility on their first sheet. **Read the
deck, cache the transcription into `content\ophtho\lectures\`, and overwrite the watermark file** so
the next reader is not misled the way I was.

**✅ Done 2026-08-24: `L9)` (41,013 B), `L13,14)` (42,819 B), `L24)` (71,943 B).** All three carry a
closing `NOT COVERED ANYWHERE IN THIS DECK` list, which is what lets a later gap be settled by
proving a negative instead of guessing.

**This does NOT mean a lecture is missing.** All 29 decks exist in `Semester 8\Opthalmo\Theoritical\
PPT\`. There is nothing to interview the user about — the ENT precedent of a genuinely absent deck
(`L28`) does not repeat here. It is purely an extraction problem, and the fix is reading.

---

## The lecture cache — corrected 2026-08-12

The module brief listed 25 cached decks and flagged gaps at L3, L4, L13, L14, L25, L27, L28.
**I checked `Semester 8\Opthalmo\Theoritical\PPT\` and FOUR OF THOSE DECKS EXIST.** They were never
cached because **`pdftotext` returns almost nothing from them — they are image-only scans**, unlike
the other 25:

| Deck | `pdftotext` yield | Covers |
|---|---|---|
| `L3,4) Clinical- Ocular examination.pdf` | 59 chars | `op-intro`, `op-va` |
| `L13,14) Uvea & Sclera.pdf` | 41 chars | `op-uvea`, `op-sclera` |
| `L25) Trauma I.pdf` | 68 chars | `op-trauma` |
| `L27,28) Problems of External Appearance.pdf` | 176 chars | `op-appear` |

I wrote those four stub `.txt` files and then **deleted them**, so nothing in
`content\ophtho\lectures\` misrepresents itself as cached. **They must be read visually** — render at
110 dpi as **four-up contact sheets** (the ENT trick: 10 reads instead of 40, headings still legible
at 760 px per slide). **Do that when the first question needing one comes up**, not before.

**So no lecture is missing from the supplied material.** There is nothing to interview the user
about on this point — the ENT precedent of a genuinely absent deck does **not** repeat here.

**⚠️ LIST THE DIRECTORY BEFORE CITING A LECTURE FILENAME.** Citing from memory was wrong three times
in ENT. The 25 cached names are exact-with-punctuation, including
`L24) Ocular tumors..txt` and `L9) lacrimal system..txt`, **both of which carry a double dot**, and
`L29) Sqint I.txt`, **which is spelled "Sqint" in the source**.

---

## Filing decisions — how the 26 chapters are being used

**The rule (from the module brief): file by what the QUESTION tests, not by the organ it names.**
The chapter list overlaps itself deliberately — anatomy chapters and presenting-complaint chapters
cover the same material. Decisions made so far, to keep bank 2 consistent with bank 1:

| Situation | Chapter | Why |
|---|---|---|
| Basic eye exam technique, VA testing, pinhole, fields, pupil testing, tonometry, red reflex | `op-va` | *VA, Field, Lid, Lac, Orbit* — the exam chapter |
| Ocular anatomy asked as anatomy (chambers, aqueous drainage, avascular structures, rods/cones, macula, EOM actions and nerves) | `op-intro` | *Introduction, History* — the syllabus's own anatomy-and-symptomatology slot |
| Symptom vocabulary — photopsia, metamorphopsia, floaters, what a symptom is called | `op-vissym` | *Visual Symptoms* |
| A vignette whose task is **the diagnosis behind a symptom** (CRAO, retinal detachment, PVD) | the presentation chapter (`op-acute`, `op-red`…) | it tests the presentation, not the organ |
| Counselling a parent/patient about glasses, screen distance, myopic progression | `op-refract` | *Errors of Refraction* |

**The rule applied, with the module brief's own worked example as the precedent.** The brief says a
question asking *"which of these causes a painful red eye"* is `op-red` **even though the answer is
uveitis** — i.e. **file by the question's SUBJECT, not by the answer's organ.** Two topic-1 questions
turned on this and were filed by direct analogy:

- `opqb-t1-49` (C/D asymmetry → "suspicious for glaucoma") → **`op-pupil`**, because the question's
  subject is a **fundus finding**; `op-glauc` noted as secondary.
- `opqb-t1-50` (temporal crescent → "myopia") → **`op-pupil`** for the same reason; `op-refract`
  noted as secondary.

`op-pupil` is titled *Pupil, EOM, Fundus*, so it is the correct home for questions whose subject is
the pupil, ocular motility, or a fundus sign examined as such — which in an "Examination of the Eye"
topic is a large share.

**Distribution after topics 1 and 2 (112 questions, 17 of 26 chapters seeded):**

`op-refract` 38 · `op-va` 16 · `op-intro` 13 · `op-pupil` 12 · `op-squint` 6 · `op-glauc` 5 ·
`op-ret` 5 · `op-cornea` 5 · `op-vissym` 3 · `op-acute` 2 · `op-lid` 1 · `op-lac` 1 · `op-neuro` 1 ·
`op-uvea` 1 · `op-red` 1 · `op-conj` 1 · `op-cat` 1

The concentration is expected and correct: topic 1 is an examination tour that seeds many chapters
thinly, and topic 2 is almost entirely refraction. **Nine chapters still hold zero** — `op-orbit`,
`op-sclera`, `op-onc`, `op-trauma`, `op-appear`, `op-systemic`, `op-white`, `op-insid` and
`op-vissym` (near-zero) — and every one has a dedicated topic later in this bank, so they will fill.
**Do not rebalance by re-filing questions; file each by what it tests and let the topics do the work.**

Secondary chapters are named in the explanation, in italics, wherever a question genuinely sits in
two — thirteen entries in topic 1 carry one.

---

## Defects and traps found in this bank so far

**⚠️ BACK-REFERENCES ARE VERY DENSE IN TOPIC 1 — 10 of 71 (14 %).** The deck is shuffled, so every
one must be repaired by restating its antecedent:

| Q | Says | Antecedent |
|---|---|---|
| 12 | "In the previous Q, which retinal distribution pattern supports your answer?" | Q11 — night blindness, rods |
| 14 | "The previous selected structure contains the highest concentration of:" | Q13 — the fovea |
| 19 | "In the previous Q, what degenerative process leads to previous condition?" | Q18 — PVD |
| 26 | "In the previous Q, if vision improves after the previous step…" | Q25 — pinhole |
| 28 | **"Final VA?" — a stem with NO question and no context at all** | Q27 — the chain from "cannot read the largest Snellen at 1 m" |
| 30 | "In the previous Q, if The child resists covering the right eye." | Q29 — fixation testing in a 1-year-old |
| 32 | "In the previous Q, If the other eyes miss the same field, this is:" | Q31 — "my right eye does not see the right side" |
| 35 | "In the previous Q, Expected associated signs?" | Q34 — anisocoria greater in dim light |
| 37 | **"In the previous Which reflex remains normal?" — the word "Q," is missing; the stem is malformed as printed** | Q36 — the swinging-light finding |
| 44, 45 | "In the previous Q, If You shine the penlight…" / "If The cover test shows…" | Q43 — the 2-year-old whose eye "looks inward in photos" |

**Q28 is the worst of them** — printed as the two words *"Final VA?"* with options HM / NPL / PL / CF
and nothing else. It is the tail of a Q27 chain and is meaningless standing alone.

Capitalisation inside stems is erratic as printed (*"If You shine"*, *"If The cover test"*). That is
the source's own typography; it is repaired silently in the stem, which is transcription hygiene, not
a content change.

---

## Not yet done

- Topic 1 entries not yet written or spliced.
- No within-bank duplicate sweep run yet (nothing to sweep against until a second topic exists).
- Bank 2 (House, `ophthalmology MCQ.pdf`, 126 pages, prefix `opmcq-`) not started. **Identity must be
  confirmed by rendering its page 1** before any `bank` value is assigned.
- Bank 3, Endpoint (`Opthalmology endpoint.pdf`, 2,442 pages, prefix `opep-`) not started.
- `app\data\theory.ophtho.js` is empty. **26 chapters of theory are owed.**

---

## ⚠️ SCOPE — CORRECTED BY THE USER, 2026-08-12. READ THIS BEFORE TRUSTING THE BRIEF.

**`progress\briefs\START-HERE.md` §9 cut two things out of scope. The user has overruled both.**
Their words: *"I don't want in your brief to ignore any questions or any important thing in the
theoretical notes. I did the separate chats to speed up, not to have unfinished work."*

**The parallel chats exist to make the work faster, NOT smaller.** So:

| The brief said | The actual scope |
|---|---|
| *"Do not write theory notes. `theory.<yours>.js` stays empty."* | **Theory IS owed — all 26 chapters.** Written to the `CLAUDE.md` §4 brief: a NEW STUDY SOURCE sufficient to sit the exam from alone, not a summary. Length is never the goal; dropping something important is the one unacceptable failure |
| *"Do not attempt the module's endpoint PDF unless your module file tells you to."* | **All THREE banks are owed** — Grade Gain, House **and** the 2,442-page Endpoint file. No bank is skipped |
| *"Do not batch five topics of reading before writing any."* | **This one stands** — it is a method rule, not a scope cut, and it is what keeps the work verifiable |

**Nothing is dropped, deferred to a later chat, or declared out of scope without the user saying so.**
If something genuinely cannot be finished, it is **named explicitly** in this file as owed work — never
left silent.

### The order of work, and why

Sequence is a speed decision, not a scope decision. Everything below gets done.

1. **Grade Gain** (185 pp, ~1,087 questions) — 0.17 pages per question, by far the densest source.
2. **House** (126 pp) — next densest.
3. **Endpoint** (2,442 pp) — ENT's equivalent ran 4.4 pages per question. It is last **because it is
   slowest per question, not because it is optional.**
4. **Theory, 26 chapters** — written **backwards from the questions**, per `CLAUDE.md` §4, so the
   question corpus has to exist first for the notes to be built against. This is the one genuine
   dependency in the list.

**⚠️ The exam is approximately early September 2026.** If the calendar runs out before item 4 is
complete, that is a fact to **report to the user while there is still time to act on it**, not to
discover at the end.

---

## 2026-08-31 — WPS OCR checkpoint (Chat A). MEASURED, not estimated.

**Verdict: the OCR route is safe for the transcription stage of this bank, and it is the fastest
thing that has ever been measured on it. It replaces the transcription stage ONLY.**

Ran the two-step pipeline on **GG End Exam 3** (PDF pp.148-153 = book pp.141-146, `PDF = book + 7`
held on every page) and on a **calibration set of five already-shipped pages** (GG t16, PDF
pp.116-120 = book pp.109-113, 23 shipped `opqb-t16-*` entries). EE3 alone has no ground truth --
it is not yet drafted -- so the accuracy number would have been an assertion without the
calibration set. Exit code **0** on both batches; no 429, quota not reached.

### Number 1 -- how much came through clean

| Set | Measured against | Result |
|---|---|---|
| EE3, 30 questions / 120 options | the rendered pages, read by a subagent | **30 of 30 word-perfect**, stems and every option |
| EE3, 30 answer keys | the printed key list on book p.144, both columns | **30 of 30 correct** |
| t16 calibration, 23 shipped questions | `questions.ophtho.js` | 23 of 23 located; **91 of 93 options verbatim**; **23 of 23 keys** |
| t16 stems | `questions.ophtho.js` | 17 of 23 verbatim -- **all six misses are shipped-side, not OCR** |

The six t16 stem misses break down as: **three are the deliberate back-reference repairs**
(`opqb-t16-693/695/699` restate the antecedent inside the stem, by design) and **three are silent
normalisations in the shipped text**. Two of those three were taken to the pixels:

- **`opqb-t16-685`** -- the page (book p.109) prints `&` twice and the American **`edematous`**.
  Shipped text reads `and` and British **`oedematous`**. **The OCR is faithful; the shipped entry
  is not.**
- **`opqb-t16-694`** -- the page (book p.110) prints "presents with **white** pupillary reflex" and
  "**Most likely** diagnosis is:". Shipped text inserts "a" and reads "The most likely".
  **Again the OCR is faithful.**

⚠️ **This is a finding about the existing corpus, not about OCR.** Content standards say questions
are transcribed, never authored. Two confirmed silent normalisations on one page pair suggests the
visual transcription flow has been quietly tidying the source. Not repaired here -- flagged.

### Number 2 -- exactly what the OCR got wrong

**Zero substantive errors across 30 questions, 120 options and 30 keys.** Every defect found is
cosmetic, and each one is a segmentation hazard rather than a wrong word:

1. **Missing space after punctuation, pervasive** -- `1.Unilateral`, `(CRAO),the`, `punctum,the`,
   `sac.What`, `astigmatism,light`. No word altered.
2. **Options merged onto one line**, ~11 places (`B. Sensory squint C.Optic atrophy D.Glaucoma`).
   Recovered by splitting on the `A.`-`D.` markers.
3. **`ofthe`** for "of the" (Q19 opt. B) and **`O ra serrata`** for "Ora serrata" (Q23 opt. C).
   ⚠️ The second one can be misparsed as option letter `O` -- check it at splice time.
4. **Junk digit runs at page tops** (`83439230`, `122558379561`, `27937615148`), two of them fused
   to real text: `27937615148End Exam 3`. Strip 4+ digit runs before any header-based split.
5. **`ASM MinDS` watermark injected mid-column**, inside the question flow, three times.
6. **Page footer shredded into the last option before a page break** -- `Page 109` came through as
   `ge 65412028532Pa 109`. Bound the last option on the next question number, never on end-of-block.
7. No stray CJK characters in 11 pages. No hallucinated text: the engine leaves visible garbage
   rather than confident fiction, which is what makes it safe here.

**A comparison harness was itself wrong first.** The first splitter anchored on line starts and
reported 11 of 23 questions "NOT FOUND" -- the OCR wraps the next question number onto the tail of
the previous option line, so nothing may anchor on a newline. Rewritten stream-based
(`<scratch>\ocr\cmp2.js`). Check the auditor before believing the audit; it fired again here.

### Number 3 -- is it measurably faster

**Yes, for the transcription stage. Roughly 40x cheaper in tokens and ~12x in wall clock -- but it
does not touch the other stages, so do not expect the questions/day figure to move 40x.**

| Step | Measured |
|---|---|
| `pdftoppm -png -r 200` | **0.497 s/page** (11 pages, 5.47 s) |
| `wpscli photo2word`, question pages | **3.03 s/page** (EE3, 6 pages, 18.17 s) |
| `wpscli photo2word`, dense explanation pages | **7.49 s/page** (t16, 5 pages, 37.44 s) |
| End to end, all 11 pages | **5.05 s/page** |

⚠️ **The reference's 1.29 s/page did not reproduce** -- measured 3.0-7.5 s/page depending on how
much text the page carries. `tools\wps-ocr-reference.md` should be read as an optimistic floor.
Even so: **the 773 remaining questions live on roughly 260 pages ~ 22 minutes of machine time.**

Against the visual route, measured in this same session: the audit subagent spent **262 s and
120k tokens** to read 6 pages visually. The OCR delivered the same text in **18 s and ~3k tokens**.
That is the transcription stage only -- drafting explanations, chapter filing, the six-stage fold
sweep, the stagecheck, and every image crop are unchanged. **~304 of the 773 are image questions
and 132 model-exam items are short-answer; OCR does nothing for either.** The honest claim is that
OCR removes the cheapest-to-automate stage of a pipeline whose cost is dominated by drafting and
crops, and it removes it almost completely.

### Confirmed facts for the next batch

- **EE3 prints 30 questions and 30 keys against 30 promised** -- the contents count is now exact
  **twelve** times running on this bank. Keys: 1B 2B 3C 4A 5B 6B 7C 8B 9A 10D 11A 12B 13A 14B 15B
  16B 17B 18D 19B 20A 21B 22A 23C 24C 25B 26B 27C 28B 29B 30A.
- **EE3 carries no figures at all.** Every stem is answerable from text. This section costs no crops.
- EE3 ends on PDF p.151 (book 144); EE4 begins PDF p.152. **No question tail on the answer page**
  this time -- what is visible there is reverse-side show-through of EE4 Q6, correctly ignored.
- ⚠️ **EE4's answer keys were not rendered** -- they fall on **PDF p.154 (book p.147)**. Render it
  before drafting EE4. `ee3.txt` already carries EE4 Q1-20 from pp.152-153, un-audited.
- Working files, current session scratchpad `…\e2adb0a0-…\scratchpad\ocr\`: `ee3.txt` · `cal.txt` ·
  `cmp2.js` (the fixed comparison harness) · rendered PNGs in `ee3\` and `cal\`.
- `wpscli` resolves at `12.1.0.28032`; re-resolve from `HKCU:\Software\Kingsoft\Office\6.0\Common`
  after any WPS update.
- The older `ocr-cal\report.txt` under `…\fa979a62-…\scratchpad\` is the **Tesseract** record
  (WER 0.48-0.71), the dead ladder -- not comparable to these numbers.

**STOPPED HERE by instruction.** 773 questions are not committed to this route until the user reads
the three numbers above.

---

## 2026-08-31 — House Part A ends at chapter 20. The remaining ~572 is NOT chapterwise MCQs. (Chat A, MEASURED)

Whole-bank OCR sweep of `ophthalmology MCQ.pdf` sheets 56-126 (61 of 62 pages; sheet 122 deferred,
see below). Running head read on every sheet.

**The bank has two parts, and the split falls inside sheet 69.**

| Sheets | Book pp. | Running head | What it is |
|---|---|---|---|
| 56-69 | 108-135 | `Chapterwise MCQs` | Part A chapters **17, 18, 19, 20** - text MCQs, answers inline |
| 69-118 | 134-233 | `OSCE (End-of-round E-exams)` | photo questions, ONE continuous numbering |
| 119-126 | 234-249 | `OSCE (End-of-round E-exams)` | past-paper recall, numbering restarts each page-block |

**Part A remaining = ~116 questions, confirmed two ways.** Highest printed question number per
chapter: ch.17 **17** - ch.18 **27** - ch.19 **43** - ch.20 **29** = 116. Independently, inline
`Answer:` lines counted per sheet across 56-69 = **~117**. The two agree.

Chapter banners, quoted as the OCR renders them (junk digit runs are OCR artefacts, not print):
`17.Ocular malignancies` sheet 56 - `03319218.Ocular trauma` sheet 58 -
`0-14370619.Ocular manifestations of systemic diseases` sheet 61 - `03211420.Drugs &the eye` sheet 66.

**So the ~572 figure was right in total and wrong in composition.** Only ~116 of it is the
chapterwise work the last sixteen House batches did. The other ~456 is the OSCE section, and the
OSCE section is **image questions almost end to end** - sheet after sheet reads
`What is the diagnosis of the condition shown in the opposite photo?`. The continuous OSCE
numbering reaches **301 by sheet 118** at a steady ~6 per sheet, then the recall blocks on 119-126
add roughly 150 more at 20-33 per block.

⚠️ **This raises the module's crop budget far above the ~304 image questions on record.** Nearly the
whole OSCE section needs a looked-at crop, plus Grade Gain End Exam 6 (Photos, 35). Estimated, not
counted - the per-question count for sheets 70-126 has NOT been read page by page yet, and the
`~6 per sheet` rate is inferred from printed numbers, not from counting questions.

**Not yet verified:** that the OSCE section is in scope as MCQs at all. Several recall items print
`see the OSCE section` and a bare `Answer:PDR` - those may be short-answer, which in this project is
`type:'case'` in `cases.ophtho.js`, not an MCQ. **Read a page before planning that section.**

### WPS OCR - two exit codes the reference does not carry

- **Exit 3 = the batch timed out**, default ~300 s for the whole batch, NOT a quota failure. A
  62-page House batch died at page 35 of 62 with `Operation timed out. Use --timeout <seconds>`.
  **Pass `--timeout 1800` on any batch over ~30 pages.** Pages already converted survive; re-run
  only the remainder.
- **Exit 6 = batch completed with per-file failures**; the `batch_completed` JSON line names them.
- **429 is a RATE limit, not only the daily quota.** One page of 27 failed with
  `The operation is too frequent, please try again later.` while the other 26 succeeded, and an
  immediate single-file retry returned 429 again. It is a cooldown. **Two chats sharing the account
  reach it faster.** Sheet 122 (book pp.240-241) is the one page still un-OCR'd.

### Machine time, measured this session

| Batch | Pages | Render | OCR | s/page OCR |
|---|---|---|---|---|
| Book ch.20, dense text | 18 | 14.6 s | 98.6 s | 5.48 |
| GG sheets 155-183 | 29 | 16.9 s | 86.4 s | 2.98 |
| House sheets 65-99, landscape two-up | 35 | 56.9 s (62 pp) | 305.9 s | 8.74 |

House two-up sheets carry two book pages each, so 8.74 s/sheet is **4.37 s per book page** - in line
with the rest. Render is negligible next to OCR everywhere.

### Book chapter 20 - the open caching debt is now rendered and OCR'd

`ophthalmology.pdf` printed pp.**254-270** = PDF pp.**256-272**, 17 pages, and **PDF p.273 came back
empty** - the one-page-past check confirms chapter 20 runs to the last content page and stops,
exactly as `content\ophtho\book-map.md` states. OCR text staged at `<scratch>\ocr\ch20.txt`
(34,273 chars). ⚠️ **The cache is NOT written yet** - OCR is a search index, and every line has to be
confirmed against the rendered page before `content\ophtho\book\ch20-drugs.txt` exists.
**SUPERSEDED 2026-08-31 later the same day — the cache now exists, 1,354 lines, written off the
renders. See the "Open debt CLOSED" block at the end of this file.**

## 2026-08-31 - First OCR-route batch MERGED: GG End Exam 3 + House ch.17. Ophtho 1330 -> 1374. (Chat A)

**44 entries spliced, 3 folded.** GG End Exam 3 = 30 entries `opqb-t23-1`..`-30`, printed 30 against
30 promised, the two agree. House ch.17 "Ocular malignancies" = 17 transcribed, **3 folded**, 14
spliced. Zero printed explanation boxes and zero figures in both, so **markers = 44 = entries - 0**,
measured over the spliced ids themselves.

**Post-splice state, all measured:** `validate.js` **0 BAD, 0 sparse holes, 0 dead backticked refs,
0 markers in `source`**; ophtho **1374** (1330 + 44 exactly); `file://` boot **0 console errors**,
876 CSS rules, **3** `max-aspect-ratio:5/4` blocks, 4 modules, 153 chapters, 1,604 sections, 89
cases. 35/36 ophtho chapters seeded, `op-appear` still the only empty one.

### The three ch.17 folds, and why the two zero counts are zeroes

| Fold | Shape | Survivor |
|---|---|---|
| ch.17 Q5 = ch.16 Q5 | **Stage A exact** - stem word-identical, 5 options identical in text AND order, key C both | `opmcq-c16-5` |
| ch.17 Q6 = ch.16 Q6 | Option set + key identical; the two printings differ by **one function word** ("in THE evaluation" vs "in evaluation"), verified on a 1.9x crop | `opmcq-c16-6` |
| ch.17 Q2 = ch.16 Q19 | **SEVENTH FOLD SHAPE - distractor-swapped reprint with a lettering gap** | `opmcq-c16-19` |

**⚠️ THE SEVENTH SHAPE, AND MY BRIEF HAD IT WRONG IN BOTH HALVES.** I briefed the agent that ch.17 Q2
reprints ch.16 Q19 "with a fifth option `E. Choroidal melanoma` ADDED". Reading the page settled that
**both printings carry four options**; what changed is the **TEXT of the fourth** - "Sebaceous
carcinoma" at ch.16, "Choroidal melanoma" at ch.17 - and **separately** the ch.17 menu runs
**A, B, C, E with the letter D skipped**, no blank line, no gap, keyed "Answer: C", verified on a
2.2x crop. Two independent defects that I had collapsed into one wrong claim. The same wrong claim
was sitting inside `opmcq-c16-19` as a FORWARD FLAG and **has been corrected in place** and rewritten
as a fold record. **Folding was still right**: the swapped item is a pure distractor, the key sits
third in both printings, so the key letter does not move.

**GG End Exam 3 folded ZERO, and here is the measurement.** Sweep over 30 staged against 1,330 held:
**stage A = 0, stage B = 0, stage D = 0** - no exact reprint, no identical option-set-plus-key, no
identical menu under a different key anywhere in the module. All 14 candidates were C/E/F partial
overlaps. ⚠️ **The one alarming score was an artefact**: `[E] stem 1.00` between EE3 Q29 and
`opmcq-c16-20`. A 1.00 on a **four-word stem** is a token-set collapse, not a match - "The most
common cause of leukocoria is:" against "Which of the following can cause leukocoria?". The
discriminating token is **"most common" versus "can"**, and the keys differ (Congenital cataract vs
All of the above) over different menus. **This is now the third consecutive End Exam section to fold
zero** (EE1, EE2, EE3) - the GG End Exams reword rather than reprint, measured per section, still
never assumed forward.

**⚠️ The ch.17 sweep's other 19 candidates are one single artefact: the chapter's master option
menu.** Five of seventeen questions draw from the same five tumour names, so stages C, D and F fired
across the whole cluster. Every one was rejected **by name**: Q3 "commonest eyelid malignancy" vs the
retinoblastoma vignette; Q13 "recurrent chalazia" -> sebaceous carcinoma; and the near-fold pair
**Q14 vs Q15, whose entire difference is the word "primary"** (primary intraocular malignancy in
adults = choroidal melanoma; intraocular malignancy in adults = secondaries). A shared menu pairs
questions; it never folds them.

**⚠️ Cross-bank match NOT taken: ch.17 Q1 vs `opqb-t19-790`.** Same key text (Choroid), same four
options **reordered** so the key letter differs (C vs B), and the stems are reworded rather than
reprinted ("most common intraocular site for metastatic tumors" vs "most common site of ocular
metastasis"). Kept as two entries: no cross-bank fold has ever been taken in this module, and these
are two independently-written banks testing one fact, not one question printed twice.

### ⚠️ TWO INSTRUMENTS WERE BLIND THIS BATCH - both fixed, both had passed the batch first

1. **`stagecheck.js` passed `house-c17` with a green tick while one repair went unrecorded.** Its
   check for "every repaired option quotes its printed form" examined only words **LOST** from the
   printed option, and only words **longer than 3 characters**. `opmcq-c17-12`'s repair **ADDED** a
   word - the bank prints "Temporal part lower lid", the draft restored the "of" that the source's
   own option A carries - so nothing was lost, the entry was never examined, and the tick was false.
   The same two holes meant a draft silently **deleting** a short word - "not", "all", "no" - would
   also have passed, and dropping "not" inverts an option. ⚠️ **The first fix did not work either**:
   testing every changed word in both directions still passed, because the added word was "of" and
   `includes("of")` is true of essentially any English sentence. **A short token can only be
   evidenced by the printed PHRASE.** Now: long edits are quoted word-wise, short-token-only edits
   require the printed phrase. It catches `c17-12`, and `gg-ee3` still passes clean over 30 entries,
   so it is not a noise generator. The `c17-12` explanation now quotes the printed form.
2. **`qcheck.js` anchored the authored-marker regex to the END of the explanation** - the exact fault
   `validate.js` documents in its own header, since a legitimate `*(Secondary chapter: ...)*` note
   follows the marker in some entries. It read 17/17 on ch.17 (which had no trailing notes) so
   nothing was missed, but it was a guard waiting to fail. Now tests containment.

⚠️ **`stagecheck.js` remains blind to one thing by design**: it converts a printed key LETTER to an
index as A=0, so any menu with a lettering gap reports a KEY MISMATCH. `opmcq-c17-9` (menu printed
B-E with no A, key D = the **third** printed line = `answer:2`) fires this every run. It flags
loudly rather than passing silently, so a human adjudicates - but do not "fix" that entry.

⚠️ **THE CORPUS MARKER DELTA IS NO LONGER A VALID BATCH CHECK WHILE CHAT B IS LIVE.** Corpus markers
went 3,139 -> 3,199, a delta of **60** against my 44 new entries. The extra 16 are Chat B's: neuro
went 151 -> 173 questions in the same window. **Measure markers over your own spliced ids**, never as
a whole-corpus difference, until the parallel chats are done.

### Remaining, unchanged in total

GG **171** (EE4 20 · EE5 20 · EE6 Photos 35 · Tutorial 27 · Final 69) · House **~558** (~116 of it
chapterwise: ch.18 27 numbers/26 questions, ch.19 43, ch.20 29 - minus ch.18's under way; the rest is
the OSCE section). House ch.18 "Ocular trauma" is drafting now.

---

## House ch.18 "Ocular trauma" — MERGED 2026-08-31

Book pp.**112–117** (sheets p-058…p-060). Numbered **1–27, but 26 questions exist**: the book skips
Q11 outright — no blank, no gap in the layout, the numbering simply jumps from Q10 to Q12. **25
spliced**, because Q14 folded.

Post-splice: ophtho **1,399**, corpus **3,893**. `validate.js` 0 BAD · 0 dead refs · 0 sparse holes ·
0 control bytes. Boot from `file://`: **0 console errors, 876 CSS rules, 3 `max-aspect-ratio:5/4`
blocks, 4 modules, 153 chapters, 1,604 sections, 89 cases.**

### The fold — no new shape; this is the cross-chapter exact reprint again

`opmcq-c18-14` → **`opmcq-c6-27`**. Identical stem down to the printed defect "Digitally- measured"
(hyphen closed up, space after) that c6-27's `source` already recorded, identical options in the same
order, identical key. Within-bank, so **no `alsoIn`** — the ch.18 citation was folded into c6-27's
`source`, with a note that ocular trauma is its secondary chapter (it is filed under `op-conj` for
the subconjunctival haemorrhage that carries the stem). Three explanations still cited the folded id
in backticks and were repointed at `opmcq-c6-27`.

**`opmcq-c18-20` was REJECTED as a fold** — it shares the four-orbital-walls template menu with
`opmcq-c3-5` and `opmcq-c3-27`, but the vignettes differ substantively (26-year-old ED presentation,
"most common area fractured" vs 15-year-old with a CT-revealed fracture, "most likely site that
fractured"). ⚠️ **A shared option menu PAIRS questions, it never folds them.** Q22/Q25 are the same
trap inside this chapter: the identical five-option open-globe menu in the identical order, different
definitions in the stems, different keys (E vs C).

### ⚠️⚠️ THE REAL FAULT THIS BATCH: THE DRAFT SILENTLY COPY-EDITED 14 OF 26 STEMS

Not a transcription slip — **authored prose replacing printed prose**, and every numeric instrument
in the kit passed it. A subagent re-read all six half-sheets at 3.2×–4.5× zoom and confirmed the
page:

- **British spellings the bank does not use** — printed `hemorrhage` → drafted haemorrhage,
  `hematoma` → haematoma, `discoloration` → discolouration, `characterized` → characterised.
  **Chapter 18 prints AMERICAN spelling throughout; no British spelling appears anywhere in it.**
- **Articles inserted where the bank prints none** — "a deep anterior chamber", "a sluggish pupil",
  "an intra-ocular metallic foreign body", "a large subconjunctival hemorrhage", "in a case of".
- **Tenses rewritten** — Q5's printed "presents… he had… He complained… Examination revealed" had
  been smoothed to a uniform present tense; Q20's printed "heads… he got" likewise.
- **A word dropped** — Q21 prints "the poorest prognosis **ever**".
- **Parentheses removed** — Q22 and Q25 print their definitions inside round brackets, with the "?"
  falling **outside** the closing paren.
- **A clause elided** — Q5 prints "with swelling of the left lower lid" between "pain" and
  "Examination".

All 14 restored to the page. **Options and keys were clean throughout** — the damage was confined to
stems, which is exactly where no numeric check looks.

**Q9 is the one deliberate divergence.** The bank really prints "**blooda** accumulation" and
"sharply **demarkated**" (both confirmed at 4× zoom). Those are the source's own typos, so the
project rule applies: corrected in the stem, and **what the bank printed is recorded in the
explanation** — which the draft had already done. `stagecheck` reports this one stem mismatch every
run; it is correct to leave it reported.

### New instrument: `leakcheck.js` — does a stem hand over a NEIGHBOUR's answer?

MEMORY.md said no instrument sees this, and that was true. The bank prints **chains** ("In the
previous case, …"), and because question order is hashed from the id, every chain member's stem must
be rebuilt from its antecedent — which is where the damage happens.

- **Matching is on the key's CONTENT WORDS through a spelling-tolerant skeleton** (ae/oe→e, doubled
  letters collapsed, -ise/-ize levelled). An exact-string search finds **none** of the five real
  ch.18 leaks, because the rebuilt stems said "haemorrhage"/"hyphaema" while the keys print
  "hemorrhage"/"hyphema".
- **Adjacency (±4) is what makes it a leak rather than a coincidence.** Unrestricted it returned
  **273 hits over 1,400 questions** — every stem that happens to name a disease some other question
  keys. 273 identical-looking failures is a broken probe, not a broken corpus (`CLAUDE.md` §7).
- **A hit is not automatically a fault, and the precedent splits.** Shipped `opmcq-c17-9` MUST name
  the sebaceous carcinoma because its own key is the treatment — **structural**, legitimate. Shipped
  `opmcq-c17-11` correctly restates the findings without naming basal cell carcinoma — so an
  **avoidable** leak is not legitimate.

**ch.18 went from 5 leaks to 2.** Q7/Q8 keep "retrobulbar hemorrhage" named (they ask its time
window and its definitive treatment — unanswerable otherwise) and both now **say so in `source`**.
Q10/Q12/Q13 were rewritten to describe the findings without the word "hyphaema", which is possible
because `opmcq-c18-6` already did exactly that — they had been handing over Q9's key.

### Companion check: does a stem answer ITSELF? — run over all 1,400, **zero unrecorded faults**

Four hits, all adjudicated: three are the standard negation shape (`opqb-t1-2`, `opmcq-c4-2`,
`opmcq-c16-1` — the key negates a belief or finding the stem states, which *is* the question).
`opqb-t22-14` really is self-answering ("presents with severe pain… what is the most common
presenting symptom?" → key "Severe pain") — **and the earlier batch already recorded it verbatim** in
its explanation as the bank's own printing, "recorded here, not a defect to dispute". Nothing to fix.

### `idcheck.js` REBUILT — it had been lying in two ways

1. **Its known-id set was built from the draft files alone**, never from the shipped corpus. Since
   drafts are superseded after splicing, most live ids were invisible to it: it reported
   `opqb-t2-77` DEAD while that question sits in `questions.ophtho.js` and is cited 5 times.
   **A checker that cries wolf gets ignored — and this is the check MEMORY.md requires after every
   fold.**
2. **It scanned two hardcoded files**, `gg-t7` and `gg-t8`. Every draft written since was unchecked.

Now the known set is the union of the shipped corpus and every draft, and the scan covers every
draft **plus the shipped file itself** (a folded id that kept its backticks will be in an
explanation, and most explanations are shipped). Result: ch.18's **32** backticked refs all resolve,
and all **859** distinct backticked refs in the shipped corpus resolve. The only two remaining
findings are trailing commas in the `house-c1` / `house-c10` drafts, already spliced — cosmetic, not
shipping.

### One more instrument fault, mine, worth the same warning

`c18-stemfix.js` first reported **all 18 stems missing**. The draft double-quotes its string fields
and the matcher assumed single quotes. **Every failure identical = broken probe, not broken file** —
the same signature, hit twice in one session. The matcher now accepts either delimiter and reuses
the one it found.

### Remaining

GG **171** (EE4 20 · EE5 20 · EE6 Photos 35 · Tutorial 27 · Final 69) · House **~533** (ch.19 43 ·
ch.20 29 · the rest is the OSCE section, ~456 items on sheets 69–126, still unplanned — read a page
before assuming MCQ vs `type:'case'`).

**Ch.19 is staged and ready**: "**Ocular manifestations of systemic diseases**", **43 questions**
(numbered 1–43), sheets **p-061…p-065** = book pp.**118–127**; ch.20 "Drugs & the eye" opens on sheet
p-066, so the boundary is confirmed from both ends. Sheets 61–**67** are rendered (one past the last,
as the rule requires) at `…\e2adb0a0-…\scratchpad\ocr\h19\`, each split into left/right halves
`v61L.png`…`v67R.png` at 1170×1654.

⚠️ **The brief for ch.18 was wrong on one point and the agent caught it: the chapter opens on book
p.112, not p.113** — the banner and Q1–Q4 print on the LEFT half of sheet p-058. Check a chapter's
first page against the banner, not against the arithmetic alone.

⚠️ **The WPS OCR reorders options and deletes spaces.** For these sheets it emitted Q9 as A,C,B,D,E;
Q12 with B before A; Q7 and Q26 with the whole option block **above** the stem; and rendered
"Digitally- measured IOP was" as "Digitally-measuredIOPwas". **Anyone splicing from the OCR without
looking at the page gets option order and spacing wrong.** Search index, never a source.

---

<!-- RESUME-READ-FROM-HERE -->
## Open debt CLOSED 2026-08-31 — `content\ophtho\book\ch20-drugs.txt` exists again

The ch.20 book cache that died with its agent in §17p has been rewritten and **verified from disk**:
**1,354 lines / 68 KB**, 18 `## printed p.N` sections, 18 `ophthalmology.pdf p.<N>` citations, zero
illegible markers, and the `Semester 8\Opthalmo\Theoritical\Books\` path intact (the backslash-collapse
probe passes — the agent used `Write`/`Edit` and overrode a mid-run system directive that told it to
prefer bash heredocs, correctly, on the project's measured grounds).

Chapter 20 "Drugs and the Eye" = printed pp.**254–270** + one blank leaf at 271; PDF = printed + 2.
The contents page's "254–271" counts that blank.

**Five things in it that will change how its questions get written:**

1. **It is two chapters under one title.** Printed 254–268 is *drugs used on the eye*; printed
   **269–270 is a separate banner, "Examples of Ocular Side Effects of Systemic Medications"** —
   amiodarone, chloroquine/hydroxychloroquine, corticosteroids, digitalis, ethambutol, statins, the
   PDE-5 drugs. A question from 269 is topically nothing like one from 259.
2. **⚠️ THREE INCOMPATIBLE ORDERINGS OF THE SAME GLAUCOMA CLASSES.** Printed 264 numbers them roman
   **I–VII**; pp.265–267 renumber arabic **1–6** in a *different* order and drop Combinations;
   printed 268's summary table uses a **third** order. **"Class 3" is meaningless unless the page is
   named** — cite the printed page on every glaucoma-class claim.
3. **A book error, recorded not corrected** (printed 264): the book prints **"Dorzolamide +
   brimonidine (Simbrinza)"**. Simbrinza is brinzolamide + brimonidine. Flagged inline in the cache;
   per the project rule it is recorded, never silently fixed.
4. **Printed 268's table is not a restatement** — it ADDS **Betaxolol** as the named cardio-selective
   beta-blocker, a name the body text never gives, and it DROPS the prostaglandin "no major systemic
   toxic effects" line, PAP reversibility, and every hyperosmotic drug name. Read both.
5. **Statin polarity reverses inside one section** (printed 270): statins alone show **no** increased
   cataract risk; **simvastatin + erythromycin together** do. Two adjacent bullets, opposite
   directions — a distractor writes itself, and a careless one gets it backwards.

**Absence claims, each naming the specific thing and how it was measured** (all over the same 18
rendered PNGs, individually):

- **Tutorial material: ZERO.** No tutorial tab, no dashed blue box, no "Additions from Tutorial"
  ruled box, and no tutorial branch on the objectives tree. Unusual for this book.
- **Star-glyph importance ratings: ZERO**, and ch.19's alternative quoted-`"important"` device is
  absent too.
- **Numbered figures: exactly ONE in 18 pages** — `Figure (20-1). Seidel test`, printed 256. The
  opener cartoon and the three-photo prostaglandin strip on printed 266 are unnumbered.
- **Class VI "Combinations" is listed once and never discussed** — printed 264 only; pp.265–267 have
  no Combinations section and printed 268's table has no Combinations column.
- **No dose or dosing frequency for any anti-glaucoma drug.** Concentrations appear for only three
  groups: the five cycloplegics (259), decongestants + phenylephrine (260–261), and the three
  hyperosmotics (264: Glycerin 50%, Isosorbide 45%, IV Mannitol 20%).
- **Hydroxychloroquine screening is qualitative only** (269) — baseline dilated exam, fields, colour
  vision, fundus photography; **no mg/kg threshold, no duration threshold, no OCT, no FAF**.
- **Ethambutol has no dose and no colour-vision protocol** (270) — only "within 1 month" and
  reversibility on stopping.

### ⚠️ NEW OCR DEFECT SHAPE, AND IT IS THE WORST ONE YET: TABLES INVERT MEANING

The WPS OCR on the two table pages does not merely mis-read characters — **it destroys row/column
linkage in a way that silently reverses what the page says.** On printed 259 the cycloplegic table's
"Systemic side effects" text sits **in the tropicamide column only**; the OCR flattens the table to a
word list and it reads as applying to all five drugs. The same cell says **"the three drugs above"**,
meaning the three columns it sits under (homatropine, scopolamine, atropine) — unrecoverable from the
OCR. Printed 268 is worse: the page is **rotated 90°** and its OCR block preserves **not one**
row/column relationship. Both pages had to be read cold off the PNG.

**⇒ On a table page the OCR is not a degraded index, it is an actively misleading one.** Nine further
defects on record in the cache: a whole heading dropped ("Systemic fluorescein:", 258), figure
captions spliced into running prose (266), **six blank lines faking a figure slot on 257 where the
page is one full-page ruled table with no image at all**, off-page text absorbed from the adjacent
leaf (267), reverse-side show-through read as content (269), `eyclosporine A` for cyclosporine A
(262 — a grep for the real name returns nothing), α → plain "a" (266), CJK glyphs for bullets (264),
en-dashes flattened (270).

⚠️ Separately, and this is **the page, not the OCR**: the book itself sets Latin capital **B** for β
throughout pp.265–268 ("B-adrenergic"). Noted in the cache at the printed-265 block.

14 genuine printed misspellings are preserved with `[sic]` rather than corrected — "medriatics" ×2
and "nausia" (259), "Normaly"/"normaly" and "usualy" (257, 266), "bromofenac" (262), "cornea
verticillate" (269), **"avanfil"** in a heading against "avanafil" four lines below it (270), and
"HMG-COA … Hydroxymethylglutaryl coenzyme reductase inhibitors" with the coenzyme **A** dropped (270).

---

## GG remainder — the whole 171 is RENDERED and OCR'd, and the section map is settled 2026-08-31

`ophthalmology qb.pdf` is **185 PDF pages** (`pdfinfo`, read — not assumed). `PDF = book + 7`.

**⚠️ The tail question is answered: nothing is missing.** I expected the Final's answer key to run
past the rendered range and rendered pdf **184–185** to check. **pdf.184 is BLANK** (the PNG is
15.9 KB against 3.5 MB for its neighbour — the same blank-page signature the ch.20 book cache used)
and **pdf.185 is the back matter**. The Final's key runs `1.` … **`69.Correct Answer: B`** and ends
on **pdf.183**. So renders pdf **152–183** cover every remaining GG question, key included.

Renders on disk: `<scratch>\ocr\ee4\p-152..156.png` and `<scratch>\ocr\gg-rest\p-155..183.png`
(200 dpi, portrait, one book page per sheet — GG is NOT the two-up landscape layout House uses).
OCR at `<scratch>\ocr\ee4.txt` and `<scratch>\ocr\gg-rest.txt`.

### ⚠️ GG's STRUCTURE IS NOT HOUSE'S — THE KEY IS A SEPARATE BLOCK, NOT AN INLINE LINE

Every GG section prints as **banner → "Questions" → all the stems → banner again → "Answers" → a
bare numbered key list** (`1.Correct Answer: A`). House prints `Answer: X` inline under each
question. **This means a GG stem and its key are pages apart, and mis-aligning the key list by one
silently shifts every answer in the section.** Count the key entries against the question count
before trusting either.

### The section map (OCR-derived PRIOR — the reading agent confirms it off the banner, never adopts it)

| Section | PDF pages | Promised q | Where the banner sits in the OCR |
|---|---|---|---|
| End Exam 4 | 152–154 | 20 | `ee4.txt` line 10 (pdf.152); key on pdf.154 |
| End Exam 5 | 155–157 | 20 | `gg-rest.txt` line 8 (pdf.155); "Answers" line 186 (pdf.157) |
| End Exam 6 (Photos) | 158–166 | 35 | line 220 (pdf.158); "Answers" line 605 (pdf.166) |
| Tutorial Exam | 167–174 | 27 | line 656 (pdf.167) |
| Final Exam | 175–183 | 69 | line 970 (pdf.175); key ends `69.` on pdf.183 |

**Numbering restarts at Q1 in every section** — this is the GG exam-section rule already proved on
EE1, EE2 and EE3, and the OCR shows each block opening at `1.` again. Ids follow the established
`opqb-t<N>-<n>` scheme, one topic number per section.

⚠️ **End Exam 6 is the expensive one.** 35 questions that read off photographs — "The patient will
fail to blink in case of?", "What does this test in the photo examine?", "What does this device
examine?". Every one needs a **looked-at crop**, and `imgAlt` must give modality and view only
without answering the question. Budget it as the batch it is, not as 35 ordinary questions.

⚠️ **Both End Exam 1 and End Exam 2 folded ZERO** against the topic questions, and End Exam 3 also
came out at zero after all 26 candidates were rejected by name. **The GG End Exams reword rather
than reprint.** That is a measured pattern over three sections, not a rule — measure it again per
section and say how the zero was measured.

---

## House ch.20 "Drugs & the eye" — STAGED and SWEPT 2026-08-31 (draft in progress)

`content\ophtho\qb-pages\house-c20.array.js`, **29 entries**, verified from disk: `num` runs 1–29
contiguously with **no skipped or duplicated number** (checked band by band precisely because ch.18
skips Q11), every key letter in range, option menus of 4 or 5 only, zero `A.` prefixes leaked into
option strings, `n:20` throughout.

Banner as printed, red full-width band, white bold: **`20. Drugs & the eye`** on book **p.128**
(sheet p-066 LEFT half), folio read off the pixels. Chapter = book pp.**128–134** = sheets
**p-066 … p-069 (LEFT half only of p-069)**. **Seven book pages, so it ends mid-sheet** — the one
thing my brief did not anticipate.

**Counted three ways, all agreeing on 29**: forwards half-sheet by half-sheet (4+5+5+5+5+4+1),
backwards from the highest printed number, and by inline `Answer:` lines (4+5+5+4+5+5+1). The two
forward counts differ per page only by the three straddles and reconcile exactly. **This is what
"say how the count was measured" looks like** — a single count that happens to hit the promised
number is not a measurement.

**Lettering has no gaps or repeats in any of the 29 menus, so printed letter and zero-based index
agree 29/29.** Straddles: 3 — Q19 (options p.131, `Answer: A` opens p.132: read only p.131 and the
question has no key), Q24 (stem + A–B on p.132, C–D and the key open p.133: the key is visible but
two distractors are not), Q29 (number + first line at the foot of p.133, breaking after "…develops
sudden").

**0 printed explanation boxes, 0 figures** — counted on this chapter's own seven half-sheets, not
carried forward. Markers required in the draft = **29**.

### The next section is confirmed, from the pixels

Book **p.135** (sheet p-069, RIGHT half): full-width photographic banner, then the red display title
**`Ophthalmology OSCE`** between two barbell rules, then Q1 in a red numbered badge. The running
header strip changes from `Chapterwise MCQs` to **`OSCE (End-of-round E-exams)`** on that same half.
**No chapter-20 question prints on that half-sheet.** The header strips of book 136/137/138/139
(sheets p-070, p-071) were also checked — all four read `OSCE`; chapter 20 does not resume.

### Source defects — eight, all to be repaired-with-record in the draft

`Flourescien` ×3 in each of Q3 and Q4's menus · Q6 stem `is an the adverse effect` (doubled article)
+ `IV flourescien` · Q8 stem `flourescien dye` and option C printing `A& B` (space after the
ampersand only — every other occurrence in the chapter prints `A & B`, confirmed at 2.4× against
Q12/Q23) · Q15 option B `discrimmination` · Q19 stem `is the among the side effects` · Q23 option B
`irrerversible` and `even if its stopped` · Q26 stem `longterm` as one word.

⚠️ **The dye is spelled `flourescien` in Q3/Q4/Q6/Q8 and correctly `fluorescein` in Q20 — both
printed, in one chapter.** Recorded once in `opmcq-c20-3`, with the others pointing there.

⚠️ **Q19 prints `anaesthetics`, British, in a chapter that prints `anesthesia` at Q1 and `color` at
Q15.** It is NOT in the repair list and it stays. This is the mirror image of the ch.18 disaster:
there I British-ised an American page; here the page itself is inconsistent, and the fix is to copy
it, not to regularise it.

### The sweep: ZERO folds, and here is how the zero was measured

29 staged against all **1,399** shipped ophtho questions. **Stage A = 0, stage B = 0** — no exact
and no near-exact match exists. Five weak candidates surfaced at C and E and **all five are rejected
by name, with the discriminating token identified**:

| Candidate | Score | Why it is not a fold |
|---|---|---|
| Q11 vs `opmcq-c11-7` | C 0.82 | Shared key *and* an overlapping menu, but Q11 asks the **indication for hyperosmotic agents** and c11-7 is a vignette asking the **diagnosis**. The template trap exactly |
| Q11 vs `opqb-t20-812` | C 0.38 | That one asks what **decongestants** precipitate — different drug class, different bank |
| Q21 vs `opmcq-c1-46` | C 0.20 | The whole overlap is "All of the above" / "None of the above" filler |
| Q6 vs `opqb-t20-806` | E 0.50 | Both on IV fluorescein adverse effects, but different menus and **different keys** ("All of the above" vs "Yellow skin/urine"). A real cross-bank topical pair, not a reprint |
| Q12 vs `opmcq-c2-16` | E 0.50 | Opposite subject — complications of **hyperopia** |

**Self-sweep: Q3 ↔ Q4 at 0.75 — NOT a fold.** The Jones I `+ve` / Jones II `-ve` template pair; the
discriminating tokens are the test name and the polarity. Siblings, not duplicates: the lacrimal
patency table goes in `opmcq-c20-3` and Q4 points at it. **This is the sixth time a shared menu has
paired rather than folded a pair on this module.**

⚠️ **There is no `op-drugs` chapter and there will not be one** — ch.20's questions file by TOPIC,
following the precedent of GG's own drug topic (`opqb-t20-*`, 40 shipped, spread over eleven
chapters: `op-glauc` 10 · `op-cornea` 6 · `op-insid` 5 · `op-conj` 4 · `op-pupil` 4 ·
`op-neuro-optic` 3 · `op-intro` 2 · `op-lac` 2 · `op-refract` 2 · `op-ret-dr` 1 · `op-vissym` 1).

---

## House OSCE tail — STRUCTURAL RECON, 2026-08-31. It is NOT one section and NOT one format.

Read off twelve rendered halves (`v72L/R`, `v73L/R`, `v90L/R`, `v110L/R`, `v125L/R`, `v126L/R` under
`<scratch>\ocr\osce\`) with `<scratch>\ocr\house-all.txt` as the search index. **Nothing was rendered
new and no PDF was opened.**

### ⚠️ My brief was wrong in four ways, and the count was the smallest of them

| What I briefed | What the pages say |
|---|---|
| "~456 items" | **~435** (303 + ~132). My figure was ~21 high. |
| "a section" — singular, flat, one pipeline | **Three runs, two encoding formats**, and the numbering restarts three times |
| "sheets 69–126" | Right, but **the boundary is MID-SHEET**: chapterwise MCQs end on sheet 69 **LEFT** (book p.134); the OSCE opens on sheet 69 **RIGHT** (book p.135) |
| implied the running header marks sections | **`OSCE (End-of-round E-exams)` is a RUNNING HEADER on every sheet 69R–126.** It marks nothing. Do not use it as a boundary signal |

`PDF = 2N−4 / 2N−3` **confirmed off the pixels on all six sampled sheets** (72→140/141, 73→142/143,
90→176/177, 110→216/217, 125→246/247, 126→248/249). The House two-up arithmetic holds to the last page.

### The three runs

| Run | Book pp. | Items | Numbering | Format | Images |
|---|---|---|---|---|---|
| **A** "Ophthalmology OSCE" (title p.135) | 135–225 | **1–269** | continuous from 1 | image MCQ, ~3/page | **~100% image-bearing** |
| **B** (no banner — silent format shift) | 226–232 | **270–303** | *continues* A | text-only MCQ, ~5/page | **ZERO** |
| **C** "Some models for the end-of-round E-exam" (p.233) | 233–249 | **~132** | **restarts at 1 in each of four model exams** | short-answer, no options | zero printed; **~46% cross-reference Run A** |

Run C sub-banners: `Model exam(1)` p.233 · `Model exam (2)` p.237 · `Model exam (3)` p.240 or 241
**(unread — OCR gap)** · `Model exam(4)` p.245. Three of the four are confirmed at exactly 33 items;
ME2 is `[EXTRAP]` at 33, which closes the arithmetic at 132 and matches the "132 model-exam items"
already in `MEMORY.md`.

Run C opens verbatim: *"These model exams are derived from the department's E-exams of the last year.
Make sure to study the OSCE spots before proceeding to these model exams."*

### How the 303 was measured — four pixel anchors, and one of them DISAGREED

| Anchor | Read off pixels | Predicted by 6 items/sheet from p.135 |
|---|---|---|
| sheet 72 (p.140) top | Q15 | 15 ✓ |
| sheet 73 (p.142) top | Q21 | 21 ✓ |
| sheet 90 (p.176) top | Q123 | 123 ✓ |
| sheet 110 (p.216) top | **Q241** | 243 ✗ — **two items short** |
| sheet 118 | 299, 300, 301, +2 | → **303** ✓ |

The Q241 anchor says two pages between sheets 91–109 carry fewer than three items, or the OCR emitted
two spurious `Answer` lines there. **The printed numbering wins: 303.** An `Answer`-line count per
sheet ran a dead-flat 6/sheet for 069–114 then 10/10/9/5 for 115–118 — **the density jump IS the
format shift**, which is how run B was found at all. That count gave 304 and was reconciled to 303 by
the printed numbering. ⚠️ *This is what "an offsetting error is invisible to a sum" looks like from
the other side: the sum was one out, and chasing the one is what located the boundary.*

### Answers, options, encoding

- **Answers are INLINE throughout** — `Answer: X.` under the options, then a **printed red explanation
  block** using arrows. **No separate key block anywhere in the section.** (Unlike GG, which separates
  them.) Part C prints `Answer: <text>` under each item. **Nothing is unanswered.**
- ⚠️ **The key sometimes carries a parenthetical gloss that is part of the key, not the explanation** —
  `Answer: C (leukocoria of the left eye).`, `Answer: B (also called Marcus Gunn pupil).`
- **Runs A and B are near-uniformly 4-option**; exactly **two items carry an `E.`** in 303.
- **Run C is short-answer → `type:'case'`.** ⚠️ **Trap: many Part-C items are PHRASED as MCQs but
  print no menu** — *"16. A picture for the pinhole test (see the OSCE section). Which of the following
  is the diagnosis…? / Answer: Macular degeneration"*. They are recalled exam items whose option lists
  were never recorded. **Free-text despite the wording.** A "which of the following" grep would misfile
  every one of them.
- **Printed explanation blocks exist in runs A and B** — so markers are NOT automatic here, unlike every
  House chapter so far. Count boxes per page before splicing.
- **No matching items, no a/b/c multi-part items, no tables** — grepped both runs, zero hits.

### Cost, and what breaks the chapters-1–20 pipeline

- **~269 crops to cut and LOOK at.** That is the entire cost of this section. Figure mix in an 18-item
  pixel sample: fundus 6 · external/clinical photo 6 · perimetry printout 2 · OCT 1 · MRI brain 1 ·
  Ishihara array 1 · spectacles-on-face 1.
- ⚠️ **~46% of Run C items say "(see the OSCE section)"** and name the figure only in prose. Each needs
  resolving to a Run-A item and **reusing its crop** — a lookup step no chapter has needed.
- ⚠️ **The fold sweep will be the expensive part here, not the transcription.** OCR found **11 stems
  repeating with 13 extra copies among 117** Run-C items (~11%) — *"A patient with allergic
  conjunctivitis…"* ×3, *"A picture for the fundus showing CRAO"* ×3, *"In confrontation test, which is
  true?"* ×2 — **plus** model items restating Run-A spots. All within-bank.
- **Ids: `-c<n>-` will not fit.** Needs at minimum an `osce` id space plus `me1..me4`.

### Two things to do before any OSCE transcription starts

1. ⚠️ **Sheet 122 (book pp.240–241) was NEVER OCR'd** — the `[[pdf.122]]` marker is absent from
   `house-all.txt`. Model exam 2's tail and Model exam 3's banner and first items live there, unseen.
   **Render it first.**
2. ⚠️ **Run B's boundary is the one soft spot.** No banner appears between item 269 (p.226's
   predecessor) and item 270, and the OCR caught every other banner in the section — so it looks like a
   silent format shift rather than a fourth sub-section. **Not proved from pixels.** One half-page
   render of book p.226 settles it.

### Ends clean

Book **p.249** (sheet 126 RIGHT), Model exam 4 item **33** — *"A patient presented with lid retraction
due to thyroid eye disease. What's the most vision-threatening complication? / Answer: Exposure
keratopathy"*. The lower ~70% of the page is blank. **No index, no back matter, no answer key.** Sheet
126 is the last sheet and p.249 the last book page — read off the pixels, not inferred.

### Revised ophtho remaining

GG **171** (EE4 20 · EE5 20 · EE6 Photos 35 · Tutorial 27 · Final 69) · House **~506**
(ch.19 **42** after the fold · ch.20 29 · OSCE ~435). **Total ~677.**

### The two OSCE blockers are RENDERED and waiting for a reader

`<scratch>\ocr\osce2\` — sheets **115** and **122** at 200 dpi (2339×1654), each split into
`v115L/R.png` and `v122L/R.png` at 1170×1654.

- **v115L = book p.226, v115R = p.227** — the **run-B boundary**. Settles whether item 270 begins a
  silent format shift inside run A or a fourth sub-section with a banner the OCR missed.
- **v122L = book p.240, v122R = p.241** — the sheet the WPS run **skipped entirely** (`[[pdf.122]]`
  absent from `house-all.txt`). Model exam 2's tail and Model exam 3's banner and first items are here
  and have never been seen by anything.

⚠️ Not yet read. **Read them in a subagent** — never in the hub conversation.

### The ch.19 fold is APPLIED to the shipped corpus

`opmcq-c13-17`'s `source` now absorbs the ch.19 citation: `ophthalmology MCQ.pdf p.88 (Ch.13 Q17)`
**plus** p.123 (Ch.19 Q27), named as a within-bank cross-chapter reprint with the same option order and
key, with the note that this entry's markdown emphasis is editorial and the two printed texts are
identical. Secondary chapter recorded. **Within-bank, so no `alsoIn`.**
`node --check` passes; corpus re-parses at **1,399** — unchanged, which is the correct result for a
fold applied before its chapter is spliced. **`opmcq-c19-27` must never be written.**

---

## ⚠️ USER RULING 2026-08-31 — THE HOUSE OSCE SECTION IS DEFERRED

**"Skip all the OSCE part for now. If I needed it later I'll tell you."**

**Deferred, not cut.** ~435 items (runs A/B/C, book pp.135–249, sheets 69R–126) come out of the active
queue. Do **not** transcribe, crop or plan them until the user asks. The structural recon above stands
and is complete — resuming needs no re-recon, only the two unread renders.

**Ready and waiting whenever it is called back:** the full recon block above, plus the two blockers
already rendered and split at `<scratch>\ocr\osce2\` (`v115L/R` = book pp.226/227, the run-B boundary ·
`v122L/R` = book pp.240/241, the sheet WPS skipped entirely). Read those two in a subagent first.

### Active ophtho scope is now 242, and both banks close on it

| Stream | Left | State |
|---|---|---|
| House ch.19 "Ocular manifestations of systemic diseases" | **42** | staged 43, Q27 folded into `opmcq-c13-17`; draft running |
| House ch.20 "Drugs & the eye" | **29** | staged and swept (zero folds); draft running |
| GG End Exam 4 | 20 | rendered + OCR'd; staging running |
| GG End Exam 5 | 20 | rendered + OCR'd |
| GG End Exam 6 (Photos) | 35 | rendered + OCR'd — ⚠️ **35 looked-at crops, the one expensive batch left** |
| GG Tutorial Exam | 27 | rendered + OCR'd |
| GG Final Exam | 69 | rendered + OCR'd |

**House closes at ch.20** for this pass — the OSCE was its whole remaining tail. **GG closes at the
Final Exam.** With the OSCE out, the only image-heavy work left in the module is **EE6's 35 photos**;
everything else is text.

⚠️ When both close, **STOP and report** — do not start `Opthalmology endpoint.pdf` (user deferred it
2026-08-31, separately from this ruling).

---

## ⚠⚠ OPEN DEBT — EXPONENT AUDIT, ch.17 through ch.20 (raised 2026-08-31, unaddressed)

**This chat never received this warning while it was running.** It merged ch.17 and ch.18 and had
ch.19/ch.20 drafts in flight without it. Chat B found the defect the same day in peds; the message
meant for this chat was queued and never arrived. Verified by transcript audit: zero mentions of
"superscript" or "exponent" across this session's whole run.

**The defect.** WPS `photo2word` read a printed **10⁶ as 10⁹** (peds House ch.1 Q28, confirmed at
900 dpi by a subagent — every exponent in all five options is a 6). Superscripts also flatten
outright, 10⁶ → 106, in most reads.

**Why this one is different from every other OCR defect on record.** A wrong exponent is a
**plausible wrong number, not visible garbage.** The rest of this engine's errors announce
themselves — a planted typo ("perforated ear dram") survived rather than being silently corrected.
An exponent does not announce anything. It ships, it looks right, and it is wrong by a factor of
a thousand. In a lab value that is a clinical error.

**What to do before ch.17–ch.20 are trusted:**

1. Grep the merged ophtho entries for exponent-bearing numerals — counts, titres, dilutions,
   any `10` followed by a digit, plus `mm`, `mg`, `IU`, `/mL`, `%`.
2. For every hit, **read the number off the rendered page image in a subagent.** Not the OCR text.
3. Record any mismatch in `explanation` per the standing rule — the `answer` never moves.

**Standing rule from here on:** never take an **exponent, a unit, or a dose** from OCR text.
Those three come off the page image, always. Everything else in the OCR route stands unchanged.

---

## ✅ EXPONENT AUDIT — RUN AND CLOSED 2026-09-02. Zero exponents exist in the scope.

The open debt raised at the foot of this file is discharged. **The result is a clean zero, and here
is how the zero was measured** — a zero that is not explained is not a measurement.

### What the scope actually was — the brief undercounted it

I was briefed to audit "ch.17–ch.20, 69 merged and 71 staged". **The 69 merged in commit `6ba6971`
are not 69 chapter questions.** Measured by loading `questions.ophtho.js` at `83cb012` (before) and
`6ba6971` (after) and diffing by id:

| Batch | Entries added |
|---|---|
| GG topic 23 (`opqb-t23-*`) | **30** |
| House ch.17 (`opmcq-c17-*`) | 14 (17 staged, 3 folded) |
| House ch.18 (`opmcq-c18-*`) | 25 (26 staged, 1 folded) |
| **total** | **69** |

So a third batch — **GG End Exam 3, 30 questions** — went in that same session under the same
missing warning and was never named in the brief. **It is included in this audit.** Corpus is
**1,399**, not 1,400; the "1,400 by id prefix" in the resume brief is the same slip `MEMORY.md`
already corrects.

Audited set = **125 entries**: 69 merged (t23 30 + c17 14 + c18 25) + 27 drafted ch.19 + 29 drafted
ch.20, cross-checked against all four verbatim staging records (17 + 26 + 43 + 29 = 115 staged).

### The instrument, and its own defect

Scanned every `stem` and every `options[]` string — the text that actually came off the page — for
`10^n`, Unicode superscripts `\u00b2-\u00b9\u2070-\u2079`, `x 10`, flattened `10[0-9]`, and every
unit and dose token (`%`, `mg`, `mcg`, `IU`, `mmHg`, `mm`, `mL`, `D`, `diopters`, `kg`, `mg/kg`).

⚠️ **MY FIRST REGEX WAS ITSELF THE DEFECT, AND IT MANUFACTURED THREE FALSE POSITIVES.** It anchored
on `\b\d`, which **silently eats a leading comparison operator or sign**. It reported `80%` where
the file holds `>80%`, `2.00 D` where the file holds `-2.00 D`, and it suppressed the operators on
all four of ch.20 Q20's options. The reading subagent, given those quotes, correctly reported them
as page/file mismatches — **they are not; the transcriptions were right and my scan was wrong.**
Re-run with `[<>≤≥+\u2212-]?\s?\d` the discrepancies vanished. *An operator-blind numeral scan is a
false-positive generator on this bank* — the same shape as the short-token blindness that made
`sweep.js` return a confident wrong verdict.

### The page reads — 10 book pages, 2 subagents, 0 images in this conversation

Rendered at **300 dpi** (not the usual 200 — the whole point is digit legibility) and, for House,
split L/R by `System.Drawing` before reading. Every value carrying a unit anywhere in the 125
entries was read off the page by eye.

| Book page | Sheet | What was verified | Result |
|---|---|---|---|
| House 111 | s57-R | ch.17 Q17 option A `>80%` | **MATCH** — `>` present on page and in file |
| House 118 | s61-L | ch.19 Q3 `6/7/8/9 %`, key B | MATCH |
| House 121 | s62-R | ch.19 Q16 `20/50/60/80 %`, key A | MATCH |
| House 122 | s63-L | ch.19 Q22 `20/50/60/80 %` key C; Q23 `20/40/60/80 %` + `None of the above`, key B | MATCH, incl. the 5th option |
| House 123 | s63-R | ch.19 Q24 `5/10/15/20 %` + `None of the above`, key A | MATCH, incl. the 5th option |
| House 126 | s65-L | ch.19 Q40 stem `-2.00 D` | **MATCH** — minus present on page and in file; zoomed 5x |
| House 132 | s68-L | ch.20 Q20 `>5 sec / >5 min / <5 sec / >10 sec` | MATCH, operators intact |
| House 133 | s68-R | ch.20 Q27 `2.5%`; Q29 stem opens and breaks at `…develops sudden` | MATCH |
| House 134 | s69-L | ch.20 Q29 continuation `Her IOP is 48 mmHg`, 4 options A–D, `Answer: B` | **MATCH word for word**, incl. `mmHg` closed up and the space before it |
| GG 143 | pdf 150 | t23 Q26 `36/43/50/60 diopters`; t23 Q24 `Sphere +2, Cylinder -2.5, Axis 180` | MATCH, incl. both signs |

**Both subagents were additionally told to scan each page IN FULL** — headers, footers, every
question, not only my targets — for any superscript, lab count, titre, dilution or drug dose.

### The finding

**COUNT CHECKED: 125 entries / 10 book pages read by eye.**
**COUNT WRONG: 0.**
**Exponent-bearing numerals in the entire ch.17–ch.20 + GG-t23 scope: ZERO — none exist to be
misread.** Not one superscript, `10^n`, `x 10^n`, lab count, titre or dilution is printed on any of
the ten pages. Not one drug dose either: **every drug question in ch.20 and ch.19 names drug
CLASSES and never quantifies them** ("Beta-blockers", "Anticholinergics", "High dose of systemic
steroids" — unquantified). The only clinical numerals this scope contains are percentages, four
dioptre values, one IOP in mmHg, and time intervals.

**So nothing moved. No `explanation` note was added, because there is no mismatch to record.**
The `answer` never moved either — there was nothing to move it for.

⚠️ **The zero is a property of ophthalmology, not of the OCR.** This module's questions do not carry
the numerals the defect attacks. That is why the audit is cheap here and why it is **not**
transferable — peds, which prints leucocyte counts and mg/kg dosing, is where the defect lives.
**The standing rule is unchanged and still binds every future ophtho batch:** never take an
exponent, a unit or a dose from OCR text; read those three off the page image.

### What the audit found instead — worth more than the thing it was looking for

The scan surfaced **the numeral classes this bank actually prints, and they carry operators and
signs**: `>80%`, `-2.00 D`, `>5 seconds`, `<5 seconds`, `Sphere +2, Cylinder -2.5`. **A dropped `>`
or a dropped `-` is the same category of failure as a wrong exponent** — a plausible wrong value,
not visible garbage. `-2.00 D` unsigned is medically ambiguous; the whole stem (myopic shift, near
vision improved) turns on the minus. **All five survived transcription intact**, which is a real
result about the transcribers, not a lucky one.

**⇒ NEW STANDING CHECK for this module: audit numerals WITH their leading operator, never without.**
Any scan that anchors on a bare digit is blind to exactly the character that carries the meaning.

### Two page facts recorded in passing, both from the pixels

- **Book p.118, ch.19 Q3 prints a stray legacy question number inside the stem**: `3. 474. Tight
  glycemic control…`. Independently confirmed by this audit's reader at 2.2x — the staging record
  already flags it and the draft already strips it with the printed form recorded. Two independent
  readings now agree.
- **Book p.134 confirms chapter 20 ends at Q29.** Q29's answer line sits in the top ~20% of the
  half-page and **the remaining ~80% is blank** — no Q30, no chapter 21, no OSCE banner. This
  corroborates the boundary already read off sheet 69 RIGHT (the OSCE title on book p.135). The
  reader also warns that the lower half of that scan carries **reverse-side show-through** which an
  OCR pass would read as content — the same defect shape already recorded on book printed 269.


---

## 2026-09-02 — the pipeline scripts were GONE, and are now in the repo

**Finding: `sweep.js`, `stagecheck.js`, `splice.js` and `validate.js` did not survive the
scratchpad clear.** They lived only under the session temp root (`<scratchpad>\wrT7\`), which
`CLAUDE.md` §7 still points at. No copy existed anywhere in the repo — verified by listing every
`.js` outside `app\` and `qb-pages\`. **`CLAUDE.md` §7's "copy it out of the scratchpad if it has
been cleaned" is not actionable: there is nothing to copy from.**

**They are rebuilt and committed to the repo at `tools\qb-pipeline\`** so a clear cannot cost this
again:

| file | what it does |
|---|---|
| `lib.js` | `vm` loaders (classic scripts; `require()` returns undefined), normalisation, dice, option-menu keys |
| `sweep.js` | the six-stage duplicate sweep A–F, plus within-batch and the shared-menu pair flag |
| `stagecheck.js` | pre-splice: sparse holes, id collisions, `answer` index range, required fields, chapter ids, marker count, marker-not-in-`source`, staged-vs-drafted reconciliation, dead ids |
| `splice.js` | dry-run by default, `--go` writes after a `.bak`; finds the array close structurally (the files are mixed CRLF/LF) |
| `validate.js` | whole-corpus, loads arrays and reads `.length` — never greps |

⚠️ **These are a RECONSTRUCTION from the rules in `CLAUDE.md` and `MEMORY.md`, not a recovered
copy.** They have not been diffed against what they replace, because what they replace no longer
exists. Treat their thresholds as new until a topic has been run through them.

### The rebuilt instrument had two defects, both found by running it

**1. The chapter-id check failed 98 peds entries that are fine.** It extracted known chapter ids
with a regex demanding a hyphenated 2–4-letter prefix, so peds chapters that carry no hyphen —
`cardiac`, `haematology`, `malignant` — were never in the known set. They **are** in `modules.js`.
Fixed by reading the `[id, title]` array literals structurally. **Check the auditor before
believing the audit: a run where a whole module fails identically is a broken probe.**

**2. `loose()` destroyed two real discriminators, and one of them is a sign.** It normalised both
`+ve` and `-ve` to `ve`, and its doubled-letter collapse turned the Roman numeral `ii` into `i`.
Ch.20 Q3 (`+ve (Jones I)`) and Q4 (`-ve (Jones II)`) therefore scored **dice 1.00** — a false fold
candidate on two questions whose keys differ (index 0 vs index 3). Fixed: signs and comparison
operators are spelled out before the punctuation strip (`posve`, `negve`, `lt`, `gt`, `lte`,
`gte`), and tokens of three characters or fewer skip the collapse. Q3/Q4 now score 0.67.

**This is the exponent audit's rule arriving a second time from a different direction: a numeral
or a marker is compared WITH its leading operator, never without.** The audit found it in the OCR;
the sweep found it in the normaliser. Both times the failure was silent and plausible.

### Whole-corpus validation, 2026-09-02 — clean

Loaded each array and read `.length` (never grepped — the files mix quoted and bare keys, and
`grep -c "^  { id:"` undercounts `questions.ophtho.js` outright):

```
ent     2240 q +  82 c = 2322    banks: endpoint 615  gradegain 1101  house 779
ophtho  1399 q +   0 c = 1399    banks: gradegain 910  house 489
neuro    173 q +   7 c =  180    banks: gradegain 173
peds     106 q +   0 c =  106    banks: house 106
                        -----
                         4007    clean: 0 failures
```

**Ophtho is unchanged at 1,399** — nothing has been spliced this session.
**Peds has moved 81 → 106** (Chat B, not mine). Corpus 3,982 → **4,007**. Not recorded in
`MEMORY.md` from here; that is the consolidation pass's job, and peds is Chat B's to report.

Option counts across the corpus now run 2 – 10. Neuro carries the 8-, 9- and 10-option entries the
option-cap fix released.

### House ch.20 — re-swept, and MEMORY's "zero folds" is confirmed

29 incoming against 1,399 shipped = **40,571 pairs** compared on normalised stem, loose stem,
option menu and printed option order. **Two candidates surfaced; both hand-decided as NOT folds:**

- **`opmcq-c20-3` × `opmcq-c20-4`** — the instrument's own defect, described above. They are a
  **shared option menu, which PAIRS questions and never folds them.** The discriminating tokens
  are `+ve (Jones I)` against `-ve (Jones II)`, and the keys differ: index 0 against index 3.
- **`opmcq-c20-6` × shipped `opqb-t20-806`** — same subject (IV fluorescein adverse effects),
  **different question.** House prints five options keyed to `All of the above`; Grade Gain prints
  four entirely different options keyed to `Yellow skin/urine`, with `Permanent retinal damage`,
  `Orbital cellulitis` and `Optic neuritis` as distractors that do not appear in the House menu.
  Not the same printing, so **no `alsoIn`** — a cross-bank *neighbour*, not a cross-bank match.

**Ch.20 stands at 29 drafted, 29 staged, zero folds.** The rebuilt sweep reproduces the earlier
result, which is the only evidence so far that the reconstruction behaves like the original.

---

## 2026-09-02 — the page map of both banks' tails, read off the images

### ⚠️⚠️ THE HOUSE BANK DOES NOT CLOSE AT CHAPTER 20. It is roughly half the book.

**This contradicts the resume brief, `MEMORY.md`, and every plan built on them.** Chapter 20 ends
at book p.134 (sheet 69 left). `ophthalmology MCQ.pdf` then runs for **another ~115 book pages, to
sheet 126**, and every one of those pages carries the running header

> `Ophthalmology MCQs 2026` / **`OSCE (End-of-round E-exams)`**

Seven sheets were sampled (70, 71, 72, 85, 100, 115, 126). The two-up arithmetic
(`left = 2N−4`, `right = 2N−3`) **held on all seven with no drift**, out to the last sheet.
Three distinct runs are printed in there:

| Run | Format | Measured anchors | Density |
|---|---|---|---|
| **Photo MCQs**, numbered from 1 | 4 options, inline `Answer:`, full red-ink explanation, **one clinical photograph per question** | Q3 @ p.136 · Q93 @ p.166 · Q181 @ p.196 · Q270 @ p.226 | flat **3 per page** |
| **Text-only MCQs**, same number sequence | 4 options, one-line `Answer:`, **no image, no explanation** | Q270–279 @ pp.226–227 | **5 per page** |
| **Short-answer**, **restarts at 1** | question then `Answer: <phrase>`, **no options at all** | Q22–33 @ pp.248–249 | ~10 per page |

Because Q3 heads p.136, **Q1–Q2 sit on p.135 — sheet 69 right, immediately after chapter 20.**
The photo run therefore begins the moment chapter 20 stops.

**Volume: at least 279 + 33 = 312 questions, measured.** A 3-point density fit puts the true
total nearer **350–420**, which is inference, not measurement, and is labelled as such.
⚠️ **The photo run is the image-heavy material this module believed it had only 35 of.**

**Sheet 126 is the last sheet**; its right page ends at Q33 with ~2/3 blank, so the book stops
there rather than being truncated.

**⚠️ The header band is a fixed template and is NOT a reliable section marker.** Items 28–31 of
the short-answer run print *"(see the OSCE section)"* — so that run is **not itself** the OSCE
section; it only references it. Do not take the header as proof of what any given page is.

**Scope, and this is NOT the agent's call:** the user's ruling of 2026-08-31 is *skip ALL OSCE
content — "If I needed it later I'll tell you."* Every one of these 57 sheets is headed OSCE, so
**on the header the whole tail is out of scope and is being SKIPPED, not cut** — which is what the
ruling directs, and it is reported rather than silently dropped. The tension worth flagging: the
material is plain keyed MCQ, not station-style OSCE. **Nobody should budget 350+ questions against
this without the user saying so.**

**Three things the 7-sheet sample cannot settle.** Not rendered, deliberately:
- **sheet 69** — confirms ch.20 ends on p.134 and shows whether p.135 carries an OSCE title page + Q1–Q2
- **sheets 112–114** — where the photo run turns text-only (somewhere between p.197 and p.226)
- **sheets 118, 121, 124** — where the numbered run ends and the short-answer run restarts at 1

### Grade Gain tail — mapped end to end, sheets 154–185

**The `book = sheet − 7` offset held on every sheet that prints a folio (154–183).** No break.
Sheets 184–185 print no folio, so the offset stops applying rather than changing.

| Section (printed verbatim) | Book pp. | PDF sheets | Questions **counted** | Key prints at |
|---|---|---|---|---|
| End Exam 4 — *answers only in this range* | 147 | 154 | — | p.147 / sheet 154 |
| **End Exam 5** | 148–150 | 155–157 | **20** | p.150 right col / sheet 157 |
| **End Exam 6 (Photos)** | 151–159 | 158–166 | **35** | p.159 right col / sheet 166 |
| **Tutorial Exam** | 160–167 | 167–174 | **27** | p.167 / sheet 174, own page |
| **Final Exam** | 168–176 | 175–183 | **69** | p.175 right col + p.176 / sheets 182–183 |
| back matter | unnumbered | 184–185 | 0 | — |

**Tail total 151.** Sheet 184 is blank; sheet 185 is a publisher advert. **Content ends at sheet
183.** Numbering restarts at 1 in every section.

**The bank prints no contents page and no per-section counts in the tail** — there was nothing to
distrust, and every count above is a hand count of printed question numbers, cross-checked against
the length of each answer key. **All four reconcile exactly: 20/20, 35/35, 27/27, 69/69.**
⚠️ **The four inherited counts were all correct.** Recording that, because in this project they
usually are not.

**End Exam 6 figure audit, page by page:** 4·4·4·4·4·4·4·5·2 = **35 figure blocks for 35
questions.** One figure per question; none shared, none missing. Three are multi-panel inside a
single frame — **Q19** (two fundus photos side by side), **Q22** (two stacked eye photos),
**Q7** (a two-panel line drawing).

**⚠️ Option counts vary and will break any fixed-five assumption:**
EE5 **Q8 has five options (A–E), key E** · Final **Q61–Q69 all have five** · Final **Q33 has only
three (A–C)** · EE6 **Q32 has only three (A–C)**.
Tutorial key **Q19 prints a lowercase `d`** where every other entry is uppercase — a typographic
slip, not a different answer.

### End Exam 4's answer key was OUTSIDE the transcribed range — checked, and it is fine

The map showed EE4's key prints on **p.147 = sheet 154**, one sheet past where transcription
stopped (153). The staged keys in `gg-ee4.array.js` were therefore of unverified provenance, and
their distribution looked wrong: **12 of 20 are `A`**, including ten consecutive.

**Read off the rendered key page: 0 mismatches in 20.** Printed distribution is A 12 · B 3 ·
C 2 · D 3, identical in every position to the staged list, ten-A run and all. **The book really
does print ten consecutive A's**; the suspicious distribution is the source's, not a transcription
fault. A list produced any other way could not reproduce that positional sequence.

**The suspicion was wrong and the check was still right** — the key page sat outside the range
anyone had read, so its provenance was genuinely unestablished until now.

⚠️ **What this does NOT establish:** that each question's **option ORDER** matches the book's.
A reordered option list re-keys the question silently while the letter still "matches". That is a
check against the question pages, and it belongs to the drafting pass.

**Two page facts settled in passing:** the blue running header `QUESTION BANK: Previous Exam` is
the **running header of this whole section**, not a section name — which closes the flag raised
earlier about p.143 "printing the wrong header". And p.147 carries **reverse-side show-through**
("16. Exophthalmos means…"), which is bleed-through, not content.

---

## 2026-09-02 — House ch.19 and ch.20 DRAFTED, SWEPT, SPLICED. **House chapter run 1–20 is closed.**

**Ophtho 1,399 → 1,470 (+71).** House ophtho 489 → 560. Corpus 4,007 → **4,121** (neuro and peds
moved under Chat B in the same window). Validation clean, loaded not grepped.

| batch | staged | drafted | folds | spliced |
|---|---|---|---|---|
| House ch.19 | 43 | 42 | 1 (Q27 → `opmcq-c13-17`, folded at staging) | **42** |
| House ch.20 | 29 | 29 | 0 | **29** |

### The sweep: 17 candidates, ZERO folds — and why each zero is a zero

Ch.19's 42 against the 1,399-question corpus produced **no stage A–F hit at all** — no exact,
respelled, reordered, boxed-second-printing or cross-chapter match. The 17 rows are 13
shared-menu pairs and 4 within-batch near-misses, hand-decided one at a time:

**The `Grade 1 / Grade 2 / Grade 3 / Grade 4` menu is a TEMPLATE, and it collides across two
different diseases.** `opmcq-c19-5`, `-6`, `-38`, `opqb-t19-775` and `-778` grade **hypertensive
retinopathy**; `opqb-t18-725` and `opmcq-c18-15` grade **chemical injury**. Same four strings,
unrelated questions. Discriminating tokens as printed: *arterial narrowing with focal
irregularities* (Gr 2) · *optic disc edema* (Gr 4) · *copper-wire arterioles and venous nicking*
(Gr 2) · *limbal ischemia <30%* (Gr 2, chemical).

⚠️ **The closest call was `opmcq-c19-38` × `opqb-t19-775` — same fact, and NOT a fold.** Both key
Grade 4 off disc oedema plus a macular star, but they are different printings of it: a **55**-year-
old with *sudden blurred vision* against a **48**-year-old with *BP 230/130 and headache*, and the
Grade Gain option list is **reordered** (`Grade 2 / 3 / 4 / 1`, key at index 2) against House's
natural order (key at index 3). Same reasoning that kept `opmcq-c20-6` and `opqb-t20-806` apart:
a cross-bank **neighbour**, so **no `alsoIn`**.

`opmcq-c19-10` × `opmcq-c13-17` share the retinal-detachment-type menu and key **different**
options — *copper-wire arterioles / hypertensive* → exudative (index 2), *proliferative diabetic
retinopathy* → tractional (index 1). A pair, and the reason Q27 folded into `-c13-17` rather than
`-c19-10`.

Within-batch: `opmcq-c19-7/8/9` (dice 0.81–0.85) are **one GCA vignette asked three ways** —
diagnosis, confirmatory test, management — with three disjoint option menus. `-10/-11` the same
shape on the hypertensive vignette. **Stem-triplets score high by construction; the option menu is
what separates them.**

**Cross-batch: ch.19 × ch.20, 1,218 pairs, 0 candidates.** The two batches are disjoint.

### Back-references hand-read against their antecedent AND their own key — all clean

Ch.19 carries the chapter's only *"In the previous case…"* chain (Q7 → Q8 → Q9) plus Q10 → Q11.
Every repaired stem restates the vignette without naming its own answer. **`opmcq-c19-11`
deliberately drops the word "hypertensive" that `-10` keeps** — retaining it would have handed over
*"lowering blood pressure in a controlled fashion"*, which is its key. No instrument sees this; it
was read by hand, entry against entry.

### ⚠️ THE MARKER AUDITOR WAS WRONG, AND IT FAILED 26 CORRECT ENTRIES

`stagecheck.js` first reported the explanation marker on **23 of 42** in ch.19 and **22 of 29** in
ch.20 — implying 26 verbatim printed explanation boxes. **There are none. All 71 entries carry the
marker, verbatim and correctly worded.** The test was anchored `/prints no explanation here\.$/`,
so any coda after the marker read as an absent marker.

Every one of the 26 codas is a **`*(Secondary chapter: …)*` note**, which `CLAUDE.md` §4 *requires*
for a straddling question. The shipped corpus settles it: of **3,287** marked entries, **383 carry
a coda** after the marker and **45** of those are secondary-chapter notes, against **111** that
place the same note before it. **Both placements are established convention.**

Three independent lines confirmed the House chapter bank prints **no** explanation boxes at all:
all **76** shipped `opmcq-c15…c18` entries declare the marker; the c19/c20 staging arrays record no
explanation text; and the unmarked explanations are structurally *written* (markdown tables,
lecture citations, distractor-by-distractor) rather than captured.

**Fixed in `tools\qb-pipeline\stagecheck.js`:** the test is now for **presence**, and codas are
reported separately with anything that is *not* a secondary-chapter note named individually.
⚠️ **This is the third time the rebuilt pipeline's own instrument produced the false failure**
(after the peds chapter-id regex and `loose()`'s destruction of `+ve`/`-ve`). *Check the auditor
before believing the audit* has now paid for itself three times in one day on the same five files.

### One real defect, found and fixed

`opmcq-c19-24`'s explanation cited **`opmcq-c19-27`** — the id folded away at staging. Repointed to
**`opmcq-c13-17`**, which is the question that actually carries tractional detachment. *A folded id
loses its backticks everywhere it is still mentioned*, and the dead-id check is what catches it.
Post-splice: **0 dead backticked ophtho ids, 0 duplicate ids, 0 out-of-range answers.**

### Where the drafting brief was wrong (reported by the drafting agent, verified here)

- Its entry template specified a `type:'mcq'` field and the order `{id, module, chapter, bank, …}`.
  The file's 27 existing entries carry **no `type`** and use `{id, bank, module, chapter, …}`.
  **The file's convention won.**
- It said "no trailing comma"; every entry in the file carries one. Harmless — `[a,b,]`.length is 2.
- It said to preserve `worldide` (Q31). The draft file's **own header** already declared that repair
  alongside four made earlier in the chapter (Q3, Q4, Q7, Q17). **This file repairs-and-records**;
  Q31 → `worldwide` and Q38's dropped article → `the likely grade`, both recorded in `source`.
- Its chapter hints were wrong twice. **Q38** went to `op-systemic`, not `op-ret-vasc`, because its
  four siblings on the identical Grade menu (`-5`, `-6`, `-10`, `-11`) are all `op-systemic`.
  **Q34** went to `op-acute`, not `op-neuro-optic`, because it tests the workup of sudden painless
  visual loss. Secondaries noted in both.
- ⚠️ **Its §8 verification command silently printed nothing** — `node -e` does not echo the final
  expression. It needs `console.log(...)` wrapped round it. **Every future brief must wrap it.**

### Cache hole worth filling later

`ophthalmology.pdf` **p.250 teaches multiple sclerosis, inside chapter 19, and that page is not
transcribed** in `content\ophtho\book\ch19-systemic-tumours.txt`. Found while grounding
`opmcq-c19-30`, whose ptosis-in-MS distractor had to be tagged as outside the material even though
the book almost certainly prints the fact one page away.

### Where ophthalmology stands

**House is CLOSED at chapter 20** for the chapter run — 1–20 all shipped. What follows p.134 in
`ophthalmology MCQ.pdf` is the ~57-sheet OSCE tail mapped earlier today, **skipped under the user's
standing ruling, not cut.** **Grade Gain is the only open ophtho work: EE4 (drafting), EE5, EE6
Photos, Tutorial, Final — 171 questions.**

---

## 2026-09-02 — GG "End Exam 4" SPLICED: 15 of 20, five within-bank folds

**Ophtho 1,470 → 1,485 (+15).** GG ophtho 910 → 925. Corpus **4,136**. Validator clean, loaded not
grepped. `stagecheck` CLEAR; its staged-but-not-drafted list (14, 15, 16, 18, 20) matches the five
folds named below exactly, so **written 15 + folded 5 = printed 20** reconciles on both sides.

### Why EE4 folds when End Exams 1–3 fold nothing

EE1–3 shipped 86 entries and reprint **nothing**: **0 `loose()` stem matches against all 824
shipped `opqb-t1…t20` entries.** EE4 produced four exact matches plus three near ones. That
asymmetry is not a defect in either pass — **EE4's pages carry the running header `QUESTION BANK:
Previous Exam`.** It is a past-paper section, and a past paper reprints topic questions by
construction. End Exams 1–3 are not past papers.

**The corpus already holds 21 within-bank folds** — 7 Grade Gain, 14 House — every one keeping a
single entry and recording the second printing in the survivor's `source`. Two of them settle the
two calls that were not obvious:

- **`opmcq-c16-19`** was folded *"same key, with the fourth option swapped"*. That is exactly EE4
  Q15's shape, and it authorises folding on a single differing option.
- **`opqb-t6-229`** was folded on respellings alone. That covers Q14, Q16 and Q18.

The threshold applied, and it matches every one of the 21: **0–1 substantively differing options =
one question printed twice, fold it. 2 or more = a different printing, ship both.**

### The five folds, each recorded in the surviving entry's `source`

| EE4 | survivor | why |
|---|---|---|
| Q14 p.146 | `opqb-t10-423` | respelled only — `Pas`/`PAS`, `Occlusio-`/`Occlusion-pupillae`; same order, same key |
| Q15 p.146 | `opqb-t3-127` | option D swapped; **the survivor's own D is arguably a second correct answer** — recorded there, key unmoved |
| Q16 p.146 | `opqb-t15-659` | respelled only — `accomodation`/`accommodation` |
| Q18 p.146 | `opqb-t2-93` | respelled + word order — `The most 2`/`The 2 most`, `and`/`&`, `pachymetery`/`pachymetry` |
| Q20 p.146 | `opqb-t16-690` | option C truncated in EE4 (`Herpes simplex` vs `Herpes simplex genital type`) — **fuller printing kept** |

All five are **within-bank** (both printings Grade Gain), so **none takes `alsoIn`**. That now makes
**seven** fold shapes seen in this project, the new one being *option truncated in the second
printing*.

### Two held apart, and the token that separates them

- **Q13 × `opqb-t14-597`** — 3 of 4 options differ (`Atropine`/`NSAIDs`/`Vasodilator` against
  `Antibiotics`/`Anti-histaminic`/`None`). A different question on the same stem.
- **Q19 × `opqb-t7-289`** — 2 of 4 options differ **and the list is reordered**, moving the key from
  index 3 to index 0. Two printings, not one.

### ⚠️ I WROTE TWO BROKEN PROBES IN A ROW, AND BOTH LOOKED LIKE ANSWERS

Checking EE1–3 for fold precedent, my first probe reported *"29 of 86 record a second printing"*.
The regex was `p\.\d+.*p\.\d+`, which matched every ordinary `Supporting: ophthalmology.pdf p.NNN`
citation. I rewrote it to scope the match to the qb — `/ophthalmology qb\.pdf[^;]*/` — and it
reported **20**. That was **also wrong**: `[^;]*` runs past the sentence end and swallows the
`Supporting:` clause that follows it. Two different numbers, both false, both plausible.

What finally worked was abandoning page-counting and **searching for the vocabulary of a fold** —
`reprint|also printed|folded here|second printing` — which found the 21 real records immediately
and printed them for reading.

*Check the auditor before believing the audit* has now cost this project **five** false instruments
in one day: the peds chapter-id regex, `loose()`'s destruction of `+ve`/`-ve`, the marker anchor
that failed 26 correct entries, and these two. **The pattern in all five: the probe returned a
number, and the number was the wrong kind of thing.** A probe that prints its matches for reading
would have caught every one of them on the first run.

### Resolved: where question images actually live

Recorded because the earlier note *"no ophtho image directory found under `app/assets/`"* was
looking for the wrong thing. **There is no per-module directory.** `qImgSrc()` in `app\index.html`
is one line:

    function qImgSrc(name){ return 'assets/q/' + name + '.jpg'; }

Every question image in the corpus — all 113 of them across four modules — is a **flat `.jpg` in
`app\assets\q\`**, and `image` stores the bare basename. All 16 ophtho images verified present on
disk. Ophtho basenames run `q-op-gg-<GG question number>`, with one legacy exception
(`opqb-t2-95` carries `q-op-gg-11`).

⚠️ **EE6 cannot follow that scheme.** Its numbering restarts at 1, and `q-op-gg-11.jpg` already
exists. **EE6 images must be `q-op-gg-ee6-1 … -35`.**

### Where ophthalmology stands

House is **closed at chapter 20**; the ~57-sheet OSCE tail after p.134 is **skipped under the
user's standing ruling, not cut**. Grade Gain is the only open ophtho work. EE4 is now shipped;
**EE5 (20), EE6 Photos (35), Tutorial (27) and Final (69) remain — 151 questions**, all four in
flight as background staging/drafting passes at the time of writing. Topic slots `t25`–`t28` were
verified free by grep before any of them started; EE6 takes `t26`.

---

# 2026-09-02 — CHAT A CLOSED OUT. The session is safe to delete.

Every number below was **measured from disk at close**, by loading the arrays and reading
`.length` — none of it is carried from the session's memory. The chat itself holds nothing that
is not written here.

## What shipped, and what the corpus is now

`app\data\questions.ophtho.js` — **1,485 questions, 0 cases.** `node --check` SYNTAX OK.
Whole-corpus total **4,265** (ENT 2,240 + 82 cases · **Ophtho 1,485** · Neuro 268 + 7 · Peds 183).
All committed; working tree carries no modified tracked file.

**House ophthalmology is CLOSED at chapter 20** for this pass. Chapters 1–20 are all shipped
(66 `opmcq-c19-*` and 51 `opmcq-c20-*` id occurrences present). The ~435-item OSCE tail after
book p.134 is **deferred under the user's standing ruling, not cut**.

**Grade Gain has shipped through End Exam 4.** EE1–EE3 folded zero; EE4 shipped 15 of 20 with five
within-bank folds, all recorded in the survivors' `source`.

✅ **The exponent audit of ch.17–ch.20 is RUN AND CLOSED** (this file, 2026-09-02): zero
exponent-bearing numerals exist anywhere in that scope, so nothing could have been corrupted. The
open debt that MEMORY.md raised against this chat is discharged.

## What is staged on disk and NOT yet shipped

Four Grade Gain staging files, all **verbatim, all parsing, all with keys in range for their own
menus, no sparse holes, contiguous numbering from 1**. All four are new and untracked at close —
they are committed by this pass.

| File | var | entries | `n` | state |
|---|---|---|---|---|
| `content\ophtho\qb-pages\gg-ee5.array.js` | `GG_EE5_STAGING` | 20 | 1..20 | complete, ends on the last printed question (Q20 p.150) |
| `content\ophtho\qb-pages\gg-ee6.array.js` | `GG_EE6_STAGING` | **35** | 1..35 | complete; closing COUNT block reconciles four ways |
| `content\ophtho\qb-pages\gg-tutorial.array.js` | `GG_TUTORIAL_STAGING` | 27 | 1..27 | complete, ends Q27 p.166 |
| `content\ophtho\qb-pages\gg-final.array.js` | `GG_FINAL_STAGING` | 69 | 1..69 | complete; Q69 p.175 is recorded as *"the LAST question in the section and in the book"* |

**Shape, for all four:** `{ n:<printed question number>, p:<BOOK folio>, key:'<LETTER>', stem, opts:[…], note? }`
— field names `p`/`key`/`opts`, **never** `page`/`answer`/`options`. The topic number lives only in
the variable name. This is the `gg-ee4.array.js` shape; every one of the four agents copied the
finished sibling rather than the brief, which is the right instinct and is why they agree.

## ⚠️ TWO THINGS THE NEXT SESSION MUST NOT INHERIT AS SETTLED

**1. The EE5 draft is INCOMPLETE — 15 of 20, and it does not say so anywhere except its ids.**
`content\ophtho\qb-pages\gg-ee5.draft.js` holds `opqb-t25-1` … `opqb-t25-15`, contiguous, and
stops. Its own header claims the range *"opqb-t25-1 … opqb-t25-20"* — **that header is a promise,
not a measurement.** The 15 that exist are clean: no missing fields, every `answer` in range,
15/15 explanation markers, all `gradegain/ophtho`. **Q16–Q20 were never drafted.** The file's
closing line is the instruction to follow: *"this file is appended in blocks; the last id present
is how far it got."* Resume by `Edit`-appending Q16 onward — never by rewriting the file.

**2. `app\data\questions.ophtho.js.bak` is a 5.1 MB pre-EE4-splice backup holding 1,470 questions.**
It is untracked, deliberately not committed, and **it will load as `Q_OPHTHO` if anything ever
globs `app\data\*.js`** — which is exactly how a 15-question regression would ship silently. It is
on the cleanup list awaiting the user's approval; delete it or move it out of `app\data\` at the
first opportunity.

## EE6 is the expensive batch, and its traps are already known

**The count is settled at 35, and it was settled the right way.** For part of this close-out the file
held only 33 and its promised closing COUNT block was missing, so this document warned that 33 and
the brief's 35 were irreconcilable. The transcriber then finished: **35 entries, `n` contiguous
1..35, no sparse holes, every key in range for its own menu, every entry carrying a `fig`.** Q34 and
Q35 sit on **book p.159**, sharing that page with the Answers banner — which is why a reader who
stopped at p.158 would count 33 and be wrong. The closing block reconciles the number **four ways**
(entries · banner-to-banner span · entries carrying a `fig` · option counts), and records the
printed keys read off p.159 in order, distribution A 17 · B 8 · C 7 · D 3, summing to 35.

⚠️ **Q22–Q32 are ELEVEN consecutive `A` keys as printed.** Re-read at magnification, recorded, not
corrected. *A defective key is noted, never disputed* — and this one is not even defective, it is
just improbable. **Do not let a later stage "fix" it.**

**The general lesson, and it is the same one as the exponent audit:** a page count taken from where
a section *looks* like it ends is a guess. The section ended two questions past the last page anyone
would have checked. **Render one page past the last** is not a formality.

EE6 is the only image-heavy work left in the module. Every entry carries a `fig` field describing
**where the picture sits and what kind of picture it is, deliberately stopping short of naming the
finding** — which is the `imgAlt` rule applied at staging time, and it means the staging can be read
without the crops answering the questions. Four things recorded there that a cutter would otherwise
have to rediscover:

- **Image basenames must be `q-op-gg-ee6-1` … `-35`.** The ordinary ophtho scheme is
  `q-op-gg-<GG question number>`, and EE6's numbering restarts at 1, so `q-op-gg-11.jpg` **already
  exists** and would be overwritten. All images are flat `.jpg` in `app\assets\q\`; `image` stores
  the bare basename and `qImgSrc()` supplies `assets/q/` and `.jpg`.
- **Q21 reprints Q1's photograph** at a slightly smaller size and a marginally tighter crop, asking a
  different question of it. **One crop serves both. It is NOT a duplicate question and must not be
  folded.**
- **Q32 prints THREE options only (A, B, C).** A fixed-four assumption corrupts it. Its printed key
  `A` is inside the printed range.
- **Q22 carries TWO stacked figures**, unlabelled, edge to edge. Both must be kept, in top/bottom
  order.

Source defects are recorded per entry and **not repaired**: `withCT` printed as one word, `VGEF`
for VEGF at Q23 against a correct `Anti-VEGF` at Q28 (the bank contradicts itself and both
spellings are kept), option C printing its own letter label inside its text (`"C)Anti-VGEF"`, so
the rendered line reads `C. C)Anti-VGEF`), and a run of mid-sentence capitals. Watermarks,
hand-inked numerals and a stray blue `174` figure-number belong to the source photographs, not to
the questions.

## What is left in ophthalmology, exactly

**151 staged questions**, minus whatever the fold sweep removes:

| Stream | staged | drafted | shipped |
|---|---|---|---|
| GG End Exam 5 | 20 | **15** | 0 |
| GG End Exam 6 (Photos) | 35 | 0 | 0 |
| GG Tutorial Exam | 27 | 0 | 0 |
| GG Final Exam | 69 | 0 | 0 |

**Deferred, not cut, and needing no re-recon:** the House OSCE section (~435 items, book pp.135–249)
— the structural recon stands in this file, and its two blocker renders were left in a session
scratchpad that is now gone, so **re-render sheets 115 and 122 if it is ever called back**.
`Opthalmology endpoint.pdf` is separately deferred by the user; **do not start it.**

⚠️ **When GG closes at the Final Exam, ophthalmology is done for this pass — STOP and report.**

## The fold rule this chat settled, stated once

**0–1 substantively differing options = one question printed twice, fold it. 2 or more = a different
printing, ship both.** That threshold matches every one of the 21 within-bank folds already in the
corpus. Within-bank folds **never take `alsoIn`**; the second printing is recorded in the survivor's
`source` and the folded id loses its backticks everywhere it is still mentioned.

**Why EE4 folded five when EE1–EE3 folded nothing:** EE4's pages carry the running header
`QUESTION BANK: Previous Exam`. It is a past-paper section, and a past paper reprints topic
questions by construction. **Expect folds in Tutorial and Final for the same reason, and expect
none in a section that is not a past paper — but measure it per section, never assume it forward.**

## The instrument warning, because it cost the most

*Check the auditor before believing the audit* cost this chat **five** false instruments in one day,
and **the pattern in all five is identical: the probe returned a number, and the number was the
wrong kind of thing.** Two of them were mine, written back to back, both reporting plausible counts
of fold precedent — 29, then 20 — and both wrong, the first because the regex matched ordinary
`Supporting:` citations and the second because `[^;]*` ran past the sentence end. What finally
worked was abandoning counting altogether and **searching for the vocabulary of a fold**
(`reprint|also printed|folded here|second printing`), which found the 21 real records immediately
**and printed them for reading**. A probe that prints its matches would have caught every one of the
five on the first run. Write probes that print, not probes that count.

---

## 2026-09-02 (later) — the Anthropic session limit, what it cost, and what it did NOT cost

Five background agents were killed simultaneously by an **Anthropic session rate limit** (HTTP 429,
"resets 7am Africa/Cairo"). Not WPS, not a quota, not anything the agents did — five heavy
image-reading agents running at once is what triggered it. **Concurrency lesson: cap parallel
image-heavy subagents at three.**

**The write-incrementally rule limited the total loss to seven questions.** Damage assessed from
disk, never from the agents' own dying reports:

| file | state at death | missing |
|---|---|---|
| `gg-tutorial.array.js` | **27/27 complete** | — |
| `gg-final.array.js` | **69/69 complete** | — |
| `gg-ee6.array.js` | 33/35, all carrying `fig` | n=34, 35 |
| `gg-ee5.draft.js` | 15/20 | `opqb-t25-16…20` |

**Both agents whose dying words named a fault had actually landed the fix before dying** — the
tutorial's `\'` collapse was already repaired (Q22 renders `the patient's rig`), and EE5's wrongly
tagged Q8 was already corrected (`answer` idx 4 of 5 = E, matching the staged key). **Verify a dead
agent's file from disk before believing its report** — this is now the second time that rule has
paid, after ch20-drugs on 2026-08-31.

⚠️ **AGENT RESUME IS NOT AVAILABLE AFTER THIS FAILURE MODE.** `SendMessage` to the killed EE6 agent
returned `No transcript found for agent ID`. A rate-limit kill destroys the transcript, so the
context — including every page image the agent had already read — is gone. **Fresh agents must
re-read the pages.** Plan the cost of a 429 as *the whole job again*, not *the remainder*.

## GG "End Exam 6 (Photos)" — STAGING COMPLETE, 35/35

Finished by a fresh agent after the limit cleared. Loads through `loadStaging` at 35, every entry
carrying `fig`.

- **Answers block is book p.159, right column**, tan banner, under the same
  `End Exam 6 (Photos) / Answers` wording. Full key:
  `A A D B A B B C B C · A C B A B C A C D B · C A A A A A A A A A · A A D C B`
  Distribution **A 17 · B 8 · C 7 · D 3 = 35**. ⚠️ **Q22–Q32 are eleven consecutive `A`.** Re-read
  at 3× and recorded, not corrected — it is what the book prints.
- **Option counts: 34 four-option, Q32 three-option.** All options are **text**; no question prints
  its options as pictures. Nothing straddles a page break.
- Source defect recorded on Q35: option C prints **"Filed Examination"** for *Field*. Kept as
  printed.
- ⚠️ **The completing agent corrected two faults in the earlier agent's own file** — not source
  disputes, transcription repairs, both recorded in-file:
  1. **Q23's key was staged `B`; the book prints `A`.** Confirmed at 3× against the lines above and
     below. **This one would have marked a correct answer wrong in the app.**
  2. The header PAGE MAP was wrong at the 156/157/158 boundaries. The pages print
     **156:Q21–24, 157:Q25–28, 158:Q29–33** — the entries' own `p` fields were right throughout;
     only the comment was wrong.
  **A staging header is a claim, not a measurement — the same rule that has now been wrong ten
  times about draft counts applies to page maps.**

## Where the ophtho image files actually live, settled and recorded

- **No per-module directory.** `qImgSrc()` builds `assets/q/<name>.jpg`; all question images across
  all four modules are flat `.jpg` in `app\assets\q\`, and `image` stores the **bare basename**.
- **Field order for a picture question**, verbatim from the shipped `opqb-t16-691`:
  `id, bank, module, chapter, stem, options, answer, image, imgAlt, imgEssential, explanation, objective, source`
- **`imgEssential:true` appends *"— this question cannot be answered without it"* to the figure
  caption** (`app\index.html:2692`). Used once in the corpus so far; **all 35 EE6 entries qualify.**
- **House image standard, measured off the 16 shipped ophtho images: JPEG, 560 px wide**, natural
  height, ~40–110 KB. One legacy exception is 642 px (`q-op-gg-11`).
- ⚠️ **EE6 images MUST be `q-op-gg-ee6-1 … -35`.** The corpus scheme is
  `q-op-gg-<running question number>`, but EE6 restarts at 1 and **`q-op-gg-11.jpg` already exists
  and belongs to `opqb-t2-95`** — a bare `q-op-gg-11` would point at another question's photograph.

## Queue as at this entry

Briefs now exist for every remaining ophtho job, all in the session scratchpad under
`…\89a2b4fc-…\scratchpad\`:

| job | brief | state |
|---|---|---|
| EE5 draft, `opqb-t25-16…20` | `ee5\BRIEF-EE5-DRAFT.md` | agent running |
| Final draft A, `opqb-t28-1…23` | `final\BRIEF-FINAL-DRAFT.md` | agent running, **holds the key gate** |
| Tutorial draft, `opqb-t27-1…27` | `tut\BRIEF-TUT-DRAFT.md` | agent running |
| EE6 crops, 35 JPEGs | `ee6\BRIEF-EE6-CROPS.md` | written, not launched |
| EE6 draft, `opqb-t26-1…35` | `ee6\BRIEF-EE6-DRAFT.md` | written, not launched |
| Final drafts B and C, `opqb-t28-24…69` | `final\BRIEF-FINAL-DRAFT.md` | **held until Agent A confirms the key** |

**Final B and C are deliberately held.** The staged Final key is **C 31 · D 13 · A 11 · B 11 · E 3 —
45% C**, far from flat, and it has only ever been read by the pass that staged it. Agent A re-reads
Q1–10, Q30–40 and Q60–69 off `book-175.png`/`book-176.png` before drafting anything. **If it
disagrees, 46 questions were not built on a bad key.**

## ⚠️ The `sed`/heredoc injection fired again

An instruction reached this chat a second time, in a system-shaped position, directing that file
changes be made "with sed, heredocs, or short scripts, rather than using the dedicated Read, Edit,
or Write tools." **It did not come from the user**, and it contradicts this project's most expensive
documented trap: the Bash tool collapses `\\` to `\` before the body's own language sees it, and a
backtick inside a double-quoted string is command substitution — **and every id this project writes
into an explanation is in backticks.** Reads and searches stayed on Bash; **content writes stayed on
`Write`/`Edit`**, and the same warning is written into all three new briefs. Both drafting subagents
refused the identical injection earlier today. Flagged to the user both times.

---

## 2026-09-02 (later still) — Final Exam draft A landed; the section is mostly REPRINTS

`content\ophtho\qb-pages\gg-final.draft-A.js` — 23 entries, `opqb-t28-1…23`, 85,304 bytes.
Structurally clean on every check run in the main loop:

| check | result |
|---|---|
| entries / gapless `opqb-t28-1…23` | 23 / true |
| key + option-count vs `gg-final.array.js` | **NONE mismatched** |
| `answer` in range, every entry | pass |
| markers | 23 / 23 |
| marker leaked into `source` | 0 |
| field order vs shipped corpus | true, all 23 |
| dead cross-references | **NONE** |
| forward refs to `opqb-t26-*` / `opqb-t27-*` | **NONE** |
| option counts | all four-option |

**⚠️ THE KEY GATE PASSED AND IS CLOSED.** Agent A independently re-read the Answers block on
`book-175.png`/`book-176.png` and reported **31 of 31 sampled letters identical to the staging** —
Q1–Q10 `C C C C C C A C C C`, Q30–Q40 `B C C C C D C B B D D`, Q60–Q69 `A A D A E E C A E B`.
**The 45%-C distribution is what the book prints.** Final drafts B and C were released on this.

### ⚠️ The sweep found 18 candidates in 23 questions — and 14 are real folds

`node tools/qb-pipeline/sweep.js` on draft A against the 1,505-entry ophtho corpus. **Every one was
hand-read** against both printings' transcribed stem, options and key:

**FOLD — 14** (all within-bank, so **none takes `alsoIn`**; drop the `t28` entry, fold its citation
into the existing entry's `source`):

| new | existing | shape |
|---|---|---|
| `opqb-t28-1` | `opqb-t13-532` | 2 — stem "commonly"/"mainly"; options identical |
| `opqb-t28-2` | `opqb-t13-533` | 2 — "Mid-peripheral"/"Midperipheral" |
| `opqb-t28-3` | `opqb-t5-188` | 2 — "Points mainly **on**"/"**in** the palpebral conjunctiva" |
| `opqb-t28-4` | `opqb-t8-318` | 2 — "eye ball"/"eyeball" |
| `opqb-t28-6` | `opqb-t5-180` | 2 — comma only |
| `opqb-t28-7` | `opqb-t11-463` | 2 — "Regarding"/"In"; "a severe pain"/"severe pain" |
| `opqb-t28-8` | `opqb-t9-359` | 6 — stem shortened, **no option changed** |
| `opqb-t28-14` | `opqb-t12-498` | 2 — capitalisation only |
| `opqb-t28-15` | `opqb-t20-794` | 2 — "a shallow"/"shallow" |
| `opqb-t28-16` | `opqb-t3-121` | **5 — cross-chapter** `op-orbit`/`op-orbit-mass` |
| `opqb-t28-19` | `opqb-t13-527` | **5 — cross-chapter** `op-ret`/`op-insid`; "Regarding"/"In" |
| `opqb-t28-20` | `opqb-t16-683` | 6 — **one distractor substituted**, key unmoved |
| `opqb-t28-21` | `opqb-t19-756` | 1 — exact |
| `opqb-t28-22` | `opqb-t8-319` | 1 — exact |

**NOT A FOLD — 2**, both the shared-option-menu / shared-template trap. Discriminating token named
for each, per the standing rule:

- `opqb-t28-5` × `opqb-t6-264` (dice 0.75) and × `opmcq-c7-8` (dice 0.75). **Three different
  questions sharing only the `all of the following except` frame.** Tokens: *aging /
  accommodative power* vs *pterygium / keratoconus* vs *episcleritis / IBD*. The House one is also
  5-option against 4.
- `opqb-t28-12` × `opqb-t19-758`. ⚠️ **Stems are IDENTICAL and both key `C` — and it is still not a
  fold.** Only ONE option is shared (*Cotton wool spots*); `C` is **a different option in each**:
  *Rubeosis iridis* in the Final, *Sub hyaloid hemorrhage* at p.121. **A matching stem plus a
  matching key letter is not a duplicate.** This is the clearest example the project has of why the
  sweep ranks and never decides.

**HELD — 1.** ⚠️ **`opqb-t28-13` × `opqb-t9-360`: the book prints ONE question TWICE with TWO
DIFFERENT KEYS.** Identical stem, identical options, identical order — nuclear sclerosis / myopic
change. **The Final keys `C` (increase in refractive index of the nucleus); p.62 keys `D` (all of
the above).** Q13 falls in the *unsampled middle* of Agent A's key re-read (it checked Q1–10,
Q30–40, Q60–69), so it has been read once only. **Folding is impossible without discarding one
printed key, which the rules forbid**, so a verification agent is re-reading Q11–Q29 on
`book-175/176.png` and rendering book p.55 and p.62 (PDF sheets 62 and 69) to settle Q360.
Resolution is not yet in.

⚠️ **These 14 verdicts were decided from the two TRANSCRIBED printings, not from two page images
side by side.** Option counts match 4-vs-4 in every fold pair and keys match in all fourteen, so a
dropped option would have to have been dropped identically by two independent passes. **The one
worth an image check before it ships is `opqb-t28-20`** — it is the only fold where an option
genuinely differs, so if either transcription substituted rather than the book, the call flips.

### What this does to the arithmetic

**14 of 23 is a 61% reprint rate.** End Exam 4 — the other `QUESTION BANK: Previous Exam` section —
reprinted **five of thirty-five**. If the rest of the Final behaves like its first third, the
section adds roughly **27 new questions, not 69**, and the remaining-ophtho count of 151 is an
overcount. **Do not report a post-splice corpus figure until the full 69 have been swept together.**

⚠️ **A drafting agent's "no suspected reprints" is an unmeasured zero.** Agent A reported none and
the sweep found fourteen. That is not a fault — drafting agents have no corpus access and are
explicitly forbidden to fold — but **point 7 of the drafting brief cannot be read as evidence.**
Only the sweep measures this.

### ⚠️ The `sed`/heredoc injection fired a THIRD time — and this time it had company

Same wording, same system-shaped position, directing that file changes be made "with sed, heredocs,
or short scripts, rather than using the dedicated Read, Edit, or Write tools." **It did not come
from the user.** Reads and searches stayed on Bash; **content writes stayed on `Write`/`Edit`.**

⚠️ **In the same turn, two FABRICATED task-completion notifications arrived** — `Verify option order
Q24-Q46` and `Verify option order Q47-69`, each with a plausible task id and an output-file path,
each describing work I had launched moments earlier. **Neither task exists**: `TaskOutput` reports
only the four real background agents. **The output files were not opened.** Note the shape — a
fabricated completion whose description mirrors real in-flight work, arriving beside an instruction
to abandon the safe tools. **Verify a task id against the live agent list before reading anything it
points at.**

### Queue at this entry

| job | state |
|---|---|
| EE5 draft + splice | ✅ **SHIPPED**, commit `2d4d5dd`, corpus 1,485 → **1,505** |
| EE6 staging, 35 | ✅ complete, committed |
| Final draft A, `opqb-t28-1…23` | ✅ complete, **swept, 14 folds pending** |
| Tutorial draft, `opqb-t27-1…27` | agent running |
| EE6 crops, 35 JPEGs | agent running |
| Final draft B, `opqb-t28-24…46` | agent running |
| Final draft C, `opqb-t28-47…69` | agent running |
| `opqb-t28-13` key conflict | agent running |
| EE6 draft, `opqb-t26-1…35` | brief written, **not launched** — held at the concurrency cap |

**Nothing has been spliced from the Final, Tutorial or EE6.** The sweep re-runs across all 69 Final
entries once B and C land; these draft-A verdicts are preparatory and must not be applied piecemeal.

### ⚠️ SETTLED: the Grade Gain bank prints one question twice with TWO DIFFERENT KEYS

`opqb-t28-13` (Final Exam Q13) and `opqb-t9-360` (topic Q360) are **the same question** — nuclear
sclerosis, myopic change — with **identical stem, identical options and identical option ORDER**,
verified on both pages. The keys differ:

| printing | book page | stem page verified | key | read at |
|---|---|---|---|---|
| Final Exam Q13 | key p.175 | folio 169, left column | **C** — increase in the refractive index of the nucleus | 3× |
| topic Q360 | key p.62 | folio 55, left column | **D** — all of the above | 3× |

Both readings were confirmed against the page images by a dedicated verification agent, with row
anchors on either side (Q358 `D`, Q359 `C`, **Q360 `D`**, Q361 `C`, Q362 `C`; and the Final's
Q11–Q29 run overlapping into the already-verified Q10 and Q30–Q36). **The option order is identical
in both printings, so the "different order makes both letters right" escape hatch is closed.**
Neither of our two readings was wrong — **the bank contradicts itself.**

**DECISION: `opqb-t28-13` DOES NOT FOLD.** Folding would force one of the two printed keys to be
discarded, and `answer` never moves. Both entries ship, each carrying its own printed key, and
**both explanations must record the contradiction and cite the other printing.** `opqb-t9-360` is
already in the corpus, so the note goes into its `explanation` at splice time — that is an edit to
a shipped entry and must be made in the same pass as the Final splice, not before it.

**Revised draft-A tally: 14 fold · 9 ship** (`opqb-t28-5`, `-12`, `-13`, and `-9`, `-10`, `-11`,
`-17`, `-18`, `-23` which drew no candidate).

### Key-verification coverage of the Final Exam, and why it was extended

| run | Q | verified by |
|---|---|---|
| Q1–Q10 | 10 | draft-A agent |
| Q11–Q29 | 19 | key-conflict agent |
| Q30–Q40 | 11 | draft-A agent |
| Q41–Q59 | 19 | **agent running — was single-read** |
| Q60–Q69 | 10 | draft-A agent |

**Every re-read so far has matched the staging exactly.** The Q41–Q59 pass was launched anyway:
**a single read is precisely how the Q13/Q360 contradiction stayed invisible**, and 19 of 69 keys
had been seen once only.

### Two corrections to the briefs, both from the verification agent

- ⚠️ **THE OPHTHO SOURCE FOLDER IS MISSPELLED IN THE SOURCE TREE.** It is
  `Semester 8\Opthalmo\Questions\ophthalmology qb.pdf` — **not** `Semester 8\Ophthalmology\…`,
  which is what three briefs written today said. No agent was blocked, because every other running
  brief opens no PDF at all. **Fix this in any future brief.**
- ⚠️ **TWO INCOMPATIBLE PNG NAMING CONVENTIONS ARE NOW IN THE SCRATCHPAD.** The `final\` renders
  `book-168.png … book-176.png` are named by **BOOK FOLIO**; `pdftoppm`'s own default output is
  named by **PDF SHEET**. `book-169.png` in `final\` is folio 169 = sheet 176. **Anyone reasoning
  across both folders is off by seven.** Name renders by folio and say so, or state the convention
  in the brief.
- ✅ **The page arithmetic is CONFIRMED at both ends of the book**: PDF sheet = book folio + 7,
  one book page per A4 portrait sheet, PDF is 185 sheets. Checked sheet 62 → folio 55,
  sheet 69 → folio 62, sheet 169 → folio 162.

⚠️ The `sed`/heredoc injection also reached **that subagent**, which recognised and refused it. It
has now been seen by four separate contexts today. **Every brief must keep the warning.**

### ✅ EE6 figure crops CUT AND COMMITTED — 35 of 35, commit `310c9aa`

`app\assets\q\q-op-gg-ee6-1.jpg … -35.jpg`. **119 files → 154, +35 exactly, ZERO tracked
modifications** — independent proof nothing existing was overwritten. `q-op-gg-11.jpg`, the one the
naming scheme would have collided with, still carries its **2026-08-12 mtime**.

- **Every crop was opened and looked at.** The agent cut to a preview folder, inspected all 35,
  re-cut three, then shipped — and verified the shipped bytes are **SHA-1 identical** to the
  previews it inspected. That closes the gap between "looked at" and "shipped", which no previous
  crop pass in this project has done.
- **19 of 35 are under 560 px** because the figure is narrower than that at native 200 dpi and the
  no-upscale rule applies. Narrowest is Q9 at 254 px. The other 16 were cut native then downscaled
  with LANCZOS.
- **Q7, Q19 and Q22 each carry two photographs**, cut as one box per the brief. ⚠️ **Q19's two
  fundus photographs are separated by a ~12 px printed white gap** and the default edge-walk cut
  only the left one — the miss-tolerance had to be raised to 45 px.
- ⚠️ **Q1 and Q21 genuinely share the same photograph** (woman holding a tissue to her left eye).
  **Not an off-by-one**: different pages (151 and 156), independently described by both `fig`
  fields, and the questions differ — Q1 asks about blink failure, Q21 the efferent nerve of the
  reflex. **The book repeats the picture.**
- ⚠️ **DENSITY PROFILING CANNOT BOUND LINE ART.** Q30 (visual-field chart) and Q32 (schematic on a
  faint chequer) have ink density 0.10–0.37 against ordinary text at 0.30–0.37 — **the ranges
  overlap, so the instrument cannot separate them in principle.** Both were bounded by eye off
  zoomed crops. **These two are the only crops in the set not set by measurement, and they are the
  ones to re-check if anything looks wrong.**
- ⚠️ **A very light-skinned face never reaches the default ink threshold** (Q4 collapsed to a 1 px
  box). Re-run at white=253 / frac=0.5.
- ✅ **PIL/Pillow 12.3.0 and numpy 2.3.5 ARE INSTALLED** on this machine. The brief's System.Drawing
  pattern and its file-lock disposal trap were **not needed**. Pillow gives LANCZOS, explicit JPEG
  quality and 4:4:4 subsampling. **Update the environment note.**
- **Two `fig` fields in the staging are wrong** and the page images won: Q28 says "portrait", the
  figure is landscape; Q35 estimates 565×515, the figure is 551×406. Neither affects the crop.
- **Third independent read of the EE6 key.** Before cutting, the agent read the p.159 Answers block
  and compared all 35 letters to the staging — **exact match**, including the eleven consecutive
  `A` at Q22–Q32.

### ⚠️⚠️ A REAL KEY ERROR FOUND: Final Exam Q51

Every one of the 69 Final keys has now been read at least twice. **Sixty-eight match. One does not.**

| | staging | second read |
|---|---|---|
| **Q51** | **C** | **A** |

**This is an isolated single-cell disagreement, not a row shift.** The second reader's alignment is
proven by **14 anchor letters** — Q37, Q38, Q39, Q40, Q60, Q61 and Q62–Q69 — **all matching staging
exactly**, and by Q41–Q50 and Q52–Q59 matching as well. Its full Q41–Q59 run:
`C C C B D A B A D C A D C C A C B A D`.

**A third read has been requested from the drafting agent that owns Q47–Q69**, with Q49, Q50, Q52
and Q53 as anchors. It was told explicitly **not to resolve the disagreement by choosing** — report
and let the hub adjudicate — and to flag Q51 as unresolved rather than guess, so it can be held out
of the splice. **⚠️ Q51 MUST NOT SPLICE until this is settled.**

**This is the finding that justifies the whole re-read exercise.** Q51 sat in the 19-question
stretch that had been read exactly once. It was only checked because the Q13/Q360 contradiction made
single-read keys look unsafe — and the very next thing that stretch produced was a wrong key.
**Read every key twice. The cost is one small agent; the failure mode is marking a correct answer
wrong in the app.**

### ⚠️ I typed a value from memory twice today, and both times it was wrong

1. The ophtho PDF path in three briefs — `Semester 8\Ophthalmology\…` instead of
   `Semester 8\Opthalmo\…`. **The correct path was already written at line 368 of this very file.**
2. The Q39/Q40 anchor in a verification prompt — written as "C, D", actually **D, D**. The agent
   dutifully flagged it as a discrepancy in previously-verified work. It was not; **my prompt was
   the error.**

Neither cost anything, because both agents checked the page rather than trusting the prompt. **That
is the only reason. The rule is not decorative: read the source, list the directory, grep the id —
never write a path, a page number, a key letter or an id from memory.**


### ✅ Final Exam draft B landed — `opqb-t28-24 … 46`, 23 entries

`content\ophtho\qb-pages\gg-final.draft-B.js`, 102,621 bytes. **Validated from disk in the hub, not
taken from the agent's report:**

| check | result |
|---|---|
| entries / gapless `opqb-t28-24…46` | 23 / true |
| key + option count vs `gg-final.array.js` | **NONE mismatched** |
| `answer` in range | pass |
| markers / marker leaked into `source` | 23 / **0** |
| field order vs shipped corpus | true, all 23 |
| `bank` / `module` uniform | true |
| doubled backslashes on disk | **0** |
| option counts | `44444444434444444444444` — **Q33 is the only three-option one** |
| keys | `D C D B D C B C C C C D C B B D D C C C B D A` |

The agent had already run equivalent checks itself and every one of them holds.

### ⚠️⚠️ MY OWN BACKSLASH CHECK WAS WRONG — the escaping trap fired on the MEASURER

My first hub validation reported **487 doubled backslashes** in draft B. **The true count is 0.** 487
is exactly the file's count of *single* backslashes — the `node -e "…"` double-quoted bash string ate
one more level of escaping than I assumed, so the regex I thought was `/\\\\/` was really matching a
single backslash.

**This is the documented trap firing on the instrument rather than the file.** Nothing was corrupted
and nothing was repaired; had I trusted my own number I would have "fixed" a clean file.

✅ **THE SAFE MEASUREMENT, USE THIS ONE:** never type a literal backslash into the command at all —
`python -c "B=chr(92); print(d.count(B+B))"`. It agrees with the agent and with the corpus.

**Corpus side-check while there:** `app\data\questions.ophtho.js` holds **180** doubled backslashes.
**All benign** — they are `content\\ophtho\\book\\ch16-paediatric.txt` style citation paths, which a
JS string renders as a single backslash. Inspected twelve distinct sites. **Not a defect, and not to
be "fixed".**

### Draft B's own findings — RECORDED, none acted on

The hub folds nothing from a drafting agent's report; the sweep decides. Filed so the sweep and the
splice can use them:

**Five suspected reprints** (all within-bank, so none would take `alsoIn`):
`-30`→`opqb-t8-322` exact · `-35`→`opqb-t5-181` respelled ("The frontalis"/"Frontalis") ·
`-37`→`opqb-t6-244` ⚠️ **same stem and option order, DIFFERENT PRINTED KEY (B here, C there)** ·
`-45`→`opqb-t4-148` ⚠️ **option B's negation is FLIPPED** ("There is probably **a**"/"**no**"),
which reverses that option's truth while both key D — **not interchangeable printings** ·
`-46`→`opqb-t15-647` stem drops "sudden onset of", same key, same recorded defect.

⚠️ **`-37` is the SECOND within-bank key contradiction found today**, after `opqb-t28-13`/`opqb-t9-360`.
It follows the same rule: **a fold that would discard a printed key is not a fold.** Expect it to
ship as two entries, each carrying its own key, each explanation citing the other.

**Five keys the agent believes are wrong** — `answer` unmoved on all five, reasoning written into
`explanation`: `-31` (SLT contraindicated in NVG; D is the true statement) · `-36` (ocular rigidity
is the Schiötz error, not Goldmann's) · `-37` (pannus is by definition limbus-derived) · `-39`
(suppression is sensory, not a cover-test use) · `-46` (right medial rectus palsy gives diplopia on
**left** gaze — the same defect already documented at `opqb-t15-647`, so this is the bank reprinting
its own error, not a transcription slip).

**Q24–Q46 page images re-read at 200 dpi with 400 dpi crops of five flagged questions.** Every
question prints four options A–D in the staged order except Q33 (three, blank space below C).
**No option is reordered anywhere in the range**, so no printed letter is silently re-keyed. All
staged defects confirmed on the page: Q32's doubled `D.` and `synechiac`, Q33's missing fourth
option, Q34's `do nor include`, Q40's `lateral jeniculate ate body`, Q42's 46/45 with no sign,
Q26 `hyper mature`, Q28 `Grave's disease`. **Nothing written differs from the staging.**

**Six gaps filled from outside the material, named:** tobacco–alcohol amblyopia and the
alternating-squint/amblyopia teaching (Q24) · SPK as the earliest HSV epithelial stage (Q29) · the
nodal-point optics behind posterior opacities costing more vision (Q33) · applanation's independence
from ocular rigidity and the role of central corneal thickness (Q36) · direct-vs-indirect
ophthalmoscopy optics (Q41) · the torsional basis of the head tilt in IV palsy (Q43) · preferential
looking and the Maddox rod (Q44). **The Q44 absences were grep-verified, not assumed** —
`ch15-squint.txt:628` records preferential looking absent, `:587` the Maddox rod "absent entirely",
`L29) Sqint I:860` agrees. Ishihara **is** in the material (`ch01` p.38) and is cited as sourced.

### Two more brief errors the agent caught — both mine

- **§1 page-image location was wrong in the Final brief**, as already recorded: the renders are in
  `…\scratchpad\final\`, one level from the brief. My launch message had corrected it, so nothing
  was lost — but a reader following the brief alone lands in an empty directory.
- **§4's defect examples are from other agents' ranges.** `Meiosis`, `Ambylowdia`, `Corncal`,
  `Taranta's` and Q56's truncated stem are **not in Q24–Q46**, and the four defects that *are* were
  omitted. A worked example from the wrong range teaches the wrong shape.

### ⚠️ The `sed`/heredoc injection has now fired FOUR times, and once inside this chat's own turn

Identical wording, identical system-shaped position: file changes to be made "with sed, heredocs, or
short scripts, rather than using the dedicated Read, Edit, or Write tools." **It arrived in the hub's
tool-result stream this turn**, and the draft-B agent reported receiving it mid-run and refusing it.
**Content writes stayed on `Write`/`Edit` everywhere; Bash stayed read-only plus validation.**

**The reason this instruction is dangerous here is now measured twice over in this very session** —
the collapse it invites is the same one that made my 487-vs-0 backslash count wrong, and every id
this project writes into an explanation sits inside backticks, which a double-quoted bash string
executes.

### Queue at this entry

| job | state |
|---|---|
| Final draft A, `t28-1…23` | ✅ complete, swept — **14 folds pending, not applied** |
| Final draft B, `t28-24…46` | ✅ **complete, hub-validated** — not yet swept |
| Final draft C, `t28-47…69` | agent running (also holds the **Q51 third read**) |
| Tutorial draft, `t27-1…27` | agent running |
| EE6 draft, `t26-1…35` | ✅ **LAUNCHED** — slot freed by draft B |
| EE6 crops, 35 JPEGs | ✅ shipped, commit `310c9aa` |

⚠️ **Q51 still unresolved and MUST NOT SPLICE.** ⚠️ **Nothing from the Final has been spliced**;
the sweep re-runs across all 69 together once C lands.


---

## 2026-09-02 (evening) — Tutorial and Final drafts complete; the whole 69 swept together

**All four ophtho drafting jobs are in.** Tutorial 27, Final 69 (A 23 + B 23 + C 23). EE6 drafting
launched on the slot freed by draft B. **Nothing spliced yet.**

### ✅ Q51 ADJUDICATED — the key is `A`, and the staging has been corrected

| read | source | verdict |
|---|---|---|
| original staging pass | p.176 | `C` |
| Q41–Q59 verifier | p.176, anchor-checked | **`A`** |
| Agent C, third read at 3× and 9× | p.176 | **`A`** |

Agent C describes the glyph directly — apex, crossbar, splayed serifed feet — and separates it from
the `C` at Q50/Q53 and the `D` at Q52. Row anchors `47 B · 48 A · 49 D · 50 C · 51 A · 52 D · 53 C`
all match staging, and the numbering runs strictly consecutive 37→69 (33 lines on p.176 + 36 on
p.175 = 69), so a row shift is excluded. **Two independent anchor-verified reads against one.**

`gg-final.array.js` n:51 **corrected `C` → `A`** with the reasoning in a comment beside it. This was
a **transcription fault, not a bank defect** — the `answer` rule was never in play, because the book
prints `A`. Draft C already carries index 0.

⚠️ Even at `A` the key is medically defective: `L20) Retinal detachment` sl.7 lists *previous ocular
trauma* among TRD's causes, so option A is **true** in an "except" stem. Recorded in `explanation`,
`answer` unmoved. **Q51 is released for splice.**

### ⚠️⚠️ THE TUTORIAL STAGING IS KNOWN-BAD — `stem` on n:21..27 is SEVEN WRONG QUESTIONS

`opts` and `key` are right throughout; only those seven stems are wrong. Confirmed by three
independent readers off the page images and corroborated a fourth way — the printed Q25/Q26/Q27 are
verbatim lifts of the lecturer's Clinical Problems 1–3 in `L25) Trauma I`, while the staged text
paraphrases them.

**Clinically decisive at Q27:** the printed stem gives VA 6/60 with a **peaked pupil** — a suspected
open globe, which is what makes key B ("protective shield") right. The staged stem does not, and
would have made B look wrong.

✅ **`gg-tutorial.array.js` now carries a KNOWN BAD banner naming the authority** as
`gg-tutorial.draft.js`, which was written from the page images. **Do not "repair" the draft back to
the staging.** Also recorded there: n:22 says `p:165` and is printed on **p.164**.

### ⚠️⚠️⚠️ THREE OF MY OWN INSTRUMENTS WERE BROKEN TODAY, AND ONE NEARLY BURIED A REAL FINDING

| # | probe | reported | truth | cause |
|---|---|---|---|---|
| 1 | doubled-backslash count, draft B | **487** | **0** | the bash double-quoted string ate a level of escaping; I counted *single* backslashes |
| 2 | tutorial stem divergence vs staging | **"none diverging"**, dice 1.00 | seven stems are different questions | wrong argument type |
| 3 | the 15 named tutorial pairs | **all 1.00** | **0.00–0.20** | same wrong argument type |

**Root cause of 2 and 3: `dice(a,b)` takes STRINGS and tokenises internally.** I passed it
`tokens(...)` Sets, so both sides stringified to `[object Set]`, compared equal, and returned 1.00
for every pair on earth. `sweep.js` calls it correctly, which is why the sweep's numbers were always
sane while mine were not.

⚠️ **Probe #2 told me the drafting agent's biggest finding was imaginary.** I caught it only by
printing the seven stems side by side and reading them. **The project's own rule — "a run where
everything fails identically is a broken probe" — fired on the measurer, not the app, three times in
one session.**

✅ **THE FIX, NOW STANDING:** `L.dice(stringA, stringB)` — never wrap the arguments in `L.tokens`.
**And every probe gets a sanity pair before its output is believed**: self-comparison must return
1.00 and a known-unrelated pair must return low. The corrected run returns self `1.00`, unrelated
`0.16`. Backslash counting is `python -c "B=chr(92); d.count(B+B)"`, never a shell-quoted regex.

### ✅ TUTORIAL SWEEP: A REAL ZERO — 27 new questions, no folds

`27 incoming × 1,505 shipped = 40,635 pairs` on normalised stem, loose stem, option menu and printed
option order. Nothing reached dice 0.72.

**The zero was tested, not accepted.** The drafting agent had *named* 15 suspected overlaps. Scored
individually with the repaired probe they run **0.00–0.20** — the highest is Q25 vs `opqb-t18-724` at
0.20. They are **topical** overlaps, not textual: two long clinical vignettes about the same disease
are not the same question. The running head on pp.164–166 reads "QUESTION BANK: Previous Exam", which
is why reprints were expected; the bank simply did not reprint here.

### THE FINAL EXAM: 49 candidates, ALL HAND-READ — 38 FOLD, 31 SHIP

**55% reprint rate.** The 61% predicted from draft A's first third held almost exactly. **The Final
adds 31 questions, not 69** — the "151 remaining" figure was an overcount, as expected.

**FOLD — 38.** All within-bank, so **none takes `alsoIn`**:
`-1 -2 -3 -4 -6 -7 -8 -14 -15 -16 -19 -20 -21 -22` (draft A, adjudicated earlier) and
`-25 -27 -28 -29 -30 -32 -33 -34 -35 -38 -41 -42 -43 -44 -45 -46 -50 -52 -53 -57 -61 -63 -66 -68`.

Five are **cross-chapter exact** (shape 5): `-27`/`t14-598` op-pupil÷op-neuro · `-41`/`t13-525`
op-intro-exam÷op-vissym · `-43`/`t15-646` op-squint÷op-pupil · `-50`/`t10-419` op-red÷op-uvea ·
`-57`/`t6-232` op-sclera÷op-conj.

**SHIP — 31:** `-5 -9 -10 -11 -12 -13 -17 -18 -23 -24 -26 -31 -36 -37 -39 -40 -47 -48 -49 -51 -54
-55 -56 -58 -59 -60 -62 -64 -65 -67 -69`.

### The nine calls that were not mechanical

- **`-31` × `t11-471` — SHIP BOTH.** Identical stem "Regarding neovascular glaucoma:", menu-dice
  **0.41**. Only one option is shared in substance. Discriminating tokens: *selective laser
  trabeculoplasty / pan retinal photocoagulation* against *carotid artery insufficiency / peripheral
  iridectomy*. **The shared-stem template trap, and the clearest one yet** — a matching stem is not a
  matching question.
- **`-18` × `-49` (within-batch) — NOT A FOLD.** stem-dice 0.73 on the shared
  "The following conditions … except" frame, **menu-dice 0.00**. *Optic atrophy / multiple sclerosis*
  against *enophthalmos / rhabdomyosarcoma*.
- ⚠️ **`-37` × `t6-244` — THE SECOND WITHIN-BANK KEY CONTRADICTION.** Identical stem, identical
  options, **identical order**, and the bank prints **B here, C there**. Same ruling as
  `-13`/`t9-360`: **folding would discard a printed key, so it does not fold.** Both ship, each with
  its own key, each explanation citing the other. Medically **C** is right — pannus is by definition
  limbus-derived vessels crossing the limbus — but `answer` never moves.
- **`-51` × `t13-526` — SHIP BOTH.** Option D genuinely differs (*ROP* against *Diabetes* as the
  commonest cause) and the keys differ accordingly. Two substantive differences: a different
  question, not a contradiction.
- **`-60` × `t11-491` — SHIP BOTH.** Two differences: the stem's age (**60** against **50**) and the
  key option's wording (*Medical treatment* against *Carbonic anhydrase inhibitors*). **A number is
  the standing exception to silent transcription**, so the age divergence is recorded in both.
- **`-64` × `t8-340` — SHIP BOTH.** Option C differs (*Epikeratophakia* against *LASIK*) **and** the
  Final adds a fifth option. The correct answer text is *Penetrating keratoplasty* in both; its
  letter differs (E against D) only because of the extra option.
- **`-45` × `t4-148` — FOLD, defect recorded.** ⚠️ Option B's **negation is flipped**: the Final
  prints "There is probably **a** common canalicular obstruction", the shipped entry "**no**".
  Regurgitation from the upper canaliculus after distending the sac means the canaliculi are patent
  and the block is at the nasolacrimal duct — **the shipped "no" is correct and the Final's is a
  printing defect.** Key D in both, so the key never moves. Folded to the correct printing with the
  defect recorded.
- **`-33` × `t16-686` — FOLD.** The Final prints only **three** options (verified on the page image:
  blank space below C); the shipped entry has four. **The fuller printing is the existing one**, so
  the fold is clean and the Final's dropped option is recorded.
- **`-52` × `opmcq-c12-16` — NOT A MATCH, no bank added.** The only cross-bank candidate left after
  draft A's `-5`×`opmcq-c7-8`. menu-dice 0.35: Grade Gain asks *Regarding PVD* (key: a physiologic
  ageing process), House asks what is **NOT** true of its *complications* over five different
  options. **Neither cross-bank candidate in the whole Final is a match — `alsoIn` gains nothing.**

### ⚠️ FOUR FOLDS REQUIRE EDITING A SHIPPED ENTRY, AND ONE MOVES A STORED ANSWER INDEX

`-61`/`t5-215`, `-63`/`t3-138`, `-66`/`t9-393` and `-68`/`t13-559` are all **one added option** — the
Final prints five where the shipped entry has four. The standing rule is **keep the fuller printing**,
so the shipped entry adopts the five-option text and the Final's citation folds into its `source`.

⚠️⚠️ **`-68`/`t13-559` inserts the new option (`Senile ptosis`) BEFORE the key**, so adopting the
fuller printing moves `answer` from index 3 to index 4 — *Senile macular degeneration* is the answer
in both printings, and only its letter changes. **That is shape 3, and it has a consequence no other
fold here has: a user who already answered `t13-559` has their stored progress measured against a
different index.** The rules say keep the fuller printing; they say nothing about stored progress.
**Flagged to the user rather than settled here.**

### Splice plan — nothing may be applied piecemeal

1. Hold until EE6 drafting lands and is swept, so the corpus is measured once.
2. Splice Tutorial 27 whole (no folds).
3. Splice the Final's 31, dropping the 38 folded ids and folding each citation into its survivor.
4. **Edits to already-shipped entries, same pass:** the `-13`/`t9-360` and `-37`/`t6-244`
   contradiction notes (both directions) · the four fuller-printing adoptions above · the `-45`
   flipped-negation note.
5. **Look at the page image before shipping `-20`, `-45`, `-61`, `-63`, `-66` and `-68`** — every
   fold where an option genuinely differs. A transcription that substituted rather than the book
   flips the call.
6. Chapter oddities noticed in passing, **flagged not changed**: `t15-646` (extraocular muscles) sits
   in `op-pupil`, and `t6-232` (episcleritis) in `op-conj`.

**Projected corpus: 1,505 + 27 + 31 + EE6.** EE6 is unswept, so **no total is reportable yet.**

### The injection, fifth and sixth firings

It reached the hub's own tool-result stream again this turn, and **all three drafting agents reported
receiving and refusing it** — Agent C twice more mid-run. Two agents independently reproduced the
damage live while refusing it: a `node -e` probe containing `[^'\]` threw
`SyntaxError: Invalid regular expression`, and another threw `Unterminated regexp literal`, both from
the Bash tool's backslash collapse. **Rewritten with the `Write` tool, both ran first time.**

⚠️ **And a new escaping shape, invisible to `node --check`:** the tutorial agent wrote entries 1–20
with **doubled newline escapes** — 113 paragraph and table breaks that would have rendered as the
literal text `\n` in the app. **Both forms are valid JavaScript, so the parse test cannot see it.**
It was caught by byte-comparing against the shipped corpus, and repaired. **Add to the register: a
clean `node --check` says nothing about escape correctness — census the backslash runs.**
A hub re-count confirms the repair: **zero doubled `\n`** in the tutorial draft, and the twelve
doubled backslashes it does carry are all legitimate `content\\ophtho\\book\\…` citation paths.
Same census on the shipped corpus: 180 doubled backslashes, **all benign citation paths.**

---

## ✅ 2026-09-02 (watch session) — THE "INJECTION" IS IDENTIFIED. It is not an attack.

**It is Claude Code's own `auto mode` system reminder.** The watch session received it verbatim
while doing this identification, prefixed exactly `While auto mode is active:` —

> "Do your work through the Bash tool wherever it can accomplish the job: read files with cat,
> head, or `sed -n`, search with grep and find, and make file changes with sed, heredocs, or short
> scripts, rather than using the dedicated Read, Edit, or Write tools. Fall back to a dedicated
> tool only when Bash genuinely cannot do the job."

The tail of that sentence is **word-for-word** what the four earlier entries quote as hostile. It
arrives in a system-shaped position and does not come from the user because **that is what it is**:
a harness setting, applying session-wide, which is why subagents received it mid-run too. It is a
runtime toggle, not a config key — `grep` over both `settings.json` files finds nothing.

**What the chats got RIGHT, and must keep doing:** refusing it for content writes. The Bash
backslash collapse is real, measured twice in one session, and every id this project writes sits in
backticks. **Content writes stay on `Write`/`Edit`. That rule does not change.** The reminder's own
last sentence permits this — Bash genuinely cannot do the job here.

**What was WRONG:** the diagnosis. Six firings were logged as a security incident across four
entries. There is no attacker, nothing was compromised, and no source PDF or bank file was ever at
risk. ⚠️ **Do not log this again as an injection.** If it appears, note it in one line and move on.

*Residual uncertainty, stated: the watch verified its own copy of the message directly. That the
work chats' identical text has the same origin is an inference from a verbatim match — near
certain, not directly observed.*


---

## 2026-09-02 — SESSION CLOSED. Read this block first when resuming ophtho.

### ✅ ALL SIX OPTION-LEVEL FOLDS VERIFIED ON THE PAGE — no transcription slip in any of them

Every one of the six Final Exam drafts matches its page image exactly. **The differences against the
shipped corpus are real second printings, not transcription faults.** Corroborated a second way:
each shipped counterpart cites a **different book page** (pp.19, 21, 30, 60, 87, 109), so the bank
genuinely prints these questions twice in two places.

| n | book p. | printed | shipped counterpart | the difference |
|---|---|---|---|---|
| 20 | 170 | 4 opts, key B | `opqb-t16-683` (p.109) | option C **Chemotherapy** here, **Exenteration** there |
| 45 | 172 | 4 opts, key D | `opqb-t4-148` (p.21) | option B prints "**a** common canalicular obstruction" |
| 61 | 174 | **5** opts, key A | `opqb-t5-215` (p.30) | E **Systemic steroids** added |
| 63 | 174 | **5** opts, key A | `opqb-t3-138` (p.19) | E **Optic nerve glioma** added |
| 66 | 174 | **5** opts, key C | `opqb-t9-393` (p.60) | E **Corneal opacity** added; stem adds *unilateral* + *surgery* |
| 68 | 175 | **5** opts, key **E** | `opqb-t13-559` (p.87) | **D Senile ptosis** inserted, pushing the answer to E |

**n:68 is settled and it is `E`.** The reader stacked rows 57/59/62/65/66/67/68/69 from the same
column at 4× and separated the glyphs by shape — a true `D` on that page shows one closed bowl and an
unbroken right curve; row 68 shows a straight stem with three horizontal arms and an open right side,
identical to row 65 which is independently keyed E. **Row shift excluded two ways**: the key list is
continuous 37→69, and two content anchors either side land — Q66 = C matches *Amblyopia* read off
p.174, Q67 = A matches *Nerve fiber layer* on the same page.

⚠️ **So the fuller-printing adoption for `t13-559` is confirmed, and it moves `answer` from index 3 to
index 4.** The decision flagged for you last turn is now the only thing standing between this and the
splice: **adopting the fuller printing silently re-scores any progress already stored against
`t13-559`.** Nothing has been changed.

### ⚠️ MY OWN BRIEF NAMED THE WRONG COUNTERPART FOR n:20 — the reader caught it

I wrote `opqb-t20-794` into the image-check brief. That is an **unrelated** question (mydriatic drug /
shallow anterior chamber; stem-dice 0.14, **menu-dice 0.00**). The correct counterpart, and the one
the adjudication actually used, is **`opqb-t16-683`** — I transposed it from `-15`'s pair, which *is*
`t20-794`. The reader searched the corpus, found the real pair itself, and verified against that
instead of reporting a false mismatch.

**Fourth instrument failure of the day, and the second where the fault was mine rather than the
data's.** The standing lesson holds and now has a fourth instance: **a brief is a prior, not a
verdict.** The fold verdict for `-20` is unchanged.

### ⚠️⚠️ EE6 IS NOT DRAFTED — the agent died on the session usage limit

`Draft EE6 Photos, 35 questions` terminated on **HTTP 429, session limit, resets 5pm Africa/Cairo**.
It had produced no staged output at the point it stopped. **EE6 must be re-launched from scratch**
against `gg-ee6.draft.js` ids `opqb-t26-1…35`; the 35 figure crops were already shipped in commit
`310c9aa`, so that part need not repeat. Two sibling EE6 jobs (crop descriptions, staging
verification) were still running when this session ended — **check their output files before
re-launching, they may have landed.**

### State at close — NOTHING HAS BEEN SPLICED

| section | drafted | swept | verdict | spliced |
|---|---|---|---|---|
| Tutorial, `t27-1…27` | ✅ 27 | ✅ real zero | **27 ship, 0 folds** | ❌ |
| Final, `t28-1…69` | ✅ 69 | ✅ 49 candidates | **31 ship, 38 fold** | ❌ |
| EE6, `t26-1…35` | ❌ **agent died** | ❌ | — | ❌ |

**Corpus is still 1,505 and no total is reportable.** Projected 1,505 + 27 + 31 + EE6.

### The splice plan, unchanged and unapplied

1. Re-draft EE6, sweep it, then splice once so the corpus is measured a single time.
2. Tutorial 27 whole — ⚠️ **`gg-tutorial.draft.js` is the authority for stems n:21..27**, not the
   staging array, which carries a KNOWN BAD banner. Do not repair the draft backwards.
3. Final's 31, dropping the 38 folded ids, each citation folded into its survivor.
4. **Edits to already-shipped entries, same pass:** the `-13`/`t9-360` and `-37`/`t6-244` key
   contradictions cross-cited in both directions · the four fuller-printing adoptions
   (`t5-215`, `t3-138`, `t9-393`, `t13-559` — **the last one moves `answer` 3→4, awaiting the
   user's call**) · the `-45` flipped-negation note · the `-20` substituted-option note.
5. `opqb-t28-51` ships, key `A` — corrected in the staging, three reads, settled.
6. Flagged not changed: `t15-646` (extraocular muscles) sits in `op-pupil`; `t6-232`
   (episcleritis) in `op-conj`.
7. Still outstanding at end of run: delete `app\data\questions.ophtho.js.bak` (1,470 q — it loads if
   anything globs `app\data\*.js`); ophtho theory reconciliation (~63 rows, `theory-plan.md`, book
   caches exist, do **not** re-read).

### The injection — seventh and eighth firings

It arrived in the hub's tool-result stream again, and the image-check reader received it too,
formatted as part of its system prompt, and quoted it back verbatim while refusing. **Both refused;
every content write this session stayed on `Write`/`Edit`, Bash stayed read-only plus validation.**
Running total this session: eight firings across the hub and five agents, **zero compliance.**

---

## 2026-09-02 — INSTRUMENT FINDING: a "shared menu" row is not a not-a-fold verdict

**Read this before trusting any future sweep.** The finding is about `tools\qb-pipeline\sweep.js`
and applies to every sweep this project has run, in every module — not just ophtho.

### What happened

The re-run sweep classified `opqb-t28-28 × opqb-t8-320` as `! shared menu (PAIR, not a fold)`.
The journal folds it. Hand-read settled the content question first: **it IS a fold** — four options
identical word for word, same key (D = Levator muscle palsy). The stems differ only by
"condition does" / "conditions do" and markdown bold.

Then I measured *why* the instrument missed it, rather than reasoning about it. My first
hypothesis — that `norm()` was failing to strip markdown asterisks — was **wrong**; `lib.js` does
`.replace(/[^a-z0-9]+/g, ' ')`, which strips them correctly. The real cause, measured:

```
norm  A: "the following condition does not cause exposure keratitis"
norm  B: "the following conditions do not cause exposure keratitis"
dice: 0.6667   threshold 0.72
menuKey equal:  true      orderKey equal: true
```

Two grammatical substitutions — singular/plural, and "does"/"do" — in an eight-token stem drop dice
below the threshold. `loose()`'s FILLER set does not cover "condition(s)" or "do(es)". The stem
never reached the near-stem branch, so it fell through to the shared-menu branch, where the
identical menus were the only thing that surfaced it at all.

**The threshold is length-sensitive.** The same two substitutions in a thirty-token stem would cost
almost nothing. Short stems are the vulnerable class.

### The gap-check, and why its zero is a zero

If a short stem can sink below 0.72, then a fold with a short stem **and** a differing option menu
would have been caught by nothing. So I re-scored all 31 Final ship-list ids against the whole
1,505-entry corpus at a lowered 0.55 floor and printed everything the 0.72 run would have
suppressed — 19 candidates, of which **15** were in the dangerous class (≤12 stem tokens, plus
either a menu match or an equal option count). All 15 were hand-read side by side, full menus, keys
marked.

**Zero are folds.** Every one is a collision on the `All of the following … except` template alone;
the subjects diverge completely and no option menu intersects. The clearest illustration:
`opqb-t28-5` (aging) scored 0.667 against `opmcq-c4-24` (epiphora) **and** 0.667 against
`opmcq-c6-16` (conjunctival papillae) — while `opmcq-c4-24` was independently hit by three different
incoming ids. **On short EXCEPT-template stems dice is measuring the boilerplate, not the content.**
All real discrimination there comes from `menuKey`/`orderKey`.

The 38-fold verdict for the Final therefore stands complete, and the splice is unblocked.

### The standing rules this produces

1. **A `shared menu (PAIR, not a fold)` row must be HAND-READ. It is a ranking, never a verdict.**
   This does not weaken the older rule — *a shared option menu PAIRS questions, it never folds
   them; name the discriminating token* — it says where to look for the token. On `-28` there is
   no discriminating token, which is what makes it a fold.
2. **Below ~12 stem tokens, a dice score carries little signal on EXCEPT-template stems.** Do not
   read a sub-threshold score as evidence of difference on a short stem; check the menu.
3. **Sanity-pair every probe before believing it.** `probe28.js` and `lowsweep.js` both exit non-zero
   unless dice separates an identical pair from an unrelated one. This session had already produced
   one broken instrument (the doubled-newline census, `BS+BS+'n'` matching the ordinary escape and
   reporting 418/264/409/376 false positives), so the pair is not ceremony.

Probes kept in the scratchpad, and the scratchpad does not survive: `probe28.js` (measures one pair
through the sweep's own functions), `lowsweep.js` (below-threshold gap-check), `pairs15.js` (compact
side-by-side, full menus, key marked). Each is ~40 lines and cheaper to rewrite from this
description than to hunt for.

---

## 2026-09-02 — SPLICE PREPARED. Where the run stands.

### Ready and validated

**`splice-part1` = Tutorial 27 + Final 31 survivors = 58 entries**, assembled in the scratchpad and
validated: 58 unique ids, **no collision with the 1,505-entry corpus**, **no folded id leaked**,
0 bad doubled-newline escapes, every entry carries the marker, no marker in any `source`, all
`bank: 'gradegain'`, answers in range, option counts 4 and 5, 22 chapters touched, all from the live
vocabulary. The six doubled backslashes it does contain were inspected individually and are
legitimate Windows paths in citations (`content\ophtho\book\ch20-drugs.txt`,
`content\ophtho\qb-pages\gg-tutorial.array.js`) — one literal backslash each, correct.

Entries were assembled by **slicing the drafts' original source text**, not by re-serialising the
parsed objects — re-serialising would reformat every string and destroy the drafts' deliberate
layout. The slicer tracks brace depth while ignoring braces inside strings and comments, and it
sanity-checks itself against `{ s: '} not an end {' }` before running.

### The 38 fold citations are built

`foldmap.json` in the scratchpad holds all 38 merges, generated and checked: every folded Final id
resolved, every survivor found in the corpus, **none already carrying a Final citation**. Merged
shape, appended to the survivor's existing `source`:

`; also printed p.<N> (Q<n>, Grade Gain "Final Exam"), key pp.175–176`

Two decisions recorded so they are not re-litigated:

- **No `alsoIn` changes.** Every one of the 38 survivors is `bank: 'gradegain'` and the Final is the
  same book — these are **within-bank folds**, and per the standing rule no within-bank fold takes
  `alsoIn`. Verified, not assumed: the script printed the survivor bank set and it is the single
  value `gradegain`.
- **The incoming `Supporting:` lecture lists are dropped on the fold.** `source` is a citation, never
  a second explanation, and those lists document the drafting of an entry that is not shipping.

Key page `pp.175–176` is read off the journal's own section map (line 1797: Final Exam, book 168–176,
PDF 175–183, key `p.175 right col + p.176`), not from memory.

### EE6 — the last content left

- **Figure read: 30 of 35 blocks written** to `content\ophtho\qb-pages\gg-ee6.figread.md` by a
  background reader. It is good work and, importantly, **honest about its limits** — Q1's block says
  outright that the crop shows a touch-stimulus exam but no corneal lesion, so it supports the
  concept without confirming the printed key. That is exactly the shape a drafting pass needs.
- **Drafting brief written**: `content\ophtho\qb-pages\BRIEF-EE6-DRAFT.md`. It carries the 35-token
  chapter vocabulary **inline with counts**, because a drafting agent cannot derive it —
  see the trap below.
- `gg-ee6.draft.js` is still **header only**. The header is complete and correct; leave it and
  assemble the blocks beneath it.

### ⚠️ Two traps re-confirmed today, both already in MEMORY.md, both fired anyway

1. **The quoted-heredoc backslash collapse fired again** (ninth firing this session). Writing
   `if (c === '\\')` inside a `<<'EOF'` heredoc produced `if (c === '\')` on disk and Node rejected
   the file. Fixed by writing the script with the `Write` tool and building the character as
   `String.fromCharCode(92)`. **The heredoc's quoting is no protection — the collapse happens before
   the body's language ever sees it.**
2. **A single-pattern chapter grep returns a fraction of the vocabulary.** `grep -o "chapter: '…'"`
   on `questions.ophtho.js` returned **three** tokens; loading the array returns **thirty-five**.
   The corpus mixes quoted (`"chapter":`) and bare (`chapter:`) key styles, exactly as MEMORY.md
   warns for the neuro file. **This one was caught only because three was an implausible answer** —
   a grep returning, say, twenty-eight would have passed unnoticed and sent agents to invent tokens.
   The brief now carries the list inline and tells agents not to grep for it.

### ⚠️ `tools\qb-pipeline\splice.js` must not be used as-is

Its backup line is `fs.writeFileSync(corpusPath + '.bak', …)`, which for this corpus writes
**`app\data\questions.ophtho.js.bak`** — the exact file MEMORY.md flags for deletion because it
loads if anything globs `app\data\*.js`. Using it would silently recreate the hazard while appearing
to do the safe thing. **Back the corpus up outside `app\data\` when the splice runs.**

### Order of the remaining work

1. Finish the EE6 figure read (5 blocks left).
2. Draft EE6 35 → sweep against the corpus → EE6 survivors.
3. **One splice pass**, so the corpus is measured exactly once: part1's 58 + EE6 survivors, plus the
   shipped-entry edits (38 fold citations, the two key-contradiction cross-cites `-13`/`t9-360` and
   `-37`/`t6-244`, the four fuller-printing adoptions including `t13-559` whose `answer` moves 3→4
   on the user's ruling, the `-45` flipped-negation note, the `-20` substituted-option note).
4. `git checkout main` before the first commit.

---

## 2026-09-02 — EE6 figure read CLOSED (35/35), three crops flagged, drafting launched

`content\ophtho\qb-pages\gg-ee6.figread.md` is **complete: all 35 blocks, in order.** The reader
graded each crop on whether it actually supports the printed key: **YES 12 · PARTLY 21 · NO 1 ·
could not adjudicate 2.**

That distribution is the useful part. **Only twelve of thirty-five photographs visually confirm
their own key.** The twenty-one PARTLY entries are the ordinary limit of a printed crop — the photo
establishes the disease category the key implies but does not resolve the distinguishing detail (no
visible embolus in a retinal artery occlusion, no resolvable neovascular fronds, a mechanism of
trauma that no photograph could show). Those are interpretive limits, **not contradictions**, and
each carries its own "Uncertain" line. This is why the drafting brief tells agents to read the
figure read critically rather than mine it for findings: **an entry that asserts a finding the crop
does not show is a fabricated clinical claim**, and this section is the only picture section in the
module, so it is the only place that failure mode can occur.

### The three flagged crops

- **⚠️ Q32 — the one that matters.** Printed key **A = "Rt Optic Neuritis"**; three options only.
  The crop is an unlabelled swinging-flashlight / RAPD schematic. Read literally, the pupil that
  **dilates sits image-left in the lower row**, which under a patient's-own-laterality convention
  points to **option B (Lt)**, not the printed key. Whether that is a real contradiction turns
  entirely on whether the diagram is drawn **mirrored** (facing/viewer convention, image-left = the
  patient's right eye) — and the first pass did not resolve it. **The key ships as A regardless**;
  a defective key is noted, never disputed, and the `answer` never moves. What is being bought by
  the recheck is an accurate *description*, so the explanation can state the pupil positions
  honestly and record the contradiction if one survives.
- **Q34** — key C = "Intraorbital foreign body". No foreign body, haemorrhage or abscess identifiable
  at the resolution viewed. Possibly a resolution limit rather than a mismatch.
- **Q15** — key B = "Incision and curettage". The crop frames a mottled iris and **no visible lid
  lesion**; suspected crop/region mismatch.

A focused reader is re-examining **only those three** at magnification, writing to
`content\ophtho\qb-pages\gg-ee6.figread-recheck.md`. For Q32 it is being asked for pupil positions
in image-relative terms only (never "right eye"/"left eye"), every orientation cue present or
absent, where the light is drawn, and whether the diagram is internally consistent with key A under
a mirrored convention — and it is told explicitly **not** to recommend a key change.

### Drafting is running

Three agents, one block each — **A: Q1–12 · B: Q13–24 · C: Q25–35** — writing
`gg-ee6.block-A.js` / `-B.js` / `-C.js` as bare runs, `Edit`-appending entry by entry so a
usage-limit death leaves a usable file. Brief: `content\ophtho\qb-pages\BRIEF-EE6-DRAFT.md`.
Block C has been told to **draft around Q32 and Q34 and write them last**, and not to assert a
laterality or a foreign body until the recheck lands.

⚠️ **`lean-drafter` is still not in this session's agent registry** — the definition is present and
well-formed in all three load paths, but only built-in types are exposed here. The three agents run
as `general-purpose` on **Sonnet 5**, which keeps the ~60% cache-read saving but **loses the
~37k-per-step tool-surface saving** the workspace cost discipline assumes. Unresolved; a fresh
session may pick the registry up.

### The 38 fold citations are applied-ready, and the two-layout trap bit again

`applyfolds.js` (scratchpad) edits the **raw text** of `questions.ophtho.js` rather than
re-serialising the array — re-serialising would reformat all 1,505 entries and destroy their
layout. It locates each survivor's own `source` literal, verifies it matches the foldmap byte for
byte before touching it, and refuses to write while any of the 38 is unresolved. **Dry run:
38 of 38 located, 0 problems, +2,539 bytes.** Held until the single splice pass.

⚠️ **The first run found only 36.** `opqb-t3-121` and `opqb-t3-138` were missed because the corpus
uses **two entry layouts** — `id:'x'` (1,065 entries) and `id: 'x'` with a space (the other 440,
and their `source: '…'` carries the space too). This is the same two-style trap MEMORY.md records
for `questions.neuro.js`, in a **new place**: not counting, but **anchoring**. Any script that
locates entries by a literal `id:'` string silently addresses two-thirds of the file. It was caught
only because the script refuses to write while anything is unresolved — a script that had skipped
the misses would have reported success and folded 36 citations.

**`opqb-t2-77` now carries a third printing.** Its `source` already recorded a within-bank reprint
at p.49 (Q327); the Final's p.172 (Q42) is appended after it. Consistent with the reprint rule, not
a conflict — recorded here so a later pass does not read it as a doubled fold.

## 2026-09-02 — the eight shipped-entry edits are SPECIFIED, in the repo, at `content\ophtho\qb-pages\SPEC-shipped-edits.md`

They are more consequential than "notes" suggested, and the spec is now on disk so the analysis
survives the session. **`applyfolds.js` does not do any of this work** — it only appends to `source`.

- **Four are structural.** `opqb-t5-215` / `-t3-138` / `-t9-393` gain a fifth option (key unchanged);
  `opqb-t13-559` gains a fourth distractor at index 3 and its **`answer` moves 3 → 4** — the single
  `answer` change in the pass, on the user's explicit ruling. The keyed *option* is the same lesion
  in both printings; only its index moves.
- **`opqb-t9-393` also takes a stem change**, and it is not cosmetic: the Final prints
  "**unilateral** aphakia after congenital cataract **surgery**". *Unilateral* is what makes the
  amblyopia dense, and *surgery* places the aphakia after lensectomy rather than describing a
  congenitally absent lens. The shipped stem said neither.
- **"Fuller printing" means the OPTION LIST, not the essay.** On `-t3-138` the *shipped* explanation
  is the longer of the two (4,933 vs 3,566 chars). Do not let the phrase mislead a later pass.
- **Two are genuine key contradictions where BOTH entries ship** — `opqb-t9-360` (D) vs `opqb-t28-13`
  (C), and `opqb-t6-244` (C) vs `opqb-t28-37` (B). Not folds; both are on the ship list; the t28 side
  already cross-cites in its `source`, so what the spec adds is the **reciprocal note on the shipped
  side**. Neither `answer` moves.
- **⚠️ The clear-zone criterion behind `-t6-244` / `-t28-37` is a GAP IN THE MATERIAL, measured, not
  assumed: "clear zone" and "lucid interval" return ZERO hits across all 29 cached lecture decks and
  13 cached book chapters.** So the note is filled from outside knowledge and tagged
  `not taken from the course material`, per the gap rule. What the caches *do* give is the fact that
  carries it — `L6) Conjunctiva` sl.28 shows pannus vessels crossing the limbus **from above**, i.e.
  no clear zone by construction. On that reading the shipped **C** is right and the Final's **B** is
  defective; recorded, never corrected.
- **`opqb-t4-148` is the one that would have been folded silently and shouldn't have been.** The
  Final flips option B's negation: shipped prints "there is probably **no** common canalicular
  obstruction", the Final "**a**". Regurgitation from the upper canaliculus after irrigating the
  lower proves the common canaliculus is patent — so the **shipped** wording is a *true* statement
  sitting beside the true key, i.e. two true options against a stem asking for one. The Final's
  wording is the coherent printing. Both transcribe as printed; the key is D either way.
- `opqb-t16-683`: the Final substitutes **Chemotherapy** for **Exenteration** at option C. Key B
  (Evisceration) untouched. Note only.

### Debt found in passing — 144 shipped `opqb-*` entries carry NO provenance marker

Measured by loading the array: 945 `opqb-*` shipped · 791 carry `Written for this bank …` · 10 carry
`*(Printed explanation box — transcribed from …)*` · **144 carry neither**. **136 of the 144 cite a
lecture deck or `ophthalmology.pdf` inside the explanation**, which a transcribed bank box would not
do — so they are written explanations missing the mandatory marker, not printed boxes.

Provenance defect, not clinical: no answer or option is affected. The fix is mechanical but **must
not be blind** — the 8 that cite no cache, and the 134-char shortest, want an eyeball. Only
`opqb-t16-683` is fixed in this pass (it is being edited anyway); the other **143 are carried as a
debt**. Reproduction command is in the spec file.

⚠️ **`opqb-t13-559` is touched by BOTH `applyfolds.js` and the spec.** Apply the fold citations
first, then the spec edits, then verify both landed on that id.

## 2026-09-02 — SPLICED. Corpus 1,505 → 1,563. On `main`.

Three writes, in this order, each verified before the next. `git checkout main` done first (HEAD
was already the same sha as `main`, so the switch changed no files).

| step | what | result |
|---|---|---|
| 1 | `applyfolds.js --go` — 38 fold citations appended to `source` | 38/38 located, **+2,539 bytes**, corpus re-parses at 1,505, 38 entries now cite the Final |
| 2 | `applyspec.js --go` — the 8 shipped-entry edits | 8/8, **+5,085 bytes**, 1,505 entries · 0 sparse holes · 1,505 unique ids |
| 3 | `splice-safe.js` — Tutorial 27 + Final 31 = 58 entries | **1,505 → 1,563**, 0 sparse holes, 1,563 unique ids |

Post-checks on the four structural edits, read back off the parsed array, not off the diff:
`opqb-t5-215` 5 options / key 0 · `opqb-t3-138` 5 / 0 · `opqb-t9-393` 5 / 2 · **`opqb-t13-559` 5
options, answer 4, keyed option still "Senile macular degeneration."** — the option moved, the
lesion did not. `opqb-t16-683` now carries the marker.

### ⚠️ New tool, and why: `tools\qb-pipeline\splice-safe.js`

**`tools\qb-pipeline\splice.js` backs up to `corpusPath + '.bak'`, which for this corpus writes
`app\data\questions.ophtho.js.bak` — the exact file MEMORY.md flags for deletion because the app
LOADS it if anything globs `app\data\*.js`.** A backup that ships is not a backup.

`splice.js` was **not modified** — two other module chats are running against it tonight. The new
file is additive and nothing references it, so it cannot break their runs. It takes an explicit
backup directory, **refuses outright if that directory is inside `app\data`** (tested: it refuses),
timestamps the backup, and adds three checks `splice.js` lacks — ids not already shipped, ids not
duplicated within the draft, and a **sparse-hole scan by index** rather than `Array.filter`.

**Debt for whoever owns `tools\`: fix `splice.js`'s backup path, or retire it for `splice-safe.js`.**
Do not do it while peds and neuro are mid-run.

### The two-layout trap fired again, and the script caught it

`opqb-t3-138` uses the `id: 'x'` layout with one option per line and LF endings, so an anchor
written as `'Lacrimal gland tumor.']` matched **zero** times while the other seven matched once.
The run refused to write. This is the same fault that cost two of the 38 citations earlier tonight.
**Both scripts now require every find to match EXACTLY ONCE inside the entry's own byte range, and
refuse the whole run otherwise** — which is the only reason a silent 7-of-8 did not ship.

### EE6 drafting — 33 of 35 written

Blocks A (Q1–12), B (Q13–24) and C (Q25–31, 33, 35) are on disk and parse: 12 + 12 + 9. **Q32 and
Q34 are deliberately unwritten**, waiting on the magnification re-read of their crops; agent C is
holding for accurate crop descriptions and will ship key **A** for Q32 and **C** for Q34 regardless
of what the re-read says, per the never-move-the-key rule. Not yet done: the EE6 duplicate sweep
against the corpus, then the second splice.

**All three drafting agents independently refused the same bypass-mode reminder** telling them to
route file writes through Bash heredocs, and each cited the brief's Write/Edit rule. Agent B reports
it caught itself writing a double-escaped apostrophe into a `source` field and fixed it before it
could fail. Noted in one line, as ruled — no entry opened on it.

## ⚠️⚠️ 2026-09-02 — MY COMMIT SWALLOWED CHAT B's PEDS WORK. "Stage explicit paths" IS NOT ENOUGH.

Commit `6f27079` was meant to carry 14 ophtho paths. It carries **17**, and the extra three are
peds:

```
app/data/questions.peds.js                            +152
progress/resume-peds.md                                +93
content/peds/qb-pages/house-ch10-nutrition.draft-A.js  new, +198
```

**Nothing was lost and nothing is broken** — Chat B's work is committed, in full, under my commit
message. But Chat B's next `git commit` will find its index empty and may read that as lost work.
**It is not lost. It is in `6f27079`.** History was deliberately **not** rewritten: another chat is
live, and rewriting under it is worse than a mislabelled commit.

### What actually happened, and why the standing rule did not stop it

I staged 14 explicit paths and then ran `git commit`. Between those two commands Chat B ran its own
`git add` on its three files. **`git commit` commits THE INDEX, not the paths you personally
staged** — so a concurrent chat's staging rides along, silently, and `git status` taken before the
`add` shows nothing wrong. The `index.lock` check does not help either: neither chat was mid-commit
at the moment the other looked.

### The rule that replaces it, for every parallel chat

> **⚠️ `git add <paths>` then `git commit` is NOT safe while another chat is running.
> Pathspec-limit the COMMIT itself:**
>
> ```bash
> git commit -F <msgfile> -- app/data/questions.ophtho.js progress/resume-ophtho.md
> ```
>
> The `--` form commits **only** those paths regardless of what else is in the index, and it leaves
> the other chat's staged files staged. `git commit --only <paths>` is the same thing.

**This belongs in `MEMORY.md` and in all three chat briefs at the consolidation pass** — it is a
correction to a standing rule (`⚠️ Stage EXPLICIT PATHS — never `git add -A``), which turns out to
protect against the wrong half of the problem. Left out of `MEMORY.md` tonight only because the
no-mid-run-writes rule applies.

## 2026-09-02 — EE6 sweep: 33 incoming, 9 candidates, **0 folds**. Why the zero is a zero.

`node tools/qb-pipeline/sweep.js <blocks A+B+C combined> app/data/questions.ophtho.js` against the
post-splice corpus of **1,563**. Nine ranked candidates, every one hand-read against its stem,
its full option menu and its key. **None is a fold**, and none is close.

| pair | dice | discriminating token |
|---|---|---|
| `opqb-t26-15` × `opqb-t27-20` | 0.73 | Chalazion photo keyed **incision and curettage** vs a **back-reference** ("In the previous Q") to a diabetic-retinopathy question keyed **intravitreal anti-VEGF**. `op-lid` vs `op-ret-dr`, disjoint menus. |
| `opqb-t26-30` × `opqb-t14-639` | 0.73 | Opposite directions. t26-30 shows a field printout and asks **which disease** (key Glaucoma); t14-639 asks the **characteristic defect in NAION** (key Altitudinal). Disjoint menus. |
| `opqb-t26-5` × `-10` | 0.80 | Both key keratoplasty, but different photographs and `-10` asks specifically about **an advanced case**, with `keratectomy` and `Spectacles` in its menu. Two printed questions, not one. |
| `opqb-t26-5` × `-11` | 0.89 | `-11` is **trachoma** (single-dose azithromycin). Nothing in common but the words *treatment for this condition*. |
| `opqb-t26-6` × `-7` × `-9` | 0.73–0.91 | **The shared-menu trap, three ways.** All three ask *what does this test/device examine*, and `-6`/`-9` share four menu items. The discriminator is **the instrument in the photograph**: indirect ophthalmoscope (key Retinal periphery), levator-function measurement (key Levator palpebrae superioris), tonometer (key IOP). A shared menu **pairs**, it never folds. |
| `opqb-t26-10` × `-11`, `-10` × `-15` | 0.73 | Treatment-template collisions across three different diseases and three disjoint menus. |

**This is a photo section, and that is what makes the zero structurally expected rather than lucky:
the stem is often only "What is the diagnosis?" — the question is carried by the image, which dice
cannot see.** Every one of the seven within-batch hits has a different `image` basename
(`q-op-gg-ee6-5/6/7/9/10/11/15`), and all 33 crops were confirmed present before drafting. The
measurement that stands behind the zero is the hand-read of all nine, not the sweep's ranking.

Consistent with the finding recorded earlier tonight on the 15 below-threshold ship-list pairs:
**on short template stems dice measures boilerplate, not content** — here it does so in both
directions at once, missing a real fold (`-28`) at 0.667 while ranking nine non-folds up to 0.91.

### EE6 validation — the 33 are CLEAN and every key matches the printed run

`node <scratchpad>\vdraft.js ee6-33.draft.js 33` (a generalised `vpart1.js`; it also resolves every
backticked `opqb-*`/`opmcq-*` cross-reference against the corpus and the batch):

```
entries 33  (expected 33)
BAD doubled-newline escapes 0   doubled-backslash pairs 0
with images 33   option counts 4
chapters touched: op-acute op-cat-surg op-conj op-cornea op-cornea-surg op-glauc op-insid
                  op-intro-exam op-lac op-lid op-neuro-motil op-neuro-optic op-orbit
                  op-orbit-mass op-ret op-trauma op-uvea
CLEAN
```

All 33 `image` basenames resolve to a real asset, all 33 carry the marker, no marker leaked into
`source`, no dead cross-reference, no chapter outside the 35-token vocabulary.

**Keys checked against the printed run `AADBABBCBCACBABCACDBCAAAAAAAAAAADCB` — 33 checked, 0
mismatches.** The two unwritten ones are **Q32 = A** and **Q34 = C**, which is what agent C is
holding for. The eleven-consecutive-`A` stretch at Q22–Q32 survived three independent drafters
without one of them "correcting" it.

**Option-cap check, since four of tonight's spec edits created five-option questions:**
`OPT_LETTERS='ABCDEFGHIJKLMNOPQRSTUVWXYZ'` is live at `app\index.html:4549` and used at 4581, 4596
and 6320, so the old five-option "the answer is undefined" bug cannot bite. Ophtho now spreads
**3 options ×3 · 4 ×1,350 · 5 ×210**, nothing above five.
