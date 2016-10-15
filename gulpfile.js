var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('build', function(callback){
  var webpack = require('webpack');
  webpack({
    context: __dirname,
    entry: "./client.jsx",
    output: {
      path: __dirname + '/built',
      filename: 'application.js'
    }
  }, function (err, stats) {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString());
    callback();
  })
});

gulp.task('server', ['build'], function(){
  require('./server.js');
});

gulp.task('clean', function(callback){
  var exec = require('child_process').exec;
  var path = require('path').join(__dirname, 'built');

  exec('rm -rf ' + path, function(e, out, err){
    gutil.log('build dir removed.');
    callback();
  });
});

gulp.task('default', ['build', 'server']);
