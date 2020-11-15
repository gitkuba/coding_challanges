const challange = require("./index");

test("[7, 1, 3, 2, 4, 5, 6]", () => {
  expect(challange([7, 1, 3, 2, 4, 5, 6])).toEqual(5);
});

test("[4 3 1 2]", () => {
  expect(challange([4, 3, 1, 2])).toEqual(3);
});

test("50", () => {
  expect(
    challange(
      "2 31 1 38 29 5 44 6 12 18 39 9 48 49 13 11 7 27 14 33 50 21 46 23 15 26 8 47 40 3 32 22 34 42 16 41 24 10 4 28 36 30 37 35 20 17 45 43 25 19".split(
        " "
      )
    )
  ).toEqual(46);
});
