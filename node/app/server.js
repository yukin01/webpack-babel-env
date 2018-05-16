const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((request, response) => {
  const path = url.parse(request.url, true);
  console.log(path.pathname);
  switch (path.pathname) {
    case '/':
      const index = fs.readFileSync('./dist/index.html', 'utf-8');
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(index);
      response.end();
      break;
    case '/bundle.js':
      const js = fs.readFileSync('./dist/bundle.js', 'utf-8');
      response.writeHead(200, {'Content-Type': 'text/javascript'});
      response.write(js);
      response.end();
      break;
    default:
      response.writeHead(404, {'Content-Type': 'text/plain'});
      response.end('Not Found');
  }  
})
server.listen(3000);
console.log('Server is running!');
