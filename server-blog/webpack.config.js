const path = require('path')
const nodeExternals = require('webpack-node-externals')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const webpackconfig = {
  target: 'node',
  mode: 'development',   // development | production
  entry: {
    server: path.join(__dirname, 'src/app.js')  // 入口文件
  },
  output: {
    filename: '[name].bundle.js',  // 输出文件名
    path: path.join(__dirname, 'dist'),  // 输出目录
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: [path.join(__dirname, 'node_modules')]
      }
    ]
  },
  externals: [nodeExternals()],  // 不打包node_modules中的模块
  plugins: [
    new CleanWebpackPlugin
  ],  // 插件
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true,
    __filename: true,
    __dirname: true,
    setImmediate: true,
    path: true
  }  // nodejs全局变量
}

module.exports = webpackconfig