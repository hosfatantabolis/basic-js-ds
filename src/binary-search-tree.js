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

  has(/*data*/) {
    throw new NotImplementedError('Not implemented');
    let curr = this.root;
    while(curr){
      if(curr.value === data){
        return true;
      }
      if(data > curr.value){
        curr = curr.right;
      } else {
        curr = curr.left;
      }
    }
    return false;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/*data*/) {

    throw new NotImplementedError('Not implemented');
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