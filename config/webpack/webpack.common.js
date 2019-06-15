const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require('path')
const Dotenv = require('dotenv-webpack')

// Configure html-webpack-plugin.
const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: path.join(process.cwd(), "./public/index.html"),
  filename: path.join(process.cwd(), "./dist/index.html")
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
  entry: path.join(process.cwd(), './index.js'),
  output: {
    path: path.join(process.cwd(), 'dist'),
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
        test: /\.s?css$/,
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
    new Dotenv({
      path: path.resolve(process.cwd(), `config/${process.env.NODE_ENV}.env`),
    }),
  ],
  stats: statsConfig,
}