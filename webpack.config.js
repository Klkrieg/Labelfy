const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
// const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [new webpack.HotModuleReplacementPlugin()],
  // devTool: 'eval',
  entry: path.resolve(__dirname, 'src/index.js'),
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  target: 'node',
  devServer: {
    port: 3000,
    open: true,
    //hot: true,
    contentBase: path.join(__dirname, 'public'),
    // proxy: {
    //   '/api': 'http://localhost:8080',
    // },
  },
  // node: {
  //   // Need this when working with express, otherwise the build fails
  //   __dirname: false, // if you don't put this is, __dirname
  //   __filename: false, // and __filename return blank or /
  // },
  // externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: 'defaults',
                  },
                ],
                '@babel/preset-react',
              ],
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }],
      },
    ],
  },
  // plugins: [
  //   new HtmlWebPackPlugin({
  //     template: './src/index.html',
  //     filename: './public/index.html',
  //     excludeChunks: ['server'],
  //   }),
  // ],
};
