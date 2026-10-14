import bpy, json
from mathutils import Vector
OUT='D:/scratch 2026/her-c2/rig1-refute/'
RX,RZ,ZC,T=0.345,0.37,0.76,0.16
arm=bpy.data.objects['her_rig']; sc=bpy.context.scene
REST=arm.data.bones['head'].matrix_local.copy()
res={}
for o in bpy.data.objects:
    if o.type=='MESH':
        for m in o.modifiers:
            if m.type!='ARMATURE': m.show_viewport=False
names=['arm_R','arm_L','glove_R','glove_L']
def inside(p): return (p.x/RX)**2+((p.z-ZC)/RZ)**2<0.97 and abs(p.y)<T/2*0.95
rows=[]
for f in range(sc.frame_start,sc.frame_end+1):
    sc.frame_set(f); dg=bpy.context.evaluated_depsgraph_get()
    M=(arm.matrix_world@arm.pose.bones['head'].matrix@REST.inverted()).inverted()
    r=[f]
    for n in names:
        oe=bpy.data.objects[n].evaluated_get(dg); me=oe.to_mesh(); mw=oe.matrix_world
        r.append(sum(1 for v in me.vertices if inside(M@(mw@v.co)))); oe.to_mesh_clear()
    rows.append(r)
res['names']=names; res['rest_f0']=rows[0]
res['frames_over_rest']=[r for r in rows if any(r[i+1]>rows[0][i+1]+5 for i in range(4))]
res['max']=[max(r[i+1] for r in rows) for i in range(4)]
# rest-pose deform error
arm.data.pose_position='REST'; dg=bpy.context.evaluated_depsgraph_get(); de=0
for o in bpy.data.objects:
    if o.type!='MESH' or not o.modifiers: continue
    oe=o.evaluated_get(dg); me=oe.to_mesh()
    if len(me.vertices)==len(o.data.vertices):
        de=max(de,max((a.co-b.co).length for a,b in zip(me.vertices,o.data.vertices)))
    oe.to_mesh_clear()
res['rest_deform_max_m']=de
# glb
bpy.ops.wm.read_factory_settings(use_empty=True)
json.dump(res,open(OUT+'probe2.json','w'),indent=0,default=str)
import traceback
try:
    bpy.ops.import_scene.gltf(filepath='D:/scratch 2026/her-c2/rig1/her-rig1.glb'); res['glb_import']='ok'
except Exception as e:
    res['glb_import']=traceback.format_exc()[-900:]
arms=[o for o in bpy.data.objects if o.type=='ARMATURE']
res['glb_armatures']=[(a.name,len(a.data.bones)) for a in arms]
res['glb_actions']=[(a.name,[round(x,1) for x in a.frame_range]) for a in bpy.data.actions]
res['glb_shapekeys']={o.name:[k.name for k in o.data.shape_keys.key_blocks] for o in bpy.data.objects if o.type=='MESH' and o.data.shape_keys}
res['glb_mesh_count']=sum(1 for o in bpy.data.objects if o.type=='MESH')
json.dump(res,open(OUT+'probe2.json','w'),indent=0,default=str); print('DONE')
