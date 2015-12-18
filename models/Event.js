var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var EventSchema = new mongoose.Schema ({
  username: {required: true, unique: true, type: String, lowercase: true, trim: true},
  email: {required: true, unique: true, type:String, lowercase: true, trim: true},
  passwordHash: String,
  salt: String
});

mongoose.model('Event', EventSchema);
