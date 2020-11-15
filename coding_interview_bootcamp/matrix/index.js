// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

class Matrix {
  constructor(matrix_size) {
    this.direction = 0;
    this.size = matrix_size
    this.x = 0
    this. y = 0

    this.matrix = []
    for (let i=0; i<this.size; i++){
      this.matrix.push([])
    }
  }

  turn() {
    if (this.direction === 3) {
      this.direction = 0
    } else {
      this.direction++
    }
  }

  aboutToHit(){
    if (this.direction === 0){
      if (
        this.x === this.size - 1
        || this.matrix[this.y][this.x+1]
      ) return true
    }
    if (this.direction === 1){
      if (
        this.y === this.size - 1
        || this.matrix[this.y+1][this.x]
      ) return true
    }
    if (this.direction === 2){
      if (
        this.x === 0
        || this.matrix[this.y][this.x-1]
      ) return true
    }
    if (this.direction === 3){
      if (
        this.y === 0
        || this.matrix[this.y-1][this.x]
      ) return true
    }
    return false
  }

  move(){
    if (this.direction === 0) this.x++
    if (this.direction === 1) this.y++
    if (this.direction === 2) this.x--
    if (this.direction === 3) this.y--
  }

  fill(){
    let sign = ""
    for (let i=1; i<=this.size*this.size; i++){
      if (this.direction === 0) sign = "→"
      if (this.direction === 1) sign = "↓"
      if (this.direction === 2) sign = "←"
      if (this.direction === 3) sign = "↑"
      this.matrix[this.y][this.x] = sign
      if (this.aboutToHit()) this.turn()
      this.move()
    }
    return this.matrix
  }
}

function matrix(n) {
  return new Matrix(n).fill()
}

function render() {
  console.log('\[\033[0;31m\]' + matrix(30).map(r=>r.join(' ')).join('\n'))
  console.log('\033[31A')
}

FPS = 1
setInterval(render, 1000 / FPS);


module.exports = matrix;
