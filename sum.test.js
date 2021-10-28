const { sum, length } = require("./functions");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("length", () => {
  expect(length([1, 2, 3, 4, 5])).toBe(5);
  expect(length).toBeDefined();
});
