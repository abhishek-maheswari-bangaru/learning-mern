const asyncHandler = require('express-async-handler');

const getTodo = (request, response) => {
    response.set(200).json({message: 'Getting Todos', });
}

const setTodo = (request, response) => {
    if(!request.body.text) {
        response.status(400);
        throw new Error('Please add a text in the response');
    }
    response.set(200).json({message: 'Setting Todos'});
}

const updateTodo = (request, response) => {
    response.set(200).json({message: 'Updating Todos'});
}

const deleteTodo = (request, response) => {
    response.set(200).json({message: 'Deleting Todos'});
}

module.exports = {
    getTodo,
    setTodo,
    updateTodo,
    deleteTodo
}