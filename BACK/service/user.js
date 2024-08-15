const User = require('../models/user');

exports.getUsers = async () => {
  return await User.find({});
};
