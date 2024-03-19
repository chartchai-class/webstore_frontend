const pool = require("../config/mysqlconfig");

class BookModel {
  executeQuery(query, params) {
    return new Promise((resolve, reject) => {
      pool.query(query, params, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  async getAllBooks() {
    const query = "SELECT * FROM book";
    const results = await this.executeQuery(query);
    return results;
  }

  async getPromos() {
    const query = "SELECT * FROM book WHERE bookPromo>0";
    const results = await this.executeQuery(query);
    return results;
  }

  async getEachBook({ bookId }) {
    const query = "SELECT * FROM book WHERE bookId=?";
    const results = await this.executeQuery(query, [bookId]);
    return results;
  }

  async bookForEachCategory({ categoryId }) {
    const query =
      "SELECT book.*,category.categoryName FROM book INNER JOIN category ON book.categoryId=category.categoryId  WHERE book.categoryId=?";
    const results = await this.executeQuery(query, [categoryId]);
    return results;
  }

  async addSale_Count(bookId) {
    const query = `UPDATE bookstore.book SET sale_count = sale_count + 1 WHERE bookId = ?`;
    const results = await this.executeQuery(query, [bookId]);
    return results;
  }
}
module.exports = BookModel;
