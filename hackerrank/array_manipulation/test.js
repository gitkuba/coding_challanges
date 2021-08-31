const arrayManipulation = require("./index");

// test("test case 1", () => {
//   expect(
//     arrayManipulation(5, [
//       [1, 2, 100],
//       [2, 5, 100],
//       [3, 4, 100],
//     ])
//   ).toEqual(200);
// });

test("test case 2", () => {
  expect(
    arrayManipulation(10, [
      [2, 6, 8],
      [3, 5, 7],
      [1, 8, 1],
      [5, 9, 15],
    ])
  ).toEqual(31);
});
