#!/bin/sh
B="C:/Program Files/Blender Foundation/Blender 5.2/blender.exe"
H="D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her"
S="$H/rig_her.py"
O="${O:-D:/scratch 2026/her-c2/rig5m}"
T="${T:-rig5m}"
cd "$O" || exit 1
idle() { for i in $(seq 1 1440); do tasklist | grep -qi blender || return 0; sleep 5; done; echo "IDLE-TIMEOUT continuing"; }
idle; "$B" --background --python "$S" -- --stage build --axo 0.15 --wavesup -38 --out "$O" --tag "$T" $EXTRA > build.log 2>&1; echo build $?
idle; "$B" --background --python "$S" -- --stage wrist --mode sweep --norender --out "$O" --tag "$T" > wrist_nr.log 2>&1; echo wrist_nr $?
idle; "$B" --background "$O/her-$T.blend" --python "$H/check_rig.py" -- --out "$O" --glb "$O/her-$T.glb" > check.log 2>&1; echo check $?
echo M1DONE
