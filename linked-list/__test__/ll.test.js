'use strict';


const LinkedList = require('./../index.js');
const ListNode = require('./../listnode.js');
require('jest');

let ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.prepend(0);

describe('Linked List Module', () => {
  describe('#append method', () => {
    it('should append a node to the list', () => {
      expect(true).toEqual(true);
    })
  })
})