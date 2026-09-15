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
| 04 | Hemorrhagic Cerebrovascular Stroke | 14 | 19 | 7 | **7** (Q55–61) | ✅ written |
| 05 | Cranial Nerves Disorders | **17–21** | **22–26** | 27 | **27** (Q62–88) | ✅ written — ⚠️ starts p.17, NOT p.14 |
| 06 | Hemiplegia & Paraplegia | 22–26 | 27–31 | 30 | **30** (Q89–118) | ✅ written (subagent A) |
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
| 15 | Symptomatology & Myths | 65–67 | 70–72 | 18 | **18** (Q1–18) | ✅ written (subagent B) |
| 16 | Anxiety & Related Disorders | 68–71 | 73–76 | 21 | **22** (Q19–40) | ✅ spliced 2026-08-31 |
| 17 | Mood Disorders | 72–75 | 77–80 | 22 | **23** (Q41–63) | ✅ spliced 2026-09-02 |
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

## 4a. ✅ RESOLVED 2026-09-02 — `app\index.html` no longer caps options at five

**Raised 2026-08-12** when topic 03 produced the project’s first questions with more than five
options — Q43 prints **nine** (a–i) and Q51 **eight** (a–h) — and made worse by topic 06’s six
ten-option questions. The shell assumed at most five in three places, all `'ABCDE'`, which is
`undefined` past index 4: the letter badge, the verdict line (**“the answer is undefined”**), and
the keyboard handler (options F+ were mouse-only).

**Fixed by the watch chat on the user’s explicit instruction, 2026-09-02.** A single
`const OPT_LETTERS='ABCDEFGHIJKLMNOPQRSTUVWXYZ';` now feeds all three sites. Per the user’s
ruling, **letter keys pick any option that is actually shown**, so on a question displaying A–J
the F and J keys select options F and J rather than flag/jump; flag and jump are untouched
everywhere else and return once the answer is revealed. Verified with `node --check` on all 19
script blocks and a node harness on the real data: `npqb-nr-113` letters **A–J** and reveals
**“the answer is F — Parkinson’s disease”**.

✅ **Settled — see item 4 in §10:** the letters are POSITIONAL, and this bank’s printed keys
for the topic-06 matching set are not. **`index.html` remains outside this chat’s scope** — the
edit was the watch chat’s, not a licence to edit it here.

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
4. **✅ The five-option cap in `app\index.html` (§4a) was FIXED 2026-09-02 — one caveat left.**
   Options now letter A–Z, so topic 06’s six ten-option questions render and score correctly and
   no longer print “the answer is undefined”. **The caveat:** the app letters by POSITION, while
   this bank prints the gait set’s keys **non-contiguously — A B C D E F J k L M** (G, H, I are
   skipped). Measured against the data 2026-09-02: `npqb-nr-113` app **F** = printed **F**,
   `-116` **B**=**B**, `-118` **D**=**D**, but `-114` app **I** vs printed **L**, `-115` **H** vs
   **K**, `-117` **G** vs printed **J**. **Option text and scoring are right in all six**; only
   the badge differs, and every entry’s `source` records the printed key. Mirroring the book
   needs per-question letter data plus a renderer change. ✅ **The user ruled 2026-09-02: leave
   the letters as they are.** Positional lettering is the accepted behaviour — **do not re-open
   this and do not report the mismatch as a defect.** Keep recording the printed key in `source`.
5. **Neurosurgery stays excluded** — the user's standing instruction, ~273 questions, book pp.94–136.

---

<!-- RESUME-READ-FROM-HERE -->
## 2026-08-31 — Chat B picked this module up. Two findings before any new reading.

**Live state re-measured from disk** (id-prefix count, not derived): `questions.neuro.js` = **151 MCQs**
(`npqb-nr` 133, `npqb-ps` 18) + `cases.neuro.js` = **7 cases** = **158**. Section 6 above is stale: it
records 129 + 7 = 136. The difference is **Neurology t07 "Headache" (Q119-Q140, 22 entries), which WAS
merged** — section 6a still lists it as "not yet launched". Update section 6 at the next consolidation.

**⚠️ `content/neuro/qb-pages/gg-ps-t16.draft.js` IS A FINISHED, UNMERGED BATCH.** Psychiatry topic 16
"Anxiety & Related Disorders", **22 entries, `npqb-ps-19` through `npqb-ps-40`**, complete with its
verbatim `.array.js` staging. It is untracked in git and absent from the live file — a whole batch of
paid-for work sitting on disk. **Sweep, fold, splice and validate it before drafting anything new.**

Its staging header already records what the one-past render found, so the next boundary is free:
- Topic 16 printed **22** questions (Q19-Q40) against a promise of 21 — **the bank errs downward again**,
  exactly as section 3 predicts.
- Book pp.68-70 = PDF 73-75, answers on book p.71 = PDF 76. Offset PDF = book + 5 holds.
- **PDF 77 (book p.72) is entirely topic 17 "Mood Disorders", opening at Q41.**

**OCR route:** the WPS pipeline was checkpointed on the Pediatrics House bank, not on this one — full
measurements and defect list in `progress/resume-peds.md` under *2026-08-31 WPS OCR CHECKPOINT*. Two
things carry over directly: **superscripts flatten and can come back as a plausible WRONG digit**
(a 10⁶ read as 10⁹), and **junk digit runs glue onto printed question numbers**. This bank is single-page
A4 portrait, so it needs no half-sheet cropping — the reading-order scramble that forced cropping on
Pediatrics does not apply here.


---

## 2026-08-31 — topic 16 SPLICED. Live neuro corpus 151 -> 173 MCQ.

The finished-but-unmerged batch found at the start of this session is now in
`app/data/questions.neuro.js`. It was swept before splicing, not after.

**Six-stage duplicate sweep, 22 draft entries against 151 live: ZERO folds. Here is why that
zero is a zero, and how it was measured.**

| Stage | Test | Result |
|---|---|---|
| A | Exact normalised stem match against every live entry | 0 |
| B | Identical normalised option SET (order-insensitive) | 0 |
| C | Stem token Jaccard >= 0.60, >3-char tokens | 0 |
| D | Intra-draft stem and option-set collisions | 0 |
| E | Id collisions; chapter ids resolve against `MODULES` | 0 collisions; `ps-anxiety`, `ps-ocd`, `ps-pharm`, `ps-devices` all resolve (36 neuropsych chapters) |
| F | Hand-read of the ranked near-miss list | no fold |

**The ranking is the instrument, so here is the top of it.** Highest stem similarity in the whole
22 x 151 grid was **0.429**, `npqb-ps-32` against `npqb-ps-14`. Every shared token is the
interrogative frame — *"Which of the following is a common symptom of..."* — and the two differ on
the only word that carries content (**mania** vs the anxiety item). That is the standing
shared-template rule: **a shared frame PAIRS questions, it never folds them.** The next three
ranked pairs are all `npqb-ps-27` against three different live stems at 0.400-0.333, again on the
frame alone. Highest OPTION similarity anywhere was **0.400**, and it is cross-section
(`npqb-ps-38` vs `npqb-nr-58`, a neurology CT question) - not a candidate. **No pair anywhere in
the grid reached the 0.60 threshold**, so stage C printed nothing; that is an empty result from a
threshold that was actually applied, not a check that was skipped.

**Marker delta predicted BEFORE the splice and confirmed after.** The draft header declared 6
boxed printings (Q21, Q25, Q26, Q31, Q33, Q38) needing no authored marker, so 22 - 6 = 16 new
markers. Live markers went **106 -> 122**, exactly +16. Zero markers in any `source` field.

**Post-splice validation:** 173 entries, 0 sparse holes (indexed with `for i / !(i in A)`, never
`filter`), 0 out-of-range `answer`, 0 duplicate ids, and `npqb-ps-` ids now run **1-40 contiguous
with no gap and no repeat**. Option counts in the batch: 20 x 4, 1 x 3, 1 x 5.

**⚠️ CARRIED FORWARD FROM THE ARRAY HEADER, NOT RE-TESTED HERE.** Topic 16's answer key prints
**bare letters with no names beside them**. The letter/name cross-check that caught the
`npqb-nr-23` mismatch is therefore **unavailable for this entire topic — it was not performed and
must not be reported as having passed.** If a key in Q19-Q40 is ever disputed, that is the missing
instrument.

**Convention correction.** I had planned to delete `gg-ps-t16.draft.js` after splicing. The
directory says otherwise: `gg-nr-t07.draft.js` (90.6K) is still present and tracked long after t07
was merged. **Drafts are kept and committed, not deleted.** Both `gg-ps-t16.array.js` (verbatim
staging, preserving the source's own typos on purpose) and `gg-ps-t16.draft.js` stay.

**File-format note for anyone writing a grep here.** The live file was uniformly double-quoted
(`"id": "npqb-nr-1"`); the spliced batch is single-quoted (`id:'npqb-ps-19'`). **The file is now
mixed-style.** Any id regex must be the tolerant form — `/["']?id["']?\s*:\s*["']([a-z0-9-]+)["']/`
— because a pattern written for either style alone returns a silent, plausible undercount.

**Next boundary, already established by the array header and not re-derived:** topic 17
"Mood Disorders" opens at **Q41** on PDF 77 (book p.72). Offset PDF = book + 5 still holds.

## 2026-08-31 — the neuro bank is rendered (142/142) and mapped; OCR is rate-limited, not exhausted

**All 142 pages rendered** to the session scratchpad at `nb/p-001.png` … `p-142.png`, 200 dpi.
OCR has produced only 2 of them so far. The blocker is WPS exit 429.

**⚠️ CORRECTION — 429 IS NOT A DAILY QUOTA.** `MEMORY.md` and `tools\wps-ocr-reference.md` both
record exit 429 as "daily OCR quota exhausted — that is the finding, do not retry". Measured
directly on 2026-08-31 with a single-page probe (`p-020.png`), the response body is:

    {"type":"error","code":"429","message":"The operation is too frequent, please try again later."}

That is **rate limiting**. The allowance is not gone. The agent's own driver log proves it
recovered without any wait for a day boundary: five 429s on `p-001` at 18:03:43, a restart at
18:05:22, then `OK p-001 tries=3`. Two chats are running against the same WPS login today, so the
account-wide request rate is roughly double what either driver believes it is issuing.
**The correct response is pacing with backoff, not stopping.** A paced driver is now running.
Fix the 429 line in `MEMORY.md` and in `tools\wps-ocr-reference.md` at the end-of-run
consolidation pass — not mid-run, per the parallel-chat rule.

**The structural map is recovered and it is authoritative** — read from the rendered page images,
not from OCR. Full map in the scratchpad at `nb-anchors.txt`; the load-bearing facts:

- **Bank = Grade Gain.** Cover (PDF 1) prints "QS BANK + GRADE GAIN EDITION". Not House, not
  endpoint. Confirmed by cover, per the identify-by-the-cover rule.
- **ONE book page per sheet**, A4 portrait 595x842 pt, two-column text inside each page. This bank
  is **not** 2-up like the peds House bank — do not carry that arithmetic across.
- **⚠️⚠️ THE PAGE OFFSET IS NOT GLOBAL.** Neuropsychiatry half: PDF = book + 5 (verified PDF 77 =
  book 72, PDF 98 = book 93). Neurosurgery half: **PDF = book + 7** (verified PDF 101 = book 94).
  The cause is two unnumbered neurosurgery contents pages at PDF 99-100. The single global "+5"
  in `MEMORY.md` is correct only for the in-scope half; applied to the back half it misfiles every
  citation by two pages.
- Layout: PDF 1 cover / 2 blank / 3-5 neuropsychiatry contents / **6-98 neuropsychiatry body
  (book 1-93)** / 99-100 neurosurgery contents, unnumbered / 101-140 neurosurgery body /
  141 blank / 142 back-cover advert.
- **In-scope = PDF 6-98. SKIP PDF 99-140 — neurosurgery, out of scope.**
- **Two independent numbering runs, both continuous ACROSS topics.** Neurology block (topics 01-14,
  book 1-64, PDF 6-69) starts at Q1. Psychiatry block (topics 15-23, book 65-93, PDF 70-98)
  **restarts at Q1** and ends at Q165 on book p.93.
- **Topic 17 Mood Disorders opens at Q41 on PDF 77 / book 72 — ANCHOR CONFIRMED** independently.
- ⚠️ **The contents page's per-topic counts are unreliable** — the psychiatry counts sum to 157
  but the block ends at Q165. Same defect shape as every other bank in this project: trust no
  printed count. The contents also prints book page 14 twice (topics 04 and 05).
- Answers print as `<n>. Correct Answer: (X)` with an optional `Explanation:` prose block, and
  **may share a page with the tail of that topic's questions** (questions in the left column,
  answers in the right) — e.g. PDF 98. Do not assume answers begin on a fresh page.
- **No OSCE material** in the contents or in any sampled page. (User deferred OSCE 2026-08-31.)

**23 neuropsychiatry topics, book page / printed q-count:** 01 Neurological Sheet 1/22 ·
02 Localization 4/12 · 03 Ischemic CVS 7/20 · 04 Hemorrhagic CVS 14/7 · 05 Cranial Nerves 14/27 ·
06 Hemiplegia & Paraplegia 22/30 · 07 Headache 27/22 · 08 Epilepsy 31/36 · 09 Coma 37/22 ·
10 Movement Disorders 41/23 · 11 Demyelinating 46/16 · 12 Neuromuscular 50/45 ·
13 CNS Infections 57/20 · 14 Back & Lower Limb Pain 61/23 · 15 Symptomatology & Myths 65/18 ·
16 Anxiety & Related 68/21 · 17 Mood Disorders 72/22 · 18 Somatic Symptoms 76/11 ·
19 Child Psychiatry 79/14 · 20 Schizophrenia 82/26 · 21 Dementia & Delirium 86/18 ·
22 Substance-related & Pharmacology 89/16 · 23 Emergency, Devices & Psychotherapy 92/11.
**These counts are the contents page's claim, not a measurement** — the sum defect above is proof.
Count every topic by reading its answered pages, per the standing rule.

---

## 2026-09-02 — topic 17 "Mood Disorders" STAGED, DRAFTED AND SPLICED: 173 → 196

Staged by one agent from PDF 77–80 (book 72–75), drafted by two in parallel (Q41–52, Q53–63),
checked from disk before the splice and again after. `npqb-ps-41` … `-63`.

### ⚠️ The topic printed 23, not the promised 22

The contents page promises **22** for topic 17. It prints **23**, Q41–Q63 continuous, measured by
reading every answered page. This is the fourth count defect in this bank (psychiatry counts sum to
157 against a printing reaching Q165; book page 14 printed twice; House printed chapter 9 twice).
**The next topic's promised count is a claim, not a measurement** — topic 18's promised 11 must be
measured the same way. Topic 18 should therefore open at **Q64 on PDF 81 / book 76**; if it opens
anywhere else, that is a finding about topic 17's count, not about topic 18.

### Duplicate sweep — ZERO folds, and here is how that zero was measured

23 staged × 173 live = **3,979 cross pairs, plus 253 intra-draft self pairs.** Stages A–F all ran.
A, B, D, E, F all returned **0**. Stage C (stem token Jaccard, ranked) topped out at **0.500**
against a 0.60 fold threshold — nothing at or above it. **The ranking is the instrument**, and the
top of it was still a fifth clear of the line.

### Validation after the splice

| check | result |
|---|---|
| entries / sparse holes | **196** / 0 (indexed `for i / !(i in A)`) |
| unique ids | 196 of 196, 0 dupes; `npqb-ps-1`…`-63` contiguous |
| stems / options / keys / `source` vs `GG_PS_T17_STAGED` | **23 of 23 compared** — BAD **0** on all four |
| `answer` in range | BAD 0, across all 196 |
| chapter tokens resolve | 17 distinct, **0 unresolved** — adds `ps-mood` ×22 and `ps-pharm` ×1 (Q47), both already live |
| authored markers | 122 → **140**, delta **+18** exactly as predicted (23 − 5 boxed) |
| boxed entries carrying a marker | **0**, and 0 unboxed entries missing one — checked in both directions |
| markers in any `source` | 0 |
| images | 2, both present on disk, imgAlt non-empty (topic 17 prints no figures of its own) |
| cross-references | 57 found, **0 dead ids** |
| `node --check` | passes |
| every array reloaded | ENT 2240 + 82c · ophtho 1399 · peds 126 · neuro **196** + 7c, **0 holes anywhere** |
| `python tools\count-options.py` | neuro 196; the >5-option set is still exactly the known 8 (`nr-43`, `-51`, `-113`–`118`) |

**Corpus 4,027 → 4,050.** Explanation length, measured from disk with a tight counter: min 288,
median 340, max 559, **0 over the 620 ceiling** — the first topic in this project to land entirely
inside budget without an accepted overshoot.

### ⚠️ The drafting brief's predicted gaps were NOT gaps — third time this has fired

The brief's §8 named the depressive gender ratio (Q58), the DSM melancholic specifier (Q59) and the
bipolar gender ratio (Q42) as obvious gaps needing an outside fill. **All three are printed
verbatim in `L9,10) Mood disorders`** — `Female: Male=2:1` in the epidemiology table, and
melancholia in a full sentence (*"diurnal variation of the mood or its non-reactivity, guilt, and
middle, late insomnia or early morning awakening"*). Both agents grepped, found them, and correctly
declined to tag. **Only the *aetiology* of the female excess is genuinely absent.**

**A brief's gap prediction is a guess; the grep is the measurement.** Do not let a brief authorise
an outside-knowledge tag — 8 tags were written across 6 entries, and every one survived a token
grep across all 25 cached lecture files (`brief psychotic`, `acute and transient`, `reactive
psychosis`, `schizophreniform`, `psychic`, `nihilis`, `Cotard`, `borderline`, `personality
disorder`, `steroid`, `amphetamine`, `cocaine`, `stimulant`, `compliance`).

### Two key caveats RECORDED, neither corrected, no `answer` moved

1. **Q55** — the vignette states only two of the seven manic criteria, where an irritable-mood
   presentation requires four. Noted in `explanation`; keyed as printed.
2. **Q56** — *"few days back"* does not clearly reach the one-week manic threshold, and brief
   psychotic disorder is a real competitor. Noted; keyed as printed. Its typo
   `"Brief psychic reaction"` is preserved and explained.

**The answer key prints bare letters with no names beside them**, so the letter/name cross-check
that caught the *"C. Motor Cortex"* defect **was unavailable for this whole topic.** It must never
be reported as having passed. The staging record's own header says the same independently.

### ⚠️ Renders do NOT survive the session — `MEMORY.md` is stale on this

`MEMORY.md` records "all 142 pages rendered". **That scratchpad is gone.** This session's `nb\`
holds 13 files (PDF 77–82 plus crops). **List the directory before assuming any page is on disk**;
re-render what is missing. Fix the line at the consolidation pass.

### Notes for whoever takes topic 18

- Boundary, already measured and not to be re-derived: **topic 18 "Somatic Symptoms & Related
  Disorders" opens at Q64, PDF 81 / book 76**, and runs to PDF 83 / book 78. Topic 19 "Child
  Psychiatry" is the overrun check on PDF 84.
- **PDF 81 and 82 are already rendered** in `nb\`; 83 and 84 are not.
- Answers for topic 17 printed on **book p.75**, sharing the page with the tail of the questions —
  questions in the left column, answers in the right. **Do not assume answers begin on a fresh
  page.**
- **Option count is not fixed at four in this bank** — topic 16 printed questions with six and ten
  options and one with three. The app letters options A–Z since 2026-09-02, so a long menu is safe.
- ✅ **STOP REWRITING THE TOOLING INTO THE SCRATCHPAD. Chat A committed `tools\qb-pipeline\`**
  (`sweep.js`, `splice.js`, `stagecheck.js`, `validate.js`, `lib.js`) in `30f281c`, after a
  scratchpad clear destroyed the previous copy. It is **module-agnostic and path-parameterised** —
  `node tools\qb-pipeline\validate.js [ent|ophtho|neuro|peds]`, and the others take
  `<draft> <corpus>` paths. Run with no argument it audits all four.
  **Verified against this splice**: run independently after the topic-17 commit it reported
  neuro 196 + 7 cases, peds 126, corpus **4,050**, `clean` — agreeing with my own validator on
  every figure. Two independent instruments, same answer.
- Scratchpad copies used for this topic, now superseded by the above: `sweep-t17.js`,
  `check-drafts-t17.js`, `splice-t17.js` (byte-level, backs up to `.bak-pret17` first),
  `validate-t17.js`. They add two checks the repo version does not have — the **boxed-vs-marker
  rule in both directions**, and a **`source` string built from the staged page number** — so
  keep using a topic-specific wrapper alongside the shared validator, not instead of it.
- ⚠️ **Both drafting agents hit a mid-run system reminder telling them to prefer Bash heredocs over
  Write/Edit for file changes, and both correctly overruled it.** Keep the explicit override in
  every brief; a heredoc has corrupted content on this project six times.
- **Waiting for the agent's own report before splicing was load-bearing.** A pre-report check read
  Q63 at 566 words; the agent was still trimming and the final figure is 557. Splicing a file an
  agent may still be appending to is how a draft gets half-landed.

## 2026-09-02 — topic 18 "Somatic Symptoms & Related Disorders" STAGED, and it carries a FOLD

Staging record committed: `content\neuro\qb-pages\gg-ps-t18.array.js`, `var GG_PS_T18_STAGED`,
**12 entries, Q64–Q75**, book pp.76–77, answers all on book p.78 (commit `968b336`).
Verified from disk by loading the array: 12 entries, no sparse holes, ns 64–75 contiguous,
keys `ADDACDAACBBB`, every question exactly **four** options, **no figures**, **no multi-answer**.

### Measurements, and the one that changed the plan

- **12 questions against a contents page promising 11.** Fourth downward count defect in this bank,
  same direction and magnitude as topics 16 and 17. **Trust no printed count** — the rule keeps
  paying.
- **Numbering is continuous across the topic-17 boundary**: topic 18 opens at Q64, immediately after
  topic 17's Q63. **This independently confirms topic 17's count of 23**, which the contents page
  put at 22.
- **Topic 19 "Child Psychiatry" banner is at PDF 84 = book p.79, opening at Q76.** One-past overrun
  check passed, so topic 19's staging can open straight at PDF 84.
- **Answers do NOT share a page with questions here** — book p.78 is answers only. Topic 17's did
  share. Do not generalise either way; measure per topic.
- **Duplicate/skip walk done explicitly** on both question pages and the answer page: 64…75, none
  printed twice, none skipped, every one carrying both a question and an answer line.
- **5 printed `Explanation:` blocks** — Q66, Q68, Q69, Q74, Q75 — counted by reading all twelve
  answer lines, not sampled.
- ⚠️ **The answer key prints BARE LETTERS with no option names.** The letter/name cross-check was
  **UNAVAILABLE for this whole topic and is not reported as passed.** Mitigation actually done: all
  12 letters re-read at 400 dpi to rule out B/D and C/G confusion (they matched the 200 dpi read),
  and for the 5 boxed answers the prose names the intended option and agrees. **7 of 12 keys have no
  corroboration of any kind.**

### ⚠️⚠️ Q69 IS A CROSS-CHAPTER EXACT REPRINT — folded, not entered

The six-stage sweep (12 × 196 = 2,352 cross pairs + 66 self) returned **one real fold**:

- **`t18-Q69` vs live `npqb-nr-122` — stem Jaccard 1.000, identical option set, same key (D).**
  The bank prints this question **twice**: book p.27 in the neurology run (already live as
  `npqb-nr-122`, chapter `nr-headache`) and again at book p.76 in psychiatry topic 18. Same bank
  both times, so **no `alsoIn`** — this is fold shape 5, cross-CHAPTER exact, and it is the seventh
  fold shape seen. **`npqb-ps-69` must never exist.** The drafting agent was told mid-run to skip it.
- ⚠️ **The two printings are not identical in what they carry: the p.76 printing prints an
  `Explanation:` box and the p.27 printing does not.** So `npqb-nr-122`'s authored-explanation
  marker is now factually wrong for the bank as a whole. **At splice time: fold the p.76 citation
  into `npqb-nr-122.source`, add the printed box verbatim, and REMOVE the marker from that entry.**
  Its 516-word authored explanation is much the fuller of the two and stays.
- Net effect on the marker count: **+7 from the new entries, −1 from `npqb-nr-122` = +6.**
  Entry count goes **196 → 207**, not 208.

Other sweep results, and why each zero is a zero: stage A exact stem **0**; stage B Levenshtein ≤3
**0**; stage C, apart from the Q69 hit, tops out at **0.273** (`t18-Q67` vs `npqb-ps-24`) against a
0.60 threshold; stages D and E returned only the Q69 pair. Option-similarity's next-highest after
Q69 is 0.500.

**Stage F flagged `t18-Q65` vs `t18-Q70` at 0.600 — inspected, and it is a PAIR, not a fold.**
Q65 asks *"Types of somatoform disorders include:"* (key D, `All of the above`); Q70 asks
*"Somatoform disorders include all of the following, EXCEPT:"* (key A, `Acute stress disorder`).
Positive and negative framings of one list, different keys, and the discriminating token is
`Acute stress disorder`, which appears in only one of them. **A shared subject pairs questions; it
never folds them.**

### Sourcing measured before the drafting brief was written

`content\neuro\lectures\` holds **25 decks**, and **`L3) Somatization.txt` (10,816 bytes) is a
dedicated deck for exactly this topic** — the only file hitting `hypochondria|illness anxiety`,
`factitious` and `pain disorder`, and it also hits `somatoform|somatic symptom`, `conversion`,
`malinger`, `body dysmorphic`, `la belle`, `suggestion`, `placebo` and `reassur`. **This topic is
well covered; expect citations, not gap-fills.**

**The one measured zero:** `abreaction`, `amytal`, `amobarbital`, `narcoanalysis` and `saline` all
return **0** across all 25 decks. Q68 and Q69 both turn on a 3-cc saline injection, so the specific
technique may need filling — but the deck may teach the principle under `suggestion` or `placebo`,
which is exactly how the last three gap predictions turned out to be wrong.

### Source defects preserved (do not "fix" these later)

Q68 comma splice with a capital T (`…her fiancé, The most immediate…`) · Q69 lowercase sentence
starts inside the quoted speech, and option a opens with a **curly** double quote and closes with a
**straight** one · Q74 prints `All here investigations were normal` · Q75's printed Explanation ends
with **no full stop**, on the word "disorder" · Q67, Q70, Q73 print `TRUE`/`EXCEPT` bold and
underlined, emphasis not carried · the bank hyphenates inconsistently, `3-cc` in Q68 and `3 cc` in
Q69.

⚠️ **`box` in this staging record is NOT a boolean** — it is `null` when no Explanation is printed
and the **verbatim prose** when one is. That matches `gg-ps-t17.array.js`, which is the precedent,
but it contradicts the boolean shown in the staging brief's own example. The brief was wrong; the
precedent won. Any downstream check must treat `box` as truthy/falsy, never as `=== true`.

### What the staging brief got wrong

The geometry table predicted PDF 83 = "topic 18 body / tail"; **PDF 83 is the answers page** and the
questions stop on PDF 82. It also warned of drug doses and symptom counts that are not printed —
the only numerals are two saline volumes and a handful of ages and durations, all read at 400 dpi.
**Show-through was checked**: faint mirrored text behind the p.78 Answers banner reverses to
"…ADHD recently. His mom wants to know the…", which is Q80 on the reverse of the leaf. Nothing
transcribed from it.

### The Q69 fold is APPLIED and committed — do not redo it (`92cbc3b`, 2026-09-02)

`npqb-nr-122` has already taken the fold, ahead of the topic-18 splice, because it is independent
of it. Verified after the edit by loading the array: **196 entries, 0 sparse holes**, `answer` 3,
4 options, the marker gone from that entry, `p.76` present in its `source`, and **139 marker-bearing
entries** across the file (was 140).

- `source` now carries both citations and states in words that the second printing is the same
  bank, so **no `alsoIn` and no second entry**.
- The authored 516-word explanation stays — it is the fuller of the two. The p.76
  `Explanation:` box is quoted verbatim at its foot and attributed to p.76.
- The authored marker was **removed** from that entry: the bank does print an explanation for this
  question, just on the other page, so the marker had become a false statement about the bank.

**Consequence for the splice still to come:** the topic-18 drafting agent was told mid-run to skip
Q69, so its file should hold **11 entries (Q64–Q68, Q70–Q75)** and **four** boxed ones (Q66, Q68,
Q74, Q75). Splice takes `questions.neuro.js` **196 → 207**, not 208. If the file arrives with 12
entries, the mid-run message did not land — drop `npqb-ps-69` at splice time rather than shipping a
duplicate.

### Topic 19 "Child Psychiatry" — staging launched 2026-09-02

Brief written from the topic-18 agent's own boundary measurement: banner at **PDF 84 = book p.79,
opening at Q76**, running to book p.81 (PDF 86), one-past check at **PDF 87 = book p.82** where the
topic 20 "Schizophrenia" banner is expected. Contents promises **14** — and it has undercounted four
times running, so that is a prior, not a measurement. The brief carries three corrections earned
the hard way: `box` is prose-or-`null` and **not a boolean**; the questions may stop before the
topic's last book page (topic 18's did, and the brief's table was wrong about it); and reprints
exist in this bank, so a familiar-looking question is to be flagged and still transcribed in full.

### 2026-09-02 — topic 18 SPLICED AND COMMITTED (138067c). questions.neuro.js is 207.

Eleven entries, npqb-ps-64 to -68 and -70 to -75, all chapter ps-somato. Eleven
and not twelve: Q69 folded into npqb-nr-122 in 92cbc3b, cross-chapter, same bank,
so no bank was added and no second entry made.

Measured after the splice: 207 entries · 0 sparse holes (indexed, not filtered) ·
0 duplicate ids · no npqb-ps-69 present · all 11 new ids found · 0 shape problems ·
ps-somato resolves · 0 unresolved chapter refs in the file.

⚠️ **House style for a boxed entry is SETTLED: attribution line + blockquote.**
Eleven of the shipped npqb-ps- entries use it; ZERO use the woven form. My t18
brief told the agent to weave, which was wrong, and four entries (-66, -68, -74,
-75) were reshaped to the attributed form before splicing. Do not re-litigate.

Q67 is the topic's one key-vs-lecture divergence — printed key "More common in
females" against L3's "Male=female". Recorded in explanation; the answer did not
move.

### Topic 19 staging RELAUNCHED 2026-09-02

The first t19 staging agent died on a usage limit. Its file gg-ps-t19.array.js was
on disk but held **one entry** (n:76) — measured by loading the array. Relaunched
clean with an instruction to overwrite.

⚠️ **Lead, not a measurement:** that agent's dying words were "All 15 keys
confirmed at 400 dpi" — **15 against a contents page promising 14**. If the new run
also measures 15 that is the FIFTH consecutive downward count defect in this bank.
The new agent was told not to bend its reading toward the earlier claim.

### The "12 nr-intro/nr-exam debt, npqb-nr-14 first" line in MEMORY.md is WRONG on both halves (measured 2026-09-02)

Measured by loading Q_NEURO and filtering on chapter plus the tag phrase:

- **Eleven**, not twelve, entries in `nr-intro`/`nr-exam` carry the
  "not taken from the course material" tag: `npqb-nr-10, -13, -17, -18, -19,
  -20, -21, -22, -26, -32, -33`.
- **`npqb-nr-14` is NOT one of them.** It carries no tag at all. It is a
  DEFECTIVE-KEY note — the bank keys "Right lower optic radiation" for a
  homonymous inferior quadrantanopia, where an inferior field defect comes from
  the superior (parietal) radiation. Recorded in `explanation`, answer unmoved,
  per the standing ruling. MEMORY.md conflated the two.

Also, whole-corpus check run the same day: **QUESTIONS 4,162** (ENT 2,322 ·
ophtho 1,485 · neuropsych 214 · peds 141; 89 cases, 4,073 MCQs), 0 sparse holes,
0 duplicate ids corpus-wide, 0 unresolved module or chapter refs against 4
modules / 153 chapter ids, 0 answers out of range. Ophtho's 1,485 is Chat A's
work, not mine.

**The debt itself is NOT started.** What "the book can replace" refers to is
ambiguous — if it means the endpoint neuro book, that is off-limits under the
deferral ruling. Resolve the source before anyone spends on it.

### 2026-09-02 — topic 19 "Child Psychiatry" STAGED (15), and the fifth low count is now EVIDENCED

`content\neuro\qb-pages\gg-ps-t19.array.js`, 17,141 bytes, `var GG_PS_T19_STAGED`.
Verified independently from disk after the agent reported: **15 entries, 0 sparse
holes, `n` contiguous 76-90, `p` a NUMBER (79 or 80), every question exactly FOUR
options a-d, all 15 keys resolving inside their own option list, boxes on 77, 80,
89, 90.** Keys, in order: B D A B D B B B B B C B C D B.

- **Contents page promises 14; the book prints 15.** Fifth consecutive topic where
  the printed count runs LOW, and every one of the five is low, never high. The
  earlier dead agent's "15" is now backed by evidence it never got to write: the
  run was walked one number at a time on both question pages and independently on
  the answer page, nothing printed twice, nothing skipped.
- **PDF 84-87 = book pp.79-82**, offset PDF = book + 5 re-confirmed off the printed
  folio on all four sheets. Questions occupy **pp.79-80 only**; **p.81 is the
  answers page and carries no questions**; the one-past sheet p.82 opens
  "Schizophrenia / Questions" at **Q91**, so nothing overruns and topic 20 starts
  clean at 91. Topic 18's count of 12 is corroborated by Q76 opening exactly where
  Q75 left off.
- ⚠️ **THE KEY LETTER/NAME CROSS-CHECK WAS NOT AVAILABLE AND MUST NOT BE RECORDED AS
  PASSED.** Every answer line prints only "Correct Answer: (X)" with no option name
  beside it. The topic is B-heavy - 9 of 15 - which is exactly the signature a
  systematic B/D misread would produce, so all 15 letters were re-read from 400 dpi
  crops and matched the 200 dpi read letter for letter. The 4 Explanation boxes name
  their option in words and all 4 agree. **11 keys have no corroboration of any kind.**
- **Zero exponents, lab values and doses in the whole topic** - measured by reading
  every stem and option, not by searching. The four drug questions name agents only.
- **Two defects, recorded not corrected.** Q79's keyed option prints "more than two
  settings" where DSM-5 says "two or more" - a stricter, different claim, so the key
  points at a mis-stated option; the answer does not move. Q89's printed box
  attributes "fidgeting" and "difficulty waiting his turn" to a child whose stem
  says neither.
- **Two template PAIRS, flagged not folded.** Q83/Q88 share a drug and three option
  strings but key differently (B vs C). Q83/Q84 differ only in the agent named. A
  shared option menu pairs questions; it never folds them.
- **The staging brief was wrong about PDF 86** - it predicted body-and/or-answers;
  the sheet is answers only. Same shape of error the topic-18 brief made about its
  own last row. Third brief in a row wrong about a page boundary.

Drafting agent launched the same day against `t19-draft-brief.md`, output
`gg-ps-t19.draft.js`, ids `npqb-ps-76` to `-90`.

### 2026-09-02 — topic 19 DRAFTED and SPLICED. questions.neuro.js is 222.

15 entries, `npqb-ps-76` to `-90`. Validated against the staging record before the
splice and again after it, by me and not only by the drafting agent: stems byte
identical, option arrays byte identical, every `answer` equal to the staged key's
index, 0 sparse holes, 0 unresolved chapter refs, 0 markers in `source`, 4 boxed
entries carrying the box text inside a blockquote and NO marker, 11 authored
entries with the marker as the final characters. Splice 851,376 -> 919,179 bytes.
After: **222 entries**, 0 holes, 0 duplicate ids, 15/15 new ids, 0 answers out of
range.

- **Chapters: `ps-child` 12, `ps-pharm` 3.** The three moved are `-83`, `-84`, `-88`
  — each asks for an agent's adverse-effect or monitoring profile, the subject the
  shipped `npqb-ps-23`/`-47` establish for `ps-pharm`. **`npqb-ps-82` stayed
  `ps-child`** on content: it tests ADHD *management* (which class is first-line),
  and `L17) Psychopharmacology` never names an ADHD agent at all.
- **`npqb-ps-90` stays `ps-child` although it is an OCD item and `ps-ocd` exists** —
  the topic groups by teaching topic, and the question's work is diagnostic
  recognition in a 12-year-old. Flagged by the drafting agent, decided here. Not a
  bug; do not re-open without a reason.
- **Q88 is a second divergence the staging pass did not catch.** The printed key is
  "Liver impairment", which is **atomoxetine's** warned risk; what methylphenidate
  needs monitoring for is blood pressure, pulse and growth, so the printed
  distractor "Hypertension" is pharmacologically the stronger answer. Recorded in
  `explanation` with two honest defences of the printed key. **The answer did not
  move.** Q79's "more than two settings" defect recorded as planned.
- **Q77's printed box is INCOMPLETE** — it omits social (pragmatic) communication
  disorder, which `L14` lists among the four communication disorders. Noted after
  the blockquote; the box itself untouched.
- **A THIRD template group exists that no brief listed:** Q76 / Q78 / Q87 share a
  distractor pool of neurodevelopmental disorder names. Paired by menu, not folded —
  discriminating tokens named in each entry, as for Q83/Q88 and Q83/Q84.
- ⚠️ **My brief contradicted itself on the `source` tail** — it gave
  `p.79 (topic 19 Q76)` while also saying to match `gg-ps-t18.draft.js`, which
  writes `p.76 (answer p.78)`. The agent followed the shipped file and was right:
  `p.79 (answer p.81)` for Q76–Q84, `p.80 (answer p.81)` for Q85–Q90.
  **When a brief and a shipped file disagree, the file wins.**
- **Gaps filled and tagged, each with the grep that established it:** ADHD's
  cross-setting criterion · ADHD prognosis · ADHD comorbidity including ODD
  (`conduct disorder|oppositional` returns **zero hits in the whole lecture folder**)
  · methylphenidate and atomoxetine adverse-effect profiles · combined behaviour
  therapy plus medication · provisional vs persistent tic categories.
  **Confirmed NOT gaps, so untagged:** clomipramine for OCD (`L8`), propranolol
  (`L3) MOVEMENT DISORDERS`), alprazolam (`L17`). Phenobarbital genuinely is not
  named — the decks say only "barbiturates" — and the entry says so.

**Next in this bank: topic 20 "Schizophrenia", book pp.82–85, PDF 87–90, opening at
Q91.** The contents page promises 26; five consecutive topics have run low, so
measure it. ⚠️ Its Q98 prints **five** options — the four-option run ends at the
topic 19/20 boundary.

### 2026-09-02 — topic 20 "Schizophrenia" STAGED (27), drafting launched

`content/neuro/qb-pages/gg-ps-t20.array.js` — 24.7 KB, `var GG_PS_T20_STAGED`, **27 entries,
0 sparse holes, n contiguous 91–117**, verified by me from disk (loaded the array and walked the
index; `Array.filter` skips holes). All 27 keys resolve inside their own option list; `p` is a
number on all 27; 0 id collisions with the live 222.

- **Questions book pp.82–84 = PDF 87–89. Answers alone on book p.85 = PDF 90.** Offset `PDF = book
  + 5` re-confirmed off the printed folio on every sheet opened (87→"82" … 91→"86").
- **27 against a contents-page promise of 26 — the SIXTH consecutive topic in this bank to run
  LOW.** No count in this bank has ever run high. Topics 16, 17, 18, 19 and now 20.
- One-past read at PDF 91: banner "Dementia & Delirium / Questions", opening at Q118. Nothing of
  t20 overruns; continuity back to t19's Q90 also verified, so **t19's 15 stands.**
- **Option counts are mixed: Q98 and Q104 print five, the other 25 print four.** The four-option
  run that held through topic 19 ends here.
- Pages: 10 on p.82, 10 on p.83, 7 on p.84 — the lower third of both columns of p.84 is blank.
- Boxed Explanations on **Q95, Q96, Q104, Q109, Q112** (5 of 27), counted by reading all 27 answer
  lines. Key distribution A 6 · B 5 · C 7 · D 9.
- **No figures in the topic** — established by looking at all four rendered pages end to end, not
  by searching a caption list. Only non-text marks are the publisher logo, rules and banners.
- **Letter/name cross-check UNAVAILABLE** — every answer line reads `<n>. Correct Answer: (X)` with
  no option name. All 27 letters re-read at 400 dpi and agree with the 200 dpi first read; the five
  printed Explanations corroborate their own keys indirectly. **5 of 27 have indirect support, 22
  have none. Recorded as NOT PERFORMED, not as passed.**

**Defects transcribed as printed, corrected nowhere:** Q110 is a defect of substance (stem asks for
psychotic *disorders*, options are *symptom classes* plus "All of the above"; key D unmoved) ·
Q99 option c "Morbid occupation" against option a "preoccupation" · **Q102 option d "Preservation"
for "Perseveration" — the bank's house misspelling, SIXTH instance** (five prior in
`gg-ps-t15.array.js`) · Q97 not grammatically a question · Q104 "A 35-years old woman" · Q110
"represents on of the" · Q112 "even thought there is no one nearby" · Q115 "the most appropriated
drug".

**Two template pairs flagged, neither folded:** t20 Q91 ↔ t15 Q5 and t20 Q97 ↔ t15 Q6 — shared
option menus approached from opposite ends. A shared menu pairs, it never folds.

**Where my staging brief was wrong (fourth brief running to miss a page boundary):**
1. I gave the topic as book pp.82–85. **The questions occupy pp.82–84 only**; p.85 is the answers
   page alone — the same split as topic 19, which my own brief warned about and then failed to
   apply to its own prior.
2. I predicted **one** five-option question. There are **two** (Q98 and Q104).
3. I predicted antipsychotic doses and clozapine monitoring counts. **The topic prints no dose, no
   frequency, no ANC threshold and no laboratory value at all** — measured by reading every stem and
   option word by word, not by searching for a unit.
4. I said "entries indented two spaces — the neuro convention". The shipped `gg-ps-t19.array.js`
   opens entries at **column 0** and indents continuation lines. **The staging and draft files use
   DIFFERENT conventions** — the draft file does indent two spaces. Copy the file you are writing
   alongside, never the description.

**Drafting launched 2026-09-02**, split two ways: Q91–104 → `gg-ps-t20.draft-A.js`
(`GG_PS_T20_DRAFT_A`), Q105–117 → `gg-ps-t20.draft-B.js` (`GG_PS_T20_DRAFT_B`). Not yet spliced;
live `questions.neuro.js` still holds **222**.

**Chapter note for the splice:** t20 is the FIRST topic to land questions on `ps-psychosis` and
`ps-schizmgmt` — the 2026-08-23 split comment in `modules.js` records that neither half had a
question at the time. The seam is presentation vs course/management, and **the antipsychotic block
lives in `ps-schizmgmt`**, which `ps-pharm` points at rather than repeating.

## Topic 20 SPLICED — 2026-09-02

**`questions.neuro.js` 222 → 249** (bytes 919,179 → 1,032,218). Both draft halves were validated
**from disk before the splice**, never from their agents' reports: draft-A 14 entries
(`npqb-ps-91`–`-104`), draft-B 13 (`-105`–`-117`), 0 sparse holes in either, `n` contiguous 91–117.
Per entry the validator checked stem byte-identity against `GG_PS_T20_STAGED`, options by
`JSON.stringify`, `answer === 'ABCDE'.indexOf(key)`, module `neuropsych`, bank `gradegain`, chapter
resolution against `MODULES`, boxed ⇒ blockquote reproducing the printed box and **no** authored
marker, unboxed ⇒ marker as the final line, no marker anywhere in `source`, `source` carrying the
staged page, non-empty `objective`, and no stray fields. **All checks passed on both halves.**

**Whole corpus after the splice: 4,225** — ENT 2,322 · ophtho 1,485 · neuropsych **256**
(249 q + 7 cases) · peds 162. 0 sparse holes, 0 duplicate ids corpus-wide, 4 modules / 153 chapter
ids, 0 unresolved module or chapter refs, 0 answers out of range. Measured by loading every
`Q_*`/`C_*` array and walking the index.

⚠️ **The case arrays are `C_ENT`/`C_NEURO`/`C_OPHTHO`/`C_PEDS`, not `CASES_*`.** A corpus counter
matching `^(Q|CASES)_` reported **4,136 with "cases 0"** — a clean-looking, wrong total. Match
`^(Q|C)_`, and treat a zero-case corpus count as a broken probe.

**The one deliberate divergence from staging byte-identity: `npqb-ps-102`.** Option d prints
"Preservation" for "Perseveration" — the bank's sixth recorded instance. The five shipped t15
entries (`npqb-ps-2/3/5/11/15`) all carry **"Perseveration"** in `options`, and every live
"Preservation" string sits inside an *explanation*. That is `CLAUDE.md` §4 — where the source itself
is wrong, correct it and record what the bank printed. I repaired the option in `draft-A` line 136
and the validator carries an explicit, named exemption for that one entry. Draft-A had flagged the
conflict between `gg-ps-t15.array.js`'s header and the t20 staging record; **the shipped array
settled it, not either document.**

**Chapter distribution, 27 entries:** `ps-psychosis` 10 · `ps-symptom` 9 · `ps-schizmgmt` 5 ·
`ps-somato` 2 · `nr-delirium` 1. Explanation words 420–658 (mean ~510), inside the 456–752 t19
calibration band at the low end — no entry ran long.

⚠️ **`npqb-ps-115` is chaptered `nr-delirium` and is the ONLY topic-20 entry in the Neurology
group** (post-operative delirium, taught in `L13`). It is correct, not a stray — **a later sweep
counting topic-20 questions per chapter will flag it, and the answer is that it belongs there.**
`npqb-ps-113` notes `ps-geri` as a secondary. `npqb-ps-109` sits in `ps-somato`, and its printed box
opens "This term" without ever printing "Hysteria" — **the box does not corroborate the letter**,
recorded as such.

⚠️ **The letter/name cross-check was unavailable for the whole topic** — every answer line prints a
bare letter. Five of 27 have indirect support from their own Explanation boxes; **22 have none.**
Recorded as *not performed*, never as passed.

**Splice trap carried from peds ch.7:** the two draft halves can close their last entry differently
(`},` vs `}`), so a carve anchored on `lastIndexOf('\n  },')` silently drops one file's final entry.
`splice-t20.js` anchors on `lastIndexOf('\n];')` and strips a trailing comma. Here both t20 halves
happened to close `}`, but the anchor is the safe one regardless.

**Next: topic 21 "Dementia & Delirium", opening at Q118 on PDF 91 / book p.86.** Still open on
neuro: the 11 `nr-intro`/`nr-exam` outside-knowledge tags the book can replace (`npqb-nr-14` first).

## Topic 21 "Dementia & Delirium" STAGED — 2026-09-02: 19 questions, Q118–Q136

`content\neuro\qb-pages\gg-ps-t21.array.js`, `var GG_PS_T21_STAGED`. **Verified by me from disk after
the agent reported, not taken on report: 19 entries, 0 sparse holes, `n` strictly contiguous 118–136
with no gap and no duplicate, `p` a NUMBER (86 or 87), every key resolving inside its own option
list, no curly quotes, no id collision with the live 249.** By page: p.86 ten, p.87 nine.

- **Boundaries measured.** Questions on book pp.86–87 = PDF 91–92; **p.88 = PDF 93 carries the
  answers alone, no questions** — the same split as topics 19 and 20. Offset re-confirmed off the
  printed folio on every sheet (PDF 91="86" … 94="89"): **PDF = book + 5** still holds.
- **One-past sheet PDF 94 (book p.89)** opens topic 22, banner "Substance-related Disorders &
  Psychopharmacology / Questions", first question numbered **137**. Nothing of topic 21 overruns.
  ⚠️ The contents page calls topic 22 "…& **Pharmacology**"; its banner says "…&
  **Psychopharmacology**". Recorded for whoever stages it.
- **Contents page promised 18; the true count is 19 — the SEVENTH consecutive topic running LOW.**
  No count in this bank has ever run high.
- **Option counts: four ×15, FIVE ×4 (Q120, Q121, Q128, Q129).** The four-option run that held
  through topic 19 is now decisively broken; topic 20 had two five-option questions, this has four.
- ⚠️ **Q121 is the FIRST letter-referencing combination key in the psychiatry run:** key E =
  "A and c", with options d and e printing referenced letters as capitals against lower-case labels.
  **The letters are positional**, which is also how the app prints option letters, so they line up —
  but reordering that question would break the option TEXT as well as the key.
- **Explanation boxes: 4 of 19 — Q120, Q125, Q134, Q136**, counted by reading all nineteen answer
  lines. Keys A 3 · B 5 · C 6 · D 4 · **E 1**.
- ⚠️ **Letter/name cross-check UNAVAILABLE for the whole topic** — bare letters, no option names. All
  19 re-read at 400 dpi and agreeing with the first read. **Four keys have indirect corroboration
  from their own Explanation prose (Q125/Q134/Q136 by name, Q120 by description); fifteen have
  none.** Recorded as *not performed*, NOT as passed.
- **No figures**, established by looking at all three rendered pages end to end. Show-through checked
  at 400 dpi down the outer margins of PDF 91/92/93 — faint mirrored ink, nothing legible, nothing
  transcribed. **Q136 describes an MRI in prose and prints no image.**
- **The topic's entire numeric content is three ages and four age bands** — no exponent, no lab
  value, no MMSE score, no cut-off, no dose. Q123 prints "small dose" twice with no mg or frequency.
- **Defects, recorded and not corrected:** Q121 "Picks body" (no apostrophe, singular) · Q130 "Elated
  mode" and "Delusion if infidelity" — **t20 Q97 prints that same distractor correctly, so the
  misprint is local** · **Q135's four age bands out of ascending order AND overlapping** (65 in both
  a and d, 74 in both b and d) · Q120 offering "Pain perception"/"Pain referral" on a dementia stem ·
  Q136's box ending without a full stop. No key moved.
- **Overlaps flagged, none folded:** Q125 ↔ Q131 within the topic (shared menu, discriminators
  "Blunted affect" vs "Apraxia") · Q124 ↔ t20 Q102 · Q118 ↔ Q127 · Q127 ↔ shipped `npqb-ps-113`.
  No word-for-word reprint anywhere in `questions.neuro.js` or any staged array.

**Where my staging brief was wrong (fifth brief running):**
1. It predicted **MMSE scores, ages and cut-offs**. The topic prints **no MMSE score and no cut-off
   at all**, and only three ages — repeating exactly the mistake it apologised for making about
   topic 20's doses. **Stop predicting a topic's numeric content.**
2. It warned about the "Preservation"/"Perseveration" house misspelling. **It appears nowhere in
   Q118–Q136**; the running total stays at six.
3. Its combination-key guidance anticipated an "All of the above" aggregate. What appeared is a
   **letter-referencing** combination — a different and more fragile shape.
4. Its overlap prior pointed at `npqb-ps-115`. **No topic-21 question resembles it**; the four real
   matches were all unanticipated.
5. It framed the topic as opening on p.86 and running to an unstated boundary, without predicting
   the questions/answers page split its own §2 warned about.

### ⚠️ The chapter seam for topic 21 was ALREADY SETTLED by the written theory — read it, do not re-derive it

`app\data\theory.neuro.js` records the seam in as many words, and both chapters are written:

- **`ps-geri` "Geriatric Psychiatry" IS THE DEMENTIA CHAPTER.** Its own theory states that the
  chapter is titled *Geriatric Psychiatry*, the deck is titled *Dementia and Delirium*, `geriatric`
  returns **zero across all 25 cached decks**, and *"what IS here is dementia, and it is here in
  full."* It held **0 questions** before topic 21.
- **`nr-delirium` "Delirium" is the delirium half**, from the same deck's second half; the seam is
  the deck's own *Delirium* title slide. It held **1** (`npqb-ps-115`).

Facts the theory already measured, so no drafter need re-probe them: **MMSE and MoCA are named with
no score, cut-off or domain** · **`ge-10` uses the MMSE for dementia while `dl-7` calls it NOT
SENSITIVE for delirium — a contradiction inside one lecture, recorded** · **no dose for any of the
six named drugs** · **Lewy body and frontotemporal dementia are named with no clinical picture**
(the only clue is `ge-3`'s visual hallucination → LBD; vascular dementia's only marker is emotional
instability) · **the prevalence figures do not sum to 100 %** and **AD is given two different shares**
· **no investigation is printed for delirium at all.** ⚠️ **Book Psychiatry ch.8 "Dementia and
delirium" (printed 239–248) is image-only and UNREAD — do not render it, do not plan around it.**

**Drafting launched 2026-09-02**, split on the page boundary: Q118–127 → `gg-ps-t21.draft-A.js`
(`GG_PS_T21_DRAFT_A`), Q128–136 → `gg-ps-t21.draft-B.js` (`GG_PS_T21_DRAFT_B`).

### ✅ Topic 21 SPLICED AND CLOSED — 2026-09-02

**`questions.neuro.js` 249 → 268**, measured by loading the array: `Q_NEURO.length` **268**, **0
sparse holes** (index walk, not `Array.filter`), **no duplicate id**, no `answer` outside its own
option list anywhere in the file, all 19 `npqb-ps-118`…`-136` present. Neuro corpus is now **268 q +
7 cases = 275**.

Both halves were validated **from disk before either report was believed** (`val-t21.js`, adapted
from `val-t20.js` with the Perseveration exemption **removed** — the house misspelling does not occur
in this range, so byte-identity against `GG_PS_T21_STAGED` was required and achieved on all 19 stems
and all 19 option arrays). Also checked and passing: every `answer` index resolving to the staged key
letter (including **Q121's letter-referencing key E = "A and c"** → index 4), `bank:'gradegain'`,
`module:'neuropsych'`, every chapter resolving in `MODULES`, boxes reproduced as blockquotes with
**no** marker on the four boxed entries, marker final on the other 15 and absent from every `source`,
`source` carrying the staged page, no stray fields, no id collision with the pre-splice 249.

- **Boxes: 4 of 19** — `npqb-ps-120`, `-125` (draft-A), `-134`, `-136` (draft-B). Matches staging exactly.
- **Words: 463–646, mean 545** across 19. Draft-B's mean (563) runs above draft-A's (538) because
  seven of its nine carry a tagged gap, a misprint or a divergence.
- **Chapters: `ps-geri` 9 · `nr-delirium` 8 · `nr-movement` 1 · `ps-symptom` 1.** The seam was split
  **one question at a time on what the stem is about**, never as a block — dementia stems to
  `ps-geri`, delirium stems to `nr-delirium`. `npqb-ps-134` went to **`nr-movement`** because
  Huntington's is *taught* at `mv-9` (inheritance, pathology, the four diagnostic signs, treatment)
  while `ps-geri` `ge-5` only *names* it in a patho-etiological list; the reason is written into the
  explanation.

**Two findings the drafters established that contradict a lazy reading of the decks:**

- ⚠️ **Huntington's is filed under the NON-neurodegenerative heading in L13.** That makes Q122's
  option c arguable **on the deck's own printed text**. Recorded in the explanation; **key D unmoved,
  not disputed.**
- ⚠️ **Disorientation is absent from L13's printed "common" list** for dementia. Q127's key is
  therefore grounded from four other places, and the explanation says so rather than glossing it.

**Gaps filled from outside and tagged, each after a zero-hit sweep run twice by two methods** (`grep
-ril` with **no `\|` anywhere**, then a Python substring scan over all 25 cached decks): long-term
memory (0 hits), neologism (named but never defined), systematised delusions (0), "regressive" as
Q132's keyed word (0 — the decks say "transient, usually reversible"), infidelity (0), CAG /
trinucleotide (0 — Q134's own box supplies them, noted as the box's), traumatic dementia as a phrase
(0 — the deck prints "chronic subdural hematoma"), hippocampal atrophy in L13 (0 — **no neuroimaging
criteria are printed for any dementia**), episodic memory (0), and banded prevalence by age (0 in
L13 — the deck's only age statement is >65 plus the presenile/senile split). Pick bodies, delirium
tremens first-line and the CAG repeat were the three tagged in draft-A.

**Defects reproduced as printed, never corrected:** Q121 "Picks body" · Q130 "Elated mode" and
"Delusion if infidelity" (both local — t20 Q97 prints the distractor correctly; key A untouched by
either) · Q135's overlapping out-of-order age bands, whose lower bounds sum to 110 % and upper to
165 %, recorded inside the entry because the stem invites a prevalence answer the deck cannot supply
· Q136 ending without a full stop.

**Four overlaps flagged, none folded**, each with the discriminating token named inside the
explanation: Q125↔Q131 (shared menu GAD/MDD/Dementia/Panic; **"Apraxia"** discriminates Q131 against
Q125's "Blunted affect") · Q124↔t20 Q102 · Q118↔Q127 · Q127↔shipped `npqb-ps-113`.

⚠️ **The letter/name cross-check is still UNAVAILABLE for all 19** — the answer page prints letters
alone. Two entries (Q134, Q136) have indirect corroboration by name inside their own boxes; the other
17 have none. This is recorded in the entries as **not performed**, never as passed.

**Two new grep traps, both cost time and neither was in the brief:** `grep -ril "Elated"` returns
twelve false hits on *related / correlated / dilated*; and a single very long line in
`theory.neuro.js` defeats `grep -o ".\{300\}…"` **entirely — exit 1, which reads exactly like a
genuine zero.** Both needed a Python slice to resolve. Add them to the next brief beside the `\|`
warning.

**Next: topic 22, opening at Q137 on PDF 94 / book p.89.** Its banner reads "Substance-related
Disorders & **Psychopharmacology**" against the contents page's "…& **Pharmacology**". Psychiatry
numbering ends at **Q165** in topic 23.

## 2026-09-02 — SESSION CLOSED. Neuro stands at 268; the OCR index was never built.

**Neuro live count, measured with a parser: 268** — `npqb-nr` **133**, `npqb-ps` **135**, zero
sparse holes. Topics 18–21 were drafted and spliced in this session (Somatic Symptoms → Child
Psychiatry → Schizophrenia → Dementia & Delirium, 196 → 268).

**Next: topic 22 "Substance-related Disorders & Psychopharmacology", opening at Q137 on PDF 94 /
book p.89.** ⚠️ Its banner and the contents page disagree — the banner prints
**"Psychopharmacology"**, the contents prints **"Pharmacology"**. Psychiatry numbering ends at
**Q165** in topic 23, so topic 22 + topic 23 are the last ~29 psychiatry questions.

### ⚠️ The OCR index for this bank DOES NOT EXIST — and the reason matters

All 142 pages were rendered at 200 dpi, but **the renders lived in the session scratchpad and are
now gone.** Only **2 pages** were ever OCR'd; they are preserved at
`content/neuro/qb-pages/ocr/p-001.txt` and `p-010.txt`. Re-rendering is cheap (0.32 s/page,
~45 s for the whole bank). The OCR is the part that is rate-limited.

**⚠️⚠️ CORRECTION, MEASURED — WPS exit 429 IS NOT A DAILY QUOTA.** `MEMORY.md` and
`tools\wps-ocr-reference.md` both record 429 as "daily OCR quota exhausted — that is the finding,
do not retry". A single-page probe on 2026-08-31 returned:

    {"type":"error","code":"429","message":"The operation is too frequent, please try again later."}

That is **rate limiting**. The allowance was never gone — the driver log shows five 429s on
`p-001`, a restart ~100 s later, then `OK p-001 tries=3`. Two chats were running against the same
WPS login, doubling the account-wide request rate. **The correct response is a paced driver with
exponential backoff, not stopping.** A paced run was launched and then died on an unrelated
Anthropic session limit before it could measure the sustainable rate — **so the sustainable pace
is still unknown, and finding it is worth doing once and writing down.**
**Fix the 429 line in `MEMORY.md` and `tools\wps-ocr-reference.md`.**

### The structural map is the durable win — `content/neuro/qb-pages/nb-anchors.txt`

Read from the rendered page images, not from OCR, so it stands even though the renders are gone.
The load-bearing facts, repeated here so they survive independently of that file:

- **Bank = Grade Gain**, confirmed from the cover (PDF 1), per the identify-by-the-cover rule.
- **ONE book page per sheet**, A4 portrait, two columns of text inside each page. This bank is
  **not** 2-up like the peds House bank — do not carry that arithmetic across.
- **⚠️⚠️ THE PAGE OFFSET IS NOT GLOBAL.** Neuropsychiatry: **PDF = book + 5** (verified PDF 77 =
  book 72, PDF 98 = book 93). Neurosurgery: **PDF = book + 7** (verified PDF 101 = book 94), because
  two unnumbered neurosurgery contents pages sit at PDF 99–100. The single global "+5" in
  `MEMORY.md` is right only for the in-scope half; applied to the back half it misfiles every
  citation by two pages.
- Layout: PDF 1 cover · 2 blank · 3–5 contents · **6–98 neuropsychiatry body (book 1–93)** ·
  99–100 neurosurgery contents · 101–140 neurosurgery body · 141 blank · 142 back-cover advert.
  **In-scope = PDF 6–98. SKIP 99–140 (neurosurgery, out of scope).**
- **Two independent numbering runs, both continuous across topics.** Neurology (topics 01–14,
  book 1–64, PDF 6–69) starts at Q1. Psychiatry (topics 15–23, book 65–93, PDF 70–98) **restarts at
  Q1** and ends at Q165.
- ⚠️ **The contents page's per-topic counts are unreliable** — the psychiatry counts sum to 157 but
  the block ends at **Q165**. The contents also prints book page 14 twice (topics 04 and 05).
  Same defect shape as every other bank here: trust no printed count; read every answered page.
- Answers print as `<n>. Correct Answer: (X)` with an optional `Explanation:` block, and **may share
  a page with the tail of that topic's questions** (questions left column, answers right) — e.g.
  PDF 98. Do not assume answers begin on a fresh page.
- **No OSCE material** anywhere in the contents or in sampled pages.

### Open debt carried forward

12 `nr-intro`/`nr-exam` outside-knowledge tags that the book can replace, **`npqb-nr-14` first**.

## ⚠️ USER RULING 2026-09-02 — STOP REPORTING COSMETIC DEFECTS

The user's words: *"these small mistakes, a letter of punctuations don't worth the attentions as
long as they don't affect the clinical information."*

**Keep transcribing them byte-identically — that is automatic and free.** But typos, missing commas,
hyphenation, curly quotes, misprints such as "fiits", and doubled question numbers are **no longer
catalogued** in this journal, in commit messages, or in reports to the user. Attention belongs on
clinical correctness.

**The one narrow exception, still always flagged: numbers, units, doses and exponents.** OCR read a
printed 10 to the 6 as 10 to the 9 on this project — a plausible wrong number, not visible garbage.
Those are verified against the page image and raised if wrong.

Genuine clinical divergences (book versus lecture) are still recorded, with the answer never moved.

## 2026-09-08 — psychiatry topics 22 and 23 spliced. GRADE GAIN PSYCHIATRY IS COMPLETE.

`app/data/questions.neuro.js` went **268 -> 297**, measured from disk after the write: 0 sparse
holes, 297 unique ids, `npqb-nr` 133 unchanged, `npqb-ps` **135 -> 164** (+29). The app boots from
`file://` with **0 console errors** (`node tools/boot-check/boot-check.js`); `QUESTIONS` still reads
4049 because `neuropsych` sits in `LOCKED_MODULES` and contributes nothing at the aggregator, which
is the healthy number, not a loss.

**Psychiatry now runs Q1 to Q165 with nothing missing.** Every book page from 65 to 93 that carries
questions is cited in a `source` field; the uncited pages in that range — 67, 71, 75, 78, 81, 85, 88
and 91 — are the answer-only sheets. Topics 15 to 23 are all spliced.

### What was transcribed

| topic | questions | book pp. | contents claimed | measured | boxed |
|---|---|---|---|---|---|
| 22 Substance-related Disorders & Psychopharmacology | Q137–Q153 | 89–90 (answers 91) | 16 | **17** | 6 |
| 23 Emergency, Devices & Psychotherapy | Q154–Q165 | 92–93 (answers 93) | 11 | **12** | 3 |

The contents page undercounted again — the **ninth and tenth consecutive undercounts**, and it has
still never once run high. Both question sequences and both answer sequences were walked
independently: 137…153 and 154…165, none doubled, none skipped.

**The offset held on every numbered sheet** (PDF 94 = book 89 through PDF 98 = book 93). PDF 99 is
unnumbered so it cannot be checked against the offset; it is the neurosurgery contents page and is
out of scope.

**The banner disagreement is unresolved and is recorded, not fixed:** the question page's banner
reads "Substance-related Disorders & Psychopharmacology", the contents page reads
"…& Pharmacology".

⚠️ **The letter/name cross-check was UNAVAILABLE for all 29 keys and was NOT PERFORMED.** This bank
prints its psychiatry answers as bare parenthesised letters with no option name beside them, so
there is nothing to cross-check against. That sentence is carried in every one of the 29 `source`
fields. It is recorded as not performed — never as passed.

Instead, **all 29 keys were independently re-read by a second seat.** omniroute `auto/vision`
(served `gemini-3.7-flash`) read the answer columns re-rendered at 400 dpi and matched the staging
letter for letter on all 29. It also read folios **91** and **93** independently, and returned
**COUNT=0** answer lines from PDF 98's left column — corroborating the claim that that column
carries questions rather than answers. That is a structural cross-check, not merely a letter check.

### The six-stage sweep — why the zero is a zero

29 incoming × 268 shipped = **7,772 pairs** compared on normalised stem, loose stem, option menu and
printed option order. Nothing reached the 0.72 threshold. The ranked near-miss list was then
hand-read down to dice 0.45, which surfaced **five pairs, and every one is a shared frame rather
than a fold** — the discriminating token is named in each case:

| dice | incoming | shipped | discriminator |
|---|---|---|---|
| 0.667 | `npqb-ps-165` | `npqb-ps-73` | catatonia vs conversion disorder |
| 0.667 | `npqb-ps-165` | `npqb-ps-116` | catatonia vs premorbid phase |
| 0.500 | `npqb-ps-139` | `npqb-nr-90` | Korsakoff vs spinal hemiplegia |
| 0.500 | `npqb-ps-139` | `npqb-nr-110` | Korsakoff vs capsular hemiplegia |
| 0.500 | `npqb-ps-159` | `npqb-nr-130` | TMS vs triptans |

All five are different option menus as well as different subjects. **Intra-draft pairs at 0.45: 0.**
**Folds this batch: 0.** No id in Q137–Q165 collided with anything shipped.

### The marker arithmetic was predicted before the splice and confirmed after

9 of the 29 entries print an `Explanation:` box (t22 Q140, 142, 143, 147, 151, 153; t23 Q155, 160,
163), so 20 carry the authored marker. The corpus held **194** markers before the splice and holds
**214** after — exactly the predicted +20, with the printed boxes carried verbatim as blockquotes
and taking no marker.

### ⚠️ A silent encoding defect, found by measurement and repaired

`gg-ps-t22.draft-A.js` came back from its fix pass with **every non-ASCII byte in the file replaced
by a literal `?`** — zero non-ASCII characters in the whole file, against 8 in the sibling t23 file
and 28 in the shipped t21 draft. The damage reached the authored marker itself, which read
`Written for this bank ? neuropsychiatry` instead of carrying the em dash.

**This is the shape of defect that a keyword grep declares healthy.** The marker count came back
right, because the count matched on the leading words and never looked at the dash. What caught it
was counting non-ASCII bytes per file and comparing against a shipped file — a cheap check worth
keeping, because a file that has lost every accented character, dash and curly quote looks perfectly
normal in a diff.

The cause was the write path, not the content: the seat's own log holds correct `—` and `’`
throughout, and the file was written through a PowerShell `-Command` step that flattened it. The
repair was done by shape (`6?12` -> `6–12`, `cocaine?s` -> `cocaine's`, ` ? ` -> em dash) and then
**every stem and option was restored verbatim from the staging array rather than trusted**, which is
also what proves the repair: all 9 stems, all 9 option lists and all 9 answer indices then matched
staging exactly. 21 characters were repaired; the 6 remaining `?` are genuine question marks ending
genuine stems.

**`gg-ps-t23.draft-B.js` was missing the `objective` field on all six entries** — and the raw draft
never had it either, so nothing was dropped in the fix pass; it was never written. The six were
authored to the shipped register and merged in.

### Instrument faults found this block

- **`tools/qb-pipeline/validate.js` reports `corpus total (loaded, not grepped): 0` and then prints
  `clean`.** It found no array in `app/data/questions.neuro.js`, which loads fine under `vm` for
  every other tool here. A validator that reports zero and passes is worse than one that fails.
  Not fixed — `tools/` is outside this chat's write allowlist.
- `tools/qb-pipeline/sweep.js` decides draft-vs-staging shape with `/\.draft\.js$/`, so a
  `.draft-A.js` file takes the staging loader. It works by luck, because the staging loader is the
  generic one, but the test does not mean what it says.
- `splice-safe.js` needs a **bare** comma-separated entry run, not a `var NAME = [...]` file. The
  four halves were stripped to a bare run first, entry text copied verbatim, never re-serialised.
- The **heredoc backslash-collapse bit again**, exactly as `MEMORY.md` documents: a `.replace(/\\/g,
  ...)` written into a quoted heredoc arrived as `.replace(/\/g, ...)` and died on an unmatched
  paren. The file was not damaged because the script failed before writing. Written with the `Write`
  tool instead, building the backslash as `String.fromCharCode(92)`.

### Where this leaves the bank

**Neurology is spliced through topic 07** — Q1 to Q140 live as 133 entries, the 7 missing numbers
being earlier folds (24, 27, 28, 46, 49, 52, 61). `gg-nr-t06.array.js` and `gg-nr-t07.array.js` are
both staged and both spliced.

**Next is neurology topic 08, "Epilepsy", book pp.31–36 = PDF 36–41, opening at Q141.** The contents
page claims 36 questions for it, which is the largest claim in the neurology run — and on this
bank's record that number is a floor, not a count. Book p.30 is topic 07's answer page and is
already read.

Remaining after that: topics 09 Coma, 10 Movement Disorders, 11 Demyelinating Diseases,
12 Neuromuscular Disorders, 13 CNS Infections, 14 Back & Lower Limb Pain — book pp.37–64,
PDF 42–69. Then the endpoint PDF, which does not start until the user says so, and theory.

## 2026-09-09 — neurology topic 08 "Epilepsy" spliced. CLOSED.

36 questions, Q141–Q176, book pp.31–36 = PDF 36–41. The contents page claimed 36 and was exact —
the **first exact contents claim in ten topics running**, after nine consecutive undercounts. The
+5 offset held on all nine rendered sheets, PDF 035 = book 30 through PDF 043 = book 38.

### What was transcribed

9 of the 36 entries print an `Explanation:` box — Q141, 142, 143, 157, 158, 160, 162, 169, 170 —
carried verbatim and unmarked. The remaining 27 carry the authored marker.

`app/data/questions.neuro.js` went **297 -> 333**, measured from disk after the write: 0 sparse
holes, 333 unique ids. The marker count went **214 -> 241**, exactly the predicted +27. `node
--check` exits 0, and `tools/boot-check/boot-check.js` reports 0 console errors with `QUESTIONS
4049 · THEORY 81 · MODULES 4 · 153 chapters` unchanged — `neuropsych` still sits in
`LOCKED_MODULES` and contributes nothing at the aggregator, so that is the healthy number, not a
loss.

### The six-stage sweep — 0 folds, and the zero was proved this time

Stage C found 5 pairs at or above Dice 0.45 and stage D found 4 intra-draft pairs, nine candidates
in total. Every one turned out to be the bank's own recurring stem template — "In previous case,
first-line…", "occurs in all of the following EXCEPT" — with **zero option overlap on any pair**.
`nr-epilepsy` held 0 live entries before this splice, which corroborates the zero independently.

The stage-A/B zeros were proved rather than assumed: a planted verbatim clone of a live entry fired
both stages, and a clone with two options reordered and one word respelled fired stage B but not
stage A — fold shape 3 behaving exactly as designed.

### The bare-letter gap, and how it was closed

The bank prints bare key letters, so the letter/name cross-check is **unavailable and is recorded
as not performed — never as passed.** The substitute was an independent second reading through the
omniroute gateway, a different house from the seat that produced the transcript. All 36 keys agree
three ways: that second reading, the cached first-pass transcript, and the staged `key` field. Q174
was re-read a third time on its own because the first report wrote it ambiguously as `A→B`; it
prints a clean single bold **B**, folio 36 confirmed, and option b reads "Negative but can be
positive".

### A measured correction to the omniroute admission gate

The gate was earlier written up as a payload-size ceiling. That is too clean and is now corrected:
a 1178 KB PNG failed identically at 2.0 s on all 14 candidate seats, but 136 KB and 159 KB JPEGs
were admitted first try, ~9–10 s, no retries — the same size class that had failed repeatedly an
hour earlier. **The gate is congestion-dependent, not a fixed byte ceiling; the exact ceiling
remains unpinned.** A flat 2.0 s `503 chat_admission_busy` means shrink or wait, never seat-hunt; a
`429 model_cooldown` after 20+ s is ordinary and retryable. Grayscale JPEG at 150 dpi q50 is the
size lever that gets scans through.

### A corpus-wide defect, recorded and not fixed — outside this chat's write allowlist

Question order is hashed from the id, so a question whose stem says "In previous case" never lands
next to its antecedent. The settled project convention is that the stem stays exactly as the bank
printed it and the explanation carries the link, naming the antecedent by id and restating enough
of its vignette to stand alone. Topic 08's 9 chains were linked that way. But `pedep2-gen-15` and
`pedep2-ren-4` in `app/data/questions.peds.ep2.js` ship today with live "previous case" stems and
are not this chat's to touch. Someone owns this; it is not fixed.

### Q159, a tension held as printed

The bank keys myoclonic as the sole generalized-seizure exception to complete loss of
consciousness; the cached lecture `L4) Seizures_Epilepsy.txt` names myoclonic and atonic, and
atonic is an unselected option on the same question. Noted in `explanation`, `answer` untouched,
per the standing ruling that a defective key is noted and never disputed.

### Flags topic 09 "Coma" inherits

Banner confirmed at PDF 42, Q177–Q186. Q186 prints only three options, a–c, ending "Brainstem
stroke", and appears to run past the page edge. Q194 carries a waveform figure, transcribed as
`[figure]`.

### Next

Topics 10–14, book pp.41–64 = PDF 46–69. Topic 09 CLOSED (below). Topic 10 staged and
verified (below) — draft expansion is the next step.

## Topic 10 "Movement Disorders" — CLOSED 2026-09-16

Book pp.41-44 (PDF 046-049) questions, pp.44-45 (PDF 049-050) answers. Contents page
promised 23; **29 actually print, Q199-227** — this bank's contents page has never once
undercounted correctly, per standing rule.

**Done (commit `62abba5`):** `content/neuro/qb-pages/gg-nr-t10.array.js` — Codex solo
(`gpt-5.6-terra`, own OpenAI login, gateway's `big-pickle` still in cooldown) transcribed
all 29 from the 6 rendered page images. Fixed post-hoc in Claude: Codex invented a
non-existent "repository rule" and stored `key` as a zero-based index instead of the
letter t08's schema uses — converted back to letters mechanically (deterministic, no
new transcription); header comment carried cp1252/UTF-8 mojibake (â€” for —, Â· for ·)
— fixed; Q203's box had silently normalized source typo "especillay" to "especially" —
restored verbatim. Independent Opus-refuter check against all 6 images: **all 29 keys
verified letter-by-letter, correct; stems/options/boxes verified; pg-051 confirmed
holding nothing from this topic** (next topic's banner, Q228+). Clean.

**Draft, refuter review and fix cycle done (untracked on disk, not yet committed):**
Codex solo built `gg-nr-t10.draft-A.js` (Q199-213, 15 entries, boxed 199/200/202/203/211)
and `gg-nr-t10.draft-B.js` (Q214-227, 14 entries, boxed 219/225) to writing budget. A
Codex-written mechanical frozen-field script (`SCRATCH/frozen-check.js`) passed clean —
stems/options/answers/boxes unchanged vs staging. An independent Opus refuter reviewed
both drafts: draft-A clean bar one low-severity note (Q200 reproduces a lecture line
about no-single-gold-standard-strategy — re-read and judged NOT a real contradiction,
levodopa-is-broad-gold-standard vs anticholinergics-are-tremor-predominant-choice are
reconcilable and already reconciled in the prose; left as-is); draft-B **FAILED** — 13
entries leaked internal bookkeeping sentences ("The printed key maps B to index 1.")
into the student-facing `explanation`, Q219/Q225 didn't label their boxed quote to match
draft-A's "The printed box says:" convention, Q219 had a grammar slip, and Q224 leaked
`keyName`-is-null meta-commentary and needed the lecture-vs-key divergence stated
explicitly (lecture: "onset after age 60" implies **seventh** decade; bank's printed key
selects **Sixth decade** — per "a defective key is noted, never disputed" the answer
stays Sixth decade, index 1, unmoved). Per "Codex never revises what Codex drafted," a
Claude session fixed draft-B directly (Codex drafted it, so Codex could not do the fix).
A second, independent Opus refuter re-reviewed the fixed file: **PASS**, all 7 checks
clean, Q224's rewrite cross-checked against `L3) MOVEMENT DISORDERS.txt` line-by-line.

**Sweep done, zero folds, both hits hand-adjudicated as false positives:**
`tools/qb-pipeline/sweep.js` expects a `*.draft.js`-suffixed bare-object file for its
draft loader (`/\.draft\.js$/`) — our `.draft-A.js`/`.draft-B.js` names miss that regex
and silently fall through to the corpus loader, which throws on bare object syntax (the
2026-09-02 lib.js note claiming this "works by luck" is wrong, unverified by a real run —
fix by copying to a scratch file named `*.draft.js` before sweeping, never rename the
repo file). Instrument verified first with a planted exact clone + planted
reordered-option clone (both caught correctly, stage A and stage C) before trusting the
real result. Real sweep: 29 incoming (draft-A+B combined) × 355 shipped = 10,295 cross
pairs + 406 within-batch pairs. **2 candidates, 0 folds:**
- `npqb-nr-207` vs `npqb-nr-212` (within-batch, dice 1.00) — both stems say "cardinal
  feature of parkinsonism is," but option sets are fully disjoint (rigidity/spasticity/
  planter-response/steroids/gait vs bradykinesia/micrographia/monotonous-speech) with
  different keyed answers. Same fact tested two different ways by the printed source,
  not a fold shape — kept both.
- `npqb-nr-223` vs `npqb-ps-129` (cross-corpus, dice 0.75) — shared templated stem
  ("Which of the following is NOT typically associated with ___?") over unrelated
  diseases (chorea vs dementia, different chapters `nr-movement`/`ps-geri`), fully
  different option sets. Template collision, not a fold — kept both.

**Splice done and committed.** `app/data/questions.neuro.js`: 355 → **384** (29 new,
0 folds — matches prediction exactly). Draft entries copied verbatim, never
re-serialised. Verified from disk: count 384, 0 sparse holes, 0 duplicate ids, all 29
new ids present exactly once, all answers in range, correct chapter/module on every new
entry, marker count 259 → 281 (+22, exact prediction). Boot-check clean, 0 console
errors (`QUESTIONS 4049` unchanged — neuropsych is `LOCKED_MODULES`, doesn't move the
aggregator's live count).

**Commits:** `2f017f6` (drafts + briefs: `gg-nr-t10.draft-A.js`, `gg-nr-t10.draft-B.js`,
`t10-briefs/codex-finish-A.md`, `codex-finish-B.md`, `codex-frozen.md`), `d00f32c` (the
splice itself). Staging commit was earlier: `62abba5`. All done, nothing left on t10.

**Route state — last probed 2026-09-15 ~22:15, RE-PROBE BEFORE TRUSTING:** Codex solo
was live (`gpt-5.6-terra`); gateway healthy but OpenCode free models were rate-limited
until ~03:00; most `auto/*` combos were landing on unconfirmed-payer seats, treat as
paid. This is now stale — probe fresh with "pong" before any batch, drop a dead rung at
once, never retry-loop.

## Topic 09 "Coma" — CLOSED 2026-09-15

**Owner's limits for t09, verbatim (2026-09-15):**
> - Codex (codex-gw.sh) may: finish the drafts to the word budget, and write/run a script proving stems, options, answers and quoted boxes are unchanged vs staging.
> - Stays with Claude: the key cross-check, the duplicate decisions, the splice, git.
> - The reviewer checks Claude-made drafts: a separate Claude refuter, not Codex. If the weekly limit blocks it, stop and tell me. Do not swap in Codex for keys.
> - Commit after each step, explicit paths only.

**Done (commits):**
- `6ae9950` `content/neuro/qb-pages/gg-nr-t09-factcheck.md` — the five provenance findings on draft A (pushed).
- `9e1ebdd` `gg-nr-t09-keycheck.md` — blind Claude key cross-check Q177–Q198: **22/22 letters agree**. Letter/name check **NOT PERFORMED** (staging `keyName` is null throughout). Source defects confirmed on the page: Q186 and Q198 print three options; Q197 option b truncated at "Obtain a repeat brain MRI with". Not pushed.
- `1549a87` `gg-nr-t09.draft-A.js` — Codex (gateway, opencode-zen/big-pickle) expansion + fact-check fixes. Not pushed.
- (this commit) `gg-nr-t09-review-A.md` — Opus refuter on `1549a87`: **FAIL, 5 failures, all explanation prose** (F1 Q182 "unopposed" not in L8 · F2 Q181 13 is the BOTTOM of the mild band · F3 Q177 self-contradiction + untagged clause under L10 · F4 untagged outside knowledge in 179/180/183/187 · F5 179/180/181/183/184/185 are gap-fills at 251–283 w, need ~520). Frozen fields, boxes, 9 markers, LF, parse, emoji all PASS. Briefs + Codex's self-report saved under `content/neuro/qb-pages/t09-briefs/`.
- `1b3de45` draft A fixed for F1–F5 + warnings (Claude, not Codex — Codex never revises its own draft).
- `b9c0197` draft B finished to writing budget (Q188–Q198, 11 entries).
- `gg-nr-t09-review-A2.md` (untracked) — second Opus refuter re-check of the A fix: **FAIL, 2 pre-existing clinical errors** (Q181 GCS arithmetic, Q183 pupil reactivity), everything else PASS.
- `gg-nr-t09-review-B.md` (untracked) — first Opus refuter review of draft B: **FAIL, 5 findings** (Q193 inverted respiratory centres, Q196 overstated CT-rules-out-haemorrhage, Q197 silent ECG/EEG reconciliation, untagged outside knowledge in 188/189/193/196, Q189 stem-rewrite ratified by Claude).
- `27adccc` fixed the two A2 clinical errors (Q181, Q183).
- `448325a` fixed the five B-review findings.
- Frozen-field script: not produced as its own artifact — the A2/B refuter passes each independently confirmed stem/options/answer/boxes unchanged vs staging, which covers the same ground.
- Six-stage sweep (`tools/qb-pipeline/sweep.js`) run 22 incoming (`gg-nr-t09.draft-A.js` + `draft-B.js`) vs 333-entry shipped corpus: **ZERO candidates** at Dice ≥ 0.72 across all 7,326 pairs, zero within-batch. Instrument verified first with a planted clone + a planted reordered-option clone (both caught, correctly staged) before trusting the zero. No fold/adjudication needed.
- Splice done: `app/data/questions.neuro.js` 333 → **355** (both header comments stripped, tail structure preserved, bare-key/single-quote style matched — no quote conversion needed). Validated from disk: parses clean, count 333→355, markers 241→259 (+18, matches prediction), 0 duplicate ids, all 22 new ids present once, answers in range, chapters/module sane, 0 CR bytes. Not yet committed — next step.

**Splice committed:** `63f4bfe` (splice + journal), `7defff3` (the two review docs). Neither
pushed. `app/data/questions.neuro.js`: 333 → **355**. All done, nothing left on t09.
