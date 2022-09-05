console.time('all')
let sum = 0;
console.time('loop')

for (let i = 0; i < 1000000000; i++) {
  sum += i;
}

console.timeEnd('loop')

let sum2 = 0;
console.time('loop2')

for (let j = 0; j < 1000000000; j++) {
  sum2 += j;
}

console.timeEnd('loop2')

console.time('async')
console.log('staring async loop')
asyncLoop() 
  .then(() => {
    console.timeEnd('async')
  })

function asyncLoop() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('async loop')
      resolve()
    }, 5000)
  })
}

// console.timeEnd('async')

console.timeEnd('all')