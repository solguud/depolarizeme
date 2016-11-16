var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
  users:  [{type: String, ref:"users"}],
  author: String,
  body:   String,
  date: { type: Date, default: Date.now },
  seen: { type: Boolean, default: false }
});

var Message = mongoose.model("Message", messageSchema)

module.exports = Message