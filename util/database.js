const Squlize=require('sequelize');

const squlize= new Squlize('node_complete','root','Divekar@210',{dialect:'mysql',host:'localhost'});


module.exports=squlize;
