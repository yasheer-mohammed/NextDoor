const express = require("express");
const app = express();
// const port = 3000;
const dotenv = require("dotenv");
const path = require("path");
const connectDb = require("./config/connectDb");
dotenv.config({ path: path.join(__dirname, ".env") });

const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Define a simple route

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const orders = require("./routes/order");
const products = require("./routes/product");

// Connect to the database
connectDb();

app.use(express.json());
app.use(cors());

app.use("/api/v1", orders);
app.use("/api/v1", products);

// Start the server
app.listen(process.env.PORT, () => {
  console.log(
    `server listening to port:${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
module.exports = app;
