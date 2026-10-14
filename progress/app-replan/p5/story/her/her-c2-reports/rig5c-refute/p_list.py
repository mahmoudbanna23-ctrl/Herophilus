import bpy
for o in bpy.data.objects:
    print('OBJ', o.name, o.type, o.parent.name if o.parent else '-', len(o.data.vertices) if o.type=='MESH' else '')
a=bpy.data.objects['her_rig']
for b in a.pose.bones:
    print('BONE', b.name, b.rotation_mode, b.bone.parent.name if b.bone.parent else '-', b.bone.use_deform)
print('RANGE', bpy.context.scene.frame_start, bpy.context.scene.frame_end, bpy.context.scene.render.fps)
