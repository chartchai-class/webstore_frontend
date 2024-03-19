const CategoryModel = require("../model/categoryModel");
const BookModel = require("../model/bookModel");
const BillHistoryModel = require("../model/billHistoryModel");
const addToCartDB = require("../model/sale_HistoryDB");

const categoryModel = new CategoryModel();
const bookModel = new BookModel();
const billHistoryModel = new BillHistoryModel();

exports.getCart = async (req, res) => {
  console.log("getCart controller function called.");

  try {
    const categories = await categoryModel.getAllCategories();
    const result = await addToCartDB.getAllDataInBill();

    res.render("component/cartinfo", {
      billinfos: result,
      categories: categories,
    });
  } catch (error) {
    console.error("Error fetching data from the database:", error);
    res.status(500).send("Internal Server Error");
  }
};
exports.deleteBook= async(req,res)=>{
  const billId = req.body.billId;
  const deleteFun=await billHistoryModel.deleteBook(billId);
   res.redirect('/addtocart');

}

exports.view = async (req, res) => {
  try {
    const categories = await categoryModel.getAllCategories();
    const promo = await bookModel.getPromos();
    res.render("index", { categories, promo });
  } catch (error) {
    console.error("Error", error);
  }
};

exports.addtoBill = async (req, res) => {
  const billDate = new Date().toISOString().split("T")[0];
  // console.log("req.body ",req.body);
  const bookId = req.body.bookId;
  // console.log("req.body.bookId",bookId);
  const quantity = req.body.quantity ? req.body.quantity : 1;
  const billPrice = req.body.billPrice;
  try {
    const salecount = await bookModel.addSale_Count(bookId);
    console.log("saleCount ", salecount);
    const bills = await billHistoryModel.addToBills(
      billDate,
      bookId,
      quantity,
      billPrice
    );
  } catch (error) {
    console.error("Error", error);
  }
};

exports.categories = async (req, res) => {
  try {
    const categories = await categoryModel.getAllCategories();
    const books = await bookModel.getAllBooks();
    res.render("categories", { categories, books });
  } catch (error) {
    console.error("Error", error);
  }
};

exports.details = async (req, res) => {
  const { id } = req.params;
  try {
    const books = await bookModel.getEachBook({ bookId: id });
    const categories = await categoryModel.getAllCategories();

    res.render("details", { categories, books });
  } catch (error) {
    console.error("Error", error);
  }
};

exports.promo = async (req, res) => {
  try {
    const categories = await categoryModel.getAllCategories();
    const promo = await bookModel.getPromos();

    res.render("promotion", { categories, promo });
  } catch (error) {
    console.error("Error", error);
  }
};

exports.category = async (req, res) => {
  try {
    const categories = await categoryModel.getAllCategories();
    const categoryId = parseInt(req.params.categoryId);
    const category = categories.find(
      (category) => category.categoryId === categoryId
    );
    const categoryName = category.categoryName;
    const books = await bookModel.bookForEachCategory({ categoryId });
    res.render("category-details", { categories, books, categoryName });
  } catch (err) {
    console.error("Error", err);
  }
};

exports.contact = async (req, res) => {
  try {
    const categories = await categoryModel.getAllCategories();

    res.render("contactUs", { categories });
  } catch (error) {
    console.error("Error", error);
  }
};
