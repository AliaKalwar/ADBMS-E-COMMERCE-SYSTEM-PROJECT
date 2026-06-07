const express = require("express");
const router = express.Router();   // ✅ IMPORTANT

const Order = require("../models/Order");

// CREATE ORDER
router.post("/", async (req, res) => {
  const { userId, items, shippingAddress } = req.body;

  let total = 0;
  items.forEach(item => {
    total += item.price * item.quantity;
  });

  const order = new Order({
    userId,
    items,
    shippingAddress,
    totalAmount: total
  });

  await order.save();
  res.json(order);
});

// SEED ORDERS
router.get("/seed-orders", async (req, res) => {
  await Order.deleteMany();

  const orders = [];

  for (let i = 1; i <= 15; i++) {
    orders.push({
      items: [
        { name: "Product " + i, price: 2000, quantity: 1 }
      ],
      shippingAddress: {
        street: "Street " + i,
        city: "Karachi",
        postalCode: "74000"
      },
      totalAmount: 2000 + i * 100
    });
  }

  await Order.insertMany(orders);

  res.send("✅ Orders inserted");
});

module.exports = router;