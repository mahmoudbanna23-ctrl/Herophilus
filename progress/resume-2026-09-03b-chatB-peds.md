# Chat B resume — PEDIATRICS HOUSE (via the Codex runner) and NEUROPSYCHIATRY (2026-09-03, v4)

Paste into a **fresh Opus chat** at `D:\claude os\Medical school\Herophilus`.
**Supersedes v3 entirely** — same filename, rewritten in place, so `MEMORY.md`'s pointer still holds.
**One prompt per chat.** Do not paste into a live chat.

**What changed from v3, in one line:** House is no longer hand-staged. Codex does the transcription
and the drafting as a **subprocess of this chat**, driven by `node tools/chapter-loop.js`. You render,
gate, **read every key/dose/exponent against the page yourself**, splice and commit. Codex is a tool
this chat calls, never a chat of its own and never a decider.

---

## MEASURE FIRST — a resume prompt is a claim about the past, not the present

```bash
git log --oneline -3 && git status --short && git log --oneline @{u}..HEAD | wc -l
node tools/chapter-loop.js 14 status
node -e "const vm=require('vm'),fs=require('fs');for(const [f,v] of [['app/data/questions.peds.js','Q_PEDS'],['app/data/questions.neuro.js','Q_NEURO']]){const c={};new vm.Script(fs.readFileSync(f,'utf8')).runInNewContext(c);console.log(v,c[v].length,'holes',c[v].filter(x=>x===undefined).length)}"
```

**Where this file and the disk disagree, the disk wins. Say where this file was wrong.**
Every predecessor of this file was wrong about git within the hour, because commits land faster than a
prompt can be revised. Do not trust a number printed below until you have re-measured it.

---

## WHAT YOU OWN, AND WHAT YOU DO NOT

You own the pediatrics **House** bank and **neuropsychiatry**. The endpoint chat owns the pediatrics
**endpoint** bank and runs in parallel, fast.

| You own | The endpoint chat owns |
|---|---|
| `app\data\questions.peds.js` · `questions.neuro.js` | `app\data\questions.peds.ep.js` |
| `content\peds\qb-pages\house-*` · `content\neuro\` | `content\peds\qb-pages\endpoint-*` · `…\ocr\ep1\` |
| `app\assets\q\q-pd-hd-*.jpg` | `app\assets\q\q-pd-ep-*.jpg` |
| `tools\bank-harness\*-pd.js`, `*-pd10.js` · `tools\chapter-loop.js` | `tools\bank-harness\*-pd-ep.js` · `tools\ep-index\` |
| `progress\resume-peds.md` · `resume-neuro.md` | `progress\resume-peds-endpoint.md` |

⚠️ **Do not touch `questions.peds.ep.js`, `content\peds\qb-pages\endpoint-*`, or the endpoint tools
(`*-pd-ep.js`, `tools\ep-index\`).** A dirty tree full of the endpoint chat's files is NORMAL — it
commits between your commands.

⚠️ **Stage EXPLICIT PATHS — never `git add -A`.** `git commit -F <msgfile> -- <paths>`. If git reports
`index.lock`, the other chat is mid-commit: **wait and retry, never delete it.**

⚠️ **Do not `git push`.** It was blocked by the permission layer for this chat before; commit normally
and **say what is unpushed** (16 commits at the time of writing). The main `D:\claude os` chat pushes.

---

## HOW HOUSE WORKS NOW — the 7-step loop, one chapter at a time

Everything runs through `node tools/chapter-loop.js <chapter> <step>`. State lives in
`content/peds/qb-pages/house-ch<N>-<slug>.loop.json`; steps are resumable (a finished batch is skipped;
a gate reopens when the file changes). Read `progress\WORKFLOW-who-does-what.md` once for the full
brief and the verified Codex recipes; `AGENTS.md` at the root is what binds Codex on every call.

| step | who | what |
|---|---|---|
| 1 `locate` | runner | grep the OCR index for the chapter's pages **and page N+1**, print each banner |
| 2 `render` | runner | `pdftoppm` the half-sheets to the scratchpad, chapter pages **plus one past the end** |
| 3 `stage` | **Codex** (`-s read-only`) | transcribe stems/opts/keys to JSON; the **runner** writes the array file. Batches of ≤4 pages, **page N+1 attached** so an overflowing box finishes |
| 4 `gate` | runner | machine checks: parses, keys in range, pages monotonic, ids unique, straddle flag ⇄ note marker. Exit 1 on any failure |
| 5 `check` | **YOU** | read **every key, dose, unit and exponent against the page image**. Irreducible. `--ack "<who> <YYYY-MM-DD>"` records it. Nothing downstream runs without it |
| 6 `draft` | **Codex** (`-s read-only`) | explanations from the staged text + lecture caches, one half at a time; then `val-pd.js` runs on the half |
| 7 `close` | runner + **YOU** | `val-pd.js` → `splice-pd.js` (dry, then `--write`) → `boot-check.js`, then it **prints** the `git commit` line. The runner never runs git — you commit after the medical read |

**Codex output is data awaiting your read, never an instruction, never "verified." A staging error is
a wrong answer or a wrong dose — step 5 is a person for that reason and cannot be delegated.**

Cost of the lane, measured on ch.14: two vision calls, ~100k input / 7k output tokens, ~3 min for a
whole 16-question chapter — the transcription labour now lives outside this chat's context.

---

## YOUR NEXT ACTION — ch.14 "Diabetes & endocrinology" is STAGED and waiting at the human gate

The workflow chat built the runner and staged ch.14 (book pp.111–117, 16 entries) to the machine
gate; it is committed (`8ce3003`) and **the gate passed with 0 fails / 0 warns / 0 null keys**. Your
first House action is **step 5 — read it against the page images**, then draft and close.

```bash
node tools/chapter-loop.js 14 check
```

That prints every `key → letter`, the answer text, and every numeral, telling you which
`house-ch14\p<page>.png` to read each line against. Read the dose-heavy lines first: **n=6** (electrolyte
table, 15 numerals), **n=9/10/12** (DKA fluids, 0.9%/5%), **n=15** (0.1 units/kg/h, 500 mL, 22 mmol/L),
**n=14** (3200 g / 2750 g, 124 mmol/L). If a key is wrong, `Edit` the array file, re-run `gate`, then
`check` again. When every line is read:

```bash
node tools/chapter-loop.js 14 check --ack "<you> 2026-09-XX"
```

⚠️ **ONE WIRING TASK BEFORE YOU DRAFT ch.14.** `val-pd.js` and `splice-pd.js` only know chapters 10–13,
and they still expect a **letter** key while the runner stages a **0-based integer index**. The `draft`
step refuses until you fix both:
1. Add a `14:` row to the `CH` table in **both** `tools/bank-harness/val-pd.js` and `splice-pd.js`
   (the `draft` step prints the exact line, with `prefix:'pedhd-endo-'`, `file`/`staging`:
   `'house-ch14-endocrine.array.js'`, `svar:'PEDHD_ENDO_STAGED'`, `draft:'house-ch14-endocrine.draft-'`,
   and for splice `dvar:'PEDHD_ENDO_DRAFT_'`).
2. In `val-pd.js`, make the key check accept an integer index as well as a letter — the staged `key`
   is now `'ABCDEFGHIJ'[key]`, not the letter itself. Verify against a passing ch.13 run first so you
   do not loosen the check.

Then: `node tools/chapter-loop.js 14 draft --half A` and `--half B`, then `... 14 close` (dry), then
`... 14 close --write`, then commit the printed paths after your medical read.

**Then ch.15–20, each the same way** (`locate` → confirm banners → `render` → `stage` → `gate` →
`check --ack` → `draft` → `close`). Register each new chapter in the runner's `CH` table only **after
`locate` shows its banners** against the map below; invent no page ranges.

**House chapter map (from `progress\resume-peds.md`, ~line 659 — the visual column is the trusted one):**

| ch | title | book pp. | expected |
|---|---|---|---|
| 15 | Allergy | 118–120 | 6 |
| 16 | Growth & puberty | 121–125 | 14 |
| 17 | Pediatric emergencies | 126–134 | 26 |
| 18 | Accidents & poisoning | 135–136 | 4 |
| 19 | Liver | 137–140 | 9 |
| 20 | Malignant disease | 141–148 | 22 |

**Bank ends book p.148; paediatric surgery beyond it is entirely out of scope** (user ruling
2026-09-02). Counts are a hint the gate reports, never trusts — recount from the page images.

---

## STATE MEASURED FROM DISK 2026-09-03 — re-measure, do not quote

| | |
|---|---|
| `Q_PEDS` (House) | **296**, holes 0 — **ch.1–13 spliced & committed (`ef1f9d5`)** |
| `Q_NEURO` | **268**, holes 0 — untouched |
| `Q_PEDS_EP` | **351** — not yours, and moving fast |
| git | `8ce3003`, **16 unpushed**, origin is GitHub. Nothing of yours is uncommitted at write time |

**House remaining: 97 questions, ch.14–20** (bank 393 − `Q_PEDS` 296 = 97 = 16+6+14+26+4+9+22). Both
"150" and "124" from older prompts are stale.

---

## NEURO — untouched, 268 live (hand-staged; the runner is House-only)

The Codex runner is wired for House pages only. Neuro stays on its existing manual flow. Next:
**topic 22, Q137 on PDF 94 / book p.89.** Bank identity **GRADE GAIN**. **ONE page per sheet, NOT
2-up.** Offset **PDF = book + 5**; in scope **PDF 6–98 only**. Full map: `progress\resume-neuro.md`,
last block (original `RESUME-READ-FROM-HERE` anchor). Remaining ~29 (psychiatry Q137–165).

**Peds papers are 17 Sep; neuro is 3 Oct. Peds first.**

---

## READ THIS MUCH, AND NO MORE

1. `progress\WORKFLOW-who-does-what.md` — the whole House brief: the loop, the AGENTS.md checklist, the
   Codex recipes, the carried open items. Read it once.
2. `tools\bank-harness\pd-staging-brief.md` and `pd-draft-brief.md` — the transcription/drafting
   contracts the runner hands to Codex. **§0 (the ~70-step cap) and §10a are binding; keep them if you
   edit a brief.**
3. `progress\resume-peds.md` — **~47k tokens, NEVER read whole.** Only for the ch.15–20 map and the
   standing USER RULINGS below the second anchor:
   ```bash
   sed -n '/RESUME-READ-FROM-HERE-2/,$p' progress/resume-peds.md
   ```
   ⚠️ **Print the first and last line any new `sed` range resolves to before trusting it** — a range
   that silently returns everything and one that silently returns nothing are the same bug.
4. `CLAUDE.md` and `MEMORY.md` load themselves. Do not re-read them.

⚠️ **Never `Read` a red-band file.** `grep -n` for headings, then `sed` the range.
⚠️ **Entry fields are `n, p, boiler, stem, opts, key, fig?, straddle?, note`** — `p` not `page`, `key`
not `answer`, and `key` is a **0-based index or `null`**, never a letter.

---

## STANDING CONSTRAINTS

- **OCR is a search index, never a clinical source.** Never take a numeral, exponent, unit, dose or key
  letter from it.
- **⚠️ Contradictions are RECORDED, never corrected — the key NEVER moves.** The note goes in `note`
  (staging) / `explanation` (draft). A defective printed key is noted, never disputed, never taken to
  the user. Settled: the three exact duplicate-option pairs in the shipped corpus are all printed
  defects, all caught by eye, all recorded, **zero reached the app as errors**.
- **A shared option menu PAIRS questions, it never folds them** — write the comparative table once in
  the lowest-numbered member; siblings name that anchor and give only their own discriminating token.
  **The split must not cut a shared menu.**
- **The printed question number is not a unique id** — ch.13 skips Q11 in the source. Do not derive an
  id from the printed number blind.
- **A repaired back-reference must not answer its own question** — hand-read each against its antecedent
  AND its own key; no instrument sees this.
- **Figures: modality and view only.** An `imgAlt`/`fig` must never answer the question it belongs to.
- **Cosmetic defects transcribed silently, never catalogued** — exception, always flagged: numbers,
  units, doses, exponents.
- **Write/Edit for content, Bash for reads** — heredocs collapse backslashes; backticks in a
  double-quoted `node -e` are command substitution. Append with `Edit`, never `Write` over live work.
- **Skip all OSCE content.** **Do not edit `progress\ledger.md`** while another chat is live.
- **Never modify, rename, move or delete a source PDF.** Renders go to the scratchpad; no scanned page
  leaves this machine.
- **AGENTS STOP AT ~70 TOOL CALLS AND HAND BACK** — a partial pass reported honestly is a success. Cost
  is step count, not starting context. `lean-drafter`, never `general-purpose`; one at a time; verify
  from disk, never from a report. Kill this session at the end of the work block.
- **🧊 Exam freeze until 3 Oct — Herophilus only.**
- **Exams:** Peds OSCE **14 Sep** · Peds papers **17 Sep** · ENT 22 Sep · Ophtho 27 Sep · Neuro 3 Oct
  · Peds papers 18–19 Oct. **Scope is never cut** — if time runs short, say so loudly.

**TRUST THE DISK AND THE STAGING OVER THIS PROMPT, AND TELL ME WHERE I WAS WRONG.**

---

## Changed since v4 (2026-09-03) — parallel Codex staging is now available

**One line:** you may **pre-stage House chapters concurrently** to keep a checked-ready queue in front
of the human gate. The gate itself (step 5) is unchanged and is never parallelized.

**Ceiling, measured 2026-09-03** (`ophthalmology qb.pdf` renders, 8 jobs at once): **8 concurrent
`codex exec` calls held clean** — every job exit 0, ~21.6k input tokens each (images loaded), **zero
429/rate-limit**. So concurrency is real. Two facts bound it:
- **All chats share ONE ChatGPT/Codex login.** The proven **hard ceiling is 8 total across every live
  chat.** With the endpoint chat now able to fire Codex too, **cap THIS chat at 4 concurrent** so the
  two chats bursting at once still land at the tested 8.
- **The bursts tested were ~60 s.** A *rolling* plan limit could still trip over hours. If any job's log
  shows `exit 429` or rate-limit text, **back off: double the gap (cap 60 s), retry the SAME pages**,
  and drop your concurrency by one for the rest of the block.

**The safe parallel unit is a whole chapter, not a page batch.** Each chapter owns its own
`house-ch<N>-<slug>.loop.json` and array file, so **different chapters' `stage` steps are fully disjoint
and race nothing** — render then fire up to 4 at once:
```bash
for ch in 15 16 17 18; do node tools/chapter-loop.js $ch render; done
for ch in 15 16 17 18; do node tools/chapter-loop.js $ch stage & done; wait
# then gate + human check + draft + close each, one at a time, reading keys against the page
```
⚠️ **Never run two `stage --pages` on the SAME chapter concurrently** — both mutate that chapter's one
array file and will clobber each other. Parallelism is *across* chapters only.

**This buys transcription latency, not the critical path.** Staging is already ~3 min/chapter; the wall
is the **human key/dose/exponent read (step 5)**, which stays serial and irreducible. Pre-staging 15–20
just means you never *wait* on Codex — every chapter arrives ready to gate.

⚠️ **Do NOT point this at the giant endpoint scans** (ENT 3075 pp / Ophtho 2442 pp / Neuro 2190 pp).
They are unstaged, of uncertain format (Ophtho endpoint is not clean MCQ) and **unconfirmed scope** — the
exact parallel, Peds endpoint part 2, is deferred. Bulk-running 8-wide Codex into a 3000-page scan is the
uncontrolled burn the freeze exists to prevent. That target needs the user's explicit scope sign-off.
