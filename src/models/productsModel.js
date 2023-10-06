const productsJson = require('../../db-data/products.json');

class ProductModel {
  findProductById(id) {
    const product = productsJson.find((p) => p.id === +id);
    return product;
  }
  
  find() {
    return productsJson;
  }
}

module.exports = new ProductModel();