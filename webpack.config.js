var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var autoprefixer = require('autoprefixer');
var CONFIG = require('./config/config')["development"];


var optimizeBundle = new webpack.optimize.UglifyJsPlugin({
  compress: {warnings: false}
});

var plugins = new webpack.DefinePlugin({
'process.env': {
  'NODE_ENV': JSON.stringify('development'),
  'URL': JSON.stringify(CONFIG.host)
}});


module.exports = {
  context: __dirname,
  entry: './assets/js/index',

  output: {
    path: path.resolve('./assets/bundles/'),
    filename: '[name]-[hash].js',
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
        'URL': JSON.stringify(CONFIG.host)
      }
    }),
  ],

  module: {
    loaders: [

      {test: /\.jsx?$/,

        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      },
      { test: /\.css$/, loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!postcss-loader'}
    ]
  },
  postcss: function() {
    return [autoprefixer];
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  }
};
