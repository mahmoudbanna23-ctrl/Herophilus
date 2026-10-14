#!/bin/sh
# usage: sv.sh name args...   build into rig5g/<name> then overlap diag f156-184
B="C:/Program Files/Blender Foundation/Blender 5.2/blender.exe"
S="D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her/rig_her.py"
O="D:/scratch 2026/her-c2/rig5g"
n=$1; shift; mkdir -p "$O/$n"; cd "$O/$n" || exit 1
idle() { for i in $(seq 1 240); do tasklist | grep -qi blender || return 0; sleep 5; done; exit 3; }
idle; "$B" --background --python "$S" -- --stage build --out "$O/$n" "$@" > b.log 2>&1; echo "build $n rc $?"
idle; "$B" --background "$O/$n/her-rig5g.blend" --python "$O/ov.py" -- 156 184 $n > ov.log 2>&1
grep "^OV" ov.log | sed "s/[{},']//g" | awk '$2>=164 && $2<=176 {printf "%s g%s/%s a%s/%s | ", $2,$4,$8,$6,$10} END{print ""}'
