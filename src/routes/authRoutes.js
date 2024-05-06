const express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

const router = express.Router();


router.use('/auth', authController);


router.use('/users', userController);

module.exports = router;
