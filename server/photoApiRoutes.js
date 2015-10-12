var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('./config/config');

var options = {
  url: 'https://api.imgur.com/3/g/memes/viral/1',
  headers: {
    'Authorization': 'Client-ID c7557bafd5f3edb'
  }
};

router.get('/imgur', function (req, res) {
  request(options, callback);
  function callback(error, response, body) {
    res.send(body);
  } 
});
 
router.get('/instagram', function (req, res) {
  request('https://api.instagram.com/v1/tags/pets/media/recent?client_id=' + config.instagramApi.Key,
    function (error, response, body) {
        res.send(body);  
  });
});

module.exports = router;