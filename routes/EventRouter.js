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
  Event.findOne({_id: id})
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

// ADDING A NEW EVENT
router.post('/', function(req, res, next){
  var event = new Event(req.body);
  event.date = new Date();
  event.save(function(err, result) {
    if(err) return next(err);
    if(!result) return next(err);
    res.send(result);
  });
});


// SHOW ALL EVENTS
router.get('/', function(req, res, next) {
  Event.find({})
    .populate('Event', 'plannerName')
    .exec(function(err, result){
      if(err) return next(err);
      if(!result) return next(err);
      res.send(result);
    });
  });




  module.exports = router;
