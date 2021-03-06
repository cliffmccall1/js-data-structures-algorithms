// // Stacks

// /* functions:
//     push() placing data on a stack
//     pop() removing from the top of the stack
//     peek() displaying the top element of a stack
//     length() determining how many elements are on a stack
// */

// var letters = []; // this is the stack

// var word = 'racecar'; // replace word to test if it is palindrome

// var rword = '';

// // put the letters of the word into stack
// for (var i = 0; i < word.length; i++) {
//   letters.push(word[i]);
// }

// // pop off the stack in reverse order
// for (var i = 0; i < word.length; i++) {
//   rword += letters.pop();
// }

// if (rword === word) {
//   console.log(word + ' is a palindrome');
// } else {
//   console.log(word + ' is not a palindrome');
// }

// // Creates a stack
// var Stack = function() {
//   this.count = 0; // keep count of how many items in the stack
//   this.storage = {}; // an empty object

//   // Adds a value to the end of the stack
//   this.push = function(value) {
//     this.storage[this.count] = value;
//     this.count++;
//   };
//   // removes and return the value at the end of the stack
//   this.pop = function() {
//     if (this.count === 0) {
//       return undefined;
//     }

//     this.count--;
//     var result = this.storage[this.count];
//     delete this.storage[this.count];
//     return result;
//   };

//   this.size = function() {
//     return this.count;
//   };
//   // Returns this value at the end of the stack
//   this.peek = function() {
//     return this.storage[this.count - 1];
//   };
// };

// var myStack = new Stack();

// myStack.push(1);
// myStack.push(2);
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());
// myStack.push('freeCodeCamp');
// console.log(myStack.size());
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());

//Sets

function mySet() {
  // the var collection will hold the set
  var collection = [];
  // this method will check for the presence of an element and return true or false
  this.has = function(element) {
    return collection.indexOf(element) !== -1;
  };
  // this method will return all the values in the set
  this.values = function() {
    return collection;
  };
  // the method will add an element to the set
  this.add = function(element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };
  // this metihd will remove an element from a set
  this.remove = function(element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };
  // this method will return the size of the collection
  this.size = function() {
    return collection.length;
  };
  // this method will return the  union of two sets
  this.union = function(otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function(e) {
      unionSet.add(e);
    });
    secondSet.forEach(function(e) {
      unionSet.add(e);
    });
    return unionSet;
  };
  // this method will return the intersection of two sets as a new set
  this.intersection = function(otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function(e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };
  // this method will return the difference of two sets as a new set
  this.difference = function(otherSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function(e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };
  // this method will test if the set is a subset of a different set
  this.subset = function(otherSet) {
    var firstSet = this.values();
    return firstSet.every(function(value) {
      return otherSet.has(value);
    });
  };
}

var setA = new mySet();
var setB = new mySet();
setA.add('a');
setB.add('b');
setB.add('c');
setB.add('a');
setB.add('d');
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

var setC = new mySet();
var setD = new mySet();
setC.add('a');
setD.add('b');
setD.add('c');
setD.add('a');
setD.add('d');
console.log(setD.values());
setD.remove('a');
console.log(setD.has('a'));
console.log(setD.has('a'));
console.log(setD.add('d'));
