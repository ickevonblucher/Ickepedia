hello.toUpperCase();// This would result in an error so instead we do the try catch.


try {
    hello.toUpperCase();
} catch {
    console.log("error!");
}

console.log("After!");


function yell(msg) {
    console.log(msg.toUpperCase().repeat(3));
}

yell('Hello');// This works since it is expecting a string but we can use try and catch to prevent error if something else is inputed