# overlap of right glove / forearm with the disc silhouette, front (yaw 0) and tq (yaw -45), per frame
import bpy, json, math, sys
import numpy as np
from mathutils import Vector
from bpy_extras.object_utils import world_to_camera_view as w2c
sc = bpy.context.scene; A = bpy.data.objects['her_rig']; cam = bpy.data.objects['cam']
py = json.loads(A['rig_meta'])['py']; NF = len(py)
gk = [math.exp(-0.5 * (i / 6.0) ** 2) for i in range(-18, 19)]
def yf(f): return sum(gk[i + 18] * py[min(NF - 1, max(0, f + i))] for i in range(-18, 19)) / sum(gk)
def setc(yaw, f):
    y = math.radians(yaw); tg = Vector((0, yf(f), 0.58)); cam.data.lens = 50
    cam.location = tg + Vector((3.4 * math.sin(y), -3.4 * math.cos(y), 0.45))
    cam.rotation_euler = (tg - cam.location).to_track_quat('-Z', 'Y').to_euler()
def hull(P):
    P = sorted(map(tuple, P)); 
    def cr(o, a, b): return (a[0]-o[0])*(b[1]-o[1]) - (a[1]-o[1])*(b[0]-o[0])
    lo = []
    for p in P:
        while len(lo) >= 2 and cr(lo[-2], lo[-1], p) <= 0: lo.pop()
        lo.append(p)
    up = []
    for p in reversed(P):
        while len(up) >= 2 and cr(up[-2], up[-1], p) <= 0: up.pop()
        up.append(p)
    return np.array(lo[:-1] + up[:-1])
def inside(H, pts):
    n = len(H); ok = np.ones(len(pts), bool)
    for i in range(n):
        a, b = H[i], H[(i+1) % n]
        ok &= ((b[0]-a[0])*(pts[:,1]-a[1]) - (b[1]-a[1])*(pts[:,0]-a[0])) >= 0
    return ok
def ev(name):
    o = bpy.data.objects[name]; e = o.evaluated_get(bpy.context.evaluated_depsgraph_get()); m = e.to_mesh()
    P = [o.matrix_world @ v.co for v in m.vertices]; e.to_mesh_clear(); return P
F0, F1 = int(sys.argv[sys.argv.index('--')+1]), int(sys.argv[sys.argv.index('--')+2])
res = {}
for f in range(F0, F1 + 1):
    sc.frame_set(f); row = {}
    D = ev('body_disc'); G = ev('glove_R'); Ar = ev('arm_R')
    for view, yaw in (('front', 0), ('tq', -45)):
        setc(yaw, f); bpy.context.view_layer.update()
        def pr(P): return np.array([[*w2c(sc, cam, p)] for p in P])
        d2 = pr(D); H = hull(d2[:, :2]); dmed = np.median(d2[:, 2])
        for nm, P in (('glove', G), ('arm', Ar)):
            q = pr(P); ins = inside(H, q[:, :2]) & (q[:, 2] < dmed)   # over the disc AND nearer the camera than its centre
            row[view + '_' + nm] = round(float(ins.mean()) * 100, 1)
    res[f] = row
    print('OV', f, row)
json.dump(res, open('ov_%s.json' % ('_'.join(sys.argv[sys.argv.index('--')+3:]) or 'x'), 'w'))
