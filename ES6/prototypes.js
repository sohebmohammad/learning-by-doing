// Prototypes and Prototypal Inheritance in JavaScript 
// Whenever we create anything (like an object or function) in JavaScript, the JS Engine automatically attaches that thing with some properties and methods.

// All this comes via prototypes.

// __proto__ is the object where JS is putting it all.

// Let's see some examples. Fire up your consoles!

let arr = ['Rajat', 'Raj']
console.log(arr.__proto__.forEach)
console.log(arr.__proto__) // same as Array.prototype
console.log(arr.__proto__.__proto__) // same as Object.prototype
console.log(arr.__proto__.__proto__.__proto__) // null


// All this is called a prototype chain.

// We can do the same with objects and functions as well.

// We will always find Object.prototype behind the scenes. That's why you may have heard that everything in JS is an object. 

// What is Prototypal Inheritance in JavaScript?
let object = {
  name: 'Rajat',
  city: 'Delhi',
  getIntro: function () {
    console.log(`${this.name}, ${this.city}`)
  },
}

let object2 = {
  name: 'Aditya',
}
// Note: Don't modify prototypes this way. It's just for understanding. Here's the right way to do it.

object2.__proto__ = object
// By doing this, object2 gets access to the object's properties. So, now we can do:

console.log(object2.city)
// This is prototypal inheritance.