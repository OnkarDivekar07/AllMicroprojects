const express=require('express');

const router=express.Router();
router.get('/add-product', (req, res, next) => {

    res.send('<html><body><form action="/admin/add-product" method="post"><input type="text" name="title" /><br><input type="number" name="size" /><br><button type="submit">Add product</button></form></body></html>')

})

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports=router;