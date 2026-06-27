// The Array.map Method
// The Array map method is the most useful and widely used array method among all other methods.

// The Array.map method has the following syntax:

// Array.map(function callback(currentValue[, index[, array]]) {
//     // Return element for new_array
// }[, thisArg])
// The map method executes a provided function once for every element in the array and it returns a new transformed array.

let months = ["Jan", "Feb", "March", "April"]

let capitalCase = months.map((m)=>{
    return m.toUpperCase();
})

console.log(capitalCase) //[ 'JAN', 'FEB', 'MARCH', 'APRIL' ]

// Note that the map method returns a new array that is of the exact same length as the original array.
// The difference between the forEach and map methods is that forEach is only used for looping and does not return anything back. On the other hand, the map method returns a new array that is of the exact same length as the original array.

// Also, note that map does not change the original array but returns a new array.

const users = [
  {
    first_name: 'Mike',
    last_name: 'Sheridan',
    age: 30
  },
  {
    first_name: 'Tim',
    last_name: 'Lee',
    age: 45
  },
  {
    first_name: 'John',
    last_name: 'Carte',
    age: 25
  }
];

// The array map method is also useful, if you want to extract only specific data from the array like this:

let last_names = users.map((user)=>{
    return user.last_name;
})
console.log(last_names) //[ 'Sheridan', 'Lee', 'Carte' ]


// We can even use map to generate an array with dynamic content as shown below:
const usersLocations = [
  {
    first_name: 'Mike',
    location: 'London'
  },
  {
    first_name: 'Tim',
    location: 'US'
  },
  {
    first_name: 'John',
    location: 'Australia'
  }
];
let userList = usersLocations.map((user)=>{
    return `${user.first_name} Lives In ${user.location}`
})
console.log(userList)
// [
//   'Mike Lives In London',
//   'Tim Lives In US',
//   'John Lives In Australia'
// ]


// Advantages of using the map method
// It helps quickly generate a new array without changing the original array
// It helps generate an array with dynamic content based on each element
// It allows us to quickly extract any element of the array
// It generates an array with the exact same length as the original array