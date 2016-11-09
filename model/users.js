var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  name: String,
  counter: Number,
  message: String,
  comments: [{type: mongoose.Schema.Types.ObjectId, ref:'Comment'}]
});

var commentSchema = new mongoose.Schema({
  user: String,
  comment: String
});

mongoose.model('Comment',commentSchema)
mongoose.model('User', userSchema);
