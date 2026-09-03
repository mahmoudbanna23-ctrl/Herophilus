# What it costs to open a file in `progress\`

⚠️⚠️ **EVERY NUMBER IN THIS FILE IS A SNAPSHOT AND WILL BE WRONG WITHIN HOURS. RE-MEASURE BEFORE
YOU QUOTE ANYTHING HERE — including at yourself, later in the same session.** These files have
several live writers. Between 2026-09-01 and 2026-09-03 the recorded figures were corrected
**seven times**, every one accurate when written. What is durable is the *shape*: which files are
dangerous, and how to reach into one. **The CAPS and the bands are the check; the digits are not.**

Two commands, and they cost nothing:

```bash
cd "D:/claude os/Medical school/Herophilus/progress" && wc -lc *.md briefs/*.md
```

```bash
wc -lc "D:/claude os/CLAUDE.md" "D:/claude os/MEMORY.md" "D:/claude os/Medical school/Herophilus/CLAUDE.md" "D:/claude os/Medical school/Herophilus/MEMORY.md"
```

Your context window is **200,000 tokens**. Several files in this folder take a serious bite out of
it and **one is larger than the whole window.** This file exists so you can check a price before
you pay it.

**Rule: never `Read`, `cat`, or `grep -r` a file in the red band. Reach into it.**

## The prices — measured 2026-09-03 03:25, both work chats mid-run

| File | chars | lines | ≈ tokens | how to open it |
|---|---|---|---|---|
| 🔴 `ledger-closed-1-16.md` | 720,864 | 10,212 | **~180k** | **almost your whole window.** `grep -n` / `sed` only — never whole |
| 🔴 `resume-ophtho.md` | **243,316** | 3,681 | **~60k** | ⚠️ **anchored is still ~41k** — see below |
| 🔴 `briefs\START-HERE.md` | 192,561 | 1,259 | **~48k** | `sed` the one section you were sent to |
| 🔴 `resume-peds.md` | **188,371** | 2,849 | **~47k** | ⚠️ **anchored is still ~37k** — see below |
| 🔴 `memory-archive.md` | 152,413 | 1,040 | **~38k** | `grep -n "^## "` then `sed`. ⚠️ its lines are enormous — one line can be 8k+ chars, so `grep` without `-o` can dump more than the section |
| 🔴 `ledger.md` | 140,353 | 1,919 | **~35k** | index first (top of file), then `sed` the section |
| 🔴 `token-economy\plan.md` | 106,287 | 1,344 | **~26k** | closed project. Do not open unless asked |
| 🟠 `resume-neuro.md` | 85,150 | 1,246 | ~21k | **anchor** → ~15k |
| 🟠 `resume-peds-endpoint.md` | 45,866 | 699 | ~11k | read whole while it is this size — **re-check, it is growing fast** |
| 🟡 `briefs\ophtho-bank-brief.md` | 25,297 | 378 | ~6k | read whole — it is a brief |
| 🟢 `resume-2026-09-02-*.md` | ~10–15k | — | ~3–4k | read whole — they are the entry point |

Everything else in `progress\` is under 20k chars and safe to read whole.

⚠️ **`ledger.md` crossed into the red band** — it was 🟠 ~32k on 2026-09-02 and is ~35k now. It is
still the file the end-of-run consolidation writes to, so it will keep growing. Index first, always.

## ⚠️ THE ANCHOR NO LONGER SAVES THE TWO BIG JOURNALS

The three `resume-<module>.md` journals carry a marker line, `<!-- RESUME-READ-FROM-HERE -->`,
placed at the start of the 2026-08-31 work. Everything below it is live state; everything above is
closed history.

```bash
sed -n '/RESUME-READ-FROM-HERE/,$p' progress/resume-ophtho.md
```

That is the **only** way these three files should be opened at session start. But the marker sits at
a fixed date, so **everything written since accumulates below it and the anchored tail only grows.**
Measured 2026-09-03:

| journal | whole | anchored | anchor saves |
|---|---|---|---|
| `resume-ophtho.md` | 243,316 ≈ 60k | **163,392 ≈ 41k** | ~19k — **the anchor is barely helping** |
| `resume-peds.md` | 188,371 ≈ 47k | **146,555 ≈ 37k** | ~10k — **the anchor is barely helping** |
| `resume-neuro.md` | 85,150 ≈ 21k | 59,637 ≈ 15k | ~6k |

⚠️ **BOTH BIG JOURNALS ARE PAST THE ~30k THRESHOLD AT WHICH A SECOND ANCHOR IS DUE.** This was
recorded as the rule on 2026-09-02 and is now overdue on two files:

- **`resume-ophtho.md` — ophtho is CLOSED, so this journal has no live writer.** A second anchor
  can be placed safely whenever someone is asked to.
- **`resume-peds.md` — Chat B is a live writer.** Do not re-anchor it mid-run; do it at a clean
  chapter boundary, or the chat's own appends will land above the new marker.

**A second anchor is a marker line at the current date — NOT a trim.** Nothing is deleted, nothing
moves. Flagged by the watch 2026-09-03; not done, because re-anchoring is content work and the
watch does not build.

## The auto-loaded tax — the only numbers with a hard rule behind them

These four are re-sent with **every single request**, not once per session. Workspace rule §9 caps
each at **200 lines**. Measured 2026-09-03 03:25:

| file | lines | chars |
|---|---|---|
| workspace `CLAUDE.md` | 191 | 11,357 |
| workspace `MEMORY.md` | 181 | 13,862 |
| Herophilus `CLAUDE.md` | 190 | 13,166 |
| Herophilus `MEMORY.md` | 189 | 18,808 |
| **per request** | **751** | **57,193 ≈ 14.3k tokens** |

⚠️ **Compare against the 200-line CAP, never against this table.** Flag any file at **195 or more**.
Three of the four are within ten lines of the cap right now, and a file you personally trimmed can
be back at the cap before you finish the session.

**History of the trims** — each was a documented split, verbatim, with a dated pointer left behind,
and **no live rule ever left a file**:

- Herophilus `MEMORY.md` → `memory-archive.md`, under `## Pruned from MEMORY.md - <date>`
  (2026-09-01, 2026-09-02 ×2, 2026-09-03).
- Workspace `MEMORY.md` → `D:\claude os\workspace-archive.md`, `## Trimmed from root MEMORY.md - …`
  (2026-09-02 ×2).
- Herophilus `CLAUDE.md` → `reference.md`, `## Moved from CLAUDE.md - 2026-09-02` (duplicated
  reference and bug history only).
- `ledger.md` → split at §17 into `ledger-closed-1-16.md` + `ledger.md` on 2026-09-01, verified
  **byte-exact** by reconstructing the original and diffing against `git show HEAD`. Nothing
  renumbered; the 53-row index atop `ledger.md` says which file each section is in.

## Reaching into a red-band file

Two commands, always in this order — never a `Read`:

```bash
grep -n "^#\{1,3\} " progress/ledger.md
sed -n '10192,11854p' progress/ledger.md
```

The first prints headings with line numbers (cheap). The second prints exactly the block you chose.
If you only need to know *whether* something is recorded, `grep -n` for the term and read the hit
lines — do not open the section.

## Why this file exists

Measured 2026-09-01: the "read first" list at the top of the Chat A brief came to **161,234 chars
≈ 40k tokens** — a fifth of the window spent before the first question was drafted. Chat B's came to
138,929 ≈ 35k. Neither chat was doing anything wrong; the files had simply grown, and nothing told
anyone what they now cost. **The chat briefs still quote ~6k / ~8k / ~2.5k for the journals. Those
figures are dead — this file wins, and re-measurement wins over this file.**
