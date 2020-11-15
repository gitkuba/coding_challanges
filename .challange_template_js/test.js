const challange = require("./index");

test("challange returns correct answer", () => {
  expect(challange(1)).toEqual(3);
});
