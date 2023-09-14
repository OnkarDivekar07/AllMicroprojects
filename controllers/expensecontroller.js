const db = require('../util/database');
const expense=require('../model/expensemodel');

exports.getexpense = (req, res) => {
    console.log('expense data send')
    db.query('SELECT * FROM expense', (err, rows) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Error fetching data from the database' });
        } else {
            res.status(200).json(rows);
        }
    })
}

exports.postexpense = (req, res) => {
    console.log('expense added');
    const expense = req.body;
    console.log(user)
    const expensedata = [expense.amount, expense.description, expense.catogary]
    db.query('insert into  users(amount,description,catogary)values(?)', [expensedata], (err, rows) => {
        if (err) {
            console.log(err)
        }
        else {
            const data = {
                id: rows.insertId,
                amount: expense.amount,
                description: expense.description,
                catogary: expense.catogary
            };
            res.status(201).json(data);
        }
    })
}


exports.deleteexpense = (req, res) => {
    console.log('expense deleted')
    db.query('delete from expense where id=?', [req.params.id], (err, rows) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(rows);
        }
    })
}
