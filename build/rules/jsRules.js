const {resolve} = require('./../utils')
const tsImportPluginFactory = require('ts-import-plugin')
module.exports = [
  {
    test: /\.ts(x?)$/,
    use: [
      {
        loader: 'awesome-typescript-loader',
        options: {
          transpileOnly: true,
          useCache: true,
          cacheDirectory: resolve('.cache-loader'),
          babelOptions: {
            babelrc: false,
            plugins: [
              'react-hot-loader/babel',
              ['import',[{
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: true
              }]]
            ]
          }
          // getCustomTransformers: () => ({
          //   before: [
          //     tsImportPluginFactory({
          //       libraryName: 'antd',
          //       libraryDirectory: 'lib',
          //       style: true
          //     })
          //   ]
          // })
        }
      }
    ]
  },
]