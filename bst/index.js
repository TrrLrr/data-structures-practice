'use strict';

class TreeNode {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor(root=null) {
    this.root = root;
  }

  insert(nodeToInsert) {
    if (this.root === null) {
      this.root = nodeToInsert;
    } else {
      this._insert(this.root, nodeToInsert);
    }
  }

  _insert(root, nodeToInsert) {
    if (nodeToInsert.value < root.value) {
      if (!root.left) {
        root.left = nodeToInsert;
      } else {
        this._insert(root.left, nodeToInsert);
      }
    } else {
      if (!root.right) {
        root.right = nodeToInsert;
      } else {
        this._insert(root.right, nodeToInsert);
      }
    }
  }

  find(val) {
    if(node.value === val) {
      return node;
    }
    return 'value not found';
  }


  findMin() {
    let res = this.root.value;
    this.breadthFirst(_findMin);
    function _findMin(current) {
      if(current.value < res) {
        res = current.value;
      }
    }
    return res;
  }
    
  findMax() {
    let res = this.root.value;
    this.breadthFirst(_findMax);
    function _findMax(current) {
      if(current.value > res) {
        res = current.value;
      }
    }
    return res;
  }  
  
  findNearest(val) {
    let res = this.root.value;
    let lowDiff = Math.abs(val - this.root.value);
    let curDiff;
    this.breadthFirst(_findNearest);
    function _findNearest(current) {
      curDiff = Math.abs(val - current.value);
      if(curDiff < lowDiff) {
        lowDiff = curDiff;
        res = current.value;
      }
    }
    return res;
  }

  preOrder(callback) {
    _traverse(this.root);
    function _traverse(node) {
      if(!node) return;
      callback(node);
      _traverse(node.left);
      _traverse(node.right);
    }
  }

  inOrder(callback) {
    _traverse(this.root);
    function _traverse(node) {
      if(!node) return;
      _traverse(node.left);
      callback(node);
      _traverse(node.right);
    }
  }

  postOrder(callback) {
    _traverse(this.root);
    function _traverse(node) {
      if(!node) return;
      _traverse(node.left);
      _traverse(node.right);
      callback(node);
    }
  }

  breadthFirst(callback) {
    let q = [this.root];
    let current;
    while(q.length > 0) {
      current = q.pop(); 
      callback(current);
      if (current.left) q.unshift(current.left);
      if (current.right) q.unshift(current.right); 
    }
  }
  

}

let tree = new BST();

tree.insert(new TreeNode(4));
tree.insert(new TreeNode(9));
tree.insert(new TreeNode(2));
tree.insert(new TreeNode(12));
tree.insert(new TreeNode(7));
tree.insert(new TreeNode(10));

console.log('final result', tree.findNearest(5));