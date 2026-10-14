import bpy, json, math
from mathutils import Vector, Matrix
from mathutils.bvhtree import BVHTree
OUT = 'D:/scratch 2026/her-c2/rig5e-refute/'
sc = bpy.context.scene; A = bpy.data.objects['her_rig']; F = 143
py = json.loads(A['rig_meta'])['py'][F]
cam = sc.camera or bpy.data.objects.get('Camera')
def set_cam(yaw_deg, d=3.4, target=Vector((-0.1, py, 0.6)), up=0.3):
    yaw = math.radians(yaw_deg); cam.location = target + Vector((d*math.sin(yaw), -d*math.cos(yaw), up))
    cam.rotation_euler = (target - cam.location).to_track_quat('-Z', 'Y').to_euler()
def ev(name):
    dg = bpy.context.evaluated_depsgraph_get(); o = bpy.data.objects[name].evaluated_get(dg)
    me = o.to_mesh(); pts = [o.matrix_world @ v.co for v in me.vertices]
    tris = [tuple(p.vertices) for p in me.polygons]; o.to_mesh_clear(); return pts, tris
def gap():
    dp, dt = ev('body_disc'); b = BVHTree.FromPolygons(dp, dt); gp, _ = ev('glove_R')
    return min(b.find_nearest(p)[3] for p in gp) * 1000
def W(b): return A.matrix_world @ A.pose.bones[b]
def vis(yaw):
    set_cam(yaw); bpy.context.view_layer.update(); dg = bpy.context.evaluated_depsgraph_get()
    ub = A.pose.bones['upperarm_R']; h = A.matrix_world @ ub.head; t = A.matrix_world @ ub.tail
    seen = 0; n = 9; hits = {}
    for i in range(n):
        p = h.lerp(t, (i + 0.5) / n); d = p - cam.location; L = d.length
        ok, loc, nor, idx, ob, M = sc.ray_cast(dg, cam.location, d.normalized(), distance=L + 0.05)
        nm = ob.name if ob else None; hits[nm] = hits.get(nm, 0) + 1
        if nm == 'arm_R': seen += 1
    return seen, n, hits, [round(x, 3) for x in h], [round(x, 3) for x in t]
def run(tag, fn=None, yaws=(-45, 45)):
    sc.frame_set(F)
    if fn: fn()
    bpy.context.view_layer.update()
    r = {'tag': tag, 'gap_mm': round(gap(), 1)}
    for y in yaws: r['vis_yaw%d' % y] = vis(y)
    print('LEVER', json.dumps(r)); return r
def clav(x=0, z=0):
    def f():
        pb = A.pose.bones['clavicle_R']; print('clav mode', pb.rotation_mode, tuple(round(math.degrees(a), 1) for a in pb.rotation_euler) if pb.rotation_mode != 'QUATERNION' else pb.rotation_quaternion)
        if pb.rotation_mode == 'QUATERNION':
            pb.rotation_quaternion = pb.rotation_quaternion @ Matrix.Rotation(math.radians(x), 4, 'X').to_quaternion() @ Matrix.Rotation(math.radians(z), 4, 'Z').to_quaternion()
        else:
            pb.rotation_euler.x += math.radians(x); pb.rotation_euler.z += math.radians(z)
    return f
res = [run('base')]
for x in (-15, 15): res.append(run('clav_x%+d' % x, clav(x=x)))
for z in (-10, 10): res.append(run('clav_z%+d' % z, clav(z=z)))
json.dump(res, open(OUT + 'lever_probe.json', 'w'), indent=1)
# stills: base tq, base mirrored (yaw +45)
sc.render.engine = 'BLENDER_WORKBENCH'; sc.render.resolution_x = sc.render.resolution_y = 600; sc.render.resolution_percentage = 100
sc.frame_set(F)
for y in (-45, 45):
    set_cam(y); sc.render.filepath = OUT + 'lever_f143_yaw%+d.png' % y; bpy.ops.render.render(write_still=True)
