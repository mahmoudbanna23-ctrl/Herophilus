# Chat B resume — PEDIATRICS and NEUROPSYCHIATRY (written 2026-09-03, late block)

Paste into a **fresh Opus chat** at `D:\claude os\Medical school\Herophilus`.
**Supersedes `resume-2026-09-03-chatB-peds.md` entirely.** Do not paste into a live chat.

---

## MEASURE FIRST — a resume prompt is a claim about the past, not the present

```bash
node tools/bank-harness/validate-all.js
ls -la content/peds/qb-pages/house-ch12*
git rev-parse main HEAD origin/main && git status --short
```

**Where this file and the disk disagree, the disk wins. Say where this file was wrong.**
The predecessor prompt was wrong about git (`3c429a6` / "2 unpushed"; truth was `4aaec6b` / 8).

---

## WHAT IS DONE — ch.12 staged and hub-verified

`content\peds\qb-pages\house-ch12-neurological.array.js`, `var PEDHD_NEURO_STAGED`, **26 entries,
0 holes**, pages 90-100, keys `EDABBAABEDCDAACDCABDABDBEC`, `opts.length` 5 on all 26,
`node --check` clean. Boundary proved on p.101 ("Respiratory disorders", numbering restarts at 1).

**Full staging record — read this before drafting:** `progress\resume-peds.md`, the
**2026-09-03 (late)** block at the end. It carries the straddles, the figures, the show-through
prediction, and the shared-menu runs that constrain the split.

⚠️ **Entry fields are `n, p, boiler, stem, opts, key, note`** — `p` not `page`, `key` not `answer`.
A probe written against the wrong names returns undefined and prints a confident empty result.

---

## THE NEXT ACTION — draft ch.12 in halves

Spawn ONE `lean-drafter` (never `general-purpose`). Brief: `tools\bank-harness\pd-draft-brief.md`.

⚠️⚠️ **THE SPLIT MUST NOT CUT A SHARED OPTION MENU.** Measured runs in ch.12:
**n:8/9/14/15/16** (epilepsy syndromes, n:9 reordered) · **n:10/11/13** (syncope/absence) ·
**n:12** overlaps that trio on A-B only · **n:17/18/19/20** (clinical signs).
Because 8-16 and 17-20 interlock, **n:1-16 / n:17-26 is the only clean cut.** Verify that against
the file before committing to it.

Then: `node tools/bank-harness/val-pd.js 12` → `splice-pd.js 12` (dry run first; it refuses unless
the validator exits 0) → `node tools\boot-check\boot-check.js`.

---

## STATE MEASURED FROM DISK 2026-09-03 late — re-measure, do not quote

| | |
|---|---|
| `Q_PEDS` (House) | **243**, holes 0 — ch.1-11 spliced; ch.12 staged, NOT yet spliced |
| `Q_PEDS_EP` | **216** at 04:05 (sections 3 and 4 spliced) — **not yours, and MOVING FAST** |
| `Q_NEURO` | **268**, holes 0 | 
| `Q_ENT` / `Q_OPHTHO` | 2240 / 1598 — closed, not yours |
| validate-all | `ALL HARD CHECKS PASSED (5 files)` |
| git | ch.12 committed as `662cc5c`. **The 10 unpushed commits were PUSHED by another chat ~04:00** |

**House remaining after ch.12 splices: 124 questions, ch.13-20.** Chapter map with page ranges and
counts: `progress\resume-peds.md` line ~659. Bank ends book p.148; paediatric surgery beyond it is
**entirely out of scope**.

---

## ⚠️⚠️ THE RULE THAT COST THIS PROJECT TWO DEAD AGENTS — brief section 10a

Two ch.12 staging agents died leaving **zero bytes**; the second after rendering the whole range and
making all 30 crops. Both obeyed "append one entry at a time" in the letter and never reached an
entry. **Section 10a of `pd-staging-brief.md` is the fix:** create the file with its header
**before rendering anything**, then loop **one page at a time** (render, crop, read, append,
`node --check`), and **never render page N+1 before page N is on disk.**

**It worked first try** — the third agent's file existed one minute after launch. **Keep 10a in
every staging brief.** It has not yet been carried into the *drafting* brief; consider whether it
should be.

---

## MEASUREMENTS WORTH KEEPING

- **Staging, first ever measured:** 128 tool uses, **38.6 min, 86.4k tokens**, 11 pages / 26 q.
- **Drafting anchor:** 62 tool uses, ~15.5 min, ~53k (`resume-peds.md` ~line 2297).
- **Fan-out costing (user DROPPED it 2026-09-03):** 24 agents, 1.5-2 h floor, 3.5-4 h realistic,
  ~1.9-2.2M tokens. *"fine let's skip it, it was a crazy idea anyway."* **One agent at a time.**

---

## DEBTS — none of these were paid

- ⚠️ **`MEMORY.md` line 28 still points at `resume-2026-09-02-chatB-peds.md`. STALE.** Should point
  here. Not fixed — the endpoint chat was paused, not confirmed dead, and MEMORY.md is barred
  mid-run. **Fix in a consolidation pass when nothing else is running.**
- **`MEMORY.md` and `progress\ledger.md` not updated** — same reason. A consolidation pass owes:
  the 2026-09-03 merge-and-fold ruling, the collision log, ch.11's close, ch.12's staging, the
  `validate-all` fix, 10a, and the two staging/drafting measurements.
- ⚠️ **`git push` is BLOCKED by the permission layer for THIS chat.** Tried twice, denied
  identically, the command never executed. The 10 commits were pushed by another chat at ~04:00,
  so the backlog is clear — but **this chat cannot push.** Ask the user, or let another chat do it.
- ⚠️ **A SECOND Chat B prompt exists: `progress\resume-2026-09-03-late-chatB-peds.md`**, written
  ~04:15 by the main `D:\claude os` chat, untracked. **It and this file agree on every material
  point** (shared menus, field names, figures, straddles, bare keys, show-through). **Delete one**
  — two prompts for one chat is how a third session ends up following the staler of the two.
- **No `file://` boot check** — nothing spliced this block, so nothing to check. Run it after ch.12.

---

## NEURO — untouched, 268 live

Next: **topic 22, Q137 on PDF 94 / book p.89.** Bank identity **GRADE GAIN**. **ONE page per sheet,
NOT 2-up.** Offset **PDF = book + 5**; in scope **PDF 6-98 only**. Full map:
`progress\resume-neuro.md`, last block.

---

## STANDING CONSTRAINTS

- **`lean-drafter` for all drafting agents. One agent at a time.** Verify its output from disk,
  never from its report.
- **Do not touch `questions.peds.ep.js` or `content\peds\qb-pages\endpoint-*`** — the endpoint chat
  owns them. It is paused, not finished (uncommitted s03-gastro staging on disk).
- **Do not edit `MEMORY.md` or `progress\ledger.md`** until that chat is confirmed done.
- **Commit with `git commit -F <msgfile> -- <paths>`** — staging alone is not enough.
- **OCR is a search index, never a clinical source.** Never take a numeral, exponent, unit, dose or
  key letter from it.
- **Contradictions recorded, never corrected. Defective keys noted, never disputed.**
- **Cosmetic defects transcribed silently, never catalogued** — exception, always flagged: numbers,
  units, doses, exponents.
- **Skip all OSCE content.**
- **Write/Edit for content, Bash for reads** — heredocs collapse backslashes and backticks are
  command substitution.
- **Exams:** Peds OSCE **14 Sep** · Peds papers **17 Sep** · ENT 22 Sep · Ophtho 27 Sep ·
  Neuro 3 Oct · Peds papers 18-19 Oct. **Scope is never cut** — if time runs short, say so loudly.

**TRUST THE DISK AND THE STAGING OVER THIS PROMPT, AND TELL ME WHERE I WAS WRONG.**
