var path = require('path');
var gulp = require('gulp');
var gutil = require('gulp-util');

var webpackConfig = {
  context: __dirname,
  // entry: entries can be array
  entry: "./client.jsx",
  output: {
    path: __dirname + '/built',
    filename: 'application.js'
  },
  resolve: {
    root: path.join(__dirname, 'src'),
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0,presets[]=stage-1'],
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/,
        loaders: ['style', 'css-loader?-autoprefixer', 'sass']
      },
      {
        test: /\.json$/,
        loaders: ['json']
      }
    ]
  },
  sassLoader: {
    indentedSyntax: false
  }
};

gulp.task('dev-server', function(callback){
  var WebpackDevServer = require("webpack-dev-server");
  var webpack = require('webpack');
  var compiler = webpack(webpackConfig);
  new WebpackDevServer(compiler, {
    // server and middleware options
  }).listen(8080, "localhost", function(err) {
    if(err) throw new gutil.PluginError("webpack-dev-server", err);
    // Server listening
    gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

    // keep the server alive or continue?
    // callback();

    process.env['kroman env'] = 'development';
    require('./server.js');
  });
});

gulp.task('build', function(callback){
  var webpack = require('webpack');

  webpack(webpackConfig, function (err, stats) {
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
