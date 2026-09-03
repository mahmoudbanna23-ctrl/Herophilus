# Shared brief — drafting app entries from a peds ENDPOINT staging record

Sections 1–9 of `Pediatrics endpoint part1.pdf`. This is the **endpoint** counterpart of
`pd-draft-brief.md`, which is Chat B's House brief — **do not read that one, it sets
`bank:'house'` and tells you no explanation is printed. Both are wrong here.**

Project root: `D:\claude os\Medical school\Herophilus`.

**Your section, your range, your file, your staging path and variable, your chapter candidates,
your figures — are in your own task prompt.** This brief is the part that does not change.

Your work is checked by `node tools\bank-harness\val-pd-ep.js <section> <A|B>`. **Run it yourself
before you report.** Everything below that it can see, it does see.

## 0. STOP AT ~70 STEPS AND HAND BACK — this is a hard cap, not a target

**Count your tool calls. At 60 you start closing out; by 80 you have run the validator, reported
and stopped**, even with entries left. Write entries to your file as you go, never in one batch at
the end, so a replacement can resume from disk. Say exactly which `n` you stopped after.

**Cost is step count, not starting context** — the whole conversation is re-sent every step and it
GROWS as you work. Measured over a real 7-hour block: agents all start at 29–31k tokens, but the
five most expensive averaged **88–107k a step, peaking 167k, over 133–287 steps**. Stopping at 70
and handing over costs a fraction of grinding to 250, for the same work.

**A partial pass reported honestly is a success.** Never spawn a sub-agent of your own.

---

## 1. Your file, and the one rule about the other half

Write **only your own file**. **Never open, read or edit the other half's draft** — the halves are
merged by a byte-level splice, and cross-contamination is the one failure that splice cannot
detect. If you think you need something from the other half, you need it from the **staging
record** instead.

**Never run `val-pd.js` or `splice-pd.js`.** They write `app\data\questions.peds.js`, another
chat's live file, and their duplicate guard lets a `pedep-` id straight through. Your tools are
`val-pd-ep.js` and `splice-pd-ep.js`, and you never run the splicer at all — the parent does.

## 2. The staging record is the source of truth for everything printed

**Read its header in full before writing anything.** It carries the page walk, the printed-number
anomalies, the box census, the overflow pages, the figures, and how each was measured.

- ⚠️ **`stem` and `opts` must be BYTE-IDENTICAL to the staging entry.** No normalisation, no
  tidying, no re-wrapping. The validator compares with `JSON.stringify`. Printed typos, curly
  quotes, en dashes, doubled words and real glyphs are reproduced exactly — **and you do not
  comment on any of them** (user ruling 2026-09-02). Copy them silently.
  **The one exception, always flagged: numbers, units, doses and exponents.**
- ⚠️ **The record's `key` is a NUMERIC 0-based index**, not a letter. `answer` **is** that number.
  **It never moves.**
- **A defective key is noted in `explanation`, never disputed, and never taken to the user.** Where
  the book's key disagrees with the material, record the disagreement, quote what the source says,
  and leave `answer` exactly as the bank printed it.
- **`n`, `pr`, `p`, `box`, `fig`, `note` are STAGING fields. None of them goes into an app entry**,
  and none of them is ever mentioned in an explanation.

Load these files with `vm.runInThisContext`. **`require` does not work on them.**

## 3. Entry shape

**Entries open at column 0; fields indent two spaces.** Field set, and nothing else — a stray
field is a hard failure:

`id` · `bank` · `module` · `chapter` · [`image` · `imgAlt` — only where staging carries `fig`] ·
`stem` · `options` · `answer` · `explanation` · `objective` · `source`

- `id`: the prefix in your task prompt plus the staged `n` — e.g. `pedep-nut-1`.
- `bank:'endpoint'` · `module:'pediatrics'`.
- `options` takes the staged `opts` array verbatim. **No letter prefixes** — the app supplies them,
  and the printed letter-case drifts through these sections anyway.

## 4. ⚠️ The explanation has TWO PARTS and a REQUIRED CLOSING LINE

This bank **prints an explanation box on most pages and none on the rest**, and the staging `expl`
field decides which — non-empty means boxed, `''` means unboxed. **The validator derives this from
staging; you do not get to choose.**

### 4a. A BOXED entry (staging `expl` is non-empty)

Open with this exact lead line, then the printed box quoted as a blockquote, then a rule, then
your expansion, and close with the boxed marker as the final line:

```
**The endpoint file prints this explanation:**

> <the staged expl, verbatim>

---

<your expansion>

*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*
```

The blockquote must reproduce the staged `expl` — the validator normalises whitespace and warns
if the two differ. **The closing line uses a curly apostrophe in `endpoint file’s`.** Copy it.

### 4b. An UNBOXED entry (staging `expl` is `''`)

No lead line, **no blockquote anywhere in the entry**, the whole explanation authored, closing with
this exact final line:

```
Written for this bank — Pediatrics endpoint part1.pdf prints no explanation here.
```

That is an em dash. **The marker never appears in `source`**, and neither marker may appear twice.

## 5. Length — the budget is real and section 1 blew it

**~250 words for straight recall, ~520 for a vignette, a defect, a divergence or a gap-fill.**
The word count is the **whole** `explanation`, box quote included.

⚠️ **Section 1 ran to a mean near 700 words across 89 questions.** That is the thing to correct,
not to copy. Read a section-1 entry for its *shape* — the lead line, the blockquote, the rule, the
distractor sweep, the closing marker — and **not for its length.** The validator prints a per-entry
word count and a total; **read your own numbers before reporting.** If a specific entry genuinely
needs more, exceed it deliberately and **name that entry and the reason in your report** — a
decision to surface, not a habit.

Explain the key **and every distractor**. Where the box already explains the key well, your
expansion adds what the box leaves out; do not restate the box in your own words underneath it.

### ⚠️ Shared option menus — the single biggest lever on length

Where several questions print **the same option ladder in the same order**, that is a **pairing**:

- **A shared menu PAIRS questions. It NEVER folds them.** They stay separate entries.
- **Write the comparative table ONCE**, in the lowest-numbered member of the group.
- **Every sibling must name that anchor's id in its explanation** — the validator checks the
  literal id string is present and fails the entry if it is not.
- Each sibling then gives **only its own discriminating clinical token** — the feature that picks
  its key out of the shared ladder.

Repeating the table in every sibling is what produced the overruns on the House chapters.

### ⚠️ An explanation is addressed to a student, never to the parent chat

The reader has never seen this brief, the staging record or the split. An explanation may not
mention any of them. The validator hard-fails on `task prompt`, `per the prompt`, `as instructed`,
`staging record`, `the brief asks/says/requires`, `half A/B`, `draft-A/B`, and on `n:<num>`.

**Name a sibling by its id in backticks** — `` `pedep-nut-7` `` — never by its staging number. The
substance behind a flagged phrase is usually right; it is the framing that is wrong.
*"Flagged as an awkward assignment, per the task prompt:"* says the same as *"Why this sits in the
feeding chapter:"* without addressing the parent.

## 6. `source` — exact shape

```
Pediatrics endpoint part1.pdf p.<the staged p>
```

**No `(Part I, ch.N QN)` tail** — that is the House shape and it does not apply here.

**Where the staging row carries `box`** (the explanation overflowed onto its own page), the source
must name that page too. Shape:

```
Pediatrics endpoint part1.pdf p.344 (the explanation box is printed alone on p.345)
```

The validator fails the entry if `p.<box>` is absent from `source`.

## 7. Grounding — read the material before writing, quote it, cite it

Lecture caches: `content\peds\lectures\*.txt`. **List the directory and read the real filenames** —
they carry brackets, stray spaces, a zero-width character and inconsistent numbering. **Never write
a filename, page number or id from memory.**

Theory, where it helps: ⚠️ **`T_PEDS` is an OBJECT keyed by chapter id, not an array.**
`T_PEDS.length` is `undefined` and an index walk silently returns nothing. Address it as
`T_PEDS['<chapter-id>'].sections`. ⚠️ **Theory section ids run continuously across sibling
chapters — a prefix grep returns a FALSE ZERO.** Confirm ranges off disk.

⚠️⚠️ **The OCR index under `content\peds\qb-pages\ocr\ep1\` is a SEARCH index and nothing else.**
Never take a fact, and above all never an exponent, a unit or a dose, from it — a printed 10⁶ has
been read as 10⁹. Everything printed is already in the staging record; you should not need the OCR
at all.

## 8. Gaps — answered and tagged, never declared

⚠️ **A gap in the material is ANSWERED, not declared** (standing user ruling). Fill it from general
medical knowledge and keep **`not taken from the course material`** as a **short tag on the claim
itself** — never a dead-end sentence, and never an opening that announces the gap before answering
it. **Lead with the answer; the tag rides along.** Shape to copy:

> **The relationship between birthweight and adult cardiovascular disease is U-shaped, not linear**
> — *not taken from the course material; none of the cached nutrition decks teaches a
> birthweight–cardiovascular-risk relationship at all.*

⚠️ **"Grep the CONCEPT, not the term" has been paid for four times on this project.** Recorded
misses: `"creatine kinase"` returns zero while the material teaches **plasma CK** in full;
`"Guthrie"` and `"heel prick"` return zero while Egypt's newborn heel-stick TSH screen is printed
in full. **Before calling anything a gap: grep the concept, the abbreviation, the synonyms and the
sibling chapters. Then say why the zero is a zero and how you measured it.**

## 9. Figures

Only where the staging row carries a `fig` field. Everything else must carry **no** `image` at all
— an unbacked `image` is a hard failure, and so is a missing one where staging records a figure.

- `image` is the **basename** `q-pd-ep-<the staged p>` — no path, no extension. `qImgSrc()` builds
  the path at runtime; a literal path is a broken image no bundler can see.
- Where the page prints two panels, they get **one combined crop** under that single basename.
  Never invent a second image field.
- ⚠️ **`imgAlt` IS RENDERED AS THE VISIBLE CAPTION AND MUST NOT ANSWER THE QUESTION.** State the
  **modality and the view, and nothing more.** Never the diagnosis, never the labelled structure,
  never the finding the options turn on. This gave away six answers once. **No laterality either** —
  a crop cannot establish which side it is. The validator holds a regex of finding words and fails
  the entry outright if one appears.
- The detailed read of the image belongs in the `explanation`, **after** the answer.
- **Write the entry as if the crop already exists.** Do not render, crop or create any image, and
  **do not open the source PDF.**

## 10. ⚠️ Numbers are the clinical risk

Doses, volumes, concentrations, weights, ages, centiles, cut-offs, lab values. **The staging record
read every one off the page image — trust it and reproduce every figure exactly.** Do not tidy a
unit, do not convert, do not round, do not harmonise two options printed inconsistently. If a
printed figure looks wrong, **say so in your report and still transcribe it as printed.**

## 11. Traps that have cost real time on this project

- ⚠️ **The Bash tool's quoted heredoc collapses `\\` to `\`**, and a backtick inside a
  double-quoted `node -e` is command substitution. **Never type a literal backslash or backtick in
  a heredoc** — use `Write`/`Edit`, or `String.fromCharCode(92)`. Then grep the result.
- ⚠️ **A heredoc over ~7 KB fails to parse. `Edit`-APPEND one entry at a time**, never one big
  `Write` at the end — agents die on usage limits, and an incrementally written file survives.
- ⚠️ **A LITERAL BACKTICK inside an explanation opens a markdown code span in the app and swallows
  the rest of the text.** It passes `node --check`. The validator checks parity per entry; keep it
  even, and remember every id you cite is wrapped in a pair.
- ⚠️ **`Array.filter` skips sparse holes.** Measure by index walk:
  `for (let i=0;i<A.length;i++) if(!(i in A))`.
- ⚠️ **A run where everything fails identically is a broken probe, not broken data.** Chapters live
  at `module.groups[].chapters[]` as `[id, title]` pairs; `module.chapters` is `undefined`.
  **A zero from a probe you just wrote is a claim about the probe first.**
- **`node --check` after every append.**

## 12. Scope

Your one output file. **No git. No `app\` — including no image files. No `MEMORY.md`. No
`progress\`. Nothing under `content\ophtho\` or `content\neuro\`. Never `app\data\questions.peds.js`
or any `*-pd.js` tool. Do not touch the other draft half.** **Skip any OSCE content entirely.**
**Do not open a source PDF and do not render any page image.**

## 13. Report back

Entry count **and how you measured it** · the validator's exit status and its per-entry word counts,
with any deliberate overrun named and justified · chapter assignment with a one-line reason each ·
every outside-knowledge tag and the grep that established each gap · every divergence between the
book and the material, with the key left unmoved · your backtick-parity result · **and every place
this brief was wrong.**

**Trust the staging record and your own measurements over this brief, and tell me where I was wrong.**
