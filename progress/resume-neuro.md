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
