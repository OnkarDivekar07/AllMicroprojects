const http = require('http');
const routes=require('./routes');
//important note we cannot edit  route  externally means route.something is not possible
const fs = require('fs');
const server = http.createServer(routes);


server.listen(4000);