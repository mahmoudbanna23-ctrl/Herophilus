import bpy, math, json
sc = bpy.context.scene
arm = bpy.data.objects['her_rig']; pb = arm.pose.bones
p = pb['pelvis']; zs = []
for fr in range(31, 92):
    sc.frame_set(fr); zs.append((arm.matrix_world @ p.head).z)
h = pb['hand_R']; f = pb['forearm_tw_R']; r0 = f.bone.matrix_local.inverted() @ h.bone.matrix_local
dev = []
for fr in range(165, 181):
    sc.frame_set(fr); d = r0.inverted() @ (f.matrix.inverted() @ h.matrix); e = d.to_euler('XYZ')
    dev.append((fr, round(math.degrees(e.x), 1), round(math.degrees(e.z), 1)))
print('MEAS2 ' + json.dumps({'pelvis_31_91_mm': round((max(zs) - min(zs)) * 1000, 2), 'hand_R_x_z_165_180': dev}))
