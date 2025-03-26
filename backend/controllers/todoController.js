const asyncHandler = require('express-async-handler');
const Todo = require('../models/toDoModels');

const getTodo = asyncHandler(async (request, response) => {
    const todo = await Todo.find();
    response.set(200).json(todo);
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
    const todo = await Todo.findById(request.params.id);

    if(!todo){
        response.set(400);
        throw new Error('Todo item not found');
    }

    const updatedTodo = await Todo.findByIdAndUpdate(request.params.id, request.body, {
        new: true, // Will return updated document, if this tag is not included, original document before update will be returned 
    });

    response.set(200).json(updatedTodo);
})

const deleteTodo = asyncHandler(async (request, response) => {
    const todo = await Todo.findById(request.params.id);

    if(!todo){
        response.set(400);
        throw new Error('Todo item not found');
    }

    await Todo.findByIdAndDelete(request.params.id); // This function takes id as parameter and deletes the corresponding object from the DB

    response.set(200).json({
        'message': 'Deleting following id',
        'id': request.params.id
    });
})

module.exports = {
    getTodo,
    setTodo,
    updateTodo,
    deleteTodo
}