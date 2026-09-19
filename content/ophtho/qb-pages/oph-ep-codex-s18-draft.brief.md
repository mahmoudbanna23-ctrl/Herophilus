# Draft section 18 (Ocular Trauma) of the ophthalmology endpoint book — array file already built, write the draft file only

Working root: `D:\claude os\Medical school\Herophilus`. The `.array.js` for this section already exists and is
final. Your only job is `oph-ep-p1-s18-ocular-trauma.draft.js`. Do not rebuild or edit the array.

## Write grant

- `content/ophtho/qb-pages/oph-ep-p1-s18-ocular-trauma.draft.js` — create fresh, `var OPHEP_S18_DRAFT = [ ... ];`.
- Nothing else. Do not touch `sec-oph.js`, `val-oph-ep.js`, the array file, any other section's files, or `modules.js`. Do not run git.
  Run `node tools/bank-harness/val-oph-ep.js --part 1 18` before you report; fix every complaint it raises.
- Write the file incrementally (a few entries per `Edit`-append), so a dead session leaves a usable partial file.
  Never type a literal backtick or a backslash sequence you do not mean into a shell heredoc; use `Write`/`Edit` for the file.

## Inputs (read them yourself)

- `content/ophtho/qb-pages/oph-ep-p1-s18-ocular-trauma.array.js` — `var OPHEP_S18_STAGED`, 20 rows `{n,p,key,stem,opts,expl,
  boxPrinted,keySource,keypos,numberCheck,note}`. The ONLY source of truth for stems, options, keys and printed pages.
  Read each row's `note`. Rows n:1, 2, 5, 6, 7, 8, 10, 18, 20 print a box (`boxPrinted:true`, `expl` = the box text); n:11-16 and n:19 print none.
- `content/ophtho/qb-pages/oph-ep-p1-s10-uveal-tract.draft.js` — structural template for BOXED entries (see `ophep-uveal-tract-1`:
  authored expansion, blank line, `**The endpoint file prints this explanation:**`, the box as `> ` blockquote lines, blank
  line, the boxed marker in italics). `oph-ep-p1-s15-squint.draft.js` is the template for UNBOXED entries and for `objective`
  register. Copy the shape, not the content.
- `tools/bank-harness/val-oph-ep.js` — authoritative validator; read what it checks.
- Teaching sources, the ONLY ones you may cite: `content/ophtho/lectures/L25) Trauma I.txt` and `content/ophtho/lectures/L26) Trauma II.txt`
  (chemical injuries, blunt trauma, hyphema, blow-out fracture, penetrating trauma, intraocular foreign body, emergency care). Never cite a
  filename inside an explanation. The book chapter for trauma is not extracted as text, so those two lecture files are the whole source.

## What to draft — 16 entries

Draft n = 1, 2, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20 (ids `ophep-ocular-trauma-<n>`, `chapter` `op-trauma`).
**n:3, n:4, n:9 and n:17 are FOLDED — do not draft them and never point at their ids** (they are exact reprints of questions already live in
other chapters). The draft file therefore holds 16 entries. No row carries an image.

The book prints the question numbers 11 and 12 twice; the array numbers the questions by position, so n:11 and n:12 are two DIFFERENT
questions on one vignette (diagnosis, then treatment), and n:13 and n:14 are two different questions on the next vignette. They are not
duplicates. Copy each row exactly as the array gives it.

Per entry:

```
{ id:"ophep-ocular-trauma-<n>", bank:"endpoint", module:"ophtho", chapter:"op-trauma",
  stem:"<byte-identical to array .stem>", options:[<byte-identical to array .opts>],
  answer:<array .key, integer, unchanged>,
  explanation:"<see below>",
  objective:"<one-line teaching takeaway, third person, never referencing the brief or staging>",
  source:"Opthalmology endpoint.pdf p.<array .p>" }
```

Copy `stem`/`options` character for character — no fixing typos or wording (the printed spelling "cantholysls" in n:12 stays), never
renumber, never reorder options.

## Explanations — this pass is mostly DELETION of anything you cannot source

Every authored clinical sentence must be supported by a line in the two lecture files. Open the lines. If you cannot find the line,
DELETE the sentence. Length follows the sourced content: about 120-250 words of authored text for recall rows, up to about 350 for the
vignettes (n:5, n:11-14, n:18-20). Shorter and sourced beats longer and padded. No closing summary sentence. No treatment paragraph
unless a source states that treatment.

- **Boxed rows (n:1, 2, 5, 6, 7, 8, 10, 18, 20):** authored expansion first, then a blank line, then `**The endpoint file prints this explanation:**`,
  then the box text from the array `expl` as `> ` blockquote lines (one per printed line, verbatim, no edits), then a blank line, then this exact
  final line copied character for character: `*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*`
- **Unboxed rows (n:11-16, n:19):** authored throughout, then a blank line, then this exact final line copied character for character:
  `Written for this bank — Opthalmology endpoint.pdf prints no explanation here.`
- Each marker appears exactly once, as the literal last characters of the explanation.

Rules that are not optional:

- **The `answer` never moves.** If the lecture contradicts the printed key on any row, keep `answer` and add a short
  paragraph headed `Note on the printed key:` quoting what the lecture says. Never argue the key is wrong.
- **A gap in the material is answered, not declared.** If the lectures do not state a fact the row needs, state it from general
  medical knowledge and put the tag `(not taken from the course material)` after that claim, ONLY on claims the lectures do not state.
  Never write a sentence saying the material does not cover it. Keep tagged claims few; a sourced sentence is worth more than a tagged one.
- **Grep before you call a fact invented.** Before tagging a claim, grep both lecture files (case-insensitive, several spellings) for it;
  tag only what neither states. A claim a lecture states is sourced, never tagged.
- **Pairs and shared vignettes.** Questions that share a vignette or an option menu are PAIRED, never merged. Draft the LOWEST-numbered member
  first with the full option-by-option teaching; every LATER member must contain that member's id in plain text (no backticks, e.g.
  ophep-ocular-trauma-11) in an ordinary sentence and say in words what differs (the question asked, the tumour/injury, the age). Pairs here:
  - n:11 (diagnosis) → n:12 (definitive treatment) → n:13 and n:14 are the next vignette: n:13 points at n:11 for the shared option menu
    (three of the four options are the same) and n:14 points at n:13 (same patient, asks the source of the bleeding).
  - n:8 (definitive treatment of an intraocular foreign body) and n:10 (the same question with a different option list): n:10 points at n:8.
  - Intraocular foreign body imaging: n:1 (test that is NOT useful for a retained iron foreign body), n:5 (best investigation), n:15 (contraindicated
    modality). Draft n:1 first; n:5 and n:15 point at n:1.
  - Acid vs alkali: n:2 (most dangerous and bad prognosis) and n:16 (poorest prognosis): n:16 points at n:2.
  - Later members must still explain their own distractors in their own words.
- **BANNED phrases and ideas inside any explanation:** "option menu", "menu", "stem frame", "option family", "family", "anchor", "foundational",
  "discriminating token(s)", "key letter", "index", "straight-recall", "this question", "this row", "course sources", "the sources",
  "every statement", "distractors" (say "the other options" or name each), "Regarding the", "five-option", "four-option", "PRIMARY" in capitals,
  "the material", "the lecture says" repeated as filler. Write each cross-reference as an ordinary sentence that keeps the plain-text id, for
  example: "Compare ophep-ocular-trauma-8, the same question with a different option list: removal is again the answer." Name what differs in words.
- No process language inside any explanation ("per the brief", "staging", "array", "n:<number>", "half A/B", "draft").
- No unpaired literal backtick anywhere in the file; explanations use no backticks at all.
- Numbers, ages, durations, grades and units in an explanation are copied from the array or the lecture text, never estimated.

## Report

When done (under 150 words): draft row count (must be 16); every row where the lecture contradicted the printed key; the id of every row
carrying a `(not taken from the course material)` tag with the claim; and the validator's final lines verbatim.
