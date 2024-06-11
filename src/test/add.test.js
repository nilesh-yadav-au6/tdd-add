const add = require("../add.js");

describe("Addition tests", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return the number itself for single number", () => {
    expect(add("4")).toBe(4);
    expect(add("1")).toBe(1);
  });

  test("should return the sum numbers", () => {
    expect(add("15,15")).toBe(30);
  });

  test("should resolve new lines between numbers", () => {
    expect(add("3\n2,3")).toBe(8);
  });

  test("should support different types of delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("should throw an exception for -ve numbers", () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers are not allowed: -2");
  });
});
