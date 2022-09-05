function otherFunc() {
  return breaks();
}

function breaks() {
  return 3 + z;
}


function breaksAsync(cb) {
  setTimeout(function() {
    try {
      return 3 + z;
    } catch (err) {
      console.error('error in async');
      cb(err);
    }
    
  }, 1000);
}

try {
  // otherFunc();
  breaksAsync(function(err) {
    console.log(err);
  });
} catch (error) {
  console.error(error);
  console.log('catching error');
}

console.log('this is the end')