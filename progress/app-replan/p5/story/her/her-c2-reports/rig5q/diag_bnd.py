import bpy
me = bpy.data.objects['glove_R'].data; ec = {}
for p in me.polygons:
    for ek in p.edge_keys: ec[ek] = ec.get(ek, 0) + 1
be = [ek for ek, c in ec.items() if c == 1]; adj = {}
for a, b in be: adj.setdefault(a, []).append(b); adj.setdefault(b, []).append(a)
seen = set(); loops = []
for s in adj:
    if s in seen: continue
    L = [s]; seen.add(s)
    while True:
        nx = [j for j in adj[L[-1]] if j not in seen]
        if not nx: break
        L.append(nx[0]); seen.add(nx[0])
    loops.append(L)
print('BND nverts', len(me.vertices), 'loops', [(len(L), sorted(L)[:40]) for L in loops])
print('BND 408 adj', adj.get(408), 'deg', {v: len(n) for v, n in adj.items() if len(n) != 2})
v = me.vertices[408]; print('BND 408 co', tuple(round(c, 4) for c in v.co), 'groups', [(me and bpy.data.objects['glove_R'].vertex_groups[g.group].name, round(g.weight, 3)) for g in v.groups])
