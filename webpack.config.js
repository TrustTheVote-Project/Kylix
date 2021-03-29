/**
 * Use Webpack + Babel to bundle and transpile our JSX
 */

/* deslint-disable filenames/match-exported */

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const clientPort = process.env.WEB_PORT || 9000;
const serverPort = process.env.PORT || 5000;

const config = {
  entry: {
    app: './src/scripts/index.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: clientPort,
    historyApiFallback: true,
    proxy: {
      '/api/**': { target: `http://localhost:${serverPort}`, changeOrigin: true },
      '/api-docs/**': { target: `http://localhost:${serverPort}`, changeOrigin: true },
    },
  },
  output: {
    filename: '[name].bundle.js',
    // chunkFilename: "[id].bundle_[chunkhash].js",
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      // {
      //   test: /\.(pdf)(\?v=\d+\.\d+\.\d+)?$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]',
      //         outputPath: 'pdf/',
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.yml$/,
      //   use: [{ loader: 'json-loader' }, { loader: 'yaml-loader' }],
      // },
      // {
      //   test: /\.css$/,
      //   use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      // },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'index.html',
      filename: 'index.html',
      chunks: ['app'],
    }),
    new webpack.DefinePlugin({
      API_BASE: '/api',
    }),

    // new HtmlWebPackPlugin({
    //   template: 'src/api/api-browser.html',
    //   filename: 'api-browser.html',
    //   chunks: ['apiBrowser'],
    // }),
  ],
};

module.exports = config;
