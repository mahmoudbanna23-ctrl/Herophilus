#!/bin/sh
# face rig 7: build, export, check (4 seeds), stills, film in chunks, compose. One Blender at a time.
cd "D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her/" || exit 1
L="D:/scratch 2026/her-c2/face8"
B="C:/Program Files/Blender Foundation/Blender 5.2/blender.exe"
w() { for i in $(seq 1 400); do tasklist | grep -qi blender || return 0; ping -n 11 127.0.0.1 >/dev/null; done; return 1; }
run() { w || { echo "BUSY before $1" >> "$L/_run.log"; exit 1; }; echo "start $1 $(date +%T)" >> "$L/_run.log"; shift; "$B" "$@" >> "$L/_run.log" 2>&1; echo "rc $? : $*" >> "$L/_run.log"; }
mkdir -p "$L"; : > "$L/_run.log"
if [ "$1" != "render" ]; then
run build --background --python face_rig.py -- --stage build
run export --background "$L/face8.blend" --python face_rig.py -- --stage export
run check29 --background "$L/face8.blend" --python check_face.py
FACE_SEED=4242 run check4242 --background "$L/face8.blend" --python check_face.py
FACE_SEED=777 run check777 --background "$L/face8.blend" --python check_face.py
FACE_SEED=1234 run check1234 --background "$L/face8.blend" --python check_face.py
echo CHECKS_DONE >> "$L/_run.log"
fi
if [ "$1" != "checks" ]; then
run stills --background "$L/face8.blend" --python face_rig.py -- --stage render --only neutral,overlay,keys,mouths,expr,curve,zig,grid,magenta,lash,stress,sadclose
run seq1 --background "$L/face8.blend" --python face_rig.py -- --stage render --only seq --frames 0,32
run seq2 --background "$L/face8.blend" --python face_rig.py -- --stage render --only seq --frames 32,64
run seq3 --background "$L/face8.blend" --python face_rig.py -- --stage render --only seq --frames 64,999
python face_rig.py --compose --movie >> "$L/_run.log" 2>&1; echo "rc $? : compose" >> "$L/_run.log"
run recheck29 --background "$L/face8.blend" --python check_face.py
fi
echo ALL_DONE >> "$L/_run.log"
