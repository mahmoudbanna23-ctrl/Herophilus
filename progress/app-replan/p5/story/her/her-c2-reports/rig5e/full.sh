#!/bin/sh
B="C:/Program Files/Blender Foundation/Blender 5.2/blender.exe"
S="D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her/rig_her.py"
cd "D:/scratch 2026/her-c2/rig5e" || exit 1
idle() { for i in $(seq 1 240); do tasklist | grep -qi blender || return 0; sleep 5; done; echo NEVERIDLE; exit 3; }
sh build.sh
idle; "$B" --background her-rig5e.blend --python p_probe.py > probe.log 2>&1; echo probe $?
idle; "$B" --background --python "$S" -- --stage peak > _peak.log 2>&1; echo peak $?
sh films.sh
echo FULL DONE
