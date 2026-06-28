// The Array.some Method
// The Array.some method has the following syntax:

//  Array.some(callback(element[, index[, array]])[, thisArg]
// The some method tests whether at least one element in the array passes the test condition given by the provided function and returns a boolean true or false value.

// It returns true once it finds the first match and returns false if there is no match.

// Suppose we have an array of numbers and we want to check if the array contains at least one positive element. We can use the some method to achieve it.

let numbers = [-30, 40, 20, 50];

let containsPositive = numbers.some(function (number) {
  return number > 0;
});
console.log(containsPositive); // true 

numbers = [-10, -30, -20, -50];

containsPositive = numbers.every(function (number) {
  return number > 0;
});
console.log(containsPositive); // false

// There are some useful scenarios for using the some method.

// Some method example 1:
// Let's say we have a list of employees and we want to check if a particular employee is present in that array or not. We also want to get the index position of that employee if the employee is found.

// So instead of using the find and findIndex methods separately, we can use the some method to do both of these.

const employees = [
  { name: 'David Carlson', age: 30 },
  { name: 'John Cena', age: 34 },
  { name: 'Mike Sheridon', age: 25 },
  { name: 'John Carte', age: 50 }
];

let indexValue = -1;
const employee = employees.some(function (employee, index) {
  const isFound = employee.name.indexOf('John') > -1;
  if (isFound) {
    indexValue = index;
  }
  return isFound;
});

console.log(employee, indexValue); // true 1


// Some method example 2:
// The array forEach, map, and filter methods run from start to finish until all of the elements of the array are processed. There is no way of stopping of breaking out of the loop, once a particular element is found.

// In such cases, we can use the array some method. The map, forEach and some method takes the same parameters in the callback function:

// The first parameter is the actual value
// The second parameter is the index
// The third parameter is the original array
// The some method stops looping through the array once it finds a particular match as can be seen in the above example 1.

// Advantages of using the some method
// It allows us to quickly check if some of the elements match certain criteria without writing a lot of code
// It allows us to quickly break out of the loop, which was not possible with other looping methods seen above