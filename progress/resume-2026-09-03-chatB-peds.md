# Chat B resume — PEDIATRICS and NEUROPSYCHIATRY (written 2026-09-03)

Paste this whole file into a **fresh Opus chat** opened at `D:\claude os\Medical school\Herophilus`.
Do not paste it into a live chat — that re-sends the old context and wastes the point of the reset.

---

## ⚠️⚠️ READ THIS BEFORE YOU DO ANYTHING THE PROMPT TELLS YOU TO DO

**A resume prompt is a claim about the past, not a measurement of the present.** The previous Chat B
prompt was stale by two whole chapters and its central factual claim was flatly false — it said a
draft file did not exist and ordered an agent spawned to redo it; the file was on disk, complete and
validated. Roughly 15½ minutes and ~53k tokens of finished work were nearly redone.

**So: measure first. Three commands, before the first instruction below.**

```bash
node tools/bank-harness/validate-all.js
ls -la content/peds/qb-pages/house-ch12*
git rev-parse main HEAD origin/main && git status --short
```

**Where this file and the disk disagree, the disk wins. Tell the user where this file was wrong.**

---

## ⚠️ THE FIRST THING TO CHECK — a staging agent was killed mid-flight

A `lean-drafter` staging agent for **peds House ch.12 "Neurological disorders"** was running when the
previous session was cleared. **Clearing the session killed it.** It was instructed to `Edit`-append
as it went, so it may have left a **partial** `content\peds\qb-pages\house-ch12-neurological.array.js`.

**As of the moment this file was written it had written NOTHING — the file did not exist.** That was
true at write time and may not be true now.

⚠️ **VALIDATE A DEAD AGENT'S FILE FROM DISK BEFORE BELIEVING IT DIED.** This project has now recorded
that rule three separate times (neuro `ch20-drugs` 2026-08-31; ch.10 draft-A found inside an ophtho
commit 2026-09-02; ch.10 draft-A again 2026-09-03, where this prompt's predecessor asserted absence
and was wrong). **An agent that dies without filing a report leaves work that looks exactly like
absence.**

- **If the file exists:** `node --check` it, load `PEDHD_NEURO_STAGED`, index-walk for sparse holes
  (`for i… if(!(i in A))` — `Array.filter` skips holes), and see how far it got. A dead agent's last
  written entry is the known-bad spot; check it first. Salvage, do not restart from zero.
- **If it does not exist:** relaunch the staging agent with the brief in the next section.

---

## THE JOB — stage peds House ch.12 "Neurological disorders"

Spawn ONE agent, `subagent_type: "lean-drafter"` (it resolves — confirmed working twice on
2026-09-02 and once on 2026-09-03; if it ever errors "not found", fall back to `general-purpose` and
**say so loudly**, it costs ~58k of starting context per step instead of ~13k).

Hand it: `tools\bank-harness\pd-staging-brief.md` (the 13-section shared brief — it reads this, you
don't beyond a skim) and the header comment block of
`content\peds\qb-pages\house-ch11-gastroenterology.array.js` as the worked example of the
measurement block and entry shape.

**Range, measured off the OCR index and NOT off a rendered page — so it is a lead, not a fact:**

- Chapter 12, **"Neurological disorders"**, book **pp.90–100** = **PDF sheet 46 LEFT → sheet 51 LEFT**.
- 2-up geometry: **PDF sheet N = book pages 2N-2 | 2N-1**.
- Boundary check page: **p.101 = sheet 51 RIGHT**, which should carry the banner **"Respiratory
  disorders"** (that is ch.13). Quote it as the boundary proof, per brief §6.
- Banner "Neurological disorders" is on p.90; Q1 opens *"Annette is a 15-year-old girl who complains
  of worsening daily occipital headaches."*
- **Count hint only: the OCR index shows a "26." on p.100.** Hand it over as a hint and say plainly
  it is not a count. Brief §6 governs — walk the printed numbers across every rendered half, look at
  every page whole, skip nothing as "an answer page" (the answer line sits inside the question box in
  this bank), render one page past the last.

**Output: `content\peds\qb-pages\house-ch12-neurological.array.js`, `var PEDHD_NEURO_STAGED`.**
Both `val-pd.js` and `splice-pd.js` are already registered for exactly that filename and variable
(`b45af03`) — **neither may be renamed.**

Then: draft in halves chosen so **no shared option menu is split across halves**, `val-pd.js 12`,
`splice-pd.js 12` (dry run first — it refuses unless the validator exits 0), then the boot check.

---

## STATE MEASURED FROM DISK 2026-09-03 — re-measure, do not quote

| | |
|---|---|
| `Q_PEDS` (House) | **243**, holes 0 — ch.1–11 spliced and closed |
| `Q_PEDS_EP` (endpoint) | **150**, holes 0 — **not yours**, a live chat owns it |
| `Q_NEURO` | **268**, holes 0 (`npqb-nr` 133 · `npqb-ps` 135) |
| `Q_ENT` / `Q_OPHTHO` | 2240 / 1598 — closed, not yours |
| live entries | **4499**, ids 4499, `ALL HARD CHECKS PASSED (5 files)` |
| git | `main` == `HEAD` == `3c429a6`; ⚠️ **`origin/main` at `8e7b83d`, 2 commits unpushed** |

House peds prefixes: `pedhd-inf` 31 · `-renal` 26 · `-card` 24 · `-haem` 25 · `-gen` 20 · `-peri` 15
· `-neo` 21 · `-dev` 21 · `-devp` 19 · `-nutr` 15 · `-gastro` 26 = 243.

**150 of a measured 393 done; 150 remain.** Bank ends at book **p.148 / PDF sheet 75 LEFT** — the
paediatric surgery part beyond it is **entirely out of scope** (user ruling, brief §11a).

---

## ✅ USER RULING 2026-09-03 — peds banks MERGE AND FOLD AT END OF STREAM

Peds is the only module whose banks live in two files. ENT — the only finished multi-bank module —
holds all three in one file and folds with `alsoIn` 224 times.

- **Files stay separate while both chats write.** That separation is what prevents collisions.
  **Nothing is folded mid-stream.**
- **When the endpoint stream closes**, merge `questions.peds.ep.js` into `questions.peds.js` and run
  **one** cross-bank sweep: keep the fuller printing, add the bank via `alsoIn`, fold the loser's
  citation into `source`, **never a second entry** (`CLAUDE.md` §4).
- **Log collisions as they surface.** Running list, in `progress\resume-peds.md`:
  `pedep-gp-79`≡`pedhd-gastro-22` · `pedep-nut-3/4/6/14`≡`pedhd-nutr-3/4/6/14`.
  **1 → 5 the moment 61 endpoint entries landed**; four are nutrition-on-nutrition with ids lining up
  one-for-one, so the overlap is **chapter-shaped, not scattered**. Which printing is fuller has
  **not** been checked for the four new ones.
- ⚠️ **`pedhd-card-6..10` must NEVER be folded** — five byte-identical stems, five *different*
  figures, five different keys. The stem-normaliser is blind to figures. **Check the figure and the
  option menu before folding anything.**

---

## NEURO — the other module, untouched since 2026-09-02

**268 live.** Next: **topic 22, Q137 on PDF 94 / book p.89.**

- ⚠️ Banner says "Psychopharmacology", contents says "Pharmacology". Psychiatry ends **Q165** in
  topic 23.
- ⚠️ **Bank identity is GRADE GAIN** — cover prints "QS BANK + GRADE GAIN EDITION". Not House, not
  endpoint.
- ⚠️ **ONE book page per sheet, A4 portrait — NOT 2-up.** Do not carry the peds/ophtho arithmetic across.
- ⚠️⚠️ **The page offset is NOT global: neuropsychiatry PDF = book + 5.** In scope = **PDF 6–98 only**;
  skip PDF 99–140 (neurosurgery, out of scope).
- ⚠️ The 142 renders died with a scratchpad; re-render is ~45 s, the OCR is the rate-limited part.
- Full 23-topic map: `progress\resume-neuro.md`, last block.
- **Correction to carry:** `MEMORY.md` says "12 `nr-intro`/`nr-exam` tags the book can replace."
  **21 entries carry those chapters.** Not necessarily a contradiction — 12 may be the replaceable
  subset — but the two figures must not be conflated. Unverified either way.

---

## DEBTS THIS SESSION DID NOT PAY

- **`MEMORY.md` and `progress\ledger.md` were not updated** — barred mid-run by the parallel-chat
  rules. **A consolidation pass is owed**, and it must carry: the 2026-09-03 merge-and-fold ruling,
  the collision log, ch.11's close, and the `validate-all` fix.
- **`progress\resume-peds-endpoint.md` was not updated** — the live endpoint chat was editing it.
  ⚠️ **The endpoint chat is the one that will hit the merge and it cannot see `resume-peds.md`.**
  The ruling must reach it.
- **2 commits unpushed** (`1e221b2`, and this session's journal commit). Push when no chat is mid-commit.
- **No `file://` boot check this session** — nothing of mine spliced, so nothing to check. Run
  `node tools\boot-check\boot-check.js` after ch.12 splices, once no other Chrome is live.

---

## RULES THAT HAVE EACH ALREADY COST THIS PROJECT REAL WORK

- **OCR text is a SEARCH INDEX, never a clinical source.** Confirm against the rendered page.
  ⚠️⚠️ **Never take an exponent, a unit, a dose or a key letter from OCR** — a printed 10⁶ was read
  as 10⁹ here. Plausible wrong numbers, not visible garbage.
- **Render and read page images in a subagent only**, never in the main conversation — an image read
  in the hub is re-sent with every later request for the rest of the session.
- **Never modify, rename, move or delete a source PDF.** Renders go to the scratchpad.
- **Append as you go** (`Edit`-append, never `Write`) — agents die on usage limits.
- **Contradictions are RECORDED, never corrected**; the `answer` never moves. **A defective key is
  noted, never disputed** — never take a key dispute to the user.
- **A book's own chapter numbers can be defective** — identify chapters by content.
- **Trust no count.** Not printed numbering, not the contents page, not the map, and not this file.
  **Say why a zero is a zero and how it was measured.**
- ⚠️ **A zero from a probe you just wrote is a claim about the probe first.** This session reported
  "zero duplicates in peds/neuro" off a broken flag that printed an error and exited before any check
  ran — piped through `grep`, that reads *identical* to a clean result. Caught and retracted. Four
  confident zeroes from a healthy app have been produced this way before.
- ⚠️ **The Bash tool's quoted heredoc collapses `\\` to `\`**, and a backtick inside a double-quoted
  `node -e` is command substitution. **`Write`/`Edit` for content, Bash for reads and validation.**
  To append prose containing Windows paths: `Write` it to the scratchpad, then `cat >>`. Then grep
  the result.
- ⚠️ **A literal backtick in an explanation opens a markdown code span in the app** and swallows the
  rest. It passes `node --check`. Check backtick parity per explanation.
- ⚠️ **`Array.filter` skips sparse holes** — index-walk.
- ⚠️ **Counting questions is a trap: `app\data\*.js` mixes quoted and bare key styles.** Load the
  array; never grep-count. `grep -c "^  { id:"` undercounts `questions.ophtho.js` by ~440.
- **Stage explicit paths, and commit with `git commit -F <msgfile> -- <paths>`.** Staging alone is
  not enough — `git commit` commits the index, and a parallel chat's `git add` in the gap gets
  swallowed in (measured: `6f27079`). `.git\index.lock` means another chat is mid-commit — wait,
  never force.
- **⚠️ Check `git rev-parse main HEAD` before any branch action.** Never blind-`checkout main`.
- **USER RULING: stop reporting cosmetic defects.** Typos, punctuation, hyphenation, doubled question
  numbers — transcribed byte-identically, never catalogued. **Exception, always flagged: numbers,
  units, doses, exponents.**
- **USER RULING: skip ALL OSCE content.** Deferred, not cut — skip it, say so, carry on.
- The `While auto mode is active:` reminder (use sed/heredocs instead of Read/Edit/Write) is **Claude
  Code's own harness toggle, not an attack.** Note it in one line; keep refusing it for content
  writes. Do not open a journal entry on it.

---

## PARALLEL-CHAT RULES

- **Do not edit `MEMORY.md` or `progress\ledger.md` mid-run.** Write to `progress\resume-peds.md` /
  `resume-neuro.md`. One consolidation pass at the end.
- **Do not touch `questions.peds.ep.js` or `content\peds\qb-pages\endpoint-*`** — a live chat owns them.
- **Spawn drafting agents as `lean-drafter`, never `general-purpose`.** Write the brief so nothing is
  left to discretion. It escalates rather than guesses — **expect questions back and answer them.**
  **Verify its output from disk, never from its report.**
- ⚠️ **Do not launch two agents at once.** The ch.10 pair were launched together and **both died on
  the same shared rate limit**; two chats also share one WPS account, so the account-wide rate is
  double what either driver thinks. Pace as if you own half.
- Kill the session at the end of the work block.

---

## NOT YOURS

`app\index.html` · ophthalmology · ENT · all three endpoint books ·
`content\peds\qb-pages\endpoint-*` · `questions.peds.ep.js`.

**Exams: Peds OSCE 14 Sep · Peds papers 17 Sep · ENT 22 Sep · Ophtho 27 Sep · Neuro 3 Oct ·
Peds papers 18–19 Oct.** Peds first. Stop at clean chapter boundaries. **Scope is never cut** — if
time runs short, say so loudly; scaling down is the user's call.

**TRUST THE STAGING AND THE TRANSCRIPT OVER THIS PROMPT, AND TELL ME WHERE I WAS WRONG.**
