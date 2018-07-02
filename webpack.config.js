const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  entry: './src/index.js', //react entry file
  output: {
    path: path.join(__dirname, 'dist'), // current folder concatenated with /dist
    filename: 'index_bundle.js', //webpack insert the build file into the html
  },
  //specify loader in module in rules, first check(test ) all .js files, exclude the node_module's files
  module: {
    rules: [
      {
        test: /\.js$/, //what file babel to compile
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader'
        },
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
}