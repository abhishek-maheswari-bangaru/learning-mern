const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getLoggedInUser } = require('../controllers/userController');
const { protect } = require('../middleware/authorizationMiddleware');

router.route('/').post(registerUser);
router.route('/login').post(loginUser);
router.get("/me", protect, getLoggedInUser);

module.exports = router;