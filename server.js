// The web framework
var express = require('express');
// The view framework
var react = require('react');

// Our nice app
var app = express();

// Setup jade
app.set('views', __dirname);
app.set('view engine', 'jade');

// Setup public assets
app.use(express.static('public'));
app.use(app.router);

// Routes

app.get('/*', function(req, res) {
  res.render('app');
});

// Start working!
app.listen(4000);
