#!/usr/bin/env bash
# Judge every batch, one Codex job at a time. Re-runnable: a batch with a judge file is skipped.
# Usage (from the Herophilus root): bash content/peds/qb-pages/dupes/run-2b.sh
D=content/peds/qb-pages/dupes
mkdir -p "$D/pairs/judged"
for f in "$D"/pairs/batches/batch-*.json; do
  nn=$(basename "$f" .json); nn=${nn#batch-}
  [ -s "$D/pairs/judged/judge-$nn.json" ] && { echo "skip $nn"; continue; }
  timeout 1200 codex exec -m gpt-5.6-terra -s workspace-write -c model_reasoning_effort=medium \
    "Do the job in $D/brief-2b-judge.md for batch NN=$nn. Read that brief first and follow it exactly; it grants the only write access you have." \
    < /dev/null > "$D/pairs/judged/codex-$nn.log" 2>&1
  echo "batch $nn exit $? $(head -1 "$D/pairs/judged/report-$nn.txt" 2>/dev/null)"
done
