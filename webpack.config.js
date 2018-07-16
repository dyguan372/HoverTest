var path = require('path');
var webpack = require('webpack');

module.exports = {
  cache: true,
  entry: path.join(__dirname, '/src/index.tsx'),
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/dist/' //The public path to load your async content, such as xxx.svg
  },
  devtool: 'source-map',
  resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        // Image Loader
        test: /\.(jpe?g|png|gif|svg)$/i, 
        loader:'url?limit=8192' // inline base64 URLs for <=8k images, direct URLs for the rest 
      }
    ]
  }
}