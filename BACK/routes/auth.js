const express = require('express');
const { body } = require('express-validator');
const authController = require('../controller/auth');
const router = express.Router();

router.post(
  '/register',
  [
    body('email').isEmail().withMessage('Please enter a valid email.').normalizeEmail(),
    body('password').trim().isLength({ min: 5 })
  ],
  authController.register
);

router.post('/login', authController.login);

module.exports = router;
