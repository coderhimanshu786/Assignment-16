//Complexity--
//Time complexity: O(n - k)
//Auxiliary space: O(n)

class Queue {
  constructor() {
    this.items = [];
  }

  // add element to the queue
  push(element) {
    return this.items.push(element);
  }

  // remove element from the queue
  pop() {
    if (this.items.length > 0) {
      return this.items.shift();
    }
  }

  // view the first element
  front() {
    return this.items[0];
  }

  // check if the queue is empty
  isEmpty() {
    return this.items.length == 0;
  }

  // the size of the queue
  size() {
    return this.items.length;
  }
}

// Function to reverse first k elements of a queue
function reverseFirstK(queue, k) {
  solve(queue, k);
  let s = queue.size() - k;
  while (s-- > 0) {
    let x = queue.front();
    queue.pop();
    queue.push(x);
  }
  return queue;
}

function solve(queue, k) {
  if (k == 0) return;
  let e = queue.front();
  queue.pop();
  solve(queue, k - 1);
  queue.push(e);
}

//Let us assume-

let queue = new Queue();
queue.push(15);
queue.push(40);
queue.push(30);
queue.push(95);
queue.push(50);
queue.push(60);
queue.push(70);
queue.push(80);
queue.push(90);
queue.push(100);

let k = 5;
q = reverseFirstK(queue, k);
// Printing queue
while (!q.isEmpty()) {
  console.log(q.front());
  q.pop();
}
