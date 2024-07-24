const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.register = async (email, password) => {
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = new User({
    email,
    password: hashedPassword
  });
  await user.save();
  return { message: 'User created!', userId: user._id };
};

exports.login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('A user with this email could not be found.');
  }

  const isEqual = await bcrypt.compare(password, user.password);
  if (!isEqual) {
    throw new Error('Wrong password.');
  }

  const token = jwt.sign(
    {
      email: user.email,
      userId: user._id.toString()
    },
    'secretcode',
    { expiresIn: '1h' }
  );

  return { token: token, userId: user._id.toString() };
};
