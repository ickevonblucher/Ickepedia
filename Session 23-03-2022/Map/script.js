const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const doubles = numbers.map(function (num) {
    return num * 2;
}); //This would create a new array with the results from the function whichy can be saved 

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

const titles = movies.map(function (movie) {
    return movie.title.toUpperCase();
})
//Exercise

const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];

const firstNames = fullNames.map(function (first) {
    return first.first;
});// Returns an array of all the first names of the characters from the series