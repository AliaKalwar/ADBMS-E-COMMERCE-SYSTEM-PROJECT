const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,

  items: [
    {
      productId: mongoose.Schema.Types.ObjectId,
      name: String,
      price: Number,
      quantity: Number
    }
  ],

  shippingAddress: {
    street: String,
    city: String,
    postalCode: String
  },

  totalAmount: Number,

  status: {
    type: String,
    default: "Pending"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Order", orderSchema);
