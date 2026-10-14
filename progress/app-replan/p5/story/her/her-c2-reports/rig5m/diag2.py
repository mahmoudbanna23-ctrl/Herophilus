import sys, bpy, json, math
from mathutils import Vector
from mathutils.bvhtree import BVHTree
RIG = 'D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her/rig_her.py'
sys.argv = [sys.argv[0], '--', '--out', 'D:/scratch 2026/her-c2/rig5m', '--tag', 'rig5m', '--stage', 'x']
src = open(RIG, encoding='utf-8').read(); src = src[:src.rindex("{'build': stage_build")]
exec(compile(src, RIG, 'exec'), globals())
scene, cam, arm = open_blend()
meta = json.loads(arm['rig_meta']); pb = arm.pose.bones; S = 'R'
arm.animation_data_clear(); B = arm.data.bones
A = meta['arm'][S]; sup0 = A['sup0_deg']; sr = meta['sign']['radial_' + S]
Hrel = B['forearm_tw_R'].matrix_local.to_3x3().inverted() @ B['hand_R'].matrix_local.to_3x3()
hb = B['hand_R']; fl = (hb.matrix_local.to_3x3().inverted() @ (hb.head_local - B['forearm_R'].tail_local)).normalized()
wr = arm.matrix_world @ B['hand_R'].head_local; ax = (wr - arm.matrix_world @ B['forearm_tw1_R'].head_local).normalized()
Np = (arm.matrix_world.to_3x3() @ B['hand_R'].matrix_local.to_3x3() @ Vector((0, 0, 1))).normalized()
gl = bpy.data.objects['glove_R']; ao = bpy.data.objects['arm_R']; me = gl.data; NG = len(me.vertices)
SP = seam_parts(me); cp = SP['part'][NG - 1]
for o in (gl, ao):
    for m in o.modifiers:
        if m.type != 'ARMATURE': m.show_viewport = False
def ev(o):
    e = o.evaluated_get(bpy.context.evaluated_depsgraph_get()); m = e.to_mesh(); P = [o.matrix_world @ v.co for v in m.vertices]; e.to_mesh_clear(); return P
arm.data.pose_position = 'REST'; bpy.context.view_layer.update(); AR = ev(ao)
def geo(p):
    d = p - wr; t = d.dot(ax); rv = d - ax * t; ang = math.degrees(math.atan2(rv.dot(ax.cross(Np)), rv.dot(Np))); return round(t * 1000, 1), round(rv.length * 1000, 1), round(ang)
arm.data.pose_position = 'POSE'
res = {}
for wf in [float(x) for x in sys.argv[sys.argv.index('--') + 1:][-1:]] if False else (70.0, 40.0, -70.0):
    tau = sup0 * -1.0 * -1 * 0 + (0 - sup0)
    for n in ('forearm_tw1_', 'forearm_tw2_', 'forearm_tw_'): pb[n + S].rotation_euler.y = math.radians((0 - sup0) / 3.0)
    pb['hand_R'].rotation_euler = wrist_q(fl, sr, 0.0, wf, 1.0, Hrel).to_euler('XYZ'); bpy.context.view_layer.update()
    G = ev(gl); P = ev(ao)
    parts = {}
    for pi in set(SP['part']): parts[pi] = [tuple(p.vertices) for p in me.polygons if SP['part'][p.vertices[0]] == pi]
    bv = {pi: BVHTree.FromPolygons(G, f) for pi, f in parts.items()}
    tg = (arm.matrix_world @ pb['hand_R'].head + arm.matrix_world @ pb['forearm_tw_R'].head) * 0.5
    out = []
    for yaw in (0, -40):
        set_cam(cam, yaw, d=0.62, target=tg, up=0.0, lens=85); bpy.context.view_layer.update(); o_ = cam.matrix_world.translation
        vis = []
        for i, p in enumerate(P):
            if (AR[i] - wr).dot(ax) < -0.028: continue
            d = p - o_; L = d.length; hitp = None
            for pi, b in bv.items():
                h = b.ray_cast(o_, d.normalized(), L - 0.001)
                if h[0] is not None: hitp = pi; break
            if hitp is None: vis.append((i, geo(AR[i])))
        out.append({'yaw': yaw, 'n_vis_arm_end': len(vis), 'sample': vis[:12]})
    res[wf] = out
print('DIAG2 ' + json.dumps(res))
