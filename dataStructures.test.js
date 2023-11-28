const { Stack, Queue, LinkedList } = require('./dataStructures');

// Stack tests

test('Push elements to stack', () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  expect(stack.toArray()).toEqual([1, 2, 3]);
});

test('Pop elements from stack', () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  expect(stack.pop()).toBe(3);
  expect(stack.pop()).toBe(2);
  expect(stack.pop()).toBe(1);
});

// Queue tests

// Linked List tests

test('Insert elements to linked list', () => {
  const linkedList = new LinkedList();
  linkedList.insert(1);
  linkedList.insert(2);
  linkedList.insert(3);
  expect(linkedList.print()).toBe('3 -> 2 -> 1');
});