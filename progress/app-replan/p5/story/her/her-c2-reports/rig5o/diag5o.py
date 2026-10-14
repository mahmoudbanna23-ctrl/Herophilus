import sys, bpy, json, math
import numpy as np
RIG = 'D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her/rig_her.py'
sys.argv = [sys.argv[0], '--', '--out', 'D:/scratch 2026/her-c2/rig5o', '--tag', 'rig5o', '--stage', 'x']
src = open(RIG, encoding='utf-8').read(); src = src[:src.rindex("{'build': stage_build")]
exec(compile(src, RIG, 'exec'), globals())
scene, cam, arm = open_blend()
gl = bpy.data.objects['glove_R']; me = gl.data; NG = len(me.vertices)
for m in gl.modifiers: m.show_viewport = (m.type == 'ARMATURE')
SP = seam_parts(me); part = SP['part']
names = {g.index: g.name for g in gl.vertex_groups}
def ev():
    e = gl.evaluated_get(bpy.context.evaluated_depsgraph_get()); m = e.to_mesh()
    c = np.array([list(v.co) for v in m.vertices]); e.to_mesh_clear(); return c
E = np.array([tuple(e.vertices) for e in me.edges])
arm.data.pose_position = 'REST'; bpy.context.view_layer.update(); C0 = ev(); L0 = np.linalg.norm(C0[E[:, 0]] - C0[E[:, 1]], axis=1)
arm.data.pose_position = 'POSE'
print('D5O parts', {'palm': SP['palm'], 'cuff': part[NG - 1], 'nparts': len(set(part))})
worst = {}
for f in range(165, 181):
    scene.frame_set(f); C = ev(); L = np.linalg.norm(C[E[:, 0]] - C[E[:, 1]], axis=1); r = L / np.maximum(L0, 1e-9)
    bad = np.where((r > 1.6) | (r < 0.5))[0]
    for k in bad:
        for v in E[k]: worst[int(v)] = max(worst.get(int(v), 0), abs(math.log(r[k])))
    print('D5O f', f, 'bad edges', len(bad), 'max r', round(float(r.max()), 2), 'min r', round(float(r.min()), 2))
top = sorted(worst.items(), key=lambda x: -x[1])[:25]
for v, w in top:
    print('D5O v', v, 'part', part[v], 'logr', round(w, 2), 'co', [round(x, 4) for x in me.vertices[v].co],
          {names[g.group]: round(g.weight, 3) for g in me.vertices[v].groups if g.weight > 0.01})
