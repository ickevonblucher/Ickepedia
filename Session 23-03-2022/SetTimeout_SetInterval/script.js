console.log("Hello!")
setTimeout(() => {
    console.log("Are you still there?")
}, 3000)// This will run the function after the set amount of time in MS

const id = setInterval(() => {
    console.log(Math.random())
}, 2000);//Every 2 seconds it will spit out a random number

// clearInterval(id);// This would end the function 