var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buffer = new Buffer(256);
  buffer = fs.readFileSync('index.html');
  buffer = buffer.toString('utf-8',0,buffer.length);
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});



