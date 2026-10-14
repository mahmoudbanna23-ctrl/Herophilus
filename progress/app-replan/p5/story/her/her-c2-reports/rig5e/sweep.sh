#!/bin/sh
# usage: sweep.sh name args...
B="C:/Program Files/Blender Foundation/Blender 5.2/blender.exe"
S="D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her/rig_her.py"
O="D:/scratch 2026/her-c2/rig5e"; n=$1; shift
idle() { for i in $(seq 1 240); do tasklist | grep -qi blender || return 0; sleep 3; done; echo NEVERIDLE; exit 3; }
mkdir -p "$O/$n"; cd "$O"
idle; "$B" --background --python "$S" -- --stage build --out "$O/$n" --tag $n "$@" > "$O/$n/_build.log" 2>&1
grep -a "RIG wave" "$O/$n/_build.log" | cut -c1-260
ls "$O/$n" | head -5
idle; "$B" --background "$O/$n/her-$n.blend" --python "$O/diag2.py" 2>&1 | grep -a "^DG\|Error\|Traceback" | cut -c1-300
