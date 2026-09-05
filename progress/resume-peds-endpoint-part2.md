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

---

## Section 4 MERGED at 90, the shortfall reconciled page by page, and House's haematology chapter turns out to be a contiguous slice of this section (2026-09-04)

`merge-parts-ep2.js 4 --write` → **`endpoint-p2-s04-haematology.array.js`, 90 entries, n 1…90,
pp.268–450, 104,906 chars.** Every structural check passes: `pr != n` **none**, pages strictly
increasing, no key out of range, no stray option-letter prefixes, no `fig` without `figAlt`.
Two boxes on their own page (n22 → p.312, n26 → p.321), two figures (n26, n27), two entries with no
printed box (n21, n54), option counts 31 four-option and 59 five-option.

### ⚠️ `n` IS SECTION-GLOBAL, NOT PER-PART — the brief did not say so, and four agents read it four times the same way

All four parts were written with `n` restarting at 1, and the merge refused every entry after the
first part: *"n is not the position"*. **The brief was at fault, not the agents.** §6 said only
*"`n` is the true sequential index"*, which is exactly as true of a per-part index as of a
section-global one, and nothing anywhere said which. Sections 1 and 3 had already established the
convention on disk — s01 part B opens at `n:15`, s03 part B at `n:17` — but **a convention that
lives only in previously written files is not an instruction**, and no agent staging section 4 had
any reason to open them.

Repaired by setting `n := pr` in all four files, which is safe **here and only here** and was proved
before anything was written: the printed numbers across the four parts form a contiguous 1…90 run
with **no duplicate and no gap**, so the printed number *is* the section-global position. The script
refuses to write unless that holds. 69 entries renumbered; part A already satisfied it.

⚠️ **This will not be true of every section.** Part 1's section 1 printed "69" and "81" twice each,
so there `pr` is not the position and `n := pr` would silently corrupt the ordering. **The check is
the point, not the shortcut** — §6 of the brief now states the convention outright, and the first
part of every section from 5 onward starts at 1 while each later part continues the count.

### The 95 → 90 shortfall: five pages, each one opened and named

`expect` was the index's answered-page count, 95. The merge came in at 90 and the tool refused it —
correctly, since a shortfall is *"a page to LOOK AT, never automatically a fault"*. Reconciled by
differencing the index's answered set against the staged set, which named the five exactly:

| Page(s) | Cause | Reading |
|---|---|---|
| 255, 256, 257 | lettered content slides | bullets like "A. Beta-Thalassemia" carry yellow and read as options |
| 322 | **index mistag** | no highlight, no box — an ordinary unanswered printing of Q27; p.323 is the real answered page |
| 420 | exact duplicate reprint of 419 | staged once from the fuller printing |

**95 − 5 = 90, with every one of the five accounted for by a cause that was seen on the page.**
`expect` lowered to 90 with all five written into the config comment.

⚠️⚠️ **The two overflow boxes are NOT in that list, and that is the lesson.** pp.312 and 321 are
genuine overflow boxes and were staged as `box:` on their own questions — but the index classified
them **`notes`, not `answered`**, so they never entered `expect` at all. Nor did p.309, the teaching
slide. **Three of the four known structural causes appear in this reconciliation and one does not.**
So a shortfall can never be settled by subtracting a category — "we found two overflow boxes,
therefore two of the missing five are those" would have been wrong by two, and wrong in a way that
still summed correctly. **Difference the actual page sets and open what the difference names.**

### ⚠️⚠️ HOUSE'S HAEMATOLOGY CHAPTER IS A CONTIGUOUS SLICE OF THIS SECTION — 13 hits in a row

`reprint-pd-ep2.js 245 451` returned **14 cross-file candidates, every one of them against Chat B's
House bank**, and they are not scattered:

```
p.322/323 == pedhd-haem-6      p.339 == pedhd-haem-14
p.329     == pedhd-haem-9      p.341 == pedhd-haem-15
p.331     == pedhd-haem-10     p.343 == pedhd-haem-16
p.333     == pedhd-haem-11     p.345 == pedhd-haem-17
p.335     == pedhd-haem-12     p.347 == pedhd-haem-18
p.337     == pedhd-haem-13     p.349 == pedhd-haem-19
                               p.351 == pedhd-haem-20
```

**Fifteen consecutive House ids against fifteen consecutive endpoint answered pages, thirteen of
them matching one-for-one and in order.** The two misses (`haem-7`, `haem-8`, which would sit at
pp.325 and 327) are almost certainly the OCR threshold rather than genuine non-matches — but they
are unconfirmed and are written down as unconfirmed.

`MEMORY.md` already records that the two banks overlap and that the overlap is **chapter-shaped, not
scattered** — 5 collisions in part 1's first 150 entries, four of them endpoint Nutrition ≡ House
ch.10, with a naive projection of *"25–30 for the whole stream, ONE data point, re-measure, never
quote as a count."* **This is the re-measurement, and it is much larger than the projection: 14 from
a single section of a single part.** The shape holds — contiguous, one-for-one, chapter-aligned —
but the magnitude does not. ⚠️ **The 25–30 figure is now known to be low and must not be quoted.**

**None of these fold, and none may be touched.** `questions.peds.js` is Chat B's live file and Chat
B is writing it. The standing rule is unchanged: *nothing folds across a live chat's boundary; the
two files stay separate while both chats write.* These 14 are recorded here for the end-of-stream
sweep, when one chat owns both files. **Recording is the whole action; there is nothing else to do
with them yet.**

### The within-section folds — two decided, one that the instrument missed

Four within-section candidates came back; two of them were already settled and are false as folds:

- **p.322 ≡ p.323** — the mistag against its own answered page. Not a fold; only p.323 is staged.
- **p.419 ≡ p.420** — the duplicate reprint. Already staged once from the fuller printing.

The two real ones, both confirmed on the page earlier today and now confirmed by the sweep as well:

| Fold | Keep | Discard | Why |
|---|---|---|---|
| p.375 (n53) ≡ p.442 (n86) | **n86, p.442** | n53 | p.442 prints the bleeding-time normal range `(3–8 min)` and full-sentence labs; p.375 is telegraphic |
| p.383 (n57) ≡ p.448 (n89) | **n57, p.383** | n89 | a tie on content; p.383 prints "ecchymosis" where p.448 prints "bruising", and the earlier printing keeps the deck's order |

⚠️ **Each fold DISCARDS A PRINTED AGE** — the child is 3 on p.375 and 12 on p.442; the girl is 5 on
p.383 and 3 on p.448. Neither age touches its key. **The discarded age and the discarded page
citation both go into the surviving entry's `source` and `note`. A fold that loses a printed number
without recording it is a silent edit to the source**, which is the one thing this bank does not do.

⚠️⚠️ **And the sweep did NOT flag n82 (p.434) ≡ n90 (p.450)** — the pair part D's own agent caught by
eye, differing in wording, one normal-range figure and **one option count**. The OCR similarity
never reached threshold. **The instrument is a net with holes, and a human flag it misses is still a
flag.** It stays open and is settled on the images before drafting, not by the sweep's silence. As
it happens the differing option count is, under the existing rules, the one feature that makes a
pair *not* a fold — so the likely outcome is two entries; that is a reading to confirm, not to
assume.

**Net: 90 staged − 2 folds = 88 live entries expected from section 4.**

---

## Section 4's fold register CLOSED at three, the two figure crops cut, and drafting opened in six halves (2026-09-04)

### The third fold: p.434 ≡ p.450, and the option count did not stop it

The pair part D's agent flagged by eye and the OCR sweep never saw. Adjudicated on both page images.

Both stems: a 3-year-old child, pale, iron-deficiency anaemia, asked for the expected haematological
picture. Reworded, not re-scoped. **Options a–d carry identical numeric values on both pages** — Hb
10/MCV 70/retic 10%, Hb 15/MCV 78/retic 2%, Hb 8/MCV 45/retic 9%, Hb 7.5/MCV 65/retic 1% — with
p.450 restating the units (`g/dL`, `fL`) that p.434 leaves as bare numerals. **The key is `d` on both
pages, index 3 on both.** p.434 prints a fifth option, `e. Hemoglobin (7), MCV (80), reticulocyte
(16%)`; p.450 stops at four.

**VERDICT: FOLD** — the recorded "reworded stem + dropped filler option" shape. The test that
settles it is not the count but **whether the dropped option changes what is being asked or what
could be answered**, and it does not: option e sits in the last slot, so removing it leaves the key's
index untouched, and d remains the only option low on all three of Hb, MCV and reticulocytes among
the four that survive. **p.434 (n82) is the fuller printing and survives.**

⚠️⚠️ **THE TWO PAGES PRINT A DIFFERENT NORMAL RANGE FOR THE SAME ANALYTE.** p.434 prints
`(N: MCV 70-100)`; p.450 prints `(Normal MCV: 75–100 fL)`. Confirmed on both page images at native
resolution — **not an OCR artefact, and not a transcription slip.** The book contradicts itself about
a reference interval. Standing rule: **a contradiction is RECORDED, never corrected, and the key
never moves.** The surviving entry keeps `70-100` exactly as its own page prints it, and its
explanation records that the same question is reprinted on p.448–450 with the lower bound printed as
75. Neither number is adjudicated, and this is not taken to the user.

⚠️ **This is why the fold has to be a merge and not a deletion.** A fold that simply drops the
second printing would have silently destroyed the only evidence that the book prints two different
normal ranges — a printed number lost with no record. **Every value the discarded printing carries
and the survivor does not goes into the survivor.**

### The register, closed

| Discard | Survivor | Why the survivor | What the discard carries into it |
|---|---|---|---|
| n53, p.375 | **n86, p.442** | prints the bleeding-time normal range `(3–8 min)` and full-sentence labs | the child's age is **3** on p.375 and **12** on p.442 |
| n89, p.448 | **n57, p.383** | a tie on content; p.383 prints "ecchymosis" against "bruising", and the earlier printing keeps the deck's order | the girl is **5** on p.383 and **3** on p.448 |
| n90, p.450 | **n82, p.434** | carries the fifth option | normal MCV lower bound printed as **75**, against **70** on p.434 |

**All three folds discard a printed number and every one of those numbers is preserved in the
survivor.** Two are the patient's age, one is a reference interval. None touches a key.

**90 staged − 3 folded = 87 live entries expected from section 4.** No survivor is also a discard;
checked explicitly rather than assumed.

### ⚠️ The instrument missed the fold a human caught, and that is now measured twice

The OCR reprint sweep flagged the two age-change pairs and **did not flag p.434 ≡ p.450**, which
turned out to be a genuine fold — the rewording plus the restated units pushed the similarity below
threshold. It also flagged **p.322 ≡ p.323** and **p.419 ≡ p.420**, neither of which is a fold: the
first is the index-mistag against its own answered page, the second the duplicate already staged
once. **So on four candidates the sweep produced two true, two false, and one miss.**
**It is a net with holes and it is not a decider.** A human flag it misses is still a flag; a hit it
produces is a page to open. Nothing in this section was folded or refused on the sweep's word alone.

### The two figure crops, cut and looked at

| File | Page | Crop on the 2481×3508 300 dpi render | Output |
|---|---|---|---|
| `q-pd-ep2-320.jpg` | 320 | x1450, y800, w700, h480 | 700×480 |
| `q-pd-ep2-323.jpg` | 323 | x1800, y560, w600, h480 | 600×480 |

p.320 is a low-power peripheral blood film — small pale hypochromic red cells, two darker nucleated
cells, in its own black-bordered box, no labels, no arrows, no scale bar. p.323 is a colour clinical
photograph of an infant's hand and forearm on white bedding beside a shape-sorter toy, an ID band at
the ankle, the fingers visibly swollen.

**Both were looked at after cutting.** In both cases the printed key sits in the frame's
neighbourhood and was deliberately excluded — p.320's highlighted `C. Iron-deficiency anemia` and
p.323's highlighted `E. Sickle cell disease` and its blue box naming hand-foot syndrome are all
outside the crop. ⚠️ **The p.323 photograph shows the finding itself**, which is unavoidable and is
the whole point of the picture; **what must not give the answer away is the caption**, and the staged
`figAlt` is `clinical photograph, infant's hand` — modality and view, no diagnosis, no laterality.

⚠️ **The draft brief said the basename was `q-pd-ep-<page>` and the brief was wrong** — `val-pd-ep2.js`
line 244 requires **`q-pd-ep2-`**. Every figure entry written to the old shape would have hard-failed.
The `2` is not cosmetic: **part 2's page numbers restart at 1, so `q-pd-ep-320` names a different
picture belonging to another chat.** Fixed in the brief, with the reason, rather than silently.

### Drafting opened, six halves

87 live entries against a measured ~11–15 per drafting agent across sections 1–3, so **six halves,
A–F**, not the usual two. Ranges by staged `n`: **A 1–15 · B 16–30 · C 31–45 · D 46–60 · E 61–75 ·
F 76–90**, less the three folded entries — D loses n53, F loses n89 and n90 — giving 15/15/15/14/15/13.

⚠️ **Every structural oddity in the section falls inside half B**: the boxless n21, the p.312
overflow on n22, and both figures (n26, which also overflows to p.321, and n27). B was given all four
explicitly rather than left to discover them, since three of them are silent hard-fails at the
validator. The fold instructions go to **D** (n57 must absorb p.448's age) and **F** (n86 must absorb
p.375's age, n82 must absorb p.450's normal range).

`val-pd-ep2.js`'s section-4 `ans` was still the index's 95; lowered to 90 with the five-page
reconciliation written beside it, so nobody re-derives the discrepancy from scratch. It is an unused
documentation field — which is exactly why a stale value there survives.

---

## Correction: "every structural oddity falls inside half B" was wrong — there is a second boxless entry in half D (2026-09-04)

The block above says every structural oddity in section 4 falls inside half B. **It does not.** Re-read
off the staged array rather than off this journal:

```
--- figs anywhere ---        n26 p.320 "peripheral blood film, low power"
                             n27 p.323 "clinical photograph, infant's hand"
--- boxless anywhere ---     n21 p.308
                             n54 p.377
--- box overflow anywhere -- n22 p.311 box 312
                             n26 p.320 box 321
```

**`n54` (p.377) is boxless and it is in half D, not half B.** Both figures, both box overflows and the
first boxless entry are in B, which is what produced the claim; the second boxless entry was simply
not looked for outside B's range. The earlier merge block did record `boxless: n21 p.308 n54 p.377`
correctly — the error was introduced later, when the drafting split was described, by generalising
from three of the four oddity kinds. **A claim that a property is confined to one range is a claim
about the WHOLE array and has to be measured over the whole array.**

Half D's task prompt carries the general unboxed rule (no blockquote anywhere; closing line
`Written for this bank — Pediatrics endpoint part2.pdf prints no explanation here.` with an em dash;
the marker never in `source`), so n54 is covered by contract rather than by being pointed at. **It is
checked in D's returned file before that half is accepted** — an unboxed entry that acquires a
blockquote is a silent hard-fail at the validator, exactly the failure mode the "tell B explicitly"
reasoning was meant to prevent.

### The fold pages and keys, re-verified against the staged array

| n | p | key | pairs with | its key | agree? |
|---|---|---|---|---|---|
| 53 | 375 | 3 | **86** (p.442) | 3 | yes |
| 89 | 448 | 0 | **57** (p.383) | 0 | yes |
| 90 | 450 | 3 | **82** (p.434) | 3 | yes |

**Every fold pair carries the same key on both printings**, so no fold in this section moves an
answer — checked on disk, not assumed from the adjudication. The three survivors (n57, n82, n86) and
the three discards (n53, n89, n90) are disjoint sets.

---

## Section 4 drafted, refiled across four chapters, spliced at 87 — and the chapter field turned out to have no instrument behind it (2026-09-04)

All six halves returned and validate. **15 + 15 + 15 + 14 + 15 + 13 = 87**, exactly 90 staged less the
three folded discards. Word counts by half: 4,101 · 4,180 · 4,177 · 3,818 · 3,727 · 3,756 —
**23,759 words, 273 a question**, against a budget of ~250 for slide-recall and ~520 for vignettes.

Every half was cross-checked from disk in the main chat rather than taken on the agent's word:
`answer` against the staged `key` index, `stem` and `options` byte-identical to staging, the exact
`source` string including the box-overflow form, boxed-versus-unboxed shape, the unboxed marker's
presence and its absence from `source`, figure basename and `imgAlt` against the staged `figAlt`, and
the allowed-field set. All clean. **n54 (p.377), the second boxless entry, came out right from the
general rule alone** — half D was never pointed at it, because the journal block that would have
pointed at it was the one that wrongly said every oddity sits in half B.

### ⚠️ THE CHAPTER FIELD WAS WRONG IN 24 ENTRIES AND NOTHING WOULD EVER HAVE CAUGHT IT

**My defect, not the agents'.** I hard-coded `chapter:'haematology'` into the prompts for halves A–D
and let E and F judge per entry. So every ITP, haemophilia, von Willebrand and HSP question in the
first sixty was filed under *Anaemia and marrow failure*, and so were four leukaemia questions and one
child-protection question.

**No instrument sees this.** `val-pd-ep2.js` lines 39–41 say it outright: the `chapter` in the section
config is documentation only, and each entry's own chapter is checked against the real chapter set
from `modules.js`, never against that field. `haematology` and `haem-bleeding` are both real chapters,
so a bleeding disorder filed as anaemia passes every check there is — validator, splicer, boot check —
and surfaces only as a question sitting in the wrong chapter on the shelf. **A field with no
instrument behind it needs a deliberate pass, and the pass has to cover halves that were not suspect.**

One pass over all six halves, by content, filed 24 entries elsewhere:

| Chapter | Count | What moved there |
|---|---|---|
| `haematology` — Anaemia and marrow failure | 51 | unchanged |
| `haem-bleeding` — Bleeding and clotting disorders | 30 | 18 moved from A–D; E and F had already filed 12 |
| `malignant` — Leukaemia | 5 | n30, n45, n47, n49, n58 |
| `accidents` — Accidents and poisoning | 1 | n46 |

**`pedep2-hem-46` leaves haematology altogether.** It is printed inside the haematology section and it
asks which feature of a 5-month-old's spiral humeral fracture suggests non-accidental injury — a child
protection question, not a haematology one. Chapter by content, which is part 1's established
practice: `questions.peds.ep.js` files 216 entries across **36 different chapters**.

**E and F agreed with me on all 28 of their own entries — zero moved back.** That is the useful part
of the measurement: the two halves that were left to judge for themselves reached the same filing an
independent pass reached, so the split is a property of the questions and not of whoever was reading
them. The error was entirely in the four prompts that removed the judgment.

Two straddling cases were decided and left where they were. **n64** ("Which is not a cause of acute
abdomen?") and **n72** ("true medical causes of abdominal pain, EXCEPT") both offer four options that
are all haematological, and the discriminating fact — that thalassaemia does not cause an acute
abdomen where sickle cell disease and HSP do — is a haematology fact. Primary `haematology`, secondary
abdominal pain, per the standing straddle rule. `gi-abdopain` exists and was considered.

### The splicer carried the same fold blindness the validator did

`splice-pd-ep2.js` refused the section: `MISSING: pedep2-hem-53 / -89 / -90 is staged but not drafted`,
and `COUNT: drafts sum to 87 but staging holds 90`. **Identical defect to the validator's, found the
same day for the same reason** — a fold register that lives only in a journal is invisible to every
tool, and a staged discard is indistinguishable from an entry someone forgot.

The splicer already had a `reprints` mechanism, and **it is not the same thing.** A reprint is a model
exam re-printing a question that is already live from a body section; it is folded by extending the
existing entry's `source`, and the splicer has a `REPRINT PASS HAS NOT RUN` check that proves the pass
happened by counting a marker in the live file. A section-4 fold is two printings inside one section,
both staged in the same pass, the survivor drafted in the same batch — **there is no live entry to
extend and no reprint pass to run, so borrowing the reprint machinery would have failed a correct
file on a proof that cannot exist.** A separate `folded: [53, 89, 90]` was added instead, sharing only
the "staged but deliberately not drafted" behaviour, and drafting a folded entry anyway still trips
`EXTRA` — which is what keeps a silent duplicate out of the live bank.

### Spliced and booted

```
questions.peds.ep2.js   94 -> 181 entries   220,855 -> 447,824 chars   holes 0
banks: {"endpoint":181}    ids: no duplicates    answer in range: all
chapters: normal-dev 28 · dev-problems 28 · genetics 38 · haematology 51 ·
          haem-bleeding 30 · malignant 5 · accidents 1        (unknown chapters: none)
boot check: QUESTIONS 5310 · THEORY 153 · MODULES 4 · 153 chapter rows (138 with questions)
            console errors 0
```

`app/index.html` and `app/data/questions.js` already carried their one line each from the section 1–3
splice; neither was touched. **Sections 1–4 of part 2 are live. Section 5 (Respiratory) is next.**

---

## Section 5 launched, stopped, and relaunched — the index is keyed 0-based and it put the whole section one page out (2026-09-04)

**Four staging agents were launched on the wrong pages and stopped minutes later.** The ranges were
A 476–508, B 510–540, C 542–572, D 574–604. Every one of those is the *unanswered twin* of the page
that was meant. Nothing was staged from them; no part file from that launch survived on disk.

### What the defect actually is

`content/peds/qb-pages/ocr/ep2/index.json` is an object. **Its keys are a 0-based position; each
record's own `page` field is the real 1-based PDF page.**

```
idx['452'].page === 453
```

I profiled the section with `idx[String(p)]`, so every page I read was one lower than the page I
named. Because this book alternates unanswered/answered, **a one-page shift does not merely move the
range — it inverts the parity**, turning "odd pages are answered" into "even pages are answered" and
pointing all four agents at the twin. A shift of one page is the most dangerous size of error this
book can produce, precisely because the wrong page looks exactly like a right one: same question,
same options, no key.

### How it was caught, and what the instrument was

Not by a checker — there is none for this. It was caught against **this file**, which already said
"the next `answered` page anywhere is **p.477**" from an earlier pass. My freshly computed 476
contradicted a number this map had recorded, and the contradiction is what forced the re-measure.
Confirmed directly (`idx['452'].page === 453`), then cross-checked against section 4's staged array,
which is verified against images: staged `p` runs 268..450, and `kind` **at key 268** is `question`
while `kind` **at `e.page` 268** is `answered`. The staged data is right; my read was wrong.

Agent C had already reported **"confirmed still unanswered at p560"** before it was stopped — the
alternation check working exactly as it is supposed to, an agent refusing to stage a page that did
not match what its prompt promised. That report is the real instrument, and §4a-pre of
`pd-ep2-staging-brief.md` now tells every future agent that such a mismatch is a finding to report,
never something to work around.

### Section 5's true structure, re-measured on `e.page`

| | |
|---|---|
| p.450 | section 4's last answered page |
| pp.451–475 | teaching notes, **25 pages**, every one `options: 0` |
| p.476 | first unanswered question page |
| pp.476–605 | strict alternation, **EVEN unanswered / ODD answered** |
| answered | **65 pages, 477 … 605**, all odd, zero even |
| pp.606–612 | closing notes; section 6 follows |

Section 4 ran the opposite parity (even answered, odd unanswered) — a 25-page notes block between
them is an odd count, so the parity flips. **Parity is a property of one section, never of the book.
Measure it per section.**

Relaunched ranges: **A 477–509 (n:1–17) · B 511–541 (n:18–33) · C 543–573 (n:34–49) ·
D 575–605 (n:50–65)**, D also rendering pp.606–607 to prove the end boundary. This supersedes
"The end boundary is part D's job" above, which named pp.451–452 from the shifted read.

### ⚠️ AND THEN I OVER-CORRECTED THE SECTION TABLE, AND A RENDERED PAGE CAUGHT ME

Having found the key/page defect, I inferred that the `Pages` column in `endpoint-p2-section-map.md`
had been built the same wrong way, and subtracted one from rows 1–5. **That inference was wrong and
the rows have been put back.** Part D rendered pp.606–607 to prove its end boundary and reported
**p.606 = the Arabic closing supplication, p.607 = the "Cardiac disorders" banner** — precisely where
the original table ends §5 and opens §6.

The table follows a convention I had not noticed: **a section runs to its own closing supplication,
the page after its last answered page** — §1 74/75, §2 153/154, §3 243/244, §4 450/451, §5 605/606.
My version had each section end on its last answered page. **Both readings are perfectly uniform
across five sections**, which is exactly why the wrong one felt confirmed. Uniformity is not
evidence; one rendered page is.

The two mistakes are not the same and should not be remembered as one. The key/page defect was
**measured** and real — `idx['452'].page === 453` — and it cost section 5 a whole launch. The table
"correction" was **inferred from** that defect, and cost nothing only because a boundary render was
already scheduled. **The pipeline renders one page past every range for exactly this reason, and
this is the first time that rule has caught the main chat rather than an agent.**

## Section 8 spliced at 56 — the validator was wrong about two figures, and a caption was never there (2026-09-05)

⚠️ **Sections 6 and 7 are not journaled in this file.** Their record is in the commits
(`a90b187` section 6 spliced at 79, and the section 7 batch before it). This entry resumes the
journal at section 8 rather than back-filling history I would be writing from memory.

**Live file: `questions.peds.ep2.js` 376 → 432 entries, 956766 → 1107281 chars, 0 sparse holes,
0 duplicate ids.** Boots from `file://` with 0 console errors — `QUESTIONS 5621 · THEORY 153 ·
MODULES 4 · 153 chapter rows · 4 module cards`. Commits `a1e670e` (splice, crops, caption
correction) and `d1e2834` (the four fold records). **Unpushed, by design — this chat cannot push.**

Staged 60, four folded, **56 drafted** across four halves at 15 + 15 + 13 + 13, every half returning
`ALL CHECKS PASSED` from `val-pd-ep2.js`. 15,251 words.

### ⚠️ THE FIRST SECTION IN EITHER PART WHERE THE FIGURE IS NOT ON THE ANSWERED PAGE

`val-pd-ep2.js` derived every crop basename from the staged answered page `p`. That holds everywhere
else in this book, so nothing had ever tested it. Section 8 breaks it: **n8 and n9 say "the figure
below", and pp.971 and 974 reprint the stem, the options, the key and the box but not the figure.**
Both EEG tracings are printed alone on the preceding page — **p.970 and p.973** — which the OCR index
labels `notes`.

Half A hit this as two validator failures and **was right**. The fix went into the tool, not the
draft: a `figPage: { 8: 970, 9: 973 }` override in the section config, read through one new helper
`figPageOf(n)` that **both** the basename check and the basename-collision check now call, so the two
cannot disagree about which page a crop came from. Section 8 is the only section that sets it.
Obeying the uncorrected tool would have addressed the cutter to two pages with nothing on them.

⚠️ `splice-pd-ep2.js` does **not** touch images, so `figPage` lives in the validator alone — this is
the one section-table key of the four hand-copied tables that does *not* have to move together.

### ⚠️ THE CAPTION UNDER p.968 DOES NOT EXIST

Staging recorded "a small caption line is printed beneath the photo but is cut off at the bottom edge
of the slide and not legible". The drafting notes repeated it. Half A wrote it into n7's explanation.
**The cutter zoomed that strip at 300 dpi and the band is white.** The only text below the photo is
the explanation box's own, correctly excluded from the crop. What the staging half saw at a lower
render was almost certainly the top of that box.

The sentence is gone from n7 and the drafting notes now carry the correction. **The staged `fig`
keeps the original wording on purpose** — staging is the record of what that half saw on the page,
and the record is not rewritten after the fact.

Nothing was fabricated either way: the claim was that a line existed and could not be read, so no
text was ever invented from it. **The lesson is the one this project keeps paying for — a partial
line at the edge of a slide is not evidence of a truncated caption until something has zoomed in
on it.**

### The chapter field, wrong in the prompt for the second section running

My drafting prompt told each half "Chapter is `neurological`". That was wrong and **half C said so**:
`endpoint-p2-s08-chapter-rulings.md` requires per-entry judgment and warns in as many words that a
mostly-`neurological` result is "a symptom, not a result". The validator checks chapters against the
real set from `modules.js`, never against the config's `chapter:` field, which is documentation only.
The halves assigned by content instead: **24 of 56 landed outside `neurological`** — across
`neuro-nm`, `malignant-solid`, `neuro-cp`, `perinatal`, `genetics`, `infection`, `renal` and
`nutrition-vit`. This is the same defect section 4 recorded at 24 entries. **Fix the brief, not the
draft.**

**One escalation adjudicated here rather than by the half that raised it.** n46 asks how long complete
cerebral ischaemia takes to cause brain death; this course mentions brain death exactly once, in the
drowning part of `accidents`. The half filed it there for want of an anchor and flagged the call. It
moves to `neurological`: the question is a physiology fact about ischaemia tolerance, the book prints
it in the neurology section, and the drowning teaching is the cold-water **exception** to the number
rather than the number itself. The cross-reference stays in `explanation`, which is where a secondary
chapter belongs.

### The four folds, now recorded on their survivors

| dropped | survives as | source now reads |
|---|---|---|
| n47 p.1051 | `pedep2-neu-17` p.990 | `… p.990 (reprinted at p.1051)` |
| n59 p.1075 | `pedep2-neu-26` p.1008 | `… p.1008 (reprinted at p.1075)` |
| **n34 p.1024** | **`pedep2-dp-25` p.145** | `… p.145 (reprinted at p.1024)` |
| **n41 p.1039** | **`pedep2-dp-2` p.99** | `… p.99 (reprinted at p.1039)` |

⚠️ **The last two are the first CROSS-SECTION folds in this bank** — survivors written weeks of work
earlier in section 2, which no half of section 8 was allowed to touch. That is why the edit was held
for the main chat and made after the splice. Keys were re-checked against the staged array before
editing: n34 key 0 against dp-25's `answer:0`, n41 key 2 against dp-2's `answer:2`, options identical
and in order in both.

### Three divergences recorded, no key moved

- **n4** — the printed key names the intraventricular haemorrhage; the described findings are the
  post-haemorrhagic complication.
- **n35 / n45** — the box gives the febrile-seizure window as 6 months to 5 years against the cached
  lecture's 5 months to 6 years.
- **n60** — the box attributes the finding to raised intracranial pressure where the course teaches
  the same signs as rickets bony changes. Both readings agree on IV calcium gluconate.

**n40's explanation box is truncated in the book**, ending mid-sentence at "brain imaging (MRI" with
blank space below, confirmed at 300 dpi and not a render artefact. Quoted verbatim including the
cutoff, **nothing completed inside the box**; the finished thought is carried below the rule as this
bank's own writing.

### ⚠️ For the end-of-stream cross-bank sweep

**n1 through n25 are a one-for-one reprint of House chapter 12** — `pedhd-neuro-1` … `pedhd-neuro-26`,
0.75–1.000 stem similarity, **every key agreeing**. This is the largest chapter-shaped endpoint/House
overlap measured in this stream. Three further House hits sit outside the block: n40 ≈ `pedhd-devp-7`
(keys differ), n41 ≈ `pedhd-devp-2`, n47 ≈ `pedhd-neuro-17` (keys differ). **Nothing folds across
banks and nothing folds across the part-1/part-2 boundary while both chats are live** — recorded,
not acted on.

## Section 9 spliced at 25 — the section holds 26, not 27, and `kind === "answered"` produced its first false positive (2026-09-05)

Commits `91c1635` (staging, 8 files) and `7ea5bfd` (splice, 7 files). Both **unpushed by design** —
this chat cannot push. `app\data\questions.peds.ep2.js` 432 → **457** entries, 1107369 → 1174851
chars, **0 sparse holes, 0 duplicate ids**. Booted from `file://` after the splice: **0 console
errors**, `QUESTIONS 5705 · THEORY 153 · MODULES 4 · 153 chapter rows (138 with questions)`.

### ⚠️ THE COUNT WAS WRONG IN FOUR PLACES AND NO COUNTER CAUGHT IT

**p.1082 is not a question.** It is an ordinary teaching-notes slide headed "Management" — no stem,
no options, no highlighted key — sitting inside an unbroken notes run pp.1079–1090. The OCR index
tagged it `kind: "answered"` because its yellow section header is the same shape as the un-flagged
yellow headers on pp.1080/1081/1083/1084/1088/1089, and it is the only page of that run mistagged.

**This is the first time in either part that `kind === "answered"` has produced a false positive.**
Until now only the yellow-pixel `answered` boolean over-counted, which is exactly why the page map
treated `kind` as the trustworthy field and built a puzzle on top of it — 27 answered pages against
26 question pages, so one question "had to be" twinless, with p.1082 and p.1097 named as candidates.
**The premise was the false positive.** Neither page is twinless: p.1097's twin is a split pair, stem
and options plain on p.1095 and the glucose diary the stem refers to printed alone on p.1096.

The correction was made **by a staging half, not by an instrument.** It was told the twinless question
was its second job, read pp.1079–1091 page by page instead of spot-checking, staged only the seven
real questions among its eight assigned pages, and **escalated rather than inventing an eighth entry.**
Three independent confirmations of 26 followed: the printed question numbers run **1..26 with no gap**
across three parts written by three halves that never saw each other's files; 3 + 23 = 26; and the
answered/question page counts reconcile once p.1082 leaves the answered set.

Corrected where the count lived: `val-pd-ep2.js` (`ans: 26`), `merge-parts-ep2.js` (`expect: 26`),
`endpoint-p2-s09-s11-page-map.md`, and the two mis-numbered staging parts (B n:9–18 → n:8–17, C
n:19–27 → n:18–26, `n := pr`). `splice-pd-ep2.js` and `sweep-staged-ep2.js` carry no count for this
section — **verified, not assumed.** The renumber was trivially safe because `pr` was transcribed off
the page by three halves and was never wrong; the merge then reported `pr != n: none`.

### The fold — two boxes, neither a superset

n23 (p.1138) folds into n2 (p.1094): James, 11, T1DM, collapses playing football. **Read on both page
images**, not scored — same patient, same five options in the same order, same key (option D,
highlighted yellow, bold and underlined on each). Stem similarity read only **0.560 because the second
printing is condensed**, not because it is a different question. A similarity gate would have called
this a near-miss.

**What needed a ruling: the book prints a differently worded explanation box under each printing and
neither is a superset** — p.1094 has "cannot swallow", p.1138 has "without needing IV access". "Keep
the fuller printing" does not decide it. **Ruling: the survivor keeps its own box verbatim and
unmixed; the reprint's detail goes into the expansion below the rule, attributed in prose to p.1138.
The two boxes are never merged into one blockquote** — a box records what one page prints, and
blending two printings would fabricate a box the book never printed. `source` on the survivor:
`Pediatrics endpoint part2.pdf p.1094 (reprinted at p.1138)`.

⚠️ **`splice-pd-ep2.js` refuses a silent gap by design** — the dry run failed with `MISSING:
pedep2-end-23 is staged but not drafted` until section 9's config declared `folded: [23]`. That is the
tool working, not a bug; its own comment warns that a guessed array there would make it accept missing
entries silently.

### Chapters, and a ruling that had to be refined mid-drafting

Landed **`endo-thyroid` 13 · `endocrine` 7 · `endo-dka` 4 · `neonatal-seiz` 1.** The one entry outside
the section's three chapters is **n18** — a 2.2 kg baby at 37 weeks to a pre-eclamptic mother, admitted
to SCBU, answer *hypoglycaemia*. The rulings file splits hypoglycaemia at **28 days** and this baby is
hours old, so it files neonatal.

**Ruling 1a was added during drafting** because half A escalated n12 rather than deciding it: Sophie is
a known type 1 diabetic, dehydrated but stable, talking, glucose 16 mmol/L, **no ketones and no pH
given anywhere.** By ruling 1's literal test she is not in an episode (`endocrine`); by ruling 1's own
list of what `endo-dka` owns — the fluids — she is. **The refined test: where the vignette is not an
episode but the thing being asked is taught only inside the acute-episode chapter, the chapter follows
what is asked.** Lands `endo-dka`. The four-question shared menu n9–n12 then splits **two and two**
across the chapters — the menu working as intended; four identical option sets landing in one chapter
would have been the finding.

### The figure, and why the crop breaks the size convention

**n3's figure is not on the answered page** — the second section running to need `figPage`. The home
blood-glucose diary captioned "Figure 26.1" is printed alone on **p.1096**; p.1095 is the unanswered
stem twin; p.1097 is the answered page; and n3's explanation box is printed alone on **p.1098**, so its
`source` takes the box form. Crop cut from p.1096 as `q-pd-ep2-1096.jpg` **and looked at**: nothing
clipped, every date and all twenty glucose readings legible, **the insulin Time and Dosage columns are
printed blank in the source** — which the `imgAlt` now says rather than implying readings that are not
there. **1805×1149, 162 KB, above this bank's 652×408–1040×883 / 24–90 KB range**, kept at native
300 dpi because downscaling blurred the handwritten digits. Recorded so the next crop does not copy it
without the same reason.

### ⚠️ Two of my own errors, both caught by the pipeline rather than by me

1. **I fabricated a clinical detail.** The drafting notes described n26 as a five-month-old with
   jaundice **and pale stools**. The stem says the opposite: *"His stool and urine are normal in
   color."* Normal stool colour is precisely what rules biliary atresia out and points at
   hypothyroidism, so the invented detail argued for the wrong answer. **Cause: I read a 120-character
   truncation that cut off at "His stool" and completed the sentence from expectation instead of from
   the page.** **Half B caught it, followed the staged text over my notes, and said so** — which is the
   behaviour the brief asks for and the reason a half is told the notes are not the source. Nothing
   reached a live entry.
2. **I told the user `check-part-ep.js` does not exist. It does** — first file in
   `tools\bank-harness\`, read-only, path-argument-driven, bank-agnostic, and the ep2 staging brief
   instructs halves to run it after every append. I carried a stale claim forward without listing the
   directory and put it into two drafting prompts. No work damage — a draft half's gate is
   `val-pd-ep2.js` either way, and both halves passed it clean.

### ⚠️ For the end-of-stream cross-bank sweep

**n1 through n9 map one-for-one onto House chapter 14** — `pedhd-endo-1` … `pedhd-endo-9`,
0.686–1.000, **every key agreeing.** Also n16 ≈ `pedhd-endo-16` (0.739) and n23 ≈ `pedhd-endo-2`
(0.560, through the n2 reprint); option-set-only hits n13/n14/n15 ≈ `pedhd-endo-13/14/15` and n26 ≈
`pedhd-liv-3`. Against live part 1 (record only, another chat writes that file): n25 ≈ `pedep-emg-28`
(0.683, keys agree), n18 ≈ `pedep-neo-37` and `pedep-mf3-16` on options. ⚠️ **n20 hits seven entries at
0.571–0.600 with keys differing everywhere — that is a `Which of the following is NOT…` template
matching other negative-stem questions, NOT a reprint. Do not fold any of them.** This is the third
chapter-shaped House overlap in the stream (s5 ≈ ch.13, s8 ≈ ch.12, s9 ≈ ch.14).

### Next

**Section 10** (liver, 20, pp.1146–…): the chapter-rulings agent is running. Then staging halves →
`merge-parts-ep2.js 10` → `sweep-staged-ep2.js` → drafting notes → drafting halves → `val-pd-ep2.js`
→ `splice-pd-ep2.js 10 --write` → `boot-check.js` → commit → journal. ⚠️ **Re-measure section 10's
count on the page images before staging — `kind === "answered"` is no longer a trustworthy field.**
Then **11** (malignant 23). Sections **12–15 are the four model exams at 80 each and need
`reprint-pd-ep2.js` run over the range before drafting**; then recent-mod 18 and recent-add 8.
