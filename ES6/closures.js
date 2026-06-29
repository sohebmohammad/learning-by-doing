//A function bundled together with its lexical environment forms a closure.

// Okay, what is a lexical environment?

// It is essentially the surrounding state – the local memory along with the lexical environment of its parent.

// Whaaat? I know it's a bit of a doozy. Let's understand it with a simple example.

let fun1 = (x) =>{
    return (y)=>{
        console.log(x+y);
    }
}

let fun2 = fun1(5);
fun2(3);



function x() {
  var a = 7
  function y() {
    console.log(a)
  }
  return y
}

var z = x()
console.log(z) // [Function: y]
z()
// When x is invoked, y is returned. Now, y is waiting to be executed. Kind of like a loaded gun waiting to be shot! 🔫

// So, when we finally invoke z, y is invoked. Now, y has to log a so it first tries to find 🔍 it in the local memory but it's not there. It goes to its parent function. It finds a there.



// Advantages of Closures in JavaScript 😎
// Currying


let add = function (x){
    return function (y){
        return x+y;
    }
}

let adding = add(2);
console.log(adding(3));//5

// Data Hiding/Encapsulation
// Suppose you want to create a counter application. Every time you call it, the count increases by 1. But you don't want to expose the variable outside the function. How to do it?

function counter(){
    let count = 0;
    this.incrementValue = function (){
        count++;
        console.log(count);
    }
}
//console.log(count) // Error: count is not defined
let adder = new counter();
adder.incrementValue();//1
adder.incrementValue();//2