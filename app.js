const express = require("express");
const healthRoutes = require("./routes/healthRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

const app = express();

app.use(express.json());

app.use("/health", healthRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

app.get("/", (req, res) => {
  res.json({
    app: "DevOps Node.js Project",
    version: "1.0.0",
    endpoints: ["/health", "/products", "/cart/total"],
  });
});

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
});

app.use((err, req, res, next) => {
  res.status(400).json({
    error: err.message || "Unexpected error",
  });
});

module.exports = app;
