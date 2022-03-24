const prices = [9.99, 1, 50, 19.99, 49.99, 30, 50];

let total = 0;

for (let price of prices) {
    total += price
}
console.log(total); // This would output the sum of all the prices in the array but it can also be acocmplished with the reduce method.


prices.reduce((total, price) => {
    return total + price
});

prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})//This would find the minimum price in the array. Return can be used for many things.

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

const highestRated = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie
})//This would find the movie witht he highest score in the object. It combs through the array and finds what I want based on the parameters I give it.

const evens = [2, 4, 6, 8];
evens.reduce((sum, num,) => {
    return sum + num, 400;
})// You can pass in a second argument to decide the starting point. In this instance it starts at 400 and sums everything else.
