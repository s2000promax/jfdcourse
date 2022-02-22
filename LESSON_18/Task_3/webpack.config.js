/*
Init project: npm init -y

Must install:
npm install webpack webpack-cli --save-dev https://webpack.js.org/guides/installation/

 */

const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};