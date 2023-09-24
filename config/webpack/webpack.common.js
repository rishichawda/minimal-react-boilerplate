const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require('path')
const Dotenv = require('dotenv-webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { DEV } = process.env;
process.env.BABEL_ENV = DEV ? 'development' : 'production';
process.env.NODE_ENV = DEV ? 'development' : 'production';

const loaders = {
  rules: [
    {
      test: /\.js(x)?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.ts(x)?$/,
      exclude: /node_modules/,
      loader: 'ts-loader'
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
      type: 'asset',
    },
  ],
}

const config = {
  entry: {
    index: path.join(process.cwd(), 'index.tsx'),
  },
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].[contenthash].js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: loaders,
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(process.cwd(), "./public/index.html"),
      filename: "index.html"
    }),
    new Dotenv({
      path: path.resolve(process.cwd(), `config/${process.env.NODE_ENV}.env`),
    }),
    new CleanWebpackPlugin(),
  ]
}

module.exports = config