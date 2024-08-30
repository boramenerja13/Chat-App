const mongoose = require('mongoose');

const chatRoomSchema = new mongoose.Schema({
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }],
  name: { type: String, required: true }
});

module.exports = mongoose.model('ChatRoom', chatRoomSchema);
