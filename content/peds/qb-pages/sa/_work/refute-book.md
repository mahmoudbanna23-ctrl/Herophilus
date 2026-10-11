# Check 4 — independent staged-book check

## Verdict: PASS-WITH-NOTES

`SA_BOOK` loaded through `vm`: 452 items (229 `sba`, 223 `emq`), across 31 chapters. I ran the supplied checker once: exit 0. My independent Node audit is in `_work/check4/audit.js` (its machine output is `results.json`); it does not import either supplied parser/checker.

| Test | Items checked | Confirmed faults |
|---|---:|---:|
| 1 Counts / printed numbers | 452 | 0 |
| 2 Key / selected option | 452 | 0 confirmed |
| 3 Options / EMQ shared lists | 452 | 0 confirmed |
| 4 Stem source order | 452 | 0 confirmed |
| 5 Explanation bounds | 452 | 0 confirmed |
| 6 Technical characters | 452 | 0 confirmed |
| 7 `page` / `ansPage` number | 452 | 0 |
| 8 Figure/table entries | 452 | 18 entries with no PDF page |

### Faults / unresolved records

Test 8 — these `figs` entries have `page:null`, so they do not supply the required page on which the figure is printed: `pedsa-b4-9-4` (Table 29.1); `pedsa-b4-10-1` (Fig. 4.5); `pedsa-b6-7` (Fig. 6.9); `pedsa-b12-3` (Fig. 12.5); `pedsa-b13-3` (Fig. 13.3); `pedsa-b22-7` (Fig. 22.17); `pedsa-b23-1` (Fig. 23.12); `pedsa-b23-5` (Table 23.2, Fig. 23.7); `pedsa-b23-6` (Fig. 23.13); `pedsa-b23-7-1` (Table 23.3); `pedsa-b23-7-4` (Table 23.2); `pedsa-b25-2` (Fig. 22.19); `pedsa-b26-11` (Fig. 26.11); `pedsa-b26-12-1` (Fig. 26.7); `pedsa-b29-11` (Table 29.1); `pedsa-b29-12` (Table 29.1); `pedsa-b29-15-1` (Fig. 29.6); `pedsa-b31-2` (Fig. 31.3).

These labels often occur in the question/answer text as references to *Illustrated Textbook of Paediatrics*, not as a figure printed in this PDF. I cannot establish an in-book figure page for them from the supplied source; `null` is therefore recorded rather than a guessed page.

### Method notes and limits

The raw text layer represents many headings as `12.1.` while the array number is `12.1`; the audit treats that terminal full stop as the same printed number. It also preserves the source's mojibake rather than calling Unicode differences a printed-character fault. Raw text does not reliably delimit a full answer block or a multi-page EMQ option set, so automated candidates from tests 2–6 were read as leads, not reported as faults unless confirmed against the item text.

I read 30 items against their question/answer page text: all 15 hand entries (`pedsa-b4-5`, `pedsa-b4-6`, `pedsa-b4-7`, `pedsa-b4-8`, `pedsa-b6-2`, `pedsa-b7-9`, `pedsa-b7-10`, `pedsa-b18-6-1` through `pedsa-b18-6-5`, `pedsa-b26-4`, `pedsa-b29-11`, `pedsa-b29-12`) plus `pedsa-b1-1`, `pedsa-b2-8-1`, `pedsa-b3-4`, `pedsa-b5-5-3`, `pedsa-b8-5-2`, `pedsa-b10-8`, `pedsa-b12-3`, `pedsa-b15-10-3`, `pedsa-b17-4`, `pedsa-b21-6-1`, `pedsa-b23-7-1`, `pedsa-b25-2`, `pedsa-b26-11`, `pedsa-b31-2`. No further transcription fault was identified in those reads. This is source-data checking, not verification of medical content.
