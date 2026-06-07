const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  const data = new Product(req.body);
  await data.save();
  res.json(data);
};

exports.getProducts = async (req, res) => {
  const data = await Product.find();
  res.json(data);
};

exports.updateProduct = async (req, res) => {
  const data = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(data);
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
