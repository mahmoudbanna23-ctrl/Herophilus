# refuter probe: zig-zag lip metric over presets + plausible blends; renders flagged + calibration mouths (CPU Cycles)
import bpy, sys, json, math, os
H = 'D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her'
sys.path.insert(0, H)
import face_rig as FR
R = 'D:/scratch 2026/her-c2/face3-refute'
bpy.ops.wm.open_mainfile(filepath=FR.BLEND)
scene = bpy.context.scene; cam = bpy.data.objects['cam']; arm = bpy.data.objects['face_rig']
M = bpy.data.objects['mouth']
def rows():
    dg = bpy.context.evaluated_depsgraph_get(); e = M.evaluated_get(dg); me = e.to_mesh()
    co = [M.matrix_world @ v.co for v in me.vertices]; e.to_mesh_clear()
    return [co[c*5] for c in range(FR.NU+1)], [co[c*5+4] for c in range(FR.NU+1)]
def turns(p):
    a = []
    for i in range(1, len(p)-1):
        d1 = (p[i].x-p[i-1].x, p[i].z-p[i-1].z); d2 = (p[i+1].x-p[i].x, p[i+1].z-p[i].z)
        a.append(math.degrees(math.atan2(d1[0]*d2[1]-d1[1]*d2[0], d1[0]*d2[0]+d1[1]*d2[1])))
    return a
def zig(st):
    FR.pose_state(arm, st); top, bot = rows(); r = {}
    for nm, p in (('top', top), ('bot', bot)):
        t = turns(p); sig = [x for x in t if abs(x) > 8]
        r[nm+'_xrev'] = sum(1 for a, b in zip(p, p[1:]) if b.x < a.x - 1e-5)
        r[nm+'_kinks'] = sum(1 for a, b in zip(sig, sig[1:]) if a*b < 0)
        r[nm+'_maxturn'] = round(max(abs(x) for x in t), 1)
    r['min_gap_mm'] = round(min(a.z-b.z for a, b in zip(top, bot))*1000, 2)
    r['score'] = r['top_xrev']+r['bot_xrev']+r['top_kinks']+r['bot_kinks']
    return r
B = FR.both; P = {k: FR.preset_state(k) for k in FR.PRESETS}
stress = {l.split()[0]: s for l, s in json.load(open(FR.OUT + '/_stress_states.json'))}
S = [('cal ' + k, stress[k]) for k in ('#38', '#75', '#102', '#74', '#56')]
S += [('preset ' + k, v) for k, v in P.items()]
vis = 'ABCDEFGHX'
for k in ('happy', 'sad', 'frown_concern', 'surprise', 'thinking', 'warm_smile', 'wink'):
    for m in vis:
        st = json.loads(json.dumps(P[k])); st['keys'] = dict(st['keys'], **{m: 1.0}); S.append(('%s + %s' % (k, m), st))
side = [dict(keys={'AU12_lip_corner_puller_L': 1, 'AU14_dimpler_L': 1}), dict(keys={'AU20_lip_stretcher_L': 1}),
        dict(keys={'AU14_dimpler_L': 1}), dict(keys={'AU16_lower_lip_depressor_L': 1}),
        dict(keys={'AU20_lip_stretcher_L': 1, 'AU14_dimpler_L': 1, 'AU16_lower_lip_depressor_L': 1}),
        dict(keys={'AU12_lip_corner_puller_L': 1, 'AU15_lip_corner_depressor_R': 1}),
        dict(keys={'AU18_lip_pucker': 1, 'AU12_lip_corner_puller_L': 1}),
        dict(keys={'AU18_lip_pucker': 1}), dict(keys={'AU22_lip_funneler': 1, 'AU18_lip_pucker': 1}),
        dict(keys={'AU12_lip_corner_puller_L': 1, 'AU14_dimpler_L': 1}, jaw_side=-1),
        dict(keys={'AU15_lip_corner_depressor_L': 1, 'AU17_chin_raiser': 1, 'AU20_lip_stretcher_R': 1})]
S += [('side ' + ','.join('%s=%g' % (k.split('_')[0] + k[-2:], v) for k, v in s['keys'].items()) + (' js%g' % s['jaw_side'] if 'jaw_side' in s else ''), s) for s in side]
ks = list(P)
for i, a in enumerate(ks):
    for b in ks[i+1:]:
        st = dict(keys={k: 0.5*P[a]['keys'].get(k, 0) + 0.5*P[b]['keys'].get(k, 0) for k in set(P[a]['keys']) | set(P[b]['keys'])},
                  jaw=0.5*P[a]['jaw'] + 0.5*P[b]['jaw']); S.append(('mix %s/%s' % (a, b), st))
res = []
for lab, st in S:
    try: res.append((lab, zig(st)))
    except Exception as ex: res.append((lab, {'err': str(ex)}))
json.dump(res, open(R + '/zig.json', 'w'), indent=0)
cal = max(v['score'] for l, v in res if l in ('cal #74', 'cal #56'))
flag = [l for l, v in res if not l.startswith('cal') and v.get('score', 0) > cal]
print('CAL', [(l, v['score']) for l, v in res if l.startswith('cal')])
print('FLAGGED', len(flag), flag[:40])
top = sorted([(v['score'], l) for l, v in res if not l.startswith('cal')], reverse=True)[:9]
sel = [l for l in ('cal #38', 'cal #74')] + [l for _, l in top]
FR.cycles_cpu(scene, 16); scene.cycles.use_denoising = True
FR.cam_at(cam, (0, -0.1, 0.60), 0, 0.62); scene.render.resolution_x, scene.render.resolution_y = 360, 240
dd = R + '/zig_tiles'; os.makedirs(dd, exist_ok=True)
SD = dict(S)
json.dump(sel, open(dd + '/labels.json', 'w'))
for i, l in enumerate(sel):
    FR.pose_state(arm, SD[l]); scene.render.filepath = dd + '/%02d.png' % i; bpy.ops.render.render(write_still=True)
print('DONE')
