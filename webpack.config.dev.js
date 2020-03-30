const webpackMerge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");

module.exports = webpackMerge(baseConfig, {
  mode: "development",
  devServer: {
    port: 9500
  },
  devtool: "source-map"
});
