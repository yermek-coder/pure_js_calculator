const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: "./src/app/index.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js",
    clean: false,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
      title: "Development",
      template: "./src/public/index.html",
    }),
  ],
};

module.exports = config;
