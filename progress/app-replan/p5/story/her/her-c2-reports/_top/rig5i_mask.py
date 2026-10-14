import numpy as np
from PIL import Image
def ld(p): return np.asarray(Image.open(p).convert('RGB')).astype(float)
T=ld('test8/her_front.png'); C=ld('rig5h/rest_front.png'); N=ld('rig5h/nocap/rest_front.png')
print(T.shape,C.shape,N.shape)
dC=np.abs(C-T).max(axis=2); dN=np.abs(C-N).max(axis=2)
print('cap vs test8',(dC>12).sum(),'cap vs nocap',(dN>12).sum(),'nocap vs test8',(np.abs(N-T).max(axis=2)>12).sum())
ys,xs=np.where(dN>12); print('bbox',xs.min(),xs.max(),ys.min(),ys.max())
ys,xs=np.where(dC>12); print('bbox cap-test8',xs.min(),xs.max(),ys.min(),ys.max())
