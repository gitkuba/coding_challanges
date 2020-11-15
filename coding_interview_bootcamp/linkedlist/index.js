// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList{
  constructor() {
    this.head = null
  }

  insertFirst(data){
    this.head = new Node(data, this.head)
  }

  size() {
    let i = 0
    let current = this.head
    while(current){
      current = current.next
      i++
    }
    return i
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let current = this.head
    while(current.next){
      current = current.next
    }
    return current
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    if (!this.head) return
    this.head = this.head.next
  }

  removeLast() {
    if (!this.head) return

    if (!this.head.next){
      this.head = null
      return
    }

    let current = this.head.next
    let previous = this.head

    while(current.next){
      previous = current
      current = current.next
    }

    previous.next = null
  }

  insertLast(x) {
    if (!this.head) return this.insertFirst(x)
    this.getLast().next = new Node(x)
  }

  getAt(n) {
    let i = 0;
    let current = this.head
    while (current){
      if (i===n) return current
      current = current.next
      i++
    }
    return null
  }

  removeAt(n) {
    if (!this.head) return
    if (n===0) return this.removeFirst()

    let i = 1
    let previous = this.head
    let current = this.head.next
    while(current){
      if (i===n){
        previous.next = current.next
        return
      }
      previous = current
      current = current.next
      i++
    }
  }

  insertAt(x,n){
    if(!this.head || n===0) this.insertFirst(x)
    if(n>this.size()) this.insertLast(x)

    let i = 1
    let current = this.head
    while(current){
      if (i===n){
        current.next = new Node(x, current.next)
        return
      }
      current = current.next
      i++
    }


  }

  forEach(fn) {
    let current = this.head
    while(current){
      fn(current)
      current = current.next
    }
  }

  *[Symbol.iterator]() {
    let current = this.head
    while(current){
      yield current
      current = current.next
    }
  }
}

module.exports = { Node, LinkedList };
