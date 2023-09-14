const express = require('express');
const cors=require('cors');
const router = express.Router()
const expensecontroller = require('../controllers/err&renderingcontrollers');



//middlewares for request body parsing and cross origin request handling

router.use(cors());


router.use(expensecontroller.errorroute)



module.exports=router;