# Resume — OPHTHALMOLOGY

**Chat opened 2026-08-12.** Method is in `progress\briefs\START-HERE.md`; module facts in
`progress\briefs\ophthalmology.md`. This file is state only — where I am, what I found, what is next.

---

## Resume here

**✅ TOPIC 1 CLOSED — 71 printed, 71 written, 0 folded, validated in a full run.**

**Next action: render PDF pp.16–23 (book pp.9–16) and work topic 2, "Optics and Errors of
Refraction", Q72 onward, 41 promised.** Its questions are book pp.9–13, answers p.14 — **and render
book p.15 (PDF 22) as well, one page past the last answer page, every time.** Ids `opqb-t2-72`
onward. `L7,8) Refractive errors` is cached, 19,611 chars, and covers this topic in full — expect
heavy grounding and few general-knowledge gaps, the reverse of a topic like Trauma.

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
- **⚠️ THE ANSWER KEY IS BARE LETTERS — `1. Correct Answer: B` — WITH NO EXPLANATION BOXES AT ALL.**
  Verified on the topic-1 answer page (book p.8). **Consequence: 100 % of explanations are authored,
  so every single entry carries the marker** `Written for this bank — ophthalmology qb.pdf prints no
  explanation here.` The predicted marker delta equals the entry count exactly, every batch.
- **⚠️ QUESTION NUMBERING RUNS CONTINUOUSLY ACROSS TOPICS** — topic 1 ends at Q71 and topic 2 opens
  at **Q72**, not at Q1. It does not restart at a topic the way ENT's Grade Gain restarted at a
  section. *(Not yet confirmed for the End Exams at the back — check when reached.)*
- Running header names the topic: `QUESTION BANK: Examination of the Eye`.

### The page map — transcribed from the contents pages (PDF pp.3–7)

**⚠️ Treat the page ranges as reliable and the counts as unreliable** — that is how ENT's Grade Gain
behaved (counts wrong 17 times in 21, always upward). **Topic 1 is the first datapoint here and its
count of 71 was EXACT.** One exact count is not a pattern; keep counting what is printed.

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

| Topic | Printed | Written | Folded | Status |
|---|---|---|---|---|
| 01 Examination of the Eye | **71** | **71** | **0** | ✅ closed 2026-08-12 — reconciles |

**Module total: 71 questions in `app\data\questions.ophtho.js`, all `bank:'gradegain'`.**
Validated in a full run: 0 bad module/chapter refs, 0 duplicate ids, every `answer` in range, every
entry carrying `source` and `explanation`, **71/71 markers at the end of `explanation` and 0 in
`source`**. All 71 print four options.

**⚠️ Marker delta: predicted +71, observed +71.** With no explanation boxes anywhere in this bank,
the predicted delta always equals the entry count exactly — which makes it a **weaker** check here
than it was in ENT, where boxed questions made the number non-trivial. It still catches a marker put
in the wrong field.

### The within-bank sweep — topic 1

Run over all 71 with normalisation (lowercase, punctuation stripped, options sorted). **Result: ZERO
folds.** Three pairs surfaced and all three are false positives of kinds already documented:

| Stage | Pair | Why it is not a fold |
|---|---|---|
| **C** (key + option count) | `opqb-t1-48` / `opqb-t1-60` | Both key *retinal detachment*, but the stems and option sets are entirely different. **Same key + different stem is not a fold** |
| **F** = 0.71 | `opqb-t1-7` / `opqb-t1-9` | Both option lists are anatomy nouns (iris, retina, lens, cornea, choroid). Shared vocabulary, unrelated questions |
| **F** = 1.00, **E** = 0.04 | `opqb-t1-11` / `opqb-t1-14` | **Identical four-option menu** — Rods / Cones / Ganglion cells / Bipolar cells — with **different keys and unrelated stems.** The textbook short-generic-menu false positive |

**⚠️ That last pair is the standing warning made concrete on this bank's very first topic: an
identical short option menu scores F = 1.00 for the wrong reason, and only stage E (0.04) separates
them.** Run both rankings and read the list; never fold on F alone.

**Zero folds is credible here for a structural reason, not a lucky one:** this is the **first** topic
of the **first** bank in an empty module, so there was nothing cross-bank to sweep against, and a
71-question introductory topic covering distinct examination techniques has little internal reason to
reprint itself. **The real test of the sweep comes at topic 2 and beyond**, and especially when bank
2 (House) arrives.

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

**Topic 1's actual distribution (71 questions):**

`op-va` 13 · `op-intro` 13 · `op-pupil` 12 · `op-refract` 5 · `op-glauc` 5 · `op-squint` 5 ·
`op-ret` 4 · `op-vissym` 3 · `op-cornea` 2 · `op-acute` 2 · `op-lid` 1 · `op-lac` 1 · `op-neuro` 1 ·
`op-uvea` 1 · `op-red` 1 · `op-conj` 1 · `op-cat` 1

That spread is expected and is not a filing failure: an examination topic tours the whole eye, so it
seeds seventeen of the twenty-six chapters. **Nine chapters still hold zero** — `op-orbit`,
`op-sclera`, `op-onc`, `op-trauma`, `op-appear`, `op-systemic`, `op-white`, `op-insid`, `op-lid`
(near-zero) — and every one of them has a dedicated topic later in this bank, so they will fill.

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
