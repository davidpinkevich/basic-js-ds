const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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


class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {

	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	getUnderlyingList() {
		let allQ = this.head;
		return allQ;
	}

	enqueue(value) {
		let lastNode = new Node(value);
		if(this.head) {
			this.tail.next = lastNode;
			this.tail = lastNode;
		} else {
			this.head = lastNode;
			this.tail = lastNode;
		}
		this.length+=1;
	}

	dequeue() {
		let first = this.head;
		this.head = this.head.next;
		this.length-=1;
		return first.value;
	}
}

module.exports = {
  Queue
};
