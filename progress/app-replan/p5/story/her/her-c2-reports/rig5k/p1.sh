#!/bin/sh
B="C:/Program Files/Blender Foundation/Blender 5.2/blender.exe"
S="D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her/rig_her.py"
C="D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her/check_rig.py"
O="D:/scratch 2026/her-c2/rig5k"
cd "$O" || exit 1
idle() { for i in $(seq 1 400); do tasklist | grep -qi blender || return 0; sleep 5; done; echo NEVERIDLE; exit 3; }
idle; "$B" --background --python "$S" -- --stage build --axo 0.15 --wavesup -38 --out "$O" --tag rig5k > build.log 2>&1; echo build $?
idle; "$B" --background --python "$S" -- --stage wrist --mode sweep --samples 4 --out "$O" --tag rig5k > wrist.log 2>&1; echo wrist $?
idle; "$B" --background "$O/her-rig5k.blend" --python "$C" -- --out "$O" --glb "$O/her-rig5k.glb" > check.log 2>&1; echo check $?
echo P1DONE
