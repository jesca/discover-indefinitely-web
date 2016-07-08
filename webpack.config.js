var webpack = require("webpack");
module.exports = {
  devtool: "source-map",
  entry : "./entry.js",
  output : {
    path : __dirname,
    filename : "./bundle.js",
    sourceMapFilename: "./bundle.js.map",
    devtoolLineToLine: true
  },
  module : {
    loaders : [
      { test : /\.scss$/, loader : "style!css!sass" },
      { test : /\.ejs$/, loader: "ejs-loader" },
      { test : /\.(eot|woff)$/, loader : "file-loader" }
    ]
  },
  plugins : [
    new webpack.optimize.DedupePlugin(),
    new webpack.ProvidePlugin({
      $ : "jquery",
      jQuery : 'jquery',
      'window.jQuery' : 'jquery',
      'window.$' : 'jquery'
    }),
    new webpack.ProvidePlugin({
      'Backbone' : 'backbone'
    }),
    new webpack.ProvidePlugin({
      '_' : 'underscore'
    }),
    new webpack.ProvidePlugin({
      Marionette : "backbone.marionette"
    }),
    new webpack.ProvidePlugin({
      'moment' : "moment"
    })
  ]
};