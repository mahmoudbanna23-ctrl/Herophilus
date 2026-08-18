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

**27 chapters in two groups: Psychiatry 16, Neurology 11.** Ids and titles in `app\data\modules.js`
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
| **0** | `ps-interview` · `ps-osce` · `ps-somato` · `ps-anxiety` · `ps-psychosis` · `ps-geri` · `ps-child` · `ps-sud` · `ps-emerg` · `ps-pharm` · `ps-devices` · `ps-therapy` · `nr-cns` · `nr-delirium` · `nr-backpain` |

**What this means for budgeting.** §14's budget is `max(source words, 25 × questions)`, floor 600.
With 15 chapters at zero questions, **the deck word count governs almost the whole psychiatry half**
— the `25×q` term never binds there. The bank is frozen mid-flight (`npqb-` transcription is another
chat's stream), so **these zeros are "not yet transcribed", NOT "not examined"**. Do not treat a
zero-question chapter as low-value; the neurology bias is an artefact of transcription order.

⚠️ **And the ophthalmology lesson applies directly: a chapter's questions may not be answerable from
its assigned deck.** Check before briefing, per §14.5.

---

## 2. The decks — all 25 cached, and the extractions are sound

25 PDFs in `Semester 8\Neuro\Theoritical\PPT\`, 25 caches in `content\neuro\lectures\`.
**1,116 slide-pages, 43,665 cached words.**

✅ **Every cache was checked against `pdftotext -layout` on 2026-08-18 and matches within a few
words.** Unlike ophthalmology, there is **no hidden extraction failure here** — with one exception,
below. This is a real finding and it saves the module a 1,116-page render.

| deck | pp | words | w/pp | chapter |
|---|---|---|---|---|
| L1) INTRODUCTION AND LOCALISATION | 57 | 1,336 | 23 | `nr-intro` |
| L2) Multiple sclerosis | 68 | 2,225 | 32 | `nr-ms` |
| L3) MOVEMENT DISORDERS | 51 | 2,494 | 48 | `nr-movement` |
| L4) Seizures_Epilepsy | 32 | 2,215 | 69 | `nr-movement` |
| L5) Muscle Disease | 55 | 1,839 | 33 | `nr-lmn` |
| L6) Peripheral neuropathy | 44 | 1,469 | 33 | `nr-lmn` |
| L8) Cranial nerves | 92 | 3,456 | 37 | `nr-cranial` |
| L9) CNS infection | 40 | 1,904 | 47 | `nr-cns` |
| L10) Stroke | 53 | 2,051 | 38 | `nr-stroke` |
| L11) Cervical pain | 41 | 1,610 | 39 | `nr-backpain` |
| L12) hemi,parap&ataxia | 86 | 2,792 | 32 | `nr-hemi` |
| L13) Dementia and Delirium | 41 | 1,543 | 37 | **`ps-geri` + `nr-delirium` — SHARED** |
| L1,2) Psychiatric sheet | 17 | 409 | 24 | `ps-interview` (+ `ps-osce`?) |
| L3) Somatization | 40 | 1,389 | 34 | `ps-somato` |
| L4,5) Psychiatric symptomatology | 63 | 1,838 | 29 | `ps-symptom` |
| L6) Myths about psychiatry | 14 | 1,440 | **102** | `ps-psychoed` |
| L8) OCD & PTSD | 33 | 2,212 | 67 | `ps-ocd` |
| L9,10) Mood disorders | 25 | 1,288 | 51 | `ps-mood` |
| L11,12) Schizophrenia | 57 | 2,194 | 38 | `ps-psychosis` |
| L14) Child Psychiatry | 29 | 1,226 | 42 | `ps-child` |
| L15) substance related + psych emergency | 49 | 1,777 | 36 | `ps-sud` |
| L16) Emergency Psychiatry | 46 | 1,593 | 34 | `ps-emerg` |
| **L17) Psychopharmacology** | **31** | **239 → ✅ 3,358** | 7 → 108 | `ps-pharm` — ⚠️ **PICTURE DECK, read visually 2026-08-18; see the read write-up at the end** |
| L18) Devices in Psychiatry | 23 | 1,822 | 79 | `ps-devices` |
| L19) Psychotherapy | 29 | 1,304 | 44 | `ps-therapy` |

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

## 3. ⚠️⚠️ SIX CHAPTERS WERE MATERIALLY UNSOURCED — FIVE STILL ARE (verified by grep, not assumed)

Each of these was checked **against all 25 caches** on 2026-08-18. The standing rule is *read the
slide before declaring a gap — paid 13 times* — so each line below names the search that was run.

| Chapter | q | The evidence |
|---|---|---|
| **`nr-headache`** | **22** | **`"tension type"` returns ZERO across all 25 decks.** `headache` appears only as a *symptom mention* inside Stroke, Cervical pain, symptomatology, Cranial nerves and CNS infection; `migraine` likewise scattered. **There is no headache lecture.** This is the module's worst mismatch: **22 questions, no source** — the `op-va` shape, and worse |
| **`nr-delirium`** | 0 | Titled *"Delirium and Coma"*. **`Glasgow` and `GCS` both return ZERO module-wide**, and `brain death` returns zero. `coma` appears as a passing mention in four decks. L13 supplies delirium; **coma has no source at all** |
| **`ps-geri`** | 0 | **`geriatric` returns ZERO across all 25 decks.** L13 is *Dementia and Delirium* and supplies dementia only; `elderly` appears in four decks as passing mentions |
| **`ps-anxiety`** | 0 | No deck. `generalized anxiety` appears **only in the 239-word broken `L17` stub**; `panic` and `phobia` appear as symptom lists inside symptomatology and myths |
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

## 4. Budgets and split forecast — before writing, the cheap way

Budget = `max(source words, 25 × q)`, floor 600, **operative ceiling ~2,400 words / ~10 printed
pages, hard shape ≤13 pp measured by printing.**

### Split candidates, forecast now

| Chapter | source w | ÷240 | verdict |
|---|---|---|---|
| **`nr-movement`** | **4,709** (L3 2,494 + L4 2,215) | **19.6 pp** | ⚠️ **SPLIT, and the title already admits it — *"Movement disorders / Epilepsy"* are two topics, not one taught over two lectures.** The §4 rule joins a topic split across lectures; it does not join two topics. Seam is the deck boundary, and it is clean |
| **`nr-cranial`** | 3,456 | 14.4 pp | ⚠️ **likely split** — and it carries **34 questions**, the module's most. Candidate seam: the ocular nerves (III/IV/VI) against the rest, but **drive it from the `qs` links, not the anatomy** |
| **`nr-lmn`** | 3,308 (L5 1,839 + L6 1,469) | 13.8 pp | ⚠️ **watch** — muscle vs peripheral nerve is a clean two-deck seam if it prints long |
| `nr-hemi` | 2,792 | 11.6 pp | watch; 29 questions |
| `nr-ms` · `L3` movement · `ps-ocd` · `ps-psychosis` | 2,194–2,494 | 9–10 pp | expected to land inside the ceiling |
| everything else | 1,226–2,051 | 5–8.5 pp | single chapters |

⚠️ **`ps-interview` + `ps-osce` are the inverse problem** — 409 words for two chapters. They will run
to the 600 floor from the book, or be told plainly that the lecture gives nothing.

---

## 5. Order of work

1. ✅ Deck inventory, extraction check and gap grep — **done 2026-08-18**.
2. **Book map** — in flight. Nothing depending on the book is briefed until it lands.
3. **`L17` visual read** — in flight. `ps-pharm` is blocked on it.
4. **Write the well-sourced chapters first**, in pairs, cap 2 concurrent Opus writers: the neurology
   chapters carrying questions (`nr-cranial`, `nr-hemi`, `nr-stroke`, `nr-intro`) and the psychiatry
   chapters with full decks (`ps-ocd`, `ps-psychosis`, `ps-mood`, `ps-somato`, `ps-symptom`).
5. **Then the six unsourced chapters**, once the book has said what it can pay.
6. Validate → splice → refile → **print** → audit → commit, per chapter pair. Harnesses:
   `<scratch>\vdraft.js` · `splice.js` · `modcheck.js` · `print.sh` · `boot.sh`.

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
