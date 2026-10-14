import bpy, hashlib, numpy as np
for p in ['D:/scratch 2026/her-c2/rig2/her-rig2.blend','D:/scratch 2026/her-c2/rig4/her-rig4.blend']:
    bpy.ops.wm.open_mainfile(filepath=p)
    h=hashlib.sha256(); n=0
    for o in sorted(bpy.data.objects,key=lambda o:o.name):
        if o.type=='MESH' and o.data.shape_keys:
            for k in o.data.shape_keys.key_blocks:
                a=np.empty(len(k.data)*3,dtype=np.float32); k.data.foreach_get('co',a); h.update(o.name.encode()+k.name.encode()+np.round(a,6).tobytes()); n+=1
    fc=[]
    for a in bpy.data.actions:
        if 'eye' in a.name or 'lash' in a.name or 'mouth' in a.name or 'Key' in a.name: fc.append(a.name)
    print('KEYHASH',p[-14:],n,h.hexdigest()[:16],sorted(fc))
