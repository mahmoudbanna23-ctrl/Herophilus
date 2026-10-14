import numpy as np, json
Z=np.load('probe_verts.npz'); J=json.load(open('probe_meta.json')); F0=J['F0']
ph=sorted([(p['f0'],p['side'],p['f1']) for p in J['meta']['phases']])
for S in 'RL':
    idx={}
    for o,i in J['feet'][S]: idx.setdefault(o,[]).append(i)
    P=np.concatenate([Z[o][:,ii,:] for o,ii in idx.items()],axis=1)*1000
    # heel verts: rear-most 10% along walk (-y is forward) at frame 0
    y0=P[0,:,1]; heel=y0>=np.percentile(y0,92); toe=y0<=np.percentile(y0,8)
    print('== side',S)
    for f0,s,f1 in ph:
        if s!=S: continue
        f1=min(f1,J['F1'])
        # verts in contact (z<1mm) at every frame of a window -> total drift
        rng=range(f0,f1+1)
        hz=[P[f,heel,2].min() for f in rng]; tz=[P[f,toe,2].min() for f in rng]
        c=[(P[f,:,2]<1.0) for f in rng]
        # total drift of verts continuously in contact across the longest run
        allc=np.all(np.array(c[:max(2,min(len(c),10))]),axis=0) if len(c)>2 else None
        slide=[]
        for k in range(len(rng)-1):
            m=c[k]&c[k+1]
            slide.append(np.linalg.norm(P[rng[k+1],m,:2]-P[rng[k],m,:2],axis=1).max() if m.any() else -1)
        # cumulative: centroid of contact set over frames where same vertex set in contact
        tot=0
        m=c[0]
        for k in range(1,len(rng)):
            m2=m&c[k]
            if m2.sum()<3: break
            tot=max(tot,np.linalg.norm(P[rng[k],m2,:2]-P[rng[0],m2,:2],axis=1).max())
        print(f' stance {f0}-{f1} heel_min_z',' '.join(f'{v:.1f}' for v in hz[:16]))
        print('   toe_min_z',' '.join(f'{v:.1f}' for v in tz[:16]))
        print('   ncontact',' '.join(str(int(x.sum())) for x in c[:16]),' slide/f max',round(max(slide),3),' total drift of strike-contact verts',round(tot,2))
