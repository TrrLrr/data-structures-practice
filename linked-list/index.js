'use strict';




module.exports = class {
  constructor(){
    this.head = null;
  }

  prepend(val) {
    let node = new ListNode(val);

    if(!this.head) {
      this.head = node;
      return this;
    }

    node.next = this.head;
    this.head = node;
    return this;
  }

  append(val) {
    let node = new ListNode(val);
    let last = null;

    if(!this.head) {
      this.head = node;
      return this;
    }

    _appendNode(this.head);
    last.next = node;
    return this;

    function _appendNode(node) {
      if(!node) return;
      last = node;
      _appendNode(node.next);
    }
  }

  find(val) {
    if(!this.head) {
      return 'Empty List';
    }

    let current = this.head;
    
    while(current.next !== null) {
      if(current.val === val) {
        return current;
      }
      current = current.next;
    }
    return 'Value not found';
  }
}


    



  
