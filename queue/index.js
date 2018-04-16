'use strict';

class Queue {
  constructor() {
    this.next = null;
    this.last = 0;
  }

  enqueue(val) {
    this[this.last] = val;
    if(!this.next) this.next = 0;
    this.last++;
  }

  dequeue(){
    if(!this.next) this.next = 0;
    delete this[this.next];
    this.next++;
  }
}