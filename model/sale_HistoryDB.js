const BaseSQLModel = require("./baseSQLModel");
class addToCart extends BaseSQLModel {
  constructor(){
    super('sale_History');
  }
  
    async getAllDataInBill() {
      const query = `
          SELECT b.bookCover, b.bookTitle, b.bookAuthor,b.bookPromo, b.bookPrice, bi.*
          FROM bookstore.book AS b
          JOIN ${this.tableName} AS bi ON b.bookId = bi.bookId;
      `;
      const results = await this.executeQuery(query);
      return results;
  }

  async updateQuantity(item) {
    const sql = `UPDATE ${this.tableName}
                   SET quantity = ?
                   WHERE book_id = ?`;
    const params = [item.quantity, item.book_id];
  
    const results = await this.executeQuery(sql, params);
    return results;
  }
  
}

const addToCartDB = new addToCart();

module.exports = addToCartDB;
