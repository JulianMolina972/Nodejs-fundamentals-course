async function hello (name) {
  return setTimeout(() => {console.log('Hello '+ name);}, 3000);
  
}

async function speak(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('bla bla bla...');
      resolve(name);
      // reject('Error');
    }, 1000)
  })
}

async function bye (name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('bye '+ name);
      resolve();
    }, 1000)
  })
}


async function main() {
  let name = await hello('Julian');
  await speak();
  await speak();
  await speak();
  await bye(name);
}

console.log('Starting process...');

main();

console.log('Ending process...');