var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var content = fs.readFileSync('index.html');
  content.toString();
  var buffer = new Buffer(content.length);
  buffer.write(content);
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});



