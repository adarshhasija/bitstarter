var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buffer = new Buffer(256);
  var len = buffer.write(fs.readFileSync('index.html'),'utf-8');
  buffer.toString('utf-8', 0, len);
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});



