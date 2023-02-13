const path = require("path");

module.exports = {
  resolve: { fallback: { http: false } },
  entry: "./src/index.js",
  target: "node",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
