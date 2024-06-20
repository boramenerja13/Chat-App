const jwt = require('jsonwebtoken');

// module.exports = (req, res, next) => {
//   const authHeader = req.get('Authorization');
//   console.log(authHeader)
//   if (!authHeader) {
//     const error = new Error('Not authenticated.');
//     throw error;
//   }

//   let decodedToken;
//   try {
//     decodedToken = jwt.verify(authHeader, 'secretcode');
//   } catch (err) {
//     throw err;
//   }
//   if (!decodedToken) {
//     const error = new Error('Not authenticated.');
//     throw error;
//   }
//   req.user = decodedToken;
// console.log(req.user)
//   next();

// };

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