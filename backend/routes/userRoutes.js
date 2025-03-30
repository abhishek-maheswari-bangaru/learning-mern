const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getLoggedInUser } = require('../controllers/userController');

router.route('/').post(registerUser);
router.route('/login').post(loginUser);
router.route('/me').post(getLoggedInUser);

module.exports = router;