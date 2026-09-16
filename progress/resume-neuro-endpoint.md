# Neuro Endpoint — resume state

**Owner: this chat.** Separate book from the neuro HOUSE bank (Grade Gain, CLOSED 2026-09-17 at
493, see `resume-neuro.md`). Method/schema/fold conventions carry over from there; this file is
the endpoint-only state.

**Files this chat may write:** `app\data\questions.neuro.js` (bank `endpoint` entries only),
`content\neuro\qb-pages\np-ep-*.array.js` / `*.draft.js`, `app\assets\q\q-np-ep-*.jpg`,
`progress\resume-neuro-endpoint.md`.

---

## 0. Source, measured 2026-09-17

| | |
|---|---|
| File | `Semester 8\Neuro\Questions\Neuro endpoint.pdf` |
| Pages | **2190**, A4 portrait, image-only scan (`pdfinfo` measured) |
| Cover (PDF p.1) | "Neuroscience AlexMed Endpoints" — confirms `bank:'endpoint'`, no house/gradegain branding |
| Format | **one question per page, its answer on the very next page** (verified pp.16-20) — not
  the dense multi-Q-per-page layout the house bank used |
| Page offset | printed page = PDF page, at least across pp.1-20 (checked no further yet —
  ⚠️ ophtho's endpoint had an unpinned flip deep in the file; re-verify per chapter, don't assume
  it holds to p.2189) |

## 1. Chapter map — from the TOC (PDF pp.2-3), by printed page range

Neurology: Localization 6-51 · Stroke 52-111 · Epilepsy 112-199 · Headache 200-282 ·
Multiple sclerosis 283-353 · Hemiplegia+paraplegia 354-372 · Ataxia+low back pain 373-425 ·
Movement disorders 426-494 · CNS infection 495-552 · Neuromuscular disorders 553-637 ·
Cranial nerve disorders 638-677 · Coma 678-726.

Psychiatry: Symptomatology 727-810 · Anxiety disorders 811-906 · Mood disorders 907-1002 ·
Somatic disorders 1003-1089 · Child psychiatry 1090-1124 · Schizophrenia 1125-1219 ·
Emergency 1220-1253 · Dementia+Delirium 1254-1311 · Substance-related disorders 1312-1344 ·
Psychopharmacology 1345-1423.

**Model Final Exams 1-6, pp.1424-2189 (766 pages) — user decision 2026-09-17: DEFERRED.**
Chapters only for now, same treatment as neurosurgery in the house bank. Do not start these
without the user re-raising it.

**These are book-topic ranges, not app chapters.** File each question per the house bank's own
§5 filing rules in `resume-neuro.md` (Localization/exam-technique/tracts → `nr-intro`,
cranial-nerve-specific → `nr-cranial`, etc.) — the endpoint's 22 topics are close to a 1:1 remap
of the house bank's 23, not a new taxonomy.

**Page-range size is not question count** — Localization's 46 pages measured out to only 18
questions once cover/notes/divider overhead (10 pages) was subtracted. Measure every chapter by
reading its answered pages, per the standing rule; do not project from the TOC range alone.

## 2. Id scheme — user decision 2026-09-17

**`npep-<chapter-token>-<n>`**, one token per book-topic, `<n>` = the printed question number
within that topic (each topic restarts its own numbering, confirmed for Localization: Q1-Q18).
E.g. `npep-loc-1` … `npep-loc-18`. Chapter tokens, in TOC order: `loc`, `stroke`, `epilepsy`,
`headache`, `ms`, `hemi`, `ataxia`, `movement`, `cns-inf`, `neuromusc`, `cranial`, `coma`,
`symptom`, `anxiety`, `mood`, `somatic`, `child-psych`, `schiz`, `emergency`, `dementia`,
`substance`, `pharm`. (This is the *staging* token for filenames/ids only — the app `chapter`
field is still one of the 27 fixed neuropsych chapters per §1 above, never one of these.)

**Image naming:** `q-np-ep-<PDF page>.jpg` — the `ep` token is load-bearing, per the house bank's
own naming note (`q-np-gg-<page>.jpg` would collide with this book's own page numbers otherwise).

## 3. Vision route — measured 2026-09-17

Codex solo (`codex exec -i`): **dead**, OpenAI usage limit, resets ~2026-09-20.
Gateway `auto/vision` (`codex-gw.sh`): **dead**, 429 on the first real image call (text-only pong
on the same route worked fine — the vision pool specifically is rate-limited).
**Gemini by key worked** — `gemini-3.6-flash` (the `2.5-flash` id in old references is retired,
404s). Called directly via a small node script (`https` + `x-goog-api-key` header, image never
enters Claude's own context — only the returned text does), not through the `GEMINI_API_KEY`
query-string form. Script pattern: read image(s) as base64, POST to
`generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent`. Batching
~8-10 page images per call read cover+TOC+structure reliably in this session.

## 4. Chapter 1 — Localization — CLOSED 2026-09-17

**17 entries, not 18** — `npep-loc-1` .. `npep-loc-17`, staged by ROUTE-OK Claude lean-drafter
(gateway rungs 1-3 all 429/dead on live probe that day), spliced into `app\data\questions.neuro.js`
(`Q_NEURO`): 493 -> 510. Verified: `node --check` clean, load-and-count `{gradegain:493,
endpoint:17}`, 0 holes, 0 dupe ids, `tools\qb-pipeline\validate.js neuro` clean for this batch (23
pre-existing FAILs on `npqb-nr-228..250`, chapter `nr-demyelinating`, all house/gradegain — none
`npep-loc-*`, out of scope, house bank not reopened).

Count anomaly (18 expected, 17 real): pp.25-26 print two supplementary reference tables (Aphasia/
Dysarthria/Dysphonia; Bulbar vs Pseudobulbar palsy) between Q5's question page and its answer page,
not a separate question — this consumed the page-slot that had been provisionally counted as Q6.
p.52 confirmed as the Stroke chapter's title/divider slide, no question — chapter boundary holds at
Q17 (pp.50-51).

Filing: `nr-cranial` x4 (`npep-loc-1,3,7,14`) · `nr-hemi` x10 (`npep-loc-2,4,6,8,9,10,11,12,13,15`) ·
`nr-intro` x3 (`npep-loc-5,16,17`). `npep-loc-14` (LMN facial palsy + ipsilateral cerebellar signs,
no limb-weakness component) filed `nr-cranial` not `nr-hemi`, accepted as-is — consistent with how
the single-cranial-nerve-pattern items (`-1/-3/-7`) were filed.

Key adjudications (printed key kept, never disputed, per the standing rule):
- `npep-loc-11`: stem names a cerebellar tumor + contralateral limb weakness, keys "Left motor
  cortex" — explanation reasons the weakness must come from a separate corticospinal lesion, since
  a cerebellar lesion alone gives ipsilateral not contralateral signs.
- `npep-loc-13`: **cross-bank key contradiction**, recorded not corrected. Near-verbatim same
  stem/options as live house-bank `npqb-nr-92` (`questions.neuro.js`, chapter `nr-hemi`) — this
  entry keys "Brainstem", the house entry keys "Cervical cord". Both keys transcribed and kept
  exactly as each source prints them; the contradiction is documented in `npep-loc-13`'s own
  `explanation` only. **`npqb-nr-92` itself is NOT edited** — the neuro house bank is closed and
  stays closed, per the original task's scope fence.

Near-duplicates left unfolded (correct per convention — none is an exact fold shape, cross-bank
folds are never a drafting subagent's call): `npep-loc-9`~`npqb-nr-94`, `npep-loc-10`~`npqb-nr-106`,
`npep-loc-12`~`npqb-nr-89`. `npep-loc-8` and `npep-loc-15` are a within-batch Guillain-Barre-pattern
near-duplicate pair, also left unfolded.

Committed: staging+draft, splice, journal (hashes: see `git log --oneline -5`).

## 5. Next concrete action

**Chapter 2, Stroke, printed pp.52-111** — measure the true question count by reading answered
pages (do not project from the 60-page TOC range; Chapter 1's 46-page range was only 17 questions
once overhead was subtracted). Re-probe the routing ladder fresh before dispatching — rate limits
measured 2026-09-17 may not hold on a later day. Same pattern: brief file, dispatch, `.array.js` +
`.draft.js`, Claude-only final read + splice + commit.

Remaining after Stroke: Epilepsy, Headache, Multiple sclerosis, Hemiplegia+paraplegia, Ataxia+low
back pain, Movement disorders, CNS infection, Neuromuscular disorders, Cranial nerve disorders,
Coma, Symptomatology, Anxiety disorders, Mood disorders, Somatic disorders, Child psychiatry,
Schizophrenia, Emergency, Dementia+Delirium, Substance-related disorders, Psychopharmacology.
Model Final Exams stay deferred/untouched.
