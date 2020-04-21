const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const stats = process.env.npm_config_stats;

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "main.[hash].js", // use hash only in prod
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    }),
    ...(stats ? [new BundleAnalyzerPlugin()] : [])
  ]
});