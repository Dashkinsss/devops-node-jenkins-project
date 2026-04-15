const express = require("express");
const {
  getAllProducts,
  getProductById,
  getProductsByCategory,
} = require("../services/productService");

const router = express.Router();

router.get("/", (req, res) => {
  const { category, minPrice, maxPrice } = req.query;

  let result = getAllProducts();

  if (category) {
    result = result.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase(),
    );
  }

  if (minPrice) {
    result = result.filter((p) => p.price >= Number(minPrice));
  }

  if (maxPrice) {
    result = result.filter((p) => p.price <= Number(maxPrice));
  }

  return res.json(result);
});

router.get("/:id", (req, res) => {
  const product = getProductById(req.params.id);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  return res.json(product);
});

module.exports = router;
