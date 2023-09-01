const express = require('express')
const app = express();
const path=require("path");
const bodyParser= require('body-parser')

app.use(bodyParser.urlencoded({extended:  false}));

const adminRoutes=require('./routes/admin.js')
const shopRoutes=require('./routes/shop.js')
const routercontactus=require('./routes/contactus.js')
const routerform = require('./routes/formsuccesful.js')
app.use('/admin',adminRoutes);
app.use(routercontactus)
app.use(routerform)
app.use(shopRoutes);
app.use(express.static(path.join(__dirname,"public")))

app.use((req,res,next)=>{

res.sendFile(path.join(__dirname, "views", "404.html"))


})

app.listen(4000);