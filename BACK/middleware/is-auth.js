const jwt = require('jsonwebtoken');
module.exports = (socket, next) => {
  const token = socket.handshake.query.token;
  if (token) {
    jwt.verify(token, 'secretcode', (err, decoded) => {
      if (err) return next(new Error('Authentication error'));
      socket.decoded = decoded;
      next();
    });
  } else {
    next(new Error('Authentication error'));
  }
};
