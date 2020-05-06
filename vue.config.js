const path = require('path') // 引入path模块
function resolve(dir) {
  return path.join(__dirname, dir) // path.join(__dirname)设置绝对路径
}

const name = '点达协同'
console.log(process.env.outputDir);

module.exports = {
  lintOnSave: false, // 是否开启eslint
  outputDir: process.env.outputDir, // build输出目录
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/styles/them.less")]
    }
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src'),
        'views': resolve('src/views')
      }
    }
  },
  devServer: {
    open: true, // 是否自动弹出浏览器页面
    // host: 'localhost',
    port: '8081',
    https: false, // 是否使用https协议
    hotOnly: true, // 是否开启热更新
    proxy: null
  }
}
