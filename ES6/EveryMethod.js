// The Array.every Method
// The Array.every method has the following syntax:

// Array.every(callback(element[, index[, array]])[, thisArg])
// The every method tests whether all elements in the array pass the provided test conditions and returns a boolean true or false value.

// Suppose we have an array of numbers and we want to check if every element of the array is a positive number. We can use the every method to achieve it.

let numbers = [10, 20, 30, -40];

let value = numbers.every((n)=>{
    return n>0;
})

console.log(value)//false

let numbers1 = [10, 20, 30, 40];

let value1 = numbers1.every((n)=>{
    return n>0;
})

console.log(value1)//true


// Here, inside the callback function of the every method, we’re checking if each field value is not empty and returning a boolean value.

// In the above code, the every method returns true if, for all the elements in the fields array, the callback function returns a true value.

// If the callback function returns a false value for any of the elements in the fields array, then the every method will return false as the result.

// Advantage of using the every method
// It allows us to quickly check if all the elements match certain criteria without writing a lot of code