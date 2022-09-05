console.clear()

function function1() {
  console.group('starting')
  console.log('this is to the function 1')
  console.log('this is to the function 1')
  console.log('this is to the function 1')
  console.log('this is to the function 1')
  console.log('this is to the function 1')
  function2()
  console.log('now this is to the function 1')
  console.log('now this is to the function 1')
  console.log('now this is to the function 1')
  console.log('now this is to the function 1')
  console.log('now this is to the function 1')
  console.groupEnd('starting')
}

function function2() {
  console.group('function 2')
  console.log('this is to the function 2')
  console.log('this is to the function 2')
  console.log('this is to the function 2')
  console.groupEnd('function 2')
}

console.log('starting')
console.time(function1()) 

console.clear()
console.count('times')
console.count('times')
console.count('times')
console.count('times')
console.count('times')
console.countReset('times')
console.count('times')