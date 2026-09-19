# Draft section 17 (Malignancies of Eye and Adnexa) of the ophthalmology endpoint book — array file already built, write the draft file only

Working root: `D:\claude os\Medical school\Herophilus`. The `.array.js` for this section already exists and is
final. Your only job is `oph-ep-p1-s17-malignancies-eye-adnexa.draft.js`. Do not rebuild or edit the array.

## Write grant

- `content/ophtho/qb-pages/oph-ep-p1-s17-malignancies-eye-adnexa.draft.js` — create fresh, `var OPHEP_S17_DRAFT = [ ... ];`.
- Nothing else. Do not touch `sec-oph.js`, `val-oph-ep.js`, the array file, any other section's files, or `modules.js`. Do not run git.
  Run `node tools/bank-harness/val-oph-ep.js --part 1 17` before you report; fix every complaint it raises.
- Write the file incrementally (a few entries per `Edit`-append), so a dead session leaves a usable partial file.
  Never type a literal backtick or a backslash sequence you do not mean into a shell heredoc; use `Write`/`Edit` for the file.

## Inputs (read them yourself)

- `content/ophtho/qb-pages/oph-ep-p1-s17-malignancies-eye-adnexa.array.js` — `var OPHEP_S17_STAGED`, 12 rows `{n,p,key,stem,opts,expl,
  boxPrinted,keySource,keypos,numberCheck,note}`. The ONLY source of truth for stems, options, keys and printed pages.
  Read each row's `note` field. Rows n:1-n:4 carry a printed box (`boxPrinted:true`, `expl` = the box text); n:5-n:12 print no box.
- `content/ophtho/qb-pages/oph-ep-p1-s10-uveal-tract.draft.js` — structural template for BOXED entries (see `ophep-uveal-tract-1`:
  authored expansion, blank line, `**The endpoint file prints this explanation:**`, the box as `> ` blockquote lines, blank
  line, the boxed marker in italics). `oph-ep-p1-s15-squint.draft.js` is the template for UNBOXED entries and for `objective`
  register. Copy the shape, not the content.
- `tools/bank-harness/val-oph-ep.js` — authoritative validator; read what it checks.
- Teaching sources, search these yourself: `content/ophtho/lectures/L24) Ocular tumors..txt`, `content/ophtho/lectures/L5) Eyelid disease.txt`,
  `content/ophtho/book/ch17-malignancies.txt`, `content/ophtho/book/ch05-eyelids.txt`. Never cite a filename inside an explanation.

## What to draft — 12 entries, ids `ophep-malignancies-eye-adnexa-<n>`, n = 1..12

No row is folded; write all 12. No row carries an image. `chapter` is `op-onc` for every entry.

Per entry:

```
{ id:"ophep-malignancies-eye-adnexa-<n>", bank:"endpoint", module:"ophtho", chapter:"op-onc",
  stem:"<byte-identical to array .stem>", options:[<byte-identical to array .opts>],
  answer:<array .key, integer, unchanged>,
  explanation:"<see below>",
  objective:"<one-line teaching takeaway, third person, never referencing the brief or staging>",
  source:"Opthalmology endpoint.pdf p.<array .p>" }
```

Copy `stem`/`options` character for character — no fixing typos or wording, never renumber, never reorder options. Book quirk to
leave alone: n:9's page prints option letters A, B, C, E (no D); the array has four options and key 2, unchanged.

## Explanations

Author from the lecture and book chapter, third person, English, medical terminology exactly as the source writes it.
Depth: about 250 words for straight-recall rows, up to about 520 for the vignettes (n:5, n:6, n:8). Explain why the keyed
option is right AND why each distractor is wrong.

- **Boxed rows (n:1, n:2, n:3, n:4):** authored expansion first, then a blank line, then `**The endpoint file prints this explanation:**`,
  then the box text from the array `expl` as `> ` blockquote lines (one per printed line, verbatim, no edits), then a blank line, then this exact
  final line copied character for character: `*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*`
- **Unboxed rows (n:5-n:12):** authored throughout, then a blank line, then this exact final line copied character for character:
  `Written for this bank — Opthalmology endpoint.pdf prints no explanation here.`
- Each marker appears exactly once, as the literal last characters of the explanation.

Rules that are not optional:

- **The `answer` never moves.** If the lecture or book contradicts the printed key on any row, keep `answer` and add a short
  paragraph headed `Note on the printed key:` quoting what the lecture says. Never argue the key is wrong.
- **A gap in the material is answered, not declared.** If the lecture/book does not state a fact the row needs, state it from general
  medical knowledge and put the tag `(not taken from the course material)` after that claim, ONLY on claims the sources do not state.
  Never write a sentence saying the material does not cover it.
- **Grep before you call a fact invented.** Before tagging a claim as outside the course material, grep the lecture AND the book chapter
  (case-insensitive, several spellings) for it; tag only what neither states. A claim the book states is sourced, never tagged.
- **Shared-menu rule.** Questions that print the same option menu are PAIRED, never merged. Menu families here:
  (a) SCC / BCC / Retinoblastoma / Sebaceous carcinoma (+/- Choroidal melanoma): n:5, n:8, n:10.
  (b) SCC / BCC / Retinoblastoma / Choroidal melanoma (+/- Secondaries): n:7, n:9.
  (c) Lid sites: n:11 (squamous), n:12 (basal cell).
  Draft the LOWEST-numbered member of a family first and put the full option-by-option teaching there. Every LATER member of the family
  must contain the first member's id in plain text (no backticks, e.g. ophep-malignancies-eye-adnexa-5) in its own explanation, say what
  discriminates it (name the token that differs: the age, the site, the keyed tumour), and still explain its own distractors.
  n:2 and n:10 both ask the most common eyelid malignancy with different menus and the same keyed tumour: each explanation names the other by
  its plain-text id.
- n:5 (59-year-old, lid ulcer with beaded edges and dilated vessels): keyed BCC; explain why the ulcerative pearly-edge picture is BCC and not SCC.
- n:6 (74-year-old, chronic unilateral conjunctivitis): the printed key is the option that looks for a sebaceous carcinoma. Teach it as the
  masquerade syndrome (recurrent chalazion / chronic unilateral blepharitis or conjunctivitis in an older patient; biopsy). Grep the lecture for
  wording before tagging anything.
- n:7/n:9: keep the primary-vs-secondary distinction and the adult (choroidal melanoma) vs child (retinoblastoma) split explicit.
- n:11/n:12: give the lecture's stated sites and the ordinary reason distractors are wrong; if the lecture and the printed key disagree on a
  site, keep `answer` and use a `Note on the printed key:` paragraph.
- No process language inside any explanation ("per the brief", "staging", "array", "n:<number>", "half A/B", "draft").
- No unpaired literal backtick anywhere in the file; explanations use no backticks at all.
- Numbers, ages, durations and units in an explanation are copied from the array or the source text, never estimated.

## Report

When done: draft row count (must be 12); every row where the lecture or book contradicted the printed key; every fact filled from general
knowledge (with the id); and paste the validator's final output verbatim. Keep the report under 250 words.
