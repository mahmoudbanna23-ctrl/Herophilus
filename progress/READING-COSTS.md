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

## The prices - measured 2026-09-03 04:05, after both second anchors were placed

| File | chars | lines | ~ tokens | how to open it |
|---|---|---|---|---|
| 🔴 `ledger-closed-1-16.md` | 720,864 | 10,212 | **~180k** | **almost your whole window.** `grep -n` / `sed` only - never whole |
| 🔴 `resume-ophtho.md` | 243,804 | 3,688 | ~61k | ✅ **anchor 2 → 56,751 ≈ 14k.** Never open it any other way |
| 🔴 `briefs\START-HERE.md` | 192,561 | 1,259 | **~48k** | `sed` the one section you were sent to |
| 🔴 `resume-peds.md` | 188,920 | 2,857 | ~47k | ✅ **anchor 2 → 51,316 ≈ 13k.** Never open it any other way |
| 🔴 `memory-archive.md` | 154,344 | 1,040 | **~39k** | `grep -n "^## "` then `sed`. ⚠️ its lines are enormous - one line can be 8k+ chars, so `grep` without `-o` can dump more than the section |
| 🔴 `ledger.md` | 140,353 | 1,919 | **~35k** | index first (top of file), then `sed` the section |
| 🔴 `token-economy\plan.md` | 106,287 | 1,344 | **~26k** | closed project. Do not open unless asked |
| 🟠 `resume-neuro.md` | 85,150 | 1,246 | ~21k | **anchor** → 59,637 ≈ 15k. Under the threshold; no second anchor yet |
| 🟠 `resume-peds-endpoint.md` | 57,252 | 871 | ~14k | no anchor yet. ⚠️ **it grew 45,866 → 57,252 in ~40 minutes** - re-measure every time, and it will need an anchor at the next section boundary |
| 🟡 `briefs\ophtho-bank-brief.md` | 25,297 | 378 | ~6k | read whole - it is a brief |
| 🟢 `resume-2026-09-0*-*.md` | ~13-22k | - | ~3-6k | read whole - they are the entry point |

Everything else in `progress\` is under 20k chars and safe to read whole.

⚠️ **`ledger.md` is in the red band** - it was 🟠 ~32k on 2026-09-02 and is ~35k now. It is
still the file the end-of-run consolidation writes to, so it will keep growing. Index first, always.

## ✅ THE SECOND ANCHORS ARE PLACED - 2026-09-03

The `resume-<module>.md` journals carry a marker line, `<!-- RESUME-READ-FROM-HERE -->`, placed at
the start of the 2026-08-31 work. But that marker sits at a fixed date, so everything written since
accumulated below it and the anchored tail only grew - by 2026-09-03 it was saving almost nothing.

**Both overdue second anchors were placed on 2026-09-03.** A second anchor is a marker line at a
clean boundary - **NOT a trim.** Nothing was deleted, nothing moved, and new entries still append
at the bottom, always below the marker.

| journal | whole | anchor 1 | **anchor 2** | now saves |
|---|---|---|---|---|
| `resume-ophtho.md` | 243,804 ≈ 61k | 163,880 ≈ 41k | **56,751 ≈ 14k** | **~47k** |
| `resume-peds.md` | 188,920 ≈ 47k | 147,104 ≈ 37k | **51,316 ≈ 13k** | **~34k** |
| `resume-neuro.md` | 85,150 ≈ 21k | 59,637 ≈ 15k | - | ~6k, under the threshold |

**Open a journal with anchor 2 where it exists, anchor 1 where it does not:**

```bash
sed -n '/RESUME-READ-FROM-HERE-2/,$p' progress/resume-ophtho.md
sed -n '/RESUME-READ-FROM-HERE-2/,$p' progress/resume-peds.md
sed -n '/RESUME-READ-FROM-HERE/,$p'   progress/resume-neuro.md
```

Anchor 1 still works everywhere and returns the longer tail - the markers do not conflict, because
`RESUME-READ-FROM-HERE-2` is a distinct string that anchor 1's pattern also matches first.

**Where each anchor 2 sits, and why:**

- `resume-ophtho.md` line 2830, at the 2026-09-02 watch-session block. Ophthalmology is CLOSED, so
  nothing above it is live.
- `resume-peds.md` line 2058, at the last `SESSION CLOSED` block - deliberately conservative, so
  **every standing USER RULING and every chapter from ch.10 onward stays below the line.** A tighter
  placement at the ch.11 boundary would have cut ~9k more but orphaned two rulings above it.

⚠️ **The rule that produced these:** when an anchored tail passes **~30k tokens**, a second
anchor is due. `resume-peds-endpoint.md` is the next candidate - measure it before every read.


## The auto-loaded tax — the only numbers with a hard rule behind them

These four are re-sent with **every single request**, not once per session. Workspace rule §9 caps
each at **200 lines and 22 KB**, and since 2026-09-03 that cap is **enforced by a hook**
(`D:\claude os\Tools\guard\context-budget.js`, `PreToolUse` on `Edit|Write`) rather than by memory:
it refuses any write that pushes an over-budget file further over, and always allows a shrink.
Re-measured 2026-09-03 04:05. Unchanged in lines since the root §8 rewrite; the four are stable:

| file | lines | chars |
|---|---|---|
| workspace `CLAUDE.md` | 187 | 11,062 |
| workspace `MEMORY.md` | 166 | 11,751 |
| Herophilus `CLAUDE.md` | 190 | 13,166 |
| Herophilus `MEMORY.md` | 191 | 18,997 |
| **per request** | **734** | **54,976 ≈ 13.7k tokens** |

⚠️ **Compare against the 200-line CAP, never against this table.** Flag any file at **195 or more**.
The two Herophilus files are within ten lines of the cap right now, and Herophilus `MEMORY.md` is
the largest of the four in bytes while passing on lines — which is why the hook checks both.

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
