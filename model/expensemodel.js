const db = require('../util/database');


module.exports=class Expense{
     constructor(id, amount, description, catogary){
         this.id=id
         this.amount=amount
         this.description=description
          this.catogary = catogary
    }

     save(){
       return db.execute('INSERT INTO expense(amount,description,catogary)VALUES(?,?,?)',[
            this.amount,
            this.description,
            this.catogary])
    }

    static deletebyid(id){
      return db.execute('DELETE FROM expense where id=?',[id])
    }

   static fetchAll(){
     return  db.execute('SELECT * FROM expense')
    }


    static editbyid(id){
          
    }
}