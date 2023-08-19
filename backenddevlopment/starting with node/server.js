const http = require('http');
const server = http.createServer((req, res) => {
       console.log(req.url, req.method, req.headers)
       // process.exit();
       const url = req.url;
       if (url === '/home') {
              res.setHeader('Content-header', 'text/html');
              res.write('<html>');
              res.write('<head><title>this is my home Page</title></head>');
              res.write('<body><h1>Welcome Home</h1></body>');
              res.write('</html>');
              res.end();
       }
       else if (url === '/about') {
              res.setHeader('Content-header', 'text/html');
              res.write('<html>');
              res.write('<head><title>this is my about us Page</title></head>');
              res.write('<body><h1>Welcome to About Us page</h1></body>');
              res.write('</html>');
              res.end();
       }
       else if (url === '/node') {
              res.setHeader('Content-header', 'text/html');
              res.write('<html>');
              res.write('<head><title>this is my project Page</title></head>');
              res.write('<body><h1>Welcome to my Node Js project</h1></body>');
              res.write('</html>');
              res.end();
       }
       res.setHeader('Content-header', 'text/html');
       res.write('<html>');
       res.write('<head><title>this is my first Page</title></head>');
       res.write('<body><h1>welcome to my node.js server page</h1></body>');
       res.write('</html>');
       res.end();
})

server.listen(4000);