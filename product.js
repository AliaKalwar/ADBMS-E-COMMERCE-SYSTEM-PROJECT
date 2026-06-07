const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  stock: Number,

  specs: {
    type: Object
  },

  ratings: {
    average: Number,
    count: Number
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Product", productSchema);