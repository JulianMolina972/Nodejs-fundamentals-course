function asynchronous(callback) {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (e) {
      callback(e);
    }
  }, 3000);
}

try {
  asynchronous((err, data) => {
    if (err) {
      // console.error(err);
      // throw err; //no funciona en async
      // return false;
    }
    
    console.log(data);
    
  });
} catch (e) {
  console.error(e);
}

// asynchronous((err, data) => {
//   if (err) {
//     // console.error(err);
//     throw err;
//     // return false;
//   }
  
//   console.log(data);
  
// });