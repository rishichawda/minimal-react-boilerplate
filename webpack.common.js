const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require('path')

// Configure html-webpack-plugin.
const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, "./public/index.html"),
  filename: path.join(__dirname, "./dist/index.html")
})

// Configure status logs while build.
const statsConfig = {    
  colors: true,
  hash: true,
  timings: true,
  assets: true,
  chunks: true,
  chunkModules: true,
  modules: true,
  children: true,
}

module.exports = {
  entry: path.join(__dirname, './index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
      },
      {
        test: /.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        use: 'url-loader',
      },
    ],
  },
  plugins: [
    htmlWebpackPlugin,
  ],
  stats: statsConfig,
}