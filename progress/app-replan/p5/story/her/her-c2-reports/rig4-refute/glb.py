import bpy
bpy.ops.wm.read_factory_settings(use_empty=True)
try:
    r=bpy.ops.import_scene.gltf(filepath='D:/scratch 2026/her-c2/rig4/her-rig4.glb'); print('IMPORT',r)
except Exception as e: print('IMPORT ERR',e)
print('ACTIONS',[(a.name,tuple(round(x) for x in a.frame_range)) for a in bpy.data.actions])
ks=set()
for o in bpy.data.objects:
    if o.type=='MESH' and o.data.shape_keys: ks|={k.name for k in o.data.shape_keys.key_blocks[1:]}
print('KEYS',len(ks),sorted(ks)); print('ARM',[o.name for o in bpy.data.objects if o.type=='ARMATURE'],'meshes',sum(o.type=='MESH' for o in bpy.data.objects))
