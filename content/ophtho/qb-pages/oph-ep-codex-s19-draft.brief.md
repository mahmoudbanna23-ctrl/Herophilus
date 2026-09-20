# Draft section 19 (Ocular Systemic Diseases) of the ophthalmology endpoint book — array file already built, write the draft file only

Working root: `D:\claude os\Medical school\Herophilus`. The `.array.js` for this section already exists and is
final. Your only job is `oph-ep-p1-s19-ocular-systemic-diseases.draft.js`. Do not rebuild or edit the array.

## Write grant

- `content/ophtho/qb-pages/oph-ep-p1-s19-ocular-systemic-diseases.draft.js` — create fresh, `var OPHEP_S19_DRAFT = [ ... ];`.
- Nothing else. Do not touch `sec-oph.js`, `val-oph-ep.js`, the array file, any other section's files, or `modules.js`. Do not run git.
  Run `node tools/bank-harness/val-oph-ep.js --part 1 19` before you report; fix every complaint it raises.
- Write the file incrementally (a few entries per `Edit`-append), so a dead session leaves a usable partial file.
  Never type a literal backtick or a backslash sequence you do not mean into a shell heredoc; use `Write`/`Edit` for the file.

## Inputs (read them yourself)

- `content/ophtho/qb-pages/oph-ep-p1-s19-ocular-systemic-diseases.array.js` — `var OPHEP_S19_STAGED`, 25 rows `{n,p,key,stem,opts,expl,
  boxPrinted,keySource,keypos,numberCheck,note}`. The ONLY source of truth for stems, options, keys and printed pages.
  Read each row's `note`. Rows n:1, 4-16 print a box (`boxPrinted:true`, `expl` = the box text); n:17-25 print none (n:2 and n:3 also
  print one, but they are folded, see below).
- `content/ophtho/qb-pages/oph-ep-p1-s10-uveal-tract.draft.js` — structural template for BOXED entries (see `ophep-uveal-tract-1`:
  authored expansion, blank line, `**The endpoint file prints this explanation:**`, the box as `> ` blockquote lines, blank
  line, the boxed marker in italics). `oph-ep-p1-s15-squint.draft.js` is the template for UNBOXED entries and for `objective`
  register. `oph-ep-p1-s18-ocular-trauma.draft.js` is the most recent finished draft. Copy the shape, not the content.
- `tools/bank-harness/val-oph-ep.js` — authoritative validator; read what it checks.
- Teaching sources, the ONLY ones you may cite (all under `content/ophtho/lectures/`):
  - `L23) Ocular manifestations of systemic diseases.txt` — main source (hypertensive retinopathy, diabetes, thyroid eye disease, pregnancy, multiple sclerosis, sarcoidosis, giant cell arteritis).
  - `L19.1) Diabetic Retinopathy.txt`, `L19.2) Retinal Vascular Disorders.txt` — diabetic retinopathy (risk, screening, treatment), retinal vein occlusion, macular edema.
  - `L10) orbit.txt` — proptosis, thyroid eye disease.
  - `L21) Optic Nerve.txt`, `L22) Pupil and Visual pathway.txt` — optic neuritis, RAPD, multiple sclerosis signs.
  - `L1,2) Ocular Anatomy, Symptomatology & Basic Eye Examination.txt`, `L17) Cataract I.txt`, `L18) Cataract II.txt`, `L11) Glaucoma Diag, POAG.txt`, `L24) Ocular tumors..txt` — for ageing, cataract, glaucoma, macular changes only where a row needs them.
  Never cite a filename inside an explanation. The book chapter for systemic diseases is only partly extracted as text
  (`content/ophtho/book/ch19-systemic-tumours.txt`, malignancy content only), so the lecture files above are the whole source.

## What to draft — 23 entries

Draft n = 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25 (ids `ophep-ocular-systemic-diseases-<n>`,
`chapter` `op-systemic`). **n:2 and n:3 are FOLDED — do not draft them and never point at their ids** (exact reprints of questions already
live in other chapters). The draft file therefore holds 23 entries. No row carries an image.

The book prints the question number 16 twice; the array numbers the questions by position, so n:16 (risk of diabetic retinopathy at the
time type 2 diabetes is diagnosed) and n:17 (copper-wire arterioles vignette) are two unrelated questions. n:16 and n:23 print the same
option list (20% / 50% / 60% / 80%) but ask different questions. Copy each row exactly as the array gives it.

Per entry:

```
{ id:"ophep-ocular-systemic-diseases-<n>", bank:"endpoint", module:"ophtho", chapter:"op-systemic",
  stem:"<byte-identical to array .stem>", options:[<byte-identical to array .opts>],
  answer:<array .key, integer, unchanged>,
  explanation:"<see below>",
  objective:"<one-line teaching takeaway, third person, never referencing the brief or staging>",
  source:"Opthalmology endpoint.pdf p.<array .p>" }
```

Copy `stem`/`options` character for character — no fixing typos or wording (the printed spellings "prese11ts" in n:18, "hemorhage" in
n:20 and "AMO & glaucoma" in n:21 stay), never renumber, never reorder options.

## Explanations — this pass is mostly DELETION of anything you cannot source

Every authored clinical sentence must be supported by a line in the lecture files listed above. Open the lines. If you cannot find the line,
DELETE the sentence. Length follows the sourced content: about 120-250 words of authored text for recall rows, up to about 350 for the
vignettes (n:8, 12-14, 17, 18, 20). Shorter and sourced beats longer and padded. No closing summary sentence. No treatment paragraph
unless a source states that treatment.

- **Boxed rows (n:1, 4-16):** authored expansion first, then a blank line, then `**The endpoint file prints this explanation:**`,
  then the box text from the array `expl` as `> ` blockquote lines (one per printed line, verbatim, no edits), then a blank line, then this exact
  final line copied character for character: `*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*`
- **Unboxed rows (n:17-25):** authored throughout, then a blank line, then this exact final line copied character for character:
  `Written for this bank — Opthalmology endpoint.pdf prints no explanation here.`
- Each marker appears exactly once, as the literal last characters of the explanation.

Rules that are not optional:

- **The `answer` never moves.** If the lecture contradicts the printed key on any row, keep `answer` and add a short
  paragraph headed `Note on the printed key:` quoting what the lecture says. Never argue the key is wrong. **Row n:1 needs a check:**
  the printed key is Epiphora ("Ageing can be associated with all of the following EXCEPT"). Grep the lectures for ageing, tearing/epiphora,
  macular degeneration, accommodation and optic disc cupping. If a lecture ties ageing to epiphora, optic disc cupping or the other options
  differently from the printed key, write the `Note on the printed key:` paragraph; if none states it, say so nowhere and simply explain the key.
- **A gap in the material is answered, not declared.** If the lectures do not state a fact the row needs, state it from general
  medical knowledge and put the tag `(not taken from the course material)` after that claim, ONLY on claims the lectures do not state.
  Never write a sentence saying the material does not cover it. Keep tagged claims few; a sourced sentence is worth more than a tagged one.
- **Grep before you call a fact invented.** Before tagging a claim, grep the lecture files (case-insensitive, several spellings) for it;
  tag only what none states. A claim a lecture states is sourced, never tagged.
- **Pairs and shared vignettes.** Questions that share an option list or a topic are PAIRED, never merged. Draft the LOWEST-numbered member
  first with the full option-by-option teaching; every LATER member must contain that member's id in plain text (no backticks, e.g.
  ophep-ocular-systemic-diseases-16) in an ordinary sentence and say in words what differs (the question asked, the type of diabetes, the timing).
  Pairs here:
  - n:16 (risk of diabetic retinopathy at diagnosis of type 2 diabetes) → n:23 (risk 10 years after diagnosis of type 1 diabetes): n:23 points at n:16 (same 20 / 50 / 60 / 80% list).
  - The validator will name any other pair that shares an option list and tell you which earlier id to cite. Follow its instructions exactly; do not invent extra pointers.
  - Later members must still explain their own other options in their own words.
- **BANNED phrases and ideas inside any explanation:** "option menu", "menu", "stem frame", "option family", "family", "anchor", "foundational",
  "discriminating token(s)", "key letter", "index", "straight-recall", "this question", "this row", "course sources", "the sources",
  "every statement", "distractors" (say "the other options" or name each), "Regarding the", "five-option", "four-option", "PRIMARY" in capitals,
  "the material", "the lecture says" repeated as filler. Write each cross-reference as an ordinary sentence that keeps the plain-text id, for
  example: "Compare ophep-ocular-systemic-diseases-16, the same question about type 2 diabetes at diagnosis: the risk there is 20%." Name what differs in words.
- No process language inside any explanation ("per the brief", "staging", "array", "n:<number>", "half A/B", "draft").
- No unpaired literal backtick anywhere in the file; explanations use no backticks at all.
- Numbers, ages, durations, grades and units in an explanation are copied from the array or the lecture text, never estimated.
  Percentages and risk figures (n:16, n:23) are read from the lecture, not from memory.

## Report

When done (under 150 words): draft row count (must be 23); every row where the lecture contradicted the printed key; the id of every row
carrying a `(not taken from the course material)` tag with the claim; and the validator's final lines verbatim.
