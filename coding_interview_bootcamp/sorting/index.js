// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[indexOfMin] > arr[j]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      const tmp = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = tmp;
    }
  }

  return arr;
}

function mergeSort(arr) {
  let a = arr.slice(0, arr.length / 2);
  let b = arr.slice(arr.length / 2, arr.length);
  if (a.length < 2 && b.length < 2) {
    return merge(a, b);
  } else {
    return merge(mergeSort(a), mergeSort(b));
  }
}

function merge(left, right) {
  let results = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
