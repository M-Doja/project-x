var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Event = mongoose.model('Event');
var passport = require('passport');
var jwt = require('express-jwt');
var auth = jwt({
  userProperty: 'payload',
  secret: 'This_IS_a_PROJECT_by_MICAH_and_EVAN'
});

router.param('id', function(req, res, next, id) {
  User.findOne({_id: id})
  .populate('comments profilePosts forumPosts')
    .exec(function(err, result) {
      if (!result) {
        res.status(404).send({
          err: "Could not find that specific user."
        });
      }
      req.user = result;
      next();
    });
});

router.post('/register', function(req, res, next) {
  console.log('hi there');
  var user = new User(req.body);
  user.setPassword(req.body.password);
  user.save(function(err, result) {
    if(err) return next(err);
    if(!result) return next("There was an issue registering that user.");
    res.send(result.createToken());
  });
});

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user){
    if(err)return next(err);
    res.send(user.createToken());
  })(req, res, next);
});



  module.exports = router;
