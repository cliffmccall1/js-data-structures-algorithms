// Stacks

/* functions: 
    push() placing data on a stack
    pop() removing from the top of the stack
    peek() displaying the top element of a stack
    length() determining how many elements are on a stack
*/

var letters = []; // this is the stack

var word = 'racecar'; // replace word to test if it is palindrome

var rword = '';

// put the letters of the word into stack
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(word + ' is a palindrome');
} else {
  console.log(word + ' is not a palindrome');
}

// Creates a stack
var Stack = function() {
  this.count = 0; // keep count of how many items in the stack
  this.storage = {}; // an empty object

  // Adds a value to the end of the stack
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  };
  // removes and return the value at the end of the stack
  this.pop = function() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function() {
    return this.count;
  };
  // Returns this value at the end of the stack
  this.peek = function() {
    return this.storage[this.count - 1];
  };
};

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push('freeCodeCamp');
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
