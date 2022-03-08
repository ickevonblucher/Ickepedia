let movieLine = ['Tom', 'Nancy'];
movieLine[2] = 'Pablo';
movieLine.push('Oliver');
movieLine.push('Eva');
movieLine.push('George', 'Ringo');
let person = movieLine.pop();

let barbell = [];
barbell.push(45);
barbell.push(45);
barbell.push(25);
barbell.push(10);
barbell.pop();


//Shift and Unshift function just like push and pop, however they work form the start of array instead of the end

movieLine.shift();
let nextPatron = movieLine.shift();
movieLine.unshift('Cutter colton');

//concat combines two arrays while maintaining the order

let cats = ['blue', 'kitty'];
let dogs = ['rusty', 'wyatt'];
let pets = cats.concat(dogs);

//includes returns a boolean on whether that element is present in an array

cats.includes('blue'); // expected true
cats.includes('Blue'); //excpected false because of caps

//indexOf just like for strings but for elements in an array. Only shows first match

pets.indexOf('kitty'); // expected return of 1

//Reverse reverses the order of the array --DESTRUCTIVE SO BE CAREFUL--
pets.reverse();

//Slice copies a portion of an array
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
colors.slice() // Makes a new array with the same elements
colors.slice(3)// Starts at index 3 an goes until end.
colors.slice(2, 4) //start and stop index

//splice changes content of an array. removing or replacing existing element

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // adds Feb to index 1
months.splice(4, 1, 'May'); // replaces June with May

//Multi-Dimensional arrays can store multiple arrays or arrays and objects.
const board = [['X', 'O', 'X']['O', null, 'X']['O', "O", 'X']
]
board[1][1]// Gets the null index 1 inside board, and then index 1 inside that new array