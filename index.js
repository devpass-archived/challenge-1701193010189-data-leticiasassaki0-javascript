// Example usage
const { Stack, Queue, LinkedList } = require('./dataStructures');

// Create a new stack
const stack = new Stack();

// Push elements to stack
stack.push(1);
stack.push(2);
stack.push(3);

// Pop elements from stack
console.log('Popped:', stack.pop());
console.log('Popped:', stack.pop());

// Create a new queue
const queue = new Queue();

// Enqueue elements to queue
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

// Dequeue elements from queue
console.log('Dequeued:', queue.dequeue());
console.log('Dequeued:', queue.dequeue());

// Create a new linked list
const linkedList = new LinkedList();

// Insert elements to linked list
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);

// Print linked list
console.log('Linked List:', linkedList.print());