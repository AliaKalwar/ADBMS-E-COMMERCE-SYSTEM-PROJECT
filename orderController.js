const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  try {
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

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
