# CLOSED 2026-09-05 -- THIS PROMPT IS SPENT, DO NOT RELAUNCH IT

Part 1 of the pediatrics endpoint bank ran to its end under this prompt and is finished:
Q_PEDS_EP holds 705 entries, 0 holes, 15 sections spliced, and the app boots with 0 console
errors. The close-out, every section report and the page-coverage measurement that proved the
book was fully transcribed are at the tail of progress/resume-peds-endpoint.md.
Part 2 continues in its own chat from progress/resume-peds-endpoint-part2.md.
Kept below unchanged as the record of how part 1 was run.

---

# Endpoint chat resume — PEDIATRICS ENDPOINT (2026-09-03, v6)

Paste into a **fresh Opus chat** at `D:\claude os\Medical school\Herophilus`.
**Supersedes v5 entirely** — same filename, rewritten in place, so `MEMORY.md`'s pointer still holds.
**One prompt per chat.** Do not paste into a live chat.

**What changed from v5:** the run advanced from section 7 (291) through section 8 to **section 9
Infection, whose drafts are on disk and untracked** — that is your next action. Also: a **Codex staging
lane now exists** (`AGENTS.md` + `tools\chapter-loop.js`), but it is **House-only** and does not touch
your flow. You stay on `*-pd-ep.js` and `keypos.py`. See the note at the end before you consider wiring it.

---

## MEASURE FIRST — a resume prompt is a claim about the past, not the present

```bash
git log --oneline -3 && git status --short && git log --oneline @{u}..HEAD | wc -l
node -e "const vm=require('vm'),fs=require('fs');const c={};new vm.Script(fs.readFileSync('app/data/questions.peds.ep.js','utf8')).runInNewContext(c);console.log('Q_PEDS_EP',c.Q_PEDS_EP.length,'holes',c.Q_PEDS_EP.filter(x=>x===undefined).length)"
node tools/bank-harness/val-pd-ep.js 9 A | tail -3
node tools/bank-harness/val-pd-ep.js 9 B | tail -3
```

**Where this file and the disk disagree, the disk wins. Say where this file was wrong.**
Every predecessor of this file was wrong within the hour, because you commit faster than a prompt can be
revised. Do not trust a number printed below until you have re-measured it.

---

## WHAT YOU OWN, AND WHAT YOU DO NOT

You are the **pediatrics endpoint chat**. Chat B owns the pediatrics **House** bank and neuro.

| You own | Chat B owns |
|---|---|
| `app\data\questions.peds.ep.js` | `app\data\questions.peds.js` · `questions.neuro.js` |
| `content\peds\qb-pages\endpoint-*` · `…\ocr\ep1\` | `content\peds\qb-pages\house-*` · `content\neuro\` |
| `app\assets\q\q-pd-ep-*.jpg` | `app\assets\q\q-pd-hd-*.jpg` |
| `tools\bank-harness\*-pd-ep.js` · `tools\ep-index\` | `tools\bank-harness\*-pd.js`, `*-pd10.js` · `tools\chapter-loop.js` |
| `progress\resume-peds-endpoint.md` · `pd-staging-brief.md` | `progress\resume-peds.md` · `resume-neuro.md` |

**Scope is `Pediatrics endpoint part1.pdf` ONLY.** Part 2 is deliberately deferred by the user
(2026-09-02). Do not open it, do not plan for it, do not treat part 1 as half a job. When part 1 closes,
say so and stop. **Paediatric surgery is entirely out of scope** (`pd-staging-brief.md` §11a).

⚠️ **Stage EXPLICIT PATHS — never `git add -A`.** Chat B commits in the gaps between your commands.
`git commit -F <msgfile> -- <paths>`. If git reports `index.lock`, Chat B is mid-commit: **wait and
retry, never delete it.** A dirty tree containing Chat B's files (including new `house-ch*` and
`house-ch*.loop.json`) is NORMAL.

⚠️⚠️ **`splice-pd.js` and `val-pd.js` write Chat B's live file.** Your harness is **`val-pd-ep.js` /
`splice-pd-ep.js`**, and every splice you ever run is `splice-pd-ep.js`. Never run the House tools, and
never run the new `tools\chapter-loop.js` — it is House-only and writes House files.

⚠️ **Do not `git push`.** It was blocked by the permission layer for this chat; commit normally and say
what is unpushed (16 commits at write time). The main `D:\claude os` chat pushes.

**Never touch:** `app\index.html` · `app\data\questions.js` · `questions.peds.js` · `questions.neuro.js`
· `modules.js` · `progress\ledger.md` · `content\peds\qb-pages\house-*` · `*-pd.js` · `*-pd10.js` ·
`tools\chapter-loop.js`.

---

## WHERE THE RUN STANDS — measured from disk 2026-09-03, re-measure before quoting

| | |
|---|---|
| `Q_PEDS_EP` | **351**, holes 0 (loaded the array, read `.length`) |
| Sections 1–7 | **CLOSED, spliced, folded, committed** |
| Section 8 Allergy | **drafted (half A, 9 q) and tracked** — confirm it is spliced by re-measuring `Q_PEDS_EP` |
| Section 9 Infection | **IN FLIGHT — this is your next action.** `endpoint-s09-infection.array.js` + `draft-A` + `draft-B` are on disk and **UNTRACKED**; parts A–D merged into the array |
| git | `8ce3003`, **16 unpushed**, origin is GitHub |

**Corpus at the same moment:** ENT 2,240 · Ophtho 1,598 · Neuro 268 · Peds House **296** · Peds endpoint
**351**. Holes 0 everywhere. **Never compare against a number written here** — load the array and read
`.length`.

---

## YOUR NEXT ACTION — close section 9 (Infection)

Both drafts exist and appear to validate (draft-A and draft-B each returned chapter summaries). Do this,
in order, reading each PASS line yourself:

```bash
node tools/bank-harness/val-pd-ep.js 9 A        # read the PASS/FAIL line, not just the word count
node tools/bank-harness/val-pd-ep.js 9 B
python tools/ep-index/keypos.py "<pdf>" --calibrate content/peds/qb-pages/endpoint-s09-infection.array.js
node tools/bank-harness/splice-pd-ep.js 9        # dry run first; it refuses unless the validators pass
node tools/bank-harness/splice-pd-ep.js 9 --write
node tools/boot-check/boot-check.js
```

**A dead agent's last entry is a KNOWN-BAD spot** — if either validator names an entry (e.g. `marker
appears 0 times`), that entry is half-written; finish it, re-validate, then splice. **Check for
crop/`imgAlt` debts the validator surfaces before you splice** — an uncut crop stops being "expected"
the moment you splice, and an `imgAlt` must be read by eye (modality and view only; it must never answer
the question). Then commit the s09 files with explicit paths.

After s09, continue part 1 to its end, section by section, then say part 1 is closed and stop.

---

## ⚠️ THE KEY CHECK IS A TOOL — keep using it

`python tools\ep-index\keypos.py "<pdf>" <page> <n_options>` reports which option the yellow highlight
sits on, from pixels alone — no OCR, no staging file. It is the only check in this project that does not
compare the human's reading with itself.

```bash
python tools/ep-index/keypos.py "Semester 8/Pedo/Questions/Pediatrics endpoint part1.pdf" 584 5
python tools/ep-index/keypos.py "<pdf>" --calibrate content/peds/qb-pages/endpoint-s09-infection.array.js
```

**Calibration of record (2026-09-03): 235 staged keys across the four closed sections → 232 agree, 2
disagree, 1 abstain; all three misses rendered and read by eye, all 235 staged keys were RIGHT.** A
disagreement measures the tool, not the bank. Two known limits: an option **below** the key wrapping,
and **figures printed beside the option column**. ⚠️ **It is a CHECK, never a source. Disagreement means
"render this page", not "change the key."** Its calibration is invalidated by any constant change and by
a different PDF — re-run `--calibrate` and REPLACE the numbers. **Run `--calibrate` on every section's
array before you splice it** — ~0.42 s a page, the only independent look the keys get.

---

## READ THIS MUCH, AND NO MORE

1. `progress\resume-peds-endpoint.md` — **~1,700 lines, NEVER read whole.** Its two-range reading
   instruction is at the top; anchor both ranges on HEADINGS (`.*`, not `.`, because the emoji and § are
   multi-byte and `.` matches neither). **Print the first and last line any new range resolves to.**
2. `tools\bank-harness\pd-ep-draft-brief.md` — your drafting brief. **§0 (the ~70-step cap) is binding;
   keep it if you edit.** `pd-staging-brief.md` §10a when you next stage.
3. `progress\READING-COSTS.md` before opening anything else in `progress\` — and re-measure.
4. `CLAUDE.md` and `MEMORY.md` load themselves. Do not re-read them.

⚠️ **Never `Read` a red-band file.** `grep -n` for headings, then `sed` the range.

---

## STANDING CONSTRAINTS

- **OCR is a search index, never a clinical source.** Never take a numeral, exponent, unit, dose or key
  letter from it. It drops a **different** whole line at each resolution — that is why both passes are kept.
- **⚠️ Contradictions are RECORDED, never corrected — the key NEVER moves.** The note goes in
  `explanation`, quoting the source. A defective key is noted, never disputed, never taken to the user.
  Settled: the shipped corpus's three duplicate-option pairs are all printed defects, all caught by eye,
  **zero reached the app as errors.**
- **`stem` and `opts` must be BYTE-IDENTICAL to staging.** The validator compares with `JSON.stringify`.
  **The staged `key` is a 0-based INDEX, not a letter.**
- **Cosmetic defects transcribed silently, never catalogued** — exception, always flagged: numbers,
  units, doses, exponents.
- **Write incrementally to disk** — resume by `Edit`-appending, never `Write`, so a replacement can pick
  up your half.
- **Never modify, rename, move or delete a source PDF.** Renders go to the scratchpad; no scanned page
  leaves this machine.
- **Write/Edit for content, Bash for reads** — heredocs collapse backslashes; backticks in a
  double-quoted `node -e` are command substitution.
- **AGENTS STOP AT ~70 TOOL CALLS AND HAND BACK** — a partial pass reported honestly is a success. Cost
  is step count, not starting context. `lean-drafter`, never `general-purpose`; one at a time; verify
  from disk. Image work in subagents only. Kill this session at the end of the work block.
- **🧊 Exam freeze until 3 Oct — Herophilus only.**
- **Exams:** Peds OSCE **14 Sep** · Peds papers **17 Sep** · ENT 22 Sep · Ophtho 27 Sep · Neuro 3 Oct ·
  Peds papers 18–19 Oct. **Scope is never cut** — if time runs short, say so loudly.

---

## THE CODEX LANE — exists, House-only, not yours (yet)

Chat B now stages and drafts House through Codex, driven by `tools\chapter-loop.js`, bound by the root
`AGENTS.md`. Codex is a **subprocess a chat calls**, not a chat of its own. The runner is wired for House
page geometry and writes House files, so **it does nothing for endpoint as it stands**. Wiring endpoint
into it would need: endpoint chapters registered in the runner's `CH` table, `val-pd-ep.js` /
`splice-pd-ep.js` taught the runner's integer-key output, and a decision on how `keypos.py` folds into
the machine gate. **That is future work — do not attempt it mid-flight. Finish part 1 on the tooling you
have.** If the user asks to fold endpoint into the Codex lane, plan it separately.

**TRUST THE DISK AND THE STAGING OVER THIS PROMPT, AND TELL ME WHERE I WAS WRONG.**

---

## Changed since v6 (2026-09-03) — the shared Codex ceiling (awareness only)

Nothing in your flow changes — you are still hand-staged on `*-pd-ep.js` + `keypos.py`, and the Codex
lane is still House-only and deferred for you. This note only records the budget, because **every chat
shares ONE ChatGPT/Codex login.**

Measured 2026-09-03: **8 concurrent `codex exec` calls held clean** (all exit 0, ~21.6k input tokens
each, zero 429). The **hard shared ceiling is 8 total across all live chats.** Chat B is now capped at 4
concurrent staging jobs. **If you ever wire endpoint into Codex** (a separate, user-approved task — do
not attempt it mid-flight), **cap yourself at 4** so the two chats bursting together stay at the tested
8, and **back off on any `exit 429`** (double the gap, cap 60 s, retry the same pages).
