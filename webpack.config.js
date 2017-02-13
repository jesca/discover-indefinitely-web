const webpack = require('webpack')
const path = require('path')
module.exports = {
  output: {
    publicPath: '/dist',
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
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
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
