# Pediatrics ENDPOINT — part 1 only

Paste this whole file as the first message of a **fresh** chat. Opus 5, effort `high`, no Fast mode.
Written 2026-09-02 by the watch session. Every number below was measured from disk the same day.

---

## WHAT YOU OWN, AND WHAT YOU DO NOT

You are the **pediatrics endpoint chat**. Chat B is running **right now** on the pediatrics House
bank and owns `app\data\questions.peds.js`. You never write that file.

| You own | Chat B owns |
|---|---|
| `app\data\questions.peds.ep.js` | `app\data\questions.peds.js` |
| `content\peds\qb-pages\endpoint-*` | `content\peds\qb-pages\house-*` |
| `app\assets\q\q-pd-ep-*.jpg` | `app\assets\q\q-pd-hd-*.jpg` |
| `tools\bank-harness\*-pd-ep.js` | `tools\bank-harness\*-pd.js` |
| `progress\resume-peds-endpoint.md` | `progress\resume-peds.md` |

**Scope is `Pediatrics endpoint part1.pdf` ONLY.** Part 2 is deliberately deferred by the user
(2026-09-02) — a third work chat was judged not worth it. Do not open part 2, do not plan for it,
do not treat part 1 as half a job. When part 1 closes, say so and stop.

⚠️ **Stage EXPLICIT PATHS — never `git add -A`.** Chat B commits in the gaps between your commands.
If git reports `index.lock`, Chat B is mid-commit: **wait and retry, never delete it.**

**Never touch:** `app\index.html` · `app\data\questions.js` · `app\data\questions.peds.js` ·
`modules.js` · `MEMORY.md` · `progress\ledger.md` · `content\peds\qb-pages\house-*` ·
`tools\bank-harness\splice-pd.js` · `tools\bank-harness\val-pd.js` (see the next section — this one
will silently destroy Chat B's work).

---

## ⚠️⚠️ THE HARNESS WILL OVERWRITE CHAT B'S BANK — read this before running anything

`tools\bank-harness\splice-pd.js` line 17 hardcodes its target:

```
const LIVE = R + 'app/data/questions.peds.js';
```

and line 132 is `fs.writeFileSync(LIVE, out, 'utf8')`. Its duplicate guard only checks whether an id
is *already* live, so `pedep-` ids sail straight through. **Running it splices your endpoint
questions into Chat B's House bank and rewrites the file underneath a live chat.**

Both `splice-pd.js` and `val-pd.js` are **modified and uncommitted in Chat B's working tree right
now** — they are a moving target as well as a shared one.

**So: copy, never edit, never run the originals.**

```
cp tools/bank-harness/splice-pd.js tools/bank-harness/splice-pd-ep.js
cp tools/bank-harness/val-pd.js    tools/bank-harness/val-pd-ep.js
```

Then change `questions.peds.js` → `questions.peds.ep.js` and `Q_PEDS` → `Q_PEDS_EP` inside **your
copies only**, and re-read both files top to bottom before the first run — they carry peds House
assumptions beyond the filename. **Every splice you ever run is `splice-pd-ep.js`.**

---

## STEP ZERO — the wiring, the ONLY shared-file edit in this job

The app has no second pediatrics data file yet. Two lines create one:

- `app\index.html:2533` — add directly after `<script src="data/questions.peds.js"></script>`:
  `<script src="data/questions.peds.ep.js"></script>`
- `app\data\questions.js:6` — add after `window.Q_PEDS   || [],`:
  `window.Q_PEDS_EP || [],`

Both files are on your forbidden list. **Ask the user to approve these two lines before you write a
single question, and do not edit them yourself unless the user says so in this chat.** The
aggregator is `const Q_ALL = [].concat(window.X || [], …)`, so until your file exists the app
degrades to an empty list and nothing breaks. After these two lines you never touch a shared file.

Your file opens with `var Q_PEDS_EP = [` — **`var`, not `const`**, like every other data file: the
aggregator reads it off `window`.

---

## READ THIS FILE FIRST — the staging record is worth more than this brief

`content\peds\qb-pages\endpoint-s01-growth-puberty.array.js` (62 KB) is a **verbatim staging record
for section 1, written 2026-08-12 by someone who read every page 5–215.** It holds facts you would
otherwise spend hundreds of pages rediscovering:

- **PDF page = printed page. THE OFFSET IS ZERO** — verified on pp.2, 3, 4, 5, 20, 30, 210.
- **The contents page is TRUSTWORTHY for section ranges** — its 5–210 for section 1 was confirmed by
  reading, and p.211 opens section 2 "Nutrition". Use it to map the whole book cheaply.
- Section 1 splits: pp.5–27 study-notes slides (**not questions**) · p.28 divider · **pp.29–209 the
  questions** · p.210 a closing slide.
- **Every question is printed twice** — an unanswered page, then an answered page with the key
  highlighted **in yellow** and usually a bordered box. Only the answered page is staged.
- **Three questions take a THIRD page**, the box printed alone after the answered page: q39→p.107,
  q59→p.148, q60→p.151. **This is what flips the odd/even parity, twice.** Reading alternate pages
  loses those three boxes outright.
- **The printed number is NOT an identifier.** Printed numbers run 1–87 across 89 questions: 69 is
  printed on both p.169 and p.171, 81 on both p.195 and p.197. Count by yellow highlights, not by
  printed numbers.
- **Section 1 contains no figures at all** — the file's own p.4 states the exam contains no
  pictures. No crops were cut. Do not go hunting for images in this section.

It also carries the per-question `n` / `pr` / `p` / `box` table. **Read it before you render a
single page.**

---

## WHAT IS ALREADY DRAFTED — validate and splice it, do not rewrite it

`content\peds\qb-pages\endpoint-s01-growth-puberty.draft.js` — **376 KB, written 2026-08-13, parked
ever since.** Verified 2026-09-02:

- **89 entries, `pedep-gp-1` … `pedep-gp-89`, all ids unique, no holes.**
- Page citations span **pp.30–209** — inside the record's question range.
- It **declares no variable** — it is a splice fragment, a bare list of object literals. It is not
  runnable on its own, and `node file.js` proves nothing. Validate it through `val-pd-ep.js`.
- It is written to the current standard: box quoted verbatim in a blockquote, then the expansion,
  every distractor explained, lecture citations by filename, `objective`, and a `source` naming the
  page.
- **`questions.peds.js` holds zero `pedep-` ids** — none of this has ever shipped.

⚠️ **ONE DISCREPANCY TO RESOLVE BEFORE SPLICING.** The staging record says **86 of 89** carry a
printed box and names the three that do not — n=45 (p.119), n=83 (p.197), n=87 (p.205). The draft
file contains **85** boxes and 85 closing markers. The two counts disagree by one. **Find the
missing entry and re-read its page before shipping** — either a box was dropped at writing time, or
the record miscounted. Do not assume which.

Validating a parked file has beaten rewriting it **seven times** in this project. This is ~89
questions of coverage on day one.

---

## THE MATERIAL — measured 2026-09-02, do not re-measure

| | |
|---|---|
| File | `Semester 8\Pedo\Questions\Pediatrics endpoint part1.pdf` |
| Pages | **1,991** (`pdfinfo`) · A4 · not encrypted |
| Text layer | **NONE.** `pdftotext` returns 6 characters. Every page is a photograph. |
| Size | 265.5 MB — **`Read` rejects it outright.** Render page ranges, always. |
| Ids | prefix **`pedep-`** · `bank:'endpoint'` · `module:'pediatrics'` |
| Done | section 1 (pp.5–210) staged and drafted; **pp.211–1991 untouched** |

**Grade Gain does not exist for pediatrics.** Two banks only: House and endpoint. Do not go looking.

**The cost you are up against.** ENT's endpoint ran 3,075 pages for 697 questions — **4.4 pages per
question**, against 0.17 for the compact banks: a **25× difference**. Section 1 here ran 89
questions out of 206 pages. **Do not extrapolate either figure** — section 1 spent 23 of its pages
on notes slides, and section length is not uniform. Map the book from the contents page first.

**Tooling is present and verified 2026-09-02:** `pdftoppm` (Poppler 25.07.0), `pdftotext`, `wpscli`,
`node` v26.7.0, `python` 3.12. **190 GB free on D:** — enough for a full-book render.

---

## THE METHOD — this is what keeps the job affordable

**1. OCR the whole file BEFORE you render or read anything.**
`pdftoppm` → PNG → `wpscli photo2word`, **$0** on the WPS tier already owned. Timings, exit codes
and defects: `tools\wps-ocr-reference.md`; pipeline: `progress\ocr-pipeline.md`. This is the whole
trick — the rule *"only reading every page counts"* stays in force, but **the machine does the
reading of all 1,991 pages, not you.**
⚠️ **OCR text is a SEARCH INDEX, never a clinical source.** Confirm every shipped fact against the
rendered page. ⚠️⚠️ **Superscripts fail silently — WPS read a printed 10⁶ as 10⁹.** Never take an
exponent, a unit or a dose from OCR text; read those three off the image.

**2. Let the index find the repeats before you render a page.**
Every question is printed twice — confirmed on this file, not inherited from ENT. Diff the OCR text
against itself, build the reprint map, and render only pages carrying new content. **Model exams go
last** — in ENT they were **96% reprints**; they fold, they are not written.
⚠️ **Parity is not a shortcut here.** The three overflow boxes flip it twice inside section 1 alone.
Derive answered-page positions from the yellow-highlight index, per section.

**3. Contact sheets, four-up at 110 dpi — 10 reads instead of 40.**
Crop by box presence: `-CropTop 0.30` where no box (24 pages per sheet), `0.45` where boxes are
present, `0.55` when a long stem is clipped. **Re-render any tile whose last visible line is an
option rather than white space.**

**4. Every render and every image read happens inside a subagent.**
Spawn `lean-drafter` (Sonnet 5, ~13k floor; defined at `.claude\agents\lean-drafter.md`), **never
`general-purpose`** (~58k). An image read in the main chat is re-sent with **every subsequent
request for the rest of the session**. Cap **2 live subagents**. Subagents draft into
`content\peds\qb-pages\endpoint-*.js` and **never touch a data file or git**. The agent registry
loads at session start, so this only works in a chat opened after the definition existed.

**5. Writing budget — `tools\bank-harness\pd-draft-brief.md:111` and `progress\briefs\pediatrics.md:30`.**
Adaptive depth: **~250 words for straight recall, ~520** for clinical vignettes, defective keys,
cross-bank divergences and discrimination questions — the shorter form still carries the key, a
verbatim quote, why every distractor is wrong, one clinical point and the citation. `source` is a
**citation, not a second explanation**.
⚠️ **Never trim a bank, thin an explanation or shorten notes to make the remainder fit.** If time
runs short, **say so loudly** and leave the resume state clean. Scaling down is the user's call.

---

## THE EXPLANATION BOXES — the saving, and the trap

**The saving is real and large here.** 86 of section 1's 89 questions — **97%** — carry a printed
explanation. Where a box exists you transcribe it instead of authoring 250–520 words.

⚠️ **But box presence is a property of the PAGE and does not extrapolate.** In ENT it ran present,
gone for ~150 pages, back at p.666, gone at p.680; on the Nose section it was on nearly every page
for 150 pages and then **absent across 124 consecutive pages**. The 97% above is one section of
twenty-odd. Detect presence from the OCR text per page — never assume it from the last page.

⚠️⚠️ **The boxes are partly AI-generated and sometimes corrupt.** In ENT, **three ended with the
literal string "Ask ChatGPT"**, pasted out of a chatbot. Three reprints carried a *worse* box than
the first printing: one had its table lines slipped by one so it contradicted its own key, one
printed the placeholder `[Effect not specified here]`, one was truncated mid-sentence.

**The standing rule: a source box beats authored text, but an AI-pasted box is not evidence. Where a
box contradicts the cached lecture slides, THE SLIDES WIN, and the clash is recorded.** Sweep every
box for the marker. **A later printing's box is not automatically an upgrade — read it before
folding it in.**

---

## PITFALLS CARRIED FROM ENT'S ENDPOINT — all verified there, none guessed

- **Printed numbers are not a count of questions.** Already proven on *this* file (87 numbers, 89
  questions, two printed twice). In ENT's Nose section: 134 numbers over 135 questions, one question
  printed as both Q19 and Q20, Q74–Q77 skipped, two different questions both numbered 131.
- **The bank mis-keys itself somewhere — go looking for it.** ENT had five self-contradictions, all
  on pages printing no box. **Transcribe what the bank printed, explain the clash, and write the
  grading keys to accept either reading.** Never silently correct a key. **A defective key is noted,
  never disputed; the `answer` never moves.**
- **The same fact through a different option set is NOT a duplicate.** ENT printed one fact seven
  times with seven distinct option sets. **Judge by the option set, not the stem** — and treat the
  repetition itself as exam information.
- **A vignette can be printed as a header over a numbered block**, belonging to no single question —
  and **not every question under the header inherits it.** This breaks transcription silently.
- **Never carry structure across a section boundary.** Section 1 has no figures at all; a later
  section may. Check the first ten pages of every section. **Sample for structure, never for rate.**
- **If a later section does print figures:** an explanation figure on an answer page is **never**
  cropped — it renders between stem and options and gives the answer away. Only a figure printed
  *with the question* is cut. ⚠️ Every figure crop in this project has been wrong on first attempt.
  Naming follows the live convention `q-pd-ep-<page>.jpg`, with `a`/`b`/`c` suffixes when one page
  yields several (as `q-pd-hd-26a/b/c.jpg` already does).
- **Read one page PAST the last answer page, every time.** Answers have run past the mapped end.
- **A missing lecture number means the professor withheld it** — never a capture failure, never a
  file to chase. Peds is missing 21, 28, 29, 57; settled 2026-08-14, do not re-raise
  (`progress\briefs\pediatrics.md:217`). Fill from general knowledge and tag it as such.
- **Read the slide before declaring a gap.** Five staged "answered nowhere" items were withdrawn
  once the lecture was actually read.

---

## THE OVERLAP WITH CHAT B — read, never write

When endpoint prints a question House already holds, the rule is to hold it **once** with `alsoIn`.
You cannot fold into Chat B's file and Chat B cannot fold into yours. So:

- **Read `app\data\questions.peds.js` freely** — reading cannot clash — and run your fold sweep
  before writing, so you never author a full explanation for a question already held.
- **Record every match in your journal instead of resolving it.** One reconciliation pass merges
  them after both banks close. In ENT the cross-bank overlap ran about 6%.
- ⚠️ **Never backtick an id that does not exist yet.** Caught three times in ENT. Re-run the dead-id
  check after every fold.

---

## HOUSEKEEPING

- **Write `progress\resume-peds-endpoint.md` as you go** — anything not written there is invisible
  to the watch and **dies with this session**. Append to a `## Changed since` block; do not rewrite
  the body.
- **One work block per session.** Kill this chat at the end of the block and resume from the journal.
- Boot check after every splice: `node tools\boot-check\boot-check.js` — it copies the app into a
  temp directory and never writes into the repo.
- Your module brief is `progress\briefs\pediatrics.md`; the drafting standard is
  `tools\bank-harness\pd-draft-brief.md`; the staging standard is
  `tools\bank-harness\pd-staging-brief.md`. **There is no `START-HERE.md` in this repo** — the
  workspace rules live in `CLAUDE.md` at the repo root and at `D:\claude os\CLAUDE.md`.

## DONE LOOKS LIKE

`Pediatrics endpoint part1.pdf` read end to end, every page accounted for against the contents-page
map, `questions.peds.ep.js` parsing clean with zero holes and zero dead ids, the boot check green,
the overlap with House recorded but not resolved, and `resume-peds-endpoint.md` current enough that
a fresh chat could pick up part 2 from it. Then stop and tell the user.
