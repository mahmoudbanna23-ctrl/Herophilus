ROUTE-OK: gateway/fleet CLI dispatch (vibe, then opencode+OmniRoute) both burned on this chapter
already — vibe hung 3.5h with no output, opencode hit Gemini-direct quota exhaustion and broke a
shared tool file (reverted). The vision step is now DONE via a different route: OmniRoute
gateway's own Gemini seat (`Tools\omniroute\transcribe-pages.mjs`, model
`gemini/gemini-3.1-flash-lite`, separate quota pool from the direct key) transcribed pp.65-120
clean, 56/56, no 429s. What's left — verify each transcription against its actual page image,
then write the schema-ready draft — is a bounded task, appropriate for a Claude subagent per this
project's own §5 rule (render+visual read happens in a subagent, never main chat).

**OCR outputs, NOT YET VERIFIED — treat every line as a search index, never a source until you
have looked at the matching image (project rule, OCR superscripts/exponents/units fail silently):**
`content\neuro\qb-pages\_stroke-ocr\p<NNNN>.txt` (one per page, 4-digit) + `_manifest.json`.
Matching page images: `content\neuro\qb-pages\_stroke-ocr\pages\p-<NNNN>.png`.
**p.65's OCR came back only 13 characters — likely a divider/title page, NOT necessarily Q1.**
Older renders for pp.53-64 (and a duplicate copy of 65-120) also exist at
`content\neuro\qb-pages\_tmp-stroke\p-<NNNN>.png` if you need to look further back to find the
true start of the question block — do not assume p.65 is Q1, confirm by eye. p.112 and p.120 also
came back at 13 chars (p.112 is plausibly the Epilepsy divider, matching the TOC's p.112 — confirm
by eye; p.120 may just be a short question, check it).

**Cleanup:** delete `_stroke-ocr\pages\` and `_tmp-stroke\` (all rendered PNGs) when done — never
leave rendered pages in the repo tree; `_stroke-ocr`'s `.txt`/`_manifest.json` may also be deleted
once their content is folded into your draft, they have no further use.

# Goal
Stage Chapter 2 "Stroke" of the Neuro Endpoint bank (`npep-stroke-1` .. `npep-stroke-N`, N unknown
until measured).

# Source
`Semester 8\Neuro\Questions\Neuro endpoint.pdf` — read-only, never modify/rename/move.
Chapter 1 Localization closed at `npep-loc-17`, confirmed p.52 is the Stroke title/divider slide
(no question on it). So Stroke's Q1 starts at printed p.53. TOC range is printed pp.52-111 — that
is the book-topic range, NOT a question count (Chapter 1's 46-page range yielded only 17
questions once cover/notes/divider overhead was subtracted). Render p.53 through at least p.115
(TOC says Epilepsy starts at printed p.112 — render a few pages past 111 to confirm the real
boundary, since the running header lags the true section by ~1 page per project notes).

Printed page = PDF page held across Chapter 1 (pp.1-52 verified); re-verify it still holds here,
do not assume it holds to the end of the book.

# Tools
- Poppler: `C:\Users\Alfa388\AppData\Local\Microsoft\WinGet\Packages\oschwartz10612.Poppler_Microsoft.Winget.Source_8wekyb3d8bbwe\poppler-25.07.0\Library\bin\pdftoppm.exe`
  Render: `pdftoppm.exe -png -r 150 -f <first> -l <last> "Semester 8\Neuro\Questions\Neuro endpoint.pdf" "content\neuro\qb-pages\_tmp-stroke\p"`
  (new scratch folder under the project, delete it when done)
- Vision: `node tools\gemini-vision\ask_gemini_multi.js <img1> <img2> ... <imgN> "<prompt>"`
  Model `gemini-3.6-flash`, reads `GEMINI_API_KEY` from the environment (already set — do not
  hardcode it). Batch ~6-8 page images per call. Prompt for exact verbatim transcription of stem,
  all options, the printed answer key (letter AND name if both printed), and any printed
  explanation box — do not summarize or paraphrase.

# Format of this book (verified on Chapter 1, re-confirm holds here)
One question per page, its answer on the immediately following page. Read every answered page —
do not project the count from the page range.

# Schema — copy the shape exactly, do not invent fields
Read `content\neuro\qb-pages\np-ep-loc.draft.js` as your template (already-closed Chapter 1, same
book). Fields: `id`, `bank`, `module`, `chapter`, `stem`, `options` (array), `answer` (0-indexed
into options), `explanation`, `objective`, `source`.

- `id`: `npep-stroke-<n>`, n = printed question number within this topic, starting at 1.
- `bank`: `'endpoint'` (never `'gradegain'`).
- `module`: `'neuropsych'`.
- `chapter`: one of the app's fixed 27 neuropsych chapter ids — read `progress\resume-neuro.md`
  §5's filing table before filing anything. Stroke content mostly files to `nr-hemi` (stroke
  syndromes with weakness/gait) or a dedicated stroke chapter id if one exists in that table —
  check the table, do not guess.
- `explanation`: printed explanation box verbatim if present. If none printed, write one grounded
  in the transcribed material and end it with the marker sentence `Written for this bank — the
  endpoint file prints no explanation here.` (marker never goes in `source`).
- `source`: `'Neuro endpoint.pdf, Stroke, Q<n>, p.<page>'`.
- Figures: if a question has a printed image, do not crop yet — note the page number and a
  one-line description in your report only.

# Duplicate check
Run the six-stage sweep (A-F) from `progress\resume-neuro.md` within this batch only. Also check
by eye against `questions.neuro.js`'s existing `nr-hemi`/`nr-cranial`/`nr-intro`/stroke-relevant
entries for the same fact pattern. If you find a near-duplicate of an already-live house-bank
question, do NOT fold it yourself — flag the id pair in your report and leave both entries in the
draft file. Never dispute a printed key — if a key looks wrong, transcribe it as printed and note
the concern in `explanation`.

# Output — two files, this folder
- `np-ep-stroke.array.js` — raw/verbatim transcription pass (one object per question, as read).
- `np-ep-stroke.draft.js` — schema-ready version described above, splice-ready.
Do NOT touch `app\data\questions.neuro.js` or `app\data\cases.neuro.js` — staging only, the hub
splices later. Delete `content\neuro\qb-pages\_tmp-stroke\` (the rendered PNGs) when done; do not
leave rendered pages in the repo.

# Report back (short — this is what the hub reads, not the files)
- Final count staged, id range.
- Chapter breakdown (how many filed to which chapter id).
- Any anomaly: page-count mismatch, multi-page question, letter/name key mismatch, figure
  present, possible duplicate against the house bank (with both ids).
- Confirm what page the Epilepsy chapter's own title/divider or first question actually starts
  on (chapter boundary check), and whether the printed-page=PDF-page offset still held.
No need to paste question text into the report — read the files directly if needed.
