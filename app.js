const express = require("express");
const healthRoutes = require("./routes/healthRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const requestLogger = require("./middleware/logger");

const app = express();

app.use(requestLogger);
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
  const statusCode = err.status || 400;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Unexpected error",
    timestamp: new Date().toISOString()
  });
});

module.exports = app;
