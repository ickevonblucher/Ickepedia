const testScores = {
    Keenan: 80,
    Samon: 67,
    Kim: 89,
    Shawn: 91,
    Marlong: 92,
    Dwayne: 77,
    Nadia: 83,
    Elvira: 97,
    Diendre: 81,
    Vonnie: 60,
}

for (let person of testScores) {
    console.log(person);
} // This would output error since it is not iterable

for (let person in testScores) {
    console.log(person);
} // This would only output the key from testcores but not the stored value

for (let person in testScores) {
    console.log(`${person} scored: ${testScores[person]}`);
}

Object.values(testScores); //Outputs the scores inside the object as an array
Object.keys(testScores); //Outputs the keys inside the object as an array
Object.entries(testScores);// Outputs nested arrays of the keys + scores

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log(total / scores.length); // Outputs the average of all the scores