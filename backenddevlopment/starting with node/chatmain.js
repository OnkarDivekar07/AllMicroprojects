const express = require('express')
const fs=require('fs');

const chatapp = express();

const bodyParse=require('body-parser');
const { error } = require('console');

chatapp.use(bodyParse.urlencoded({extended: false}))


chatapp.use("/login", (req, res, next) => {
    fs.readFile('index.html', 'utf-8',(error,htmlContent)=>{
       if(error){
        res.status(400).send('failed to load html content')
       }
       else{
        res.send(htmlContent);
       }


    })
    
})


chatapp.use("/", (req, res, next) => {
    if(req.body.chat){
        fs.appendFile('chat.txt',req.body.chat,(error)=>{
      if(error){
        console.log(error)
      }
      else{
        console.log('succesfully created');
      }
})
    }

    fs.readFile('chat.txt','utf-8',(error,chats)=>{
        if(error){
            console.log(error)
        }
        else{
            res.send(`<html><body><form  action="/chat" method="Post"><p>${chats}</p><input type="text" name="chat" placeholder="write here" /><br><button type="submit">send</button></form></body></html>`)  
        }
    })

    
})

chatapp.listen(4000);