# Brief 9a — continue the pair read from n 41 (adds to brief 9; brief 9's rules all still hold)

Your first run wrote good verdicts for n 1-40 in
`content/peds/qb-pages/sa/_work/sweep/pairs/check9/verdicts.jsonl` and stopped because a
20-record print was cut off. Keep those 40 lines; APPEND, never rewrite the file.

## What changed
The remaining pairs (n 41-588) are now pre-cut into 55 plain-text files of 10 pairs each:
`content/peds/qb-pages/sa/_work/sweep/pairs/check9/slices/s041.txt` ... `s581.txt`.
Each block is `=== n <n>`, then `BOOK <id>` / STEM / OPTIONS / KEY, then `OTHER <id>` / STEM /
OPTIONS / KEY. Read these files instead of `pairs-blind.json`. They are the only data you open.

## How
1. Take the slice files in name order. Read one file, decide its 10 pairs, append 10 lines to
   `verdicts.jsonl` in the same format as before, then go to the next file.
2. If a file prints cut off, read it again in two halves (first five `=== n` blocks, then the
   rest) — do not skip it and do not stop for it.
3. No script may assign a verdict. Same verdict rules, same `why` rule (specific to the pair).
4. Before starting, read the last line of `verdicts.jsonl` and resume at the first `n` not yet
   written, so a restart never duplicates or skips.
5. Keep going until s581.txt is done. If you must stop early, stop after a complete file.

## Write grant
Only `content/peds/qb-pages/sa/_work/sweep/pairs/check9/verdicts.jsonl` (append). Nothing else.

## Final message (max 150 words)
Highest `n` written · counts SAME / DIFFERENT / UNSURE over ALL lines in the file · the `n` and
both ids of every DIFFERENT and UNSURE · anything that stopped you.
