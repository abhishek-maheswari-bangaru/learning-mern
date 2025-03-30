const asyncHandler = require('express-async-handler');
const User = require('../models/userSchema');

const registerUser = (request, response) => {
    response.json({
        message: 'Register User',
    });
};

const loginUser = (request, response) => {
    response.json({
        message: 'Login User',
    });
};

const getLoggedInUser = (request, response) => {
    response.json({
        message: 'Logged In User Details',
    });
};

module.exports = {
    registerUser,
    loginUser,
    getLoggedInUser,
};