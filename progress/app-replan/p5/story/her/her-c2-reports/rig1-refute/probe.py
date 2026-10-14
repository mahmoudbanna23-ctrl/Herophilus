import bpy, json, math, sys
from mathutils import Vector
OUT='D:/scratch 2026/her-c2/rig1-refute/'
arm=bpy.data.objects['her_rig']; meta=json.loads(arm['rig_meta']); sc=bpy.context.scene
R={}
R['rot_modes']=sorted(set(pb.rotation_mode for pb in arm.pose.bones))
R['constraints']=sorted(set(c.type for pb in arm.pose.bones for c in pb.constraints))
R['bones']=[b.name for b in arm.data.bones]
R['drivers']=[(o.name,len(o.animation_data.drivers)) for o in bpy.data.objects if o.animation_data and o.animation_data.drivers]
for k in bpy.data.shape_keys:
    if k.animation_data and k.animation_data.drivers: R['drivers'].append((k.name,len(k.animation_data.drivers)))
ad=arm.animation_data.action
fc=[]
try:
    for f in ad.fcurves: fc.append(f.data_path)
except Exception:
    for l in ad.layers:
        for s in l.strips:
            for cb in s.channelbags:
                for f in cb.fcurves: fc.append(f.data_path)
R['fcurve_kinds']=sorted(set(p.split('.')[-1] for p in fc)); R['loc_paths']=sorted(set(p for p in fc if p.endswith('location')))
# shape keys
sk={}
for o in bpy.data.objects:
    if o.type=='MESH' and o.data.shape_keys:
        kb=o.data.shape_keys.key_blocks; b=kb[0]; n=len(o.data.vertices)
        sk[o.name]={k.name:[len(k.data)==n and len(b.data)==n, sum(1 for i in range(n) if (k.data[i].co-b.data[i].co).length>1e-7), round(max((k.data[i].co-b.data[i].co).length for i in range(n))*1000,2)] for k in kb[1:]}
        sk[o.name]['_basis_eq_mesh']=max((b.data[i].co-o.data.vertices[i].co).length for i in range(n))
R['shape_keys']=sk
R['meshes']={o.name:[m.type for m in o.modifiers] for o in bpy.data.objects if o.type=='MESH'}
# mesh-level feet: disable non-armature modifiers, collect verts dominated by foot/toe groups
feet={'R':[],'L':[]}
for o in bpy.data.objects:
    if o.type!='MESH': continue
    for m in o.modifiers:
        if m.type!='ARMATURE': m.show_viewport=False
    names={g.index:g.name for g in o.vertex_groups}
    for v in o.data.vertices:
        if not v.groups: continue
        g=max(v.groups,key=lambda g:g.weight); nm=names[g.group]
        for S in 'RL':
            if nm in ('foot_'+S,'toe_'+S) and g.weight>0.99: feet[S].append((o.name,v.index))
R['foot_verts']={S:len(feet[S]) for S in feet}
objs=sorted(set(o for S in feet for o,_ in feet[S]))
R['foot_objs']=objs
dg=bpy.context.evaluated_depsgraph_get()
F0,F1=sc.frame_start,sc.frame_end
pos={}
minz={'R':[],'L':[]}; allmin=[]
for f in range(F0,F1+1):
    sc.frame_set(f); dg=bpy.context.evaluated_depsgraph_get()
    cache={}
    for on in objs:
        oe=bpy.data.objects[on].evaluated_get(dg); me=oe.to_mesh(); mw=oe.matrix_world.copy()
        cache[on]=[mw@v.co for v in me.vertices]; oe.to_mesh_clear()
    for S in 'RL':
        pts=[cache[o][i] for o,i in feet[S]]
        pos[(S,f)]=pts
        minz[S].append(min(p.z for p in pts))
    # every mesh vertex global min z (legs, skirt) using the already-evaluated: all objects
    lo=1e9
    for o in bpy.data.objects:
        if o.type!='MESH': continue
        oe=o.evaluated_get(dg); me=oe.to_mesh(); mw=oe.matrix_world
        z=min((mw@v.co).z for v in me.vertices); oe.to_mesh_clear(); lo=min(lo,z)
    allmin.append(lo)
R['floor_note']='min over all mesh verts per frame'
R['all_mesh_min_z_mm']=round(min(allmin)*1000,3); R['all_mesh_min_frame']=allmin.index(min(allmin))+F0
jumps=[]
for S in 'RL':
    for f in range(F0+1,F1+1):
        d=(minz[S][f-F0]-minz[S][f-F0-1])*1000
        if abs(d)>10: jumps.append([S,f,round(d,1),round(minz[S][f-F0]*1000,1)])
R['sole_jumps_gt10mm']=jumps
R['sole_minz_mm']={S:[round(z*1000,1) for z in minz[S]] for S in minz}
# per-frame max vertex speed of the lowest points during stance windows (mesh drift)
st=[]
for p in meta['phases']:
    S=p['side']; a=p['flat'] if p['flat'] is not None else p['f0']; b=p['rise'] if p['rise'] is not None else p['f1']
    ref=pos[(S,a)]; d=max(max((q-r).length for q,r in zip(pos[(S,f)],ref)) for f in range(a,b+1))
    st.append([S,p['plant'],a,b,round(d*1000,3)])
R['mesh_foot_drift_flat_windows']=st
# knee: world angle hip-knee-ankle from bone heads
kn={'R':[],'L':[]}
for f in range(F0,F1+1):
    sc.frame_set(f)
    for S in 'RL':
        th=arm.pose.bones['thigh_'+S]; sh=arm.pose.bones['shin_'+S]
        a=(th.tail-th.head).normalized(); b=(sh.tail-sh.head).normalized(); X=th.matrix.col[0].to_3d()
        kn[S].append(math.degrees(math.atan2(a.cross(b).dot(X),a.dot(b))))
R['knee_bonevec_deg']={S:[round(min(kn[S]),2),round(max(kn[S]),2)] for S in kn}
R['meta_phases']=meta['phases']
json.dump(R,open(OUT+'probe.json','w'),indent=0,default=str)
print('DONE')
