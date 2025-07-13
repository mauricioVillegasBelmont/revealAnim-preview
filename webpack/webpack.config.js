const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  mode: "production",
  watch: false,
  watchOptions: {
    ignored: /node_modules/,
    poll: 500, // Check for changes every second
  },
  performance: {
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    // fallback: {
    //   util: require.resolve("util/"),
    // },
    plugins: [new TsconfigPathsPlugin()],
  },

  entry: {
    trivia: "./src/trivia.ts",
    registro: "./src/registro.ts",
    index: "./src/index.ts",
  },
  output: {
    path: path.resolve(__dirname, "../assets/"),
    filename: "js/[name].bundle.js",
    chunkFilename: "js/[name].bundle.[id].js",
  },
  externals: {
    jquery: "jquery",
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].bundle.css",
      chunkFilename: "css/[name].bundle.[id].css",
    }),
    new MomentLocalesPlugin(),
    new MomentLocalesPlugin({
      localesToKeep: ["es-us"],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
              // sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
              sourceMap: true,
              // sourceMapContents: false,
              sassOptions: {
                outputStyle: "compressed",
              },
            },
          },
        ],
      },
    ],
  },
};
