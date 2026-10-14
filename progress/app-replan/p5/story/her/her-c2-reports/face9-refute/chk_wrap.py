import sys, os
HERE = 'D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her'
sys.path.insert(0, HERE)
import face_rig as FR
FR.OUT = 'D:/scratch 2026/her-c2/face9-refute'
src = open(HERE + '/check_face.py', encoding='utf-8').read()
exec(compile(src, HERE + '/check_face.py', 'exec'), {'__name__': '__main__', '__file__': HERE + '/check_face.py'})
