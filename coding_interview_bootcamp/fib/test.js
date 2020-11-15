const fib = require('./index');

test('Fib function is defined', () => {
  expect(typeof fib).toEqual('function');
});

test('calculates correct fib value for 1', () => {
  expect(fib(1)).toEqual(1);
});

test('calculates correct fib value for 2', () => {
  expect(fib(2)).toEqual(1);
});

test('calculates correct fib value for 3', () => {
  expect(fib(3)).toEqual(2);
});

test('calculates correct fib value for 4', () => {
  expect(fib(4)).toEqual(3);
});

test('calculates correct fib value for 15', () => {
  expect(fib(15)).toEqual(610);
});

test('calculates correct fib value for 50', () => {
  expect(fib(50)).toEqual(12586269025);
});

test('calculates correct fib value for 500', () => {
  expect(fib(500)).toEqual(1.394232245616977e+104);
});

test('calculates correct fib value for 1000', () => {
  expect(fib(1000)).toEqual(4.346655768693743e+208);
});
