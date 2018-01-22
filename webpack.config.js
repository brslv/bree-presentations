const path = require('path')

const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractText = new ExtractTextPlugin({
  filename: 'main.css'
})

module.exports = {
  entry: ['babel-polyfill', './src/js/main.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: extractText.extract({
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' }
          ]
        })
      },
      {
        test: /\.html$/,
        use: [ 'html-loader' ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/',
            publicPath: 'img/'
          }
        }
      }
    ]
  },
  plugins: [
    extractText,
    new HtmlPlugin({
      template: 'src/index.html'
    })
  ]
}
