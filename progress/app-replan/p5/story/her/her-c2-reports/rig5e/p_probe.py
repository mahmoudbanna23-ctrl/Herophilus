import bpy, json, math
from mathutils import Vector
from mathutils.bvhtree import BVHTree
import numpy as np
sc = bpy.context.scene; A = bpy.data.objects['her_rig']
F = list(range(sc.frame_start, sc.frame_end + 1))
def W(b): return A.matrix_world @ A.pose.bones[b].matrix
def ax(m, i): return Vector(m.col[i][:3]).normalized()
def ang(u, v): return math.degrees(u.angle(v))
sc.frame_set(0)
nose = bpy.data.objects['nose']; disc = bpy.data.objects['body_disc']
front = Vector((0, (nose.matrix_world.translation.y - 0) , 0))
nc = sum((nose.matrix_world @ v.co for v in nose.data.vertices), Vector()) / len(nose.data.vertices)
dc = sum((disc.matrix_world @ v.co for v in disc.data.vertices), Vector()) / len(disc.data.vertices)
front = Vector((0, 1 if nc.y > dc.y else -1, 0)); print('FRONT', front)
# palm normal from glove PCA in hand-local space at rest
def palm_local(S):
    g = bpy.data.objects['glove_' + S]; dg = bpy.context.evaluated_depsgraph_get()
    e = g.evaluated_get(dg); me = e.to_mesh()
    inv = W('hand_' + S).inverted()
    P = np.array([(inv @ (g.matrix_world @ v.co))[:] for v in me.vertices]); e.to_mesh_clear()
    P -= P.mean(0); w, V = np.linalg.eigh(P.T @ P)
    return Vector(V[:, 0]), w
NL = {}
for S in 'RL':
    n, w = palm_local(S); NL[S] = n; print('PCA', S, [round(x, 5) for x in w], n)
# sign: R palm faces front at rest (art: open palm forward); L: mirror thumb relation
def world_n(S): return (W('hand_' + S).to_3x3() @ NL[S]).normalized()
def thumbdir(S):
    h = ax(W('hand_' + S), 1); t = W('thumb_' + S).translation - W('hand_' + S).translation
    t = t - h * t.dot(h); return t.normalized()
nR = world_n('R')
if nR.dot(front) < 0: NL['R'] = -NL['R']
cR = world_n('R').cross(ax(W('hand_R'), 1)).dot(thumbdir('R'))
nL = world_n('L'); cL = nL.cross(ax(W('hand_L'), 1)).dot(thumbdir('L'))
if (cL > 0) == (cR > 0): NL['L'] = -NL['L']  # mirrored hand must flip the handedness sign
print('REST palm.front R', round(world_n('R').dot(front), 3), 'L', round(world_n('L').dot(front), 3), 'cR', round(cR, 3))
rest_hinge = {S: ax(W('forearm_' + S), 0) for S in 'RL'}
rows = []
for f in F:
    sc.frame_set(f); r = {'f': f}
    for S in 'RL':
        U, Fa, T, H, C = (W(b + '_' + S) for b in ('upperarm', 'forearm', 'forearm_tw', 'hand', 'clavicle'))
        u, fa, h = ax(U, 1), ax(Fa, 1), ax(H, 1); d = ax(T, 1)
        el = ang(u, fa); sgn = 1 if u.cross(fa).dot(ax(Fa, 0)) >= 0 else -1
        n = (H.to_3x3() @ NL[S]).normalized(); t = thumbdir(S)
        flex = -math.degrees(math.atan2(d.dot(n), d.dot(h)))
        rad = -math.degrees(math.atan2(d.dot(t), d.dot(h)))
        r[S] = dict(elbow=round(el, 2), elsg=sgn, hum_el=round(ang(u, Vector((0, 0, -1))), 2),
                    clav_z=round(math.degrees(math.asin(max(-1, min(1, ax(C, 1).z)))), 2),
                    wflex=round(flex, 2), wdev=round(rad, 2), palm_front=round(n.dot(front), 3),
                    palm=[round(x, 3) for x in n], fa_vert=round(ang(fa, Vector((0, 0, 1))), 1),
                    elbow_z=round(Fa.translation.z, 4), sh_z=round(U.translation.z, 4),
                    twist_tw=round(math.degrees(A.pose.bones['forearm_tw_' + S].rotation_euler.y), 2),
                    twist_fa=round(math.degrees(A.pose.bones['forearm_' + S].rotation_euler.y), 2),
                    hand_y=[round(x, 3) for x in h], glove_c=None)
    for S in 'RL':
        r[S]['hand_pos'] = [round(x, 4) for x in W('hand_' + S).translation]
        r[S]['foot_pos'] = [round(x, 4) for x in W('foot_' + S).translation]
    r['pelvis'] = [round(x, 4) for x in W('pelvis').translation]
    rows.append(r)
json.dump({'front': list(front), 'rows': rows}, open(bpy.path.abspath('//') and r'D:/scratch 2026/her-c2/rig5e/probe_bones.json', 'w'))
# intersection: arm/glove tris vs body parts, excluding a socket sphere around the GH head
OTH = ['body_disc', 'toga', 'toga_trim', 'skirt', 'shoulder_knot', 'waist_cord', 'wreath', 'leg_R', 'leg_L']
LIM = ['arm_R', 'arm_L', 'glove_R', 'glove_L']
def bvh(name, dg):
    o = bpy.data.objects[name]; e = o.evaluated_get(dg); me = e.to_mesh(); M = o.matrix_world
    V = [M @ v.co for v in me.vertices]; P = [tuple(p.vertices) for p in me.polygons]; e.to_mesh_clear()
    return BVHTree.FromPolygons(V, P), V, P
hits = {}
for f in F:
    sc.frame_set(f); dg = bpy.context.evaluated_depsgraph_get()
    T = {n: bvh(n, dg) for n in OTH + LIM}
    for l in LIM:
        S = l[-1]; gh = W('upperarm_' + S).translation
        for o in OTH:
            pr = T[l][0].overlap(T[o][0])
            if not pr: continue
            V, P = T[l][1], T[l][2]
            far = [a for a, b in pr if min((V[i] - gh).length for i in P[a]) > 0.07]
            if far:
                hits.setdefault(l + '|' + o, []).append([f, len(far), round(min((V[i]-gh).length for a in far for i in P[a]), 3)])
json.dump(hits, open(r'D:/scratch 2026/her-c2/rig5e/probe_hits.json', 'w'))
print('HITS', {k: (len(v), v[0][0], v[-1][0], max(x[1] for x in v)) for k, v in hits.items()})
