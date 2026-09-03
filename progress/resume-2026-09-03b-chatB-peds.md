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

⚠️ **`resume-peds.md` GOT A SECOND ANCHOR on 2026-09-03. Open it this way and no other way** — the
whole file is ~47k tokens, the old anchor ~37k, this one **~14k**. Nothing was deleted; every
standing USER RULING and every chapter from ch.10 on sits below the marker, and new entries append
below it:

```bash
sed -n '/RESUME-READ-FROM-HERE-2/,$p' progress/resume-peds.md
```

Same for `resume-ophtho.md` (~41k → ~14k). `resume-neuro.md` still uses the original
`RESUME-READ-FROM-HERE`. ⚠️ **Check `progress\READING-COSTS.md` before opening anything else in
`progress\` — and re-measure; never quote its digits.**

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

- ✅ **`MEMORY.md` pointer FIXED 2026-09-03 ~04:15 by the main `D:\claude os` chat.** It now points
  at **this file**. Both work chats were killed at that time, so the mid-run bar had lifted.
- ✅ **The duplicate Chat B prompt was DELETED**, not merged into a second entry point. It had been
  written ~04:15 by the main chat before it saw this one; the two agreed on every material point,
  and its anchor-2 and cost paragraphs were folded into this file instead. **One prompt per chat.**
- ⚠️ **`git push` is BLOCKED by the permission layer for THIS chat.** Tried twice, denied
  identically, the command never executed. **This chat cannot push** — the main `D:\claude os` chat
  does it. Commit normally and say what is unpushed; do not retry the push.
- **`progress\ledger.md` still not updated.** A consolidation pass owes: the 2026-09-03
  merge-and-fold ruling, the collision log, ch.11's close, ch.12's staging, the `validate-all` fix,
  10a, and the two staging/drafting measurements. **`MEMORY.md` is current as of 04:15** — the
  endpoint count, the section state, the anchors and this pointer are all in it.
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
  owns them. It was killed at ~04:15 and relaunches from
  `progress\resume-2026-09-03-late-peds-endpoint.md` (v4). Its state at that moment: **216 live,
  s1–s4 CLOSED and committed, s5 Emergencies mapped but not staged.** Assume it is running again.
- **Do not edit `progress\ledger.md`** while another chat is live. `MEMORY.md` is current as of
  04:15; correct it only if the disk contradicts it, and only in a consolidation pass.
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
