// const jwt = require('jsonwebtoken');
// module.exports = (socket, next) => {
//   const token = socket.handshake.query.token;
//   if (token) {
//     jwt.verify(token, 'secretcode', (err, decoded) => {
//       if (err) return next(new Error('Authentication error'));
//       socket.decoded = decoded;
//       next();
//     });
//   } else {
//     next(new Error('Authentication error'));
//   }
// };
// middleware/is-auth.js
const jwt = require('jsonwebtoken');

const isAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; 
  if (token) {
    jwt.verify(token, 'secretcode', (err, decoded) => {
      if (err) return res.status(401).json({ message: 'Authentication error' });
      req.user = decoded; //store
      next();
    });
  } else {
    res.status(401).json({ message: 'Authentication error' });
  }
};

module.exports = isAuth;
