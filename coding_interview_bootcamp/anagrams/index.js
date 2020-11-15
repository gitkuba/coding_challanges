// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const clean = (word) => word.replace(/[^\w]/g, "").toLowerCase()
const map = (word) => {
  let obj = {}
  for (let char of word){
    obj[char] = obj[char] +1 || 1
  }
  return obj
}

function anagrams(stringA, stringB) {
    let mapA = map(clean(stringA))
    let mapB = map(clean(stringB))
		if (Object.keys(mapA).length !== Object.keys(mapB).length) return false
  	for (let char in mapA){
  		if (!mapB.hasOwnProperty(char) || mapA[char] !== mapB[char]) return false
    }
	  return true
}

module.exports = anagrams;
