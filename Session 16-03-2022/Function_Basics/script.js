let die1 = Math.floor(Math.random() * 6) + 1; //Say I needed 6 dice, we could shorten the code and make things easier down the line by making a function for die rolling. We can even make a function that rolls dice with different amounts of sides


function singSong() {
    console.log("DO")
    console.log("RE")
    console.log("MI")
}
singSong(); //Calls the defined function to run. Can be done in console or here on the code. A function can be called before it is defined, however you shouldn't do it

//Exercise:

function printHeart() {
    console.log("<3");
}
printHeart();

function greet() {
    console.log("Hi!")
} // This does not accept inputs but we can make functions be responsive. For instance greet different people depending on the name put in. This is called **Arguments**

function greet(person) {
    console.log(`Hi, ${person}`);
}

greet("Jordan"); // Outputs "Hi, Jordan", or whatver argument I put in. Once again can be done in the console or here on the code file. If an argument is not passed it will output undefined.


//Exercise:

function rant(message) {
    console.log(`${message}`.toUpperCase());
    console.log(`${message}`.toUpperCase());
    console.log(`${message}`.toUpperCase());
}

rant("I hate bugs!");


function greetName(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`);
}

greetName("George", "Clooney"); // Output expected to be: Hey there George C.

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

repeat("I love Elden ring. ", 10); // Expected output is to be I love elden ring 10 times

//Exercise:


function isSnakeEyes(die1, die2) {
    if (die1 == 1 && die2 == 1) {
        console.log("Snake Eyes!");

    } else {
        console.log("Not Snake Eyes!");
    }
}

// function add(x, y) {
//     console.log(x + y);
// } //This would add the numbers inputed but console.log does not output a value that can be stored. For this wse use the return keyword

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
} //Return stops the function running, also it only returns 1 value

add(add(5, 1), 9); //Return value would be 15.

//Exercise:

function multiply(x, y) {
    return x * y;
}

//Exercise:

function isShortsWeather(x) {
    if (x >= 75) {
        return true;
    }
    return false;
}

//Exercise:

function lastElement(arr) {
    if (arr.length === 0) {
        return null;
    }
    return arr[arr.length - 1];
}

//Exercise:

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

//Exercise:

function sumArray(sumA) {
    let sum = 0;
    for (let i = 0; i < sumA.length; i++) {
        sum += sumA[i];
    }
    return sum;
}

//Exercise:

const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
function returnDay(day) {
    if (day < 1 || day > 7) {
        return null;
    } else {
        return week[day - 1];
    }
}
