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
