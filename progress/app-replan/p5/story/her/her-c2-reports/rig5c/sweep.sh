#!/bin/sh
B="C:/Program Files/Blender Foundation/Blender 5.2/blender.exe"
S="D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her/rig_her.py"
O="D:/scratch 2026/her-c2/rig5c/_sweep"
idle() { for i in $(seq 1 240); do tasklist | grep -qi blender || return 0; sleep 5; done; echo "BLENDER NEVER IDLE"; exit 3; }
run() { name=$1; shift; idle; mkdir -p "$O/$name"
  "$B" --background --python "$S" -- --stage build --fast --out "$O/$name" "$@" > "$O/$name.log" 2>&1
  echo "== $name ($*) rc $?"; grep "RIG design\|ik clamps\|ankle ROM guard\|RIG pelvis\|bob" "$O/$name.log" | cut -c1-300; }
run lag110 --lag 0.11
run lag115 --lag 0.115
echo SWEEP DONE
