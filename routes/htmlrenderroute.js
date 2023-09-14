
const express = require('express');
const router = express.Router();
const expensecontroller = require('../controllers/err&renderingcontrollers');



//rendering html file through path module
router.get('/expenseapp', expensecontroller.rendering)




module.exports = router;