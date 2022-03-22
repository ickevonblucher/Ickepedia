// const myMath = {
//     PI: 3.14159,
//     square: function (num) {
//         return num * num;
//     },
//     cube: function (num) {
//         return num ** 3;
//     }
// }//We don't need the function keyword however thanks to shorthand added to JS
const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}

myMath.PI;// Returns the value I made for PI
myMath.square(2);// returns 4

//Exercise:

const square = {
    area(num) {
        return num * num;
    },
    perimeter(num) {
        return num * 4;
    }
};

// THIS Keyword
const cat = {
    name: 'Blue',
    color: 'Grey',
    breed: 'Scottish fold',
    meow() {
        console.log(`${this.name} says meooow!`)
    }
}

const meow2 = cat.meow;// wouldn't work like callow cat.meow(); Because of the Window object

//Exercise:

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return "EGG";
    }
};
