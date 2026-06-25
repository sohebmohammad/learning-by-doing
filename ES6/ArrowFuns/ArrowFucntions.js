//Simple arrow function
const fun1 = () => {
    console.log("This is my first arrow function!")
}

// call the fun
fun1();

const greet = name => {
    console.log("In case of single argument we can ignore the paranthesis");
    return "greeted"
}

const value = greet();

//Here if we have a one line of code to excecute then we need not to mention the return explicitly and brackets in arrow funs
const add = (a, b) => a+b ;

console.log(add(1,220))

// TODO: define the function divideByTwo here
const divideByTwo = num => num/2;
console.log(divideByTwo(4));
console.log(divideByTwo(8));
console.log(divideByTwo(12));
console.log(divideByTwo(6));
