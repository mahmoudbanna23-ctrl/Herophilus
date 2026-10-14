#!/bin/sh
B="C:/Program Files/Blender Foundation/Blender 5.2/blender.exe"
S="D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her/rig_her.py"
C="D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her/check_rig.py"
O="D:/scratch 2026/her-c2/rig5i"
cd "$O" || exit 1
idle() { for i in $(seq 1 400); do tasklist | grep -qi blender || return 0; sleep 5; done; echo NEVERIDLE; exit 3; }
idle; "$B" --background --python "$S" -- --stage build $BARGS > _build.log 2>&1; echo build $?
idle; "$B" --background "$O/her-rig5i.blend" --python "$C" -- --out "$O" --glb "$O/her-rig5i.glb" > _check.log 2>&1; echo check $?
idle; "$B" --background --python "$S" -- --stage wrist --mode sweep > _wrist.log 2>&1; echo wrist $?
idle; "$B" --background --python "$S" -- --stage wrist --mode cuff > _cuff.log 2>&1; echo cuff $?
echo CHAIN1 DONE
