import bpy, sys, json, math
sys.path.insert(0, 'D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her')
import face_rig as FR
bpy.ops.wm.open_mainfile(filepath=FR.BLEND)
arm = bpy.data.objects['face_rig']
ob = bpy.data.objects['eye_L']
mats = [0] * len(ob.data.vertices)
for p in ob.data.polygons:
    for vi in p.vertices:
        mats[vi] = p.material_index
out = {}
for lab, st in (('rest', {}), ('AU4', dict(keys={'AU4_brow_lowerer_L': 1.0}))):
    FR.pose_state(arm, st)
    dg = bpy.context.evaluated_depsgraph_get()
    e = ob.evaluated_get(dg); me = e.to_mesh()
    co = [ob.matrix_world @ v.co for v in me.vertices]; e.to_mesh_clear()
    rim = [c for c, m in zip(co, mats) if m == 3]
    pu = [(i, c) for i, (c, m) in enumerate(zip(co, mats)) if m in (1, 2)]
    out[lab] = dict(rim_x=(round(min(c.x for c in rim), 4), round(max(c.x for c in rim), 4)),
                    rim_z=(round(min(c.z for c in rim), 4), round(max(c.z for c in rim), 4)),
                    pu_x=(round(min(c.x for i, c in pu), 4), round(max(c.x for i, c in pu), 4)),
                    pu_z=(round(min(c.z for i, c in pu), 4), round(max(c.z for i, c in pu), 4)),
                    pu_y=(round(min(c.y for i, c in pu), 4), round(max(c.y for i, c in pu), 4)),
                    worst_low=[(i, [round(v, 4) for v in c]) for i, c in sorted(pu, key=lambda t: t[1].z)[:3]],
                    worst_high=[(i, [round(v, 4) for v in c]) for i, c in sorted(pu, key=lambda t: -t[1].z)[:3]])
kb = ob.data.shape_keys.key_blocks
out['au4_key_pupil_dz_range'] = None
b = kb[0].data; k = kb['AU4_brow_lowerer_L'].data
d = [(k[i].co.z - b[i].co.z, i) for i, m in enumerate(mats) if m in (1, 2)]
out['au4_key_pupil_dz_minmax'] = (round(min(d)[0], 4), min(d)[1], round(max(d)[0], 4), max(d)[1])
json.dump(out, open('D:/scratch 2026/her-c2/face2/_probe_au4.json', 'w'), indent=1)
print('PROBE_DONE')
