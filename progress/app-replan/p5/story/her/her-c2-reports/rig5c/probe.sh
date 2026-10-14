#!/bin/sh
# probe: name, build args ; renders only elbow shot (1) into probe_<name>/_review
B="C:/Program Files/Blender Foundation/Blender 5.2/blender.exe"
S="D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her/rig_her.py"
O="D:/scratch 2026/her-c2/rig5c/probe_$1"; shift
idle() { for i in $(seq 1 240); do tasklist | grep -qi blender || return 0; sleep 5; done; echo NEVER; exit 3; }
mkdir -p "$O"; idle
"$B" --background --python "$S" -- --stage build --out "$O" "$@" > "$O/_b.log" 2>&1; echo "build rc $?"
idle
"$B" --background "$O/her-rig5c.blend" --python "$S" -- --stage review --out "$O" --shots 1,2 > "$O/_r.log" 2>&1; echo "review rc $?"
