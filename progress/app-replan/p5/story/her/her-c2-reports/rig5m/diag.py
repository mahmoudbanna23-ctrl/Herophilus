import sys, bpy, json, math
RIG = 'D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her/rig_her.py'
sys.argv = [sys.argv[0], '--', '--out', 'D:/scratch 2026/her-c2/rig5l', '--tag', 'rig5l', '--stage', 'x']
src = open(RIG, encoding='utf-8').read(); src = src[:src.rindex("{'build': stage_build")]
exec(compile(src, RIG, 'exec'), globals())
scene, cam, arm = open_blend()
arm.data.pose_position = 'REST'; bpy.context.view_layer.update()
B = arm.data.bones; S = 'R'
wr = arm.matrix_world @ B['hand_R'].head_local; el = arm.matrix_world @ B['forearm_tw1_R'].head_local
ax = (wr - el).normalized()
gl = bpy.data.objects['glove_R']; me = gl.data; NG = len(me.vertices); mw = gl.matrix_world
SP = seam_parts(me); cp = SP['part'][NG - 1]
CAPV = [i for i in range(NG - 13, NG) if SP['part'][i] == cp]
MOUTH = [i for i in SP['boundary'] if SP['part'][i] == cp and i not in CAPV]
RIM = sorted({j for e in me.edges for i, j in (tuple(e.vertices), tuple(e.vertices)[::-1]) if i in CAPV and j not in CAPV})
CUFF = [i for i in range(NG) if SP['part'][i] == cp]
MID = [i for i in CUFF if i not in CAPV and i not in RIM and i not in MOUTH]
gi = {g.index: g.name for g in gl.vertex_groups}
def geo(co):
    p = mw @ co; d = p - wr; t = d.dot(ax); r = (d - ax * t).length; return t * 1000, r * 1000
def wts(ix):
    acc = {}
    for i in ix:
        for g in me.vertices[i].groups: acc[gi[g.group]] = acc.get(gi[g.group], 0) + g.weight / len(ix)
    return {k: round(v, 3) for k, v in acc.items() if v > 0.005}
def rng(ix):
    T = [geo(me.vertices[i].co) for i in ix]
    return [round(min(t for t, r in T), 1), round(max(t for t, r in T), 1), round(min(r for t, r in T), 1), round(max(r for t, r in T), 1)]
out = {'parts': len(set(SP['part'])), 'cuff_n': len(CUFF)}
for nm, ix in (('mouth', MOUTH), ('mid', MID), ('rim', RIM), ('cap', CAPV)):
    out[nm] = {'n': len(ix), 't_mm_min_max_r_min_max': rng(ix), 'w': wts(ix)}
palm = [i for i in range(NG) if SP['part'][i] == SP['palm']]
from mathutils import kdtree
kd = kdtree.KDTree(len(palm))
for k, i in enumerate(palm): kd.insert(me.vertices[i].co, k)
kd.balance()
near = sorted({palm[k] for i in MOUTH for _c, k, _d in kd.find_range(me.vertices[i].co, 0.012)})
out['palm_near_mouth'] = {'n': len(near), 'geo': rng(near), 'w': wts(near)}
out['palm_all_geo'] = rng(palm)
for p in sorted(set(SP['part'])):
    ix = [i for i in range(NG) if SP['part'][i] == p]
    out['part_%d' % p] = {'n': len(ix), 'geo': rng(ix), 'palm': p == SP['palm'], 'cuff': p == cp}
ao = bpy.data.objects['arm_R']; am = ao.data; gia = {g.index: g.name for g in ao.vertex_groups}
aw = ao.matrix_world
past = [v for v in am.vertices if (aw @ v.co - wr).dot(ax) > (min(geo(me.vertices[i].co)[0] for i in CAPV) / 1000)]
T = [((aw @ v.co - wr).dot(ax) * 1000, ((aw @ v.co - wr) - ax * (aw @ v.co - wr).dot(ax)).length * 1000) for v in past]
out['arm_past_capmin'] = {'n': len(past), 't': [round(min(t for t, r in T), 1), round(max(t for t, r in T), 1)], 'r': [round(min(r for t, r in T), 1), round(max(r for t, r in T), 1)]}
out['arm_R_mods'] = [(m.type, m.name) for m in ao.modifiers]; out['glove_mods'] = [(m.type, m.name) for m in gl.modifiers]
out['hand_R_rest_len_mm'] = B['hand_R'].length * 1000; out['bones'] = [b.name for b in B if b.name.endswith('_R')]
print('DIAG ' + json.dumps(out))
