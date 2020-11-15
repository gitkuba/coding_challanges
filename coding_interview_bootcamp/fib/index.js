// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n, cache = {}){
//   if (n < 2) return n
//
//   if (cache.hasOwnProperty(n)){
//     return cache[n]
//   } else {
//     let result = fib(n - 1, cache) + fib(n - 2, cache)
//     cache[n] = result
//     if (Object.keys(cache).length > 2) delete cache[n-3]
//     return result
//   }
// }

function fib (n) {
  if (n < 2) return n
  series = [0,1]
  for (i=2; i<=n; i++){
    series.push(series[i-1]+series[i-2])
  }
  return series.slice(-1).pop()
}

// console.log(fib(39))


module.exports = fib;
