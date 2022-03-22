function callTwice(func) {
    func();
    func();
}
function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}
callTwice(rollDie);

//Returning a function from a function

function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("Congrats! I am a good function!")
            console.log("You win a million dollars!")
        }
    } else {
        return function () {
            alert("You have been infected by a virus!")
            alert("Stop trying to close this window!")
            alert("Stop trying to close this window!")
            alert("Stop trying to close this window!")
            alert("Stop trying to close this window!")
            alert("Stop trying to close this window!")
        }
    }
}
const mystery = makeMysteryFunc();
mystery();

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}
const isChild = makeBetweenFunc(0, 17);
isChild(40);// Returns False
isChild(4);// Returns true
const isAdult = makeBetweenFunc(18, 64);
const isSenior = makeBetweenFunc(65, 120);
isSenior(90);//Returns true
isAdult(24);//Returns true
// function isBetween(num) {
//     return num >= 50 && num <= 100
// }
// function isBetween2(num) {
//     return num >= 1 && num <= 10
// }