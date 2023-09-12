const express = require('express')
const bodyparse = require('body-parser');
const cors = require('cors');
const db = require('./models/database')
const app = express();


app.use(express.static(__dirname + '/views'))
app.use(express.urlencoded({ extended: true }));
app.use(bodyparse.json());
app.use(cors());


app.get('/appoinment', (req, res) => {
    res.redirect("appoinment.html")
})

app.get('/sendappoinment', (req, res) => {
    db.query('SELECT * FROM users', (err, rows) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Error fetching data from the database' });
        } else {
            res.status(200).json(rows);
        }
    });
})


app.post('/submitappoinment', (req, res) => {
    console.log('user created');
    const user = req.body;
    console.log(user)
    const userdata = [user.name, user.email, user.phonenumber]
    db.query('insert into  users(name,email,phonenumber)values(?)', [userdata], (err, rows) => {
        if (err) {
            console.log(err)
        }
        else {
            const data = {
                id: rows.insertId,
                name: user.name,
                email: user.email,
                phonenumber: user.phonenumber
            };
            res.status(201).json(data);
        }
    })
})



app.patch('/editappoinment/:id', (req, res) => {
    console.log('user updated')
    const user = req.body;
    console.log(req.body)
    db.query('UPDATE users SET name=?, email=?, phonenumber=? WHERE id=?', [user.name, user.email, user.phonenumber, req.params.id], (err, rows) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(rows)
            res.send(rows);
        }
    })
})

app.delete(`/submitappoinment/:id`, (req, res) => {
    db.query('delete from users where id=?', [req.params.id], (err, rows) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(rows);
        }
    })
})


app.listen(3000);