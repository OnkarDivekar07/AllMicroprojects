const db = require('../util/database');
const expense=require('../model/expensemodel');

exports.getexpense = (req, res) => {
    console.log('expense data send')
    expense.fetchAll()
    
    .then(([rows,fieldData])=>{
      res.status(200).json(rows);
    })
    .catch((err)=>{
        console.log(err);
    })
    
}

exports.postexpense = (req, res) => {
    console.log('expense added');
    const amount=  req.body.amount;
    const description=req.body.description;
    const catogary= req.body.catogary;
    const Expense = new expense(null,amount,description,catogary)

    Expense.save()
    .then(([rows,fieldData])=>{
        res.status(201).json(rows);
    })
    .catch((err)=>{
        console.log(err);
    })
   
}


exports.deleteexpense = (req, res) => {
   console.log('row deleted');
const expenseid=req.params.id
   expense.deletebyid(expenseid).then((result)=>{
    res.send(result);
   })
   .catch((err)=>{
    console.log(err);
   })
}
