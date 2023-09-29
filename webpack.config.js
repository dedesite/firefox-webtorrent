const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    main: "./extension/firefox_webtorrent.tsx",
    background: "./extension/background/store.ts",
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
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      timers: require.resolve("timers-browserify"),
      dns: require.resolve("chrome-dns"),
      dgram: require.resolve("chrome-dgram"),
    },
  },
  output: {
    path: path.resolve(__dirname, "extension/out/"),
    filename: "[name].bundle.js",
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    })
  ],
  mode: "none",
  devtool: "source-map",
};
