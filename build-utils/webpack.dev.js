const config = {
  mode: "development",
  output: {
    filename: "[hash].bundle.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};

module.exports = config;
