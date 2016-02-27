var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 3000;

app.use(express.static('./'));

app.listen(port);

console.log('Express server listening on %d in %s mode', port, app.settings.env);
