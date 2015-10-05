var express = require('express');
var app = express();

app.use(express.static('client'));
app.use(require('./photoApiRoutes'));


app.listen(3000);


