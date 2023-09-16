
const expense = require('../model/expensemodel');

exports.getexpense = (req, res) => {
    console.log('expense data send')
    expense.findAll()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
        })

}

exports.postexpense = (req, res,next) => {
    console.log('expense added')
    const id=req.params.id
    const amount = req.body.amount;
    const description = req.body.description;
    const catogary = req.body.catogary;
    expense.create({
        amount: amount,
        description: description,
        catogary: catogary
    }).then((result) => {
        res.send(result);
    })
        .catch((err) => {
            console.log(err);
        })
    
    
    }


exports.putexpense = (req, res) => {
    console.log('expense updated');
    const id = req.params.id;
    const amount = req.body.amount;
    const description = req.body.description;
    const category = req.body.category
    expense.findByPk(id)
        .then(updated => {
            updated.amount = amount;
            updated.description = description;
            updated.category = category;
            return updated.save();
        })
        .then(updateddata => {
            res.json(updateddata);
        })
        .catch(err => console.log(err));
}

exports.deleteexpense = (req, res) => {
    console.log('row deleted');
    const id = req.params.id;

    expense.findByPk(id)
        .then(data => {
            if (!data){
                // Handle the case where the record with the specified ID was not found.
                return res.status(404).send('Expense not found');
            }

            return data.destroy()
                .then(() => {
                    res.send('Successfully deleted');
                })
        })
        .catch(err => {
            res.status(500).send('Internal Server Error');
        });
}



