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
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.tsx?$/,
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
    extensions: ['.tsx', '.ts', '.js', 'jsx'],
  },
  module: loaders,
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(process.cwd(), "./public/index.html"),
      filename: path.join(process.cwd(), "./dist/index.html")
    }),
    new CleanWebpackPlugin(),
  ],
}

module.exports = () => {
  const dotenv = new Dotenv({
    path: path.resolve(process.cwd(), `config/${process.env.NODE_ENV}.env`),
  })
  config.plugins.push(dotenv)
  return config
}
