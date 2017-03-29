var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

var optimizeBundle = new webpack.optimize.UglifyJsPlugin({
  compress: {warnings: false}
});


module.exports = {
  context: __dirname,
  entry: './assets/js/index',

  output: {
    path: path.resolve('./assets/bundles/'),
    filename: '[name]-[hash].js',
  },

  plugins: [

  ],

  module: {
    loaders: [

      {test: /\.jsx?$/,

        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      }
    ]
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  }
};
