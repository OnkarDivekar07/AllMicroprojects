const express = require('express')
const app = express();
app.use((req, res, next) => {
    console.log('this is middleware')

    next();//allows to continue request to the next middleware


})

app.use((req, res, next) => {
    console.log('this is another middleware')

    res.send('<h1>Hello from express js</h1>')

})
app.listen(4000);