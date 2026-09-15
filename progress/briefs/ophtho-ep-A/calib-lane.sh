#!/usr/bin/env bash
S="C:/Users/Alfa388/AppData/Local/Temp/claude/D--claude-os-Medical-school-Herophilus/c690134b-326b-4433-a5eb-cb30b9aea267/scratchpad"
cd "D:/claude os/Medical school/Herophilus" || exit 1
for SEC in "$@"; do
  SS=$(printf '%02d' "$SEC")
  mkdir -p "$S/gw-calib-s$SS"
  sed -e "s/s0{SEC}/s$SS/g" -e "s/{SEC}/$SEC/g" "$S/gw-calib.md" > "$S/gw-calib-s$SS.md"
  for try in 1 2; do
    bash "D:/claude os/Tools/omniroute/codex-gw.sh" -s workspace-write --add-dir "$S" "Follow the brief in $S/gw-calib-s$SS.md exactly. TEXT ONLY: never render or view an image. Write your note and report where the brief says." > "$S/gw-calib-s$SS-log$try.txt" 2>&1
    if [ -s "$S/gw-calib-s$SS-report.md" ]; then echo "s$SS ok try $try"; break; fi
    echo "s$SS no report after try $try"; sleep 60
  done
done
