const http = require('http');

const server = http.createServer((req, res) => {
  
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  
  res.end('Hello, Milan! This is your first Node.js server.\n');
});


server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});