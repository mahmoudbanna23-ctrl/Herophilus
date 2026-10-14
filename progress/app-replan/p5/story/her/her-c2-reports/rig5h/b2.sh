#!/bin/sh
B="C:/Program Files/Blender Foundation/Blender 5.2/blender.exe"
S="D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her/rig_her.py"
C="D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her/check_rig.py"
O="$OUTD"
cd "$O" || exit 1
idle() { for i in $(seq 1 240); do tasklist | grep -qi blender || return 0; sleep 5; done; echo "BLENDER NEVER IDLE"; exit 3; }
idle; "$B" --background --python "$S" -- --stage build --out "$O" --tag $TAGN $BARGS > _build.log 2>&1; echo "build rc $?"
idle; "$B" --background "$O/her-$TAGN.blend" --python "$C" -- --out "$O" --glb "$O/her-$TAGN.glb" > _check.log 2>&1; echo "check rc $?"
echo BUILD DONE
