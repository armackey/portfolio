var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('./config/config');
var Github = require('github-api');

var github = new Github({
  username: config.github.username,
  password: config.github.password,
  auth: "basic"
});

// var user = github.getUser();

// var repo = github.getRepo(config.github.username, 'gNewsAPISearch');
// console.log(user.repos(options));
// function options(err, data) {
//   var key;
//   var j;
//   for (key in data) {
    

//     for (j in data[key]) {
//       console.log(data[key][j]);
//     }
//   }
// }


module.exports = router;