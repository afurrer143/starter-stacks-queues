// Creates a node containing the data and a reference to the next item
class Node {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }
  }
  
  class Stack {
    constructor() {
      this.top = null;
    //   i like having a size data field and just get the size there
      this.count = 0
    }

    push(value) {
        // Create a new node,
        // add data to the new node, and
        // have the pointer point to the top
        this.top = new Node(value, this.top);
        console.log(`element: ${this.top.value} added to position ${this.count}`)
        // increment size by one
        this.count++
        return this;
      }

      pop() {
        // if stack empty, return nothing and log an error
        if (this.count === 0) {
            console.log(`Error attempting to remove on empty stack`)
            return undefined
        }
        /* In order to remove the top of the stack, you have to point
            the pointer to the next item. That next item becomes the
            top of the stack. */
        const popped = this.top;
        this.top = popped.next;
        // decrements size by 1
        this.count--
        return popped.value;
    }

    // return the top element value if stack not empty
    peek() {
        if (this.isEmpty()) {
            console.log(`Error attempting to peek on empty stack`)
            return undefined
        }
        return this.top.value
    }

    // return true or false if stack is empty
    isEmpty() {
        return this.count == 0
    }

    // get size of the stack
    getSize() {
        console.log(`Stack is ${this.count} big`)
        return this.count
    }

    // print the elements in stack as a string
    print() {
        let str = ''

        let top = this.top
        for (let i = 0; i < this.count; i++) {
            str += `${top.value} `
            top = top.next
        }
        return str
    }
  }


const stack = new Stack

stack.pop()

console.log(stack.peek())

stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack.peek())

console.log(stack)

stack.pop()

console.log(stack)

stack.push(3)

stack.getSize()

console.log(stack.print())