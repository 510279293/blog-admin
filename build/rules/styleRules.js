const {resolve} = require('./../utils')
const theme = require('./../../theme')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = [
  {
    test: /\.(css|less)$/,
    include: [resolve('node_modules')],
    use: [
      // 'style-loader',
      MiniCssExtractPlugin.loader,
      'css-loader',
      {
        loader: 'less-loader',
        options: {
          javascriptEnabled: true,
          modifyVars: theme,
          includePaths: ['./node_modules/normalize.css']
        }
      }
    ]
  },
  {
    test: /\.scss$/,
    include: [resolve('src')],
    exclude: /node_modules/,
    use: [
      // 'style-loader',
      MiniCssExtractPlugin.loader,
      {
        loader: 'cache-loader',
        options: {
          cacheDirectory: resolve('.cache-loader')
        }
      },
      {
        loader: 'typings-for-css-modules-loader',
        options: {
          modules: true,
          // 类名导出
          namedExport: true,
          camelCase: true,
          sass: true
        }
      },
      {
        loader: 'sass-loader',
        options: {
          includePaths: [resolve('src/assets/styles')]
        }
      }
    ]
  },
]