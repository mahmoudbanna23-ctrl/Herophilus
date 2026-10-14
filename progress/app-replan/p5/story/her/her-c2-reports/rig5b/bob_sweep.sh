#!/bin/sh
# rig 5b bob sweep: --fast builds (numbers only) into _sweep/<name>, one blender at a time.
B="C:/Program Files/Blender Foundation/Blender 5.2/blender.exe"
S="D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her/rig_her.py"
O="D:/scratch 2026/her-c2/rig5b/_sweep"
mkdir -p "$O"
idle() { for i in $(seq 1 240); do tasklist | grep -qi blender || return 0; sleep 5; done; echo "BLENDER NEVER IDLE"; exit 3; }
run() {
  name=$1; shift
  idle
  mkdir -p "$O/$name"
  "$B" --background --python "$S" -- --stage build --fast --out "$O/$name" "$@" > "$O/$name.log" 2>&1
  echo "== $name ($*) rc $?"
  grep "RIG design\|ik clamps\|ankle ROM guard" "$O/$name.log" | cut -c1-400
}
run lag11k18 --lag 0.11 --kl 18 --k3 10 --k45 4 --kmid 1 --kts 1
run lag11k20 --lag 0.11 --kl 20 --k3 11 --k45 4 --kmid 1 --kts 1 --k0 0
run lag12k20 --lag 0.12 --kl 20 --k3 11 --k45 4 --kmid 1 --kts 1 --k0 0 --ktsc 1.2
echo SWEEP DONE
