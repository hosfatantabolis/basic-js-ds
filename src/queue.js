const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(){
    this.tail = null;
    this.head = null;
    this.size = 0;
  }
  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const node = new ListNode(value);
    if(this.size === 0){
      this.head = node;
      this.tail = node
    }else{
      this.tail.next = node;
      this.tail = node;
    }
    this.size ++;
  }

  dequeue() {
    if(this.size === 0){
      return 1;
    } else {
      let removedValue = this.head.value;
      this.head = this.head.next;
      this.size --;
      return removedValue;
    }
  }
}

module.exports = {
  Queue
};
