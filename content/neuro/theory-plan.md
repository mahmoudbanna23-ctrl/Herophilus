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

**33 chapters in two groups: Psychiatry 18, Neurology 15.**
⚠️ **Was 27. SIX SPLITS added one each.** Three were made **after printing** over the 13-page
hard shape — `nr-hemi`/`nr-para` 2026-08-18 · `nr-lmn`/`nr-nerve` and `ps-ocd`/`ps-ptsd` both
2026-08-22 — and **two were FORECAST and taken BEFORE writing**: `nr-movement`/`nr-epilepsy`
(2026-08-22/23), **`ps-psychosis`/`ps-schizmgmt`** and **`nr-backpain`/`nr-neckpain`** (both 2026-08-23). ⚠️ **`ps-ocd` split a SINGLE
deck** — see §4. Ids and titles in `app\data\modules.js`
under module id `neuropsych`. **151 questions**, all `gradegain`, all MCQ, ids `npqb-`.

⚠️⚠️ **FORECAST ONLY WHEN THE FORECAST IS FAR PAST THE SHAPE — OTHERWISE PRINT FIRST.** The two
forecast splits printed **13/12** and **9/10 pp**, every half inside the shape first time, and each
of the three *found* splits cost a whole extra write-print-split cycle. **But `ps-pharm` forecast at
14.9 pp and printed 11** — pre-splitting it would have made two unnecessary chapters. **The rule
that survives both results: split before writing when ÷280 says 16 or more, as `ps-psychosis`'s
20-30 did; PRINT FIRST anywhere between 13 and 15.** Divisor and inflation figures in §4.

### ⚠️⚠️ THE QUESTION DISTRIBUTION IS THE MOST LOPSIDED IN THE PROJECT

**Neurology holds 133 of 151 questions. Psychiatry holds 18. TWENTY of the 33 chapters have NONE**
*(counted from `questions.neuro.js` against `modules.js` on 2026-08-23, not carried over; the five
splits each added a zero-question half).*

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
| **0** | **TWENTY**: `ps-interview` · `ps-osce` · `ps-somato` · `ps-anxiety` · **`ps-ptsd`** · `ps-psychosis` · **`ps-schizmgmt`** · `ps-geri` · `ps-child` · `ps-sud` · `ps-emerg` · `ps-pharm` · `ps-devices` · `ps-therapy` · **`nr-epilepsy`** · **`nr-nerve`** · **`nr-neckpain`** · `nr-cns` · `nr-delirium` · `nr-backpain`. *The six bolded were added by the splits; in each pair the other half keeps the question — except `nr-backpain`/`nr-neckpain`, where NEITHER half has one* |

**What this means for budgeting.** §14's budget is `max(source words, 25 × questions)`, floor 600.
With **20** chapters at zero questions, **the deck word count governs almost the whole psychiatry half**
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
| L11,12) Schizophrenia | 57 | **2,251** | 2,180 | 39 | `ps-psychosis` + **`ps-schizmgmt`** ✅ ⚠️ *86 % of it is FIVE CASE VIGNETTES — see §4* |
| L10) Stroke | 53 | **2,090** | 2,047 | 39 | `nr-stroke` ✅ *written* |
| L5) Muscle Disease | 55 | **2,048** | 1,807 | 37 | `nr-lmn` ✅ |
| L9) CNS infection | 40 | **1,924** | 1,818 | 48 | `nr-cns` |
| L18) Devices in Psychiatry | 23 | **1,909** | 1,806 | 83 | `ps-devices` ✅ *single-source chapter; it pays the ECT row `ps-emerg` and `ps-schizmgmt` both filed* |
| L15) substance related + psych emergency | 49 | **1,854** | 1,771 | 38 | `ps-sud` ✅ **+ `ps-emerg`** ⚠️⚠️ *TWO LECTURES IN ONE DECK — lines 1–204 substance (**1,121 w**) → `ps-sud`; lines 205–354 emergency (**733 w**: NMS 240, catatonia 108, suicide 385) → `ps-emerg`. **`L15` teaches NMS IN FULL** — it pays the debt `ps-schizmgmt` wrongly filed to book ch.10* |
| L11) Cervical pain | 41 | **1,742** | 1,589 | 42 | `nr-backpain` + **`nr-neckpain`** ✅ ⚠️ *the deck INTERLEAVES: back → neck → low back* |
| L13) Dementia and Delirium | 41 | **1,672** | 1,532 | 41 | **`ps-geri` + `nr-delirium` — SHARED** |
| L16) Emergency Psychiatry | 46 | **1,597** | 1,564 | 35 | `ps-emerg` ✅ *written whole with L15 lines 205-354; the two decks disagree NOWHERE* |
| L6) Peripheral neuropathy | 44 | **1,525** | 1,465 | 35 | **`nr-nerve`** ✅ *(re-assigned by the 2026-08-22 split)* |
| L6) Myths about psychiatry | 14 | **1,522** | 1,411 | 109 | `ps-psychoed` |
| L1) INTRODUCTION AND LOCALISATION | 57 | **1,469** | 1,326 | 26 | `nr-intro` |
| L3) Somatization | 40 | **1,464** | 1,381 | 37 | `ps-somato` |
| L19) Psychotherapy | 29 | **1,382** | 1,303 | 48 | `ps-therapy` ✅ *single-deck chapter; **the most-owed in the module — five chapters filed rows to it***. ⚠️ *three of its 29 slides are picture-only and one of them, `Additional therapies…`, **promises a list and prints a picture of one*** |
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

⚠️⚠️ **THE SPREAD IS NOW 281 to 385 w/pp AND ÷280 IS OVER-PREDICTING BY UP TO 3.7 PAGES.**

| chapter | words | ÷280 said | **printed** | **w/pp** |
|---|---|---|---|---|
| `ps-anxiety` | 3,772 | 13.5 | **11** | 343 |
| `ps-psychosis` | 3,002 | 10.7 | **9** | 334 |
| **`ps-schizmgmt`** | 3,854 | 13.7 | **10** | **385** |
| **`ps-pharm`** | 4,181 | **14.9** | **11** | **380** |
| **`nr-backpain`** | 3,914 | 14.0 | **10** | **391** |
| **`nr-neckpain`** | 3,354 | 12.0 | **9** | **373** |

**All six over-predicted, which is the safe direction — but 4.0 pages of slack is enough to force
an unnecessary split.** ✅ **`ps-pharm` is the rule's first live test: forecast 14.9, printed 11.** ⚠️ **Do not split on ÷280 alone once a forecast lands between 13 and 15;
print first.** Split before writing only where the forecast is **far** past the shape, as
`ps-psychosis`'s 20–30 pp was. **The three most recent chapters are the densest in the module**, and
the likeliest reason is **long two-column table cells**, which pack more words per printed line than
prose — the hypothesis below.

⚠️ **The spread had earlier WIDENED at both ends — 281 to 343 w/pp**, the top set by `ps-anxiety`
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

### ⚠️⚠️ THE ANCHOR TOOL SILENTLY DAMAGED 23 LEADS ACROSS SEVEN CHAPTERS (found and repaired 2026-08-23)

`anchorauto.js` fixes §14.3a anchors by **promoting the first clause break below 44 characters**. Its
two rules were **a comma becomes an em-dash**, and failing that **an em-dash is inserted before the
first `and`/`or`**. Both are wrong whenever the comma joins list items or the conjunction joins a
compound subject. The damage it produced, all of it in **shipped, printed chapters**:

| Written | Became |
|---|---|
| `No mg, no mg/kg, no frequency and no serum level` | `No mg — no mg/kg, no frequency and no serum level` |
| `The deck and the book print the same four indications` | `The deck — and the book print…` |
| `Lithium and sodium valproate are contraindicated` | `Lithium — and sodium valproate are contraindicated` |
| `Stages 1 and 2 are separated by AWARENESS` | `Stages 1 — and 2 are separated by AWARENESS` |
| ⚠️ `` `Cranial and Low Back pain` `` *(a quoted contents-page title)* | ⚠️ `` `Cranial — and Low Back pain` `` |

**The last one corrupted a CITATION** — a verbatim contents-page title quoted as evidence of a
typo in the book, which the tool then made unquotable.

**Three lessons, and the third is the general one.**
1. **A meaning-preserving edit rule that operates on punctuation alone is not meaning-preserving.**
   Punctuation is where the grammar lives.
2. **Every one of the 23 passed `vdraft.js`.** The validator checks that an anchor EXISTS, never
   that the sentence still parses. **A green validator is not a read chapter.**
3. **⚠️⚠️ A TOOL THAT EDITS SILENTLY WILL EVENTUALLY EDIT WRONGLY, AND NOBODY WILL SEE IT.** The old
   version printed only a COUNT of what it changed. **It now prints every edit it makes**, refuses
   any comma followed by a coordinator or negator, refuses a comma with fewer than three words
   before it, and **the conjunction-insertion rule is deleted outright.** Backup at
   `<scratch>\anchorauto.js.bak`.

**The sweep that found them** is worth keeping: match every bold lead against
`/\*\*[^*]{0,60}?\s—\s(no |not |or |and |nor )/i` and **read each hit**. It returned 51 hits, of
which **23 were damaged and 28 were correct** — so the regex is a *finder*, never a verdict. **Page
counts did not move after the repair**, in any of the seven.

### Split candidates, re-forecast on corrected word counts

| Chapter | source w | ÷335 | verdict |
|---|---|---|---|
| ✅ **`nr-movement`** | **5,020** (L3 2,699 + L4 2,321) | forecast **15.0 pp** | ✅✅ **WRITTEN AND SPLIT 2026-08-22/23 — and this one was SPLIT BEFORE WRITING**, the only chapter in the module where the evidence was in hand first. **`nr-movement`** (L3, 11 sections, 4,075 w, **printed 13 pp**, keeps `npqb-nr-113`) and new **`nr-epilepsy`** (L4, 12 sections, 3,637 w, **printed 12 pp**, 0 q). ⚠️ **The "both halves sit near 7–8 pp" note in the old row was WRONG — they printed 13 and 12.** A source word count under-predicts this style badly: 2,699 source words became 4,075 written. **Measured 313 w/pp** |
| ✅ `nr-cranial` | 3,700 | **printed 12 pp** | ✅ **WRITTEN 2026-08-19 — WHOLE**, 12 sections, 3,823 w, all 34 questions linked. Over the ~10 pp operative ceiling and inside the ≤13 hard shape, which is where ophthalmology shipped `op-glauc` and `op-conj`. ⚠️ **A CONTIGUOUS SEAM EXISTS IF IT IS EVER WANTED** and is recorded so nobody re-derives it: `cn-1`–`cn-7` (**I–VI and trigeminal neuralgia**, 1,779 w, **21 questions**) against `cn-8`–`cn-12` (**VII–XII and the facial palsies**, 2,044 w, **13 questions**) — two ~6 pp halves. The examination-vs-disease seam the draft header first proposed is **NOT contiguous** and would reorder the chapter |
| ✅ `ps-pharm` | **3,968** (deck 2,566 + book ch.11 1,402) | ÷280 said **14.9 pp** | ✅ **WRITTEN WHOLE 2026-08-23 — printed 11 pp, NO SPLIT.** 10 sections, 4,181 w, 0 q. ⚠️⚠️ **THE FIRST TEST OF THE PRINT-FIRST RULE, AND IT PAID: ÷280 OVER-PREDICTED BY 3.9 PAGES** — a new worst, and pre-splitting on the forecast would have made two unnecessary chapters. **Measured 380 w/pp.** ✅ **The ch.11 dead heading is fully resolved** — `ph-7` points at `ps-schizmgmt`'s `sm-6`/`sm-7` and repeats none of it, while adding **the deck's own 12-agent classification table, eleven of whose agents appear nowhere in book ch.7**. ⚠️⚠️ **THE TWO SOURCES CONTRADICT EACH OTHER ON THE DOPAMINE PATHWAYS** — deck sl.19 puts positive symptoms on the **mesolimbic** and negative on the **mesocortical**; book ch.7 puts positive on the **associative nigrostriatal** and negative on the **mesolimbic**. **Recorded in both chapters, corrected in neither.** ⚠️ **The module's purest fill-and-tag chapter** — neither source prints a dose, and **the whole MAOI adverse-effect block is supplied** because the book's numbered list runs 1-5 and stops and ch.7 does not fill it either |
| ✅ `nr-lmn` | 3,573 (L5 2,048 + L6 1,525) | **printed 17 pp WHOLE** | ✅✅ **WRITTEN AND SPLIT 2026-08-22.** Written whole against both decks, spliced, printed — **17 pp, four past the hard shape** — then split on the **deck boundary**, which was contiguous and needed no reordering. **`nr-lmn` (L5, muscle + NMJ): 10 sections, 3,481 w, printed 12 pp**, keeps `npqb-nr-118`. **`nr-nerve` (L6, peripheral nerve): 5 sections, 2,134 w, printed 8 pp**, zero questions. ⚠️ **This REVERSED the original `nr-lmn1`+`nr-lmn2` merge** — the merge rule joins one topic taught over two lectures, and these are two topics. ⚠️ **The ÷335 row above forecast 10.7 pp against a printed 17** — its worst miss in this module, and the reason ÷280 is the planning divisor |
| ✅ `nr-headache` | 3,647 (book ch.9) | **printed 10 pp** | ✅ **WRITTEN 2026-08-19** — whole, 11 sections, 2,811 w, all 22 questions linked |
| ✅ `ps-ocd` | deck 2,322 + book pp. 197-199 | **printed 14 pp WHOLE** | ✅✅ **WRITTEN AND SPLIT 2026-08-22.** ⚠️ **Two second copies were trimmed FIRST and it was not enough** — a consolidated *which-source-has-what* table and a restatement of PTSD prevalence recovered **82 words of paper**, leaving **50 words on page 14** with **nothing left that was duplication**. Split on the deck's own **`PART ONE` / `PART TWO`** seam: **`ps-ocd`** (OCD, 10 sections, 3,139 w, **printed 10 pp**, keeps `npqb-ps-7`) and new **`ps-ptsd`** (PTSD + ASD, 4 sections, 1,850 w, **printed 6 pp**, 0 q). ⚠️ **The first split of a SINGLE deck** — §4 joins one TOPIC over two lectures and says nothing about two disorders in one lecture. **Measured rate 306 w/pp** |
| ✅ `ps-anxiety` | **1,986** (book share 1,753 + deck 233) | **printed 11 pp** | ✅ **WRITTEN 2026-08-23 — whole, no split.** 10 sections, **3,799 w**, 0 q. ⚠️ **THE WORST INFLATION YET MEASURED: 4,012 words FIRST DRAFT = 202 % of source** (`nr-movement` was 163 %). **240 words of my own connective prose were cut before printing** — including one **untagged outside-knowledge claim** (dating the three-way split to DSM-5 2013, which the book never says) and one **consolidated second copy** (a divergence block restating four findings already stated where they are used — the `nr-headache` shape). **No sourced fact was cut.** ⚠️ **Measured 343 w/pp — a NEW MODULE HIGH**, and ÷280 forecast 13.5 pp against a printed **11**, an over-prediction of **2.5**. ⚠️ **The two read-first pointers both paid**: `oc-10` gave the spine accounting, `sy-10` gave a deck the plan denied |
| ✅ **`ps-psychosis`** | **6,326** (book ch.7 **4,075** + deck 2,251) | forecast **20–30 pp** | ✅✅ **SPLIT BEFORE WRITING 2026-08-23**, on **`Course & Prognosis`, printed 233** — contiguous, no reordering. **`ps-psychosis`** *(retitled from "Approach to Psychosis")* 9 sections, 3,002 w, **printed 9 pp** · new **`ps-schizmgmt`** 10 sections, 3,854 w, **printed 10 pp**. Neither half has a question, so nothing moved. ⚠️⚠️ **THE DECK IS 86 % CASE VIGNETTES** — 1,933 of 2,251 words are five cases with full MSEs, and its **teaching content is ~320 words**. **The widest deck-words-vs-teaching-words gap yet measured**, and the reason `sm-9` is a section. ⚠️ **The deck asks NINE QUESTIONS across the cases and answers NONE** — worked from the book's own criteria in `sm-9`. ⚠️ **Measured 334 and 385 w/pp — 385 is a NEW MODULE HIGH** |
| ✅ **`nr-backpain`** | **8,064** (book ch.16 **6,322** + deck 1,742) | forecast **past 20 pp** | ✅✅ **SPLIT BEFORE WRITING 2026-08-23** on the book's own **regional** boundary at printed 166. **`nr-backpain`** *(retitled from "Cervical and low back pain")* 9 sections, 3,914 w, **printed 10 pp** · new **`nr-neckpain`** 8 sections, 3,354 w, **printed 9 pp**. ⚠️ **Book ch.16 is the LONGEST this module has drawn on — 16 printed pages.** ⚠️ **The cervical END-MATTER is cervical throughout**, so nothing general had to be divided — that is what made the seam cheap. ⚠️ **THE DECK INTERLEAVES AND THE BOOK DOES NOT**: `L11` runs back → neck → low back, so each half draws **two non-contiguous deck blocks**. Allowed because **nothing is reordered WITHIN a chapter** — the ophthalmology rule forbids reordering an *already-written* chapter, and both were written fresh. ⚠️ **Measured 391 and 373 w/pp; 391 is a new module high** |
| ✅ **`ps-sud`** | **1,121** — ⚠️ **NOT the deck's 1,854** | ÷280 said **4.0 pp** | ✅ **WRITTEN WHOLE 2026-08-23 — printed 7 pp, no split.** 8 sections, **2,466 w**, 0 q. ⚠️⚠️ **`L15` IS TWO LECTURES IN ONE DECK AND THE COUNT HAD TO BE SPLIT BEFORE IT COULD BE BUDGETED FROM** — lines 1–204 are substance (**1,121 w**, this chapter); lines 205–354 are **psychiatry emergency** (**733 w** — NMS 240, catatonia 108, suicide 385), **filed out whole to `ps-emerg` in `sd-8`** and **not one word of it used here**. The plan's §2 row had budgeted the full 1,854. ⚠️ **Inflation 220 % — the module's worst**, and unavoidable: **zero questions**, so there was no backwards calibration at all, and the source is a bullet deck. **Measured 352 w/pp.** ⚠️ **Book Psychiatry ch.9 (printed 249–255, 7 pp) IS UNREAD** — image-only, no subagent available; **recorded, not guessed**. It is the likeliest home for the three verified absences in `sd-8`: **no pharmacotherapy for stimulants or hallucinogens**, **no intoxication or withdrawal syndrome anywhere** (`tolerance`, `delirium tremens`, `naloxone` return **zero across all 25 decks**), and **no substance attached to any of the nine induced disorders** |
| ✅ **`ps-emerg`** | **2,330** (L16 **1,597** + L15 back half **733**) | ÷280 said **8.3 pp** | ✅ **WRITTEN WHOLE 2026-08-23 — printed 13 pp, NO SPLIT.** 11 sections, **3,989 w**, 0 q. ⚠️⚠️ **÷280 UNDER-PREDICTED BY 4.7 PAGES — its worst miss in the wrong direction**, and the mirror of `ps-pharm`'s 3.9-page over-prediction. **The estimator is now shown to err badly BOTH ways; only printing settles it.** ⚠️ **Inflation 180 %** on a source that is two dense bullet decks. ⚠️ **TRIMMED FIRST AND IT DID NOT RECOVER A PAGE**: **207 words** cut — two verified second copies (`em-9`'s deck-union note, `em-10`'s Wilson/Wernicke row, both duplicating `em-11`), one shortened cross-reference, and two blocks of my own commentary — **and it still printed 13.** Sitting **at** the hard shape, not past it, so **`ps-ocd`'s split trigger was never reached.** ⚠️⚠️ **THE TWO DECKS OVERLAP ALMOST COMPLETELY AND DISAGREE NOWHERE** — every shared figure identical (1–2 %, 1 in 6,000, 64:36, 10–20 %, 0.02–3 %, 2:1); **`L16` adds** lead-pipe rigidity and high-potency typicals by name, urinary alkalinisation, the catatonia sign mosaic and complications, the four myths, the diagnostic risk variations, serotonin syndrome and seven organic mimics; **`L15` adds** circulatory/ventilatory support and the numbered nine-step NMS treatment. **Every table is the union, marked where only one prints an item.** ✅ **It pays TWO register rows IN** (`ps-sud`'s whole 733-word half; `ps-schizmgmt`'s NMS) **and ONE OUT** — `ps-pharm`'s `ph-5` records no serotonin-syndrome precipitant, antidote or mechanism, and **`em-10` supplies all three**; **`cyproheptadine` returns exactly ONE hit across all 25 decks.** ⚠️⚠️ **NOT ONE DOSE IS SUPPLIED** — `mg` returns **zero over all 46 slides of `L16`**, and an emergency dose from memory is what `CLAUDE.md` §5 forbids outright. ⚠️ **Book Psych ch.10 (256–260, 5 pp) UNREAD**, image-only |
| ✅ **`ps-devices`** | **1,909** (L18, single source) | ÷280 said **6.8 pp** | ✅ **WRITTEN WHOLE 2026-08-23 — printed 12 pp, NO SPLIT.** 10 sections, **4,191 w**, 0 q. ⚠️⚠️ **INFLATION 220 % — the module's worst alongside `ps-sud`**, and ÷280 **under-predicted by 5.2 pages, a new worst in that direction.** ⚠️ **TRIMMED 122 w first** — two absence bullets duplicating `dv-10`'s own audit table, one commentary bullet, two shortened forward-references — **and the page count did not move.** ✅ **It PAYS the ECT row `ps-emerg`'s `em-11` and `ps-schizmgmt`'s `sm-8`/`sm-10` both filed, and `dv-10` AUDITS IT ITEM BY ITEM**: `sm-8` listed six things missing — **technique ✅, anaesthesia ✅, adverse effect ✅ PAID; electrode placement ⚠️ PARTIAL** (*unilateral or bilateral* and no more); **course length ❌ and contraindication ❌ STILL ABSENT.** ⚠️⚠️ **AND BOTH CHAPTERS' POINTER WAS WRONG** — they sent ECT to **book ch.12, image-only, unread**, when **`L18` was cached the whole time.** ⚠️⚠️ **NOT ONE CONTRAINDICATION FOR ANY DEVICE** — `contraindicat` returns **zero over all 23 slides**; **deliberately NOT supplied**, six device-specific lists from memory being exactly what `CLAUDE.md` §5 forbids. ⚠️⚠️ **A SYLLABUS-LEVEL ABSENCE FOUND HERE: PSYCHOSURGERY is named as one of the four arms of psychiatric treatment and taught NOWHERE** — `psychosurgery`/`cingulotomy`/`lobotomy` return **zero across ALL 25 CACHED DECKS**. ⚠️ **Book Psych ch.12 (265–270, 6 pp) UNREAD**, image-only |
| `nr-ms` · `ps-symptom` | 2,251–2,441 | 6.7–7.3 pp | inside the ceiling. ⚠️ **`ps-ocd` was in this row and printed 14 pp** — a deck word count is not a page count when a second source is added |
| everything else | 1,257–1,924 | 3.8–5.7 pp | single chapters |
| ✅ **`nr-intro` + `nr-exam`** | **756** deck (L1 lines 1-180 less the 59-word UMN/LMN block) **+ 39 book pages** | ÷280 on the WRITTEN 5,128 w said **18.3 pp** | ✅ **WRITTEN WHOLE 2026-08-23, PRINTED 14 pp — ONE OVER THE SHAPE — AND SPLIT AFTER PRINTING.** `nr-intro` **8 sections, 3,221 w, 10 pp, 322 w/pp, 7 q** · **`nr-exam` NEW ID, 4 sections, 2,340 w, 7 pp, 334 w/pp, 14 q.** ⚠️⚠️ **A 54-WORD TRIM WAS TAKEN FIRST AND RECOVERED ALMOST NOTHING — which is exactly what settled the split.** `in-11` held a **consolidated second copy** of the source-fault list; cutting it to pointers freed 54 words and **left nothing but facts.** **The `ps-ocd` shape precisely: trim first, and when the trim comes back empty, split.** ⚠️⚠️ **AND THE SPLIT COST PAGES RATHER THAN SAVING THEM — 10 + 7 = 17 pp against 14 unsplit.** Headers and section breaks are not free; **that is expected and is NOT a reason to compress instead.** ✅ **THE SEAM: `nr-intro` ends where the anatomy does; `nr-exam` is the bedside.** **Nothing was reordered** — the sections stand in written order, `in-8`-`in-11` renumbered `nx-1`-`nx-4`. ✅ **The 14 questions moved BY THE THEORY `qs` LINKS, never by title** — the ophthalmology rule, where a title-based refile misfiled twelve. ✅ **`SCHEDULE` UNTOUCHED.** ✅⚠️ **ALL 151 QUESTIONS IN THE MODULE ARE NOW REACHABLE FROM THEORY — was 130.** ⚠️ **`nr-exam` is BOOK-ONLY: L1 carries no examination technique at all**, and `brachioradialis` / `abdominal reflex` / reflex grading return **zero across all 25 decks** |
| ✅ **`ps-therapy`** | **1,382** (L19, single deck) | ÷280 said **4.9 pp** | ✅ **WRITTEN WHOLE 2026-08-23 — printed 11 pp, NO SPLIT.** 11 sections, **3,829 w**, 0 q, **348 w/pp**. ⚠️⚠️ **INFLATION 277 % — A NEW WORST BY A WIDE MARGIN** (previous high 220 %), and it is **structural, not stylistic**: the deck **NAMES far more than it TEACHES**, so **12 counselling skills, 6 ethics headings, 3 unexpanded acronyms (MBT/MBCT/CAT) and 4 orphaned modalities** are all supplied here, **every one tagged**. ⚠️ **The estimators over-predicted the PRINT: from the written 3,829 w, ÷280 said 13.7 pp and ÷240 said 16.0, against 11 — over by 2.7 and 5.0.** Same shape as `ps-anxiety`: **a table-dense chapter prints at a high w/pp.** ✅ **IT PAYS ROWS FIVE CHAPTERS FILED — the most-owed chapter in the module**: `ps-sud` `sd-6` (four rehabilitation modalities) **PARTIAL**, `ps-emerg` `em-11` (counselling/coping/ventilation) **PARTIAL**, `ps-devices` `dv-10` (CBT/exposure/operant conditioning) **PARTIAL**, `ps-pharm` **PAID**, `ps-psychoed` **PAID**. ⚠️⚠️ **A DECK-vs-BOOK CONTRADICTION, BOTH RECORDED, NEITHER CORRECTED: L19's NICE slide recommends CBT for psychosis/schizophrenia; book Psych ch.7 printed p.238 says the evidence for CBT in reducing symptoms or preventing relapse is MINIMAL.** The second such pair in the module, after `ps-pharm`'s dopamine pathways. ⚠️ **Four verified absences across all 25 decks — `motivational interviewing`, the `12-steps model`, `operant conditioning`, `ventilation` — each returns ONE hit, the deck that names it; all four SUPPLIED AND TAGGED in `th-10`.** ⚠️ **Three L19 slides are unreadable (p.7 chart, p.14 portrait figure, p.19 the additional-therapies list) — measured with `pdffonts` and `pdfimages`, and `pdffonts` finds fonts on all 29 pages, so nothing is vector-outlined.** ⚠️ **Book Psych ch.13 (271–277, 7 pp, the book's LAST content page) UNREAD**, image-only |
| ✅ **`nr-cns`** | **1,904** (L9, single deck) — ⚠️ **teaching content ~1,244** | ÷280 said **6.8 pp** | ✅ **WRITTEN WHOLE 2026-08-23 — printed 13 pp, NO SPLIT.** 11 sections, **4,070 w**, 0 q, **313 w/pp**. ⚠️⚠️ **SITTING EXACTLY AT THE HARD SHAPE, NOT PAST IT — the `ps-emerg` case precisely, so `ps-ocd`'s split trigger was never reached** and nothing was compressed. ⚠️⚠️ **BOTH ESTIMATORS OVER-PREDICTED FROM THE WRITTEN COUNT: ÷240 said 17.0 and ÷280 said 14.5, against 13** — over by 4.0 and 1.5. ⚠️ **THE THIRD CHAPTER WHOSE DECK WORD COUNT IS NOT ITS TEACHING COUNT** (after `L15` and `L11,12`): of 1,904 words, **~660 are TWO CASE VIGNETTES**. **Case 1 (~430 w) prints an analysis that answers TWO of its three questions** — the third, *next step in therapy*, is assembled in `ci-2` from the deck's own treatment slides. **Case 2 (~230 w) is `test yourself`: THREE questions, NONE answered** — worked in full in `ci-10`, the `ps-psychosis` `sm-9` shape. **Inflation 214 %.** ✅ **FIVE CROSS-DECK PROBES WERE OPENED RATHER THAN DISMISSED**, and one of them PAID: **L8 lists tuberculous meningitis as a cause of SIXTH-NERVE PALSY**, which corroborates L9's own cranial-nerve claim from a second deck (`ci-7`, and `nr-cranial` `cn-5` from the other side). The other four are POINTERS, not repeats: **Todd's paralysis** (4 decks, defined in NONE → `nr-epilepsy` `ep-1`/`ep-3`) · **status epilepticus** (→ `ep-10`) · **papilloedema** (→ `nr-cranial` `cn-3`) · **autoimmune encephalitis** (→ `ep-6`, `ps-emerg` `em-1` — **L9 never says an encephalitis can be non-infective**). ⚠️⚠️ **VERIFIED ABSENCES, DELIBERATELY NOT FILLED: CRYPTOCOCCAL MENINGITIS is named as the whole FUNGAL class and taught NOWHERE** (`cryptococc` = **ONE hit over all 25 decks**, that slide) · **VIRAL MENINGITIS is named and gets NO SLIDE** · **BRAIN ABSCESS named in three decks, expanded in none** · **NOT ONE ANTIBIOTIC DOSE** — the slide writes *by anti meningitic dose* and no figure. ⚠️ **The doses that ARE printed are all transcribed** — ciprofloxacin 500 mg, ceftriaxone IM, 4 oral rifampin, acyclovir 10 mg/kg/8 h × 2 weeks, and the TB regimen's 2-month/10–12-month phases. ⚠️ **TWO SOURCE DEFECTS NOTED, NEITHER CORRECTED:** CSF cell counts printed **`/dl`** throughout; Case 2's CSF protein printed **`35gr/dl`**, impossible as written, read as mg/dl in the working. ⚠️ **Book Neurology ch.13 (printed 128–135, 8 pp) IS UNREAD**, image-only — the same handling as `ps-sud`, `ps-emerg`, `ps-devices` and `ps-therapy`. **RECORDED, NOT GUESSED** — `ci-11` |
| ✅ **`ps-somato`** | **1,464** (L3, single deck, no book) | ÷280 said **5.2 pp** | ✅ **WRITTEN WHOLE 2026-08-23 — printed 13 pp, NO SPLIT.** 13 sections, **4,433 w**, 0 q, **341 w/pp**. ⚠️⚠️ **INFLATION 303 % — A NEW WORST, past `ps-therapy`’s 277 %** — and it is structural for TWO compounding reasons: **the deck NAMES far more than it TEACHES**, and ⚠️⚠️ **ELEVEN OF ITS FORTY SLIDES CARRY NO TEXT AT ALL**, so the readable source is thinner than 1,464 words suggests. ⚠️⚠️ **THE PICTURE SLIDES WERE MEASURED PAGE BY PAGE with `pdffonts` + `pdftotext -layout`, not assumed** — zero fonts means an IMAGE, nothing vector-outlined, nothing hidden. **p.10–12 sit INSIDE somatic symptom disorder** (the likeliest home of its missing criteria, since the deck prints criteria for conversion disorder and no other entity) · ⚠️⚠️ **p.22–26 ARE THE WHOLE OF HYPOCHONDRIASIS — an entire STARRED disorder, heading alone then four blank slides**, supplied and TAGGED in `so-9` · **p.19 is the Hoover’s sign figure** · p.3, 15, 21, 31 are section breaks orphaning no heading. **The chapter is written from the 29 slides that carry text and `so-13` says so plainly.** ⚠️⚠️⚠️ **THREE GAPS WERE ABOUT TO BE FILLED FROM OUTSIDE KNOWLEDGE AND WERE ALREADY WRITTEN IN THIS MODULE** — L3 names all three and defines none: **`Hoover’s sign` → `nr-hemi` `hem-2`** (in full, PLUS four more clues to functional weakness L3 never prints) · **`la belle indifference` → `ps-symptom` `sy-3`** · **conversion-against-malingering → `nr-hemi` `hem-2`.** **THE FIFTEENTH PAYMENT OF *read the slide before declaring a gap*, AND THE FIRST WHERE ONE PROBE RECOVERED THREE SEPARATE FILLS AT ONCE.** ✅ **Two more pointers, both verified from disk:** **pseudoseizures → `nr-epilepsy` `ep-3`** — ⚠️ **the two lists are COMPLEMENTARY and neither deck contains the other** (L4: duration, sleep onset, skin colour; L3: no self-harm, long duration, secondary gain, no urinary incontinence) · **BDD’s DSM-5 home → `ps-ocd` `oc-2`/`oc-6`/`oc-10` and `ps-anxiety` `ax-2`**, which is what L3’s three-word slide **`Moved to OCD`** means. ✅ **RECEIVED: `ps-therapy` `th-6` already carries this deck’s group-psychotherapy match and cites L3** — the row is paid from both ends. ⚠️ **VERIFIED ABSENCES:** **PAIN DISORDER** and **SOMATOFORM NOS** listed and taught nowhere · **`illness anxiety disorder` ZERO over 25 decks** · **`Munchausen` ZERO** (the deck writes `Factitious illness by proxy` and does not expand it; tagged in `so-10`) · ⚠️⚠️ **`histrion` spelled correctly returns ZERO — the deck prints `Hysterionic`. THE `ostio-` TRAP AGAIN: PROBE THE MISSPELLING.** ⚠️ **NOTHING NUMERIC SUPPLIED** — the *Pharmacotherapy* slide prints **one negative** (placebo is not useful long-term) **and no agent, class, dose or duration.** ⚠️ **A framing defect, recorded not corrected: the deck TEACHES DSM-IV while TITLING itself with the DSM-5 name.** ⚠️⚠️ **Book Psychiatry ch.5 (printed 215–221, 7 pp) IS UNREAD, image-only — AND IT IS THE SINGLE MOST VALUABLE UNREAD SOURCE IN THE MODULE**, being the one place that can replace `so-9`’s tagged hypochondriasis and, plausibly, the three lost criteria slides. **RECORDED, NOT GUESSED** — `so-13` |
| ✅ **`ps-child`** | **1,257** (L14, single deck, no book) | ÷280 said **4.5 pp** | ✅ **WRITTEN WHOLE 2026-08-23 — printed 12 pp, NO SPLIT.** 11 sections, **3,575 w**, 0 q, **298 w/pp**. **Inflation 284 %.** ✅ **THE PICTURE-SLIDE CHECK WAS RUN FIRST THIS TIME, and it came back clean** — only **ONE of 29 slides carries no text** (the last) and one more carries three words (`Brain Map (QEEG)`). *The `ps-somato` lesson applied prospectively.* ✅✅ **IT PAYS A ROW THAT WAS FILED TO IT BY NAME:** `ps-devices` `dv-10` addressed an **ADHD** row to `ps-child` (`L14`) because **`dv-9`’s theta/beta neurofeedback protocol and `dv-7`’s off-label list both turn on ADHD** and L18 teaches neither the disorder nor its drugs. **PAID IN FULL — `ch-9` the DSM-5 criteria complete, `ch-10` all four agents and both arms.** ✅ **SEVEN MORE POINTERS, all verified from disk, none repeated:** tic phenomenology + **the only-suppressible-movement test** and Tourette’s **2–13 / male** → `nr-movement` `mv-10` · tics-vs-compulsions and the **TIC-RELATED specifier** → `ps-ocd` `oc-6`/`oc-5` · **STEREOTYPY as a sign** → `ps-symptom` `sy-4` · **DISTRACTIBILITY**’s three causes → `sy-8` · **EEG neurofeedback in full** → `ps-devices` `dv-9` · **operant conditioning** → `ps-therapy` `th-10`. ⚠️ **THE TWO TOURETTE AGE STATEMENTS ARE NOT IN CONFLICT** — L3 gives **onset 2–13** (typical window), L14 gives **before 18** (the DSM ceiling). **Both recorded** (`ch-8`). ⚠️⚠️ **A SYLLABUS-LEVEL FINDING: CHILD PSYCHIATRY HERE *IS* THE NEURODEVELOPMENTAL DISORDERS AND NOTHING ELSE.** Probed over all 25 decks — **oppositional defiant, conduct disorder, enuresis, encopresis, separation anxiety, attachment, child abuse and selective mutism ALL RETURN ZERO**; `school refusal` returns **ONE** hit, in `ps-ocd`’s paediatric-complications row. **The deck’s own eighth category, *Other Neurodevelopmental Disorders*, is named and never expanded.** ⚠️⚠️ **AND A PROBE TRAP RUN IN REVERSE: `Rett` appeared to hit THREE decks and ALL THREE ARE THE STRING INSIDE `Tourette`.** **Rett syndrome is absent module-wide; `fragile X` is ZERO; `Down syndrome` has ONE hit, in L13 as a dementia risk factor.** ⚠️ **CHECK WHAT A SUBSTRING ACTUALLY MATCHED — the mirror of the `Hysterionic` miss one chapter earlier.** ⚠️ **SIX OF THE SEVEN DISORDERS ARE TAUGHT WITH NO MANAGEMENT AT ALL** — ADHD is the only one with a treatment slide. ⚠️ **NO DOSE, frequency, adverse effect or contraindication for any of the four ADHD agents**, and **methylphenidate’s mechanism is not printed** — the slide names it and expands **atomoxetine** instead. **None supplied.** ✅ **The deck’s one worked mechanism is worth keeping:** atomoxetine raises **BOTH DA and NE in prefrontal cortex** (which is **DAT-deficient**, so NET clears its dopamine) and **raises neither in nucleus accumbens** (**less NET**) — **hence no abuse potential.** **The module’s only regional pharmacology.** ⚠️ **Book Psychiatry ch.6 (printed 222–227, 6 pp) IS UNREAD**, image-only. The book map has it **opening on neurodevelopmental disorders / intellectual disability**, so it likely **parallels rather than extends** the deck — **but that is an inference and nothing in the chapter rests on it.** **RECORDED, NOT GUESSED** — `ch-11` |
| ✅ **`ps-geri`** | **1,009** — ⚠️ **the DEMENTIA HALF of L13 only, split before budgeting** (the deck is 1,666; the delirium half is 657 and is `nr-delirium`’s) | ÷280 said **3.6 pp** | ✅ **WRITTEN WHOLE 2026-08-23 — printed 12 pp, NO SPLIT.** 12 sections, **3,835 w**, 0 q, **320 w/pp**. ✅✅ **THE L13 SHARED-DECK PAIR IS RESOLVED ON THE SOURCE’S OWN BOUNDARY:** slides **1–24 dementia**, slides **25–41 delirium**, the break being the deck’s own *Delirium* title slide. **CONTIGUOUS — NOTHING REORDERED**, and **not one word of the delirium half is used here.** ⚠️⚠️ **INFLATION 380 % — A NEW WORST BY A WIDE MARGIN** (previous `ps-somato` 303 %). **It printed inside the shape, so the measurement governs** — but the driver is the same structural one: **a dense bullet deck that NAMES far more than it teaches**, plus a §14.5 register that had **four filed rows to answer.** ✅ **PICTURE-SLIDE CHECK RUN FIRST AND THE DEMENTIA HALF IS CLEAN** — all four of L13’s picture-only slides (**p.32, 34, 36, 39**) fall in the **delirium** half and belong to `nr-delirium`. ✅✅ **FOUR ROWS WERE FILED TO THIS CHAPTER AND ALL FOUR ARE ANSWERED:** `ps-therapy` `th-4`/`th-6` **PAID** (`ge-11`) · `ps-anxiety` `ax-6` **PAID** — **anxiety is on the BPSD list** (`ge-3`) · `ps-child` `ch-11`’s **Down syndrome PAID** (`ge-8`) · ⚠️ `ps-sud` `sd-8`’s **WERNICKE row ANSWERED, NOT FILLED** — the appearance is **exactly one line**, *thiamine deficiency, “Wernicke Korsakoff psychosis”*, under nutritional causes; **no triad, no treatment, no link to withdrawal. THE HOLE `sd-8` NAMES IS REAL AND THIS DECK DOES NOT FILL IT.** ⚠️⚠️ **A SCOPE FINDING THE CHAPTER MAKES ABOUT ITSELF: `geriatric` RETURNS ZERO ACROSS ALL 25 DECKS.** **There is no geriatric-psychiatry teaching in the module** — no late-life depression as an entity, no elder abuse, no prescribing in the elderly, no capacity or consent. **What exists is DEMENTIA, and it is here in full.** **Stated in `ge-1` and `ge-12`, not papered over** — *and the book map records that the BOOK has no geriatric chapter either.* ⚠️ **FOUR SOURCE DEFECTS, NONE CORRECTED:** the **prevalence figures DO NOT SUM TO 100 %** (lower bounds **110 %**, upper **165 %**) · **AD is given TWO shares, 65–85 % and “around two-thirds”** · **DEPRESSION is given FOUR roles** — risk factor, early manifestation, differential (**pseudo-dementia**) and caregiver complication, **none reconciled** · the opening slide names the **DSM-5** terms and the deck teaches **dementia** throughout. ⚠️ **MMSE and MoCA are named with NO score, cut-off or domain** — and ⚠️⚠️ **THE DELIRIUM HALF OF THE SAME DECK SAYS THE MMSE IS *NOT SENSITIVE* THERE. Same instrument, opposite verdicts in two halves of one lecture**; the contrast belongs to both chapters. ⚠️ **NO DOSE for any of the six named drugs. None supplied.** ⚠️ **LBD, FRONTOTEMPORAL and VASCULAR dementia are named with NO clinical picture** — the only clues printed anywhere are `ge-3`’s two BPSD signatures (**visual hallucination → LBD**, **emotional instability → vascular**). ⚠️ **Book Psychiatry ch.8 (printed 239–248, 10 pp) IS UNREAD**, image-only, **and it is SHARED with `nr-delirium`** — the book keeps the two together exactly as the deck does. **RECORDED, NOT GUESSED** — `ge-12` |
| ✅✅ **`ps-interview` + `ps-osce`** | **473** total (L1,2) — **~330 history / ~170 examination** | floor 600 governs both | ✅✅ **BOTH WRITTEN 2026-08-23 — `ps-interview` printed 8 pp (8 sections, 2,458 w, 307 w/pp), `ps-osce` printed 7 pp (6 sections, 2,238 w, 320 w/pp). NEITHER SPLIT, both 0 q.** ✅ **THE FIRST CHAPTERS IN THE MODULE WHERE THE §14.1 FLOOR GOVERNS RATHER THAN THE SOURCE COUNT.** ⚠️⚠️⚠️ **THE “SHARPEST INVERSE PROBLEM” WAS A PROBE ARTEFACT AND THIS ROW SUPERSEDES IT.** The warning that **`ps-osce` might have to be told plainly that neither source covers it** rested on **`OSCE` returning ZERO across all 25 decks** — which is true and **irrelevant: it searched the EXAMINER’S WORD, NOT THE SOURCE’S.** **`L1,2) Psychiatric sheet` IS THE OSCE TASK** — **sixteen text slides of complete clerking framework**, with a **CONTIGUOUS seam at the deck’s own `EXAMINATION:` slide.** **THE THIRD PAYMENT OF THAT LESSON IN THIS MODULE**, after `ps-anxiety`’s **GAD** and `nr-intro`’s **`lateral column`.** ✅ **AND THE DEMONSTRATION ITSELF EXISTS, OUTSIDE THE TEXT CORPUS:** the book’s two OSCE-shaped contents rows (**`Psychiatric Sheet`**, **`Clinical Case`**) are **QR VIDEO LINKS WITH NO PAGE NUMBER.** **The framework is printed; the demonstration is a video.** *Recorded in `os-6`, and NOT treated as a gap in the text.* **THE SEAM:** `ps-interview` = **slides 1–11** (mental-illness definition, the seven parts of the history, personal data, the four complaint rules, HPC, personal history, premorbid personality, family history) · `ps-osce` = **slides 12–16** (BODY–MIND, the four MSE blocks, investigations, treatment, the AIM). ⚠️ **`ps-osce` CARRIES THE MODULE’S LARGEST SINGLE POINTER, DELIBERATELY:** `L4,5` teaches the MSE and `L1,2` gives its skeleton, so **repeating `sy-3`–`sy-9` would duplicate SEVEN sections.** ✅ **What `L1,2` ADDS that `L4,5` does not: the GENERAL LOOK block and its ten items** — `ps-symptom` starts at behaviour and never lists gender, age, facies, body built, clothes, attitude in bed, eye contact or cooperation. ⚠️⚠️ **A PROBE NEARLY RECORDED A FALSE ABSENCE AND WAS CAUGHT BY OPENING IT — the SIXTEENTH payment, and the FIRST this session to catch a claim of MINE rather than the plan’s.** The draft claimed **HOSPITALIZATION** (treatment tool 1) was *taught nowhere*. **`hospitali[sz]` hits EIGHT decks; opened, FOUR are real teaching** — **`ps-mood` `mo-8`** gives L9,10’s **four indications** (diagnosis · lack of social support · refusal of food/medications or non-compliance · suicide-homicide-self harm) · **`ps-schizmgmt` `sm-5`** a whole section with **deinstitutionalisation** · **`ps-anxiety` `ax-9`** *usually not needed, four exceptions* · **`ps-emerg` `em-7`** the catatonic patient. **CORRECTED BEFORE SHIPPING.** ⚠️⚠️ **TWO OF THE FOUR AIM STEPS NAME SOMETHING TAUGHT NOWHERE: `formulation` RETURNS THIS DECK ALONE across all 25 caches** — **the single most examined skill in a psychiatric OSCE is NAMED and never defined**; glossed and **TAGGED** in `os-5`, nothing further supplied. **RISK ASSESSMENT** is named in the AIM slide and taught nowhere as a procedure (**one further hit, inside an `L16` case narrative**). ⚠️ **And NO WORKED EXAMPLE anywhere** — no specimen history, no model formulation, no mark scheme, no station. ⚠️ **SIX FIELDS THE SHEET LISTS AND NEVER EXPANDS** (`iv-8`): **FORENSIC HISTORY** (7th part of the history, **no slide**) · **TYPE OF ADMISSION** · **ADDITIONAL INFORMATION** · **`2A + 4S + RELATION`** (reconstruction **TAGGED**, arithmetic shown: 3 diagram corners + 2A + 4S + 1 relation = 10) · **NEUROTIC TRAITS** (**TAGGED**) · **`CROWDING ILLNESS`** (printed exactly so, **recorded not repaired**). ⚠️ **FOUR OF THE SHEET’S OWN FIELD NAMES EXIST NOWHERE ELSE IN THE MODULE** — `neurotic`, `premorbid`, `consanguin`, `crowding` each return **THIS DECK ALONE.** ⚠️ **And `personality disorder` hits FIVE decks, every hit an indication, comorbidity or risk factor: NO PERSONALITY DISORDER IS DESCRIBED ANYWHERE.** ⚠️ **Book Psychiatry ch.1 (MSE technique, printed p.184) IS UNREAD**, image-only — **and it is `ps-symptom`’s chapter and `ps-interview`’s before it is `ps-osce`’s.** **RECORDED, NOT GUESSED** |

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
4. ✅ **Written — 33 of 34** *(measured from disk 2026-08-23; the module went 33 → 34 when
   `nr-intro` printed at 14 pp and split into `nr-intro` + **`nr-exam`**)*: `nr-stroke` · `nr-hemi` ·
   `nr-para` · `nr-headache` · `nr-cranial` · `ps-symptom` · `ps-psychoed` · `nr-ms` · `ps-mood` ·
   `nr-lmn` · `nr-nerve` · `ps-ocd` · `ps-ptsd` · `nr-movement` · `nr-epilepsy` · `ps-anxiety` ·
   `ps-psychosis` · `ps-schizmgmt` · `ps-pharm` · **`nr-backpain`** · **`nr-neckpain`** ·
   **`ps-sud`** · **`ps-emerg`** · **`ps-devices`** · **`ps-therapy`** · **`nr-intro`** ·
   **`nr-exam`** · **`nr-cns`** · **`ps-somato`** · **`ps-child`** · **`ps-geri`** · **`ps-interview`** · **`ps-osce`**.
   **307 sections, 103,266 body words.** ✅⚠️ **ALL 151 OF THE MODULE'S QUESTIONS ARE NOW REACHABLE
   FROM THEORY — it was 130 before `nr-intro`/`nr-exam` landed, and the remaining 21 were all in
   that one chapter.**
   **ONE chapter remains and it carries no question** —
   `nr-delirium`. ⚠️ *An earlier version of this
   line said "12 chapters holding 21 questions"; the count was stale, `modcheck-neuro.js` is the
   measurement.*
   ✅ **Book Neurology ch.16 is FULLY SPENT** across `nr-backpain` and `nr-neckpain` — all 16 pp.
   ⚠️⚠️ **AND THE PAIN TAXONOMY IS A VERIFIED ABSENCE, NOT AN UNREAD GAP.** `npqb-nr-125` (*migraine
   is best classified as…*, key `Nociceptive`) was orphaned by ch.9; **ch.16 was read for it and does
   NOT contain it** — `nociceptive`, `neuropathic`, `psychogenic`, `somatic`, `visceral` and
   `referred pain` appear on **none of its sixteen pages**, and its contents QRs labelled *Pain and
   pain management* **describe a VIDEO**. **Two chapters read for one question. Stop looking.**
   ✅ **Book Psychiatry ch.3 is now FULLY SPENT** across `ps-ocd`, `ps-ptsd` and `ps-anxiety`;
   the page-by-page accounting is in `ps-anxiety`'s **`ax-10`**.
   ✅ **Book Psychiatry ch.7 is FULLY SPENT** across `ps-psychosis` and `ps-schizmgmt`.
   ✅ **`ps-pharm` IS WRITTEN AND IT POINTS RATHER THAN REPEATS** — the rule below was followed.
   ⚠️⚠️ **`ps-pharm` WAS PAID ITS ANTIPSYCHOTICS — AND HAD TO POINT, NOT REPEAT.** Book ch.11's
   dead heading defers *classes, mechanism of action & adverse effect* to *the schizophrenia
   lecture*; that content is written in **`ps-schizmgmt`'s `sm-6` and `sm-7`**. What `ps-pharm`
   still owns is **`L17`'s own agent list** — five typicals and six atypicals ch.7 never names —
   and everything non-antipsychotic. ⚠️ **The MAOI adverse-effect gap stays OPEN**: *MAOI*,
   *monoamine oxidase*, *phenelzine* and *tyramine* appear on none of ch.7's eleven pages.
   ⚠️⚠️ **TWO READING DEBTS WERE OPENED HERE — AND BOTH WERE FALSE. CORRECTED 2026-08-23.**
   I recorded **NEUROLEPTIC MALIGNANT SYNDROME** (named twice in ch.7, described nowhere, deferred
   in place to **Psychiatry ch.10, printed 256-260**) and **ECT beyond its indications** as
   **unread, image-only book chapters** — on the strength of **the book's own cross-reference**,
   without probing the twenty-five cached decks. **A grep closed both in a minute:**
   **`L15`'s back half teaches NMS IN FULL** — tetrad, mortality **10–20 %**, incidence
   **0.02–3 %**, **2:1** male, age not a risk factor, D2 antagonism at hypothalamus and
   nigrostriatum, associated medications, seven labs, a nine-step treatment — **and `L16` teaches
   it again**; **`L18) Devices in Psychiatry` teaches ECT at length** (procedure, mechanism,
   stigma, cognitive effects, rTMS/VNS/tDCS contrast). **Neither needs a render.** They stay
   deferred to `ps-emerg` and `ps-devices` because each is that chapter's core content — **but as
   ordinary unwritten chapters, not as blocked ones.** Fixed in `sm-5`, `sm-7`, `sm-10`, the draft
   header and `MEMORY.md`.
   ⚠️⚠️ **THE RULE THIS COST: a book's own cross-reference is a POINTER, NOT A VERDICT.** *Read the
   slide before declaring a gap* has been paid 13 times; this is the 14th, and the first where the
   false confidence came from **the source pointing elsewhere** rather than from a failed probe.
   ✅ **`ps-therapy` IS WRITTEN, AND IT IS THE CHAPTER FIVE OTHERS WERE POINTING AT.** Rows from
   `ps-sud`, `ps-emerg`, `ps-devices`, `ps-pharm` and `ps-psychoed` all land on it — **the
   most-owed chapter in the module.** Three are **PARTIAL and `th-10` says so item by item**,
   because **the deck names four modalities the whole module never teaches**: `motivational`,
   `12-step`, `operant` and `ventilation` each return **exactly one hit across all 25 cached decks
   — the deck that names it.** All four are **supplied and tagged**, none of them numeric.
   ⚠️⚠️ **A SECOND DECK-vs-BOOK CONTRADICTION, BOTH RECORDED AND NEITHER CORRECTED.** L19's NICE
   slide recommends **CBT for people with psychosis/schizophrenia**; **book Psych ch.7 printed
   p.238 calls the evidence for CBT in reducing symptoms or preventing relapse MINIMAL** (and
   art/drama therapy *not well-researched*). **They agree on family/systemic therapy.** Same
   handling as `ps-pharm`'s dopamine pathways — two sources of equal standing, not a fault.
   ⚠️ **Book Psychiatry ch.13, `Clinical approach to Psychotherapy` (printed 271–277, 7 pp, the
   book's LAST content page), IS UNREAD** — image-only, no subagent available. **Recorded in
   `th-11`, not guessed.** ⚠️ **And three of L19's own 29 slides are picture-only**: p.7 (the
   outcome chart), p.14 (a 1275×1651 figure sitting between CBT and DBT — **probably the CBT
   diagram, and that guess is deliberately NOT written into `th-5`**) and **p.19, which prints the
   title `Additional therapies sometimes used in combination with psychotherapy include` over
   THREE IMAGES — a deck promising a list and printing a picture of one.** ⚠️ **`pdffonts` finds
   fonts on all 29 pages, so nothing is vector-outlined and nothing is hiding from the extractor**
   — the missing content is genuinely pictorial. **Measured before the claim, the `op-refract`
   check.**
5. ✅ **`nr-intro` (21 q) IS UNBLOCKED — THE 39 BOOK PAGES WERE READ 2026-08-23.** The user
   authorised the subagent render; three agents transcribed **printed 1–39 in full** to
   `content\neuro\book\neuro-ch01-ch02a.txt` (1–14), `neuro-ch02b.txt` (15–27) and
   `neuro-ch03-localization.txt` (28–39) — **~16,700 words, 39 page blocks, nothing illegible.**
   ⚠️ **The `+11` neurology offset was re-verified footer by footer on ALL 39 pages and held**;
   each chapter's end was confirmed by rendering one page past it (ch.2 ends at printed 27, ch.3
   at printed 39, and PDF 51 is the ch.4 stroke opener). **Do not re-render any of it.**
   ✅ **ELEVEN OF THE TWELVE ZERO-PROBE FACTS ARE NOW SOURCED**: power grading (p.19, grades 0–5)
   · biceps/triceps/brachioradialis **with root values** + abdominal + plantar (p.21) · clonus
   (p.21) · rigidity vs spasticity (p.18) · somatosensory in full incl. cortical modalities
   (pp.23–26) · **hemianopia and the optic radiation** (p.12, a lettered **A–F visual field
   defects panel**, each with its lesion site) · **gracile and cuneate** (p.36).
   ⚠️⚠️ **AND THE TWELFTH IS A VOCABULARY ARTEFACT, NOT A GAP: `lateral column` is never written
   by this book** — it writes **lateral corticospinal tract** and **dorsal (posterior) column**.
   ⚠️ **`gracile`/`cuneate` are FIGURE LABELS ONLY** (p.36) and appear in no running text; the
   Sheet likewise says *posterior column affection*, never the fasciculi. **The anatomy was there
   the whole time under the book's own names — the probes used the questions' vocabulary, not the
   source's.** The `ps-anxiety` GAD lesson, paid a second time.
   ⚠️ **Two source contradictions to carry into the chapter, both recorded and NEITHER corrected:**
   the **dorsal-column decussation** is placed *in the upper part of the pons* by p.35's text and
   **in the medulla** by p.36's figure; and **quadriplegia** (p.38 text) vs **tetraplegia** (p.39
   figure). ⚠️ **Ch.3 ends on TEN self-test questions with NO KEY anywhere in the book** — the
   `L11,12` shape again. ⚠️ **Ch.1 is 1½ pages: it poses FOUR right-hemiparesis vignettes and
   never solves them individually** — the answer is p.6's **onset-and-course → pathology mapping**,
   which is the chapter's real spine. ⚠️ **Much of ch.3's teaching is FIGURE-ONLY** (anterior
   corticospinal tract, Babinski by name, fasciculations, atrophy, Broca/Wernicke, arterial
   territories) — the caches flag each one in place.

   ### ⚠️ A SCOPED FOLLOW-ON JOB THE 39 PAGES CREATED — recorded so it is not lost, NOT yet done

   **Twelve of `nr-intro`'s 21 questions carry an outside-knowledge tag**, written when no source
   covered them: `npqb-nr-10` · `-13` · `-14` · `-17` · `-18` · `-19` · `-20` · `-21` · `-22` ·
   `-26` · `-32` · `-33`. ✅ **Those tags were CORRECT when written and are not errors** — they say
   *no cached **deck*** covers the fact, and a deck sweep re-run 2026-08-23 confirms it: `optic
   radiation`, `Broca`, `abdominal reflex`, `brachioradialis` and reflex grading return **zero
   across all 25 decks.** **The BOOK now supplies every one of them**, so each explanation can be
   re-grounded on a printed page instead of on general knowledge. **This is an upgrade, not a
   correction.**

   ⚠️⚠️ **`npqb-nr-14` IS THE PRIORITY, AND IT CHANGES IN KIND.** Its explanation already records
   that the printed key — *right **lower** optic radiation* for an **inferior** quadrantanopia —
   names the wrong bundle, and argues it from PITS as general knowledge. **The book independently
   settles it on printed p.12**: panel **D** gives inferior quadrantanopia as *Right **upper**
   optic radiation lesion in the **parietal** lobe*, panel **E** superior quadrantanopia as *Right
   **lower** optic radiation lesion in the **temporal** lobe*. **The note stops being *outside
   knowledge disagrees with the bank* and becomes *the course's own book disagrees with the bank*,
   citable.** ⚠️ **The `answer` still does not move** — a defective key is noted, never disputed
   (user ruling 2026-08-11).

   **Banks are PAUSED, so this is NOT to be swept up silently into a theory session.** It is one
   bounded pass over twelve explanations in `questions.neuro.js`, and it should be taken as its own
   piece of work.
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
*"the most accepted theory of migraine is the Neurovascular theory."*

⚠️⚠️ **RESOLVED 2026-08-23, AND THE ANSWER IS NO: ch.16 DOES NOT CONTAIN IT EITHER.** It was read
in full for this question — **`nociceptive`, `neuropathic`, `psychogenic`, `somatic`, `visceral` and
`referred pain` appear on NONE of its sixteen pages**, there is no types-of-pain heading and no pain
section, and **its contents QRs labelled *"Pain and pain management"* describe a VIDEO, not printed
matter**. ⚠️ **This is a VERIFIED ABSENCE, not an unread gap** — **two book chapters were read for
one question. Stop looking.** The full record is in `nr-backpain`'s `bp-9`.

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
