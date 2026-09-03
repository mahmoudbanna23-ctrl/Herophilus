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
