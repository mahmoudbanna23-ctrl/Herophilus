#!/bin/sh
# face rig 4: stills, film in chunks, compose, zig sheet. Waits for any other Blender before each run.
cd "D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her/" || exit 1
L="D:/scratch 2026/her-c2/face4"
B="C:/Program Files/Blender Foundation/Blender 5.2/blender.exe"
w() { for i in $(seq 1 200); do tasklist | grep -qi blender || return 0; ping -n 11 127.0.0.1 >/dev/null; done; return 1; }
run() { w || { echo "BUSY before $1" >> "$L/_render.log"; exit 1; }; shift; "$B" "$@" >> "$L/_render.log" 2>&1; echo "rc $? : $*" >> "$L/_render.log"; }
: > "$L/_render.log"
run stills --background "$L/face4.blend" --python face_rig.py -- --stage render --only neutral,keys,mouths,expr,grid,magenta,lash,stress,sadclose
run seq1 --background "$L/face4.blend" --python face_rig.py -- --stage render --only seq --frames 0,32
run seq2 --background "$L/face4.blend" --python face_rig.py -- --stage render --only seq --frames 32,64
run seq3 --background "$L/face4.blend" --python face_rig.py -- --stage render --only seq --frames 64,999
python face_rig.py --compose --movie >> "$L/_render.log" 2>&1; echo "rc $? : compose" >> "$L/_render.log"
python - >> "$L/_render.log" 2>&1 <<'EOF'
import json
from PIL import Image, ImageDraw
d = 'D:/scratch 2026/her-c2/face4/zig_tiles'
labs = json.load(open(d + '/labels.json'))
W, H, T = 360, 240, 20
S = Image.new('RGB', (W * 4, (H + T) * ((len(labs) + 3) // 4)), (18, 18, 20)); dr = ImageDraw.Draw(S)
for i, l in enumerate(labs):
    x, y = (i % 4) * W, (i // 4) * (H + T)
    dr.text((x + 4, y + 4), l, fill=(235, 235, 235)); S.paste(Image.open(d + '/%02d.png' % i).convert('RGB'), (x, y + T))
S.save('D:/scratch 2026/her-c2/face4/zig_sheet.png'); print('ZIG_SHEET_OK')
EOF
echo ALL_DONE >> "$L/_render.log"
