import bpy, math
from mathutils import Vector
from mathutils.bvhtree import BVHTree
sc = bpy.context.scene; A = bpy.data.objects['her_rig']
def mesh(n, dg):
    o = bpy.data.objects[n]; e = o.evaluated_get(dg); me = e.to_mesh(); M = o.matrix_world
    V = [M @ v.co for v in me.vertices]; P = [tuple(p.vertices) for p in me.polygons]; e.to_mesh_clear(); return V, P
for f in (0, 40, 52, 64, 76):
    sc.frame_set(f); dg = bpy.context.evaluated_depsgraph_get()
    Va, Pa = mesh('arm_L', dg); Vt, Pt = mesh('toga', dg)
    gh = (A.matrix_world @ A.pose.bones['upperarm_L'].matrix).translation
    pr = BVHTree.FromPolygons(Va, Pa).overlap(BVHTree.FromPolygons(Vt, Pt))
    ds = sorted(set(a for a, b in pr)); dd = [max((Va[i] - gh).length for i in Pa[a]) for a in ds]
    cs = [sum((Va[i] for i in Pa[a]), Vector()) / len(Pa[a]) for a in ds]
    # arm length along bone chain
    L = sum(A.pose.bones[b].length for b in ('upperarm_L', 'forearm_L', 'forearm_tw_L'))
    print('TOGA f%d tris %d maxdist %.3f of chain %.3f  y-range %.3f..%.3f z %.3f..%.3f gh %s' % (f, len(ds), max(dd), L,
          min(c.y for c in cs), max(c.y for c in cs), min(c.z for c in cs), max(c.z for c in cs), tuple(round(x, 3) for x in gh)))
# render back three-quarter of her left shoulder at f0, f40, f64
cam = bpy.data.objects['cam']; sc.camera = cam
sc.render.resolution_x, sc.render.resolution_y = 960, 540
for f, tag, pos in ((0, 'back', (1.6, 1.9, 1.0)), (40, 'back', (1.6, 1.9, 1.0)), (64, 'back', (1.6, 1.9, 1.0)), (40, 'left', (2.4, -0.2, 0.9))):
    sc.frame_set(f)
    tgt = (A.matrix_world @ A.pose.bones['upperarm_L'].matrix).translation + Vector((0, 0, -0.1))
    cam.location = Vector(pos) + Vector((tgt.x, tgt.y, 0))
    d = tgt - cam.location; cam.rotation_mode = 'QUATERNION'; cam.rotation_quaternion = d.to_track_quat('-Z', 'Y')
    cam.data.lens = 85; cam.data.clip_end = 200
    sc.render.filepath = r'D:/scratch 2026/her-c2/rig5c-refute/togaL_%s_f%d.png' % (tag, f)
    bpy.ops.render.render(write_still=True)
