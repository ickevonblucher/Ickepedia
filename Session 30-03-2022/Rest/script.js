//Rest collects all remaining arguments and puts them into an array


function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}//This would make an array with however many arguments are passed in. If it were done without the ...Syntax the function would ignore all arguments past the first. Since it makes an actual array we can pass in methods

raceResults('Tammy', 'Tammold', 'Jubie', 'Bringham', 'Jebediah');
function raceResults(gold, silver, ...everyoneElse) {
    console.log(`Gold Medal Goes to:${gold}`)
    console.log(`Silver Medal Goes to:${silver}`)
    console.log(`And thanks to everyone else::${everyoneElse}`)
}//This would give gold to Tammy, Silver to Tammold and the remaining people would be under everyoneElse.