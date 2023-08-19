const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
       //console.log(req.url, req.method, req.headers)
       // process.exit();
       const url = req.url;
       const method = req.method;
       if (url === '/') {
      fs.readFile('message.txt',{encoding:"utf-8"},(err,data)=>{
           if (err) {
                    console.log(err);
             }
             console.log('data from file' + data);
             res.write("<html>");
             res.write("<head><title>this is my form Page</title></head>");
             res.write("<body>")
             res.write(`<p> ${ data } </p>`)
             res.write('<form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form>');
             res.write("</body>")
             res.write("</html>");
             return res.end();
  })
                    
 }
       else if (url === '/message' && method === "POST") {
                 const body = []
                 req.on('data', (chunk) => {
                      body.push(chunk);
                    console.log(chunk);
             })
                  return    req.on('end', () => {
                     const parsebody = Buffer.concat(body).toString();
                     const message = parsebody.split('=')[1];
                     fs.writeFile('message.txt', message,(err)=>{
                           res.statusCode = 302;
                           res.setHeader('Location', '/');
                          return res.end();
                    })
                     
               })

        }

       //response for /home request
       // else if (url === '/home') {
       //        res.write('<html>');
       //        res.write('<head><title>this is my home Page</title></head>');
       //        res.write('<body><h1>Welcome Home</h1></body>');
       //        res.write('</html>');
       //        res.end();
       // }
       // //response for /about request
       // else if (url === '/about') {
       //        res.write('<html>');
       //        res.write('<head><title>this is my about us Page</title></head>');
       //        res.write('<body><h1>Welcome to About Us page</h1></body>');
       //        res.write('</html>');
       //        res.end();
       // }
       // //response for /node request
       // else if (url === '/node') {
       //        res.write('<html>');
       //        res.write('<head><title>this is my project Page</title></head>');
       //        res.write('<body><h1>Welcome to my Node Js project</h1></body>');
       //        res.write('</html>');
       //        res.end();
       // }
       // response on localhost:4000;
     else{
              res.setHeader('Content-Type', 'text/html');
              res.write('<html>');
              res.write('<head><title>this is my first Page</title></head>');
              res.write('<body><h1>welcome to my node.js server page</h1></body>');
              res.write('</html>');
              res.end();
     }  
})

server.listen(4000);