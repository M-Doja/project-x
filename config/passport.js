var passport = require('passport');
var LocalStrategy = require('passport-local');
var mongoose = require('mongoose');
var User = mongoose.model('User');

passport.use(new LocalStrategy(function(email, password, done){
  User.findOne({email: email}, function(err, user){
    if(err)return done(err);
    if(!user) return done('Could not find user in database');
    if(!user.checkPassword(password)) return done("Incorrect password");
    return done(null, user);
  });
}));
