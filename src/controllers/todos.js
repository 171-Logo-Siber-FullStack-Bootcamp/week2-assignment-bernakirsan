const todos = require("../data/todos.json"); // import todos

getAllTodos = () => {  // return all todos
    return todos;
}

getTodosByUserId = (userId) => {   // filters
    return todos.filter(todo => todo.userId == userId);
}

module.exports = {  // export function
    getAllTodos, 
    getTodosByUserId
}