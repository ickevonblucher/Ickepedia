let input = (prompt('What would you like to do?'));

const todos = ['Make bed', 'Clean floors'];

while (input !== 'Quit' && input !== 'q') {
    if (input === 'List') {
        console.log('*************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('*************')
    } else if (input === 'New') {
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    }
    else if (input === 'Delete') {
        const index = parseInt(prompt('Enter an Index to delete:'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index')
        }
    }
    input = (prompt('What would you like to do?'));
}
console.log('Good bye, have a great day!')