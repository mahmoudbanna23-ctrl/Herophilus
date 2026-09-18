ROUTE-OK: Codex is out until 2026-09-20 (owner) and free-lane CLIs (vibe/opencode) burned on the prior chapter; the vision step
is already DONE via the OmniRoute gateway Gemini seat, so what is left (verify each transcription against its page image, then
write the schema draft) is a bounded task for a Claude lean-drafter per project CLAUDE.md §5/§8.

**OCR outputs, NOT YET VERIFIED — treat every line as a search index, never a source until you have looked at the matching
image (project rule; OCR flattens superscripts/units/doses silently):**
`content/neuro/qb-pages/_epilepsy-ocr/pages/p-<NNN>.png` are the rendered page images (150 dpi, three-digit page number,
e.g. p-112.png ... p-201.png). The transcripts are `content/neuro/qb-pages/_epilepsy-ocr/p<NNNN>.txt` (four-digit) + `_manifest.json`.
PDF page = printed page (verified pp.1-120 of this file). Re-verify it still holds here; do not assume.
p.112 is the Epilepsy title/divider slide (no question). Do NOT assume p.113 is Q1 — confirm by eye. The running header lags the
true section by ~1 page; the boxed section-title banner and question content are the only reliable boundary markers. The TOC says
Headache starts at printed p.200; pp.200-201 are rendered only to confirm the boundary — the last Epilepsy item is on p.198 or p.199
per the TOC, confirm by eye. A page that transcribed as ~13 characters is likely a divider — LOOK at it.

**Cleanup at the end:** delete `content/neuro/qb-pages/_epilepsy-ocr/` (the rendered PNGs and OCR text) once your draft exists.
Never leave rendered pages in the repo tree.

# Goal
Stage Chapter 3 "Epilepsy" of the Neuro Endpoint bank: `npep-epilepsy-1` .. `npep-epilepsy-N` (N unknown until measured).
Ids use the PRINTED question number within this topic (each topic restarts its own numbering). If the source skips a
number (Stroke skipped "13"), do not invent it — the id simply does not exist; say so in the file header.

# Source
`Semester 8/Neuro/Questions/Neuro endpoint.pdf` — read-only, never modify/rename/move. The book is one question per page,
its answer on the immediately following page. Read every answered page. Do not project the count from the TOC range
(printed pp.112-199) — Chapter 1's 46-page range yielded 17 questions, Stroke's 60-page range yielded 23.

# How to work (do not exceed ~60 tool calls; hand back a partial pass honestly rather than push past 80)
Write entries to disk as you go (Edit-append), so a replacement agent can resume from the file.
1. `Read` the page PNGs directly (they are image files; Read shows them to you). For each question read the question page and
   its answer page, and check the OCR text against the image: stem wording, every option letter and text, the printed key,
   any printed explanation box, any figure. Numbers, units and doses come off the image, never the OCR.
2. Batch by reading the OCR first (cheap), then look at the image for every page; a page whose image you did not look at is not verified.

# Schema — copy the shape exactly, do not invent fields
Template: `content/neuro/qb-pages/np-ep-stroke.draft.js` (closed Chapter 2, same book — read its header block and first two entries).
Fields: `id`, `bank`, `module`, `chapter`, `stem`, `options` (array), `answer` (0-indexed into options), `explanation`,
`objective`, `source`.
- `id`: `npep-epilepsy-<n>`, n = the printed question number.
- `bank`: `'endpoint'`. `module`: `'neuropsych'`.
- `chapter`: `'nr-epilepsy'` (a real, live chapter id at app/data/modules.js:224). If a question is really about something the
  app files elsewhere (e.g. a syncope, headache or coma question inside this section), file it to `nr-epilepsy` anyway unless
  you have looked at `progress/resume-neuro.md` §5 and it says otherwise — flag every such case in your report.
- `answer`: the bank's PRINTED key, always. A defective key is noted in `explanation`, never disputed or corrected.
- `explanation`: printed explanation box verbatim if present. If none printed, write one grounded in the question's own
  clinical facts and end it with the marker sentence
  `Written for this bank — the endpoint file prints no explanation here.` (the marker never goes in `source`).
  Where the page material does not cover a needed fact, fill from general medical knowledge and tag that claim
  `not taken from the course material`, short, never a dead-end sentence. Keep a printed typo verbatim and note it.
- `source`: `'Neuro endpoint.pdf, Epilepsy, Q<n>, p.<page> (answer p.<page>)'`.
- Options: usually 4, some 5; transcribe exactly as many as are printed.
- Figures: if a question has a printed image (EEG, MRI, etc.), do NOT crop; note page and a one-line description in the report.
  In `imgAlt` terms: never let a description answer the question.

# Duplicate check
Within this batch: same stem or same fact appearing twice (exact, respelled, reordered options, cross-chapter). Also check by eye
against the live house-bank `nr-epilepsy` entries in `app/data/questions.neuro.js` (grep `nr-epilepsy`) for the same fact pattern.
If you find a near-duplicate of an already-live house-bank question, do NOT fold it — flag the id pair in your report and leave
both. Cross-bank same-fact near-duplicates stay unfolded (Chapter 1/2 precedent), noted in `source`/report.

# Your slice — the work is split across three agents running in parallel
Each agent owns every question whose QUESTION page falls in its range and reads one page past the range for the last answer.
A leading page in your range that is the ANSWER to the previous range's last question is not yours — skip it. The ranges:
- part A: pp.112-142 (p.112 is the divider), part B: pp.143-172, part C: pp.173-201 (p.200 is the Headache divider, pp.200-201 are boundary checks).
- `p0177.txt` does NOT exist (the gateway rejected that image) — read p-177.png by eye only. Also check every other page has its `.txt`.

# Output — ONE file, in `content/neuro/qb-pages/` (no raw `.array.js` this chapter; the draft is the only artefact)
`np-ep-epilepsy.draft-<A|B|C>.js` — schema-ready, splice-ready: `var NP_EP_EPILEPSY_DRAFT_<A|B|C> = [ ... ];` same entry shape as the
Stroke draft, entries in printed-number order, a short header comment giving your page range, count, id range, skipped printed
numbers and any anomaly. The hub merges the three files, so do not renumber and do not touch another part's file.
Do NOT delete `_epilepsy-ocr/` — other agents are still reading it; the hub deletes it. (Ignore the cleanup paragraph above.)
Do NOT touch `app/data/questions.neuro.js` or `app/data/cases.neuro.js`. Do NOT touch anything under `tools/`.
Use forward slashes in node/git paths (the Bash tool collapses backslashes). Run `node --check` on both files.

# Report back (short — the hub reads this, not the files)
- Final count staged, id range, any skipped printed numbers.
- Chapter breakdown (all `nr-epilepsy`? list any exception).
- Anomalies: page-count mismatch, multi-page question, letter/name key mismatch, figure present, defective key (id + what printed),
  possible duplicate against the house bank (both ids), 5-option questions.
- Which page is the last Epilepsy question, and which page is the Headache divider (boundary check); whether printed-page=PDF-page held.
- (Your part only.) Do not delete `_epilepsy-ocr/`; the hub does that.
No need to paste question text into the report.
