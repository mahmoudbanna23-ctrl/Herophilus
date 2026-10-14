# rig 5q diag: piece M0 limit ring vs glove mouth limit, per frame. Read-only.
import bpy, sys, json
from mathutils import Vector
from mathutils.bvhtree import BVHTree
sc = bpy.context.scene; out = {}
for S in 'R':
    gl, wp = bpy.data.objects['glove_' + S], bpy.data.objects['wristpiece_' + S]
    print('MODS', [(m.name, m.type) for m in gl.modifiers])
    for m in gl.modifiers:
        if m.type == 'SOLIDIFY': m.show_viewport = False
        if m.type == 'SUBSURF': print('LEV', m.levels, m.render_levels); m.levels = m.render_levels
    for m in wp.modifiers:
        if m.type == 'SUBSURF': m.levels = m.render_levels
    n = len(wp.data.vertices) // 4
    for f in [int(x) for x in sys.argv[sys.argv.index('--') + 1:]]:
        sc.frame_set(f); dg = bpy.context.evaluated_depsgraph_get()
        ge = gl.evaluated_get(dg).to_mesh(); gw = gl.matrix_world
        G = [gw @ v.co for v in ge.vertices]; ge_polys = [tuple(q.edge_keys) for q in ge.polygons]; bvh = BVHTree.FromPolygons(G, [tuple(p.vertices) for p in ge.polygons])
        gl.evaluated_get(dg).to_mesh_clear()
        pe = wp.evaluated_get(dg).to_mesh(); P = [wp.matrix_world @ v.co for v in pe.vertices]; pe_polys = [tuple(q.vertices) for q in pe.polygons]; wp.evaluated_get(dg).to_mesh_clear()
        row = []
        for k in range(n):   # M0 ring = original verts n..2n-1 (subsurf keeps original verts first)
            p = P[n + k]; loc, nr, _i, d = bvh.find_nearest(p)
            row.append(round((d if (p - loc).dot(nr) > 0 else -d) * 1000, 2))
        # glove mouth boundary (limit curve) vs the piece surface: + = the glove rim stands OUT of the piece (a lip)
        pb = BVHTree.FromPolygons(P, pe_polys)
        ec = {}
        for q in ge_polys:
            for ek in q: ec[ek] = ec.get(ek, 0) + 1
        bv = {i for ek, c in ec.items() if c == 1 for i in ek}
        M0 = [P[n + k] for k in range(n)]
        rim = []
        for i in bv:
            g = G[i]; kk = min(range(n), key=lambda k: (M0[k] - g).length)
            if (M0[kk] - g).length > 0.006: continue
            loc, nr, _i, d = pb.find_nearest(g); rim.append((round((d if (g - loc).dot(nr) > 0 else -d) * 1000, 2), kk, i, round((M0[kk] - g).length * 1000, 1), len(ge.vertices) if False else 0))
        rim.sort()
        out['%s_f%d' % (S, f)] = {'rim_n': len(rim), 'rim_min': rim[0], 'rim_max': rim[-1], 'rim_top5': rim[-5:], 'min': min(row), 'max': max(row), 'argmin': row.index(min(row)), 'argmax': row.index(max(row)), 'ring': row}
json.dump(out, open(r'D:/scratch 2026/her-c2/rig5q/diag_seat.json', 'w'))
for k, v in out.items(): print('DIAG', k, 'M0', v['min'], v['max'], 'rim', v['rim_n'], v['rim_min'], v['rim_top5'])
