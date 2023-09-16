//require  imports for sever
const express = require('express');
const app = express();
const path=require('path')
const sequelize = require('./util/database');

//routes file paths
const route = require('./routes/crudroutes');

app.use(express.static(path.join(__dirname, 'view')));
//crud routes

app.use(route);

sequelize.sync()
    .then((result) => {

        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    })

