const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

const devConfig = merge(common, {
  entry: [
    'react-hot-loader/patch',
    path.join(process.cwd(), 'index.tsx'),
  ],
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(process.cwd(), 'dist'),
    }
  },
})

module.exports = (_, argv) => {
  if (argv.hot) {
    // Cannot use 'contenthash' when hot reloading is enabled.
    devConfig.output.filename = '[name].[hash].js';
  }

  return devConfig;
};
