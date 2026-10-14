# check_face.py - measures face rig 3 (face_rig.py) and writes face3/checks_face.json (FR.OUT).
# Rig-3 additions: 500 random combinations (was 200), Blender drivers vs a pure-Python evaluation of
# face_caps.json (the web runtime's formulas), stress states for the render (_stress_states.json).
# Rig-2 additions: blink x look pupil escape, lash root to rim, lashes vs ticks / wreath, frown corner
# drop, toga clearance and region radius over every key, preset and 200 random combinations.
#   blender --background --python check_face.py
# Reads face1.blend, the GLB and _neutral_diff.json (written by `python face_rig.py --compose`).
import bpy, sys, os, json, math, traceback, bisect
from mathutils import Vector
from mathutils.kdtree import KDTree
HERE = r'D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her'
sys.path.insert(0, HERE)
import face_rig as FR

OUT = 'D:/scratch 2026/her-c2/face3-refute'
bpy.ops.wm.open_mainfile(filepath=FR.BLEND)
arm = bpy.data.objects['face_rig']
KEYED = ('eye_L', 'eye_R', 'lash_L', 'lash_R', 'mouth')
O = {n: bpy.data.objects[n] for n in FR.FACE_OBJECTS}
out = {}
mm = lambda v: round(v * 1000, 2)

def evaluated(ob):
    dg = bpy.context.evaluated_depsgraph_get()
    e = ob.evaluated_get(dg); me = e.to_mesh()
    co = [ob.matrix_world @ v.co for v in me.vertices]
    e.to_mesh_clear()
    return co

def basis(ob):
    return [v.co.copy() for v in ob.data.shape_keys.key_blocks[0].data]

def driven(ob):
    ad = ob.data.shape_keys.animation_data
    return {fc.data_path.split('"')[1] for fc in ad.drivers} if ad else set()

# ---------------------------------------------------------------- neutral
FR.pose_state(arm, {})
neu = {n: max((a - b).length for a, b in zip(evaluated(O[n]), [v.co for v in O[n].data.vertices]))
       for n in KEYED}              # nose: no keys, keeps its SUBSURF, nothing to compare
out['neutral_geometry_max_dev_mm'] = {n: mm(v) for n, v in neu.items()}
p = os.path.join(OUT, '_neutral_diff.json')
out['neutral_pixels'] = json.load(open(p)) if os.path.exists(p) else 'not run'
others = [o.name for o in bpy.data.objects if o.type == 'MESH' and o.data.shape_keys and o.name not in KEYED]
out['non_face_meshes_with_keys'] = others

# ---------------------------------------------------------------- per key: counts, displacement, region
toga_top = {}
dg = bpy.context.evaluated_depsgraph_get()
for n in ('toga', 'toga_trim'):
    t = bpy.data.objects[n]; me = t.evaluated_get(dg).to_mesh()
    for v in me.vertices:
        w = t.matrix_world @ v.co
        if w.y < 0 and abs(w.x) < 0.2:
            b = round(w.x / 0.01)
            toga_top[b] = max(toga_top.get(b, -1), w.z)
    t.evaluated_get(dg).to_mesh_clear()
def toga_clear(co):
    return min(c.z - toga_top.get(round(c.x / 0.01), -1) for c in co)

keys = {}
for n in KEYED:
    ob = O[n]; B = basis(ob)
    for kb in ob.data.shape_keys.key_blocks[1:]:
        d = [(a.co - b) for a, b in zip(kb.data, B)]
        mv = [B[i] for i, x in enumerate(d) if x.length > 1e-7]
        r = max(((c.x / FR.RX) ** 2 + ((c.z - FR.ZC) / FR.RZ) ** 2) ** 0.5 for c in mv) if mv else 0
        rec = dict(verts=len(kb.data), basis=len(B), max_mm=mm(max(x.length for x in d)), moved=len(mv),
                   max_disc_radius_frac=round(r, 3))
        if n == 'mouth':
            rec['toga_clear_mm'] = mm(toga_clear([a.co for a in kb.data]))
        keys['%s:%s' % (n, kb.name)] = rec
out['keys'] = keys
out['key_count'] = {n: len(O[n].data.shape_keys.key_blocks) - 1 for n in KEYED}
out['all_counts_equal_basis'] = all(k['verts'] == k['basis'] for k in keys.values())
out['max_region_radius_frac'] = max(k['max_disc_radius_frac'] for k in keys.values())

# ---------------------------------------------------------------- L/R symmetry of paired keys
def mats_of(ob):
    mats = [0] * len(ob.data.vertices)
    for pgn in ob.data.polygons:
        for vi in pgn.vertices:
            mats[vi] = pgn.material_index
    return mats
def mirror_map(Bsrc, Bdst, skip=()):
    """Mirror index map; verts in `skip` map to None (the glint is painted at the same upper-left spot
    in both eyes - a light reflection, deliberately NOT mirrored - so it has no mirror partner)."""
    kd = KDTree(len(Bdst))
    for i, c in enumerate(Bdst):
        if i not in skip:
            kd.insert(c, i)
    kd.balance()
    m, err = [], 0.0
    for i, c in enumerate(Bsrc):
        if i in skip:
            m.append(None); continue
        co, j, dist = kd.find(Vector((-c.x, c.y, c.z)))
        m.append(j); err = max(err, dist)
    return m, err
sym = {}
for a, b in (('eye_L', 'eye_R'), ('lash_L', 'lash_R'), ('mouth', 'mouth')):
    BA, BB = basis(O[a]), basis(O[b])
    if a == 'eye_L':
        gA = {i for i, x in enumerate(mats_of(O[a])) if x == 2}
        gB = {i for i, x in enumerate(mats_of(O[b])) if x == 2}
        m, err = mirror_map(BA, BB, gA | gB)
        m = [None if j in gB else j for j in m]
        sym['eye_glint_verts_excluded'] = len(gA)
    else:
        m, err = mirror_map(BA, BB)
    sym['basis_mirror_err_mm_' + a] = mm(err)
    kA = O[a].data.shape_keys.key_blocks; kB = O[b].data.shape_keys.key_blocks
    for kb in kA:
        if not kb.name.endswith('_L'):
            continue
        rn = kb.name[:-2] + '_R'
        if rn not in kB:
            continue
        worst = 0.0
        for i, j in ((i, j) for i, j in enumerate(m) if j is not None):
            dA = kb.data[i].co - BA[i]; dB = kB[rn].data[j].co - BB[j]
            worst = max(worst, (dA - Vector((-dB.x, dB.y, dB.z))).length)
        sym['%s:%s' % (a, kb.name[:-2])] = mm(worst)
    if a == 'eye_L':       # look_L on the left eye mirrors look_R on the right eye
        for l, r in (('look_L', 'look_R'), ('look_R', 'look_L'), ('look_up', 'look_up'), ('look_down', 'look_down')):
            worst = 0.0
            for i, j in ((i, j) for i, j in enumerate(m) if j is not None):
                dA = kA[l].data[i].co - BA[i]; dB = kB[r].data[j].co - BB[j]
                worst = max(worst, (dA - Vector((-dB.x, dB.y, dB.z))).length)
            sym['eye:%s~%s' % (l, r)] = mm(worst)
out['symmetry_max_mm'] = sym

# ---------------------------------------------------------------- lids vs pupils (min gap, mm)
eye_mats = {}
for S, s in FR.SIDES:
    ob = O['eye_' + S]; mats = [0] * len(ob.data.vertices)
    for pgn in ob.data.polygons:
        for vi in pgn.vertices:
            mats[vi] = pgn.material_index
    eye_mats[S] = mats
rim_upper = {S: [v.co.z > FR.EYE_Z for v in O['eye_' + S].data.shape_keys.key_blocks[0].data] for S, _ in FR.SIDES}
def lid_gap(S, co):
    """Inner edge of the dark rim per 5-deg sector vs every pupil/glint vert: min (rim - pupil) in mm,
    measured in eye-normalised polar coords around the rim's own centroid."""
    s = 1 if S == 'L' else -1
    mats = eye_mats[S]
    rim = [c for c, m in zip(co, mats) if m == 3]
    cx = sum(c.x for c in rim) / len(rim); cz = sum(c.z for c in rim) / len(rim)
    bins = {}
    for c in rim:
        a = int(math.degrees(math.atan2(c.z - cz, c.x - cx)) // 5)
        dd = math.hypot(c.x - cx, c.z - cz)
        bins[a] = min(bins.get(a, 9), dd)
    worst = 9.0
    for c, m in zip(co, mats):
        if m in (1, 2):
            a = int(math.degrees(math.atan2(c.z - cz, c.x - cx)) // 5)
            if a in bins:
                worst = min(worst, bins[a] - math.hypot(c.x - cx, c.z - cz))
    return mm(worst)
def pose_gaps(state):
    FR.pose_state(arm, state)
    return {S: lid_gap(S, evaluated(O['eye_' + S])) for S, _ in FR.SIDES}
gaps = {'rest': pose_gaps({})}
for lab, st in FR.key_tiles():
    gaps[lab] = pose_gaps(st)
pre_clear = {}
for pn in FR.PRESETS:
    gaps['preset ' + pn] = pose_gaps(FR.preset_state(pn))
    pre_clear[pn] = mm(toga_clear(evaluated(O['mouth'])))
out['lid_pupil_min_gap_mm'] = gaps
out['lid_pupil_worst_open_eye_mm'] = min(v for k, g in gaps.items() for S, v in g.items()
                                         if 'blink' not in k and not ('wink' in k and S == 'L'))
out['preset_toga_clear_mm'] = pre_clear

# ---------------------------------------------------------------- drivers: bone pose == key geometry
drv = {}
for lab, st in FR.key_tiles():
    if not lab.startswith('bone'):
        continue
    FR.pose_state(arm, st)
    for n in KEYED:
        ob = O[n]; B = basis(ob); ev = evaluated(ob)
        moved = max((a - b).length for a, b in zip(ev, B))
        if moved < 1e-6:
            continue
        # which driven key(s) are at 1 by construction of the tile
        want = [kb for kb in ob.data.shape_keys.key_blocks[1:] if kb.name in driven(ob) and
                max((a.co - b).length for a, b in zip(kb.data, B)) > 0 and
                max((a.co - e).length for a, e in zip(kb.data, ev)) < 1e-4]
        drv['%s | %s' % (lab, n)] = dict(moved_mm=mm(moved), matches_key_at_1=[k.name for k in want])
FR.pose_state(arm, {})
out['bone_to_key'] = drv

# ---------------------------------------------------------------- ROM: push past the limits, read back
P = arm.pose.bones
def leul(n):
    pb = P[n]
    return (pb.bone.matrix_local.inverted() @ pb.matrix).to_euler('XYZ')
rom = {}
for lab, st in (('eye far left', dict(look=(80, 0))), ('eye far right', dict(look=(-80, 0))),
                ('eye far up', dict(look=(0, 80))), ('eye far down', dict(look=(0, -80)))):
    FR.pose_state(arm, st); e = leul('eye_L')
    rom[lab] = dict(pitch=round(math.degrees(e.x), 1), yaw=round(math.degrees(e.z), 1))
for lab, st, bn in (('jaw 2x open', dict(jaw=2.0), 'jaw'), ('jaw 2x side', dict(jaw_side=2.0), 'jaw'),
                    ('lid_up 2x close', dict(lid_up={'L': 2.0}), 'lid_up_L'),
                    ('lid_lo 2x raise', dict(lid_lo={'L': 2.0}), 'lid_lo_L')):
    FR.pose_state(arm, st); e = leul(bn)
    rom[lab] = [round(math.degrees(x), 1) for x in e]
FR.pose_state(arm, dict(look=(0, -25)))
rom['lid follow: eye down 25 -> lid_up_L x'] = round(math.degrees(leul('lid_up_L').x), 1)
P['lip_corner_L'].location = (0.05, 0.05, 0.05); bpy.context.view_layer.update()
rom['lip_corner_L 50mm push -> local mm'] = [mm(x) for x in (P['lip_corner_L'].bone.matrix_local.inverted() @ P['lip_corner_L'].matrix).to_translation()]
FR.pose_state(arm, {})
out['rom_readback_deg'] = rom
out['bones'] = [b.name for b in arm.data.bones]

path = os.path.join(OUT, 'checks_face.json')
json.dump(out, open(path, 'w'), indent=1)

# ================================================================ face rig 2 additions
import random
from mathutils.bvhtree import BVHTree
def bvh_of(ob):
    e = ob.evaluated_get(bpy.context.evaluated_depsgraph_get()); me = e.to_mesh()
    t = BVHTree.FromPolygons([ob.matrix_world @ v.co for v in me.vertices], [p.vertices[:] for p in me.polygons])
    e.to_mesh_clear()
    return t
OBST = {n: bvh_of(bpy.data.objects[n]) for n in ('face_marks', 'wreath', 'wreath_ornament') if n in bpy.data.objects}

def pupil_escape(S, co):
    """(a) worst pupil/glint vert past the RIM OUTLINE (outer edge of the dark band, per 1.5 mm x column)
    in mm - anything > 0 can show dark outside her eye; (b) worst past the lid line (analytic, only
    meaningful when no muscle key is set) given the evaluated blink value."""
    mats = eye_mats[S]
    # Upper and lower rim envelopes built SEPARATELY (upper = rim verts above the eye centre in the
    # basis, so a closed lid that sags below centre still counts as upper). Rim verts are sparse near
    # the top/bottom of the oval, so a 1.5 mm column can hold only one side - hence two envelopes,
    # gaps linearly interpolated between the neighbour columns.
    up_c, lo_c = {}, {}
    for c, m, u in zip(co, mats, rim_upper[S]):
        if m != 3:
            continue
        k = round(c.x / 0.0015)
        if u:
            up_c[k] = max(up_c.get(k, -9.0), c.z)
        else:
            lo_c[k] = min(lo_c.get(k, 9.0), c.z)
    def env(cols, xs, k):
        if k in cols:
            return cols[k]
        i = bisect.bisect(xs, k); kl, kr = xs[i - 1], xs[i]
        return cols[kl] + (cols[kr] - cols[kl]) * (k - kl) / (kr - kl)
    xu, xl = sorted(up_c), sorted(lo_c)
    x0, x1 = max(xu[0], xl[0]), min(xu[-1], xl[-1])
    worst = -9.0
    for c, m in zip(co, mats):
        if m not in (1, 2):
            continue
        k = round(c.x / 0.0015)
        if k < x0 or k > x1:                           # beside the eye: horizontal escape
            worst = max(worst, 0.0015 * min(abs(k - x0), abs(k - x1)))
            continue
        worst = max(worst, c.z - env(up_c, xu, k), env(lo_c, xl, k) - c.z)
    s = 1 if S == 'L' else -1
    b = arm['cx_b_' + S]                   # face rig 3: blink_S = b x Wb, so read b itself
    lid = -9.0
    for c, m in zip(co, mats):
        if m in (1, 2):
            top, bot = FR.lid_lines(FR.clamp((c.x - s * FR.EYE_X) / FR.EYE_W, -1.0, 1.0), b)
            lid = max(lid, c.z - top, bot - c.z)
    return mm(worst), mm(lid), round(b, 3)

# ---- 1. every blink x look (bones posed; lid follow included)
bl = {}
worst_out = worst_lid = -9
for b in [i / 10 for i in range(11)] + [0.25, 0.35, 0.45]:
    for ln, lk in FR.GRID_LOOKS + (('half-left', (19, 0)), ('half-up', (0, 14)), ('half-down', (0, -16))):
        FR.pose_state(arm, dict(look=lk, lid_up={'L': b, 'R': b}))
        rec = {}
        for S, _ in FR.SIDES:
            o_, l_, be = pupil_escape(S, evaluated(O['eye_' + S]))
            rec[S] = dict(outside_rim_outline_mm=o_, past_lid_line_mm=l_, blink_eval=be)
            worst_out = max(worst_out, o_); worst_lid = max(worst_lid, l_)
        bl['b%.2f %s' % (b, ln)] = rec
out['blink_x_look'] = bl
out['blink_x_look_worst_outside_rim_outline_mm'] = worst_out
out['blink_x_look_worst_past_lid_line_mm'] = worst_lid
out['blink_x_look_tolerance_mm'] = mm(FR.LOOK_TOL)

# ---- 2. lash roots vs rim, lashes vs ticks / wreath, region radius, pupil escape, per state
def lash_roots(co):
    return [sum(co[k * FR.LASH_STRAND:k * FR.LASH_STRAND + 6], Vector()) / 6 for k in range(3)]
def state_metrics(state):
    FR.pose_state(arm, state)
    r = {}
    root_rim = 0.0; tick = 9.0; rad = 0.0; hits = []; esc = -9.0
    for S, _ in FR.SIDES:
        eco = evaluated(O['eye_' + S]); lco = evaluated(O['lash_' + S])
        rim = [c for c, m in zip(eco, eye_mats[S]) if m == 3]
        for rt in lash_roots(lco):
            root_rim = max(root_rim, min(math.hypot(rt.x - c.x, rt.z - c.z) for c in rim))
        for c in lco:
            for n, t in OBST.items():
                hit = t.find_nearest(c)
                if hit[0] is not None:
                    tick = min(tick, hit[3])
        esc = max(esc, pupil_escape(S, eco)[0])
    for n in KEYED:
        co = evaluated(O[n])
        rad = max(rad, max(((c.x / FR.RX) ** 2 + ((c.z - FR.ZC) / FR.RZ) ** 2) ** 0.5 for c in co))
        tb = BVHTree.FromPolygons(co, [p.vertices[:] for p in O[n].data.polygons])
        hits += ['%s~%s' % (n, on) for on, t in OBST.items() if t.overlap(tb)]
    mco = evaluated(O['mouth'])
    top = [mco[c * 5] for c in range(FR.NU + 1)]; bot = [mco[c * 5 + 4] for c in range(FR.NU + 1)]
    r.update(lash_root_to_rim_mm=mm(root_rim), lash_to_ticks_wreath_min_mm=mm(tick), max_radius_frac=round(rad, 3),
             obstacle_overlaps=hits, pupil_outside_rim_outline_mm=esc,
             mouth_toga_clear_mm=mm(toga_clear(mco)),
             mouth_inverted_cols=sum(1 for a, b_ in zip(top, bot) if b_.z > a.z + 1e-4),
             corner_drop_mm=mm(top[FR.NU // 2].z - (top[0].z + top[-1].z) / 2))
    return r
sm = {'rest': state_metrics({})}
for lab, st in FR.key_tiles():
    sm[lab] = state_metrics(st)
for pn in FR.PRESETS:
    sm['preset ' + pn] = state_metrics(FR.preset_state(pn))
def B2(n, v):
    return {n + '_L': v, n + '_R': v}
sm['AU1+AU2+AU5 (both) 1'] = state_metrics(dict(keys={**B2('AU1_inner_brow_raiser', 1), **B2('AU2_outer_brow_raiser', 1),
                                                     **B2('AU5_upper_lid_raiser', 1)}))
sm['AU15 both 1'] = state_metrics(dict(keys=B2('AU15_lip_corner_depressor', 1)))
sm['AU15 both 1 + AU17 0.3'] = state_metrics(dict(keys={**B2('AU15_lip_corner_depressor', 1), 'AU17_chin_raiser': 0.3}))
sm['blink 1 + AU6 + AU7 + lid_lo 1'] = state_metrics(dict(keys={**B2('AU6_cheek_raiser', 1), **B2('AU7_lid_tightener', 1)},
                                                          lid_up={'L': 1, 'R': 1}, lid_lo={'L': 1, 'R': 1}))
sm['AU4+AU6+AU7+lid_lo all 1 (no blink)'] = state_metrics(dict(keys={**B2('AU4_brow_lowerer', 1), **B2('AU6_cheek_raiser', 1),
    **B2('AU7_lid_tightener', 1)}, lid_lo={'L': 1, 'R': 1}))
sm['AU4+AU6+AU7+lid_lo all 1 + blink 0.5 + look up'] = state_metrics(dict(keys={**B2('AU4_brow_lowerer', 1),
    **B2('AU6_cheek_raiser', 1), **B2('AU7_lid_tightener', 1)}, lid_lo={'L': 1, 'R': 1}, lid_up={'L': .5, 'R': .5}, look=(0, 28)))
sm['mouth pile: D + jaw 1 + AU16 + AU25 + AU17 + AU24'] = state_metrics(dict(keys={'D': 1, **B2('AU16_lower_lip_depressor', 1),
    'AU25_lips_part': 1, 'AU17_chin_raiser': 1, 'AU24_lip_presser': 1}, jaw=1))
sm['blink 1 + every eye muscle 1 + look down-right'] = state_metrics(dict(
    keys={m + '_' + S: 1.0 for m in FR.EYE_MUSCLES for S, _ in FR.SIDES}, lid_up={'L': 1, 'R': 1}, look=(-38, -33)))
out['states'] = sm
CAPS = json.loads(arm['face_caps'])
free = sorted(CAPS['inputs'])          # face rig 3: every key is driven; the inputs are the free set
rhub = [k for k in free if len(k) == 1]
musc = [k for k in free if k not in rhub]
random.seed(4242)
rnd = []
NR = 500
for i in range(NR):
    ks = {k: random.choice((0, 0, 0, 0, 1.0, random.random())) for k in musc}
    if random.random() < 0.5:
        ks[random.choice(rhub)] = random.random()
    st = dict(keys=ks, jaw=random.choice((0, 1, random.random())), jaw_side=random.uniform(-1, 1),
              look=(random.uniform(-40, 40), random.uniform(-35, 30)),
              lid_up={'L': random.choice((0, 1, random.random())), 'R': random.random()},
              lid_lo={'L': random.random(), 'R': random.random()})
    m_ = state_metrics(st); m_['i'] = i; rnd.append(m_)
    m_['state'] = dict(st, keys={k: round(v, 2) for k, v in ks.items() if v})
BASE = max(v['pupil_outside_rim_outline_mm'] for k, v in sm.items()
           if k.startswith(('bone', 'AU', 'rest')) and '+' not in k)   # single keys / single bones
out['random_500'] = dict(
    single_key_baseline_mm=BASE,
    n_pupil_over_baseline=sum(1 for m_ in rnd if m_['pupil_outside_rim_outline_mm'] > BASE + 0.05),
    max_radius_frac=max(m_['max_radius_frac'] for m_ in rnd),
    lash_to_ticks_wreath_min_mm=min(m_['lash_to_ticks_wreath_min_mm'] for m_ in rnd),
    lash_root_to_rim_max_mm=max(m_['lash_root_to_rim_mm'] for m_ in rnd),
    n_obstacle_overlaps=sum(1 for m_ in rnd if m_['obstacle_overlaps']),
    pupil_outside_rim_outline_max_mm=max(m_['pupil_outside_rim_outline_mm'] for m_ in rnd),
    n_pupil_outside_over_0=sum(1 for m_ in rnd if m_['pupil_outside_rim_outline_mm'] > 0),
    toga_clear_min_mm=min(m_['mouth_toga_clear_mm'] for m_ in rnd),
    n_mouth_inverted=sum(1 for m_ in rnd if m_['mouth_inverted_cols']),
    n_pupil_outside_over_3mm=sum(1 for m_ in rnd if m_['pupil_outside_rim_outline_mm'] > 3),
    worst_pupil_examples=sorted(((m_['pupil_outside_rim_outline_mm'], m_['i']) for m_ in rnd), reverse=True)[:5],
    worst_pupil_states=[m_['state'] for m_ in sorted(rnd, key=lambda m_: -m_['pupil_outside_rim_outline_mm'])[:3]],
    n_toga_under_0_5mm=sum(1 for m_ in rnd if m_['mouth_toga_clear_mm'] < 0.5),
    worst_toga_states=[(m_['mouth_toga_clear_mm'], m_['state']) for m_ in sorted(rnd, key=lambda m_: m_['mouth_toga_clear_mm'])[:2]])
# stress states for the render: 6 worst pupils + 6 worst toga clearances (distinct)
pick = [m_ for m_ in sorted(rnd, key=lambda m_: -m_['pupil_outside_rim_outline_mm'])[:6]]
pick += [m_ for m_ in sorted(rnd, key=lambda m_: m_['mouth_toga_clear_mm']) if m_ not in pick][:6]
json.dump([['#%d pupil %.1f toga %.1f inv %d' % (m_['i'], m_['pupil_outside_rim_outline_mm'], m_['mouth_toga_clear_mm'],
                                                 m_['mouth_inverted_cols']), m_['state']] for m_ in pick],
          open(os.path.join(OUT, '_stress_states.json'), 'w'), indent=1)

# ---- runtime formulas (face_caps) vs Blender drivers, 60 random states
def leul2(n):
    pb = arm.pose.bones[n]
    return (pb.bone.matrix_local.inverted() @ pb.matrix).to_euler('XYZ')
def runtime_eval(state):
    env = {n: float(state.get('keys', {}).get(n, 0.0)) for n in CAPS['inputs']}
    for vn, bd in CAPS['bones'].items():
        e_ = leul2(bd['bone']); env[vn] = e_.x if bd['channel'] == 'ROT_X' else e_.z
    for st_ in CAPS['steps']:
        env[st_['name']] = eval(st_['expr'], {'__builtins__': {}, 'max': max, 'min': min}, env)
    return {(on, kn): eval(e_, {'__builtins__': {}, 'max': max, 'min': min}, env)
            for on, d_ in CAPS['keys'].items() for kn, e_ in d_.items()}
worst_rt = 0.0
for m_ in rnd[:60]:
    st = dict(m_['state']); FR.pose_state(arm, st)
    ref = runtime_eval(st)
    for (on, kn), v in ref.items():
        worst_rt = max(worst_rt, abs(O[on].data.shape_keys.key_blocks[kn].value - v))
out['runtime_formulas_vs_blender_max_abs'] = round(worst_rt, 6)
out['caps_meta'] = CAPS['meta']
named = {k: v for k, v in sm.items() if k != 'rest'}
out['summary_rig3'] = dict(
    presets_and_keys_max_radius_frac=max(v['max_radius_frac'] for v in named.values()),
    rest_radius_frac=sm['rest']['max_radius_frac'],
    presets_and_keys_lash_tick_min_mm=min(v['lash_to_ticks_wreath_min_mm'] for v in named.values()),
    rest_lash_tick_mm=sm['rest']['lash_to_ticks_wreath_min_mm'],
    lash_root_to_rim_rest_mm=sm['rest']['lash_root_to_rim_mm'],
    lash_root_to_rim_max_mm=max(v['lash_root_to_rim_mm'] for v in named.values()),
    obstacle_overlaps=[k for k, v in named.items() if v['obstacle_overlaps']],
    pupil_outside_rim_outline_max_mm=max(v['pupil_outside_rim_outline_mm'] for v in named.values()),
    corner_drop_mm={k: sm[k]['corner_drop_mm'] for k in ('rest', 'AU15 both 1', 'AU15 both 1 + AU17 0.3',
                                                          'preset frown_concern', 'preset sad')},
    toga_clear_min_mm=min(v['mouth_toga_clear_mm'] for v in named.values()),
    toga_clear={k: sm[k]['mouth_toga_clear_mm'] for k in ('AU15 both 1', 'preset frown_concern', 'preset sad', 'preset surprise')})
p = os.path.join(OUT, '_magenta.json')
out['render_magenta_pupil_px'] = json.load(open(p)) if os.path.exists(p) else 'not run'
FR.pose_state(arm, {})
json.dump(out, open(path, 'w'), indent=1)

# ---------------------------------------------------------------- GLB re-import in a fresh scene
g = {'file': FR.GLB}
blend_keys = {n: [kb.name for kb in O[n].data.shape_keys.key_blocks[1:]] for n in KEYED}
bpy.ops.wm.read_factory_settings(use_empty=True)
try:
    bpy.ops.import_scene.gltf(filepath=FR.GLB); g['import'] = 'ok'
except Exception:
    g['import'] = traceback.format_exc()[-900:]
got = {}
for o in bpy.data.objects:
    if o.type == 'MESH' and o.data.shape_keys:
        got.setdefault(o.name.split('.')[0], set()).update(k.name for k in o.data.shape_keys.key_blocks[1:])
g['morph_count'] = {n: len(v) for n, v in got.items()}
g['missing'] = {n: sorted(set(k) - got.get(n, set())) for n, k in blend_keys.items() if set(k) - got.get(n, set())}
g['armatures'] = [(a.name, len(a.data.bones)) for a in bpy.data.objects if a.type == 'ARMATURE']
g['glb_bytes'] = os.path.getsize(FR.GLB)
out['glb'] = g
json.dump(out, open(path, 'w'), indent=1)
print('CHECKS_FACE_DONE', path)
