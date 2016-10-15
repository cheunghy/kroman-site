var express = require('express');
var app = express();

// Setup view

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

app.listen(4000);
