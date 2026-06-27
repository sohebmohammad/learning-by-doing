//In a normal function, JavaScript gives you a special object called arguments.
function normalFun(){
    console.log(arguments)
}

normalFun(1,2,3)

//But in an arrow function, there is no own arguments object.

const arrowFun = (...numbers) =>{
    console.log(numbers)
}
// ...name (... called rest parameter) it will take values and stores in the array
arrowFun(10,20, 40)