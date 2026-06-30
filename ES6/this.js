// What is this in JavaScript?
// Now, working with objects is different in JS than in other popular programming languages like C++. And to understand that properly, we need a good grasp of the this keyword.

// Let's try to understand it step-by-step.

// In a program, at times, we need a way to point at stuff. Like saying this function right here belongs to this object. this helps us get this context.

// You will understand what I am saying better when we look at some examples.

// For now, think of this as something which provides context. And remember this important thing: its value depends on how and where it is called.

// I know, I know. A lot of this . Let's go over all this slowly.

// Start a new program and just log this.
console.log(this) //It will point to the window object.

// Now, let's take an example with an object:

function myFunc() {
    console.log(this)     
  }

const obj = {
  bool: true,
  myFunc: myFunc,
}

obj.myFunc()

// Now, this will point to the object. So what's happening here?

// In the first example, we had nothing left of the . so it defaulted to the window object. But in this example, we have the object obj.

// If you do:


// myFunc() // window
// We again get the window object. So, we can see that the value of this depends on how and where are we doing the calling.

// What we just did above is called Implicit Binding. The value of this got bound to the object.

// There is another way to use this. Explicit binding is when you force a function to use a certain object as its this.


// Let's understand why we need explicit binding through an example.


const student_1 =  {
    name: 'Randall',
    displayName_1: function displayName() {
        console.log(this.name)
    }
}
const student_2 =  {
    name: 'Raj',
    displayName_2: function displayName() {
        console.log(this.name)
    }
}

student_1.displayName_1()
student_2.displayName_2()
// We are using this properly, but can you see the problem with the above code?

// We are repeating code. And one of the principles of good programming is keep your code DRY! (Don't Repeat Yourself)

// So, let's get rid of displayName_2 and simply do:


student_1.displayName_1.call(student_2) // Raj
// call forced displayName_1 to use the second object as its this.

// There are a lot of other ways we can do this.


// Try to solve the given problem yourself.

// const myData = {
//   name: 'Rajat',
//   city: 'Delhi',
//   displayStay: function () {
//     console.log(this.name, 'stays in', this.city)
//   },
// }
// myData.displayStay()

// // create an object yourData and try to use displayStay
// const yourData = {
//  name: 'name',
//  city: 'city'
// }


// // answer
// myData.displayStay.call(yourData)
// Finally, remember that I said that there are differences between arrow and regular functions.

// The case of this is one of them.

// For an arrow function, the value depends on the lexical scope – that is to say, the outer function where the arrow function is declared.

// So, if we make the displayName() from above an arrow function, nothing will work.

// Arrow functions basically inherit the parent's context which in the above case is the window.