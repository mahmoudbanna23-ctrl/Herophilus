ROUTE-OK: rungs 1-3 dead today — Codex solo on quota until 2026-09-20, gateway (codex-gw.sh,
both `auto/vision` and default `opencode-zen/big-pickle`) 429 rate-limited on live probes just
run (opencode+gateway is the same rate-limited pool, not a distinct rung). Free-lane fleet
(rung 5) is otherwise unverified today per project memory. Vision route already resolved this
session via Gemini-by-key; this brief hands you that proven script.

# Goal
Stage Chapter 1 "Localization" of the Neuro Endpoint bank (`npep-loc-1` .. `npep-loc-18`).

# Source
`Semester 8\Neuro\Questions\Neuro endpoint.pdf` — **read-only, never modify/rename/move.**
Pages 16-52 (Q1 starts p.16; render one page past the expected end at p.51 to confirm Stroke
opens at p.52, not p.52 still being Localization content).

# Tools (already tested working this session)
- Poppler: `C:\Users\Alfa388\AppData\Local\Microsoft\WinGet\Packages\oschwartz10612.Poppler_Microsoft.Winget.Source_8wekyb3d8bbwe\poppler-25.07.0\Library\bin\pdftoppm.exe`
  Render: `pdftoppm.exe -png -r 150 -f <first> -l <last> "Semester 8\Neuro\Questions\Neuro endpoint.pdf" "content\neuro\qb-pages\_tmp-loc\p"`
  (render into `content\neuro\qb-pages\_tmp-loc\`, a new folder under the project — delete it when done)
- Vision: `node tools\gemini-vision\ask_gemini_multi.js <img1> <img2> ... <imgN> "<prompt>"`
  Model `gemini-3.6-flash`, reads `GEMINI_API_KEY` from the environment (already set, do not
  hardcode it anywhere). Batch ~6-8 page images per call. Prompt for exact verbatim transcription
  of stem, all options, the printed answer key (letter AND name if both printed), and any printed
  explanation box — do not summarize or paraphrase.

# Format of this book (verified pp.16-20)
One question per page, its answer on the immediately following page. Expect 18 Q/A page-pairs
(pp.16-51). If the count does not come out to 18, or a question spans more than one page, or the
answer key is a bare letter with no name (or vice versa), note it — do not force a number.

# Schema — copy the shape exactly, do not invent fields
Read `content\neuro\qb-pages\gg-nr-t14.draft.js` (a few entries) as your template. Fields:
`id`, `bank`, `module`, `chapter`, `stem`, `options` (array), `answer` (0-indexed into options),
`explanation`, `objective`, `source`.

- `id`: `npep-loc-<n>`, n = printed question number 1-18.
- `bank`: `'endpoint'` (this is a different bank from the house `'gradegain'` bank already in
  `questions.neuro.js` — do not write `'gradegain'`).
- `module`: `'neuropsych'`.
- `chapter`: one of the app's fixed 27 neuropsych chapter ids (see `progress\resume-neuro.md`
  §5's filing table) — most Localization content files to `nr-intro` (exam technique, grading
  scales, reflex levels, tracts, cortical localization). Cranial-nerve-specific items go to
  `nr-cranial`; anything about hemiplegia/gait goes to `nr-hemi`. Read §5 of that file for the
  full table before filing anything ambiguous.
- `explanation`: printed explanation box verbatim if present. If the book prints none, write one
  grounded in the transcribed material and end it with the marker sentence `Written for this
  bank — the endpoint file prints no explanation here.` (marker never goes in `source`).
- `source`: `'Neuro endpoint.pdf, Localization, Q<n>, p.<page>'`.
- Figures: if a question has a printed image, do not crop yet — just note the page number and a
  one-line description in your final report; cropping is a separate pass.

# Duplicate check
Before writing, run the six-stage sweep (A-F) described in `progress\resume-neuro.md` §... (the
duplicate-sweep section) **within this batch only** — 18 questions, so this is quick. Also check
by eye against `questions.neuro.js`'s existing `nr-intro`/`nr-cranial`/`nr-hemi` entries for the
same fact pattern; if you find a near-duplicate of an already-live house-bank question, do NOT
fold it yourself — flag it by id pair in your report and leave both entries in the draft file.
Never disputes a printed key — if a key looks wrong, transcribe it as printed and note the
concern in `explanation`.

# Output — two files, this folder
- `np-ep-loc.array.js` — the raw/verbatim transcription pass (one object per question, as read).
- `np-ep-loc.draft.js` — the schema-ready version described above, splice-ready.
Do NOT touch `app\data\questions.neuro.js` or `app\data\cases.neuro.js` — staging only, the hub
splices later. Delete `content\neuro\qb-pages\_tmp-loc\` (the rendered PNGs) when done; do not
leave rendered pages in the repo.

# Report back (short — this is what the hub reads, not the files)
- Final count staged, id range.
- Chapter breakdown (how many filed to which chapter id).
- Any anomaly: page-count mismatch, multi-page question, letter/name key mismatch, figure
  present, possible duplicate against the house bank (with both ids).
- Confirm p.52 is Stroke's first question (chapter boundary check), or say what it actually is.
No need to paste question text into the report — the hub reads the files directly if needed.
