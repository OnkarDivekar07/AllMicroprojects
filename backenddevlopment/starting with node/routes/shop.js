const express=require('express');

const routershop=express.Router();

routershop.get('/', (req, res, next) => {

    res.send('<h1>Hello from express js</h1>')

})


module.exports=routershop