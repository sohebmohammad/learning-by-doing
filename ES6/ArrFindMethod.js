// The Array.find Method
// The Array.find method has the following syntax:

// Array.find(callback(element[, index[, array]])[, thisArg])

// The _find_ method returns the _value_ of the _first element_ in the array that satisfies the provided test condition.

const employees = [
 { name: "David Carlson", age: 30 },
 { name: "John Cena", age: 34 },
 { name: "Mike Sheridan", age: 25 },
 { name: "John Carte", age: 50 }
];

// and we want to get the record for the employee whose name is John. In this case, we can use the find method as shown below:

const employee = employees.find((emp)=>{
    return emp.name.indexOf("John")>-1;
})

console.log(employee) //{ name: 'John Cena', age: 34 }

// Even though there is "John Carte" in the list, the find method will stop when it finds the first match. So it will not return the object with the name "John Carte".

