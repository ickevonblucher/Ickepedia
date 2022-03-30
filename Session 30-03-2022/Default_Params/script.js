// function rollDie(numSides) {
//     if (numSides === undefined) {
//         numSides = 6
//     }
//     return Math.floor(Math.random() * numSides) + 1
// } //This is the old way of doing it before deault parameters. It is clunkier and unwieldy

//With default parameter we can have a default value if the user doesn't pass in a value themselves

function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides + 1)
}//This is the compact way of doing what was done above. Default is 6 sided die but you can pass any number

