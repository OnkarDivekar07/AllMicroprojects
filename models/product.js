const db=require('../util/database')



module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute('insert into products(title,price,description)values(?,?,?)',
    [this.title,this.price,this.description]
    )
  }
  static deleteById(){

  }


  static fetchAll() {
  return  db.execute('select * from products')
  }
  static findById(){
   return db.execute('select * from products where products.id=?',[id])
  }
};
