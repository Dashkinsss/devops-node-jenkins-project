const express = require("express");
const { calculateCartSummary } = require("../services/cartService");

const router = express.Router();

router.post("/total", (req, res, next) => {
  try {
    const { items } = req.body;
    const summary = calculateCartSummary(items);
    return res.json(summary);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
