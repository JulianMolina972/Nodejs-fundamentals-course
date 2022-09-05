const http = require('http');

http.createServer(router).listen(3000);

console.log('listening on port 3000');


function router(req, res)  {
  console.log('new request');
  console.log(req.url);

  switch(req.url) {
    case '/hello':
      res.write('hello, how are you');
      res.end();
      break;

    default:
      res.write('error 404: not found');
      res.end();

  }

  // res.writeHead(201, { 'Content-type': 'text/plain' });


  // res.write('hello world, I can use HTTP in Node.js');

  // res.end();

}