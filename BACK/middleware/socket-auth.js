const jwt = require('jsonwebtoken');

const socketAuth = (socket, next) => {
  
  // Extract token from handshake query or auth object
  const token = socket.handshake.auth.token || socket.handshake.query.token;

  if (token) {
    jwt.verify(token, 'secretcode', (err, decoded) => {
      if (err) {
        console.error('Socket authentication error:', err);
        return next(new Error('Authentication error'));
      }
      socket.user = decoded; // Attach decoded user to socket
      next();
    });
  } else {
    next(new Error('Authentication error'));
  }
};

module.exports = socketAuth;
