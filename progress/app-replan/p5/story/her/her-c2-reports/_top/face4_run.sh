#!/bin/sh
# face rig 4: build, export, check (3 seeds), zig probe. Waits for any other Blender before each run.
cd "D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her/" || exit 1
L="D:/scratch 2026/her-c2/face4"
B="C:/Program Files/Blender Foundation/Blender 5.2/blender.exe"
w() { for i in $(seq 1 200); do tasklist | grep -qi blender || return 0; ping -n 11 127.0.0.1 >/dev/null; done; return 1; }
run() { w || { echo "BUSY before $1" >> "$L/_run.log"; exit 1; }; shift; "$B" "$@" >> "$L/_run.log" 2>&1; echo "rc $? : $*" >> "$L/_run.log"; }
mkdir -p "$L"; : > "$L/_run.log"
run build --background --python face_rig.py -- --stage build
run export --background "$L/face4.blend" --python face_rig.py -- --stage export
run check29 --background "$L/face4.blend" --python check_face.py
FACE_SEED=4242 run check4242 --background "$L/face4.blend" --python check_face.py
FACE_SEED=777 run check777 --background "$L/face4.blend" --python check_face.py
run zig --background "$L/face4.blend" --python "D:/scratch 2026/her-c2/face4_zig_probe.py"
echo ALL_DONE >> "$L/_run.log"
