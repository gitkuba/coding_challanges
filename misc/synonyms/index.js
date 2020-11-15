const fs = require('fs');

class Dictionary {
  constructor(){
    this.data = {}
  }

  has(word) {
    return this.data.hasOwnProperty(word)
  }

  addToDictionary(dictionary_pair) {
    const word1 = dictionary_pair[0].toLowerCase()
    const word2 = dictionary_pair[1].toLowerCase()

    if (this.has(word1) && !this.has(word2)) {
      this.data[word1].add(word2)
      this.data[word2] = this.data[word1]
    }
    else if (!this.has(word1) && this.has(word2)) {
      this.data[word2].add(word1)
      this.data[word1] = this.data[word2]
    }
    else if (!this.has(word1) && !this.has(word2)) {
      const newGroup = new Set([word1, word2])
      this.data[word1] = newGroup
      this.data[word2] = newGroup
    }
  }

  checkSynonyms(test_pair){
    const word1 = test_pair[0].toLowerCase()
    const word2 = test_pair[1].toLowerCase()
    if (word1 === word2) return 'synonyms'
    if (this.has(word1) && this.data[word1].has(word2)){
      return 'synonyms'
    } else {
      return 'different'
    }
  }

}

let output = []
const input = fs.readFileSync('example_big.in', 'utf8')
const lines = input.split("\n")
const num_cases = lines.shift()

for (let i=0; i<num_cases; i++){
  let dictionary = new Dictionary()
  const dictionary_pairs_num = lines.shift()
  for (let j=0; j<dictionary_pairs_num; j++){
    dictionary_pair = lines.shift().split(' ')
    dictionary.addToDictionary(dictionary_pair)
  }

  const test_pairs_num = lines.shift()
  for (let j=0; j<test_pairs_num; j++){
    let test_pair = lines.shift().split(' ')
    output.push(dictionary.checkSynonyms(test_pair))
  }
}

console.log(output)

fs.writeFileSync('example_big.out', output.join('\n') + '\n')
