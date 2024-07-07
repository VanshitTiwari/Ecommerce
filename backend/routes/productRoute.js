const express = require("express");
const { createProduct,getAllProducts, updateProduct, deleteProduct } = require("../controllers/productControllers");


const router = express.Router();

router.route("/products").get(getAllProducts);


router.route("/product/new").post(createProduct);

router.route("/product/:id").put(updateProduct).delete(deleteProduct);

module.exports = router;