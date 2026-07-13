
// Promises in JavaScript (❗important) 
// Promises are at the heart of Asynchronous JS.

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A promise can be in one of these three states:

// Pending: initial state, neither fulfilled nor rejected
// Fulfilled: operation was completed successfully
// Rejected: operation failed
const promise = new Promise((resolve, reject)=>{
    let value = true;
    if(value){
        resolve("Hey the value is true")
    }
    else{
        reject("error, value is false")
    }
})

promise.then((x)=>{
    console.log(x)
}
).catch((x)=>{
    console.log(x)
})

// Note: resolve and reject are just conventional names. Call it pizza🍕 if you like.

// Instead of then/catch, we can also use async/await:

async function callMe() {
    const res = await promise
    console.log(res)
}
callMe()

// One of the advantages of promises is that they are a much cleaner syntax. Before we had promises, we could easily get stuck in callback hell 🌋