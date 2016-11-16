var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    active: {type: Boolean, default: true},
    party: String,
    connectedTo: {type: String, default: null}
  });

var User = mongoose.model("User", userSchema)

module.exports = User