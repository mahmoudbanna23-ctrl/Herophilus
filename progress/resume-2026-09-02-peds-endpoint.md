# Pediatrics ENDPOINT — part 1 only (prompt v3)

Paste this whole file as the first message of a **fresh** chat. Opus 5, effort `high`, no Fast mode.
v3 written 2026-09-02 (late) by the watch session. **Every number below was measured from disk the
same day; v1/v2 figures that disagreed with the disk were replaced, not stacked.**

---

## WHAT YOU OWN, AND WHAT YOU DO NOT

You are the **pediatrics endpoint chat**. Chat B is running **right now** on the pediatrics House
bank and owns `app\data\questions.peds.js`. You never write that file.

| You own | Chat B owns |
|---|---|
| `app\data\questions.peds.ep.js` | `app\data\questions.peds.js` |
| `content\peds\qb-pages\endpoint-*` · `content\peds\qb-pages\ocr\ep1\` | `content\peds\qb-pages\house-*` |
| `app\assets\q\q-pd-ep-*.jpg` | `app\assets\q\q-pd-hd-*.jpg` |
| `tools\bank-harness\*-pd-ep.js` · `tools\ep-index\` | `tools\bank-harness\*-pd.js`, `*-pd10.js` |
| `progress\resume-peds-endpoint.md` | `progress\resume-peds.md` |

**Scope is `Pediatrics endpoint part1.pdf` ONLY.** Part 2 is deliberately deferred by the user
(2026-09-02). Do not open part 2, do not plan for it, do not treat part 1 as half a job. When
part 1 closes, say so and stop.

⚠️ **Stage EXPLICIT PATHS — never `git add -A`.** Chat B commits in the gaps between your commands.
If git reports `index.lock`, Chat B is mid-commit: **wait and retry, never delete it.**

**Never touch:** `app\index.html` · `app\data\questions.js` · `app\data\questions.peds.js` ·
`modules.js` · `MEMORY.md` · `progress\ledger.md` · `content\peds\qb-pages\house-*` ·
`tools\bank-harness\splice-pd.js` · `tools\bank-harness\val-pd.js` · `*-pd10.js`.

⚠️⚠️ **`splice-pd.js` and `val-pd.js` write Chat B's live file** (`splice-pd.js` line 17 hardcodes
`questions.peds.js`; its duplicate guard lets `pedep-` ids straight through). Both are **Chat B's
files** (their ch.12 edit was committed `b45af03`) — never stage them, never run them on endpoint files.
Your harness is `val-pd-ep.js` / `splice-pd-ep.js`, and **every splice you ever run is
`splice-pd-ep.js`.**

---

## ✅ STEP ZERO IS DONE — start on the splice, not on setup

Everything v2 asked you to set up or ask permission for is already on disk and committed:

- **Wiring is in.** `app\index.html` loads `data/questions.peds.ep.js` after the House file, and
  `app\data\questions.js` concatenates `window.Q_PEDS_EP || []`. `app\data\questions.peds.ep.js`
  exists with an empty `var Q_PEDS_EP = [ ];` and the boot check runs clean (0 console errors,
  4,438 questions). **Do not edit either shared file again.**
- **The harness copies exist and are TESTED.** `tools\bank-harness\val-pd-ep.js <section>` and
  `splice-pd-ep.js <section> [--write]`. The splice **refuses unless the validator exits 0** on the
  same section — no flag skips that. Each knows one target: `questions.peds.ep.js`, var
  `Q_PEDS_EP`. New sections are added to the `SEC` table at the top of **both** files.
- **Section 1 is staged, drafted, VALIDATED and dry-run clean.**
  `content\peds\qb-pages\endpoint-s01-growth-puberty.array.js` (89 rows, header corrected
  `66c2838`) and `endpoint-s01-growth-puberty.draft.js` (89 entries `pedep-gp-1…89`, a bare
  fragment with no `var`, repaired `32f2a32`). `val-pd-ep.js 1` → `ALL CHECKS PASSED`;
  `splice-pd-ep.js 1` → "would be 89 entries, 373150 bytes".
- **The 86-vs-85 discrepancy from v2 is RESOLVED: 85 boxed.** The four unboxed are n=45 (p.119),
  **n=55 (p.139, re-read 2026-09-02: key d highlighted, nothing printed below the options)**,
  n=83 (p.197), n=87 (p.205). The record header and the draft agree.

**Your first three commands, in order:**

```
node tools\bank-harness\splice-pd-ep.js 1 --write
node tools\boot-check\boot-check.js
node tools\bank-harness\validate-all.js
```

Then `git add -- app/data/questions.peds.ep.js` and commit that one path. **Section 1 ships in
the first ten minutes of this chat.** ~89 questions of coverage on day one, zero pages rendered.

---

## THE SEARCH INDEX — the whole book is already OCR'd, grep it before you render anything

`content\peds\qb-pages\ocr\ep1\` holds **one text file per page, p0001–p1991**, plus
`index.json`. Built 2026-09-02 with `tools\ep-index\` (README there): each page's native
800×450 JPEG copied straight out of the PDF, OCR'd with the **free, offline Windows engine**, twice
— once at native size and once at 150 dpi — because **the engine silently drops whole lines, and a
different line at each size** (p.38 native lost the key line B; p.145 at 150 dpi lost its key).
Each `pNNNN.txt` carries both reads, separated by `--- 150dpi ---`. **Use both halves.** On the
7 ground-truth pages the union recovered every stem and option; stems were **character-exact,
printed typos included.**

`index.json` has one row per page: `kind`, `yellow`, `words`, `options` (letters seen per read)
and `flags`. **`kind` is the fact you plan from:**

| kind | meaning | part 1 |
|---|---|---|
| `answered` | yellow highlight AND ≥1 option letter — the answered printing, **one per question** | **855** |
| `question` | no yellow, ≥2 option letters — the unanswered printing | 854 |
| `notes` | no option letters — summary slides, dividers, contents | 281 |
| `other` | one letter, no yellow — look at it | 1 (p.741) |

⚠️ **Yellow alone is NOT a question count.** The summary slides (pp.6–27 and every section's
notes) are highlighted too — 1,058 pages carry yellow, only 855 are questions. Count `kind`.
The threshold (≥750 on the downscale) was calibrated on section 1 against the staging record:
**89 of 89 answered pages found, 0 false positives on the 89 unanswered and 3 overflow pages.**

**Flags — the index fails loudly rather than looking complete.** `thin` (83 pages: dividers,
overflow boxes, lost pages), `few-options` (14 answered pages where both reads together saw
< 4 letters — **render these before trusting the index for them**: 50, 139, 338, 504, 742, 797,
938, 1039, 1043, 1232, 1268, 1603, 1684, 1774), `options-differ` (169: one read lost an option
line — read both), `passes-differ` (20). List them:

```
python -c "import json;print([(r['page'],r['flags']) for r in json.load(open('content/peds/qb-pages/ocr/ep1/index.json')) if r['flags']])"
```

⚠️⚠️ **THE INDEX IS A SEARCH INDEX, NEVER A CLINICAL SOURCE, AND NEVER THE ANSWER KEY.** The key is
the yellow highlight on the image, read inside a subagent. A page's OCR can carry the key line in
one read and not the other. **Never take an exponent, a unit or a dose from OCR text** — the
WPS finding (10⁶ read as 10⁹) applies to every engine.

**What the index is for:** the reprint map (diff answered pages' text against each other — the
model exams are expected to be mostly reprints, as ENT's were at 96%), box presence (text after
the last option on an answered page), locating every answered page per section, and searching
for a stem before drafting. Contact sheets and page renders are still how you *read*; the index
decides *which* pages are worth reading.

**Re-running it** (only if the index is ever lost; ~5 minutes, images to the scratchpad):
```
powershell -ExecutionPolicy Bypass -File tools\ep-index\run-all.ps1 -Pdf "Semester 8\Pedo\Questions\Pediatrics endpoint part1.pdf" -Out content\peds\qb-pages\ocr\ep1 -Work <scratchpad>\ep1-index
```

---

## THE BOOK MAP — from the contents pages (p.2–3), counts from the index

| section | pages | answered (= questions) | notes slides |
|---|---|---|---|
| ✅ Growth & Puberty | 5–210 | **89** — drafted | 28 |
| Nutrition | 211–392 | 76 | 30 |
| Gastroenterology | 393–549 | 67 | 23 |
| Accidents & poisoning | 550–562 | 3 | 7 |
| Pediatrics Emergencies | 563–702 | 60 | 18 |
| Perinatal | 703–773 | 23 | 25 |
| Neonatology | 774–903 | 53 | 24 |
| Allergy | 904–928 | 9 | 7 |
| Infection & Immunity | 929–1156 | 96 | 37 |
| Model Final Exam 1–4 | 1157–1804 | 80 · 79 · 80 · 80 | 11 |
| Model Training Exam 1–2 | 1805–1936 | 30 · 30 | 12 |
| Exam Night Review | 1937–1990 | 0 — prose only | 54 |

**Body = 476 questions (pp.5–1156), of which 89 are done. Exams = 379, expected mostly reprints
— they go last and they fold.** `Pediatrics Emergencies` shows 62 unanswered against 60 answered
and Perinatal 22 against 23: a question printed once, or a lost highlight — reconcile per section
from the index before staging, do not assume.

**PDF page = printed page, offset ZERO** (verified pp.2–5, 20, 30, 210 and again on the index:
the contents page's ranges match the `notes`/`answered` boundaries exactly).

| | |
|---|---|
| File | `Semester 8\Pedo\Questions\Pediatrics endpoint part1.pdf` — 1,991 pages, **no text layer**, 265 MB, `Read` rejects it |
| Ids | prefix **`pedep-`** · `bank:'endpoint'` · `module:'pediatrics'` · chapter ids from `app\data\modules.js` |
| Figures | section 1 has none (p.4: "the exam does not contain pictures"). **Check the first ten pages of every other section** before assuming |

**Grade Gain does not exist for pediatrics.** Two banks only: House and endpoint.

---

## READ THE STAGING RECORD BEFORE STAGING SECTION 2

`endpoint-s01-growth-puberty.array.js` is the worked example of the staging standard
(`tools\bank-harness\pd-staging-brief.md`): fields `n / pr / p / key / stem / opts / expl / note /
box`, the header stating boxed/unboxed counts by `n` and page, printed typos **verbatim**, shared
option menus recorded once and referenced. Facts it proved that carry to every section:

- **Every question is printed twice** — unanswered page, then the answered page with the key
  highlighted yellow and usually a bordered box. Only the answered page is staged.
- **A box can overflow onto a third page** (q39→p.107, q59→p.148, q60→p.151). **Parity is not a
  shortcut**; derive answered pages from `kind == "answered"` in the index, never from odd/even.
  Overflow pages show as `thin` with no option letters — name them in `source`
  ("p.106, box on p.107").
- **The printed number is not an identifier** (87 numbers over 89 questions; 69 and 81 printed
  twice). Count by answered pages, not by printed numbers.
- **Printed typos survive verbatim** in stem and options ("Anal height is affected", "mostly
  likely", "less than 500"); `val-pd-ep.js` enforces byte-identity with the record and says so in
  the explanation.
- **Shared option menus**: the anchor entry carries the option table, every sibling names the
  anchor id in its explanation (`**Shared option menu — see \`pedep-gp-3\`.**`). The validator
  checks for the pointer.
- **Blockquote lines (`> `) in an explanation are the printed box and nothing else** — the
  validator diffs every `> ` line against the record's `box`. Quote slides as `- “…”` list items.
- **Held separately, never "held as one question in the app"** — that phrase was false three
  times in the section 1 draft and was removed.

---

## THE METHOD

**1. Plan each section from the index, then stage.** List its `answered` pages, diff their text
against everything already staged or live (reprint map), read the flagged pages by eye, then
stage the section into `endpoint-sNN-<slug>.array.js` from **rendered pages read inside a
subagent** — the index tells you *which* pages; the image is what you transcribe from.

**2. Every render and every image read happens inside a subagent.** Spawn `lean-drafter`
(Sonnet 5, ~13k floor; `.claude\agents\lean-drafter.md`), **never `general-purpose`** (~58k). An
image read in the main chat is re-sent with **every subsequent request for the rest of the
session**. Cap **2 live subagents**. Subagents write only `content\peds\qb-pages\endpoint-*` and
**never touch a data file or git.** The registry loads at session start.

**3. Contact sheets, four-up at 110 dpi.** `-CropTop 0.30` where no box (24 pages per sheet),
`0.45` where boxes are present, `0.55` when a long stem is clipped. **Re-render any tile whose
last visible line is an option rather than white space.** The native JPEGs are 800×450: a 4-up
sheet of them is already legible; render from the PDF only when the crop needs more.

**4. Draft to `tools\bank-harness\pd-draft-brief.md`** (adaptive depth: ~250 words straight
recall, ~520 for vignettes, defective keys, divergences), validate with `val-pd-ep.js N`, splice
with `splice-pd-ep.js N --write`, boot-check, `validate-all.js`, commit the one data file.
⚠️ **Never trim a bank, thin an explanation or shorten notes to make the remainder fit.** If time
runs short, **say so loudly** and leave the resume state clean. Scaling down is the user's call.

---

## THE EXPLANATION BOXES — the saving, and the trap

**85 of section 1's 89 (96%) carry a printed box.** Where a box exists you transcribe it instead
of authoring. ⚠️ **Box presence is a property of the PAGE and does not extrapolate** — in ENT it
vanished for 124 consecutive pages. The index shows it per page: an answered page whose text
continues after the last option has a box. Detect, never assume.

⚠️⚠️ **The boxes are partly AI-generated and sometimes corrupt.** In ENT three ended in the literal
"Ask ChatGPT"; one printed `[Effect not specified here]`; one was truncated. **A source box beats
authored text, but an AI-pasted box is not evidence. Where a box contradicts the cached lecture
slides, THE SLIDES WIN, and the clash is recorded.** Sweep every box for the marker.

---

## PITFALLS CARRIED FROM ENT'S ENDPOINT — all verified there, none guessed

- **The bank mis-keys itself somewhere — go looking for it.** ENT had five self-contradictions.
  **Transcribe what the bank printed, explain the clash, write the grading keys to accept either
  reading. A defective key is noted, never disputed; the `answer` never moves.**
- **The same fact through a different option set is NOT a duplicate.** Judge by the option set,
  not the stem, and treat the repetition itself as exam information.
- **A vignette can be printed as a header over a numbered block** and not every question under
  it inherits it.
- **Figures, if a later section prints them:** an explanation figure on an answer page is **never**
  cropped. Only a figure printed *with the question* is cut, named `q-pd-ep-<page>.jpg`
  (`a`/`b`/`c` suffixes when one page yields several). Every figure crop in this project has
  been wrong on first attempt.
- **Read one page PAST the last answer page, every time.**
- **A missing lecture number means the professor withheld it** — peds is missing 21, 28, 29,
  57; settled 2026-08-14, do not re-raise (`progress\briefs\pediatrics.md:217`).
- **Read the slide before declaring a gap.**

---

## THE OVERLAP WITH CHAT B — read, never write

When endpoint prints a question House already holds, the rule is to hold it **once** with
`alsoIn`. You cannot fold into Chat B's file and Chat B cannot fold into yours. So: **read
`questions.peds.js` freely**, run your fold sweep before writing, **record every match in your
journal instead of resolving it.** One reconciliation pass merges them after both banks close.
⚠️ **Never backtick an id that does not exist yet** — `validate-all.js` hard-fails on a dead id
(it found nine in the closed ophtho bank on 2026-09-02; all repointed the same day).

---

## HOUSEKEEPING

- **Write `progress\resume-peds-endpoint.md` as you go** — anything not written there is invisible
  to the watch and **dies with this session**. Append to a `## Changed since` block.
- **One work block per session.** Kill this chat at the end of the block and resume from the
  journal.
- Boot check after every splice: `node tools\boot-check\boot-check.js`. Cross-bank check:
  `node tools\bank-harness\validate-all.js` (read-only, exit 1 on a hard failure).
- Briefs: `progress\briefs\pediatrics.md` (module), `tools\bank-harness\pd-draft-brief.md`
  (drafting), `tools\bank-harness\pd-staging-brief.md` (staging). Workspace rules: `CLAUDE.md`
  at the repo root and at `D:\claude os\CLAUDE.md`. There is no `START-HERE.md`.

## DONE LOOKS LIKE

Section 1 spliced in the first ten minutes; then sections 2–9 (387 more questions) staged,
drafted, validated and spliced in order; the model exams reconciled against the body through the
index and folded; every page accounted for against the map above; `questions.peds.ep.js` parsing
clean with zero holes, `validate-all.js` green, the boot check green, the overlap with House
recorded but not resolved, and `resume-peds-endpoint.md` current enough that a fresh chat could
pick up part 2 from it. Then stop and tell the user.
