// The Array.findIndex Method
// The Array.findIndex method has the following syntax:

// Array.findIndex(callback(element[, index[, array]])[, thisArg])
// The findIndex method returns the index of the first element in the array that satisfies the provided test condition. Otherwise, it returns -1, indicating that no element passed the test.

const employees = [
  { name: 'David Carlson', age: 30 },
  { name: 'John Cena', age: 34 },
  { name: 'Mike Sheridan', age: 25 },
  { name: 'John Carte', age: 50 }
];

const index = employees.findIndex(function (employee) {
  return employee.name.indexOf('John') > -1;
});

console.log(index); // 1


// Here we get the output as 1 which is the index of the first object with the name John. Note that the index starts with zero.

// The equivalent for loop code for the above example looks like this:

// const employees = [
//   { name: 'David Carlson', age: 30 },
//   { name: 'John Cena', age: 34 },
//   { name: 'Mike Sheridan', age: 25 },
//   { name: 'John Carte', age: 50 }
// ];

// let index = -1;

// for(let i = 0; i < employees.length; i++) {
//   if(employees[i].name.indexOf('John') > -1) {
//     index = i;
//     break;
//   }
// }

// console.log(index); // 1
// Here's a Code Pen Demo.

// Advantages of using the findIndex method
// It allows us to quickly find the index of an element without writing a lot of code
// It stops looping as soon as it finds a match so there is no need for an extra break statement
// We can find the index using the array find method also, but using findIndex makes it easy and avoids creating extra variables to store the index