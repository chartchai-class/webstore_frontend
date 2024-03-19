const express = require("express");
const router = express.Router();
const storeController = require("../controllers/storeController");

router.get("/", storeController.view);
router.post("/addToBill", storeController.addtoBill);
router.get("/addtocart", storeController.getCart);
router.post("/addToBill", storeController.addtoBill);

router.get("/categories", storeController.categories);
router.get("/categories/:categoryId", storeController.category);
router.get("/details/:id", storeController.details);
//deleteBook
router.post("/deleteBook",storeController.deleteBook);

router.get("/promotions", storeController.promo);
router.get("/contactUs", storeController.contact);

module.exports = router;
