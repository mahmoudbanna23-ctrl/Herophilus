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
| **L17) Psychopharmacology** | **31** | **239** | **7** | ⚠️ **`ps-pharm` — see below** |
| L18) Devices in Psychiatry | 23 | 1,822 | 79 | `ps-devices` |
| L19) Psychotherapy | 29 | 1,304 | 44 | `ps-therapy` |

### ⚠️ `L17) Psychopharmacology` — 31 pages, 239 words, SEVEN words per page

The only deck in the module that fails the ratio, by a factor of four. `pdftotext -layout` returns
the same 239, so it is **not an extraction-mode problem**. Being read visually 2026-08-18, with a
`pdffonts`-per-page diagnosis first — the three causes (scanned images · text drawn as **vector
outlines** · a genuinely text-light diagram deck) look identical from a word count and need
different handling. **Psychopharmacology is a major exam topic; treat `ps-pharm` as unsourced until
that cache is replaced.**

### ⚠️ The lecture series skips L7 in BOTH halves

There is no `L7` in the psychiatry series and none in the neurology series. Per the standing ruling
(2026-08-14): **a lecture-numbering gap means the professor withheld it. Fill and tag, never chase.**

---

## 3. ⚠️⚠️ SIX CHAPTERS ARE MATERIALLY UNSOURCED — verified by grep, not assumed

Each of these was checked **against all 25 caches** on 2026-08-18. The standing rule is *read the
slide before declaring a gap — paid 13 times* — so each line below names the search that was run.

| Chapter | q | The evidence |
|---|---|---|
| **`nr-headache`** | **22** | **`"tension type"` returns ZERO across all 25 decks.** `headache` appears only as a *symptom mention* inside Stroke, Cervical pain, symptomatology, Cranial nerves and CNS infection; `migraine` likewise scattered. **There is no headache lecture.** This is the module's worst mismatch: **22 questions, no source** — the `op-va` shape, and worse |
| **`nr-delirium`** | 0 | Titled *"Delirium and Coma"*. **`Glasgow` and `GCS` both return ZERO module-wide**, and `brain death` returns zero. `coma` appears as a passing mention in four decks. L13 supplies delirium; **coma has no source at all** |
| **`ps-geri`** | 0 | **`geriatric` returns ZERO across all 25 decks.** L13 is *Dementia and Delirium* and supplies dementia only; `elderly` appears in four decks as passing mentions |
| **`ps-anxiety`** | 0 | No deck. `generalized anxiety` appears **only in the 239-word broken `L17` stub**; `panic` and `phobia` appear as symptom lists inside symptomatology and myths |
| **`ps-osce`** | 0 | **`OSCE` returns ZERO across all 25 decks.** Shares `L1,2) Psychiatric sheet` (17 pp, 409 w) with `ps-interview` at best |
| **`ps-pharm`** | 0 | Deck exists but yields 7 w/pp — see §2 |

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
