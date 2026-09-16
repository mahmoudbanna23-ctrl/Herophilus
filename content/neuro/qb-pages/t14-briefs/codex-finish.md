# Codex brief — draft topic 14 (Grade Gain neurology, "Back & Lower Limb Pain")

Repo root (your cwd): `D:\claude os\Medical school\Herophilus`.

## The job
Create `content/neuro/qb-pages/gg-nr-t14.draft.js` — all 23 entries, staged n:316-338.
No duplicate fold applies to this topic (mechanical sweep against the live 450-entry corpus and
against topic 13's staging found zero exact-stem or option-set matches touching this batch).
Draft every one of the 23 staged ids, including n:337 and n:338.

## n:337 / n:338 — a discriminated pair, NOT a fold
These two share the same 4-option menu (L3 / L4 / L5 / S1 nerve root) but ask about different
findings — n:337's stem points to hamstring weakness + tibialis-anterior weakness + medial-shin
sensory loss (→ L4), n:338's stem points to great-toe-extension weakness + dorsum-of-foot sensory
loss (→ L5). This was hand-verified already: draft BOTH normally, as fully separate entries with
their own explanations. Do not fold, merge, or cross-reference them beyond what their own clinical
content calls for.

## Source (read, do not edit)
`content/neuro/qb-pages/gg-nr-t14.array.js` — `var GG_NR_T14_STAGED=[…]`, 23 entries, fields
`n p key keyName stem opts box`. Read the file's header comment in full first. `keyName` is null
on every entry — no printed letter-to-name key exists; do not invent one, state in your report
that the cross-check was not performed.

## Schema — one bare object literal per entry, comma-separated, no wrapper array/var
Match the shape used in `content/neuro/qb-pages/gg-nr-t12.draft-A.js` (read it for exact field
names/style): `{ id, bank, module, chapter, stem, options, answer, explanation, objective, source }`.
- `id`: `'npqb-nr-<n>'`.
- `bank`: `'gradegain'`.
- `module`: `'neuropsych'`.
- `chapter`: **per-question**, not fixed for the whole batch — this topic straddles two existing
  chapters (mirrors how the source book's own ch.16 splits regionally):
  - `'nr-backpain'` ("Low back pain and sciatica") — low back pain, sciatica, lumbar disc
    prolapse/herniation, lumbar radiculopathy (L3/L4/L5/S1 roots), cauda equina, spinal stenosis
    at the lumbar level, straight-leg-raise questions.
  - `'nr-neckpain'` ("Neck pain and brachialgia") — neck pain, cervical radiculopathy (C5-C8
    roots), cervical disc disease, brachialgia, cervical myelopathy/spondylosis.
  Decide per stem's actual clinical content (nerve root level and region named in the stem are
  the tell — L-numbered roots and lumbar/leg content → nr-backpain; C-numbered roots and
  neck/arm content → nr-neckpain). If a stem is genuinely ambiguous, pick your best judgement and
  flag it by id in your report — do not silently guess without flagging.
- `stem`: staged `stem`, byte-for-byte, including printed defects — do not fix grammar, spelling,
  or capitalization.
- `options`: staged `opts`, same order, same text, byte-for-byte.
- `answer`: 0-based index into `options` matching the staged `key` letter (A=0, B=1, C=2, D=3).
  `keyName` is null throughout — just map letter position; record every mapping in your report.
  **n:332's printed key is "D — Both A and C"** — a defective/compound key, not a clean single
  letter. Preserve it as printed: set `answer` to the index of the option that best represents
  what the bank printed as correct (state your reasoning), and in `explanation` quote the
  printed key text verbatim and note plainly that the bank's key is compound/defective — per
  house rule, note it, never dispute or silently resolve it to a clean single letter.
- `explanation`: written by you, see writing rules below.
- `objective`: a short one-line learning objective you write.
- `source`: `'Grade Gain neuropsychiatry & neurosurgery qb.pdf, Neurology topic 14 "Back & Lower
  Limb Pain," Q<n>, book p.<p>'` using the staged `p`.

## Printed source defects — preserve verbatim, do not repair
- **n:332**: compound key "D — Both A and C" as printed — see `answer` rule above, note don't fix.
- Some staged stems/options carry printed typos (e.g. "dacs", "sine", "present" where "presents"
  is meant, "LS" as a level abbreviation) — copy each entry's own text exactly as staged, never
  silently correct spelling or grammar; if genuinely confusing, note it in `explanation` without
  altering the transcribed text.
- If you find any other printed oddity not listed here, record it in `explanation`, don't
  silently fix it — GG house rule: a defective key or a bank typo is noted, never disputed.

## Boxed entries
Check the staging file for entries where `box` is non-null (staged entries 328, 331, 336 are
known to carry boxed printed explanations — confirm against the file, don't trust this list
blindly). A box is a verbatim printed quotation; its exact text must appear as a substring inside
`explanation`. Boxed entries carry **no marker sentence**. All other entries are unboxed and need
the marker (below).

## The job, step by step
1. Read the staging file in full, this brief in full, and the cached lecture:
   `content/neuro/lectures/L11) Cervical pain.txt` (quote the path, it contains spaces). This
   single lecture covers BOTH back-pain and neck-pain content despite its title (the deck
   interleaves both topics) — it is the only lecture in scope for this batch; if a claim isn't in
   it, tag it (next point).
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
- Syntax: `node -e "const fs=require('fs');const s=fs.readFileSync(process.argv[1],'utf8');const A=eval('['+s+']');console.log(A.length)" "content/neuro/qb-pages/gg-nr-t14.draft.js"` — must print 23.
- For each entry print: id · chapter chosen · word count of `explanation` · ends-with-marker
  yes/no · answer letter->index mapping used. Count markers (expect 23 minus however many are
  boxed).
- Confirm n:332's compound key is handled per the rule above (quoted verbatim, noted as
  defective, not silently resolved).
- Confirm n:337 and n:338 are both present as separate entries with distinct explanations
  matching their own discriminating findings.
- Confirm emoji count 0. Confirm boxed entries' box text appears verbatim in their `explanation`.
- Scan your own output for non-ASCII bytes (`[^\x00-\x7F]`) and manually confirm each one is the
  single character you intended, not mangled.

## Report (write to `content/neuro/qb-pages/t14-briefs/codex-finish.report.md`, max 60 lines)
Per entry: id · chapter chosen · class (recall 250 / vignette-defect 520) · word count · marker
y/n · answer letter->index mapping used · one line on what the explanation covers. Flag any
ambiguous chapter calls by id. Then: syntax result (must be 23), marker count, emoji count,
non-ASCII scan result, confirmation n:332's compound key was preserved not resolved,
confirmation n:337/n:338 are both drafted as distinct entries, confirmation `keyName` cross-check
was NOT performed (none available) and this is stated rather than silently skipped. List anything
you were unsure about. Do not claim done for anything you did not verify.
