const path = require('path')

const express = require('express');

const routerform = express.Router();

routerform.post('/formsuccesful', (req, res, next) => {

    res.sendFile(path.join(__dirname, "../", "views", "formsucces.html"))
})


module.exports = routerform