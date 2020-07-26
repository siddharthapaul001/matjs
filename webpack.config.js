const path = require('path');

let libraryName = 'MatJS',
	fileName = 'matjs',
  mode = process.argv[3];

if (mode === 'production') {
  fileName += '.min.js';
} else {
  fileName += '.js';
  mode = 'development';
}

module.exports = {
  entry: './src/index.js',
  output: {
    filename: fileName,
    path: path.resolve(__dirname, 'dist/build'),
    library: libraryName,
    libraryTarget: 'umd'
  },
  devServer: {
    contentBase: path.resolve(__dirname),
    compress: true,
    open: true,
    hot: true,
    port: 8080
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['@babel/preset-env']
      }
    }]
  },
  mode: mode
};