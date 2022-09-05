const sharp = require('sharp');


sharp('input.png')
  .resize(200, 200)
  .grayscale()
  .toFile('output.png');