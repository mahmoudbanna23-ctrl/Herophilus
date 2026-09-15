# Codex brief — finish ONE half of topic 09 drafts (Grade Gain neurology, "Coma")

Repo root (your cwd): `D:\claude os\Medical school\Herophilus`. Scratch dir (you may write here):
`C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\874149fd-c72a-408a-baf0-da4792eb5ab5\scratchpad\t09`
(called SCRATCH below).

The prompt that launched you names the half: **A** or **B**.
- Half A file: `content/neuro/qb-pages/gg-nr-t09.draft-A.js` (Q177–Q187, ids `npqb-nr-177`…`187`)
- Half B file: `content/neuro/qb-pages/gg-nr-t09.draft-B.js` (Q188–Q198, ids `npqb-nr-188`…`198`)

## You may change
ONLY the `explanation` text of entries in YOUR half's file. And, for half A only, the `source` field
where a finding below says a citation is wrong. Nothing else in the repo. No git. No other file.

## You must NOT change (a script will diff these against the staging file afterwards)
`id`, `chapter`, `bank`, `stem`, `options` (text and order), `answer`, `image`/`imgAlt` if present,
and any **printed box** text. The staging file `content/neuro/qb-pages/gg-nr-t09.array.js`
(`GG_NR_T09_STAGED`, fields `n p key keyName stem opts box note`) is the frozen reference — read it.
Boxed entries: **Q178, Q187, Q189 (prose box), Q197 (flowchart box)**. A box is a quotation: its
text stays byte-for-byte; you may only touch authored prose outside it. Boxed entries carry NO marker.

Printed source defects — record, never repair: Q186 has three options; Q197 option b is truncated at
"Obtain a repeat brain MRI with"; Q198 has three options. The key is the bank's printed key even if
you think it is wrong — note a doubt in `explanation`, never move `answer`.

## The job
1. Read the staging file, your half's draft, and every lecture you cite from
   `content/neuro/lectures/` (24 `.txt` files; relevant: `L8) Cranial nerves.txt`,
   `L9) CNS infection.txt`, `L10) Stroke.txt`; there is NO dedicated coma lecture). Quote paths —
   they contain spaces and `)`.
2. Bring each explanation to the **writing budget**, measured in words of `explanation`:
   - **~520 words** for clinical vignettes, source defects, divergences, gap-fills (anything the lectures do not cover).
   - **~250 words** for straight recall of a fact a lecture states.
   - **Deepen, never pad**: explain why the key is right, explain **every** distractor, add the
     mechanism/localisation that makes the question stick. No repetition, no filler, no restating the stem.
   - Reference: a shipped topic ran mean 512, min 479. Currently half A is mean ~300 (too thin); half B mean ~489.
   - Entries already at budget and correct: leave alone.
3. **Outside knowledge rule**: any claim the cited lecture does not contain gets the short tag
   `not taken from the course material` attached to that claim (a parenthetical or short clause), never
   a dead-end sentence. A citation to a lecture that does not contain the fact is WORSE than a tag —
   grep the lecture before citing it.
4. **Marker**: every non-boxed entry's `explanation` ENDS with exactly
   `Written for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.`
   (em dash U+2014). Keep it the last thing. Never put it in `source`. Never on boxed entries.
   Expected: 9 markers in each half.
5. No emoji, no ⚠️, no markdown headings inside strings. Plain prose, em dashes allowed.
6. **Back-references**: a stem saying "the previous case" stays as printed; the explanation names the
   antecedent id in backticks.

## Half A only — five provenance fixes (all must land; check each is present, fix if not)
Full detail: `content/neuro/qb-pages/gg-nr-t09-factcheck.md` and `SCRATCH/factcheck-draft-A.md`. Summary:
1. Q181 — remove the false claim that GCS 3 was discussed "in Q179's brain-death context" (Q179 never mentions GCS).
2. Q187 — oculocephalic (doll's-eye) reflex content must NOT ride on the `L8) Cranial nerves.txt` citation (L8 never mentions it); tag it outside knowledge.
3. Q182 — after the correctly L8-cited opening sentence, the PComm-aneurysm / uncal-herniation mechanism and "down and out" eye are outside knowledge: tag them. It is a **posterior communicating** artery aneurysm — if the text says posterior cerebral, fix it. Earlier repairs to keep: "Horner's" (not "Homer's").
4. Q178 — "the territory involved is not one that recovers on its own once infarcted" is not in `L10) Stroke.txt`: separate it from that citation and tag it. Q178 is boxed — only touch prose outside the box.
5. Q177 — the bilateral paramedian thalamic lesion claim: tag it.
Also keep earlier repairs: Q186 "eyes. His" run-on fixed; Q187 "oculocephalic", "persistent", capital opening.

## Editing — escaping traps (measured, each has corrupted this repo before)
- Edit with your patch/edit tool, never shell heredocs or `sed` on content, never PowerShell writes.
- Inside JS strings: a real newline ends the string; `\` must stay `\\` where intended; keep the file's quote style.
- File is pure LF. Keep it LF.

## Verify before you finish (run these yourself)
- Syntax: the draft file is a bare comma-separated run of objects. Check with node by wrapping it:
  `node -e "const fs=require('fs');const s=fs.readFileSync(process.argv[1],'utf8');const A=eval('['+s+']');console.log(A.length)" "<file>"` — must print 11.
- For each entry print: id, word count of `explanation`, ends-with-marker yes/no. Count markers (expect 9).
- Confirm emoji count 0.

## Report (write to `SCRATCH/codex-finish-<HALF>.report.md`, max 60 lines)
Per entry: id · class (recall 250 / vignette-defect-gap 520) · words before → after · marker y/n · one
line on what you added. Then: syntax result, marker count, emoji count, (half A) each of the five fixes
with the exact new sentence. List anything you were unsure about. Do not claim done for anything you did not verify.
