//Rest collects all remaining arguments and puts them into an array


function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}//This would make an array with however many arguments are passed in. If it were done without the ...Syntax the function would ignore all arguments past the first. Since it makes an actual array we can pass in methods