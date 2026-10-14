import bpy, bmesh, sys
from mathutils import Vector, kdtree
tag = sys.argv[-1]
ob = bpy.data.objects; arm = [o for o in ob if o.type == 'ARMATURE'][0]; b = arm.data.bones; W = arm.matrix_world
wr = W @ b['hand_R'].head_local; ax = ((W @ b['forearm_R'].head_local) - wr).normalized()
g = ob['glove_R']; me = g.data; mw = g.matrix_world
bm = bmesh.new(); bm.from_mesh(me); bm.verts.ensure_lookup_table()
part = [-1] * len(bm.verts); p = 0
for v in bm.verts:
    if part[v.index] >= 0: continue
    st = [v]
    while st:
        x = st.pop()
        if part[x.index] >= 0: continue
        part[x.index] = p; st += [e.other_vert(x) for e in x.link_edges]
    p += 1
names = [vg.name for vg in g.vertex_groups]
def wd(i): return {names[e.group]: e.weight for e in me.vertices[i].groups if e.weight > 1e-4}
def zr(i):
    d = mw @ me.vertices[i].co - wr; z = d.dot(ax); return z * 1000, (d - ax * z).length * 1000
for k in range(p):
    ids = [i for i in range(len(part)) if part[i] == k]; zs = [zr(i) for i in ids]
    bd = sum(1 for i in ids if any(e.is_boundary for e in bm.verts[i].link_edges))
    print(tag, 'PART', k, 'n', len(ids), 'bnd', bd, 'z %.0f..%.0f r %.0f..%.0f' % (min(z for z, r in zs), max(z for z, r in zs), min(r for z, r in zs), max(r for z, r in zs)))
kd = kdtree.KDTree(len(me.vertices))
for v in me.vertices: kd.insert(mw @ v.co, v.index)
kd.balance(); worst = []
for v in me.vertices:
    z, r = zr(v.index)
    if not (-60 < z < 30): continue
    for co, j, dist in kd.find_range(mw @ v.co, 0.008):
        if part[j] != part[v.index]:
            a, c = wd(v.index), wd(j); dif = sum(abs(a.get(k_, 0) - c.get(k_, 0)) for k_ in set(a) | set(c))
            worst.append((dif, v.index, j, part[v.index], part[j], dist * 1000, z))
worst.sort(reverse=True)
print(tag, 'CROSSPART pairs <8mm:', len(worst))
for w in worst[:8]: print(tag, 'X dif %.2f v%d(p%d) v%d(p%d) d %.1fmm z %.0f' % (w[0], w[1], w[3], w[2], w[4], w[5], w[6]), wd(w[1]), wd(w[2]))
