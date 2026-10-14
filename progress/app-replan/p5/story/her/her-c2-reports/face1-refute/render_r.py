import bpy, sys, json, time, os
H = 'D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her'
sys.path.insert(0, H)
import face_rig as FR
R = 'D:/scratch 2026/her-c2/face1-refute'
mode = sys.argv[sys.argv.index('--') + 1]
bpy.ops.wm.open_mainfile(filepath=FR.BLEND)
scene = bpy.context.scene; cam = bpy.data.objects['cam']; arm = bpy.data.objects['face_rig']
FR.cycles_cpu(scene, 24)
for o in bpy.data.objects:
    if o.name.split('_')[0] in ('leg', 'sandal', 'skirt', 'waist', 'arm', 'glove'): o.hide_render = True
r = scene.render
def B(n, v): return {n + '_L': v, n + '_R': v}
P = {k: FR.preset_state(k) for k in FR.PRESETS}
STILLS = [('neutral', {}), ('blink', dict(lid_up={'L': 1, 'R': 1})), ('happy', P['happy']), ('surprise', P['surprise']),
          ('frown', P['frown_concern']), ('sad', P['sad']), ('mouth_D', dict(keys={'D': 1.0})),
          ('blink_lookdown', dict(lid_up={'L': 1, 'R': 1}, look=(0, -30))),
          ('blink_lookright', dict(lid_up={'L': 1, 'R': 1}, look=(35, 0))),
          ('wink', P['wink']), ('look_down', dict(look=(0, -30))), ('frown_AU15', dict(keys={'AU15_lip_corner_depressor_L': 1, 'AU15_lip_corner_depressor_R': 1}))]
if mode == 'stills':
    r.resolution_x, r.resolution_y = 640, 560
    FR.cam_at(cam, (0, -0.1, 0.76), 0, 1.4)
    for lab, st in STILLS:
        t = time.time(); FR.pose_state(arm, st)
        r.filepath = R + '/close_%s.png' % lab; bpy.ops.render.render(write_still=True)
        print('STILL', lab, round(time.time() - t, 1))
else:
    def lerp(a, b, t):
        ks = set(a.get('keys', {})) | set(b.get('keys', {}))
        out = dict(keys={k: a.get('keys', {}).get(k, 0) * (1 - t) + b.get('keys', {}).get(k, 0) * t for k in ks})
        for f in ('jaw', 'jaw_side'): out[f] = a.get(f, 0) * (1 - t) + b.get(f, 0) * t
        la, lb = a.get('look', (0, 0)), b.get('look', (0, 0)); out['look'] = (la[0] * (1 - t) + lb[0] * t, la[1] * (1 - t) + lb[1] * t)
        for f in ('lid_up', 'lid_lo'):
            out[f] = {S: a.get(f, {}).get(S, 0) * (1 - t) + b.get(f, {}).get(S, 0) * t for S in 'LR'}
        return out
    seq = [{}, P['happy'], P['surprise'], dict(lid_up={'L': 1, 'R': 1}), {}]
    frames = []
    for a, b in zip(seq, seq[1:]):
        frames += [lerp(a, b, i / 8) for i in range(8)] + [b] * 2
    mo = [dict(keys={k: 1.0}) for k in 'ABCDEFGHX']
    prev = {}
    for m in mo:
        frames += [lerp(prev, m, 0.5), m, m]; prev = m
    frames.append({})
    # numeric pop scan on every frame: max vertex step between consecutive frames
    KE = ('eye_L', 'eye_R', 'lash_L', 'lash_R', 'mouth')
    dg = lambda: bpy.context.evaluated_depsgraph_get()
    def co(): 
        res = []
        for n in KE:
            ob = bpy.data.objects[n]; e = ob.evaluated_get(dg()); me = e.to_mesh(); res += [v.co.copy() for v in me.vertices]; e.to_mesh_clear()
        return res
    steps = []; last = None
    for i, st in enumerate(frames):
        FR.pose_state(arm, st); c = co()
        if last: steps.append((i, round(max((a - b).length for a, b in zip(c, last)) * 1000, 2)))
        last = c
    json.dump(dict(n=len(frames), steps=steps), open(R + '/seq_steps.json', 'w'))
    os.makedirs(R + '/seq', exist_ok=True)
    scene.cycles.samples = 10
    r.resolution_x, r.resolution_y = 400, 350
    FR.cam_at(cam, (0, -0.1, 0.76), 0, 1.4)
    for i, st in enumerate(frames):
        FR.pose_state(arm, st); r.filepath = R + '/seq/%03d.png' % i; bpy.ops.render.render(write_still=True)
    print('SEQ_DONE', len(frames))
