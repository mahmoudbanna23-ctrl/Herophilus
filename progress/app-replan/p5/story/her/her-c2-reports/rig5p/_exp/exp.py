import bpy, sys, os
H = 'D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her/rig_her.py'
src = open(H, encoding='utf-8').read().rsplit('\n{', 1)[0]
sys.argv = ['x', '--', '--stage', 'none', '--out', 'D:/scratch 2026/her-c2/rig5o', '--tag', 'rig5o']
g = {'__name__': 'exp', '__file__': H}; exec(compile(src, H, 'exec'), g)
from mathutils import Vector
from mathutils.bvhtree import BVHTree
E = 'D:/scratch 2026/her-c2/rig5p/_exp'
scene, cam, arm = g['open_blend'](); g['studio_look'](scene); scene.eevee.taa_render_samples = 12
pb = arm.pose.bones; Wm = lambda n: arm.matrix_world @ pb[n].matrix
cam.animation_data_clear()
def pieceN(S):
    gl = bpy.data.objects['glove_' + S]; wp = bpy.data.objects['wristpiece_' + S]
    gm = gl.data; wm = wp.data; n = len(wm.vertices) // 4
    bvh = BVHTree.FromPolygons([v.co for v in gm.vertices], [tuple(p.vertices) for p in gm.polygons])
    N = []
    for r in range(4):
        for k in range(n):
            co = wm.vertices[r * n + k].co
            if r < 2:   # A / M0: the mouth vert's own normal (nearest glove vert)
                i = min(range(len(gm.vertices)), key=lambda j: (gm.vertices[j].co - co).length_squared) if r == 1 else None
                N.append(None if i is None else gm.vertices[i].normal.copy())
            else:
                N.append(None)
    for k in range(n):
        N[k] = N[n + k]
        loc, nr, fi, d = bvh.find_nearest(wm.vertices[3 * n + k].co)
        N[3 * n + k] = nr.normalized()
        N[2 * n + k] = (N[n + k] + N[3 * n + k]).normalized()
    wm.normals_split_custom_set_from_vertices(N)
    for m in wp.modifiers:
        if m.type == 'SUBSURF': m.use_custom_normals = True
    print('EXP custom normals', S, n, [m.type for m in wp.modifiers])
def hull(on):
    for o in bpy.data.objects:
        if o.name.startswith('glove_'):
            for m in o.modifiers:
                if m.name == 'outline_hull': m.show_render = on
def shots(tag):
    scene.frame_set(173); arm.data.pose_position = 'REST'; bpy.context.view_layer.update()
    t = (Wm('hand_R').translation + Wm('forearm_tw_R').translation) * 0.5
    scene.render.resolution_x, scene.render.resolution_y = 720, 540
    for v, y in (('front', 0), ('tq', -40)):
        g['set_cam'](cam, y, d=0.62, target=t, up=0.0, lens=85); bpy.context.view_layer.update()
        scene.render.filepath = os.path.join(E, '%s_rest_%s.png' % (tag, v)); bpy.ops.render.render(write_still=True)
    arm.data.pose_position = 'POSE'; scene.frame_set(173); bpy.context.view_layer.update()
    t = Wm('hand_R').translation.copy(); scene.render.resolution_x = scene.render.resolution_y = 520
    for v, y in (('front', 0), ('tq', -45)):
        g['set_cam'](cam, y, d=0.85, target=t, up=0.0, lens=85); bpy.context.view_layer.update()
        scene.render.filepath = os.path.join(E, '%s_f173_%s.png' % (tag, v)); bpy.ops.render.render(write_still=True)
shots('v0'); hull(False); shots('v1'); hull(True)
pieceN('R'); pieceN('L'); shots('v2'); hull(False); shots('v3')
print('EXPDONE')
