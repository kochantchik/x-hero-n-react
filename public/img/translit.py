import transliterate
from PIL import Image
import os

dir = os.fsencode(".")

for file in os.listdir(dir):
  filename = os.fsdecode(file)
  if (filename[-3] == "p"):
    print(filename)
    img = Image.open(filename)
    img.save(transliterate.translit(filename, reversed=True))
