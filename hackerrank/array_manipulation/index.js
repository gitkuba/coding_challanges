"use strict";
//
// https://www.hackerrank.com/challenges/crush/problem
//

function arrayManipulation(n, queries) {
  let max = 0;
  for (let i = 1; i <= n; i++) {
    let applicable = queries.filter((q) => q[0] <= i && q[1] >= i);
    if (!applicable.length) continue;
    let sum = 0;
    for (let item of applicable) {
      sum += item[2];
    }
    if (sum > max) max = sum;
  }

  return max;
}

// iterative solution (n+m*n)
// function arrayManipulation(n, queries) {
//   let array = [];
//   for (let i = 0; i < n; i++) {
//     array.push(0);
//   }
//   for (let query of queries) {
//     for (let j = query[0]; j <= query[1]; j++) {
//       array[j] += query[2];
//     }
//   }
//   let max = 0;
//   for (let item of array) {
//     if (item > max) max = item;
//   }
//   return max;
// }

module.exports = arrayManipulation;
