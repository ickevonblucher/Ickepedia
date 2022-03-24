// const add = function (x, y) {
//     return x + y;
// } This can be fone with an arrow function
const add = (x, y) => {
    return x + y;
};// Executing works the same way

add(2, 9); // Returns 11

const square = (x) => {
    return x * x;
}

//Arrow functions can also be used even if there are no arguments in the fuction for instance:

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }

//Exercise:

const greet = (name) => {
    return `Hey ${name}!`;
};

//Arrow functions implicit returns:

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
);
//Can also be done without the paranthesis for readability on one line expressions

const isEven = num => num % 2 === 0;

const movies = [{
    title: 'Amadeus',
    score: 99
},
{
    title: 'Blade Runner 2049',
    score: 100
},
{
    title: 'Alien',
    score: 90
}
];

// const movieScore = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })// This can be done with an arrow function

const movieScore = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))

//Arrow functions and the keyword this:

const person = {
    firstName: "Vigo",
    lastName: "Mortensen",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    }

}//If this were done with an arrow function, the keyword this would refer to the Window not the const were it was defined.


