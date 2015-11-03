var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('client'));
app.use(require('./photoApiRoutes'));
// app.use(express.static(path.join(path.normalize(__dirname + 'client'))));
app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


