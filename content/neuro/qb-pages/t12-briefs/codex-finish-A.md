# Codex brief — draft HALF A of topic 12 (Grade Gain neurology, "Neuromuscular Disorders")

Repo root (your cwd): `D:\claude os\Medical school\Herophilus`. Scratch dir (you may write
reports here): `C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\264665a3-4114-45a8-a18f-42ae16d3ad1d\scratchpad\t12`
(called SCRATCH below).

No draft file exists yet for topic 12 — you are creating half A directly from the staging file.

## Your half
**Half A: staged n:251–274, EXCLUDING n:272** (23 drafted ids — n:272 is a confirmed duplicate
fold, see below, do not draft it). Create `content/neuro/qb-pages/gg-nr-t12.draft-A.js`. Half B
(n:275–295, excluding n:280) is a separate job on a separate file — do not touch it.

## Source (read, do not edit)
`content/neuro/qb-pages/gg-nr-t12.array.js` — `var GG_NR_T12_STAGED=[…]`, 45 entries, fields
`n p key keyName stem opts box`. Read the file's header comment in full first — it records page
geometry, offset verification and known source defects (mixed page, running-header lag).
`keyName` is **null on every entry in this topic** — no printed letter-to-name key exists, so the
letter/name cross-check is **unavailable**; do not invent one, state in your report that it was
not performed.

## Duplicate fold — already adjudicated, do not redo this judgement
Two pairs of staged entries are confirmed print duplicates (same stem, same 4 options reshuffled,
key letter moves with the option, both point to the same correct answer). Both duplicated
questions happen to fall inside YOUR half's range:
- **n:261 and n:280 are duplicates** ("common cause of coarse fasciculation," both → "Motor
  neuron disease"). n:280 is in Half B's range (275–295) and will be dropped THERE — it is not
  your concern. **You draft n:261 normally** (it is in your half), but its `source` field must
  additionally note: `; also printed as Q280 (book p.53), options reshuffled, key printed there
  as 'B' — same content, folded, not drafted separately`.
- **n:262 and n:272 are duplicates** ("marked delay in nerve conduction velocity," both →
  "Demyelinating polyneuropathy"). **Both n:262 and n:272 are in YOUR half.** Draft n:262
  normally, with its `source` field additionally noting: `; also printed as Q272 (book p.52),
  options reshuffled, key printed there as 'A' — same content, folded, not drafted separately`.
  **Do not draft n:272 at all — skip it, do not create `npqb-nr-272`.**

So your half drafts ids `npqb-nr-251` … `npqb-nr-271`, `npqb-nr-273`, `npqb-nr-274` — **23 ids**
(the staged range 251–274 is 24 entries; n:272 is the only one excluded).

## Schema — one bare object literal per entry, comma-separated, no wrapper array/var
Match the shape used in `content/neuro/qb-pages/gg-nr-t11.draft-A.js` if it exists, otherwise
`content/neuro/qb-pages/gg-nr-t10.draft-A.js` (read one for exact field names/style): `{ id, bank,
module, chapter, stem, options, answer, explanation, objective, source }`.
- `id`: `'npqb-nr-<n>'`.
- `bank`: `'gradegain'`.
- `module`: `'neuropsych'`.
- `chapter`: **per-question**, not fixed for the whole batch — this topic straddles two existing
  chapters (there is no dedicated "neuromuscular" chapter in `app/data/modules.js`):
  - `'nr-nerve'` ("Peripheral neuropathy and Guillain-Barré") — GBS, CIDP, polyneuropathy,
    mononeuropathy, entrapment neuropathy, plexopathy, radiculopathy, nerve-conduction questions,
    diabetic/alcoholic/vitamin-B12/porphyric neuropathy.
  - `'nr-lmn'` ("Muscle disease and the neuromuscular junction") — myasthenia gravis, Lambert-Eaton,
    myopathy, muscular dystrophy, polymyositis/dermatomyositis, motor neuron disease/ALS, periodic
    paralysis, creatine-kinase-elevation-from-muscle questions.
  Decide per stem's actual clinical content. If a stem is genuinely ambiguous between the two,
  pick your best judgement and flag it by id in your report — do not silently guess without
  flagging.
- `stem`: staged `stem`, byte-for-byte, including printed defects (see below) — do not fix
  grammar, spelling, or capitalization.
- `options`: staged `opts`, same order, same text, byte-for-byte.
- `answer`: 0-based index into `options` matching the staged `key` letter (A=0, B=1, C=2, D=3,
  E=4). `keyName` is null throughout — just map letter position; record every mapping in your
  report.
- `explanation`: written by you, see writing rules below.
- `objective`: a short one-line learning objective you write.
- `source`: `'Grade Gain neuropsychiatry & neurosurgery qb.pdf, Neurology topic 12 "Neuromuscular
  Disorders," Q<n>, book p.<p>'` using the staged `p` — plus the fold note above for n:261 only.

## Printed source defects — preserve verbatim, do not repair
- **n:258** (book Q258): the printed explanation box **ends mid-sentence** — "...with alcoholic
  polyneuropathy all fibres types are affected and" — confirmed by direct page re-check as a
  genuine printed defect in the source book itself (not a transcription cutoff; pg-061's next line
  starts Q259's answer, nothing more of Q258 follows). Quote the box verbatim including the
  incomplete ending inside `explanation`; state plainly in `explanation` that the bank's own
  printed explanation ends mid-sentence and is preserved as printed, never completed or guessed.
- Options/stems may carry printed spelling variants (e.g. "Guillian Barre", "Guillain Barre" vs
  "Guillain-Barre") across different entries — these are frozen text; copy each entry's own
  spelling exactly, never normalize to match another entry.
- If you find any other printed oddity in your range not listed here, record it, don't silently
  fix it — GG house rule: a defective key or a bank typo is noted, never disputed or corrected.

## Boxed entries in your half — n:254, n:255, n:258, n:259 (4 of your 23)
A box is a verbatim printed quotation. Its exact text (n:258's cut off exactly as printed) must
appear as a substring inside `explanation`. Boxed entries carry **no marker sentence**. All other
19 entries in your half are unboxed.

## The job
1. Read the staging file in full, this brief in full, and both cached lectures:
   `content/neuro/lectures/L5) Muscle Disease.txt` and
   `content/neuro/lectures/L6) Peripheral neuropathy.txt` (quote paths, they contain spaces).
   These are the only lectures in scope; if a claim isn't in either, tag it (next point).
2. Write each `explanation` to the **writing budget** (2026-08-13 ruling), measured in words:
   - **~520 words** for clinical vignettes, source defects/contradictions, or anything the
     lectures don't cover.
   - **~250 words** for straight recall of a fact a lecture states plainly.
   - Explain why the key is right and **every** distractor — mechanism, why it's wrong. No
     padding, no restating the stem.
3. **Outside knowledge rule**: any claim not contained in either lecture gets the short tag
   `not taken from the course material` attached to that specific claim, never a dead-end
   sentence. Grep the lecture before citing it.
4. **n:258's mid-sentence cutoff**: in `explanation`, state plainly the book's own printed
   explanation ends there, preserved as printed, not completed — do not silently finish the
   sentence for it.
5. **Marker**: every unboxed entry's `explanation` ENDS with exactly
   `Written for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.`
   (em dash U+2014). Never on boxed entries, never in `source`. Expected: 19 markers in this half.
6. No emoji, no markdown headings, no arrows inside strings. Plain prose, em dashes allowed.

## Editing — escaping traps (measured, each has corrupted this repo before)
- Write/edit with your own file tools, never a shell heredoc or `sed` on content, never
  PowerShell writes.
- A real newline ends a JS string. Keep the file pure LF, no CRLF.
- **cp1252/UTF-8 mojibake**: do not let your own output double-encode an em dash or middle dot
  (symptom: em dash becomes `â€”`, middle dot becomes `Â·`). Verify any such character round-trips
  as a single Unicode code point (U+2014 / U+00B7), not a 2-3 byte mangled sequence.

## Verify before you finish (run these yourself)
- Syntax: `node -e "const fs=require('fs');const s=fs.readFileSync(process.argv[1],'utf8');const A=eval('['+s+']');console.log(A.length)" "content/neuro/qb-pages/gg-nr-t12.draft-A.js"` — must print 23.
- Confirm no id `npqb-nr-272` exists in the file.
- For each entry print: id · chapter chosen · word count of `explanation` · ends-with-marker
  yes/no · answer letter->index mapping used. Count markers (expect 19).
- Confirm emoji count 0. Confirm the 4 boxed entries' box text appears verbatim in their
  `explanation`, including n:258's mid-sentence cutoff.
- Scan your own output for non-ASCII bytes (`[^\x00-\x7F]`) and manually confirm each one is the
  single character you intended, not mangled.

## Report (write to `SCRATCH/codex-finish-A.report.md`, max 60 lines)
Per entry: id · chapter chosen · class (recall 250 / vignette-defect 520) · word count · marker
y/n · answer letter->index mapping used · one line on what the explanation covers. Flag any
ambiguous chapter calls by id. Then: syntax result (must be 23), marker count (expect 19), emoji
count, non-ASCII scan result, confirmation n:258's cutoff is noted rather than completed,
confirmation n:261's AND n:262's fold notes are present in their `source` fields, confirmation no
`npqb-nr-272` id exists, confirmation `keyName` cross-check was NOT performed (none available) and
this is stated rather than silently skipped. List anything you were unsure about. Do not claim
done for anything you did not verify.
