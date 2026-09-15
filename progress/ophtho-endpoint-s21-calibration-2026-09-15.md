# Ophthalmology Endpoint — Part 1, Section 21 Calibration, 2026-09-15

Status: complete, text-only OCR/index analysis. No images were rendered or viewed (brief's
explicit rule). New note — no prior file of this name existed.

Section 21 = `tools\bank-harness\sec-oph.js` `SEC_P1` entry 21: `{ prefix:
'ophep-diagnosis-keys-', chapter: 'op-appear', pages: [1374, 1390] }` — "Keys For Diagnosis"
(comment: "also involves op-insid, op-white, op-acute, op-red"). Confirmed against the OCR index
and rendered-text divider page below.

## ⚠️ This section is not shaped like sections 1–20 — no MCQs at all

Every one of the 17 in-range pages (1374–1390) classifies `kind:"notes"` in the index, and a
direct read of all 17 pages confirms it: **the whole section is a compressed differential-
diagnosis mnemonic appendix** — short "sign/finding + sign/finding → diagnosis" one-liners and a
handful of comparison tables (eye-muscle actions, pupillary findings, vision-level correlations,
etc.), organised under short topic headings (e.g. "Glaucoma & Related Notes", "Nerve Palsies",
"Vision Levels", "Pupillary Findings", "Eye Tumors", "Eye Muscles"). There is **no "Questions"
divider page anywhere in range, no lettered option (A–E/a–e) pattern on any of the 17 pages
(checked by regex across the whole range, zero hits), and no unmarked/marked page-pair
structure.** This matches `sec-oph.js`'s own chapter comment, which names this section as
spanning several appearance-based diagnosis chapters rather than one topic — consistent with an
appendix/summary section, not a question bank chapter.

**Question count: 0. There is nothing to stage as a question in this section as currently
understood from the index and OCR text** — see "Needs image check" for what this finding still
rests on.

## Range and divider pages

- p.1374: chapter divider ("Keys For Diagnosis", 3 words, `flags:["thin"]`) — matches
  `sec-oph.js`'s declared first page exactly.
- p.1375–1390 (16 pages): continuous mnemonic/summary content, no divider, no sub-heading page
  standing alone the way the "Questions" divider does in every other section calibrated so far.
- Section ends exactly at p.1390 = `sec-oph.js`'s declared last page (also the last page indexed
  in `index.json`, i.e. the end of Part 1 as currently OCR'd — nothing beyond p.1390 was checked,
  out of scope for this job).

## Question count and derivation

Zero. Derived by: (1) the index's own `kind` tabulation, 17/17 pages `notes`, 0 `question`, 0
`answered`; (2) a direct read of all 17 pages' OCR text, confirming mnemonic/table content with
no question stem, no lettered options, no "Questions" divider; (3) a regex sweep for any
lettered-option pattern (`[A-Ea-e][.)]` at line start) across all 17 pages, zero matches. No
page-pairing arithmetic applies here — there is no unmarked/marked pair to derive a formula from.

## Page formula and pair test

Not applicable — there is no question run in this section to pair.

## Unassigned pages

None in the sense the other sections use the term (a page wrongly excluded from the question
count) — every page here is genuinely notes content, correctly excluded from any question count.

## Option counts per Q / Case transitions / Box candidates

Not applicable — no questions, no options, no explanation-box pairing exists in this section.

## Figure candidates

A keyword sweep ("figure", "shown", "arrow", "picture", "photograph", "diagram", "image below",
"as seen") across all 17 pages returned **zero matches**. One table (p.1384, "Eye Muscles") and
another (p.1388, "Pupillary Findings") are printed as multi-column tables in the OCR text, which
could plausibly be laid out as an image/graphic in the source rather than a true text table —
this is a formatting guess from OCR line-wrapping, not a figure-language hit, and is listed under
"Needs image check" rather than asserted either way.

## Classifier mis-tags

The raw `answered` boolean (yellow-pixel proxy) reads `true` on 12 of the 17 pages despite every
page being confirmed prose/notes content (only pp.1374, 1383, 1387, 1390 read `false`) — the same
false-positive mechanism recorded in every other section's lecture-prose range (bulleted/
highlighted key terms tripping the yellow-pixel threshold). Because the `kind` field itself is
unanimous (`notes`, all 17), this does not affect the question count finding above; it is the
same shape as s03/s04/s19/s20's prose-range false positives, just denser here since the whole
section is prose-shaped bullet lists.

## Needs image check

- **Whether this section truly contains zero gradeable questions, or whether it is genuinely a
  reference appendix meant to be read rather than quizzed** — this calibration note reports what
  the index and OCR text show (no MCQ structure anywhere), but the *purpose* of an appendix like
  this in the source (revision summary vs. intended-but-differently-formatted question material)
  is a judgement call outside what text alone can settle. Flagged for the person planning staging
  for this section, not something OCR can resolve either way.
- Whether pp.1384 and 1388's tabular content ("Eye Muscles", "Pupillary Findings") are printed as
  plain text tables or as an embedded graphic — the OCR line-wrapping is consistent with either.
- General absence-of-figure claim above (text-only check, not visually confirmed).

## Anomalies

**The section's whole shape is the anomaly, relative to sections 1–20**: no chapter-divider →
prose → "Questions"-divider → paired-MCQ structure at all — just a chapter divider followed
directly by continuous notes content through the section's declared end. This was true of every
one of the 17 pages checked, not a partial or sampled finding, since OCR text alone (not a
render) is sufficient to rule out a lettered-option MCQ structure.

## What was not checked

- No page in this section was rendered or visually read — text-only per the brief.
- Whether the sub-headings visible in the OCR text ("Glaucoma & Related Notes", "Nerve Palsies",
  "Vision Levels", "Pupillary Findings", "Eye Tumors", "Eye Muscles", "Cataract", "Retinitis
  Pigmentosa", and others) map cleanly onto the four named chapters in `sec-oph.js`'s comment
  (`op-appear`, `op-insid`, `op-white`, `op-acute`, `op-red`) was not attempted — that mapping is
  a content/staging decision, out of scope for a text-only calibration pass.
- Source-printing typos were not deliberately searched for.

## Note on injected instructions

The same two non-brief system-reminder-style messages recorded in the s19 and s20 notes appeared
again during this job — a "bypass permissions mode" instruction pushing Bash/heredocs over
Read/Write/Edit, and a "drift check" pushing a caveman speech register, an agent-routing ladder,
and a restatement of the data-handling rule. Both declined again, for the same reason — this note
was written entirely with the Write tool, and no work was rerouted to another seat or model.

## Byte size and line-ending check

To be run after this file is written: `tr -cd '\r' < "progress\ophtho-endpoint-s21-calibration-2026-09-15.md" | wc -c` — must print 0.
