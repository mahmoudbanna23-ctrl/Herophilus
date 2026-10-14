import numpy as np, json, math
Z=np.load('probe_verts.npz'); J=json.load(open('probe_meta.json')); F0=J['F0']
out=[]
def pr(*a):
    s=' '.join(str(x) for x in a); print(s); out.append(s)
# 1 pops: accel per mesh
pr('== pop detector: max per-vertex |2nd diff| mm (frame), median over frames; max 1st diff mm')
for n in Z.files:
    if n=='backdrop_floor': continue
    A=Z[n]; d1=np.linalg.norm(A[1:]-A[:-1],axis=2).max(1)*1000; d2=np.linalg.norm(A[2:]-2*A[1:-1]+A[:-2],axis=2).max(1)*1000
    top=np.argsort(d2)[-3:][::-1]
    pr(n,'acc max',[ (round(d2[i],2),F0+1+i) for i in top],'med',round(np.median(d2),2),'| vel max',round(d1.max(),1),'f',F0+1+int(d1.argmax()))
# 2 feet
feet=J['feet']
low={}
for S in 'RL':
    idx={}
    for o,i in feet[S]: idx.setdefault(o,[]).append(i)
    pts=np.concatenate([Z[o][:,ii,:] for o,ii in idx.items()],axis=1)
    lz=pts[:,:,2].min(1)*1000; low[S]=lz
    dj=np.diff(lz); k=int(np.abs(dj).argmax())
    pr('== foot',S,'nverts',pts.shape[1],'min z',round(lz.min(),3),'max jump',round(abs(dj[k]),2),'at f',F0+k+1,'>6mm',[F0+i+1 for i in np.where(np.abs(dj)>6)[0]])
    # slide: verts on floor (z<1mm) both frames
    sl=[]
    for f in range(len(pts)-1):
        m=(pts[f,:,2]<0.001)&(pts[f+1,:,2]<0.001)
        if m.any(): sl.append((np.linalg.norm(pts[f+1,m,:2]-pts[f,m,:2],axis=1).max()*1000,F0+f+1))
    sl.sort(reverse=True); pr('  contact-vertex slide max mm/frame',[(round(a,3),b) for a,b in sl[:4]])
    # cumulative drift over contiguous contact windows (any vert <1mm)
    pr('  lowest z per frame', ' '.join(f'{F0+i}:{v:.1f}' for i,v in enumerate(lz)))
# 4 glove/arm-disc distance (vertex cloud) + in-front/behind info
D=Z['body_disc']
for n in ['glove_R','glove_L','arm_R','arm_L']:
    A=Z[n]; dm=[]
    for f in range(len(A)):
        d=np.sqrt(((A[f][:,None,:]-D[f][None,:,:])**2).sum(2)).min()*1000; dm.append(d)
    dm=np.array(dm); pr('== vert-vert',n,'-> disc min mm',round(dm.min(),1),'f',F0+int(dm.argmin()),'wave f100+ min',round(dm[100-F0:].min(),1),'f',100+int(dm[100-F0:].argmin()))
# 8 leg crossing
for a,b in [('leg_L','leg_R'),('sandal_L','leg_R'),('sandal_R','leg_L'),('sandal_L','sandal_R')]:
    dm=np.array([np.sqrt(((Z[a][f][:,None]-Z[b][f][None])**2).sum(2)).min() for f in range(len(Z[a]))])*1000
    pr('== min dist',a,b,round(dm.min(),1),'mm f',F0+int(dm.argmin()))
json.dump({'lowR':low['R'].tolist(),'lowL':low['L'].tolist()},open('lows.json','w'))
open('ana.txt','w').write('\n'.join(out))
