# Chat C resume — PEDIATRICS ENDPOINT **PART 2** (2026-09-04, v1)

Paste into a **fresh Opus chat** at `D:\claude os\Medical school\Herophilus`. **One prompt per
chat.** Do not paste into a live chat.

**This is a NEW bank stream, started from zero.** Part 1 (`…endpoint part1.pdf`) is being built by a
**separate, still-live chat** — the "endpoint part-1 chat". You must never touch its files (list
below). You own **part 2 only**: `Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf`
(**1993 pages, 272 MB** — verified 2026-09-04 by `pdfinfo`).

**The user's two design decisions (2026-09-04), already settled — build to them, do not re-litigate:**
1. **Own file, same bank.** Part 2 lives in its own `app\data\questions.peds.ep2.js` defining
   `var Q_PEDS_EP2`, id prefix `pedep2-`, but `bank:'endpoint'` — so the app shows ONE (larger)
   endpoint bank, not a second one.
2. **The part-1 chat is still live.** File-collision safety and a shared Codex login both matter
   (see constraints). Stay strictly inside your own files.

---

## 0. MEASURE FIRST — a resume prompt is a claim about the past, not the present

```bash
git log --oneline -3 && git status --short
ls app/data/questions.peds.ep2.js 2>&1                     # expect: absent, until you create it
ls -d content/peds/qb-pages/ocr/ep2 2>&1                   # expect: absent, until you build it
node -e "const vm=require('vm'),fs=require('fs');try{const c={};new vm.Script(fs.readFileSync('app/data/questions.peds.ep2.js','utf8')).runInNewContext(c);console.log('Q_PEDS_EP2',c.Q_PEDS_EP2.length,'holes',c.Q_PEDS_EP2.filter(x=>x===undefined).length)}catch(e){console.log('ep2 file not yet present:',e.message)}"
```

**Where this file and the disk disagree, the disk wins. Say where this file was wrong.** A dirty tree
containing another chat's files (`house-*`, `endpoint-s*` from part 1, `*.loop.json`) is **NORMAL** —
two other chats may be writing. Do not stage, touch, or "tidy" their files.

---

## 1. WHAT YOU OWN, AND WHAT YOU MUST NOT TOUCH

You are the **pediatrics endpoint PART-2 chat**.

| You own (create these) | The part-1 chat owns — NEVER touch | Chat B owns — NEVER touch |
|---|---|---|
| `app\data\questions.peds.ep2.js` (`Q_PEDS_EP2`) | `app\data\questions.peds.ep.js` (`Q_PEDS_EP`) | `questions.peds.js` · `questions.neuro.js` |
| `content\peds\qb-pages\ocr\ep2\` | `…\ocr\ep1\` | `content\peds\qb-pages\house-*` · `content\neuro\` |
| `content\peds\qb-pages\endpoint-p2-*` | `content\peds\qb-pages\endpoint-s*` (no `-p2-`) | — |
| `app\assets\q\q-pd-ep2-*.jpg` | `app\assets\q\q-pd-ep-*.jpg` | `app\assets\q\q-pd-hd-*.jpg` |
| `tools\bank-harness\*-pd-ep2.js` (fork these) | `tools\bank-harness\*-pd-ep.js` | `*-pd.js` · `*-pd10.js` · `tools\chapter-loop.js` |
| `progress\resume-peds-endpoint-part2.md` (this file) | `progress\resume-*-peds-endpoint.md` | `resume-peds.md` · `resume-neuro.md` |

**Shared, edit with a one-line surgical touch only (both other chats also read them):**
`app\index.html`, `app\data\questions.js`. You add **exactly one line each** (see §3) and nothing else.

**NEVER touch:** `modules.js` · `progress\ledger.md` · any `house-*` / `endpoint-s*` (part-1) / neuro
file · the part-1 or House harness tools · `tools\chapter-loop.js`.

⚠️ **Stage EXPLICIT PATHS — never `git add -A`.** Other chats commit in the gaps between your
commands. Always `git commit -F <msgfile> -- <paths>` (commits only those paths even if another chat
staged in the gap — measured necessity). On `index.lock`: another chat is mid-commit — **wait and
retry, never delete it.**

⚠️ **Do not `git push`.** It is blocked by the permission layer for this chat. Commit normally, say
what is unpushed. The main `D:\claude os` chat pushes.

---

## 2. THE HARD GATE — build the index and MAP THE SECTIONS before staging a single question

Part 2's section boundaries, titles, and page ranges are **unknown** and cannot be guessed. Nothing
stages until the OCR search index exists and the section map is agreed. Order:

**(a) Build the part-2 OCR search index.** Only the three `run-all.ps1` arguments change from the
part-1 build; no script inside `tools\ep-index\` needs editing (all take the PDF/paths as arguments —
verified 2026-09-04). Run in **Windows PowerShell 5.1** (the WinRT OCR projection is absent in PS7),
`-Work` in the scratchpad (~1 GB of images, never the repo):

```
powershell -ExecutionPolicy Bypass -File tools\ep-index\run-all.ps1 `
    -Pdf "Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf" `
    -Out content\peds\qb-pages\ocr\ep2 `
    -Work <scratchpad>\ep2-index
```

This writes `ocr\ep2\pNNNN.txt` (native read, `--- 150dpi ---`, hires read) + `index.json`. It
counts `kind=="answered"` pages (the only ones staged; yellow-pixel alone over-counts) and flags
`few-options` / `options-differ` pages to read hard. **`-First`/`-Last` restrict the range for a
smoke test — do that first on ~10 pages.**

⚠️ **Re-verify the yellow calibration.** `index.py` hardcodes `YELLOW_MIN = 750`, calibrated on
part-1 section 1. Read the first ~10 answered pages of part 2; if the highlight intensity differs,
change `YELLOW_MIN` before the full run. Do not assume part 2 highlights like part 1.

**(b) Map part 2's sections from `index.json`** — numbers, titles, page ranges — exactly as part 1's
sections 3–9 were "pre-mapped from the index." **Present that map to the user and agree it before
building the `SEC` table or staging anything.** This is the index-design hard gate.

---

## 3. PHASE 0 — scaffold once the section map is agreed

**(a) Create the empty bank file** `app\data\questions.peds.ep2.js`:

```js
/* Pediatrics ENDPOINT PART 2 questions (Pediatrics endpoint part2.pdf).
   Own file, separate from questions.peds.ep.js (part 1) so two chats can write without
   touching each other. Same schema; bank:'endpoint' so the app shows one endpoint bank.
   var, not const, so the aggregator reads it off window and degrades to [] if this file
   fails to parse. */
var Q_PEDS_EP2 = [
];
```

**(b) Wire it into the app — exactly two one-line edits (verified line numbers 2026-09-04):**
- `app\index.html`, immediately after line 2534 (`<script src="data/questions.peds.ep.js"></script>`):
  ```html
  <script src="data/questions.peds.ep2.js"></script>
  ```
- `app\data\questions.js`, inside the `[].concat(…)`, immediately after line 7
  (`window.Q_PEDS_EP || [],`):
  ```js
  window.Q_PEDS_EP2 || [],
  ```

`var` + the `|| []` guard mean a missing/unparsed file degrades to empty rather than throwing — keep
that. **boot-check needs NO change** (`node tools\boot-check\boot-check.js` counts, it asserts no
fixed totals; it exits non-zero only on a console/parse error). Run it now: it should boot clean with
`Q_PEDS_EP2` empty.

**(c) Fork the harness** — `val-pd-ep2.js`, `splice-pd-ep2.js`, `reprint-pd-ep2.js` from their
`-pd-ep` originals. Change only these (everything else is identical):
- **`splice-pd-ep2.js`:** `LIVE = R + 'app/data/questions.peds.ep2.js'`; `LIVE_VAR = 'Q_PEDS_EP2'`;
  the `HEADER` template → `var Q_PEDS_EP2 = [` and its `part1.pdf` mentions → `part2.pdf`; the
  validator-gate spawn must call **`val-pd-ep2.js`**.
- **`val-pd-ep2.js`:** the source-string check (`'Pediatrics endpoint part1.pdf'` → `part2.pdf`);
  `UNBOXED_MARK` → part-2 wording; figure basename **`q-pd-ep-` → `q-pd-ep2-`** (part-2 page numbers
  restart at 1 — a `q-pd-ep-<page>` name would COLLIDE with part-1 crops). `BOXED_MARK` names no PDF,
  leave it.
- **`reprint-pd-ep2.js`:** `OCR = R + 'content/peds/qb-pages/ocr/ep2/'`; live-bank comparison points
  at `Q_PEDS_EP2` (and still cross-checks against `Q_PEDS_EP` and `Q_PEDS` for cross-bank matches).
- **New `SEC` table** in both val/splice forks, built from the agreed §2(b) map: part-2 prefixes
  (`pedep2-<slug>-`), staging files `endpoint-p2-sNN-<slug>.array.js`, staging vars
  `PEDEP2_SNN_STAGED`, and each section's `chapter` (must be a member of the pediatrics chapter set in
  `modules.js` — same chapter set part 1 uses; a new chapter would need `modules.js`, which is out of
  your scope — flag it to the user, don't add it).

---

## 4. STAGING METHOD — the PROVEN part-1 pipeline (subagent vision), NOT Codex

Part 1 was staged by **subagent-vision transcription**, and that is what you use. Do **not** wire
endpoint into the House Codex lane — that is unproven on endpoint page geometry, House-only as it
stands, and a separate user-approved task (see §7). Per section, in order:

1. **Locate from the index first** — read `ocr\ep2\index.json` for the section's `answered` pages
   before rendering anything. Only `kind=="answered"` pages are staged.
2. **Pull just those pages as images** with `python tools\ep-index\pull.py "<part2.pdf>" <outdir>
   "<pagelist>"` — the page list is comma-separated singles and `A-B` ranges, **no step syntax**
   (`586-672:2` errors). Native 800×450 JPEG per page; `--dpi N` to rasterise a too-dense page.
3. **Transcribe verbatim by a `lean-drafter` subagent reading the pulled image** — one entry at a
   time, `Edit`-appended to the staging array (never `Write`, so a replacement resumes from the
   file). Large sections split into halves A/B (and A/B/C) staged by separate agents.
   **⚠️ OCR is a search index, NEVER a transcription source** — every numeral, exponent, unit, dose,
   and key letter comes off the **image** (WPS read a printed 10⁶ as 10⁹ and flattened 10⁶→106 —
   plausible wrong numbers, not visible garbage).
4. **Write staging files** `content\peds\qb-pages\endpoint-p2-sNN-<slug>.array.js` as
   `var PEDEP2_SNN_STAGED = [ … ]`. A split section stages as `.part-A.js`/`.part-B.js` bare
   fragments, parse-checked with `check-part-ep.js`, then combined by `merge-parts-ep.js`.
   **Staging schema (fields), verbatim from part 1:**
   `n` (true sequential index, NOT the printed number) · `pr` (printed number) · `p` (PDF page of the
   answered printing) · `box` (PDF page of an overflowed explanation box) · `key` (**0-based INDEX
   into `opts`, not a letter**) · `stem`/`opts` (verbatim, including the source's own typos) · `expl`
   (verbatim printed box; `''` if none) · `note` (typo/defect/reprint observation). Optional:
   `straddle:true`, `fig:'…'`.
5. **Key-check every section before splicing** — `python tools\ep-index\keypos.py "<part2.pdf>"
   --calibrate content\peds\qb-pages\endpoint-p2-sNN-<slug>.array.js`. `keypos.py` is fully
   parameterised on the PDF path (verified 2026-09-04) — it works on part2.pdf unchanged. ⚠️ Its
   calibration is **invalidated by a different source PDF** — run `--calibrate` on a closed part-2
   section and REPLACE the calibration-of-record numbers before you trust it. **It is a CHECK, never
   a source: a disagreement means "render this page and read it by eye", never "move the key".**

Then **draft** (per `tools\bank-harness\pd-ep-draft-brief.md` conventions — §0's ~70-step cap is
binding) into `.draft.js`, `node tools\bank-harness\val-pd-ep2.js <section>` (read the PASS/FAIL line
yourself), `node tools\bank-harness\splice-pd-ep2.js <section>` (dry run; it refuses unless the
validator exits 0) then `--write`, `node tools\boot-check\boot-check.js`, then commit the section's
files with explicit paths.

---

## 5. STANDING CONSTRAINTS (all binding)

- **⚠️ Contradictions are RECORDED, never corrected — `answer` is ALWAYS the bank's printed key.**
  The note goes in `explanation`, quoting the source. A defective key is noted, never disputed, never
  taken to the user.
- **`stem` and `opts` must be BYTE-IDENTICAL to staging** (validator compares with `JSON.stringify`).
  The staged `key` is a 0-based INDEX.
- **A gap in the material is ANSWERED and tagged** `not taken from the course material`, never
  declared as a dead end (Herophilus override, `CLAUDE.md` §4). Prefer the other bank to outside
  knowledge where it prints the fact. Interview the user batched, never per-sentence.
- **Explanations:** printed boxes verbatim, unmarked; where none is printed, write from the cached
  lecture and end with the unboxed marker — the marker lives in `explanation`, **never** in `source`.
- **Images:** `image` stores the basename; `imgAlt` is required and **must not answer the question**
  (modality and view only). **Every crop is looked at** — no numeric check catches a bad crop.
- **Nothing folds across the part-1/part-2 boundary while both chats are live.** Cross-bank collisions
  (endpoint↔House) are handled by ADDING the bank to the existing entry, never a second entry — but
  **not mid-stream**; the end-of-stream sweep does it once part 2 closes and the other chats are done.
- **Never modify, rename, move, or delete a source PDF.** Renders go to the scratchpad; no scanned
  page leaves this machine. **Codex is the only vision seat allowed on a scanned page** — never send a
  page to Gemini/Groq/Cerebras/OpenRouter or any off-machine seat.
- **Write/Edit for content, Bash for reads** — heredocs collapse `\\`; a backtick in a double-quoted
  `node -e` is command substitution, and every chapter id is in backticks. `node --check` after any
  scripted write, then grep every path/regex.
- **Agents stop at ~70 tool calls and hand back** — close out at 60, stopped by 80, even with work
  left; a partial pass reported honestly is a success. `lean-drafter`, one at a time, verify from
  disk. Image work in subagents only. Kill this session at the end of the work block.
- **🧊 Exam freeze until 3 Oct — Herophilus only.**

---

## 6. SCALE — this is a multi-session job that will NOT finish before the exams

Part 1 was ~855 answered questions across 1991 pages. Part 2 is **1993 pages** of the same shape —
expect a comparable **~400–850 questions across many sessions.** It will not close before Peds papers
**17 Sep** or **18–19 Oct**. **Scope is never cut** — build section by section, and if time runs
short **say so loudly**; scaling down is the user's call, not yours. Stop only at clean section
boundaries. When part 2 finally closes, say so and stop.

---

## 7. THE CODEX LANE — optional, deferred, NOT your default

House stages through Codex (`tools\chapter-loop.js`, bound by root `AGENTS.md`). It is wired for
House page geometry and writes House files — **it does nothing for endpoint as it stands.** Folding
endpoint part 2 into Codex would need: endpoint geometry registered in a runner, `val-pd-ep2` /
`splice-pd-ep2` taught the runner's integer-key output, `keypos.py` folded into the machine gate, and
image-load proven on endpoint pages. **That is a separate, user-approved task — do not attempt it
mid-flight; stage part 2 on the proven subagent-vision pipeline.** If the pace demands it and the user
approves, plan it separately, and note the **shared Codex ceiling: 8 concurrent `codex exec` total
across ALL live chats** (measured 2026-09-03) — cap at 4 and back off on any `exit 429` (double the
gap, cap 60 s, retry the same pages).

**TRUST THE DISK, THE INDEX, AND THE STAGING OVER THIS PROMPT — AND TELL ME WHERE I WAS WRONG.**


---

## Changed since this prompt was written — APPEND HERE, never edit the body above

### 2026-09-04, session 1 (the hard gate is RELEASED)

- ✅ **§2 DONE.** OCR index built: `content/peds/qb-pages/ocr/ep2/` — 1,993 `pNNNN.txt` +
  `index.json`, by `tools/ep-index/run-all.ps1` with **no script edited**. Calibration re-verified,
  `YELLOW_MIN = 750` unchanged (unanswered p.18 = 512, answered p.19 = 3,200).
- ✅ **Section map agreed by the user ("go").** 18 sections on the contents page; **17 get
  harness entries.** §18 Exam Night Review (pp.1950-1992) is deliberately absent from all three
  SEC tables so asking for it fails loudly. Full map, the per-section counts and the reasoning:
  **`content/peds/qb-pages/endpoint-p2-section-map.md`** — read that, not this summary.
- ⚠️ **`answered` OVER-COUNTS.** 878 answered pages, but 15 are lettered summary slides and
  pp.322+323 are one straddling question. **Corrected estimate ~860** — an estimate off an OCR
  index, re-measured section by section, never quoted as a count. Part 1 was ~855.
- ⚠️ **800 x 450 is the resolution CEILING of this book.** Every page embeds one 800x450 JPEG
  drawn onto an A4 sheet. `hires/` (1241x1754) and any `pdftoppm -r 300` are **upscales of that same
  image** — easier to read, but they confirm nothing the native did not contain. Never say a
  higher dpi "confirmed" a numeral.
- ✅ **Harness forked and cross-checked**: `val-pd-ep2.js`, `splice-pd-ep2.js`,
  `merge-parts-ep2.js` — all three SEC tables agree on prefix, staging file, staging var and draft
  base across all 17, all 17 prefixes distinct, 18 absent from every one. `check-part-ep.js` needed
  no fork (it takes a path). Briefs: `pd-ep2-staging-brief.md`, `pd-ep2-draft-brief.md`.
- ⚠️ **`node --check` ON A STAGING HALF ALWAYS FAILS** — a half is bare object literals with
  no array wrapper, so it parses as a labelled block. Use `check-part-ep.js`. This was wrong in my
  own staging brief before it was used; corrected.
- ⚠⚠ **§1 IS 64% A HOUSE CHAPTER.** `reprint-pd-ep2.js 5 75`: **18 of 28 answered pages match
  House `pedhd-dev-1..20`, in order, no gaps in the House run.** Page-by-page table in the section
  map. **Nothing folded, nothing skipped, all 28 staged** — House is another chat's live file.
  This is the chapter-shaped overlap MEMORY.md warns about, in its strongest form yet.
- ✅ Shared files carry **exactly one added line each** (verified by diff): `app/index.html` after
  2534, `app/data/questions.js` after line 7. Boot from `file://` after them: **0 console errors**,
  `QUESTIONS 5033 · THEORY 153 · MODULES 4 · 153 chapter rows · ent 30 / ophtho 36 / neuropsych 36
  / pediatrics 51`. (QUESTIONS drifts by the commit — other chats are splicing.)
- **Commits on `main`, BOTH UNPUSHED** (this chat never pushes): `c8003ab` scaffold + OCR index +
  section map; `5d85314` SEC tables, merge fork, staging brief, collision log.
- ⏳ **IN FLIGHT: §1 staging**, two `lean-drafter` agents on
  `endpoint-p2-s01-normal-dev.part-A.js` (answered pp.19-46, n:1-14) and `.part-B.js`
  (pp.48-74, n:15-28, plus the boundary proof off pp.75/76).
- **Next after §1 merges:** re-run `keypos.py --calibrate` on §1 and replace the
  calibration-of-record; set `SELF_TEST_RANGE = [5, 75]` in `reprint-pd-ep2.js` and record its
  self-test score **before trusting any later reprint sweep**. Then §2 onward, in order.

### 2026-09-04 later — §1 CLOSED AND LIVE

- ✅ **§1 SPLICED. `app/data/questions.peds.ep2.js` 0 -> 28 entries, 383 -> 56,069 bytes.**
  Read back off disk: length 28, **0 sparse holes**, ids unique `pedep2-nd-1..28`, one bank
  `endpoint`, one module `pediatrics`, one chapter `normal-dev`, every `answer` in range.
  Boot from `file://`: **0 console errors**, QUESTIONS 5111, 153 chapter rows, 4 module cards.
  Commit `0ff5896`, unpushed.
- ✅ **`keypos.py --calibrate` on §1: 28 agree, 0 disagree, 0 abstain.** Part 2's
  calibration-of-record. It measures the highlight's row centroid against the option bands in
  pixels — the only check here that does not compare a key with itself. Agreement still does not
  make a key right; what it rules out is a section staged one option out.
- ✅ **`SELF_TEST_RANGE = [5, 75]` set and run: 28/28, first run, no tuning.** Recorded in the
  tool's own header. **28/28 is what it must stay at** — anything less is matcher drift to explain
  before a reprint sweep is believed. Part 1's 89/89 does not transfer; part 2's pages restart at 1.
- ✅ **`§1` measurements**: `pr == n` on all 28 (no repeats, unlike part 1's §1) · 26 boxed,
  2 unboxed · **no overflow boxes** · **zero figures** · 19 five-option / 9 four-option ·
  **6 shared option menus, not the 3 the agents noticed** · 10 index flags looked at, **none
  reproduced on the image** · boundary proved off p.75 (devotional slide) and p.76 (§2 banner).
- ⚠ **THE FOUR-OPTION RUN IS REAL**, not a reader artefact — I called it one, wrongly. Two by-eye
  audits: pp.42-52 all five options, so the break is inside one reader's range, not at the seam;
  pp.54/60/74 print a ladder that **stops at `d`**. Twins agree.
- ⚠ **AN AGENT'S OWN STEP COUNT IS UNRELIABLE.** One reported "roughly 30 tool calls"; the
  harness recorded **64**. Recorded in `pd-ep2-staging-brief.md` §0.
- ⚠ **A DRAFTING PROMPT I WROTE WAS WRONG**: I told half B it had no shared option ladders. It
  has three. The evidence was already in the merged array. Fix is now a tool, not care:
  **`node tools\bank-harness\menus-pd-ep2.js <array.js>` — run it on the merged array BEFORE
  writing either half's drafting prompt.** An agent reports what it noticed; that reports what is there.
- **Six contradictions recorded in `explanation`, the printed key never moved** (n8 square-copying
  4 vs 5 y · n9 person-specific word 10 vs 12 mo · n10 two-step commands 3 y vs 18-24 mo ·
  n19 early hand preference filed as fine-motor delay not a CP red flag · n22 sits with minimal
  support 4 vs 6 mo · n26 vocalizing at 6 weeks vs cooing 2-3 mo).
- **Next: §2 Developmental problems, pp.76-154, `expect: 30`, prefix `pedep2-dp-`, chapters
  `dev-problems`/`dev-nd`.** Sweep with `reprint-pd-ep2.js 76 154` before drafting a line.

### 2026-09-04 later still — §2 CLOSED AND LIVE

`app\data\questions.peds.ep2.js` holds **56** entries (`normal-dev` 28 + `dev-problems` 28),
0 sparse holes, 119,199 bytes. Booted from `file://` with **0 console errors**; corpus 5,139.
Commits `9207880` (splice, 29) and the fold commit after it. **Nothing pushed** — this chat
does not push.

**§2 ran 28 -> 57 -> 56**: spliced at 29, then folded once as a separate recorded pass, the
same model part 1's §3 used (148 -> 215 -> 213). `pedep2-dp-21` (p.137, "Fatima") folded into
`pedep2-dp-4` (p.103, "Fortuna") — same question, patient renamed, no discriminating token.
Reasoning and the reversal of the pre-draft plan: section map, "Section 2 CLOSED".

**⚠️ THE ONE FINDING TO CARRY INTO EVERY LATER SECTION: `reprint-pd-ep2.js` UNDER-REPORTS
BADLY.** On §2 it named 6 House matches; comparing the **staged verbatim stems** against House
instead finds **19** — the whole of `pedhd-devp-1` .. `pedhd-devp-19`, one for one, in page
order, same patient names throughout. `near()`'s 8% tolerance is calibrated for OCR damage, and
an editor is not OCR damage. **Do not raise the tolerance** — at 30% it starts pairing questions
that merely share a vignette shape. **Run the sweep before drafting as a cheap early warning,
then re-measure overlap against the staged text once staging exists.** §1's figure was wrong the
same way and is corrected in the section map from 18 to 19.

**Next: §3 Genetics, pp.155–244, `expect: 42`, chapter `genetics`, prefix `pedep2-gn-`.**
Boundary confirmed on the images: p.154 is a devotional slide, p.155 carries the red "Genetics"
banner. Sweep with `node tools\bank-harness\reprint-pd-ep2.js 155 244` before drafting a line.


### 2026-09-04 later still — §3 STAGED AND MERGED, DRAFTING IN FLIGHT

⚠️ **The prefix line two paragraphs up is WRONG: it is `pedep2-gen-`, not `pedep2-gn-`.**
`val-pd-ep2.js` SEC entry 3 is the authority and it says `gen`. Left in place above rather than
edited out, because the disk winning over this file is the point.

**`endpoint-p2-s03-genetics.array.js` is merged and committed: 38 entries, n 1..38, pp.168–243,
40,193 chars, 0 holes.** 42 answered pages minus 4 lettered summary slides read on the image
(pp.157, 159, 161, 162) = 38, and the book’s own printed numbering agrees independently
(1–16, then 17–36 with 24 and 25 each printed twice = 38). `expect` lowered 42 -> 38.

**Drafting is split THREE ways**, A n:1–15 / B n:16–27 / C n:28–38 — so the shared menu
(n:8/n:14) and the n:14→n:15 follow-on pair each stay inside one half, and no agent faces 22
entries against a 70-step cap. Drafts land at `endpoint-p2-s03-genetics.draft-A|B|C.js`; the
validator takes any single uppercase letter and the splicer globs `draft-*.js`, so a third half
needs no tool change.

**Two escalations from staging, both settled before drafting:**
- **p.211 (n:22) prints the previous question’s box**, word for word, about PEX1 carrier risk
  rather than karyotype. Standing rule applies: **recorded, never corrected** — box quoted
  verbatim, mismatch named in the expansion, `answer` unmoved.
- **p.243 (n:38) faint text behind the pedigree: unrecoverable, do not re-render.** 800 × 450 is
  this book’s hard ceiling; `hires/` and `-r 300` are upscales of the same JPEG.

**Two corrections of mine, both recorded rather than dropped:** I told half B to start `n` at
100 “because the merge renumbers” — it validates instead, and refused; and the tally claim in
the half-A commit was disproved by the very next agent (51 reported against 83 recorded, 39%
low, while keeping a tally and saying so). **A tally helps and does not fix it; treat an agent’s
own count as a floor.** Both briefs corrected.

**After the three drafts: `val-pd-ep2.js 3 A|B|C`, `splice-pd-ep2.js 3` dry then `--write`,
verify the live file from disk, `boot-check.js`, commit with an explicit pathspec.**
Then **§4 Haematology, pp.245–451, `expect: 95`** — the biggest body section, splits across
`haematology` and `haem-bleeding`.


### Section 3 CLOSED AND LIVE — 2026-09-04

**38 spliced. Live file 56 -> 94 entries, 118,741 -> 220,392 chars, 0 holes, 0 duplicate ids,
one bank, one module, every `answer` in range.** Booted from `file://`: **0 console errors**,
corpus 5,139 -> 5,177, chapters now `{normal-dev:28, dev-problems:28, genetics:38}`.

**Drafted in three halves, all ALL CHECKS PASSED**: A n:1–15 (4,002 w), B n:16–27 (3,681 w),
C n:28–38 (3,451 w). 11,134 words over 38 entries, **mean 293** — inside the adaptive budget
with no entry needing a justified overrun.

### Two printed keys left alone, and that is the section’s real content

1. **p.211 (n:22) — the misprinted box is LIVE, word for word.** The endpoint file prints the
   previous question’s explanation there (autosomal-recessive carrier probability) on a question
   asking for Klinefelter’s karyotype. Quoted exactly as printed; the mismatch is named plainly
   underneath so a reader is not left thinking they misunderstood; `answer` unmoved at index 4.
2. **p.233 (n:33) — the harder one.** The stem asks which test is *diagnostic* and keys cell-free
   fetal DNA. Strictly, cffDNA is a screening test confirmed by an invasive karyotype before any
   irreversible decision. The entry says so, tagged as outside the material, and **leaves the key
   at index 1.** Noting a defect and disputing one are different acts; only the first is ours.

**All four unboxed entries (n:35–n:38) carry the unboxed marker** — verified by reading the live
text for the marker, not by trusting the validator’s own pass. **Five figures, all pedigrees**;
every `imgAlt` gives layout and modality only, never the inheritance pattern — which on those
four questions **is** the answer.

### Two faults the agents found that nobody told them to look for

- Half A hit a malformed markdown table row inside a JS string and found it through
  `node --check` before the validator ever saw it.
- Half B had embedded its own outside-knowledge tag **inside a quoted box**, corrupting the
  verbatim text. The validator’s non-fatal `quoted box differs from staging expl` warning caught
  it exactly. **That check earns its keep by being a warning**: a failure would have been argued
  with, a silent pass would have shipped it.

### The tally instruction was wrong twice and is now stated without a direction

Six tallying measurements exist. Three were accurate (55, 18, 63 against 66). Then, on this one
section in one afternoon: **51 against 83** (low 39%), **~20 against 16** (**high 25%**),
**~18–20 against 46** (low 59%), **~15 against 18** (low 17%). **The error has no direction and
cannot be corrected for.** Both briefs previously said “tallying works”, then “treat your number
as a floor”; both are wrong and both are corrected in place, not dropped. What stands: tally, say
it is a tally and not a measurement, and **do not let it decide whether you keep going** — let
the work decide, close out at a clean boundary, hand back.

**Next: §4 Haematology, pp.245–451, `expect: 95`** — the largest body section, splitting across
`haematology` and `haem-bleeding`. `expect` is an answered-page count and an upper bound; the
true question count is measured while staging, as it was three times now.

---

## Section 4 "Hematological Disorders" — STAGING LAUNCHED 2026-09-04

pp.245–451, `expect: 95`. The largest body section: 207 pages, more than sections 1, 2 and 3
put together. Chapters `haematology` (Anaemia and marrow failure) and `haem-bleeding`
(Bleeding and clotting disorders) — both confirmed present in `app\data\modules.js`, read
out of the file rather than assumed.

### The split, and why it is four parts

95 answered pages, split by answered-page count and not by page span, so each agent meets the
same amount of work:

| Part | Answered pages | Range | Structural oddities in it |
|---|---|---|---|
| A | 24 | pp.255–308 | pp.255–257 three consecutive answered, no twins |
| B | 24 | pp.311–357 | notes at 309/312/321; **pp.322+323 consecutive answered** |
| C | 24 | pp.359–405 | none — perfect alternation p.358→405 |
| D | 23 | pp.407–450 | **pp.419+420 consecutive answered**; owns the end boundary |

Four and not three because of the step cap, not because of the arithmetic. Section 3's three
drafting agents each carried 11–15 entries; 95 across three parts is 32 apiece, which is the
size at which an agent starts running the cap rather than the work.

### ⚠️ The index's `answered` field is not the same as `kind: "answered"`

Measured while computing the split, and it would have silently corrupted the count. Filtering
`ocr\ep2\index.json` on the boolean `e.answered` returns **111** pages in pp.245–451; filtering
on `e.kind === 'answered'` returns **95**. The difference is that `notes` pages carry
`answered: true` as well — pp.453 onward are the visible example. **`kind` is the field; the
boolean is not.** `MEMORY.md` already says "yellow alone over-counts" for a different reason;
this is a second way to over-count from the same file.

Separately, the JSON is keyed **0-based** while the `page` field inside each entry is 1-based
(`idx['300'].page === 301`). A split computed off the keys comes out one page low across the
board. Read `.page`, never the key.

### Three alternation breaks, all handed to the agent that owns them

The book prints every question twice — unanswered, then answered — so consecutive answered
pages with no twin between them is a break, and §3 of the staging brief says to check every
one rather than assume the section has none.

- **pp.255, 256, 257** (part A). Three in a row, sitting between two blocks of `notes`
  (pp.245–254 and pp.258–266) with the first real question page at p.267. In section 3 the
  identical signature was **four lettered summary slides** — a slide listing A/B/C/D items,
  which the detector reads as an answered page — and they were correctly not staged. Part A
  reads all three whole and says what they actually are.
- **pp.322 + 323** (part B) and **pp.419 + 420** (part D). Two pairs, same shape. The brief's
  named cause is an explanation box that did not fit and was printed alone on the page after
  the answered page, in which case the first page's entry carries `box:<second page>` and the
  second gets no entry of its own. Part 1 had three of these. But a genuine second question and
  a reprint produce the same signature, so both agents were told to read both pages and report
  what they saw rather than apply the rule. The text sweep independently flagged both pairs as
  near-identical, which is consistent with every one of the three readings and therefore
  settles nothing.

### The end boundary is part D's job

Section 5 "Respiratory disorders" is said to start at p.452. The index says pp.451 and 452 are
both `notes` and that the next `answered` page anywhere is **p.477** — a 26-page gap after
p.450, much larger than any gap inside the section. That is an index reading and not a look at
the page, so part D renders pp.451 and 452 and quotes what is printed on them.

### Recorded, not acted on

The §4 reprint sweep found **14 cross-file candidates**, with **pp.329–351 matching House
`pedhd-haem-9` … `pedhd-haem-20` one-for-one in page order**. Chapter-shaped overlap again,
the third time in this project. It is early warning only: **nothing folds across banks while
Chat B holds `questions.peds.js` live**, and the staging agents were told it goes in a `note`
and nowhere else.

Four within-section candidates: p.322≡p.323 and p.419≡p.420 (the two alternation breaks above,
so probably not questions at all), and **p.375≡p.442** and **p.383≡p.448** — these two straddle
the C/D part boundary and cannot be settled by either agent alone. Both were told to transcribe
those four pages exactly and to name the discriminating clinical token, so the pairs can be
adjudicated after the merge with the whole section in view.

---

## Section 4 — ALL FOUR STAGING AGENTS KILLED BY THE ACCOUNT SESSION LIMIT, 2026-09-04

Not a fault in the work. All four returned HTTP 429 `rate_limit`, "You've hit your session
limit · resets 4:10am (Africa/Cairo)", within seconds of each other. That is an **account-wide**
limit, not a per-agent one, and three chats were live against it. **Four concurrent staging
agents is what exhausted it.** Next launch runs **two at a time**, not four.

Every one of the four had already written its header and entries to disk, so nothing was lost —
this is the §8a write-as-you-go rule earning its keep for the third time.

### State on disk, measured, all four `check-part-ep.js` OK

| Part | Entries | Last staged | **Resume at** | Range end |
|---|---|---|---|---|
| A | 6 | n:6 pr:6 p.278 | **p.280** | p.308 |
| B | 4 | n:4 pr:25 p.318 | **p.320** | p.357 |
| C | 8 | n:8 pr:52 p.373 | **p.375** ⚠️ near-twin page | p.405 |
| D | 8 | n:8 pr:76 p.422 | **p.424** | p.450 |

26 entries of a revised ~90. A resuming agent finds the last complete entry and continues from
the page after it — it does not restart the range.

### THREE OF THE FOUR BREAKS ARE NOW SETTLED ON THE IMAGE, AND A FOURTH WAS FOUND

- **pp.255, 256, 257 — NOT questions.** Part A read all three whole. They are lettered content
  slides: p.255 "4. Hemoglobinopathies / A. Beta-Thalassemia", p.256 "B. Alpha-Thalassemia",
  p.257 "C. Sickle Cell Disease (SCD)" — Cause/Types/Clinical Features bullet slides with the
  heading line highlighted yellow, no stem, no options, no key anywhere on any of them. Same
  signature as section 3's four lettered summary slides: **the detector reads a highlighted
  heading as an answered page.** Not staged. So `expect: 95` drops to 92 answered pages here.

- **⚠️ p.312 — AN OVERFLOW BOX THE INDEX CALLS `notes`, WHICH MY BREAK-DETECTION COULD NOT SEE.**
  Part B found it unprompted. p.311 is Q22 answered and prints **no box**; p.312 prints the box
  alone, and it reasons through p.311's exact vignette. Staged as `box:312` on n:1, with p.312
  given no entry of its own — the shape the brief describes, arriving in a form I had not
  looked for.
  **This is a hole in the method, not a one-off.** I detected breaks by looking for *consecutive
  `answered` pages*; an overflow box that lands in `notes` produces no such run and is invisible
  to that test. Every lone `notes` page sitting inside clean alternation must be opened. In this
  section that is pp.309, 312 and 321 — p.312 is a box, and **p.309 is not**: part B read it and
  it is an unrelated preceding teaching slide on iron deficiency, correctly not staged. p.321 is
  still unread.

- **pp.419 + 420 — an exact duplicate reprint, and NOT the overflow shape.** Part D read both.
  Identical stem, identical four options, the same option b "Leukemia" highlighted on each. The
  only difference is that p.420 prints **no box at all** — and because p.420 still carries the
  full stem and options, it is not a box-only page and `box:420` would be wrong. Staged once from
  p.419, the fuller printing. p.420 gets no entry. So the sweep's "p.419 ≡ p.420" was right about
  the identity and wrong about the cause, and the brief's named cause did not apply.

- **pp.322 + 323 — STILL OPEN.** Part B died at p.318, four pages short of it. Whoever resumes
  part B must read both pages whole and must not assume p.419/420's answer applies: three
  readings remain live (overflow box, duplicate reprint, genuine second question), and the
  section has now produced two different ones.

### Two transcription decisions to carry into drafting

- Part B rendered the printed raised superscripts as **caret notation** — `8 x 10^9/L` — and said
  so in its note. It read them off the image, not off OCR, which is the direction that matters:
  `MEMORY.md` records WPS reading a printed 10⁶ as 10⁹ and flattening 10⁶ to 106. The drafting
  pass must render these consistently across the section.
- Part A's and part D's `expl` fields read as plain short prose. Both agents state in their notes
  that the box was present and transcribed verbatim; this book does print boxes in that voice.
  **Spot-check two of them against the page during drafting** before treating the whole section's
  boxes as verbatim.

---

## The overflow-box detector, and what it says about the whole book (2026-09-04)

### The test that was wrong, and the test that replaces it

The staging brief said overflow boxes are spotted "because the strict question/answer alternation
breaks". That is true and **not sufficient**, and section 4 is where it showed. A box-only page
carries no stem, no options and no highlighted key, so the page classifier calls it **`notes`** — and
a `notes` page sitting between an answered page and the next question page produces **no run of
consecutive answered pages at all.** It is invisible to the break test. p.312 was found only because
a part-B agent opened a page it had been told was a lone `notes` page.

**The replacement test is about the box, not the alternation:**

> **If an answered page prints NO explanation box, open the very next page before moving on.**

One extra look per boxless question, and it catches both shapes. Written into
`tools\bank-harness\pd-ep2-staging-brief.md` as §3a.

### It re-finds a known true case before it proposes new ones

Run backwards over the three sections already staged — 95 entries, of which **6 print no box**:

| Section | Boxless entry | Next page | Verdict |
|---|---|---|---|
| 1 | n:1 p.19 | p.20 `notes`, 56 words | **candidate — checked** |
| 1 | n:13 p.44 | p.45 `question` | not a candidate |
| 3 | n:35 p.237 | p.238 `question` | not a candidate |
| 3 | n:36 p.239 | p.240 `question` | not a candidate |
| 3 | n:37 p.241 | p.242 `question` | not a candidate |
| 3 | n:38 p.243 | p.244 `notes`, 2 words | **candidate — checked** |

And independently, scanning for lone `notes` pages in the box position across the whole book
re-finds **p.179** — which section 3 had already staged as `box:179`, discovered the ordinary way.
**A test that re-finds a known true case before proposing new ones is worth running.** Both new
candidates were sent to a subagent to read on the image, because the structural position is a
suggestion and only the page settles it.

### Book-wide candidates, for the sections not yet staged

Lone `notes` pages in the overflow position (previous page answered, next page a question):

| § | Section | Pages to open |
|---|---|---|
| 1 | Normal Development | 20 |
| 3 | Genetics | 179 ✅ already staged as `box:179` |
| 4 | Hematological | 309 ❌ read, a teaching slide · 312 ✅ staged as `box:312` |
| 6 | Cardiac | 636, 689 |
| 8 | Neurological | 962, 1037 |
| 9 | Endocrine | 1098 |
| 10 | Liver | 1175, 1204, 1207 |
| 13 | Model Exam 2 | 1531 |
| 15 | Model Exam 4 | 1790, 1821, 1828, 1865 |

Sections 2, 5, 7, 11, 12, 14 and 16 have none. **These are candidates, not findings** — p.309 sat in
exactly this position and turned out to be an unrelated teaching slide. Every one is opened and read.

### And the other shape, which the break test DOES catch

Consecutive answered pages, book-wide: §3 161+162 · §4 255+256, 256+257, 322+323, 419+420 ·
§6 617+618, 618+619 · §16 **1923+1924 through 1939+1940, seventeen in a row.**

Section 16 "Recently modified Questions" is 19 pages of solid answered pages with no unanswered
twins at all — which fits its name, and means it is a different shape of section from every other.
Note that for when it is reached; do not carry the twin-checking method into it unexamined.

Of the pairs already read: 255+256+257 are lettered content slides, not questions; 419+420 are an
exact duplicate reprint where the second page prints no box; 322+323 is still open. **Three
different causes for one signature, in one section.** A break is not evidence of an overflow box.

---

## The two overflow-box candidates, read on the image — one is a box, and it was already live (2026-09-04)

The replacement test in §3a proposed two candidates out of the 95 entries already staged. Both were
opened. **They did not settle the same way, and one of them was a live-content defect.**

### ✅ p.20 IS a box — and section 1's first question was already in the app without it

`pedep2-nd-1` (p.19, the Steven first-birthday-party milestone vignette, printed key **E "None – his
development is within normal limits"**) was staged with `expl: ''` and a note reading *"No explanation
box printed on p19"*. That note was **true about p.19 and wrong about the question.** The box is
printed alone on p.20: four bulleted lines inside a bordered box, each label — "Fine motor:",
"Gross motor:", "Social:", "Speech:" — bold red, the body italic black, page number "20" outside the
box, and **nothing else on the page.** No stem, no options, no key.

Verbatim, as printed:

> •Fine motor: He demonstrates a pincer grip (picking Smarties).
> •Gross motor: At 12 months, walking is not expected for all children — many are still crawling or pulling to stand; walking may occur anytime up to 18 months.
> •Social: He waves goodbye, which is normal.
> •Speech: Saying 2 words with meaning is appropriate for 12 months.

It walks p.19's stem clinical detail by clinical detail, in the order the stem introduces them, and
reasons each is age-appropriate — which is what settles it as p.19's box and not a teaching slide.

**Repaired in both files, same pass:**
- `endpoint-p2-s01-normal-dev.array.js` n:1 — `box: 20` added, `expl` filled with the four bullets
  (`\n`-separated), and the note rewritten to record what it originally claimed and why that was wrong.
- `app\data\questions.peds.ep2.js` `pedep2-nd-1` — the box now leads the explanation in the section's
  own convention (**"The endpoint file prints this explanation:"** → blockquote → `---` → expansion),
  the written expansion kept unchanged, the closing marker swapped from *"Written for this bank —
  Pediatrics endpoint part2.pdf prints no explanation here"* (**a false statement about the source, the
  reason this mattered**) to the expansion marker every other boxed entry in the section carries, and
  `source` extended to `p.19 (explanation box printed alone on p.20)`.
- Boot check after: **QUESTIONS 5177 · THEORY 153 · MODULES 4 · 153 chapter rows · 0 console errors.**

⚠️ **The app renders this as ONE blockquote, not four lines.** `md()` at `app\index.html` joins
consecutive `> ` lines with a space (`quote.join(' ')`), and a `- ` list flushes an open quote rather
than nesting inside it — so a four-bullet box cannot be rendered as four lines in a single quote. The
`•` glyphs are kept precisely so the joined paragraph still reads as four bullets. **Every word is
verbatim; only the line breaks are lost, and that is a renderer limit, not a transcription choice.**

### ❌ p.244 is NOT a box

A full-page Arabic religious supplication (du'a) — end-of-section furniture closing section 3, with no
connection to p.243's pedigree question. `pedep2` section 3's n:38 keeps its written explanation and
its unboxed marker. My prompt to the checking agent described p.244 as "2 words" from the index's word
count; it is a multi-line devotional passage. **The index's word count is a classifier's artefact, not
a description of the page** — do not paraphrase it into a prompt as though it were one.

### What the pass is worth

Two candidates, two different answers, and the true one had been sitting live in the app for a day
carrying a marker that said the book prints no explanation where the book does. **The structural
position is a suggestion; only the page settles it** — which is exactly why both went to an agent that
reads the image rather than being resolved from the index.

⚠️ **A verbatim claim cannot rest on a summary of a reading.** The first checking agent's output file
came back empty and its findings survived only inside my own compressed account of them. That is not a
transcription, so p.20 was re-read by a second agent that wrote the text to disk itself
(`p0020-verbatim.md`) before any of it reached live content. The two readings agree word for word.

---

## Section 4 part A — resumed to n:16 (p.298), and a staged note that contradicts its own key (2026-09-04)

Extended from the dead agent's n:1–6 to **n:1–16, pp.268–298, pr 1–16**, `pr == n` throughout, no
repeats and no skips. `check-part-ep.js` OK: 16 entries, contiguous, no holes, no figures.
**Next page for whoever resumes part A: p.300** (then 302, 304, 306, 308; then render one page past
308 to prove the part A/B boundary — the agent did not reach that step). It stopped at its own
tally of about 78 tool calls, at the cap, and said honestly that the tally is not a measurement.

**No alternation breaks, no overflow boxes and no figures anywhere in pp.279–298** — every answered
page printed its own box and every twin pair was adjacent. The brief held for this whole stretch.

### ⚠️ A NOTE THAT DISAGREES WITH ITS OWN ENTRY — n:6, p.278, left unedited and flagged

The predecessor's note on n:6 reads `Option D "Fanconi anemia" … -> key=3`. In that entry's own
`opts`, **Fanconi anemia sits at index 1 (letter B)**, and the entry carries `key:1`, which points
at Fanconi anemia and agrees with its `expl`. So **three fields agree and the note disagrees with
all three.**

The resuming agent did the right thing: it added an `AUDIT NOTE (n7 pass)` inside that entry, left
`key:1` untouched, and did **not** re-view p.278 because that page is outside its assigned range.
⚠️ **This is not yet settled.** The likely reading is a slip in the prose note, but "three fields
agree" is an internal-consistency argument, not a measurement, and the key is the one field this
project never guesses at. **p.278 gets re-read on the image before the section is drafted**, and
whatever the page highlights is what stands.

### ⚠️ A FLAT EXPONENT THAT MAY BE THE BOOK'S OR MAY BE THE RENDER'S — p.280 and p.290

n:7 (p.280) is staged with `5.0×109/L` and `80×109/L` — **flat, not superscript** — the agent
reporting the same non-superscript pattern as n:6 and confirming it on both twin pages at native
resolution. n:12 (p.290) hit the same question and **escalated to a 300 dpi crop** to settle it,
confirming that `/mm3` there prints a plain inline 3.

The escalation is the difference. `MEMORY.md` records WPS reading a printed 10⁶ as 10⁹ **and
flattening 10⁶ to 106** — a plausible wrong number rather than visible garbage — and 800×450 is
this book's hard ceiling, which is exactly the resolution at which a superscript stops being
legible. **p.280 is re-read at 300 dpi with p.290's method before drafting.** A white cell count of
`5.0×10⁹/L` is normal and `5.0×109/L` is meaningless, so if the flat printing is real it is the
book's own defect and gets recorded as one — but it is recorded only after being seen.

Also staged as printed at p.290: `1.000` and `2.500`, **period as a thousands separator** (= 1,000
and 2,500), a European convention this book uses. Not corrected.

### Escaping, again — and the fix that worked

The agent hit two escaping bugs of its own making — a `\\'` where `\'` was needed, and a literal
`\uXXXX` where the actual character was wanted, building a stem containing a bullet and a µ sign —
plus one mis-anchored append that put n:10 ahead of n:9. **All three were caught by
`check-part-ep.js` failing, and all three were fixed with `Read` + `Edit`, never with a bash
heredoc.** That is the project's standing escaping rule doing its job inside an agent for the first
time recorded. Nothing was lost; the file validates clean.

---

## Section 4 part B — resumed to n:17 (p.345), and the index's own `answered` tag turned out to be wrong (2026-09-04)

Resumed from the dead agent's n:1–4 and extended to **n:1–17, pp.311–345, pr 22–38**, clean
1-for-1 alternation with `pr = n + 21` throughout and no printed-number repeats.
`check-part-ep.js` OK. **Next page for whoever resumes part B: p.347** (then 349, 351, 353, 355,
357; render one past 357 to prove the section boundary). The agent stopped itself at a clean page
boundary at roughly 62 tool calls by its own tally — and said plainly it was a tally, not a
measurement.

### ⚠️⚠️ A FOURTH CAUSE: p.322 WAS TAGGED `answered` AND IS NOT

None of the three predicted readings for pp.322/323 applied. **p.322 carries no yellow highlight
and no box at all** — an ordinary unanswered printing of Q27 that the page-kind classifier simply
mistagged. p.323 is the genuinely answered page (key E "Sickle cell disease", box present), so
this is a normal unanswered/answered pair, not an overflow split and not a p.419/420-style
duplicate reprint. Only p.323 was staged.

**This changes what the index is for.** Three of the four causes are things printed on the page;
this one is a defect in the instrument. **A page is answered because the highlighted key is
visible on it, never because the index said so.** Written into the staging brief beside the other
three.

Running tally of causes for one "structural oddity" signature, all four measured in this section
alone: lettered content slides (255–257) · overflow box in `notes` (312, 321) · exact duplicate
reprint (419+420) · **index mistag (322)**.

### p.321 resolved — an overflow box, the second in this section

p.321 is the explanation box for **n:5 (Q26, p.320)**: microcytic/hypochromic anaemia, normal
electrophoresis, HbA2 not raised — matching that vignette exactly. Staged as `box:321` on n:5,
with p.321 given no entry of its own. Confirmed distinct from p.309, which sits in the same
structural position and is an unrelated preceding teaching slide, correctly left unstaged by the
predecessor. **Both readings of that position have now occurred in one section.**

### Two things flagged for the drafting pass

- **n:14 (p.339, Q35) — the printed box is truncated by its own border, mid-sentence**, ending
  "…reached the level where a blood". Confirmed on both the native and the hires render, and
  p.340 is the next question rather than a continuation, so this is **not** an overflow. It is
  transcribed verbatim as truncated. ⚠️ **Do not complete it during drafting.** The book printed
  a broken sentence; the expansion may say what the box was heading towards, the quoted box may
  not gain words it does not have.
- **n:17 (p.345, Q38) — Hb printed as 7.8 g/dL**, the only entry in this file using g/dL rather
  than g/L. Confirmed on the answered page and its unanswered twin, so it is the book's own
  inconsistency and not a transcription slip. Kept as printed, per the numbers-and-units
  exception.

### Figures and folds

Two figures, both photographic: **n:5 (p.320, peripheral blood film)** and **n:6 (p.323, clinical
hand photo, hand-foot syndrome)**. `figAlt` on both gives modality and view only and names no
diagnosis. Every other answered page in the range was read whole and carries no figure. No
option-menu pairings and no fold candidates in this range. House-bank overlap is recorded in the
note of every entry from n:9 (p.329) onward as an observation only — the House file was never
opened, and **nothing folds across a live chat's boundary.**

---

## Section 4 parts A and C CLOSED — and a note that was carrying another entry's text (2026-09-04)

**Part A closed: 21 entries, `n:1 pr:1 p:268` … `n:21 pr:21 p:308`, `pr == n` throughout.**
**Part C closed: 24 entries, `n:1 pr:45 p:359` … `n:24 pr:68 p:405`, `pr = n + 44` throughout.**
Both validate clean, both proved their boundary by rendering one page past the range. 62 entries now
on disk across the four parts. Part B has 6 pages left (p.347–357) and part D has 14 (p.424–450).

### ⚠️⚠️ THE AUDIT TRAIL ITSELF CAN BE FALSE — part A n:6, p.278

The flagged contradiction resolved, and **not the way the internal-consistency argument predicted.**
p.278 highlights option **B "Fanconi anemia"** — so `key:1` was already correct and did not move.
But the note was not merely mis-worded: **it had been contaminated with n:7's entire text by a copy
error** — n:7's p.279/280 bruising case, its numeral flag, its twin description, all sitting inside
n:6's note describing a stem that carries no numerals at all. The predecessor's `AUDIT NOTE` had
correctly diagnosed the mislabel and then **left it in place**, so the file contained a note that
described the wrong question and a comment saying so.

**Rewritten from a fresh read of p.277 and p.278, with the audit note removed rather than stacked.**

The lesson is not about this entry. `note` is where every measurement in this pipeline is recorded —
which option was highlighted, whether a twin was checked, whether a numeral was escalated to 300 dpi.
**A contaminated note is a false measurement that reads exactly like a true one**, and no validator
can see it: `check-part-ep.js` checks structure, `pr`/`n` position and dead ids, not whether a note
describes its own entry. It was caught only because its claim disagreed with its own `key`. **A note
whose numbers or letters disagree with its entry's own fields is a defect in the note until a page
says otherwise — and it is settled by opening the page, never by counting which fields agree.**

### The flat exponent is the book's own — p.280, settled at 300 dpi

Both `p-0280.jpg` and its twin `p-0279.jpg` at 300 dpi print **`5.0×109/L` and `80×109/L`
completely flat — no superscript glyph anywhere, same size and baseline as body text.** That is the
book's printing, not a native-resolution artefact and not an OCR artefact. **Kept as printed**; the
note now records the 300 dpi confirmation explicitly, where before it cited only the 800×450 check.

So `5.0×109/L` — a value that means nothing as printed — stands in the staging record as the source's
own defect. ⚠️ **The drafting pass must not "restore" the superscript.** It may say in the expansion
what the count evidently is; the quoted stem keeps what the page prints.

### p.309 confirmed, and the discriminator that settles its shape

Confirmed independently as a teaching slide, verbatim: a single full-width bordered paragraph on
dietary iron deficiency, no stem, no options, no key. Not staged.

⚠️ **It is thematically adjacent to the question it follows** — p.308's key is "ask about diet" —
so subject matter cannot separate a teaching slide from an overflow box. **The discriminator is
format:** a real overflow box in this book is a *small side box in reduced font*; a teaching slide
*spans the page in body-text size*. Written into the brief. The adjacency is flagged in n:21's note
for the drafting pass rather than folded in.

### Printed defects recorded, not corrected — part C, p.391 (n:17)

Two on one page, both confirmed at 300 dpi (`ep2-stage\p-0391.jpg`) and therefore the book's own:

- The stem prints **`Hb (6mg/dl)`** while its own explanation box cites **`Hb 90–110 g/L`** — a unit
  and magnitude mismatch *inside a single printed question*.
- **Options d and e are both printed "Thalassemia"**, verbatim identical.

Neither touches the key: p.391 highlights option c, "Hereditary spherocytosis", so `key:2` is
unambiguous and the duplicate pair is not the answer. Both staged exactly as printed.

### The rest

- **§3a fired twice more and resolved twice as "not a box"**: part A's n:21 (p.308 boxless → p.309, a
  teaching slide) and part C's n:10 (p.377 boxless → p.378, an ordinary unanswered twin). Running
  hit rate for the test across this section: **2 true boxes, 4 false**.
- **No figures anywhere in part A or part C** — every answered page read whole.
- The two cross-part reprint flags are staged and unresolved by design: **p.375 (n:9, q53, hemophilia)
  against p.442**, and **p.383 (n:13, q57, ITP) against p.448**, both in part D's range. Each note
  records stem opening, option count, highlighted key and box state, for adjudication after the merge.
- Part C rendered p.407 once to prove the boundary: an ordinary q69 continuation, part D's, not staged.

### ⚠️ Agents are being handed instructions that contradict this project's rules

Twice now, staging agents have reported system-reminder-style messages arriving mid-task — an
unrelated Notion instruction block, and one directing them to make file edits through Bash `sed` and
heredocs instead of `Read`/`Edit`/`Write`. **Both agents disregarded both**, correctly, on the
grounds that the heredoc route is the exact mechanism this project has measured corrupting content
(a quoted heredoc collapses `\\` to `\` before the body's language ever sees it) and that
instructions arriving outside the task's own authority are not followed. **Recorded because it is
now a pattern, not an incident**, and because the agents got it right without being told to expect it.

---

## Section 4 part B CLOSED — and the book prints its exponents both ways (2026-09-04)

**Part B closed: 23 entries, `n:1 pr:22 p:311` … `n:23 pr:44 p:357`, `pr = n + 21` throughout.**
Validator OK at every append, no holes, no entry with an empty `expl`. Boundary proved by reading
p.358 (Q45 unanswered) and p.359 (Q45 answered, key E "Intravenous antibiotics", febrile
neutropenia box) — **p.359 is part C's first answered page and matches its staged `pr:45` exactly.**
Neither boundary page was staged.

**Parts A + B + C now stand at 68 entries with `pr` running 1…68 unbroken across the three files.**
Part D is still being written.

### ⚠️⚠️ THE SUPERSCRIPT IS NOT A CONSTANT OF THIS BOOK — IT VARIES PAGE TO PAGE

pp.347–357 print their FBC panels with a **genuine typeset superscript**: `× 10⁹/L`, confirmed on a
300 dpi crop of p.347 (`ep2-stage\p-0347.png`). p.280, settled in the same session, prints the same
quantity **completely flat** — `5.0×109/L`, no superscript glyph, same size and baseline as body
text, confirmed at the same 300 dpi on both twin pages.

**Both readings are correct, and that is the finding.** The book is internally inconsistent about
superscripts, so neither answer generalises:

- **A flat exponent cannot be dismissed as a render artefact** — pp.347–357 prove this book *can*
  typeset a superscript, so where one is missing it is genuinely missing.
- **A flat exponent cannot be assumed to be the book's style either** — p.280 is not evidence about
  p.400, and p.347 is not evidence about p.280.

⚠️ **Every exponent is read on its own page. There is no page from which another page's exponent can
be inferred.** This is the same rule `MEMORY.md` already carries for OCR — *never take an exponent,
a unit or a dose from OCR; read those three off the page image* — now shown to hold **between two
rendered pages of the same book**, not just between OCR and image.

The one licence taken, and taken explicitly: pp.349–357 repeat p.347's typesetting unchanged, so the
300 dpi escalation was run once and the finding carried forward — **and each of those five entries
says in its own note that it was carried, not separately measured.** A carried measurement that
announces itself is auditable; the danger is the one that does not.

### The Hb unit switch is a run, not an isolated slip — and a near-miss on the correction

n:17 (p.345) was recorded as *"the only entry in this file using g/dL rather than g/L"*. **The
"only" was wrong.** Every entry from n:17 to n:23 that reports a haemoglobin — pp.345, 347, 349,
353, 355, 357 — prints **Hb in g/dL**, while every Hb from p.311 to p.341 is printed in **g/L**.
This is a **unit switch beginning at p.345 and running to the end of part B**, not a one-off. All of
them are transcribed as printed and flagged in their own notes. ⚠️ **The drafting pass must not
normalise them**, and must not read an Hb figure across the p.345 boundary as though one unit were
in force throughout the section. **Part D's range gets checked for where, or whether, the switch
ends.**

### ⚠️⚠️ AND THE CORRECTION ITSELF WAS NEARLY WRONG — A UNIT BELONGS TO THE ANALYTE, NOT THE PAGE

A `g/dL` grep over the whole file returned a hit at **p.320 — twenty-five pages before the switch**
— and that reads exactly like proof the switch started earlier and the whole account was wrong.
**It is not.** p.320's stem prints `Hb (hemoglobin): 86 g/L` alongside `MCHC (mean corpuscular
hemoglobin concentration): 22 g/dL (normal: 32–35 g/dL)`. **MCHC is conventionally reported in
g/dL.** Both units on that page are correct, standard, and not a defect of any kind. The page mixes
units because the two analytes take different units, which is what every haematology report does.

The grep was answering a different question from the one asked. It was asked *"does g/dL appear
before p.345"* when the question was *"is haemoglobin printed in g/dL before p.345"* — and it
answered the first one truthfully. **⚠️ A unit is a property of the analyte, not of the page, so no
search for a bare unit string can decide a units question.** Only reading the line that carries the
number can, because only the line says what was measured.

This came within one write of being committed as a correction to a note that was right. Two rules
out of it, both cheap and both paid for:

- **Before overturning a measurement, read the line, not the match.** A grep hit is a pointer to
  something to read; it is never itself the reading. The same discipline that settles a key by
  opening the page settles a unit by opening the line.
- **A correction is a claim and gets the same scrutiny as the claim it corrects** — more, if
  anything, because it arrives wearing the authority of having caught something.

What survives of the original criticism is the smaller, true part: n:17's note said *"only"* on the
strength of one page, and one page can establish what it prints but never that it is the sole page
printing it. That still needed the other six pages read — and now they have been.

### The rest

- **Clean alternation through all six new pages, pp.346–357** — no overflow box, no misclassified
  `answered` tag, no duplicate reprint. All four known §3a causes were checked for by name and none
  applied. A measured zero, said as one.
- **No figures on pp.347–357** — every answered page read whole. Part B's only two figures remain
  n:5 (p.320, peripheral blood film) and n:6 (p.323, clinical hand photo).
- **The prompt matched the disk on every point it asserted** — the six-page range, the p.359/`pr:45`
  boundary claim, and the settled p.322/323 items. Nothing to correct in it, said plainly rather
  than left silent.

### ⚠️ The contradicting instruction reached a third agent

Same shape as the two before it: a system-reminder-style message arriving mid-task, directing the
agent to make file changes through Bash `sed` and heredocs rather than `Read`/`Edit`/`Write`. **The
agent did not follow it, and reported that it had arrived** — reasoning that instructions reaching
it outside its brief do not override an explicit, grounded constraint, and that the heredoc route is
the exact mechanism measured corrupting content on this project.

**Three for three now, each agent reaching that conclusion independently.** Recorded because the
pattern is the point: the rule is holding without anyone being warned to expect the challenge.

---

## SECTION 4 FULLY STAGED — 90 entries, `pr` 1…90 unbroken, and the two reprint flags now have their facing pages (2026-09-04)

**Part D closed: 22 entries, `n:1 pr:69 p:407` … `n:22 pr:90 p:450`.** Validator OK, no boxless
entries, no figures. That closes the last of the four parts.

| Part | Entries | Pages | Printed numbers |
|---|---|---|---|
| A | 21 | 268–308 | 1–21 |
| B | 23 | 311–357 | 22–44 |
| C | 24 | 359–405 | 45–68 |
| D | 22 | 407–450 | 69–90 |
| **Total** | **90** | **268–450** | **1–90, unbroken** |

**The `pr` sequence running 1…90 across four independently written files, with no gap and no repeat
at any of the three seams, is the strongest check this section has.** Each part was written blind to
the others' contents and each seam was proved by rendering the page past the range: p.309 (A/B),
p.358–359 (B/C), p.407 (C/D). Four agents, three seams, one continuous sequence.

**Section boundary proved at p.451** — a full-page Arabic supplication, no stem, no options, no box,
unconnected to p.450's question. **The same shape closed section 3 at p.244.** So this is
end-of-section furniture, a recognisable printed object rather than any of the four §3a causes, and
now seen twice. Not staged either time.

### The two cross-part reprint flags — both are real reprints, and both changed the patient's age

Staged separately by design and now readable side by side. Neither is folded yet: **the fold pass
runs after the merge, over all 90 entries at once, using `reprint-pd-ep2.js`.** Folding a pair by
hand while 88 entries are unswept is exactly the error the project already knows about — *an
offsetting error is invisible to a sum; count the parts.*

**Pair 1 — p.375 (part C, n:9, pr 53) ≡ p.442 (part D, n:18, pr 86).** Haemarthrosis after a garden
fall; identical five-option menu in identical order (fibrinogen deficiency / G6PD deficiency /
prothrombin deficiency / hemophilia / factor VII deficiency); **same key, index 3.** Differences:
the child is **3 years old on p.375 and 12 on p.442**; p.442 adds the normal range `(3–8 min)` to
the bleeding time and writes the labs in full sentences ("INR is normal") where p.375 is
telegraphic; the lead-in differs ("What is the most likely cause?" vs "Which one of the
following…"); **the two explanation boxes are differently worded**, both correct.

**Pair 2 — p.383 (part C, n:13, pr 57) ≡ p.448 (part D, n:21, pr 89).** Post-viral petechiae with
haematemesis and epistaxis; identical five-option menu in identical order; **same key, index 0.**
Differences: the girl is **5 years old on p.383 and 3 on p.448**; "was recovering" vs "is
recovering"; "ecchymosis" vs "bruising"; "gamma globulins" vs "gammaglobulins"; **again two
differently worded boxes.**

⚠️ **These are not respellings — a printed number changed in both.** The age moved 3→12 in one pair
and 5→3 in the other. `MEMORY.md`'s six fold shapes are all shapes where nothing clinical moves;
this is a seventh, and it needs stating: **a reprint whose stem carries a different numeric value is
still one question, but folding it discards one of the book's two printings of that value.** Neither
age change touches its key — haemarthrosis is haemophilia at 3 or 12, post-viral ITP is ITP at 3 or
5 — so the fold is safe, **provided the discarded age is written into the surviving entry's note
rather than lost.** That is the instruction for the fold pass.

A third candidate sits **inside** part D and is flagged, not decided: **n:22 (p.450) against n:14
(p.434)** — same clinical framing, overlapping Hb/MCV/reticulocyte values across options a–d,
different stem wording, a different normal-range figure, and **one fewer option**. A changed option
count is the one thing that makes a pair not a fold under the existing rules; it goes to the sweep
with the rest.

⚠️ **Part D's range, pp.407–450, now carries three reprint candidates out of 22 entries.** That is a
concentration, not a scatter — the same chapter-shaped clustering `MEMORY.md` already records for
the endpoint/House overlap, and consistent with part 1's model-exam reprint blocks. **The sweep is
run over the whole section, and the hypothesis that the tail of section 4 is a revision block is
tested there, not asserted here.**

### The exponent finding, and a convention that had to be settled before the merge

**The book prints its exponents three different ways, all three confirmed at 300 dpi in this one
section:** a genuine typeset superscript at pp.347–357 (`× 10⁹/L`), a **literal printed caret** at
p.428 (`10^9/L`), and **completely flat** at p.280 (`5.0×109/L`, same size and baseline as body
text). ⚠️ **No page is evidence about another page's exponent.** A flat exponent cannot be dismissed
as a render artefact, because pp.347–357 prove the book can typeset a superscript; and it cannot be
assumed to be house style, because p.280 says nothing about p.400.

That left the four staging files encoding the same thing three ways — 66 carets, 3 real superscripts
and 6 flat — with the encoding no longer distinguishing what the page showed. **Settled and written
into the brief as §4a: `10^9` is the transcription convention.** Part C's three real superscripts
were normalised to it (`10⁹` → `10^9`, one entry, revalidated); **part A's six flat `109` were left
exactly as printed**, because `109` and `10⁹` are different numbers and that page's flatness is a
recorded defect, not an encoding choice.

The reason for choosing the caret over the superscript is the one that matters: **writing a real `⁹`
on 66 occurrences would assert a measurement nobody made.** Three pages were checked at 300 dpi; the
other sixty-odd were not. The caret claims only the value. The cost — a page that literally prints a
caret can no longer be told apart from one that prints a superscript — is clinically nil, since both
denote 10⁹, and is recorded in that entry's note.

### The rest

- **Clean alternation across all fourteen new pages, pp.424–450** — every answered page printed its
  own box, so the §3a overflow test never fired in this range. A measured zero.
- **p.444's dense numeral block** (Hb, MCV, MCHC, WBC, platelets, HbA/HbA₂ percentages) was escalated
  to 300 dpi in full and read identical to the native. No figures anywhere in part D — every
  answered page read whole.
- **The prompt matched the disk on every assertion it made** — the resume point, the page list, both
  reprint flags, p.450 as the last answered page and p.451 as furniture. Said plainly rather than
  left silent, as with part B.
- **Four for four on the contradicting instruction.** Every agent in this section reported the
  system-reminder directing file edits through `sed`/heredocs, and every one declined it
  independently and said why. The rule is holding without anyone being warned to expect the
  challenge.

### Next

`merge-parts-ep2.js 4` → the reprint/fold sweep over all 90 → draft → `val-pd-ep2.js` →
`splice-pd-ep2.js` → boot check → commit. **Nothing folds across the part-1/part-2 boundary while
both chats are live**; these folds are all within section 4 of part 2 and are unaffected by that.
