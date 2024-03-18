const BaseSQLModel = require("./baseSQLModel");
class bookDB extends BaseSQLModel {
  constructor(){
    super('book');
  }
  async getAllDataInBook(){
    const [results]= await this.findAll();
    return results;
  }
}
const bookDBModel = new bookDB();

module.exports = bookDBModel;