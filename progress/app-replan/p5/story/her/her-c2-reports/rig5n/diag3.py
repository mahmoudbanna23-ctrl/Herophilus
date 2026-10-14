import sys, bpy, json, math, os
import numpy as np
from mathutils import Vector
from mathutils.bvhtree import BVHTree
from bpy_extras.object_utils import world_to_camera_view
RIG = 'D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her/rig_her.py'
OUTD = 'D:/scratch 2026/her-c2/rig5n'
sys.argv = [sys.argv[0], '--', '--out', 'D:/scratch 2026/her-c2/rig5m', '--tag', 'rig5m', '--stage', 'x']
src = open(RIG, encoding='utf-8').read(); src = src[:src.rindex("{'build': stage_build")]
exec(compile(src, RIG, 'exec'), globals())
scene, cam, arm = open_blend(); studio_look(scene); scene.eevee.taa_render_samples = 4
scene.render.resolution_x, scene.render.resolution_y = 720, 540
scene.frame_set(139); arm.animation_data_clear()
for o in bpy.data.objects:
    if o.type == 'MESH' and o.data.shape_keys: o.data.shape_keys.animation_data_clear()
meta = json.loads(arm['rig_meta']); pb = arm.pose.bones; S = 'R'; B = arm.data.bones
A = meta['arm'][S]; sup0 = A['sup0_deg']; sr = meta['sign']['radial_' + S]
Hrel = B['forearm_tw_R'].matrix_local.to_3x3().inverted() @ B['hand_R'].matrix_local.to_3x3()
hb = B['hand_R']; fl = (hb.matrix_local.to_3x3().inverted() @ (hb.head_local - B['forearm_R'].tail_local)).normalized()
gl = bpy.data.objects['glove_R']; ao = bpy.data.objects['arm_R']; me = gl.data; NG = len(me.vertices)
print('DIAG mods glove', [(m.name, m.type, getattr(m, 'levels', None), getattr(m, 'render_levels', None), getattr(m, 'thickness', None)) for m in gl.modifiers])
print('DIAG mods arm', [(m.name, m.type, getattr(m, 'levels', None), getattr(m, 'render_levels', None), getattr(m, 'thickness', None)) for m in ao.modifiers])
print('DIAG mats glove', [(s.material.name, s.material.use_backface_culling) for s in gl.material_slots if s.material])
Wm = lambda n: arm.matrix_world @ pb[n].matrix
SP = seam_parts(me); cuffp = SP['part'][NG - 1]
CAPV = [i for i in range(NG - 13, NG) if SP['part'][i] == cuffp]
RIMV = sorted({j for e in me.edges for i, j in (tuple(e.vertices), tuple(e.vertices)[::-1]) if i in CAPV and j not in CAPV})
def ev(o):
    e = o.evaluated_get(bpy.context.evaluated_depsgraph_get()); m = e.to_mesh(); P = np.array([list(o.matrix_world @ v.co) for v in m.vertices]); e.to_mesh_clear(); return P
def setmods(mode):   # 'probe' = armature + subsurf lvl1 (5m probe); 'render' = every show_render modifier, render levels
    for o in (gl, ao):
        for m in o.modifiers:
            if mode == 'arm': m.show_viewport = (m.type == 'ARMATURE')
            elif mode == 'probe': m.show_viewport = m.type in ('ARMATURE', 'SUBSURF')
            else:
                m.show_viewport = m.show_render
                if m.type == 'SUBSURF': m.levels = m.render_levels
    bpy.context.view_layer.update()
def past_cap(Gc):
    R_ = Gc[RIMV]; c_ = R_.mean(0); nr = np.linalg.svd(R_ - c_)[2][2]
    if nr @ (np.array(Wm('hand_R').translation) - c_) < 0: nr = -nr
    cs_ = set(CAPV) | set(RIMV); capf = [tuple(p.vertices) for p in me.polygons if set(p.vertices) <= cs_ and set(p.vertices) & set(CAPV)]
    cb_ = BVHTree.FromPolygons([Vector(map(float, c)) for c in Gc], capf); dn_ = Vector(map(float, -nr))
    P = ev(ao)
    return [Vector(map(float, p_)) for p_ in P if np.linalg.norm(p_ - c_) < 0.08 and (lambda h: h[0] is not None and h[3] > 0.002)(cb_.ray_cast(Vector(map(float, p_)), dn_, 0.08))]
def seen(P, cull):
    dg = bpy.context.evaluated_depsgraph_get(); o_ = cam.matrix_world.translation; hits = []
    for p_ in P:
        d_ = (p_ - o_); L = d_.length; dn = d_.normalized(); st = o_.copy()
        for _ in range(6):
            ok_, loc_, nrm_, fi_, ob_, _m = scene.ray_cast(dg, st, dn, distance=L + 0.01 - (st - o_).length)
            if not ok_: break
            if cull and nrm_.dot(dn) < 0 and ob_.name.startswith(('glove', 'arm')):
                e = ob_.evaluated_get(dg); mt = e.data.polygons[fi_].material_index
                mat = e.material_slots[mt].material if mt < len(e.material_slots) else None
                if mat and mat.use_backface_culling:
                    st = loc_ + dn * 1e-4; continue
            if ob_.name == ao.name and (loc_ - p_).length < 0.0015: hits.append(p_)
            break
    return hits
def rpix(path):
    im = bpy.data.images.load(path); px = np.empty(720 * 540 * 4, dtype=np.float32); im.pixels.foreach_get(px); bpy.data.images.remove(im); return px.reshape(540, 720, 4)
def truth(P, tag):
    fp = os.path.join(OUTD, '_d_%s.png' % tag); scene.render.filepath = fp; bpy.ops.render.render(write_still=True)
    ao.hide_render = True; fn = os.path.join(OUTD, '_d_%s_noarm.png' % tag); scene.render.filepath = fn; bpy.ops.render.render(write_still=True); ao.hide_render = False
    a, b = rpix(fp), rpix(fn); diff = np.abs(a[..., :3] - b[..., :3]).max(2); vis = 0; mk = a.copy()
    for p_ in P:
        u, v, _z = world_to_camera_view(scene, cam, p_); x, y = int(u * 720), int(v * 540)
        if 1 <= x < 719 and 1 <= y < 539:
            if diff[y - 1:y + 2, x - 1:x + 2].max() > 0.08: vis += 1; mk[y - 1:y + 2, x - 1:x + 2] = (0, 1, 0, 1)
            else: mk[y, x] = (1, 0, 1, 1)
    im = bpy.data.images.new('mk', 720, 540); im.pixels.foreach_set(mk.ravel()); im.filepath_raw = os.path.join(OUTD, '_d_%s_mark.png' % tag); im.file_format = 'PNG'; im.save()
    return vis
def pose(sup, wf, wd):
    tau = sup - sup0
    for n in ('forearm_tw1_', 'forearm_tw2_', 'forearm_tw_'): pb[n + S].rotation_euler.y = math.radians(tau / 3.0)
    pb['hand_R'].rotation_euler = wrist_q(fl, sr, wd, wf, 1.0, Hrel).to_euler('XYZ'); bpy.context.view_layer.update()
res = {}
cases = [('rest', 'tq', None), ('rest', 'front', None), ('neu', 'front', (0, 0, 0)), ('neu', 'tq', (0, 0, 0)), ('ext50', 'front', (0, 50, 0)), ('ext50', 'tq', (0, 50, 0)), ('ext70', 'front', (0, 70, 0))]
for nm, view, ps in cases:
    arm.data.pose_position = 'REST' if ps is None else 'POSE'
    if ps: pose(*ps)
    else: bpy.context.view_layer.update()
    setmods('arm'); Gc = ev(gl)
    set_cam(cam, 0 if view == 'front' else -40, d=0.62, target=(Wm('hand_R').translation + Wm('forearm_tw_R').translation) * 0.5, up=0.0, lens=85); bpy.context.view_layer.update()
    setmods('probe'); P1 = past_cap(Gc); h1 = seen(P1, False)
    setmods('render'); P2 = past_cap(Gc); h2 = seen(P2, False); h3 = seen(P2, True)
    v = truth(P2, nm + '_' + view)
    res[nm + '_' + view] = {'probe5m': [len(h1), len(P1)], 'render_geo': [len(h2), len(P2)], 'render_geo_cull': len(h3), 'pixel_truth': v}
    print('DIAG', nm, view, json.dumps(res[nm + '_' + view]), flush=True)
print('DIAG3 ' + json.dumps(res))
