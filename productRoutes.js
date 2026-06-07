const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

router.get("/seed", async (req, res) => {
  await Product.deleteMany();

  const products = [];

  for (let i = 1; i <= 30; i++) {
    products.push({
      name: "Product " + i,
      price: 1000 + i * 500,
      category: i % 2 === 0 ? "Electronics" : "Clothing",
      stock: 20,
      specs: {
        feature: "Feature " + i
      }
    });
  }

  await Product.insertMany(products);

  res.send("✅ Products inserted");
});

// GET products
router.get("/", async (req, res) => {
  const data = await Product.find();
  res.json(data);
});

module.exports = router;