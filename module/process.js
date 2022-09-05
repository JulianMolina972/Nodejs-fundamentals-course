// const process = require('process');

process.on('beforeExit', () => {
  console.log('el proceso va a terminar');
})

process.on('')

process.on('exit', () => {
  console.log('finished process');
  setTimeout(() => {
    console.log('this is not executed');
  }, 0)
})

setTimeout(() => {
  console.log('this is  executed');
}, 0)

process.on('uncaughtException', (err, origin) => {
  console.error('vaya se nos ha olvidado capturar un error');
  console.error(err);
})

// funas();

console.log('Esto si el error no se recoje, no sale');