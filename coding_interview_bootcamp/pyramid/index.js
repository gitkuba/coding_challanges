// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, m=1) {
  if (m>n) return;
  p = m*2-1
  s = Math.floor((n*2-1-p)/2)
  console.log(' '.repeat(s) + '#'.repeat(p) + ' '.repeat(s))
  pyramid(n, ++m)
}

pyramid(3)

module.exports = pyramid;

// for (let m=1; m<=n; m++){
//   p = m*2-1
//   s = Math.floor((n*2-1-p)/2)
//   console.log(' '.repeat(s) + '#'.repeat(p) + ' '.repeat(s))
// }
