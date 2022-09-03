function hello (name, myCallback) {
  setTimeout(() => {
    console.log('Hello '+ name);
    myCallback(name);
  }, 5000)
}

function bye (name, otherCallback) {
  setTimeout(() => {
    console.log('bye '+ name);
    otherCallback();
  }, 1000)
}

console.log('starting process...')
hello('julian', (name) => {
  bye(name, () => {
    console.log('finishing process...')
  })
  console.log('callback')

});

console.log('ending process...')


// hello('julian', () => {})
// bye('julian', () => {})