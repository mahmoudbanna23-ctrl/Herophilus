# Re-run after the merge. From the project root, one Chrome at a time. Baselines: before-*.txt here.
```
V=content/peds/qb-pages/dupes/verify
node tools/validate/validate.js > $V/after-validate.txt 2>&1          # was 162978 of 162978; all files incl. ep2
node tools/bank-harness/validate-all.js peds peds.ep peds.sa --soft > $V/after-validate-all.txt 2>&1   # was 1618; tool SKIPS peds.ep2
node tools/bank-harness/validate-all.js > $V/after-validate-all-full.txt 2>&1   # was 6611; also skips every ep2
node tools/boot-check/boot-check.js > $V/after-boot-check.txt 2>&1    # was QUESTIONS 7477, 171 rows, 0 errors
node $V/smoke-run.js > $V/after-smoke.txt 2>&1                        # was 12/12
node $V/exam-rows.js > $V/after-exam-rows.txt 2>&1                    # was EXAM-ROWS OK; shown 50,46,60,59,49,49,27,9
node tools/boot-check/image-check.js > $V/after-image-check.txt 2>&1  # baseline saved; 4 orphan jpgs (pre-existing)
```
- Shots go to `D:\scratch 2026\peds-exam-rows\`, overwritten each run; copy the before pair out first.
- Expected red after merge: `tools/validate/counts.json` and `EXPECTED_TOTAL` in `app/smoke.js` pin 7477. Check "got" = 7477 minus the FOLDED size, then update both.
- exam-rows compares shown count with the list length after FOLDED mapping, duplicates kept.
