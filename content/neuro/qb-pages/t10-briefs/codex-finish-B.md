# Codex brief — build and finish HALF B of topic 10 drafts (Grade Gain neurology, "Movement Disorders")

Repo root (your cwd): `D:\claude os\Medical school\Herophilus`. Scratch dir (you may write here):
`C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\6b33dda5-bb63-4792-a7d8-58b5aeea0c32\scratchpad\t10`
(called SCRATCH below).

Unlike topic 09, **no draft file exists yet for topic 10** — you are creating half B from the
staging file directly, not merely expanding an existing draft.

## Your half
**Half B: Q214–Q227**, ids `npqb-nr-214` … `npqb-nr-227` (14 entries). Create
`content/neuro/qb-pages/gg-nr-t10.draft-B.js`. Half A (Q199–Q213) is a separate job on a separate
file — do not touch it.

## Source (read, do not edit)
`content/neuro/qb-pages/gg-nr-t10.array.js` — `var GG_NR_T10_STAGED=[…]`, 29 entries, fields
`n p key keyName stem opts box`. Read the file header comment in full — it records page geometry,
offset verification and every known source defect. `keyName` is **null on every entry in this
topic** — there is no printed letter-to-name key, so the letter/name cross-check is **unavailable**;
do not invent one, do not silently skip mentioning it — record it as not performed in your report.

## Schema — one bare object literal per entry, comma-separated, no wrapper array/var
Match the shape used in `content/neuro/qb-pages/gg-nr-t09.draft-A.js` (read it for exact field
names and style): `{ id, bank, module, chapter, stem, options, answer, explanation, objective,
source }`.
- `id`: `'npqb-nr-<n>'`.
- `bank`: `'gradegain'`.
- `module`: `'neuropsych'`.
- `chapter`: `'nr-movement'`.
- `stem`: staged `stem`, byte-for-byte, including its printed defects (see below) — do not fix
  grammar, capitalization, or spelling in it.
- `options`: staged `opts`, same order, same text, byte-for-byte.
- `answer`: 0-based index into `options` corresponding to the staged `key` letter (A=0, B=1, C=2,
  D=3, E=4). Since `keyName` is null you cannot cross-check the letter against an option name —
  just map the letter position; record every mapping in your report so it can be checked.
- `explanation`: written by you, see below.
- `objective`: a short one-line learning objective you write.
- `source`: `'Grade Gain neuropsychiatry & neurosurgery qb.pdf, Neurology topic 10 "Movement
  Disorders," Q<n>, book p.<p>'` using the staged `p`.

## Printed source defects — preserve verbatim in `stem`/`options`, do not repair
- Q224: the staged stem uses a curly apostrophe in "Parkinson’s" (not the straight `'` used
  elsewhere) — copy the exact character, do not normalize it.
- Options text elsewhere may carry OCR-plausible printed spellings or short option lists (e.g. any
  entry with 3 options where others have 4-5) — these are frozen `stem`/`options` text; copy
  exactly, never correct, never pad with an invented distractor.

## Boxed entries — Q219, Q225 (2 of your 14)
A box is a verbatim printed quotation. Its exact text must appear as a substring inside
`explanation` (you may introduce it, e.g. with an unlabelled leading quote or blockquote-style
paragraph — match `gg-nr-t09.draft-A.js`'s convention for boxed entries). Boxed entries carry
**no marker sentence**. The other 12 entries in your half (214–218, 220–224, 226, 227) are unboxed.

## The job
1. Read the staging file in full, this brief in full, and
   `content/neuro/lectures/L3) MOVEMENT DISORDERS.txt` (quote the path — it contains spaces and a
   closing paren before the `)`). This is the only lecture in scope for this topic; if a claim isn't
   in it, tag it (next point).
2. Write each `explanation` to the **writing budget**, measured in words:
   - **~520 words** for clinical vignettes, source defects, divergences from the lecture, or
     anything the lecture does not cover.
   - **~250 words** for straight recall of a fact the lecture states plainly.
   - Explain why the key is right and **every** distractor — mechanism, localisation, why it's
     wrong. No padding, no restating the stem, no repetition.
   - Vignettes in this half: Q214, Q216, Q219 (also boxed), Q225 (also boxed), Q226, Q227. Use
     judgement — a short stem testing one fact is 250-class; a clinical scenario is 520-class.
3. **Outside knowledge rule**: any claim not contained in `L3) MOVEMENT DISORDERS.txt` gets the
   short tag `not taken from the course material` attached to that specific claim (parenthetical or
   short clause), never a dead-end sentence. Grep the lecture before citing it — a wrong citation is
   worse than a tag.
4. **Marker**: every unboxed entry's `explanation` ENDS with exactly
   `Written for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.`
   (em dash U+2014, not two hyphens, not a mangled substitute). Never on boxed entries, never in
   `source`. Expected: 12 markers in this half (214–218, 220–224, 226, 227).
5. No emoji, no markdown headings, no arrows inside strings. Plain prose, em dashes allowed.

## Editing — escaping traps (measured, each has corrupted this repo before)
- Write/edit with your own file tools, never a shell heredoc or `sed` on content, never PowerShell
  writes.
- A real newline ends a JS string. Keep the file pure LF, no CRLF.
- **cp1252/UTF-8 mojibake**: do not let your own output double-encode an em dash or middle dot
  (symptom: em dash becomes `â€”`, middle dot becomes `Â·`). If you introduce either character,
  verify with a byte-level check that it round-trips as a single Unicode code point (U+2014 / U+00B7),
  not a 2-3 byte mangled sequence.

## Verify before you finish (run these yourself)
- Syntax: `node -e "const fs=require('fs');const s=fs.readFileSync(process.argv[1],'utf8');const A=eval('['+s+']');console.log(A.length)" "content/neuro/qb-pages/gg-nr-t10.draft-B.js"` — must print 14.
- For each entry print: id, word count of `explanation`, ends-with-marker yes/no, answer index used.
  Count markers (expect 12).
- Confirm emoji count 0. Confirm the 2 boxed entries' box text appears verbatim in their
  `explanation`.
- Scan your own output for non-ASCII bytes (`[^\x00-\x7F]`) and manually confirm each one is the
  single character you intended (em dash, curly apostrophe you copied from Q224, etc.), not mangled.

## Report (write to `SCRATCH/codex-finish-B.report.md`, max 60 lines)
Per entry: id · class (recall 250 / vignette-defect-gap 520) · word count · marker y/n · answer
letter->index mapping used · one line on what the explanation covers. Then: syntax result, marker
count, emoji count, non-ASCII character scan result, confirmation `keyName`-cross-check was NOT
performed (none available) and this is stated rather than silently skipped. List anything you were
unsure about. Do not claim done for anything you did not verify.
