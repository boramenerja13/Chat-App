const express = require('express');
const router = express.Router();
const UserController = require('../controller/user');

router.get('/users', UserController.getUsers);

module.exports = router;
