const add = require("../add.js");

describe("Addition tests", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });
});
