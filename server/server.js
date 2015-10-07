var express = require('express');
var app = express();

app.use(express.static('client'));
app.use(require('./photoApiRoutes'));

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


