"use strict";
//
// https://www.hackerrank.com/challenges/minimum-swaps-2/problem
//

// Cycle solution
function challange(a) {
  let swaps = 0;
  let k = {};
  let v = {};
  let visited = {};
  for (let i = 0; i < a.length; i++) {
    k[a[i]] = i;
    v[i] = a[i];
  }
  a.sort((y, z) => y - z);
  for (let i = 0; i < a.length; i++) {
    if (visited[i] || v[i] === a[i]) continue;

    let cycleSize = 0;
    let j = i;

    while (!visited[j]) {
      visited[j] = true;
      j = k[a[j]];
      cycleSize++;
    }

    swaps += cycleSize - 1;
  }
  return swaps;
}

// Selection sort n^2 solution.

// function swap(arr, i, j) {
//   let tmp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = tmp;
//   return arr;
// }
//
// function challange(a) {
//   let swaps = 0;
//   for (let i = 0; i < a.length; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < a.length; j++) {
//       if (a[minIndex] > a[j]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       a = swap(a, minIndex, i);
//       swaps++;
//     }
//   }
//   return swaps;
// }

module.exports = challange;
