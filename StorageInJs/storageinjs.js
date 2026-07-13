

// localStorage: Data persists even after closing your session

// sessionStorage: You lose your data when your session is over, like when you close the browser on the tab.



//remove saved data
// localStorage.removeItem("name")

function login(){
if(sessionStorage.getItem("token")){
    console.log(sessionStorage.getItem("token"))
}
sessionStorage.setItem("token",'sdfaseserfwe678sdfs7sdf8dsfd89');
console.log("the session token is ",sessionStorage.getItem("token"))
//save the data
localStorage.setItem("name","Mohammad Soheb");

// get saved data
let name = localStorage.getItem("name")

console.log(`Saved name in local storage ${name}`)
}