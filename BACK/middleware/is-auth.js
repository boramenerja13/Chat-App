const jwt = require('jsonwebtoken');

const isAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1] || req.query.token; // Check in headers and query
  if (token) {
    jwt.verify(token, 'secretcode', (err, decoded) => {
      if (err) return res.status(401).json({ message: 'Authentication error' });
      req.user = decoded; // Store the decoded user data in the request
      next();
    });
  } else {
    res.status(401).json({ message: 'Authentication error' });
  }
};

module.exports = isAuth;
