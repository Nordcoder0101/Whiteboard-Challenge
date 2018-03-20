'use strict';




class Node {
  constructor(val) {
    this.val = val,
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null,
    this.size = 0;
  }

  push(val) {
    let node = new Node(val);
    node.next = this.top;
    this.top = node;
    this.size++;
    return this.top;
  }

  peek() {
    return this.top;
  }

  pop() {
    let temp = this.top;
    this.top = this.next;
    temp.next = null;
    this.size --;
    return temp;
  }

  getMin() {
    let current = this.top;
    this.min = current.val;
    while(current.next !== null) {
      if(current.val < this.min) {
        this.min = current.val;
      }
      current = current.next;
    }
    return this.min;
  }
}

module.exports = { Node, Stack };