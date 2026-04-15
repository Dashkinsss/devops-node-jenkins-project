const products = require("../data/products");

function getAllProducts() {
  return products;
}

function getProductById(id) {
  return products.find((product) => product.id === Number(id)) || null;
}

function getProductsByCategory(category) {
  return products.filter(
    (product) =>
      product.category.toLowerCase() === String(category).toLowerCase(),
  );
}

module.exports = {
  getAllProducts,
  getProductById,
  getProductsByCategory,
};
