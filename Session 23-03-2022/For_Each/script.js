const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function print(element) {
    console.log(element);
}
numbers.forEach(print);//uncommon to pass in a function that you have already defined but in this case it would priint all of the numbers in the array

numbers.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el)
    }
})

// for (let el of numbers) {
//     console.log(el);
// }

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

movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`);
})