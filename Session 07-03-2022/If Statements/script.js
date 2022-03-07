// let userInput = prompt("Please enter your age");
// if (userInput >= 18) {
//     console.log("Welcome to the website bucko");
// }
// if (userInput < 18) {
//     console.log("Go home sport. This ain't for you");
// }
// let random = Math.random();
// if (random < 0.5) {
//     console.log("Your number is less than .5!!");
//     console.log(random);

// }
// if (random >= 0.5) {
//     console.log("your number is greater than .5!!")
//     console.log(random);
// }

// const dayOfWeek = prompt('What is the day of the week today?').toLowerCase;

// if (dayOfWeek === 'monday') {
//     console.log("Ugh I hate mondays :(");
// } else if (dayOfWeek === 'saturday') {
//     console.log("Yay I love Saturdays!");
// } else if (dayOfWeek === 'friday') {
//     console.log("Party on bruv");
// } else {
//     console.log("Meh");
// }

// const age = 65;

// if (age < 5) {
//     console.log("you are a baby. You get in for free!");
// } else if (age < 10) {
//     console.log("You are a child. You pay $10");
// } else if (age < 65) {
//     console.log("You are an adult. You pay $20");
// } else {
//     console.log("You are a senior. 10 Shmeckles pls!");
// }

const password = prompt("Please enter a new password");

// Password must be 6+ characters
if (password.length >= 6) {
    // Password cannot include spaces
    if (password.indexOf(' ') === -1) {
        console.log("Valid password");
    } else {
        console.log("Password cannot contain spaces!");
    }
} else {
    console.log("Password is too short! Must be 6+ characters")
}
