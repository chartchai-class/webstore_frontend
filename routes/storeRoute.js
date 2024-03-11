const express = require("express");
const router = express.Router();
const storeController = require("../controllers/storeController");

router.get("/", storeController.view);

router.get("/categories", (req, res) => {
  res.render("categories");
});

router.get("/contactUs", storeController.contact);

module.exports = router;
