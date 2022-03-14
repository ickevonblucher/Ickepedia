for (let i = 0; i <= 10; i++) {
    console.log(`i is${i}`)
    for (let j = 1; j < 4; j++) {
        console.log(`    j is :${j}`)
    }
} // Outer loop prints 10 times and inside each of those loops the inner prints 3

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


