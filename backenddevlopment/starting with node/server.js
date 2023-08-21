const express = require('express')
const app = express();
const bodyParser= require('body-parser')

app.use(bodyParser.urlencoded({extended:  false}));

app.use('/add-product', (req, res, next) => {

    res.send('<html><body><form action="/product" method="post"><input type="text" name="title" /><br><input type="number" name="size" /><br><button type="submit">Add product</button></form></body></html>')

})

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})


app.use('/',(req, res, next) => {

    res.send('<h1>Hello from express js</h1>')

})
app.listen(4000);