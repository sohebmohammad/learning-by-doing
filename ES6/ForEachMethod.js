

let months = ["Jan", "Feb", "March", "April", "May"];


months.forEach((month)=>{
    console.log(month)
})

// Jan
// Feb
// March
// April
// May




// The thing you need to keep in mind is that the forEach method does not return any value.

// Take a look at the below code:

const returnedValue = months.forEach(function (month) {
  return month;
});

console.log('returnedValue: ', returnedValue); // undefined


// In all the above examples, we have used only the first parameter of the callback function. But the callback function also receives two additional parameters, which are:

// index - the index of the element which is currently being iterated
// array - original array which we're looping over


months.forEach((m,index,arr)=>{
    console.log(m, "  ", index, "  ", arr)
})