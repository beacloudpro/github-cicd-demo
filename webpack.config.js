const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports =
  entry: './app.js',
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin(),   // clear dist directory
    new HtmlWebpackPlugin({
      template: 'index.html',   // use our own html template
      message: 'From Github!',  // pass variable to template
      hash: true                // append hash to assets to bypass cache
    })
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
