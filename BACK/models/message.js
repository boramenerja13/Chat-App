const mongoose = require('mongoose');/// to do 

const messageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: String,
  timestamp: Date
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;