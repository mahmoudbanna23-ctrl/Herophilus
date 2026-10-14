import bpy, json, math, sys
sys.path.insert(0, 'D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her')
import face_rig as FR
bpy.ops.wm.open_mainfile(filepath='D:/scratch 2026/her-c2/face1/face1.blend')
out = {}
def rad(c):
    return ((c.x / FR.RX) ** 2 + ((c.z - FR.ZC) / FR.RZ) ** 2) ** 0.5
for n in ('eye_L',):
    ob = bpy.data.objects[n]
    B = [v.co.copy() for v in ob.data.shape_keys.key_blocks[0].data]
    mats = [0] * len(B)
    for p in ob.data.polygons:
        for vi in p.vertices:
            mats[vi] = p.material_index
    xc, zc = FR.EYE_X, FR.EYE_Z
    for m in range(4):
        pts = [c for c, k in zip(B, mats) if k == m]
        if not pts:
            continue
        en = [math.hypot((c.x - xc) / FR.EYE_W, (c.z - zc) / FR.EYE_H) for c in pts]
        dy = [c.y - FR.sclera_y(xc, zc, c.x, c.z) for c in pts]
        out['%s_mat%d' % (n, m)] = dict(n=len(pts), mat=ob.data.materials[m].name if m < len(ob.data.materials) else None,
            x=(round(min(c.x for c in pts) - xc, 4), round(max(c.x for c in pts) - xc, 4)),
            z=(round(min(c.z for c in pts) - zc, 4), round(max(c.z for c in pts) - zc, 4)),
            y=(round(min(c.y for c in pts), 4), round(max(c.y for c in pts), 4)),
            ell_norm=(round(min(en), 3), round(max(en), 3)), dy_over_sclera_mm=(round(min(dy) * 1000, 2), round(max(dy) * 1000, 2)))
    out['eye_mats'] = [m.name for m in ob.data.materials]
    out['eye_modifiers'] = [(m.name, m.type) for m in ob.modifiers]
lb = bpy.data.objects['lash_L']
LB = [v.co for v in lb.data.shape_keys.key_blocks[0].data]
out['lash_rest_rad'] = round(max(rad(c) for c in LB), 3)
out['lash_rest_zmax'] = round(max(c.z for c in LB), 4)
for k in range(3):
    idx = range(k * FR.LASH_STRAND, (k + 1) * FR.LASH_STRAND)
    root = sum((LB[i] for i in list(idx)[:6]), __import__('mathutils').Vector()) / 6
    tip = max((LB[i] for i in idx), key=lambda c: c.z)
    out['lash_strand%d' % k] = dict(root=[round(v, 4) for v in root], tip=[round(v, 4) for v in tip],
        root_ell=round(math.hypot((root.x - FR.EYE_X) / FR.EYE_W, (root.z - FR.EYE_Z) / FR.EYE_H), 3))
fm = bpy.data.objects.get('face_marks')
dg = bpy.context.evaluated_depsgraph_get()
if fm:
    me = fm.evaluated_get(dg).to_mesh()
    rs = [rad(fm.matrix_world @ v.co) for v in me.vertices]
    out['face_marks_rad'] = (round(min(rs), 3), round(max(rs), 3))
    # nearest tick verts to the eye region
    pts = [fm.matrix_world @ v.co for v in me.vertices]
    near = sorted(pts, key=lambda c: math.hypot(c.x - FR.EYE_X, c.z - FR.EYE_Z))[:3]
    out['tick_near_eyeL'] = [[round(v, 4) for v in c] for c in near]
    upper = [c for c in pts if c.z > 0.9]
    out['ticks_upper_minz'] = round(min(c.z for c in upper), 4) if upper else None
    fm.evaluated_get(dg).to_mesh_clear()
out['mouth_rest_rad'] = round(max(rad(v.co) for v in bpy.data.objects['mouth'].data.vertices), 3)
json.dump(out, open('D:/scratch 2026/her-c2/face2/_probe.json', 'w'), indent=1)
print('PROBE_DONE')
