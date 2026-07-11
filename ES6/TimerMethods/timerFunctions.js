// setTimeout method

let fun1 = (()=>
    setTimeout(()=>{
    console.log("This is priting  after two 2 seconds")
},2*1000))

fun1()

let intervalId = setInterval(() => {
    console.log('I will keep on coming back until you clear me')
}, 2000);

// Stop interval automatically after 10 seconds
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval stopped after 10 seconds");
}, 10 * 1000);
