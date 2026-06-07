const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,

  addresses: [
    {
      street: String,
      city: String,
      postalCode: String
    }
  ],

  cart: [
    {
      productId: mongoose.Schema.Types.ObjectId,
      quantity: Number
    }
  ],

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", userSchema);
