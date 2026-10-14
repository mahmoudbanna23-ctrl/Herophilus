import bpy, math, json
sc = bpy.context.scene
arm = [o for o in bpy.data.objects if o.type == 'ARMATURE'][0]
pb = arm.pose.bones
def rel(h, p):
    return p.matrix.inverted() @ h.matrix
def relrest(h, p):
    return p.bone.matrix_local.inverted() @ h.bone.matrix_local
out = {'arm': arm.name, 'frames': [sc.frame_start, sc.frame_end]}
names = [b.name for b in pb]
out['wristish'] = [n for n in names if 'hand' in n or 'wrist' in n or 'forearm' in n]
pel = [n for n in names if 'pelvis' in n.lower() or 'hip' == n.lower() or 'root' in n.lower()]
out['pelvis_names'] = pel
res = {}
for S in ('R', 'L'):
    h = pb.get('hand_' + S); f = pb.get('forearm_tw_' + S)
    if not h or not f: continue
    r0 = relrest(h, f)
    xs = []; zs = []; ang = []
    for fr in range(sc.frame_start, sc.frame_end + 1):
        sc.frame_set(fr)
        d = r0.inverted() @ rel(h, f)
        e = d.to_euler('XYZ')
        xs.append((round(math.degrees(e.x), 2), fr)); zs.append((round(math.degrees(e.z), 2), fr))
        ang.append((round(math.degrees(d.to_quaternion().angle), 2), fr))
    res[S] = {'x_min': min(xs), 'x_max': max(xs), 'z_min': min(zs), 'z_max': max(zs), 'total_max': max(ang),
              'x_at_0': xs[0], 'x_170_176': [v for v, fr in xs if 170 <= fr <= 176], 'x_139': [v for v, fr in xs if fr == 139]}
out['wrist'] = res
if pel:
    p = pb[pel[0]]; zs = []
    for fr in range(31, 92):
        sc.frame_set(fr); zs.append((arm.matrix_world @ p.head).z)
    out['pelvis_31_91_z_range_mm'] = round((max(zs) - min(zs)) * 1000, 2)
print('MEAS ' + json.dumps(out))
