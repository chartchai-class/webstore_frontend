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
}

module.exports = BookModel;
