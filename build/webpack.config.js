const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const {resolve} = require('./utils')
const plugins = require('./plugins')
const jsRules = require('./rules/jsRules')
const styleRules = require('./rules/styleRules')
const fileRules = require('./rules/fileRules')
const optimization = require('./optimization')

module.exports = {
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