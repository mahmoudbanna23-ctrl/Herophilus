import bpy, numpy as np
from mathutils import Vector
sc=bpy.context.scene; A=bpy.data.objects['her_rig']; A.data.pose_position='REST'; sc.frame_set(0); bpy.context.view_layer.update()
def ev(n):
    o=bpy.data.objects[n]; e=o.evaluated_get(bpy.context.evaluated_depsgraph_get()); m=e.to_mesh()
    P=np.array([tuple(o.matrix_world@v.co) for v in m.vertices]); e.to_mesh_clear(); return P
arm=ev('arm_R'); gl=ev('glove_R')
b=A.pose.bones['forearm_R']; M=A.matrix_world@b.matrix; ax=np.array(M.col[1][:3]); ax/=np.linalg.norm(ax); o0=np.array(M.translation)
t=(arm-o0)@ax; end=np.sort(t)[-1]
ring=arm[t>end-0.004]; c=ring.mean(0); r_arm=np.linalg.norm((ring-c)-((ring-c)@ax)[:,None]*ax,axis=1)
print('arm end axial',round(end,4),'ring r mm',round(r_arm.mean()*1000,1),'n',len(ring))
tg=(gl-o0)@ax; rad=np.linalg.norm((gl-c)-((gl-c)@ax)[:,None]*ax,axis=1)
for lo in np.arange(-0.05,0.03,0.005):
    sel=(tg>=end+lo)&(tg<end+lo+0.005)&(rad<0.06)
    if sel.any(): print('glove axial %+.0f mm  n %d  radius min/med %.1f/%.1f mm'%((lo+0.0025)*1000,sel.sum(),rad[sel].min()*1000,np.median(rad[sel])*1000))
# arm radius vs axial
for lo in np.arange(-0.05,0.001,0.01):
    sel=(t>=end+lo-0.005)&(t<end+lo+0.005)
    rr=np.linalg.norm((arm[sel]-c)-((arm[sel]-c)@ax)[:,None]*ax,axis=1); print('arm axial %+.0f mm radius %.1f mm'%(lo*1000,np.median(rr)*1000))
