import bpy
ob = bpy.data.objects.new('t', None); bpy.context.scene.collection.objects.link(ob)
ob['p'] = 0.0
fc = ob.driver_add('["p"]'); d = fc.driver; d.type = 'SCRIPTED'
for n in ('v', 'b', 'k0', 'k1', 'k2', 'w'):
    v = d.variables.new(); v.name = n
E = {
 'flat1': 'max(0.0, min(1.0, v * 1.637022)) * max(0.0, min(1.0, (0.1377 - max(0.0, min(1.0, b * -1.432394)) - (1.0 - max(0.0, min(1.0, b * -1.432394))) * (0.1627 * k0 + 0.6422 * k1 + 0.4056 * k2 + 0.7604 * min(1.0, w * 2.291831))) / 0.1377))',
 'flat2': 'max(0.0, min(1.0, v * 1.637022)) * max(0.0, min(1.0, (0.1377 - max(0.0, min(1.0, b * -1.432394)) - (1.0 - max(0.0, min(1.0, b * -1.432394))) * (0.1627 * k0 + 0.6422 * k1 + 0.4056 * k2 + 0.7604 * max(0.0, min(1.0, w * 2.291831)))) / 0.1377))',
 'noB': 'max(0.0, min(1.0, v * 1.637022)) * max(0.0, min(1.0, (0.1377 - max(0.0, min(1.0, b * -1.432394))) / 0.1377))',
 'withB': 'max(0.0, min(1.0, (0.1377 - max(0.0, min(1.0, max(0.0, min(1.0, b * -1.432394)) + (1.0 - max(0.0, min(1.0, b * -1.432394))) * (0.1627 * k0))))) / 0.1377))',
}
for k, e in E.items():
    d.expression = e
    print('EXPR', k, len(e), d.is_simple_expression)
