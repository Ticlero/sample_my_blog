const path = require("path");

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
        use: ["css-loader", "style-loader"],
      },
    ],
  },
  plugins: [],

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
    sourceMapFilename: "[name].map",
  },
};
