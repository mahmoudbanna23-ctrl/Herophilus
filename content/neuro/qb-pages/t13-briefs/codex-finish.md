# Codex brief — draft topic 13 (Grade Gain neurology, "CNS Infections")

Repo root (your cwd): `D:\claude os\Medical school\Herophilus`.

## The job
Create `content/neuro/qb-pages/gg-nr-t13.draft.js` — all 20 entries, staged n:296-315.
No duplicate fold applies to this topic (mechanical sweep against the live 450-entry corpus
and against topic 14's staging found zero exact-stem or option-set matches for this batch;
one topic-14-internal option-set match was hand-checked and is a legitimate discriminated
pair, not a fold — does not touch topic 13 at all). Draft every one of the 20 staged ids.

## Source (read, do not edit)
`content/neuro/qb-pages/gg-nr-t13.array.js` — `var GG_NR_T13_STAGED=[…]`, 20 entries, fields
`n p key keyName stem opts box`. Read the file's header comment in full first. `keyName` is
null on every entry — no printed letter-to-name key exists; do not invent one, state in your
report that the cross-check was not performed.

## Schema — one bare object literal per entry, comma-separated, no wrapper array/var
Match the shape used in `content/neuro/qb-pages/gg-nr-t12.draft-A.js` (read it for exact field
names/style): `{ id, bank, module, chapter, stem, options, answer, explanation, objective, source }`.
- `id`: `'npqb-nr-<n>'`.
- `bank`: `'gradegain'`.
- `module`: `'neuropsych'`.
- `chapter`: `'nr-cns'` ("CNS infections") for every entry in this topic — single chapter, no
  per-question decision needed.
- `stem`: staged `stem`, byte-for-byte, including printed defects — do not fix grammar,
  spelling, or capitalization. Note some staged options carry a leading `'a. '`/`'b. '` etc.
  label baked into the text (e.g. `'a. Acyclovir'`) — keep that prefix exactly as staged, do
  not strip it, since it is how this topic's pages actually print the choices.
- `options`: staged `opts`, same order, same text, byte-for-byte (including any `a./b./c./d.`
  prefix present in the staged text).
- `answer`: 0-based index into `options` matching the staged `key` letter (A=0, B=1, C=2,
  D=3). `keyName` is null throughout — just map letter position; record every mapping in your
  report.
- `explanation`: written by you, see writing rules below.
- `objective`: a short one-line learning objective you write.
- `source`: `'Grade Gain neuropsychiatry & neurosurgery qb.pdf, Neurology topic 13 "CNS
  Infections," Q<n>, book p.<p>'` using the staged `p`.

## Printed source defects — preserve verbatim, do not repair
- If you find any printed oddity (typo, ambiguous key, malformed option) not already noted in
  the staging file's header comment, record it in `explanation`, don't silently fix it — GG
  house rule: a defective key or a bank typo is noted, never disputed or corrected.
- Options/stems may carry printed spelling variants across different entries — these are
  frozen text; copy each entry's own spelling exactly, never normalize to match another entry.

## Boxed entries
Check the staging file for any entry where `box` is non-null. A box is a verbatim printed
quotation. Its exact text must appear as a substring inside `explanation`. Boxed entries carry
**no marker sentence**. All other entries are unboxed and need the marker (below).

## The job, step by step
1. Read the staging file in full, this brief in full, and the cached lecture:
   `content/neuro/lectures/L9) CNS infection.txt` (quote the path, it contains spaces). This is
   the only lecture in scope; if a claim isn't in it, tag it (next point).
2. Write each `explanation` to the **writing budget** (2026-08-13 ruling), measured in words:
   - **~520 words** for clinical vignettes, source defects/contradictions, or anything the
     lecture doesn't cover.
   - **~250 words** for straight recall of a fact the lecture states plainly.
   - Explain why the key is right and **every** distractor — mechanism, why it's wrong. No
     padding, no restating the stem.
3. **Outside knowledge rule**: any claim not contained in the lecture gets the short tag
   `not taken from the course material` attached to that specific claim, never a dead-end
   sentence. Grep the lecture before citing it.
4. **Marker**: every unboxed entry's `explanation` ENDS with exactly
   `Written for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.`
   (em dash U+2014). Never on boxed entries, never in `source`.
5. No emoji, no markdown headings, no arrows inside strings. Plain prose, em dashes allowed.

## Editing — escaping traps (measured, each has corrupted this repo before)
- Write/edit with your own file tools, never a shell heredoc or `sed` on content, never
  PowerShell writes.
- A real newline ends a JS string. Keep the file pure LF, no CRLF.
- **cp1252/UTF-8 mojibake**: do not let your own output double-encode an em dash or middle dot
  (symptom: em dash becomes `â€”`, middle dot becomes `Â·`). Verify any such character round-trips
  as a single Unicode code point (U+2014 / U+00B7), not a 2-3 byte mangled sequence.

## Verify before you finish (run these yourself)
- Syntax: `node -e "const fs=require('fs');const s=fs.readFileSync(process.argv[1],'utf8');const A=eval('['+s+']');console.log(A.length)" "content/neuro/qb-pages/gg-nr-t13.draft.js"` — must print 20.
- For each entry print: id · word count of `explanation` · ends-with-marker yes/no · answer
  letter->index mapping used. Count markers (expect 20 minus however many are boxed).
- Confirm emoji count 0. Confirm any boxed entries' box text appears verbatim in their
  `explanation`.
- Scan your own output for non-ASCII bytes (`[^\x00-\x7F]`) and manually confirm each one is the
  single character you intended, not mangled.

## Report (write to `content/neuro/qb-pages/t13-briefs/codex-finish.report.md`, max 60 lines)
Per entry: id · class (recall 250 / vignette-defect 520) · word count · marker y/n · answer
letter->index mapping used · one line on what the explanation covers. Then: syntax result (must
be 20), marker count, emoji count, non-ASCII scan result, confirmation `keyName` cross-check was
NOT performed (none available) and this is stated rather than silently skipped. List anything
you were unsure about. Do not claim done for anything you did not verify.
