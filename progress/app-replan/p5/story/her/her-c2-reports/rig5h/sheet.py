from PIL import Image
import glob
fs=[f'cuff/cuff_{v}_{n}.png' for v in ('front','tq') for n in range(170,177)]
ims=[Image.open(f).resize((300,300)) for f in fs]
W=Image.new('RGB',(300*7,600))
for i,im in enumerate(ims): W.paste(im,((i%7)*300,(i//7)*300))
W.save('cuff_close.png')
for v in ('front','tq'):
    fr=sorted(glob.glob(f'frames_wrist_{v}/*.png'))
    pick=[fr[i] for i in range(0,len(fr),6)][:17]
    ims=[Image.open(f).resize((360,270)) for f in pick]
    S=Image.new('RGB',(360*6,270*3))
    for i,im in enumerate(ims): S.paste(im,((i%6)*360,(i//6)*270))
    S.save(f'sheet_{v}.png')
