#!/bin/sh
B="C:/Program Files/Blender Foundation/Blender 5.2/blender.exe"
H="D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her"
S="$H/rig_her.py"
O="D:/scratch 2026/her-c2/rig5n"
cd "$O"
idle() { for i in $(seq 1 400); do tasklist | grep -qi blender || return 0; sleep 5; done; echo NEVERIDLE; echo IDLE-TIMEOUT-continue; }
enc() { d=$1; out=$2; f0=$(ls "$d" | head -1 | sed 's/\.png//'); ffmpeg -y -loglevel error -framerate 12 -start_number "$f0" -i "$d/%04d.png" -c:v libx264 -pix_fmt yuv420p "$out" && echo "enc $out"; }
idle; "$B" --background --python "$S" -- --stage build --axo 0.15 --wavesup -38 --out "$O" --tag rig5n > build.log 2>&1; echo build $?
idle; "$B" --background --python "$S" -- --stage wrist --mode sweep --samples 4 --out "$O" --tag rig5n > wrist.log 2>&1; echo wrist $?
enc frames_wrist_front wf.mp4; enc frames_wrist_tq wt.mp4
ffmpeg -y -loglevel error -i wf.mp4 -i wt.mp4 -filter_complex hstack -c:v libx264 -pix_fmt yuv420p wrist_close.mp4 && echo enc wrist_close
cp wrist_metrics_5j.json wrist_metrics_sweep.json; mkdir -p sweep_frames; cp -r frames_wrist_front frames_wrist_tq sweep_frames/
idle; "$B" --background --python "$S" -- --stage wrist --mode cuff --samples 4 --out "$O" --tag rig5n > cuff.log 2>&1; echo cuff $?
ffmpeg -y -loglevel error -framerate 24 -start_number 0 -i cuff/cuff_front_%03d.png -c:v libx264 -pix_fmt yuv420p cf.mp4; ffmpeg -y -loglevel error -framerate 24 -start_number 0 -i cuff/cuff_tq_%03d.png -c:v libx264 -pix_fmt yuv420p ct.mp4
ffmpeg -y -loglevel error -i cf.mp4 -i ct.mp4 -filter_complex hstack -c:v libx264 -pix_fmt yuv420p cuff_close.mp4 && echo enc cuff_close
cp wrist_metrics_sweep.json wrist_metrics_5j.json
idle; "$B" --background her-rig5n.blend --python "$H/check_rig.py" -- --out "$O" --glb "$O/her-rig5n.glb" > check.log 2>&1; echo check $?
run() { view=$1; name=$2; f0=$3; shift 3; idle; "$B" --background --python "$S" -- --stage movie --cam "$view" --out "$O" --tag rig5n "$@" > "_movie_$view.log" 2>&1; echo "movie $view $?"; ffmpeg -y -loglevel error -framerate 24 -start_number "$f0" -i "frames_$view/%04d.png" -c:v libx264 -pix_fmt yuv420p "$name" && echo "enc $name"; }
run tq move.mp4 0; run side move_side.mp4 0; run front move_front.mp4 0; run wave wave_close.mp4 104 --f0 104
idle; "$B" --background --python "$S" -- --stage peak --out "$O" --tag rig5n > peak.log 2>&1; echo peak $?
echo C2DONE
