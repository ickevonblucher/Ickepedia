const subreddits = ['cringe', 'chickens', 'funny', 'soccer', 'pics', '2meirl4meirl']

for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddi.com/r/${subreddits[i]}`)
}

for (let sub of subreddits) {
    console.log(`Visit reddi.com/r/${sub}`)
} // easier way of doing the above loop but easier to read and shorter in code. Since the index doesn't matter in this case

const seatingChart = [
    ['Alley', 'Erik', 'Namita'],
    ['Geoff', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[1];
    console.log(`ROW #${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}


for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}

for (let char of "hello world") {
    console.log(char);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let square of numbers) {
    console.log(Math.pow(square, 2));
}