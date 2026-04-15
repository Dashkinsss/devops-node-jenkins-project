const express = require("express");
const {
  getAllProducts,
  getProductById,
  getProductsByCategory,
} = require("../services/productService");

const router = express.Router();

router.get("/", (req, res) => {
  const { category } = req.query;

  if (category) {
    return res.json(getProductsByCategory(category));
  }

  return res.json(getAllProducts());
});

router.get("/:id", (req, res) => {
  const product = getProductById(req.params.id);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  return res.json(product);
});

module.exports = router;
