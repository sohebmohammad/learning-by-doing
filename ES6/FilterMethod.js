// The Array.filter Method
// The Array.filter method has the following syntax:

// Array.filter(callback(element[, index[, array]])[, thisArg])
// The filter method returns a new array with all the elements that satisfy the provided test condition.

// The filter method takes a callback function as the first argument and executes the callback function for every element of the array. Each array element value is passed as the first parameter to the callback function.

const employees = [
  { name: 'David Carlson', age: 30 },
  { name: 'John Cena', age: 34 },
  { name: 'Mike Sheridan', age: 25 },
  { name: 'John Carte', age: 50 }
];

const filteredEmployees = employees.filter((emp)=>{
    return emp.name.indexOf("John")>-1;
})
console.log(filteredEmployees)//[ { name: 'John Cena', age: 34 }, { name: 'John Carte', age: 50 } ]

// As can be seen in the above code, using filter helps to find all the elements from the array that match the specified test condition.

// So using filter does not stop when it finds a particular match but keeps checking for other elements in the array that match the condition. Then it returns all the matching elements from the array.

// The main difference between find and filter is that find only returns the first matching element of the array, but using filter returns all the matching elements from the array.

// Note that the filter method always returns an array. If no element passes the test condition, an empty array will be returned.

// Advantages of using the filter method
// It allows us to quickly find all the matching elements from the array
// It always returns an array even if there is no match, so it avoids writing extra if conditions
// It avoids the need of creating an extra variable to store the filtered elements