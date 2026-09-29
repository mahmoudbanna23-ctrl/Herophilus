# check_rig.py - machine checks for the Clepsydra rig (rig 2). Rerunnable by a reviewer:
#   blender -b "D:/scratch 2026/her-c2/rig2/her-rig2.blend" --python check_rig.py -- [--out <dir>] [--glb <file>]
# Writes <out>/checks.json. Bone checks (kept from rig 1): heel/ball point drift per stance, knee/elbow
# ranges, pose-bone scale == 1, every rotation inside its Limit Rotation, rest-pose pixel diff vs test8.
# MESH checks (rig 2; every non-armature modifier switched off, so the numbers are the skinned mesh):
#   per side the lowest foot-mesh z per frame and its largest frame-to-frame jump (target <= 6 mm),
#   foot-mesh drift while planted, lowest point of ANY mesh (floor), arm/glove verts inside the disc
#   volume per frame (target 0 every frame; the shoulder socket verts inside at rest are exempt, listed
#   in rig_meta), pelvis rise/fall and lateral shift. --glb: fresh factory scene, import the glb, list
#   every mesh's morph targets and confirm every shape key of the blend survived (last step).
import bpy, json, math, os, sys, traceback
import numpy as np
from mathutils import Vector
from mathutils.bvhtree import BVHTree

argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
OUT = argv[argv.index('--out') + 1] if '--out' in argv else 'D:/scratch 2026/her-c2/rig2'
GLB = argv[argv.index('--glb') + 1] if '--glb' in argv else None
TEST8 = 'D:/scratch 2026/her-c2/test8/her_front.png'
arm = bpy.data.objects['her_rig']
meta = json.loads(arm['rig_meta'])
scene = bpy.context.scene
arm.data.pose_position = 'POSE'
REST = {b.name: b.matrix_local.copy() for b in arm.data.bones}
F0, F1 = scene.frame_start, scene.frame_end
TOL = math.radians(0.05)
MESHES = [o for o in bpy.data.objects if o.type == 'MESH']
KEYS = {o.name: [k.name for k in o.data.shape_keys.key_blocks[1:]] for o in MESHES if o.data.shape_keys}
for o in MESHES:
    for m in o.modifiers:
        if m.type != 'ARMATURE':
            m.show_viewport = False

def wpt(bone, p):
    pb = arm.pose.bones[bone]
    return arm.matrix_world @ pb.matrix @ REST[bone].inverted() @ Vector(p)

# foot mesh verts: dominated (> 0.99) by foot_S / toe_S
feet = {'R': [], 'L': []}; toe_only = {'R': [], 'L': []}
for o in MESHES:
    names = {g.index: g.name for g in o.vertex_groups}
    for v in o.data.vertices:
        if not v.groups:
            continue
        g = max(v.groups, key=lambda g: g.weight); nm = names[g.group]
        for S in 'RL':
            if nm in ('foot_' + S, 'toe_' + S) and g.weight > 0.99:
                feet[S].append((o.name, v.index))
                if nm == 'toe_' + S:
                    toe_only[S].append((o.name, v.index))
D = meta['disc']; RX, RZ, ZC, T = D['RX'], D['RZ'], D['ZC'], D['T']
CLIPN = ['arm_R', 'arm_L', 'glove_R', 'glove_L']
EXEMPT = {n: set(meta.get('socket', {}).get(n, {}).get('exempt', [])) for n in CLIPN}
def inside(p):
    return (p.x / RX) ** 2 + ((p.z - ZC) / RZ) ** 2 < 0.97 and abs(p.y) < T / 2 * 0.95

low_at = []; track = {}; knee = {'R': [], 'L': []}; knee_geo = {'R': [], 'L': []}; elbow = {'R': [], 'L': []}
scale_bad = []; lim_bad = []; use = {}; ground_min = 1e9
cons = {pb.name: [c for c in pb.constraints if c.type == 'LIMIT_ROTATION'][0] for pb in arm.pose.bones}
foot_min = {'R': [], 'L': []}; foot_pos = {}; toe_pos = {}; floor = []; clip = []; pelvis = []
hipf = {'R': [], 'L': []}; gap = []
# rig 4: per-bone local rotation (relative to the parent), per-mesh vertex speed, knee net of rest, hip vs pelvis
ROTQ = {}; VFR = {}; PREVV = None; knee4 = {'R': [], 'L': []}; hip4 = {'R': [], 'L': []}
def _rest_knee_hip(S):
    th = arm.data.bones['thigh_' + S].matrix_local; sh = arm.data.bones['shin_' + S].matrix_local
    a, b, X = th.col[1].to_3d(), sh.col[1].to_3d(), th.col[0].to_3d()
    return -math.degrees(math.atan2(a.cross(b).dot(X), a.dot(b))), math.degrees(math.atan2(-a.y, -a.z))
REST_KH = {S: _rest_knee_hip(S) for S in 'RL'}
PEL_REST = arm.data.bones['pelvis'].matrix_local.to_3x3()
DISC_POLYS = [tuple(p.vertices) for p in bpy.data.objects['body_disc'].data.polygons]
for f in range(F0, F1 + 1):
    scene.frame_set(f)
    dg = bpy.context.evaluated_depsgraph_get()
    V = {}
    for o in MESHES:
        oe = o.evaluated_get(dg); me = oe.to_mesh(); mw = oe.matrix_world.copy()
        V[o.name] = [mw @ v.co for v in me.vertices]; oe.to_mesh_clear()
    floor.append(min(min(p.z for p in V[n]) for n in V))
    if PREVV is not None:
        for n in V:
            VFR.setdefault(n, []).append((max((a - b).length for a, b in zip(V[n], PREVV[n])) * 1000, f))
    PREVV = V
    for pb in arm.pose.bones:
        ROTQ.setdefault(pb.name, []).append(pb.matrix_basis.to_quaternion())
    Pd = (arm.pose.bones['pelvis'].matrix.to_3x3() @ PEL_REST.inverted()).inverted()
    for S in 'RL':
        pts = [V[o][i] for o, i in feet[S]]
        foot_min[S].append(min(p.z for p in pts)); foot_pos[(S, f)] = pts
        toe_pos[(S, f)] = [V[o][i] for o, i in toe_only[S]]
    M = (arm.matrix_world @ arm.pose.bones['head'].matrix @ REST['head'].inverted()).inverted()
    clip.append([sum(1 for i, p in enumerate(V[n]) if i not in EXEMPT[n] and inside(M @ p)) for n in CLIPN])
    pelvis.append(tuple(wpt('pelvis', arm.data.bones['pelvis'].head_local)))
    for S in ('R', 'L'):
        c = meta['contact'][S]
        track[(S, 'heel', f)] = wpt('foot_' + S, c['heel'])
        track[(S, 'ball', f)] = wpt('toe_' + S, c['ball'])
        tip = wpt('toe_' + S, c['tip'])
        ground_min = min(ground_min, track[(S, 'heel', f)].z, track[(S, 'ball', f)].z, tip.z)
        low_at.append((round(min(track[(S, 'heel', f)].z, track[(S, 'ball', f)].z, tip.z) * 1000, 2), f, S,
                       round(tip.z * 1000, 2)))
        knee[S].append(-math.degrees(arm.pose.bones['shin_' + S].rotation_euler.x))
        th = arm.pose.bones['thigh_' + S].matrix; sh = arm.pose.bones['shin_' + S].matrix
        a, b, X = th.col[1].to_3d(), sh.col[1].to_3d(), th.col[0].to_3d()
        knee_geo[S].append(-math.degrees(math.atan2(a.cross(b).dot(X), a.dot(b))))
        elbow[S].append(math.degrees(arm.pose.bones['forearm_' + S].rotation_euler.x))
        dth = th.col[1].to_3d()      # hip -> knee; she faces -y, so thigh ahead of vertical = hip flexion
        hipf[S].append(math.degrees(math.atan2(-dth.y, -dth.z)))
        knee4[S].append(knee_geo[S][-1] - REST_KH[S][0])
        dp = Pd @ dth
        hip4[S].append(math.degrees(math.atan2(-dp.y, -dp.z)) - REST_KH[S][1])
    # rig 3: glove_R surface to body_disc surface (both posed), signed (inside the disc = negative)
    bvh = BVHTree.FromPolygons(V['body_disc'], DISC_POLYS)
    g = 9.0
    for p in V['glove_R']:
        loc, nrm, _, dd = bvh.find_nearest(p)
        g = min(g, -dd if (p - loc).dot(nrm) < 0 else dd)
    gap.append(g)
    for pb in arm.pose.bones:
        sc = pb.scale; ms = pb.matrix.to_scale()
        if max(abs(sc[i] - 1) for i in range(3)) > 1e-6 or max(abs(ms[i] - 1) for i in range(3)) > 1e-4:
            scale_bad.append([pb.name, f, list(sc), list(ms)])
        c = cons[pb.name]; e = pb.rotation_euler
        for i, ax in enumerate('xyz'):
            lo, hi = getattr(c, 'min_' + ax), getattr(c, 'max_' + ax)
            u = use.setdefault(pb.name + '.' + ax, [1e9, -1e9, math.degrees(lo), math.degrees(hi)])
            u[0] = min(u[0], math.degrees(e[i])); u[1] = max(u[1], math.degrees(e[i]))
            if e[i] < lo - TOL or e[i] > hi + TOL:
                lim_bad.append([pb.name, ax, f, round(math.degrees(e[i]), 3), round(math.degrees(lo), 1),
                                round(math.degrees(hi), 1)])

stances = []
for p in meta['phases']:
    S = p['side']
    h0 = p['f0']; h1 = p['rise'] if p['rise'] is not None else p['f1']
    b0 = p['flat'] if p['flat'] is not None else p['f0']; b1 = p['f1']
    dh = max((track[(S, 'heel', f)] - track[(S, 'heel', h0)]).length for f in range(h0, h1 + 1))
    db = max((track[(S, 'ball', f)] - track[(S, 'ball', b0)]).length for f in range(b0, b1 + 1))
    # mesh: whole foot still from foot-flat to heel-rise; toe mesh still from foot-flat to the peel start
    pe = p.get('peel') if p.get('peel') is not None else b1
    mf = max(max((q - r).length for q, r in zip(foot_pos[(S, f)], foot_pos[(S, b0)])) for f in range(b0, h1 + 1))
    mt = max(max((q - r).length for q, r in zip(toe_pos[(S, f)], toe_pos[(S, b0)])) for f in range(b0, pe + 1))
    stances.append({'side': S, 'plant': p['plant'], 'frames': [p['f0'], p['f1']],
                    'heel_drift_mm': round(dh * 1000, 3), 'ball_drift_mm': round(db * 1000, 3),
                    'mesh_foot_drift_flat_mm': round(mf * 1000, 3), 'mesh_toe_drift_to_peel_mm': round(mt * 1000, 3),
                    'max_mm': round(max(dh, db) * 1000, 3)})

jumps = {}
for S in 'RL':
    d = [(foot_min[S][i] - foot_min[S][i - 1]) * 1000 for i in range(1, len(foot_min[S]))]
    k = max(range(len(d)), key=lambda i: abs(d[i]))
    jumps[S] = {'max_abs_mm': round(abs(d[k]), 3), 'at_frame': F0 + k + 1,
                'over_6mm_frames': [F0 + i + 1 for i in range(len(d)) if abs(d[i]) > 6.0],
                'min_mm': round(min(foot_min[S]) * 1000, 3)}
cmax = [max(r[i] for r in clip) for i in range(len(CLIPN))]
w0, w1 = 31 - F0, 91 - F0
pz = [p[2] for p in pelvis[w0:w1 + 1]]; px = [p[0] for p in pelvis[w0:w1 + 1]]

# ---- rig 3 gait numbers: per strike / swing / step (u = frames after the heel strike that opens it)
K = lambda S, f: knee[S][f - F0]
strikes = sorted((p['f0'], p['side'], p) for p in meta['phases'] if p['f0'] > F0)
nxt = {}
for p in meta['phases']:
    later = [q['f0'] for q in meta['phases'] if q['side'] == p['side'] and q['f0'] > p['f0']]
    if p['f1'] < F1 and later:
        nxt[(p['side'], p['f1'])] = min(later)
stance_knee = [{'side': S, 'strike': f, 'contact': round(K(S, f), 1),
                'loading_peak': round(max(K(S, t) for t in range(f, f + 6)), 1),
                'loading_peak_u': max(range(6), key=lambda u: K(S, f + u)),
                'midstance_min': round(min(K(S, t) for t in range(f + 5, f + 10)), 1)}
               for f, S, p in strikes if f + 10 <= F1]
swings = []; hip_pk = []
for (S, off), on in sorted(nxt.items(), key=lambda kv: kv[0][1]):
    fr = range(off, on + 1); mid = range(off + 2, on - 1)
    swings.append({'side': S, 'off': off, 'strike': on, 'knee_peak': round(max(K(S, t) for t in fr), 1),
                   'hip_flex_peak': round(max(hipf[S][t - F0] for t in fr), 1),
                   'clearance_min_mm': round(min(foot_min[S][t - F0] for t in mid) * 1000, 1),
                   'clearance_mid_third_mm': round(min(foot_min[S][t - F0] for t in
                                                   range(off + (on - off) // 3, on - (on - off) // 3 + 1)) * 1000, 1)})
steps = []
for (fa, Sa, _), (fb, Sb, _) in zip(strikes, strikes[1:]):
    zz = [pelvis[t - F0][2] for t in range(fa, fb + 1)]
    lo, hi = zz.index(min(zz)), zz.index(max(zz))
    steps.append({'from_strike': [Sa, fa], 'to': fb, 'low_u': lo, 'high_u': hi,
                  'low_pct': round(100 * lo / (fb - fa)), 'high_pct': round(100 * hi / (fb - fa)),
                  'range_mm': round((max(zz) - min(zz)) * 1000, 1)})
WV = [i for i in range(len(gap)) if F0 + i >= 100]
gait3 = {'stance_knee': stance_knee, 'swing': swings, 'pelvis_per_step': steps,
         'hip_flexion_peak_deg': {S: round(max(hipf[S]), 1) for S in hipf},
         'swing_clearance_min_mm': min(s['clearance_min_mm'] for s in swings),
         'wave_glove_disc_min_mm': {'frames_100_end': round(min(gap[i] for i in WV) * 1000, 1),
                                    'at_frame': F0 + min(WV, key=lambda i: gap[i]),
                                    'all_frames': round(min(gap) * 1000, 1), 'target_mm': 10.0}}

# ---- rig 4 motion checks. Thresholds from a natural adult walk at 24 fps (her gait is scaled in length,
# not in time): peak knee angular speed ~350-400 deg/s = 17 deg/frame, ankle ~300 = 12.5, hip ~200-240 = 10,
# any other bone 8. Angular acceleration (|w_t - w_t-1|, deg/frame^2): knee ~8000 deg/s^2 = 14, ankle 12,
# shoulder 8. Vertices: 40 mm/frame for the body; the swing foot/leg meshes travel at ~2.5-3x her 20 mm/frame
# walking speed, so 70 there. The right arm chain is exempt inside the wave window; eye/lash meshes are exempt
# from the vertex flag (a blink is a 2-frame close by design).
mk = meta['markers']; WW = range(mk['wave_raise'] - 10, mk['wave'][1] + 15)
def _rv(q0, q1):
    ax, an = q0.rotation_difference(q1).to_axis_angle()
    an = an - 2 * math.pi if an > math.pi else an
    return Vector(ax) * math.degrees(an)
def _thr(n):
    return 17.0 if n.startswith('shin_') else 12.5 if n.startswith('foot_') else 10.0 if n.startswith('thigh_') else 8.0
def _wave_exempt(n, f):
    return f in WW and n.endswith('_R') and any(k in n for k in ('arm', 'hand', 'shoulder', 'clav', 'glove'))
rot_rows = []; acc_rows = []
for n, qs in ROTQ.items():
    w = [_rv(a, b) for a, b in zip(qs, qs[1:])]
    sp = [(v.length, F0 + i + 1) for i, v in enumerate(w)]
    fl = [(round(v, 2), f) for v, f in sp if v > _thr(n) and not _wave_exempt(n, f)]
    m = max(sp) if sp else (0.0, F0)
    rot_rows.append({'bone': n, 'max_deg_per_frame': round(m[0], 2), 'at_frame': m[1], 'thr': _thr(n),
                     'flagged_frames': len(fl), 'worst_flagged': max(fl) if fl else None})
    if n.startswith(('shin_', 'foot_', 'upperarm_', 'upper_arm_', 'shoulder_', 'arm_')):
        at = 14.0 if n.startswith('shin_') else 12.0 if n.startswith('foot_') else 8.0
        acc = [((w[i] - w[i - 1]).length, F0 + i + 1) for i in range(1, len(w))]
        spk = sorted([(round(a, 2), f) for a, f in acc if a > at and not _wave_exempt(n, f)], reverse=True)
        acc_rows.append({'bone': n, 'max_deg_per_frame2': round(max(acc)[0], 2), 'at_frame': max(acc)[1], 'thr': at,
                         'spikes': len(spk), 'top_spikes': spk[:5]})
vtx_rows = []
for n, lst in VFR.items():
    thr = None if ('eye' in n or 'lash' in n) else 70.0 if any(k in n for k in ('sandal', 'leg', 'foot', 'shoe')) else 40.0
    m = max(lst); fl = [(round(d, 1), f) for d, f in lst if thr and d > thr and not (f in WW and n.endswith('_R'))]
    vtx_rows.append({'mesh': n, 'max_mm_per_frame': round(m[0], 1), 'at_frame': m[1], 'thr': thr,
                     'flagged_frames': len(fl), 'worst_flagged': max(fl) if fl else None})
rot_rows.sort(key=lambda r: -r['max_deg_per_frame'] / r['thr']); vtx_rows.sort(key=lambda r: -r['max_mm_per_frame'])
acc_rows.sort(key=lambda r: -r['max_deg_per_frame2'] / r['thr'])
mot4 = {'thresholds': 'deg/frame: shin 17, foot 12.5, thigh 10, other 8; deg/frame^2: shin 14, foot 12, arm 8; '
                      'mm/frame: body 40, leg/sandal 70, eye/lash exempt; right arm exempt in frames %d-%d' % (WW[0], WW[-1]),
        'rot_top10': rot_rows[:10], 'rot_flagged_bones': [r['bone'] for r in rot_rows if r['flagged_frames']],
        'accel': acc_rows, 'vertex_top10': vtx_rows[:10],
        'vertex_flagged_meshes': [r['mesh'] for r in vtx_rows if r['flagged_frames']]}
K4 = lambda S, f: knee4[S][f - F0]
gait4 = {'knee_rest_bend_deg': {S: round(REST_KH[S][0], 2) for S in 'RL'},
         'stance': [{'side': S, 'strike': f, 'contact': round(K4(S, f), 1),
                     'loading_peak': round(max(K4(S, t) for t in range(f, f + 6)), 1)} for f, S, p in strikes if f + 6 <= F1],
         'swing': [{'side': S, 'off': off, 'strike': on, 'knee_peak': round(max(K4(S, t) for t in range(off, on + 1)), 1),
                    'hip_peak_vs_pelvis': round(max(hip4[S][t - F0] for t in range(off, on + 1)), 1)}
                   for (S, off), on in sorted(nxt.items(), key=lambda kv: kv[0][1])],
         'knee_curve': {S: [round(v, 1) for v in knee4[S]] for S in 'RL'},
         'hip_curve': {S: [round(v, 1) for v in hip4[S]] for S in 'RL'}}

def load(path):
    im = bpy.data.images.load(path)
    a = np.empty(im.size[0] * im.size[1] * im.channels, dtype=np.float32)
    im.pixels.foreach_get(a)
    return a.reshape(im.size[1], im.size[0], im.channels)[..., :3]
rest = {}
rp = os.path.join(OUT, 'rest_front.png')
if os.path.exists(rp):
    A, B = load(rp), load(TEST8)
    if A.shape == B.shape:
        d = np.abs(A - B).max(axis=2) * 255
        rest = {'changed_px': int((d > 12).sum()), 'max_diff_255': float(d.max()), 'size': list(A.shape[:2])}
    else:
        rest = {'error': 'size mismatch %s vs %s' % (A.shape, B.shape)}

out = {
    'frames': [F0, F1],
    'foot_drift': {'stances': stances, 'max_mm': max(s['max_mm'] for s in stances), 'target_mm': 5.0,
                   'mesh_max_mm': max(max(s['mesh_foot_drift_flat_mm'], s['mesh_toe_drift_to_peel_mm']) for s in stances)},
    'mesh_sole_jump': {'per_side': jumps, 'target_mm': 6.0,
                       'max_mm': max(j['max_abs_mm'] for j in jumps.values())},
    'mesh_floor_min_mm': {'mm': round(min(floor) * 1000, 3), 'frame': F0 + floor.index(min(floor))},
    'disc_clip_verts': {'names': CLIPN, 'max_per_mesh': cmax, 'frames_nonzero': [F0 + i for i, r in enumerate(clip) if any(r)],
                        'socket_exempt': {n: len(EXEMPT[n]) for n in CLIPN}, 'target': 0},
    'pelvis_31_91_mm': {'rise_fall_z': round((max(pz) - min(pz)) * 1000, 2), 'lateral_x': round((max(px) - min(px)) * 1000, 2)},
    'step_m': meta.get('step_m'),
    'sole_min_z_mm': round(ground_min * 1000, 3),
    'sole_lowest_frames': sorted(low_at)[:6],
    'knee_flexion_deg': {S: {'min': round(min(knee[S]), 3), 'max': round(max(knee[S]), 3),
                             'geometric_min': round(min(knee_geo[S]), 3), 'geometric_max': round(max(knee_geo[S]), 3)}
                         for S in knee},
    'elbow_flexion_deg': {S: {'min': round(min(elbow[S]), 3), 'max': round(max(elbow[S]), 3)} for S in elbow},
    'scale_not_1': {'count': len(scale_bad), 'first': scale_bad[:5]},
    'limit_violations': {'count': len(lim_bad), 'first': lim_bad[:10], 'tolerance_deg': 0.05},
    'rotation_used_deg': {k: [round(v[0], 2), round(v[1], 2), 'limit', round(v[2], 1), round(v[3], 1)]
                          for k, v in sorted(use.items()) if abs(v[0]) > 1e-3 or abs(v[1]) > 1e-3},
    'ik_clamps': meta.get('ik_clamps'),
    'ankle_rom_guard_frames': len(meta.get('ankle_rom_guard_deg', {})),
    'rest_diff': rest,
    'blend_shape_keys': KEYS,
    'gait_rig3': gait3, 'motion_rig4': mot4, 'gait_rig4': gait4,
}
path = os.path.join(OUT, 'checks.json')
json.dump(out, open(path, 'w'), indent=1)

if GLB:                                           # last: wipes the scene
    g = {'file': GLB}
    bpy.ops.wm.read_factory_settings(use_empty=True)
    try:
        bpy.ops.import_scene.gltf(filepath=GLB); g['import'] = 'ok'
    except Exception:
        g['import'] = traceback.format_exc()[-900:]
    got = {o.name: [k.name for k in o.data.shape_keys.key_blocks[1:]] for o in bpy.data.objects
           if o.type == 'MESH' and o.data.shape_keys}
    g['morph_targets'] = got
    g['meshes'] = sorted(o.name for o in bpy.data.objects if o.type == 'MESH')
    base = {}
    for n, k in got.items():
        base.setdefault(n.split('.')[0], set()).update(k)          # import may suffix .001
    g['missing'] = {n: sorted(set(k) - base.get(n, set())) for n, k in KEYS.items() if set(k) - base.get(n, set())}
    g['unique_keys_blend'] = sorted({k for v in KEYS.values() for k in v})
    g['unique_keys_glb'] = sorted({k for v in got.values() for k in v})
    g['armatures'] = [(a.name, len(a.data.bones)) for a in bpy.data.objects if a.type == 'ARMATURE']
    g['actions'] = [(a.name, [round(x, 1) for x in a.frame_range]) for a in bpy.data.actions]
    out['glb'] = g
    json.dump(out, open(path, 'w'), indent=1)
print('CHECKS ' + json.dumps({k: out[k] for k in ('foot_drift', 'mesh_sole_jump', 'mesh_floor_min_mm', 'disc_clip_verts',
      'pelvis_31_91_mm', 'knee_flexion_deg', 'scale_not_1', 'limit_violations', 'rest_diff', 'gait_rig3', 'motion_rig4') if k in out}))
if 'glb' in out:
    print('GLB ' + json.dumps({k: out['glb'][k] for k in ('import', 'missing', 'unique_keys_glb', 'morph_targets')}))
