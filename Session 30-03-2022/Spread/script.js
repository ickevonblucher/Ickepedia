//Spread separates an iterable into distinct arguments.

Math.max(13, 2, 54, 2645, 16546, 10, 25, 816);
//This would find the highest number out of the bunch. However if it were in an array it would return NaN.

const nums = [13, 2, 54, 2645, 16546, 10, 25, 816]
Math.max(nums);//This would return NaN since it is expecting many arguments for the max function, however if we use the spread syntax of ... we can make it work

Math.max(...nums);

//For instance you can spread an argument in the console.log function

console.log(..."Hello");//Would return h e l l o

//Spread with array literals 

const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

const allPets = [...cats, ...dogs];//This combines both arrays into a separate 3rd one. Since this is a new array you can push or do anything else to it without affecting the previous ones.

// Spread on Object Literals

const feline = { legs: 4, family: "Felidae" };
const canine = { isFurry: true, family: "Canidae" };

const catDog = { ...feline, ...canine };//This would make a new object, but due to the conflict of there being 2 families, the latter argument "wins"

//Use case example:

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}

const newUser = { ...dataFromForm, id: 2345, isAdmin: false };