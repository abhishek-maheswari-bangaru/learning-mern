const asyncHandler = require('express-async-handler');
const Todo = require('../models/toDoModels');

const getTodo = asyncHandler(async (request, response) => {
    response.set(200).json({message: 'Getting Todos', });
})

const setTodo = asyncHandler(async (request, response) => {
    if(!request.body.text) {
        response.status(400);
        throw new Error('Please add a text in the response');
    }
    const todo = await Todo.create({
        text: request.body.text,
    });
    response.set(200).json(todo);
})

const updateTodo = asyncHandler(async (request, response) => {
    response.set(200).json({message: 'Updating Todos'});
})

const deleteTodo = asyncHandler(async (request, response) => {
    response.set(200).json({message: 'Deleting Todos'});
})

module.exports = {
    getTodo,
    setTodo,
    updateTodo,
    deleteTodo
}