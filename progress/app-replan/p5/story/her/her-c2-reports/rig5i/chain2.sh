#!/bin/sh
B="C:/Program Files/Blender Foundation/Blender 5.2/blender.exe"
S="D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her/rig_her.py"
C="D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her/check_rig.py"
O="D:/scratch 2026/her-c2/rig5i"
cd "$O" || exit 1; BARGS="--axo 0.15 --wavesup -38"
idle() { for i in $(seq 1 400); do tasklist | grep -qi blender || return 0; sleep 5; done; echo NEVERIDLE; exit 3; }
idle; "$B" --background --python "$S" -- --stage build $BARGS > _build.log 2>&1; echo build $?
idle; "$B" --background "$O/her-rig5i.blend" --python "$C" -- --out "$O" --glb "$O/her-rig5i.glb" > _check.log 2>&1; echo check $?
idle; "$B" --background --python "$S" -- --stage wrist --mode sweep > _wrist.log 2>&1; echo wrist $?
idle; "$B" --background --python "$S" -- --stage wrist --mode cuff > _cuff.log 2>&1; echo cuff $?
idle; "$B" --background her-rig5i.blend --python p_probe.py > probe.log 2>&1; echo probe $?
idle; "$B" --background --python "$S" -- --stage peak > _peak.log 2>&1; echo peak $?
ffmpeg -y -loglevel error -framerate 24 -i frames_wrist_front/%04d.png -framerate 24 -i frames_wrist_tq/%04d.png -filter_complex hstack -c:v libx264 -pix_fmt yuv420p wrist_close.mp4 && echo encoded wrist_close
sh films.sh
echo CHAIN2 DONE
