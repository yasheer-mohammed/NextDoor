// routes/product.js

const express = require("express");
const {
  getProducts,
  getSingleProducts,
} = require("../controller/productController");

const router = express.Router();

router.get("/products", getProducts); // GET all products
router.get("/products/:id", getSingleProducts); // GET single product by ID

module.exports = router;
