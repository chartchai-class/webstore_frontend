const CategoryModel = require("../model/categoryModel");
const BookModel = require("../model/bookModel");

const categoryModel = new CategoryModel();
const bookModel = new BookModel();

exports.view = async (req, res) => {
  try {
    const categories = await categoryModel.getAllCategories();
    res.render("index", { categories });
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
