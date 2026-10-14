import bpy, math, sys
sc = bpy.context.scene; A = bpy.data.objects['her_rig']
prev=None
for f in range(108, 176):
    sc.frame_set(f)
    fa=A.pose.bones['forearm_R']; tw=A.pose.bones['forearm_tw_R']; ua=A.pose.bones['upperarm_R']; hd=A.pose.bones['hand_R']
    q=fa.rotation_quaternion.copy() if fa.rotation_mode=='QUATERNION' else fa.rotation_euler.to_quaternion()
    sp = math.degrees(prev.rotation_difference(q).angle) if prev else 0
    prev=q
    e=fa.rotation_euler
    print('F', f, 'sp %.2f'%sp, 'fa x %.1f y %.1f'%(math.degrees(e.x),math.degrees(e.y)), 'tw y %.1f'%math.degrees(tw.rotation_euler.y), 'ua', [round(math.degrees(v),1) for v in ua.rotation_euler], 'hand', [round(math.degrees(v),1) for v in hd.rotation_euler])
