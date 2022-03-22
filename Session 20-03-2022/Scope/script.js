function collectEggs() {
    let totalEggs = 6;
    console.log(totalEggs);
}
console.log(totalEggs); // Variables defined inside of a function are scoped to that function so you cannot access it outside of it. Even if you run the function.


let bird = 'Scarlet Macaw';

function birdWatch() {
    let bird = 'Great Blue Heron';
    console.log(bird);
}
birdWatch();
console.log(bird);

let radius = 8;
if (radius > 0) {
    const PI = 3.14159;
    let msg = 'HII!';
}

console.log(radius);
console.log(msg); // Msg is not defined since the variable is defined inside a block. This is the difference between var and let. The scope of the definition

function bankRobbery() {
    const heroes = ['Siperman', 'Wolverine', 'Black Panther'];
    function cryForHelp() {
        for (let hero of heroes) {


            console.log(`Please help us!, ${hero.toLocaleUpperCase()}`)
        }
        cryForHelp();
    }
}// This would work because the scope of a function within a function still encompasses all the defined variables. A nested or inner function has access to everything defined above it. Only works one way.

