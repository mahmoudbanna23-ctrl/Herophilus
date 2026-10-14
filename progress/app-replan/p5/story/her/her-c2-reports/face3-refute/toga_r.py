import bpy, sys, json
H = 'D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her'
sys.path.insert(0, H)
import face_rig as FR
R = 'D:/scratch 2026/her-c2/face3-refute'
bpy.ops.wm.open_mainfile(filepath=FR.BLEND)
sc = bpy.context.scene; cam = bpy.data.objects['cam']; arm = bpy.data.objects['face_rig']
st = json.load(open(R + '/checks_face.json'))['random_500']['worst_toga_states'][0][1]
FR.cycles_cpu(sc, 16); sc.cycles.use_denoising = True
FR.cam_at(cam, (0, -0.1, 0.60), 0, 0.62); sc.render.resolution_x, sc.render.resolution_y = 720, 480
FR.pose_state(arm, st); sc.render.filepath = R + '/toga_worst_seed4242.png'; bpy.ops.render.render(write_still=True)
print('DONE')
