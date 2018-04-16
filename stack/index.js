'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor(maxSize = 500) {
    this.top = null;
    this.size = 0;
    this.maxSize = maxSize;
  }

  push(val) {
    if(this.size === this.maxSize) throw new Error('Stack Overflow');

    let node = new Node(val);

    node.next = this.top;
    this.top = node;
    this.size++;
    //return this.top;
  }
  
  pop() {
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.size--;

    //return temp;
  }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();

console.log(JSON.stringify(stack, null, 2));