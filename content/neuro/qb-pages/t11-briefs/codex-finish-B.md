# Drafting brief — build HALF B of topic 11 drafts (Grade Gain neurology, "Demyelinating Diseases")

Repo root (cwd): `D:\claude os\Medical school\Herophilus`. Scratch dir (you may write here):
`C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\03501121-4d60-45a3-8600-6e8331e1ef15\scratchpad\t11`
(called SCRATCH below).

## Your half
**Half B: Q240-Q250**, ids `npqb-nr-240` … `npqb-nr-250` (11 entries). Create
`content/neuro/qb-pages/gg-nr-t11.draft-B.js`. Half A (Q228-Q239) is a separate job on a separate
file — do not touch it.

## Source (read, do not edit)
`content/neuro/qb-pages/gg-nr-t11.array.js` — `var GG_NR_T11_STAGED=[...]`, 23 entries, fields
`n p key keyName stem opts box`. Read the file's header comment in full. `keyName` is **null on
every entry** — no printed letter-to-name key exists, cross-check is **unavailable**; do not invent
one, state in your report that it was not performed rather than silently skipping it.

## Schema — one bare object literal per entry, comma-separated, no wrapper array/var
`{ id, bank, module, chapter, stem, options, answer, explanation, objective, source }` — match the
shape used in `content/neuro/qb-pages/gg-nr-t10.draft-A.js`.
- `id`: `'npqb-nr-<n>'`.
- `bank`: `'gradegain'`.
- `module`: `'neuropsych'`.
- `chapter`: `'nr-demyelinating'`.
- `stem`: staged `stem`, byte-for-byte, printed defects included (see below) — never fix grammar,
  spacing, or spelling in it.
- `options`: staged `opts`, same order, same text, byte-for-byte.
- `answer`: 0-based index into `options` corresponding to the staged `key` letter (A=0, B=1, C=2,
  D=3, E=4). Record every mapping used in your report.
- `explanation`: written by you, see below.
- `objective`: a short one-line learning objective you write.
- `source`: `'Grade Gain neuropsychiatry & neurosurgery qb.pdf, Neurology topic 11 "Demyelinating
  Diseases," Q<n>, book p.<p>'` using the staged `p`.

## Printed source defects in your half — preserve verbatim, do not repair
- Q248: only 3 options printed (no D/E) — keep as 3.
- Q249: only 3 options printed, non-sequential lettering on the source page (a/b/e) — the staged
  `opts` array is already positional (3 entries); keep as 3, the original page lettering does not
  affect your `answer` index mapping.
- Q250: printed box has typo `"Explantion"` and grammar break `"...abducting eye. of the brain
  affected is..."` — the box text you quote inside `explanation` must reproduce both exactly, do not
  silently correct.

## Boxed entries in your half — Q247, Q250 (2 of 11)
A box is a verbatim printed quotation. Its exact text (typos included on Q250) must appear as a
substring inside `explanation` — introduce it as an unlabelled leading quote, matching
`gg-nr-t10.draft-A.js`'s convention for boxed entries. Boxed entries carry **no marker sentence**.
The other 9 entries in your half are unboxed.

## The job
1. Read the staging file in full, this brief in full, and
   `content/neuro/lectures/L2) Multiple sclerosis.txt` (quote the path — it contains spaces and a
   closing paren). This is the only lecture in scope for this topic; if a claim isn't in it, tag it
   (next point).
2. Write each `explanation` to the **writing budget**, measured in words:
   - **~520 words** for clinical vignettes, source defects, divergences from the lecture, or
     anything the lecture does not cover.
   - **~250 words** for straight recall of a fact the lecture states plainly.
   - Explain why the key is right and **every** distractor — mechanism, localisation, why it's
     wrong. No padding, no restating the stem, no repetition.
   - Vignettes/520-class in this half: Q250 (clinical scenario, also boxed), Q248/Q249 (printed
     defects need discussion), Q247 (Uhthoff phenomenon, boxed but short — use judgement, likely
     250-class since the box itself is short). Use judgement otherwise — a short stem testing one
     fact is 250-class.
3. **Outside knowledge rule**: any claim not contained in `L2) Multiple sclerosis.txt` gets the
   short tag `not taken from the course material` attached to that specific claim (parenthetical or
   short clause), never a dead-end sentence. Grep the lecture before citing it.
4. **Marker**: every unboxed entry's `explanation` ENDS with exactly
   `Written for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.`
   (em dash U+2014). Never on boxed entries, never in `source`. Expected: 9 markers (all except
   247, 250).
5. No emoji, no markdown headings, no arrows inside strings. Plain prose, em dashes allowed.

## Editing — escaping traps (measured, each has corrupted this repo before)
- Write/edit with your own file tools, never a shell heredoc or `sed` on content, never PowerShell
  writes.
- A real newline ends a JS string. Keep the file pure LF, no CRLF.
- **cp1252/UTF-8 mojibake**: do not let your own output double-encode an em dash or middle dot. If
  you introduce either character, verify it round-trips as a single Unicode code point (U+2014 /
  U+00B7), not a 2-3 byte mangled sequence.

## Verify before you finish (run these yourself)
- Syntax: `node -e "const fs=require('fs');const s=fs.readFileSync(process.argv[1],'utf8');const A=eval('['+s+']');console.log(A.length)" "content/neuro/qb-pages/gg-nr-t11.draft-B.js"` — must print 11.
- For each entry print: id, word count of `explanation`, ends-with-marker yes/no, answer index used.
  Count markers (expect 9).
- Confirm emoji count 0. Confirm Q247's and Q250's box text appears verbatim in their
  `explanation`.
- Scan your own output for non-ASCII bytes (`[^\x00-\x7F]`) and manually confirm each one is the
  single character you intended, not mangled.

## Report (write to `SCRATCH/codex-finish-B.report.md`, max 60 lines)
Per entry: id · class (recall 250 / vignette-defect-gap 520) · word count · marker y/n · answer
letter->index mapping used · one line on what the explanation covers. Then: syntax result, marker
count, emoji count, non-ASCII character scan result, confirmation `keyName`-cross-check was NOT
performed (none available). List anything you were unsure about. Do not claim done for anything you
did not verify.
