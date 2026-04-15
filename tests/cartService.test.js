const {
  calculateCartTotal,
  calculateCartSummary,
} = require("../services/cartService");

describe("cartService", () => {
  test("calculates cart total correctly", () => {
    const items = [
      { price: 10, quantity: 2 },
      { price: 5, quantity: 3 },
    ];

    expect(calculateCartTotal(items)).toBe(35);
  });

  test("calculates cart summary with tax", () => {
    const items = [
      { price: 100, quantity: 1 },
      { price: 50, quantity: 2 },
    ];

    expect(calculateCartSummary(items)).toEqual({
      subtotal: 200,
      tax: 26,
      total: 226,
    });
  });

  test("throws error for invalid input", () => {
    expect(() => calculateCartTotal("wrong")).toThrow("Items must be an array");
  });
});
