// Hoisting in JavaScript 
// This is JavaScript's default behavior of moving declarations to the top of the program.

// var declaration is hoisted up and initialized with undefined.
// let and const declarations are hoisted up but not initialized.
// function definitions are also hoisted up and stored as they are.

//Let's look at an example:

function consoleNum() {
  console.log(num)
  var num = 10
}

consoleNum() // undefined

// Why no error?

// This is how runtime sees this
{
  var num
  console.log(num)
  num = 9
}

{
//    let num
//   console.log(num)
//   let num = 9
}

// If instead of var -> let, it will give an error as let values are not initialized
