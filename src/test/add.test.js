const add = require("../add.js");

describe("Addition tests", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return the number itself for single number", () => {
    expect(add("4")).toBe(4);
    expect(add("1")).toBe(1);
  });
});
