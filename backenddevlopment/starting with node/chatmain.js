const express = require('express')

const chatapp = express();


chatapp.use("/login", (req, res, next) => {

    res.send('<html><body><form  action="/user" method="post"><input type="text" name="chat" placeholder="username" /><br><button type="submit">Login</button></form></body></html>')
    
})
chatapp.use("/", (req, res, next) => {

    res.send('<html><body><form  action="/chat" method="Post"><input type="text" name="chat" placeholder="write here" /><br><button type="submit">send</button></form></body></html>')
})






chatapp.listen(4000);