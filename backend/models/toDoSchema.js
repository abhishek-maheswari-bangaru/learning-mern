const mongoose = require('mongoose');

const todoSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: [true, 'Please add a text value'],
        },
        category: {
            type: String,
            default: 'General',
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
    },

    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Todo', todoSchema);