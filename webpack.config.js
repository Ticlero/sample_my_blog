const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx", ".css"],
  },
  entry: {
    app: ["./src/index.jsx"],
  },
  devtool: "#source-map",
  module: {
    rules: [
      {
        test: /\.(jsx|js)/,
        use: "babel-loader",
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "node_modules")],
      },
      {
        test: /\.css/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
    sourceMapFilename: "[name].map",
  },
};
