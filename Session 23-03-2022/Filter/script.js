const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

numbers.filter(n => {
    return n < 10
})//This would make a filtered arrwy with the parameters of the filter. This can be saved in a variable

//Exercise:

const validUserNames = (username) => (
    username.filter(n => {
        return n.length < 10;
    })

);