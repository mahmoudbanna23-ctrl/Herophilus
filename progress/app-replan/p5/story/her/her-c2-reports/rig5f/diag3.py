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


import math
from mathutils.bvhtree import BVHTree
from bpy_extras.object_utils import world_to_camera_view as w2c
prev=None; pops=[]; sp={}
for f in range(100, sc.frame_end+1):
    sc.frame_set(f)
    q=A.pose.bones['forearm_R'].rotation_euler.to_quaternion()
    sp[f]=math.degrees(prev.rotation_difference(q).angle) if prev else 0.0
    prev=q
for f in range(101, sc.frame_end):
    m=(sp[f-1]+sp[f+1])/2
    if sp[f]>1.5*m and sp[f]>3: pops.append((f, round(sp[f],2)))
print('DG maxsp %.2f at %d'%(max(sp.values()), max(sp,key=sp.get)), 'over8', [f for f in sp if sp[f]>8], 'pops', pops)
def ev(name):
    dg=bpy.context.evaluated_depsgraph_get(); o=bpy.data.objects[name].evaluated_get(dg); me=o.to_mesh()
    pts=[o.matrix_world@v.co for v in me.vertices]; tris=[tuple(p.vertices) for p in me.polygons]; o.to_mesh_clear(); return pts,tris
pf=[];fv=[];ez=[];hx=[];gaps=[];angs=[]
cam=sc.camera; meta=json.loads(A['rig_meta'])
def tqcam(F):
    py=meta['py'][F]; tgt=Vector((-0.1,py,0.6)); yaw=math.radians(-45)
    cam.location=tgt+Vector((3.4*math.sin(yaw),-3.4*math.cos(yaw),0.3)); cam.rotation_euler=(tgt-cam.location).to_track_quat('-Z','Y').to_euler()
for f in range(132,155):
    sc.frame_set(f)
    U,Fa,H=(W(b+'_R') for b in ('upperarm','forearm','hand'))
    n=(H.to_3x3()@NL['R']).normalized(); pf.append(n.dot(front))
    fv.append(ang(ax(Fa,1),Vector((0,0,1)))); ez.append((Fa.translation.z-U.translation.z)*1000); hx.append(H.translation.x)
    if f%3==0:
        dp,dt=ev('body_disc'); b=BVHTree.FromPolygons(dp,dt); gp,_=ev('glove_R'); gaps.append(min(b.find_nearest(p)[3] for p in gp)*1000)
        tqcam(f); bpy.context.view_layer.update()
        ub=A.pose.bones['upperarm_R']; h=A.matrix_world@ub.head; t=A.matrix_world@ub.tail
        angs.append(ang((t-h).normalized(),(cam.location-h).normalized()))
print('DG palm %.3f..%.3f fa_vert %.1f..%.1f elbow-sh mm %.0f..%.0f hand_x range %.0f mm gap_min %.1f ua_view_deg %.1f..%.1f'%(min(pf),max(pf),min(fv),max(fv),min(ez),max(ez),(max(hx)-min(hx))*1000,min(gaps),min(angs),max(angs)))
