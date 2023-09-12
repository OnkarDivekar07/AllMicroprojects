const express = require('express')
const appoinmentroutes=require('./routes/crudroutes')
const app = express();


app.use(express.static(__dirname + '/views'))

app.use('/', appoinmentroutes)

app.listen(3000);