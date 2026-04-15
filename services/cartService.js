function calculateCartTotal(items) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error("Cart must contain at least one item");
  }

  return items.reduce((total, item) => {
    if (
      typeof item.price !== "number" ||
      typeof item.quantity !== "number" ||
      item.quantity <= 0
    ) {
      throw new Error("Invalid cart item");
    }

    return total + item.price * item.quantity;
  }, 0);
}

function calculateCartSummary(items, taxRate = 0.13) {
  const subtotal = calculateCartTotal(items);
  const tax = Number((subtotal * taxRate).toFixed(2));
  const total = Number((subtotal + tax).toFixed(2));

  return {
    subtotal,
    tax,
    total,
  };
}

module.exports = {
  calculateCartTotal,
  calculateCartSummary,
};