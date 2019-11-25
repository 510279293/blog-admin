const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const {resolve} = require('./utils')
const plugins = require('./plugins')
const jsRules = require('./rules/jsRules')
const styleRules = require('./rules/styleRules')
const fileRules = require('./rules/fileRules')
const optimization = require('./optimization')

const devServer = {
  host: '127.0.0.1',
  port: '8888',
  hot: true,
  historyApiFallback: true,
  overlay: {
    errors: true
  },
  publicPath: '/',
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      pathRewrite: {'^/api' : ''},
      changeOrigin: true
    }
  }
}

module.exports = {
  devServer,
  entry: {
    app: resolve('src/index.tsx')
  },
  output: {
    path: resolve('dist'),
    filename: 'js/[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: resolve('tsconfig.json')
      })
    ]
  },
  module: {
    rules: [...jsRules, ...styleRules, ...fileRules]
  },
  plugins: [...plugins],
  optimization
}