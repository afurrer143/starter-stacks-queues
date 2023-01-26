// Creates a node containing the data and a reference to the next item
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    // first will be the first, but also contains all the links to the other nodes
    // EX:Node { value: '1 John', next: Node { value: '2 Sarah', next: null } }
    this.first = null;
    //   last node will be the last node. It will always have a next of null
    // EX :Node { value: '2 Sarah', next: null }
    this.last = null;
  }

  enqueue(value) {
    const newNode = new Node(value);

    // if first node is truthy, go to last node, and update their pointer to the new node
    if (this.first) {
      this.last.next = newNode;
    } else {
      // Set the node of the queue's next pointer to be the new node
      this.first = newNode;
    }

    // Make the new node the last item on the queue
    this.last = newNode;
  }

//   i just spelling enqueue, so push is just enque whatever
  push(value) {
    this.enqueue(value)
  } 

  dequeue() {
    if (this.first) {
      const dequeued = this.first;

      // Update first pointer to point to the next node of the dequeued node
      this.first = dequeued.next;

      // If the dequeued node is the last node in the queue,
      // update the last pointer to point to `null`
      if (dequeued === this.last) {
        this.last = null;
      }

      return dequeued.value;
    }
	}

//   hate spelling dequeue, so pop is just deququeaf whatever
  pop(){
    return this.dequeue()
  }
}

const queue = new Queue();

queue.push("1 John");
queue.push("2 Sarah");
queue.push("3 Rob")
queue.push("4 Rambo")

console.log(queue);

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())

console.log(queue);
