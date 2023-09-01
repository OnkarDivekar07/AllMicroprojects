const path=require('path')

const express=require('express');

const routershop=express.Router();

routershop.get('/', (req, res, next) => {

    res.sendFile(path.join(__dirname,"../" ,"views", "shop.html"))
})


module.exports=routershop