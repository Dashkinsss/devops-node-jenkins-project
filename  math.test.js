const { sum, multiply } = require("./math");

test("adds 2 + 3 to equal 5", () => {
  expect(sum(2, 3)).toBe(5);
});

test("multiplies 2 * 3 to equal 6", () => {
  expect(multiply(2, 3)).toBe(6);
});
