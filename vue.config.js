const path = require('path')

module.exports = {
  pages: {
    element: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    },
    ant: {
      entry: 'src/main2.js',
      template: 'public/index.html',
      filename: 'ant.html'
    }
  },
  lintOnSave: false,
  // 全局less变量
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/assets/css/variables.less')]
    }
  },
  chainWebpack: config => {
    config.optimization.splitChunks({
      minSize: 1,
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          minChunks: 2,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    })
  }
}
