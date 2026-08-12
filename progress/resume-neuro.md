# Neuropsychiatry — resume state

**Owner: the Neuropsychiatry chat.** Method in `progress\briefs\START-HERE.md`, module specifics in
`progress\briefs\neuropsychiatry.md`. **This file is the only thing that lets the work be picked up
cold.** Keep it current after every batch.

**⚠️ Files this chat may write:** `app\data\questions.neuro.js`, `app\data\cases.neuro.js`,
`app\data\theory.neuro.js`, `content\neuro\**`, `progress\resume-neuro.md`, `app\assets\q\q-np-*.jpg`.
**Nothing else.**

---

## 0. ⚠️ SCOPE — WIDENED BY THE USER, 2026-08-12. THE BRIEF'S §9 IS OVERRULED

`START-HERE.md` §9 says *"do not write theory notes"* and *"do not attempt the module's endpoint
PDF."* **The user overruled both**, verbatim: *"I don't want in your brief to Ignore any questions or
any important thing in the theoritical notes I did the seperate chats to speed up not to have
unfinished work."* The four parallel chats exist to go **faster**, not to ship less.

**Everything below is owed, in this order:**

| | Deliverable | Size | Status |
|---|---|---|---|
| 1 | **Grade Gain — Neurology**, topics 01–14 | ~325 questions | in progress (topic 01 done) |
| 2 | **Grade Gain — Psychiatry**, topics 15–23 | ~157 questions | not started |
| 3 | **`Neuro endpoint.pdf`** — id prefix `npep-` | 2,190 pages, perhaps ~700 questions | not started |
| 4 | **Theory notes, all 27 chapters** → `theory.neuro.js` | the largest single job in the module | not started |
| — | **Free-text cases** wherever the source prints a vignette with no options, and for multi-answer questions (§4) | as encountered | ongoing |

**The ONE exception, and it is the user's own explicit instruction (2026-08-12): *"Ignore the entire
Neurosurgery part."* Reconfirmed after the scope widened** — the app's 27 Neuropsychiatry chapters
contain no neurosurgery chapter, and `modules.js` belongs to all four chats and may not be edited
here. **Do not start neurosurgery, and do not re-raise it.**

**⚠️ The theory brief is NOT "summarise the lectures."** It is a **new study source, sufficient to sit
the exam from on its own**, written backwards from the questions. Length is never the goal;
**dropping something important is the one unacceptable failure.** Full contract in `CLAUDE.md` §4
under *Theory*, including the four tests for what counts as important and the requirement to record
what was deliberately left out.

---

## 1. The bank

| | |
|---|---|
| File | `Semester 8\Neuro\Questions\neuropsychiatry & neurosurgery qb.pdf` |
| Bank | **Grade Gain** — cover reads *ASM MINDS' … QS BANK GRADE GAIN EDITION*, "GG EDITION" top right. Verified by rendering page 1, 2026-08-12 |
| `bank` value | `gradegain` |
| Pages | **142 PDF pages**, A4, image-only scan (`pdftotext` returns nothing) |
| **⚠️ PAGE OFFSET** | **PDF page = book page + 5.** Verified: PDF 6 prints book page 1. Holds at PDF 70 = book 65 and PDF 97 = book 92 |
| Path quoting | **⚠️ the `&` in the filename splits an unquoted shell command — always quote the whole path** |

**⚠️ Endpoint (`Neuro endpoint.pdf`, 2,190 pages) is NOT started and must not be** unless Grade Gain
finishes and the user says so.

---

## 2. ⚠️ THE BOOK HAS THREE SECTIONS AND **NEUROSURGERY IS OUT OF SCOPE**

**User's instruction, 2026-08-12, verbatim: *"Ignore the entire Neurosurgery part"*.**

| # | Section | Book pages | Contents topics | In scope? |
|---|---|---|---|---|
| 1 | **Neurology** (headed *Neuropsychiatry*) | 1–64 | 01–14 | **YES** |
| 2 | **Psychiatry** | 65–93 | 15–23 | **YES** |
| 3 | **Neurosurgery** | 94–136 | its own 01–08, ~273 questions | **NO — SKIPPED ON THE USER'S INSTRUCTION** |

Neurosurgery has its **own title/contents page at PDF 99 and 100**, its own topic numbering 01–08,
and its own question numbering restarting at 1. Ignoring it also disposes of the "no neurosurgery
chapter in `MODULES`" problem the module brief anticipated — **there is now nothing to file there,
and no scope question to raise.**

### ⚠️ QUESTION NUMBERING RESTARTS AT EACH SECTION — SO IDS CARRY A SECTION TOKEN

Within a section the numbering runs **continuously across topics** — it does **not** restart per
topic. Verified: topic 01 ends at Q22 and topic 02 (*Localization*) opens at **Q23** on book p.4;
topic 03 opens at **Q35** on book p.7. But psychiatry's first topic (*Symptomatology & Myths*, book
p.65) opens at **Q1** again.

| Section | Id form | Range |
|---|---|---|
| Neurology | **`npqb-nr-<printed number>`** | `npqb-nr-1` … ~`npqb-nr-330` |
| Psychiatry | **`npqb-ps-<printed number>`** | `npqb-ps-1` … ~`npqb-ps-161` |

**Without the token, psychiatry Q1 collides with neurology Q1.** Settled before the first entry was
written.

---

## 3. Page map — trust the ranges, never the counts

**⚠️ The contents page counts are unreliable and this bank errs DOWNWARD** (the opposite of ENT's
Grade Gain, which erred upward). Psychiatry's topics 15–22 promise 146 questions, yet topic 23 opens
at **Q154** — so eight topics printed at least 7 more than promised. **Render the range and count
what is printed.**

**Answers sit on the SAME PAGE as the tail of the questions**, in the right-hand column, under a
`<Topic> Answers` banner — they are not in a separate block. Topic 01's answers share book p.3 with
questions 17–22.

### Section 1 — Neurology (book pp.1–64)

| # | Topic | Book pp. | PDF pp. | Promised | Printed | Status |
|---|---|---|---|---|---|---|
| 01 | Neurological Sheet | 1–3 | 6–8 | 22 | **22** | ✅ read, transcribed, written |
| 02 | Localization | 4–6 | 9–11 | 12 | **12** (Q23–34) | ✅ read, transcribed, written |
| 03 | Ischemic Cerebrovascular Stroke | 7–13 | 12–18 | 20 | **20** (Q35–54) | ✅ read, transcribed, written |
| 04 | Hemorrhagic Cerebrovascular Stroke | 14 | 19 | 7 | — | not read |
| 05 | Cranial Nerves Disorders | 14–21 | 19–26 | 27 | — | not read |
| 06 | Hemiplegia & Paraplegia | 22–26 | 27–31 | 30 | — | not read |
| 07 | Headache | 27–30 | 32–35 | 22 | — | not read |
| 08 | Epilepsy | 31–36 | 36–41 | 36 | — | not read |
| 09 | Coma | 37–40 | 42–45 | 22 | — | not read |
| 10 | Movement Disorders | 41–45 | 46–50 | 23 | — | not read |
| 11 | Demyelinating Diseases | 46–49 | 51–54 | 16 | — | not read |
| 12 | Neuromuscular Disorders | 50–56 | 55–61 | 45 | — | not read |
| 13 | CNS Infections | 57–60 | 62–65 | 20 | — | not read |
| 14 | Back & Lower Limb Pain | 61–64 | 66–69 | 23 | — | not read |

**Neurology promised total: 325.** ⚠️ Topics 04 and 05 **both start on book p.14** — topics share
pages, so a topic boundary can fall mid-page.

### Section 2 — Psychiatry (book pp.65–93)

| # | Topic | Book pp. | PDF pp. | Promised | Printed | Status |
|---|---|---|---|---|---|---|
| 15 | Symptomatology & Myths | 65–67 | 70–72 | 18 | — | not read |
| 16 | Anxiety & Related Disorders | 68–71 | 73–76 | 21 | — | not read |
| 17 | Mood Disorders | 72–75 | 77–80 | 22 | — | not read |
| 18 | Somatic Symptoms & Related Disorders | 76–78 | 81–83 | 11 | — | not read |
| 19 | Child Psychiatry | 79–81 | 84–86 | 14 | — | not read |
| 20 | Schizophrenia | 82–85 | 87–90 | 26 | — | not read |
| 21 | Dementia & Delirium | 86–88 | 91–93 | 18 | — | not read |
| 22 | Substance-related Disorders & Pharmacology | 89–91 | 94–96 | 16 | — | not read |
| 23 | Emergency, Devices & Psychotherapy | 92–93 | 97–98 | 11 | **≥8** (Q154–161 seen) | not read |

**Psychiatry promised total: 157; printing reaches at least Q161.**

**Grand total in scope: ~482 promised, expect more.**

---

## 4. Structure of a page — established from PDF 6–12, 70, 97, 101

- **Two columns, ~10 questions per A4 page.** `-r 130` renders it legibly with no tiling.
- **Each question prints ONCE.** No reprint-per-section trick like ENT's endpoint file.
- **Option counts vary: 3, 4 and 5 all occur.** Q16 prints only a/b/c (verified by a 200 dpi zoom —
  it is not a rendering cut); Q3 prints five; Q34 prints three. Nothing in the app assumes four.
- **⚠️ EXPLANATION BOXES ARE A PROPERTY OF THE TOPIC, NOT THE BANK.** Topic 01 printed keys only,
  with **one** explanation in 22 (Q7, and it is **truncated mid-sentence**). Topic 02 printed a full
  explanation for **every** one of its 12. Predict the authored-marker delta per topic, never
  globally.
- **⚠️ HEADER VIGNETTES EXIST.** Book p.7 prints *"A 60 year-old male patient presented to the ED
  complaining of weakness of the right upper limb and the right side of the face. Questions below
  will be related to this scenario"* above Q38–41 as a block header belonging to no single question.
  **Restate it into every question that inherits it** — but check each, since not every question
  under a header does.

### ⚠️ MULTI-ANSWER QUESTIONS EXIST — AND THE MCQ SCHEMA CANNOT HOLD THEM

Topic 02 keys **`24. A + B`**, **`27. B + C`** and **`28. D + E`** — the stems ask *"Which **two** of
the following…"*. The schema has a single 0-based `answer`, so keying one of the two would mark a
learner **wrong for choosing the other correct option**, which breaks the user's standing rule that
nothing may be left wrong.

**Decision (2026-08-12): a multi-answer question is written as a free-text `case` in
`app\data\cases.neuro.js`, not as an MCQ.** The printed option list is kept verbatim **inside the
`stem`** as markdown, so nothing is lost and nothing is invented; the learner types the two
structures and `keys` grades one key per correct option, giving *got/total*. No app change needed,
no distractor authored. **Record every question handled this way in §7 below.**

---

## 4a. ⚠️⚠️ BLOCKER RAISED WITH THE USER — `app\index.html` CAPS OPTIONS AT FIVE

**Found 2026-08-12 when topic 03 produced the project's first questions with more than five options**
— Q43 prints **nine** (a–i) and Q51 prints **eight** (a–h). Three places in the shared shell assume
at most five, and **`index.html` is on this chat's forbidden list, so it has NOT been edited.**

| Line | Code | What breaks |
|---|---|---|
| **3746** | `<span class="ltr">${'ABCDE'[i]}</span>` | the letter badge renders **`undefined`** for every option past E |
| **3761** | `'Not quite — the answer is '+'ABCDE'[q.answer]` | for `npqb-nr-43` (answer index 6) the verdict reads **“the answer is undefined”** |
| **5452** | `if('ABCDE'.includes(k) …)` | keyboard shortcuts only reach A–E; options F–I are mouse-only |

**The questions still work** — the option text renders, clicking scores correctly, the ✅/❌ marks and
the explanation are all fine. **Only the letter badge and the verdict line are wrong.** So the
content is shipped as printed rather than held back.

**The fix is one expression, in all three places:** `String.fromCharCode(65+i)` in place of
`'ABCDE'[i]`, and a matching widening of the keyboard handler. **It is the app chat's or the user's
call, not this one's.** ⚠️ It affects every module — Ophthalmology and Pediatrics will hit it the
moment their banks print a sixth option.

## 5. Chapter filing decisions — keep later batches consistent with these

The module has no neurosurgery chapter and none is needed now. Within the 27 real chapters:

| Rule | Applies to |
|---|---|
| A question whose subject is a **named cranial nerve's function, its bedside test, or its lesion** → `nr-cranial` | corneal reflex efferent, anosmia, visual-field confrontation technique, jaw jerk, hypoglossal deviation |
| A question whose subject is **ataxia as an entity** (types, cerebellar vs sensory vs vestibular) → `nr-hemi` | that chapter is titled *Hemiparesis, paraparesis, ataxia* |
| **Examination technique, grading scales, reflex root levels, tracts, cortical localisation** → `nr-intro` | the *Neurological Sheet* and *Localization* topics default here |
| **Visual-pathway localisation** (optic tract / radiation / occipital lobe) → `nr-intro`, not `nr-cranial` | it is localisation, not a cranial-nerve lesion |
| Seizures and epilepsy → `nr-movement` | the chapter title carries both |
| Delirium and coma → `nr-delirium`; **dementia** → `nr-delirium` for the neurological differential, `ps-geri` for cognitive assessment/management in the elderly | decided in advance; revisit only with a note here |

---

## 6. Where the work stands

| | |
|---|---|
| **Transcribed verbatim** | Neurology topics 01–05 → `content\neuro\qb-pages\*.md`; topic 06 and Psychiatry topic 15 → `*.array.js` staging |
| **Written into `questions.neuro.js`** | **129 MCQs** |
| **Written into `cases.neuro.js`** | **7 cases** (the multi-answer questions, §4) |
| **Folded** | 0 |
| **Reconciliation** | **136 printed = 129 MCQs + 7 cases + 0 folded ✅**, every id present exactly once |
| **Images** | 2 — `q-np-gg-8.jpg` (`npqb-nr-43`) and `q-np-gg-20.jpg` (`npqb-nr-87`), both `imgEssential` |

**Per topic:** Neurology t01 22 · t02 12 · t03 20 · t04 7 · t05 27 · t06 30 = **118 (Q1–Q118)**.
Psychiatry t15 **18 (Q1–Q18)**. Grand total **136**.

Chapters: `nr-hemi` 29, `nr-intro` 23, `nr-cranial` 34, `nr-stroke` 29, `nr-movement` 2, `nr-ms` 1,
`nr-lmn` 1, `ps-symptom` 11, `ps-psychoed` 5, `ps-ocd` 1, `ps-mood` 1.
Authored markers: **90** of 136 — this bank prints boxes far more often than ENT's did.

**Within-bank duplicate sweep:** run from the start, since a bank reprints itself. **No cross-bank
sweep is possible or useful** — this module has one bank and House was never supplied. *(That changes
the moment `Neuro endpoint.pdf` starts landing — see §10.)*

---

### ⚠️ Image naming — `q-np-gg-<book page>.jpg`, and the `gg` token is not optional

`q-np-8.jpg` was renamed **`q-np-gg-8.jpg`** on 2026-08-13. An unqualified page number would have
collided with `Neuro endpoint.pdf`'s own book page 8 the moment the endpoint bank starts. The module
token alone is not enough — **the bank token has to be there too.**

---

## 6a. Subagent board — hub-and-spoke, adopted 2026-08-12 (START-HERE §11)

**This chat is the hub: the SOLE writer of `questions.neuro.js`, `cases.neuro.js` and this file, and
the only one that sweeps, folds, splices, validates, commits or touches git.** Subagents draft one
topic each into `content\neuro\qb-pages\*.array.js` + `*.draft.js` and touch nothing else.

| Slot | Bank | Topic | State | Last manifest |
|---|---|---|---|---|
| **A** | Grade Gain | Neurology **t06** "Hemiplegia & Paraplegia" (Q89–Q118) | ✅ **merged 2026-08-13** | 30 printed / 30 drafted / 0 folded · 2 boxed · marker +28 |
| **A** | Grade Gain | Neurology **t07** "Headache" (from Q119) | ⬜ **not yet launched** | — |
| **B** | Grade Gain | Psychiatry **t15** "Symptomatology & Myths" (Q1–Q18) | ✅ **merged 2026-08-13** | 18 printed / 18 drafted / 0 folded · 3 boxed · marker +15 |
| **B** | Grade Gain | Psychiatry **t16** "Anxiety & Related Disorders" (from Q19) | ⬜ **not yet launched** | — |

Cap **2 live subagents**; scale to 3 after a clean day. Both merges on 2026-08-13 were clean, so the
third slot is available from 2026-08-14.

**What the merge actually costs the hub** — do not skip any of it:

1. **Re-sweep the batch against everything that landed AFTER the subagent read the file.** Slot A
   swept against 54 entries because topics 04–05 were still unwritten when it started; the hub had to
   re-run all six stages against the full 88. **A subagent's sweep is always a snapshot.**
2. Adjudicate every staged hit by reading both questions side by side.
3. Splice **one batch at a time**, then run the validator before the next.
4. **Predict the marker delta before splicing and confirm it after.** Both batches matched exactly.
5. Spot-check 3–5 entries — including **every boxed one**, which must carry the printed box verbatim
   and **no** authored marker.
6. Delete the `.draft.js`; **keep the `.array.js`** as the verbatim record.

**Both merges produced zero folds**, and in both the only staged hits were the documented
short-generic-menu false positives — `npqb-ps-5` vs `npqb-nr-26` share *Auditory / Visual /
Olfactory* while asking about hallucinations and thalamic relay respectively.

---

## 7. Defects recorded — keyed as printed, noted in the explanation (user's ruling 2026-08-11)

| Id | What the bank printed | The discrepancy |
|---|---|---|
| `npqb-nr-3` | keys *"Ipsilateral limb ataxia & **hypertonia**"* for a cerebellar hemisphere lesion | `L12) hemi,parap&ataxia` tabulates cerebellar muscle tone as **hypotonia**. The option is right about the ipsilateral ataxia and wrong about the tone; it is still the only option offering ipsilateral limb ataxia |
| `npqb-nr-11` | keys **COVID-19** as the commonest cause of anosmia | `L8) Cranial nerves` lists mucous blockage, head trauma, genetics, Parkinson's and COVID-19 **without ranking them**. Traditional teaching puts nasal/mucous obstruction and head trauma first |
| `npqb-nr-14` | keys *"Right **lower** optic radiation"* for a homonymous **inferior** quadrantanopia | the laterality is right; the fibres are wrong — an inferior field defect comes from the **superior (parietal)** radiation. Not covered by any cached neurology deck |
| `npqb-nr-7` | prints an explanation that **stops mid-sentence** — *"…can lead to upper motor neuron lesions (UMNL),"* | transcribed verbatim as printed, then completed in the written text below it |
| `npqb-nr-16` | prints only **three** options (a/b/c) | verified at 200 dpi — not a rendering cut. Held as a 3-option question |
| `npqb-nr-18` | stem begins with a stray `.` — *".A patient can move their leg…"* | stripped |
| **`npqb-nr-23`** | **⚠️ THE KEY'S LETTER CONTRADICTS THE KEY'S NAME** — prints *"CORRECT ANSWER: **C.** Motor Cortex"*, but Motor Cortex is option **b** and option **c** is Somatosensory Cortex | **The NAME is authoritative**: motor cortex is the only option that paralyses a limb, and the bank's own box says the *others* do "cognitive, sensory, and visual processing". Written as index 1 |
| `npqb-nr-26` | printed box names the **ventrolateral (VL)** nucleus as the thalamic relay for touch | VL is a **motor** relay; touch relays in the **ventral posterolateral (VPL)**. The box's conclusion is unaffected |
| `npqb-nr-28` | printed box says a basal ganglia lesion *"causes Huntington's disease"* | the causation is backwards — `L3) MOVEMENT DISORDERS` calls Huntington's *"an autosomal dominant hereditary disorder"* whose pathogenesis is atrophy **of** the caudate and putamen |
| `npqb-nr-29` | printed box only defines what hypertonia *is* | it never says why the answer is motor cortex then basal ganglia — it answers a different question |
| `npqb-nr-34` | printed box ends mid-flow with no full stop | transcribed as printed |

### ⚠️⚠️ THE LETTER/NAME MISMATCH IS A NEW DEFECT SHAPE AND IT CHANGES THE READING PROCEDURE

`npqb-nr-23` is the first key in this project whose **letter and name disagree**. Reading the letter
alone would have keyed *Somatosensory Cortex* for a question about limb paralysis — **a silently
wrong answer that no validator can ever catch**, because the entry would be perfectly well-formed.

**FROM NOW ON, CHECK EVERY ANSWER BOTH WAYS: resolve the letter against the option list AND read the
name the bank prints beside it.** All 34 answers so far were re-checked; **Q23 is the only mismatch**,
and in the three multi-answer keys the letters and names agree (the names are simply printed in the
other order).

**Transcription artefacts corrected silently** (the source's own typos, kept out of the app):
`Latera!` → *Lateral* (Q5b), `Trigimnal` → *Trigeminal* (Q6a), `spastisity` → *spasticity* (Q2c),
`dysdiadochokinesia)` stray bracket (Q4).

---

## 8. Verification after topics 01 and 02 — run 2026-08-12, all green

Node validator over all nine data files plus `modules.js`:

| Check | Result |
|---|---|
| Parse | all files parse; `Q_NEURO` = **31**, `C_NEURO` = **3** |
| Reaching the aggregator | all 34 in `QUESTIONS` with `module:'neuropsych'` |
| Bad module / chapter refs, duplicate ids, out-of-range answers, missing source/explanation | **0** |
| Case schema — `answer` a string, ≥1 key, every key with a label and terms | **0 faults** |
| **Reconciliation** | **34 printed (Q1–Q34) = 31 + 3 + 0 folded ✅**, ids 1–34 each present once |
| **Authored marker at the END of `explanation`** | **21** — unchanged from topic 01, **exactly as predicted**, because all twelve of topic 02 were boxed |
| **Marker wrongly in `source`** | **0** ✅ (the fault that cost ENT fourteen entries) |
| Chapters | `nr-intro` 22, `nr-cranial` 7, `nr-hemi` 4, `nr-movement` 1 = 34 ✅ |
| MCQ option counts | `{3:3, 4:27, 5:1}` — matches the printed pages |
| Dead backticked **neuro** ids | **0** |

**⚠️ A counter that did NOT move is only correct because it was PREDICTED not to move.** The marker
count held at 21 across a twelve-entry batch — which would be a red flag under any other
circumstances, and is the right answer here. **Always predict the delta before splicing.**

**Case grading was simulated against the real algorithm** (normalise, then any term of a key matching
scores that key). Results: full answers score 2/2, partial answers 1/2, wrong answers 0/2, and the
near-miss *"thalamus"* correctly scores **0/2** against `npqb-nr-27` rather than matching
*hypothalamus*.

**⚠️ The validator also reports dead backticked ids beginning `pedhd-`. They belong to the PEDIATRICS
chat's file mid-batch, not this module.** Do not touch them and do not treat them as a neuro failure.

## 9. Next concrete action

**Relaunch both subagent slots, then merge.** Topics 01–06 of Neurology and topic 15 of Psychiatry
are closed; the next two topics are the two slots in §6a.

- **Slot A → Neurology t07 "Headache", from Q119.** Topic 06's answers end on book p.26 and **PDF 32
  (book p.27) opens t07 at Q119** — confirmed by slot A's own one-past render, so the boundary is
  already known and needs no probing. Grounding deck: `L7) Headache`.
- **Slot B → Psychiatry t16 "Anxiety & Related Disorders", from Q19.** **PDF 73 (book p.68) opens it
  at Q19** — likewise already confirmed. Grounding: `L7) Anxiety disorders` plus `L4,5) Psychiatric
  symptomatology`.

**⚠️ Both boundaries were established by the mandatory one-page-past render. That is the whole reason
that rule exists — it pays for the NEXT topic, not the current one.**

**Standing checks for every batch from here:**

- **⚠️ Check each answer's LETTER against its printed NAME** (§7) — *where the bank prints a name at
  all.* Topics 05 and 06 print **bare letters**, so the check is simply unavailable there; say so
  rather than implying it passed.
- **⚠️ Repair every back-reference and restate every header vignette** — the deck is shuffled.
- **⚠️ Predict the authored-marker delta before splicing**, then confirm it moved by exactly that.
  Four batches running, four exact matches.
- **⚠️ Render one page past the last answer page.**
- **⚠️ Re-sweep a subagent's batch against everything spliced since it started reading** (§6a item 1).
- **⚠️ A multi-answer question goes to `cases.neuro.js`; a *combined* option ("e. C and D") stays an
  ordinary MCQ.** Both shapes appeared in topic 04.

---

## 10. Owed before this module can be called done

1. **`Neuro endpoint.pdf`** — not started. Prefix `npep-`. **Sample the first ten pages for
   structure before staging anything**; endpoint's ENT file printed every question twice at a rate
   that varied 42–100 % with no trend. **The moment endpoint entries exist, the cross-bank sweep
   becomes real for this module for the first time**, and `alsoIn` folds become possible.
2. **Grade Gain Neurology t07–t14 and Psychiatry t16–t23.**
3. **Theory notes for all 27 chapters** — in scope by the user's ruling of 2026-08-12, which
   overruled the brief's §9. One chapter per subagent once the banks are closed.
4. **⚠️ The five-option cap in `app\index.html` (§4a) is now WORSE than first reported.** Topic 06
   holds **six questions with TEN options**, and the bank's own printed letters for that matching set
   are **non-contiguous — A B C D E F J k L M** (G, H and I are skipped). So `'ABCDE'[i]` yields
   `undefined` beyond the fifth option, and even a corrected `String.fromCharCode(65+i)` would render
   index 6 as "G" where the book prints "J". **The option TEXT and the scoring are correct** — only
   the badge letter is wrong — and each entry's `source` records the printed letter as a fallback.
   **`index.html` is not this chat's file to edit. Still awaiting the user's decision.**
5. **Neurosurgery stays excluded** — the user's standing instruction, ~273 questions, book pp.94–136.
