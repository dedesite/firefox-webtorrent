const path = require("path");

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
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "extension/out/"),
    filename: "bundle.js",
  },
  mode: "none",
};
