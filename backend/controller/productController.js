// controller/productController.js
const productModel = require("../Models/productModel");

exports.getProducts = async (req, res, next) => {
  try {
    const products = await productModel.find({});
    res.json({
      success: true,
      message: "List of products",
      data: products,
    });
  } catch (err) {
    next(err);
  }
};

exports.getSingleProducts = async (req, res, next) => {
  console.log(req.params.id, "ID");
  const productId = req.params.id;
  try {
    const product = await productModel.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    res.json({
      success: true,
      message: `Details of product with ID: ${productId}`,
      data: product,
    });
  } catch (err) {
    next(err);
  }
};
