#!/bin/sh
B="C:/Program Files/Blender Foundation/Blender 5.2/blender.exe"
S="D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her/rig_her.py"
O="D:/scratch 2026/her-c2/rig5l"
cd "$O" || exit 1
idle() { for i in $(seq 1 400); do tasklist | grep -qi blender || return 0; sleep 5; done; echo NEVERIDLE; exit 3; }
idle; "$B" --background --python "$S" -- --stage wrist --mode sweep --norender --out "$O/proof5i" --tag p5i > proof5i/wrist.log 2>&1; echo proof5i $?
idle; "$B" --background --python "$S" -- --stage build --axo 0.15 --wavesup -38 --out "$O" --tag rig5l > build.log 2>&1; echo build $?
idle; "$B" --background --python "$S" -- --stage wrist --mode sweep --norender --out "$O" --tag rig5l > wrist_nr.log 2>&1; echo wrist_nr $?
echo C1DONE
