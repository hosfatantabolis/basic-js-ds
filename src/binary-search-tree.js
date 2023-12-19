const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(value){
    this.roots = new Node(value);
  }
  root() {
    console.log('ROOT')
    if(!this.roots.data) return null;
    return this.roots;
  }

  add(data) {
    let n = new Node(data);
    const search = (node) => {
      if(node.data > n.data) {
        if(!node.left) node.left = n;
        else {
          search(node.left);
        }
      } else if(node.data <= n.data){
        if(!node.right) node.right = n;
        else {
          search(node.right);
        }
      }
    }
    if(!this.roots.data) this.roots = n
    else search(this.roots);
  }

  has(data) {
    let curr = this.roots;
    console.log(curr);
    while(curr){
      if(curr.data === data){
        return true;
      }
      else if(data > curr.data){
        curr = curr.right;
      } else {
        curr = curr.left;
      }
    }
    return false;
  }

  find(data) {
    let curr = this.roots;
    while(curr){
      if(!curr || !curr.data) return null;
      else if(curr.data === data) return curr;
      else if(curr.data < data) curr = curr.right;
      else if(curr.data >= data) curr = curr.left;
    }
    return null;
  }

  remove(data) {
    this.roots = removeNode(this.roots, data)
    function removeNode(node, value){
        if(!node) {
          return null;
        }

        if(value < node.data) {
          node.left = removeNode(node.left, value);
          return node;
        } else if(value > node.data) {
          node.right = removeNode(node.right, value);
          return node;
        } else {
          if(!node.left && !node.right) return null;
          if(!node.left){
            node = node.right;
            return node;
          }
          if(!node.right){
            node = node.left;
            return node;
          }

          let mfr = node.right;
          while(mfr.left){
            mfr = mfr.left;
          }
          node.data = mfr.data;
          node.right = removeNode(node.right, mfr.data);

          return node;
        }
    }
  }

  min() {
    let curr = this.roots;
    console.log(curr);
    while(curr.left){
      curr = curr.left;
    }
    return curr.data;
  }

  max() {
    let curr = this.roots;
    while(curr.right){
      curr = curr.right;
    }
    return curr.data;
  }
}

module.exports = {
  BinarySearchTree
};