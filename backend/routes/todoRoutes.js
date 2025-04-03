const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authorizationMiddleware');
const { getTodo, setTodo, updateTodo, deleteTodo } = require('../controllers/todoController');

router.route('/').get(protect, getTodo).post(protect, setTodo)
router.route('/:id').put(protect, updateTodo).delete(protect, deleteTodo)

module.exports = router;