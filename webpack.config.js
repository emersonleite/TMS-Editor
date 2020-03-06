const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    script: [/* '@babel/polyfill', 'whatwg-fetch',  */"./webpack/script.js"],
  },
  output: {
    path: path.resolve(__dirname, "./js"),
    filename: "[name].js"
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};