import numpy as np, json, math
J=json.load(open('probe_meta.json')); B=J['bones']; F0=J['F0']; meta=J['meta']
print(list(B.keys()))
V=lambda b,f,c: np.array(B[b][f][c])
def ang(a,b): return math.degrees(math.acos(max(-1,min(1,np.dot(a,b)/np.linalg.norm(a)/np.linalg.norm(b)))))
N=len(B['pelvis'])
kn={S:[ang(V('thigh_'+S,f,1),V('shin_'+S,f,1)) for f in range(N)] for S in 'RL'}
hip={S:[math.degrees(math.atan2(-V('thigh_'+S,f,1)[1],-V('thigh_'+S,f,1)[2])) for f in range(N)] for S in 'RL'}
ank={S:[ang(V('shin_'+S,f,1),V('foot_'+S,f,1)) for f in range(N)] for S in 'RL'}
for S in 'RL':
    print('knee',S,' '.join(f'{f}:{kn[S][f]:.0f}' for f in range(20,110)))
for S in 'RL':
    print('hip',S,' '.join(f'{f}:{hip[S][f]:.0f}' for f in range(20,110)))
ph=sorted([(p['f0'],p['side'],p['f1']) for p in meta['phases']])
print('phases',ph)
# step length: foot bone head xy at strikes
for f0,S,f1 in ph:
    print('strike',S,f0,'foot head',np.round(V('foot_'+S,f0,3),3), 'opp knee at strike',round(kn['L' if S=='R' else 'R'][f0],1),'opp knee max f0-3..f0+3',round(max(kn['L' if S=='R' else 'R'][max(0,f0-3):f0+4]),1))
g=np.load('probe_verts.npz')['glove_R']; v=np.linalg.norm(g[1:]-g[:-1],axis=2).max(1)*1000
print('glove_R vel mm/frame', ' '.join(f'{F0+1+i}:{v[i]:.0f}' for i in range(100,191)))
e=np.load('probe_verts.npz')['lash_L']; v=np.linalg.norm(e[1:]-e[:-1],axis=2).max(1)*1000
print('lash_L vel', ' '.join(f'{F0+1+i}:{v[i]:.0f}' for i in range(len(v)) if v[i]>15))
pel=np.array([B['pelvis'][f][3] for f in range(N)]); print('pelvis x y z at 0,31,91,100,191',np.round(pel[[0,31,91,100,191]],3))
