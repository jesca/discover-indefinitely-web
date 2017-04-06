const webpack = require('webpack')
const path = require('path')
module.exports = {
  output: {
    publicPath: '/dist',
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/src/index.js')
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader']
      },
      {
        test: /\.svg(\?.*)?$/,
        loaders: ['url-loader', 'svgo-loader']
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.ProvidePlugin({
      '_' : 'underscore'
    })
  ]
}
