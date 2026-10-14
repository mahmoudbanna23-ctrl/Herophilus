#!/bin/sh
B="C:/Program Files/Blender Foundation/Blender 5.2/blender.exe"
S="D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her/rig_her.py"
C="D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her/check_rig.py"
O="D:/scratch 2026/her-c2/rig5c"
cd "$O" || exit 1
idle() { for i in $(seq 1 240); do tasklist | grep -qi blender || return 0; sleep 5; done; echo "BLENDER NEVER IDLE"; exit 3; }
idle; "$B" --background --python "$S" -- --stage build > _build.log 2>&1; echo "build rc $?"
idle; "$B" --background "$O/her-rig5c.blend" --python "$C" -- --out "$O" --glb "$O/her-rig5c.glb" > _check.log 2>&1; echo "check rc $?"
idle; "$B" --background "$O/her-rig5c.blend" --python "$S" -- --stage review > _review.log 2>&1; echo "review rc $?"
python compose_5c.py > _compose.log 2>&1; echo "compose rc $?"
echo BUILD DONE
