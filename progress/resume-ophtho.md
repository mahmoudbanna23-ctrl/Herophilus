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
