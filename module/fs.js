const fs = require('fs');
const { dirname } = require('path');


function read(path, callback){
  fs.readFile(path, (err, data) => {
    callback(data.toString());
    //reading
  })
}

function write(path, content, callback) {
  fs.writeFile(path, content, (err) => {
    if(err) {
      console.log('error' + err);
    } else {
      console.log('write success');
    }
  })
}

function deleteFile(path, callback) {
  fs.unlink(path, callback);
}

// write(__dirname + '/file1.txt', ' I am a new file', console.log)
// read(__dirname + '/file1.txt', console.log);
deleteFile(__dirname + '/file1.txt', console.log);