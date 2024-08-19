const express = require('express');
const router = express.Router();
const UserController = require('../controller/user');

router.get('/', UserController.getUsers);

module.exports = router;
