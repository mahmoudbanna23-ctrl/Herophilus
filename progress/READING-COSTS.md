# What it costs to open a file in `progress\` — measured 2026-09-01

Your context window is **200,000 tokens**. Four files in this folder are large enough to take a
serious bite out of it, and **one is larger than the whole window.** This file exists so you can
check a price before you pay it.

**Rule: never `Read`, `cat`, or `grep -r` a file in the red band. Reach into it.**

## The prices

| File | bytes | lines | ≈ tokens | how to open it |
|---|---|---|---|---|
| 🔴 `ledger-closed-1-16.md` | 720,864 | 10,212 | **~180k** | **almost your whole window.** `grep -n` / `sed` only — never whole |
| 🔴 `briefs\START-HERE.md` | 191,038 | — | **~48k** | `sed` the one section you were sent to |
| 🔴 `memory-archive.md` | 141,409 | 853 | **~35k** | `grep -n "^## "` then `sed`. ⚠️ its lines are enormous — a single line can be 8k+ chars, so `grep` without `-o` can dump more than the section |
| 🔴 `token-economy\plan.md` | 106,287 | — | **~26k** | closed project. Do not open unless asked |
| 🟠 `ledger.md` | 128,548 | 1,737 | ~32k | index first (top of file), then `sed` the section |
| 🟠 `resume-ophtho.md` | 105,678 | 1,544 | ~26k | **anchor** → ~6k |
| 🟠 `resume-peds.md` | 73,601 | 1,126 | ~18k | **anchor** → ~8k |
| 🟠 `resume-neuro.md` | 35,100 | 529 | ~9k | **anchor** → ~2.5k |
| 🟡 `briefs\ophtho-bank-brief.md` | 25,297 | 378 | ~6k | read whole — it is a brief |
| 🟢 `resume-2026-08-31-chat*.md` | ~10–15k | — | ~3–4k | read whole — they are the entry point |

Everything else in `progress\` is under 20k bytes and safe to read whole.

## The ledger was split — 2026-09-01

`ledger.md` had reached **830,045 chars ≈ 207k tokens, larger than the 200k window.** It was
unopenable. It is now two files, cut at §17 where ophthalmology reopens:

- **`ledger-closed-1-16.md`** — §1–§16, 47 sections, closed. 46 are ENT.
- **`ledger.md`** — §17 onward, live. Still the file the end-of-run consolidation pass writes to.

**Nothing was deleted and no section was renumbered.** The split was verified byte-exact by
reconstructing the original from the two halves and diffing it against `git show HEAD` — exact
match, zero characters changed. So a pointer written anywhere as `ledger.md` §11 or §13 still
resolves; **the 53-row index at the top of `ledger.md` says which file each section is in and on
what line.** Every one of those 53 rows was checked to land on a real `## ` heading.

## The anchor

The three `resume-<module>.md` journals carry a marker line, `<!-- RESUME-READ-FROM-HERE -->`,
placed at the start of the 2026-08-31 work. Everything below it is live state; everything above
is closed history.

```bash
sed -n '/RESUME-READ-FROM-HERE/,$p' progress/resume-ophtho.md
```

That is the **only** way these three files should be opened at session start. Measured saving:
**147k chars ≈ 36k tokens across the two parallel chats.**

## Reaching into a red-band file

Two commands, always in this order — never a `Read`:

```bash
grep -n "^#\{1,3\} " progress/ledger.md
sed -n '10192,11854p' progress/ledger.md
```

The first prints the headings with line numbers (cheap: 53 top-level, 650 total). The second
prints exactly the block you chose. If you only need to know *whether* something is recorded,
`grep -n` for the term and read the hit lines — do not open the section.

## Why this file exists

Measured 2026-09-01: the "read first" list at the top of the Chat A brief came to **161,234 chars
≈ 40k tokens** — a fifth of the window spent before the first question was drafted. Chat B's came
to 138,929 ≈ 35k. Neither chat was doing anything wrong; the files had simply grown, and nothing
told anyone what they now cost.

The auto-loaded files are a separate, unavoidable tax and are **re-sent with every single
request**, not once per session: workspace `CLAUDE.md` + `MEMORY.md` and this project's
`CLAUDE.md` + `MEMORY.md`. That is the reason both files are capped at 200 lines by workspace
rule §9. Keep them pruned.

**`MEMORY.md` was split 2026-09-01** for the same reason: 200 lines / 19,173 chars → **172 lines
/ 15,744 chars**, with 48 lines of closed-topic reference moved verbatim into
`memory-archive.md` under `## Pruned from MEMORY.md - 2026-09-01`. Nothing was deleted or
reworded, and every moved block left a dated pointer bullet where it stood. The per-request
total went **57,845 → 54,416 chars, ≈14.5k → ≈13.6k tokens.** Only closed topics moved — theory
is 153/153 complete and ENT is closed — so no live warning left this file.

**The workspace `MEMORY.md` (`D:\claude os\MEMORY.md`) was split the same way on 2026-09-02.** It
had grown to 226 lines — over its own cap — so 57 lines went verbatim into
`D:\claude os\workspace-archive.md` under `## Trimmed from root MEMORY.md - 2026-09-02`: a stale
Herophilus corpus count, a PDF-tier block that only duplicated workspace `CLAUDE.md` §5, Physics
source detail already held in that project, the full Promos entry (replaced by a 15-line condensed
one), and the 2026-08-13/17 decisions-log tail. **226 → 190 lines, 16,982 → 14,016 chars.**

Both files are now under the cap, and the whole auto-loaded tax stands at:

| file | lines | chars |
|---|---|---|
| workspace `CLAUDE.md` | 166 | 9,145 |
| workspace `MEMORY.md` | 200 | 15,436 |
| Herophilus `CLAUDE.md` | 190 | 13,166 |
| Herophilus `MEMORY.md` | 191 | 17,570 |
| **per request** | | **55,317 ≈ 13.8k tokens** |

⚠️ **Re-measured live 2026-09-02 — three of the four rows had drifted.** The trim figures were
recorded the moment each trim finished, then later edits in the same day put the chars back:
workspace `MEMORY.md` 14,231 → 15,044 and **197 of its 200 lines**, Herophilus `MEMORY.md`
15,744 → 16,652, Herophilus `CLAUDE.md` 13,006 → 13,166. It drifted **again** the same day —
the watch section took Herophilus `MEMORY.md` to **194 lines / 17,843** within the hour.
Then it drifted a THIRD time: workspace `MEMORY.md` was trimmed 197 → **190 lines / 14,367**
the same night, two superseded decision blocks moved verbatim to `workspace-archive.md`.
Then a FOURTH time: Herophilus `MEMORY.md` was trimmed 194 → **179 lines / 16,439** the same
night, six blocks moved verbatim to `memory-archive.md`.
Then a FIFTH time, within the hour: Herophilus `MEMORY.md` 179 → **185** (the mixed-key
counting trap), and workspace `MEMORY.md` 190 → **200 — back AT its cap**, ten lines added by
another live chat in the same night the trim landed.
Then a SIXTH time, 2026-09-02: Herophilus `MEMORY.md` 185 → **191 lines / 17,570** — the
five-option cap bullet was rewritten when the cap was actually fixed in `app/index.html`.
⚠️ **SIX corrections in one day. Re-measure with the command above; never quote this table
at anyone — including at yourself in the next hour.** Every figure was accurate when written
and wrong within hours, and a file you personally trimmed can be back at the cap before you
finish the session: **these files have several live writers.** The CAPS, not these numbers,
are what a check compares against. **Do not trust a number in this table
without re-measuring it** — `wc -lc` on the four files takes one command:

```bash
wc -lc "D:/claude os/CLAUDE.md" "D:/claude os/MEMORY.md" "D:/claude os/Medical school/Herophilus/CLAUDE.md" "D:/claude os/Medical school/Herophilus/MEMORY.md"
```

Down from 57,845 ≈ 14.5k before the splits, though less far down than the trims first showed. **Both `CLAUDE.md` files and both `MEMORY.md` files
were trimmed on 2026-09-02**; the Herophilus one lost its duplicated source-tier table, its prose
layout inventory and its bug-history list to `reference.md` (`## Moved from CLAUDE.md - 2026-09-02`)
— duplicated reference and history only, **no live rule left it.** The largest remaining is
`briefs\START-HERE.md` at ~48k tokens, which is read on demand, not auto-loaded.
