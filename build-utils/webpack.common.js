const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const URLLoader = require("url-loader");

const commonPaths = require("./common-paths");

const config = {
  mode: "development",
  entry: commonPaths.entry,
  output: {
    filename: "[chunkhash].bundle.js",
    path: commonPaths.output.path
  },
  module: {
    rules: [
      {
        test: /\.png$/,
        use: [{ loader: "url-loader", options: { limit: 10000 } }]
      }
    ]
  },
  plugins: [new webpack.ProgressPlugin(), new HtmlWebpackPlugin()]
};

module.exports = config;
