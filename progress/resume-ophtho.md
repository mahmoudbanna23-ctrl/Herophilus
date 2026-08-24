# Resume — OPHTHALMOLOGY

**Chat opened 2026-08-12.** Method is in `progress\briefs\START-HERE.md`; module facts in
`progress\briefs\ophthalmology.md`. This file is state only — where I am, what I found, what is next.

---

## Resume here — state at 2026-08-24

**⏳ OPHTHALMOLOGY IS THE LIVE MODULE.** ENT closed the same day (`ledger.md` §15–§16). Everything this
session did is written up in **`ledger.md` §17 — read it before resuming.**

### Where the numbers stand

| | |
|---|---|
| Questions merged | **228** — Grade Gain **172** (topics 1, 2, 3, 4, 7) · House **56** (ch.1) |
| Corpus | **2,789** (2,700 MCQ + 89 cases) |
| Remaining | **~1,884** — GG **915** of 1,087 · House **~969** of ~1,025, against **27 Sep** |
| Last `file://` boot | **0 console errors, 876 rules, 3 `5/4` blocks, 4 modules, 153 chapters, 1,604 sections, 89 cases** |
| §14.5 register | ✅✅ **ZERO open rows, all four modules** (ophtho went 39 → 0 today) |
| Lecture cache | ✅ **nine of eleven blind decks read** — see the deck table below |

**⚠️⚠️ THE PROTOCOL BELOW STILL HOLDS AND IS NOT NEGOTIABLE.** The hub is the SOLE WRITER of
`questions.ophtho.js`, `cases.ophtho.js`, `theory.ophtho.js`, this file and every git commit.
Subagents draft into `content\ophtho\qb-pages\*.array.js` + `*.draft.js` and **never touch a data
file, a resume file or git.** The hub runs the six-stage sweep, every fold decision, the splice, the
§7 validation, the marker delta and the commit — **one batch at a time**, because batch B’s sweep must
run against a corpus that already contains batch A or cross-bank folds are missed.

**⚠️ THE 2-SUBAGENT CAP WAS RAISED TO 4–5 ON 2026-08-24 AND THAT DECISION COST A USAGE LIMIT.** Seven
agents were live when it hit at 3:50 pm Africa/Cairo. **Nothing was lost that had been written**, because
every brief carried *"write incrementally"* — four agents left resumable partials totalling **160 finished
slides**; the three holding work in memory left nothing. **Keep the write-incrementally paragraph in every
brief.** Four concurrent is workable; watch for stalls and drop back after one.

### What is queued and ready

**Nine Grade Gain topics and House ch.2 are already RENDERED** at 200 dpi in `<scratch>\oph\bank\`:
`gg-t4` `gg-t5` `gg-t6` `gg-t7` `gg-t8` `gg-t9` `gg-t10` `gg-t11` `gg-t12` `house-c2`. Render more with
`node <scratch>\oph\qpages.js gradegain <firstBook> <lastBook> <outDir>` — it does each file’s own offset
arithmetic and **always renders one page past**, which is not optional on this bank.

**The reusable subagent brief is `progress\briefs\ophtho-bank-brief.md`** — copy it, fill the slots, launch.

### ⚠️ The three things that will dominate the remaining cost

1. **~304 IMAGE questions** — House OSCE Q1–269 are each a clinical photograph, plus GG’s End Exam 6
   (Photos) at 35. **Every crop is LOOKED at**; 13 of 13 were wrong first try in ENT, and ENT’s crop
   detector is template-specific and **will not fire on these banks.**
2. **132 short-answer model-exam items → `type:'case'`** in `cases.ophtho.js`, which is currently empty.
   They **reference the OSCE images rather than reprinting them**, so they need links to existing crops.
3. **The back of both files is recycled BY DESIGN** — GG’s eight exam sections and House’s model exams are
   past papers. **The six-stage sweep matters more there than anywhere else in this project.**

### Topic-by-topic status, Grade Gain

| Topic | Promised | Printed | Written | Folded | Boxed | State |
|---|---|---|---|---|---|---|
| 01 Examination of the Eye | 71 | **71** | 71 | 0 | 0 | ✅ |
| 02 Optics & Errors of Refraction | 41 | **41** | 41 | 0 | 8 | ✅ |
| 03 Orbit | 26 | **26** | 26 | 0 | 4 | ✅ |
| 04 Lacrimal System | 26 | **26** | 26 | 0 | 6 | ✅ 2026-08-24 |
| 05 Eyelid | 59 | **59** (Q165–223) | 59 | 0 | 4 | ✅ 2026-08-24 |
| 06 Conjunctiva | 65 | **65** (Q224–288) | **63** | **2** | 9 | ✅ 2026-08-24 |
| 07 Sclera | 8 | **8** (Q289–296) | 8 | 0 | 3 | ✅ 2026-08-24 |
| 08 Cornea | 52 | **52** (Q297–348) | **51** | **1** | 12 | ✅ 2026-08-24 |
| 09 Lens | 61 | **61** (Q349–409) | **60** | **1** | 12 | ✅ 2026-08-24 |
| 10 Uveal Tract | 38 | — | — | — | — | drafting |
| 11 Glaucoma | 50 | — | — | — | — | drafting |
| 12 Vitreous | 15 | — | — | — | — | rendered |
| 13 Retina | 69 | **69** (Q513–581) | **69** | 0 | 19 | ✅ 2026-08-24 |
| 14–28 | 567 | — | — | — | — | t14–t20 rendered and queued |

### Topic-by-topic status, House (Part A)

| Ch | Title | Printed | Written | Folded | Boxed | State |
|---|---|---|---|---|---|---|
| 1 | Examination of the eye | **56** | 56 | 0 | 0 | ✅ merged 2026-08-24 |
| 2 | Optics & errors of refraction | **32** | 32 | 0 | **0** | ✅ 2026-08-24 |
| 3 | The Orbit | **28** | **27** | **1** | **0** | ✅ 2026-08-24 |
| 4 | Lacrimal system | **30** | **29** | **1** | **0** | ✅ 2026-08-24 |
| 5 | Eyelids | ? | — | — | — | rendered, not started |
| 6–20 | — | ~720 | — | — | — | not started |

**⚠️ House prints NO explanation box and NO figure in chapters 1, 2 or 3** — but that is a property of
the PAGE, counted each time, never carried forward.

**⚠️⚠️ THE ORPHANED-ANSWER DEFECT IS GROWING CHAPTER BY CHAPTER: ch.2 had TWO, ch.3 had FOUR** — and
three of ch.3’s orphaned **option text** as well as the key. Answers are printed inline, so a missing
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
