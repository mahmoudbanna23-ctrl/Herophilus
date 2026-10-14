import bpy, bmesh, math
from mathutils import Vector
ob = {o.name: o for o in bpy.data.objects}
print('OBJS', [n for n in ob if 'R' in n[-2:] or n.endswith('_R')])
arm = [o for o in bpy.data.objects if o.type == 'ARMATURE'][0]
b = arm.data.bones
print('BONES', [x.name for x in b if x.name.endswith('_R')])
W = arm.matrix_world
wr = W @ b['hand_R'].head_local
fa = (W @ b['forearm_R'].head_local) if 'forearm_R' in b else None
for n in ('arm_R', 'glove_R'):
    o = ob[n]; print('MODS', n, [(m.type, getattr(m, 'levels', None), getattr(m, 'render_levels', None)) for m in o.modifiers])
el = W @ b['forearm_R'].head_local; ax = (el - wr).normalized()
print('wrist', wr, 'elbow', el, 'len mm', (el - wr).length * 1000)
def prof(o, tag):
    bm = bmesh.new(); bm.from_mesh(o.data); bm.transform(o.matrix_world)
    parts = 0; seen = set()
    for v in bm.verts:
        if v.index in seen: continue
        parts += 1; st = [v]
        while st:
            x = st.pop()
            if x.index in seen: continue
            seen.add(x.index); st += [e.other_vert(x) for e in x.link_edges]
    bd = [v for v in bm.verts if any(e.is_boundary for e in v.link_edges)]
    print(tag, 'verts', len(bm.verts), 'faces', len(bm.faces), 'parts', parts, 'boundary', len(bd))
    rows = {}
    for v in bm.verts:
        d = v.co - wr; z = d.dot(ax); r = (d - ax * z).length
        k = round(z * 1000 / 4) * 4
        rows.setdefault(k, []).append(r * 1000)
    for k in sorted(rows):
        if -80 <= k <= 120:
            rs = rows[k]; print(tag, 'z%+4d n%3d rmin %.1f rmax %.1f' % (k, len(rs), min(rs), max(rs)))
    for v in bd:
        d = v.co - wr; z = d.dot(ax); print(tag, 'BND z %.1f r %.1f' % (z * 1000, (d - ax * z).length * 1000))
    bm.free()
prof(ob['glove_R'], 'G'); prof(ob['arm_R'], 'A')
for n in ('arm_R', 'glove_R'):
    for m in ob[n].modifiers:
        if m.type == 'SOLIDIFY':
            print('SOL', n, 'thick', m.thickness, 'off', m.offset, 'flip', m.use_flip_normals, 'rim', m.use_rim, 'mo', m.material_offset, 'even', m.use_even_offset)
    print('MATS', n, [s.material.name if s.material else None for s in ob[n].material_slots],
          [(s.material.name, s.material.use_backface_culling) for s in ob[n].material_slots if s.material])
