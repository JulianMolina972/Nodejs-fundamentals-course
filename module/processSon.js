const { exec, spawn } = require('child_process');

// exec('ps', (err, stdout, stderr) => {
//   if (err) {
//     console.log(err);
//     return false;
//   }

//   console.log(stdout);
// })

let process = spawn('ls', ['-la']);

console.log(process.pid);
console.log(process.connected);

process.stdout.on('data', (dato) => {
  console.log('is dead?');
  console.log(process.killed);
  console.log(dato.toString());
})

process.on('exit', function () {
  console.log('finished process');
  console.log(process.killed);
})