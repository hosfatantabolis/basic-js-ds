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

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
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