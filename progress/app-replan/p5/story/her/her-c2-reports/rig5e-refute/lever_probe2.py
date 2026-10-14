import bpy, json, math
from mathutils import Vector, Matrix
from mathutils.bvhtree import BVHTree
from bpy_extras.object_utils import world_to_camera_view as w2c
OUT = 'D:/scratch 2026/her-c2/rig5e-refute/'
sc = bpy.context.scene; A = bpy.data.objects['her_rig']; F = 143
py = json.loads(A['rig_meta'])['py'][F]; cam = sc.camera
def set_cam(yaw_deg, d=3.4, target=Vector((-0.1, py, 0.6)), up=0.3):
    yaw = math.radians(yaw_deg); cam.location = target + Vector((d*math.sin(yaw), -d*math.cos(yaw), up))
    cam.rotation_euler = (target - cam.location).to_track_quat('-Z', 'Y').to_euler()
def ev(name):
    dg = bpy.context.evaluated_depsgraph_get(); o = bpy.data.objects[name].evaluated_get(dg)
    me = o.to_mesh(); pts = [o.matrix_world @ v.co for v in me.vertices]
    tris = [tuple(p.vertices) for p in me.polygons]; o.to_mesh_clear(); return pts, tris
def gap(g='glove_R'):
    dp, dt = ev('body_disc'); b = BVHTree.FromPolygons(dp, dt); gp, _ = ev(g)
    return min(b.find_nearest(p)[3] for p in gp) * 1000
def measure(tag):
    bpy.context.view_layer.update(); set_cam(-45); bpy.context.view_layer.update()
    ub = A.pose.bones['upperarm_R']; h = A.matrix_world @ ub.head; t = A.matrix_world @ ub.tail
    v = (t - h).normalized(); c = (cam.location - h).normalized()
    ang = math.degrees(v.angle(c)); ph = w2c(sc, cam, h); pt = w2c(sc, cam, t)
    proj = (Vector((pt.x - ph.x, pt.y - ph.y)).length) * 600  # px at 600 wide
    r = {'tag': tag, 'glove_gap_mm': round(gap(), 1), 'forearm_gap_mm': round(gap('arm_R'), 1), 'upperarm_to_view_deg': round(ang, 1),
         'upperarm_proj_px600': round(proj, 1), 'foreshorten_ratio': round(math.sin(math.radians(ang)), 2),
         'elbow': [round(x, 3) for x in t], 'elbow_above_shoulder_mm': round((t.z - h.z) * 1000)}
    print('L2', json.dumps(r)); return r
def swing(theta, clz=0):
    sc.frame_set(F)
    if clz: A.pose.bones['clavicle_R'].rotation_euler.z += math.radians(clz); bpy.context.view_layer.update()
    if theta:
        pb = A.pose.bones['upperarm_R']; h = pb.head.copy()
        R = Matrix.Translation(h) @ Matrix.Rotation(math.radians(theta), 4, 'Z') @ Matrix.Translation(-h)
        pb.matrix = R @ pb.matrix
    bpy.context.view_layer.update()
res = []
for th, cz in ((0, 0), (-15, 0), (15, 0), (-25, 0), (-15, 10), (-25, 10), (-35, 10)):
    swing(th, cz); res.append(measure('swingZ%+d_clavz%+d' % (th, cz)))
json.dump(res, open(OUT + 'lever_probe2.json', 'w'), indent=1)
sc.render.engine = 'BLENDER_WORKBENCH'; sc.display.shading.light = 'STUDIO'; sc.display.shading.color_type = 'MATERIAL'
sc.render.resolution_x = sc.render.resolution_y = 600
best = max((r for r in res if r['glove_gap_mm'] >= 25 and r['forearm_gap_mm'] >= 0), key=lambda r: r['upperarm_to_view_deg'])
print('BEST', best['tag'])
for tag, th, cz in (('base', 0, 0), ('best', int(best['tag'].split('_')[0][6:]), int(best['tag'].split('clavz')[1]))):
    swing(th, cz); set_cam(-45); sc.render.filepath = OUT + 'lever2_tq_%s.png' % tag; bpy.ops.render.render(write_still=True)
