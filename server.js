// The web framework
var express = require('express');
// The view framework
var react = require('react');

// Our nice app
var app = express();

// Setup jade
app.set('views', __dirname);
app.set('view engine', 'jade');

// Routes

app.get('/*', function(req, res) {
  if (req.path.match(/.js$/)) {
    res.sendFile(__dirname + '/built/application.js');
  } else {
    console.log(req.path);
    res.render('app');
  }
});

// Start working!
app.listen(4000);
