const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PRODUCTION = 'production'


const config = {
  mode:"production",
  entry: [
    './index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../public/assets'),
    publicPath: '/assets/'
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader:"css-loader",
              options:{
              sourceMap: true,
              modules: false
            }
          },
          { loader: "sass-loader" },
          { loader: "postcss-loader" }
        ]
      }
    ]
  },
  optimization:{
    minimize: false
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(PRODUCTION)
    }),
    new MiniCssExtractPlugin({
      filename:"style.css"
    })
  ],
}

module.exports = merge(baseConfig, config)
