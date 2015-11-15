var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('build', function(){

});

gulp.task('server', ['build'], function(){
  require('./server.js');
});

gulp.task('clean', function(){
  var exec = require('child_process').exec;
  var path = require('path').join(__dirname, 'built');

  exec('rm -rf' + path, function(e, out, err){
    gutil.log('build dir removed.');
  });
});

gulp.task('default', ['build', 'server']);
