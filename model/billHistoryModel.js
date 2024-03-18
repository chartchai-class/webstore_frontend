const pool = require("../config/mysqlconfig");

class BillHistoryModel {
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
  async getAllBills() {
    const query = "SELECT * FROM bookstore.sale_History";
    const results = await this.executeQuery(query);
    return results;
  }
  async addToBills(billDate, bookId, quantity, billPrice) {
    const query =
      "INSERT INTO bookstore.sale_History(billDate,bookId,quantity,billPrice)VALUES(?,?,?,?)";
    const values = [billDate, bookId, quantity, billPrice];
    const results = await this.executeQuery(query, values);
    return results;
  }
}
module.exports = BillHistoryModel;
