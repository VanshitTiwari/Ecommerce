const express = require("express");
const { createProduct,getAllProducts, updateProduct } = require("../controllers/productControllers");


const router = express.Router();

router.route("/products").get(getAllProducts);


router.route("/product/new").post(createProduct);

router.route("/product/:id").put(updateProduct);

module.exports = router;