# Shared brief — peds House ch.10 "Nutrition", drafting the 15 staged questions

You are writing app entries from an existing verbatim staging record. **You transcribe nothing new
and you author no stem, option or key.** Project root: `D:\claude os\Medical school\Herophilus`.

## 1. Your range and your file

Told to you in your own task prompt. **Write only your own file.** Never open, read or edit the other
half — the two are merged by a byte-level splice afterwards and cross-contamination is the failure
mode that splice cannot detect.

## 2. The staging record is the source of truth for everything printed

`content\peds\qb-pages\house-ch10-nutrition.array.js` — `var PEDHD_NUTR_STAGED`, 15 entries, book
pp.75–80. **Read its header in full before writing anything.**

**`stem` and `options` must be BYTE-IDENTICAL to the staging entry. No normalisation, no tidying.**
A validator compares them with `JSON.stringify` and will fail you. Typos, curly quotes, en dashes and
the real ½ glyph are all reproduced exactly — **and per a user ruling of 2026-09-02 you do not
comment on any of them.** They are copied silently.

**`answer` is the INDEX of the staged `key` letter** — `'ABCDE'.indexOf(key)`. It never moves.
**A defective key is noted in `explanation`, never disputed, and never taken to the user.**

⚠️ **Every key in this chapter prints as a bare letter with no option name.** The letter-vs-name
cross-check is therefore **unavailable for all 15** — do not claim it passed. Say it was not possible.

## 3. Entry shape

Copy `content\peds\qb-pages\house-ch09-dev-problems.draft-A.js` exactly. **Entries open at column 0,
fields indent two spaces.** Field set, nothing else:

`id` · `bank` · `module` · `chapter` · [`image` · `imgAlt` — Q1 only] · `stem` · `options` ·
`answer` · `explanation` · `objective` · `source`

- `id`: `pedhd-nutr-<n>`. **Verify the prefix is free before you start** — grep it in
  `app\data\questions.peds.js` and say what you got.
- `bank:'house'` · `module:'pediatrics'`.
- **`boiler` and `fig` are staging fields. They do NOT go into the app entry**, and the boiler line is
  never added to a stem. Do not mention either in an explanation.

## 4. Chapter assignment — five candidate ids, ALL verified to resolve in `MODULES`

Assign **one question at a time, on what the STEM is about**, never as a block:

| ids | chapter |
|---|---|
| general nutrition, faltering growth, obesity | `nutrition` |
| breast/formula feeding, weaning, infant feeding practice | `nutrition-feed` |
| kwashiorkor, marasmus, protein-energy malnutrition | `nutrition-pem` |
| rickets, vitamin deficiencies and excesses | `nutrition-vit` |
| growth charts, centiles, short stature | `growth-puberty` |

`gastroenterology`, `gi-diarrhoea` and `endo-thyroid` also exist if a stem genuinely lands there.
Where a question straddles, **assign the primary and name the secondary inside the entry**.

## 5. Grounding — read these before writing, quote them, cite them

Load with `vm.runInThisContext` (`require` does not work on these files).
⚠️ **`T_PEDS` is an OBJECT keyed by chapter id, not an array.** `T_PEDS.length` is `undefined` and an
index walk silently returns nothing. Address it as `T_PEDS['nutrition-vit'].sections`.

⚠️⚠️ **THE SECTION IDS RUN CONTINUOUSLY ACROSS ALL FOUR NUTRITION CHAPTERS.** Measured off disk:

| chapter | sections | ids |
|---|---|---|
| `nutrition` | 5 | `nut-1` … `nut-5` |
| `nutrition-feed` | 10 | `nut-6` … `nut-15` |
| `nutrition-pem` | 5 | `nut-16` … `nut-20` |
| `nutrition-vit` | 11 | `nut-21` … `nut-31` |
| `growth-puberty` | 11 | `gp-1` … `gp-11` |

So **grepping for a `nv-` or `pem-` prefix returns a false zero.** This is the same trap that bit on
`dev-nd`, whose sections are `dp-9`…`dp-17`. **Cite the ids as they exist on disk, and index by
position (`sections[i]`) only when you say you are doing so** — a `§` number in this brief is a
0-based index, not a printed section number.

Also cached and usable: `content\peds\lectures\*.txt`. The directly relevant decks are
**15.1 Faltering Growth · 15.2 Infant Feeding · 16 P.E.M. · 17 Vitamin D Deficiency Rickets ·
Vitamin deficiency Rickets**. List the directory and read the real filenames — **never write a
filename, page number or id from memory.**

## 6. `source` — exact shape, and the two straddles

`pediatric .pdf p.<page> (Part I, ch.10 Q<n>)`

The page is the staging entry's `p` — **the page the NUMBER is printed on**. Printed numbers run 1–15
contiguously and `n` equals the printed number on all 15, so there is no doubled-number wrinkle here.

**Two questions straddle a page break** and continue with a semicolon INSIDE the parentheses:

- **n:2** (p.75 → p.76)
- **n:5** (p.76 → p.77)

Read each one's staging `note` for exactly what crossed the break, and say that. Shape to copy:
`pediatric .pdf p.64 (Part I, ch.8 Q11; the question straddles the page break, with its answer line printed alone at the top of p.65)`

**The marker never appears in `source`.**

## 7. `explanation` — the marker is not optional, and the budget is real

**ch.10 prints ZERO explanation boxes.** Every explanation is authored, and every one must end with
this exact line, as the final line:

`Written for this bank — pediatric .pdf prints no explanation here.`

Explain the key **and every distractor**. Adaptive depth: **~250 words for straight recall, ~520 for
a vignette, a defect, a divergence or a gap-fill.**

⚠️ **ch.8 came in at ~12,900 words for 21 questions and ch.9 at ~9,340 for 19 — both over, both
reported to the user, and the ceiling question is still open with them.** Do not add a third overrun.
**Write to the guide. If a specific entry genuinely needs more, exceed it deliberately and say which
one and why in your report** — that is a decision to be surfaced, not a habit.

**A shared table is written ONCE and the siblings point at that existing id.** The one menu here:

⚠️ **n:7, n:8, n:9 and n:10 print THE SAME FIVE OPTIONS in the same order** — Vitamin D deficiency /
Vitamin K deficiency / Kwashiorkor / Marasmus / Cow's milk protein allergy — **with four different
keys: A, B, C, E.** Write the comparative table **once, in n:7**; n:8/n:9/n:10 point at
`pedhd-nutr-7` and each names only its own discriminating clinical token. The staging notes list
those tokens per entry — use them. **A shared menu PAIRS questions; it never folds them.** Nothing in
ch.10 is folded.

## 8. Gaps — answered and tagged, never declared

**A gap in the material is ANSWERED, not declared** (standing user ruling). Fill from general medical
knowledge and keep `not taken from the course material` as a **short tag on the claim itself**, never
a dead-end sentence.

⚠️ **"Grep the CONCEPT, not the term" has now been paid for four times on this project.** Recent
misses: `"creatine kinase"` returns zero while the material teaches **plasma CK** in full;
`"cranial US"` returns zero while cranial ultrasound is taught in three chapters; `"Guthrie"` and
`"heel prick"` return zero while Egypt's newborn heel-stick TSH screen is printed in full in
`T_PEDS['endo-thyroid']`. **Before calling anything a gap: grep the concept, grep the abbreviation,
and grep the sibling chapters. Then say why the zero is a zero and how you measured it.**

## 9. n:1 carries the chapter's ONLY figures — and there are TWO

Q1 (p.75) prints **two images side by side inside the question box**, between the stem and the
lead-in: **(a) a colour clinical photograph of a wrist** and **(b) a plain radiograph of the same
wrist**.

- The app entry holds a **single** `image` basename. **Do not invent two fields.** Write
  `image:'q-pd-hd-75'` and `imgAlt` covering the pair, and **say in your report that the entry needs
  a single combined crop of both panels** so the crop pass cuts one image, not two.
- ⚠️ **`imgAlt` states modality and view ONLY.** Naming the radiographic finding answers the question
  outright — this mistake gave away six answers once before. **No laterality either**: a crop cannot
  reliably establish which wrist it is. Shape that passed on ch.9:
  `Colour close-up photograph of one eye of a young infant, taken from the front.`
- The detailed read of both images belongs in `explanation`, after the answer.
- **Write the entry as if `app\assets\q\q-pd-hd-75.jpg` exists.** Do not render, crop or create any
  image, and do not open the source PDF.

## 10. ⚠️ Numbers are the clinical risk in this chapter

Nutrition means doses, vitamin units, weights, centiles, z-scores and ages. **The staging record read
every one off the page image at 600 dpi and named the crop in each note — trust it, and reproduce
every figure exactly.** Do not "tidy" a unit, do not convert, do not round.

**Two options that look like a typo and are not**, both verified on the image: **n:1 option B prints
"Vitamin B1 deficiency"** and **n:15 option B prints "Vitamin B deficiency"** with no digit. Both are
correct as printed. Do not harmonise them and do not remark on the difference as an error — if it
matters to an explanation, treat it as printed content.

## 11. Traps that have cost real time on this project

- ⚠️ **The Bash tool's quoted heredoc collapses `\\` to `\`**, and a backtick inside a double-quoted
  `node -e` is command substitution. **Never type a literal backslash or backtick in a heredoc** —
  use `Write`/`Edit`, or `String.fromCharCode(92)`. Then grep the result.
- ⚠️ **A heredoc over ~7 KB fails to parse. `Edit`-APPEND one entry at a time**, never one big `Write`
  at the end — agents die on usage limits and an incrementally written file survives.
- ⚠️ **A LITERAL BACKTICK inside an explanation opens a markdown code span in the app and swallows the
  rest of the text.** It passes `node --check`. **Verify an EVEN backtick count in every explanation.**
- ⚠️ **`Array.filter` skips sparse holes.** Measure by index walk: `for (let i=0;i<A.length;i++) if(!(i in A))`.
- ⚠️ **A run where everything fails identically is a broken probe, not broken data** — three instances
  so far. The last one read `module.chapters`, which is `undefined`; chapters live at
  `module.groups[].chapters[]` as `[id, title]` pairs.
- `node --check` after every append.

## 12. Scope

Your one output file. **No git. No `app\`. No `MEMORY.md`. No `progress\`. Nothing under
`content\ophtho\` or `content\neuro\`. Do not touch the other draft half. Do not open, audit or plan
around `content\peds\qb-pages\endpoint-s01-growth-puberty.draft.js`** — parked endpoint work under a
user deferral ruling. **Skip any OSCE content entirely** — say you skipped it and why, then carry on.
Do not open a source PDF and do not render any page image.

## 13. Report back

Entry count **and how you measured it** · per-entry word counts, with any deliberate overrun named
and justified · chapter assignment with a one-line reason each · every outside-knowledge tag and the
grep that established each gap · every divergence between the book and the material, with the key left
unmoved · your backtick-parity check · **and every place this brief was wrong.**

**Trust the staging record and your own measurements over this brief, and tell me where I was wrong.**
