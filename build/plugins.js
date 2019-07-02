const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const {resolveAssetsRootDir} = require('./utils')
module.exports = [
  new HtmlWebpackPlugin({
    template: './public/index.html',
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
    }
  }),
  new MiniCssExtractPlugin({
    filename: resolveAssetsRootDir('css/[name].css')
  })
]