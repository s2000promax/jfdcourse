/*
Init project: npm init -y

Must install:
npm install webpack webpack-cli --save-dev https://webpack.js.org/guides/installation/

npm install --save-dev html-webpack-plugin https://webpack.js.org/plugins/html-webpack-plugin/#root
npm install -D babel-loader @babel/core @babel/preset-env webpack https://webpack.js.org/loaders/babel-loader/#root
npm install --save-dev style-loader css-loader https://webpack.js.org/guides/asset-management/#loading-css
npm install --save-dev webpack webpack-dev-server https://webpack.js.org/api/webpack-dev-server/#root
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, 'build'),
    port: 8080,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
};