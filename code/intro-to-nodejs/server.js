// server.js

// init project
var express = require('express');
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/about.html', function(request, response) {
  response.sendFile(__dirname + '/views/about.html');
});

// get our resolutions json
var resolutions = require('./resolutions.json');

// here's an endpoint that will return our resolution info
app.get('/resolution-data', function(request, response) {
  response.send(resolutions);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
