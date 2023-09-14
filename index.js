//require  imports for sever
const express=require('express');
const app = express();
const db=require('./util/database');
//routes file paths
const deleteroute=require('./routes/deleteroute')
const errorroute=require('./routes/errorroute')
const getroute=require('./routes/getroute')
const htmlrenderroute=require('./routes/htmlrenderroute')
const postroute=require('./routes/postroute');


//crud routes
app.use(htmlrenderroute);

app.use(getroute);

app.use(postroute);

app.use(deleteroute);

app.use(errorroute);

app.listen(3000);