const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");

const config = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CompressionWebpackPlugin({
      algorithm: "gzip",
      test: /\.(js|html|css)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
  /*
  //  Not working
  optimization: {
    minimizer: [new UglifyJsPlugin({ sourceMap: true })]
  }
  */
};

module.exports = config;
