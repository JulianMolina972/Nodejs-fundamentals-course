let i = 0;
let interval = setInterval(() => {
  if (i === 3) {
    clearInterval(interval);
  }
  i++
  console.log('hello');
}, 1000)

setImmediate(() => {
  console.log('world');
})

// require();

console.log(__dirname)
console.log(__filename)
