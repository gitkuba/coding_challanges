// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let chars = {}
    for (let char of str){
        chars[char] = chars[char] + 1 || 1
    }

    return Object.entries(chars).sort((a,b) => a[1] - b[1]).pop()[0]
}


module.exports = maxChar;
