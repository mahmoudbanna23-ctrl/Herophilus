import bpy, sys, json, math, random
from mathutils import Vector, Matrix
from mathutils.bvhtree import BVHTree
H = 'D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her'
sys.path.insert(0, H)
import face_rig as FR
R = 'D:/scratch 2026/her-c2/face1-refute'
bpy.ops.wm.open_mainfile(filepath=FR.BLEND)
arm = bpy.data.objects['face_rig']
KEYED = ('eye_L', 'eye_R', 'lash_L', 'lash_R', 'mouth')
O = {n: bpy.data.objects[n] for n in KEYED}
out = {'objects': sorted(o.name for o in bpy.data.objects if o.type == 'MESH')}
out['face_obj_identity'] = {n: O[n].matrix_world == Matrix.Identity(4) for n in KEYED}
dg = lambda: bpy.context.evaluated_depsgraph_get()
def ev(ob):
    e = ob.evaluated_get(dg()); me = e.to_mesh()
    co = [ob.matrix_world @ v.co for v in me.vertices]; e.to_mesh_clear(); return co
def bvh(ob):
    e = ob.evaluated_get(dg()); me = e.to_mesh()
    t = BVHTree.FromPolygons([ob.matrix_world @ v.co for v in me.vertices], [p.vertices[:] for p in me.polygons])
    e.to_mesh_clear(); return t
mats = {}
for n in ('eye_L', 'eye_R'):
    m = [0] * len(O[n].data.vertices)
    for p in O[n].data.polygons:
        for vi in p.vertices: m[vi] = p.material_index
    mats[n] = m
FR.pose_state(arm, {})
REST = {n: ev(O[n]) for n in KEYED}
def surf(c): return c.y - FR.face_y(c.x, c.z)
obst = [o for o in bpy.data.objects if o.type == 'MESH' and o.name not in FR.FACE_OBJECTS and o.visible_get()]
OB = {o.name: bvh(o) for o in obst}
REST_HITS = {}
def measure(state):
    FR.pose_state(arm, state)
    r = {}; worst_rad = 0; worst_lift = 0; worst_sink = 0; hits = {}
    for n in KEYED:
        co = ev(O[n])
        for c, b in zip(co, REST[n]):
            d = surf(c) - surf(b)
            worst_lift = min(worst_lift, d); worst_sink = max(worst_sink, d)
            worst_rad = max(worst_rad, ((c.x / FR.RX) ** 2 + ((c.z - FR.ZC) / FR.RZ) ** 2) ** 0.5)
        me_t = bvh(O[n])
        for on, t in OB.items():
            if t.overlap(me_t):
                hits.setdefault(n, []).append(on)
    r.update(rad=round(worst_rad, 3), lift_mm=round(-worst_lift * 1000, 2), sink_mm=round(worst_sink * 1000, 2), hits=hits)
    esc = {}
    for n in ('eye_L', 'eye_R'):
        co = ev(O[n]); m = mats[n]
        rim = [c for c, k in zip(co, m) if k == 3]
        zt, zb = max(c.z for c in rim), min(c.z for c in rim)
        xl, xr = min(c.x for c in rim), max(c.x for c in rim)
        pu = [c for c, k in zip(co, m) if k in (1, 2)]
        e = max([0] + [c.z - zt for c in pu] + [zb - c.z for c in pu] + [xl - c.x for c in pu] + [c.x - xr for c in pu])
        esc[n] = round(e * 1000, 2); esc[n + '_open_mm'] = round((zt - zb) * 1000, 1)
    r['pupil_outside_rim_mm'] = esc
    return r
names = {n: [k.name for k in O[n].data.shape_keys.key_blocks[1:]] for n in KEYED}
allk = sorted({k for v in names.values() for k in v})
ad = {}
for n in KEYED:
    a = O[n].data.shape_keys.animation_data
    for fc in (a.drivers if a else []): ad[fc.data_path.split('"')[1]] = 1
free = [k for k in allk if k not in ad]
out['free_keys'] = len(free); out['driven_keys'] = sorted(ad)
def B(n, v): return {n + '_L': v, n + '_R': v}
res = {}
res['rest'] = measure({})
res['ALL free keys=1'] = measure(dict(keys={k: 1.0 for k in free}))
res['ALL free=1 + bones 2x'] = measure(dict(keys={k: 1.0 for k in free}, jaw=2.0, jaw_side=2.0, look=(-80, -80), lid_up={'L': 2, 'R': 2}, lid_lo={'L': 2, 'R': 2}))
res['AU15+AU16+D at 2.0'] = measure(dict(keys={**B('AU15_lip_corner_depressor', 2), **B('AU16_lower_lip_depressor', 2), 'D': 2}))
res['D + jaw bone 1'] = measure(dict(keys={'D': 1.0}, jaw=1.0))
res['surprise + jaw1 + AU16'] = measure(dict(keys={**FR.preset_state('surprise')['keys'], **B('AU16_lower_lip_depressor', 1)}, jaw=1.0))
res['AU15+AU16+AU25 + jaw1'] = measure(dict(keys={**B('AU15_lip_corner_depressor', 1), **B('AU16_lower_lip_depressor', 1), 'AU25_lips_part': 1}, jaw=1.0))
res['AU12+AU10+AU20 + jaw1'] = measure(dict(keys={**B('AU12_lip_corner_puller', 1), **B('AU10_upper_lip_raiser', 1), **B('AU20_lip_stretcher', 1)}, jaw=1.0))
res['AU1+AU2+AU5'] = measure(dict(keys={**B('AU1_inner_brow_raiser', 1), **B('AU2_outer_brow_raiser', 1), **B('AU5_upper_lid_raiser', 1)}))
for lk in ((35, 0), (-35, 0), (0, 25), (0, -30), (35, 25), (-35, -30)):
    res['blink + look %s' % (lk,)] = measure(dict(lid_up={'L': 1, 'R': 1}, look=lk))
    res['open look %s' % (lk,)] = measure(dict(look=lk))
res['blink + AU5'] = measure(dict(keys=B('AU5_upper_lid_raiser', 1), lid_up={'L': 1, 'R': 1}))
res['blink + lid_lo + AU6 + AU7'] = measure(dict(keys={**B('AU6_cheek_raiser', 1), **B('AU7_lid_tightener', 1)}, lid_up={'L': 1, 'R': 1}, lid_lo={'L': 1, 'R': 1}))
random.seed(7); rnd = []
for i in range(120):
    ks = {k: random.choice((0, 0, 0, 1.0, random.random())) for k in free}
    st = dict(keys=ks, jaw=random.choice((0, 1, random.random())), jaw_side=random.uniform(-1, 1),
              look=(random.uniform(-40, 40), random.uniform(-35, 30)),
              lid_up={'L': random.choice((0, 1, random.random())), 'R': random.random()},
              lid_lo={'L': random.random(), 'R': random.random()})
    m = measure(st); m['i'] = i; rnd.append(m)
out['targeted'] = res
out['random_worst'] = dict(rad=max(m['rad'] for m in rnd), lift_mm=max(m['lift_mm'] for m in rnd),
    sink_mm=max(m['sink_mm'] for m in rnd), n_with_hits=sum(1 for m in rnd if m['hits']),
    hit_examples=[(m['i'], m['hits']) for m in rnd if m['hits']][:8])
FR.pose_state(arm, {})
json.dump(out, open(R + '/stress.json', 'w'), indent=1)
print('STRESS_DONE')
