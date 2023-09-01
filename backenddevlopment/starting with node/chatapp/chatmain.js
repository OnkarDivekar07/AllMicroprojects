const express = require('express')
const fs = require('fs');

const chatapp = express();

const bodyParse = require('body-parser');
const { error } = require('console');

chatapp.use(bodyParse.urlencoded({ extended: false }))


chatapp.get("/login", (req, res, next) => {
    res.send('<form onsubmit="localStorage.setItem(`username`,document.getElementById(`username`).value)" action="/user" method="POST"><input id="username" type="text" name="username"><br><button type="submit">Login</button></form>')
})

chatapp.post("/user", (req, res, next) => {
    console.log(req.body);
    const a = req.body.username
    if (req.body.chat && req.body.username) {
        fs.writeFile('chat.txt', `${req.body.username} : ${req.body.chat}  `, { flag: 'a' }, (error) => {
            if (error) {
                console.log(error)

            }
            else {
                console.log('succesfully created');
            }
        })
    }
    fs.readFile('chat.txt', (err, data) => {
        if (err) {
            data = "cannot find any chat"
        }
        res.send(`${data}<form action="/user" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
        <input type="text" id="chat" name="chat" placeholder="message">
        <input type="hidden" id="username" name="username">
        <button type="submit">SEND</button>
        </form>`);
    });

})

chatapp.use("/", (req, res, next) => {
    res.redirect('/login')

})
chatapp.listen(4000);