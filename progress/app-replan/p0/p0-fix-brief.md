# P0 brief, round 2: fixes (2026-09-25)

Seat: Codex `gpt-5.6-terra`, one run per item, 900 s clock. Reviewer: Claude Opus refuter.
Inputs: your round-1 file for the item (`progress\app-replan\p0\<X>.md`) and
`progress\app-replan\p0\REFUTE-round1.md` — **the refuter's "Round-2 fix list" overrides round 1**
wherever they disagree.

## Marching orders (every item)

- May change: ONLY the files named under your item. Nothing else.
- `app\data\` stays closed (AGENTS.md rule 1). No git writes. No network beyond the model call.
- Headless Chrome: one at a time, never a `--user-data-dir` under a path containing `--`.
- Never loosen an assertion without writing, in your notes file, why the old one was wrong.
- Must verify: run the item's check the stated number of times; paste trimmed output.
- Output: append a `## Round 2` section (≤ 40 lines) to `progress\app-replan\p0\<X>.md`: what
  changed (file:line), commands run + trimmed output, anything still UNCONFIRMED.
- Final reply begins with `AGENTS.md loaded — Herophilus`, then ≤ 5 lines.

## Items

- **R-checks** (notes into `A-checks.md`) — fix-list items 1, 2, 4.
  May change: `tools\boot-check\navclock-check.js`, `attempt-check.js`, `lock-check.js`,
  `strike-check.js`. Reuse the y4s2 term seed exactly as `tools\boot-check\boot-check.js:109-124`
  does it (copy the pattern, do not invent a term id). lock-check with an empty list: print `SKIP`
  and exit 0 (default chosen by the orchestrator; owner may later rule delete). Pass = navclock
  `TICKS`, navclock `--nofix` `FROZEN`, attempt `PASS`, lock `SKIP` and `--selftest` no longer BLIND,
  strike-check's new 6-option F-on-focused-X probe passes. Each run twice. If the strike probe
  FAILS, stop and report — do not change app code.
- **R-dist** (notes into `B-dist.md`) — fix-list item 3. May change: `tools\dist-check.js` only.
  Then 10 sequential runs (never concurrent); report pass count and any orphaned chrome.exe left
  after each run (`tasklist`).
- **R-table** (notes into `E-quiz.md`) — fix-list item 5. May change: `app\js\theory.js` (the
  `mdTable` row drop only) and a new `tools\boot-check\mdtable-check.js` (plain node, no Chrome:
  load the functions from `theory.js` text, no framework). Cases: `| - | - |` body row survives as
  `<td>-</td>` cells; a 1-dash separator in row 2 is dropped; a `| --- | :---: |` separator is
  dropped; a table whose row 2 is data keeps it. Run twice. Then `node tools\boot-check\boot-check.js`
  once: 0 console errors.
- **R-perf** (notes into `G-perf.md`, and correct the wrong numbers in place, marking what changed)
  — fix-list item 6. May change: `G-perf.md` only (any probe script goes to the system temp dir,
  not the repo). Heap and transfer on the navigated page target via the Network domain; media =
  4 files / 437,045 B; then slow-3G + CPU 4×. Write the exact method so it re-runs.
- **R-count** — fix-list item 7. May change: `D-count.md` only. No Chrome.

## Round 3 (2026-09-25): from `REFUTE-round2.md`'s "Round-3 list", same marching orders

- **R3-checks** (notes into `A-checks.md`, as a `## Round 2` section; it is missing). May change:
  `A-checks.md` and `tools\boot-check\lock-check.js`.
  - Fix list item 1. In the notes, cover the navclock target move and why "nav soon" left `mustBreak`.
    If there is no sound reason, restore it.
  - Fix list item 2. Under the fixture, the probes at `lock-check.js:141,188` must take the raw
    locked questions from the fixture's source, not only `Q_OPHTHO`/`Q_NEURO`. Or drop those two rows
    from `mustBreak`, with a written reason.
  - Pass: `--selftest` breaks every row left in `mustBreak`, with none blind, and a plain run gives
    `SKIP`. Run each twice.
- **R3-perf** (fix list item 3). May change: `G-perf.md` only. Mark the old media and total numbers
  at `:5-7` as superseded, in place. Either list the 48 requests by URL and size so the ~244 KB gap
  is accounted for, or relabel it "unexplained". Do not attribute it to HTTP framing without
  evidence.
