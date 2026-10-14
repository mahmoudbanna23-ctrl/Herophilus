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
# rig 5: arm joint series, glove_L gap, per-frame arm/glove vertex acceleration (pop check), face-key hash
ARMV = {S: {k: [] for k in ('elbow_from_straight', 'humerus_elevation', 'twist_forearm', 'twist_forearm_tw',
                            'wrist_flex', 'wrist_dev', 'clav_prot', 'clav_elev')} for S in 'RL'}
gapL = []; H3 = {}; ACC = {}; SUPA = {}; HANDP = {}
import hashlib
_h = hashlib.sha256(); _nk = 0
for o in sorted((o for o in MESHES if o.data.shape_keys), key=lambda o: o.name):
    for kb in o.data.shape_keys.key_blocks:
        a = np.empty(len(kb.data) * 3, dtype=np.float32); kb.data.foreach_get('co', a)
        _h.update(o.name.encode() + kb.name.encode() + np.round(a, 6).tobytes()); _nk += 1
SHAPE_SHA = {'blocks': _nk, 'sha256_16': _h.hexdigest()[:16]}
CAPPOKE = []
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
    # rig 5j: arm_R verts on the hand side of the cuff cap plane (the cap = glove_R's last 13 verts: 12 inner ring + centre)
    _g, _a = V['glove_R'], V['arm_R']; _ring, _ctr = _g[-13:-1], _g[-1]
    _n = Vector((0, 0, 0))
    for _k in range(12):
        _n += (_ring[_k] - _ctr).cross(_ring[(_k + 1) % 12] - _ctr)
    _n.normalize()
    if _n.dot(wpt('hand_R', arm.data.bones['hand_R'].head_local) - _ctr) < 0: _n = -_n
    _ds = [(p_ - _ctr).dot(_n) for p_ in _a if (p_ - _ctr).length < 0.08]
    CAPPOKE.append((sum(1 for d_ in _ds if d_ > 0.0005), max(_ds) * 1000, f))
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
    # rig 5 arm checks: joint angles measured on the posed bones (geometry, not the keyed eulers)
    gL = 9.0
    for p in V['glove_L']:
        loc, nrm, _, dd = bvh.find_nearest(p)
        gL = min(gL, -dd if (p - loc).dot(nrm) < 0 else dd)
    gapL.append(gL)
    Hd = arm.pose.bones['head'].matrix; down = -Hd.col[1].to_3d().normalized()
    for S in 'RL':
        pbs = arm.pose.bones
        u = pbs['upperarm_' + S].matrix.col[1].to_3d().normalized(); fa = pbs['forearm_' + S].matrix
        fy, hx = fa.col[1].to_3d().normalized(), fa.col[0].to_3d().normalized()
        ARMV[S]['elbow_from_straight'].append(math.degrees(math.atan2(u.cross(fy).dot(hx), u.dot(fy))))
        ARMV[S]['humerus_elevation'].append(math.degrees(u.angle(down)))
        ARMV[S]['twist_forearm'].append(math.degrees(pbs['forearm_' + S].rotation_euler.y))
        # rig 5h: the radius chain (three segments) carries the whole twist; forearm_ (the ulna) must stay 0
        segs = [math.degrees(pbs[n + S].rotation_euler.y) for n in ('forearm_tw1_', 'forearm_tw2_', 'forearm_tw_')]
        ARMV[S]['twist_forearm_tw'].append(sum(segs)); ARMV[S].setdefault('twist_segs', []).append(segs)
        # rig 5h: axial twist AT THE WRIST = the hand's rotation about the pronation axis (forearm_tw Y) relative to
        # the neutral hand (hand in the forearm line): swing-twist of Dev = Hrel Q N^-1 Hrel^-1 in the forearm_tw frame
        _hb, _fb = arm.data.bones['hand_' + S], arm.data.bones['forearm_' + S]
        _Hr = REST['forearm_tw_' + S].to_3x3().inverted() @ REST['hand_' + S].to_3x3()
        _fl = (REST['hand_' + S].to_3x3().inverted() @ (_hb.head_local - _fb.tail_local)).normalized()
        _N = Vector((0, 1, 0)).rotation_difference(_fl).to_matrix()
        _Hp = pbs['forearm_tw_' + S].matrix.to_3x3().normalized().inverted() @ pbs['hand_' + S].matrix.to_3x3().normalized()
        _q = (_Hp @ (_Hr @ _N).inverted()).to_quaternion()
        _q0 = (_Hr @ _N.inverted() @ _Hr.inverted()).to_quaternion()      # her art's rest hand (Q = identity)
        _tw = math.degrees(2 * math.atan2(_q.y, _q.w) - 2 * math.atan2(_q0.y, _q0.w)); _tw = (_tw + 180) % 360 - 180
        ARMV[S].setdefault('wrist_axial', []).append(_tw)
        ARMV[S].setdefault('wrist_euler_y', []).append(math.degrees(pbs['hand_' + S].rotation_euler.y))
        # wrist centre in the ULNA (forearm_) frame: it orbits the ulnar head as the radius crosses over
        _c = pbs['forearm_' + S].matrix.inverted() @ pbs['hand_' + S].head
        ARMV[S].setdefault('wrist_in_ulna', []).append(_c.copy())
        ARMV[S]['wrist_flex'].append(math.degrees(pbs['hand_' + S].rotation_euler.x))
        ARMV[S]['wrist_dev'].append(math.degrees(pbs['hand_' + S].rotation_euler.z))
        ARMV[S]['clav_prot'].append(math.degrees(pbs['clavicle_' + S].rotation_euler.x))
        ARMV[S]['clav_elev'].append(math.degrees(pbs['clavicle_' + S].rotation_euler.z))
        # rig 5b: anatomical forearm rotation from the posed bones (geometry, not the eulers): hinge carried by
        # the humerus, forearm axis elbow -> wrist, rest palm normal carried by forearm_tw (wrist excluded)
        am = meta.get('arm', {}).get(S)
        if am and 'Np' in am:
            sg = -1 if S == 'R' else 1
            Ru = pbs['upperarm_' + S].matrix.to_3x3() @ REST['upperarm_' + S].to_3x3().inverted()
            hw = (Ru @ Vector(am['hinge'])).normalized()
            fw = (pbs['hand_' + S].head - pbs['forearm_' + S].head).normalized()
            bw = hw.cross(fw).normalized(); mw_ = (-sg * bw.cross(fw)).normalized()
            Rt = pbs['forearm_tw_' + S].matrix.to_3x3() @ REST['forearm_tw_' + S].to_3x3().inverted()
            nw = Rt @ Vector(am['Np']); nw = (nw - fw * nw.dot(fw)).normalized()
            SUPA.setdefault(S, []).append(math.degrees(math.atan2(nw.dot(bw), nw.dot(mw_))))
        HANDP.setdefault(S, []).append((arm.matrix_world @ pbs['hand_' + S].head.copy(),
                                        arm.matrix_world @ pbs['fingers_' + S].tail.copy()))
    for n in ('arm_R', 'arm_L', 'glove_R', 'glove_L'):
        H3.setdefault(n, []).append(V[n])
        if len(H3[n]) == 3:
            a0, a1, a2 = H3[n]
            ACC.setdefault(n, []).append((max((c - 2 * b + a).length for a, b, c in zip(a0, a1, a2)) * 1000, f))
            H3[n].pop(0)
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
    return False        # rig 5d: NO blanket exemption for the right arm (5c hid a 13.9 deg/frame forearm_R flag at f123)
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
    m = max(lst); fl = [(round(d, 1), f) for d, f in lst if thr and d > thr]
    vtx_rows.append({'mesh': n, 'max_mm_per_frame': round(m[0], 1), 'at_frame': m[1], 'thr': thr,
                     'flagged_frames': len(fl), 'worst_flagged': max(fl) if fl else None})
rot_rows.sort(key=lambda r: -r['max_deg_per_frame'] / r['thr']); vtx_rows.sort(key=lambda r: -r['max_mm_per_frame'])
acc_rows.sort(key=lambda r: -r['max_deg_per_frame2'] / r['thr'])
mot4 = {'thresholds': 'deg/frame: shin 17, foot 12.5, thigh 10, other 8; deg/frame^2: shin 14, foot 12, arm 8; '
                      'mm/frame: body 40, leg/sandal 70, eye/lash exempt; NO right-arm exemption (rig 5d)' % (),
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
REST_FAIL = False      # rig 5g: the rest diff fails LOUD - checks.json still written, then a non-zero exit at the end.
# The render is taken from --out ONLY (rig 5f fell back to a png beside the blend: a stale render beside a rebuilt
# blend passed unnoticed). To check a blend, first run rig_her.py --stage build with the same --out.
if not os.path.exists(rp):
    rest = {'error': 'rest_front.png not found in --out (%s); run rig_her.py --stage build --out there' % OUT}
    REST_FAIL = True
else:
    A, B = load(rp), load(TEST8)
    if A.shape == B.shape:
        d = np.abs(A - B).max(axis=2) * 255
        rest = {'changed_px': int((d > 12).sum()), 'max_diff_255': float(d.max()), 'size': list(A.shape[:2])}
        # rig 5i: the owner approved CLOSING THE CUFF MOUTH (2026-09-29), so vs TEST8 only the cuff-mouth mask may differ
        # (mask = dilated pixels the cap changed, cuff_mask_5i.png). Outside the mask must be <= 3 px. The capped render is the
        # new baseline (her_front_capped_5i.png); the gate on the baseline is <= 3 px.
        MK, BS = 'D:/scratch 2026/her-c2/test8/cuff_mask_5i.png', 'D:/scratch 2026/her-c2/test8/her_front_capped_5i.png'
        if os.path.exists(MK) and os.path.exists(BS):
            cmask = load(MK).max(axis=2) > 0.5; db = np.abs(A - load(BS)).max(axis=2) * 255
            rest.update({'vs_test8_inside_cuff_mask_px': int(((d > 12) & cmask).sum()), 'vs_test8_outside_cuff_mask_px': int(((d > 12) & ~cmask).sum()),
                         'vs_capped_baseline_px': int((db > 12).sum()), 'baseline': BS})
            rest['changed_px'] = rest['vs_test8_outside_cuff_mask_px'] + rest['vs_capped_baseline_px']   # the gate number
    else:
        rest = {'error': 'size mismatch %s vs %s' % (A.shape, B.shape)}
        REST_FAIL = True

lim = meta['limits_deg']
def _rng(v):
    return [round(min(v), 1), round(max(v), 1)]
arm5 = {}
for S in 'RL':
    A = ARMV[S]; e = A['elbow_from_straight']
    tw = [a + b for a, b in zip(A['twist_forearm'], A['twist_forearm_tw'])]
    acc = {n: max(ACC[n]) for n in ('arm_' + S, 'glove_' + S)}
    arm5[S] = {'elbow_from_straight_deg': _rng(e) + ['limit 0..145'],
               'elbow_reversed_frames': [F0 + i for i, v in enumerate(e) if v < -0.5],
               'elbow_over_145_frames': [F0 + i for i, v in enumerate(e) if v > 145.5],
               'humerus_elevation_from_down_deg': _rng(A['humerus_elevation']),
               'twist_forearm_deg': _rng(A['twist_forearm']) + ['limit +-85'],
               'twist_forearm_tw_deg': _rng(A['twist_forearm_tw']) + ['limit +-85'],
               'wrist_axial_twist_deg': _rng(A['wrist_axial']),
               'wrist_axial_twist_max_abs_deg': round(max(abs(v) for v in A['wrist_axial']), 2),
               'wrist_hand_euler_y_deg': _rng(A['wrist_euler_y']),
               'pronation_total_deg': _rng(tw),
               'wrist_flex_ext_deg': _rng(A['wrist_flex']) + ['limit %s' % lim['hand_' + S][0:2]],
               'wrist_dev_deg': _rng(A['wrist_dev']) + ['limit %s' % lim['hand_' + S][4:6]],
               'clavicle_prot_deg': _rng(A['clav_prot']), 'clavicle_elev_deg': _rng(A['clav_elev']),
               'vertex_accel_max_mm_per_frame2': {n: [round(a, 1), fr] for n, (a, fr) in acc.items()}}
arm5['rom_table'] = {k: v for k, v in sorted(use.items()) if k.split('.')[0].startswith(
    ('clavicle', 'upperarm', 'forearm', 'hand', 'fingers', 'thumb'))}
arm5['rom_table'] = {k: [round(v[0], 1), round(v[1], 1), 'limit', round(v[2], 1), round(v[3], 1)]
                     for k, v in arm5['rom_table'].items()}
arm5['glove_disc_min_mm'] = {'R': round(min(gap) * 1000, 1), 'R_frame': F0 + gap.index(min(gap)),
                             'L': round(min(gapL) * 1000, 1), 'L_frame': F0 + gapL.index(min(gapL)),
                             'R_wave_100_end': round(min(gap[i] for i in WV) * 1000, 1), 'target_wave_mm': 30.0}
arm5['shape_keys_hash'] = SHAPE_SHA

# ---- rig 5b pop checks: a frame is a POP when its speed exceeds POP_K x the mean of its two neighbours AND a
# floor (a slow joint doubling from 0.5 to 1 deg/frame is not visible). Vertices: max vertex displacement per
# frame of each arm/glove mesh; hand: wrist and fingertip points; bones: local angular speed (deg/frame).
POP_K = 1.5; FLOOR_MM = 8.0; FLOOR_DEG = 3.0
def _pops(series, floor):
    """series: list of (value, frame). Returns [(frame, value, ratio)] for flagged interior frames."""
    out = []
    for i in range(1, len(series) - 1):
        v = series[i][0]; nb = 0.5 * (series[i - 1][0] + series[i + 1][0])
        if v > floor and v > POP_K * max(nb, 1e-6):
            out.append((series[i][1], round(v, 2), round(v / max(nb, 1e-6), 2)))
    return out
pops = {'rule': 'v > %.1f x mean(neighbours) and v > floor (%.0f mm/frame, %.0f deg/frame)' % (POP_K, FLOOR_MM, FLOOR_DEG),
        'vertex': {}, 'hand': {}, 'bone': {}}
for n in ('arm_R', 'arm_L', 'glove_R', 'glove_L'):
    pops['vertex'][n] = _pops(VFR[n], FLOOR_MM)
HSPD = {}
for S in 'RL':
    hp = HANDP[S]
    HSPD[S] = [(max((hp[i][0] - hp[i - 1][0]).length, (hp[i][1] - hp[i - 1][1]).length) * 1000, F0 + i)
               for i in range(1, len(hp))]
    pops['hand'][S] = _pops(HSPD[S], FLOOR_MM)
for n, qs in ROTQ.items():
    if n.split('_')[0] in ('clavicle', 'upperarm', 'forearm', 'hand', 'fingers', 'thumb') or n.startswith('forearm_tw'):
        w = [(_rv(a, b).length, F0 + i + 1) for i, (a, b) in enumerate(zip(qs, qs[1:]))]
        p = _pops(w, FLOOR_DEG)
        if p:
            pops['bone'][n] = p
pops['count'] = {'vertex': sum(len(v) for v in pops['vertex'].values()), 'hand': sum(len(v) for v in pops['hand'].values()),
                 'bone': sum(len(v) for v in pops['bone'].values())}
# per-frame hand speed of the wave lower and the walk frames over 40 mm/frame, each labelled
PSPD = [((Vector(pelvis[i]) - Vector(pelvis[i - 1])).length * 1000) for i in range(1, len(pelvis))]
lab40 = []
for n in ('arm_R', 'arm_L', 'glove_R', 'glove_L'):
    s_ = VFR[n]
    for i in range(1, len(s_) - 1):
        v, f = s_[i]
        if 25 <= f <= 110 and v > 40.0:
            nb = 0.5 * (s_[i - 1][0] + s_[i + 1][0]); rt = v / max(nb, 1e-6)
            lab40.append({'mesh': n, 'frame': f, 'mm': round(v, 1), 'ratio_to_neighbours': round(rt, 2),
                          'pelvis_mm': round(PSPD[f - F0 - 1], 1),
                          'label': 'POP' if rt > POP_K else ('swing peak' if v >= s_[i - 1][0] and v >= s_[i + 1][0]
                                                             else 'swing (on the smooth rise/fall to a peak)')})
lower0 = mk['wave'][1] - 6
pops['wave_lower_glove_R_mm'] = [[f, round(v, 1)] for v, f in VFR['glove_R'] if lower0 <= f <= min(F1, lower0 + 40)]
pops['wave_lower_hand_R_mm'] = [[f, round(v, 1)] for v, f in HSPD['R'] if lower0 <= f <= min(F1, lower0 + 40)]
pops['walk_over_40mm'] = lab40
arm5['pops_rig5b'] = pops
# rig 5d: honest elbow hyperextension count (geometric, from the posed bones). The art's rest elbow is slightly
# hyperextended (rest value = frame F0); frames within 0.5 deg of the rest are rest-pose-from-art, anything below
# rest - 0.5 is a real excursion past the art. The Limit Rotation constraint (0..145 local) is a separate count.
for S in 'RL':
    e = ARMV[S]['elbow_from_straight']; r0 = e[0]
    neg = [F0 + i for i, v in enumerate(e) if v < -0.5]
    beyond = [F0 + i for i, v in enumerate(e) if v < r0 - 0.5]
    arm5[S]['elbow_hyperext'] = {'frames_below_-0.5deg': len(neg), 'frames': neg, 'rest_from_art_deg': round(r0, 2),
                                 'frames_beyond_art_rest': len(beyond), 'min_deg': round(min(e), 2),
                                 'note': 'frames_below_-0.5deg are the art rest pose (hyperextended by the art); only frames_beyond_art_rest are excursions'}
GP = {}
for n in ('glove_R', 'glove_L', 'arm_R', 'arm_L'):
    m_ = max(VFR[n]); w_ = [(round(v, 1), f) for v, f in VFR[n] if 106 <= f <= 190]
    GP[n] = {'whole_clip_peak_mm_per_frame': round(m_[0], 1), 'at_frame': m_[1],
             'raise_f100_140_peak': max([(round(v, 1), f) for v, f in VFR[n] if 100 <= f <= 140]),
             'lower_f145_190_peak': max([(round(v, 1), f) for v, f in VFR[n] if 145 <= f <= 190]),
             'walk_f25_110_peak': max([(round(v, 1), f) for v, f in VFR[n] if 25 <= f <= 110])}
arm5['vertex_speed_peaks'] = GP
for S in 'RL':
    seg = lambda k, a_, b_: [round(v, 1) for v in ARMV[S][k][a_ - F0:b_ - F0 + 1]] if a_ >= F0 else []
    arm5[S]['walk_f30_90_wrist'] = {'dev_deg': [min(seg('wrist_dev', 30, 90)), max(seg('wrist_dev', 30, 90))],
                                    'flex_deg': [min(seg('wrist_flex', 30, 90)), max(seg('wrist_flex', 30, 90))]}
for S in 'RL':
    if S in SUPA:
        sa = SUPA[S]; am = meta['arm'][S]
        arm5[S]['forearm_rotation_anatomical_deg'] = _rng(sa) + ['+ supination / - pronation; human about -80..+85',
                                                                  'rest %.1f' % am['sup0_deg']]
        arm5[S]['forearm_rotation_out_of_human_frames'] = [F0 + i for i, v in enumerate(sa) if v < -90 or v > 90]
        arm5[S]['twist_total_from_rest_deg'] = _rng([a + b for a, b in zip(ARMV[S]['twist_forearm'], ARMV[S]['twist_forearm_tw'])])
        lm = lim['forearm_tw_' + S][2:4]
        arm5[S]['twist_forearm_deg'][2] = 'limit %s (ulna: no twist)' % [round(x, 1) for x in lim['forearm_' + S][2:4]]
        arm5[S]['twist_forearm_tw_deg'][2] = 'limit %s (3 segments x %s)' % ([round(3 * x, 1) for x in lm], [round(x, 1) for x in lm])
# rig 5h: forearm / wrist anatomy probe
for S in 'RL':
    A = ARMV[S]; am = meta['arm'][S]
    segs = A['twist_segs']; k = max(range(len(segs)), key=lambda i: abs(sum(segs[i])))
    med = Vector(am['med'])
    el = arm.data.bones['forearm_' + S].head_local; wr = arm.data.bones['hand_' + S].head_local
    t1 = arm.data.bones['forearm_tw1_' + S]; tl_ = arm.data.bones['forearm_tw_' + S]
    axis = (tl_.tail_local - t1.head_local).normalized()
    fy = (arm.data.bones['forearm_' + S].tail_local - el).normalized()
    c0 = A['wrist_in_ulna'][0]
    orbit = max((c - c0).length for c in A['wrist_in_ulna']) * 1000
    arm5[S]['pronation_probe_5h'] = {
        'peak_twist_frame': F0 + k,
        'twist_split_at_peak_deg': {'forearm_(ulna)': round(A['twist_forearm'][k], 2), 'tw1': round(segs[k][0], 2),
                                    'tw2': round(segs[k][1], 2), 'forearm_tw(distal)': round(segs[k][2], 2),
                                    'sum': round(sum(segs[k]), 2)},
        'ulna_twist_max_abs_deg': round(max(abs(v) for v in A['twist_forearm']), 3),
        'wrist_axial_twist_max_abs_deg': round(max(abs(v) for v in A['wrist_axial']), 2),
        'wrist_axial_twist_at_peak_twist_deg': round(A['wrist_axial'][k], 2),
        'axis_head_at_elbow_lateral_mm': round((t1.head_local - el).dot(med) * 1000, 2),
        'axis_tail_at_wrist_ulnar_mm': round((tl_.tail_local - wr).dot(med) * 1000, 2),
        'axis_ulnar_sided_at_wrist': bool((tl_.tail_local - wr).dot(med) > 0 and (t1.head_local - el).dot(med) < 0),
        'axis_tilt_from_forearm_line_deg': round(math.degrees(axis.angle(fy)), 2),
        'wrist_centre_orbit_about_ulna_mm': round(orbit, 2)}
out = {
    'frames': [F0, F1],
    'arms_rig5': arm5,
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
    'geometric_elbow_hyperext': {S: arm5[S]['elbow_hyperext'] for S in 'RL'},
    'rotation_used_deg': {k: [round(v[0], 2), round(v[1], 2), 'limit', round(v[2], 1), round(v[3], 1)]
                          for k, v in sorted(use.items()) if abs(v[0]) > 1e-3 or abs(v[1]) > 1e-3},
    'ik_clamps': meta.get('ik_clamps'),
    'ankle_rom_guard_frames': len(meta.get('ankle_rom_guard_deg', {})),
    'rest_diff': rest,
    # rig 5j GATE 0: arm_R verts past the cuff cap over the whole move, plus the +-85 deg sweep numbers (arm past the cap,
    # orange pixels in the cuff mouth) from stage_wrist's wrist_metrics_5j.json when that file sits beside the blend
    'arm_past_cap_5j': {'max_verts_whole_move': max(c[0] for c in CAPPOKE), 'max_mm_whole_move': round(max(c[1] for c in CAPPOKE), 3),
                        'frames_nonzero': [c[2] for c in CAPPOKE if c[0] > 0][:20],
                        'sweep': (lambda pth: {k: v for k, v in json.load(open(pth))['poke'].items() if k not in ('series', 'sup', 'kind')}
                                  if os.path.exists(pth) else 'wrist_metrics_5j.json not found - run stage wrist first')(
                                      os.path.join(OUT, 'wrist_metrics_5j.json'))},
    'blend_shape_keys': KEYS,
    'gait_rig3': gait3, 'motion_rig4': mot4, 'gait_rig4': gait4,
}
# rig 5l GATE: cuff seam over the WHOLE move (armature-only glove_R): the cuff's hand-side mouth must stay on the palm.
# Same rule as rig_her stage_wrist: loose parts, mouth = cuff-part boundary verts outside the cap, palm = largest closed part.
def _seam_parts(me):
    n = len(me.vertices); par = list(range(n))
    def fd(x):
        while par[x] != x:
            par[x] = par[par[x]]; x = par[x]
        return x
    for e in me.edges:
        a, b = fd(e.vertices[0]), fd(e.vertices[1])
        if a != b: par[a] = b
    part = [fd(i) for i in range(n)]; cnt = {}
    for p in me.polygons:
        for ek in p.edge_keys: cnt[ek] = cnt.get(ek, 0) + 1
    bnd = {v for ek, c in cnt.items() if c == 1 for v in ek}; sz = {}
    for p_ in part: sz[p_] = sz.get(p_, 0) + 1
    closed = [p_ for p_ in sz if not any(part[v] == p_ for v in bnd)]
    return part, sorted(bnd), max(closed, key=lambda p_: sz[p_])
_gl = bpy.data.objects['glove_R']; _gm = _gl.data; _NG = len(_gm.vertices)
_pt, _bd, _palm = _seam_parts(_gm); _cp = _pt[_NG - 1]
_capv = [i for i in range(_NG - 13, _NG) if _pt[i] == _cp]
_mouth = [i for i in _bd if _pt[i] == _cp and i not in _capv]
_pf = [tuple(p.vertices) for p in _gm.polygons if _pt[p.vertices[0]] == _palm]
_ms = [(m, m.show_viewport) for m in _gl.modifiers if m.type != 'ARMATURE']
for m, _v in _ms: m.show_viewport = False
def _seam():
    e = _gl.evaluated_get(bpy.context.evaluated_depsgraph_get()); me = e.to_mesh()
    C = [_gl.matrix_world @ v.co for v in me.vertices]; e.to_mesh_clear()
    bvh = BVHTree.FromPolygons(C, _pf)
    return np.array([bvh.find_nearest(C[i])[3] for i in _mouth])
arm.data.pose_position = 'REST'; bpy.context.view_layer.update(); _s0 = _seam()
arm.data.pose_position = 'POSE'; SEAMS = []
for f in range(F0, F1 + 1):
    scene.frame_set(f); SEAMS.append((float((_seam() - _s0).max()) * 1000, f))
for m, v in _ms: m.show_viewport = v
out['cuff_seam_5l'] = {'mouth_verts': len(_mouth), 'rest_gap_max_mm': round(float(_s0.max()) * 1000, 2),
                       'open_max_mm_whole_move': round(max(c[0] for c in SEAMS), 3), 'worst_frame': max(SEAMS)[1], 'gate_mm': 1.0,
                       'sweep_gate_5l': out['arm_past_cap_5j']['sweep'].get('gate_5l') if isinstance(out['arm_past_cap_5j']['sweep'], dict) else None}
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
print('CHECKS ' + json.dumps({k: out[k] for k in ('arms_rig5', 'foot_drift', 'mesh_sole_jump', 'mesh_floor_min_mm', 'disc_clip_verts',
      'pelvis_31_91_mm', 'knee_flexion_deg', 'scale_not_1', 'limit_violations', 'rest_diff', 'gait_rig3', 'motion_rig4') if k in out}))
if 'glb' in out:
    print('GLB ' + json.dumps({k: out['glb'][k] for k in ('import', 'missing', 'unique_keys_glb', 'morph_targets')}))
if REST_FAIL:
    print('CHECK FAIL rest_diff: ' + json.dumps(rest))
    sys.exit(2)
# rig 5l gate (replaces the 5k orange count and the arm-past-cap count: from 5l the arm runs on past the cap as in the
# art, hidden inside the closed cuff): seam open <= 1 mm over the whole move, and the sweep's seam + sleeve-seen gate
_c5 = out['cuff_seam_5l']; _g5 = _c5['sweep_gate_5l']
if _g5 is None or not _g5.get('pass') or _c5['open_max_mm_whole_move'] > 1.0:
    print('CHECK FAIL gate_5l: ' + json.dumps(_c5))
    sys.exit(3)
print('CHECK PASS gate_5l: ' + json.dumps(_c5))
