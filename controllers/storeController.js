const CategoryModel = require("../model/categoryModel");

const categoryModel = new CategoryModel();

exports.view = async (req, res) => {
  try {
    const categories = await categoryModel.getAllCategories();

    res.render("index", { categories });
  } catch (error) {
    console.error("Error", error);
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
