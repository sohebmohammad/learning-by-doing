// The Array.reduce Method
// The Array.reduce method has the following syntax:

// Array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
// The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// Note that the output of the reduce method is always a single value. It can be an object, a number, a string, an array, and so on. It depends on what you want the output of reduce method to generate but it's always a single value.

// Suppose that you want to find the sum of all the numbers in the array. You can use the reduce method for that.

let numbers = [1, 2, 3, 5, 10];

let sum = numbers.reduce((accumulator, number)=>{
    return accumulator+number;
})
console.log(sum)//21

// The reduce method accepts a callback function that receives accumulator, number, index and array as the values. In the above code, we’re using only accumulator and number.

// The accumulator will contain the initialValue to be used for the array. The initialValue decides the return type of the data returned by the reduce method.

// The number is the second parameter to the callback function that will contain the array element during each iteration of the loop.

// In the above code, we have provided 0 as the initialValue for the accumulator. So the first time the callback function executes, the accumulator + number will be 0 + 1 = 1 and we're returning back the value 1.

// The next time the callback function runs, accumulator + number will be 1 + 2 = 3 (1 here is the previous value returned in the last iteration and 2 is the next element from the array).

// Then, the next time the callback function runs, accumulator + number will be
// 3 + 3 = 6(the first 3 here is the previous value returned in the last iteration and the next 3 is the next element from the array) and it will continue this way until all the elements in the numbers array are not iterated.

// So the accumulator will retain the value of the last operation just like a static variable.

// In the above code, initialValue of 0 is not required because all the elements of the array are integers.

// So the below code will also work:


const doublesSum = numbers.reduce(function (accumulator, number) {
  return accumulator + number * 2;
}, 10);

console.log(doublesSum); // 52


// Advantages of using the reduce method
// Using reduce allows us to generate any type of simple or complex data based on the array
// It remembers the previously returns data from the loop so helps us avoid creating a global variable to store the previous value