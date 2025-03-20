const getTodo = (request, response) => {
    response.set(200).json({message: 'Getting Todos', });
    console.log("Get request");
}

const setTodo = (request, response) => {
    response.set(200).json({message: 'Setting Todos'});
    console.log("Post request");
}

const updateTodo = (request, response) => {
    response.set(200).json({message: 'Updating Todos'});
    console.log(`Put request`);
}

const deleteTodo = (request, response) => {
    response.set(200).json({message: 'Deleting Todos'});
    console.log("Delete request");
}

module.exports = {
    getTodo,
    setTodo,
    updateTodo,
    deleteTodo
}