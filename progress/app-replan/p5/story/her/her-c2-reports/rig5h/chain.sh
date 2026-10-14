#!/bin/sh
B="C:/Program Files/Blender Foundation/Blender 5.2/blender.exe"
S="D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her/rig_her.py"
O="D:/scratch 2026/her-c2/rig5h"
cd "$O" || exit 1
idle() { for i in $(seq 1 240); do tasklist | grep -qi blender || return 0; sleep 5; done; echo NEVERIDLE; exit 3; }
idle; "$B" --background her-rig5h.blend --python p_probe.py > probe.log 2>&1; echo probe $?
idle; "$B" --background her-rig5h.blend --python ov.py -- 156 184 h > ov.log 2>&1; echo ov $?
idle; "$B" --background --python "$S" -- --stage peak > _peak.log 2>&1; echo peak $?
idle; "$B" --background --python "$S" -- --stage wrist --mode cuff > _cuff.log 2>&1; echo cuff $?
idle; "$B" --background --python "$S" -- --stage wrist --mode sweep > _wrist.log 2>&1; echo wrist $?
ffmpeg -y -loglevel error -framerate 24 -i frames_wrist_front/%04d.png -framerate 24 -i frames_wrist_tq/%04d.png -filter_complex hstack -c:v libx264 -pix_fmt yuv420p wrist_close.mp4 && echo encoded wrist_close
sh films.sh
echo CHAIN DONE
