const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    main: "./extension/firefox_webtorrent.tsx",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.js?$/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,
        use: ["css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    fullySpecified: false,
  },
  output: {
    path: path.resolve(__dirname, "extension/out/"),
    filename: "bundle.js",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": "{}",
    }),
  ],
  mode: "none",
  devtool: "source-map",
};
