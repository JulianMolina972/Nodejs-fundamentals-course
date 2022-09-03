function hello (name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hello '+ name);
      resolve(name);
    }, 3000)
  });
}

function speak(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('bla bla bla...');
      resolve(name);
      // reject('Error');
    }, 1000)
  })
}

function bye (name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('bye '+ name);
      resolve();
    }, 1000)
  })
}

//----

console.log('starting process...')

hello('julian')
  .then(speak)
  .then(speak)
  .then(speak)
  .then(speak)
  .then(bye)
  .then(() => {
    console.log('finishing process...')
  })
  .catch(error => {
    console.error('Error: ', error)
  })
  .finally(() => {console.log('finally')})