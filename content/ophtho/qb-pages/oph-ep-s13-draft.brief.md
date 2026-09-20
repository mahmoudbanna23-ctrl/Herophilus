# Draft section 13 (Retina) of the ophthalmology endpoint book — array file already built, write your half of the draft file only

Working root: `D:\claude os\Medical school\Herophilus`. The `.array.js` for this section already exists and is
final. You draft one HALF (your prompt names it: A or B). Do not rebuild or edit the array.

Half A = array rows n:1-15 and n:17-20 (19 entries; n:16 is folded). Boxed rows n:1-12, unboxed rows n:13, 14, 15, 17, 18, 19, 20.
Half B = array rows n:21-41 (21 entries). Boxed rows n:24, 25, 26, 27, unboxed rows n:21, 22, 23 and n:28-41.

## Write grant

- Half A: `content/ophtho/qb-pages/oph-ep-p1-s13-retina.draft-A.js` — create fresh, `var OPHEP_S13_DRAFT_A = [ ... ];`.
  Half B: `content/ophtho/qb-pages/oph-ep-p1-s13-retina.draft-B.js` — create fresh, `var OPHEP_S13_DRAFT_B = [ ... ];`.
- Nothing else. Do not touch `sec-oph.js`, `val-oph-ep.js`, the array file, any other section's files, `modules.js`, or the image crops. Do not run git.
  Before you report run `node tools/bank-harness/val-oph-ep.js --part 1 13 <your letter>` and fix every complaint that concerns your own entries. The validator was
  written for a whole section, so it may also complain that the other half's rows are not drafted; ignore exactly those, nothing else.
- Write the file incrementally (a few entries per `Edit`-append) so a dead session leaves a usable partial file.
  Never type a literal backtick or a backslash sequence you do not mean into a shell heredoc; use `Write`/`Edit`.
- You stop at about 60-70 tool calls whatever is left. Plan the reading: locate first, read narrow, never re-read a span.

## Inputs (read them yourself)

- `content/ophtho/qb-pages/oph-ep-p1-s13-retina.array.js` — `var OPHEP_S13_STAGED`, 41 rows `{n,p,key,stem,opts,expl,boxPrinted,keySource,keypos,numberCheck,note}`.
  The ONLY source of truth for stems, options, keys and printed pages. Read the rows for your half only (offset/limit). Rows n:1-12 and n:24-27 print a box
  (`boxPrinted:true`, `expl` = the box text); every other row prints none. `key` is a 0-based index into `opts`.
- `content/ophtho/qb-pages/oph-ep-p1-s14-neuro-ophthalmology.draft.js` — structural template for BOTH entry shapes (boxed: authored expansion, blank line,
  `**The endpoint file prints this explanation:**`, the box as `> ` blockquote lines, blank line, the boxed marker in italics; unboxed: authored text then the unboxed marker).
  Read the first four entries only. Copy the shape, not the content.
- `tools/bank-harness/val-oph-ep.js` — authoritative validator; read what it checks.
- Teaching sources, the ONLY ones you may cite. Primary: `content/ophtho/lectures/L20) Retinal detachment and degenerations.txt` (33 slides; slide numbers are in the text),
  `L19.1) Diabetic Retinopathy.txt`, `L19.2) Retinal Vascular Disorders.txt`. Secondary, for the odd row, and only by grep with a narrow read of the hit:
  `L1,2) Ocular Anatomy...txt` (retinal layers, fundus), `L21) Optic Nerve.txt` (optic neuritis), `L23) Ocular manifestations of systemic diseases.txt` (hypertensive and renal retinopathy),
  `L31,32) Acute visual Loss.txt`, `L35,36) Chronic visual loss.txt`. The three primary files are short; the secondary files are large, so grep them, never read them whole.
  The book chapter for the retina is not extracted as text. In an explanation write a lecture source as (L20, slide 9) or (L19.2) — lecture number and slide number where the file gives one, never a filename.

## What to draft

Per entry, ids `ophep-retina-<n>`, `chapter` `op-ret`:

```
{ id:"ophep-retina-<n>", bank:"endpoint", module:"ophtho", chapter:"op-ret",
  stem:"<byte-identical to array .stem>", options:[<byte-identical to array .opts>],
  answer:<array .key, integer, unchanged>,
  explanation:"<see below>",
  objective:"<one-line teaching takeaway, third person, never referencing the brief or staging>",
  source:"Opthalmology endpoint.pdf p.<array .p>" }
```

Copy `stem`/`options` character for character — no fixing typos or wording, never renumber, never reorder options. Printed quirks stay exactly as the array gives them
(n:14 prints the disease abbreviation as "CVRO"; n:28 option d carries a stray quotation mark; n:29 and n:37 carry odd wording). Do not mention or correct them.
n:16 is FOLDED into n:10 — never draft it and never point at its id `ophep-retina-16`.

Two rows carry a figure (both in half A). n:4: add `image:"q-oph-ep-907"` and `imgAlt:"Slide from a lecture, text list"`. n:5: add `image:"q-oph-ep-909"` and
`imgAlt:"Labelled schematic, eye in section beside an enlarged cross-section of its wall"`. Use those strings exactly. The n:4 slide is a lecture slide listing the clinical
features of rhegmatogenous retinal detachment ("Symptoms: (4Fs)": acute onset; flashes of light, photopsia, from mechanical stimulation of the photoreceptors; floaters, hazy spots that
move with the eye, from drops of blood from torn vessels; field defect, a curtain of blackness or peripheral field loss; failed central vision if the macula is involved, macula off).
The n:5 figure is a labelled colour schematic of the retina (nerve fibres, ganglion cell, amacrine cell, bipolar cell, horizontal cell, cone, rod, pigment epithelium, choroid, sclera)
and does not print a layer count. You may describe what these figures show in the explanation; you may not put a finding name in `imgAlt`.

## Explanations — this pass is mostly DELETION of anything you cannot source

Every authored clinical sentence must be supported by a line in the source files above. Open the lines. If you cannot find the line, either DELETE the sentence or, if the row cannot
be answered without it, keep it as general medical knowledge with the tag described below. Length follows the sourced content: about 120-250 words of authored text for recall rows, up to
about 350 for the vignettes. Shorter and sourced beats longer and padded. No closing summary sentence. No treatment paragraph unless a source states that treatment.

- **Boxed rows:** authored expansion first, then a blank line, then `**The endpoint file prints this explanation:**`, then the box text from the array `expl` as `> ` blockquote lines
  (one per printed line, verbatim, no edits), then a blank line, then this exact final line copied character for character:
  `*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*`
- **Unboxed rows:** authored throughout, then a blank line, then this exact final line copied character for character:
  `Written for this bank — Opthalmology endpoint.pdf prints no explanation here.`
- Each marker appears exactly once, as the literal last characters of the explanation.

Rules that are not optional:

- **The `answer` never moves.** If a lecture contradicts the printed key on any row, keep `answer` and add a short paragraph headed `Note on the printed key:` quoting what the lecture says.
  Never argue the key is wrong. Never dispute a key.
- **A gap in the material is answered, not declared.** If the sources do not state a fact the row needs, state it from general medical knowledge and put the tag `(not taken from the course material)`
  after that claim, ONLY on claims the sources do not state. Never write a sentence saying the material does not cover it. Keep tagged claims few; a sourced sentence is worth more than a tagged one.
  Several of these lectures are thin: expect to tag more here than in other sections, but tag only what your grep shows is missing.
- **Grep before you call a fact invented.** Before tagging a claim, grep the source files (case-insensitive, several spellings and abbreviations: CRAO, CRVO, RRD, RD, AMD, RP, PDR, NPDR, ERG,
  Amsler, laser, anti-VEGF, cherry red, cilioretinal, ...) for it; tag only what none of them states. A claim a source states is sourced, never tagged. A tag on a claim the lecture states is a defect.
- **Pairs and shared vignettes.** Questions that share a vignette or an option menu are PAIRED, never merged. Draft the LOWEST-numbered member first with the full option-by-option teaching;
  every LATER member must contain that member's id in plain text (no backticks, e.g. ophep-retina-9) in an ordinary sentence and say in words what differs (the question asked, the diagnosis, the age).
  Later members must still explain their own distractors in their own words. Pairs:
  - n:9 and n:12 share the same four options (tractional / exudative / rhegmatogenous and one more) with different stems and different keys. n:12 must point at ophep-retina-9. (Half A.)
  - n:24 (diagnosis) and n:25 (management) are one vignette asked twice: n:25 points at ophep-retina-24. n:31 (dry age-related macular degeneration statements) and n:32 (wet) are a
    pair: n:32 points at ophep-retina-31. (Half B.)
  - Not enforced, but say so where it helps the reader: n:13 and n:15 share four of five options; n:14 and n:18 share three of four. The central retinal artery occlusion questions (n:3, 6, 13, 17, 20, 24, 36),
    the vein occlusion questions (n:14, 19, 22, 34, 38, 41) and the retinitis pigmentosa questions (n:7, 18, 28) each teach one condition from different angles; point at the lowest-numbered
    sibling by plain-text id where you would otherwise repeat a paragraph. Half B may point at half A ids (they exist once both halves are merged); half A never points at half B.
- **BANNED phrases and ideas inside any explanation:** "option menu", "menu", "stem frame", "option family", "family", "anchor", "foundational", "discriminating token(s)", "key letter", "index",
  "straight-recall", "this question", "this row", "course sources", "the sources", "every statement", "distractors" (say "the other options" or name each), "Regarding the", "five-option",
  "four-option", "PRIMARY" in capitals, "the material", "the lecture says" repeated as filler. Write each cross-reference as an ordinary sentence that keeps the plain-text id, for example:
  "Compare ophep-retina-9, the same four options with a different stem: exudative detachment is the answer there." Name what differs in words.
- No process language inside any explanation ("per the brief", "staging", "array", "n:<number>", "half A/B", "draft"). No unpaired literal backtick anywhere in the file; explanations use no backticks at all.
- Numbers, ages, durations, grades and units in an explanation are copied from the array or the source text, never estimated.
- Keep source terminology exactly as the lectures spell it. Do not report or comment on cosmetic typos in the stems or boxes.

## Report

When done (under 150 words): draft row count (A must be 19, B must be 21); every row where a source contradicted the printed key; the id of every row carrying a
`(not taken from the course material)` tag with the claim; the validator's final lines verbatim.
