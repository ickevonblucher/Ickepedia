const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];


const highScore = scores[0];
const secondHighScore = scores[1];
//There is an easier way to do this although this is valid.

const [gold, silver, bronze, ...unqualified] = scores;//This creates a variable gold with the value at index 0 for gold and index 1 for Silver.


const user = {
    email: 'harvey@gmail.com',
    password: 'Bruh123!',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly gay man to be elected to public office in California, as a member of the San Francisco Board of Supervisors',
    city: 'San Francisco',
    state: 'California'
}

// const firstName = user.firstName;
// const lastName = user.lastName;//This is valid but destructuring is eassyer

const { email, lastName, firstName } = user;//This makes me 3 separate variables with the info that is in the object without altering the original object

const { born: birthYear } = user;//This would make me a variable with the data from born but with the name birthYear 