from PIL import Image
import os

dir = os.fsencode(".")

for file in os.listdir(dir):
  filename = os.fsdecode(file)
  img = Image.open(filename).convert("RGB")
  if filename[-3] == "p":
    print(filename)
    #im = Image.open(filename).convert("RGB")
    #im.save(filename[0:-4] + ".png", "png")