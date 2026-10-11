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

import bpy, bmesh, math, sys, os, json, time
from mathutils import Vector, Matrix, Euler, Quaternion
from bpy_extras.object_utils import world_to_camera_view

HERE = os.path.dirname(os.path.abspath(__file__))
argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
HALF = '--nohalf' not in argv          # rig 5m: half-swing wrist helper bone (see the skinning step)
ARMPALM = '--noarmpalm' not in argv    # rig 5m: arm end inside the cuff takes the weights of the nearest cuff OR palm verts
WRISTP = '--nowristpiece' not in argv   # rig 5o: white wrist piece bridging the cuff mouth to the palm; --nowristpiece = 5n
SEAT5P = WRISTP and '--noseat5p' not in argv   # rig 5p: wrist piece seated on the cuff rim + glove custom normals; --noseat5p = 5o piece
THUMB5Q = WRISTP and '--nothumbseat' not in argv   # rig 5q: piece closes the thumb-corner notch (lands in the thumb shell there); --nothumbseat = 5p
THUMB5R = THUMB5Q and '--nothumb5r' not in argv   # rig 5r: piece B ring covers the thumb-shell rim (limit-compensated, rim weights); --nothumb5r = 5q
THUMBSOFT = '--nothumbsoft' not in argv   # rig 5o: soften the binary thumb weight step at the thumb root (flap f165-176)
HSI, HSW = float(argv[argv.index('--hsi')+1]) if '--hsi' in argv else 0.5, float(argv[argv.index('--hsw')+1]) if '--hsw' in argv else 1.0                    # rig 5m: helper share of the hand swing / share of the split weight it takes
def opt(name, default):
    return argv[argv.index(name) + 1] if name in argv else default
BDEP5S = float(opt('--bdepth', '0.002'))   # rig 5s: ring B depth under the palm, non-thumb mouth verts (5r = 0.002)
M1T5S = float(opt('--m1t', '0.5'))         # rig 5s: ring M1 = M0.lerp(palm point, m1t) (5r = 0.5)
SEAT5S = float(opt('--seatoff', '0.0003'))   # rig 5s: M0 limit surface offset outside the mouth vert (5p-5r = 0.0003)
AIN5S = float(opt('--ain', '0.0015'))        # rig 5s: ring A inset toward the mouth centre (5o-5r = 0.0015)
# rig 5s PROBE FIX: sleeve_seen stepped 0.1 mm past each culled outline face; at sweep samples 53/58 the wrist piece's front face
# lay 0.09 mm behind the glove hull's culled back face on that ray, so the step jumped over it (camera-to-point hit list,
# NOTES Rig 5s). Step 0.01 mm, up to 12 culled faces. --seenstep4 = the 5o-5r probe (0.1 mm, 6 faces).
SEENSTEP5S, SEENK5S = (1e-4, 6) if '--seenstep4' in argv else (1e-5, 12)
OUT = opt('--out', 'D:/scratch 2026/her-c2/rig5i')
STAGE = opt('--stage', 'build')
TAG = opt('--tag', 'rig5i')
FAST = '--fast' in argv                 # build + numbers only: no renders, no blend, no glb
BLEND = opt('--blend', os.path.join(OUT, 'her-%s.blend' % TAG))   # rig 5r: --blend lets a probe stage read a parent blend and write to a subfolder --out
SHADOWQ = '--noshadowq' not in argv     # rig 5r: film path shadow quality (4 rays, 12 steps, filter radius 2) - the cuff-corner speckle; --noshadowq = 5q
os.makedirs(OUT, exist_ok=True)
FPS, NF = 24, 192                      # frames 0..191 = 8.0 s
SUP_LO, SUP_HI = -80.0, 85.0           # rig 5b: forearm pronation / supination from neutral (human 75-85 / 80-90)
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
def wrist_q(fl, sr, wd, wf, k, Hrel):
    """Hand local rotation (rig 5h). Rz(radial dev) Rx(flex) then the relax toward the forearm line (k), as before, but
    the wrist has NO axial twist of its own (that belongs to the forearm): the change in twist about the pronation
    axis (forearm_tw Y, seen from the hand through Hrel) relative to her art's rest hand is taken out, so the
    orientation is a pure swing from her rest wrist."""
    N = Vector((0, 1, 0)).rotation_difference(fl).to_matrix()
    qk = Quaternion().slerp(Vector((0, 1, 0)).rotation_difference(fl), k)
    Q = Matrix.Rotation(sr * wd * D2R, 3, 'Z') @ Matrix.Rotation(wf * D2R, 3, 'X') @ qk.to_matrix()
    def tw_of(Dv):
        q = Dv.to_quaternion(); return 2 * math.atan2(q.y, q.w)
    Dev0 = Hrel @ N.inverted() @ Hrel.inverted()
    Dev = Hrel @ Q @ N.inverted() @ Hrel.inverted()
    d = (tw_of(Dev) - tw_of(Dev0) + math.pi) % (2 * math.pi) - math.pi
    Dev2 = Dev @ Matrix.Rotation(-d, 3, 'Y')
    return Hrel.inverted() @ Dev2 @ Hrel @ N

TARGET = Vector((0, 0, 0.6))
def set_cam(cam, yaw_deg, d=3.6, target=TARGET, up=0.35, lens=85):
    yaw = math.radians(yaw_deg)
    cam.data.lens = lens
    cam.location = target + Vector((d * math.sin(yaw), -d * math.cos(yaw), up))
    cam.rotation_euler = (target - cam.location).to_track_quat('-Z', 'Y').to_euler()

def seam_parts(me):
    """rig 5l: loose parts of a mesh, its boundary verts, and the palm = the largest part with no boundary."""
    n = len(me.vertices); par = list(range(n))
    def fd(x):
        while par[x] != x:
            par[x] = par[par[x]]; x = par[x]
        return x
    for e in me.edges:
        a, b = fd(e.vertices[0]), fd(e.vertices[1])
        if a != b: par[a] = b
    part = [fd(i) for i in range(n)]
    cnt = {}
    for p in me.polygons:
        for ek in p.edge_keys: cnt[ek] = cnt.get(ek, 0) + 1
    bnd = {v for ek, c in cnt.items() if c == 1 for v in ek}
    sz = {}
    for p_ in part: sz[p_] = sz.get(p_, 0) + 1
    closed = [p_ for p_ in sz if not any(part[v] == p_ for v in bnd)]
    return {'part': part, 'boundary': sorted(bnd), 'palm': max(closed, key=lambda p_: sz[p_])}

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
        def at_s(sv):
            for i in range(len(cum) - 1):
                if cum[i + 1] >= sv:
                    return pts[i].lerp(pts[i + 1], (sv - cum[i]) / (cum[i + 1] - cum[i]))
            return pts[-1].copy()
        # rig 5: the glenohumeral pivot sits where her arm's centre line leaves the disc rim (rig 4 pivoted on the
        # first control point, 40-55 mm inside the disc); the elbow at 56 % of shoulder-to-wrist (human humerus)
        s_rim = next(cum[i] for i, p in enumerate(pts) if (p.x / RXd) ** 2 + ((p.z - ZCd) / RZd) ** 2 >= 1.0)
        s_gh = max(0.0, s_rim - float(opt('--ghin', '0.010')))
        half = s_gh + 0.56 * (cum[-1] - s_gh)
        gh = at_s(s_gh); elbow = at_s(half)
        print('RIG arm %d: s_rim %.1f mm, GH at s %.1f mm %s, elbow at s %.1f mm of %.1f' % (
            s, s_rim * 1000, s_gh * 1000, tuple(round(c, 4) for c in gh), half * 1000, cum[-1] * 1000))
        F, Np, thumb = GLOVE[s]
        F = Vector(F).normalized(); Npv = Vector(Np); Npv = (Npv - F * Npv.dot(F)).normalized()
        X = Npv.cross(F).normalized(); ts = 1 if X.dot(Vector(thumb)) > 0 else -1
        R = Matrix((X, -Npv, -F)).transposed()
        loc = lambda p, R=R, w=pts[-1]: R @ (Vector(p) * GS) + w
        ARMPTS[s] = (pts, cum)
        ARMS[s] = dict(shoulder=gh, elbow=elbow, wrist=pts[-1].copy(), s_elbow=half, L=cum[-1], s_gh=s_gh,
                       mid=elbow.lerp(pts[-1], 0.5), Np=Npv.copy(), F=F.copy(),
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
    AXO, ARM_R = float(opt('--axo', '0.15')), 0.031     # rig 5q: default 0.15 (was 0.25; 5p dropped the flag). rig 5h: axis offset (x arm radius) at the radial / ulnar head
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
        # rig 5: shoulder girdle (clavicle, deforming, animated) -> humerus -> elbow hinge -> two forearm twist
        # segments -> wrist. Elbow hinge = bone X: her left arm bends 40 deg in its rest plane, so its hinge is
        # that plane's normal; her right arm is nearly straight (9 deg), so its hinge flexes the forearm forward.
        u = (A['elbow'] - A['shoulder']).normalized(); f = (A['wrist'] - A['elbow']).normalized()
        h = u.cross(f).normalized() if s > 0 else f.cross(FWD).normalized()
        A['hinge_roll_deg'] = 0
        if s < 0:
            # rig 5b: her right arm is straight (0.3 deg), so its elbow axis is free. Rig 5's pure-forward hinge put
            # her art's rest palm at 109 deg of supination (past the human ~85). Turn the axis about the forearm
            # until the rest palm reads --rsup0 (85): the excess becomes humeral external rotation at rest.
            nn = (A['Np'] - f * A['Np'].dot(f)).normalized()
            def _sup(hh):
                bb = hh.cross(f).normalized(); mm = (-s * bb.cross(f)).normalized()
                return math.degrees(math.atan2(nn.dot(bb), nn.dot(mm)))
            tgt = float(opt('--rsup0', '85'))
            best = min(range(-90, 91), key=lambda a: (abs(_sup(Matrix.Rotation(a * D2R, 3, f) @ h) - tgt), abs(a)))
            h = (Matrix.Rotation(best * D2R, 3, f) @ h).normalized(); A['hinge_roll_deg'] = best
        A['hinge'] = h; A['bend'] = h.cross(u).normalized()
        A['rest_flex'] = math.degrees(math.atan2(u.cross(f).dot(h), u.dot(f)))
        # rig 5b: ANATOMICAL forearm rotation of her art's rest palm. bend = where the forearm tip moves on
        # flexion (h x f); medial = the medial-epicondyle side, -s (bend x f); palm normal (Np) projected off the
        # forearm axis; sup = atan2(n.bend, n.medial): 0 = neutral (palm to the midline, thumb up with the elbow
        # at 90), +90 = full supination (palm faces the flexion side), -90 = full pronation. Invariant under the
        # hinge and the humerus, so the forearm twist alone sets it: twist tau = -s (sup - sup0).
        bnd = h.cross(f).normalized(); med = (-s * bnd.cross(f)).normalized()
        n0 = (A['Np'] - f * A['Np'].dot(f)).normalized()
        A['sup0'] = math.degrees(math.atan2(n0.dot(bnd), n0.dot(med)))
        # rig 5h: the pronation axis runs from the RADIAL head (elbow, lateral = -med) to the ULNAR head (wrist, medial
        # = +med); med lies along the hinge axis, so the elbow end stays on the hinge. The ulna (forearm_) never twists;
        # the radius chain (forearm_tw1 -> tw2 -> forearm_tw, one third of the twist each) does, and the hand follows it.
        A['med'] = med.copy()
        A['ax0'] = A['elbow'] - med * (AXO * ARM_R); A['ax1'] = A['wrist'] + med * (AXO * ARM_R)
        bone('clavicle_' + S, A['shoulder'] - Vector((s * 0.09, 0, 0)), A['shoulder'], 'head')
        bone('upperarm_' + S, A['shoulder'], A['elbow'], 'clavicle_' + S, True)
        bone('forearm_' + S, A['elbow'], A['mid'], 'upperarm_' + S, True, roll=h.cross(f))
        Q = [A['ax0'].lerp(A['ax1'], k / 3.0) for k in range(4)]
        bone('forearm_tw1_' + S, Q[0], Q[1], 'forearm_' + S, False, roll=h.cross(f))
        bone('forearm_tw2_' + S, Q[1], Q[2], 'forearm_tw1_' + S, True, roll=h.cross(f))
        bone('forearm_tw_' + S, Q[2], Q[3], 'forearm_tw2_' + S, True, roll=h.cross(f))
        bone('hand_' + S, A['wrist'], A['knuckle'], 'forearm_tw_' + S, False, roll=A['Np'])   # Z = palm: +X flexes
        bone('fingers_' + S, A['knuckle'], A['tip'], 'hand_' + S, True, roll=A['Np'])
        if HALF:   # rig 5m: wrist helper, same rest frame as the hand, turns HSI of the hand's swing (Copy Rotation below)
            bone('wrist_' + S, A['wrist'], A['wrist'].lerp(A['knuckle'], 0.35), 'forearm_tw_' + S, False, roll=A['Np'])
        bone('thumb_' + S, A['thumb0'], A['thumb1'], 'hand_' + S, roll=A['Np'])
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
            elif kind == 'headrel':          # rig 5: rotation relative to the disc (thorax), joint from the chain
                Rh = (P['head'] @ REST['head'].inverted()).to_3x3().normalized()
                M = (Rh @ val @ REST[n].to_3x3()).to_4x4(); M.translation = inh.translation; P[n] = M
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
    # rig 5: each arm's axes measured on its own bones (never mirrored): the forearm hinge must be the same
    # axis at rest in the upper arm and the forearm frames, the hand's +X must curl the fingers toward the palm
    for s in (-1, 1):
        S = SIDE[s]; A = ARMS[s]
        assert (REST['forearm_' + S].col[0].to_3d() - A['hinge']).length < 1e-5, ('forearm_' + S, REST['forearm_' + S].col[0])
        for n in ('forearm_tw1_', 'forearm_tw2_', 'forearm_tw_'):     # rig 5h: tilted about the bend axis (<= 10 deg)
            assert REST[n + S].col[0].to_3d().angle(A['hinge']) < 0.2, (n + S, REST[n + S].col[0])
        assert REST['hand_' + S].col[2].to_3d().dot(A['Np']) > 0.999, ('hand roll', S)
        SIGN['radial_' + S] = -A['ts']            # hand local Z sign that turns the fingers toward the thumb
        print('RIG arm %s: hinge %s, rest elbow flexion %.1f deg, bend dir %s, rest forearm rotation %.1f deg '
              '(+ supination)' % (S, tuple(round(c, 3) for c in A['hinge']), A['rest_flex'],
                                  tuple(round(c, 3) for c in A['bend']), A['sup0']))

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
        a = SIGN['abd_' + S]; rf = ARMS[s]['rest_flex']; rd = SIGN['radial_' + S]
        # clavicle: X = protraction/retraction, Z = elevation/depression (bone Y runs out along the shoulder)
        LIM['clavicle_' + S] = (-15, 15, -10, 10, -30, 30)
        # humerus (YXZ: twist, then flexion, then abduction) about her pivot at the rim
        LIM['upperarm_' + S] = (-60, 170, -90, 90) + tuple(sorted((a * 150, -a * 60)))
        # elbow: pure hinge, 0-145 deg of flexion FROM STRAIGHT (her rest bend is rf), no hyperextension;
        # pronation/supination (Y) spread over forearm + forearm_tw, up to 85 each
        # rig 5b: the twist range is the HUMAN forearm range (pronation 80 / supination 85 from neutral, SUP_LO..
        # SUP_HI) taken relative to her art's rest palm (sup0) and split half-and-half over the two forearm bones.
        # Rig 5 allowed +-85 PER BONE (170 in total) and used 148.
        sup0 = ARMS[s]['sup0']
        tl = sorted((-s * (SUP_LO - sup0) / 3, -s * (SUP_HI - sup0) / 3))      # rig 5h: a third per radius segment
        tl = (min(0.0, tl[0]), max(0.0, tl[1]))
        # (min(0, -rf): the re-picked right axis reads her straight art arm as a slight rest hyperextension)
        LIM['forearm_' + S] = (min(0.0, -rf), 145 - rf, 0, 0, 0, 0)          # rig 5h: the ulna does not twist
        for n in ('forearm_tw1_', 'forearm_tw2_', 'forearm_tw_'):
            LIM[n + S] = (0, 0, tl[0], tl[1], 0, 0)
        print('RIG forearm %s: rest rotation %.1f, per-bone twist limit %.1f..%.1f' % (S, sup0, tl[0], tl[1]))
        # wrist: flexion/extension 70/70, radial 20 / ulnar 30 deviation, no twist of its own
        # measured from the NEUTRAL wrist (hand in line with the forearm), not from her art's rest hand, which
        # sits off that line; the art's rest (0) is kept inside. Y +-12: the euler coupling of flexion x deviation
        n0 = [math.degrees(a) for a in Vector((0, 1, 0)).rotation_difference(
            (REST['hand_' + S].to_3x3().inverted() @ (ARMS[s]['wrist'] - ARMS[s]['mid'])).normalized()).to_euler('XYZ')]
        dz = sorted((rd * 20, -rd * 30))
        LIM['hand_' + S] = (min(0, n0[0] - 70), max(0, n0[0] + 70), -12, 12,
                            min(0, n0[2] + dz[0]), max(0, n0[2] + dz[1]))
        print('RIG wrist %s: neutral (hand in forearm line) at local x %.1f z %.1f deg; limits %s' % (
            S, n0[0], n0[2], LIM['hand_' + S]))
        LIM['fingers_' + S] = (-30, 90, 0, 0, -20, 20)
        LIM['wrist_' + S] = (0, 0, 0, 0, 0, 0)      # rig 5m: never keyed; its pose is the Copy Rotation of the hand
        LIM['thumb_' + S] = (-20, 60, -10, 10, -30, 30)
        LIM['thigh_' + S] = (-20, 120, -40, 40, -30, 30)
        LIM['shin_' + S] = (-140, 0, 0, 0, 0, 0)            # hinge, flexion is -X, never past rest
        LIM['foot_' + S] = (-50, 20, -15, 15, -20, 20)      # plantar(-)/dorsi(+) flexion
        LIM['toe_' + S] = (-40, 70, 0, 0, 0, 0)
    for pb in arm.pose.bones:
        # shoulder: twist first; forearm: twist (Y) then the hinge (X) about its fixed rest axis
        pb.rotation_mode = 'YXZ' if pb.name.startswith(('upperarm', 'forearm')) else 'XYZ'
        c = pb.constraints.new('LIMIT_ROTATION'); c.owner_space = 'LOCAL'; c.euler_order = pb.rotation_mode
        l = LIM[pb.name]
        for i, ax in enumerate('xyz'):
            setattr(c, 'use_limit_' + ax, True)
            setattr(c, 'min_' + ax, l[2 * i] * D2R); setattr(c, 'max_' + ax, l[2 * i + 1] * D2R)
        if pb.name.startswith('wrist_'):
            c = pb.constraints.new('COPY_ROTATION'); c.target = arm; c.subtarget = 'hand_' + pb.name[-1]
            c.owner_space = c.target_space = 'LOCAL'; c.influence = HSI

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
    CFA, ARMHD = float(opt('--cfa', '1.0')), float(opt('--armhd', '0.0'))     # rig 5g: cuff / arm-end weights
    CUFFCAP, CAPR = ('--nocap' not in argv), float(opt('--capr', '0.55'))       # rig 5h: cuff mouth cap
    TUCK = '--tuck' in argv            # rig 5j/5k tuck, OFF from rig 5l: it bent the arm end, whose outline shell showed at rest
    CUFFCUTS, CUFFSM = int(opt('--cuffcuts', '0')), float(opt('--cuffsm', '1.0'))   # rig 5n: loop cuts per cuff band (off: x2 measured WORSE, seen 147/107 vs 34/27)
    SEAT = '--noseat' not in argv      # rig 5l: cuff hand-side mouth seated on the palm (weights), see the build step
    CUFZ, GLN, GLA = float(opt('--cufz', '0.045')), int(opt('--gln', '10')), float(opt('--gla', '0.6'))   # rig 5i
    def arm_w(A, S, a_, c, f, hd):
        """rig 5h: skin twist grows LINEARLY from 0 at the elbow to the full twist at the wrist (rig 5 put half the
        twist on the first forearm bone, so the skin twisted at the elbow): hat weights over the four twist stations
        (ulna 0, radius segments 1/3, 2/3, 1 of the twist) along the elbow -> wrist arc."""
        u = min(1.0, max(0.0, (a_ - A['s_elbow']) / (A['L'] - A['s_elbow']))) * 3.0
        hats = [max(0.0, 1.0 - abs(u - k)) for k in range(4)]
        names = ['forearm_' + S, 'forearm_tw1_' + S, 'forearm_tw2_' + S, 'forearm_tw_' + S]
        w = {'clavicle_' + S: c, 'upperarm_' + S: (1 - c) * (1 - f), 'hand_' + S: (1 - c) * f * hd}
        for n, h_ in zip(names, hats):
            w[n] = (1 - c) * f * (1 - hd) * h_
        return w
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
            # rig 5: girdle -> humerus around the pivot, a wide elbow blend (rig 4: +/-25 mm, a hard crease),
            # the forearm's twist spread along it, and the cuff end sharing the wrist with the hand
            a_ = best[1]; sg, se, sw = A['s_gh'], A['s_elbow'], A['L']
            c = 1 - smooth(sg - 0.015, sg + 0.008, a_)
            f = smooth(se - 0.035, se + 0.035, a_)
            hd = ARMHD * smooth(sw - 0.015, sw, a_)     # rig 5g: was 0.5 (arm end half on the hand)
            W.append(arm_w(A, S, a_, c, f, hd))
            ARC[s].append(a_)
        # rig 5c: soften the small elbow crease (~98 deg flexion) by relaxing the weights of the elbow ring
        # toward their mesh neighbours (edge-graph Laplacian, elbow +/- ELW only); the blend gets wider and
        # smoother, no vertex is moved, so the rest pose and the volume of the rest mesh are untouched
        ELW, ELN, ELA = float(opt('--elw', '0.14')), int(opt('--eln', '14')), float(opt('--ela', '0.8'))
        nv = len(W); nb = [[] for _ in range(nv)]
        for e in OBJ['arm_' + S].data.edges:
            nb[e.vertices[0]].append(e.vertices[1]); nb[e.vertices[1]].append(e.vertices[0])
        ring = [i for i in range(nv) if abs(ARC[s][i] - A['s_elbow']) < ELW]
        for _ in range(ELN):
            new = {}
            for i in ring:
                ks = set(W[i]);
                for j in nb[i]:
                    ks |= set(W[j])
                nw = {}
                for k in ks:
                    avg = sum(W[j].get(k, 0.0) for j in nb[i]) / max(1, len(nb[i]))
                    fall = 1 - smooth(0.5 * ELW, ELW, abs(ARC[s][i] - A['s_elbow']))   # fade out at the ring edge
                    nw[k] = W[i].get(k, 0.0) * (1 - ELA * fall) + avg * ELA * fall
                new[i] = nw
            for i, nw in new.items():
                W[i] = nw
        vg_set(OBJ['arm_' + S], W)
        SKIN['arm_' + S] = [(v.co.copy(), [(b, w) for b, w in wd.items() if w > 1e-6])
                            for v, wd in zip(OBJ['arm_' + S].data.vertices, W)]
        # rig 5h: CLOSE THE CUFF. The glove cuff is an open tube (r 44-47 mm) round a 31 mm arm; its elbow-side mouth
        # showed as a floating ring. Post-build mesh step (build_her.py untouched): a flat annulus in the glove material
        # from the mouth rim in to a ring INSIDE the arm (0.55 of the rim radius, about a point of the arm centre line),
        # rim edges creased so subsurf leaves the flared silhouette exactly as it was. The outer ring keeps the cuff
        # weights (forearm_tw), the inner ring takes the arm's own weights at that arc, so it never tears.
        CAPIN = {}
        if CUFFCAP:
            gob = OBJ['glove_' + S]; gm = gob.data
            Rg = A['R']; cz = A['wrist'] + Rg @ Vector((0, 0, 0.012 * GS))
            bmc = bmesh.new(); bmc.from_mesh(gm); bmc.verts.ensure_lookup_table()
            rim = [v for v in bmc.verts if any(len(e.link_faces) == 1 for e in v.link_edges)
                   and (Rg.transposed() @ (v.co - A['wrist']) / GS).z > 0.008]
            if CUFFCUTS > 0:
                # rig 5n: MORE CUFF RINGS. The cuff island (3 rings rim to mouth) is too coarse to bend with the palm: under
                # subsurf its mouth shrinks off the palm past ~28 deg of extension. Loop cuts on the cuff only (rings found
                # by BFS from the elbow rim; an edge joining two rings is longitudinal), smooth so the limit surface barely
                # moves. UVs / materials interpolate. Done before the cap, so the cap stays the glove's last 13 verts.
                ring_, fr_ = {v: 0 for v in rim}, list(rim)
                while fr_:
                    nx_ = []
                    for v in fr_:
                        for e in v.link_edges:
                            o_ = e.other_vert(v)
                            if o_ not in ring_: ring_[o_] = ring_[v] + 1; nx_.append(o_)
                    fr_ = nx_
                lon_ = list({e for v in ring_ for e in v.link_edges if ring_[e.verts[0]] != ring_[e.verts[1]]})
                nr0_ = max(ring_.values()) + 1
                bmesh.ops.subdivide_edges(bmc, edges=lon_, cuts=CUFFCUTS, smooth=CUFFSM, use_grid_fill=True)
                bmc.verts.ensure_lookup_table()
                print('RIG cuff rings %s: %d rings -> %d (%d longitudinal edges cut x%d, smooth %.2f)' % (
                    S, nr0_, nr0_ + (nr0_ - 1) * CUFFCUTS, len(lon_), CUFFCUTS, CUFFSM))
                rim = [v for v in bmc.verts if any(len(e.link_faces) == 1 for e in v.link_edges)      # the op re-makes verts
                       and (Rg.transposed() @ (v.co - A['wrist']) / GS).z > 0.008]
            assert len(rim) == 12, ('cuff rim', len(rim))
            xa, ya = Rg @ Vector((1, 0, 0)), Rg @ Vector((0, 1, 0))
            rim.sort(key=lambda v: math.atan2((v.co - cz).dot(ya), (v.co - cz).dot(xa)))
            best = (1e9, 0.0, None)
            for i in range(len(pts) - 1):
                a_, b_ = pts[i], pts[i + 1]; ab_ = b_ - a_
                u_ = max(0.0, min(1.0, (cz - a_).dot(ab_) / ab_.length_squared))
                d_ = (cz - (a_ + ab_ * u_)).length
                if d_ < best[0]:
                    best = (d_, cum[i] + u_ * ab_.length, a_ + ab_ * u_)
            ca = best[2]
            inn = [bmc.verts.new(ca + (v.co - cz) * CAPR) for v in rim]
            ctr = bmc.verts.new(sum((v.co for v in inn), Vector()) / 12)     # rig 5j: the cap is a CLOSED disc, no hole
            nout = Rg @ Vector((0, 0, 1))                      # toward the elbow
            for k in range(12):
                k2 = (k + 1) % 12
                quad = [rim[k], rim[k2], inn[k2], inn[k]]
                fc = bmc.faces.new(quad)
                if fc.normal.dot(nout) < 0:
                    fc.normal_flip()
                fc = bmc.faces.new([inn[k], inn[k2], ctr])
                if fc.normal.dot(nout) < 0:
                    fc.normal_flip()
            cl = bmc.edges.layers.float.get('crease_edge') or bmc.edges.layers.float.new('crease_edge')
            for k in range(12):
                for e in rim[k].link_edges:
                    if e.other_vert(rim[k]) is rim[(k + 1) % 12]:
                        e[cl] = 1.0
            rr_ = CAPR * (rim[0].co - cz).length * 1000
            bmc.to_mesh(gm); bmc.free()
            n0_ = len(gm.vertices) - 13
            for k in range(13):
                CAPIN[n0_ + k] = best[1]
            CAPINNER = set(CAPIN)
            # rig 5j: TUCK the arm end under the cap. The arm used to run on past the cap plane to the wrist, inside the
            # cuff well, where the tilted hand opened a gap onto it (orange in the mouth at full pronation). Every arm
            # vertex on the hand side of the cap plane is flattened onto a plane 1.2 mm on the elbow side of it, and takes
            # the cap's own weights, so arm tip and cap move as one and the arm never reaches past the cap.
            cw_ = arm_w(A, S, best[1], 0.0, 1.0, 0.0)
            cw_ = {k_: v_ for k_, v_ in cw_.items() if k_ in ('forearm_tw2_' + S, 'forearm_tw_' + S) and v_ > 0}
            ct_ = sum(cw_.values()) or 1.0; CAPW = {k_: v_ / ct_ for k_, v_ in cw_.items()}
            # rig 5k: the 5j flatten folded the arm end onto one plane; the fold showed through the mouth as a dark shard
            # (rest diff 42 px, supination +60..+85). Now the faces lying WHOLLY past the cap plane are DELETED (the
            # part under the glove; vertex indices kept, so ARC/SOCKET/SKIN stay aligned), the straddling faces are
            # clamped: their hand-side verts sit on a plane 0.3 mm hand-side of the cap (hidden behind the cap disc) and
            # take the cap's weights. The tube therefore ends cleanly with monotonic rings, no fold.
            if TUCK:
                ao_ = OBJ['arm_' + S]; nt_ = 0; past_ = set()
                for vi_, v in enumerate(ao_.data.vertices):
                    q = Rg.transposed() @ (v.co - A['wrist']) / GS
                    if q.z < 0.012 + 0.0004:
                        past_.add(vi_)
                bma = bmesh.new(); bma.from_mesh(ao_.data); bma.verts.ensure_lookup_table(); bma.faces.ensure_lookup_table()
                dead_ = [f for f in bma.faces if all(v.index in past_ for v in f.verts)]
                nf0_ = len(bma.faces)
                bmesh.ops.delete(bma, geom=dead_, context='FACES_ONLY')
                nv0_ = len(bma.verts)
                bma.to_mesh(ao_.data); bma.free()
                assert len(ao_.data.vertices) == nv0_, ('arm vertex count changed', nv0_, len(ao_.data.vertices))   # indices must survive
                for vi_ in past_:
                    v = ao_.data.vertices[vi_]
                    q = Rg.transposed() @ (v.co - A['wrist']) / GS
                    v.co = A['wrist'] + Rg @ (Vector((q.x, q.y, 0.012 - 0.0003)) * GS)
                    W[vi_] = dict(CAPW); nt_ += 1
                vg_set(ao_, W)
                SKIN['arm_' + S] = [(v.co.copy(), [(b, w) for b, w in wd.items() if w > 1e-6]) for v, wd in zip(ao_.data.vertices, W)]
                print('RIG arm tuck %s: %d arm verts clamped, %d of %d faces deleted (past the cap plane)' % (S, nt_, len(dead_), nf0_))
            print('RIG cuff cap %s: 12 rim verts closed, arm centre-line offset %.1f mm, inner ring r %.1f mm at arc %.1f mm' % (
                S, best[0] * 1000, rr_, best[1] * 1000))
        W = []
        a0, a1 = Vector((A['ts'] * 0.03, -0.006, -0.03)), Vector((A['ts'] * 0.068, -0.02, -0.066))
        for vi_, v in enumerate(OBJ['glove_' + S].data.vertices):
            if vi_ in CAPIN:
                W.append(arm_w(A, S, CAPIN[vi_], 0.0, 1.0, 0.0)); continue
            q = A['R'].transposed() @ (v.co - A['wrist']) / GS
            ab = a1 - a0; u = max(0.0, min(1.0, (q - a0).dot(ab) / ab.length_squared))
            if (q - (a0 + ab * u)).length < 0.017 and A['ts'] * q.x > 0.022 and -q.z > 0.02:
                W.append({'thumb_' + S: 1.0})
            else:
                f = smooth(0.06, 0.08, -q.z)
                # rig 5g: the cuff moves with the FOREARM (cf 1.0; rig 5 shared it 50/50 with the hand, so the cuff
                # mouth tilted half-way with every wrist bend and opened over the arm end: the "detached ring" the
                # refuter saw at f170-176). Together with hd 0 below the arm end stays coaxial inside the cuff; the
                # glove blends to the hand over the 25 mm past the wrist (the real wrist joint).
                cf = CFA * (1 - smooth(0.0, CUFZ, -q.z))
                W.append({'forearm_tw_' + S: cf, 'hand_' + S: (1 - cf) * (1 - f), 'fingers_' + S: (1 - cf) * f})
        # rig 5i: smooth the glove weights across the cuff, the cap and the wrist blend (edge-graph Laplacian, rest
        # mesh untouched). The cap stays on the DISTAL RADIUS bones only (tw2 / tw_S): the ulna and the proximal
        # radius segment never reach it, so the cap cannot fold against the arm as the radius turns.
        gne = OBJ['glove_' + S].data; gnb = [[] for _ in range(len(W))]
        for e in gne.edges:
            gnb[e.vertices[0]].append(e.vertices[1]); gnb[e.vertices[1]].append(e.vertices[0])
        smset = []
        for vi_, v in enumerate(gne.vertices):
            if vi_ in CAPIN or ('thumb_' + S) in W[vi_]:
                continue
            q = A['R'].transposed() @ (v.co - A['wrist']) / GS
            if -0.03 < -q.z < 0.06:        # 0.03 above the wrist (cuff) to 0.06 below it: cuff + wrist blend
                smset.append(vi_)
        capset = list(CAPIN)
        for _ in range(GLN):
            new = {}
            for i in smset + capset:
                ks = set(W[i])
                for j in gnb[i]:
                    if ('thumb_' + S) not in W[j]:
                        ks |= set(W[j])
                avg = {k: sum(W[j].get(k, 0.0) for j in gnb[i] if ('thumb_' + S) not in W[j]) /
                       max(1, sum(1 for j in gnb[i] if ('thumb_' + S) not in W[j])) for k in ks}
                new[i] = {k: W[i].get(k, 0.0) * (1 - GLA) + avg[k] * GLA for k in ks}
            for i, nw in new.items():
                W[i] = nw
        allow = {'forearm_tw2_' + S, 'forearm_tw_' + S}
        for i in capset:
            w = {k: v for k, v in W[i].items() if k in allow and v > 0}
            tot = sum(w.values()) or 1.0
            W[i] = {k: v / tot for k, v in w.items()}
            if i in CAPINNER:
                W[i] = dict(CAPW)                          # inner ring + centre = the tucked arm end's weights, exactly
        if THUMBSOFT:
            # rig 5o: THUMB-ROOT FLAP (f165-176, measured diag5o): the thumb test above is binary, so across ONE edge a vert
            # goes thumb_S 1.0 -> forearm_tw/wrist (verts 407/408 vs 417/418 on the right glove, edge ratio up to 3.15 as the
            # thumb and wrist move). Soften that step only: a band (thumb verts touching non-thumb verts, plus 2 rings of
            # non-thumb verts, cuff part and cap excluded) takes 6 Jacobi half-steps of its neighbours' mean. Rest mesh untouched.
            tk_ = 'thumb_' + S; pt_ = seam_parts(gne)['part']; cp0_ = pt_[len(W) - 1]
            ist_ = lambda i: W[i].get(tk_, 0.0) > 0.999
            r1_ = {j for i in range(len(W)) if ist_(i) for j in gnb[i] if not ist_(j)}
            r2_ = {k for j in r1_ for k in gnb[j] if not ist_(k)} | r1_
            r0_ = {i for j in r1_ for i in gnb[j] if ist_(i)}
            band_ = [i for i in r0_ | r2_ if i not in CAPIN and pt_[i] != cp0_]
            for _ in range(6):
                new = {}
                for i in band_:
                    ks = set(W[i]).union(*(W[j] for j in gnb[i]))
                    new[i] = {k: 0.5 * W[i].get(k, 0.0) + 0.5 * sum(W[j].get(k, 0.0) for j in gnb[i]) / len(gnb[i]) for k in ks}
                for i, nw in new.items(): W[i] = nw
            print('RIG thumb root %s: %d band verts softened' % (S, len(band_)))
        # rig 5l: ROOT CAUSE of the gaping cuff. The glove is six loose parts; the cuff is its own open tube whose HAND-SIDE
        # mouth (a 45-deg tilted loop) only rests against the palm part. Edge-graph smoothing (5i) never crosses loose parts,
        # so it pulled the cap's forearm weights down the whole cuff: mouth ~0.82 forearm_tw vs the palm under it ~0.55 hand
        # (L1 weight gap 0.87). Pronation turned the palm away from the mouth and the sleeve opened onto the arm inside.
        # Fix: the mouth takes the palm's own weights at its spot (3 nearest palm verts, inverse distance), the cuff between
        # mouth and elbow rim is a harmonic blend (rim and mouth pinned), so the cuff stays seated at any twist. Rest mesh untouched.
        # rig 5m: HALF-SWING wrist. Wherever a glove vert splits between forearm_tw* and hand, the shared part min(fore, hand)
        # of each moves onto wrist_S, a rigid bone that turns HSI (0.5) of the hand's swing: at small angles this equals the
        # old blend, at deep flexion / extension it no longer collapses (linear-blend volume loss), so the cuff, the palm
        # under its mouth and the arm end inside it keep their shape and stay nested. Rest mesh untouched.
        if HALF:
            for i_, w_ in enumerate(W):
                fa_ = sum(v for k, v in w_.items() if k.startswith('forearm_tw')); h_ = w_.get('hand_' + S, 0.0)
                m_ = min(fa_, h_) * HSW
                if m_ > 1e-6:
                    nw = {k: (v * (1 - m_ / fa_) if k.startswith('forearm_tw') else v) for k, v in w_.items()}
                    nw['hand_' + S] = h_ - m_; nw['wrist_' + S] = 2 * m_; W[i_] = nw
        if CUFFCAP and SEAT:
            from mathutils import kdtree
            gme = OBJ['glove_' + S].data; nv_ = len(gme.vertices)
            part_ = seam_parts(gme)
            cuffp_ = part_['part'][nv_ - 1]
            mouth_ = [i for i in part_['boundary'] if part_['part'][i] == cuffp_ and i not in CAPIN]
            palm_ = [i for i in range(nv_) if part_['part'][i] == part_['palm']]
            rim_ = {j for i in CAPIN for j in gnb[i] if j not in CAPIN}
            kdp_ = kdtree.KDTree(len(palm_))
            for k_, i in enumerate(palm_): kdp_.insert(gme.vertices[i].co, k_)
            kdp_.balance()
            for i in mouth_:
                nw, tw_ = {}, 0.0
                for co_, k_, d_ in kdp_.find_n(gme.vertices[i].co, 3):
                    wt_ = 1.0 / max(d_, 1e-4); tw_ += wt_
                    for b_, x_ in W[palm_[k_]].items(): nw[b_] = nw.get(b_, 0.0) + x_ * wt_
                W[i] = {b_: x_ / tw_ for b_, x_ in nw.items()}
            mid_ = [i for i in range(nv_) if part_['part'][i] == cuffp_ and i not in CAPIN and i not in rim_ and i not in set(mouth_)]
            for _ in range(80):
                new = {}
                for i in mid_:
                    ks = set().union(*(W[j] for j in gnb[i]))
                    new[i] = {k: sum(W[j].get(k, 0.0) for j in gnb[i]) / len(gnb[i]) for k in ks}
                for i, nw in new.items(): W[i] = nw
            print('RIG cuff seat %s: mouth %d verts on the palm, %d mid, %d rim' % (S, len(mouth_), len(mid_), len(rim_)))
            # the arm end past the cap (inside the closed cuff, never seen) takes the cuff's weights at its spot (3 nearest
            # cuff verts, inverse distance), so a wrist bend that tilts the seated mouth carries the arm end with it and the
            # arm cannot poke out through the cuff wall. Rest mesh untouched; the arm outside the cuff keeps its own weights.
            ao_ = OBJ['arm_' + S]; Wa_ = [dict(l_) for _c, l_ in SKIN['arm_' + S]]
            cuv_ = [i for i in range(nv_) if part_['part'][i] == cuffp_ and i not in CAPIN]
            if ARMPALM:   # rig 5m: the arm TIP (at the wrist) lies under the palm's proximal end, so it follows what covers it
                cuv_ += palm_
            kdc_ = kdtree.KDTree(len(cuv_))
            for k_, i in enumerate(cuv_): kdc_.insert(gme.vertices[i].co, k_)
            kdc_.balance(); na_ = 0
            for vi_, v in enumerate(ao_.data.vertices):
                if (Rg.transposed() @ (v.co - A['wrist']) / GS).z >= 0.012 + 0.0004:
                    continue
                nw, tw_ = {}, 0.0
                for co_, k_, d_ in kdc_.find_n(v.co, 3):
                    wt_ = 1.0 / max(d_, 1e-4); tw_ += wt_
                    for b_, x_ in W[cuv_[k_]].items(): nw[b_] = nw.get(b_, 0.0) + x_ * wt_
                Wa_[vi_] = {b_: x_ / tw_ for b_, x_ in nw.items()}; na_ += 1
            vg_set(ao_, Wa_)
            SKIN['arm_' + S] = [(v.co.copy(), [(b_, w_) for b_, w_ in wd.items() if w_ > 1e-6]) for v, wd in zip(ao_.data.vertices, Wa_)]
            print('RIG arm end %s: %d verts past the cap take the cuff weights' % (S, na_))
            if WRISTP:
                # rig 5o: WRIST PIECE (owner ruling 2026-09-30). The build leaves the cuff mouth up to 19.95 mm off the palm on
                # its far side; the arm shows through that gap. A slim white tube bridges it: ring A 4 mm up inside the cuff,
                # ring M0 just under the cuff rim, ring M1 half way, ring B 2 mm inside the palm at the palm point nearest each
                # mouth vert. Both ends are buried, so only the strip across the gap shows. The glove's own white material,
                # the glove's subsurf, no outline hull. Weights: A/M0 = cuff (IDW), B = palm (IDW), M1 = the mean. Rest glove untouched.
                from mathutils.bvhtree import BVHTree as _BVH
                gl_ = OBJ['glove_' + S]; mset_ = set(mouth_); ecnt_ = {}
                for p_ in gme.polygons:
                    for ek_ in p_.edge_keys: ecnt_[ek_] = ecnt_.get(ek_, 0) + 1
                adj_ = {i: [] for i in mouth_}
                for (a_, b_), c_ in ecnt_.items():
                    if c_ == 1 and a_ in mset_ and b_ in mset_: adj_[a_].append(b_); adj_[b_].append(a_)
                loop_ = [mouth_[0]]
                while len(loop_) < len(mouth_):
                    nx_ = [j for j in adj_[loop_[-1]] if j not in loop_]
                    assert nx_, ('mouth loop broken', S, loop_)
                    loop_.append(nx_[0])
                co_ = lambda i: gme.vertices[i].co.copy()
                cen_ = sum((co_(i) for i in loop_), Vector()) / len(loop_)
                pf_ = [p_ for p_ in gme.polygons if part_['part'][p_.vertices[0]] == part_['palm']]
                pc_ = sum((co_(i) for i in palm_), Vector()) / len(palm_)
                bvh_ = _BVH.FromPolygons([v.co for v in gme.vertices], [tuple(p_.vertices) for p_ in pf_])
                cuo_ = [i for i in range(nv_) if part_['part'][i] == cuffp_ and i not in CAPIN]
                kdu_ = kdtree.KDTree(len(cuo_))
                for k_, i in enumerate(cuo_): kdu_.insert(gme.vertices[i].co, k_)
                kdu_.balance()
                def idw_(kd_, ids_, p_):
                    nw, tw_ = {}, 0.0
                    for _c, k_, d_ in kd_.find_n(p_, 3):
                        wt_ = 1.0 / max(d_, 1e-4); tw_ += wt_
                        for b_, x_ in W[ids_[k_]].items(): nw[b_] = nw.get(b_, 0.0) + x_ * wt_
                    return {b_: x_ / tw_ for b_, x_ in nw.items()}
                # rig 5q: THUMB-CORNER NOTCH. The thumb shell's open base loop (a glove boundary, thumb-weighted) reaches the cuff
                # mouth at the thumb corner and stands ~5.9 mm outside the piece there: a dark notch at rest, a white lip once
                # the wrist extends (the rim follows the thumb, the piece the cuff). Where that rim lies within 8 mm of a mouth
                # vert, ring B lands inside the thumb shell (palm + thumb faces, palm + thumb IDW weights), so the piece meets it.
                thb_ = []
                if THUMB5Q:
                    tb_ = 'thumb_' + S
                    _pm = {}
                    for i in range(nv_):
                        q_ = part_['part'][i]; _pm.setdefault(q_, []).append(W[i].get(tb_, 0.0) / max(sum(W[i].values()), 1e-9))
                    thp_ = max((q_ for q_ in _pm if q_ not in (part_['palm'], cuffp_)), key=lambda q_: sum(_pm[q_]) / len(_pm[q_]))
                    thv_ = [i for i in range(nv_) if part_['part'][i] == thp_]
                    thb_ = [i for i in part_['boundary'] if part_['part'][i] == thp_]
                    ptf_ = [p_ for p_ in gme.polygons if part_['part'][p_.vertices[0]] in (part_['palm'], thp_)]
                    bvt_ = _BVH.FromPolygons([v.co for v in gme.vertices], [tuple(p_.vertices) for p_ in ptf_])
                    ptv_ = palm_ + thv_; kdt_ = kdtree.KDTree(len(ptv_))
                    for k_, i in enumerate(ptv_): kdt_.insert(gme.vertices[i].co, k_)
                    kdt_.balance()
                tc_ = None
                NTH_ = []
                RA, RM0, RM1, RB, WA, WB, NM, NB = [], [], [], [], [], [], [], []
                for i in loop_:
                    m_ = co_(i); inn_ = [j for j in gnb[i] if j not in mset_ and part_['part'][j] == cuffp_]
                    up_ = (sum((co_(j) for j in inn_), Vector()) / len(inn_) - m_).normalized()
                    a_ = m_ + up_ * 0.004; a_ += (cen_ - a_).normalized() * AIN5S
                    m0_ = m_ + (cen_ - m_).normalized() * 0.001
                    th_ = bool(thb_) and min((co_(j) - m_).length for j in thb_) < 0.008
                    loc_, nr_, _fi, _d = bvh_.find_nearest(m_)
                    if th_:   # land ring B 2 mm inside the thumb shell just past its nearest rim vert: the piece closes up to the rim
                        j_ = min(thb_, key=lambda j: (co_(j) - m_).length); tc_ = sum((co_(j) for j in thv_), Vector()) / len(thv_)
                        loc_, nr_, _fi, _d = bvt_.find_nearest(co_(j_) + (tc_ - co_(j_)).normalized() * 0.002)
                        NTH_.append((i, j_))
                    if nr_.dot(loc_ - (tc_ if th_ else pc_)) < 0: nr_ = -nr_                 # outward
                    b_ = loc_ - nr_ * (0.002 if th_ else BDEP5S)   # rig 5s: --bdepth (m), non-thumb B depth under the palm
                    m1_ = m0_.lerp(loc_, M1T5S)                    # rig 5s: --m1t, M1 position between M0 and the palm point
                    # rig 5p: SEAT M0 ON THE CUFF. Subsurf pulls an inner ring toward (A + M1) / 6, which sank the piece ~2 mm under
                    # the cuff rim; the rim then cast a speckled seam line. Pre-compensate so the LIMIT surface sits 0.3 mm
                    # outside the mouth vert (inside the 5 mm ink hull, so the silhouette cannot move).
                    if SEAT5P: m0_ = (m_ + gme.vertices[i].normal * SEAT5S - (a_ + m1_) / 6.0) * 1.5
                    RA.append(a_); RM0.append(m0_); RM1.append(m1_); RB.append(b_); NM.append(gme.vertices[i].normal.copy()); NB.append(nr_.normalized())
                    WA.append(idw_(kdu_, cuo_, m_)); WB.append(idw_(kdt_, ptv_, loc_) if th_ else idw_(kdp_, palm_, loc_))
                # rig 5r: the 5q B ring still sat inside the thumb shell with palm+thumb IDW weights, so the shell's open rim
                # stood 3.7-5 mm OUT of the piece (diag_seat f0-f144). At each thumb-corner mouth vert the B ring's LIMIT point
                # now sits 0.3 mm outside the rim vert itself (boundary limit = (B[k-1] + 4 B[k] + B[k+1]) / 6, solved for B[k])
                # and B takes the rim vert's own weights, so the piece covers the rim and moves with it. --nothumb5r = 5q.
                if THUMB5R:
                    for i, j_ in NTH_:
                        k_ = loop_.index(i); L_ = co_(j_) + NB[k_] * 0.0003
                        RB[k_] = (L_ * 6.0 - RB[k_ - 1] - RB[(k_ + 1) % len(loop_)]) / 4.0
                        WB[k_] = dict(W[j_])
                    print('RIG thumb5r', S, [(i, j_) for i, j_ in NTH_])
                n_ = len(loop_); VW_ = RA + RM0 + RM1 + RB
                WM1 = [{k: 0.5 * a.get(k, 0.0) + 0.5 * b.get(k, 0.0) for k in set(a) | set(b)} for a, b in zip(WA, WB)]
                WW_ = WA + WA + WM1 + WB
                FW_ = [(r * n_ + k, r * n_ + (k + 1) % n_, (r + 1) * n_ + (k + 1) % n_, (r + 1) * n_ + k) for r in range(3) for k in range(n_)]
                out_ = sum(1 if (VW_[f[1]] - VW_[f[0]]).cross(VW_[f[3]] - VW_[f[0]]).dot(VW_[f[0]] - cen_) > 0 else -1 for f in FW_)
                if out_ < 0: FW_ = [f[::-1] for f in FW_]
                wme_ = bpy.data.meshes.new('wristpiece_' + S); wme_.from_pydata([tuple(v) for v in VW_], [], FW_); wme_.update()
                pmi_ = pf_[0].material_index; wme_.materials.append(gme.materials[pmi_])
                for p_ in wme_.polygons: p_.use_smooth = True
                if SEAT5P:   # rig 5p: CUSTOM NORMALS = the glove's own. A/M0 take the mouth vert's normal, B the palm's, M1 the mean,
                    # so the piece shades as the cuff flowing into the palm, not a funnel facing away from the key light.
                    NMID_ = [(a + b).normalized() for a, b in zip(NM, NB)]
                    NW_ = NM + NM + NMID_ + NB
                    wme_.normals_split_custom_set_from_vertices(NW_)
                wp_ = bpy.data.objects.new('wristpiece_' + S, wme_); gl_.users_collection[0].objects.link(wp_)
                wp_.matrix_world = gl_.matrix_world.copy()
                for m_ in gl_.modifiers:
                    if m_.type == 'SUBSURF':
                        sm_ = wp_.modifiers.new('subsurf', 'SUBSURF'); sm_.levels, sm_.render_levels = m_.levels, m_.render_levels
                        sm_.use_custom_normals = SEAT5P
                vg_set(wp_, WW_); CHAR.append(wp_); OBJ[wp_.name] = wp_
                print('RIG wrist piece %s: thumb-seated mouth verts %s' % (S, NTH_))
                print('RIG wrist piece %s: loop %s' % (S, loop_))
                print('RIG wrist piece %s: %d verts, %d faces, mat %s, gap max %.2f mm' % (S, len(VW_), len(FW_), gme.materials[pmi_].name,
                      max((RB[k] - co_(i)).length for k, i in enumerate(loop_)) * 1000))
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
    LAG = float(opt('--lag', '0.11'))       # rig 5c: human-true bob (~14 mm on a 0.25 m leg), was 0.10
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
    # rig 5b: the LOWER is slower and layered: the humerus leads over LD frames (rig 5: 14, glove 133 mm/frame
    # at f173 as the wrist flopped), the elbow follows EL frames behind, the wrist WL behind (soft lag, no flop)
    # rig 5d: the RAISE is slower and layered like the lower: the humerus (shoulder) leads over UPN frames (5c: the
    # quintic ease over 14 moved in ~8 and the glove hit 100.8 mm/frame), the elbow follows EU frames behind, the
    # wrist WU behind; a cubic smoothstep (peak 1.5x the mean speed, not 1.875x); the anticipation dip is a touch
    # deeper and earlier. The wave (env, phase) starts when the humerus arrives.
    R_UP, R_DN = int(opt('--rup', '112')), int(opt('--rdn', '156'))
    LD, EL, WL = int(opt('--ld', '24')), int(opt('--el', '3')), int(opt('--wl', '5'))
    UPN, EU, WU = int(opt('--upn', '18')), int(opt('--eu', '2')), int(opt('--wu', '5'))
    # rig 5e: the elbow and the forearm twist get their OWN durations (forearm_R was 8.57 deg/frame on the raise and
    # 8.1 on the lower, limit 8): the elbow starts 2 frames behind the humerus and takes ELN frames, the lower
    # takes ELD / WLD frames. The humerus raise (UPN 18) is untouched.
    ELN, ELD, WLD = int(opt('--eln', '22')), int(opt('--eld', '28')), int(opt('--wld', '28'))
    ANTD = float(opt('--antd', '10'))
    LOWB = float(opt('--lowb', '0.85'))             # rig 5g: lower - bend-side lag (0 = off, 5f behaviour)
    def ease3(a, b, t):
        x = min(1.0, max(0.0, (t - a) / (b - a)))
        return x * x * (3 - 2 * x)
    W0 = R_UP + UPN                                   # wave phase / envelope start
    r = [ease3(R_UP, R_UP + UPN, t) * (1 - ease(R_DN, R_DN + LD, t)) + 0.04 * bump(W0 - 2, W0 + 10, t)
         + 0.03 * bump(R_DN - 8, R_DN + 4, t) for t in frames]
    r_el = [ease3(R_UP + EU, R_UP + EU + ELN, t) * (1 - ease(R_DN + EL, R_DN + EL + ELD, t)) for t in frames]
    r_wr = [ease3(R_UP + WU, R_UP + WU + int(opt('--wun', '20')), t) * (1 - ease(R_DN + WL, R_DN + WL + WLD, t)) for t in frames]
    ant = [bump(R_UP - 10, R_UP + 4, t) for t in frames]
    tilt = spring([3.0 * x for x in r], 1.4, 0.6, 0.0)
    def env(t):
        return smooth(W0 + 2, W0 + 12, t) * (1 - smooth(R_DN - int(opt('--envo', '12')), R_DN - int(opt('--envo2', '0')), t))   # rig 5b: softer in/out
    # ---------------------------------------------------------- rig 5 arms: per-frame INTENTS in disc space
    # U = humerus direction, B = the side the elbow bends to, flex = elbow flexion from straight, Pm = where the
    # palm faces, k = wrist relaxed toward the forearm line (0 = her art), wf/wd = wrist flexion / radial
    # deviation, curl/thumb = finger curl, ce/cp = clavicle elevation / protraction. Rest intents = her art.
    def perp(v, a):
        return (v - a * v.dot(a)).normalized()
    ARM0 = {s: dict(U=(ARMS[s]['elbow'] - ARMS[s]['shoulder']).normalized(), B=ARMS[s]['bend'].copy(),
                    flex=ARMS[s]['rest_flex'], sup=ARMS[s]['sup0'], k=0.0, wf=0.0, wd=0.0, curl=0.0,
                    thumb=0.0, ce=0.0, cp=0.0) for s in (-1, 1)}
    def mix(a, b, w):
        if w <= 0:
            return a
        if w >= 1:
            return b
        return {k: (a[k].slerp(b[k], w, a[k].lerp(b[k], w)) if isinstance(a[k], Vector) else a[k] + (b[k] - a[k]) * w)
                for k in a}
    ARMP = {'hang': 18.0, 'wave_el': 84.0, 'wave_pl': 20.0}   # searched below (clip / glove gap)
    wk = [smooth(2, 28, t) * (1 - smooth(88, 110, t)) for t in frames]   # slow: her left arm turns ~80 deg
    swg = {s: [s * gam[max(t - 1, 0)] / 6.0 for t in frames] for s in (-1, 1)}   # +1 = this arm forward
    def walk_int(s, t):
        """Walking arm: hangs, swings opposite the same-side leg mostly at the shoulder (flexion 22 / extension
        14), elbow a little bent and more on the forward swing (lagged), hand and fingers relaxed and lagging."""
        sw = swg[s][t]; sw2 = swg[s][max(t - 2, 0)]; sw4 = swg[s][max(t - 4, 0)]
        eh = ARMP['hang'] * D2R; psi = (4 + 18 * sw) * D2R
        Rs = Matrix.Rotation(-psi, 3, 'X')
        U = Rs @ Vector((s * math.sin(eh), 0, -math.cos(eh)))
        # rig 5b: the relaxed humerus is a little internally rotated - the elbow crease faces forward-MEDIAL
        # (~30 deg, --walkbm 0.6; rig 5: 0.3), so the palm meets the thigh with less forearm twist
        B = perp(Rs @ Vector((-s * float(opt('--walkbm', '0.6')), -1, 0)), U)
        # rig 5b: palm to the thigh - an anatomical angle, never a world target. With the crease ~30 deg medial,
        # palm-to-thigh reads about +30 of supination; +20 turns it a touch back (relaxed)
        # rig 5b: a SMOOTH positive part of the swing (max(0, sw) kinked the elbow speed 0 -> 3 deg/frame)
        sp = 0.5 * (sw2 + math.sqrt(sw2 * sw2 + 0.04)) - 0.1
        return dict(U=U, B=B, flex=18 + 13.2 * sp, sup=float(opt('--walksup', '20')),
                    k=float(opt('--walkk', '0.88')) if s < 0 else 0.35, wf=10 * (sw4 - sw) + 8, wd=0.0, curl=40.0 if s < 0 else 25.0,
                    thumb=20.0, ce=0.0, cp=3.0 * sw)
    def wave_int(t, rl):
        """Right-hand wave: humerus in the scapular plane with the elbow at shoulder height, forearm up, palm to
        the front; the wave is elbow flexion in that plane (inward 8 / outward 22, her disc is in the way inward) with a lagged wrist wag."""
        al = (ARMP['wave_el'] + 40 * max(0.0, r[t] - 1)) * D2R
        ph = 2 * math.pi * (t - W0) / 12; e = env(t)
        # rig 5f: the humerus also yaws in the scapular plane with the beat (a real greeting wave moves the whole
        # arm from the shoulder, not just the hand): --wavehy deg amplitude, phase --wavehp
        pl = (ARMP['wave_pl'] + float(opt('--wavehy', '8')) * e * math.sin(ph - float(opt('--wavehp', '0.5')))) * D2R
        U = Vector((-math.sin(al) * math.cos(pl), -math.sin(al) * math.sin(pl), -math.cos(al)))
        wv = e * (15 * math.sin(ph) - 7)
        B = Matrix.Rotation(4 * e * math.sin(ph - 0.8) * D2R, 3, U) @ perp(Vector((0, 0, 1)), U)
        flex = float(opt('--wflex', '90')) + wv           # rig 5e: base elbow flexion at the wave (forearm nearer vertical)
        # rig 5b: with the humerus in the scapular plane and the forearm up, neutral rotation already turns the
        # palm to the front (a little inward); a touch of pronation squares it. No wrist flop on the lower.
        return dict(U=U, B=B, flex=flex, sup=float(opt('--wavesup', '-38')), k=0.9,
                    wf=-12.0, wd=float(opt('--wavewd', '15')) * e * math.sin(ph - 1.2),
                    curl=5.0, thumb=5.0, ce=float(opt('--wavece', '6.7')), cp=4.0)
    def intents(s, t):
        # rig 5b: a COPY - mix() returns ARM0[s] itself at weight 0, and the lower's in-place writes below then
        # corrupted the rest intents for every later frame (the f181 pop in the rig 5b first pass)
        I = dict(mix(ARM0[s], walk_int(s, t), wk[t]))
        if s < 0:
            ra = min(1.0, max(0.0, r[t]))
            # rig 5b: on the lower the humerus leads (ra), the elbow follows EL frames later (rl), the wrist and
            # the hand's relax toward the forearm line WL frames later (rw): a soft follow-through, no flop
            rl = min(1.0, max(0.0, r_el[t]))         # rig 5d: lagged on the raise too
            rw = min(1.0, max(0.0, r_wr[t]))
            if ant[t] > 0:                                                    # anticipation: a small dip back
                Ra = Matrix.Rotation(ANTD * ant[t] * D2R, 3, 'X')
                I = dict(I, U=Ra @ I['U'], B=Ra @ I['B'], flex=I['flex'] + 6 * ant[t])
            if ra > 0 or rl > 0 or rw > 0:
                Wv = wave_int(t, rl); J = mix(I, Wv, ra)
                J['flex'] = I['flex'] + (Wv['flex'] - I['flex']) * rl
                for kk in ('wf', 'k', 'sup'):
                    J[kk] = I[kk] + (Wv[kk] - I[kk]) * rw
                if t >= R_DN and LOWB > 0:
                    # rig 5g: on the lower the elbow's bend side keeps the wave's (up / out) until the elbow has
                    # mostly extended - the forearm then hangs down beside the disc instead of swinging forward
                    # over its face (3/4 view: 47 % of the glove sat over the disc at f169 in 5f)
                    J['B'] = mix({'B': I['B']}, {'B': Wv['B']}, smooth(0.0, LOWB, rl))['B']
                I = dict(J)
        return I
    TWIST = {}
    def arm_specs(t, spec, P=None):
        """Arm bones from intents. P None: twist 0 (first pass); else the forearm twist that aims the palm."""
        for s in (-1, 1):
            S = SIDE[s]; A = ARMS[s]; I = intents(s, t); a0 = ARM0[s]
            spec['clavicle_' + S] = ('headrel', Matrix.Rotation(-s * I['cp'] * D2R, 3, 'Z')
                                     @ Matrix.Rotation(-s * I['ce'] * D2R, 3, 'Y'))
            U = I['U'].normalized(); B = perp(I['B'], U)
            Mr = Matrix((a0['U'], a0['B'], a0['U'].cross(a0['B']))).transposed()
            Mt = Matrix((U, B, U.cross(B))).transposed()
            spec['upperarm_' + S] = ('headrel', Mt @ Mr.transposed())
            # rig 5b: the twist is the anatomical intent, not a palm-aim solve (rig 5 aimed the palm at a world
            # direction and took up to 148 deg of twist doing it). tau = total forearm twist from the art's rest.
            tau = -s * (I['sup'] - A['sup0'])
            TWIST[(s, t)] = tau
            spec['forearm_' + S] = ('local', Matrix.Rotation((I['flex'] - A['rest_flex']) * D2R, 4, 'X'))
            for n in ('forearm_tw1_', 'forearm_tw2_', 'forearm_tw_'):      # rig 5h: radius chain, a third each
                spec[n + S] = ('local', Matrix.Rotation(tau / 3.0 * D2R, 4, 'Y'))
            fl = (RINV['hand_' + S].to_3x3() @ (A['wrist'] - A['mid'])).normalized()
            Hrel = REST['forearm_tw_' + S].to_3x3().inverted() @ REST['hand_' + S].to_3x3()
            spec['hand_' + S] = ('local', wrist_q(fl, SIGN['radial_' + S], I['wd'], I['wf'], I['k'], Hrel).to_4x4())
            spec['fingers_' + S] = ('local', Matrix.Rotation(I['curl'] * D2R, 4, 'X'))
            spec['thumb_' + S] = ('local', Matrix.Rotation(I['thumb'] * D2R, 4, 'X'))

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
    # rig 5b: --k3/--k45/--kmid/--kts expose the post-loading stance knee (defaults = rig 5) for the bob sweep
    KAP = [(0, float(opt('--k0', '2.0'))), (1.0, 8.0), (2.0, float(opt('--kl', '25.0'))),
           (3.0, float(opt('--k3', '14.0'))), (4.5, float(opt('--k45', '9.0'))), (6.0, float(opt('--kmid', '5.0'))),
           (9.0, float(opt('--kts', '4.0'))), (12.0, float(opt('--kts', '4.0')))]
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
        arm_specs(t, spec)                 # rig 5: arms from intents; pass 2 aims the palm by forearm twist
        P, _ = solve(spec)
        arm_specs(t, spec, P)
        P, Lc = solve(spec)
        if want_P:
            return Lc, z, nclamp, P
        return Lc, z, nclamp
    # ---------------------------------------------------------- wave pose: pick the gentlest change from
    # rig 1 (abd 65, flex 20, elbow 98 +/- 22) whose glove and arm stay OUT of her disc, grown by a margin
    t_s = time.time(); Z0 = {-1: 0.0, 1: 0.0}
    def worst_clip(fr, names):
        w = 0
        for t in fr:
            w = max(w, sum(clip_counts(pose_frame(t, Z0, True)[3], names).values()))
        return w
    hang_deg = None
    for hd in [float(x) for x in opt('--hangs', '12,15,18,21,24,28').split(',')]:
        ARMP['hang'] = hd                             # rig 5: the most human (smallest) walking abduction that
        if worst_clip(range(10, 110, 2), ('arm_R', 'arm_L', 'glove_R', 'glove_L')) == 0:   # clears her disc
            hang_deg = hd; break
    # rig 3: the wave must clear her disc by a real distance (>= GAP_MIN, glove surface to disc surface), not a
    # grown-volume proxy. Distance = nearest point on the rest body_disc mesh, taken in head rest space.
    from mathutils.bvhtree import BVHTree
    dme = OBJ['body_disc'].data; dmw = OBJ['body_disc'].matrix_world
    DBVH = BVHTree.FromPolygons([dmw @ v.co for v in dme.vertices], [tuple(p.vertices) for p in dme.polygons])
    GAP_MIN = float(opt('--gap', '0.025'))
    def glove_gap(P, nm='glove_R'):
        Dm = {n: P[n] @ RINV[n] for n in P}; Hi = Dm['head'].inverted(); g = 9.0
        for co, wd in SKIN[nm]:
            p = Vector((0, 0, 0))
            for b, w in wd:
                p += (Dm[b] @ co) * w
            q = Hi @ p; loc, nrm, _, dd = DBVH.find_nearest(q)
            g = min(g, -dd if (in_disc(q, 1.0, 0.0) or (q - loc).dot(nrm) < 0) else dd)
        return g
    def wave_gap(fr):
        g = 9.0; ncl = 0
        for t in fr:
            P = pose_frame(t, Z0, True)[3]
            gt = glove_gap(P); ncl += sum(clip_counts(P, ['arm_R', 'arm_L']).values())
            if gt < g:
                g = gt; META['wave_gap_frame'] = t
        return g, ncl
    # rig 5 wave: humerus elevation (elbow near shoulder height) and scapular-plane angle, most human first
    # rig 5d: owner "fix" - the upper arm comes FORWARD of the disc plane (plane angle 20-35 deg = shoulder flexion
    # plus abduction) so it reads as a whole arm from the front, not a stub at the rim; --wavepl forces one
    cands = [(80, 10), (80, 14), (84, 14), (80, 20), (80, 32)]   # rig 5f: humerus swung back toward the side plane first
    if '--cands' in argv:      # rig 5e: 'el:pl,el:pl,...' in pick order
        cands = [tuple(float(x) for x in c.split(':')) for c in opt('--cands', '').split(',')]
    if '--wavepl' in argv:
        cands = [(float(opt('--waveel', '84')), float(opt('--wavepl', '30')))]
    pick = None; tried = []
    for el, pl in cands:
        ARMP.update(wave_el=el, wave_pl=pl)
        g, a_cl = wave_gap(range(100, NF, 2))
        tried.append([el, pl, round(g * 1000, 1), a_cl])
        if g >= GAP_MIN and a_cl == 0:
            pick = (el, pl); break
    if pick is None:
        best = max((r for r in tried if r[3] == 0), key=lambda r: r[2], default=max(tried, key=lambda r: r[2]))
        pick = (best[0], best[1])
        META['wave_margin'] = 'NONE >= %.0f mm - widest gap picked' % (GAP_MIN * 1000)
    else:
        META['wave_margin'] = 'glove gap >= %.0f mm' % (GAP_MIN * 1000)
    ARMP.update(wave_el=pick[0], wave_pl=pick[1])
    g_all, _ = wave_gap(range(100, NF))
    META['wave_gap_mm'] = round(g_all * 1000, 1)
    print('RIG wave gap (mm, every frame 100..end)', META['wave_gap_mm'], 'tried', tried)
    META['wave_pick'] = {'elevation_deg': pick[0], 'scapular_plane_deg': pick[1], 'hang_deg': hang_deg,
                         'tried': tried}
    META['arm'] = {S: {'gh': list(ARMS[s]['shoulder']), 'elbow': list(ARMS[s]['elbow']),
                       'rest_flex_deg': ARMS[s]['rest_flex'], 'hinge': list(ARMS[s]['hinge']),
                       'Np': list(ARMS[s]['Np']), 'sup0_deg': ARMS[s]['sup0'], 'sup_range_deg': [SUP_LO, SUP_HI],
                       'med': list(ARMS[s]['med']), 'ax0': list(ARMS[s]['ax0']), 'ax1': list(ARMS[s]['ax1'])}
                   for s, S in SIDE.items()}
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
    brow = [(0, 0), (W0 - 4, 0)] + [(f, smooth(W0 - 4, W0 + 4, f)) for f in range(W0 - 3, W0 + 5)] + [(150, 1)] + \
           [(f, 1 - smooth(150, 158, f)) for f in range(151, 159)]
    key_shape(['eye_L', 'eye_R', 'lash_L', 'lash_R'], 'brow_up', brow)
    scene.frame_start, scene.frame_end = 0, NF - 1
    scene.render.fps = FPS
    META['ik_clamps'] = clamps
    META['ankle_rom_guard_deg'] = ankle_fix
    lo = lambda a, b: min(range(a, b), key=lambda t: pelvis_z[t])      # down = lowest pelvis after contact
    hi = lambda a, b: max(range(a, b), key=lambda t: pelvis_z[t])      # up = highest pelvis in the stance
    META['markers'] = {'R_contact': 55, 'R_down': lo(55, 61), 'R_passing': 61, 'R_up': hi(62, 67),
                       'L_contact': 67, 'L_down': lo(67, 73), 'L_passing': 73, 'L_up': hi(74, 79),
                       'stop': 91, 'wave_anticipation': R_UP - 10, 'wave_raise': R_UP, 'wave': (W0 + 2, R_DN - 2),
                       'blink': 144, 'brow_up': (124, 158)}
    for s, S in SIDE.items():       # rig 5b: the total forearm twist (both bones) actually keyed, per frame
        META['arm'][S]['twist_deg'] = [round(TWIST.get((s, t), 0.0), 2) for t in frames]
    arm['rig_meta'] = json.dumps(META)
    json.dump(META, open(os.path.join(OUT, 'rig_meta.json'), 'w'), indent=1, default=list)
    print('RIG built in %.1fs; signs %s; ext_sg %d; markers %s' % (time.time() - t_start, SIGN, 0,
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
                              export_animations=True, export_skins=True, export_morph=True,
                              export_force_sampling=True)   # rig 5m: sampled, so wrist_S carries its Copy Rotation
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

# ================================================================ rig 5b: film studio look (films/review only)
def studio_look(scene):
    """Warm, soft, low-contrast studio for the TEST FILMS: her test-8 materials and key/rim lights untouched;
    the floor is a warm matte, the world a matching warm tone (so the horizon melts), the fill lifted and
    warmed. rest_front (the identity check) is rendered in stage build BEFORE this and never sees it."""
    fl = bpy.data.objects['backdrop_floor']
    m = bpy.data.materials.new('studio_floor_warm'); m.use_nodes = True
    b = m.node_tree.nodes.get('Principled BSDF') or [n for n in m.node_tree.nodes if n.type == 'BSDF_PRINCIPLED'][0]
    b.inputs['Base Color'].default_value = (0.46, 0.38, 0.31, 1.0)
    b.inputs['Roughness'].default_value = 0.92
    if 'Specular IOR Level' in b.inputs:
        b.inputs['Specular IOR Level'].default_value = 0.15
    fl.data.materials.clear(); fl.data.materials.append(m)
    # rig 5c: a seamless curved sweep (cyclorama) instead of a 30 m plane meeting the world in a hard line:
    # a flat floor disc (r 0..FR) that curves up on a quarter circle (radius CR) into a wall all round her,
    # so every camera yaw sees a smooth floor-to-wall curve and no horizon edge. Same warm material.
    FR, CR, WH, SEG = float(opt('--cycr', '9.0')), float(opt('--cycc', '3.5')), 9.0, 96
    prof = [(r, 0.0) for r in (0.0, 1.0, 2.0, 3.0, 4.5, 6.0, 7.5, FR)]
    prof += [(FR + CR * math.sin(a), CR * (1 - math.cos(a))) for a in [i * (math.pi / 2) / 16 for i in range(1, 17)]]
    prof += [(FR + CR, CR + WH * k / 3) for k in (1, 2, 3)]
    vs = [(p[0] * math.cos(2 * math.pi * j / SEG), p[0] * math.sin(2 * math.pi * j / SEG), p[1])
          for p in prof for j in range(SEG)]
    fs = []
    for i in range(len(prof) - 1):
        for j in range(SEG):
            a, b = i * SEG + j, i * SEG + (j + 1) % SEG
            fs.append((a, b, b + SEG, a + SEG))
    # ring 0 is a point repeated SEG times: fine as degenerate quads' triangles, merged by remove doubles below
    cm = bpy.data.meshes.new('cyc'); cm.from_pydata(vs, [], fs); cm.update()
    co = bpy.data.objects.new('cyc', cm); scene.collection.objects.link(co)
    bm = __import__('bmesh').new(); bm.from_mesh(cm)
    __import__('bmesh').ops.remove_doubles(bm, verts=bm.verts, dist=1e-5)
    __import__('bmesh').ops.recalc_face_normals(bm, faces=bm.faces)     # normals up/inward (into the bowl)
    bm.to_mesh(cm); bm.free()
    for p in cm.polygons:
        p.use_smooth = True
    if sum(p.normal.z for p in cm.polygons if p.center.z < 0.01) < 0:   # floor must face up
        for p in cm.polygons:
            p.flip()
        cm.update()
    co.data.materials.append(m)
    fl.hide_render = True; fl.hide_viewport = True
    cam_o = scene.camera
    if cam_o: cam_o.data.clip_end = 200.0
    w = scene.world; bg = [n for n in w.node_tree.nodes if n.type == 'BACKGROUND'][0]
    bg.inputs['Color'].default_value = (0.20, 0.165, 0.135, 1.0); bg.inputs['Strength'].default_value = 1.0
    for n, e, c in (('fill_soft', 520.0, (1.0, 0.95, 0.88)), ('fill_soft_toga', 70.0, (1.0, 0.95, 0.88))):
        L = bpy.data.objects[n].data; L.energy = e; L.color = c
    if 'bounce_floor' not in bpy.data.objects:          # a soft warm bounce from the floor, front-low
        ld = bpy.data.lights.new('bounce_floor', 'AREA'); ld.size = 4.0; ld.energy = 160.0; ld.color = (1.0, 0.86, 0.7)
        lo = bpy.data.objects.new('bounce_floor', ld); scene.collection.objects.link(lo)
        lo.location = (0.0, -2.2, 0.05); lo.rotation_euler = (math.radians(-80), 0, 0)
    if hasattr(scene.eevee, 'use_raytracing'):
        scene.eevee.use_raytracing = True
    if SHADOWQ:   # rig 5r: EEVEE shadow noise over the cuff corner (1 ray / 6 steps default); only studio_look = film + wrist + peak renders
        for k_, v_ in (('shadow_ray_count', 4), ('shadow_step_count', 12)):
            if hasattr(scene.eevee, k_): setattr(scene.eevee, k_, v_)
        for L_ in bpy.data.lights:
            if hasattr(L_, 'shadow_filter_radius'): L_.shadow_filter_radius = 2.0
        print('RIG shadowq', {k_: getattr(scene.eevee, k_, None) for k_ in ('shadow_ray_count', 'shadow_step_count')})

def fit_cam(scene, cam, obs, frames, yaw, lens=50, up=0.15, margin=0.07):
    """Fixed camera at `yaw` that keeps every vertex of `obs` in frame (margin in view units) on every frame."""
    dg = bpy.context.evaluated_depsgraph_get(); pts = []
    for f in frames:
        scene.frame_set(f); dg = bpy.context.evaluated_depsgraph_get()
        for o in obs:
            oe = o.evaluated_get(dg); me = oe.to_mesh(); mw = oe.matrix_world
            vs = me.vertices
            pts += [mw @ vs[i].co for i in range(0, len(vs), 3)]; oe.to_mesh_clear()
    lo = Vector([min(p[i] for p in pts) for i in range(3)]); hi = Vector([max(p[i] for p in pts) for i in range(3)])
    tgt = (lo + hi) / 2
    for k in range(80):
        d = 0.8 + 0.05 * k
        set_cam(cam, yaw, d=d, target=tgt, up=up, lens=lens); bpy.context.view_layer.update()
        ok = all(margin < c.x < 1 - margin and margin < c.y < 1 - margin
                 for c in (world_to_camera_view(scene, cam, p) for p in pts))
        if ok:
            break
    print('RIG fit_cam yaw %d d %.2f target %s' % (yaw, d, tuple(round(c, 3) for c in tgt)))
    return d, tgt

# ================================================================ STAGE movie (PNG frames; ffmpeg encodes)
def stage_movie():
    scene, cam, arm = open_blend()
    view = opt('--cam', 'tq')
    studio_look(scene)
    scene.eevee.taa_render_samples = int(opt('--samples', '16'))
    scene.render.resolution_x, scene.render.resolution_y = 960, 540
    scene.render.image_settings.compression = 15
    if view == 'wave':      # rig 5b: its own framing, fitted so the whole right glove + arm stay in frame
        f0, f1 = int(opt('--f0', '104')), int(opt('--f1', str(NF - 1)))
        cam.animation_data_clear()
        fit_cam(scene, cam, [bpy.data.objects['glove_R'], bpy.data.objects['arm_R']], range(f0, f1 + 1),
                float(opt('--wyaw', '-35')), lens=50, up=0.1)
    elif view == 'front':   # rig 5g: straight-on film, same follow and framing as tq
        py = json.loads(arm['rig_meta'])['py']
        gk = [math.exp(-0.5 * (i / 6.0) ** 2) for i in range(-18, 19)]
        for f in range(NF):
            yf = sum(gk[i + 18] * py[min(NF - 1, max(0, f + i))] for i in range(-18, 19)) / sum(gk)
            set_cam(cam, 0, d=3.4, target=Vector((-0.1, yf, 0.58)), up=0.45, lens=50)
            cam.keyframe_insert('location', frame=f); cam.keyframe_insert('rotation_euler', frame=f)
    elif view == 'tq':      # rig 2: closer (d 3.4, was 4.0) and following her (smoothed pelvis y)
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
    if '--thumbzoom' in argv:   # rig 5s: optical close-up of each thumb corner (glove mouth vert R 25 / L 26) from the film camera
        K = float(opt('--thumbzoom', '4')); f = scene.frame_start; scene.frame_set(f); bpy.context.view_layer.update()
        loc0 = cam.matrix_world.translation.copy(); lens0 = cam.data.lens; cam.animation_data_clear()
        for S, vi in (('R', 25), ('L', 26)):
            g = bpy.data.objects['glove_' + S]; ms = [(m, m.show_viewport) for m in g.modifiers if m.type != 'ARMATURE']
            for m, _v in ms: m.show_viewport = False
            bpy.context.view_layer.update(); e = g.evaluated_get(bpy.context.evaluated_depsgraph_get()); me = e.to_mesh()
            p = g.matrix_world @ me.vertices[vi].co; e.to_mesh_clear()
            for m, _v in ms: m.show_viewport = _v
            cam.location = loc0; cam.rotation_euler = (p - loc0).to_track_quat('-Z', 'Y').to_euler(); cam.data.lens = lens0 * K
            bpy.context.view_layer.update()
            scene.render.filepath = os.path.join(OUT, 'thumb_%s_f%03d_%s_x%g.png' % (S, f, view, K)); bpy.ops.render.render(write_still=True)
            print('RIG thumbzoom', S, vi, f, view, K, tuple(round(x, 4) for x in p))
        return
    d = os.path.join(OUT, 'frames_' + view); os.makedirs(d, exist_ok=True)
    scene.render.filepath = os.path.join(d, '')
    t0 = time.time()
    bpy.ops.render.render(animation=True)
    n = scene.frame_end - scene.frame_start + 1
    print('RIG movie %s: %d frames %.1fs (%.2f s/frame), engine %s' % (view, n, time.time() - t0,
          (time.time() - t0) / n, scene.render.engine))

# ================================================================ rig 5h: STAGE wrist (close sweeps) + cuff stills
def stage_wrist():
    """--mode sweep: pronation/supination then flexion/extension then radial/ulnar deviation on her right forearm,
    frames_wrist_front/ and frames_wrist_tq/. --mode cuff: f170-176 of the animation, close on the right cuff."""
    scene, cam, arm = open_blend()
    studio_look(scene)
    scene.eevee.taa_render_samples = int(opt('--samples', '12'))
    meta = json.loads(arm['rig_meta']); pb = arm.pose.bones; S = 'R'
    mode = opt('--mode', 'sweep')
    Wm = lambda n: arm.matrix_world @ pb[n].matrix
    sk = [o for o in bpy.data.objects if o.type == 'MESH' and o.data.shape_keys]
    def tgt():
        return (Wm('hand_R').translation + Wm('forearm_R').translation.lerp(Wm('forearm_tw_R').translation, 1.0)) * 0.5
    cam.animation_data_clear()
    if mode == 'cuff':
        scene.render.resolution_x = scene.render.resolution_y = 520
        d = os.path.join(OUT, 'cuff'); os.makedirs(d, exist_ok=True)
        for f in range(int(opt('--f0', '0')), int(opt('--f1', str(scene.frame_end))) + 1):   # rig 5n: whole move by default
            scene.frame_set(f)
            t = Wm('hand_R').translation.copy()
            for view, yaw in (('front', 0), ('tq', -45)):
                set_cam(cam, yaw, d=0.85, target=t, up=0.0, lens=85)
                scene.render.filepath = os.path.join(d, 'cuff_%s_%03d.png' % (view, f)); bpy.ops.render.render(write_still=True)
        return
    scene.render.resolution_x, scene.render.resolution_y = 720, 540
    scene.frame_set(int(opt('--wbase', '139')))
    arm.animation_data_clear()
    for o in sk:
        o.data.shape_keys.animation_data_clear()
    A = meta['arm'][S]; sup0 = A['sup0_deg']; sr = meta['sign']['radial_' + S]
    Hrel = arm.data.bones['forearm_tw_' + S].matrix_local.to_3x3().inverted() @ arm.data.bones['hand_' + S].matrix_local.to_3x3()
    hb = arm.data.bones['hand_' + S]
    fl = (hb.matrix_local.to_3x3().inverted() @ (hb.head_local - arm.data.bones['forearm_' + S].tail_local)).normalized()
    seq = []
    na, nb, nc = int(opt('--na', '48')), int(opt('--nb', '30')), int(opt('--nc', '24'))
    for i in range(na):                           # supination 0 -> +85 -> pronation -80 -> 0 (human range, from neutral)
        x = i / na
        sup = 85 * math.sin(2 * math.pi * x)      # rig 5i: +-85 both ways
        seq.append(('sup', sup, 0.0, 0.0))
    for i in range(nb):                           # flexion 70 / extension 70, neutral forearm rotation
        seq.append(('flex', 0.0, 70 * math.sin(2 * math.pi * i / nb), 0.0))
    for i in range(nc):                           # radial 20 / ulnar 30
        x = math.sin(2 * math.pi * i / nc); seq.append(('dev', 0.0, 0.0, 20 * x if x > 0 else 30 * x))
    for i in range(int(opt('--nd', '24'))):      # rig 5n: COMBINED flex/ext + deviation, as her real move f147-176 does (dev to 41.7)
        x = 2 * math.pi * i / int(opt('--nd', '24'))
        seq.append(('combo', 0.0, 22 * math.sin(x), 42 * math.cos(x)))
    # rig 5i: fold / pinch metrics on the ARMATURE-ONLY deformation of the glove (other modifiers off), per sweep frame.
    import numpy as np
    gl = bpy.data.objects['glove_' + S]; gmesh = gl.data
    modstate = [(m, m.show_viewport) for m in gl.modifiers if m.type != 'ARMATURE']
    for m, _v in modstate:
        m.show_viewport = False
    def gco():
        e = gl.evaluated_get(bpy.context.evaluated_depsgraph_get()); me = e.to_mesh()
        c = np.empty(len(me.vertices) * 3); me.vertices.foreach_get('co', c); e.to_mesh_clear()
        c = c.reshape(-1, 3); Mw = np.array(gl.matrix_world)
        return c @ Mw[:3, :3].T + Mw[:3, 3]
    polys = [tuple(p.vertices) for p in gmesh.polygons]
    q4 = np.array([(p + (p[-1],))[:4] if len(p) == 3 else p[:4] for p in polys])
    def fnrm(c):
        nn = np.cross(c[q4[:, 2]] - c[q4[:, 0]], c[q4[:, 3]] - c[q4[:, 1]]); ar = 0.5 * np.linalg.norm(nn, axis=1)
        return nn / np.maximum(2 * ar[:, None], 1e-12), ar
    emap = {}
    for fi, p in enumerate(polys):
        for k in range(len(p)):
            emap.setdefault(tuple(sorted((p[k], p[(k + 1) % len(p)]))), []).append(fi)
    pairs = np.array([v for v in emap.values() if len(v) == 2])
    # rig 5j: POKE-THROUGH metric, armature-only deformation. The cap is the glove's last 13 verts (12 inner ring + centre).
    # arm_past_cap = arm_R verts on the HAND side of the cap plane (> 0.5 mm) within 80 mm of the cap: must be 0.
    ao = bpy.data.objects['arm_' + S]; amod = [(m, m.show_viewport) for m in ao.modifiers if m.type != 'ARMATURE']
    for m, _v in amod:
        m.show_viewport = False
    def wco(ob):
        e = ob.evaluated_get(bpy.context.evaluated_depsgraph_get()); me = e.to_mesh()
        c = np.empty(len(me.vertices) * 3); me.vertices.foreach_get('co', c); e.to_mesh_clear()
        c = c.reshape(-1, 3); Mw = np.array(ob.matrix_world)
        return c @ Mw[:3, :3].T + Mw[:3, 3]
    _hd = lambda n: np.array(arm.matrix_world @ arm.data.bones[n].head_local)
    ax0, ax1 = _hd('forearm_tw1_' + S), _hd('hand_' + S); axd = (ax1 - ax0) / np.linalg.norm(ax1 - ax0)
    NGV = len(gmesh.vertices)
    # rig 5l GATE, replaces the 5k orange count (which also counted the arm legitimately entering the elbow-side mouth):
    # (1) SEAM: the cuff's hand-side mouth verts vs the palm surface (BVH nearest), armature-only; opening = gap now minus
    #     gap at rest, max over the mouth. (2) SLEEVE SEEN: arm_R surface (subsurf on, outline shell off) lying > 2 mm on the
    #     HAND side of the cuff cap plane, ray-cast from the render camera: a point the camera hits first is the sleeve's
    #     inside seen through a gap. Both are 0 when the cuff is closed, whatever the arm does outside it.
    from mathutils.bvhtree import BVHTree
    SP = seam_parts(gmesh); cuffp = SP['part'][NGV - 1]
    CAPV = [i for i in range(NGV - 13, NGV) if SP['part'][i] == cuffp]
    MOUTH = [i for i in SP['boundary'] if SP['part'][i] == cuffp and i not in CAPV]
    PALMF = [tuple(p.vertices) for p in gmesh.polygons if SP['part'][p.vertices[0]] == SP['palm']]
    RIMV = sorted({j for e in gmesh.edges for i, j in (tuple(e.vertices), tuple(e.vertices)[::-1]) if i in CAPV and j not in CAPV})
    def seam(Gc):
        bvh = BVHTree.FromPolygons([Vector(map(float, c)) for c in Gc], PALMF)
        return np.array([bvh.find_nearest(Vector(map(float, Gc[i])))[3] for i in MOUTH])
    SEENSCOPE = []   # rig 5p: cuff mouth-to-rim length (mm) per probe call
    def sleeve_seen(Gc):
        R_ = Gc[RIMV]; c_ = R_.mean(0); nr = np.linalg.svd(R_ - c_)[2][2]
        if nr @ (np.array(Wm('hand_' + S).translation) - c_) < 0: nr = -nr
        # rig 5n PROBE FIX: test the surface the camera RENDERS - subsurf at render_levels (2), not the viewport level (1).
        # rig 5o: diag3's full probe ported - EVERY show_render modifier on (the outline hull included), and the camera ray
        # steps past back faces of culled materials (the outline shell), as the render does. The wrist piece is an occluder.
        wpo_ = [o_ for o_ in (bpy.data.objects.get('wristpiece_' + S),) if o_ is not None]
        mst_ = [(m, m.show_viewport, getattr(m, 'levels', None)) for o_ in [gl, ao] + wpo_ for m in o_.modifiers]
        for m, _v, _l in mst_:
            m.show_viewport = m.show_render
            if m.type == 'SUBSURF': m.levels = m.render_levels
        bpy.context.view_layer.update(); dg = bpy.context.evaluated_depsgraph_get()
        e = ao.evaluated_get(dg); me = e.to_mesh(); mw = ao.matrix_world
        P = [mw @ v.co for v in me.vertices]; e.to_mesh_clear()
        # past the cap = the cap SURFACE lies between the point and the elbow (the cap is a cone: its inner ring is centred on
        # the arm line, 9 mm off the rim centre, so the rim plane alone misjudges points near it). 2 mm margin.
        cs_ = set(CAPV) | set(RIMV); capf = [tuple(p.vertices) for p in gmesh.polygons if set(p.vertices) <= cs_ and set(p.vertices) & set(CAPV)]
        cb_ = BVHTree.FromPolygons([Vector(map(float, c)) for c in Gc], capf); dn_ = Vector(map(float, -nr))
        P = [p_ for p_ in P if np.linalg.norm(np.array(p_) - c_) < 0.08 and (lambda h: h[0] is not None and h[3] > 0.002)(cb_.ray_cast(p_, dn_, 0.08))]
        # rig 5p: MOUTH SCOPE. The gate asks whether the arm shows through the WRIST mouth. The 5o residual hits sat on the
        # cuff's elbow-end rim (38-44.5 mm from the wrist), where orange above the cuff is the art. Keep only points in the
        # wrist-side half of the cuff: axial distance from the mouth centre < half the mouth-to-rim length (measured per pose).
        mc_ = Gc[MOUTH].mean(0); ax_ = c_ - mc_; Lc_ = float(np.linalg.norm(ax_)); ax_ = ax_ / Lc_
        if '--seenall' not in argv:
            P = [p_ for p_ in P if (np.array(p_) - mc_) @ ax_ < 0.5 * Lc_]
        SEENSCOPE.append(round(Lc_ * 1000, 2))
        o_ = cam.matrix_world.translation; hit = 0
        for p_ in P:
            d_ = p_ - o_; L = d_.length
            dn_c = d_.normalized(); st_ = o_.copy()
            for _k in range(SEENK5S):
                ok_, loc_, nrm_, fi_, ob_, _m = scene.ray_cast(dg, st_, dn_c, distance=L + 0.01 - (st_ - o_).length)
                if not ok_ or nrm_.dot(dn_c) < 0 or not ob_.name.startswith(('glove', 'arm')):
                    break
                e_ = ob_.evaluated_get(dg); mi_ = e_.data.polygons[fi_].material_index
                mt_ = e_.material_slots[mi_].material if mi_ < len(e_.material_slots) else None
                if not (mt_ and mt_.use_backface_culling):
                    break
                st_ = loc_ + dn_c * SEENSTEP5S
            if ok_ and ob_ is not None and ob_.name == ao.name and (loc_ - p_).length < 0.0015:
                hit += 1; _d = p_ - Wm('hand_' + S).translation; SEENP.append(round(_d.length * 1000, 1))   # rig 5m: where (mm from the wrist)
                if '--seendiag' in argv:   # rig 5s: WHERE the ray escapes - closest approach of the point-to-camera ray to glove / piece
                    _bv = {}
                    for _o in [gl] + wpo_:
                        _bv[_o.name] = BVHTree.FromObject(_o, dg)
                    _rep = {'p_mm_from_mouth_ctr': round(float(np.linalg.norm(np.array(p_) - mc_)) * 1000, 2),
                            'axial_mm': round(float((np.array(p_) - mc_) @ ax_) * 1000, 2), 'Lc_mm': round(Lc_ * 1000, 2)}
                    for _nm, _b in _bv.items():
                        _best = (9, None, None)
                        for _s in range(0, 160):
                            _q = p_ - dn_c * (_s * 0.0005)
                            _r = _b.find_nearest(_q)
                            if _r[0] is not None and _r[3] < _best[0]:
                                _best = (_r[3], _s * 0.5, _r[0])
                        _gi = None
                        if _best[2] is not None:
                            _gi = int(np.argmin(np.linalg.norm(Gc - np.array(_best[2]), axis=1)))
                        _rep[_nm] = {'min_gap_mm': round(_best[0] * 1000, 3), 'at_mm_along_ray': _best[1],
                                     'nearest_glove_vert': _gi, 'vert_is_mouth': _gi in MOUTH, 'vert_part': SP['part'][_gi] if _gi is not None else None,
                                     'vert_dist_mm': round(float(np.linalg.norm(Gc[_gi] - np.array(_best[2]))) * 1000, 2) if _gi is not None else None}
                        if _best[2] is not None:
                            _x = np.array(_best[2]); _rep[_nm]['esc_axial_mm'] = round(float((_x - mc_) @ ax_) * 1000, 2)
                            _rep[_nm]['esc_radial_mm'] = round(float(np.linalg.norm((_x - mc_) - ((_x - mc_) @ ax_) * ax_)) * 1000, 2)
                            _gb = BVHTree.FromPolygons([Vector(map(float, c)) for c in Gc], [tuple(p.vertices) for p in gmesh.polygons])
                            _gr = _gb.find_nearest(Vector(map(float, _x)))
                            _rep[_nm]['glove_base_part'] = SP['part'][gmesh.polygons[_gr[2]].vertices[0]]; _rep[_nm]['glove_base_gap_mm'] = round(_gr[3] * 1000, 2)
                            for _w in wpo_:
                                _ms = [(m, m.show_viewport) for m in _w.modifiers if m.type == 'SUBSURF']
                                for m, _v in _ms: m.show_viewport = False
                                bpy.context.view_layer.update(); _e = _w.evaluated_get(bpy.context.evaluated_depsgraph_get()); _me = _e.to_mesh()
                                _wc = np.array([tuple(_w.matrix_world @ v.co) for v in _me.vertices]); _e.to_mesh_clear()
                                for m, _v in _ms: m.show_viewport = _v
                                bpy.context.view_layer.update()
                                _nn = len(_wc) // 4; _vi = int(np.argmin(np.linalg.norm(_wc - _x, axis=1)))
                                _rep[_nm]['piece_vert'] = [_vi, 'A M0 M1 B'.split()[_vi // _nn], _vi % _nn, round(float(np.linalg.norm(_wc[_vi] - _x)) * 1000, 2)]
                    _rep['parts'] = {'palm': SP['palm'], 'cuff': cuffp}
                    _hs = []; _st2 = o_.copy()     # every surface on the camera-to-point segment, in order
                    for _k in range(40):
                        _r = scene.ray_cast(dg, _st2, dn_c, distance=L + 0.01 - (_st2 - o_).length)
                        if not _r[0]: break
                        _e2 = _r[4].evaluated_get(dg); _mi = _e2.data.polygons[_r[3]].material_index
                        _mt = _e2.material_slots[_mi].material.name if _mi < len(_e2.material_slots) and _e2.material_slots[_mi].material else None
                        _xx = np.array(_r[1])
                        _hs.append([_r[4].name, _mt, 'back' if _r[2].dot(dn_c) > 0 else 'front', round((_r[1] - p_).length * 1000, 2),
                                    round(float((_xx - mc_) @ ax_) * 1000, 2), round(float(np.linalg.norm((_xx - mc_) - ((_xx - mc_) @ ax_) * ax_)) * 1000, 2)])
                        _st2 = _r[1] + dn_c * 1e-5
                    _rep['hits_cam_to_p'] = _hs
                    print('RIG seendiag', json.dumps(_rep))
        for m, v_, l_ in mst_:
            m.show_viewport = v_
            if l_ is not None: m.levels = l_
        bpy.context.view_layer.update()
        return hit, len(P)
    def arm_past_cap(Ac, Gc):
        ring, ctr = Gc[NGV - 13:NGV - 1], Gc[NGV - 1]
        nr = np.zeros(3)
        for k in range(12):
            nr += np.cross(ring[k] - ctr, ring[(k + 1) % 12] - ctr)
        nr /= np.linalg.norm(nr)
        if nr @ (Wm('hand_' + S).translation - Wm('forearm_tw1_' + S).translation) < 0: nr = -nr     # toward the hand (POSED axis)
        dist = (Ac - ctr) @ nr; near = np.linalg.norm(Ac - ctr, axis=1) < 0.08
        return int(((dist > 0.0005) & near).sum()), float(dist[near].max() * 1000)
    SEENP = []
    arm.data.pose_position = 'REST'; bpy.context.view_layer.update()
    _RG = gco(); SEAM0 = seam(_RG); _tg = (_RG - ax0) @ axd / np.linalg.norm(ax1 - ax0)
    CUFF = np.where((_tg > 0.85) & (_tg < 1.0))[0]         # far half of the cuff tube, hand side, for the pixel test
    def hull2(P):
        P = sorted(map(tuple, P.tolist()))
        def cr(o, a_, b_): return (a_[0] - o[0]) * (b_[1] - o[1]) - (a_[1] - o[1]) * (b_[0] - o[0])
        lo = []
        for q_ in P:
            while len(lo) >= 2 and cr(lo[-2], lo[-1], q_) <= 0: lo.pop()
            lo.append(q_)
        up = []
        for q_ in reversed(P):
            while len(up) >= 2 and cr(up[-2], up[-1], q_) <= 0: up.pop()
            up.append(q_)
        return np.array(lo[:-1] + up[:-1])
    def orange_in_cuff(Gc, path, path_noarm=None):
        """orange (arm) pixels inside the eroded convex hull of the projected cuff verts, from the render at `path`"""
        rw, rh = scene.render.resolution_x, scene.render.resolution_y
        pj = np.array([[*world_to_camera_view(scene, cam, Vector(map(float, Gc[i])))[:2]] for i in CUFF]) * [rw, rh]
        H = hull2(pj); cen = H.mean(0); H = cen + (H - cen) * 0.92
        im = bpy.data.images.load(path); px = np.empty(rw * rh * 4, dtype=np.float32); im.pixels.foreach_get(px)
        bpy.data.images.remove(im); px = px.reshape(rh, rw, 4)
        ys, xs = np.mgrid[0:rh, 0:rw]; ok = np.ones((rh, rw), bool)
        for i in range(len(H)):
            a_, b_ = H[i], H[(i + 1) % len(H)]
            ok &= ((b_[0] - a_[0]) * (ys - a_[1]) - (b_[1] - a_[1]) * (xs - a_[0])) >= 0
        r_, g_, b2 = px[..., 0], px[..., 1], px[..., 2]
        org = (r_ > 0.5) & (r_ - b2 > 0.35) & (g_ > 0.12) & (g_ < r_ * 0.85)
        if path_noarm:                                    # orange that is there without arm_R is background, not arm
            im = bpy.data.images.load(path_noarm); p2 = np.empty(rw * rh * 4, dtype=np.float32); im.pixels.foreach_get(p2)
            bpy.data.images.remove(im); p2 = p2.reshape(rh, rw, 4)
            org &= ~((p2[..., 0] > 0.5) & (p2[..., 0] - p2[..., 2] > 0.35) & (p2[..., 1] > 0.12) & (p2[..., 1] < p2[..., 0] * 0.85))
        return int((org & ok).sum())
    PK = {'arm_past_cap': [], 'arm_past_cap_max_mm': [], 'orange_front': [], 'orange_tq': [], 'seam_open_mm': [], 'seen_front': [], 'seen_tq': [], 'seen_pts': []}
    NOREN = '--norender' in argv
    n0, a0 = fnrm(gco()); d0 = (n0[pairs[:, 0]] * n0[pairs[:, 1]]).sum(1)
    SEEN_REST = {}
    for view, yaw in (('front', 0), ('tq', -40), ('side', -90)):   # rig 5m: the auditor at the ART REST pose; 5o adds side + stills
        set_cam(cam, yaw, d=0.62, target=tgt(), up=0.0, lens=85); bpy.context.view_layer.update()
        del SEENP[:]; SEEN_REST[view] = [sleeve_seen(_RG)[0], list(SEENP)]
        if '--norender' not in argv:
            scene.render.filepath = os.path.join(OUT, {'front': 'rest_front_close.png', 'tq': 'rest_3q.png', 'side': 'rest_side.png'}[view])
            bpy.ops.render.render(write_still=True)
    print('RIG seen at rest', json.dumps(SEEN_REST))
    arm.data.pose_position = 'POSE'; bpy.context.view_layer.update()
    big = a0 > 1e-7
    WM = {'fold_pairs': [], 'pinch_faces': [], 'stretch_faces': [], 'kind': [], 'sup': []}
    tg = None; n = 0
    for kind, sup, wf, wd in seq:
        tau = -(-1) * (sup - sup0)                # s = -1 (her right arm): tau = -s (sup - sup0)
        for nme in ('forearm_tw1_', 'forearm_tw2_', 'forearm_tw_'):
            pb[nme + S].rotation_euler.y = math.radians(tau / 3.0)
        pb['hand_' + S].rotation_euler = wrist_q(fl, sr, wd, wf, 1.0, Hrel).to_euler('XYZ')
        bpy.context.view_layer.update()
        nn_, aa_ = fnrm(gco()); dd_ = (nn_[pairs[:, 0]] * nn_[pairs[:, 1]]).sum(1)
        WM['fold_pairs'].append(int((dd_ < d0 - 1.0).sum())); WM['pinch_faces'].append(int(((aa_ < 0.35 * a0) & big).sum()))
        WM['stretch_faces'].append(int(((aa_ > 3.0 * a0) & big).sum())); WM['kind'].append(kind); WM['sup'].append(round(sup, 1))
        if tg is None:
            tg = tgt()
        Ac, Gc_ = wco(ao), gco(); pk_, pkm_ = arm_past_cap(Ac, Gc_)
        PK['arm_past_cap'].append(pk_); PK['arm_past_cap_max_mm'].append(round(pkm_, 3))
        PK['seam_open_mm'].append(round(float((seam(Gc_) - SEAM0).max()) * 1000, 3))
        if '--seendiag' in argv:   # rig 5s: piece B-end boundary (render subsurf) vs the glove surface (render subsurf, hull off): signed, + = OUT
            _wp = bpy.data.objects.get('wristpiece_' + S)
            _st = [(m, m.show_viewport, getattr(m, 'levels', None)) for m in list(gl.modifiers) + list(_wp.modifiers)]
            for m, _v, _l in _st:
                m.show_viewport = m.type in ('ARMATURE', 'SUBSURF')
                if m.type == 'SUBSURF': m.levels = m.render_levels
            bpy.context.view_layer.update(); _dg = bpy.context.evaluated_depsgraph_get()
            _gb = BVHTree.FromObject(gl, _dg); _e = _wp.evaluated_get(_dg); _me = _e.to_mesh()
            _ec = {}
            for p in _me.polygons:
                for ek in p.edge_keys: _ec[ek] = _ec.get(ek, 0) + 1
            _bd = sorted({v for ek, c in _ec.items() if c == 1 for v in ek})
            _wc = np.array([tuple(_wp.matrix_world @ _me.vertices[v].co) for v in _bd]); _e.to_mesh_clear()
            _mc = Gc_[MOUTH].mean(0); _rc = Gc_[RIMV].mean(0); _axv = (_rc - _mc) / np.linalg.norm(_rc - _mc)
            _bsel = [i for i in range(len(_bd)) if (_wc[i] - _mc) @ _axv < 0.0]       # B end = hand side of the mouth centre
            _sd = []
            for i in _bsel:
                _r = _gb.find_nearest(Vector(map(float, _wc[i])))
                _sd.append((float((np.array(_r[0]) - _wc[i]) @ -np.array(_r[1])) * 1000 * (1 if (_wc[i] - np.array(_r[0])) @ np.array(_r[1]) > 0 else -1) and
                            round(float(np.linalg.norm(_wc[i] - np.array(_r[0]))) * 1000 * (1 if (_wc[i] - np.array(_r[0])) @ np.array(_r[1]) > 0 else -1), 3), i))
            for m, _v, _l in _st:
                m.show_viewport = _v
                if _l is not None: m.levels = _l
            bpy.context.view_layer.update()
            _mx = max(_sd); print('RIG bdepth', n, kind, round(wf, 1), round(sup, 1), 'max_out_mm', _mx[0], 'n_out', sum(1 for d, _ in _sd if d > 0), 'of', len(_sd))
        for view, yaw in (('front', 0), ('tq', -40)):
            set_cam(cam, yaw, d=0.62, target=tg, up=0.0, lens=85); bpy.context.view_layer.update()
            del SEENP[:]; h_, np_ = sleeve_seen(Gc_); PK['seen_' + view].append(h_); PK['seen_pts'].append(np_)
            if h_: print('RIG seen', n, kind, round(wf, 1), view, h_, sorted(SEENP))
            if NOREN:
                PK['orange_' + view].append(0); continue
            dd = os.path.join(OUT, 'frames_wrist_' + view); os.makedirs(dd, exist_ok=True)
            scene.render.filepath = os.path.join(dd, '%04d.png' % n); bpy.ops.render.render(write_still=True)
            fp_ = scene.render.filepath; ao.hide_render = True; scene.render.filepath = os.path.join(OUT, '_noarm.png')
            bpy.ops.render.render(write_still=True); ao.hide_render = False; scene.render.filepath = fp_
            PK['orange_' + ('front' if view == 'front' else 'tq')].append(orange_in_cuff(Gc_, fp_, os.path.join(OUT, '_noarm.png')))
        n += 1
    sm = {}
    for kd in ('sup', 'flex', 'dev', 'combo'):
        ix = [i for i, k in enumerate(WM['kind']) if k == kd]
        sm[kd] = {'frames': len(ix), 'fold_pairs_max': max(WM['fold_pairs'][i] for i in ix), 'pinch_faces_max': max(WM['pinch_faces'][i] for i in ix),
                  'stretch_faces_max': max(WM['stretch_faces'][i] for i in ix)}
    sm['worst_fold_frame'] = max(range(len(WM['fold_pairs'])), key=lambda i: WM['fold_pairs'][i])
    sm['poke'] = {'arm_past_cap_max': max(PK['arm_past_cap']), 'arm_past_cap_max_mm': max(PK['arm_past_cap_max_mm']), 'orange_front_max': max(PK['orange_front']),
                  'orange_tq_max': max(PK['orange_tq']), 'series': PK, 'sup': WM['sup'], 'kind': WM['kind']}
    # rig 5k GATE: orange (arm) pixels in the cuff mouth, BOTH directions of the +-85 deg sweep, front and 3/4: <= 2 px noise
    _dirs = {'sup': lambda i: WM['kind'][i] == 'sup' and WM['sup'][i] > 0, 'pron': lambda i: WM['kind'][i] == 'sup' and WM['sup'][i] < 0}
    og = {}
    for dn, fn_ in _dirs.items():
        ix_ = [i for i in range(len(WM['kind'])) if fn_(i)]
        og[dn] = {'frames': len(ix_), 'front_max': max(PK['orange_front'][i] for i in ix_), 'tq_max': max(PK['orange_tq'][i] for i in ix_),
                  'sup_range_deg': [min(WM['sup'][i] for i in ix_), max(WM['sup'][i] for i in ix_)]}
    og['all_frames_front_max'] = max(PK['orange_front']); og['all_frames_tq_max'] = max(PK['orange_tq'])
    og['gate_px'] = 2
    og['pass'] = bool(og['sup']['front_max'] <= 2 and og['sup']['tq_max'] <= 2 and og['pron']['front_max'] <= 2 and og['pron']['tq_max'] <= 2
                      and sm['poke']['arm_past_cap_max'] == 0)
    sm['poke']['orange_gate_5k'] = og          # rig 5l: reported only, no longer the gate (see gate_5l)
    ix_ = [i for i in range(len(WM['kind'])) if WM['kind'][i] == 'sup']
    g5 = {'seam_open_max_mm': max(PK['seam_open_mm']), 'seam_open_sup_max_mm': max(PK['seam_open_mm'][i] for i in ix_),
          'seen_front_max': max(PK['seen_front']), 'seen_tq_max': max(PK['seen_tq']), 'seen_pts_min': min(PK['seen_pts']),
          'mouth_verts': len(MOUTH), 'rim_verts': len(RIMV), 'rest_seam_mm_max': round(float(SEAM0.max()) * 1000, 2),
          'worst_seam_frame': max(range(len(PK['seam_open_mm'])), key=lambda i: PK['seam_open_mm'][i]), 'gate_seam_mm': 1.0, 'gate_seen': 0}
    g5['pass'] = bool(g5['seam_open_max_mm'] <= 1.0 and g5['seen_front_max'] == 0 and g5['seen_tq_max'] == 0)
    g5['seen_scope'] = {'rule': 'all' if '--seenall' in argv else 'wrist-side half of the cuff (axial < L/2 from the mouth centre)', 'cuff_len_mm_min': min(SEENSCOPE), 'cuff_len_mm_max': max(SEENSCOPE)}
    g5['seen_rest'] = {k: v[0] for k, v in SEEN_REST.items()}   # rig 5o: armature REST pose, front / 3/4 / side (reported)
    sm['poke']['gate_5l'] = g5
    print('RIG gate 5l', json.dumps(g5))
    print('RIG orange gate 5k', json.dumps(og))
    print('RIG poke', json.dumps({k: v for k, v in sm['poke'].items() if k not in ('series', 'sup', 'kind')}))
    sm['series'] = WM; print('RIG wrist metrics', json.dumps({k: v for k, v in sm.items() if k != 'series'}))
    json.dump(sm, open(os.path.join(OUT, 'wrist_metrics_5j.json'), 'w'))
    print('RIG wrist sweep: %d frames' % n)

# ================================================================ rig 5b: STAGE review (close deform + walk tiles)
def stage_review():
    """Raw tiles to <OUT>/_review/: arm joints at their measured extremes, close (deform_*), and one walk
    cycle side + three-quarter (walk_*). index.json lists labels; compose with rig5b/compose_5b.py (PIL)."""
    scene, cam, arm = open_blend()
    studio_look(scene)
    scene.eevee.taa_render_samples = int(opt('--samples', '24'))
    meta = json.loads(arm['rig_meta']); pb = arm.pose.bones
    d = os.path.join(OUT, '_review'); os.makedirs(d, exist_ok=True)
    W = lambda n: arm.matrix_world @ pb[n].matrix
    ser = {}
    for f in range(NF):
        scene.frame_set(f)
        down = -W('head').col[1].to_3d().normalized(); pv = W('pelvis').translation
        for S in 'RL':
            u = W('upperarm_' + S).col[1].to_3d().normalized(); fy = W('forearm_' + S).col[1].to_3d().normalized()
            ser.setdefault(S + 'elev', []).append(math.degrees(u.angle(down)))
            ser.setdefault(S + 'elbow', []).append(math.degrees(u.angle(fy)))
            ser.setdefault(S + 'wrist', []).append(abs(math.degrees(pb['hand_' + S].rotation_euler.x)))
            ser.setdefault(S + 'hy', []).append((W('hand_' + S).translation - pv).y)
    amax = lambda k, a=0, b=NF: max(range(a, b), key=lambda f: ser[k][f])
    amin = lambda k, a=0, b=NF: min(range(a, b), key=lambda f: ser[k][f])
    tw = {S: meta['arm'][S]['twist_deg'] for S in 'RL'}
    twx = {S: max(range(NF), key=lambda f: abs(tw[S][f])) for S in 'RL'}
    shots = [('R shoulder: max elevation %.0f deg' % max(ser['Relev']), amax('Relev'), 'upperarm_R', 'R', 0.6),
             ('R elbow: max flexion %.0f deg' % max(ser['Relbow']), amax('Relbow'), 'forearm_R', 'R', 0.6),
             ('R forearm: max twist %.0f deg' % tw['R'][twx['R']], twx['R'], 'forearm_tw_R', 'R', 0.7),
             ('L forearm: max twist %.0f deg' % tw['L'][twx['L']], twx['L'], 'forearm_tw_L', 'L', 0.7),
             ('R wrist: max flex/ext %.0f deg' % max(ser['Rwrist']), amax('Rwrist'), 'hand_R', 'R', 0.6),
             ('R shoulder: walk swing forward', amin('Rhy', 31, 92), 'upperarm_R', 'R', 0.7),
             ('R shoulder: walk swing back', amax('Rhy', 31, 92), 'upperarm_R', 'R', 0.7)]
    idx = {'deform': [], 'walk': []}
    scene.render.resolution_x = scene.render.resolution_y = 520
    ONLY = opt('--shots', '')
    for i, (lab, f, bn, S, dist) in enumerate(shots):
        if ONLY and str(i) not in ONLY.split(','):
            continue          # probe run: only these deform shots (rig 5c)
        scene.frame_set(f)
        tgt = W(bn).translation.copy()
        for view, yaw in (('front', 0 if S == 'R' else 0), ('side', -70 if S == 'R' else 70)):
            set_cam(cam, yaw, d=dist, target=tgt, up=0.08, lens=85)
            p = os.path.join(d, 'deform_%02d_%s.png' % (i, view)); scene.render.filepath = p
            bpy.ops.render.render(write_still=True)
        idx['deform'].append([lab, f, i])
    scene.render.resolution_x = scene.render.resolution_y = 400
    mk = meta['markers']
    for f in (range(mk['R_contact'], mk['L_contact'] + 13, 2) if not ONLY else []):
        scene.frame_set(f); pv = W('pelvis').translation
        for view, yaw in (('side', -90), ('tq', -45)):
            set_cam(cam, yaw, d=3.1, target=Vector((0, pv.y, 0.5)), up=0.2, lens=60)
            scene.render.filepath = os.path.join(d, 'walk_%03d_%s.png' % (f, view))
            bpy.ops.render.render(write_still=True)
        idx['walk'].append(f)
    json.dump(idx, open(os.path.join(d, 'index.json'), 'w'), indent=1)
    print('RIG review', idx)

# ================================================================ rig 5d: STAGE peak (two stills at the wave peak)
def stage_peak():
    """wave_peak_front.png and wave_peak_tq.png: her whole body at the wave peak, front and three-quarter."""
    scene, cam, arm = open_blend()
    studio_look(scene)
    scene.eevee.taa_render_samples = int(opt('--samples', '32'))
    scene.render.resolution_x, scene.render.resolution_y = 1200, 1200
    f = int(opt('--pf', '139'))   # rig 5f: eyes open (the blink is f141-147)
    cam.animation_data_clear()
    scene.frame_set(f)
    py = json.loads(arm['rig_meta'])['py'][f]
    for name, yaw in (('front', 0), ('tq', -45)):
        set_cam(cam, yaw, d=3.4, target=Vector((-0.1, py, 0.6)), up=0.3, lens=50)
        bpy.context.view_layer.update()
        scene.render.filepath = os.path.join(OUT, 'wave_peak_%s.png' % name)
        bpy.ops.render.render(write_still=True)
    print('RIG peak frame', f)

{'build': stage_build, 'sheets': stage_sheets, 'movie': stage_movie, 'review': stage_review, 'peak': stage_peak, 'wrist': stage_wrist}[STAGE]()
