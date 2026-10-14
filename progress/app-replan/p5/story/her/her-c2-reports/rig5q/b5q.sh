#!/bin/sh
B="C:/Program Files/Blender Foundation/Blender 5.2/blender.exe"
H="D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her"
O="D:/scratch 2026/her-c2/rig5q"; cd "$O"
idle() { for i in $(seq 1 60); do tasklist | grep -qi blender || return 0; sleep 60; done; echo IDLE-TIMEOUT; exit 3; }
idle; "$B" --background --python "$H/rig_her.py" -- --stage build --out "$O" --tag rig5q > build.log 2>&1; echo build $?
idle; "$B" --background her-rig5q.blend --python diag_seat.py -- 0 70 144 > diag.log 2>&1; echo diag $?
grep DIAG diag.log; grep "wrist piece" build.log
