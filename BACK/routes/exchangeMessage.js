const express = require('express');
const exchangeMessageController = require('../controller/exchangeMessages');
const isAuth = require('../middleware/is-auth')

const router = express.Router();

router.post('/send', isAuth, exchangeMessageController.sendMessage);

router.get('/:userId1/:userId2', exchangeMessageController.getMessages);

module.exports = router;