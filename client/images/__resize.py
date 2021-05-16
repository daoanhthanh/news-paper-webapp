import cv2
from PIL import Image


src = str(input("???"))
img = Image.open(src)
basewidth = 280
wpercent = (basewidth / float(img.size[0]))
# hsize = int((float(img.size[1]) * float(wpercent)))
hsize = 156
img_new = img.resize((basewidth, hsize), Image.ANTIALIAS)
img_new.save(src)
print(img.size)
print(img_new.size)
