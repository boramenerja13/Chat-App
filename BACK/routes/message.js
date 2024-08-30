const express = require('express');
const router = express.Router();
const messageController = require('../controller/message');

router.get('/', (req, res) => messageController.getMessages(req, res));
router.post('/', (req, res) => messageController.addMessage(req, res));
router.post('/save', (req, res) => messageController.saveMessage(req, res));

module.exports = router;


