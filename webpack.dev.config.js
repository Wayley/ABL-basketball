const path = require('path');
// const webpack = require('webpack');//不使用命令行得--hot时候可以在这引入并配置

module.exports = {
  /*入口*/
  entry: [
    'react-hot-loader/patch',//react热更新不改变state的插件
    path.join(__dirname, 'src/index.js')
  ],

  /*输出到dist文件夹，输出文件名字为bundle.js*/
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
  /*cacheDirectory是用来缓存编译结果，下次编译加速*/
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,//小于等于8K的图片会被转成base64编码,减少http(s)请求
          }
        }]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: '127.0.0.1',
    // hot:true,//不使用命令行得--hot时候可以在这引入并配置
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),//不使用命令行得--hot时候可以在这引入并配置
  ],
  resolve: {
    // 别名
    alias: {
      Views: path.join(__dirname, 'src/views'),
      Component: path.join(__dirname, 'src/component'),
      Router: path.join(__dirname, 'src/router'),
      Actions: path.join(__dirname, 'src/redux/actions'),
      Reducers: path.join(__dirname, 'src/redux/reducers'),
    }
  },
  devtool: 'inline-source-map',
};