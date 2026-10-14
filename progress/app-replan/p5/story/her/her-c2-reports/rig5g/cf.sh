#!/bin/sh
# cf.sh name f0 f1 : render wave-close frames from <name>/her-rig5g.blend, tile to <name>/tile.png
B="C:/Program Files/Blender Foundation/Blender 5.2/blender.exe"
S="D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her/rig_her.py"
O="D:/scratch 2026/her-c2/rig5g"; n=$1
idle() { for i in $(seq 1 240); do tasklist | grep -qi blender || return 0; sleep 5; done; exit 3; }
idle; "$B" --background --python "$S" -- --stage movie --cam wave --f0 $2 --f1 $3 --samples 24 --out "$O/$n" > "$O/$n/m.log" 2>&1; echo "movie rc $?"
cd "$O/$n/frames_wave" && ffmpeg -y -loglevel error -framerate 1 -start_number $2 -i %04d.png -vf "tile=4x2" -frames:v 1 ../tile.png && echo tiled
