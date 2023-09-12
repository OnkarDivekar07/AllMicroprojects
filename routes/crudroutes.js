const express=require('express');
const bodyparse = require('body-parser');
const cors = require('cors');
const db = require('../models/database')
const router=express.Router();



router.use(express.static(__dirname + '/views'))
router.use(bodyparse.json());
router.use(cors());



router.get('/appoinment', (req, res) => {
    res.redirect("appoinment.html")
})

router.get('/sendappoinment', (req, res) => {
    db.query('SELECT * FROM users', (err, rows) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Error fetching data from the database' });
        } else {
            res.status(200).json(rows);
        }
    });
})


router.post('/submitappoinment', (req, res) => {
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


router.delete(`/submitappoinment/:id`, (req, res) => {
    db.query('delete from users where id=?', [req.params.id], (err, rows) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(rows);
        }
    })
})


module.exports=router;