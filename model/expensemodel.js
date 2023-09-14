const db = require('../util/database');


module.exports=class expenses{
    constructor(){

    }

    save(){

    }

    static deletebyid(){

    }

   static fetchAll(){
     return  db.execute('SELECT * FROM expense')
    }


    static findbyid(id){

    }
}