#!/bin/sh
B="C:/Program Files/Blender Foundation/Blender 5.2/blender.exe"
S="D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her/rig_her.py"
C="D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her/check_rig.py"
O="D:/scratch 2026/her-c2/rig5d"
cd "$O" || exit 1
idle() { for i in $(seq 1 240); do tasklist | grep -qi blender || return 0; sleep 5; done; echo "BLENDER NEVER IDLE"; exit 3; }
idle; "$B" --background --python "$S" -- --stage build $BARGS > _build.log 2>&1; echo "build rc $?"
idle; "$B" --background "$O/her-rig5d.blend" --python "$C" -- --out "$O" --glb "$O/her-rig5d.glb" > _check.log 2>&1; echo "check rc $?"
echo BUILD DONE
