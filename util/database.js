const mysql=require('mysql2');

const pool = mysql.createPool({
host:'localhost',
user:'root',
database:'node_complete',
password:'Divekar@210'
})

module.exports=pool.promise()