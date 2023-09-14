const express=require('express');
const expensecontroller=require('../controllers/expensecontroller');
const router=express.Router()
const bodyparse = require('body-parser');
const cors = require('cors');



//middlewares for request body parsing and cross origin request handling
router.use(bodyparse.json());
router.use(cors());





//sending a jason response to the front end
router.get('/getexpenses',expensecontroller.getexpense)



module.exports=router;

