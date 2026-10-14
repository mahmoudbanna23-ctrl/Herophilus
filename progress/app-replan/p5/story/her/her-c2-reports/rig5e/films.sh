#!/bin/sh
# rig 5b films: one blender at a time, wait for idle before each run, then ffmpeg encode.
B="C:/Program Files/Blender Foundation/Blender 5.2/blender.exe"
S="D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her/rig_her.py"
O="D:/scratch 2026/her-c2/rig5e"
cd "$O" || exit 1
idle() { for i in $(seq 1 240); do tasklist | grep -qi blender || return 0; sleep 5; done; echo "BLENDER NEVER IDLE"; exit 3; }
run() {  # view extra-args... ; film name ; start frame
  view=$1; name=$2; f0=$3; shift 3
  idle
  "$B" --background --python "$S" -- --stage movie --cam "$view" "$@" > "_movie_$view.log" 2>&1
  echo "movie $view rc $?"
  ffmpeg -y -loglevel error -framerate 24 -start_number "$f0" -i "frames_$view/%04d.png" -c:v libx264 -pix_fmt yuv420p "$name" && echo "encoded $name"
}
run tq move.mp4 0
run side move_side.mp4 0
run wave wave_close.mp4 104 --f0 104
echo FILMS DONE
