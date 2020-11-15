//
//  https://www.hackerrank.com/challenges/new-year-chaos/problem
//
function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
  return arr;
}

function minimumBribes(q) {
  let done = false;
  let beribes = {};
  let i = 0;
  const qlen = q.length - 1;
  let changes = false;

  while (!done) {
    if (i !== qlen && q[i] > q[i + 1]) {
      beribes[q[i]] = beribes[q[i]] + 1 || 1;
      q = swap(q, i, i + 1);
      changes = true;
    }

    if (beribes[q[i]] > 2) {
      return "Too chaotic";
    }

    if (i === qlen && !changes) {
      done = true;
    } else if (i === qlen) {
      changes = false;
      i = 0;
    } else {
      i++;
    }
  }
  let beribesCount = Object.values(beribes);

  if (beribesCount.length === 0) {
    return 0;
  }
  return beribesCount.reduce((a, b) => a + b);
}

module.exports = minimumBribes;
