function hello (name, myCallback) {
  setTimeout(() => {
    console.log('Hello '+ name);
    myCallback(name);
  }, 3000)
}

function speak(callbackSpeak) {
  setTimeout(() => {
    console.log('bla bla bla...');
    callbackSpeak();
  }, 1000)

}

function bye (name, otherCallback) {
  setTimeout(() => {
    console.log('bye '+ name);
    otherCallback();
  }, 1000)
}

function conversation (name, times, callback) {
  if(times > 0) {
    speak(() => {
      conversation(name, --times, callback);
    })
  } else {
    bye(name, callback);
  }  

  
  // if (times > 0) {
  //   speak(() => {
  //     conversation(name, --times, callback)
  //   })
  // } else {
  //   bye(name, callback)
  // }
}
//--
console.log('starting process...')

hello('julian', (name) => {
  conversation(name, 3, () => {
    console.log('finishing process...')
  });
})

// hello('julian', (name) => {
//   bye(name, () => {
//     console.log('finishing ')
//   })
// })


// hello('julian', (name) => {
//   speak(() => {
//     speak(() => {
//       bye(name, () => {
//         console.log('finishing process...')
//       })
//     }) 
//   })
// });

