cd "D:/scratch 2026/her-c2/face9-refute"
B="C:/Program Files/Blender Foundation/Blender 5.2/blender.exe"
w() { for i in $(seq 1 1000); do tasklist | grep -qi blender || return 0; sleep 6; done; return 1; }
for s in 29 4242 777 1234; do w || { echo BUSY >> go.log; exit 1; }; echo "start $s $(date +%T)" >> go.log; FACE_SEED=$s "$B" --background --python chk_wrap.py > chk_$s.log 2>&1; echo "seed $s rc $?" >> go.log; done
w || { echo BUSY >> go.log; exit 1; }; echo "start rnd $(date +%T)" >> go.log
"$B" --background --python rnd.py > rnd.log 2>&1; echo "rnd rc $?" >> go.log
echo GO_DONE >> go.log
