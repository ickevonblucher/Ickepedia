let count = 0;
while (count < 10) {
    console.log(count)
    count++;
}
// This is just like the for loops where it counts up form 0-10

const secret = "BabyHippo";

let guess = prompt("enter the secret code..");
while (guess !== secret) {
    guess = prompt("Enter the secret code..")
}
console.log("Congrats you got the secret!!!");
// This prompts the user to guess until they type in the correct phrase that is case snsitive

let input = prompt("Hey, say something!");
while (true) {
    input = prompt(input);
    if (input.toLowerCase() === "stop copying me") {
        break;
    }
}
console.log("OK YOU WIN!")
// This wouuod repeat what the user put in at them until they said the correct thing, then the loop breaks