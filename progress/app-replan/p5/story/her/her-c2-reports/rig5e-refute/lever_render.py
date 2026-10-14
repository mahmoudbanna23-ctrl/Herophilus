import bpy, math, json
from mathutils import Vector, Matrix
exec(open('D:/scratch 2026/her-c2/rig5e-refute/lever_probe2.py').read().split('res = []')[0])
sc.render.engine = 'BLENDER_EEVEE' if 'BLENDER_EEVEE' in [e.identifier for e in bpy.types.RenderSettings.bl_rna.properties['engine'].enum_items] else sc.render.engine
sc.render.resolution_x = sc.render.resolution_y = 700
def key(th, cz):
    swing(th, cz)
    for b in ('clavicle_R', 'upperarm_R'):
        pb = A.pose.bones[b]; pb.keyframe_insert('rotation_quaternion' if pb.rotation_mode == 'QUATERNION' else 'rotation_euler', frame=F)
    sc.frame_set(F); measure('keyed_%d_%d' % (th, cz))
set_cam(-45); sc.render.filepath = OUT + 'lever3_tq_base.png'; sc.frame_set(F); bpy.ops.render.render(write_still=True)
key(-25, 10); set_cam(-45); sc.render.filepath = OUT + 'lever3_tq_swing-25_clavz+10.png'; bpy.ops.render.render(write_still=True)
