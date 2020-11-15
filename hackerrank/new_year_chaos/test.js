const minimumBribes = require("./index");

test("2 1 5 3 4", () => {
  const q = [2, 1, 5, 3, 4];
  expect(minimumBribes(q)).toEqual(3);
});

test("2 5 1 3 4", () => {
  const q = [2, 5, 1, 3, 4];
  expect(minimumBribes(q)).toEqual("Too chaotic");
});
