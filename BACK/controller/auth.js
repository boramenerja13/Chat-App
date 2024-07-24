const authService = require('../service/auth');

exports.register = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const response = await authService.register(email, password);
    res.status(201).json(response);
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const response = await authService.login(email, password);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

exports.socketRegister = async (data, socket) => {
  const { email, password } = data;
  try {
    const response = await authService.register(email, password);
    socket.emit('register_response', response);
  } catch (err) {
    socket.emit('register_response', { error: err.message });
  }
};

exports.socketLogin = async (data, socket) => {
  const { email, password } = data;
  try {
    const response = await authService.login(email, password);
    socket.emit('login_response', response);
  } catch (err) {
    socket.emit('login_response', { error: err.message });
  }
};

