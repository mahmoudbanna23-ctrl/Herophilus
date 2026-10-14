import bpy, sys, json
from mathutils.bvhtree import BVHTree
H = 'D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her'
sys.path.insert(0, H)
import face_rig as FR
R = 'D:/scratch 2026/her-c2/face1-refute'
bpy.ops.wm.open_mainfile(filepath=FR.BLEND)
arm = bpy.data.objects['face_rig']; M = bpy.data.objects['mouth']
dg = lambda: bpy.context.evaluated_depsgraph_get()
def ev(ob):
    e = ob.evaluated_get(dg()); me = e.to_mesh()
    co = [ob.matrix_world @ v.co for v in me.vertices]; t = BVHTree.FromPolygons(co, [p.vertices[:] for p in me.polygons]); e.to_mesh_clear(); return co, t
disc = ev(bpy.data.objects['body_disc'])[1]
out = {}
def m(lab, st):
    FR.pose_state(arm, st); co, t = ev(M)
    out[lab] = dict(disc_hit=bool(disc.overlap(t)), max_surf_mm=round(max(c.y - FR.face_y(c.x, c.z) for c in co) * 1000, 2),
                    min_surf_mm=round(min(c.y - FR.face_y(c.x, c.z) for c in co) * 1000, 2))
m('rest', {})
for kb in M.data.shape_keys.key_blocks[1:]:
    m(kb.name, dict(keys={kb.name: 1.0}))
m('jaw bone 1', dict(jaw=1.0)); m('jaw side +1', dict(jaw_side=1.0)); m('jaw side -1', dict(jaw_side=-1.0))
m('jaw side +1 + jaw 1', dict(jaw=1.0, jaw_side=1.0))
m('AU20 both + jaw_side', dict(keys={'AU20_lip_stretcher_L': 1, 'AU20_lip_stretcher_R': 1}, jaw_side=1.0))
m('AU12 both + AU20 both', dict(keys={'AU12_lip_corner_puller_L': 1, 'AU12_lip_corner_puller_R': 1, 'AU20_lip_stretcher_L': 1, 'AU20_lip_stretcher_R': 1}))
json.dump(out, open(R + '/probe2.json', 'w'), indent=1)
# GLB: import, drive every morph to 1, measure evaluated displacement
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=FR.GLB)
g = {}
for o in bpy.data.objects:
    if o.type == 'MESH' and o.data.shape_keys:
        kbs = o.data.shape_keys.key_blocks
        base = [o.matrix_world @ v.co for v in o.evaluated_get(dg()).to_mesh().vertices]
        o.evaluated_get(dg()).to_mesh_clear()
        for kb in kbs[1:]:
            for k in kbs[1:]: k.value = 0.0
            kb.value = 1.0; bpy.context.view_layer.update()
            e = o.evaluated_get(dg()); co = [o.matrix_world @ v.co for v in e.to_mesh().vertices]; e.to_mesh_clear()
            g[o.name + ':' + kb.name] = round(max((a - b).length for a, b in zip(co, base)) * 1000, 2)
            kb.value = 0.0
out['glb_eval_max_mm'] = g
json.dump(out, open(R + '/probe2.json', 'w'), indent=1)
print('PROBE2_DONE')
