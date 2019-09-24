const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/Countdown.js',
  output: {
    path: path.resolve('lib'),
    filename: 'Countdown.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
    ],
  },
};
