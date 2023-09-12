const mysql=require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Divekar@210',
    database: 'node_complete'
})

const connect = connection.connect((err, rows, fields) => {
    if (err){
        console.log(err)
    }
else{

        console.log('db started')
}
   
})

module.exports = connection


