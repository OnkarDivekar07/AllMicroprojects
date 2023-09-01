const path = require('path')

const express = require('express');

const routercontactus = express.Router();

routercontactus.get('/contactus', (req, res, next) => {

    res.sendFile(path.join(__dirname, "../", "views", "contact.html"))
})


module.exports = routercontactus