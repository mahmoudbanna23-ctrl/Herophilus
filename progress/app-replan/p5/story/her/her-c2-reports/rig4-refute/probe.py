import bpy, json, math
import numpy as np
from mathutils import Vector
from mathutils.bvhtree import BVHTree
sc=bpy.context.scene; arm=bpy.data.objects['her_rig']; arm.data.pose_position='POSE'
M=[o for o in bpy.data.objects if o.type=='MESH']
for o in M:
    for m in o.modifiers:
        if m.type!='ARMATURE': m.show_viewport=False
info={o.name:(len(o.data.vertices),[g.name for g in o.vertex_groups][:40]) for o in M}
# feet: weight>0.5 on foot/toe
feet={'R':[],'L':[]}
for o in M:
    nm={g.index:g.name for g in o.vertex_groups}
    for v in o.data.vertices:
        w={}
        for g in v.groups: w[nm[g.group]]=w.get(nm[g.group],0)+g.weight
        for S in 'RL':
            if w.get('foot_'+S,0)+w.get('toe_'+S,0)>0.5: feet[S].append((o.name,v.index))
F0,F1=sc.frame_start,sc.frame_end
P={o.name:[] for o in M}
bones={}
for f in range(F0,F1+1):
    sc.frame_set(f); dg=bpy.context.evaluated_depsgraph_get()
    for o in M:
        oe=o.evaluated_get(dg); me=oe.to_mesh(); mw=np.array(oe.matrix_world)
        a=np.empty(len(me.vertices)*3); me.vertices.foreach_get('co',a); a=a.reshape(-1,3)
        P[o.name].append(a@mw[:3,:3].T+mw[:3,3]); oe.to_mesh_clear()
    for pb in arm.pose.bones:
        m=arm.matrix_world@pb.matrix
        bones.setdefault(pb.name,[]).append((list(m.col[0].to_3d()),list(m.col[1].to_3d()),list(m.col[2].to_3d()),list(m.translation)))
np.savez_compressed('probe_verts.npz',**{k:np.array(v) for k,v in P.items()})
json.dump({'info':info,'feet':feet,'bones':bones,'F0':F0,'F1':F1,'disc_polys':[list(p.vertices) for p in bpy.data.objects['body_disc'].data.polygons],
 'meta':json.loads(arm['rig_meta'])},open('probe_meta.json','w'))
print('PROBE done',{k:v[0] for k,v in info.items()})
