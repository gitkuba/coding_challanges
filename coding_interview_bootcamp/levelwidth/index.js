// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let levels = [1];
  let arr = [root];
  let i = 1;
  while (arr.length) {
    let node = arr.shift();
    arr.push(...node.children);
    if (--i === 0 && arr.length) {
      levels.push(arr.length);
      i = arr.length;
    }
  }
  return levels;
}

module.exports = levelWidth;
