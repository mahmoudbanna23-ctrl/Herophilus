# Neuropsychiatry — theory plan

**The module's working file. Read it before briefing any chapter.** Opened 2026-08-18, the day
ophthalmology theory closed. Exam **3 October 2026** — the last of the six.

Method is `progress\briefs\START-HERE.md` §14 (format), §14.1 (budget and page prediction),
§14.3a (layout and the `mdLead()` anchor rule) and §14.5 (the deferral register). Project rules in
`CLAUDE.md`. **Everything ophthalmology and paediatrics learned applies here** — the two most
expensive lessons first:

- **Chapters are SPLIT, not compressed, and ≤13 pp is measured BY PRINTING.** Forecast splits before
  writing where you can; splitting after printing cost two extra cycles in ophthalmology.
- **`pages ≈ words ÷ 240` is a planning tool only.** It over-predicted by up to **5.1 pages** on
  book-sourced ophthalmology chapters and was tighter on deck-sourced ENT ones. **Never clear or cut
  a chapter on it — print the chapter.**

---

## 1. Shape

**31 chapters in two groups: Psychiatry 17, Neurology 14.**
⚠️ **Was 27. FOUR SPLITS added one each.** Three were made **after printing** over the 13-page
hard shape — `nr-hemi`/`nr-para` 2026-08-18 · `nr-lmn`/`nr-nerve` and `ps-ocd`/`ps-ptsd` both
2026-08-22 — and the fourth, **`nr-movement`/`nr-epilepsy`**, was **FORECAST and taken BEFORE
writing** on 2026-08-22/23. ⚠️ **`ps-ocd` split a SINGLE deck** — see §4. Ids and titles in `app\data\modules.js`
under module id `neuropsych`. **151 questions**, all `gradegain`, all MCQ, ids `npqb-`.

### ⚠️⚠️ THE QUESTION DISTRIBUTION IS THE MOST LOPSIDED IN THE PROJECT

**Neurology holds 133 of 151 questions. Psychiatry holds 18. Fifteen of the 27 chapters have NONE.**

| q | chapters |
|---|---|
| 34 | `nr-cranial` |
| 29 | `nr-hemi` |
| 24 | `nr-stroke` |
| **22** | **`nr-headache`** ⚠️ *and it has no lecture at all — see §3* |
| 21 | `nr-intro` |
| 11 | `ps-symptom` |
| 5 | `ps-psychoed` |
| 1 each | `nr-ms` · `nr-movement` · `nr-lmn` · `ps-ocd` · `ps-mood` |
| **0** | `ps-interview` · `ps-osce` · `ps-somato` · `ps-anxiety` · `ps-psychosis` · `ps-geri` · `ps-child` · `ps-sud` · `ps-emerg` · `ps-pharm` · `ps-devices` · `ps-therapy` · `nr-cns` · `nr-delirium` · `nr-backpain` · **`nr-nerve`** *(added by the split; its half of the pair holds the question)* |

**What this means for budgeting.** §14's budget is `max(source words, 25 × questions)`, floor 600.
With 15 chapters at zero questions, **the deck word count governs almost the whole psychiatry half**
— the `25×q` term never binds there. The bank is frozen mid-flight (`npqb-` transcription is another
chat's stream), so **these zeros are "not yet transcribed", NOT "not examined"**. Do not treat a
zero-question chapter as low-value; the neurology bias is an artefact of transcription order.

⚠️ **And the ophthalmology lesson applies directly: a chapter's questions may not be answerable from
its assigned deck.** Check before briefing, per §14.5.

---

## 2. The decks — all 25 cached, extractions sound, **re-measured 2026-08-18**

25 PDFs in `Semester 8\Neuro\Theoritical\PPT\`, 25 caches in `content\neuro\lectures\`.
**1,116 slide-pages, 49,859 words.**

### ⚠️⚠️ THIS TABLE WAS WRONG ONCE — `wc -w` IS NOT THE INSTRUMENT

The first version was measured with `wc -w` and **under-counted the module by 14 %** (43,665
against 49,859), worst case **6.8 % on a single deck**. The two disagree because these caches carry
**4,042 lone-punctuation tokens — 8.1 % of the count, and 175 standalone `•` bullets in `L12`
alone** — which the two tools treat differently.

**Every project validator — `vdraft.js`, `modcheck.js`, `val.js` — uses the JS split
`s.split(/\s+/).filter(Boolean)`.** That is therefore the standard, and it is what §14's budget and
the page estimator are calibrated against. **Measure sources with node, never with `wc -w`.**

The consequence was not academic: the low numbers made the first split forecasts too small, and
`nr-hemi` was briefed at "11.6 pp" when it measured 19.5 by the estimator and printed 14.

The `content` column below counts only tokens containing an alphanumeric. It is the better
*reading* measure, but **the JS column is the one to budget with**, because every earlier module was
measured that way and comparability matters more than purity.

| deck | pp | **JS words** | content | w/pp | chapter |
|---|---|---|---|---|---|
| L8) Cranial nerves | 92 | **3,700** | 3,446 | 40 | `nr-cranial` |
| L17) Psychopharmacology | 31 | **3,456** | 3,055 | 111 | `ps-pharm` ✅ *picture deck, read* |
| L12) hemi,parap&ataxia | 86 | **2,983** | 2,714 | 35 | `nr-hemi` + `nr-para` ✅ *written* |
| L3) MOVEMENT DISORDERS | 51 | **2,699** | 2,485 | 53 | `nr-movement` ✅ |
| L4,5) Psychiatric symptomatology | 63 | **2,441** | 1,707 | 39 | `ps-symptom` ⚠️ *30 % markup — the most bulleted deck in the module* |
| L2) Multiple sclerosis | 68 | **2,387** | 2,212 | 35 | `nr-ms` |
| L8) OCD & PTSD | 33 | **2,322** | 2,141 | 70 | `ps-ocd` + **`ps-ptsd`** ✅ *(split 2026-08-22 on the deck's own PART ONE / PART TWO seam)* |
| L4) Seizures_Epilepsy | 32 | **2,321** | 2,171 | 73 | **`nr-epilepsy`** ✅ *(re-assigned by the forecast split)* |
| L11,12) Schizophrenia | 57 | **2,251** | 2,180 | 39 | `ps-psychosis` |
| L10) Stroke | 53 | **2,090** | 2,047 | 39 | `nr-stroke` ✅ *written* |
| L5) Muscle Disease | 55 | **2,048** | 1,807 | 37 | `nr-lmn` ✅ |
| L9) CNS infection | 40 | **1,924** | 1,818 | 48 | `nr-cns` |
| L18) Devices in Psychiatry | 23 | **1,909** | 1,806 | 83 | `ps-devices` |
| L15) substance related + psych emergency | 49 | **1,854** | 1,771 | 38 | `ps-sud` |
| L11) Cervical pain | 41 | **1,742** | 1,589 | 42 | `nr-backpain` |
| L13) Dementia and Delirium | 41 | **1,672** | 1,532 | 41 | **`ps-geri` + `nr-delirium` — SHARED** |
| L16) Emergency Psychiatry | 46 | **1,597** | 1,564 | 35 | `ps-emerg` |
| L6) Peripheral neuropathy | 44 | **1,525** | 1,465 | 35 | **`nr-nerve`** ✅ *(re-assigned by the 2026-08-22 split)* |
| L6) Myths about psychiatry | 14 | **1,522** | 1,411 | 109 | `ps-psychoed` |
| L1) INTRODUCTION AND LOCALISATION | 57 | **1,469** | 1,326 | 26 | `nr-intro` |
| L3) Somatization | 40 | **1,464** | 1,381 | 37 | `ps-somato` |
| L19) Psychotherapy | 29 | **1,382** | 1,303 | 48 | `ps-therapy` |
| L9,10) Mood disorders | 25 | **1,371** | 1,284 | 55 | `ps-mood` |
| L14) Child Psychiatry | 29 | **1,257** | 1,218 | 43 | `ps-child` |
| L1,2) Psychiatric sheet | 17 | **473** | 384 | 28 | `ps-interview` (+ `ps-osce`?) |

✅ **Every cache matches `pdftotext -layout` within a few words** — unlike ophthalmology, there is
no hidden *extraction* failure here, and that saves a 1,116-page render.

### ⚠️⚠️ BUT EXTRACTION-SOUND IS NOT CONTENT-COMPLETE — AND ONLY ONE OF THE TWO HAS BEEN CHECKED

`L12` extracts perfectly **and carries nine bare-title slides** — *The pyramidal system* ·
*Localisation of the pyramidal tract lesions* · *Cerebral lesion* · **`Brainstem lesion`** ·
**`Brainstem lesions`** · *A spinal section* · *What impact has the lecvel [sic] of the lesion?* ·
*What is the lesion?* ×2 · *Ataxia symptoms:*. **Three questions depend on the two brainstem
slides, which carry no text at all.**

**The deck-level ratio check that caught `L17` passes `L12` cleanly** — 35 w/slide against
`L17`'s 7. **A PER-SLIDE ratio would have caught it.** Run that on every remaining deck before
briefing it; the failure here is local, nine slides of 86, and a deck average cannot see it.

⚠️ **And `L12` carries a skip marker that is UNRECOVERABLE FROM TEXT.** Slide 2 reads: *"All
slides in italic are not for undergraduates, or just read it for extra infromations [sic]."*
**A text cache carries no italics.** This is the ophthalmology `(Tutorial)` problem with **nothing
to grep for** — everything is written at full weight, which is the safe direction, but only a render
can say what was meant to be skipped. `L12` also prints *"Failed to load the image."* four times on
one slide: **broken graphics in the PDF itself, which no render will recover.**

### ✅ `L17) Psychopharmacology` — the one deck that failed the ratio, now READ

31 pages, 239 words, **seven words per page** — the only deck in the module to fail, by a factor of
four, and `pdftotext -layout` returned the same 239, so it was never an extraction-mode problem.
**Read visually 2026-08-18: cache is now 3,358 words.** The diagnosis turned out to be a **fourth
failure mode this project had not seen — the PICTURE DECK.** Full write-up, the drug inventory, the
missing-dose finding and the two illegible items are at the end of this file.

**⚠️ The ratio check that found it is worth running on every module's decks from now on**, and it is
one command: pages against cached words. It cost nothing and recovered 3,119 words in a major exam
topic that every previous pass had read as "a text-light deck".

### ⚠️ The lecture series skips L7 in BOTH halves

There is no `L7` in the psychiatry series and none in the neurology series. Per the standing ruling
(2026-08-14): **a lecture-numbering gap means the professor withheld it. Fill and tag, never chase.**

---

## 3. ⚠️⚠️ SIX CHAPTERS WERE MATERIALLY UNSOURCED — **THREE STILL ARE** (verified by grep, not assumed)

⚠️ **Three have closed, and each closed a different way — the pattern is worth carrying.**
`ps-pharm` (2026-08-18) — **the source was misread**, a picture deck taken for a thin one.
`nr-headache` (2026-08-19) — **the book paid in full**, ten self-contained pages, and the chapter
printed at 10 pp. `ps-anxiety` (2026-08-23) — ⚠️⚠️ **the grep HIT and the hits were DISMISSED.**
The row below reads *`panic` and `phobia` appear as symptom lists inside symptomatology* — those
hits were `L4,5`'s anxiety block, misread from the match line without opening the slides. The
phrase the row searched for, `generalized anxiety`, is one the deck never writes: it writes **GAD**.
⚠️ **Two of the three were reading failures, not material failures** — and the second is the
standing *read the slide before declaring a gap* rule failing in its subtlest form: **a hit
explained away is more dangerous than a miss, because it looks like evidence.** Still open:
`nr-delirium` (coma), `ps-geri`, `ps-osce`.

Each of these was checked **against all 25 caches** on 2026-08-18. The standing rule is *read the
slide before declaring a gap — paid 13 times* — so each line below names the search that was run.

| Chapter | q | The evidence |
|---|---|---|
| **`nr-headache`** | **22** | **`"tension type"` returns ZERO across all 25 decks.** `headache` appears only as a *symptom mention* inside Stroke, Cervical pain, symptomatology, Cranial nerves and CNS infection; `migraine` likewise scattered. **There is no headache lecture.** This is the module's worst mismatch: **22 questions, no source** — the `op-va` shape, and worse |
| **`nr-delirium`** | 0 | Titled *"Delirium and Coma"*. **`Glasgow` and `GCS` both return ZERO module-wide**, and `brain death` returns zero. `coma` appears as a passing mention in four decks. L13 supplies delirium; **coma has no source at all** |
| **`ps-geri`** | 0 | **`geriatric` returns ZERO across all 25 decks.** L13 is *Dementia and Delirium* and supplies dementia only; `elderly` appears in four decks as passing mentions |
| ~~**`ps-anxiety`**~~ | 0 | ✅ **CLOSED 2026-08-23 — and the "no deck" verdict was WRONG.** The **back half of `L4,5`** is an anxiety block, deferred here by `ps-symptom`'s `sy-10`; the grep above missed it because it searched for `generalized anxiety`, which the deck never writes. ⚠️ **But the deck half measures only 233 words** — book Psych ch.3 carries the chapter. **A deck existing and a deck being a source are different claims** |
| **`ps-osce`** | 0 | **`OSCE` returns ZERO across all 25 decks.** Shares `L1,2) Psychiatric sheet` (17 pp, 409 w) with `ps-interview` at best |
| ~~**`ps-pharm`**~~ | 0 | ✅ **CLOSED 2026-08-18** — the deck was a picture deck, not a thin one; cache 239 → **3,358 w**. ⚠️ **But it prints NO DOSE for any drug and names NO antidepressant**, so the chapter still leans hard on the §4 fill-and-tag rule |

**`ps-interview` and `ps-osce` share a 409-word deck between them**, which is below the §14 floor of
600 for one chapter, let alone two.

### What this means

**The book is not optional here.** `Semester 8\Neuro\Theoritical\Book\neuropsychiatry.pdf` —
**292 pages, A4, image-only** — is being mapped 2026-08-18 into `content\neuro\book-map.md`.
⚠️ Its producer string is `Haru Free PDF Library 2.0.8c`, **identical to the HEALIX ophthalmology
book**, so it may carry the same exam-weight column and `(Tutorial)`/`(T)` markers — **a hypothesis
being tested, not an assumption.**

⚠️ **The scope ruling from ophthalmology carries over: scope comes from the LECTURE SERIES; the book
is the authority on CONTENT, never on scope.** Do not propose adding chapters for book chapters
without a lecture. Ask only if the evidence is strong, and record the answer as settled.

---

## 4. Budgets and split forecast — **recalibrated on this module's own printed pages**

Budget = `max(source words, 25 × q)`, floor 600, **operative ceiling ~2,400 words / ~10 printed
pages, hard shape ≤13 pp measured by printing.**

### ⚠️⚠️ THE MODULE HAS **TWO** PAGE RATES, AND TABLES DECIDE WHICH

Four chapters are printed now, and they do **not** share one rate:

| chapter | body words | printed | w/pp | shape |
|---|---|---|---|---|
| `nr-stroke` | 3,365 | **10 pp** | **337** | prose-leaning |
| `nr-hemi` + `nr-para` *(as one, before the split)* | 4,687 | **14 pp** | **335** | prose-leaning |
| **`nr-headache`** | **2,811** | **10 pp** | **281** | ⚠️ **table-heavy — six tables, one of them 14 rows × 4 columns** |
| **`nr-cranial`** | **3,823** | **12 pp** | **319** | table-heavy, but long prose blocks between the tables |

⚠️ **The spread has since WIDENED at both ends — 281 to 343 w/pp**, the top set by `ps-anxiety`
(3,772 w / **11 pp**) on 2026-08-23. Its ÷280 forecast was **13.5 pp against a printed 11**. The
rate does **not** track table count the way the four rows below suggested. ⚠️⚠️ **`ps-anxiety`
carries THIRTEEN TABLES over 91 table lines — the most table-dense chapter in the module — and
printed at the HIGHEST w/pp in it.** That is a direct counterexample to *a table costs more paper
per word*, which predicted the opposite. **Hypothesis, not a rule** *(mine, unproven)*: the paper
cost tracks **cell WIDTH**, not table count — `nr-headache`'s slow table was **14 rows × 4 narrow
columns**, where most of `ps-anxiety`'s are **2 columns with long wrapping cells**, which pack more
words per printed line than prose does. **Until that is tested, treat the divisor as a planning
figure with a ±3-page error bar and clear every chapter by printing it.**

**The original observed spread was 281–337 w/pp. Plan everything at ÷280 and clear it by printing.** ÷280
forecast `nr-cranial` at 13.6 pp against a printed **12** — an OVER-prediction, which is the safe
direction and the whole reason that divisor was chosen. Under-predicting is the failure that
matters, because it accepts a chapter that prints too long. `nr-headache` printed at **11 pp on
the first pass** — over the operative ceiling that ÷335 said it would clear by two pages — and needed
a trim. **A table costs more paper per word than a paragraph**, which is the same finding §14.1
records from ENT (238–259 w/pp for table-dense chapters against 278–319 for prose-leaning ones), and
it is now confirmed inside this module.

**Count the tables before choosing a divisor**, and **clear a chapter only by printing it.** The
generic ÷240 estimator remains wrong here in the other direction: it forecast the first two at 14.0
and 19.5 against printed 10 and 14 — **over-predictions of 4.0 and 5.5 pages**, and it once made a
writer propose splitting `nr-stroke`, which never needed it.

**⚠️ The trim that recovered the page must be duplication, never a fact.** `nr-headache`'s came from
two blocks written twice — the book's three self-contradictions, listed inline where they are used
*and* again in a consolidated block, and a cross-module pointer stated in two sections. 56 words, one
page. Look for a second copy before looking for something to cut.

### Split candidates, re-forecast on corrected word counts

| Chapter | source w | ÷335 | verdict |
|---|---|---|---|
| ✅ **`nr-movement`** | **5,020** (L3 2,699 + L4 2,321) | forecast **15.0 pp** | ✅✅ **WRITTEN AND SPLIT 2026-08-22/23 — and this one was SPLIT BEFORE WRITING**, the only chapter in the module where the evidence was in hand first. **`nr-movement`** (L3, 11 sections, 4,075 w, **printed 13 pp**, keeps `npqb-nr-113`) and new **`nr-epilepsy`** (L4, 12 sections, 3,637 w, **printed 12 pp**, 0 q). ⚠️ **The "both halves sit near 7–8 pp" note in the old row was WRONG — they printed 13 and 12.** A source word count under-predicts this style badly: 2,699 source words became 4,075 written. **Measured 313 w/pp** |
| ✅ `nr-cranial` | 3,700 | **printed 12 pp** | ✅ **WRITTEN 2026-08-19 — WHOLE**, 12 sections, 3,823 w, all 34 questions linked. Over the ~10 pp operative ceiling and inside the ≤13 hard shape, which is where ophthalmology shipped `op-glauc` and `op-conj`. ⚠️ **A CONTIGUOUS SEAM EXISTS IF IT IS EVER WANTED** and is recorded so nobody re-derives it: `cn-1`–`cn-7` (**I–VI and trigeminal neuralgia**, 1,779 w, **21 questions**) against `cn-8`–`cn-12` (**VII–XII and the facial palsies**, 2,044 w, **13 questions**) — two ~6 pp halves. The examination-vs-disease seam the draft header first proposed is **NOT contiguous** and would reorder the chapter |
| `ps-pharm` | 3,456 + book | 10.3 pp | whole, but ⚠️ **the book adds 4 pages and Psych ch.7 adds the antipsychotics** — watch it |
| ✅ `nr-lmn` | 3,573 (L5 2,048 + L6 1,525) | **printed 17 pp WHOLE** | ✅✅ **WRITTEN AND SPLIT 2026-08-22.** Written whole against both decks, spliced, printed — **17 pp, four past the hard shape** — then split on the **deck boundary**, which was contiguous and needed no reordering. **`nr-lmn` (L5, muscle + NMJ): 10 sections, 3,481 w, printed 12 pp**, keeps `npqb-nr-118`. **`nr-nerve` (L6, peripheral nerve): 5 sections, 2,134 w, printed 8 pp**, zero questions. ⚠️ **This REVERSED the original `nr-lmn1`+`nr-lmn2` merge** — the merge rule joins one topic taught over two lectures, and these are two topics. ⚠️ **The ÷335 row above forecast 10.7 pp against a printed 17** — its worst miss in this module, and the reason ÷280 is the planning divisor |
| ✅ `nr-headache` | 3,647 (book ch.9) | **printed 10 pp** | ✅ **WRITTEN 2026-08-19** — whole, 11 sections, 2,811 w, all 22 questions linked |
| ✅ `ps-ocd` | deck 2,322 + book pp. 197-199 | **printed 14 pp WHOLE** | ✅✅ **WRITTEN AND SPLIT 2026-08-22.** ⚠️ **Two second copies were trimmed FIRST and it was not enough** — a consolidated *which-source-has-what* table and a restatement of PTSD prevalence recovered **82 words of paper**, leaving **50 words on page 14** with **nothing left that was duplication**. Split on the deck's own **`PART ONE` / `PART TWO`** seam: **`ps-ocd`** (OCD, 10 sections, 3,139 w, **printed 10 pp**, keeps `npqb-ps-7`) and new **`ps-ptsd`** (PTSD + ASD, 4 sections, 1,850 w, **printed 6 pp**, 0 q). ⚠️ **The first split of a SINGLE deck** — §4 joins one TOPIC over two lectures and says nothing about two disorders in one lecture. **Measured rate 306 w/pp** |
| ✅ `ps-anxiety` | **1,986** (book share 1,753 + deck 233) | **printed 11 pp** | ✅ **WRITTEN 2026-08-23 — whole, no split.** 10 sections, **3,799 w**, 0 q. ⚠️ **THE WORST INFLATION YET MEASURED: 4,012 words FIRST DRAFT = 202 % of source** (`nr-movement` was 163 %). **240 words of my own connective prose were cut before printing** — including one **untagged outside-knowledge claim** (dating the three-way split to DSM-5 2013, which the book never says) and one **consolidated second copy** (a divergence block restating four findings already stated where they are used — the `nr-headache` shape). **No sourced fact was cut.** ⚠️ **Measured 343 w/pp — a NEW MODULE HIGH**, and ÷280 forecast 13.5 pp against a printed **11**, an over-prediction of **2.5**. ⚠️ **The two read-first pointers both paid**: `oc-10` gave the spine accounting, `sy-10` gave a deck the plan denied |
| `nr-ms` · `ps-psychosis` · `ps-symptom` | 2,251–2,441 | 6.7–7.3 pp | inside the ceiling. ⚠️ **`ps-ocd` was in this row and printed 14 pp** — a deck word count is not a page count when a second source is added |
| everything else | 1,257–1,924 | 3.8–5.7 pp | single chapters |

⚠️ **`ps-interview` + `ps-osce` are the sharpest inverse problem** — **473 words** for two
chapters, and **the book has no OSCE chapter at all** (its two OSCE-shaped contents rows are QR
video links with no page number). One or both will run at the 600 floor, and `ps-osce` may have to
be told plainly that neither source covers it. **That is a decision to surface, not to paper over.**

⚠️ **`nr-intro` is the module's other structural question**: 21 questions, a 1,469-word deck, and
**39 printed book pages across three chapters including a 25-page `Neurology Sheet`**. Flagged by
the book mapper as a split candidate on precedent. **Not decided — read before forecasting.**

---

## 5. Order of work

1. ✅ Deck inventory, extraction check and gap grep — **done 2026-08-18**.
2. ✅ **Book map** — `content\neuro\book-map.md`, done 2026-08-18.
3. ✅ **`L17` visual read** — cache 239 → 3,358 w, done 2026-08-18. `ps-pharm` is unblocked on the
   deck but still **partial** on antipsychotics — see the dead-heading finding below.
4. ✅ **Written — 16 of 31** *(measured from disk 2026-08-23)*: `nr-stroke` · `nr-hemi` ·
   `nr-para` · `nr-headache` · `nr-cranial` · `ps-symptom` · `ps-psychoed` · `nr-ms` · `ps-mood` ·
   `nr-lmn` · `nr-nerve` · `ps-ocd` · `ps-ptsd` · `nr-movement` · `nr-epilepsy` · **`ps-anxiety`**.
   **148 sections, 44,105 body words. 130 of the module's 151 questions reachable.**
   **15 chapters holding 21 questions remain — and `nr-intro` holds ALL 21.**
   ✅ **Book Psychiatry ch.3 is now FULLY SPENT** across `ps-ocd`, `ps-ptsd` and `ps-anxiety`;
   the page-by-page accounting is in `ps-anxiety`'s **`ax-10`**.
5. ⚠⚠ **`nr-intro` (21 q) IS THE NEXT ONE AND IT IS BLOCKED — IT NEEDS A USER DECISION.**
   It holds **21 of the 23 questions left — all but two.** **12 of 23 fact probes return ZERO
   against its deck** (gracile/cuneate, triceps, abdominal reflex, hemianopia, optic radiation,
   power grading, biceps, brachioradialis, clonus, somatosensory, rigidity, lateral column). The
   book HAS the material — **39 printed pages across three chapters, including a 25-page
   `Neurology Sheet`** — but those pages are **image-only**. So it is **a subagent render, or a
   chapter written half from tagged outside knowledge**. Not chosen; surfaced.
   ⚠️ **`nr-intro` OWES two slides to `nr-lmn`:** L1's `Upper Motor Neuron Manifestations` and
   `Lower Motor Neuron Manifestations` are **counted to `nr-lmn`'s `lm-1`** and **must not be
   counted again** when `nr-intro` is written. Same shape as `op-va`/`L1,2` in ophthalmology.
   ⚠⚠ **After `nr-intro` NOTHING ELSE CARRIES A QUESTION.** ✅ `ps-ocd` and ✅ `nr-movement` are
   written, so `nr-intro` now holds **21 of the 21 questions left in the module** and **every one
   of the other fifteen unwritten chapters carries ZERO** — counted, not carried over.
6. **Then the psychiatry chapters with full decks**, then the six materially unsourced ones once the
   book has said what it can pay.
7. Validate → splice → refile → **print** → audit → commit, per chapter. Harnesses:
   `<scratch>\vdraft.js` · `splice-neuro.js` · `resplice-neuro.js` (re-print cycles;
   `splice-neuro.js` refuses to overwrite, by design) · `modcheck-neuro.js` ·
   `MOD=neuropsych print.sh` · `boot.sh` · `qdump.js <mod> <chapter>` (a chapter's questions with
   the key marked, for the §14.2 coverage floor).

## 6. Standing checks earned elsewhere — apply from chapter one

- **§14.3a anchor rule**: a bold lead needs a `:` or `—` inside the **first 44 characters**, or the
  whole bold ≤44. It failed **29 times in two ophthalmology chapters** and 73 in another. Audit
  every draft; the emoji costs 2 characters.
- **No bold-led PARAGRAPH over 55 words.** ⚠️ **A cap auditor must separate bullets from
  paragraphs** — conflating them faked four failures.
- **§14.5: an unrecorded promise is a deletion** — and ⚠️ **audit "row filed" claims against the
  register**: four ophthalmology sections told the reader a row existed when none did.
- **A row's evidence carries a timestamp.** Re-run the grep; never quote another row's finding.
- **A dead agent's file is usually complete — validate it from disk before rewriting** (6 recoveries).
- **A draft header is a claim, not a measurement.** Re-count from disk after the final edit.
- **Gaps are ANSWERED AND TAGGED, never declared** (`CLAUDE.md` §4) — and with six unsourced
  chapters, this module will lean on that rule harder than any before it. **Prefer the book to
  outside knowledge wherever it prints the fact.**

---

## ✅ `L17) Psychopharmacology` — READ 2026-08-18, cache **239 → 3,358 words**

`ps-pharm` is unblocked. Verified from disk: 3,358 w / 572 lines, drug names present, both
illegible items marked in place.

### ⚠️⚠️ A FOURTH TEXT-LAYER FAILURE MODE: **THE PICTURE DECK**

The `pdffonts` diagnosis came back as **none of the three known causes**. Fonts are embedded, real,
and **every character they carry extracts perfectly** — which is exactly why `-layout` returned the
same 239 and why the stub looked like a genuine text-light deck.

**The content is not text at all. It is pasted raster screenshots of text.**

- **19 of 31 pages carry ZERO embedded fonts** (2, 6–10, 16, 18, 19, 21, 23–25, 28, 29, 31);
  `pdfimages -list` shows each holds a full-slide bitmap.
- **7 more carry fonts but ≤25 extractable characters** — a title and nothing else (1, 3, 11, 13,
  14, 15, 20).
- **Only 6 slides carry real body text** (5, 12, 17, 22, 26, 27, 30).

Not a scan — fonts exist and the file is a 1.8 MB tagged PowerPoint LTSC export. Not vector outlines
— that mode lists fonts that yield nothing, and here every listed font yields its characters.
**The transcription can claim full coverage, because the bitmaps are screenshots of TEXT, not
diagrams standing in for text.**

**The diagnostic that separates it from the other three:** `pdffonts` per page **plus**
`pdfimages -list`. Fonts present + characters extract + word count still absurd = **picture deck**.

⚠️ **A second trap on the same deck: slide 22's `• Indications:` line EXISTS in the text layer but
is INVISIBLE on screen**, covered by a banner image stacked on top of it. It was recovered from
`pdftotext` and would have been lost by a purely visual read. **On a picture deck, read the text
layer AND the pixels — neither alone is complete.**

### ⚠️⚠️ THE DECK PRINTS NO DOSE, NO UNIT, NO ROUTE AND NO FREQUENCY FOR ANY DRUG

**Independently verified at the hub**: a regex for `mg` / `mmol` / `mEq` / `ng/ml` / `mcg` over the
whole cache returns **nothing**. In 31 slides of psychopharmacology the only quantity printed
anywhere is that benzodiazepines **"must NOT be used more than ONE month"**.

**So `ps-pharm` is this module's purest `CLAUDE.md` §4 chapter.** Doses are answered from general
medical knowledge and tagged, never declared missing. Shape to copy: `entep-throat-103`, and
`lid-11` / `lac-10` for the register sections.

### What the deck does and does not name

| Class | Agents printed | Doses | Indications | Side effects |
|---|---|---|---|---|
| **Antidepressants — all five classes** | ⚠️ **NONE. Not one antidepressant is named anywhere in 31 slides** | ❌ | ✅ 9, class-wide (sl.5) | partial |
| TCA · SSRI · NDRI · NaSSA | — | ❌ | ❌ | ✅ receptor blockade · the four S's · sl.12 |
| SNRI | — | ❌ | ❌ | ⚠️ **pictures only — sl.11 words none of them** |
| MAOI | — | ❌ | ❌ | ⚠️ **named once (sl.6) and never returned to — no agent, no tyramine rule, no washout** |
| Typical antipsychotics | Chlorpromazine · Haloperidol · Pimozide · Fluphenazine · Trifluoperazine | ❌ | ✅ 6 | ✅ pathway-based, arrows only |
| Atypical (D+5HT) | Amisulpiride *[sic]* · Clozapine · Olanzapine · Sertindole · Zotepine · Quetiapine | ❌ | ✅ | ❌ **no metabolic syndrome, no agranulocytosis** |
| Atypical (partial D agonist) | Aripiprazole | ❌ | ✅ | ❌ |
| Lithium | Lithium | ❌ | ✅ 4 | ✅ LITHIUM mnemonic + CAN HAM SUCS toxicity — but ⚠️ **no serum level and no monitoring** |
| Anticonvulsants | Carbamazepine · Lamotrigine · Sodium valproate | ❌ | ✅ | ✅ with monitoring; valproate CI in pregnancy |
| Mood-stabilising atypicals | Quetiapine · Olanzapine · Lurasidone · Aripiprazole · Risperidone · Paliperidone | ❌ | ✅ | ❌ |
| Benzodiazepines | Alprazolam (Xanax) · Clonazepam (Klonopin) · Diazepam (Valium) · Lorazepam (Ativan) · Triazolam (Halcion) · Temazepam (Restoril) · Chlordiazepoxide (Librium) | ⚠️ only the **one-month ceiling** | ✅ 5 | ✅ 7 |

**Zero drug interactions anywhere in the deck.** Serotonin syndrome is given as an 11-item symptom
list **with no precipitant named**. Lurasidone, Risperidone and Paliperidone appear **only** in the
mood-stabiliser list, never in the antipsychotic table.

### Two things genuinely illegible — recorded, NOT inferred

1. **Slide 14** — the fourth Affective symptom in the SSRI discontinuation figure. The lecturer's
   screenshot was taken with a **Google Translate floating button on screen**, and the white button
   (Arabic *"ترجمة"*) is baked into the raster over the line. Only `…ess` survives at 600 dpi.
2. **Slide 18** — **at least one further row of the antipsychotic classification table**, below the
   Aripiprazole row. The pasted screenshot is cropped *through* the line; letter-tops survive across
   all four columns, proving a row is there and not permitting a single word of it to be read.
   **The deck therefore delivers an incomplete classification.**

Both are marked `[illegible]` in the cache with the reason. **Neither was completed from knowledge
inside the cache file** — that is the cache's contract. `ps-pharm` may fill them in the chapter,
tagged, but must not present the fill as the deck's.

### Also promised and never delivered

Slide 20's title ends in an unfilled `()`. Slides 15 and 16 are headed *"special considerations"*
and state no consideration — **slide 16 is two loaded images with no title and no text, and its
intent is unrecoverable.** Say so in the register rather than guessing at it.

---

## ✅ The book, mapped 2026-08-18 — `content\neuro\book-map.md` (4,774 w)

Built from a 30-dpi thumbnail sweep of all 292 pages plus 26 pages read at 150 dpi.

### ⚠️⚠️ IT IS NOT A HEALIX BOOK — three of four carried-over assumptions were REFUTED

The shared `Haru Free PDF Library 2.0.8c` producer string means **a shared scanning pipeline and
nothing more.** The book is **`NEUROPSYCHIATRY` by `ASM MINDS`** — a different publisher.

| Assumption carried from the ophthalmology book | Result |
|---|---|
| A contents `Relative weight in %` column | ❌ **REFUTED.** Columns are `Lecture · Page No. · Barcode`. **There are no exam weights anywhere in this book** — the budgeting basis that rescued ophthalmology has no counterpart here, so §14's word-based budget is all we have |
| `(Tutorial)` / `(T)` markers | **NOT FOUND** in 26 pages, and absent from the contents page — which is exactly where the sister book declares it. ⚠️ Recorded as *"not found"*, **not** *"proved absent"* |
| Blue rule + `OBJECTIVES:` flowchart openers | **Partly** — coloured banners yes, **no objectives block on any of 8 openers read** |
| `PDF = printed + 2` | ❌ **REFUTED** — see below |

**This is exactly why the hypotheses were briefed as hypotheses.** Carrying them over unverified
would have produced a wrong page offset on every citation in the module.

### ⚠️⚠️ THE PAGE OFFSET CHANGES HALFWAY THROUGH THE BOOK

**Neurology: `PDF = printed + 11`. Psychiatry: `PDF = printed + 12`.** The break is the unnumbered
`PSYCHIATRY` divider leaf at PDF 188. **Verified at eight points** by footer + heading.

**And chapter numbering RESTARTS in the psychiatry half** — the book is **30 chapters in two
independently-numbered halves**: **Neurology 17 (printed 1–176), Psychiatry 13 (printed 177–277).**
⚠️ **A bare "chapter 6" is ambiguous. Always cite the half.** Lengths sum to exactly 176 and 277,
and 277 printed + 15 unnumbered leaves = 292 — the arithmetic closes.

**Two complete design systems, one per half**: neurology uses serif small-caps openers with a
top-right running header; psychiatry uses rounded handwriting banners and a running *footer*. A page
can be assigned to its half on sight.

### What the book pays for the five unsourced chapters

| Chapter | Book source | Verdict |
|---|---|---|
| **`nr-headache`** (22 q) | **Neurology ch.9 `Headache`, printed 80–89 / PDF 91–100** | ✅ **Ten self-contained pages** — definition, epidemiology, the full primary/secondary classification flowchart, and a colour-highlighted **three-column tension / migraine / cluster table**. **This alone can carry the chapter and its questions.** |
| **`ps-anxiety`** | **Psychiatry ch.3, printed 193–201 / PDF 205–213** | ✅ Nine pages — **and it also covers `ps-ocd`**: the opener prints the DSM-5 three-way split (anxiety / OCD & related / trauma & stressor-related) |
| **`ps-pharm`** | **Psychiatry ch.11 `Treatment in psychiatry [Psychopharmacology]`, printed 261–264 / PDF 273–276** | ⚠️ **Only four pages**, much of it inside a full-width `ANTIDEPRESSANTS` infographic in small type. **Expect to supplement** |
| **`ps-geri`** | Psychiatry ch.8 `Dementia and delirium` | ⚠️ **Partly served — there is no geriatric chapter** |
| **`ps-osce`** | ⚠️ **NONE** | **The one app chapter the book cannot cover.** The two OSCE-shaped contents rows (`Psychiatric Sheet`, `Clinical Case`) are **QR video links with no page number**. Nearest printed material is Psychiatry ch.1 p.184 — genuine MSE technique, but that is `ps-interview`/`ps-symptom`'s chapter read a third time |

**No book chapter is unclaimed**, and `nr-delirium` straddles both halves.

### Three findings to carry into the writing

- ⚠️ **`nr-intro` owns 39 printed pages across THREE book chapters**, including a 25-page
  *"Neurology Sheet"*. **Split candidate on precedent** — flagged, not decided. It also has 21 q.
- **Figure numbering: none found in 12 chapters sampled.** The closest is lettered sub-panels
  `(a)/(b)/(c)` with no figure number. ⚠️ **Recorded as a 12-chapter observation, explicitly NOT a
  rule** — the ophthalmology equivalent of this claim was false within hours.
- **Dead-pointer check clean** across 16 sampled pages: every heading had a body.
- **A title mismatch, recorded not corrected:** the book prints **`Cranial and Low Back pain`** where
  the app says **Cervical**, and the chapter's own contents QRs read `Neck and Back Pain`. The app is
  probably right and the book probably has a typo. **Do not silently "fix" either.**

**Not established** and honestly flagged by the mapper: year, edition and ISBN (not printed);
whether tutorial markers or star ratings exist deeper than the 26 pages read; whether any chapter
numbers its figures; whether the QR videos duplicate printed material.

---

## ✅ Book ch.9 Headache · Psych ch.3 Anxiety · Psych ch.11 Treatment — READ 2026-08-18, 9,441 w

Caches in `content\neuro\book\`: `neuro-ch09-headache.txt` (3,647 w) · `psych-ch03-anxiety.txt`
(3,376) · `psych-ch11-treatment.txt` (2,418). **Both offsets re-verified from printed footers, and
all three boundaries held exactly.**

### ✅ `nr-headache` is unblocked — the chapter carries 21 of its 22 questions

Ten pages: classification flowchart, a **12-item red-flag box**, migraine in full (four phases,
abortive and preventive ladders), tension-type, cluster with **100 % O₂ at 6 L/min**, and the
**three-column comparison table**.

⚠️ **One question the chapter cannot answer: `npqb-nr-125`** — *"Migraine is best classified as
which of the following?"*, printed key **`Nociceptive`**, distractors *neuropathy* and *VC cause
psychiatric manifestations*. **Chapter 9 contains no pain taxonomy at all** — no
nociceptive/neuropathic/psychogenic framework in ten pages; its only mechanistic statement is that
*"the most accepted theory of migraine is the Neurovascular theory."* **Neuro ch.16 is being read
for it** (its contents QRs are labelled *"Pain and pain management"*), and that chapter is
`nr-backpain`'s source anyway — so one render serves two chapters and one orphan question.

⚠️ **Six more are answerable but THINNER THAN THE KEY IMPLIES, and the writer must know which:**

| q | The problem |
|---|---|
| `nr-133` + `nr-138` | Both hinge on an **acute-vs-long-term split for tension headache the book does not print** — it gives one undifferentiated triad of *analgesics, antidepressants and muscle relaxants*, so the chapter cannot rank them |
| `nr-136` | Temporal arteritis: elderly + throbbing + raised ESR + steroids are printed, so the **treatment** answer is solid — but **jaw claudication and scalp tenderness, the stem's whole clinical hook, are printed nowhere** |
| `nr-132` | Visual aura is listed first and is the only type elaborated — the chapter **never says it is the most common** |
| `nr-122` | Thunderclap is red flag #2, so "verify the headache" holds; **the psychiatric-consultation half is not in this chapter** |
| `nr-134` | Key is ergotamine, but the chapter **also endorses paracetamol** as an OTC migraine treatment, so it weakly discriminates its own distractor |

`nr-135` is the best-served: the key is almost verbatim the printed-84 sentence.

### ⚠️⚠️ A SECOND HEADING WITHOUT A BODY — and it blocks `ps-pharm`

Psych ch.11 printed 263 heads **`Antipsychotics`**, teaches **indications only, as a picture**, then
defers everything else in one red line: ***"Classes, mechanism of action & adverse effect: (See
'schizophrenia' lecture)."*** No class, no mechanism, no adverse effect, no drug name on the page.

**`ps-pharm` cannot cover antipsychotic pharmacology from ch.11.** The payload is **Psych ch.7
Schizophrenia, printed 228–238** — being read now, and it is `ps-psychosis`'s source anyway.
The map's `ps-pharm` cell has been **downgraded from "Full" to "partial"**. There is also **no MAOI
adverse-effect block**: the numbered list runs 1–5 and stops.

**That is the second dead heading found in two books in two days.** The rule is now
double-confirmed: **a heading is not evidence that the chapter teaches the topic.**

### The book names antidepressants where the lecture named none — and still prints no dose

**25 agents across 8 classes are named, and for not one is a dose, unit, route or frequency
printed.** The complete quantitative content of the chapter is **five items**:

1. **Lithium `RANGE: 0.6-1.2 mEq/L`** — the only value with a unit, confirmed at 300 dpi
2. Benzodiazepines **max 1 month**
3. Serotonin syndrome — intervene **within 24 hours**
4. Antidepressant suicide risk — **under 25 years**, first **6 months**, **4-7/1000**
5. Discontinuation syndrome — on the drug **at least four weeks**

**Monitoring parameters for four drugs**: lithium (serum range) · sodium valproate (**LFTs + CBC**) ·
lamotrigine (**Stevens-Johnson**) · carbamazepine (**CBC / low WBC**). Cautions: paroxetine
**pregnancy class D**, phenelzine **tyramine cheese reaction**, lithium and valproate
**contraindicated in pregnancy and lactation**.

**So `ps-pharm` gains 15 named antidepressants the lecture never named — and gains no doses.** The
§4 fill-and-tag rule still carries the dosing, and the chapter must not present a supplied dose as
the book's.

### ⚠️ `ps-anxiety` and `ps-ocd` share one chapter — and share its whole treatment section

`ps-ocd`'s **exclusive** pages: printed **194 upper half** · **197 from `C. OCD` down** · **198
entire** (an all-figure OCD page) · **199 upper part** (PTSD/ASD). Everything else is `ps-anxiety`'s
or jointly owned — critically, **the differential diagnosis, investigations, prognosis and the
entire treatment section (199-201) are written ONCE for both app chapters**, including the
OCD-specific 4-12 week onset and the clomipramine line.

**⚠️ Whichever of the two is written first MUST declare in its §14.5 row what it leaves to the
sibling.** Full page-split table at the foot of the anxiety cache.

### ⚠️ A LIST IS NOT COVERAGE — a softer failure, worth naming

The anxiety chapter's DSM-5 lists name **sixteen disorders** and expand **seven** (+ASD in a Note).
**Listed and never taught:** hoarding · trichotillomania · excoriation · body dysmorphic ·
adjustment · reactive attachment · disinhibited social engagement · separation anxiety · selective
mutism. Do not let a list in the source become a claim of coverage in the chapter.

### Three self-contradictions in the headache chapter — recorded, NOT reconciled

- **TTH prevalence 40 %** (printed 85) vs **45 %** (printed 88)
- **TTH sex ratio `M:F 2:3`** (printed 85) vs **`F:M = 2:1`** (printed 88) — *not the same number*
- **Aura duration 5-20 min** (printed 82 prose) vs **5-80 min** (printed 83 poster)

Also: the cluster-headache **`Histamine`** aetiology appears **only** in the printed-88 table cell —
the cluster prose on 86-87 gives no pathogenesis at all. And the anxiety chapter's section lettering
runs **A, B, —, —, —, C, D**.

### Housekeeping confirmed

**No `(Tutorial)`/`(T)` marker on any of these 23 pages** — the count now stands at **none found in
49 of 292**, still recorded as *not found*, never *proved absent*. **No star ratings. No figure
numbering anywhere** across 20+ graphics. **Nothing illegible** — everything resolved at 150 dpi,
and re-cropping two posters and a table at 300 changed no character.
