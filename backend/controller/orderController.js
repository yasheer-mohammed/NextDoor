// controller/orderController.js

const orderModel = require("../Models/orderModel");

exports.createOrder = async (req, res, next) => {
  // console.log(req.body, ":Order Data");
  const cartItems = req.body;
  const amount = Number(
    cartItems
      .reduce((acc, item) => acc + item.product.price * item.qty, 0)
      .toFixed(2)
  );
  const qty = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const status = "pending";

  const order = await orderModel.create({
    cart: cartItems,
    cart_qty: qty,
    amount,
    status,
  });
  console.log(cartItems, amount, ":Cart Items and Total Amount");

  res.json({
    success: true,
    message: "Order created successfully!",
    order,
  });
};
