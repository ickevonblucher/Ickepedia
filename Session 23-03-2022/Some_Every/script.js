const exams = [90, 98, 92, 78, 77, 90, 89, 84, 81, 77];

exams.every(score => score >= 75);// Would return true since all scores are above it. Every tests all the elements in an array

//Some would test if at least one passes the criteria

exams.some(score => score >= 95);

//Exercise:
const allEvens = arrNum => arrNum.every(num => num % 2 === 0);