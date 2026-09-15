# Refute report: section 4 lacrimal system draft

## Check 1 — box warnings, root cause (CONFIRMED)
array.js `expl` for n:1-6 stores the WRAPPED text (lead "**The endpoint file prints this
explanation:**" + "> " quote + italic footer) — same shape as draft `explanation`, NOT the
bare quote. Validator extracts only the ">" lines from the draft and compares to `norm(s.expl)`;
wrapped `expl` can never match. s02's array `expl` (checked directly) is bare quote text only,
e.g. `"Presbyopia is an age-related loss..."` — no lead, no ">", no footer. Draft's quote text
matches boxes.md verbatim for all 6 rows (checked n:1-6). **Fault is in array.js, not the
draft.** Fix: replace `expl` on n:1-6 in
`content/ophtho/qb-pages/oph-ep-p1-s04-lacrimal-system.array.js` with the bare boxes.md text
(same shape as s02), nothing else changes.

## Check 2 — duplicates
| pair | shape | token | verdict |
|---|---|---|---|
| n:2/n:4 | stem+options+key byte-identical; only box wording differs | none — verbatim reprint | **FOLD candidate**, not PAIR. Draft keeps both live w/ cross-pointer sentences — contradicts the project's own "boxed second printing" fold shape (CLAUDE.md §MEMORY duplicate-sweep rule). Builder cites "coordinator's explicit ruling" for this — not found on disk anywhere in scratchpad. **Escalate**: confirm the ruling exists before accepting 24 (vs 23) live rows. |
| n:9/n:11 | reordered menu | pain vs painlessness | PAIR — correct |
| n:5/n:16 | shared menu | inner mucus vs middle watery layer | PAIR — correct |
| n:19/n:24 | reordered menu, diff answers | irrigation-confirmed obstruction vs regurge+"first treatment" | PAIR — correct |
| n:6/n:12 | near-identical menu (typo "I"/"1") | mucus vs purulent reflux (keys differ: 2 vs 1) | PAIR — real token exists but left unaddressed (no pointer sentences, validator warning still open) |

## Check 3 — draft integrity: PASS
24/24, 0 holes, unique ids, answer==key, options/count match staging (n:18=5), source pages
match, chapter=op-lac valid, unboxed bodies byte-identical to md except the two named added
sentences (n:11, n:16), 0 `\r` in draft/array/md files. Boxed rows end on marker.

## Verdict: FAIL
Check 1 is a real, provable defect (fix named above). Check 2 n:2/n:4 needs escalation —
possible rule violation, unverified authorization.
