const express = require('express');
const expensecontroller = require('../controllers/expensecontroller');
const router = express.Router()
const bodyparse = require('body-parser');
const cors = require('cors');



//middlewares for request body parsing and cross origin request handling
router.use(bodyparse.json());
router.use(cors());





router.post('/postexpense', expensecontroller.postexpense);



module.exports = router;