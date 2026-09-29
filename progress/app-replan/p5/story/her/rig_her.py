# rig_her.py - C2 rig 1 for the Clepsydra (the owner's own character; her look is FIXED, test 8).
# Builds her by exec'ing build_her.py UNCHANGED (no renders, no export), then adds:
#   - an armature: a human joint chain fitted to HER limbs (pelvis/hip/knee/ankle/toe, clavicle/
#     shoulder/elbow/wrist/fingers, spine/chest/neck/head inside the disc),
#   - Limit Rotation constraints (human ROM, table in NOTES.md "## Rig 1"),
#   - skinning: rigid parts on one bone, limbs blended only around knee/elbow/ankle/ball/wrist,
#   - face shape keys that only MOVE existing face geometry (Rhubarb A-H,X + blink/brow/look),
#   - one scripted move (24 fps): stand, 6 footfalls (2 full gait cycles), stop, settle, wave.
# No stretch anywhere: every pose-bone scale is keyed 1.0; legs are solved analytically (2-bone IK,
# fixed bone lengths) and keyed as FK rotations so the Limit Rotation checks see the real values.
#
#   blender -b --python rig_her.py -- --stage build   (rig + anim + rest_front + bones + blend + glb)
#   blender -b --python rig_her.py -- --stage sheets  (mouths_sheet / walk sheet raw renders)
#   blender -b --python rig_her.py -- --stage movie --cam tq|side [--f0 0 --f1 191] [--samples 16]
# Outputs: --out (default D:/scratch 2026/her-c2/rig1). Compose sheets with rig1/compose.py (PIL).

import bpy, math, sys, os, json, time
from mathutils import Vector, Matrix, Euler
from bpy_extras.object_utils import world_to_camera_view

HERE = os.path.dirname(os.path.abspath(__file__))
argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
def opt(name, default):
    return argv[argv.index(name) + 1] if name in argv else default
OUT = opt('--out', 'D:/scratch 2026/her-c2/rig4')
STAGE = opt('--stage', 'build')
TAG = opt('--tag', 'rig4')
FAST = '--fast' in argv                 # build + numbers only: no renders, no blend, no glb
BLEND = os.path.join(OUT, 'her-%s.blend' % TAG)
os.makedirs(OUT, exist_ok=True)
FPS, NF = 24, 192                      # frames 0..191 = 8.0 s
D2R = math.pi / 180

def smooth(a, b, x):
    if b == a:
        return 1.0 if x >= b else 0.0
    t = min(1.0, max(0.0, (x - a) / (b - a)))
    return t * t * (3 - 2 * t)

def cos_keys(keys, t):
    """Ease-in-out between (frame, value) keys: zero velocity at every key (oscillation-friendly)."""
    if t <= keys[0][0]:
        return keys[0][1]
    for (t0, v0), (t1, v1) in zip(keys, keys[1:]):
        if t <= t1:
            u = (t - t0) / (t1 - t0)
            return v0 + (v1 - v0) * (0.5 - 0.5 * math.cos(math.pi * u))
    return keys[-1][1]

def pchip(keys, t):
    """Monotone cubic (Fritsch-Carlson) through (frame, value) keys - no overshoot between keys."""
    xs = [k[0] for k in keys]; ys = [k[1] for k in keys]; n = len(xs)
    if t <= xs[0]:
        return ys[0]
    if t >= xs[-1]:
        return ys[-1]
    h = [xs[i + 1] - xs[i] for i in range(n - 1)]
    d = [(ys[i + 1] - ys[i]) / h[i] for i in range(n - 1)]
    m = [d[0]] + [0.0 if d[i - 1] * d[i] <= 0 else
                  3 * (h[i - 1] + h[i]) / ((2 * h[i] + h[i - 1]) / d[i - 1] + (h[i] + 2 * h[i - 1]) / d[i])
                  for i in range(1, n - 1)] + [d[-1]]
    for i in range(n - 1):
        if t <= xs[i + 1]:
            u = (t - xs[i]) / h[i]
            h00 = 2 * u ** 3 - 3 * u ** 2 + 1; h10 = u ** 3 - 2 * u ** 2 + u
            h01 = -2 * u ** 3 + 3 * u ** 2; h11 = u ** 3 - u ** 2
            return h00 * ys[i] + h10 * h[i] * m[i] + h01 * ys[i + 1] + h11 * h[i] * m[i + 1]

def spring(targets, freq, zeta, x0, sub=8):
    """Damped spring following a per-frame target (semi-implicit Euler). Physics, not easing."""
    w = 2 * math.pi * freq; x, v = x0, 0.0; out = []; dt = 1.0 / FPS / sub
    for tgt in targets:
        out.append(x)
        for _ in range(sub):
            v += (w * w * (tgt - x) - 2 * zeta * w * v) * dt
            x += v * dt
    return out

def rot_about(p, axis, ang):
    return Matrix.Translation(p) @ Matrix.Rotation(ang, 4, axis) @ Matrix.Translation(-p)

# ================================================================ camera helper (test-8 formula)
TARGET = Vector((0, 0, 0.6))
def set_cam(cam, yaw_deg, d=3.6, target=TARGET, up=0.35, lens=85):
    yaw = math.radians(yaw_deg)
    cam.data.lens = lens
    cam.location = target + Vector((d * math.sin(yaw), -d * math.cos(yaw), up))
    cam.rotation_euler = (target - cam.location).to_track_quat('-Z', 'Y').to_euler()

# ================================================================ STAGE build
def stage_build():
    t_start = time.time()
    BUILD = os.path.join(HERE, 'build_her.py')
    saved = sys.argv[:]
    sys.argv = [saved[0], '--', '--views', ',', '--no-export', '--out', OUT]
    ns = {'__name__': 'build_her', '__file__': BUILD}
    exec(compile(open(BUILD, encoding='utf-8').read(), BUILD, 'exec'), ns)   # build_her.py UNCHANGED
    sys.argv = saved
    scene = bpy.context.scene
    CHAR = ns['CHAR']; cr = ns['cr']; face_y = ns['face_y']; sclera_y = ns['sclera_y']
    EYE_X, EYE_Z, EYE_W, EYE_H = ns['EYE_X'], ns['EYE_Z'], ns['EYE_W'], ns['EYE_H']
    OBJ = {o.name: o for o in CHAR}
    RXd, RZd, ZCd, Td, DOME_B = ns['RX'], ns['RZ'], ns['ZC'], ns['T'], ns['DOME_B']
    # rig 2: the eyes carry the build's SUBSURF (level 1, viewport = render). The glTF exporter applies
    # modifiers and then DROPS the shape keys of any mesh that still has one, so apply it here, BEFORE
    # skinning and keys: same limit surface as the render, and the keys live on the dense mesh.
    for n in ('eye_L', 'eye_R'):
        ob = OBJ[n]
        sub = [m for m in ob.modifiers if m.type == 'SUBSURF']
        assert len(sub) == 1 and sub[0].levels == sub[0].render_levels == 1, (n, [m.type for m in ob.modifiers])
        with bpy.context.temp_override(object=ob, active_object=ob, selected_objects=[ob]):
            bpy.ops.object.modifier_apply(modifier=sub[0].name)
        assert not ob.modifiers, (n, [m.type for m in ob.modifiers])

    # ---------------------------------------------------------- her own limb geometry (read, not reshaped)
    # Arm control points and glove frames are the literals build_her.py passes (asserted equal below).
    ARM_CTRL = {-1: [(-0.30, 0.0, 0.70), (-0.37, -0.02, 0.62), (-0.43, -0.05, 0.52), (-0.47, -0.07, 0.445)],
                1: [(0.30, 0.0, 0.71), (0.37, -0.01, 0.63), (0.385, -0.02, 0.53), (0.365, -0.03, 0.44)]}
    GLOVE = {-1: ((-1.0, -0.25, -0.45), (0.15, -0.75, 0.65), (0, 0, 1)),
             1: ((0.05, -0.15, -1.0), (-0.7, -0.6, 0.0), (0, -1, 0))}
    GS = 1.3
    ARMPTS, ARMS = {}, {}
    for s in (-1, 1):
        pts = cr([Vector(p) for p in ARM_CTRL[s]], 10)
        wb = ns['wR'] if s < 0 else ns['wL']
        assert (pts[-1] - wb).length < 1e-9, 'arm control literals differ from build_her.py'
        cum = [0.0]
        for a, b in zip(pts, pts[1:]):
            cum.append(cum[-1] + (b - a).length)
        half = cum[-1] * 0.5
        for i in range(len(cum) - 1):
            if cum[i + 1] >= half:
                u = (half - cum[i]) / (cum[i + 1] - cum[i]); elbow = pts[i].lerp(pts[i + 1], u); break
        F, Np, thumb = GLOVE[s]
        F = Vector(F).normalized(); Npv = Vector(Np); Npv = (Npv - F * Npv.dot(F)).normalized()
        X = Npv.cross(F).normalized(); ts = 1 if X.dot(Vector(thumb)) > 0 else -1
        R = Matrix((X, -Npv, -F)).transposed()
        loc = lambda p, R=R, w=pts[-1]: R @ (Vector(p) * GS) + w
        ARMPTS[s] = (pts, cum)
        ARMS[s] = dict(shoulder=pts[0].copy(), elbow=elbow, wrist=pts[-1].copy(), s_elbow=half, L=cum[-1],
                       R=R, ts=ts, knuckle=loc((0, 0, -0.07)), tip=loc((0, 0, -0.13)),
                       thumb0=loc((ts * 0.03, -0.006, -0.03)), thumb1=loc((ts * 0.068, -0.02, -0.066)))
    LEG = {}
    for s in (-1, 1):
        x = s * 0.058
        Rs = Matrix.Rotation(math.radians(10 * s), 3, 'Z')              # her sandal splay (build_sandal)
        o = Vector((x, 0, 0))
        LEG[s] = dict(hip=Vector((x, 0, 0.35)), knee=Vector((x, -0.006, 0.215)), ankle=Vector((x, 0, 0.10)),
                      ball=o + Rs @ Vector((0, -0.075, 0.025)), tip=o + Rs @ Vector((0, -0.125, 0.02)),
                      heel_g=o + Rs @ Vector((0, 0.045, 0.0)), ball_g=o + Rs @ Vector((0, -0.075, 0.0)),
                      tip_g=o + Rs @ Vector((0, -0.125, 0.0)),
                      Rs=Rs, axis=(Rs @ Vector((1, 0, 0))).normalized())
    SIDE = {-1: 'R', 1: 'L'}

    # ---------------------------------------------------------- armature
    ad = bpy.data.armatures.new('her_rig'); ad.display_type = 'STICK'
    arm = bpy.data.objects.new('her_rig', ad); scene.collection.objects.link(arm)
    bpy.context.view_layer.objects.active = arm; arm.select_set(True)
    bpy.ops.object.mode_set(mode='EDIT')
    E = ad.edit_bones
    FWD, UP = Vector((0, -1, 0)), Vector((0, 0, 1))
    def bone(name, h, t, parent=None, connect=False, roll=FWD, deform=True):
        b = E.new(name); b.head = h; b.tail = t; b.align_roll(roll)
        if parent:
            b.parent = E[parent]; b.use_connect = connect
        b.use_deform = deform
        return b
    bone('root', (0, 0, 0), (0, -0.2, 0), roll=UP, deform=False)
    bone('pelvis', (0, 0, 0.35), (0, 0, 0.42), 'root')
    bone('spine', (0, 0, 0.42), (0, 0, 0.54), 'pelvis', True, deform=False)
    bone('chest', (0, 0, 0.54), (0, 0, 0.66), 'spine', True, deform=False)
    bone('neck', (0, 0, 0.66), (0, 0, 0.78), 'chest', True, deform=False)
    bone('head', (0, 0, 0.78), (0, 0, 1.02), 'neck', True)      # the disc: torso + head in one
    for s in (-1, 1):
        S = SIDE[s]; A = ARMS[s]; G = LEG[s]
        bone('clavicle_' + S, (s * 0.10, 0, A['shoulder'].z), A['shoulder'], 'head', deform=False)
        bone('upperarm_' + S, A['shoulder'], A['elbow'], 'clavicle_' + S, True)
        bone('forearm_' + S, A['elbow'], A['wrist'], 'upperarm_' + S, True)
        bone('hand_' + S, A['wrist'], A['knuckle'], 'forearm_' + S, True)
        bone('fingers_' + S, A['knuckle'], A['tip'], 'hand_' + S, True)
        bone('thumb_' + S, A['thumb0'], A['thumb1'], 'hand_' + S)
        bone('thigh_' + S, G['hip'], G['knee'], 'pelvis')
        bone('shin_' + S, G['knee'], G['ankle'], 'thigh_' + S, True)
        bone('foot_' + S, G['ankle'], G['ball'], 'shin_' + S, True, roll=UP)
        bone('toe_' + S, G['ball'], G['tip'], 'foot_' + S, True, roll=UP)
    bpy.ops.object.mode_set(mode='OBJECT')
    REST = {b.name: b.matrix_local.copy() for b in ad.bones}
    PARENT = {b.name: (b.parent.name if b.parent else None) for b in ad.bones}
    depth = lambda n: 0 if PARENT[n] is None else 1 + depth(PARENT[n])
    ORDER = sorted(REST, key=depth)
    for s in (-1, 1):   # knee hinge axis must be the same for thigh and shin (pure-X knee)
        for n in ('thigh_', 'shin_'):
            xc = REST[n + SIDE[s]].col[0].to_3d()
            assert (xc - Vector((-1, 0, 0))).length < 1e-6, (n, xc)
    L1 = (LEG[1]['knee'] - LEG[1]['hip']).length; L2 = (LEG[1]['ankle'] - LEG[1]['knee']).length
    D_REST = (LEG[1]['ankle'] - LEG[1]['hip']).length

    # ---------------------------------------------------------- FK engine (pure mathutils)
    def solve(spec):
        P = {}
        for n in ORDER:
            par = PARENT[n]
            inh = P[par] @ REST[par].inverted() @ REST[n] if par else REST[n].copy()
            kind, val = spec.get(n, ('local', Matrix.Identity(4)))
            if kind == 'world':
                P[n] = val @ REST[n]
            elif kind == 'pose':
                P[n] = val
            elif kind == 'inherit':          # world-axis rotation about the inherited head
                h = inh.translation.copy()
                P[n] = Matrix.Translation(h) @ val.to_4x4() @ Matrix.Translation(-h) @ inh
            else:
                P[n] = inh @ val
        Lc = {}
        for n in ORDER:
            par = PARENT[n]
            inh = P[par] @ REST[par].inverted() @ REST[n] if par else REST[n]
            Lc[n] = inh.inverted() @ P[n]
        return P, Lc

    def to_euler_deg(Mx):
        e = Mx.to_3x3().normalized().to_euler('XYZ')
        return [math.degrees(a) for a in e]

    # side-aware signs measured on the rig itself (not assumed)
    def local_of(bname, Q):
        _, Lc = solve({bname: ('inherit', Q)})
        return to_euler_deg(Lc[bname])
    SIGN = {}
    for s in (-1, 1):
        S = SIDE[s]
        abd = Matrix.Rotation(-s * 30 * D2R, 3, 'Y')                 # abduction: arm out/up, her side
        e = local_of('upperarm_' + S, abd)
        SIGN['abd_' + S] = 1 if e[2] > 0 else -1
    # humeral rotation that turns the (forward) elbow bend upward: test on the raised right arm
    def raised_wrist_z(sg):
        up_dir = (ARMS[-1]['elbow'] - ARMS[-1]['shoulder']).normalized()
        Q = Matrix.Rotation(50 * D2R, 3, 'Y') @ Matrix.Rotation(sg * 70 * D2R, 3, up_dir)
        P, Lc = solve({'upperarm_R': ('inherit', Q), 'forearm_R': ('local', Matrix.Rotation(90 * D2R, 4, 'X'))})
        return (P['forearm_R'] @ Vector((0, (ARMS[-1]['wrist'] - ARMS[-1]['elbow']).length, 0, 1))).z, Lc
    zp, Lp = raised_wrist_z(1); zm, Lm = raised_wrist_z(-1)
    EXT_SG = 1 if zp > zm else -1
    SIGN['ext_R'] = 1 if to_euler_deg((Lp if EXT_SG > 0 else Lm)['upperarm_R'])[1] > 0 else -1
    SIGN['ext_L'] = -SIGN['ext_R']                                   # mirror (bone Y axes point outward)

    # ---------------------------------------------------------- human ROM (degrees, bone-local XYZ euler)
    # X = flexion(+)/extension(-) for legs, spine, arms, fingers (bone Z points forward, or up for feet).
    LIM = {'root': (0, 0, 0, 0, -180, 180),
           'pelvis': (-15, 15, -15, 15, -15, 15),
           'spine': (-15, 30, -15, 15, -15, 15),
           'chest': (-15, 25, -20, 20, -15, 15),
           'neck': (-30, 40, -45, 45, -30, 30),
           'head': (-20, 20, -10, 10, -10, 10)}
    for s in (-1, 1):
        S = SIDE[s]
        a = SIGN['abd_' + S]; e = SIGN['ext_' + S]
        LIM['clavicle_' + S] = (-15, 15, -10, 10, -15, 15)
        LIM['upperarm_' + S] = (-50, 170) + tuple(sorted((e * 90, -e * 70))) + tuple(sorted((a * 150, -a * 40)))
        LIM['forearm_' + S] = (0, 145, -80, 80, 0, 0)       # hinge; Y = pronation/supination
        LIM['hand_' + S] = (-70, 70, -5, 5, -30, 30)
        LIM['fingers_' + S] = (-30, 90, 0, 0, -20, 20)
        LIM['thumb_' + S] = (-20, 60, -10, 10, -30, 30)
        LIM['thigh_' + S] = (-20, 120, -40, 40, -30, 30)
        LIM['shin_' + S] = (-140, 0, 0, 0, 0, 0)            # hinge, flexion is -X, never past rest
        LIM['foot_' + S] = (-50, 20, -15, 15, -20, 20)      # plantar(-)/dorsi(+) flexion
        LIM['toe_' + S] = (-40, 70, 0, 0, 0, 0)
    for pb in arm.pose.bones:
        pb.rotation_mode = 'YXZ' if pb.name.startswith('upperarm') else 'XYZ'  # shoulder: twist first
        c = pb.constraints.new('LIMIT_ROTATION'); c.owner_space = 'LOCAL'; c.euler_order = pb.rotation_mode
        l = LIM[pb.name]
        for i, ax in enumerate('xyz'):
            setattr(c, 'use_limit_' + ax, True)
            setattr(c, 'min_' + ax, l[2 * i] * D2R); setattr(c, 'max_' + ax, l[2 * i + 1] * D2R)

    # ---------------------------------------------------------- skinning
    def vg_set(ob, weights):
        """weights: list (per vertex) of {bone: w}; normalised here."""
        groups = {}
        for i, wd in enumerate(weights):
            tot = sum(wd.values())
            for b, w in wd.items():
                if w > 1e-6:
                    groups.setdefault(b, {}).setdefault(round(w / tot, 6), []).append(i)
        for b, byw in groups.items():
            g = ob.vertex_groups.get(b) or ob.vertex_groups.new(name=b)
            for w, idx in byw.items():
                g.add(idx, w, 'REPLACE')
    def rigid(ob, b):
        g = ob.vertex_groups.new(name=b); g.add(list(range(len(ob.data.vertices))), 1.0, 'REPLACE')
    def toga_w(z):
        h = smooth(0.375, 0.47, z)
        return {'head': h, 'pelvis': 1 - h}
    for n in ('body_disc', 'face_marks', 'eye_L', 'eye_R', 'lash_L', 'lash_R', 'nose', 'mouth',
              'wreath', 'wreath_ornament', 'shoulder_knot'):
        rigid(OBJ[n], 'head')
    for n in ('skirt', 'waist_cord'):
        rigid(OBJ[n], 'pelvis')
    vg_set(OBJ['toga'], [toga_w(v.co.z) for v in OBJ['toga'].data.vertices])
    vg_set(OBJ['toga_trim'], [toga_w(v.co.z) if v.co.z > 0.30 else {'pelvis': 1.0}
                              for v in OBJ['toga_trim'].data.vertices])
    SKIN = {}                     # rig 2: rest co + weights, for in-build clearance / clip design (LBS)
    ARC = {}                      # arclength of each arm vertex along her arm (socket exemption)
    SOLE, TIPV = {}, {}
    for s in (-1, 1):
        S = SIDE[s]; A = ARMS[s]; G = LEG[s]; pts, cum = ARMPTS[s]
        W = []; ARC[s] = []
        for v in OBJ['arm_' + S].data.vertices:
            best = (1e9, 0.0)
            for i in range(len(pts) - 1):
                a, b = pts[i], pts[i + 1]; ab = b - a
                u = max(0.0, min(1.0, (v.co - a).dot(ab) / ab.length_squared))
                d = (v.co - (a + ab * u)).length
                if d < best[0]:
                    best = (d, cum[i] + u * ab.length)
            f = smooth(A['s_elbow'] - 0.025, A['s_elbow'] + 0.025, best[1])
            W.append({'upperarm_' + S: 1 - f, 'forearm_' + S: f}); ARC[s].append(best[1])
        vg_set(OBJ['arm_' + S], W)
        SKIN['arm_' + S] = [(v.co.copy(), [(b, w) for b, w in wd.items() if w > 1e-6])
                            for v, wd in zip(OBJ['arm_' + S].data.vertices, W)]
        W = []
        a0, a1 = Vector((A['ts'] * 0.03, -0.006, -0.03)), Vector((A['ts'] * 0.068, -0.02, -0.066))
        for v in OBJ['glove_' + S].data.vertices:
            q = A['R'].transposed() @ (v.co - A['wrist']) / GS
            ab = a1 - a0; u = max(0.0, min(1.0, (q - a0).dot(ab) / ab.length_squared))
            if (q - (a0 + ab * u)).length < 0.017 and A['ts'] * q.x > 0.022 and -q.z > 0.02:
                W.append({'thumb_' + S: 1.0})
            else:
                f = smooth(0.06, 0.08, -q.z)
                W.append({'hand_' + S: 1 - f, 'fingers_' + S: f})
        vg_set(OBJ['glove_' + S], W)
        SKIN['glove_' + S] = [(v.co.copy(), [(b, w / sum(wd.values())) for b, w in wd.items() if w > 1e-6])
                              for v, wd in zip(OBJ['glove_' + S].data.vertices, W)]
        W = []
        for v in OBJ['leg_' + S].data.vertices:
            z = v.co.z; k = smooth(0.195, 0.235, z); a = smooth(0.09, 0.11, z)
            W.append({'thigh_' + S: k, 'shin_' + S: (1 - k) * a, 'foot_' + S: (1 - k) * (1 - a)})
        vg_set(OBJ['leg_' + S], W)
        W = []
        for v in OBJ['sandal_' + S].data.vertices:
            q = G['Rs'].transposed() @ (v.co - Vector((s * 0.058, 0, 0)))
            t = smooth(-0.06, -0.09, q.y)
            W.append({'foot_' + S: 1 - t, 'toe_' + S: t})
        vg_set(OBJ['sandal_' + S], W)
        sv = OBJ['sandal_' + S].data.vertices
        SOLE[s] = [(v.co.copy(), wd['foot_' + S], wd['toe_' + S]) for v, wd in zip(sv, W) if v.co.z < 0.02]
        # toe-peel pivot: the most forward vertex of her flat sole (rest z == 0), all on the toe bone
        flat = [(G['Rs'].transposed() @ (v.co - Vector((s * 0.058, 0, 0)))).y for v in sv]
        iv = min((i for i, v in enumerate(sv) if abs(v.co.z) < 1e-6 and W[i]['toe_' + S] > 0.999),
                 key=lambda i: flat[i])
        TIPV[s] = sv[iv].co.copy()
    for ob in CHAR:
        ob.parent = arm
        md = ob.modifiers.new('rig', 'ARMATURE'); md.object = arm; md.use_vertex_groups = True
        ob.modifiers.move(len(ob.modifiers) - 1, 0)          # deform first, before subsurf / solidify
        assert sum(1 for v in ob.data.vertices if len(v.groups) == 0) == 0, ob.name + ' has unweighted verts'

    # ---------------------------------------------------------- face shape keys (move existing geometry only)
    def add_keys(ob, fns):
        ob.shape_key_add(name='Basis', from_mix=False)
        base = [v.co.copy() for v in ob.data.vertices]
        for name, fn in fns:
            kb = ob.shape_key_add(name=name, from_mix=False)
            kb.value = 0.0                                   # Blender 5.2 creates new keys at 1.0 (measured)
            for i, p in enumerate(fn(base)):
                kb.data[i].co = p
    def reface(p, z_new, x_new=None):
        x_new = p.x if x_new is None else x_new
        return Vector((x_new, p.y + face_y(x_new, z_new) - face_y(p.x, p.z), z_new))
    # mouth: the build's own parametric grid (25 x 5 verts, u-major), re-evaluated with new parameters
    mo = OBJ['mouth']; assert len(mo.data.vertices) == 125
    def mouth_fn(w=1.0, curve=0.022, gap=0.004, open_=0.03, fr=(0.0, 0.16, 0.46, 0.75, 1.0), rnd=0.8):
        def fn(base):
            out = []
            for iu in range(25):
                u = -1 + 2 * iu / 24
                top = 0.61 + curve * u * u
                bot = top - (gap + open_ * (1 - u * u) ** rnd)
                for f in fr:
                    x, z = u * 0.09 * w, top + (bot - top) * f
                    out.append(Vector((x, face_y(x, z) - 0.0025, z)))
            return out
        return fn
    chk = mouth_fn()([])
    assert max((a - v.co).length for a, v in zip(chk, mo.data.vertices)) < 1e-6, 'mouth param != build'
    MOUTHS = [('A', mouth_fn(0.80, 0.012, 0.0025, 0.0, (0, .2, .5, .8, 1))),                 # M B P closed
              ('B', mouth_fn(0.95, 0.018, 0.003, 0.014, (0, .10, .85, .93, 1))),             # clenched teeth
              ('C', mouth_fn(0.90, 0.014, 0.004, 0.040, (0, .12, .38, .70, 1))),             # open (EH)
              ('D', mouth_fn(1.00, 0.010, 0.005, 0.062, (0, .10, .28, .65, 1), 0.7)),        # wide open (AA)
              ('E', mouth_fn(0.72, 0.000, 0.004, 0.036, (0, .12, .33, .70, 1), 0.6)),        # rounded (AO/ER)
              ('F', mouth_fn(0.45, -0.012, 0.004, 0.022, (0, .10, .20, .60, 1), 0.5)),       # pucker (UW/OW/W)
              ('G', mouth_fn(0.85, 0.006, 0.006, 0.016, (0, .06, .97, .985, 1))),            # F/V teeth on lip
              ('H', mouth_fn(0.80, 0.012, 0.004, 0.050, (0, .12, .30, .55, 1), 0.9)),        # L (no tongue geo)
              ('X', lambda base: [p.copy() for p in base])]                                  # idle = her rest smile
    add_keys(mo, MOUTHS)
    eye_mat = {}
    for s in (-1, 1):
        ob = OBJ['eye_' + ('L' if s > 0 else 'R')]
        m = [0] * len(ob.data.vertices)
        for p in ob.data.polygons:
            for vi in p.vertices:
                m[vi] = p.material_index
        eye_mat[s] = m
    def eye_keys(s):
        xc, zc = s * EYE_X, EYE_Z; mats = eye_mat[s]
        zlid, sq = zc - 0.35 * EYE_H, 0.06
        def blink(base):
            return [reface(p, zlid + (p.z - zlid) * sq) for p in base]
        def look(dx, dz):
            def fn(base):
                out = []
                for i, p in enumerate(base):
                    if mats[i] not in (1, 2):
                        out.append(p.copy()); continue
                    k = 1.0 if mats[i] == 1 else 1.1
                    x, z = p.x + dx * k, p.z + dz * k
                    e = ((x - xc) / (EYE_W * 0.94)) ** 2 + ((z - zc) / (EYE_H * 0.94)) ** 2
                    if e > 1 and mats[i] == 1:
                        x, z = xc + (x - xc) / math.sqrt(e), zc + (z - zc) / math.sqrt(e)
                    off = p.y - sclera_y(xc, zc, p.x, p.z)
                    out.append(Vector((x, sclera_y(xc, zc, x, z) + off, z)))
                return out
            return fn
        def squint_top(f):
            return lambda base: [reface(p, zc + (p.z - zc) * f) if p.z > zc else p.copy() for p in base]
        keys = [('blink_' + ('L' if s > 0 else 'R'), blink),
                ('brow_up', lambda base: [p.copy() for p in base]), ('brow_down', squint_top(0.90)),
                ('look_L', look(0.022, 0)), ('look_R', look(-0.022, 0)),
                ('look_up', look(0, 0.02)), ('look_down', look(0, -0.035))]
        return keys
    def lash_keys(s):
        zc = EYE_Z; ztop = zc + EYE_H; zlid = zc - 0.35 * EYE_H
        dz_blink = (zlid + (ztop - zlid) * 0.06) - ztop
        mv = lambda dz: (lambda base: [reface(p, p.z + dz) for p in base])
        def brow_down(base):     # lashes follow the flattened top of the eye
            return [reface(p, p.z - 0.10 * EYE_H) for p in base]
        return [('blink_' + ('L' if s > 0 else 'R'), mv(dz_blink)), ('brow_up', mv(0.016)), ('brow_down', brow_down)]
    for s in (-1, 1):
        S = 'L' if s > 0 else 'R'
        add_keys(OBJ['eye_' + S], eye_keys(s))
        add_keys(OBJ['lash_' + S], lash_keys(s))

    # ================================================================ the move
    # rig 2: a weighted adult walk scaled to HER leg (hip z 0.35): step 0.245 m = 0.70 x leg length,
    # 12 frames a step (0.5 s). Heel strike 15 deg toe-up, foot flat +3, heel rise, toe-off, peel.
    STEP = 0.245
    STR = [('R', 31, -0.13, 15.0), ('L', 43, -0.375, 15.0), ('R', 55, -0.62, 15.0),
           ('L', 67, -0.865, 15.0), ('R', 79, -1.09, 15.0), ('L', 91, -1.09, 8.0)]
    P_OFF, P_PEAK, P_MID = 45.0, float(opt('--ppk', '47.0')), 0.0   # foot pitch (deg, heel up +): toe-off / just after / mid swing
    TAU, PEEL = 10.0, 3                      # toe peels up over its tip: angle, frames before toe-off
    PLANTS = {}
    RISE, P_TS = int(opt('--rise', '10')), float(opt('--pts', '12.0'))   # rig 4: the heel-off SOLVE starts at u=6; the heel lifts when the leg needs it
    for S, s in (('R', -1), ('L', 1)):
        pl = [dict(y=0.0, strike=None, phi=0.0)] + [dict(y=y, strike=f, phi=ph) for (SS, f, y, ph) in STR if SS == S]
        for k, p in enumerate(pl):
            p['flat'] = None if p['strike'] is None else p['strike'] + 3
            if k + 1 < len(pl):
                p['off'] = pl[k + 1]['strike'] - 9; p['rise'] = p['off'] - RISE
            else:
                p['off'] = p['rise'] = None
        PLANTS[s] = pl
    P3 = float(opt('--p3', '22.0'))           # pitch 3 frames after toe-off
    def swing_tail(o, po, pp):
        """rig 4: swing foot pitch after toe-off - one more frame of push, then an even return to level by
        mid swing and toe-up for the strike (rig 3 dropped 14 -> 0 in a frame and the ankle fell 20 mm)."""
        return [(o + 1, min(72.0, po + 0.3 * max(0.0, po - pp))), (o + 3, 0.55 * po), (o + 5, 0.18 * po),
                (o + 7, -6.0)]
    PK = {}                                  # one monotone curve for the foot pitch over the whole move
    for s in (-1, 1):
        keys = [(0, 0.0), (NF, 0.0)]
        for k, p in enumerate(PLANTS[s]):
            if p['strike'] is not None:
                keys += [(p['strike'], -p['phi']), (p['flat'], 0.0)]
            if p['off'] is not None:   # the big foot drops its toe-down pitch early, so the knee need not
                g0 = 1.0 if p['strike'] is not None else float(opt('--g0', '0.6'))   # start plants: smaller push
                keys += [(p['rise'], 0.0), (p['off'] - 3, P_TS * g0), (p['off'], P_OFF * g0)] +                         swing_tail(p['off'], P_OFF * g0, P_TS * g0 + (P_OFF - P_TS) * g0 * 0.7)
        PK[s] = sorted(keys)
    pitch = lambda s, t: pchip(PK[s], t)
    SXY = [(0, 0), (0.2, 0.18), (0.5, 0.63), (0.78, 0.91), (1, 1)]   # rig 4: the foot still moves at hip speed when it lands, so the leg is not straight early       # swing ankle travel (fraction)
    CLR = [(0, 0), (0.15, 0.003), (0.35, 0.0075), (0.6, 0.0065), (0.85, 0.003), (1, 0)]  # sole clearance, m

    def sole_min(s, Tf, Tt):
        """Lowest point of her sandal MESH (rest verts, linear-blend skinned on foot/toe = the armature)."""
        return min(wf * (Tf @ co).z + wt * (Tt @ co).z for co, wf, wt in SOLE[s])
    def toe_phase(s, p, t, pk, corr=0.0):
        G = LEG[s]; ax = G['axis']
        tau = TAU * smooth(pk['off'] - PEEL, pk['off'], t)
        Tt = Matrix.Translation((0, pk['y'], 0)) @ rot_about(TIPV[s], ax, tau * D2R)
        Tf = Tt @ rot_about(G['ball'], ax, (p + corr - tau) * D2R)
        dip = min(0.0, sole_min(s, Tf, Tt))       # the rounded toe cap ahead of the tip must not sink
        if dip < 0:
            Tf = Matrix.Translation((0, 0, -dip)) @ Tf; Tt = Matrix.Translation((0, 0, -dip)) @ Tt
        return Tf, Tt
    def foot_T(s, t, corr=0.0, po=None):
        """World transforms (foot, toe) relative to rest, and contact label. corr = ankle ROM guard (deg).
        po = pitch override (rig 3: the heel-rise solve)."""
        G = LEG[s]; ax = G['axis']; pl = PLANTS[s]; p = pitch(s, t) if po is None else po
        for k, pk in enumerate(pl):
            Ty = Matrix.Translation((0, pk['y'], 0))
            if pk['off'] is None or t <= pk['off']:
                if pk['strike'] is not None and t < pk['flat']:
                    T = Ty @ rot_about(G['heel_g'], ax, (p + corr) * D2R)
                    # rig 4: seat the rounded heel ON the floor (lowest sole vertex at z 0) from the strike frame.
                    # heel_g is the sole's back corner; the mesh heel is rounded, so pitched about heel_g the
                    # mesh hung 4 mm up and touched 3 frames late (at foot-flat). z only: no slide.
                    T = Matrix.Translation((0, 0, -sole_min(s, T, T))) @ T
                    return T, T, 'heel'
                if pk['rise'] is not None and t > pk['rise']:
                    Tf, Tt = toe_phase(s, p, t, pk, corr)
                    return Tf, Tt, 'toe'
                T = Ty @ rot_about(G['ball'], ax, corr * D2R) if corr else Ty
                return T, Ty, 'flat'
            nx = pl[k + 1]
            if t < nx['strike']:
                u = (t - pk['off']) / (nx['strike'] - pk['off'])
                p_off = pitch(s, pk['off'])                           # rig 4: the solved toe-off pitch
                a0 = toe_phase(s, p_off, pk['off'], pk)[0] @ G['ankle']
                a1 = Matrix.Translation((0, nx['y'], 0)) @ rot_about(G['heel_g'], ax, -nx['phi'] * D2R) @ G['ankle']
                sh = pchip(SXY, u) ** (1.4 if pk['strike'] is None else 1.0)   # rig 4: the first swing (slow hip) lags
                ride = (py[min(NF - 1, int(t))] - py[nx['strike']]) * smooth(0.45, 0.9, u) * RIDE
                rho = (TAU - p_off) * (1 - smooth(0, 0.5, u))        # toe comes back in line with the foot
                F0 = rot_about(G['ankle'], ax, (p + corr) * D2R)
                Tt0 = F0 @ rot_about(G['ball'], ax, rho * D2R)
                lift = pchip(CLR, u) * (0.8 if nx['phi'] < 10 else 1.0) - sole_min(s, F0, Tt0)   # rig 4: closing step lower          # lowest sole point rides the clearance curve
                L = Matrix.Translation((a0.x + (a1.x - a0.x) * sh - G['ankle'].x,
                                        a0.y + (a1.y - a0.y) * sh + ride - G['ankle'].y, lift))
                return L @ F0, L @ Tt0, 'swing'
        raise RuntimeError('no plant')

    frames = range(NF)
    RIDE = float(opt('--ride', '0.0'))     # rig 4: 0 - riding with the hip landed the foot at pelvis speed
    # pelvis over the feet: at each strike it sits LAG behind the new front plant (rig 3: 0.125, was 0.10), so
    # the heel lands well ahead of the hip on a near-straight leg and the pelvis vaults over it
    # rig 4: 0.14 put the hip so far back and low at the opposite strike that the trailing leg needed ~60 deg
    # of knee to keep its ankle inside 20 deg dorsiflexion (the heel pop). ~0.10 splits the step (front heel
    # to trailing ball) near the middle, as in human double support.
    LAG = float(opt('--lag', '0.10'))
    PY = [(0, 0.0), (12, 0.0), (31, -0.13 + min(LAG, 0.11)), (43, -0.375 + LAG), (55, -0.62 + LAG),
          (67, -0.865 + LAG), (79, -1.09 + LAG - 0.005), (91, -1.075), (97, -1.094), (106, -1.09), (NF, -1.09)]
    py = [pchip(PY, t) for t in frames]
    GAM = [(0, 0), (14, 0), (31, 4.0), (43, -6), (55, 6), (67, -6), (79, 6), (91, -2), (100, 0), (NF, 0)]
    gam = [cos_keys(GAM, t) for t in frames]
    SWA = 0.015                                   # lateral shift over the stance foot (+x = her left)
    SW = [(0, 0), (8, 0), (20, SWA), (31, 0), (37, -SWA), (43, 0), (49, SWA), (55, 0), (61, -SWA),
          (67, 0), (73, SWA), (79, 0), (85, -SWA), (91, 0), (96, 0.006), (106, -0.0015), (116, 0), (NF, 0)]
    # rig 4: the stop carries a weight shift onto the closing (left) foot and back; then a slow idle sway
    IDLE, BRE = float(opt('--idle', '0.0015')), float(opt('--breath', '0.6'))
    sway = [cos_keys(SW, t) + IDLE * math.sin(2 * math.pi * (t - 116) / 96) * smooth(116, 128, t) for t in frames]
    # rig 4: held while the arm is up (r), so the chest never rolls the glove toward the disc
    breath = [BRE * math.sin(2 * math.pi * (t - 100) / 72) * smooth(100, 112, t) for t in frames]   # deg, chest
    speed = [abs(py[min(t + 1, NF - 1)] - py[max(t - 1, 0)]) / 2 / (STEP / 12) for t in frames]
    walk = [min(1.2, v) for v in speed]
    strikes = sorted(f for (_, f, _, _) in STR)
    def bob(t):
        prev = [f for f in strikes if f <= t]
        nxt = [f for f in strikes if f > t]
        if not prev or not nxt:
            return 0.0
        p = (t - prev[-1]) / (nxt[0] - prev[-1])
        return -0.004 * math.sin(math.pi * p / 0.4) if p < 0.4 else 0.002 * math.sin(math.pi * (p - 0.4) / 0.6)
    def z_design(t):
        """Pelvis height wanted when the legs allow it (standing = rest 0.35; the stop settles on bent knees)."""
        base = 0.35 - 0.0005 * smooth(10, 31, t) * (1 - smooth(91, 99, t))
        # rig 4: after the closing step she absorbs a little (1.2 mm = ~10 deg of knee on her short legs; rig 3
        # dipped 7 mm and held the knees at 26-28) and straightens up by ~101, then idles
        settle = -float(opt('--settle', '0.0012')) * math.sin(math.pi * (t - 89) / 12) if 89 <= t < 101 else 0.0
        return base + settle
    lean = spring([3.0 * w for w in walk], 1.5, 0.45, 0.0)

    # right-arm wave: raise r (spring; critically damped on the way down, so the arm never swings into
    # her body), anticipation = a small backswing of the arm, elbow wave oscillation, hand lag
    def spring_z(targets, freq, zetas, x0, sub=8):
        w = 2 * math.pi * freq; x, v = x0, 0.0; out = []; dt = 1.0 / FPS / sub
        for tgt, zeta in zip(targets, zetas):
            out.append(x)
            for _ in range(sub):
                v += (w * w * (tgt - x) - 2 * zeta * w * v) * dt
                x += v * dt
        return out
    # rig 4: the raise and the lower are EASED (smootherstep over 14 frames; rig 3's step-driven spring moved
    # the glove 93 -> 199 -> 238 mm/frame from rest). Anticipation: a small backswing before the raise and a
    # small lift before the lower; a 4 % overshoot settles into the wave.
    def ease(a, b, t):
        x = min(1.0, max(0.0, (t - a) / (b - a)))
        return x * x * x * (x * (6 * x - 15) + 10)
    def bump(a, b, t):
        return math.sin(math.pi * (t - a) / (b - a)) ** 2 if a <= t <= b else 0.0
    R_UP, R_DN = int(opt('--rup', '116')), int(opt('--rdn', '164'))
    r = [ease(R_UP, R_UP + 14, t) * (1 - ease(R_DN, R_DN + 14, t)) + 0.04 * bump(R_UP + 10, R_UP + 22, t)
         + 0.05 * bump(R_DN - 7, R_DN + 3, t) for t in frames]
    ant = [bump(R_UP - 8, R_UP + 4, t) for t in frames]
    tilt = spring([3.0 * x for x in r], 1.4, 0.6, 0.0)
    def env(t):
        return smooth(R_UP + 12, R_UP + 18, t) * (1 - smooth(R_DN - 8, R_DN - 2, t))
    WAVE = {}
    def wave_arrays(abd_pk, fl_pk, amp, ctr, hang_deg):
        osc = [amp * math.sin(2 * math.pi * (t - 128) / 12) * env(t) for t in frames]
        el = [10 + 0.4 * max(0.0, -2.2 * gam[max(t - 2, 0)]) + (ctr - 10) * max(0.0, r[t]) + osc[t] + 8 * ant[t]
              for t in frames]
        acc = [0.0] + [(el[t + 1] - 2 * el[t] + el[t - 1]) * FPS * FPS for t in range(1, NF - 1)] + [0.0]
        w_h, z_h = 2 * math.pi * 3.5, 0.35; h, hv = 0.0, 0.0; lag = []
        for t in frames:
            lag.append(h)
            for _ in range(8):
                hv += (-w_h * w_h * h - 2 * z_h * w_h * hv - acc[t]) / (FPS * 8); h += hv / (FPS * 8)
        WAVE.update(abd_pk=abd_pk, fl_pk=fl_pk, amp=amp, ctr=ctr, hang_deg=hang_deg, elbow=el, lag=lag)
    hang = [smooth(2, 16, t) for t in frames]
    up_dir_R = (ARMS[-1]['elbow'] - ARMS[-1]['shoulder']).normalized()

    META = {'phases': [], 'contact': {}, 'limits_deg': LIM, 'sign': SIGN, 'step_m': STEP,
            'disc': {'RX': RXd, 'RZ': RZd, 'ZC': ZCd, 'T': Td}}
    for s in (-1, 1):
        S = SIDE[s]
        META['contact'][S] = {'heel': list(LEG[s]['heel_g']), 'ball': list(LEG[s]['ball_g']),
                              'tip': list(LEG[s]['tip_g']), 'tipv': list(TIPV[s])}
        for k, p in enumerate(PLANTS[s]):
            f_on = p['strike'] if p['strike'] is not None else 0
            f_off = p['off'] if p['off'] is not None else NF - 1
            META['phases'].append({'side': S, 'plant': k, 'y': p['y'], 'f0': f_on, 'f1': f_off,
                                   'flat': p['flat'], 'rise': p['rise'],
                                   'peel': (p['off'] - PEEL) if p['off'] is not None else None})

    # ---------------------------------------------------------- disc volume (clip design) + socket exemption
    RINV = {n: REST[n].inverted() for n in REST}
    def in_disc(q, k=0.97, m=None):
        """m None: the refuter's slab (|y| < 0.95 T/2). m = margin (m): the domed disc grown by m."""
        e = (q.x / RXd) ** 2 + ((q.z - ZCd) / RZd) ** 2
        if e >= k:
            return False
        if m is None:
            return abs(q.y) < Td / 2 * 0.95
        return ns['face_y'](q.x, q.z) - m < q.y < Td / 2 + DOME_B * max(0.0, 1 - e) + m
    SOCKET = {}          # arm verts inside the disc AT REST (her shoulder root, by design) + 15 mm of arm
    for s in (-1, 1):
        S = SIDE[s]
        ins = [ARC[s][i] for i, (co, _) in enumerate(SKIN['arm_' + S]) if in_disc(co)]
        s_in = max(ins) if ins else 0.0
        SOCKET['arm_' + S] = [i for i, a in enumerate(ARC[s]) if a <= s_in + 0.015]
        META.setdefault('socket', {})['arm_' + S] = {'rest_inside': len(ins), 's_in_m': round(s_in, 4),
                                                   'exempt': SOCKET['arm_' + S]}
    def clip_counts(P, names, k=0.97, m=None):
        Dm = {n: P[n] @ RINV[n] for n in P}
        Hi = Dm['head'].inverted(); out = {}
        for nm in names:
            ex = set(SOCKET.get(nm, ())); n = 0
            for i, (co, wd) in enumerate(SKIN[nm]):
                if i in ex:
                    continue
                p = Vector((0, 0, 0))
                for b, w in wd:
                    p += (Dm[b] @ co) * w
                n += in_disc(Hi @ p, k, m)
            out[nm] = n
        return out

    keyed = {n: [] for n in ORDER}; pelvis_z = []; clamps = 0; ankle_fix = {}; safety = []
    # Ankle ROM guard: foot_T(corr) rotates the foot about its support point (heel / ball) in stance, and
    # in swing changes the pitch about the ankle; the swing foot is then re-seated on the clearance curve,
    # so a guard correction can never pop the foot (rig 1 lifted it by a hard clamp: 12-19 mm in a frame).
    def pelvis_rot(t):
        g = gam[t] * D2R; b = -2.5 * sway[t] / SWA * D2R
        return g, b, Matrix.Rotation(g, 4, 'Z') @ Matrix.Rotation(b, 4, 'Y')
    hp = Vector((0, 0, 0.35))
    L12 = 2 * L1 * L2
    def D_of(kappa):                                   # hip-ankle distance for a geometric knee angle
        return math.sqrt(L1 * L1 + L2 * L2 + L12 * math.cos(kappa * D2R))
    KAP0 = math.degrees(math.acos((D_REST ** 2 - L1 * L1 - L2 * L2) / L12))   # her rest knee (5.55)
    def zfrom(t, s, ank, D):
        """Pelvis height at which leg s spans exactly D to its ankle."""
        _, _, Rp = pelvis_rot(t)
        off = Rp @ (LEG[s]['hip'] - hp)
        v = ank - Vector((sway[t] + off.x, py[t] + off.y, 0))
        return ank.z + math.sqrt(max(0.0, D * D - v.x * v.x - v.y * v.y)) - off.z
    # rig 3: pelvis height = what the STANCE leg gives with a human stance-knee profile (flexion from her
    # rest knee, frames after heel strike): ~2 at contact, 15-20 loading response, extending to ~5 by
    # mid/terminal stance. With the heel landing LAG ahead, the near-straight leg is inclined at contact, so
    # the pelvis is LOW there and HIGH at mid stance (vaulting). The weight-bearing leg sets the rise and
    # fall; the trailing leg only has to reach. Terminal stance eases into the next contact height (the
    # knee starts to flex just before the other heel lands, as in human pre-swing).
    # rig 4: loading peak at u=2 (17%), extended to ~5 by mid stance (u~5, where the hip now passes over the
    # ankle with LAG 0.10), as in the human stance-knee curve
    KAP = [(0, float(opt('--k0', '2.0'))), (1.0, 8.0), (2.0, float(opt('--kl', '15.0'))), (3.0, 14.0),
           (4.5, 9.0), (6.0, 5.0), (9.0, 4.0), (12.0, 4.0)]
    STRK = sorted((f, -1 if S_ == 'R' else 1) for (S_, f, _, _) in STR)
    def z_st(t, f, s, ks=1.0):
        t = int(round(t))
        ank = foot_T(s, t)[0] @ LEG[s]['ankle']
        return zfrom(t, s, ank, D_of(KAP0 + ks * pchip(KAP, t - f)))
    # The profile is sampled at two anchors per stance - the low (loading response, U_LO after the strike)
    # and the high (mid stance, U_HI) - and the pelvis eases between anchors, so its path is one smooth
    # wave (the heel rocker and the foot-flat drop would otherwise make it jitter). The knee angles then
    # fall out of the geometry; check_rig.py measures them.
    U_LO, U_HI, U_TS = float(opt('--ulo', '2.0')), float(opt('--uhi', '5.5')), float(opt('--uts', '0'))
    # Three anchors per stance: contact (the front leg straight, KAP[0]), low (loading, U_LO) and high (mid
    # stance, U_HI); a monotone cubic between them, so the pelvis keeps falling into the contact instead of
    # stopping above it and then dropping onto the straight leg in one frame.
    ZA = []; KS_END = float(opt('--ksend', '0.4'))
    for k, (f, s) in enumerate(STRK):
        if k + 1 < len(STRK):
            # rig 4: the first and the stopping step absorb less (the pelvis moves slowly there, so a full 15 deg
            # loading knee dropped it 8 mm in two frames instead of the steady 2.5)
            ks = KS_END if k in (0, len(STRK) - 2) else 1.0
            ZA += [(f, z_st(f, f, s)), (f + U_LO, z_st(f + U_LO, f, s, ks)), (f + U_HI, z_st(f + U_HI, f, s))]
            if U_TS:   # terminal stance: the trailing leg stays long (straight knee) until just before the next heel
                ZA.append((f + U_TS, z_st(f + U_TS, f, s)))
    ZA = [(STRK[0][0] - 8, z_design(STRK[0][0] - 8))] + ZA
    def z_walk(t):
        return pchip(ZA, t)
    print('RIG pelvis anchors', [(f, round(z * 1000, 1)) for f, z in ZA])
    # rig 3: the heel rise is SOLVED, not keyed. Keyed, it lifted the ankle faster than the pelvis came down
    # into the next contact, so the stance knee buckled to ~45 deg in terminal stance (human ~5-10). Per
    # frame from heel rise to toe-off the foot pitch is the one at which the trailing knee has the human
    # terminal-stance / pre-swing flexion KT (u = frames after that foot's strike), never decreasing.
    # rig 4: KT is the pre-swing knee (flexion above her rest bend) rising SMOOTHLY from heel-off to ~38 at
    # toe-off (human 35-40). Rig 3 held it near 8 until the opposite strike and the ankle ROM guard then
    # had to throw the heel up in one frame. KT_SC scales the ramp (tuning).
    KT_SC = float(opt('--ktsc', '1.0'))
    KT = [(5, 4.0), (9, 4.0)] + [(u, 4.0 + KT_SC * v) for u, v in ((10, 4.0), (11, 9.0), (12, 16.0), (13, 24.0),
                                                                  (14, 31.0), (15, 36.0))]
    def zpre(t):
        w = smooth(24, 31, t) * (1 - smooth(84, 92, t))
        return z_design(t) * (1 - w) + z_walk(t) * w
    def hip_at(t, s, z):
        _, _, Rp = pelvis_rot(t)
        return (Matrix.Translation((sway[t], py[t], z)) @ Rp @ Matrix.Translation(-hp)) @ LEG[s]['hip']
    HEEL = {}
    PK0 = {s: list(PK[s]) for s in (-1, 1)}
    def solve_heel(zof):
        """rig 4: solved from heel rise THROUGH toe-off (rig 3 stopped a frame short and the keyed 45 deg at
        toe-off stalled the ankle for a frame). The toe-off pitch then carries on into the swing keys."""
        for s in (-1, 1):
            PK[s] = list(PK0[s])
            for p in PLANTS[s]:
                if p['off'] is None or p['strike'] is None:
                    continue
                f = p['strike']; last = 0.0; newk = []
                for t in range(p['rise'] + 1, p['off']):
                    Dt = D_of(KAP0 + pchip(KT, t - f)); hip = hip_at(t, s, zof(t))
                    Dphi = lambda ph: (foot_T(s, t, 0.0, ph)[0] @ LEG[s]['ankle'] - hip).length
                    if Dphi(last) <= Dt:
                        ph = last
                    else:
                        lo, hi = last, 75.0
                        for _ in range(40):
                            mid = 0.5 * (lo + hi)
                            lo, hi = (mid, hi) if Dphi(mid) > Dt else (lo, mid)
                        ph = hi
                    last = ph; newk.append((t, ph))
                o = p['off']      # toe-off: the knee target is out of reach there, so the pitch carries on its slope
                po = min(70.0, newk[-1][1] + 0.9 * (newk[-1][1] - newk[-2][1])); newk.append((o, po))
                tail = swing_tail(o, po, newk[-2][1])
                PK[s] = sorted([k for k in PK[s] if not (p['rise'] < k[0] <= o + 7)] + newk + tail)
                HEEL['%s%d' % (SIDE[s], f)] = [round(v, 1) for _, v in newk]
    def pelvis_path():
        """rig 4: the design height, lowered ONLY where a planted (heel/flat) leg cannot reach it, by that
        deficit smoothed so it never undershoots (max-filter then blur). Rig 3 clipped with min() and left
        2-3 mm one-frame kinks; a plain smooth-under also cut the contact peak and bent the contact knee."""
        ZM = []
        for t in frames:
            ftl = {s: foot_T(s, t) for s in (-1, 1)}
            ank = {s: ftl[s][0] @ LEG[s]['ankle'] for s in (-1, 1)}
            # the toe-phase leg is not a ceiling: its heel is solved to reach (it would ratchet the pelvis down)
            ZM.append(min([zfrom(t, s, ank[s], D_REST) for s in (-1, 1) if ftl[s][2] in ('heel', 'flat')] or [1.0]))
        c = [max(0.0, zpre(t) - (ZM[t] - 0.0003)) for t in frames]
        cm = [max(c[max(0, t - 2):t + 3]) for t in frames]
        gk = [0.1, 0.2, 0.4, 0.2, 0.1]
        cs = [sum(gk[i + 2] * cm[min(NF - 1, max(0, t + i))] for i in range(-2, 3)) for t in frames]
        return ZM, [min(ZM[t] - 0.0001, zpre(t) - cs[t]) for t in frames]
    ZM, ZP = pelvis_path()
    solve_heel(lambda t: ZP[int(round(t))])
    print('RIG heel-rise pitch solved', HEEL)
    SWPULL = {}
    def pose_frame(t, corr, want_P=False):
        nclamp = 0
        g, b, Rp = pelvis_rot(t)
        fwd = (Matrix.Rotation(g, 3, 'Z') @ Vector((0, -1, 0))).normalized()
        FT = {s: foot_T(s, t, corr[s]) for s in (-1, 1)}
        ank = {s: FT[s][0] @ LEG[s]['ankle'] for s in (-1, 1)}
        z = ZP[t]
        STAND = [s for s in (-1, 1) if FT[s][2] != 'swing']
        for _ in range(4):          # lower the pelvis until both legs reach (never stretch a bone)
            Dp = Matrix.Translation((sway[t], py[t], z)) @ Rp @ Matrix.Translation(-hp)
            worst = 0.0
            for s in STAND:
                hip = Dp @ LEG[s]['hip']; v = ank[s] - hip
                dxy2 = v.x * v.x + v.y * v.y; zmax = ank[s].z + math.sqrt(max(0.0, D_REST ** 2 - dxy2))
                worst = max(worst, hip.z - zmax)
            if worst <= 1e-7:
                break
            z -= worst + 2e-7
        Dp = Matrix.Translation((sway[t], py[t], z)) @ Rp @ Matrix.Translation(-hp)
        for s in (-1, 1):          # rig 3: a swing leg at full reach is pulled toward the hip, never the pelvis down
            if s not in STAND:
                v = ank[s] - Dp @ LEG[s]['hip']
                if v.length > D_REST:
                    Tp = Matrix.Translation(-v.normalized() * (v.length - D_REST + 1e-7))
                    FT[s] = (Tp @ FT[s][0], Tp @ FT[s][1], 'swing'); ank[s] = FT[s][0] @ LEG[s]['ankle']
                    SWPULL[t] = max(SWPULL.get(t, 0.0), round((v.length - D_REST) * 1000, 2))
        spec = {'pelvis': ('world', Dp)}
        cy = Matrix.Rotation(-0.6 * g, 3, 'Z') @ Matrix.Rotation(-0.45 * b, 3, 'Y')
        spec['spine'] = ('inherit', Matrix.Rotation(0.5 * lean[t] * D2R, 3, 'X') @ cy)
        spec['chest'] = ('inherit', Matrix.Rotation((0.5 * lean[t] + breath[t] * (1 - min(1.0, max(0.0, r[t])))) * D2R, 3, 'X') @ cy)
        spec['head'] = ('inherit', Matrix.Rotation(tilt[t] * D2R, 3, 'Y'))
        for s in (-1, 1):
            G = LEG[s]; S = SIDE[s]
            hip = Dp @ G['hip']; an = ank[s]; v = an - hip; D = v.length
            if D > D_REST + 1e-9:
                nclamp += 1; D = D_REST
            d = v.normalized()
            a = (L1 * L1 - L2 * L2 + D * D) / (2 * D); hh = math.sqrt(max(0.0, L1 * L1 - a * a))
            n = (fwd - d * fwd.dot(d)).normalized()
            knee = hip + d * a + n * hh; ankle = hip + d * D
            X = d.cross(fwd).normalized()
            def fm(Y, o):
                Y = Y.normalized(); Z = X.cross(Y).normalized(); Xo = Y.cross(Z).normalized()
                M = Matrix((Xo, Y, Z)).transposed().to_4x4(); M.translation = o; return M
            spec['thigh_' + S] = ('pose', fm(knee - hip, hip))
            spec['shin_' + S] = ('pose', fm(ankle - knee, knee))
            spec['foot_' + S] = ('world', FT[s][0]); spec['toe_' + S] = ('world', FT[s][1])
            # arms: hang, counter-swing (opposite the same-side leg, 2-frame pendulum lag)
            flex = 2.4 * s * gam[max(t - 2, 0)]          # R arm back when R leg forward (gamma > 0)
            if s < 0:
                rr = r[t]; rp = max(0.0, rr)
                abd = (-WAVE['hang_deg'] * hang[t]) + WAVE['abd_pk'] * rr   # world +Y = her right arm out/up
                fl = flex + WAVE['fl_pk'] * rr - 8 * ant[t]                # anticipation: small backswing
                Q = Matrix.Rotation(-fl * D2R, 3, 'X') @ Matrix.Rotation(abd * D2R, 3, 'Y') \
                    @ Matrix.Rotation(EXT_SG * 62 * rp * D2R, 3, up_dir_R)
                el = WAVE['elbow'][t]
            else:
                Q = Matrix.Rotation(-flex * D2R, 3, 'X')
                el = 10 + 0.4 * max(0.0, flex)
            spec['upperarm_' + S] = ('inherit', Q)
            spec['forearm_' + S] = ('local', Matrix.Rotation(max(0.5, el) * D2R, 4, 'X'))
        P, _ = solve(spec)
        fx = P['forearm_R'].col[0].to_3d().normalized(); hy = P['hand_R'].col[1].to_3d().normalized()
        axp = (fx - hy * fx.dot(hy)).normalized()
        spec['hand_R'] = ('inherit', Matrix.Rotation(WAVE['lag'][t] * D2R, 3, axp))
        P, Lc = solve(spec)
        if want_P:
            return Lc, z, nclamp, P
        return Lc, z, nclamp
    # ---------------------------------------------------------- wave pose: pick the gentlest change from
    # rig 1 (abd 65, flex 20, elbow 98 +/- 22) whose glove and arm stay OUT of her disc, grown by a margin
    t_s = time.time(); Z0 = {-1: 0.0, 1: 0.0}
    def worst_clip(par, fr, names, k, m):
        """Gloves are held off the domed disc by the margin; arms use the slab (next to the socket a grown
        disc would always 'contain' the arm)."""
        wave_arrays(*par); w = 0
        for t in fr:
            P = pose_frame(t, Z0, True)[3]
            w = max(w, sum(clip_counts(P, [n for n in names if n.startswith('glove')], k, m).values()) +
                    sum(clip_counts(P, [n for n in names if n.startswith('arm')]).values()))
        return w
    hang_deg = None
    for hd in (15, 12, 9, 6, 3, 0):                   # walking arm hang: largest that stays out of the disc
        if worst_clip((65, 20, 22, 98, hd), range(0, 110, 2), ('arm_R', 'arm_L', 'glove_R', 'glove_L'),
                      1.0, 0.004) == 0:
            hang_deg = hd; break
    # rig 3: the wave must clear her disc by a real distance (>= GAP_MIN, glove surface to disc surface), not a
    # grown-volume proxy. Distance = nearest point on the rest body_disc mesh, taken in head rest space.
    from mathutils.bvhtree import BVHTree
    dme = OBJ['body_disc'].data; dmw = OBJ['body_disc'].matrix_world
    DBVH = BVHTree.FromPolygons([dmw @ v.co for v in dme.vertices], [tuple(p.vertices) for p in dme.polygons])
    GAP_MIN = float(opt('--gap', '0.012'))
    def glove_gap(P, nm='glove_R'):
        Dm = {n: P[n] @ RINV[n] for n in P}; Hi = Dm['head'].inverted(); g = 9.0
        for co, wd in SKIN[nm]:
            p = Vector((0, 0, 0))
            for b, w in wd:
                p += (Dm[b] @ co) * w
            q = Hi @ p; loc, nrm, _, dd = DBVH.find_nearest(q)
            g = min(g, -dd if (in_disc(q, 1.0, 0.0) or (q - loc).dot(nrm) < 0) else dd)
        return g
    def wave_gap(par, fr):
        wave_arrays(*par); g = 9.0; ncl = 0
        for t in fr:
            P = pose_frame(t, Z0, True)[3]
            g = min(g, glove_gap(P)); ncl += clip_counts(P, ['arm_R'])['arm_R']
        return g, ncl
    cands = sorted(((a, f, am, c) for a in (65, 75, 85, 95, 105) for f in (20, 32, 44)
                    for am, c in ((22, 98), (16, 90), (16, 80), (14, 72))),
                   key=lambda p: abs(p[0] - 65) / 10 + abs(p[1] - 20) / 10 + abs(p[2] - 22) / 6 + abs(p[3] - 98) / 8)
    pick = None; tried = []
    for par in cands:
        g, a_cl = wave_gap(par + (hang_deg or 0,), range(100, NF))
        tried.append([list(par), round(g * 1000, 1), a_cl])
        if g >= GAP_MIN and a_cl == 0:
            pick = par + (hang_deg or 0,); break
    if pick is None:
        best = max((r for r in tried if r[2] == 0), key=lambda r: r[1], default=max(tried, key=lambda r: r[1]))
        pick = tuple(best[0]) + (hang_deg or 0,)
        META['wave_margin'] = 'NONE >= %.0f mm - widest gap picked' % (GAP_MIN * 1000)
    else:
        META['wave_margin'] = 'glove gap >= %.0f mm' % (GAP_MIN * 1000)
    g_all, _ = wave_gap(pick, range(100, NF))
    META['wave_gap_mm'] = round(g_all * 1000, 1)
    print('RIG wave gap (mm, every frame 100..end)', META['wave_gap_mm'], 'tried', tried[:len(tried)][-3:])
    wave_arrays(*pick)
    META['wave_pick'] = {'abd_peak': pick[0], 'flex_peak': pick[1], 'osc_amp': pick[2], 'elbow_ctr': pick[3],
                         'hang_deg': pick[4], 'tried': len(tried)}
    print('RIG wave pick', META['wave_pick'], META['wave_margin'], 'hang', hang_deg, '%.1fs' % (time.time() - t_s))
    diag = {'sole_min_mm': {'R': [], 'L': []}, 'clip': []}
    def guard_need(t):
        corr = {-1: 0.0, 1: 0.0}
        for it in range(40):
            Lc = pose_frame(t, corr)[0]; exc = {}
            for s in (-1, 1):
                lo, hi = LIM['foot_' + SIDE[s]][0] + 0.3, LIM['foot_' + SIDE[s]][1] - 0.3
                e = to_euler_deg(Lc['foot_' + SIDE[s]])[0]
                exc[s] = e - hi if e > hi else (e - lo if e < lo else 0.0)
            if max(abs(x) for x in exc.values()) < 1e-3:
                break
            for s in (-1, 1):
                corr[s] += exc[s]
        return corr
    # rig 4: the guard's per-frame correction is spread in time first (max-filter r2 then blur, per sign, so it
    # never undershoots): rig 3 applied it frame by frame and the foot jumped 10-20 deg in one frame
    need = [guard_need(t) for t in frames]
    CORR0 = {}
    for s in (-1, 1):
        c = [need[t][s] for t in frames]; out = [0.0] * NF
        for sg in (1.0, -1.0):
            v = [max(0.0, sg * x) for x in c]
            m = [max(v[max(0, t - 2):t + 3]) for t in frames]
            gk5 = [0.1, 0.2, 0.4, 0.2, 0.1]
            b = [sum(gk5[i + 2] * m[min(NF - 1, max(0, t + i))] for i in range(-2, 3)) for t in frames]
            out = [o + sg * x for o, x in zip(out, b)]
        CORR0[s] = out
    for t in frames:
        corr = {s: CORR0[s][t] for s in (-1, 1)}
        for it in range(40):
            Lc, z, nclamp = pose_frame(t, corr)
            exc = {}
            for s in (-1, 1):
                lo, hi = LIM['foot_' + SIDE[s]][0] + 0.3, LIM['foot_' + SIDE[s]][1] - 0.3
                e = to_euler_deg(Lc['foot_' + SIDE[s]])[0]
                exc[s] = e - hi if e > hi else (e - lo if e < lo else 0.0)
            if max(abs(x) for x in exc.values()) < 1e-3:
                break
            for s in (-1, 1):
                corr[s] += exc[s]
        for s in (-1, 1):
            if corr[s]:
                ankle_fix['%s%d' % (SIDE[s], t)] = round(corr[s], 2)
        clamps += nclamp; pelvis_z.append(z); safety.append(ZP[t] - z)
        for nme in ORDER:
            keyed[nme].append(Lc[nme])
        P = pose_frame(t, corr, True)[3]
        for s in (-1, 1):
            S = SIDE[s]; Df = P['foot_' + S] @ RINV['foot_' + S]; Dt = P['toe_' + S] @ RINV['toe_' + S]
            diag['sole_min_mm'][S].append(round(sole_min(s, Df, Dt) * 1000, 2))
        diag['clip'].append(sum(clip_counts(P, ('glove_R', 'glove_L', 'arm_R', 'arm_L')).values()))
    print('RIG ik clamps (legs could not reach):', clamps, '; pelvis safety drop max mm %.2f' % (max(safety) * 1000))
    print('RIG ankle ROM guard frames:', len(ankle_fix), ankle_fix)
    jump = {S: max(abs(a - b) for a, b in zip(v[1:], v)) for S, v in diag['sole_min_mm'].items()}
    kn = {S: max(-to_euler_deg(keyed['shin_' + S][t])[0] for t in frames) for S in ('R', 'L')}
    th = {S: [round(f(to_euler_deg(keyed['thigh_' + S][t])[0] for t in range(25, 92)), 1) for f in (min, max)]
          for S in ('R', 'L')}
    wz = pelvis_z[31:91]
    print('RIG design: sole jump mm', jump, '| min sole mm', {S: min(v) for S, v in diag['sole_min_mm'].items()},
          '| knee max', kn, '| thigh x range', th, '| pelvis z range mm (31-91) %.1f' % ((max(wz) - min(wz)) * 1000),
          '| clip max (slab)', max(diag['clip']))
    META['design'] = {'sole_jump_mm': jump, 'knee_max_deg': kn, 'thigh_x_deg_25_91': th,
                      'pelvis_bob_mm': round((max(wz) - min(wz)) * 1000, 2), 'clip_max_slab': max(diag['clip']),
                      'safety_drop_max_mm': round(max(safety) * 1000, 3)}
    META['py'] = py; META['pelvis_z'] = pelvis_z; META['swing_pull_mm'] = SWPULL
    print('RIG swing reach pull mm', SWPULL)
    if FAST:
        for t in range(int(opt('--tab0', '20')), int(opt('--tab1', '110'))):
            print('TAB %d z %.1f x %.1f | R knee %.0f hip %.0f ank %.0f sole %.1f | L knee %.0f hip %.0f ank %.0f sole %.1f' % (
                t, pelvis_z[t] * 1000, sway[t] * 1000,
                -to_euler_deg(keyed['shin_R'][t])[0], to_euler_deg(keyed['thigh_R'][t])[0],
                to_euler_deg(keyed['foot_R'][t])[0], diag['sole_min_mm']['R'][t],
                -to_euler_deg(keyed['shin_L'][t])[0], to_euler_deg(keyed['thigh_L'][t])[0],
                to_euler_deg(keyed['foot_L'][t])[0], diag['sole_min_mm']['L'][t]),
                  '| ankR y %.1f z %.1f p %.1f' % tuple([v * 1000 for v in (foot_T(-1, t)[0] @ LEG[-1]['ankle']).yz]
                                                       + [pitch(-1, t)]))

    # ---------------------------------------------------------- key it
    prev = {}
    for t in frames:
        for pb in arm.pose.bones:
            Lm = keyed[pb.name][t]
            loc, rot, _ = Lm.decompose()
            e = rot.to_euler(pb.rotation_mode, prev.get(pb.name)) if pb.name in prev else rot.to_euler(pb.rotation_mode)
            prev[pb.name] = e
            pb.rotation_euler = e; pb.scale = (1, 1, 1)
            pb.keyframe_insert('rotation_euler', frame=t)
            pb.keyframe_insert('scale', frame=t)
            if pb.name == 'pelvis':
                pb.location = loc; pb.keyframe_insert('location', frame=t)
    def key_shape(obnames, key, vals):
        for n in obnames:
            kb = OBJ[n].data.shape_keys.key_blocks[key]
            for f, v in vals:
                kb.value = v; kb.keyframe_insert('value', frame=f)
    blink = [(0, 0), (141, 0), (142, 0.35), (143, 0.9), (144, 1.0), (145, 0.8), (146, 0.3), (147, 0)]
    key_shape(['eye_L', 'lash_L'], 'blink_L', blink); key_shape(['eye_R', 'lash_R'], 'blink_R', blink)
    brow = [(0, 0), (124, 0)] + [(f, smooth(124, 132, f)) for f in range(125, 133)] + [(150, 1)] + \
           [(f, 1 - smooth(150, 158, f)) for f in range(151, 159)]
    key_shape(['eye_L', 'eye_R', 'lash_L', 'lash_R'], 'brow_up', brow)
    scene.frame_start, scene.frame_end = 0, NF - 1
    scene.render.fps = FPS
    META['ik_clamps'] = clamps
    META['ankle_rom_guard_deg'] = ankle_fix
    lo = lambda a, b: min(range(a, b), key=lambda t: pelvis_z[t])      # down = lowest pelvis after contact
    hi = lambda a, b: max(range(a, b), key=lambda t: pelvis_z[t])      # up = highest pelvis in the stance
    META['markers'] = {'R_contact': 55, 'R_down': lo(55, 61), 'R_passing': 61, 'R_up': hi(58, 67),
                       'L_contact': 67, 'L_down': lo(67, 73), 'L_passing': 73, 'L_up': hi(70, 79),
                       'stop': 91, 'wave_anticipation': 110, 'wave_raise': R_UP, 'wave': (R_UP + 12, R_DN - 2),
                       'blink': 144, 'brow_up': (124, 158)}
    arm['rig_meta'] = json.dumps(META)
    json.dump(META, open(os.path.join(OUT, 'rig_meta.json'), 'w'), indent=1, default=list)
    print('RIG built in %.1fs; signs %s; ext_sg %d; markers %s' % (time.time() - t_start, SIGN, EXT_SG,
                                                                   META['markers']))
    if FAST:
        return

    # ---------------------------------------------------------- rest_front at the test-8 camera/res/lights
    cam = bpy.data.objects['cam']
    ad.pose_position = 'REST'
    scene.frame_set(0)
    set_cam(cam, 22)
    scene.render.resolution_x = scene.render.resolution_y = 1600
    scene.render.filepath = os.path.join(OUT, 'rest_front.png')
    t0 = time.time(); bpy.ops.render.render(write_still=True)
    print('RIG rest_front %.1fs' % (time.time() - t0))
    # bones overlay bases (front + side), bone 2D positions
    bones2d = {}
    for view, yaw in (('front', 22), ('side', 90)):
        set_cam(cam, yaw)
        scene.render.resolution_x = scene.render.resolution_y = 1000
        scene.eevee.taa_render_samples = 16
        scene.render.filepath = os.path.join(OUT, '_overlay_%s_base.png' % view)
        bpy.ops.render.render(write_still=True)
        bl = []
        for b in ad.bones:
            hd = world_to_camera_view(scene, cam, arm.matrix_world @ b.head_local)
            tl = world_to_camera_view(scene, cam, arm.matrix_world @ b.tail_local)
            bl.append([b.name, [hd.x * 1000, (1 - hd.y) * 1000], [tl.x * 1000, (1 - tl.y) * 1000], b.use_deform])
        bones2d[view] = bl
    json.dump(bones2d, open(os.path.join(OUT, '_bones2d.json'), 'w'))
    scene.eevee.taa_render_samples = 64
    ad.pose_position = 'POSE'
    scene.frame_set(0)
    bpy.ops.wm.save_as_mainfile(filepath=BLEND)
    print('RIG saved', BLEND)

    # ---------------------------------------------------------- GLB (same flattening as build_her.py)
    M = ns['M']
    for ob in CHAR:
        for mod in list(ob.modifiers):
            if mod.name == 'outline_hull':
                ob.modifiers.remove(mod)
        if ob.data.materials and ob.data.materials[-1] == M['outline']:
            ob.data.materials.pop()
    for key in ('face', 'arm', 'trim'):
        nt = M[key].node_tree
        bsdf = nt.nodes.get('Principled BSDF') or [n for n in nt.nodes if n.type == 'BSDF_PRINCIPLED'][0]
        for ln in list(bsdf.inputs['Base Color'].links) + list(bsdf.inputs['Normal'].links):
            nt.links.remove(ln)
        bsdf.inputs['Base Color'].default_value = M[key].diffuse_color
    bpy.ops.object.select_all(action='DESELECT')
    for ob in CHAR + [arm]:
        ob.select_set(True)
    bpy.context.view_layer.objects.active = arm
    glb = os.path.join(OUT, 'her-%s.glb' % TAG)
    bpy.ops.export_scene.gltf(filepath=glb, export_format='GLB', use_selection=True, export_yup=True,
                              export_apply=True, export_draco_mesh_compression_enable=False,
                              export_animations=True, export_skins=True, export_morph=True)
    print('RIG glb', glb, os.path.getsize(glb))

# ================================================================ STAGE sheets (raw renders)
def open_blend():
    bpy.ops.wm.open_mainfile(filepath=BLEND)
    return bpy.context.scene, bpy.data.objects['cam'], bpy.data.objects['her_rig']

def stage_sheets():
    scene, cam, arm = open_blend()
    scene.eevee.taa_render_samples = int(opt('--samples', '24'))
    sk_obs = [o for o in bpy.data.objects if o.type == 'MESH' and o.data.shape_keys]
    for o in sk_obs:
        o.data.shape_keys.animation_data_clear()
        for kb in o.data.shape_keys.key_blocks[1:]:
            kb.value = 0.0
    scene.frame_set(0)
    names = list('ABCDEFGHX') + ['blink_L', 'blink_R', 'brow_up', 'brow_down', 'look_L', 'look_R', 'look_up', 'look_down']
    d = os.path.join(OUT, '_sheet'); os.makedirs(d, exist_ok=True)
    scene.render.resolution_x = scene.render.resolution_y = 420
    set_cam(cam, 0, d=1.25, target=Vector((0, -0.1, 0.71)), up=0.0)
    for nm in ['basis'] + names:
        for o in sk_obs:
            for kb in o.data.shape_keys.key_blocks[1:]:
                kb.value = 1.0 if kb.name == nm else 0.0
        scene.render.filepath = os.path.join(d, 'face_%s.png' % nm)
        bpy.ops.render.render(write_still=True)
    for o in sk_obs:
        for kb in o.data.shape_keys.key_blocks[1:]:
            kb.value = 0.0
    meta = json.loads(arm['rig_meta'])
    scene.render.resolution_x = scene.render.resolution_y = 480
    for lab in ('R_contact', 'R_down', 'R_passing', 'R_up', 'L_contact', 'L_down', 'L_passing', 'L_up'):
        f = meta['markers'][lab]; scene.frame_set(f)
        pv = arm.matrix_world @ arm.pose.bones['pelvis'].head
        for view, yaw in (('front', 0), ('side', 90)):
            set_cam(cam, yaw, d=3.4, target=Vector((0, pv.y, 0.6)), up=0.25)
            scene.render.filepath = os.path.join(d, 'walk_%s_%s.png' % (view, lab))
            bpy.ops.render.render(write_still=True)

# ================================================================ STAGE movie (PNG frames; ffmpeg encodes)
def stage_movie():
    scene, cam, arm = open_blend()
    view = opt('--cam', 'tq')
    scene.eevee.taa_render_samples = int(opt('--samples', '16'))
    scene.render.resolution_x, scene.render.resolution_y = 960, 540
    scene.render.image_settings.compression = 15
    if view == 'tq':        # rig 2: closer (d 3.4, was 4.0) and following her (smoothed pelvis y)
        py = json.loads(arm['rig_meta'])['py']
        gk = [math.exp(-0.5 * (i / 6.0) ** 2) for i in range(-18, 19)]
        for f in range(NF):
            yf = sum(gk[i + 18] * py[min(NF - 1, max(0, f + i))] for i in range(-18, 19)) / sum(gk)
            set_cam(cam, -45, d=3.4, target=Vector((0, yf, 0.58)), up=0.45, lens=50)
            cam.keyframe_insert('location', frame=f); cam.keyframe_insert('rotation_euler', frame=f)
    else:                   # rig 3: her RIGHT (the waving side), 18 deg off profile toward her front, closer,
        py = json.loads(arm['rig_meta'])['py']       # following her like tq so the gait stays large in frame
        gk = [math.exp(-0.5 * (i / 6.0) ** 2) for i in range(-18, 19)]
        for f in range(NF):
            yf = sum(gk[i + 18] * py[min(NF - 1, max(0, f + i))] for i in range(-18, 19)) / sum(gk)
            set_cam(cam, -72, d=float(opt('--sd', '3.0')), target=Vector((0, yf, 0.58)), up=0.25, lens=50)
            cam.keyframe_insert('location', frame=f); cam.keyframe_insert('rotation_euler', frame=f)
    scene.frame_start = int(opt('--f0', '0')); scene.frame_end = int(opt('--f1', str(NF - 1)))
    d = os.path.join(OUT, 'frames_' + view); os.makedirs(d, exist_ok=True)
    scene.render.filepath = os.path.join(d, '')
    t0 = time.time()
    bpy.ops.render.render(animation=True)
    n = scene.frame_end - scene.frame_start + 1
    print('RIG movie %s: %d frames %.1fs (%.2f s/frame), engine %s' % (view, n, time.time() - t0,
          (time.time() - t0) / n, scene.render.engine))

{'build': stage_build, 'sheets': stage_sheets, 'movie': stage_movie}[STAGE]()
