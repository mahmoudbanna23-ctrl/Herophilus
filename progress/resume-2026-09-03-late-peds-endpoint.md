# Endpoint chat resume — PEDIATRICS ENDPOINT (written 2026-09-03, v5)

Paste into a **fresh Opus chat** at `D:\claude os\Medical school\Herophilus`.
**Supersedes v4 entirely** — same filename, rewritten in place, so `MEMORY.md`'s pointer still
holds. **One prompt per chat.** Do not paste into a live chat.

---

## MEASURE FIRST — a resume prompt is a claim about the past, not the present

```bash
git log --oneline -3 && git status --short && git log --oneline origin/main..HEAD | wc -l
node tools/bank-harness/val-pd-ep.js 7 A | tail -4
node tools/bank-harness/val-pd-ep.js 7 B | tail -4
```

**Where this file and the disk disagree, the disk wins. Say where this file was wrong.**
Every predecessor of this file was wrong about something; v4 was wrong about the run's position
within an hour of being written, because you commit faster than a prompt can be revised.

---

## WHAT YOU OWN, AND WHAT YOU DO NOT

You are the **pediatrics endpoint chat**. Chat B owns the pediatrics **House** bank and neuro.

| You own | Chat B owns |
|---|---|
| `app\data\questions.peds.ep.js` | `app\data\questions.peds.js` |
| `content\peds\qb-pages\endpoint-*` · `…\ocr\ep1\` | `content\peds\qb-pages\house-*` |
| `app\assets\q\q-pd-ep-*.jpg` | `app\assets\q\q-pd-hd-*.jpg` |
| `tools\bank-harness\*-pd-ep.js` · `tools\ep-index\` | `tools\bank-harness\*-pd.js`, `*-pd10.js` |
| `progress\resume-peds-endpoint.md` · `pd-staging-brief.md` | `progress\resume-peds.md` |

**Scope is `Pediatrics endpoint part1.pdf` ONLY.** Part 2 is deliberately deferred by the user
(2026-09-02). Do not open it, do not plan for it, do not treat part 1 as half a job. When part 1
closes, say so and stop. **Paediatric surgery is entirely out of scope** (user ruling 2026-09-02,
`pd-staging-brief.md` §11a).

⚠️ **Stage EXPLICIT PATHS — never `git add -A`.** Chat B commits in the gaps between your commands.
`git commit -F <msgfile> -- <paths>`. If git reports `index.lock`, Chat B is mid-commit: **wait and
retry, never delete it.** A dirty tree containing Chat B's files is NORMAL.

⚠️⚠️ **`splice-pd.js` and `val-pd.js` write Chat B's live file** — `splice-pd.js` hardcodes
`questions.peds.js`, and its duplicate guard lets `pedep-` ids straight through. They are **Chat B's
files.** Never stage them, never run them on endpoint files. Your harness is **`val-pd-ep.js` /
`splice-pd-ep.js`**, and every splice you ever run is `splice-pd-ep.js`.

**Never touch:** `app\index.html` · `app\data\questions.js` · `app\data\questions.peds.js` ·
`modules.js` · `progress\ledger.md` · `content\peds\qb-pages\house-*` · `*-pd.js` · `*-pd10.js`.

---

## READ THIS MUCH, AND NO MORE

1. `progress\resume-peds-endpoint.md` — **1,678 lines / 114,549 bytes, ~28k tokens. NEVER read it
   whole.** It carries its own two-range reading instruction at the top; the ranges resolve to
   **46,558 bytes, 41%, ~11k tokens** (re-measured 2026-09-03 after section 7 appended):

   ```bash
   sed -n '1,/^## .*SECTION 1 REPRINTS ITSELF/p' progress/resume-peds-endpoint.md
   sed -n '/^## .*Emergencies SPLICED/,$p'       progress/resume-peds-endpoint.md
   ```

   ⚠️ **Both anchor on HEADINGS, not on the `RESUME-READ-FROM-HERE` marker, deliberately** — a
   `sed` for that marker matches the file's own note about the marker first and returns nearly
   everything. ⚠️ **And `.` does not stand in for the emoji or the section sign**: they are
   multi-byte, so `/^## . SECTION 1/` matched nothing and returned the whole file while its
   partner returned zero bytes. `.*` is what works. **Print the first and last line any new range
   resolves to before trusting it.**
2. `tools\bank-harness\pd-ep-draft-brief.md` — your drafting brief. **§0 is new and binding**
   (the ~70-step cap). `pd-staging-brief.md` §10a when you next stage.
3. `progress\READING-COSTS.md` **before opening anything else in `progress\`** — and re-measure.
4. `CLAUDE.md` and `MEMORY.md` load themselves. Do not re-read them.

⚠️ **Never `Read` a red-band file.** `grep -n` for headings, then `sed` the range.

---

## WHERE THE RUN STANDS — measured from disk 2026-09-03, re-measure before quoting

| | |
|---|---|
| `Q_PEDS_EP` | **291**, holes 0 (loaded the array and read `.length`) |
| Sections 1–6 | **CLOSED, spliced, folded, committed** |
| Section 7 Neonatology | **staging CLOSED at 53** — `endpoint-s07-neonatology.array.js`, parts A+B+C merged by `merge-parts-ep.js`. PDF pp.774–903; **PDF page = printed page, offset zero** |
| Section 7 drafting | **IN FLIGHT — this is your next action, see below** |
| git | `084b075` pushed by the main chat; the only untracked files are your two s7 drafts |

**Corpus at the same moment:** ENT 2,240 · Ophtho 1,598 · Neuro 268 · Peds House 269 · Peds
endpoint 291. Holes 0 everywhere. **Never compare against a number written here** — the corpus
moves by the commit; load the array and read `.length`.

---

## YOUR NEXT ACTION — finish drafting section 7, in thirds

The staging parts define the thirds, and the drafts follow them:

| third | `n` range | state |
|---|---|---|
| A | 1–18 | ✅ **`val-pd-ep.js 7 A` → ALL CHECKS PASSED**, 4,710 words, 18 entries |
| B | 19–36 | ⚠️ **INCOMPLETE — 19–26 written, and it FAILS** |
| C | 37–53 | ❌ not started |

**Half B's exact failure, measured:** `pedep-neo-26: marker appears 0 times`. Entry 26 is
half-written — the previous agent stopped inside it. **Open `endpoint-s07-neonatology.draft-B.js`,
finish n=26 first, then continue to n=36**, then run `val-pd-ep.js 7 B` yourself before reporting.
The other seven entries in B pass; their word counts are 219–353 against a ~250/~520 budget.

**A dead agent's last entry is a KNOWN-BAD spot — check it before anything else.** That is exactly
what happened here, and the validator names it for you.

Then half C (37–53), then `splice-pd-ep.js`, then `node tools\boot-check\boot-check.js`.

**Two open crop/alt debts the validator already surfaced** — do not let them ship silently:
- `pedep-neo-7`: crop `q-pd-ep-810.jpg` **not cut yet** (the validator says "expected at this
  stage" — it stops being expected once you splice).
- **`imgAlt` must be READ BY EYE, and three in half A are identical:** `pedep-neo-1`, `-5` and
  `-6` all read *"Grayscale frontal (AP) chest radiograph of a newborn infant."* Identical alt on
  three different films is a copy, not a description. ⚠️ **An `imgAlt` must not answer the
  question** — modality and view only (`CLAUDE.md` §4; this gave away six answers once).

---

## ⚠️ THE KEY CHECK IS NOW A TOOL — you already used it once, keep using it

`python tools\ep-index\keypos.py "<pdf>" <page> <n_options>` reports **which option the yellow
highlight sits on**, from pixels alone — no OCR, no `index.json`, no staging file. It is the only
check in this project that does not compare the human's reading with itself, which is how a section
came within one pass of being staged an option out.

```bash
python tools/ep-index/keypos.py "Semester 8/Pedo/Questions/Pediatrics endpoint part1.pdf" 584 5
python tools/ep-index/keypos.py "<pdf>" --calibrate content/peds/qb-pages/endpoint-s07-neonatology.array.js
```

**Calibration of record (2026-09-03): 235 staged keys across the four closed sections → 232 agree,
2 disagree, 1 abstain. All three misses were rendered and read by eye; all 235 staged keys were
RIGHT.** So a disagreement measures the tool, not the bank. Its two known limits: an option **below**
the key wrapping, and **figures printed beside the option column** (their ink stops two options
separating into bands). ⚠️ **It is a CHECK, never a source. Disagreement means "render this page",
not "change the key."** ⚠️ **Its calibration is invalidated by any constant change and by a
different PDF** — the docstring says which; re-run `--calibrate` and REPLACE the numbers.

**Run `--calibrate` on section 7's array before you splice it.** It is ~0.42 s a page and it is the
only independent look the keys will get.

---

## ⚠️⚠️ §10a IS NOT OPTIONAL WHEN YOU NEXT STAGE — two agents died leaving zero bytes

Create the file with its header **before rendering anything**, then loop **one page at a time**
(render → crop → read → append → `node --check`), and **never render page N+1 before page N is on
disk.** Both dead agents obeyed "append one entry at a time" in the letter and never reached an
entry; the second died after rendering the whole range and making every crop.

---

## COST RULES — these are why the session is fresh

- **⚠️ AGENTS STOP AT ~70 TOOL CALLS AND HAND BACK** (user, 2026-09-03) — close out at 60,
  reported and stopped by 80, even with entries left. **A partial pass reported honestly is a
  success.** It is §0 of `pd-ep-draft-brief.md`; **keep §0 when you edit a brief.**
- **Cost is step count, not starting context.** The whole conversation re-sends every step and it
  GROWS. Agents all start at 29–31k; the five priciest averaged **88–107k a step over 133–287
  steps**. Check with `node "D:/claude os/tools/token-audit.js" --agents`.
- **One agent at a time. `lean-drafter`, never `general-purpose`.** Verify its output from disk,
  never from its report.
- **Image work in subagents only** — an image read in the main chat is re-sent with every later
  request, forever.
- **Kill this session at the end of the work block.** Do not carry it past ~2 days.

---

## STANDING CONSTRAINTS

- **OCR is a search index, never a clinical source.** Never take a numeral, exponent, unit, dose or
  key letter from it. It drops a **different** whole line at each resolution, which is why both
  passes are kept.
- **⚠️ Contradictions are RECORDED, never corrected — `answer` NEVER moves.** The note goes in
  `explanation`, quoting the source. **A defective key is noted, never disputed, and never taken to
  the user.** This is settled: the three exact duplicate-option pairs in the shipped corpus are all
  printed defects, all were caught by eye and recorded, and **zero reached the app as errors**.
- **Cosmetic defects transcribed silently, never catalogued** — exception, always flagged: numbers,
  units, doses, exponents.
- **`stem` and `opts` must be BYTE-IDENTICAL to staging.** The validator compares with
  `JSON.stringify`. **The staged `key` is a 0-based INDEX, not a letter.**
- **Write incrementally to disk** — resume by `Edit`-appending, never `Write`. This is what lets a
  replacement pick up your half.
- **Never modify, rename, move or delete a source PDF.** Renders go to the scratchpad.
- **Write/Edit for content, Bash for reads** — heredocs collapse backslashes and backticks are
  command substitution.
- **Exams:** Peds OSCE **14 Sep** · Peds papers **17 Sep** · ENT 22 Sep · Ophtho 27 Sep ·
  Neuro 3 Oct · Peds papers 18–19 Oct. **Scope is never cut** — if time runs short, say so loudly.

**TRUST THE DISK AND THE STAGING OVER THIS PROMPT, AND TELL ME WHERE I WAS WRONG.**

---

## Changed since v5 — 2026-09-03 14:20, measured by the main chat

- ⚠️ **The section-7 table above is STALE.** Half C is NOT "not started": all three drafts are on
  disk — A 18 ids, B 18 ids, **C 17 ids at 14:19** = **53**, matching the staged count exactly.
  Re-run both validators and go to the splice; do not re-draft.
- **Sprint plan of record agreed 2026-09-03: `progress\PLAN-sprint-to-17-sep.md`.** Read it once.
  What binds you: optimization stays closed, non-exam projects are frozen, the review tiers, and
  the floor for medical verification. **It does not change how you draft or splice.**
- **Two open debts from v5 still stand** — the `pedep-neo-7` crop is not cut, and three half-A
  `imgAlt` strings are identical across three different films. Neither has been touched.
