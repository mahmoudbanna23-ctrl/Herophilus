# Codex brief — draft HALF B of topic 12 (Grade Gain neurology, "Neuromuscular Disorders")

Repo root (your cwd): `D:\claude os\Medical school\Herophilus`. Scratch dir (you may write
reports here): `C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\264665a3-4114-45a8-a18f-42ae16d3ad1d\scratchpad\t12`
(called SCRATCH below).

No draft file exists yet for topic 12 — you are creating half B directly from the staging file.
Half A (n:251–274, excluding n:272) is a separate job on a separate file — do not touch it.

## Your half
**Half B: staged n:275–295, EXCLUDING n:280** (20 drafted ids — n:280 is a confirmed duplicate
fold, see below, do not draft it). Create `content/neuro/qb-pages/gg-nr-t12.draft-B.js`.

## Source (read, do not edit)
`content/neuro/qb-pages/gg-nr-t12.array.js` — `var GG_NR_T12_STAGED=[…]`, 45 entries, fields
`n p key keyName stem opts box`. Read the file's header comment in full first — it records page
geometry, offset verification and known source defects (mixed page, running-header lag). Note:
your range (275–295) includes the **mixed page** flagged in the header (pg-060 mixes the tail of
the questions, Q293–295, with the head of the answer key) — this affects the staging file's own
transcription process, already handled there; it does not change how you draft. `keyName` is
**null on every entry in this topic** — no printed letter-to-name key exists, so the letter/name
cross-check is **unavailable**; do not invent one, state in your report that it was not performed.

## Duplicate fold — already adjudicated, do not redo this judgement
**n:280 is a confirmed print duplicate of n:261** ("common cause of coarse fasciculation," both →
"Motor neuron disease" — same 4 options reshuffled, key printed as D at Q261 / B at Q280). n:261
is in Half A's range and is being drafted there (its `source` field carries the citation back to
Q280). **You do not draft n:280 at all — skip it, do not create `npqb-nr-280`.**

(A second duplicate pair, n:262/n:272, exists entirely inside Half A's range and is that job's
concern — nothing for you to do about it.)

So your half drafts ids `npqb-nr-275` … `npqb-nr-279`, `npqb-nr-281` … `npqb-nr-295` — **20 ids**
(the staged range 275–295 is 21 entries; n:280 is the only one excluded).

## Schema — one bare object literal per entry, comma-separated, no wrapper array/var
Match the shape used in `content/neuro/qb-pages/gg-nr-t12.draft-A.js` if it already exists by the
time you run (it may be running in parallel — do not wait for it, do not read/edit it), otherwise
`content/neuro/qb-pages/gg-nr-t10.draft-A.js` for exact field names/style: `{ id, bank, module,
chapter, stem, options, answer, explanation, objective, source }`.
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
  Disorders," Q<n>, book p.<p>'` using the staged `p`.

## Printed source defect in your range — n:278, preserve verbatim, do not repair
**n:278** (book Q278, "What are the diagnostic CSF finding for Guillian Barre Syndrome?"): the
staged `opts` array prints **5 options where the 3rd and 5th are identical text**, both reading
"Increased cells with normal protein" — a genuine printed defect in the source bank (a duplicated
option), confirmed against the page image, not a transcription error. Keep both options exactly as
staged, in their printed order, do not merge or drop either. Note the duplicate in `explanation`
plainly (it does not affect which option the printed key points to — the key is 'B', the 2nd
option, "Increased protein with few Cells" — the duplicate is elsewhere in the list). Also note the
stem itself prints "Guillian" (misspelled) — copy that spelling exactly, do not correct it to
"Guillain".
If you find any other printed oddity in your range not listed here, record it, don't silently fix
it — GG house rule: a defective key or a bank typo is noted, never disputed or corrected.

## Boxed entries in your half — none
All boxed entries in this topic (n:254, 255, 258, 259) are in Half A's range. **All 20 entries in
your half are unboxed** and take the marker sentence (see below).

## The job
1. Read the staging file in full, this brief in full, and both cached lectures:
   `content/neuro/lectures/L5) Muscle Disease.txt` and
   `content/neuro/lectures/L6) Peripheral neuropathy.txt` (quote paths, they contain spaces).
   These are the only lectures in scope; if a claim isn't in either, tag it (next point).
2. Write each `explanation` to the **writing budget** (2026-08-13 ruling), measured in words:
   - **~520 words** for clinical vignettes, source defects (n:278), or anything the lectures don't
     cover.
   - **~250 words** for straight recall of a fact a lecture states plainly.
   - Explain why the key is right and **every** distractor — mechanism, why it's wrong. No
     padding, no restating the stem.
3. **Outside knowledge rule**: any claim not contained in either lecture gets the short tag
   `not taken from the course material` attached to that specific claim, never a dead-end
   sentence. Grep the lecture before citing it.
4. **Marker**: every entry's `explanation` ENDS with exactly
   `Written for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.`
   (em dash U+2014). Never in `source`. Expected: 20 markers (all entries in this half).
5. No emoji, no markdown headings, no arrows inside strings. Plain prose, em dashes allowed.

## Editing — escaping traps (measured, each has corrupted this repo before)
- Write/edit with your own file tools, never a shell heredoc or `sed` on content, never
  PowerShell writes.
- A real newline ends a JS string. Keep the file pure LF, no CRLF.
- **cp1252/UTF-8 mojibake**: do not let your own output double-encode an em dash or middle dot
  (symptom: em dash becomes `â€”`, middle dot becomes `Â·`). Verify any such character round-trips
  as a single Unicode code point (U+2014 / U+00B7), not a 2-3 byte mangled sequence.

## Verify before you finish (run these yourself)
- Syntax: `node -e "const fs=require('fs');const s=fs.readFileSync(process.argv[1],'utf8');const A=eval('['+s+']');console.log(A.length)" "content/neuro/qb-pages/gg-nr-t12.draft-B.js"` — must print 20.
- Confirm no id `npqb-nr-280` exists in the file.
- For each entry print: id · chapter chosen · word count of `explanation` · ends-with-marker
  yes/no · answer letter->index mapping used. Count markers (expect 20, all entries).
- Confirm emoji count 0. Confirm n:278's duplicate-option defect is noted in its `explanation` and
  both identical options are preserved in its `options` array.
- Scan your own output for non-ASCII bytes (`[^\x00-\x7F]`) and manually confirm each one is the
  single character you intended, not mangled.

## Report (write to `SCRATCH/codex-finish-B.report.md`, max 60 lines)
Per entry: id · chapter chosen · class (recall 250 / vignette-defect 520) · word count · marker
y/n · answer letter->index mapping used · one line on what the explanation covers. Flag any
ambiguous chapter calls by id. Then: syntax result (must be 20), marker count (expect 20), emoji
count, non-ASCII scan result, confirmation n:278's duplicate option is preserved and noted,
confirmation no `npqb-nr-280` id exists, confirmation `keyName` cross-check was NOT performed
(none available) and this is stated rather than silently skipped. List anything you were unsure
about. Do not claim done for anything you did not verify.
