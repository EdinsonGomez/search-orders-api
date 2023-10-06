const productsModel = require('../models/productsModel');

exports.getProductById = (req, res) => {
  const id = req.params.id;
  const product = productsModel.findProductById(id);

  if (product) {
    res.status(200).send(product);
  } else {
    res.status(400).send("Product not exist");
  }
};

exports.getProducts = (req, res) => {
  const products = productsModel.find() ?? [];

  res.status(200).send(products);
}
