const express = require("express");
const { createProduct,getAllProducts } = require("../controllers/productControllers");


const router = express.Router();

router.route("/products").post(createProduct).get(getAllProducts);


// router.route("/product/new").post(createProduct);

module.exports = router;