const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const productscontroller = require('../controllers/product')

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product', productscontroller.getAddproduct,()=> {
console.log('started')
})

// /admin/add-product => POST
router.post('/add-product', productscontroller.postAddProduct,()=>{
  console.log('started')
})

module.exports=router;
