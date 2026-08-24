# Brief — drafting the 25 House tail entries (23 NEW + 2 HOLD BOTH)

The last drafting job in `d house ENT mcq.pdf`. The adjudication is **finished** — 149 verdicts,
FOLD 124 · NEW 23 · HOLD BOTH 2 — and the 124 folds are **already applied**. You are writing the
25 entries that remain, and nothing else.

Your work-list is a JSON file, **one row per entry**, already carrying the transcribed stem, the
options, the printed key, the book page, the transcript filename, the assigned chapter, and the
three nearest held entries with their sweep stage and score. **Every field in it was read off the
page, not inferred.** Where a row carries `agentWhy`, that is the adjudicator's reasoning for the
verdict — read it before you write.

## Your output

**One JS array file. Never edit `app/data/questions.ent.js`** — the main session splices it with a
verified harness that refuses to write on a parse failure, a count mismatch, a sparse hole or a
duplicate id.

```
content/ent/qb-pages/house-tail-<YOUR HALF>.array.js
```

The file is a bare array of objects, `[` … `]`, nothing else — no `var`, no assignment, no
`module.exports`. **Prove it parses before you report**: `node --check` on the file wrapped in
`var X = ` … `;`, and then a real `JSON`-free eval that counts the entries and confirms each `id`.

## Ids

| rows | prefix | number |
|---|---|---|
| `Q687` … `Q720` (main run) | `enthd-thr-` | **the House question number**, e.g. `Q694` → `enthd-thr-694` |
| `S62`, `S63` (fourth section) | `enthd-sel-` | **the S number**, → `enthd-sel-62`, `enthd-sel-63` |

⚠️ **`enthd-sel-` is a NEW prefix and these two entries are the first to use it.** It exists because
the fourth section **restarts its numbering at 1**, so an `S62` written as `enthd-thr-62` or
`enthd-ear-62` would collide with a real main-run entry. The three prefixes in use today are
`enthd-ear-` (1–236), `enthd-nose-` (237–471) and `enthd-thr-` (472–685); all three are the House
question number. **Do not invent any other prefix, and do not renumber.**

## Schema — copy the shape exactly

```js
{ id:'enthd-thr-694', bank:'house', module:'ent', chapter:'ent-dysph',
  stem:'…',
  options:['…','…','…','…'],
  answer:0,
  image:'q-hd-174a.jpg',
  imgAlt:'…',
  explanation:'…',
  objective:'…',
  source:'…' },
```

- `bank:'house'` on all 25. **No `alsoIn`** — these are the questions no other bank prints. If you
  believe one of them *is* printed elsewhere, **stop and say so**: that is a fold the sweep missed,
  and it is worth more than the entry.
- `answer` is the **index** into your own `options` array, and `options` is in the **printed order**.
  ⚠️ Your row's `key` field is already that index — check it against `keyText` and say so if they
  disagree.
- `image` / `imgAlt` **only on the four rows that carry an `image` field.** Omit both otherwise.
- `module:'ent'` on all 25. `chapter` is the row's `chapter` — **the assignment is already made and
  measured**; if the content plainly contradicts it, draft it where the row says and **flag it in
  your report** rather than moving it silently.

## Length — adaptive, and this is a decision, not a preference

The standing budget (user, 2026-08-13): **~520 words** for a vignette, a divergence, a defect or an
outside-knowledge gap-fill; **~250 words** for straight slide-recall. **Every distractor is explained
either way.** A shared table belongs in ONE entry and its siblings point at that **existing** id.
`source` is a citation plus notes — **never a second explanation.**

## Where the facts come from

1. **The cached decks first** — `content/ent/lectures/*.txt`. 34 ENT decks, already harvested.
   Quote them verbatim and name the file: `` `L6) Stridor  and tracheostomy.pdf` `` (**two spaces
   after "Stridor" — that is the real filename**). Cite the line as `` `L6`:29 `` where it helps.
2. **The other two banks second**, where they print the same fact. Prefer a bank to outside
   knowledge.
3. **Outside knowledge last, and always tagged.** ⚠️ **A GAP IN THE MATERIAL IS ANSWERED, NOT
   DECLARED** (user ruling, 2026-08-04, which overrides the workspace grounding rule for this
   project only): fill it from general medical knowledge and keep *not taken from the course
   material* as a **short tag on the claim** — never a dead-end sentence, never a refusal to answer.
   Shape to copy: `entep-throat-103`.
4. ⚠️ **READ THE SLIDE BEFORE DECLARING A GAP. This has been paid for sixteen times.** Grep the
   shortest stem and the misspelling, **open the hit**, and check what the substring actually
   matched. An absence claim must name **the specific thing absent**, not the topic.

## The explanation marker — check it, do not assume it

⚠️⚠️ **The House bank DOES print explanations — eleven times — and the first 347 spliced entries all
carry a marker saying it does not.** So:

- **Open your row's `transcript` file and look.** If a boxed rationale is printed for your question,
  **capture it verbatim, unmarked, and never re-spell it** (the bank prints `Plummer vinson's`,
  `Reineke's`, `exclusion ..` — all of those stay). Then write your own analysis around it.
- If nothing is printed, close the explanation with exactly:

  `*Written for this bank — d house ENT mcq prints no explanation here.*`

  and **that marker never lives in `source`.**

## Citation form

All 558 House-origin entries use the **printed title**:

`Dr. HOUSE in ENT, End-of-round MCQs 2025, p.<BOOK PAGE>`

Use the **book** page from your row's `page` field, never a PDF page. **Never write a page number,
filename or id from memory** — 7/7 and 3/3 were wrong on this project. Name the chapter heading the
question sits under if the transcript records one.

## The four image rows

`Q694` → `q-hd-174a.jpg` · `Q696` → `q-hd-174b.jpg` · `Q697` → `q-hd-175a.jpg` ·
`Q702` → `q-hd-176a.jpg`. All four are **already cut, already looked at, and already in
`app/assets/q/`** — you do not render or crop anything. Your row carries a `shows` field: that is
what the crop actually contains, read off the image.

- ⚠️⚠️ **`image` stores the basename WITHOUT the file extension** — `image:'q-hd-174a'`, **not**
  `'q-hd-174a.jpg'`. `qImgSrc(name)` returns `` `assets/q/${name}.jpg` `` and **appends the extension
  itself**; all 84 image fields in the corpus store the bare basename and **zero** carry `.jpg`. A
  stored `.jpg` builds `assets/q/q-hd-174a.jpg.jpg`, and **a broken `<img>` renders as nothing rather
  than raising an error** — it would ship silently. Your row's `image` field is already correct; copy
  it verbatim.
- ⚠️⚠️ **`imgAlt` MUST NOT ANSWER THE QUESTION — modality and view only.** This gave away six
  answers once. The detailed read of the figure belongs in `explanation`, where it is earned. Your
  row carries an `altSuggestion`; **it is a suggestion, and the rule is yours to apply** — if the
  suggestion leaks, tighten it and say so.
- ⚠️ `q-hd-176a` **is not a barium swallow.** Two endoscopic views plus an axial CT and an axial MRI.
- ⚠️ `Q697` depends entirely on its figure — its whole stem is *"The attached barium swallow and
  endoscopic pictures refer to which condition of the following?"* The explanation must read the
  figure, and the four options are only separable that way.

## The two back-referencing stems

`Q702` and `Q703` print *"In the previous case…"*. **The app hashes question order from the id, so
there is no previous case** — the stem must carry the vignette. Your row supplies it in
`antecedent`, together with which question it actually is.

⚠️⚠️ **A RESTATEMENT MUST NOT ANSWER THE QUESTION — the `imgAlt` rule applies to stems.**
`entep-nose-40`'s reconstructed stem invented *a nasopharyngeal mass* and the very next entry keys
*juvenile nasopharyngeal angiofibroma*. Restate what the antecedent **printed**; add nothing.

## The two HOLD BOTH rows

`S62` and `S63` are **kept alongside** an existing endpoint entry that asks the identical question
over the identical option set and **keys a different option.** Your row carries the held entry's
stem, options, answer and chapter as `pairStem` / `pairOpts` / `pairAnswer` / `pairChapter`.

- **`answer` is the House printed key. It does not move.** ⚠️ **A defective key is noted, never
  disputed** (user ruling, 2026-08-11) — the divergence is a paragraph in `explanation`, quoting the
  slides, and a note in `source`. **Do not take a key dispute to the user and do not pick a winner.**
- **Each entry names the other, by id, in backticks.** Say plainly that the two banks disagree, what
  each keys, and what the course material actually prints.
- `S62` — *acute necrotizing otitis media*. Already grounded, and **you should verify all of it
  yourself rather than take it from this brief**: `L17,18) Otorrhea and otalgia`:182 and :190 give
  **Pseudomonas** to the **external** disease; `L21.1) acute otitis media`:36 puts *B hemolytic
  strept* first for otitis **media**; and the phrase *acute necrotizing otitis media* appears in
  **no cached deck**. The sibling `entqb-ear2-39` keys *Pseudomonas aeruginosa* for malignant otitis
  **externa**. ⚠️ **The held entry `entep-ear-86` had already named this exact trap in writing,
  before House was read — quote its own words back**; that is the strongest cross-bank evidence this
  project holds, because the prediction was in the file before the second bank was opened.
- `S63` — tubotympanic CSOM. The held entry `entep-mfe6-1` **already carries a DISPUTED KEY note with
  four sources against it.** House is a fifth. Say so.

## Escaping — the project's most expensive problem, four measured traps

- `\n` in a JS string is a **two-character escape**, and a **real newline ends the string**. Write
  paragraph breaks as the two characters `\` `n`. **Zero real newlines inside any field.**
- Use **curly apostrophes** (’) in prose. A straight `'` inside a single-quoted field must be
  escaped, and it is easier to be consistent than to be careful.
- ⚠️⚠️ **The Bash tool's quoted heredoc collapses `\\` to `\` even when the body is JS or JSON.** It
  has corrupted paths, citations and a regex on this project **four times**, the fourth inside a
  plain `cat > file <<'EOF'`. **Write the file with a real file write, then GREP EVERY PATH, EVERY
  ID AND EVERY `\n` YOU WROTE, IN THE FILE, AFTER WRITING IT.** The write reports success either way.
- ⚠️ A **backtick inside a double-quoted bash string is command substitution** — and every chapter
  id and question id we write is in backticks. Never pass your text through `node -e "…"`.
- A heredoc over ~7 KB fails to parse. **Append one entry at a time** if you go that route at all.

## Before you report

1. The file parses, and the entry count is exactly your row count.
2. Every `answer` is in range for its own `options`.
3. **Every backticked id was grepped in `app/data/questions.ent.js` and resolves.** Never backtick
   an id you have not grepped. ⚠️ **`enthd-thr-648` no longer exists** — it was merged into
   `entep-throat-65` on 2026-08-24. Do not reference it.
4. Zero real newlines and zero stray backslashes in any field.
5. Each `image` basename exists in `app/assets/q/`. List the directory; do not assume.

## Return

A short report: the file path, the entry count, every place the work-list and the transcript
disagree, every fact you had to take from outside the material (with the tag you used), every marker
you wrote and why, any row whose chapter you think is wrong, and **anything in this brief that
turned out to be wrong.**

**TRUST THE STAGING AND THE TRANSCRIPT OVER THIS PROMPT, AND TELL ME WHERE I WAS WRONG.** My briefs
have been corrected by the agent that read the source **sixteen times** on this project, plus twice
by machine checks of my own. It is the single most valuable thing you can return.
