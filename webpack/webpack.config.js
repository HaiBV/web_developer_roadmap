const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Output',
    }),
    new CleanWebpackPlugin(),
  //   new BrowserSyncPlugin({
  //     host: 'localhost',
  //     port: 3000,
  //     proxy: 'http://reactdev.loc'
  //  })
  ],
  entry: './src/app.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: './dist',
    open: true
  },
};
