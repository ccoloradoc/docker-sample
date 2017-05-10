// create an app.js file with the following contents
var express = require('express');
var app = express();
var redis = require('redis');
var mongoose = require('mongoose');
var os = require('os');

//DB setup
mongoose.connect('mongodb://mongo:27017');

var client = redis.createClient('6379', 'redis');

app.get('/', function(req, res){
  client.incr('counter', function(err, counter) {
    if(err) return next(err);
    res.send('[' + os.hostname() + '] This page has been viewed ' + counter + ' times!'); //'[' + req.headers.host +
  });
});

app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});
